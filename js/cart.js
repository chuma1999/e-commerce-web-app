let removeCartItemButtons = document.getElementsByClassName('btn-danger');
for (let i = 0; i < removeCartItemButtons.length; i++) {
    let button = removeCartItemButtons[i]
    button.addEventListener('click', removeCartItem)
}

let quantityInputs = document.getElementsByClassName('quantity')
for (let i = 0; i < quantityInputs.length; i++) {
    let input = quantityInputs[i]
    input.addEventListener('change', quantityChanged)
}

let addToCartButtons = document.getElementsByClassName('plus')
for (let i = 0; i < addToCartButtons.length; i++) {
    let button = addToCartButtons[i]
    button.addEventListener('click', addToCartClicked)
}

document.getElementsByClassName('purchase')[0].addEventListener('click', purchaseClicked)

function purchaseClicked() {
    alert('Thank you for your purchase')
    let cartItems = document.getElementsByClassName('cart-row')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    let buttonClicked = event.target
    buttonClicked.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    let input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    let button = event.target
    let shopItem = button.parentElement.parentElement
    let title = shopItem.getElementsByClassName('hed')[0].innerText
    let price = shopItem.getElementsByClassName('prize')[0].innerText
    let imageSrc = shopItem.getElementsByClassName('item-image')[0].src

    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
    let cartRow = document.createElement('div')
    cartRow.classList.add('single-product-info')
    let cartItems = document.getElementsByClassName('cart-row')[0]
    let cartItemNames = cartItems.getElementsByClassName('nem')
    for (let i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added ti the cart')
            return
        }
    }

    let cartRowContents = ` <img src="${imageSrc}" alt="">

    <p class="nem">
        ${title}
    </p>

    <p class="prizee">
        ${price}
    </p>

    <input type="number" class="quantity" name="quantity" value="1" min="0" max="8">

    <button class="remove btn-danger">REMOVE</button>`

    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('quantity')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    let cartItemContainer = document.getElementsByClassName('cart-row')[0]
    let cartRows = cartItemContainer.getElementsByClassName('single-product-info')
    let total = 0

    for (let i = 0; i < cartRows.length; i++) {
        let cartRow = cartRows[i]
        let priceElement = cartRow.getElementsByClassName('prizee')[0]
        let quantityElement = cartRow.getElementsByClassName('quantity')[0]
        let price = parseFloat(priceElement.innerText.replace('$', ''))
        let quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('amnt')[0].innerText = '$' + total
}
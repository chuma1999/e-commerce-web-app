let shoppingBag = document.querySelector('.shop-bag');
let shoppingCartList = document.querySelector('.cart_container');



shoppingBag.addEventListener('click', closeOpenCart);

function closeOpenCart() {
    shoppingCartList.classList.toggle('show');
};


let selectSize = document.getElementsByClassName('.size-39');
let shoeNumber = document.getElementsByClassName('.nmbrs');
let buttonSize = document.querySelectorAll('.size-39');


for (let i = 0; i < buttonSize.length; i++) {
    buttonSize[i].addEventListener('click', function() {
        this.classList.toggle('shoe-select');
    })
}
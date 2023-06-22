let openBtn = document.querySelector('.mobile__openMenuBtn');

let closeBtn = document.querySelector('.closeBtn__container')

let movingMenu = document.querySelector('.movingMenuContainer');

openBtn.addEventListener('click', () => {
    movingMenu.style.left = 0;
})

closeBtn.addEventListener('click', () => {
    movingMenu.style.left = '100%'
})
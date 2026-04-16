let menu = document.querySelector('#menu')
let menu_bar = document.querySelector('.menu_bar')
console.log(menu)
menu.addEventListener('click', () => {
    menu_bar.classList.toggle('active')
    if (menu_bar.classList == 'menu_bar active') {
        menu.innerHTML = '<i id="x" class="ri-close-large-line"></i>'
    } else {
        menu.innerHTML = '<i id="burger" class="ri-menu-line"></i>'
    }
})

console.log(menu.innerHTML)
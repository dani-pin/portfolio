const navHamburger = document.querySelector('.nav-hamburger')
const navClose = document.querySelector('.nav-close')
const navLinks = document.querySelector('.nav-links')

navHamburger.addEventListener('click', () => {
    navLinks.classList.add('show')
    document.body.classList.add('overflow-hidden')
})

navClose.addEventListener('click', () => {
    navLinks.classList.remove('show')
    document.body.classList.remove('overflow-hidden')
})

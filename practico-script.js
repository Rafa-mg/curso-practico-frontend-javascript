const navbarEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const burguerMenu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const shoppingCart = document.querySelector('.navbar-shopping-cart')
const asideCartMenu = document.querySelector('.product-detail')


navbarEmail.addEventListener('click', toggleDeskopMobileMenuClass)

burguerMenu.addEventListener('click', toggleDeskopMobileMenuClass)

shoppingCart.addEventListener('click', toggleShoppingCart)

function toggleDeskopMobileMenuClass() {
    const isOrderClosed = asideCartMenu.classList.contains('inactive')
    const isDesktopClosed = desktopMenu.classList.contains('inactive')

    desktopMenu.classList.toggle('inactive')
    mobileMenu.classList.toggle('inactive')

    if (!isOrderClosed) {
        asideCartMenu.classList.add('inactive')
    }

    if (!isDesktopClosed) {
        desktopMenu.classList.add('inactive')
    }

}

function toggleShoppingCart () {
    const isAsideClosed = mobileMenu.classList.contains('inactive')
    const isDesktopClosed = desktopMenu.classList.contains('inactive')

    asideCartMenu.classList.toggle('inactive')

    if (!isAsideClosed) {
        mobileMenu.classList.add('inactive')
    }
    if (!isDesktopClosed) {
        desktopMenu.classList.add('inactive')
    }
}

//Prueba de comprension de la clase

/*
const btn1 = document.querySelector('#botn1')
const btn2 = document.querySelector('#botn2')
const panel1 = document.querySelector('.lista1')
const panel2 = document.querySelector('.lista2')

btn1.addEventListener('click', aparecerPanel1)
btn2.addEventListener('click', aparecerPanel2)

function aparecerPanel1 () {
const isPanel2Closed = panel2.classList.contains('inactive')

    panel1.classList.toggle('inactive')

    if (!isPanel2Closed) {
        panel2.classList.add('inactive')
    }
}

function aparecerPanel2 () {
    const isPanel1Closed = panel1.classList.contains('inactive')

    panel2.classList.toggle('inactive')

    if (!isPanel1Closed) {
        panel1.classList.add('inactive')
    }
}*/
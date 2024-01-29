const navbarEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const burguerMenu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const shoppingCart = document.querySelector('.navbar-shopping-cart')
const asideCartMenu = document.querySelector('.product-detail')
const cardsContainer = document.querySelector('.cards-container')
const mainContainer = document.querySelector('.main-container')


/////////////////////////////////////////////////////////////////////
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

//Cards container

/* 
<div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div>
*/

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Mouse',
    price: 10,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Laptop',
    price: 720,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Parlante',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Guitarra',
    price: 400,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Amplificador',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

function renderizarImagenes (array) {
    for (product of productList) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image)
        productImg.setAttribute('alt', 'imagen del producto')
    
        productCard.appendChild(productImg)
    
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info');
    
    
        const detailedInfo = document.createElement('div')
    
        const productPrice = document.createElement('p');
        productPrice.innerText ='$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        detailedInfo.append(productPrice, productName)
    
        const productFigure = document.createElement('figure')
    
        const addToCartImg = document.createElement('img')
        addToCartImg.setAttribute('src', './icons/bt_add_to_cart.svg')
        
        productFigure.appendChild(addToCartImg)
    
        productInfo.appendChild(detailedInfo)
        productInfo.appendChild(productFigure)
    
        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)
    
        cardsContainer.appendChild(productCard)
    }
}

renderizarImagenes(productList)

//con la funcion que creamos, lo que logramos es organizar nuestro codigo para hacerlo escalable, es decir que, si necetiamos en un futuro reutilizar codigo para crear nuevos elementos en nuestro proyecto podamos hacerlo de forma facil. En este caso lo que hacemos puntualmente es crear una funcion para poder luego ejecutarla y crear este tipo de lista de imgenes en otro momento solamente con llamar la funcion y dandole como parametro el array que queramos utilizar
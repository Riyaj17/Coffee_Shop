let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active'); //for showing the navbar all elements by using onclick mode in menu button

    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => { 
    searchForm.classList.toggle('active'); 

    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () => {  // onclick the cart button access all the items from the cart iteem container
    cartItem.classList.toggle('active'); 

    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
    // these are basically when one function is visible that time another botton will click then previous items are gone ,,, present click items will present
}

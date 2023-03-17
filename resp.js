
burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
items = document.querySelector('.items')
logo = document.querySelector('.logo')

burger.addEventListener('click',()=>{
    items.classList.toggle('v-class');
    logo.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
})
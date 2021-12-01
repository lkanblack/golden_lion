let sign_btn = document.querySelector('.sign-up');
let sign_popup = document.querySelector('.sign-popup');
let sign_close = document.querySelector('.close-sign');
let login_btn = document.querySelector('.login');
let login_popup = document.querySelector('.login-popup');
let login_close = document.querySelector('.close-login');
let burger_btn = document.querySelector('.burger-menu');
let burger_list = document.querySelector('.burger-list');


sign_btn.addEventListener('click', function() {
    sign_popup.classList.toggle('active-block');
})
sign_close.addEventListener('click', function(){
    sign_popup.classList.toggle('active-block');
})
login_btn.addEventListener('click', function(){
    login_popup.classList.toggle('active-flex');
})
login_close.addEventListener('click', function(){
    login_popup.classList.toggle('active-flex');
})


burger_btn.addEventListener('click', function(){
    burger_list.classList.toggle('active-flex');
    let links = burger_list.querySelectorAll('a');
    let btns = burger_list.querySelectorAll('button');
    for(let link of links){
        link.addEventListener('click', function(){
            burger_list.classList.remove('active-flex');
        })
    }
    for(let btn of btns){
        btn.addEventListener('click', function(){
            burger_list.classList.remove('active-flex');
        })
    }
})
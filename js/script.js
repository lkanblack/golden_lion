let sign_btn = document.querySelector('.sign-up');
let sign_popup = document.querySelector('.sign-popup');
let sign_close = document.querySelector('.close-sign');
let login_btn = document.querySelector('.login');
let login_popup = document.querySelector('.login-popup');
let login_close = document.querySelector('.close-login');

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

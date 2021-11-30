let sign_btn = document.querySelector('.sign-up');
let sign_popup = document.querySelector('.sign-popup');
let sign_close = document.querySelector('.close-sign');

console.log(sign_btn);

sign_btn.addEventListener('click', function() {
    sign_popup.classList.toggle('active-block');
})
sign_close.addEventListener('click', function(){
    sign_popup.classList.toggle('active-block');
})
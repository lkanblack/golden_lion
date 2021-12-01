let sign_btns = document.querySelectorAll('.sign-up');
let sign_popup = document.querySelector('.sign-popup');
let sign_close = document.querySelector('.close-sign');
let login_btns = document.querySelectorAll('.login');
let login_popup = document.querySelector('.login-popup');
let login_close = document.querySelector('.close-login');
let burger_btn = document.querySelector('.burger-menu');
let burger_list = document.querySelector('.burger-list');


for (let btn of sign_btns){
    btn.addEventListener('click', function(){
        sign_popup.classList.toggle('active-block');
    });
}

for (let btn of login_btns){
    btn.addEventListener('click', function(){
        login_popup.classList.toggle('active-flex');
    });
}


sign_close.addEventListener('click', function(){
    sign_popup.classList.toggle('active-block');
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


// LOGIN VALUES CHECK
let btn = document.querySelector('#login-btn')
let email = document.querySelector('#email');
let pass = document.querySelector('#pass');


btn.addEventListener('click', function(){
    if(email.value == '' || pass.value == ''){
        email.parentElement.classList.add('red-alert');
        pass.parentElement.classList.add('red-alert');
    }
});
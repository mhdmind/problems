'use strict' ; 


const btn = document.querySelector('.btn');
const clickFunc = function(){
    document.body.style.backgroundColor = '#333';
    document.body.style.color = 'white';
}

btn.addEventListener('click',clickFunc)



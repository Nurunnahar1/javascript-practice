const button = document.querySelector('.box .click');
const heading = document.querySelector('.box .heading');
const body = document.querySelector('body');

function buttonClick() {
    //  heading.innerHTML = "Hello Everyone"
    body.style.backgroundColor ="red";
}
 
button.addEventListener('click', buttonClick);

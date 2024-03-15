const button = document.querySelector('.box .click');
const heading = document.querySelector('.box .heading');

button.addEventListener('click', () => {
    heading.innerHTML = "Hello"
})


// const button = document.getElementsByClassName("click")[0]; // Selecting the first element with class 'click'
// const heading = document.getElementsByClassName("heading")[0]; // Selecting the first element with class 'heading'

// button.addEventListener("click", () => {
//   heading.innerHTML = "Hello";
// });

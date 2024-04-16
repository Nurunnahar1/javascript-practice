const button = document.querySelector('.box button');
const heading = document.querySelector('.box h2');

button.onclick = (e) => {
    e.preventDefault();

    heading.innerHTML = "Hello Nasrin....."
    
 }
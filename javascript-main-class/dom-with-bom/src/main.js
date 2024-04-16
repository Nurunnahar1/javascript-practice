 const button = document.querySelector('.box button');
const heading = document.querySelector('.box h2');
 
button.onclick = (e) => {
    setTimeout(() => {
        heading.innerHTML = "Hello........"

    },1000);
 }
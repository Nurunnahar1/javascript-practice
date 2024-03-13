const input = document.querySelector('input');
 
input.addEventListener('keypress', () => {
    // console.log(input.value);
    document.querySelector(".box h1").innerHTML = input.value;
})


 const startButton = document.querySelector('.box .start');
 const stopButton = document.querySelector('.box .stop');
const heading = document.querySelector('.box h2');

let kaj;
 
startButton.onclick = (e) => {
 kaj = setTimeout(() => {
    heading.innerHTML = "Hello........";
  }, 1000);
};
stopButton.onclick = (e) => {
    clearTimeout(kaj);
    heading.innerHTML = "Stop........";
};
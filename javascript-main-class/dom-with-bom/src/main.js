const startButton = document.querySelector(".box .start");
const stopButton = document.querySelector(".box .stop");
const heading = document.querySelector(".box h2");

let kaj;
let count = 0;

// startButton.onclick = (e) => {
//     // kaj = setTimeout(() => {
//     kaj = setInterval(() => {
//         heading.innerHTML += count;
//         count++;
//      },1000);
// }


startButton.onclick = (e) => { 
    kaj = setInterval(() => {

        if (count >= 5) {
            clearInterval(kaj);
            heading.innerHTML = "0";
        }
        heading.innerHTML = count;
        count++;
     },1000);
}
 
stopButton.onclick = () => {
    clearTimeout(kaj);
    heading.innerHTML = "Stop.....";
 }
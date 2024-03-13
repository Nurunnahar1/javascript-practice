// console.log(document.querySelector("ul"));
// console.log(document.querySelector("ul").children);

// const child = document.querySelector("ul");
// console.log(child.firstElementChild);
// console.log(child.lastElementChild);

const child = document.querySelector(".box p:nth-child(4)");
console.log(child.parentElement);


child.style.backgroundColor = "red";
child.nextElementSibling.style.backgroundColor = "green";
child.previousElementSibling.style.backgroundColor = "purple";
child.parentElement.style.backgroundColor = "blue";

// console.log(child.firstElementChild.nextElementSibling);

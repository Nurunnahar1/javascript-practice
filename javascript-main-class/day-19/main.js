const lists = document.querySelectorAll(".box ul li");

const colors = ["red", "green",   "yellow", "tomato"];
 
lists.forEach((item, index) => {
    item.onclick = (e) => {
        // e.target.style.backgroundColor = "orange";
        e.target.style.backgroundColor = colors[index];
    }
})
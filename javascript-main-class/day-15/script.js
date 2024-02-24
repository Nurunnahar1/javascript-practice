let devs = [
  {
    name: "Nasrin",
    age: 28,
    skill: "Laravel Developer",
  },
  {
    name: "Moriom",
    age: 15,
    skill: "Frontend Developer",
  },
  {
    name: "Nuha",
    age: 10,
    skill: "Laravel Developer",
  },
  {
    name: "Muskan",
    age: 45,
    skill: "Backend Developer",
  },
  {
    name: "Shultana",
    age: 28,
    skill: "MERN  ",
  },
];
 

// console.log(JSON.stringify(devs));
 localStorage.setItem("devs", JSON.stringify(devs));
 console.log(devs)


let dev = localStorage.getItem("devs");
// console.log(dev);
console.log(JSON.parse(dev));
 
 

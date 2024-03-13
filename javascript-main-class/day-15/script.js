 

const dev = [
  {
    name: "Nasrin",
    age: 28,
    skill: "Laravel Developer",
  },
  {
    name: "Nusrat",
    age: 28,
    skill: "Laravel Developer",
  },
  {
    name: "Nuha",
    age: 28,
    skill: "Laravel Developer",
  },
  {
    name: "Nahid",
    age: 28,
    skill: "Laravel Developer",
  },
];
 


dev.push({
    name: "Noman",
    age: 23,
    skill: "Instructor"
}); 
localStorage.setItem("addDev", JSON.stringify(dev));
console.log(dev);
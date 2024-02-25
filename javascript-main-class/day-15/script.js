const devs = [
  {
    name: "Nasrin",
    age: 28,
    skill: "Laravel Developer",
  },
  {
    name: "Nurunnahar",
    age: 50,
    skill: "IOS Developer",
  },
  {
    name: "Moriom",
    age: 11,
    skill: "Laravel Developer",
  },
  {
    name: "Nuha",
    age: 28,
    skill: "IOS Developer",
  },
];

// localStorage.setItem("devs", JSON.stringify(devs));
let dev = localStorage.getItem("devs");         

let devData = JSON.parse(dev);
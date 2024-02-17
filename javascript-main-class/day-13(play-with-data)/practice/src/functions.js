const devs = [
  {
    name: "Nasrin",
    age: 20,
    hobby: ["gardening", "reading", "writing"],
  },
];

devs.forEach((item) => {
  const name = item.name;
  const hobby = item.hobby[0]; 

  console.log(`Hello ${name}, your hobby is ${hobby}.`);
});

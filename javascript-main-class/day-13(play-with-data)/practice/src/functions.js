// const devs = [
//   {
//     name: "Nasrin",
//     age: 20,
//     hobby: ["gardening", "reading", "writing"],
//   },
// ];

// devs.forEach((item) => {
//   const name = item.name;
//   const hobby = item.hobby[0];

//   console.log(`Hello ${name}, your hobby is ${hobby}.`);
// });

//===========================================================
// const food = ['rice', 'fruit', 'fish', 'orange', 'apple'];
// const [a, b, c, d, e] = food;
// console.log(d, e);

//===========================================================
// const fruits = ['Orange', 'Banana', 'Apple', 'Pineapple', 'Strawberry'];
// const flowers = ['Rose', 'Chinarose','Waterlily', 'Bela', 'Lotus'];

// const spreadFruitAndFlower = [...fruits, ...flowers]
// console.log(spreadFruitAndFlower);





//===========================================================
    // const fruits = ["Orange", "Banana", "Apple", "Pineapple", "Strawberry"];
    // const flowers = ["Rose", "Chinarose", "Waterlily", "Bela", "Lotus"];

    // const newArray = [...fruits, ...flowers.filter((data) => data != "Lotus")];
// console.log(newArray);
    




//===========================================================
 const fruits = ["Orange", "Banana", "Apple", "Pineapple", "Strawberry"];
 const flowers = ["Rose", "Chinarose", "Waterlily", "Bela", "Lotus"];

const newArray = [
  ...fruits.slice(1, 4),
  ...flowers.filter((data) => data !== "Lotus"),
];
 console.log(newArray);
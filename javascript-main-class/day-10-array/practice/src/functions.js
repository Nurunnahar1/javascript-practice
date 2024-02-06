// const food = ["potato", "brinjal", "pumpkin", "cucumber"];
// const fruits = ["Apple", "Orange", "Pineapple", "Jackfruit"];

// for (let i = food.length - 1; i >= 0; i--){
//   console.log(food[i]);
// }

// console.log(food.concat(fruits));

// console.log(Array.isArray(food));

//=================================
const food = ["potato", "brinjal", "pumpkin", "cucumber"];
const foodSlice = food.slice(0, 1);
const foodSlice1 = food.slice(3, 4);

// const foodAndFoodSlice = foodSlice.concat(foodSlice1);
console.log(foodSlice.concat(foodSlice1));

const foodSplice = food.splice(1, 2);
console.log(foodSplice);
console.log(food);

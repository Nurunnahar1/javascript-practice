//how nto find duplicate numbers

const numbers = [1, 4, 9, 5, 3, 6, 7, 8, 4, 5,1];

const duplicate = numbers.filter(function (value, index, array) {
  // return array.indexOf(value) !== -1;
  return array.indexOf(value) !== 1;
});

console.log(duplicate);

/**
 * age calculation
 * @param {*} name
 * @param {*} year
 */

function ageCal(name, year) {
  let age = 2024 - year;

  return `Hello ${name}, Your are ${age} years old`;
};



let ageCal2 = function (name, year) {
    let age = 2024 - year;
    
    return `Hello ${name}, Your are ${age} years old`;
};




let ageCal3 = (name, year) => {
    let age = 2024 - year;
    return `Hello ${name}, Your are ${age} years old`;
}
 
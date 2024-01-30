function info(name) {
  console.log(`Hello, This is ${name}........`);
}

/**
 * agr calculates
 * @param {*} name
 * @param {*} year
 */
function dev(name, year) {
  let age = 2024 - year;
  console.log(
    `Hello, This is ${name}........ and i am ${age} years old........`
  );
}

/**
 * marriage age calculation
 * @param {*} name
 * @param {*} year
 * @param {*} gender
 */

function marriageCalculator(name, year, gender = "male") {
  let age = 2024 - year;
  let marriageAge = 21;

  if (gender === "female") {
    marriageAge = 18;
  }
  if (age >= marriageAge) {
    console.log(
      `Hello ${name} , You are ${age} years old and you will get marry......`
    );
  } else {
    console.log(
      `Hello ${name} , You are ${age} years old and you will not  get marry now. You will get marry after ${
        marriageAge - age
      } years later.....`
    );
  }
}

/**
 * currency converter
 * @param {*} amount 
 * @param {*} currencyType 
 */

function currencyConverter(amount, currencyType = "dollar") { 
    let rate;
    switch (currencyType) {
      case "dollar":
        rate = 109;
        break;
      case "euro":
        rate = 120;
        break;
      case "won":
        rate = 0.082;
        break;
      default:
        rate = 109;
        break;
    }

    console.log(`
        ${amount} ${currencyType} = ${amount * rate} Taka
    `)
}
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
 


/**
 * currency converter
 * @param {*} amount 
 * @param {*} currencyType 
 */

let currencyConverter = (amount , currencyType= 'dollar') => {
    let rate;

    switch (currencyType) {
        case 'dollar':
            rate = 109;
            break;
        case 'euro':
            rate = 119;
            break;
        case 'pound':
            rate = 139;
            break;
        case 'won':
            rate = 0.08;
            break;
        case 'rupe':
            rate = 1.32;
            break;
        default:
            rate = 109;
            break;
        
    }

    let bdt = amount * rate;
    return bdt;
}



let hello = (name) => `Hello ${name},Welcome to our platform`;
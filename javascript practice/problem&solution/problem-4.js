//find leapyear

function isLeapYear(year) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    console.log(`${year} is leap year !`);
  } else {
    console.log(`${year} is not leap year`);
  }
}
isLeapYear(2021);

//Roll number shor

const rollNum = [10, 1, 5, 8, 9, 4, 6, 2, 7, 3];
console.log(rollNum.sort(function (a, b) {
    return a - b;
}));



const rollNumDec = [10, 1, 5, 8, 9, 4, 6, 2, 7, 3];
console.log(rollNum.sort(function (a, b) {
    return b-a;
}));
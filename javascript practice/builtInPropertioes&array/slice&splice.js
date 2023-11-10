const array = [2,3,4,5,6]


console.log(array.slice())  //[ 2, 3, 4, 5, 6 ]
console.log(array.slice(0,1))  //[ 2 ]
console.log(array.slice(1))  //[ 2 ]
console.log(array.slice(-1))  //[ 2 ]
console.log(array.slice(-3,-1))  //[ 2 ]


console.log(array.splice(1,3))  //[ 2 ]
console.log(array).splice[1,'Hello']  //[ 2 ]
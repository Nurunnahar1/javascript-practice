//===================1=================

let nasrin = "I am Nasrin";
let muskan = nasrin.replace("Nasrin", "Muskan");
console.log(muskan);

//===================2=================
let text1 = "Good";
let text2 = "Job";
let text3 = text1.concat(" ", text2);
console.log(text3);

//===================3=================

let a = "          Bangladesh           ";
let c = a.trim();
console.log(c);

//===================4=================
let x = "Hello world";
console.log(x.split(","));
console.log(x.split(" "));
console.log(x.split(""));

//===================5=================
// let str = "I live in Bangladesh";
// console.log(str.indexOf("B"));   //when i search word or litter

// let str = "I live in Bangladesh";
// console.log(str.search("B")); //when i search word or litter

let str = "I live in Bangladesh";
console.log(str.match("i")); //when i search word or litter

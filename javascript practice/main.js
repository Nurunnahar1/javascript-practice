//1...*************************************** */
// function printProfile(){
//     console.log("My name is Nasrin");
//     console.log("I am 28 years old");
//     console.log("I am software Developer ");
//     console.log("I love coding and programming");
// }

// function multiply(){
//     console.log(5+10);
// }
// multiply()
//2...*************************************** */

// function square(number){
//     console.log(number*number);
// }
// square(5);

// function area(length,width){
//     console.log(length*width);
// }
// area(5,9);

// function Plus(number1,number2){
//     console.log(number1+number2);
// }
// Plus(5,9);
//3...*************************************** */

// function plus(number1,number2,number3){
//     return number1+number2+number3;
// }
//  const result= plus(1,2,3);
// console.log(result+10+25);

// function printProfile(name, age, profession, hobby) {
//   const profile = `My name is ${name}. I am ${age} years old. I am ${profession}. I love ${hobby}`;

//   return profile;
// }
// console.log(printProfile("Nasrin", 28, "Software Developer", "coding"));
// console.log(printProfile("Muskan", 28, "Designar", "teaching"));

//3...*************************************** */

// const profile={
//     name: "Nasrin",
//     age: 28,
//     fullName:function() {
//         return this.name + " " + this.age
//     }
// }
// console.log(profile.name);
// console.log(profile.fullName());

//3...*************************************** */

// function greet(name){
//     console.log("Hello "+ name);
// }
// greet("World");

// const name="John Doe";

// greet(name);

// const sum =(n)=>{
//     return n.reduce((0,n)=>0+n);
// }

//3...*****************loop********************** */
let count = 0;
// while(count < 7){
//     console.log(`I am Nasrin ${count+1}`);
//     count++
// }

// while(count < 7){
//     $realCount = count +1
//     console.log(`I am Nasrin ${$realCount} ${$realCount < 2 ? 'time' : 'times'}`)
//     count++
// }

//3...*****************for loop********************** */

// for(let i=0; i <10; i++){
//     console.log(i);
// }
//3...*********even********reverse loop********************** */

// for(let i=0; i <10; i+=2){
//     console.log(i);
// }

//*********odd********reverse loop********************** */
// for(let i=0; i <20; i+=(2+1)){
//     console.log(i);
// }

//*****************reverse loop********************** */
// for(let i=10; i >=0; i--){
//     console.log(i);
// }

// let i = 10
// while(i>=0){
//     console.log(i);
//     i--
// }

//************************breake continue*********************************
// for(let i=0; i  < 10; i++){
//     // if(i ===5){
//     //     continue
//     // }
//     // console.log(i);  //output 0 1 2 3 4 6 7 8 9  skip 5
//     if(i ===5){
//         break
//     }
//     console.log(i);  //output 0 1 2 3 4  stop

// }
//****************************nested loop************************************* */
// for(let i = 0; i<3; i++){
//     // console.log(i)

//     for(let j= 0; j<3 ; j++){
//         console.log(i, j)
//     }
// }

//*************************iterating string********************************* */

// const str= 'Nasrin'
// for(let i=0; i< str.length; i++){
//     console.log(i);
//     // console.log(str[i]);
// }

//*************************looping array********************************* */

// const profile = ["Nasrin", "28", "Developer"];
// for (let i = 0; i < profile.length; i++) {
//   console.log(i);
//   console.log(profile[i]);
// }

//special way
// const profile = {
//   name: "Nasrin",
//   age: "28",
//   profession: "Developer",
// };
// // console.log(profile['name']);

// for (let key in profile) {
//   // console.log(key);
// //   console.log(profile[key]);
//   console.log(profile.name);
// }

// //for of loop
// const profile = ['Nasrin', '28', 'Developer']
// let randStr = 'Nasrin'
// for(let element of profile) {
//     console.log(element)
// }

//****************************string************************************* */

// const str = "Hello dear";
// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.indexOf("d"));
// console.log(str.lastIndexOf("d"));

// const trimStr = str.trim();
// console.log(trimStr.length);

// console.log(str.includes("d"));
// console.log(str.startsWith("He"));
// console.log(str.endsWith("dear"));

//****************************slice ************************************* */
// const str = 'Hello dear'

// console.log(str.slice(0,5))
// console.log(str.slice(6,9))
// console.log(str.slice(6))
// console.log(str.slice(-6))
// console.log(str.slice())

//substring
// const str = 'Hello dear'
// console.log(str.substring(0,5))
// console.log(str.substring(6,8))
// console.log(str.substring(-6,8))

//****************************split ************************************* */
// const str = 'Hello dear'
// console.log(str.split(' '))
// console.log(str.concat(' I ', 'am Nasrin'))

//****************************number ************************************* */
// console.log(typeof 10 )
// console.log(typeof -10 )
// console.log(typeof -10.254 )
// console.log(Number('10'))
// console.log(Number('fsdf'))
// console.log(typeof NaN)
// console.log(parseInt("dsfsd24154"));
// console.log(parseInt("24154fgdg"));
// console.log(parseInt("2415", 10)); //decimal
// console.log(parseInt("2415", 2)); //binary
// console.log(parseInt("10", 2)); //binary
// console.log(parseInt("2415", 8)); //octal

// console.log(parseFloat("2.5"));

// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);

// const num = 3.1416;
// console.log(num.toFixed(3));
// console.log(num.toFixed());

//****************************NaN(Not a number) ************************************* */

// console.log(NaN === NaN);
// console.log(1 === 1);

// console.log(isNaN(5));
// console.log(isNaN("454dfds"));

// console.log(Number(5));
// console.log(Number(true));
// console.log(Number(false));

// console.log(Number.isNaN(NaN));
// console.log(Number.isNaN(true));
// console.log(Number.isNaN(false));
// console.log(Number.isNaN('55dsfds'));

//****************************NaN(Not a number) ************************************* */

const array = [1, 2, 3, 4, 5]

console.log(array.length)
console.log(array[2])

//adding element at the end of the array
array.push(10)
console.log(array)

//remove elemenr at the end of the array
array.pop(10)
console.log(array)

//adding element at the beginning of the array
array.unshift(10)
console.log(array)


//removing element at the beginning of the array
array.shift(10)
console.log(array)



console.log(array[array.length - 2])
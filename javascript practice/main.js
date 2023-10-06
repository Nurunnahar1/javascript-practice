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
let count = 0
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

const str= 'Nasrin'
for(let i=0; i< str.length; i++){
    console.log(i);
    // console.log(str[i]);
}
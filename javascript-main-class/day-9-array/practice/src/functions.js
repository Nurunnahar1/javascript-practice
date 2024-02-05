const name = ["AAA", "BBB", "CCC", "DDD", "EEE", "FFF", "GGG"];
const age = [8, 9, 5, 22, 30, 70, 80];
const location = [
  "Dhaka",
  "Rajshahi",
  "Rangpur",
  "Rajshahi",
  "Dhaka",
  "Mymansing",
  "Sherpur",
];

 



for (let i = 0; i < name.length; i++) { 
  if (location[i] == "Rajshahi") {
     console.log(`Hello ${name[i]}, You live in Rajshahi `);
   }
}
 
 
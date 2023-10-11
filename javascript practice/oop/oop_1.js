// function Person(name, age, profession ,date_of_birth){
//     this.name = name;
//     this.what_i_do = profession;
//     this.age = age;
//     // this.birthday = new Date(date_of_birth) ;
//     this.birthday = new Date(date_of_birth).toString() ;
// }

// const Person1 = new Person("Nasrin","28","developer","11-10-1997");
// const Person2 = new Person("Nurunnahar");

// console.log(Person1,Person2);

//*********find out age* wrong ***********/
// function Person(name, date_of_birth) {
//   this.name = name;
//   this.birthday = new Date(date_of_birth);
//   this.ageCalculate = () => {
//     const diff = Date.now() - this.birthday.getTime();
//     const age = new Date(diff);

//     return age.getFullYear() - 1997;
//   };
// }

// const Person1 = new Person("Nasrin", "1997-11-10");

// console.log(Person1.ageCalculate());

//*************************find out age  start************************/

// function Person(name, date_of_birth) {
// this.name = name;
// this.birthday = new Date(date_of_birth);
// this.ageCalculate = () => {
//     const today = new Date();
//     const age = today.getFullYear() - this.birthday.getFullYear();

//     // Check if the birthday for this year has occurred or not
//     if (
//     today.getMonth() < this.birthday.getMonth() ||
//     (today.getMonth() === this.birthday.getMonth() &&
//         today.getDate() < this.birthday.getDate())
//     ) {
//     return age - 1; // Subtract 1 year if the birthday hasn't occurred yet this year
//     }

//     return age;
// };
// }

// const Person1 = new Person("Nasrin", "1997-11-10");

// console.log(Person1.ageCalculate());
//*****************************find out age  end***************************/

//*****************************find out age  start***************************/
 



class Person {
    constructor(firstname, lastname, date_of_birth, yearly_income) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.birthday = new Date(date_of_birth);
      this.yearly_income = yearly_income;
    }
  
    ageCalculate() {
      const today = new Date();
      const age = today.getFullYear() - this.birthday.getFullYear();
      
      // Check if the birthday for this year has occurred or not
      if (
        today.getMonth() < this.birthday.getMonth() ||
        (today.getMonth() === this.birthday.getMonth() && today.getDate() < this.birthday.getDate())
      ) {
        return age - 1; // Subtract 1 year if the birthday hasn't occurred yet this year
      }
      
      return age;
    }
  
    getFullName() {
      return this.firstname + " " + this.lastname;
    }
  
    getTaxAmount() {
      let taxamount = 0;
      if (this.yearly_income > 250000) {
        taxamount = this.yearly_income * 0.25;
      } else if (this.yearly_income > 550000 && this.yearly_income <= 750000) {
        taxamount = this.yearly_income * 0.3;
      } else if (this.yearly_income > 750000) {
        taxamount = this.yearly_income * 0.35;
      }
  
      return taxamount;
    }
  }
  
  const Pramanik = new Person("Nasrin", "Pramanik", "1997-11-10", 7500000);
  console.log(Pramanik.getFullName(), Pramanik.ageCalculate(), Pramanik.getTaxAmount());
  

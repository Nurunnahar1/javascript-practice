let name = prompt("Name");
let roll = prompt("Roll");
let reg = prompt("Reg");
let bangla = prompt("Bangla");

console.log(`

    Student Name    : ${name}
    Roll Number     : ${roll}
    Reg Number      : ${reg}
    ==============================
    Subject - Mark - GPA - Grade
    
    Bangla -${bangla} -${getGpa(bangla)} -${bangla}


    Final Result = ${isPassed(bangla) ? "Passed" : "Failed"}
    Final GPA = ${getFinalGPA(bangla).toFixed(2)}
    Final Grade = ${getFinalGrade(bangla)}
 


`);

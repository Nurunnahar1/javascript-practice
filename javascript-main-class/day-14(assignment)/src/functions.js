// Function to add a new student to the database

 




 

// Function to search student by roll number
function searchByRoll(rollNumber) {
  return studentsDatabase.find((student) => student.roll === rollNumber);
}

// Function to search student by registration number
function searchByRegistration(registrationNumber) {
  return studentsDatabase.find( (student) => student.registration === registrationNumber );
}

// Function to calculate pass rate
function calculatePassRate() {
  const totalStudents = studentsDatabase.length;
  const passedStudents = studentsDatabase.filter(
    (student) => student.result === "Pass"
  ).length;
  return (passedStudents / totalStudents) * 100;
}

// Function to generate marksheet for a student
function generateMarksheet(student) {
  const { name, roll, registration, gender, marks } = student;
  console.log(
    `Marksheet for ${name} (Roll: ${roll}, Reg: ${registration}, Gender: ${gender}):`
  );
  console.log("-------------------------------------------------------");
  console.log("| Subject    | Marks Obtained | Grade |");
  console.log("-------------------------------------------------------");
  Object.entries(marks).forEach(([subject, { obtainedMarks, grade }]) => {
    console.log(
      `| ${subject.padEnd(10)} | ${String(obtainedMarks).padStart(
        14
      )} | ${grade.padStart(5)} |`
    );
  });
  console.log("-------------------------------------------------------");
}

// Function to search students by gender
function searchByGender(gender) {
  return studentsDatabase.filter((student) => student.gender === gender);
}

 




// Function to handle search by roll or registration
function searchStudent() {
  const searchType = prompt("Enter 'roll' or 'registration' to search:").toLowerCase(); // Convert to lowercase for case-insensitive comparison
  if (searchType === "roll") {
    const rollNumber = prompt("Enter roll number:");
    const student = searchByRoll(rollNumber);
    if (student) {
      console.log("Student found:");
      console.log(student);
    } else {
      console.log("Student not found.");
    }
  } else if (searchType === "registration") {
    const regNumber = prompt("Enter registration number:");
    const student = searchByRegistration(regNumber);
    if (student) {
      console.log("Student found:");
      console.log(student);
    } else {
      console.log("Student not found.");
    }
  } else {
    console.log("Invalid search type. Please enter 'roll' or 'registration'.");
  }
}

 
// Test the search function
searchStudent();

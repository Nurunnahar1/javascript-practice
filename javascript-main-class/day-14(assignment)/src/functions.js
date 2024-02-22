// Sample data for students
const students = [
  {
    roll: 1,
    registration: "A001",
    name: "John",
    gender: "Male",
    marks: { math: 80, science: 75, english: 85 },
  },
  {
    roll: 2,
    registration: "A002",
    name: "Jane Doe",
    gender: "Female",
    marks: { math: 70, science: 65, english: 75 },
  },
  {
    roll: 3,
    registration: "A003",
    name: "Alice Smith",
    gender: "Female",
    marks: { math: 90, science: 85, english: 95 },
  },
  // Add more students similarly
];

// Function to search student data by roll or registration
const searchStudent = (key, value) => {
  return students.find(
    (student) => student.roll === value || student.registration === value
  );
};

// Function to calculate pass rate
const calculatePassRate = () => {
  const totalStudents = students.length;
  const passedStudents = students.filter((student) => {
    const { math, science, english } = student.marks;
    return math >= 40 && science >= 40 && english >= 40;
  }).length;
  return (passedStudents / totalStudents) * 100;
};

// Function to search students by gender
const searchByGender = (gender) => {
  return students.filter(
    (student) => student.gender.toLowerCase() === gender.toLowerCase()
  );
};

// Function to generate marksheet of a student
const generateMarksheet = (student) => {
  const { name, marks } = student;
  const totalMarks = Object.values(marks).reduce((acc, curr) => acc + curr, 0);
  const percentage = (totalMarks / (Object.keys(marks).length * 100)) * 100;

  console.log(`Name: ${name}`);
//   console.log(`Marks:`);
  Object.entries(marks).forEach(([subject, mark]) => {
    console.log(`${subject}: ${mark}`);
  });
  console.log(`Total Marks: ${totalMarks}`);
  console.log(`Percentage: ${percentage}%`);
};

// Function to prompt for student roll or registration and display result
const promptForResult = () => {
  const input = prompt("Enter student roll or registration:");
  const student =
    searchStudent("roll", parseInt(input)) ||
    searchStudent("registration", input);
  if (student) {
    generateMarksheet(student);
  } else {
    console.log("Student not found");
  }
};

// Example usage
promptForResult();

const passRate = calculatePassRate();
console.log(`Pass Rate: ${passRate}%`);

const genderInput = prompt("Enter gender to search (Male/Female):");
const genderResult = searchByGender(genderInput);
console.log(`${genderInput} Students:`);
console.log(genderResult);

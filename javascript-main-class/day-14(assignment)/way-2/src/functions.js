let roll = prompt("Enter Your Roll");
let reg = prompt("Enter Your Reg");
let gender = prompt("Enter your gender");

const grades = [
  { threshold: 0, grade: "F", gpa: 0 },
  { threshold: 33, grade: "D", gpa: 1 },
  { threshold: 40, grade: "C", gpa: 2 },
  { threshold: 50, grade: "B", gpa: 3 },
  { threshold: 60, grade: "A-", gpa: 3.5 },
  { threshold: 70, grade: "A", gpa: 4 },
  { threshold: 80, grade: "A+", gpa: 5 },
];

const getGradeAndGpa = (mark) => {
  const { grade, gpa } = grades.find(({ threshold }) => mark >= threshold) || {
    grade: "Invalid",
    gpa: "Invalid",
  };
  return { grade, gpa };
};

const isPassed = (marks) => Object.values(marks).every((mark) => mark >= 33);

const calculateFinalGpa = (marks) => {
  const totalSubjects = Object.keys(marks).length;
  const totalGpa = Object.values(marks).reduce(
    (acc, mark) => acc + getGradeAndGpa(mark).gpa,
    0
  );
  return totalGpa / totalSubjects;
};

const calculatePercentageOfPass = (students) => {
  const totalPassed = students.filter(({ marks }) => isPassed(marks)).length;
  return (totalPassed * 100) / students.length;
};

const getIndividualResult = (students) => {
  students.forEach((student) => {
    if (
      student.roll === roll &&
      student.registration === reg &&
      student.gender === gender
    ) {
      const { name, marks } = student;
      const passed = isPassed(marks);
      const finalGpa = passed ? calculateFinalGpa(marks).toFixed(2) : 0;
      const finalGrade = getGradeAndGpa(finalGpa).grade;

      console.log(`
        Name: ${name}
        Roll: ${roll}
        Reg: ${reg}
        ==========================
        Subject: Gpa = Grade
        ${Object.entries(marks)
          .map(
            ([subject, mark]) =>
              `${subject}: ${getGradeAndGpa(mark).gpa} = ${
                getGradeAndGpa(mark).grade
              }`
          )
          .join("\n        ")}
        =====================================================================
        IsPassed: ${passed ? "Passed" : "Failed"}
        Final Gpa: ${finalGpa}
        Final Grade: ${finalGrade}
        Percentage of Passed Students: ${calculatePercentageOfPass(students)}%
      `);
    }
  });
};


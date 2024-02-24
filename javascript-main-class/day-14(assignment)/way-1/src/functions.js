let roll = prompt("Enter Your Roll");
let reg = prompt("Enter Your Reg");
let gender = prompt("Enter your gender");

let getPercantage = (students) => {
  let totalStudent = students.length;
  return (totalPercantageOfPass = (7 * 100) / totalStudent);
};

const getGradeAndGpa = (mark) => {
  let grade;
  let gpa;
  if (mark >= 0 && mark < 33) {
    grade = "F";
    gpa = 0;
  } else if (mark >= 33 && mark < 40) {
    grade = "D";
    gpa = 1;
  } else if (mark >= 40 && mark < 50) {
    grade = "C";
    gpa = 2;
  } else if (mark >= 50 && mark < 60) {
    grade = "B";
    gpa = 3;
  } else if (mark >= 60 && mark < 70) {
    grade = "A-";
    gpa = 3.5;
  } else if (mark >= 70 && mark < 80) {
    grade = "A";
    gpa = 4;
  } else if (mark >= 80 && mark <= 100) {
    grade = "A+";
    gpa = 5;
  } else {
    grade = "Invalid";
    gpa = "Invalid";
  }

  return {
    grade: grade,
    gpa: gpa,
  };
};

const getIndividualResult = (students) => {
  students.map((item, index) => {
    const { marks } = item;
    const { ban, eng, math, phy, che, bio, reli } = marks;

    let finalGpa = (ban, eng, math, phy, che, bio, reli) => {
      let gpa;

      if (
        ban >= 33 &&
        eng >= 33 &&
        math >= 33 &&
        phy >= 33 &&
        che >= 33 &&
        bio >= 33 &&
        reli >= 33
      ) {
        return (gpa = (
          (getGradeAndGpa(ban).gpa +
            getGradeAndGpa(eng).gpa +
            getGradeAndGpa(math).gpa +
            getGradeAndGpa(phy).gpa +
            getGradeAndGpa(che).gpa +
            getGradeAndGpa(bio).gpa +
            getGradeAndGpa(reli).gpa) /
          7
        ).toFixed(2));
      } else {
        return (gpa = 0);
      }
    };

    let result = finalGpa(ban, eng, math, phy, che, bio, reli);

    let finalGrade = (gpa) => {
      let grade;
      if (gpa >= 0 && gpa < 1) {
        grade = "F";
      } else if (gpa >= 1 && gpa < 2) {
        grade = "D";
      } else if (gpa >= 2 && gpa < 3) {
        grade = "C";
      } else if (gpa >= 3 && gpa < 3.5) {
        grade = "B";
      } else if (gpa >= 3.5 && gpa < 4) {
        grade = "A-";
      } else if (gpa >= 4 && gpa < 5) {
        grade = "A";
      } else if (gpa == 5) {
        grade = "A+";
      } else {
        grade = "Invalid";
      }

      return grade;
    };

    if (item.roll == roll && item.reg == reg && item.gender == gender) {
      const isPassed = () => {
        if (
          ban >= 33 &&
          eng >= 33 &&
          math >= 33 &&
          phy >= 33 &&
          che >= 33 &&
          bio >= 33 &&
          reli >= 33
        ) {
          return true;
        } else {
          return false;
        }
      };

      console.log(`
        Name: ${item.name}
        Roll:${item.roll}
        Reg:${item.reg}
        ==========================
        Subject: Gpa  =  Grade
        Bangla:  ${getGradeAndGpa(ban).gpa}  = ${getGradeAndGpa(ban).grade}
        English: ${getGradeAndGpa(eng).gpa}  = ${getGradeAndGpa(eng).grade}
        Math:    ${getGradeAndGpa(math).gpa}  = ${getGradeAndGpa(math).grade}
        Physics: ${getGradeAndGpa(phy).gpa}  = ${getGradeAndGpa(phy).grade}
        Chemistry:${getGradeAndGpa(che).gpa} = ${getGradeAndGpa(che).grade}
        Biology: ${getGradeAndGpa(bio).gpa}  = ${getGradeAndGpa(bio).grade}
        Religion:${getGradeAndGpa(reli).gpa}  = ${getGradeAndGpa(reli).grade}
        =====================================================================
        IsPassed: ${isPassed() ? "Passed" : "Failed"}

        Final Gpa:${result}
        Final Grade:${finalGrade(result)}
        Perchantage of Passed Student:${getPercantage(students)}%



    `);
    }
  });
};

getIndividualResult(students);

// TASK 1
let student = {
  name: "Alice",
  age: 16,
  grades: [85, 90, 78, 95]
};

// TASK 2
function getAverage(grades) {
  let sum = 0;
  for (let grade of grades) {
    sum += grade;
  }
  return sum / grades.length;
}

// TASK 3
function getLetterGrade(average) {
  if (average >= 90) {
    return "A";
  } else if (average >= 80) {
    return "B";
  } else if (average >= 70) {
    return "C";
  } else if (average >= 60) {
    return "D";
  } else {
    return "F";
  }
}

// TASK 4
function hasPassed(grades) {
  let avg = getAverage(grades);
  let allAbove50 = true;
  
  for (let grade of grades) {
    if (grade < 50) {
      allAbove50 = false;
    }
  }
  
  return avg >= 60 && allAbove50;
}

// TASK 5
function getHighest(grades) {
  let highest = grades[0];
  let i = 1;
  
  while (i < grades.length) {
    if (grades[i] > highest) {
      highest = grades[i];
    }
    i++;
  }
  
  return highest;
}

// TASK 6
var students = [
  { name: "Alice", age: 16, grades: [85, 90, 78, 95] },
  { name: "Bob", age: 17, grades: [70, 65, 85, 68] },
  { name: "Charlie", age: 16, grades: [55, 60, 70, 48] }
];

// TASK 7
for (let i = 0; i < students.length; i++) {
  let avg = getAverage(student.grades);
  
  console.log("--- " + student.name + " ---");
  console.log("Average: " + Math.round(avg));
  console.log("Letter Grade: " + getLetterGrade(avg));
  console.log("Passed: " + hasPassed(student.grades));
  console.log("Highest: " + getHighest(student.grades));
  console.log("");
}

// ========= a random function =============
function mathOperation() {
    function findMin() {
        // your code goes here
    }
}
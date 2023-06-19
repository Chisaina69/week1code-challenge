function gradeMarks(marks){
    let grade;
  
    if(marks >= 0 && marks <= 100){
    
      if(marks > 79 && marks <= 100){
        grade = "A"
      } else if(marks >= 60 && marks <=79){
        grade = "B"
      } else if(marks >= 49 && marks <= 59){
        grade = "C"
      }else if(marks >= 40 && marks < 49){
        grade = "D"
      }else if(marks < 40 && marks >= 0){
        grade = "E"
      }
      return `Grade: ${grade}`
    } else {
      return "Invalid input! Make sure Input ranges between 0-100"
    }
  }
  
  const prompt = require('prompt-sync')();
  const marks = prompt('Enter student marks: ')
  
  console.log(Number(marks));
  console.log(gradeMarks(Number(marks)));
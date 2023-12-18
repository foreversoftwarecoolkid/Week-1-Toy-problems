// Challenge 1: Student Grade Generator

function getGrade(mark) {
    let grade;
    
    if(mark > 79) {
      grade = 'A';
    } else if(mark >= 60) {
      grade = 'B';
    } else if(mark >= 49) {
      grade = 'C';  
    } else if(mark >= 40) {
      grade = 'D';
    } else {
      grade = 'E';
    }
  
    return `Grade: ${grade}`; 
  }
  
  // Get user input
  const mark = parseInt(prompt('Enter student mark: '));
  
  // Print grade
  console.log(getGrade(mark));
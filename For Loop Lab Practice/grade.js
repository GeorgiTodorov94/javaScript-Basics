function grades(input) {
    let studentsCount = Number(input[0]);
    let topStudents = 0;
    let studentsBetweenFour = 0;
    let studentsBetweenThree = 0;
    let failedStudents = 0;
    let grade = 0;
    
    

    for (let i = 1; i <= studentsCount; i++) {
        let currGrade = Number(input[i]);
        if (currGrade >= 2 && currGrade <= 2.99) {
            failedStudents++;
            grade += currGrade;
            
        } else if (currGrade >= 3 && currGrade <= 3.99) {
            studentsBetweenThree++;
            grade += currGrade
            
        } else if (currGrade >= 4 && currGrade <= 4.99) {
            studentsBetweenFour++;
            grade += currGrade;
            
        } else if (currGrade >= 5){
            topStudents++;
            grade += currGrade
        }
        
    }
    
    let topStudentPercentage = (topStudents/ studentsCount) * 100;
    let failedStudentsPercentage = (failedStudents / studentsCount) * 100;
    let studentsBetweenThreePercentage = (studentsBetweenThree / studentsCount) * 100;
    let studentsBetweenFourPercentage = (studentsBetweenFour / studentsCount) * 100;
    let averageGrade = grade / studentsCount;
    console.log(`Top students: ${topStudentPercentage.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${studentsBetweenFourPercentage.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${studentsBetweenThreePercentage.toFixed(2)}%`);
    console.log(`Fail: ${failedStudentsPercentage.toFixed(2)}%`);
    console.log(`Average: ${averageGrade.toFixed(2)}`);
}
grades([
    "10",
    "3.00",
    "2.99",
    "5.68",
    "3.01",
    "4",
    "4",
    "6.00",
    "4.50",
    "2.44",
    "5"
])

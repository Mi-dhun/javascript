

var studentName = "Midhun M";
let studentClass = "Class 10";
let studentAge = 16;

let mathematics = 85;
let science = 78;
let english = 92;

const maxMark = 100;


let studentPassed = true;      
let remarks;                   
let optionalRemarks = null;     

english += 3;


let totalMarks = mathematics + science + english;

let averageMarks = totalMarks / 3;

let percentage = (totalMarks / (maxMark * 3)) * 100;

let mathsPassed = mathematics >= 40;
let sciencePassed = science >= 40;
let englishPassed = english >= 40;

let averagePassed = averageMarks >= 50;

studentPassed = mathsPassed && sciencePassed && englishPassed;

let outstandingScore =
    mathematics > 90 || science > 90 || english > 90;

let studentFailed = !studentPassed;


console.log(" STUDENT ACADEMIC PERFORMANCE ");

console.log("Student Name:", studentName);
console.log("Student Class:", studentClass);
console.log("Student Age:", studentAge);

console.log("\nSUBJECT MARKS ");

console.log("Mathematics:", mathematics);
console.log("Science:", science);
console.log("English:", english);

console.log("\n RESULT SUMMARY ");

console.log("Total Marks:", totalMarks);
console.log("Average Marks:", averageMarks);
console.log("Percentage:", percentage + "%");

console.log("\nPASS / FAIL STATUS ");

console.log("Mathematics Passed:", mathsPassed);
console.log("Science Passed:", sciencePassed);
console.log("English Passed:", englishPassed);
console.log("Average >= 50:", averagePassed);

console.log("Overall Result:", studentPassed);
console.log("Student Failed:", studentFailed);

console.log("\n PERFORMANCE STATUS");

console.log("Outstanding Score:", outstandingScore);

console.log("Remarks:", remarks);
console.log("Optional Remarks:", optionalRemarks);

console.log("\nEND OF REPORT ");


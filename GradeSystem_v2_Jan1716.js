let honorroll = 90;
let passing_criteria = 60;
const subjects = ["Language" , "English" , "Maths" , "Programming"];
function cal_average( grades) {
    let sum = 0;
    for(var i = 0; i < grades.length ; i++) {
        sum += grades[i];
    }
    return sum/grades.length;

}

function grade_calculator(grade) {
    if(grade>=90) return 'A';
    else if(grade>=80) return 'B';
    else if(grade>=70) return 'C';
    else if(grade>=60) return 'D';
    return 'F';
}
function fetchData() {
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve({
                 name: "Suwetha V",
                grades: [86, 95, 94, 100]
            });
        },1000);
    });
}
function saveReport() {
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("Report Saved Succesfully");
        },1000);
    });
}
async function generateReport() {
    console.log("Fetching the student data");
    let std_obj = await fetchData();
    let name = std_obj.name;
    let grades = std_obj.grades;
    console.log("---------------------------------");
    console.log("CLuny School");
    console.log("---------------------------------");
    console.log("Report Card");
    console.log("---------------------------------");
    console.log("Student Name :",name);
    console.log("---------------------------------");
    console.log("Marks Obtained are as follows(Subject Name ,Marks Obtained ,Grade):");
    var flag = false;
    for(var i = 0; i<grades.length;i++) {
        var ch =  grade_calculator(grades[i]);
        if(ch == 'F') flag = true;
        console.log(subjects[i] + ":" + grades[i] + "(" + ch + ")");
    }
    console.log("---------------------------------");
    var avg = cal_average(grades);
    console.log("Total Percentage :" ,avg.toFixed(2));
    console.log("---------------------------------");
    console.log("Overall Grade :" + grade_calculator(avg));
    if(flag) console.log("Sorry you have failed in one or all the subjects.Better Lick next time");
    else if(avg>=honorroll ) console.log("Congratulations you have passed with distinction");
    else if(avg>=passing_criteria) console.log("Congratulations you have passed");
    console.log("Saving Report......");
    console.log(await(saveReport()));

}
// function reportDisplay(name , grades) {
//     console.log("---------------------------------");
//     console.log("CLuny School");
//     console.log("---------------------------------");
//     console.log("Report Card");
//     console.log("---------------------------------");
//     console.log("Student Name :",name);
//     console.log("---------------------------------");
//     console.log("Marks Obtained are as follows(Subject Name ,Marks Obtained ,Grade):");
//     var flag = false;
//     for(var i = 0; i<grades.length;i++) {
//         var ch =  grade_calculator(grades[i]);
//         if(ch == 'F') flag = true;
//         console.log(subjects[i] + ":" + grades[i] + "(" + ch + ")");
//     }
//     console.log("---------------------------------");
//     var avg = cal_average(grades);
//     console.log("Total Percentage :" ,avg.toFixed(2));
//     console.log("---------------------------------");
//     console.log("Overall Grade :" + grade_calculator(avg));
//     if(flag) console.log("Sorry you have failed in one or all the subjects.Better Lick next time");
//     else if(avg>=honorroll ) console.log("Congratulations you have passed with distinction");
//     else if(avg>=passing_criteria) console.log("Congratulations you have passed");

// }
// //student 1
// const std_name = "Suwetha V";
// const grades = [86,95,94,100];
//reportDisplay(std_name , grades);
generateReport();
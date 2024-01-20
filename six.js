// function hellow(){
//     console.log("hello world");

// }

// hellow();

// function witth parameter
// function person (name , age , number, ){
//     return name+" " + age + " " + number;
// }

// let uservalue = person ("your name is harry" , "your roll number is 4567 " , "contact number 45732574");
// console.log(uservalue)

// 

function person(name , age , userclass , usercourses){
    return name+ "tufail " + age + " 18" + userclass + " 12 " + usercourses + "javascript,html , bootstep , css , git , ";

}

let uservalue = person ("my name is " , "my age is" , " my class " , "my courses ")
console.log(uservalue)

// TERNARY OPERATION  (?) ISS SIGN KO TERNARY OPERATION KAHTAY HAY 

// let grade = prompt("enter your grade ");
// let result = grade == "A" || grade == "B" || grade == "C" || grade == "D" ? "pass" : "fail";
// console.log(result);

let grade = prompt("enter your grade ");
let per = prompt("enter your percentage ");
let myper = grade == "A+1" && per == "90" || grade == "A+" && per == "80" || grade == "A" && per == 70  || grade == "B" && per == 60 ? "pass" : "fail";
console.log(myper);






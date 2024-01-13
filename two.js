console.log("student");

let student = {
    name : "mike",
    age : 40 ,
    class : 10,
    num : 254346596754,
};

// first method yo getting vlue of an object

console.log(student["class"]);
//second method of gettuing an object 

console.log(student.name);
console.log(student.age);


// agar apko saray name ak sath paste karnay o to ya method lagay ga 
for(let i in student){
    console.log(i , student[i])
};

// artematic operator
let a = 34;
let b = 10;

console.log("The sum of a+b is ", a+b);
console.log("The sub of a-b is ", a-b);
console.log("The mul of a*b is ", a*b);
console.log("The div of a/b  is ", a/b);
console.log("The modulus of a%b is ", a%b);

// increment yani add karna 

let w = 10;
console.log(w)
// pre increment    add karunga phir print karunaga 

console.log(++w); 

// post increment   pahlay print karunga phir ad karo ga 
console.log(w++);
console.log(w)

w += 20;
console.log(w)

// decrement yani value ko kam karna 
let f = 20;
console.log(f)

// pre decremnt  pahlay minus karunga phir print karunga 
console.log(--f);

// post decrement   pahlay print karunga phir minus karo ga

console.log(f--);
console.log(f)

f -= 8;
console.log(f)




// loop


// for loop

for(let i=0; i<=10;i++){
    console.log("pjs" , i)
}


// table bananay ka tariqa for loop ki madad say 
for(let i=1; i<=10;i++){
    console.log("5" , "x", i , "=" , 5*i )
}
 // user ki value ka table bananay ka tariqa  
 // ya java script sting population kahlata ➡ console.log(`${myvalue} x ${y} = ${myvalue*y}`)

let myvalue = prompt("enter your table ");
for(let y=1; y<=10; y++){
    console.log(`${myvalue} x ${y} = ${myvalue*y}`)
}


// while loop 

let num = 70;

while(num<=75){
    console.log("this is while loop " , num);
    num++;
}

// DO LOOP 

let q = 45;

do {
    console.log ("this is do loop " , q)
    q++;
}while(q<=50);

let student = {
    name : 'tufail',
    class : "second year " ,
    city : "karachi" ,
    country : "pakistan ",


}
for (let tufail in student ){
    console.log(tufail , student[tufail])
}



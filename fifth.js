let friut = ["apple" , "banana" , "mango", "strawbery"];

console.log(friut);
console.log(friut[0]);

// METHOD OF AN ARRAY 

// (1) PUSH ya apkay index may word add karta hay 
console.log(friut.push("kiwi"));
console.log(friut);

// pop ya paky index may last spaling  ko remove karta hay 
console.log(friut.pop());
console.log(friut);
// shift ya apkay first index may value ko remove ko add karay ga 
console.log(friut.shift());
console.log(friut);
// unshift ya apkay first index may vale ko add karta hay 
console.log(friut.unshift("kiwi"));
console.log(friut);

// slice  ya apkay index ko slice karta hay yani jitnay index apko chiya ho gaywah tak lata ha 
console.log(friut.slice(1,5));

// splice  ya apkay index ko cut bhi karta hay or adding bhi karta hay
console.log(friut.splice(1,1, "yango", "careem "));
console.log(friut);

// concat ya apkay saray inex ko merge karta hay yani mila dayta hay 
let bbq = ["tikka " , "sickkabab" , "malaiboti" , "zingerburger"]
let seafood = ["fish " , "prawns" , "lobster" , "sushi"]
let sweeydish = ["custerd " , "gulab jamun" , "rasmalai" , "barfi"]


let menu = bbq.concat(seafood,sweeydish);
console.log(menu)

for(let bbq in sweeydish){
    console.log(sweeydish[bbq])
}




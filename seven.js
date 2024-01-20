

let str = "ONCE UPON A TIME";
console.log(str);
// length apkay index may jitnay alphabet ho gay uss ki count kar kay bata day ga 
console.log(str.length);
// includes ya apkay index may check karay ga agar O ho ga to true show karwata hay agar nahi hoga to falce show karway ga  
console.log(str.includes("O"));
// endwish ya apkay index may check karay ga agar last may koi E ho ga to true show karwata hay agar nahi hoga to falce show karway ga  
console.log(str.endsWith("E"));
//  ya apkay index may 6 pau jo alphabet ho ga uss ko show karway ga 
console.log(str[6]);
// replce ya apkay jo index may likha ho ga uss ko change karta hay 
console.log(str.replace("UPON", "apple"));
// toLocaleLowerCase ya apkay all alphabets ko lower case may karta hay 
console.log(str.toLocaleLowerCase());

// string are immutable 

let word = "hellow";
console.log(word);
word[0] = "m";
console.log(word)


// dom -> full form document object model 

let user = document.getElementById('one');
user.textContent = "once upon a time";
user.style.background = "green";
user.style.color = "white"; 
user.style.textAlign = "center"; 
user.style.padding = "10px";
user.classList.add('hellow');
user.className = "poyo oil " ;

// class 


let mydive = document.getElementsByClassName('container');
console.log(mydive);
mydive[0].innerHTML = "apple";
mydive[0].style.color = "yellow";
mydive[0].style.backgroundColor = "green";
mydive[0].style.fontSize = "29px";
mydive[0].id = "first";

let newiv =  document.createElement('p');
mydive[0].appendChild(newiv);
newiv.innerHTML = "apple mango watermanal graphse kiwi orange ";

let newdiv =  document.createElement('img');
newiv.appendChild(newdiv);
newdiv.src = "b2.png"















// console.log(user);
// 3 types of declaration  -> 1) let 2) var 3) const  
// let ko apdate kr saktay ho  magar redeclair nahi kar saktay 
// var  update bhi kar saktay ho or redeclair kar saktay ho 
// const ap iss ko na na declair kar saktay ho na uodate kar saktay ho  




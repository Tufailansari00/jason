

let gamenum = 85 ;
let usernum = prompt("Enter Your Number")
while(usernum != gamenum){
    usernum = prompt("YOU GUESS THE WRONG NUMBER : GUESS AGAIN")
} 
swal({
    title: "YOUR WIN THE GAME ",
    text: "YOUR WINNER 🎆🎇🧨✨🎉🎊",
    timer: 5000
  });

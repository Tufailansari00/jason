
let newelem = document.getElementsByClassName('container');
newelem[0].innerHTML = "good luck";
newelem[0].style.backgroundColor = "green"
newelem[0].style.padding = "10px"
newelem[0].style.color = "tomato"


// let click = document.createElement('button');
// click.innerHTML = "click here";
// newelem[0].appendChild(click);
// click.className = "btn btn-dark"
// click.style.display = "block"
// click.style.color = "teal"
// click.style.boxShadow = "3px 3px 5px yellow"
// click.style.padding = "10px"
// click.style.letterSpacing = "15px"

// click.addEventListener('click' , hellow);
// function hellow(){
//     console.log("pleaseehjsdfh")
//     click.textContent = "puch"
    
// }

let newinput = document.createElement('input');
newinput.className = "form-control mt-3";
newelem[0].appendChild(newinput);

let click = document.createElement('button');
click.innerHTML = "click here";
newelem[0].appendChild(click);
click.className = "btn btn-dark"
click.style.display = "block"
click.style.color = "teal"
click.style.boxShadow = "3px 3px 5px yellow"
click.style.padding = "10px"
click.style.letterSpacing = "15px"

newinput.addEventListener('keyup' , keybord );
function keybord(){
    console.log("pressing keybord")
    
}




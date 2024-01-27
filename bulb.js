

let btn = document.getElementById('togglebtn');
let bulb = document.getElementById('bulb');
let mq = document.getElementById('mq');

btn.addEventListener('click' , toggle);
function toggle(){
    if(btn.textContent.includes('ON') && mq.textContent.includes('ON') ){
        bulb.src = "on bulb.png";
        bulb.style.height = "350px"
        mq.style.color = "whitesmoke"
        btn.textContent = "TURN OFF";
        mq.textContent = "TURN OFF";
        btn.style.boxShadow = "3px 3px 4px 4px goldenrod";
        btn.style.background = "goldenrod"
        bulb.style.boxShadow = "3px 3px 4px 4px goldenrod"
        mq.style.color = "goldenrod"
        mq.style.boxShadow = "3px 3px 4px 4px goldenrod"

    }
    else{
        bulb.src = "bul.jpg";
        bulb.style.height = "350px"
        btn.textContent = "TURN ON";
        mq.textContent = "TURN ON";
        btn.style.background = "whitesmoke"
        btn.style.boxShadow = "3px 3px 4px 4px whitesmoke";
        bulb.style.boxShadow = "3px 3px 4px 4px whitesmoke"
        mq.style.color = "whitesmoke"
        mq.style.boxShadow = "3px 3px 4px 4px whitesmoke"

    }
}
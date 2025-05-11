let h= document.querySelector("h3");
let div = document.querySelectorAll("button")
let btn = document.querySelector("#play")
let body =document.querySelector("body")

let gameValue = [];
let userValue =[];
let level = 0;
let started = false;
let randomColor = ["div1","div2","div3","div4"]

btn.addEventListener("click", function() {
    if(started == false){
        console.log("game started")
        started= true;
        setTimeout( levelUp(), 1000)
        btn.innerText="Restart"
        
    }else{
        btn.addEventListener("click", reStart())
       body.classList.remove("red")
        body.style.color="black"
    }
    
    
})
function btnPress() {
    
    let btn = this;
    let div= btn.classList.value;
    userValue.push(div)
    // console.log(div)
    // console.log(userValue)
    blinkUs(btn)
    chakeValue(userValue.length-1)
}
function chakeValue(idx) {
    if( gameValue[idx] == userValue[idx]){
        if(gameValue.length == userValue.length){
           setTimeout( levelUp, 1000)
        }
        // console.log("values mached")
    }else{
        h.innerText=`Game over! Press start`
        body.classList.add("red")
        btn.innerText="Retart"
        reStart()
        
    }
}

function reStart() {
    started=false;
    gameValue=[];
    userValue=[];
    level=0
    // console.log("restart")
    btn.innerText="Start"
    

        
}


for( divs of div) {
    divs.addEventListener("click", btnPress)
}


function blinkSy(div) {
    div.classList.add("blinkSy")
    setTimeout( function() {
        div.classList.remove("blinkSy")
    }, 250)
}
function blinkUs(div) {
    div.classList.add("blinkUs")
    setTimeout( function() {
        div.classList.remove("blinkUs")
    }, 250)
}


function levelUp() {
    userValue=[];
    level++;
    h.innerText=`Level ${level}`
   let random= Math.floor(Math.random() *4);
   let randDiv = randomColor[random];
   randBtn = document.querySelector(`.${randDiv}`)
    gameValue.push(randDiv)
    // console.log(gameValue)
    blinkSy(randBtn)
    
}

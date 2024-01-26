let currMole;
let currplant;
let score=0;
let gameover=false;

window.onload = function(){
    setGame();
}



function setGame(){
    for(let i =0;i<9;i++){
        let tile = document.createElement("div");
        tile.id=i.toString();
        tile.addEventListener("click" ,selecttilt);
        document.getElementById("board").appendChild(tile);
    }

    setInterval(setmole,1000);
    setInterval(setPlant,1000);
}

function get_random(){
    let num = Math.floor(Math.random()*9);
    return num.toString();
}


function setmole(){
    if(gameover)
        return

    if(currMole ){
        currMole.innerHTML=" ";
    }

    let mole = document.createElement("img");
    mole.src="./monty-mole.png";

    let num = get_random();

    if(currplant && currplant.id== num){
        return;
    }

    currMole =document.getElementById(num);
    currMole.appendChild(mole);
}

function setPlant(){
    if(gameover)
        return


    if(currplant){
        currplant.innerHTML="";
    }

    let plant = document.createElement("img");
    plant.src="./piranha-plant.png";

    let num = get_random();
    if(currMole && currMole.id== num){
        return;
    }

    currplant =document.getElementById(num);
    currplant.appendChild(plant);
}

function selecttilt(){

    if(gameover)
        return

    if(this == currMole){
        score+=10;
        document.getElementById("score").innerText =score;
    }
    else if(this == currplant){
        document.getElementById("score").innerText=`game over !!! Your Score was ${score}`;
        gameover=true;
    }
}
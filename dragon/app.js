let sc=0;
let cross=true;
scorecnt.document.querySelector(".score");
document.onkeydown= (e)=>{
    console.log(e.keyCode);
    if(e.keyCode == 38){
        let dino = document.querySelector(".dino");
        dino.classList.add("animated_dino");
        setTimeout(()=>{
            dino.classList.remove('animated_dino')
        },700)
    }
    if(e.keyCode == 39){
        dino.document.querySelector(".dino");
        let dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"));
        dino.style.left = dinox+122+"px";
    }
    if(e.keyCode == 37){
        dino.document.querySelector(".dino");
        let dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"));
        dino.style.left = (dinox-122)+"px";
    }
}

setInterval(() =>{
    let dino=document.querySelector(".dino");
    let gameover=document.querySelector(".gameover");
    let obstacle=document.querySelector(".obstacle");

    dx = parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"));
    dy = parseInt(window.getComputedStyle(dino,null).getPropertyValue("top"));

    ox = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue("left"));
    oy = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue("top"));

    let offsetX = Math.abs(dx-ox);
    let offsetY = Math.abs(dy-oy);

    if(offsetX <93 && offsetY <52){
        gameover.style.visibility='visible';
        obstacle.classList.remove('obstacle_ani');
    }
    else if(offset<145 && cross){
        sc++;
        updatescore(sc);
        cross=false;
        setTimeout(() => {
            cross=true;
        }, 1000);
    }
},100);

function updatescore(score){
    scorecnt.innerHTML= "your score "+sc;
}


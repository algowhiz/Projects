document.addEventListener("DOMContentLoaded", () => {
    let draggedItem = null;
    let chanceX = true;
    let x_score=0;
    let o_score=0;
    let msg = document.querySelector(".message");
    let msgx = document.querySelector(".x");
    let msgo = document.querySelector(".o");
    const boxes = document.querySelectorAll(".box");
    let reset = document.querySelector("#reset");
    let reset_sc = document.querySelector(".reset_score");
    
    // console.log(reset);

    const winning_patterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const dragBtns = document.querySelectorAll(".drag-btn");

    dragBtns.forEach((btn) => {
        btn.addEventListener("dragstart", (e) => {
            draggedItem = e.target;
            e.dataTransfer.setData("text", btn.innerHTML);
        });
    });

    boxes.forEach((box) => {
        box.addEventListener("dragover", (e) => {
            e.preventDefault();
        });

        box.addEventListener("drop", (e) => {
            e.preventDefault();
            if (!box.innerText && draggedItem) {
                box.innerText = draggedItem.innerHTML;
                Check_winner();
                chanceX = !chanceX;
            }
        });
    });

    const winner = (winner_name) => {
        console.log(winner_name);
        if(winner_name === "X"){
            x_score++;
            // console.log(x_score);
            msgx.innerHTML=x_score;
        }else if(winner_name === "O"){
            o_score++;
            msgo.innerHTML=o_score;
        }
        msg.innerHTML = `Congratulations, our winner is player ${winner_name}`;
        disable_box();
    }

    const reset_score  = () =>{
        msgx.innerHTML=0;
        msgo.innerHTML=0;
    }

    const disable_box = () => {
        for (let box of boxes) {
            box.disabled = true;
            box.style.backgroundColor = "white";
        }
    }

    const enable_box = () => {
        for (let box of boxes) {
                box.disabled = false;
                box.innerText = "";
                msg.innerHTML = "";
                box.style.backgroundColor = "white";           
        }
    }
    const reset_box = () => {
        chanceX = true;
        enable_box();

    }

    const Check_winner = () => {
        for (let pattern of winning_patterns) {
            let pos1 = boxes[pattern[0]].innerText;
            let pos2 = boxes[pattern[1]].innerText;
            let pos3 = boxes[pattern[2]].innerText;

            if (pos1 != "" && pos2 != "" && pos3 != "") {
                if (pos1 == pos2 && pos2 == pos3) {
                    console.log("Winner", pos1);
                    winner(pos1);
                }
            }
        }


        if (Array.from(boxes).every(box => box.innerText !== "")) {
            msg.innerText = "It's a tie! Game will restart within 3S";
            const timer = () =>{
                box.disabled = false;
                box.innerText = "";
                msg.innerHTML = "";
                box.style.backgroundColor = "white";
            }

            setTimeout(timer, 3000);
        }
    }
    reset.addEventListener("click", reset_box);
    reset_sc.addEventListener("click",reset_score);
});


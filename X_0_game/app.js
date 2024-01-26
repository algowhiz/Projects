let U_score=0;
let C_score=0;

const ch = document.querySelectorAll(".choice");
const ans = document.querySelector(".ans");
const user_board = document.querySelector(".U_ans")
const comp_board = document.querySelector(".C_ans")

const geerate_comp_choice = () =>{
    let comp_optin = ["rock" , "paper" , "scissor"];
    const comp_ch = Math.floor(Math.random()*3);
    return comp_optin[comp_ch];
} 

const draw_case = ()=>{
  ans.innerText="Game Draw BRO ";
}

const show_winner = (user_win) =>{
  if(user_win){
    // console.log("you win");
    U_score++;
    user_board.innerText = U_score;
    ans.innerText="You Win BRO ";
  }
  else{
    C_score++;
    comp_board.innerText = C_score;
    // console.log("You loose");
    ans.innerText="You Lose BRO ";
  }
}

const game = (user_choice)  =>{
    // console.log(user_choice);

    const comp_ch = geerate_comp_choice();
    // console.log(comp_ch);

    if(user_choice == comp_ch ){
      draw_case();
    }
    else{
        let user_win = true;

        if(user_choice === "rock"){
          user_win = comp_ch === "paper" ? false : true;
        } else if(user_choice ==="paper"){
          user_win = comp_ch === "scissor" ? false : true;
        } else{
          user_win = comp_ch === "rock" ? false : true;
        }
        show_winner(user_win);
    }
}

ch.forEach((ch) =>{
  ch.addEventListener("click",()=>{
    // console.log(ch);
      const ch_id = ch.getAttribute("id");
      console.log("choice was clicked",ch_id);
      game(ch_id);
  })
})
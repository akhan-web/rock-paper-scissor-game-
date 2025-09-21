let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const usersco=document.querySelector("#user-score");
const compsco=document.querySelector("#comp-score");

const gencomputerchoice=()=>{
   let options=["rock","paper","scissors"] ;
   const randomidx=Math.floor(Math.random()*3) ;
   return options[randomidx];
                              //we can multiply *n which is the index and it is less than 1 i.e we acn get any range like 0to9(when n is 10) math.floor to delete decimal value
}
const showWinner=(userwin)=>{
if(userwin){
    userscore++;
    usersco.innerText=userscore;
    msg.innerText="you win!";
    msg.style.backgroundColor="green";
}
else{
    compscore++;
    compsco.innerText=compscore;
    msg.innerText= "you loosse!"
  
      msg.style.backgroundColor="red";

}
}

const drawgame=()=>{
console.log("game was draw");
msg.innerText="Game was draw";
}
const playGame=(userchoice)=>{
   const compchoice=gencomputerchoice();
   if(userchoice===compchoice){
    // draw game
    drawgame();
   }
   else{
    let userwin=true;
    if(userchoice==="rock"){
        userwin=compchoice==="paper" ? false:true;
    }
    else if(userchoice==="paper"){
        userwin=compchoice==="scissors" ? false:true;
    }
    else{
        userwin=compchoice==="rock" ? false : true;
    }
showWinner(userwin);
   }
}


choices.forEach((choice)=>{
    // console.log(choice);
choice.addEventListener("click",()=>{
     let userchoice=choice.getAttribute("id");
    playGame(userchoice);
})
})
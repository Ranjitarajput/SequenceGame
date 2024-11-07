//Simmon says Game start hare
   let allBtns = document.querySelectorAll(".btn");
   let head2 = document.querySelector("#head2");
   let highestScore = document.querySelector("#heighestScore");
   let gameSeq =[];
   let userSeq =[];
   let gamestarted = false;
   let level =0;
   let highestNum = 0;

   let btnClass = ["red","yellow","green","purple"];
   let startBtn = document.getElementById("startBtn");
   console.log(startBtn);


   startBtn.addEventListener("click" ,function(){
   if(gamestarted == false){
    console.log("game started");
    gamestarted = true;
    levelUp();
    highestScore.style.display ="none";
   }
   });

   function levelUp(){
    level++;
    head2.innerText = `Level ${level}`;
    //choose any random btns
    userSeq =[];
    let randomIdx = Math.floor(Math.random()*4);
    let randomColor = btnClass[randomIdx];
    let randomBtn = document.querySelector(`.${randomColor}`);

    gameSeq.push(randomColor);
    console.log("game sequence: ",gameSeq);
    btnFlash(randomBtn);
   }

  function btnFlash(btn){
    
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash");
    },500)
  }
    function checkAns(idx){
        if(gameSeq[idx] === userSeq[idx]){
          
            if(gameSeq.length === userSeq.length){
                setTimeout(levelUp,1000);
            }

        }else{
            if(level > highestNum){
            highestNum = level;
           }
              
           highestScore.style.display = "block";
           highestScore.innerHTML =`your highest score was<b> ${highestNum} <b>`;
              head2.innerHTML=`Game Over! Your score is <b> ${level} </b><br> press start button to start to start`;
              document.querySelector("body").style.backgroundColor ='red';
              setTimeout(function(){
                document.querySelector("body").style.backgroundColor ='white';
              },200);
              reset();
            

        }
    }
  
  for(userPressBtn of allBtns){
    userPressBtn.addEventListener("click",function(){
        btnFlash(this);
       userColor =  this.getAttribute("id")
       userSeq.push(userColor);
       checkAns(userSeq.length-1);
    })

  }

  function reset(){
    gameSeq =[];
    userSeq =[];
    gamestarted = false;
    level =0;
  }

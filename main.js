let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 5;
let gameOver = false;
let chanceArea = document.getElementById("chance-area");
let history =[];

playButton.addEventListener("click", play); 
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function () {
     userInput.value="";
} )

function pickRandomNum(){
     computerNum = Math.floor(Math.random() * 100) + 1; 
     console.log("정답", computerNum); 
}

function play(){
     let userValue = userInput.value;

     if(userValue<1 || userValue>100){
          resultArea.textContent="1과 100 사이의 값을 입력하세요"
          return;
     }

     if(history.includes(userValue)){
          resultArea.textContent="이미 입력한 값이에요"
          return;
     }
     chances --;
     chanceArea.textContent = `${chances}`;
     console.log("chance", chances);

     if (userValue < computerNum){
     resultArea.textContent = "UP"; 
     } else if (userValue > computerNum){
     resultArea.textContent = "DOWN"
     } else {
     resultArea.textContent = "정답입니다"
     gameOver=true;
     }

     history.push(userValue);
     console.log(history);

     if(chances <1){
          gameOver = true;
     }

     if(gameOver == true){
          playButton.disabled = true;
     }
}



function reset(){
     userInput.value = "";
     pickRandomNum();
     gameOver = false;
     playButton.disabled = false;
     chances =5;
     chanceArea.innerHTML = `남은 기회:${chances}`;
     userValueList = [];
     resultArea.textContent = "Up or Down";
}


pickRandomNum();
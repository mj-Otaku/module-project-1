let choices = ["rock", "paper", "scissor"];
let point = 0;
let text = document.querySelector(".point");
let win = document.querySelector(".win");
let result = "";
function generateComputerChoice() {
  computerChoice = choices[Math.floor(Math.random() * choices.length)];
}

function on(player) {
  generateComputerChoice();
  switch (player + computerChoice) {
    case "scissorpaper":
    case "rockscissor":
    case "paperrock":
      result = "You WIN!";
      point++;
      break;
    case "paperscissor":
    case "scissorrock":
    case "rockpaper":
      result = "You LOST!";
      break;
    case "paperpaper":
    case "scissorscissor":
    case "rockrock":
      result = "Its a DRAW!";
      break;
  }
  text.innerHTML = point;
  OVER(player, computerChoice, result);
}

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
  modal.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function OVER(a, b, c) {
  document.querySelector(".main-game").innerHTML = `<div class="game-over">
<div>
    <button class="style style2 ${a}" style="cursor:default;"><img src="${a}.png" alt=""></button>
</div>
<div>
    <div class="win">${c}</div>
    <button class="tr" onclick="tr()" style="color:black";>again?</button>
</div>
<div>

    <button class="style style2 ${b}" style="cursor:default;"><img src="${b}.png" alt=""></button>
</div>
</div>
`;
}

function RESET() {
  text.innerHTML = 0;
  point = 0;
}

function tr() {
  document.querySelector(".game-over").innerHTML = "";
  document.querySelector(".main-game").innerHTML = ` <div>
    <button class="scissor style" onclick="on('scissor')"><img src="scissor.png" alt=""></button>
    <button class="rock style" onclick="on('rock')"><img src="rock.png" alt=""></button></div>
<img src="line.png" alt="" class="line img1">
<img src="line.png" alt="" class="line img2">
<img src="line.png" alt="" class="line img3">
<div>
    <button class="paper style paper-margin" onclick="on('paper')"><img src="paper.png" alt=""></button>
</div>

<button class="RESET paper-margin" onclick="RESET()">
<p style="color: black">RESETpoint</p>
    `;
}

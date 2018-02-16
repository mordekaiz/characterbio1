

function GameP()
{
  var random = Math.random();
  console.log(random);

  var computer = '';

if (random > 0.67) {
//rock
computer = "rock";

}

if (random < 0.66 && random > 0.34) {
//paper
computer = "paper";

}

if (random < 0.33) {
  //scissers
  computer = "scissors";

}
console.log(computer);


//comp vs player
var player = prompt("rock, paper, or scissors");
var message='';

if (player === "rock" && computer === "rock"){
  messsage = "it's a tie!";
}

if (player === "rock" && computer === "scissors"){
  messsage = "Player beats computer!";
}

if (player === "rock" && computer === "paper"){
  messsage = "papear beats rock, computer wins!";
}

if (player === "paper" && computer === "paper"){
  messsage = "it's a tie!";
}

if (player === "paper" && computer === "rock"){
  messsage = "Paper beat rock, player wins!";
}

if (player === "paper" && computer === "scissors"){
  messsage = "scissors beats paper, computer win!";
}

if (player === "scissors" && computer === "scissors"){
  messsage = "it's a tie!";
}

if (player === "scissors" && computer === "paper"){
  messsage = "scissors beats paper, player wins!";
}
if (player === "scissors" && computer === "rock"){
  messsage = "rock beats scissors, computer wins!";
}
console.log(message)
document.getElementById('message').innerHTML = message;
}
//Winner

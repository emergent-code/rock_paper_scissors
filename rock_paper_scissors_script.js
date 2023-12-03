let choices = ["rock", "paper", "scissors"]


function computerChoice(){
  let compChoice = choices[Math.floor(Math.random()*choices.length)]
  return compChoice
}

const rockbtn = document.querySelector(".rock")
const paperbtn = document.querySelector(".paper")
const scissorsbtn = document.querySelector(".scissors")
const scoreboard = document.querySelector(".scoreboard")
let playerScore = 0
let compScore = 0
scoreboard.textContent = `${playerScore} - ${compScore}`

//Game logic - plays a single round taking in the player's choice as input
//Will textContent of scoreboard change dynamically if it's outside of the function or does the update need to be included in the function? I suspect the latter
function gameRound(playerChoice){
  let compChoice = computerChoice()
  playerChoice = playerChoice.toLowerCase()


  if(compChoice == "rock" && playerChoice == "scissors" || compChoice == "paper" && playerChoice == "rock" || compChoice == "scissors" && playerChoice == "paper"){
    
    if(checkScore(playerScore, compScore)){
      scoreboard.textContent = `Game over! Player: ${playerScore} \nComputer:${compScore}`
    }
    else{
      compScore +=1
      scoreboard.textContent = `${playerScore} - ${compScore}`
    }
    console.log("Lose")
    console.log(`Player: ${playerScore}`)
    console.log(`Computer: ${compScore}`)
  }

  else if(compChoice == "rock" && playerChoice == "paper" || compChoice == "scissors" && playerChoice == "rock" || compChoice == "paper" && playerChoice == "scissors"){

    if(checkScore(playerScore, compScore)){
      scoreboard.textContent = `Game over! Player: ${playerScore} \nComputer:${compScore}`
    }
    else{
      playerScore +=1
      scoreboard.textContent = `${playerScore} - ${compScore}`
    }
    console.log("Win")
    console.log(`Player: ${playerScore}`)
    console.log(`Computer: ${compScore}`)
  }

  else if (compChoice == "rock" && playerChoice == "rock" || compChoice == "scissors" && playerChoice == "scissors" || compChoice == "paper" && playerChoice == "paper"){
    console.log("Draw")
    console.log(`Player: ${playerScore}`)
    console.log(`Computer: ${compScore}`)

  }
  else{
    return console.log("ERROR")
  }
}

function checkScore(playerS, compS){
  if(playerS == 5 || compS ==5)
    return true
  else{
    return false
  }


}

rockbtn.addEventListener('click', () => {gameRound("rock")})
paperbtn.addEventListener('click', () => {gameRound("paper")})
scissorsbtn.addEventListener('click', () => {gameRound("scissors")})


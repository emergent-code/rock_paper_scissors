let choices = ["rock", "paper", "scissors"]


function computerChoice(){
  let compChoice = choices[Math.floor(Math.random()*choices.length)]
  return compChoice
}

//Game logic - plays a single round taking in the player's choice as input
function gameRound(computer){
  let compChoice = computer
  let playerChoice = prompt("What is your choice?")
  playerChoice = playerChoice.toLowerCase()
  //let message = ""
 
  if(compChoice == "rock" && playerChoice == "scissors" || compChoice == "paper" && playerChoice == "rock" || compChoice == "scissors" && playerChoice == "paper"){
    //message = `Computer chose ${compChoice}. You lose :(`
    return 1
  }

  else if(compChoice == "rock" && playerChoice == "paper" || compChoice == "scissors" && playerChoice == "rock" || compChoice == "paper" && playerChoice == "scissors"){
    //message = `Computer chose ${compChoice}. You win!`
    return 2
  }

  else if (compChoice == "rock" && playerChoice == "rock" || compChoice == "scissors" && playerChoice == "scissors" || compChoice == "paper" && playerChoice == "paper"){
    //message = `Computer also chose ${compChoice}. It's a draw!`
    return 3
  }
  else{
    //message = `ERROR - in gameRound`
    return 4
  }
}

function fullGame(){
  let message = ""
  let score = 0
  for(i = 0; i < 5; i++){
    let compDecision = computerChoice()
    let gameCondition = gameRound(compDecision)
    if(gameCondition == 1){
      message = `Computer chose ${compDecision}. You lose this round :(`
      console.log(message)
    }
    else if(gameCondition == 2){
      message = `Computer chose ${compDecision}. You win!`
      console.log(message)
      score += 1
    }
    else if(gameCondition == 3){
      message = `Computer also chose ${compDecision}. It's a draw. Redo!`
      console.log(message)
      i --
    }
    else{
      console.log("Oops, something went wrong!")
    }
    
  }

  let result = ""

  if(score >= 3 ){
    message = "Nice! You won the match!"
    result = "won"
  }
  else if(score < 3){
    message = "Oh no, you lost...Refresh to try again!"
    result = "lost"
  }
  else{
    console.log("If you're seeing this message, something went wrong lol")
  }

  console.log(`You won ${score} out of 5 rounds. ${message}`)
}

fullGame()

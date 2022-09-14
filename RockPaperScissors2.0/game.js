const newGame = () => {
    return {
        currentTurn: 0,
        playerWins: 0,
        computerWins: 0,
        currentWinner: null,
        msg: null
    };
}

const computerPlay = () => {
    const num = Math.floor(Math.random() * 1000)

    return num % 3 == 0 ? "Rock" : num % 2 == 0 ? "Paper" : "Scissors"
}

const playSingleRound = (playerSelection, computerSelection, game) => {

    const player = playerSelection.toLowerCase()
    const computer = computerSelection.toLowerCase()
    
    if (player === computer) {
        return {...game,currentTurn: game.currentTurn + 1,
            msg: "It's a tie !!!!!!"};
    } else if ((player == "rock" && computer == "scissors") ||
        (player == "paper" && computer == "rock") ||
        (player == "scissors" && computer == "paper")) {
        return {...game, 
            currentTurn: game.currentTurn + 1,
            playerWins: game.playerWins + 1,
            currentWinner: "player",
            msg: `You won, ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()} !`};
    }

    return {...game,
        currentTurn: game.currentTurn + 1,
        computerWins: game.computerWins + 1,
        currentWinner: "computer",
        msg: `You lose, ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()} !`
    };
}
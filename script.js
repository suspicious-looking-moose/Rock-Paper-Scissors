
function game() {
    let userScore = 0;
    let compScore = 0;
    let roundNumber = 0;
    while (userScore < 3 && compScore < 3) {
        roundNumber += 1;
        let compChoice = "";
        function computerPlay() {
            switch (Math.floor(Math.random() * 3)) {
            case 0:
                return compChoice = 'Rock';
            case 1:
                return compChoice = 'Paper';
            case 2:
                return compChoice = 'Scissors';
            };
        };
        computerPlay();
        let userChoice = window.prompt("Rock, Paper, or Scissors?");
        let result = "";
        
        console.log(`Welcome to Round ${roundNumber}! The game is about to begin!`);
        console.log(`You have chosen ${userChoice}!`);
        console.log(`The computer has chosen ${compChoice}!`);
        userChoice = userChoice.toLowerCase();
        compChoice = compChoice.toLowerCase();

        function checkMatch(compChoice, userChoice) {
        if (compChoice === userChoice) {
            return result='Match Result: DRAW';     
        }
        else if (((userChoice === 'rock') && (compChoice === 'scissors')) 
                || ((userChoice === 'paper') && (compChoice === 'rock')) 
                || ((userChoice === 'scissors') && (compChoice  === 'paper'))){
                    userScore += 1;
                    return result="Match Result: WIN"; 
        }
        else {
            compScore += 1;
            return result = "Match Result: LOSS";
        };
        }; 
        checkMatch(compChoice, userChoice);
        console.log(result);
        console.log(`User Score: ${userScore}`);
        console.log(`Computer Score: ${compScore}`); 
    };
}; 

game();
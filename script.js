
function game() {

    //SETTING ALL GAME VARIABLES FIRST IN MAIN GAME FUNCTION
    let userScore = 0;
    let compScore = 0;
    let roundNumber = 1;
    let userChoice = "rock";
    let compChoice = ""; // Empty string for the computers choice
    let result = ""; 
    
    choices = document.querySelectorAll('.choice');   //CREATES NODELIST OF BUTTONS FROM DOCUMENT

    choices.forEach( /*ANON-FUNC*/ (mouseInput) => {     //RUNS THROUGH EACH CHOICE IN THE LIST
    
        mouseInput.addEventListener('click', e => {      //WHEN THE USER CLICKS, ADD EVENT LISTENER AND CARRY OUT FUNCTION
    
            userChoice = mouseInput.id;      //SETS USER CHOICE AS WHATEVER IS CLICKED ON
            roundNumber += 1;

            function computerPlay() {
                switch (Math.floor(Math.random() * 3)) {
                case 0:
                    return compChoice = 'rock';
                case 1:
                    return compChoice = 'paper';
                case 2:
                    return compChoice = 'scissors';
                };
            };
            function checkMatch(compChoice, userChoice) {
                if (compChoice === userChoice) {
                    return result="IT'S A DRAW!";     
                }
                else if (((userChoice === 'rock') && (compChoice === 'scissors')) 
                        || ((userChoice === 'paper') && (compChoice === 'rock')) 
                        || ((userChoice === 'scissors') && (compChoice  === 'paper'))){
                            userScore += 1;
                            return result="YOU WIN!"; 
                }
                else {
                    compScore += 1;
                    return result = "YOU LOSE!";
                };
            }; 
            function logTextChoicesToPage(userChoice, compChoice) {
                userChoice = userChoice.toUpperCase();
                compChoice = compChoice.toUpperCase();
                document.querySelector('#user-choice-text').innerHTML = userChoice;
                document.querySelector('#comp-choice-text').innerHTML = compChoice;    
            };
            function convertChoiceToIcon(choice) {
                switch (choice) {
                    case 'rock':
                        return choice = "🪨";
                    case 'paper':
                        return choice = '📜';
                    case 'scissors':
                        return choice = '✂️';
                };       
            }
            function checkForWinner(userScore, compScore) {
                if (userScore === 5) {
                    console.log("winner");
                    document.querySelector('#display-result').innerHTML = 'YOU WIN THE MATCH';
                    loadPlayAgainButton();

                }
    
                else if (compScore === 5) {
                    console.log("loser");
                    document.querySelector('#display-result').innerHTML = 'YOU LOSE THE MATCH!';
                    loadPlayAgainButton();

                };
            };
            
            function loadPlayAgainButton() {
                const container = document.querySelector('#container');
                const contain = document.querySelectorAll('.choice');
                contain[0].remove();
                contain[1].remove();
                contain[2].remove();
                const div = document.createElement('div'); 
                div.innerHTML="<button id='play-again'> 🔁 </button>"
                container.appendChild(div);
            
                const theButton = document.querySelector('#play-again');
                theButton.addEventListener('click', pageReload);
            };
            
            function pageReload() {
                location.reload();
            };

            if (userScore < 5 && compScore < 5) {

                computerPlay(); // CALLS COMPUTER CHOICE FUNCTION TO GET COMP CHOICE
                checkMatch(compChoice, userChoice); // CHECKS MATCH RESULTS
                logTextChoicesToPage(userChoice, compChoice); // TEXT CHOICES TO PAGE

                userChoice = convertChoiceToIcon(userChoice);  //CONVERT THE CHOICES USING THE FUNCTION ABOVE
                compChoice = convertChoiceToIcon(compChoice);

                document.querySelector('#user-choice-icon').innerHTML = userChoice; //SETTING THE ICONS
                document.querySelector('#comp-choice-icon').innerHTML = compChoice;
                
                document.querySelector('#display-result').innerHTML = result; //DISPLAYING RESULT
                document.querySelector('#user-score').innerHTML = userScore; //CHANGING THE SCORES
                document.querySelector('#comp-score').innerHTML = compScore;

                checkForWinner(userScore, compScore);

            }

        });
    });
}           

game();





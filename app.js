const game = ()=> {
    let pScore = 0;
    let cScore = 0;

    //START THE GAME
    const startGame = () =>{
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener("click", () =>{
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    };
//PLAY MATCH
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand =>{
            hand.addEventListener('animationend', function(){
                this.style.animation = '';
            });
        });
        //COMPUTER OPTIONS
        const comptuerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option=>{
            option.addEventListener('click', function(){
                //COMPUTER CHOICE
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = comptuerOptions[computerNumber];
                setTimeout(() =>{
                //HERE IS WHERE WE CALL COMPARE HANDS
                compareHands(this.textContent, computerChoice);
                //UPDATE IMAGES
                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;
                }, 2000);
                //ANIMATION
                playerHand.style.animation = 'shakePlayer 2s ease';
                computerHand.style.animation = 'shakeComputer 2s ease';
            });
        });
    };

    //UPDATING SCORE
    const updateScore = () =>{
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };

    //COMPARING HANDS
    const compareHands = (playerChoice, computerChoice) =>{
        //UPDATE TEXT
        const winner = document.querySelector('.winner');
        //CHECKING FOR A TIE
            if(playerChoice === computerChoice){
                winner.textContent = 'It is a tie';
                return;
        };
        //CHECKING FOR ROCK
        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                winner.textContent = "Player Wins"
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            }
        };
        //CHECKING FOR PAPER
        if(playerChoice === 'paper'){
            if(computerChoice === 'rock'){
                winner.textContent = "Player Wins"
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            }
        };
        //CHECKING FOR SCISSORS
        if(playerChoice === 'scissors'){
            if(computerChoice === 'paper'){
                winner.textContent = "Player Wins"
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            }
        };
    }
//CALL ALL INNER FUNCTIONS
    startGame();
    playMatch();
};


//START THE GAME FUNCTION
game();
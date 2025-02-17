let emojis = [`✊`, `🖐️`, `✌️`];

const choices = document.querySelectorAll(`.playerChoice`);
const playerPlayed = document.getElementById(`playerPlayed`);
const computerPlayed = document.getElementById(`computerPlayed`);
const gameLabel = document.getElementById(`vs`);
const winLabel = document.getElementById(`playerWins`);
const loseLabel = document.getElementById(`playerLoses`);
const drawLabel = document.getElementById(`playerDraws`);

let playerChoice = -1;
let computerChoice = -1;

let winCount = 0, loseCount = 0, drawCount = 0; 

choices.forEach(choice =>
{
    choice.addEventListener(`click`, event =>
    {
        if (event.target.id === `rock`)
        {
            playerChoice = 0;
        }
        else if (event.target.id === `paper`)
        {
            playerChoice = 1;
        }
        else if (event.target.id === `scissor`)
        {
            playerChoice = 2;
        }
        playerPlayed.textContent = emojis[playerChoice];
        
        computerChoice = Math.floor(0 + Math.random() * (2 - 0 + 1));
        computerPlayed.textContent = emojis[computerChoice];

        if (playerChoice === computerChoice)
        {
            gameLabel.style.color = "black";
            gameLabel.textContent = `Draw`;
            drawCount ++;
        }
        else if ((playerChoice + 1) % 3 === computerChoice)
        {
            gameLabel.style.color = "red";
            gameLabel.textContent = `You lose`;
            loseCount ++;
        }
        else
        {
            gameLabel.style.color = "green";
            gameLabel.textContent = `You win`;
            winCount ++;
        }

        winLabel.textContent = `Wins: ${winCount}`;
        loseLabel.textContent = `Losses: ${loseCount}`;
        drawLabel.textContent = `Draws: ${drawCount}`;
    });
});
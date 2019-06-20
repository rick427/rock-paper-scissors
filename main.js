const choices = document.querySelectorAll('.choice');
const score = document.querySelector('#score');
const result = document.querySelector('#result');
const restart = document.querySelector('#restart');
const modal = document.querySelector('.modal');

const scoreboard = {
    player: 0,
    computer: 0
}

//play function
function play(e){
    restart.style.display = 'inline-block';
    const playerChoice = e.target.id;

    const AIchoice = getcomputerChoice();

    const winner = getwinner(playerChoice, AIchoice);

    showWinner(winner, AIchoice);

    //console.log(playerChoice, AIchoice, winner);
}

//get computer choice
function getcomputerChoice(){
    const rand = Math.random();
    if(rand < 0.34){
        return 'rock';
    }
    else if (rand <= 0.67){
        return 'paper';
    }
    else{
        return 'scissors';
    }
}

//get winner
function getwinner (p, c){
    if(p === c){
        return'draw';
    }
    else if(p === 'rock'){
        if(c === 'paper'){
            return 'computer';
        }
        else{
            return 'player';
        }
    }
    else if(p === 'paper'){
        if(c === 'scissors'){
            return 'computer'
        }
        else{
            return 'player';
        }
    }
    else if(p === 'scissors'){
        if(c === 'rock'){
            return 'computer';
        }
        else{
            return 'player';
        }
    }
}

//show winner{
    function showWinner(winner, computerChoice){
        if(winner === 'player'){
            scoreboard.player++;
            result.innerHTML = `
              <h1 class="text-win">You Win</h1>
              <i class="fas fa-hand-${computerChoice} fa-10x"></i>
              <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
            `;
        }
        else if(winner === 'computer'){
            scoreboard.computer++;
            result.innerHTML = `
              <h1 class="text-lose">You Lose</h1>
              <i class="fas fa-hand-${computerChoice} fa-10x"></i>
              <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
            `;
        }
        else{
            result.innerHTML = `
              <h1 class>It's a draw</h1>
              <i class="fas fa-hand-${computerChoice} fa-10x"></i>
              <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
            `;
        }
        //show score
        score.innerHTML = `
            <p>Player: ${scoreboard.player}</p>
            <p>Computer: ${scoreboard.computer}</p>
        `;

        modal.style.display = 'block';
    }

//clearModal
function clearModal(e){
    if(e.target === modal){
        modal.style.display = 'none';
    }
}

function restartGame(){
  scoreboard.player = 0;
  scoreboard.computer = 0;
  score.innerHTML = `
     <p>Player: 0</p>
     <p>Computer: 0</p>
  `;
}

//event listener
choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);

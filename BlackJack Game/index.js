
let card = [];
let sum = 0;
let isAlive = false;
let hasBlackJack = false;


let message = "";

let messageEl = document.getElementById("message-el");
//let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");

let cardsEl = document.getElementById("cards-el");

let player = {
    Name : "Sanchay",
    Chips : 200
}


let playerEl = document.getElementById("player-el");
playerEl.textContent = player.Name + ": $" + player.Chips;

function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    card = [firstCard,secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame(){
if(sum<= 20){
    message = "Do you want to draw a new card?";
    
}
else if(sum === 21){
    message = "Its a Blackjack!!";
    hasBlackJack = true;
    
    
}
else{
    message = "You lost";
    isAlive = false;
}
messageEl.textContent = message;
sumEl.textContent = "Sum: " + sum;
//cardsEl.textContent = "Cards:" + card[0] + " " +  card[1] ;
for(let i = 0; i < card.length; i++){
    cardsEl.textContent += card[i] + " ";
}
}


function newCard(){
    if(isAlive == true && hasBlackJack == false){
        let newCardDrawn = getRandomCard();
        sum += newCardDrawn;
        card.push(newCardDrawn);
        cardsEl.textContent = "Cards: ";
        renderGame();
    }
    
}

function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if(randomNumber > 10){
        return 10;
    }
    return randomNumber;
}



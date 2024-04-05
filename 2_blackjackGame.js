let sum=0
let hasBlackJack=false
let isAlive=false
let cards=[]
let message=""
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")          // sumEl = documnet.querySelector("#sum-el")     querySelector is a broad term
let cardsEl = document.getElementById("card-el")

let player = {name:"Ansh",chips:200}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomNumber()
{
    let num = Math.floor(Math.random()*13) + 1
    if(num===1)
    {                                                                   // ACE-11 & KING/QUEEN/JACK-10
        return 11
    }
    else if(num==11 || num==12 || num==13)  //OR: else if(num>10)
    {
        return 10
    }
    else
    {
        return num
    }
}
function startGame()
{
    isAlive=true
    let firstCard = getRandomNumber()
    let secondCard = getRandomNumber()
    sum=firstCard+secondCard
    cards=[firstCard, secondCard]
    renderGame()
}
function renderGame()
{
    let i
    for(i=0;i<cards.length;i++)
    {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if(sum<21)
    {
        message = "Do you wannna continue? "
    }
    else if(sum === 21)
    {
        message = "Woohooo! You have got the Blackjack! "
        hasBlackJack=true
    }
    else
    {
        message = "You are out of the game "
        isAlive=false
    }
    messageEl.textContent = message
    
}
function newcard()
{
    if(isAlive==true && hasBlackJack==false)
    {
        let newcard = getRandomNumber()
        sum += newcard
        cards.push(newcard)
        cardsEl.textContent = "Cards: "
        renderGame()
    }
}
import App from './components/App.js';

document.getElementById('root').appendChild(App());
// Array of card images 

const deckCards = ["bandurria.jpg","bandurria.jpg","chincol.jpg","chincol.jpg","chucao.jpg","chucao.jpg","cometocino.jpg","cometocino.jpg","loica.jpg","loica.jpg","pescador.jpg","pescador.jpg","picaflor.jpg","picaflor.jpg","sietecolores.jpg","sietecolores.jpg"]

//Global arrays

//access the ul> with the class of .deck

const deck = document.querySelector(".deck");

//create empty array to store the opened cards
let opened = [];

//create an empty array to store the matched cards
let matched = [];

//access the modal
const modal = document.getElementById("modal");

//access the reset button
const reset = document.querySelector(".reset-btn");

//access the play again button 
const playAgain = document.querySelector(".play-again-btn");

//Select the class moves-counter and change it's HTML
const movesCount = document.querySelector(".moves-counter");

//Create variables for moves counter, start the count at zero 
let moves = 0;

const star = document.getElementById("star-rating").querySelectorAll(".star");
let starCount =3;
const timeCounter = document.querySelector(".timer");
let time;
let minutes = 0;
let seconds = 0;
let timeStart = false;

function shuffle(array){
    let currentIndex = array.length, temporaryValue, randomIndex;
    while(currentIndex !== 0){
        randomIndex = Math.floor(Math.random()* currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

function startGame() {
// invoke shuffle function and store in variable
const shuffledDeck = shuffle(deckCards);

//iterate over deck of cards array
for (let index = 0; index < shuffledDeck.length; index++) {

    //create the <li> tags
    const liTag = document.createElement('LI');

    //give LI> class of card 
    liTag.classList.add('card');

    //create the img> tags

    const addImage = document.createElement("IMG");

    //append img> to li>
    liTag.appendChild(addImage);

    //set the img scr path with the shuffled deck
    addImage.setAttribute("src","img/" + shuffledDeck[i]);

    //add an alt tag to the image 
    


    
}

}
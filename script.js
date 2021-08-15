const container = document.getElementById('container');
const score = document.getElementById('score');

// You can change the size here //
const imageSize = '100px';

const cardImage = [
   {
      name: 'apple'
   },{
      name: 'apple'
   },
   {
      name: 'banana'
   },{
      name: 'banana'
   },
   {
      name: 'donut'
   },{
      name: 'donut'
   },
   {
      name: 'ice-cream'
   },{
      name: 'ice-cream'
   },
   {
      name: 'pizza'
   },{
      name: 'pizza'
   },
   {
      name: 'watermelon'
   },{
      name: 'watermelon'
   },
   {
      name: 'bread'
   },{
      name: 'bread'
   },
   {
      name: 'lemon'
   },{
      name: 'lemon'
   },
   {
      name: 'eggplant'
   },{
      name: 'eggplant'
   },
   {
      name: 'rose'
   },{
      name: 'rose'
   }
];

cardImage.sort(() => 0.5 - Math.random());

let flippedCard = [];
let scoreNumber = 0;

function createBoard(){
   let i = 0;
   for(const index of cardImage){
      index.img = `image/${index.name}.png`;
      const newImage = document.createElement('img');
      newImage.setAttribute('src', 'image/rainbow.png');
      newImage.setAttribute('data-id', i);
      newImage.addEventListener('click', flipcard);
      newImage.setAttribute('width', imageSize);
      newImage.setAttribute('height', imageSize);
      container.appendChild(newImage);
      i++;
   }
   container.style.width = `${Number.parseInt(imageSize) * 5}px`;
   container.style.height = `${Number.parseInt(imageSize) * (Math.ceil(document.querySelectorAll('img').length / 5))}px`;
}

function flipcard(){
   if(this.getAttribute('src') === 'image/rainbow.png' && flippedCard.length < 2){
      const cardId = this.getAttribute('data-id');
      flippedCard.push({
         name: cardImage[cardId].name,
         id: cardId
      });
      this.setAttribute('src', cardImage[cardId].img);
      if(flippedCard.length === 2){
         setTimeout(checkMatches, 600);
      }
   }
}

function checkMatches(){
   const cards = document.querySelectorAll('img');
   const cardOne = flippedCard[0];
   const cardTwo = flippedCard[1];
   if(cardOne.name === cardTwo.name){
      alert('You found a match!');
      cards[cardOne.id].setAttribute('src', 'image/white.png');
      cards[cardTwo.id].setAttribute('src', 'image/white.png');
      scoreNumber++;
   }
   else {
      cards[cardOne.id].setAttribute('src', 'image/rainbow.png');
      cards[cardTwo.id].setAttribute('src', 'image/rainbow.png');
      alert('Try again');
   }
   flippedCard = [];

   score.textContent = `score: ${scoreNumber}`;

   if(scoreNumber === cardImage.length / 2){
      score.style.fontSize = '50px';
      score.textContent = 'Congratulations! You found them all';
   }
}

createBoard();
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  // Arrays and mapping
  const suits = ['spade', 'club', 'heart', 'diamond'];
  const symbols = { spade: '♠', club: '♣', heart: '♥', diamond: '♦' };
  const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  //Random selection
  const suitIndex = Math.floor(Math.random() * suits.length);
  const valueIndex = Math.floor(Math.random() * values.length);

  const suit = suits[suitIndex];
  const symbol = symbols[suit];
  const value = values[valueIndex];

  //Create Dom Elements
  const card = document.getElementById('card');
  const topSuit = document.getElementById('top-suit');
  const cardValue = document.getElementById('card-value');
  const bottomSuit = document.getElementById('bottom-suit');

  card.classList.add(suit);

  document.getElementById('top-suit').textContent = symbol;
  document.getElementById('card-value').textContent = value;
  document.getElementById('bottom-suit').textContent = symbol;

  //change style.color on the top and bottom to red
  if (suit === 'heart' || suit === 'diamond') {
    topSuit.style.color = 'red';
    bottomSuit.style.color = 'red';
  } else {
    topSuit.style.color = 'black';
    bottomSuit.style.color = 'black';
  }

  console.log(`Generated card: ${value} of ${suit}`)

};

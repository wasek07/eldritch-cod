import godsAnc from './ancientsGods.js';
import dataGreen from '../data/greenCards.js';
import dataBrown from '../data/brownCards.js';
import dataBlue from '../data/blueCards.js';
const cardAncient = document.querySelectorAll('.card-ancient')
const wraperRow = document.querySelectorAll('.wraper-row')
const btnDif = document.querySelectorAll('.btn-dif')
const contDif = document.querySelector('.cont-dif')
const deckContainer = document.querySelector('.deck-container')
const btnDeck = document.querySelector('.btn-deck')
let cardsCount = [0, 0, 0]

cardAncient.forEach(el => {
   el.addEventListener('click', () => {
      contDif.classList.add('difficulty-active')
      cardsCount = [0, 0, 0]
      const index = Array.from(cardAncient).indexOf(el)
      wraperRow.forEach(row => {
         row.children[0].textContent = `${godsAnc[index][`${row.id}`].greenCards}`;
         cardsCount[0] += godsAnc[index][`${row.id}`].greenCards
         row.children[1].textContent = `${godsAnc[index][`${row.id}`].brownCards}`;
         cardsCount[1] += godsAnc[index][`${row.id}`].brownCards
         row.children[2].textContent = `${godsAnc[index][`${row.id}`].blueCards}`;
         cardsCount[2] += godsAnc[index][`${row.id}`].blueCards
      })
   })
})

btnDif.forEach(el => {
   el.addEventListener('click', () => {
      btnDeck.classList.add('act-btn')
   })
})

btnDeck.addEventListener('click', () => {
   pushDeck()
   deckContainer.classList.add('deck-active')
})

let deck = [[], [], []]
let lengthDeck = [dataGreen.length, dataBrown.length, dataBlue.length]
let randomNum

const easy = document.querySelector('.easy')
const normal = document.querySelector('.normal')
const hard = document.querySelector('.hard')
const veryHard = document.querySelector('.veryhard')
easy.addEventListener('click', deckEasy)
normal.addEventListener('click', deckNormal)
hard.addEventListener('click', deckHard)
veryHard.addEventListener('click', deckVeryHard)

// deck for easy level
function deckEasy() {
   console.log('normal');
   let counter = 0
   for (let i = 0; i < deck.length; i++) {
      let min = Math.ceil(0);
      let max = Math.floor(lengthDeck[i]);
      while (counter < cardsCount[i]) {
         randomNum = Math.floor(Math.random() * (max - min)) + min;
         let gh = [dataGreen[randomNum], dataBrown[randomNum], dataBlue[randomNum]]
         if (gh[i].difficulty !== 'hard') {
            if (deck[i].indexOf(gh[i]) === -1) {
               deck[i].push(gh[i])
               counter++
            }
         }
      }
      counter = 0
   }
   console.log('deck');
   console.log(deck);
}

// deck for normal level
function deckNormal() {
   console.log('normal');
   let counter = 0
   for (let i = 0; i < deck.length; i++) {
      let min = Math.ceil(0);
      let max = Math.floor(lengthDeck[i]);
      while (counter < cardsCount[i]) {
         randomNum = Math.floor(Math.random() * (max - min)) + min;
         let gh = [dataGreen[randomNum], dataBrown[randomNum], dataBlue[randomNum]]
         if (deck[i].indexOf(gh[i]) === -1) {
            deck[i].push(gh[i])
            counter++
         }
      }
      counter = 0
   }
   console.log('deck');
   console.log(deck);
}

// deck for hard level
function deckHard() {
   console.log('normal');
   let counter = 0
   for (let i = 0; i < deck.length; i++) {
      let min = Math.ceil(0);
      let max = Math.floor(lengthDeck[i]);
      while (counter < cardsCount[i]) {
         randomNum = Math.floor(Math.random() * (max - min)) + min;
         let gh = [dataGreen[randomNum], dataBrown[randomNum], dataBlue[randomNum]]
         if (gh[i].difficulty !== 'easy') {
            if (deck[i].indexOf(gh[i]) === -1) {
               deck[i].push(gh[i])
               counter++
            }
         }
      }
      counter = 0
   }
   console.log('deck');
   console.log(deck);
}

// deck for very hard level
function deckVeryHard() {
   console.log('veryHard');
   let counter = 0
   for (let i = 0; i < deck.length; i++) {
      let min = Math.ceil(0);
      let max = Math.floor(lengthDeck[i]);
      while (counter < cardsCount[i]) {
         randomNum = Math.floor(Math.random() * (max - min)) + min;
         let gh = [dataGreen[randomNum], dataBrown[randomNum], dataBlue[randomNum]]
         if (counter < 5) {
            console.log('<5');
            if (deck[i].indexOf(gh[i]) === -1 && gh[i].difficulty == 'hard') {
               deck[i].push(gh[i])
               counter++
            }
         }
         if (counter >= 5) {
            console.log('>5');
            if (deck[i].indexOf(gh[i]) === -1 && gh[i].difficulty == 'normal') {
               deck[i].push(gh[i])
               counter++
            }
         }
      }
      counter = 0
   }
}
let deckStage = [[], [], []]
let deckPushDeck = []

// create deck
function pushDeck() {
   let count = 0
   wraperRow.forEach(row => {
      for (let i = 0; i < 3; i++) {
         let counter = 0
         while (counter < +(row.children[i].textContent)) {
            let min = Math.ceil(0);
            let max = Math.floor(deck[i].length);
            randomNum = Math.floor(Math.random() * (max - min)) + min;
            deckStage[count].push(deck[i][randomNum])
            deck[i].splice(randomNum, 1)
            counter++
         }
      }
      count++
   })
   for (let i = 0; i < deckStage.length; i++) {
      let rr = 0
      let dd = deckStage[i].length
      while (rr < dd) {
         let min = Math.ceil(0);
         let max = Math.floor(deckStage[i].length);
         randomNum = Math.floor(Math.random() * (max - min)) + min;
         deckPushDeck.push(deckStage[i][randomNum])
         deckStage[i].splice(randomNum, 1)
         rr++
      }
   }
   console.log(deckPushDeck);
}
const deckCards = document.querySelector('.deck-cards')
const activeCard = document.querySelector('.active-card')
const titleRow = document.querySelector('.row-title')
const green = document.querySelectorAll('.green')
const brown = document.querySelectorAll('.brown')
const blue = document.querySelectorAll('.blue')
let colorGroup = [green, brown, blue]
let counter = 0
let allColor = ['green', 'brown', 'blue']

// changing info about the remaining cards
deckCards.addEventListener('click', () => {
   activeCard.src = deckPushDeck[counter].img
   allColor.forEach(el => {
      if (deckPushDeck[counter].color === el) {
         let fake = 0
         colorGroup[allColor.indexOf(el)].forEach(el => {
            if (el.textContent !== '0' && fake === 0) {
               el.textContent = `${el.textContent - 1}`
               fake += 1
            }
         })
      }
   })
   counter++
})
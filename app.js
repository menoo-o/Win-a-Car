const carArray = [
    {
        name:'alpine',
        img: 'alpine.jpg'
    },

    {
        name:'audi',
        img: 'audi.jpg'
    },

    {
        name:'benz',
        img: 'benz.jpg'
    },


    {
        name:'ferrari',
        img: 'ferrari.jpg'
    },

    {
        name:'lambo',
        img: 'lambo.jpg'
    },

    {
        name:'royce',
        img: 'royce.jpg'
    },

    {
        name:'alpine',
        img: 'alpine.jpg'
    },

    {
        name:'audi',
        img: 'audi.jpg'
    },

    {
        name:'benz',
        img: 'benz.jpg'
    },


    {
        name:'ferrari',
        img: 'ferrari.jpg'
    },

    {
        name:'lambo',
        img: 'lambo.jpg'
    },

    {
        name:'royce',
        img: 'royce.jpg'
    }
]


let cardsChosen = []
let cardsChosenId = []
let cardsWon = []

carArray.sort(()=> 0.5 - Math.random());
console.log(carArray);
const gridDisplay = document.getElementById('grid')

function createBoard() {
    for (let i = 0; i < carArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'blank.jpg')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      gridDisplay.appendChild(card)
    }
}


function flipCard(){
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(carArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', carArray[cardId].img);
    if(cardsChosen.length === 2 ){
        setTimeout(checkForMatch, 500)
    }
}


function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'blank.jpg')
      cards[optionTwoId].setAttribute('src', 'blank.jpg')
      alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
        alert(`You won a ${cardsChosen[0]}`);

      cards[optionOneId].setAttribute('src', 'white.jpg')
      cards[optionTwoId].setAttribute('src', 'white.jpg')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'blank.jpg')
      cards[optionTwoId].setAttribute('src', 'blank.jpg')
      alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
    }
  }

createBoard();



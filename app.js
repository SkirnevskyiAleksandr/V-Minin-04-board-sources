const board = document.getElementById('board');
const SQUARES_NUMBER = 500;
const arrayColor = ['red', 'green', 'grey', 'yellow', 'brown', 'blue', 'white']

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    board.append(square)

    square.addEventListener('mouseover', setColor
    )

    square.addEventListener('mouseleave', removeColo)
}


function setColor(event) {
    const color = randomColor()
    event.target.style.backgroundColor = color
    event.target.style.boxShadow = `0 0 2px ${color},0 0 10px ${color}`
}

function removeColo(event) {
    const element = event.target
    element.style.backgroundColor = "#1d1d1d"
    element.style.boxShadow = '0 0 2px #000'
}

function randomColor() {
    return arrayColor[Math.floor(Math.random() * arrayColor.length)]
}


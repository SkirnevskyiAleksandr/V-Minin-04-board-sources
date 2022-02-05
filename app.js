const board = document.getElementById('board');
const SQUARES_NUMBER = 500;
const arrayColor = ['red', 'green', 'grey', 'yellow', 'brown', 'blue', 'white']

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    board.append(square)

    square.addEventListener('mouseover', () => { setColor(square) }
    )

    square.addEventListener('mouseleave', (event) => {
        event.target.style.backgroundColor = "#1d1d1d"
        event.target.style.boxShadow = '0 0 2px #000'
    })
}


function setColor(elem) {
    const color = randomColor()
    elem.style.backgroundColor = color
    elem.style.boxShadow = `0 0 2px ${color},0 0 10px ${color}`
}

function randomColor() {
    const index = Math.floor(Math.random() * arrayColor.length)
    return arrayColor[index]
}


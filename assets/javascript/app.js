let iframe = document.getElementById('video')
iframe.style.display = 'none'

let wins = 0
let guessesLeft = 0
let currentGuesses = []
let chosenState = 0
let state = []

const resetGame = _ => {
    guessesLeft = 9
    currentGuesses = []
    chosenState = Math.floor(49 * Math.random())
    state = []
    for (let i = 0; i < states[chosenState].length; i++) {
        let char = states[chosenState].charAt(i)
        state.push({ letter: char, show: char === ' '})
    }
    console.log(states[chosenState])
}

const displayState = _ => {
    let returnVal = ''
    state.forEach(element => returnVal += (element.show ? element.letter : '_'))
    console.log(states[chosenState])
    console.log(returnVal)
    return returnVal
}

const updateDocument = _ => {
    document.getElementById('wins').textContent = wins
    document.getElementById('current-word').textContent = displayState()
    document.getElementById('guesses-left').textContent = guessesLeft
    document.getElementById('guessed-letters').textContent = currentGuesses.toString().replace(/,/g, ' ')
}

resetGame()
updateDocument()

document.onkeypress = event => {
    if (97 <= event.keyCode && event.keyCode <= 122) {
        let key = event.key.toUpperCase()

        if (!currentGuesses.includes(key)) {
            currentGuesses.push(key)

            if (states[chosenState].includes(key)) {
                state.forEach(element => element.show = (element.show || element.letter === key))
            }

            if (state.every(element => element.show)) {
                wins++
                alert('You won!!')
                iframe.setAttribute('src', `https://www.youtube.com/embed/${videoCodes[chosenState]}?controls=0`)
                iframe.style.display = 'block'
            } else if (guessesLeft === 1) {
                alert(`You lost, state was ${states[game.chosenState]}`)
                game.resetGame()
            } else {
                guessesLeft--
            }
            updateDocument()
        } else {
            alert('You already chose that letter. Choose another.')
        }

    } else {
        alert('That is not a letter. Choose again.')
    }
}
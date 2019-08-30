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
    return returnVal
}

const updateDocument = _ => {
    document.getElementById('wins').textContent = wins
    document.getElementById('current-word').textContent = displayState()
    document.getElementById('guesses-left').textContent = guessesLeft
    document.getElementById('guessed-letters').textContent = currentGuesses.join('')
}

resetGame()
updateDocument()

document.onkeypress = event => {

    // Check if guess is letter
    if (97 <= event.keyCode && event.keyCode <= 122) {
        let key = event.key.toUpperCase()

        // Check for redundant guesses
        if (!currentGuesses.includes(key)) {
            currentGuesses.push(key)

            // Guess was correct
            if (states[chosenState].includes(key)) {
                state.forEach(element => element.show = (element.show || element.letter === key))
            }

            if (state.every(element => element.show)) {
                // Win Condition
                wins++
                swal({
                    title: 'CONGRADULATIONS',
                    text: 'You guessed the state!',
                    icon: 'success'
                })
                iframe.setAttribute('src', `https://www.youtube.com/embed/${videoCodes[chosenState]}?controls=0`)
                iframe.style.display = 'block'
            } else if (guessesLeft === 1) {
                // Lose Condition
                swal({
                    title: 'YOU LOST',
                    text: `The state was ${states[chosenState]}`,
                    icon: 'error'
                })
                resetGame()
            } else {
                guessesLeft--
            }
            updateDocument()
        } else {
            swal({
                title: 'Guess Again',
                text: 'You already chose that letter.',
                icon: 'warning'
            })
        }

    } else {
        swal({
            title: 'Guess Again',
            text: 'That is not a letter.',
            icon: 'warning'
        })
    }
}
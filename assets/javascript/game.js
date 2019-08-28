console.log(document.getElementById('video'))
let iframe = document.getElementById('video')
iframe.style.display = 'none'

let game = {
    wins: 0,
    guessesLeft: 9,
    currentGuesses: '',
    chosenState: 0,
    displayState: '',
    resetGame () {
        this.guessesLeft = 9
        this.currentGuesses = ''
        this.chosenState = Math.floor(49 * Math.random())
        this.displayState = ''
        for (let i = 0; i < states[this.chosenState].length; i++) {
            if (states[this.chosenState].charAt(i) !== ' ') {
                this.displayState += '_'
            } else {
                this.displayState += ' '
            }
        }
        console.log(states[this.chosenState])
    },
    findAllIndices (str, char) {
        let returnValue = []
        for (let i = 0; i < str.length; i++) {
            if (str.charAt(i) === char) {
                returnValue.push(i)
            }
        }
        return returnValue
    },
    replaceCharAt(str, char, i) {
        return str.slice(0, i) + char + str.slice(i+1, str.length)
    },
    updateDocument () {
        document.getElementById('wins').textContent = this.wins
        document.getElementById('current-word').textContent = this.displayState
        document.getElementById('guesses-left').textContent = this.guessesLeft
        document.getElementById('guessed-letters').textContent = this.currentGuesses
    },
    won() {

    },
    lost() {
        
    }
}

game.resetGame()
game.updateDocument()

document.onkeypress = event => {
    // Check if input is letter
    if (97 <= event.keyCode && event.keyCode <= 122) {
        let key = event.key.toUpperCase()
        // Check for redundant guesses
        if (!game.currentGuesses.includes(key)) {
            game.currentGuesses += `${key} `

            // Guess was correct
            if (states[game.chosenState].includes(key)) {

                // Insert key into displayState
                let indices = game.findAllIndices(states[game.chosenState], key)
                for (let i = 0; i < indices.length; i++) {
                    game.displayState = game.replaceCharAt(game.displayState, key, indices[i])
                }

                // Win game condition
                if (!game.displayState.includes('_')) {
                    game.wins++
                    alert('You won!!')
                    iframe.setAttribute('src', `https://www.youtube.com/embed/${videoCodes[game.chosenState]}?controls=0`)
                    iframe.style.display = 'block'
                    // game.resetGame()
                }

            } else if (game.guessesLeft === 1){
                // Lose game condition
                alert(`You lost, state was ${states[game.chosenState]}`)
                game.resetGame()

            } else {
                game.guessesLeft--
            }

            game.updateDocument()

        } else {
            alert('You already chose that letter. Choose another.')
        }
    } else {
        alert('That is not a letter. Choose again.')
    }
}
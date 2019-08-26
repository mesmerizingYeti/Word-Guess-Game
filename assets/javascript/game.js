const states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']

// let wins = 0
// let guessesLeft = 9
// let currentGuesses = ''
// let chosenState = 0
// let displayState = ''

// const resetGame = _ => {
//     guessesLeft = 9
//     currentGuesses = ''
//     chosenState = Math.floor(49 * Math.random())
//     for (let i = 0; i < states  chosenState].length; i++) {
//         displayState += '_'
//     }

// }

// const findAllIndices = (str, char) => {
//     let returnValue = []
//     for (let i = 0; i < str.length; i++) {
//         if (str.charAt(i) === char) {
//             returnValue.push(i)
//         }
//     }
//     return returnValue
// }

// const updateDocument = _ => {
//     document.getElementById('wins').textContent = wins
//     document.getElementById('current-word').textContent = displayState
//     document.getElementById('guesses-left').textContent = guessesLeft
//     document.getElementById('guessed-letters').textContent = currentGuesses
// }

let game = {
    wins: 0,
    guessesLeft: 9,
    currentGuesses: '',
    chosenState: 0,
    displayState: '',
    resetGame = _ => {
        this.guessesLeft = 9
        this.currentGuesses = ''
        this.chosenState = Math.floor(49 * Math.random())
        for (let i = 0; i < states[this.chosenState].length; i++) {
            this.displayState += '_'
        }
    },
    findAllIndices = (str, char) => {
        let returnValue = []
        for (let i = 0; i < str.length; i++) {
            if (str.charAt(i) === char) {
                returnValue.push(i)
            }
        }
        return returnValue
    },
    updateDocument = _ => {
        document.getElementById('wins').textContent = this.wins
        document.getElementById('current-word').textContent = this.displayState
        document.getElementById('guesses-left').textContent = this.guessesLeft
        document.getElementById('guessed-letters').textContent = this.currentGuesses
    }
}

resetGame()
console.log(states[chosenState])

document.onkeypress = event => {

    if (97 <= event.keyCode && event.keyCode <= 122) {

        if (!currentGuesses.includes(event.key.toUpperCase())) {



        } else {
            alert('You already chose that letter. Choose another.')
        }
    } else {
        alert('That is not a letter. Choose again.')
    }
}
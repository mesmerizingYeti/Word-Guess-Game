const states = ['ALABAMA', 'ALASKA', 'ARIZONA', 'ARKANSAS', 'CALIFORNIA', 'COLORADO', 'CONNECTICUT', 'DELAWARE', 'FLORIDA', 'GEORGIA', 'HAWAII', 'IDAHO', 'ILLINOIS', 'INDIANA', 'IOWA', 'KANSAS', 'KENTUCKY', 'LOUISIANA', 'MAINE', 'MARYLAND', 'MASSACHUSETTS', 'MICHIGAN', 'MINNESOTA', 'MISSISSIPPI', 'MISSOURI', 'MONTANA', 'NEBRASKA', 'NEVADA', 'NEW HAMPSHIRE', 'NEW JERSEY', 'NEW MEXICO', 'NEW YORK', 'NORTH CAROLINA', 'NORTH DAKOTA', 'OHIO', 'OKLAHOMA', 'OREGON', 'PENNSYLVANIA', 'RHODE ISLAND', 'SOUTH CAROLINA', 'SOUTH DAKOTA', 'TENNESSEE', 'TEXAS', 'UTAH', 'VERMONT', 'VIRGINIA', 'WASHINGTON', 'WEST VIRGINIA', 'WISCONSIN', 'WYOMING']

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
    resetGame () {
        this.guessesLeft = 9
        this.currentGuesses = ''
        this.chosenState = Math.floor(49 * Math.random())
        for (let i = 0; i < states[this.chosenState].length; i++) {
            if (states[this.chosenState].charAt(i) !== ' ') {
                this.displayState += '_'
            } else {
                this.displayState += ' '
            }
        }
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
    }
}

game.resetGame()
game.updateDocument()

console.log(states[game.chosenState])

document.onkeypress = event => {

    if (97 <= event.keyCode && event.keyCode <= 122) {
        let key = event.key.toUpperCase()
        if (!currentGuesses.includes(key)) {

            game.currentGuesses += `${key} `

            if (states[game.chosenState].includes(key)) {

                let indices = game.findAllIndices(states[game.chosenState], key)
                for (let i = 0; i < indices.length; i++) {
                    game.displayState = game.replaceCharAt(game.displayState, key, i)
                }

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
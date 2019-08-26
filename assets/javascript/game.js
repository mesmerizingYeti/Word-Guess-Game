const states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']

let wins = 0
let guessesLeft = 9
let currentGuesses = ''
let chosenState = 0
let display = ''

const reset = _ => {
    guessesLeft = 9
    currentGuesses = ''
    chosenState = Math.floor(49 * Math.random())
    for (let i = 0; i < states[chosenState].length; i++) {
        display += '_'
    }

}

const findAllIndices = (str, char) => {
    let returnValue = []
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            returnValue.push(i)
        }
    }
    return returnValue
}

reset()
console.log(states[chosenState])

document.onkeypress = event => {
    console.log(event)

    if (97 <= event.keyCode && event.keyCode <= 122) {

        if (!currentGuesses.includes(event.key.toUpperCase())) {

            

        } else {
            alert('You already chose that letter. Choose another.')
        }
    } else {
        alert('That is not a letter. Choose again.')
    }
}
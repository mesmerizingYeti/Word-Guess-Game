const states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']

let wins = 0
let guessesLeft = 9
let currentGuesses = ''
let chosenState = Math.floor(49 * Math.random())
let display = ''
for (let i = 0; i < states[chosenState].length; i++) {
    display += '_'
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

console.log(states[chosenState])
console.log(display)

document.onkeypress = event => {
    console.log(event)


}
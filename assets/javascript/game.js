const states = ['ALABAMA', 'ALASKA', 'ARIZONA', 'ARKANSAS', 'CALIFORNIA', 'COLORADO', 'CONNECTICUT', 'DELAWARE', 'FLORIDA', 'GEORGIA', 'HAWAII', 'IDAHO', 'ILLINOIS', 'INDIANA', 'IOWA', 'KANSAS', 'KENTUCKY', 'LOUISIANA', 'MAINE', 'MARYLAND', 'MASSACHUSETTS', 'MICHIGAN', 'MINNESOTA', 'MISSISSIPPI', 'MISSOURI', 'MONTANA', 'NEBRASKA', 'NEVADA', 'NEW HAMPSHIRE', 'NEW JERSEY', 'NEW MEXICO', 'NEW YORK', 'NORTH CAROLINA', 'NORTH DAKOTA', 'OHIO', 'OKLAHOMA', 'OREGON', 'PENNSYLVANIA', 'RHODE ISLAND', 'SOUTH CAROLINA', 'SOUTH DAKOTA', 'TENNESSEE', 'TEXAS', 'UTAH', 'VERMONT', 'VIRGINIA', 'WASHINGTON', 'WEST VIRGINIA', 'WISCONSIN', 'WYOMING']

const videos = [
    // Alabama
    'https://www.youtube.com/watch?v=mpg27rsxsLM&list=PLMQMoYkBxsBowyq0eiCjxY8lYRW8Mvwj7&index=3&t=0s', 
    // Alaska
    'https://www.youtube.com/watch?v=jQaWnTa4xMg&list=PLMQMoYkBxsBowyq0eiCjxY8lYRW8Mvwj7&index=3',
    // Arizona
    'https://www.youtube.com/watch?v=P1Zicw4n0rE&list=PLMQMoYkBxsBowyq0eiCjxY8lYRW8Mvwj7&index=4',
    // Arkansas
    'https://www.youtube.com/watch?v=Kk8nBm1QlVQ&list=PLMQMoYkBxsBowyq0eiCjxY8lYRW8Mvwj7&index=5',
    // California
    'https://www.youtube.com/watch?v=YrnS5WQY1ro&list=PLMQMoYkBxsBowyq0eiCjxY8lYRW8Mvwj7&index=6',
    // Colorado
    'https://www.youtube.com/watch?v=nH_QgFT2WQw&list=PLMQMoYkBxsBowyq0eiCjxY8lYRW8Mvwj7&index=7',
    // Connecticut
    'https://www.youtube.com/watch?v=lq0TDUEFAEM&list=PLMQMoYkBxsBowyq0eiCjxY8lYRW8Mvwj7&index=8',
    // Delaware
    'https://www.youtube.com/watch?v=zBcDOFq3ypo&list=PLMQMoYkBxsBowyq0eiCjxY8lYRW8Mvwj7&index=9',
    // Florida
    'https://www.youtube.com/watch?v=pHBnjBvbPqw&list=PLMQMoYkBxsBowyq0eiCjxY8lYRW8Mvwj7&index=10',
    // Georgia
    'https://www.youtube.com/watch?v=KaC3IH3BzWI&list=PLMQMoYkBxsBowyq0eiCjxY8lYRW8Mvwj7&index=11',
    // Hawaii
    'https://www.youtube.com/watch?v=fkT1FFF1Y9M&list=PLMQMoYkBxsBowyq0eiCjxY8lYRW8Mvwj7&index=12',
    // Idaho
    'https://www.youtube.com/watch?v=c7uirDmpuKQ&list=PLMQMoYkBxsBowyq0eiCjxY8lYRW8Mvwj7&index=13',
    // Illinois
    'https://www.youtube.com/watch?v=IfUp0NuwAKU&list=PLMQMoYkBxsBowyq0eiCjxY8lYRW8Mvwj7&index=14',
    // Indiana
    'https://www.youtube.com/watch?v=gCCbCZhOl3U&list=PLMQMoYkBxsBowyq0eiCjxY8lYRW8Mvwj7&index=15',
    // Iowa
    'https://www.youtube.com/watch?v=NqTp3iXkZBg&list=PLMQMoYkBxsBowyq0eiCjxY8lYRW8Mvwj7&index=16',
    // Kansas
    'https://www.youtube.com/watch?v=4hF5mguEw4M&list=PLMQMoYkBxsBowyq0eiCjxY8lYRW8Mvwj7&index=17',
    // Kentucky
    'https://www.youtube.com/watch?v=vbGG5R4tXoY&list=PLMQMoYkBxsBowyq0eiCjxY8lYRW8Mvwj7&index=18',
    // Louisiana
    'https://www.youtube.com/watch?v=akpo1zofy0w&list=PLMQMoYkBxsBowyq0eiCjxY8lYRW8Mvwj7&index=19',
    // Maine
    'https://www.youtube.com/watch?v=_qebQVX3sLM&list=PLMQMoYkBxsBowyq0eiCjxY8lYRW8Mvwj7&index=20',
    // Maryland
    'https://www.youtube.com/watch?v=2Lac5s-QkI0&list=PLMQMoYkBxsBowyq0eiCjxY8lYRW8Mvwj7&index=21',
    // Massachusetts
    'https://www.youtube.com/watch?v=OlD4cQuKsrQ&list=PLMQMoYkBxsBowyq0eiCjxY8lYRW8Mvwj7&index=22',
    // Michigan
    'https://www.youtube.com/watch?v=AVHw2Ga4mow&list=PLMQMoYkBxsBowyq0eiCjxY8lYRW8Mvwj7&index=23',
    // Minnesota
    'https://www.youtube.com/watch?v=o3sRoXpfOjE&list=PLMQMoYkBxsBowyq0eiCjxY8lYRW8Mvwj7&index=24',
    // Mississippi
    'https://www.youtube.com/watch?v=PRlfr4wirAE&list=PLMQMoYkBxsBowyq0eiCjxY8lYRW8Mvwj7&index=25',
    // Missouri
    'https://www.youtube.com/watch?v=_s7ZsohKv7Q&list=PLMQMoYkBxsBowyq0eiCjxY8lYRW8Mvwj7&index=26',
    // Montana
    'https://www.youtube.com/watch?v=sT4kmLetIoM&list=PLMQMoYkBxsBowyq0eiCjxY8lYRW8Mvwj7&index=27',
    // Nebraska
    'https://www.youtube.com/watch?v=zMTxZnbtLKw&list=PLMQMoYkBxsBowyq0eiCjxY8lYRW8Mvwj7&index=28',
    // Nevada
    'https://www.youtube.com/watch?v=EoW0YusZB58&list=PLMQMoYkBxsBowyq0eiCjxY8lYRW8Mvwj7&index=29',
    // New Hampshire
    'https://www.youtube.com/watch?v=FIohB1PmvfM&list=PLMQMoYkBxsBowyq0eiCjxY8lYRW8Mvwj7&index=30',
    // New Jersey
    'https://www.youtube.com/watch?v=3FfRTwBdRBY&list=PLMQMoYkBxsBowyq0eiCjxY8lYRW8Mvwj7&index=31',
    // New Mexico
    'https://www.youtube.com/watch?v=RbARhECVZLQ&list=PLMQMoYkBxsBowyq0eiCjxY8lYRW8Mvwj7&index=32',
    // New York
    'https://www.youtube.com/watch?v=s0MVyYPWJCA&list=PLMQMoYkBxsBowyq0eiCjxY8lYRW8Mvwj7&index=33',
    // North Carolina
    'https://www.youtube.com/watch?v=V2lZKhx9J1s&list=PLMQMoYkBxsBowyq0eiCjxY8lYRW8Mvwj7&index=34',
    // North Dakota
    'https://www.youtube.com/watch?v=wsJ2mG3y_sk&list=PLMQMoYkBxsBowyq0eiCjxY8lYRW8Mvwj7&index=35',
    // Ohio
    'https://www.youtube.com/watch?v=3mChT55f_rQ&list=PLMQMoYkBxsBowyq0eiCjxY8lYRW8Mvwj7&index=36',
    // Oklahoma
    'https://www.youtube.com/watch?v=aK2nQBdVxPE&list=PLMQMoYkBxsBowyq0eiCjxY8lYRW8Mvwj7&index=37',
    // Oregon
    'https://www.youtube.com/watch?v=pEiD7_LSAQM&list=PLMQMoYkBxsBowyq0eiCjxY8lYRW8Mvwj7&index=38',
    // Pennsylvania
    'https://www.youtube.com/watch?v=U6ekJh7QG74&list=PLMQMoYkBxsBowyq0eiCjxY8lYRW8Mvwj7&index=39',
    // Rhode Island
    'https://www.youtube.com/watch?v=GOvyC-BaOHA&list=PLMQMoYkBxsBowyq0eiCjxY8lYRW8Mvwj7&index=40',
    // South Carolina
    'https://www.youtube.com/watch?v=KoXAqh-X8PQ&list=PLMQMoYkBxsBowyq0eiCjxY8lYRW8Mvwj7&index=41',
    // South Dakota
    'https://www.youtube.com/watch?v=Ghx1GJy1VCU&list=PLMQMoYkBxsBowyq0eiCjxY8lYRW8Mvwj7&index=42',
    // Tennessee
    'https://www.youtube.com/watch?v=olL-bDGphmM&list=PLMQMoYkBxsBowyq0eiCjxY8lYRW8Mvwj7&index=43']

console.log(document.getElementById('video'))
let x = document.getElementById('video')
x.style.display = 'none'

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

    if (97 <= event.keyCode && event.keyCode <= 122) {
        let key = event.key.toUpperCase()
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
                    x.style.display = 'block'
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
const states = ['ALABAMA', 'ALASKA', 'ARIZONA', 'ARKANSAS', 'CALIFORNIA', 'COLORADO', 'CONNECTICUT', 'DELAWARE', 'FLORIDA', 'GEORGIA', 'HAWAII', 'IDAHO', 'ILLINOIS', 'INDIANA', 'IOWA', 'KANSAS', 'KENTUCKY', 'LOUISIANA', 'MAINE', 'MARYLAND', 'MASSACHUSETTS', 'MICHIGAN', 'MINNESOTA', 'MISSISSIPPI', 'MISSOURI', 'MONTANA', 'NEBRASKA', 'NEVADA', 'NEW HAMPSHIRE', 'NEW JERSEY', 'NEW MEXICO', 'NEW YORK', 'NORTH CAROLINA', 'NORTH DAKOTA', 'OHIO', 'OKLAHOMA', 'OREGON', 'PENNSYLVANIA', 'RHODE ISLAND', 'SOUTH CAROLINA', 'SOUTH DAKOTA', 'TENNESSEE', 'TEXAS', 'UTAH', 'VERMONT', 'VIRGINIA', 'WASHINGTON', 'WEST VIRGINIA', 'WISCONSIN', 'WYOMING']

const videos = [
    // Alabama
    'https://www.youtube.com/embed/mpg27rsxsLM?controls=0', 
    // Alaska
    'https://www.youtube.com/embed/jQaWnTa4xMg?controls=0',
    // Arizona
    'https://www.youtube.com/embed/jQaWnTa4xMg?controls=0',
    // Arkansas
    'https://www.youtube.com/embed/Kk8nBm1QlVQ?controls=0',
    // California
    'https://www.youtube.com/embed/YrnS5WQY1ro?controls=0',
    // Colorado
    'https://www.youtube.com/embed/nH_QgFT2WQw?controls=0',
    // Connecticut
    'https://www.youtube.com/embed/lq0TDUEFAEM?controls=0',
    // Delaware
    'https://www.youtube.com/embed/zBcDOFq3ypo?controls=0',
    // Florida
    'https://www.youtube.com/embed/pHBnjBvbPqw?controls=0',
    // Georgia
    'https://www.youtube.com/embed/KaC3IH3BzWI?controls=0',
    // Hawaii
    'https://www.youtube.com/embed/fkT1FFF1Y9M?controls=0',
    // Idaho
    'https://www.youtube.com/embed/c7uirDmpuKQ?controls=0',
    // Illinois
    'https://www.youtube.com/embed/IfUp0NuwAKU?controls=0',
    // Indiana
    'https://www.youtube.com/embed/gCCbCZhOl3U?controls=0',
    // Iowa
    'https://www.youtube.com/embed/NqTp3iXkZBg?controls=0',
    // Kansas
    'https://www.youtube.com/embed/4hF5mguEw4M?controls=0',
    // Kentucky
    'https://www.youtube.com/embed/vbGG5R4tXoY?controls=0',
    // Louisiana
    'https://www.youtube.com/embed/akpo1zofy0w?controls=0',
    // Maine
    'https://www.youtube.com/embed/_qebQVX3sLM?controls=0',
    // Maryland
    'https://www.youtube.com/embed/2Lac5s-QkI0?controls=0',
    // Massachusetts
    'https://www.youtube.com/embed/OlD4cQuKsrQ?controls=0',
    // Michigan
    'https://www.youtube.com/embed/AVHw2Ga4mow?controls=0',
    // Minnesota
    'https://www.youtube.com/embed/o3sRoXpfOjE?controls=0',
    // Mississippi
    'https://www.youtube.com/embed/PRlfr4wirAE?controls=0',
    // Missouri
    'https://www.youtube.com/embed/_s7ZsohKv7Q?controls=0',
    // Montana
    'https://www.youtube.com/embed/sT4kmLetIoM?controls=0',
    // Nebraska
    'https://www.youtube.com/embed/zMTxZnbtLKw?controls=0',
    // Nevada
    'https://www.youtube.com/embed/EoW0YusZB58?controls=0',
    // New Hampshire
    'https://www.youtube.com/embed/FIohB1PmvfM?controls=0',
    // New Jersey
    'https://www.youtube.com/embed/3FfRTwBdRBY?controls=0',
    // New Mexico
    'https://www.youtube.com/embed/RbARhECVZLQ?controls=0',
    // New York
    'https://www.youtube.com/embed/s0MVyYPWJCA?controls=0',
    // North Carolina
    'https://www.youtube.com/embed/V2lZKhx9J1s?controls=0',
    // North Dakota
    'https://www.youtube.com/embed/wsJ2mG3y_sk?controls=0',
    // Ohio
    'https://www.youtube.com/embed/3mChT55f_rQ?controls=0',
    // Oklahoma
    'https://www.youtube.com/embed/aK2nQBdVxPE?controls=0',
    // Oregon
    'https://www.youtube.com/embed/pEiD7_LSAQM?controls=0',
    // Pennsylvania
    'https://www.youtube.com/embed/U6ekJh7QG74?controls=0',
    // Rhode Island
    'https://www.youtube.com/embed/GOvyC-BaOHA?controls=0',
    // South Carolina
    'https://www.youtube.com/embed/KoXAqh-X8PQ?controls=0',
    // South Dakota
    'https://www.youtube.com/embed/Ghx1GJy1VCU?controls=0',
    // Tennessee
    'https://www.youtube.com/embed/olL-bDGphmM?controls=0',
    // Texas
    'https://www.youtube.com/embed/UFUuh_XNXIU?controls=0',
    // Utah
    'https://www.youtube.com/embed/ExQVrbucG2g?controls=0',
    // Vermont
    'https://www.youtube.com/embed/zFTRYLS_93s?controls=0',
    // Virginia
    'https://www.youtube.com/embed/siSNj-PMCS8?controls=0',
    // Washington
    'https://www.youtube.com/embed/QaM_h28Wr0g?controls=0',
    // West Virginia
    'https://www.youtube.com/embed/GXLUpDFUxIo?controls=0',
    // Wisconsin
    'https://www.youtube.com/embed/BQyh-Ct-2LU?controls=0',
    // Wyoming
    'https://www.youtube.com/embed/vdcyjTGVglo?controls=0']

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
                    console.log(videos[game.chosenState])
                    iframe.setAttribute('src', videos[game.chosenState])
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
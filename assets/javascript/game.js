let wins = 0
let guessesLeft = 0
let currentGuesses = []
let chosenState = 0
let state = []
let winner = false
let picInterval

// reset variables for game
const resetGame = _ => {
    picInterval = setInterval(changeImage, 2000)
    guessesLeft = 12
    currentGuesses = []
    chosenState = Math.floor(49 * Math.random())
    state = []
    for (let i = 0; i < states[chosenState].length; i++) {
        let char = states[chosenState].charAt(i)
        state.push({ letter: char, show: char === ' '})
    }
    winner = false
    console.log(states[chosenState])
}

// display only guessed state letters
const displayState = _ => {
    let returnVal = ''
    state.forEach(element => returnVal += `${element.show?element.letter:'_'}`)
    return returnVal
}

// update text elements on document
const updateDocument = _ => {
    document.getElementById('wins').textContent = wins
    document.getElementById('current-word').textContent = displayState()
    document.getElementById('guesses-left').textContent = guessesLeft
    document.getElementById('guessed-letters').textContent = currentGuesses.join('')
}

// fade between two state images
const changeImage = _ => {
    document.getElementsByClassName('transparent')[0].setAttribute('src', `./assets/images/${states[Math.floor(Math.random()*49.9)]}.png`)
    for( let element of document.getElementsByClassName('img-fade')) {
        element.classList.toggle('transparent')
    }
}


resetGame()
updateDocument()

const win = _ => {
    wins++
    winner = true
    updateDocument()
    // stop state gallery fading
    clearInterval(picInterval)

    // create state video
    document.getElementById('media-container').innerHTML = `
        <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoCodes[chosenState]}?controls=0&autoplay=1" id='video' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `
    let video = document.getElementById('video')
    video.style.borderRadius = '20px'
    video.style.border = '3px solid white'

    // create play again button
    document.getElementsByClassName('second-row')[0].innerHTML = `
        <button id="btn-again" type="button" class="btn btn-light btn-lg">Click to play again</button>
    `
    // if play again button is pressed ...
    document.getElementById('btn-again').onclick = event => {
        // reset fading state images
        document.getElementById('media-container').innerHTML = `
            <img src="./assets/images/ALASKA.png" alt="state" class="img-fade media">
            <img src="./assets/images/ALABAMA.png" alt="state" class="img-fade transparent media">
        `
        // reset text instructions
        document.getElementsByClassName('second-row')[0].innerHTML = `
            <h2 class="lato c-white">Press any key to get started.</h2>
        `
        resetGame()
        updateDocument()
    }

    swal({
        title: 'CONGRADULATIONS',
        text: 'You guessed the state!',
        icon: 'success'
    })
}

document.onkeypress = event => {
    // No input when state video is playing
    if (winner) {
        return
    }
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
                // win condition
                win()
            } else if (guessesLeft === 1) {
                // Lose condition
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
            console.log('already chosen')
            swal({
                title: 'Guess Again',
                text: 'You already chose that letter.',
                icon: 'warning'
            })
        }

    } else {
        console.log('not a letter')
        swal({
            title: 'Guess Again',
            text: 'That is not a letter.',
            icon: 'warning'
        })
    }
}
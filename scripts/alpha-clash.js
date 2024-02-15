// function play(){
//     const homeScreen = document.getElementById('home');
//     homeScreen.classList.add('hidden');

//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');
// }
// **********************************************************************************



// capture keyboard button press
function handleKeyboardButtonPress(event){
    const alphabetPress = event.key;
    // console.log(alphabetPress);
    if(alphabetPress === 'Escape'){
        gameOver();
    }

    const currentAlphabet = document.getElementById('current-alphabet');
    const currentAlphabetText = currentAlphabet.innerText;
    const expectedAlphabet = currentAlphabetText.toLowerCase();
    // console.log(alphabetPress, expectedAlphabet);
    if(alphabetPress === expectedAlphabet){
        // console.log('you win')
        // increase current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);

        // const increaseScore = currentScore + 1;
        // currentScoreElement.innerText =increaseScore;
        // increase current score end
        // ***************************************************************************
        const currentScore = getElementValueById('current-score');
        const updateScore = currentScore + 1;
        setValueById('current-score',updateScore);

        continueGame()
        // remove background color inside keyboard
        removeBackgroundColorById(expectedAlphabet);
    }
    else{
        console.log('you lose, go your home')

        // decrease life

        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        // const decreaseLife = currentLife - 1;
        // currentLifeElement.innerText = decreaseLife;
        const currentLife = getElementValueById('current-life');
        const updateLife = currentLife - 1;
        setValueById('current-life',updateLife);

        if(updateLife === 0){
            gameOver();
        }

    }
}
document.addEventListener('keyup', handleKeyboardButtonPress);

// game continue
function continueGame(){
    let randomAlphabets = getARandomAlphabet();
    console.log('your random alphabet', randomAlphabets);

    // set current alphabet
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = randomAlphabets;

    // set background color
    setBackgroundColorById(randomAlphabets);

}

function play(){
    // hide evrything show only playground
    addClass('home');
    removeClass('play-ground');
    addClass('final-score');
    // reset score and life
    setValueById('current-score', 0);
    setValueById('current-life', 5);
    

    continueGame()
}

function gameOver(){
    addClass('play-ground');
    removeClass('final-score')
    // show last score
    const lastScore = getElementValueById('current-score');
    setValueById('game-score',lastScore);

    // game over hola keyboard heilight remove
    const currentAlphabet = getTextElement('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}
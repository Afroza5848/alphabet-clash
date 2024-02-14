// function play(){
//     const homeScreen = document.getElementById('home');
//     homeScreen.classList.add('hidden');

//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');
// }
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
    addClass('home');
    removeClass('play-ground');
    continueGame()
}
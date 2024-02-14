function addClass(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}

function removeClass(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}
// set back ground color inside keyboard
function setBackgroundColorById (elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

// random alphabet create

function getARandomAlphabet(){
    const alphabetString = "abcdefghijklmnopqrstuvwxyz";
    const alphabets = alphabetString.split('');
   
    const randomNumber = Math.random() * 25;
    const index = Math.floor(randomNumber);
    
    const randomAlphabets = alphabets[index];
    console.log(randomAlphabets)
    return randomAlphabets;
}
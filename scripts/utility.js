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
// remove background color inside keyboard
function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function getElementValueById(elementId){
   const element = document.getElementById(elementId) ;
   const elementInnerText = element.innerText;
   const expectedElement = parseInt(elementInnerText);
   return expectedElement;
}
// set score and life
function setValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}


// get emlement text
function getTextElement(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText
    return text;
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
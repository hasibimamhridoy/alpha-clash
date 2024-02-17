// For hidden a section
function hiddenElementId(elementAdd){
    const hiddenID = document.getElementById(elementAdd);
    hiddenID.classList.add('hidden');
}

// For unhidden a section
function showElementId(elementRemove){
    const addID = document.getElementById(elementRemove);
    addID.classList.remove('hidden');
}




// Random number generate 0 to 25 
function getRandomAlphabet(){
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    const alphaArray = alphabet.split("");
    const randomNumberGenerate = Math.floor(Math.random() *25);
    const randomAAlphabet = alphaArray[randomNumberGenerate];
    return randomAAlphabet;
}


// Set Key Background Color
function setBackgroundColor(background){
    const backgroundColor = document.getElementById(background);
    backgroundColor.classList.add('bg-orange-400');
}

// remove key background color
function removeBackgroundColor(background){
    const backgroundColor = document.getElementById(background);
    backgroundColor.classList.remove('bg-orange-400');
}

// get score

function getScoreTextToNumber(elementId){
    const scoreTextId = document.getElementById(elementId);
    const scoreText =  scoreTextId.innerText
    const scoreTextNumber = parseInt(scoreText);
    return scoreTextNumber;
}

function getScore(elementId, value){
    const score = document.getElementById(elementId)
    score.innerText = value; 
}
  
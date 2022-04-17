
var challengeWord = challengeWords[Math.floor(Math.random()*challengeWords.length)];

let challengeWordsArray = Array.from(challengeWord);

console.log(challengeWord);

function toUpper(textbox){
    textbox.value = textbox.value.toUpperCase();
}

function checkWord(checkButton) {
    let parentDiv = checkButton.parentNode;
    let childArr =  parentDiv.children;

    for(let i=0; i < childArr.length-1; i++) {

        let challengeLetter = challengeWord.charAt(i);
        let textElement = childArr[i];
        if (challengeLetter == textElement.value){
            textElement.style.background = "green";
            challengeWordsArray.splice(i, 1)
        } else{
            if(challengeWordsArray.includes(textElement.value)) {
                textElement.style.background = "orange";
            } else {
                textElement.style.background = "grey";
            }
        }
    }
}
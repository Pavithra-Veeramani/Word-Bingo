
var challengeWord = challengeWords[Math.floor(Math.random()*challengeWords.length)];
let challengeWordsArray = Array.from(challengeWord);
const numOfTextInput = 5;
console.log(challengeWord);

function onLoad(){
    let textboxdiv = document.getElementsByClassName("text-box-row");
    for(let i=0; i<textboxdiv.length; i++) {
        for(let j=0; j < numOfTextInput; j++) {
            let elText = document.createElement("input");
            elText.className = "text-box";
            elText.style.paddingLeft = "5px";
            elText.maxLength = 1;
            elText.addEventListener("blur", toUpper);
            elText.addEventListener("keyup", focusNext);
            textboxdiv[i].appendChild(elText);
        }
        let elBtn = document.createElement("button");
        elBtn.className = "word-check-btn";
        elBtn.innerHTML = "Check";
        elBtn.addEventListener("click", checkWord);
        textboxdiv[i].appendChild(elBtn);
    }
} 
function focusNext(event) {
    event.target.nextSibling.focus();
}

function toUpper(event){
    event.target.value = event.target.value.toUpperCase();
}

function checkWord(event) {
    let parentDiv = event.target.parentNode;
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
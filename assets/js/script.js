//challengeWords
let challengeWord = challengeWords[Math.floor(Math.random() * challengeWords.length)];
console.log(challengeWord);
let challengeWordsArray = Array.from(challengeWord);
const numOfTextInput = 5;

window.addEventListener("load", function (event) {
    //textbox
    let textboxdiv = document.getElementsByClassName("text-box-row");
    for (let i = 0; i < textboxdiv.length; i++) {
        for (let j = 0; j < numOfTextInput; j++) {
            let elText = document.createElement("input");
            elText.className = "text-box";
            elText.maxLength = 1;
            elText.addEventListener("blur", toUpper);
            elText.addEventListener("keyup", focusNext);
            textboxdiv[i].appendChild(elText);
        }
        let elBtn = document.createElement("button");
        elBtn.className = "word-check-btn";
        elBtn.innerHTML = checkBtnText;
        elBtn.addEventListener("click", checkWord);
        textboxdiv[i].appendChild(elBtn);
    }
});

function focusNext(event) {
   
    if (event.keyCode == 9 || event.keyCode == 32 || event.keyCode == 16 || event.keyCode == 8) {
        return;
    }
    event.target.nextSibling.focus();
}

function toUpper(event) {
    event.target.value = event.target.value.toUpperCase();
}

function checkWord(event) {
    //disable the check button
    event.target.disabled = true;

    let parentDiv = event.target.parentNode;
    let childArr = parentDiv.children;
    let successFlag = true;

    for (let i = 0; i < childArr.length - 1; i++) {

        let challengeLetter = challengeWord.charAt(i);
        let textElement = childArr[i];

        if (challengeLetter == textElement.value) {
            textElement.style.background = exactMatchColor;
            challengeWordsArray.splice(i, 1);
        } else {
            successFlag = false;
            if (challengeWordsArray.includes(textElement.value)) {
                textElement.style.background = matchColor;
            } else {
                textElement.style.background = noMatchColor;
            }
        }
    }
    //Success and failure message
    if (successFlag == true) {
        document.getElementById("result-message").innerHTML = resultSuccessMsg;
        document.getElementById("result-message").className = "success-msg";

    } else {
        document.getElementById("result-message").innerHTML = resultErrorMsg;
        document.getElementById("result-message").className = "failure-msg";
    }
}
//Random generated word
let challengeWord = challengeWords[Math.floor(Math.random() * challengeWords.length)];
let challengeWordsArray = Array.from(challengeWord);
const numOfTextInput = 5;

window.addEventListener("load", function (event) {
    //Get all the div elements with text-box-row
    let textboxdiv = document.getElementsByClassName("text-box-row");

    //Iterate all the div elements
    for (let i = 0; i < textboxdiv.length; i++) {

        //create five textboxes for each div
        for (let j = 0; j < numOfTextInput; j++) {
            let elText = document.createElement("input");
            elText.className = "text-box";
            elText.maxLength = 1;
            elText.addEventListener("blur", toUpper);
            elText.addEventListener("keyup", focusNext);
            textboxdiv[i].appendChild(elText);
        }
        //create one Check button for each div
        let elBtn = document.createElement("button");
        elBtn.className = "word-check-btn";
        elBtn.innerHTML = checkBtnText;
        elBtn.addEventListener("click", checkWord);
        textboxdiv[i].appendChild(elBtn);
    }
});

//whenever user keys in a letter the focus moves on to the next element
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
    //Get the parent element of the button pressed
    let parentDiv = event.target.parentNode;
    //Get all the child elements the parent (an indirect way of getting the other siblings)
    let childArr = parentDiv.children;
    let successFlag = true;

    //Iterate over the child elements except the button itself
    for (let i = 0; i < childArr.length - 1; i++) {

        //Get the computer generated word's letter
        let challengeLetter = challengeWord.charAt(i);
        //Get the user typed word's letter
        let textElement = childArr[i];

        if (challengeLetter == textElement.value) {
            //If its an exact match then set green color
            textElement.style.background = exactMatchColor;
            challengeWordsArray.splice(i, 1);
        } else {
            successFlag = false;
            if (challengeWordsArray.includes(textElement.value)) {
                //If its a match then set orange color
                textElement.style.background = matchColor;
            } else {
                //If no match then set grey color
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
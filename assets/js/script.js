/*var challengeWord = challengeWords[Math.floor(Math.random() * challengeWords.length)];
console.log(challengeWord);

function toUpper(textbox) {
    
    textbox.value = textbox.value.toUpperCase();
}

function checkWord(checkButton) {

    let parentDiv = checkButton.parentNode;
    let childArr = parentDiv.children;


    let letter1 = childArr[0];
    let letter2 = childArr[1];
    let letter3 = childArr[2];
    let letter4 = childArr[3];
    let letter5 = childArr[4];

    let challengeLetter1 = challengeWord.charAt(0);
    if (challengeLetter1 == letter1.value) {
        letter1.style.background = "green";
    } else {

        if (challengeWord.indexOf(letter1.value) != -1) {
            letter1.style.background = "orange";
        } else {
            letter1.style.background = "grey";
        }
    }

    let challengeLetter2 = challengeWord.charAt(1);
    if (challengeLetter2 == letter2.value) {
        letter2.style.background = "green";
    } else {

        if (challengeWord.indexOf(letter2.value) != -1) {
            letter2.style.background = "orange";
        } else {
            letter2.style.background = "grey";
        }
    }

    let challengeLetter3 = challengeWord.charAt(2);
    if (challengeLetter3 == letter3.value) {
        letter3.style.background = "green";
    } else {

        if (challengeWord.indexOf(letter3.value) != -1) {
            letter3.style.background = "orange";
        } else {
            letter3.style.background = "grey";
        }
    }

    let challengeLetter4 = challengeWord.charAt(3);
    if (challengeLetter4 == letter4.value) {
        letter4.style.background = "green";
    } else {

        if (challengeWord.indexOf(letter4.value) != -1) {
            letter4.style.background = "orange";
        } else {
            letter4.style.background = "grey";
        }
    }

    let challengeLetter5 = challengeWord.charAt(4);
    if (challengeLetter5 == letter5.value) {
        letter5.style.background = "green";
    } else {

        if (challengeWord.indexOf(letter5.value) != -1) {
            letter5.style.background = "orange";
        } else {
            letter5.style.background = "grey";
        }
    }
}*/
var challengeWord = challengeWord[Math.floor(Math.random()*challengeWord.length)];
console.log(challengeWord);

function toUpper(textbox){
    textbox.value = textbox.value.toUpperCase();
}
function checkWord(checkButton) {
    let matchedLetters = [];
    let parentDiv = checkButton.parentNode;
    let childArr =  parentDiv.children;

    for(let i=0; i < childArr.length-1; i++) {

        let challengeLetter = challengeWord.charAt(i);
        let textElement = childArr[i];
        if (challengeLetter == textElement.value){
            textElement.style.background = "green";
            matchedLetters.push(i);
        } else{
            if(challengeWord.indexOf(textElement.value) != -1) {
                textElement.style.background = "orange";
            } else {
                textElement.style.background = "grey";
            }
        }
    }
}
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
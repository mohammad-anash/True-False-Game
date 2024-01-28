const Startbutton = document.querySelector(".start");
const startContainer = document.querySelector(".start-container");
const playContainer = document.querySelector(".play-container");
const leftOption = document.querySelector(".left-option");
const Operator = document.querySelector(".operator");
const rigthOption = document.querySelector(".rigth-option");
const trueOption = document.getElementById("true");
const falseOption = document.getElementById("False");
const runButton = document.querySelector(".runButton");
const trueLable = document.querySelector(".gettrue");
const falseLable = document.querySelector(".getfalse");
const Suggestion = document.querySelector(".Suggestion");
const allRounds = document.querySelectorAll(".rounds");
const scoreContainer = document.querySelector(".score-container");
const correctAnswer = document.querySelector(".correct-answer");
const wrongAnswer = document.querySelector(".wrong-answer");

let correctCounter = 0;
let wrongCounter = 0;
let counter = 0;

// store random Number in left and rigth option
let setLeftOption = (leftOption.innerText = randomNumber(1, 10));
let setRightOption = (rigthOption.innerText = randomNumber(1, 10));
let setOperator = (Operator.innerHTML = randomOperator());

scoreContainer.classList.add("active");
function showHide() {
  startContainer.style.display = "none";
  playContainer.style.display = "block";
}

Startbutton.addEventListener("click", showHide);

// generate random operator
function randomOperator() {
  const operators = ["<", ">", "="];
  return operators[Math.floor(Math.random() * operators.length)];
}

// generate random between one to ten and store in left and rigth option
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function checkAnswer() {
  let result;
  switch (setOperator) {
    case ">":
      result = setLeftOption > setRightOption;
      break;
    case "<":
      result = setLeftOption < setRightOption;
      break;
    case "=":
      result = setLeftOption === setRightOption;
      break;
    default:
      return false;
  }
  return result;
}

function getTrueOrFalseValue(isTrue) {
  if ((isTrue && checkAnswer()) || (!isTrue && !checkAnswer())) {
    Suggestion.innerText = "You Are Correct";
    Suggestion.style.color = "yellowgreen";
  } else {
    Suggestion.innerText = "You Are Not Correct";
    Suggestion.style.color = "red";
  }

  if (Suggestion.innerText === "You Are Correct") {
    correctCounter++;
  } else {
    wrongCounter++;
  }
}

trueOption.addEventListener("click", function () {
  getTrueOrFalseValue(true);
});

falseOption.addEventListener("click", function () {
  getTrueOrFalseValue(false);
});

function correctAndWrong() {
  return `${(correctAnswer.innerText =
    correctCounter)}/${(wrongAnswer.innerText = wrongCounter)}`;
}

function generateMultipleThings() {
  if (counter === 4) {
    scoreContainer.classList.remove("active");
    playContainer.style.display = "none";
  }

  if (counter > 4) {
    return;
  } else {
    setLeftOption = randomNumber(1, 10);
    setRightOption = randomNumber(1, 10);
    setOperator = randomOperator();

    leftOption.innerText = setLeftOption;
    rigthOption.innerText = setRightOption;
    Operator.innerHTML = setOperator;

    const inArray = Array.from(allRounds);
    const divIndex = counter++;

    inArray[divIndex].style.backgroundColor = "yellowgreen";
    inArray[divIndex].style.border = "2px solid yellowgreen";
    Suggestion.innerText = "";

    trueOption.checked = false;
    falseOption.checked = false;

    correctAndWrong();
  }
}

runButton.addEventListener("click", generateMultipleThings);

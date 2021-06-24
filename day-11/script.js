import { arr } from "./question.js";

const question_El = document.querySelector(".question");
const score_El = document.querySelector("span");
const option_p_El = document.querySelectorAll(".option-p");
const option_btn_El = document.querySelectorAll(".option-btn");
const leftBtn = document.querySelector(".previous");
const rightBtn = document.querySelector(".next");

let idx = 3;
let score = 0;
// let answer = arr[idx].answer;

loadQuestions();

// renders question and options in page
function loadQuestions() {
  question_El.innerHTML = arr[idx].question;

  option_p_El.forEach((option, index) => {
    option.innerHTML = arr[idx][`option${index + 1}`];
  });
}

// calls checkanswer based on which option user clicked
option_btn_El.forEach((btn) => {
  btn.addEventListener("click", () => {
    checkAnswer(btn);
  });
});

// calls showAnswer and increment score if answer is correct
function checkAnswer(btn) {
  showAnswer(idx);
  if (btn.value == arr[idx].answer) {
    score++;
    score_El.innerText = `Score: ${score}`;
  }
}

// show correct and incorrect answer
function showAnswer(idx) {
  option_btn_El.forEach((btn) => {
    btn.classList.add("incorrect");
    option_btn_El[arr[idx].answer - 1].classList.add("correct");
  });
}

// remove answer when user goes to next/previous page
function removeAnswer() {
  option_btn_El.forEach((btn) => {
    btn.classList.remove("incorrect");
    btn.classList.remove("correct");
  });
}

leftBtn.addEventListener("click", () => {
  if (idx > 0 && idx <= 4) {
    idx--;
    removeAnswer();
    loadQuestions();
  }
});

rightBtn.addEventListener("click", () => {
  if (idx >= 0 && idx < 4) {
    idx++;
    removeAnswer();
    loadQuestions();
  }
});

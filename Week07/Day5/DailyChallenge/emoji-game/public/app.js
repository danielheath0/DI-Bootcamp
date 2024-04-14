import { emojis } from "./data.js";

const nextButton = document.getElementById("next-question");
const guessForm = document.getElementById("guess-form");
const optionList = document.getElementById("option-list");
const messageBox = document.getElementById("message-box");
const scoreBox = document.getElementById('score')
let questionEmoji;
const displayQuestion = (question) => {
  questionEmoji = question.question;
  const options = question.options;
  const questionItem = document.getElementById("question");
  questionItem.innerHTML = questionEmoji;
  optionList.innerHTML = "";

  options.forEach((option, index) => {
    const optionItem = document.createElement("label");
    const radioButton = document.createElement("input");
    radioButton.type = "radio";
    radioButton.name = "option";
    radioButton.value = option;
    radioButton.id = `option${index}`;

    const label = document.createElement("span");
    label.textContent = option;

    optionItem.appendChild(radioButton);
    optionItem.appendChild(label);

    optionList.appendChild(optionItem);
  });
  document.querySelector('button[type="submit"]').disabled = false;
};

nextButton.addEventListener("click", async () => {
  try {
    const response = await fetch("http://localhost:3000/question");
    if (!response.ok) {
      throw new Error("Failed to fetch question");
    }

    const {question,score} = await response.json();
    displayQuestion(question);
    // scoreBox.innerText = `Score: ${score}`

    messageBox.innerHTML = "";
  } catch (error) {
    console.error(error);
  }
});

window.addEventListener("load", async () => {
  try {
    const response = await fetch("http://localhost:3000/question");
    if (!response.ok) {
      throw new Error("Failed to fetch question");
    }

    const {question,score} = await response.json();
    displayQuestion(question);
    // scoreBox.innerText = `Score: ${score}`

    
    
  } catch (error) {
    console.error(error);
  }
});


guessForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const selectedOption = document.querySelector('input[name="option"]:checked');
  if (!selectedOption) {
    messageBox.innerHTML =
      '<span style="color:red">Please select an option!</span>';
    return;
  }

  const guess = selectedOption.value;

  const response = await fetch("http://localhost:3000/question", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({questionEmoji, guess }),
  });

  if (response.ok) {
    const result = await response.json();
    messageBox.innerText = await result.message;
    scoreBox.innerText = `Score: ${result.score}`
  } else {
    alert("Failed to submit. Try again.");
  }
  selectedOption.checked = false;
  // messageBox.innerHTML = "";
});

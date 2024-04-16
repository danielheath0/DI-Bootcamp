import triviaQuestions from "../config/data.js";

let counter = 0;
let score = 0;

const getQuestionOne = (req, res) => {
  const question = triviaQuestions[0].question;
  console.log(question);
  res.json(question);
};

const submitAndNext = (req, res) => {
  const { answer } = req.body;
  const correctAnswer = triviaQuestions[counter].answer;
  if (answer === correctAnswer) {
    score++;
    console.log("Correct!");
  } else {
    console.log("Wrong!");
  }
  counter++;
  const question = triviaQuestions[counter].question;
  res.json(question);
};
const displayScore = (req, res) => {
  console.log(score);
    res.json(score);
};

export { getQuestionOne, submitAndNext, displayScore };

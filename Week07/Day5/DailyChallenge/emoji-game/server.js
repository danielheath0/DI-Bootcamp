import { emojis } from "./public/data.js";
// import { getQuestion } from './app.js'
import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.static("./public"));
app.use(cors());
app.listen(3000, () => {
  console.log("Listening on 3000.");
});

let score = 0;

const getQuestion = (numberOfOptions) => {
  const arrayOfAnswers = [];
  const index = Math.floor(emojis.length * Math.random());
  const questionEmoji = emojis[index].emoji;
  const correctAnswer = emojis[index].name;
  arrayOfAnswers.push(correctAnswer);
  const filteredList = emojis.filter((obj) => obj.emoji !== questionEmoji);
  const arrayOfFilteredNames = filteredList.map((obj) => obj.name);
  for (let index = 0; index < numberOfOptions - 1; index++) {
    const optionIndex = Math.floor(arrayOfFilteredNames.length * Math.random());
    const option = arrayOfFilteredNames.splice(optionIndex, 1)[0];
    arrayOfAnswers.push(option);
  }
  arrayOfAnswers.sort(() => Math.random() - 0.5);

  const questionObj = {
    question: questionEmoji,
    answer: correctAnswer,
    options: arrayOfAnswers,
  };
  return questionObj;
};

app.get("/question", (req, res) => {
  const question = getQuestion(4);
  const responseData = {question, score}
  
  // res.json(question)
  res.json(responseData)
  ;
});

app.post("/question", (req, res) => {
  const { questionEmoji, guess } = req.body;
  const correctAnswer = emojis.find(
    (emoji) => emoji.emoji === questionEmoji && emoji.name === guess
  );

  if (correctAnswer) {
    score++
    res.status(200).json({ message: "Correct guess!", score });
    ;
  } else {
    res.status(200).json({ message: "Incorrect guess. Try again!",score });
  }
});

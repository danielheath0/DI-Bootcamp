import express from "express";
import router from "./routes/quiz.routes.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(666, () => {
  console.log("666 - The Number of the Beast");
});

app.use('/',router)
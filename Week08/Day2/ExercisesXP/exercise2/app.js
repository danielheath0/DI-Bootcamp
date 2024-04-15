import express from "express";
import router from "./routes/todos.js";

const app = express();

app.listen("1000", () => {
  console.log("listening on 1-0-0-0");
});


app.use(express.json())
app.use('/',router)
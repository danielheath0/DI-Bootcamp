import express from "express";
import router from "./routes/books.js";

const app = express();

app.listen("2000", () => {
  console.log("listening on 2000!");
});


app.use(express.json())
app.use('/',router)
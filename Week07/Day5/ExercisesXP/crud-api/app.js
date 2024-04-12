import express from "express";
import fetchPosts from "./data/dataService.js";

const app = express();

app.listen(5000, () => {
  console.log("Listening on 5000");
});

app.get("/posts", async (req, res) => {
  try {
    const posts = await fetchPosts();
    res.json(posts);
    console.log("Data successfully retrieved!")
  } catch (error) {
    console.error(error);
  }
});

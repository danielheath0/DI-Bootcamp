import express from "express";
import blogPosts from "./data.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
//GET all posts
app.get("/posts", (req, res) => {
  res.json(blogPosts);
});
//GET one post according to its id
app.get("/posts/:id", (req, res) => {
  const id = Number(req.params.id);
  const blogPost = blogPosts.find((post) => post.id === id);

  if (!blogPost) {
    return res.status(404).send("No such post!");
  }
  res.json(blogPost);
});

//POST a post
app.post("/posts", (req, res) => {
  const newBlogPost = {
    id: blogPosts.length + 1,
    title: req.body.title,
    content: req.body.content,
  };
  blogPosts.push(newBlogPost);
  res.status(201).json(newBlogPost);
});

//PUT an update to an existing post
app.put("/posts/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = blogPosts.findIndex((post) => post.id === id);
  if (index === -1) {
    return res.status(404).send("Post not found");
  }
  const updatedBlogPost = {
    id: blogPosts[index].id,
    title: req.body.title,
    content: req.body.content,
  };
  blogPosts[index] = updatedBlogPost;
  res.status(200).json("Post updated!");
});

//DELETE an post
app.delete("/posts/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = blogPosts.findIndex((post) => post.id === id);
  if (index === -1) {
    return res.status(404).send("Can't delete because it doesn't exist!");
  }
  blogPosts.splice(index, 1);
  res.status(200).json("Post deleted");
});

const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const app = express();
const port = 3000;

app.use(express.json());

const posts = [
  {
    username: "Yash",
    title: "Post 1",
  },
  {
    username: "Yashas",
    title: "Post 2",
  },
];

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    console.log(user);
    req.user = user;
    next();
  });
}

app.get("/posts", authenticateToken, (req, res) => {
  res.json(posts.filter((post) => req.user.name === post.username));
});

app.post("/login", (req, res) => {
  //Authenticate user.
  const username = req.body.username;
  const user = { name: username };
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  res.json({ accessToken: accessToken });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

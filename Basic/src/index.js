const express = require("express");
require("dotenv").config();
const app = express();
const port = 3000;

const githubData = {
  avatar_url: "https://avatars.githubusercontent.com/u/107790074?v=4",
  bio: "React.Js | TailwindCSS",
  created_at: "2022-06-19T08:24:37Z",
  html_url: "https://github.com/pranjaljaiswal10",
  id: 107790074,
  login: "pranjaljaiswal10",
  name: "Pranjal Jaiswal",
  node_id: "U_kgDOBmy--g",
  organizations_url: "https://api.github.com/users/pranjaljaiswal10/orgs",
  public_repos: 31,
  received_events_url:
    "https://api.github.com/users/pranjaljaiswal10/received_events",
  repos_url: "https://api.github.com/users/pranjaljaiswal10/repos",

  twitter_username: "pjpranjal04",
  type: "User",
  updated_at: "2024-08-30T14:04:41Z",
  url: "https://api.github.com/users/pranjaljaiswal10",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("pjpranjal04");
});

app.get("/youtube", (req, res) => {
  res.send("<h1>Welcome to Chai aur code</h1>");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please login at Chai aur Code</h1>");
});

app.get("/github", (req, res) => {
  res.json(githubData);
});

app.listen(process.env.PORT, () => {
  console.log(` ⚙️ Server is running at port : ${process.env.PORT}`);
});

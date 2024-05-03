var express = require("express");
var cors = require("cors");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var profileRouter = require("./routes/profile");
var introRouter = require("./routes/intro");
var experienceRouter = require("./routes/experience");
var projectsRouter = require("./routes/projects");

var app = express();
app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  next();
});

app.use("/profile", profileRouter);
app.use("/intro", introRouter);
app.use("/experience", experienceRouter);
app.use("/projects", projectsRouter);

module.exports = app;

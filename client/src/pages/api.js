import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080", // replace with your server URL
});

const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect("mongodb://localhost/mydatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const paperSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "title is required"],
  },
  description: {
    type: String,
    required: [true, "description is required"],
  },
});

const Paper = mongoose.model("Paper", paperSchema);

app.post("/api/papers", async (req, res) => {
  const newPaper = new Paper({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    await newPaper.save();
    res.status(201).send(newPaper);
  } catch (error) {
    res.status(500).send({ message: "Error saving paper to database" });
  }
});

app.get("/api/papers", async (req, res) => {
  try {
    const papers = await Paper.find();
    res.send(papers);
  } catch (error) {
    res.status(500).send({ message: "Error retrieving papers from database" });
  }
});

app.listen(3001, () => {
  console.log("API listening on port 3001");
});

export default api;

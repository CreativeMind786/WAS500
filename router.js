const express = require("express");
const router = express.Router();
const path = require("path");

// GET / - return the index.html file
const index = (req, res) => {
  res.sendFile(path.join(__dirname, "views/index.html"));
};

const bookOne = (req, res) => {
  res.sendFile(path.join(__dirname, "views/book1.html"));
};

const bookTwo = (req, res) => {
  res.sendFile(path.join(__dirname, "views/book2.html"));
};

const bookThree = (req, res) => {
  res.sendFile(path.join(__dirname, "views/book3.html"));
};

const book_details = (req, res) => {
  res.sendFile(path.join(__dirname, "views/book_details.html"));
};

const contactUs = (req, res) => {
  res.sendFile(path.join(__dirname, "views/contact_us.html"));
};

const honestyPage = (req, res) => {
  res.sendFile(path.join(__dirname, "views/honesty_page.html"));
};

const survey = (req, res) => {
  res.sendFile(path.join(__dirname, "views/survey.html"));
};

// export
module.exports = {
  index,
  bookOne,
  bookTwo,
  bookThree,
  book_details,
  contactUs,
  honestyPage,
  survey,
};

const mongoose = require("mongoose");
const express = require("express");
const Message = require("../models/Message");
const router = express.Router();

router.put("/", (req, res) => {
  // console.log("herererere!!", req.body.content);
  let filter = req.body.content;
  let author = filter.author;
  let mostLikes = filter.mostLikes;
  let startTime = filter.startTime;
  let endTime = filter.endTime;
  let keywords = filter.keywords;
  if (
    author === "" &&
    mostLikes === false &&
    startTime === "" &&
    endTime === "" &&
    keywords === ""
  ) {
    filter = null;
  }

  if (filter === null) {
    Message.find({})
      .then((obj) => {
        console.log(">> in filterMsg: obj is ", obj);
        res.status(200).send(obj);
      })
      .catch((err) => {
        console.log(">> in filterMsg: err is ", err);
        res.status(404).send(err);
      });
  } else {
    // Message.aggregate(
    //   { $text: { $search: keywords } },
    //   { $match: { name: author } },
    //   { $sort: { like: -1 } },
    //   { $limit: 1 }
    // )

    Message.find({ $and: [{ name: author }, { $text: { $search: keywords } }] })
      .sort({ like: -1 })
      .limit(1) // find the message with the most LIKEs
      .then((obj) => {
        console.log(">> in filterMsg: obj is ", obj);
        res.status(200).send(obj);
      })
      .catch((err) => {
        console.log(">> in filterMsg: err is ", err);
        res.status(500).send(err);
      });
  }
});

module.exports = router;

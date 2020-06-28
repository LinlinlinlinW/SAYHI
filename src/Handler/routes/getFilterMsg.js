const mongoose = require("mongoose");
const express = require("express");
const Message = require("../models/Message");
const router = express.Router();

queryHelper = (filter) => {
  let query = [];
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
    query.push({ $match: {} });
    return query;
  }

  if (keywords) {
    query.push({ $match: { $and: [{ $text: { $search: keywords } }] } });
  }

  if (author) {
    query.push({ $match: { $and: [{ name: author }] } });
  }

  if (startTime || endTime) {
    startTime = startTime
      ? new Date(startTime).toISOString()
      : new Date("1001-01-01").toISOString();
    endTime = endTime
      ? new Date(endTime).toISOString()
      : new Date("9999-12-31").toISOString();

    query.push({
      $match: { $and: [{ time: { $gte: startTime, $lte: endTime } }] },
    });
  }

  if (mostLikes) {
    query.push({ $sort: { like: -1 } });
  }

  return query;
};

router.put("/", (req, res) => {
  let filter = req.body.content;
  let query = queryHelper(filter);
  // console.log(">>>>>>> query:", query);

  Message.aggregate(query)
    .then((obj) => {
      console.log(">> in filterMsg: obj is ", obj);
      res.status(200).send(obj);
    })
    .catch((error) => {
      console.log(">> in filterMsg: err is ", error);
      alert(error);
      res.status(500).send(error);
    });
});

module.exports = router;

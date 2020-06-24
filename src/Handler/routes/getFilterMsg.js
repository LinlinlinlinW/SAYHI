const mongoose = require("mongoose");
const express = require("express");
const Message = require("../models/Message");
const router = express.Router();

router.put("/", (req, res) => {
  console.log("herererere!!", req.body.content);
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

  // {
  //   name: author,
  //   $let: {
  //     vars: {
  //       applyMostLike: {
  //         $cond: { if: mostLikes, then: "$like", else: null },
  //       },
  //     },
  //     in: { $max: { likes: "$$applyMostLike" } },
  //   },
  //   $in: [keywords, "$$msg"],
  //   time: {
  //     $gte: ISODate(startTime),
  //     $lt: ISODate(endTime),
  //   },
  // }

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
    Message.aggregate([
      // {
      //  $match: { name: author },
      //{
      // id: "$id",
      // name: "$name",
      // msg: "$msg",
      // time: "$time",
      // haveRead: "$haveRead",
      // dataNow: "$dataNow",
      //},
      // },
      {
        $group: {
          _id: author,
          like: { $max: "$like" },
        },
      },
    ])
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

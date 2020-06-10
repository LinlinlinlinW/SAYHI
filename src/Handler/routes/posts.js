const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const Message = require("../models/Message");

console.log(">> in posts.js");

router.post("/", (req, res) => {
  console.log(">> the req in post route: ", req.body);
  const newMsg = new Message({
    _id: new mongoose.Types.ObjectId(),
    id: req.body.id,
    name: req.body.name,
    msg: req.body.msg,
    like: req.body.like,
    time: req.body.time,
    haveRead: req.body.haveRead,
  });

  console.log(">> new message being added is ", newMsg);
  newMsg
    .save()
    .then((result) => {
      console.log(">> successfully save newMsg : ", result);
    })
    .catch((error) => {
      console.log(">> fail to save newMsg : ", error);
    });

  res.send({ status: "SUCCESS" });
});

// router.get("/", (req, res) => {
//   res.send("we are on post home");
// });

// router.get("/specific", (req, res) => {
//   res.send("we are on post specific");
// });

module.exports = router;

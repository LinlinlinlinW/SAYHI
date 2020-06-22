const mongoose = require("mongoose");
const express = require("express");
const Message = require("../models/Message");
const router = express.Router();

router.get("/", (req, res) => {
  let author = req.body.author ? req.body.author : "";
  let message = req.body.message ? req.body.message : "";
  let startTime = req.body.startTime ? req.body.startTime : "";
  let endTime = req.body.endTime ? req.body.endTime : "";
  Message.find({
    $or: [{ name: req.body.name }],
  })
    .then((obj) => {
      console.log("obj is ", obj);
      res.status(200).send(obj);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

module.exports = router;

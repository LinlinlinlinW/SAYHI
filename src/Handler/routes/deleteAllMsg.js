const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

router.delete("/", (req, res) => {
  Message.deleteMany({})
    .then((result) => {
      Message.find().then((rr) => {
        res.status(200).send(rr);
      });
    })
    .catch((err) => {
      res.status(405).send(err);
      console.log(">> something wrong in DELETE all msg,", err);
    });
});

module.exports = router;

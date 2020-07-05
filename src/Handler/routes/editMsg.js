const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

router.put("/", (req, res) => {
  Message.findOneAndUpdate(
    { id: req.body.contentToEdit.id },
    { msg: req.body.contentToEdit.value }
  )
    .then((result) => {
      console.log(">> successfully update msg");
      res.json("success");
    })
    .catch((error) => {
      console.log(">> cannot update LIKED msg");
      res.status(304).send(error);
    });
});

module.exports = router;

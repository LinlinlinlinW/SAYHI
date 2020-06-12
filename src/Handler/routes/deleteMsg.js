const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

router.delete("/", (req, res) => {
  console.log(">> in backend, id to be deleted is ", req.body);
  Message.findOne({ id: req.body.id })
    .then((result) => {
      Message.findOneAndDelete({ id: result.id })
        .then(() => {
          // return updated documents after deleting
          res.status(200).send(req.body.id);
        })
        .catch((error) => {
          res.status(304).send(error);
          console.log(">> cannot DELETE msg:", error);
        });
    })
    .catch((err) => {
      res.status(404).send(err);
      console.log(">> cannot find id in DELETE msg,", err);
    });
});

module.exports = router;

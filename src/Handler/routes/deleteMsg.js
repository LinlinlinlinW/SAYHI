const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

router.delete("/", (req, res) => {
  console.log(">> deleted id:", req.body.id);
  Message.findOne({ id: req.body.id })
    .then((result) => {
      Message.findOneAndDelete({ id: result.id })
        .then(() => {
          // return updated documents after deleting
          Message.find()
            .then((rr) => {
              res.status(200).send(rr);
            })
            .catch((rr) => {
              res.status(404).send(rr);
            });
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

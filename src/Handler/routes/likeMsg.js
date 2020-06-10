const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

router.put("/", (req, res) => {
  // first param: filter
  // second param: projection
  Message.findOne({ id: req.body.id }, "id like haveRead")
    .then((result) => {
      Message.findOneAndUpdate(
        { id: result.id },
        { like: result.like + 1, haveRead: true }
      )
        .then((result) => {
          Message.findOne({ id: result.id })
            .then((rr) => {
              res.status(200).send(rr);
            })
            .catch((er) => {
              console.log("somgthing wrong", er);
            });
        })
        .catch((error) => {
          res.status(304);
          console.log(">> cannot update LIKED msg:", error);
        });
    })
    .catch((err) => {
      res.status(404).send(err);
      console.log(">> cannot find id in LIKE msg:", err);
    });
});

module.exports = router;

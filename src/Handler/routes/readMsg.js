const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

router.put("/", (req, res) => {
  // first param: filter
  // second param: projection
  Message.findOne({ id: req.body.id }, "id haveRead")
    .then((result) => {
      Message.findOneAndUpdate({ id: result.id }, { haveRead: true })
        .then((result) => {
          Message.findOne({ id: result.id })
            .then((rr) => {
              res.send(rr);
            })
            .catch((er) => {
              console.log(">> something wrong", er);
            });
        })
        .catch((error) => {
          res.status(304);
          console.log(">> cannot update READ msg:", error);
        });
    })
    .catch((err) => {
      res.status(404).send(err);
      console.log(">> cannot find id in READ msg:", err);
    });
});

module.exports = router;

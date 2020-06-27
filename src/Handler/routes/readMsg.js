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
              res.status(200).send(rr);
            })
            .catch((er) => {
              console.log(">> something wrong :", er);
              res.status(500).send(er);
            });
        })
        .catch((error) => {
          console.log(">> cannot update READ msg :", error);
          res.status(304).send(error);
        });
    })
    .catch((error) => {
      console.log(">> cannot find id in READ msg :", error);
      res.status(404).send(error);
    });
});

module.exports = router;

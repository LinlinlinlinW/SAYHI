const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

router.post("/", (req, res) => {
  Message.find({ id: req.body.id })
    .then((obj) => {
      // obj is an array
      if (obj.length !== 0) {
        console.log("obj:", obj);
        res.status(409).send({ "msg have already exists": obj });
      } else {
        const newMsg = new Message({
          _id: new mongoose.Types.ObjectId(),
          id: req.body.id,
          name: req.body.name,
          msg: req.body.msg,
          like: req.body.like,
          time: req.body.time,
          haveRead: req.body.haveRead,
        });

        newMsg
          .save()
          .then((result) => {
            console.log(">> successfully save newMsg : ", result);
            res.status(201).send(result);
          })
          .catch((error) => {
            console.log(">> fail to save newMsg : ", error);
          });
      }
    })
    .catch((err) => {
      res.status(409).send({ "something wrong:": err });
    });
});
module.exports = router;

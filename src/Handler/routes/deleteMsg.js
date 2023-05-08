const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

router.delete("/", (req, res) => {
  Message.findOne({ id: req.body.id })
    .then((result) => {
      Message.findOneAndDelete({ id: result.id })
        .then(() => {
          // return updated documents after deleting
          res.status(200).send(req.body.id);
        })
        .catch((error) => {
          console.log(">> cannot DELETE msg :", error);
          res.status(304).send(error);
        });
    })
    .catch((error) => {
      console.log(">> cannot find id in DELETE msg :", error);
      res.status(404).send(error);
    });
});

module.exports = router;

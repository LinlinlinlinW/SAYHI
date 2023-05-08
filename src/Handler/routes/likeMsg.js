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
            .catch((error) => {
              console.log(">> somgthing wrong :", error);
              res.status(500).send(error);
            });
        })
        .catch((error) => {
          console.log(">> cannot update LIKED msg :", error);
          res.status(304).send(error);
        });
    })
    .catch((error) => {
      console.log(">> cannot find id in LIKE msg :", error);
      res.status(404).send(error);
    });
});

module.exports = router;

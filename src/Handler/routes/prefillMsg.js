const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

router.put("/", (req, res) => {
  Message.find({})
    .then((obj) => {
      // obj is an array
      if (obj.length !== 0) {
        console.log("obj:", obj);
        res.send({ prefilledMsg: obj });
      } else {
        let newMsg1 = new Message({
          _id: new mongoose.Types.ObjectId(),
          id: "id1",
          name: "John Doe",
          msg: "Message shown here!",
          like: 0,
          time: new Date().toLocaleString(),
          haveRead: false,
          dateNow: 1591912492096,
        });
        let newMsg2 = new Message({
          _id: new mongoose.Types.ObjectId(),
          id: "id2",
          name: "Obaseki Nosa",
          msg: "Message shown here!",
          like: 3,
          time: "6/9/2020, 12:32:15 AM",
          haveRead: true,
          dateNow: 1591912492196,
        });

        newMsg1
          .save()
          .then((prefillMsg1) => {
            newMsg2
              .save()
              .then((prefillMsg2) => {
                console.log(
                  ">> successfully prefill msg : ",
                  prefillMsg1,
                  prefillMsg2
                );
                res.status(201).send({ prefillMsg1, prefillMsg2 });
              })
              .catch((error) => {
                console.log(">> fail to save newMsg2 : ", error);
              });
          })
          .catch((error) => {
            console.log(">> fail to save newMsg1 : ", error);
          });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(409).send({ "somethingWrong:": err });
    });
});

// router.get("/", (req, res) => {
//   res.send("we are on post home");
// });
module.exports = router;

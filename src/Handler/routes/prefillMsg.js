const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

router.put("/", (req, res) => {
  Message.find({})
    .then((obj) => {
      if (obj.length !== 0) {
        res.status(200).send(obj);
      } else {
        let newMsg1 = new Message({
          _id: new mongoose.Types.ObjectId(),
          id: "id1",
          name: "John Doe",
          msg: "Message shown here!",
          like: 0,
          time: new Date().toISOString(),
          haveRead: false,
          dateNow: 1591912492096,
        });
        let newMsg2 = new Message({
          _id: new mongoose.Types.ObjectId(),
          id: "id2",
          name: "Obaseki Nosa",
          msg: "Message shown here!",
          like: 3,
          time: "2020-06-09T12:32:15.745Z",
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
                alert(error);
                res.status(500).send(error);
              });
          })
          .catch((error) => {
            console.log(">> fail to save newMsg1 : ", error);
            alert(error);
            res.status(500).send(error);
          });
      }
    })
    .catch((error) => {
      console.log(">> something wrong in find messages in db :", error);
      alert(error);
      res.status(409).send(error);
    });
});

module.exports = router;

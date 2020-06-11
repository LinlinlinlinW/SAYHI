// import the package
const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");
require("dotenv/config");

// import routes
const putPrefilledMsg = require("./routes/prefillMsg");
const postRoute = require("./routes/addNewMsg");
const deleteRoute = require("./routes/deleteMsg");
const putRoute_read = require("./routes/readMsg");
const putRoute_like = require("./routes/likeMsg");
const deleteAllRoute = require("./routes/deleteAllMsg");

// execute it
const handler = express();
handler.use(cors());
handler.use(express.urlencoded({ extended: true }));
handler.use(express.json());
handler.use("/puts_prefill", putPrefilledMsg);
handler.use("/posts", postRoute);
handler.use("/deletes", deleteRoute);
handler.use("/puts_read", putRoute_read);
handler.use("/puts_like", putRoute_like);
handler.use("/deletes_all", deleteAllRoute);

// connect to mongodb through mongoose
mongoose.connect(
  "mongodb+srv://m001-student:m001-mongodb-basics@sandbox-qheyf.mongodb.net/messages?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  console.log(">> connected to DB!")
);

// How do we start to listening to the server
handler.listen(9000);

// CONNECT TO DB DIRECTLY
// let mongodb = require("mongodb");
// let MongoClient = mongodb.MongoClient;

// MongoClient.connect(
//   process.env.DB_CONNECTION,
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   },
//   function (err, db) {
//     if (err) throw err;
//     let dbo = db.db("messages");
//     dbo.collection("message").findOne({}, function (err, result) {
//       if (err) throw err;
//       console.log("herererere");
//       console.log(result);
//       console.log("》》》》herererere");
//       db.close();
//     });
//   }
// );

// import the package
const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");

// import routes
const postRoute = require("./routes/posts");

// execute it
const handler = express();
handler.use(express.urlencoded({ extended: true }));
handler.use(express.json());
handler.use("/posts", postRoute);

// connect to mongodb through mongoose
mongoose.connect(
  "mongodb+srv://m001-student:m001-mongodb-basics@sandbox-qheyf.mongodb.net/messages?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  console.log(">> connected to DB!")
);

console.log(">> line 22");
// How do we start to listening to the server
handler.listen(9000);
console.log(">> line 25");

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

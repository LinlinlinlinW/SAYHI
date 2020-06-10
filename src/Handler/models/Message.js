const mongoose = require("mongoose");

const messageSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    id: {
      type: String,
      required: true,
    },
    name: String,
    msg: String,
    like: Number,
    time: {
      type: String,
      default: new Date().toLocaleString(),
    },
    haveRead: Boolean,
  },
  { collection: "message" }
);

module.exports = mongoose.model("Message", messageSchema);

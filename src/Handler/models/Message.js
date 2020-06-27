const mongoose = require("mongoose");

const messageSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    id: { type: String, required: true },
    name: { type: String, default: "Guest" },
    msg: { type: String, default: "The guest doesn't say anything" },
    like: { type: Number, default: 0 },
    time: { type: String, default: new Date().toLocaleString() },
    haveRead: { type: Boolean, default: false },
    dateNow: { type: Number, required: true },
  },
  { collection: "message" }
);
// messageSchema.index({ msg: "text" });
messageSchema.index({ msg: "text" }, (err, result) => {});

module.exports = mongoose.model("Message", messageSchema);

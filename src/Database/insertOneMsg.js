db = db.getSiblingDB("messages");
db.message.insertOne({
  id: "id3",
  name: "Bolin Wang",
  msg: "I am taking CPSC436.",
  like: 0,
  time: "6/9/2020, 1:18:15 AM",
  haveRead: false,
  dateNow: Date.now(),
});

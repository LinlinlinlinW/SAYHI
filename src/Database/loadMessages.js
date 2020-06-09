db = db.getSiblingDB("messages");
db.message.drop();
db.message.insertMany([
  {
    id: "id1",
    name: "John Doe",
    msg: "Message shown here!",
    like: 0,
    time: "6/7/2020, 12:52:15 PM",
    haveRead: false,
  },
  {
    id: "id2",
    name: "Obaseki Nosa",
    msg: "Message shown here!",
    like: 3,
    time: "6/9/2020, 12:32:15 AM",
    haveRead: true,
  },
]);

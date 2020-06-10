db = db.getSiblingDB("messages");
db.message.updateOne({ id: "id3" }, { $set: { like: 1 } });

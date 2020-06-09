db = db.getSiblingDB("messages");

db.message.updateOne({ id: "id3" }, { $set: { like: 1 } });

// check if the id is exist
// if not, create one
// else, update

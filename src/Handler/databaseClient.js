let mongodb = require('mongodb');
let MongoClient = mongodb.MongoClient;

let url = 'mongodb+srv://m001-student:m001-mongodb-basics@sandbox-qheyf.mongodb.net/messages?retryWrites=true&w=majority';

// MongoClient.connect(url, (err, client) => {
//     if (err)
//         throw err;
//
//     let db = client.db('messages');
//
//     db.collection('message').find().toArray(function (err, result) {
//         if (err)
//             throw err
//         console.log(result)
//     })
// })

MongoClient.connect(url,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },function(err, db) {
    if (err)
        throw err;
    let dbo = db.db("messages");
    dbo.collection("message").findOne({}, function(err, result) {
        if (err) throw err;
        console.log("herererere");
        console.log(result);
        console.log("》》》》herererere");
        db.close();
    });
});

//建立mongoDB的連線資訊
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback=>{
    MongoClient.connect('mongodb+srv://timtsai:ksrciSyv8mVPG6K4@hweb.l1zgtl9.mongodb.net/?retryWrites=true&w=majority') //連線字串 從mongo altes複製, 記得username:pwd
    .then(client=>{
        console.log('Connected!');
        _db = client.db();
        callback(client);
    })
    .catch(err=>{
        console.log(err);
        throw err;
    });
};

const getDb = () =>{
    if(_db){
        return _db;
    }
    throw 'No database Found!';
};

// module.exports = mongoConnect;
// module.exports = getDb;
exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
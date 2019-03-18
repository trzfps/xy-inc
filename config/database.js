const mongo = require('mongodb');

var connMongoDb = function(){

    const database = new mongo.Db(
        'xy',
        new mongo.Server(
            'localhost',
            27017,
            {},
            {}
        )
    );
    return database;
}
module.exports = function(){
    return connMongoDb
}
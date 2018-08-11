const dbCLient = require('mongodb').MongoClient

const url = "mongodb://localhost:27017"
const dbName = "loginapp"
let collections = {}

dbCLient.connect(url,(err,client) => {
    console.log("connection was successful")
    const db = client.db(dbName)

    collections.users = db.collection('users')
}
)
module.exports = collections
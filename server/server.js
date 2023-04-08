const express = require('express');
const mongodb = require('mongodb');
const app = express();

const uri = "mongodb+srv://se53:password123!@cluster0.fdolhxg.mongodb.net/test"

async function connect() {
    try {
        const client = await mongodb.MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        const db = client.db('eecs-connect');
        const collection = db.collection('users');

        // Fetch data from the collection
        const data = await collection.find({}).toArray();
        console.log('Data:', data);

        client.close();
    } catch (error) {
        console.log(error);
    }
}

connect();

app.listen(8000, () => {
    console.log("Server started on port 8000");
});

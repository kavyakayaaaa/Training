const { MongoClient } = require('mongodb');
// const { connectToDatabase } = require('./ServerApi');
 
// Connection URI
const uri = 'mongodb://localhost:27017'; // Change this to your MongoDB URI
 
// Create a new MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
 
// Connect to the MongoDB server
 async function connectToDatabase() {
    try {
        // Connect to the server
        await client.connect();
 
        console.log('Connected to MongoDB');
 
        // Once connected, you can interact with the database here
 
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
}
 
// Call the connectToDatabase function to establish the connection
 connectToDatabase();
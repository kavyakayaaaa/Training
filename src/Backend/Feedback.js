const mongoose = require('mongoose');

// Define the schema for inventory
const FeedbackSchema = new mongoose.Schema({
   Feedbackid  : {
        type: Number,
        required: true
    },
    pname: {
        type: String,
        required: true
    },
    presentlocation: {
        type: String,
        required: true
    },
    qty: {
        type: Number,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    Noofpackets: {
        type: Number,
        required: true
    },
    capacity: {
        type: Number,
        required: true
    }
});

// Create a Mongoose model based on the schema
const Feedback = mongoose.model('Feedback', FeedbackSchema);

// Export the model
module.exports = Feedback;

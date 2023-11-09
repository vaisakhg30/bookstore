const mongoose = require('mongoose');

const bookstoreModel = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    author: {
        required: true,
        type: String
    },
    title: {
        required: true,
        type: String
    },
    category: {
        required: true,
        type: String
    },
    publishedyear: {
        required: true,
        type: String
    },
    userRole: {
        required: true,
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    }
});

module.exports = mongoose.model("bookstoretable", bookstoreModel);
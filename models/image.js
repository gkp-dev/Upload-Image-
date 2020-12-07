const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    imageUrl: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 300,
    }
})

const Image = new mongoose.model('image', schema);

module.exports = Image;
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/userimage')
    .then(() => console.log('Connect to mongodb'))
    .catch((err) => console.log(`Couldn't connect to mongodb`, err))

module.exports = mongoose;
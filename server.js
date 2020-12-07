const express = require('express');
const app = express();
const users = require('./routes/image');
const db = require('./db/mongo');

app.use(express.static('public'))
app.use('/api/users', users);



//PORT
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`My app is listening on port ${port}...`);
})
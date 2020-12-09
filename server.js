const express = require('express');
const image = require('./routes/image');

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use('/api/uploads', image);



//PORT
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`My app is listening on port ${port}...`);
})
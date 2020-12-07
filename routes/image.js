const express = require('express');
const router = express();
const Url = require('../models/image');

router.use(express.json())

router.post('/', async(req, res) => {

    //Send data to the database
    let { url } = await req.body;
    res.json('Data received')

    url = new Url({
        imageUrl: url,
    })
    console.log(url);
    //await url.save()

})

module.exports = router;
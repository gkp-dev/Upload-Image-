const path = require('path');
const { Router } = require('express');
const multer = require('multer');


const router = Router();

//Set storage Engine
const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, `${process.cwd()}/public/images`)
    },

    filename(req, file, cb) {
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
    }
});



//Init Upload
const upload = multer({ storage: storage })

router.post('/', upload.single('myImage'), (req, res) => {
    const { file } = req;
    res.json({ imagePath: `./images/${file.filename}` })
})

module.exports = router;
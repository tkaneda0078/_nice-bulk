const express = require('express');
const router = express.Router();
const multer  = require('multer');
const upload = multer({ dest: './uploads/' });

/**
 * home
 */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/**
 * 画像認識
 */
router.post('/recognition_decision',  upload.single('image_model'), (req, res) => {
  console.log(req.file);
});

module.exports = router;

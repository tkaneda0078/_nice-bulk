const express = require('express');
const router = express.Router();
const multer  = require('multer');
const upload = multer({ dest: './uploads/' });

router.post('/recognition_decision', function(req, res, next) {
  upload(req, res, function (err) {
    if (err) {
      res.send("Failed to write " + req.file.destination + " with " + err);
    }
    console.log(res.file);
  });
});
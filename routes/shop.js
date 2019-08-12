const path = require('path');

const express = require('express');

const router = express.Router();


router.get('/', (req, res, next) => {
  // __dirname is a global variable that simply holds the absolute path on our OS to this
  // project folder. The reason we separate views and shop.html instead of concatenating them
  // is because of how the path works differently in other OS. Linux uses '/' and Windows
  // uses '\' for instance. The '../' is to go up one folder since views is a sibling folder.
  res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});


module.exports = router;


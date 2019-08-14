const path = require('path');

const rootDir = require('../util/path');

const express = require('express');

const router = express.Router();

// Similar to how we use app.use() we can use router.use, or router.get, etc.
router.get('/add-product', (req, res, next) => {
  //res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></input></form>');
  // Since we are sending a response we don't want to call next()
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));

});

router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
//const http = require('http');   // Not necessary with app.listen()
const express = require('express');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const bodyParser = require('body-parser');


const app = express();

/*
In express.js using 'middleware' is a common concept. The use()
method is invoked after the creation of the express object bwefore
app gets passed to createServer. The use() allows us to add a new
middleware function. It accepts an array of request handlers.
next - is a function that will be passed to the below function.
*/

// This is a necessary middleware to parse request bodys. Without this if we try to say console.log(req.body)
// it will return undefined. Note - will not parse all types of bodys like files, JSON, etc.
app.use(bodyParser.urlencoded({extended: true}));

app.use('/admin',adminRoutes);

app.use(shopRoutes);

// 404 Page not found middleware
app.use((req, res, next) => {
  // note - you can chain these functions, but send has to be at the very end.
  res.status(404).send('<h1>Page not found!</h1>');
});

app.listen(3000);




/*
const server = http.createServer(app);

app.use('/add-product', (req, res, next) => {
  res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></input></form>');
  // Since we are sending a response we don't want to call next()

});


Note - /product middleware can technically be placed before or after /add-product
since it doesn't share anything in common besides '/'.
Note - changing app.use() to app.post() will also filter in another way. Previously use() would cause that middleware
to trigger on GET requests also, but we only want it on POST.

app.post('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');

  
app.use('/', (req, res, next) => {
  // We can still do the nodejs res.write() and res.setHeader() for example,
  // but there are new utility functions that we can do.
  res.send('<h1>Expresssssssssssss!</h1>');
  // send allows us to a response. Allows us to send a body of type any.
  // By default the send method sends a HTML content type.
});


server.listen(3000);

*/
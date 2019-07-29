//const http = require('http');   // Not necessary with app.listen()

const express = require('express');

const app = express();

// In express.js using 'middleware' is a common concept. The use()
// method is invoked after the creation of the express object bwefore
// app gets passed to createServer. The use() allows us to add a new
// middleware function. It accepts an array of request handlers.
// next - is a function that will be passed to the below function.
app.use((req, res, next) => {
    console.log('In the middleware!');
    next(); // allows the request to continue to the next middleware in line.
});

app.use((req, res, next) => {
    console.log('In another middleware!');
    // We can still do the nodejs res.write() and res.setHeader() for example,
    // but there are new utility functions that we can do.
    res.send('<h1>Expresssssssssssss!</h1>');
    // send allows us to a response. Allows us to send a body of type any.
    // By default the send method sends a HTML content type.

});

// Instead of how previously we created the server then passed in app, we can just
// shorten it with app.listen()
app.listen(3000);

/*
const server = http.createServer(app);

server.listen(3000);
*/
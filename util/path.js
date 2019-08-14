const path = require('path');

// process is a global variable that is available.
// mainModule is the path to the main module of your app (basically app.js in this case.)
module.exports = path.dirname(process.mainModule.filename);
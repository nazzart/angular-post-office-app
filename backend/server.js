// Import dependencies
const express = require('express');

// Include all routes
const index = require('./routes/index');

// Init Express server
const app = express();

// Define the port
const PORT = 3000;

// Enable CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Use routes
app.use('/', index);

// Listen for the changes
app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}!`);
});

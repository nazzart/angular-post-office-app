// Import dependencies
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Include all routes
const index = require('./routes/index');
const office = require('./routes/office');

// Init Express server
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Define the port
const PORT = 3000;

// Enable CORS
app.use(cors());

// Use routes
app.use('/', index);
app.use('/post-office', office);

// Listen for the changes
app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}!`);
});

module.exports = app;

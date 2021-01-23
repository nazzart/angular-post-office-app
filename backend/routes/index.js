const express = require('express');
const router = express.Router();

/**
 * Route to get the homepage
 */
router.get('/', function(req, res) {
    res.send();
});

module.exports = router;

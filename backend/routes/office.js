const express = require('express');
const router = express.Router();
const uuidv4 = require('uuid/v4');

router.post('/add', function(req, res) {
    const request = req.body;
    const newOffice= {
        id: uuidv4(),
        PLZ: request.PLZ,
        name: request.name,
    };
    addToList(newOffice);
    res.send('Office added successfully');
});

module.exports = router;

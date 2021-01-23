const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const db = require('../db-mock/db');

/**
 * Route to add a new office
 */
router.post('/add', function(req, res) {
    const request = req.body;
    const newOffice= {
        id: uuidv4(),
        PLZ: request.PLZ,
        name: request.name,
    };
    if(addToList(newOffice)){
        res.send({success: { message: 'Office has been added!'}});
    } else {
        res.status(500).send({message: 'Something failed!'});
    }
});

/**
 * Route to update an office
 */
router.post('/update', function(req, res) {
    const id = req.body.id;
    const updatedOffice = req.body;
    const office = findOffice(id);
    updateOffice(office, updatedOffice);
    res.send({success: { message: 'Office has been updated!'}});
});

/**
 * Route to delete an office
 */
router.post('/delete', function(req, res) {
    const id = req.body.id;
    const office = findOffice(id);
    if(deleteOffice(office)){
        res.send({success: { message: 'Office has been deleted!'}});
    } else {
        res.status(500).send({message: 'Something failed!'});
    }
});

/**
 * Route to get list of offices
 */
router.get('/list', function(req, res) {
    res.send(db.offices);
});

/**
 * Route to get specific office by ID
 */
router.get('/:id', function(req, res) {
    const id = req.params.id;
    const office = findOffice(id);
    if(office) {
        res.send(office);
    } else {
        res.status(500).send({message: 'Office not found!'});
    }
});

/**
 * Adds a new office
 */
function addToList(newOffice) {
    db.offices.push(newOffice);
    return true;
}

/**
 * Update office
 */
function updateOffice(office, updatedOffice) {
    const pos = db.offices.indexOf(office);
    if(pos !== -1) {
        db.offices[pos] = updatedOffice;
        return true;
    }
    return false;
}

/**
 * Delete office
 */
function deleteOffice(office) {
    const pos = db.offices.indexOf(office);
    if(pos !== -1) {
        db.offices.splice(pos, 1);
        return true;
    }
    return false;
}

/**
 * Find office
 */
function findOffice(id) {
    const office = db.offices.filter(office => office.id === id);
    if (office.length === 0) {
        return false;
    } else {
        return office[0];
    }
}

module.exports = router;

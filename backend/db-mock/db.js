const { v4: uuidv4 } = require('uuid');

/**
 * List of offices
 */
const offices = [
    {
        id: uuidv4(),
        PLZ: 80686,
        name: 'Laim',
    },
    {
        id: uuidv4(),
        PLZ: 80335,
        name: 'Schwanthalerhöhe',
    },
];

module.exports = {
    offices
};

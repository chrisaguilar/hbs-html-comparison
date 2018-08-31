const path = require('path');

const router = require('express').Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
});

router.get('/add', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/add.html'));
});

router.get('/animal*', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/animal.html'));
});

module.exports = router;

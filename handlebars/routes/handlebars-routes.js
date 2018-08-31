const router = require('express').Router();

const models = require('../db/models');

router.get('/', (req, res) => {
    models.Animal.findAll().then(animals => res.render('index', { animals: animals }));
});

router.get('/add', (req, res) => {
    res.render('add');
});

router.get('/animal/:id', (req, res) => {
    models.Animal.findById(req.params.id).then(animal => res.render('animal', { animal }));
});

module.exports = router;

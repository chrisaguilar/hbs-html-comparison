const router = require('express').Router();

const models = require('../db/models');

router.get('/api/animals', (req, res) => {
    models.Animal.findAll()
        .then(animals => res.json(animals))
        .catch(err => res.status(500).json({ success: false, error: err }));
});

router.post('/api/animals', (req, res) => {
    const animal = req.body;
    console.log(animal);
    models.Animal.create(animal)
        .then(() => {
            res.json({ success: true });
        })
        .catch(err => res.status(500).json({ success: false, error: err }));
});

router.get('/api/animals/:id', (req, res) => {
    models.Animal.findById(req.params.id)
        .then(animal => res.json(animal))
        .catch(err => res.status(500).json({ success: false, error: err }));
});

module.exports = router;

const router = require('express').Router();

const models = require('../db/models');

router.post('/api/animals', (req, res) => {
    const animal = req.body;
    console.log(animal);
    models.Animal.create(animal)
        .then(() => {
            res.json({ success: true });
        })
        .catch(err => res.status(500).json({ success: false, error: err }));
});

module.exports = router;

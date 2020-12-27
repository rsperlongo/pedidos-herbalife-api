const express = require('express');
const router = express.Router();
const Flavours = require('../models/Flavours');

router.get('/', (req, res) => {
    Flavours.find((err, products) => {
        if (err) return next(err);
        res.json(products);
    });
});

router.get('/:id', (req, res, next) => {
    Flavours.findById(req.params.id, (err, products) => {
        if (err) return next(err);
        res.json(products);
    });
});

router.post('/', (req, res, next) => {
    Flavours.create(req.body, (err, products) => {
        if (err) {
            console.log(err);
            return next(err);
        }
        res.json(products);
    });
});

// put data
router.put('/:id',(req, res, next) => {
    Flavours.findByIdAndUpdate(req.params.id, req.body, (err, products) => {
        if (err) {
            console.log(err);
            return next(err);
        }
        res.json(products);
    });
});
  
// delete data by id
router.delete('/:id', (req, res, next) => {
    Flavours.findByIdAndRemove(req.params.id, req.body, function (err, products) {
        if (err) return next(err);
        res.json(products);
    });
});

module.exports = router;

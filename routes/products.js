const { Router } = require('express');
const express = require('express');
const router = express.Router();
const app = express();
const Products = require('../models/Products');

router.get('/', (req, res) => {
    Products.find((err, products) => {
        if (err) return next(err);
        res.json(products);
    });
});

router.get('/:id', (req, res, next) => {
    Products.findById(req.params.id, (err, products) => {
        if (err) return next(err);
        res.json(products);
    });
});

router.post('/', (req, res, next) => {
    Products.create(req.body, (err, products) => {
        if (err) {
            console.log(err);
            return next(err);
        }
        res.json(products);
    });
});

// put data
router.put('/:id',(req, res, next) => {
    Members.findByIdAndUpdate(req.params.id, req.body, (err, products) => {
        if (err) {
            console.log(err);
            return next(err);
        }
        res.json(products);
    });
});
  
// delete data by id
router.delete('/:id', (req, res, next) => {
    Members.findByIdAndRemove(req.params.id, req.body, function (err, products) {
        if (err) return next(err);
        res.json(products);
    });
});

module.exports = router;

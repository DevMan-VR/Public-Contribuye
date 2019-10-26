const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

//Item Model
const Service = require('../../models/Service');

// @route GET api/items
// @desc Get Specific Items From Category
// @access Public
// Pending...


// @route GET api/services
// @desc Get All Items
// @access Public
router.get('/',(req,res) =>{
    Service.find()
        .sort({date:-1}) //descending
        .then(services => res.json(services))
});

// @route POST api/services
// @desc Create A Service
// @access Private
router.post('/',auth,(req,res) => {
    const newService = new Service({
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        subcategory: req.body.subcategory,
        location: req.body.location,
        until: req.body.until,
        payment : {
            typeOf: req.body.payment.typeOf,
            amount: req.body.payment.amount,
            method: req.body.payment.method
        }
    });
    newService.save().then(service=>res.json(service));
});

// @route DELETE api/services/:id
// @desc Delete A Service
// @access Private
router.delete('/:id', auth,(req,res) =>{
    Service.findById(req.params.id)
        .then(service => service.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}))
});

module.exports = router;
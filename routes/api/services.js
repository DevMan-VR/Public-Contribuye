const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

//Item Model
const Service = require('../../models/Service');

//Service Request Model
const ServiceRequest = require('../../models/ServiceRequest');

//User Model
const User = require('../../models/User');

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

// @route GET api/services
// @desc Get services from category
// @access Public
router.get('/:category',(req,res) =>{
    console.log(req.params.category);
    let regexp = new RegExp("^" + req.params.category);
    Service.find({category: regexp})
        .sort({date:-1}) //descending
        .then(services => res.json(services))
});

/*// @route GET api/services/category/id
router.get('/:category/:id',(req,res) =>{
    Service.findOne({ id: req.params.id })
        .sort({date:-1}) //descending
        .then(services => res.json(services))
});*/
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
        service_type: req.body.service_type,
        p_amount: req.body.p_amount,
        p_method: req.body.p_method,
        contact_phone: req.body.contact_phone,
        contact_mail: req.body.contact_mail,
        serviceRequests: req.body.serviceRequests,
        userFather: req.body.userFather

    });
    newService.save().then(service=>res.json(service));

    User.findById(req.body.userFather)
        .then(user => {
            user.servicesOffered.push(newService);
            user.save();
        });
});

// @route DELETE api/services/:id
// @desc Delete A Service
// @access Private
router.delete('/:id', auth,(req,res) =>{
    Service.findById(req.params.id)
        .then(service => service.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}))
});

// @route PUT api/services/request/:id
// @desc Update a existing  service to add a new service request both to user requester and to service requested
// @access Private
router.put('/request/:id', auth, (req,res) => {
    const serviceRequest = new ServiceRequest ({
        idUserRequester: req.body.userRequesterId,
        idUserOfferer: req.body.userOffererId,
        serviceId: req.body.serviceId,
        stateRequest: req.body.stateRequest

    });



    User.findById(req.body.userRequesterId)
        .then(user => {
            user.serviceRequests.push(serviceRequest);
            user.save();
        });
    Service.findById(req.body.serviceId)
        .then( service => {
            service.serviceRequests.push(serviceRequest);
            service.save();
        })
});

module.exports = router;
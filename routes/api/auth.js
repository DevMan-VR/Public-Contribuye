const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');

//Item Model
const User = require('../../models/User');

// @route POST api/auth
// @desc Auth user
// @access Public
router.post('/',(req,res) =>{
    const {email, password, name, isContributor} = req.body;

    // Simple validation
    if(!email || !password || !name || !isContributor){
        return res.status(400).json({msg: 'Porfavor rellene todos los campos'});
    }
    //Check for existing user
    User.findOne({email: email})
        .then(user => {
            if(!user) return res.status(400).json({msg: 'El usuario no existe'});

            
            // Validate password
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(!isMatch) return res.status(400).json({msg: 'Credenciales invalidas'});

                    //Validated

                    jwt.sign( //payload
                        { id: user.id }, 
                        config.get('jwtSecret'),
                        {expiresIn: 3600}, //token dura 1hr
                        (err, token) => {
                            if(err) throw err;
                            res.json({
                                token: token,
                                user: {
                                    id: user.id,
                                    name: user.name,
                                    email: user.email,
                                    isContributor: user.isContributor,
                                    phoneNumber: user.phoneNumber
                                }
                            });
                        }
                    )

                })
            
        })
});

// @route GET api/auth/user
// @desc Get user data
// @access Private
router.get('/user', auth, (req,res) => {
    User.findById(req.user.id)
        .then(user => { res.json(user)});
});

// @route GET api/auth/login
// @desc Get user data
// @access Private
router.post('/login', (req,res) => {
    console.log(req.body);
    if(!req.body.email || !req.body.password){
        return res.status(400).json({msg: 'Porfavor rellene todos los campos'});
    }

    User.findOne({email: req.body.email})
        .then(user => {
            if(!user) return res.status(400).json({msg: 'El usuario no existe'});
            console.log(user.password);
            console.log(req.body.password);
            bcrypt.compare(req.body.password, user.password)
                .then(isMatch =>{
                    if(!isMatch){
                        console.log(isMatch);
                        return res.status(400).json({msg: 'Credenciales invalidas'});
                    }

                    jwt.sign( //payload
                        { id: user.id }, 
                        config.get('jwtSecret'),
                        {expiresIn: 3600}, //token dura 1hr
                        (err, token) => {
                            if(err) throw err;
                            res.json({
                                token: token,
                                user: {
                                    id: user.id,
                                    email: user.email,
                                }
                            });
                        }
                    )
                })
        });
});


module.exports = router;
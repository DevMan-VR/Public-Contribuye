const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

//Item Model
const User = require('../../models/User');

// @desc Register new user
// @access Public
router.post('/',(req,res) =>{
    const {name, email, password, isContributor, phoneNumber} = req.body;

    // Simple validation
    if(!name || !email || !password || !isContributor || !phoneNumber){
        return res.status(400).json({msg: 'Porfavor rellene todos los campos'});
    }
    //Check for existing user
    User.findOne({email: email})
        .then(user => {
            if(user) return res.status(400).json({msg: 'El usuario ya existe'});

            const newUser = new User({
                name,
                email,
                password,
                isContributor,
                phoneNumber
            })

            // Create salt & hash password
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if(err) return err;
                    newUser.password = hash;
                    newUser.save()
                        .then(user => {

                            jwt.sign( //payload
                                { id: user.id }, 
                                config.get('jwtSecret'),
                                {expiresIn: 7200}, //token dura 2hr
                                (err, token) => {
                                    if(err) throw err;
                                    res.json({
                                        token: token,
                                        user: {
                                            id: user.id,
                                            name: user.name,
                                            email: user.email,
                                            isContributor: user.isContributor
                                        }
                                    });
                                }
                            )

                            
                        });
                })
            })
        })
});

module.exports = router;
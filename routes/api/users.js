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
    const {name, email, password, isContributor, phoneNumber, address, city, country, timezone, profileImgUrl, experience, registerDate, achievements, serviceRequests,company} = req.body;
    

    // Simple validation
    if(!name || !email || !password || isContributor===null || !phoneNumber){
        return res.status(400).json({msg: 'El body es: '+name+' '+email+' '+password+' '+isContributor+' '+phoneNumber+' '+address+' '+city+' '+country+' '+timezone+' '+profileImgUrl+' '+experience+' '+registerDate+' '+achievements+' '+serviceRequests+' '+company});
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
                phoneNumber,
                address,
                city,
                country,
                timezone,
                profileImgUrl,
                experience,
                registerDate,
                achievements,
                serviceRequests,
                company
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
                                            isContributor: user.isContributor,
                                            phoneNumber: user.phoneNumber,
                                            address: user.address,
                                            city: user.city,
                                            country: user.country,
                                            timezone: user.timezone,
                                            profileImgUrl: user.profileImgUrl,
                                            experience: user.experience,
                                            registerDate: user.registerDate,
                                            achievements: user.achievements,
                                            serviceRequests: user.serviceRequests,
                                            company: user.company
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
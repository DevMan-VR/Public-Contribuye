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
                                    isContributor: user.isContributor
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
        .select('-password')
        .then(user => res.json(user));
});

module.exports = router;
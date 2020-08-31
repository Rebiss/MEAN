const express  = require('express');
const User     = require('../models/user');
const config   = require('config');
const passport = require('passport');
const jwt      = require('jsonwebtoken');

const router = express.Router();
const db     = config.get('db');
const secret = config.get('db');

router.get('/reg', (req,res) => { 
    res.send('Registration');
});

router.post('/reg', (req,res) => { 
    // console.log('>>>>>>>REC_BODY>>>>>>>>', req.body )
    let newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        login: req.body.login,
        email: req.body.email,
        pass: req.body.password,
    });
    // console.log('ACOUNT>>>>>>>', newUser)
    User.addUser(newUser, (error, user) => {
        error ? res.json({success: false, msg: "user is not added to DB"}) : res.json({success: true, msg: "user added to DB"})
    });
});

router.post('/auth', (req,res) => { 
    const login = req.body.login;
    const password = req.body.password;

    User.getUserByLogin(login, (err, user) => {
        if(err) throw err;
        if(!user) { return res.json({succes: false, msg: 'Not User'})};
        console.log('>>>>COMPARE>>>>>', password, user, user.pass );
        User.comparePass(password, user.pass, (err, isMatch) => {
            if(err) throw err;
            if(isMatch) {
                const token = jwt.sign(user.toJSON(), secret, { expiresIn: 3600 * 24});

                res.json({
                    succes: true,
                    token:  'JWT ' + token,
                    user: {
                        id: user._id, //MongoDB
                        name: user.name,
                        login: user.login,
                        email: user.email
                    }
                })
            } else {
                return res.json({succes: false, msg: 'Password !=='})
            }
        })
    })
});

router.get('/dashboard', passport.authenticate('jwt', {session: false }), (req,res) => { 
    res.send('Dashboard Page');
 });

module.exports = router;
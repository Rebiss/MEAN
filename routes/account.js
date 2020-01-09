const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/reg', (req,res) => { 
    res.send('Registration');
});

router.post('/reg', (req,res) => { 
    let newUser = new user({
        name: req.body.name,
        email: req.body.email,
        login: req.body.login,
        pass: req.body.pass,
    });

    User.addUser(newUser, (error, user) => {
        error ? res.json({succes: false, msg: "user is not added to DB"}) : res.json({succes: true, msg: "user added to DB"})
    });
});

router.get('/auth', (req,res) => { 
    res.send('Authirisation');
});

router.get('/dashboard', (req,res) => { 
    res.send('Dashboard');
 });

module.exports = router;
const express = require('express');
const router = express.Router()

router.get('/reg', (req,res) => { res.send('Registration') });

router.get('/auth', (req,res) => { res.send('Authirisation') });

router.get('/dashboard', (req,res) => { res.send('Dashboard') });

module.exports = router;
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');
const config = require('config')

const app = express();

const PORT = config.get('port') || 3011;

app.get('/', (req,res) => {
    res.send('Root Directory')
});
app.listen(PORT, () => console.log(`Server is ruuning ${PORT} .... `) );
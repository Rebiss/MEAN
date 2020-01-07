const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');
const config = require('config')

const app = express();

const PORT = config.get('port') || 3011;
app.use(cors());

async function connect() {
    try {
        await mongoose.connect(config.get('db'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log(`DB connect`)
        app.listen(PORT, () => console.log(`Server is ruuning ${PORT} .... `) );
    } catch (error) {
        console.log(`Don't connect DB ${error}`)
    }
}

connect()

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req,res) => { res.send('Root Directory') });

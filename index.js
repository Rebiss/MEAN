const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');
const config = require('config');
const account = require('./routes/account');
const PORT = config.get('port') || 3011;
const app = express();

app.use(cors());

app.use(bodyParser.json());


async function connect() {
    try {
        await mongoose.connect(config.get('db'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        app.listen(PORT, () => console.log(`Server is ruuning ${PORT} .... `) );

    } catch {
        console.log(`Don't connect DB`)
    }
}

connect()

app.use(express.static( path.join(__dirname, 'public') ));

app.get('/', (req,res) => { res.send('Root Directory') });

app.use('/account', account);

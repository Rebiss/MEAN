const mongoose = require('mongoose');
const bcript = require('bcryptjs');
const config = require('config');

const userShema = mongoose.Schema({
    firstName : { type: String},
    lastName : { type: String},
    email: {type: String, required: true },
    login: {type: String, required: true },
    pass : {type: String, required: true },
});


const User = module.exports = mongoose.model('User', userShema);

module.exports.getUserByLogin =  (login, callback) => {
    const query = {login: login};
    User.findOne(query, callback);
};

module.exports.getUserById = (id, callback) => {
    User.findById(id, callback);
};

module.exports.addUser = (newUser, callback) => {
    bcript.genSalt(11, (error, salt) => {
        bcript.hash(newUser.pass, salt, (error, hash) => {
            if(error) throw error;
            newUser.pass = hash;
            newUser.save(callback);
        })
    });
};


module.exports.comparePass = (passFromUser, userDBPass, callback) => {
    bcript.compare(passFromUser, userDBPass, (err, isMatch) => {
        if(err) throw err;
        callback(null, isMatch);
    })
};
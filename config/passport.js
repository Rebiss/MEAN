const config = require('config');
const User   = require('../models/user');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt  = require('passport-jwt').ExtractJwt;

const db     = config.get('db');
const secret = config.get('secret');

module.exports = passport => {
    const opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = secret;
    // opts.issuer = 'accounts.examplesoft.com';
    // opts.audience = 'yoursite.net';
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        User.findOne({id: jwt_payload.sub}, (err, user) => {
            
            if (err) done(err, false);

            user ? done(null, user) : done(null, false);
                // or you could create a new account
        });
    }));
}

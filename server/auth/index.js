const express = require('express');
const Joi = require('joi');

const db = require('../db/connection.js');
const users = db.get('users');
users.createIndex('username', { unique: true });

const router = express.Router();

const schema = Joi.object().keys({
    username: Joi.string().regex(/(^[a-zA-Z0-9]+$)/).min(2).max(30).required(),
    password: Joi.string().min(10).required()
});
 

// any route in here is pre-pended with /auth

router.get('/', (req, res) => {
    res.json({
        message: 'Auth router is working!!'
    });
});

router.post('/signup', (req, res, next) => { 
    const result = Joi.validate(req.body, schema);
    if(result.error === null) {
        // make sure username is unique
        users.findOne({
          username: req.body.username  
        }).then(user => {
            // if user is undefined, username is not in the db, 
            // otherwise, duplicate user
            res.json({ user });
        })
    } else {
        // res.json(result);
        next(result.error);
    }
})
module.exports = router;
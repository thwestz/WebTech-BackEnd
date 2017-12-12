const express = require('express');
const router = express.Router();
const User = require('../models/user.model')
const Auth = require('../models/auth.model')
const passwordHash = require('password-hash');
const mongoose = require('mongoose');
/* GET users listing. */

router.post('/', (req, res, next) => {
    User.findOne({ "email": req.body.email }, (err, user) => {
        if (err) {
            return next(err);
        }
        user.comparePassword(req.body.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
                const auth = new Auth();
                auth.uid = user.id; auth.fname = user.fname;
                auth.lname = user.lname; auth.status = user.status; auth.types = user.types;

                auth.save(err => {
                    if (err) {
                        return next(err);
                    }
                    res.json(auth);
                })
            }
        })
    })
});

router.get('/session/:id', (req, res, next) => {
    const id = req.params.id;
    Auth.findById( id, (err, auth) => {
        if (err) {
            return next(err);
        }
        res.json(auth);
    })
})

module.exports = router;
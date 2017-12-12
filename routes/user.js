const express = require('express');
const router = express.Router();
const User = require('../models/user.model')
const passwordHash = require('password-hash');
/* GET users listing. */

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) {
      return next(err);
    }
    res.json(user)
  })
})

router.get('/', (req, res, next) => {
  const id = req.params.id;
  User.find((err, users) => {
    if (err) {
      return next(err);
    }
    res.json(users)
  })
})

router.post('/', (req, res, next) => {
  const user = req.body;
  User.findByIdAndUpdate(user.id, (err, user) => {
    if (err) {
      return next(err);
    }
    res.json(user)
  })
})

router.post('/create', (req, res, next) => {
  const user = new User(req.body);
  user.save(err => {
    if (err) {
      return next(err);
    }
    res.json(user)
  })
});

module.exports = router;
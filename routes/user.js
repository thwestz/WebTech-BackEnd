const express = require('express');
const router = express.Router();
const User = require('../models/user.model')
/* GET users listing. */

router.post('/create', (req, res, next) => {
  console.log(req.body)
  const user = new User(req.body);
  user.save(err => {
    if(err){
      return next(err);
    }
    res.json(user)
  })
});

module.exports = router;
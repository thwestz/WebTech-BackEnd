const express = require('express');
const router = express.Router();
const _Event = require('../models/event.model')


router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    _Event.findById(id, (err, _event) => {
      if (err) {
        return next(err);
      }
      res.json(_event)
    })
  })
  //get by status
  router.get('/status/:status', (req, res, next) => {
    const status = req.params.status;
    _Event.find({ 'status': status}, (err, _event) => {
      if (err) {
        return next(err);
      }
      res.json(_event)
    })
  })

  //get by userID
  router.get('/owner/:id', (req, res, next) => {
    const id = req.params.id;
    _Event.find({ 'userID': id}, (err, _event) => {
      if (err) {
        return next(err);
      }
      res.json(_event)
    })
  })

 //get by between date
 router.get('/date/:sdate/:ndate', (req, res, next) => {
    const sdate = req.params.sdate;
    const ndate = req.params.ndate;
    console.log(sdate,ndate)
    _Event.find({ 'createdAt': {$gte:sdate,$lte:ndate}}, (err, _event) => {
      if (err) {
        return next(err);
      }
      res.json(_event)
    })
  })

  router.get('/', (req, res, next) => {
    const id = req.params.id;
    _Event.find((err, _events) => {
      if (err) {
        return next(err);
      }
      res.json(_events)
    })
  })
  //update
  router.put('/update', (req, res, next) => {
    const _event = new _Event(req.body);
    console.log(_event.status)
    console.log(_event._id)
    _Event.findByIdAndUpdate(_event.id,{$set:{"userID": "phil",
    "eName": _event.eName,
    "eDate": _event.eDate,
    "eLocat": _event.eLocat,
    "eCap": _event.eCap,
    "eMainDetail": _event.eMainDetail,
    "status": _event.status,
    "eSubDetail":_event.eSubDetail,
    "updatedAt": { type: Number, default: new Date().getTime() }}},(err, _event) => {
      if (err) {
        return next(err);
      }
      res.json(_event)
    })
  })

router.post('/create', (req, res, next) => {
  const _event = new _Event(req.body);
  _Event.save((err,_event) => {
    if (err) {
      return next(err);
    }
    res.json(_event)
  })
});

module.exports = router;
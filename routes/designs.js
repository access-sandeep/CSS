var express = require('express');
var router = express.Router();
var path = require('path');
var route_basepath = ['.', 'designs'];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render(`${path.join(...route_basepath, 'index')}`, { title: `The designs` });
});

/* GET users listing. */
router.get('/class/:day', function(req, res, next) {
  console.log("request param", req.params.day)
 res.render(`${path.join(...route_basepath, `class${req.params.day}`)}`, { title: `Designss` });
});

module.exports = router;

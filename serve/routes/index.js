var express = require('express');
const { nextTick } = require('vue');
var router = express.Router();

var obj = [
  {
    date: '2016-05-04',
    name: 'sun',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'li',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(obj);
});

module.exports = router;

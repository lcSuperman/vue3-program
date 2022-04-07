var express = require('express');
var router = express.Router();

/* GET users listing. */
var obj = [
  {
    date: '2016-05-03',
    name: 'zhao',
    address: 'No. 189, Grove St, Los Angeles',
   
  },
  {
    date: '2016-05-02',
    name: 'qian',
    address: 'No. 189, Grove St, Los Angeles',
  }
]
router.get('/', function(req, res, next) {
  res.send(obj);
});

module.exports = router;

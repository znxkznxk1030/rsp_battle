var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.json(express.static(path.join(__dirname, 'dist')));
});

module.exports = router;

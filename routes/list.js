var express = require('express');
var router = express.Router();
var mysqlPool = require('../dbconfig.js').pool;

router.get('/user/list', function(req, res, next) {
    mysqlPool.getConnection(function(err, connection) {
      connection.query('SELECT * FROM T_USER', function (error, results, fields) {
        res.render('list', { userList: results }); 
        connection.release();
        // Handle error after the release. 
        if (error) throw error;
      });
    });
});


module.exports = router;
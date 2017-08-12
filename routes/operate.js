var express = require('express');
var router = express.Router();
var mysqlPool = require('../dbconfig.js').pool;
// router.post('/operate/add', function(req, res, next) {
//   	//console.log(req.body);
// 	var obj = req.body;
// 	employee.save(obj, function(err) {
// 		if (err) {
// 			res.send({ 'success': false, 'err': err });
// 		} else {
// 			res.send({ 'success': true });
// 		}
// 	});
// });

router.post('/operate/user/find', function(req, res, next) {
	mysqlPool.getConnection(function(err, connection) {
	  var login_name = req.body.login_name;
      connection.query('SELECT * FROM T_USER WHERE login_name=' + connection.escape(login_name), function (error, results, fields) {
		res.send({ 'success': true, userList: results });
        connection.release();
        // Handle error after the release. 
        if (error) throw error;
      });
    });
});

// router.post('/operate/findAll', function(req, res, next) {
// 	employee.findAll(function(err, obj) {
//         if(err) {
//         	res.send({ 'success': false, msg: "" });
//         } else {
//         	res.send({ 'success': true, obj: obj });
//         }
//     });
// });

// router.post('/operate/update', function(req, res, next) {
// 	var id = req.body.id;
// 	employee.findByIdAndUpdate(id, function(err, obj) {
//         if(err) {
//         	console.error(err);
//         	res.send({ 'success': false, msg: "" });
//         } else {
//         	res.send({ 'success': true, obj: obj });
//         }
//     });
// });

module.exports = router;



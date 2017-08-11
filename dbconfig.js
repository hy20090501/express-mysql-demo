/**
 *	数据库配置
 **/
var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 100,
  host            : '192.168.*.*',
  port: '3306',
  user            : 'leaf',
  password        : '*',
  database        : '*'
});

module.exports = {
	pool: pool
}
var mysql = require('mysql2');
var connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASS,
  database : process.env.DB_DATABASE
});

var Util = require('../utils/Utils');

module.exports = {

  get_index : function(req, res) {
    res.render('Animals', {
      'title':'Tigers are cool',
      'info':'Tigers are cool'
    });
  },
  get_create : function(req, res) {
    // The C in CRUD
    res.render('Animals', {
      'title':'Creating Tigers',
      'info':'Creating Tigers'
    });
  },
  get_read : function(req, res) {
    // The R in CRUD
    var sql = `select name, age from animals 
                where animals.type = 'tiger'
              `;
    connection.query(sql, function(err, rows, column)  {
      // Put column names from the query into columns[]
      var columns = [];
      for(var i = 0; i < column.length; i++) {
        columns[i] = column[i];
      }
      if(err) {
          console.log('error: ', err);
      } else  {
          if (!rows.length) {
            res.render('Animals', {
              'info':'There are no tigers'
            });
          } else  {
              res.render('Animals', {
                'title':'Tigers are cool',
                'info':'Here are all the tigers',
                'columns':columns,
                'animals':rows
              });
          }  
      }
    });
  },
  get_update : function(req, res) {
    // The U in CRUD
    res.render('Animals', {
      'title':'Updating Tigers',
      'info':'Updating Tigers'
    });
  },
  get_delete : function(req, res) {
    // The D in CRUD
    res.render('Animals', {
      'title':'Deleting Tigers',
      'info':'Deleting Tigers'
    });
  },
  get_tigerName : function(req, res, tigerName) {
    var sql = `select name, age from animals 
                where animals.type = 'tiger'
                  and name = ?
              `;
    connection.query(sql, [tigerName], function(err, rows, column)  {
      // Push column names from the query into columns[]
      var columns = [];
      for(var i = 0; i < column.length; i++) {
        columns[i] = column[i];
      }
      if(err) {
          console.log('error: ', err);
      } else  {
          if (!rows.length) {
            res.render('Animals', {
              'info':'There is no tiger named ' + tigerName
            });
          } else  {
              res.render('Animals', {
                'title':'Tigers are cool',
                'info':'Found a tiger',
                'columns':columns,
                'animals':rows
              });
          }  
      }
    });
  }
}

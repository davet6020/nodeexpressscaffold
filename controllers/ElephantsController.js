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
      'title':'Elephants are cool',
      'info':'Elephants are cool'
    });
  },
  get_create : function(req, res) {
    // The C in CRUD
    res.render('Animals', {
      'title':'Creating Elephants',
      'info':'Creating Elephants'
    });
  },
  get_read : function(req, res) {
    // The R in CRUD
    var sql = `select name, age from animals 
                where animals.type = 'elephant'
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
              'info':'There are no elephants'
            });
          } else  {
              res.render('Animals', {
                'title':'Elephants are cool',
                'info':'Here are all the elephants',
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
      'title':'Updating Elephants',
      'info':'Updating Elephants'
    });
  },
  get_delete : function(req, res) {
    // The D in CRUD
    res.render('Animals', {
      'title':'Deleting Elephants',
      'info':'Deleting Elephants'
    });
  },
  get_elephantName : function(req, res, elephantName) {
    var sql = `select name, age from animals 
                where animals.type = 'elephant'
                  and name = ?
              `;
    connection.query(sql, [elephantName], function(err, rows, column)  {
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
              'info':'There is no elephant named ' + elephantName
            });
          } else  {
              res.render('Animals', {
                'title':'Elephants are cool',
                'info':'Found a elephant',
                'columns':columns,
                'animals':rows
              });
          }  
      }
    });
  }
}

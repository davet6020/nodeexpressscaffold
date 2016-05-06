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
      'title':'Zebras are cool',
      'info':'Zebras are cool'
    });
  },
  get_create : function(req, res) {
    // The C in CRUD
    res.render('Animals', {
      'title':'Creating Zebras',
      'info':'Creating Zebras'
    });
  },
  get_read : function(req, res) {
    // The R in CRUD
    var sql = `select name, age from animals 
                where animals.type = 'zebra'
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
              'info':'There are no zebras'
            });
          } else  {
              res.render('Animals', {
                'title':'Zebras are cool',
                'info':'Here are all the zebras',
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
      'title':'Updating Zebras',
      'info':'Updating Zebras'
    });
  },
  get_delete : function(req, res) {
    // The D in CRUD
    res.render('Animals', {
      'title':'Deleting Zebras',
      'info':'Deleting Zebras'
    });
  },
  get_zebraName : function(req, res, zebraName) {
    var sql = `select name, age from animals 
                where animals.type = 'zebra'
                  and name = ?
              `;
    connection.query(sql, [zebraName], function(err, rows, column)  {
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
              'info':'There is no zebra named ' + zebraName
            });
          } else  {
              res.render('Animals', {
                'title':'Zebras are cool',
                'info':'Found a zebra',
                'columns':columns,
                'animals':rows
              });
          }  
      }
    });
  }
}

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
      'title':'Monkeys are cool',
      'info':'Monkeys are cool'
    });
  },
  get_create : function(req, res) {
    // The C in CRUD
    res.render('Animals', {
      'title':'Creating Monkeys',
      'info':'Creating Monkeys'
    });
  },
  get_read : function(req, res) {
    // The R in CRUD
    var sql = `select name, age from animals 
                where animals.type = 'monkey'
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
              'info':'There are no monkeys'
            });
          } else  {
              res.render('Animals', {
                'title':'Monkeys are cool',
                'info':'Here are all the monkeys',
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
      'title':'Updating Monkeys',
      'info':'Updating Monkeys'
    });
  },
  get_delete : function(req, res) {
    // The D in CRUD
    res.render('Animals', {
      'title':'Deleting Monkeys',
      'info':'Deleting Monkeys'
    });
  },
  get_monkeyName : function(req, res, monkeyName) {
    var sql = `select name, age from animals 
                where animals.type = 'monkey'
                  and name = ?
              `;
    connection.query(sql, [monkeyName], function(err, rows, column)  {
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
              'info':'There is no monkey named ' + monkeyName
            });
          } else  {
              res.render('Animals', {
                'title':'Monkeys are cool',
                'info':'Found a monkey',
                'columns':columns,
                'animals':rows
              });
          }  
      }
    });
  }
}

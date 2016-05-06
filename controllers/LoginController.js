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
    res.render('Index', {
      'title':'Elephants are cool',
      'info':'You are logged in',
      'loggedin': 'true'
    });
  },
  get_create : function(req, res) {
    // The C in CRUD
    res.render('Animals', {
      'title':'Creating Login',
      'info':'Creating Login'
    });
  },
  get_read : function(req, res) {
    // The R in CRUD
    var sql = `select name, age from animals 
                where animals.type = 'login'
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
              'info':'There are no logins'
            });
          } else  {
              res.render('Animals', {
                'title':'Login are cool',
                'info':'Here are all the logins',
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
      'title':'Updating Login',
      'info':'Updating Login'
    });
  },
  get_delete : function(req, res) {
    // The D in CRUD
    res.render('Animals', {
      'title':'Deleting Login',
      'info':'Deleting Login'
    });
  },
  get_loginName : function(req, res, loginName) {
    var sql = `select name, age from animals 
                where animals.type = 'login'
                  and name = ?
              `;
    connection.query(sql, [loginName], function(err, rows, column)  {
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
              'info':'There is no login named ' + loginName
            });
          } else  {
              res.render('Animals', {
                'title':'Elephants are cool',
                'info':'Found a login',
                'columns':columns,
                'animals':rows
              });
          }  
      }
    });
  }
}

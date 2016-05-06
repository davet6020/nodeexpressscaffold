var mysql = require('mysql2');
var connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASS,
  database : process.env.DB_DATABASE
});

/**
 * All animals sort by name ascending.
 */
exports.allAnimalsNameAsc = function(res, req, done) {
  var sql = `select name, age, type from animals
              order by name asc
            `;
  
  connection.query(sql, function(err, rows, columns)  {
    if(err) {
      console.log('err: ', err);
    }
    done(null, rows, columns);
  });
} //End allAnimalsNameAsc


/**
 * All animals sort by type ascending.
 */
exports.allAnimalsTypeAsc = function(res, req, done) {
  var sql = `select name, age, type from animals
              order by type asc
            `;
  
  connection.query(sql, function(err, rows, columns)  {
    if(err) {
      console.log('err: ', err);
    }
    done(null, rows, columns);
  });
} //End allAnimalsTypeAsc


/**
 * All animals sort by age ascending.
 */
exports.allAnimalsAgeAsc = function(res, req, done) {
  var sql = `select name, age, type from animals
              order by age asc
            `;
  
  connection.query(sql, function(err, rows, columns)  {
    if(err) {
      console.log('err: ', err);
    }
    done(null, rows, columns);
  });
} //End allAnimalsAgeAsc

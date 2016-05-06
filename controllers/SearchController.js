var mysql = require('mysql2');
var connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASS,
  database : process.env.DB_DATABASE
});

module.exports = {

  get_index : function(req, res) {
    res.render('Search', {
      'title':'Search Page'
    });
  },
  get_search : function(req, res) {
    res.render('Search', {
      'title':'Search Form'
    });
  },
  post_search : function(req, res) {
    var sql = `select name, age, type from animals 
                        where name like ? 
                        or age like ? 
                        or type like ?
                        order by name
                      `;
            // mysql2 requires one search term per ? in query.  shrug.
            var s1 = '%'+req.body.searchTerm+'%';
            var s2 = '%'+req.body.searchTerm+'%';
            var s3 = '%'+req.body.searchTerm+'%';

    connection.query(sql, [s1, s2, s3], function(err, rows, columns)  {
      if(err) {
          console.log('error: ', err);
          res.render('Search', {
            'title':'No data was found for: ' + req.body.searchTerm
          });
      } else  {
          res.render('Search', {
            'columns': columns,
            'rows': rows,
            'title':req.body.searchTerm
          });
      }
    });
  }
}

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
      'title':'Reports are cool',
      'info':'Reports are cool'
    });
  },
  get_allanimalsnameasc : function(req, res)  {
    var title = 'All Animals (Sorted by name ascending)';
    Util.allAnimalsNameAsc(res, req, function(err, rows, columns) {
      if(err) {
          console.log('Err: ', err);
      } else {
          res.render('Reports', {
            'title':title,
            'rows':rows,
            'columns':columns
          }); //End of res.render
      }
    }); //end of allAnimalsNameAsc
  },
  get_allanimalstypeasc : function(req, res)  {
    var title = 'All Animals (Sorted by type ascending)';
    Util.allAnimalsTypeAsc(res, req, function(err, rows, columns) {
      if(err) {
          console.log('Err: ', err);
      } else {
          res.render('Reports', {
            'title':title,
            'rows':rows,
            'columns':columns
          }); //End of res.render
      }
    }); //end of allAnimalsTypeAsc
  },
  get_allanimalsageasc : function(req, res)  {
    var title = 'All Animals (Sorted by type ascending)';
    Util.allAnimalsAgeAsc(res, req, function(err, rows, columns) {
      if(err) {
          console.log('Err: ', err);
      } else {
          res.render('Reports', {
            'title':title,
            'rows':rows,
            'columns':columns
          }); //End of res.render
      }
    }); //end of allAnimalsAgeAsc
  },
}

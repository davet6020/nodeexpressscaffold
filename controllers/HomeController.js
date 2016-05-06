module.exports = {

  get_index : function(req, res) {
    res.render('Index', {
      'title':'Elephants are cool',
      'info':'A Web Application'
    });
  },


}

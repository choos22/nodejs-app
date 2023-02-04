class NewController {
  index(req, res) {
    res.render('new');
  }

  new(req, res) {
    res.render('new');
  }

  
}

module.exports = new NewController();

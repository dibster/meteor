Router.route('/', function () {
  this.render('Scanner');
});

Router.route('/campaign', function () {
  this.render('Campaign');
});

Router.route('/products', function () {
  this.render('Products');
});

Router.route('/admin', function () {
  this.render('Admin');
});

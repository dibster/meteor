Router.route('/', function () {
  this.render('Scanner');
});

Router.route('/campaign', function () {
  this.render('Campaign');
});

Router.route('/product/:id', function () {
  this.render('Product');
});

Router.route('/admin', function () {
  this.render('Admin');
});

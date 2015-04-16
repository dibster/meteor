Router.route('/', function () {
  this.render('Scanner');
});

Router.route('/product/:id', function () {
  this.render('Product');
});

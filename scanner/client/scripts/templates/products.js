/**
 * Created by dibster on 07/01/15.
 */
/**
 * Created by dibster on 20/02/15.
 */

Template.product.rendered = function () {
  console.log('product rendered');
  console.log(Router.current().params.id);

  var productId = Router.current().params.id;

  var projectKey = 'QSfS1Vw6Lz3x3LF6VE4pkFe4GyFFxUjqTnYBGQ41iCBmoPzzUinRj8m4Y2xVTQGwbxmlj9Gk382elo0N';
  // Instantiate Base EVRYTHNG Object
  var app = new EVT.App(projectKey);

  app.product(productId).read(function(product) {
    console.log('product in helper', product);
    Session.set('CurrentProduct', product)
  });

}

Template.product.helpers({
  foundproduct : function () {
    console.log('in helper');
      return Session.get('CurrentProduct');
  }
});

Template.product.events({

  'click .video': function () {
  }

});

/**
 * Created by dibster on 07/01/15.
 */

// vars used on scanning

var app = {};
var scanThng = {};

Template.scan.rendered = function () {

    // Create the EVT Objects on render

    var projectKey = 'QSfS1Vw6Lz3x3LF6VE4pkFe4GyFFxUjqTnYBGQ41iCBmoPzzUinRj8m4Y2xVTQGwbxmlj9Gk382elo0N';
    // Instantiate Base EVRYTHNG Object
    app = new EVT.App(projectKey);
    // configure ScanThng
    scanThng = new EVT.ScanThng(app);
    // set to true to redirect automatically
    scanThng.setup({redirect: false,type : 'objpic'});

}

Template.scan.helpers({
});

Template.scan.result = function () {

  console.log('result');

};

Template.scan.events({

  // when scan clicked

  'click .scan': function () {
    console.log('scanning with object ', scanThng);
    scanThng.identify({
      type: 'objpic',
      redirect: false}
    ).then(
      scanSuccess,
      scanError
    );

    function scanSuccess(data) {

      // image recognised

      console.log('success', data);
      Router.go('/product/' + data.evrythngId);

    };

    function scanError(err) {

      // image not recognised

      console.log('error', err);

    }
  }

});

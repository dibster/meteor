/**
 * Created by dibster on 07/01/15.
 */

// vars used on scanning

var app = {};
var scanThng = {};

Template.scan.rendered = function () {

    // Create the EVT Objects on render

    var projectKey = 'ucGgQiSMTYa6rl0VjJzBPCcCfK6xRwa4uiMTCxH8C4JUetqnjbscuxi9YPDLQKmASp5uR1jQo0Sbauui';
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
      redirect: false,
      createScanAction : true,
      createAnonymousUser : true,
      spinner : { auto: true }}
    ).then(
      scanSuccess,
      scanError
    );

    function scanSuccess(data) {

      // image recognised

      trackJs.track('Image Recognised' + JSON.stringify(data));
      console.log('success', data);

    };

    function scanError(err) {

      // image not recognised
      trackJs.track('Image Not Recognised'  + err);
      console.log('error', err);

    }
  }

});

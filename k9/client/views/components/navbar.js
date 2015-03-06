Template.navbar.helpers({

});

Template.navbar.result = function () {

  console.log('result');
  return "resp";
};

Template.navbar.events({
  'click .get-logs': function () {
    console.log('get-logs');
  },
  'click .auto-refresh': function () {
    console.log('autorefresh');
  }
});

Template.login.rendered = function() {
  // things to do when the template is finished rendering
  $.material.init();
};

Template.login.helpers({
});

Template.navbar.result = function () {

};

Template.login.events({
  'click .login': function () {
    console.log('login');
  },
  'click .cancel': function () {
    console.log('cancel');
  }
});

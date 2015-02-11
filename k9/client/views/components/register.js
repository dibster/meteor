Template.register.rendered = function() {
  // things to do when the template is finished rendering
  $.material.init();
};

Template.register.helpers({
});

Template.navbar.result = function () {

};

Template.register.events({
  'click .register': function () {
    console.log('register');
  },
  'click .cancel': function () {
    console.log('cancel');
  }
});

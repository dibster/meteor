Template.index.rendered = function() {


};

Template.index.helpers({

  evrythngaccounts: function() {
    return EvrythngAccounts.find({}, {sort: {createdAt: -1}});
  }

});

Template.index.events({
});
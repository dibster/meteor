// Generated on 2015-02-18 by meteor-stock.  Edit me!
Template.evrythngaccountsList.helpers({

  evrythngaccounts: function() {

      return EvrythngAccounts.find({}, {sort: {createdAt: -1}});
  }
});

Template.evrythngaccountsList.events({
  "click .new": function(e) {
    e.preventDefault();
    Router.go('evrythngaccountNew');
  }
});
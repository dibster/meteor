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

Template.evrythngaccountItem.helpers ({

  updatedAt : function () {

    if (this.updatedAt) {
      var formattedDate = new Date(this.updatedAt / 1000);
      return moment.unix(formattedDate).fromNow();
    }
  }
});

// Generated on 2015-02-18 by meteor-stock.  Edit me!
Template.evrythngaccountDetail.events({
  "click .edit-evrythngaccount": function(e) {
    e.preventDefault();
    Router.go("evrythngaccountEdit", {_id: this._id});
  },
  "click .list-evrythngaccount": function(e) {
    e.preventDefault();
    Router.go("evrythngaccountsList");
  }

});
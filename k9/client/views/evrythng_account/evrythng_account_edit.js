// Generated on 2015-02-18 by meteor-stock.  Edit me!
Template.evrythngaccountEdit.events({
  "submit form": function(e) {
    e.preventDefault();
    var currentId = this._id;

    var evrythngaccountEdits = {
    
      name: $(e.target).find("[name=name]").val(),
    
      key: $(e.target).find("[name=key]").val(),
    
      scans: $(e.target).find("[name=scans]").val()
    
    };

    Meteor.call("editEvrythngAccount", evrythngaccountEdits, currentId, function(error, id) {
      if (error) {
        return alert(error.reason);
      }
      Router.go("evrythngaccountDetail", {_id: id});
    });
  },

  "click .delete": function(e) {
    e.preventDefault();

    if (confirm("Delete this EvrythngAccount?")) {
      var currentId = this._id;
      Meteor.call("deleteEvrythngAccount", currentId, function(error, id) {
        if (error) {
          return alert(error.reason);
        }
        Router.go("evrythngaccountsList");
      }
    )}
  },

  "click .cancel": function(e) {
    e.preventDefault();
    Router.go("evrythngaccountsList");
  }
});
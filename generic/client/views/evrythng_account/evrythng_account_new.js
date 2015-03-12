// Generated on 2015-02-18 by meteor-stock.  Edit me!
Template.evrythngaccountNew.events({
  "submit form": function(e) {
    e.preventDefault();

    var evrythngaccount = {
      
        name: $(e.target).find("[name=name]").val(),
      
        key: $(e.target).find("[name=key]").val(),
      
        scans: $(e.target).find("[name=scans]").val()
      
    };


    Meteor.call("newEvrythngAccount", evrythngaccount, function(error, id) {
      if (error) {
        return alert(error.reason);
      }
      Router.go("evrythngaccountDetail", {_id: id});
    });

  }
});
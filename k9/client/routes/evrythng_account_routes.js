// Generated on 2015-02-18 by meteor-stock.  Edit me!
Router.map(function () {
  this.route("evrythngaccountsList", {
    path: "/evrythngaccounts/list"
  });
  this.route("evrythngaccountNew", {
    path: "/evrythngaccount/new",
    template: "evrythngaccountNew"
  });
  this.route("evrythngaccountEdit", {
    path: "/evrythngaccount/:_id/edit",
    template: "evrythngaccountEdit",
    data: function () {
      return {
        evrythngaccount: EvrythngAccounts.findOne(this.params._id)
      };
    }
  });
  this.route("evrythngaccountDetail", {
    path: "/evrythngaccount/:_id/detail",
    template: "evrythngaccountDetail",
    data: function () {
      return {
        evrythngaccount: EvrythngAccounts.findOne(this.params._id)
      };
    }
  });

});
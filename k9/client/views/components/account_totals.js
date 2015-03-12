Template.accounttotals.helpers({
  totalScans: function () {

    // sum all Accounts

    var sumScans = 0;
    var cursor = EvrythngAccounts.find();
    cursor.forEach(function (acct) {
      sumScans = sumScans + parseInt(acct.scans);
    });

    return sumScans;
  }
});

Template.accounttotals.events({
  'click .refresh-data' : function () {
    NProgress.start();
    Meteor.call('refreshData', function (err, response) {
      if (typeof response === 'undefined') {
        console.log('ok');
        NProgress.done();
      }
      else {
        console.log('failed');
      }
    });
  }
});

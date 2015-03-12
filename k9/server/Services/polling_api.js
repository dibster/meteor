/**
 * Created by dibster on 12/03/15.
 */
Meteor.methods({

  refreshData: function() {
    getApiDetails();
  }

});

function getApiDetails() {
  console.log('get api');

  var url = "https://api.evrythng.com/actions/implicitScans?page=1&perPage=1";

  var accounts = EvrythngAccounts.find({});
  accounts.forEach(function (account) {
    console.log("Retrieve Account : " + account.name);
    console.log("Retrieve Key : " + account.key);
    console.log("Retrieve Id : " + account._id);
    var currentKey = account._id;
    var result = Meteor.http.get(url, {  headers: {
      "Authorization": account.key,
      "content-type":"application/json"
    }});
    if(result.statusCode==200) {
      var accountScans = result.headers["x-result-count"];
      console.log("response received.");
      var refreshDate = new Date();
      var lastScans = JSON.parse(result.content);
      if (accountScans > 0) {
        console.log('content', lastScans[0].timestamp);
        EvrythngAccounts.update({_id : currentKey}, {$set : {scans : parseInt(accountScans), updatedAt : lastScans[0].timestamp, lastRefresh : refreshDate}});
      }
    } else {
      console.log("Response issue: ", result.statusCode);
      var errorJson = JSON.parse(result.content);
      throw new Meteor.Error(result.statusCode, errorJson.error);
    }
  });

}
if (Meteor.isClient) {
  //Session.setDefault("Application Id", "5433af7f50522a29bb732c7a");
  //Session.setDefault("Operator Key", "I1gL9iHt3IEsn2icY6NFXreEFl3lP62HTM40neKxJrRV3Dkis3dTTmNulzZoLlBxJA1Zj0ybU1g7BVeI");


  Template.showLogs.helpers({
    appId: function () {
      return Session.get("Application Id");
    },
    opKey: function () {
      return Session.get("Operator Key");
    },
    lastRun: function () {
      return Session.get("Last Refresh");
    }
  });

  Template.showLogs.result = function () {

    var result =  _.map(Session.get('serverSimpleResponse'), function(message){
      var formattedDate = new Date(message.timestamp / 1000);
      message.timestamp = moment.unix(formattedDate).fromNow();
      message.error = message.logLevel !== 'debug';
      return message;
    });
    return result  || "";
  };

  Template.showLogs.events({
    'click .get-logs': function () {
      // increment the counter when button is clicked
      var today = new Date();
      Session.set("Application Id",appId.value);
      Session.set("Operator Key",opKey.value);
      Session.set('serverSimpleResponse', []);

      Session.set("Last Refresh", today.toString());

      Meteor.call('fetchFromEVRYTHNG',Session.get("Application Id"),Session.get("Operator Key"),function(err, response) {
        if (typeof response == 'undefined') {
          Session.set('serverSimpleResponse', [{message : 'No Data Returned'}]);
        }
        else {
          Session.set('serverSimpleResponse', response);
        }
      });
    },
    'click .auto-refresh': function () {
      // increment the counter when button is clicked
      console.log('autorefresh');
    }

  });
}


if (Meteor.isServer) {
  Meteor.startup(function () {
    Meteor.startup(function () {
      Meteor.methods({

        fetchFromEVRYTHNG: function(appId, operatorKey) {

          var url = "https://api.evrythng.com/projects/" +
              appId +
              "/applications/" +
              appId +
              "/reactorLogs";

          //synchronous GET
          var result = Meteor.http.get(url, {  headers: {
            'Authorization': operatorKey,
            "content-type":"application/json"
          }});
          if(result.statusCode==200) {
            var respJson = JSON.parse(result.content);
            console.log("response received.");
            return respJson;
          } else {
            console.log("Response issue: ", result.statusCode);
            var errorJson = JSON.parse(result.content);
            throw new Meteor.Error(result.statusCode, errorJson.error);
          }
        }
      });
    });
  });
}

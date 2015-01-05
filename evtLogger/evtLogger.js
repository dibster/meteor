if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("Application Id", "5433af7f50522a29bb732c7a");
  Session.setDefault("Operator Key", "I1gL9iHt3IEsn2icY6NFXreEFl3lP62HTM40neKxJrRV3Dkis3dTTmNulzZoLlBxJA1Zj0ybU1g7BVeI");


  Template.showLogs.helpers({
    appId: function () {
      return Session.get("Application Id");
    },
    opKey: function () {
      return Session.get("Operator Key");
    }
  });

  Template.showLogs.result = function () {
    console.log('reformat here');
    var result =  _.map(Session.get('serverSimpleResponse'), function(message){
      message.timestamp = moment.unix(message.timestamp).format("MM/DD/YYYY");
      return message;
    });
    return result  || "";
  };

  Template.showLogs.events({
    'click .get-logs': function () {
      // increment the counter when button is clicked
      Meteor.call('fetchFromEVRYTHNG',Session.get("Application Id"),Session.get("Operator Key"),function(err, response) {
        Session.set('serverSimpleResponse', response);
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

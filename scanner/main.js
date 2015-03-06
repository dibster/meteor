if (Meteor.isClient) {
  // startup

}


if (Meteor.isServer) {
  Meteor.startup(function () {
    Meteor.startup(function () {
      Meteor.methods({

        fetchFromEVRYTHNG: function(appId, operatorKey) {

          var url = 'https://api.evrythng.com/projects/' +
              appId +
              '/applications/' +
              appId +
              '/reactorLogs';

          //synchronous GET
          var result = Meteor.http.get(url, {  headers: {
            'Authorization': operatorKey,
            'content-type':'application/json'
          }});
          if(result.statusCode==200) {
            var respJson = JSON.parse(result.content);
            console.log('response received.');
            return respJson;
          } else {
            console.log('Response issue: ', result.statusCode);
            var errorJson = JSON.parse(result.content);
            throw new Meteor.Error(result.statusCode, errorJson.error);
          }
        }
      });
    });
  });
}

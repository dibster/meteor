if (Meteor.isClient) {
  // startup
  Session.setDefault('Project Key', 'I1gL9iHt3IEsn2icY6NFXreEFl3lP62HTM40neKxJrRV3Dkis3dTTmNulzZoLlBxJA1Zj0ybU1g7BVeI');
  // trackJS
  function trackJSLoaded() {
    trackJs.track('Logging Started for Sample App');
  }
  window._trackJs = {token: '195ba30ccdfc4e53b70c434835f66247'}
  Meteor.Loader.loadJs('//d2zah9y47r7bi2.cloudfront.net/releases/current/tracker.js', trackJSLoaded);

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

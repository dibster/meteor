
"use strict"; // jshint ignore:line

Meteor.publish("evrythngaccounts", function () {

  if(isAdmin(this.userId)){
    console.log('is an admin');
    return EvrythngAccounts.find({});
  }
  else {
    return EvrythngAccounts.find({},{"fields" : {"name" : 1}});
  }

});

function isAdmin(userid) {

  // get user details, only Admin is Dave Ashenhurst

  var thisUser = Meteor.users.findOne({_id : userid});

  if (thisUser.profile.name === 'Dave Ashenhurst') {
    return true;
  } else {
    return false;
  }

}
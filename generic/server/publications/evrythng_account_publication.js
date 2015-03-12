

Meteor.publish("evrythngaccounts", function () {

  if(isAdmin(this.userId)){
    console.log('is an admin');
    // return all data including the operator key
    return EvrythngAccounts.find({},{"sort" : {"scans" : -1}});
  }
  else {
    // do not return the operator key
    return EvrythngAccounts.find({},{"fields" : {"name" : 1, "scans" : 1, "updatedAt" : 1}});
  }

});

function isAdmin(userid) {

  // get user details, only Admin is Dave Ashenhurst for now (can add roles if needed)

  //getApiDetails();
  var thisUser = Meteor.users.findOne({_id : userid});

  if (thisUser.profile.name === 'Dave Ashenhurst') {
    return true;
  } else {
    return false;
  }

}


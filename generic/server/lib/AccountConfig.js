Accounts.config({

  // Is used to make sure only EVRYTHNG Emails are allowed to login

  restrictCreationByEmailDomain: function(email) {
    var domain = email.slice(email.lastIndexOf("@")+1); // or regex
    var allowed = ["evrythng.com"];
    return _.contains(allowed, domain);
  }
});



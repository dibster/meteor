Accounts.config({
  restrictCreationByEmailDomain: function(email) {
    var domain = email.slice(email.lastIndexOf("@")+1); // or regex
    var allowed = ["evrythng.com" ];
    return _.contains(allowed, domain);
  }
});
/**
 * Created by dibster on 18/02/15.
 */

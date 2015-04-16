// Generated on 2015-02-18 by meteor-stock.  Edit me!
EvrythngAccounts = new Meteor.Collection("evrythngaccounts");

// Database operations:

EvrythngAccounts.allow({
  insert: function (userId, doc) {
    return userId;
  },
  update: function (userId, doc, fields, modifier) {
    // can only change your own documents
    return doc.userId === userId;
  },
  remove: function (userId, doc) {
    // can only remove your own documents
    return doc.userId === userId;
  }
});


Meteor.methods({
  deleteEvrythngAccount: function(id) {
    EvrythngAccounts.remove(id);
  },
  newEvrythngAccount: function(evrythngaccount) {
    evrythngaccount.createdAt = new Date().getTime();
    var id = EvrythngAccounts.insert(evrythngaccount);
    return id;
  },
  editEvrythngAccount: function(evrythngaccount, id) {
    evrythngaccount.updatedAt = new Date().getTime();
    EvrythngAccounts.update(id, {$set: evrythngaccount});
    return id;
  }
});
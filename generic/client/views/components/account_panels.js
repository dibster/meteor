Template.accountpanels.helpers({
  lastChanged: function () {
    if (this.updatedAt) {
      var formattedDate = new Date(this.updatedAt / 1000);
      return moment.unix(formattedDate).fromNow();
    }
  }
});

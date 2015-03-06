Template.index.rendered = function() {
  $('.grid-container').imagesLoaded(function() {
    $('.grid-container').isotope({
      itemSelector: '.item',
      layoutMode: 'masonry',
      masonry: {
        columnWidth: 200
      }
    })
  })
};

Template.index.helpers({

  evrythngaccounts: function() {

    return EvrythngAccounts.find({}, {sort: {createdAt: -1}});
  }

});

Template.index.events({
  //".my-button click": function() {',
    // do something clever',
});
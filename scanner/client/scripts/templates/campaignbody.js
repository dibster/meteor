/**
 * Created by dibster on 07/01/15.
 */

// vars used on campaignbodyning

Template.campaignbody.rendered = function () {
  url('www.dave.com?parm=dave','parm');
  console.log('campaignbody rendered');
}

Template.campaignbody.helpers({
});

Template.campaignbody.result = function () {

  console.log('result');

};

Template.campaignbody.events({

  'click .video': function () {
  }

});

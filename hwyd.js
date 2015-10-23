Router.configure({
  layoutTemplate: 'ApplicationLayout'
});

Router.route('/', function () {
  this.render('Home')
});

if (Meteor.isClient) {

  var sendColor = function (arg) {
    var color = "#"+$.colpick.hsbToHex(arg);
    console.log("color", color);
  }

  Template.home.rendered = function () {
    $('#picker').colpick({
      flat:true,
      layout:'hex',
      submit:true,
      submitText: "GO",
      onSubmit: sendColor
    })
  };
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

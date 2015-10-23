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

    Meteor.call('publish_message', "hello/world", color,  function(err, response) {
      console.log("err: " +err + " response: " + response);
    });

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
  config = {
    mqttHost: process.env.MQTTHost,
    mqttPort: 1883
  };
  // initialize the mqtt client from mqtt npm-package
  var mqtt = Meteor.npmRequire("mqtt");
  var client = mqtt.connect(config.mqttHost);
  client
    .on("connect", function() {
      console.log("client connected");
      client.subscribe('hello/world')
    })
    .on("message", function(topic, message) {
      console.log(topic + ": " + message);
    });

  Meteor.methods({
    topic_subscribe: function(topic) {
      client.subscribe(topic);
    },
    topic_unsubscribe: function(topic) {
      client.unsubscribe(topic);
    },
    publish_message: function(topic, message) {
      console.log("topic: " + topic);
      console.log("message: ", message); 
      client.publish(topic, message, function() {
        console.log("message sent: " + message);
      });
    }
  });
}

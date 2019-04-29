const Messagex = require('./js/logger');
console.log(Messagex);
const  style = require('./css/style.css');


var app = document.getElementById('app');
app.innerHTML = Messagex.logMessage("software developer");




























//require('./js/publisher_garage');
//require('./js/subscribe_controller');
/*
var mqtt = require('mqtt');



var client  = mqtt.connect('mqtt:localhost', 1883);


client.on('connect', function () {
  client.subscribe('presence', function (err) {
    if (!err) {
      client.publish('presence', 'Hello mqtt')
    }
  })
})
 



client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  console.log("message");
  client.end();
})
*/
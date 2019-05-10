//bootstrap js v4
const back_index = require('../js/background-index');
const bootstrap_native_v4 = require('../js/bootstrap-native-v4');
//console.log(bootstrap_native_v4);

//require('bootstrap');
require('../css/style.css');
require('../css/theme.css');
require('../css/prism.css');

//bootstrap v3.3.7
//require('./css/bootstrap.min.css');
//require('./css/bootstrap-glyphicons.css');
//console.log(typeof bootstrap_css);

const Messagex = require('../js/logger');
console.log(typeof Messagex);

window.onscroll = function(){
	console.log("ssss");
	console.log(typeof back_index);
	back_index.functionSticky();
};


var height = document.getElementById("col-main-id").style;
console.log(height);




//var app = document.getElementById('app');

//app.innerHTML = Messagex.logMessage("software developer");



























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

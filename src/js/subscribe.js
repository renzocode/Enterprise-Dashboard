var mqtt = require('mqtt');
var client = mqtt.connect('mqtt:localhost', 1883);
client.subscribe('arduino/#');

client.on('message', function(topic, message){
	console.log(topic, ": ", message.toString());
});

setTimeout(function(){
	client.end();
}, 10000);
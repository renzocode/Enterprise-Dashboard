var mqtt = require('mqtt');
var client = mqtt.connect('mqtt:localhost', 1883);

var state = 'closed';
client.on('connect', ()=>{
	client.publish('garage/connected', 'true');
	sendStateUpdate();
});

function sendStateUpdate() {
	console.log('sending state %s', state);
	client.publish('garage/state', state);
}


export default client;
var mqtt = require('mqtt');
var client1 = mqtt.connect('mqtt:localhost', 1883);

var garageState = '';
var connected = false;

client1.on('connect', ()=>{
	client1.subscribe('garage/connected');
	client1.subscribe('garage/state');

});

client1.on('message', (topic, message)=>{

	switch(topic){
		case 'garage/connected':
			return handleGarageConnected(message);
		case 'garage/state':
			return handleGarageState(message);
	}
	console.log('No handler for topic %s', topic);
});


function handleGarageConnected(message){
	console.log('garage connected status %s', message);
	connected = (message.toString() ===  'true');
}


function handleGarageState(message){
	garageState = message;
	console.log('garage state update to %s', message);
}

export default client1;

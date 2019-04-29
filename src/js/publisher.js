var mqtt = require('mqtt');
var client = mqtt.connect('mqtt:localhost', 1883);
var five = require('johnny-five');

var board = new five.Board({
	repl: false
});


board.on('ready', function(){
	client.publish('arduino', 'connected');

	var sensor = five.Sensor({
		pin : 'A5'
	});
	sensor.on('data', function(){
		var message = 'value: ' + this.value;
		client.publish('arduino/slider', message);
	});
});
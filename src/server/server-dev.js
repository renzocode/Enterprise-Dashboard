const path = require('path');
const debug = require('debug')(':server');
const express = require('express');
const http = require('http');

const app = express();
const DIST_DIR = __dirname;
const HTML_FILE = path.join(DIST_DIR, 'index.html');




app.use(express.static(DIST_DIR));
app.get('*', (req, res) => {
	res.sendFile(HTML_FILE);
});




///publisher garage
/*
var mqtt = require('mqtt');
var client = mqtt.connect('mqtt:152.44.44.141', 1883);

var state = 'closed';
client.on('connect', ()=>{

  client.subscribe('garage/open');
  client.subscribe('garage/close');

  client.publish('garage/connected', 'true');
  sendStateUpdate();
});

client.on('messages', (topic, message)=>{
  console.log('received message %s %s ', topic, message);

  switch(topic){
    case 'garage/open':
      return handleOpenRequest(message);
    case 'garage/close':
      return handleCloseRequest(message);
  }
});

function sendStateUpdate() {
  console.log('---  sending state %s', state);
  client.publish('garage/state', state);
}

function handleOpenRequest(messsage){
  if(state !== 'open' && state !== 'opening'){
    console.log('opening garage door');
    state = 'opening';
    sendStateUpdate();

    setTimeout(()=>{
      state = 'open';
      sendStateUpdate();
    }, 5000);
  }
}

function  handleCloseRequest(message){
  if(state !== 'closed' && state !== 'closing'){
    state = 'closing';
    sendStateUpdate();

    setTimeout(()=>{
      state = 'closed';
      sendStateUpdate();

    }, 5000);
  }
}


///subscribed contrtoller
var mqtt1 = require('mqtt');
var client1 = mqtt1.connect('mqtt:152.44.44.141', 1883);

var garageState = '';
var connected = false;

client1.on('connect', ()=>{
  client1.subscribe('garage/connected');
  client1.subscribe('garage/state');
});

client1.on('messages', (topic, message)=>{

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

function openGarageDoor(){
  console.log(connected + ' --- ' + garageState);
  if(connected && garageState !== 'open'){
    client1.publish('garage/open', 'true');
  }
}

function closeGarageDoor(){
  console.log(connected + ' --- ' + garageState);
  if(connected && garageState !== 'closed'){
    client1.publish('garage/close', 'true');
  }
}

setTimeout(()=>{
  console.log('open door');
  openGarageDoor();
}, 5000);

setTimeout(()=>{
  console.log('close door');
  closeGarageDoor();
},2000);


*/

var port  = normalizePort(process.env.PORT || '8080');
app.set('port', port);
//const PORT = process.env.PORT || 80;

var server = http.createServer(app);

server.listen(port, ()=>{
	console.log(`App listening to ${port}....`);
	server.on('error', onError);

	console.log('Press CTRL+C to quit.');
	server.on('listening', onListening);

});


function normalizePort(val){
	var port = parseInt(val , 10);
	if(isNaN(port)){
		return val;
	}
	if(port >= 0){
		return port;
	}
	return false;
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}


/*

process.env.NTBA_FIX_319 = 1;

const TelegramBot = require('node-telegram-bot-api');

const token = '801059544:AAFgnW1PaCnn2ZuKcl3NUvKIousJg1VEXXg';


const bot = new TelegramBot(token, {polling : true});


bot.onText(/\/echo (.+)/,(msg, match)=>{
  const chatId = msg.chat.id;
  match[1] = "siiii.... erick se la come doblada y con nudos. xd una golosa xd";
  const resp = match[1];
  console.log("now bot is responding.....");
  console.log(typeof match[1]);
  bot.sendMessage(chatId, resp);
});

bot.on('message', (msg)=>{
  const chatId = msg.chat.id;
  setTimeout(()=>{
      bot.sendMessage(chatId, 'ask me');
  },1000);
});

*/

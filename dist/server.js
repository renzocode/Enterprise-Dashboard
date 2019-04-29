/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server-dev.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/server-dev.js":
/*!**********************************!*\
  !*** ./src/server/server-dev.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var path = __webpack_require__(/*! path */ \"path\");\n\nvar debug = __webpack_require__(/*! debug */ \"debug\")(':server');\n\nvar express = __webpack_require__(/*! express */ \"express\");\n\nvar http = __webpack_require__(/*! http */ \"http\");\n\nvar app = express();\nvar DIST_DIR = __dirname;\nvar HTML_FILE = path.join(DIST_DIR, 'index.html');\napp.use(express.static(DIST_DIR));\napp.get('*', function (req, res) {\n  res.sendFile(HTML_FILE);\n}); ///publisher garage\n\n/*\nvar mqtt = require('mqtt');\nvar client = mqtt.connect('mqtt:152.44.44.141', 1883);\n\nvar state = 'closed';\nclient.on('connect', ()=>{\n\n  client.subscribe('garage/open');\n  client.subscribe('garage/close');\n\n  client.publish('garage/connected', 'true');\n  sendStateUpdate();\n});\n\nclient.on('messages', (topic, message)=>{\n  console.log('received message %s %s ', topic, message);\n\n  switch(topic){\n    case 'garage/open':\n      return handleOpenRequest(message);\n    case 'garage/close':\n      return handleCloseRequest(message);\n  }\n});\n\nfunction sendStateUpdate() {\n  console.log('---  sending state %s', state);\n  client.publish('garage/state', state);\n}\n\nfunction handleOpenRequest(messsage){\n  if(state !== 'open' && state !== 'opening'){\n    console.log('opening garage door');\n    state = 'opening';\n    sendStateUpdate();\n\n    setTimeout(()=>{\n      state = 'open';\n      sendStateUpdate();\n    }, 5000);\n  }\n}\n\nfunction  handleCloseRequest(message){\n  if(state !== 'closed' && state !== 'closing'){\n    state = 'closing';\n    sendStateUpdate();\n\n    setTimeout(()=>{\n      state = 'closed';\n      sendStateUpdate();\n\n    }, 5000);\n  }\n}\n\n\n///subscribed contrtoller\nvar mqtt1 = require('mqtt');\nvar client1 = mqtt1.connect('mqtt:152.44.44.141', 1883);\n\nvar garageState = '';\nvar connected = false;\n\nclient1.on('connect', ()=>{\n  client1.subscribe('garage/connected');\n  client1.subscribe('garage/state');\n});\n\nclient1.on('messages', (topic, message)=>{\n\n  switch(topic){\n    case 'garage/connected':\n      return handleGarageConnected(message);\n    case 'garage/state':\n      return handleGarageState(message);\n  }\n  console.log('No handler for topic %s', topic);\n});\n\n\nfunction handleGarageConnected(message){\n  console.log('garage connected status %s', message);\n  connected = (message.toString() ===  'true');\n}\n\n\nfunction handleGarageState(message){\n  garageState = message;\n  console.log('garage state update to %s', message);\n}\n\nfunction openGarageDoor(){\n  console.log(connected + ' --- ' + garageState);\n  if(connected && garageState !== 'open'){\n    client1.publish('garage/open', 'true');\n  }\n}\n\nfunction closeGarageDoor(){\n  console.log(connected + ' --- ' + garageState);\n  if(connected && garageState !== 'closed'){\n    client1.publish('garage/close', 'true');\n  }\n}\n\nsetTimeout(()=>{\n  console.log('open door');\n  openGarageDoor();\n}, 5000);\n\nsetTimeout(()=>{\n  console.log('close door');\n  closeGarageDoor();\n},2000);\n\n\n*/\n\nvar port = normalizePort(process.env.PORT || '8080');\napp.set('port', port); //const PORT = process.env.PORT || 80;\n\nvar server = http.createServer(app);\nserver.listen(port, function () {\n  console.log(\"App listening to \".concat(port, \"....\"));\n  server.on('error', onError);\n  console.log('Press CTRL+C to quit.');\n  server.on('listening', onListening);\n});\n\nfunction normalizePort(val) {\n  var port = parseInt(val, 10);\n\n  if (isNaN(port)) {\n    return val;\n  }\n\n  if (port >= 0) {\n    return port;\n  }\n\n  return false;\n}\n\nfunction onError(error) {\n  if (error.syscall !== 'listen') {\n    throw error;\n  }\n\n  var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port; // handle specific listen errors with friendly messages\n\n  switch (error.code) {\n    case 'EACCES':\n      console.error(bind + ' requires elevated privileges');\n      process.exit(1);\n      break;\n\n    case 'EADDRINUSE':\n      console.error(bind + ' is already in use');\n      process.exit(1);\n      break;\n\n    default:\n      throw error;\n  }\n}\n\nfunction onListening() {\n  var addr = server.address();\n  var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;\n  debug('Listening on ' + bind);\n}\n/*\n\nprocess.env.NTBA_FIX_319 = 1;\n\nconst TelegramBot = require('node-telegram-bot-api');\n\nconst token = '801059544:AAFgnW1PaCnn2ZuKcl3NUvKIousJg1VEXXg';\n\n\nconst bot = new TelegramBot(token, {polling : true});\n\n\nbot.onText(/\\/echo (.+)/,(msg, match)=>{\n  const chatId = msg.chat.id;\n  match[1] = \"siiii.... erick se la come doblada y con nudos. xd una golosa xd\";\n  const resp = match[1];\n  console.log(\"now bot is responding.....\");\n  console.log(typeof match[1]);\n  bot.sendMessage(chatId, resp);\n});\n\nbot.on('message', (msg)=>{\n  const chatId = msg.chat.id;\n  setTimeout(()=>{\n      bot.sendMessage(chatId, 'ask me');\n  },1000);\n});\n\n*/\n\n//# sourceURL=webpack:///./src/server/server-dev.js?");

/***/ }),

/***/ "debug":
/*!************************!*\
  !*** external "debug" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"debug\");\n\n//# sourceURL=webpack:///external_%22debug%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ });
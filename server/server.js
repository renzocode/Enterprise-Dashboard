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

/***/ "./src/config/DB.js":
/*!**************************!*\
  !*** ./src/config/DB.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  DB: 'mongodb://localhost:27017/express_web'\n};\n\n//# sourceURL=webpack:///./src/config/DB.js?");

/***/ }),

/***/ "./src/models/schema_game.js":
/*!***********************************!*\
  !*** ./src/models/schema_game.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nconst Schema = mongoose.Schema;\nlet Game = new Schema({\n  title: String,\n  content: String,\n  author: String,\n  date: {\n    type: Date,\n    default: Date.now\n  }\n});\nmodule.exports = mongoose.model('Game', Game);\n\n//# sourceURL=webpack:///./src/models/schema_game.js?");

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const express = __webpack_require__(/*! express */ \"express\");\n\nconst gameRoutes = express.Router();\n\nlet Game = __webpack_require__(/*! ../models/schema_game */ \"./src/models/schema_game.js\");\n\ngameRoutes.route('/add').post(function (req, res) {\n  let game = new Game({\n    title: req.body.title,\n    content: req.body.content,\n    author: req.body.author\n  });\n  game.save(function (err) {\n    if (err) {\n      return handleError(err);\n    }\n\n    res.send(game);\n  });\n});\ngameRoutes.route('/edit/:id').get(function (req, res) {\n  let id = req.params.id;\n  Game.findById(id, function (err, game) {\n    res.json(game);\n  });\n});\ngameRoutes.route('/all').get(function (req, res) {\n  Game.find(function (err, games) {\n    if (err) {\n      return handleError(err);\n    } else {\n      res.json(games);\n    }\n\n    console.log(games);\n  });\n});\ngameRoutes.route('/update/:id').post(function (req, res) {\n  Game.findById(req.params.id, function (err, game) {\n    if (!game) {\n      return next(new Error('could not load Documents'));\n    } else {\n      game.name = req.body.name;\n      game.price = req.body.price;\n      game.save().then(game => {\n        res.json('Update completed');\n      }).catch(err => {\n        res.status(400).send('unable to update');\n      });\n    }\n  });\n});\ngameRoutes.route('/delete/:id').get(function (req, res) {\n  Game.findByIdAndRemove({\n    _id: req.params.id\n  }, function (err, game) {\n    if (err) {\n      res.json(err);\n    } else {\n      res.json('successfully removed');\n    }\n  });\n});\nmodule.exports = gameRoutes;\n\n//# sourceURL=webpack:///./src/routes/index.js?");

/***/ }),

/***/ "./src/server/server-dev.js":
/*!**********************************!*\
  !*** ./src/server/server-dev.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const path = __webpack_require__(/*! path */ \"path\");\n\nconst debug = __webpack_require__(/*! debug */ \"debug\")(':server');\n\nconst express = __webpack_require__(/*! express */ \"express\");\n\nconst http = __webpack_require__(/*! http */ \"http\");\n\nconst createError = __webpack_require__(/*! http-errors */ \"http-errors\");\n\nconst cookieParser = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n\nconst logger = __webpack_require__(/*! morgan */ \"morgan\");\n\nvar indexRouter = __webpack_require__(/*! ../routes/index */ \"./src/routes/index.js\");\n\nvar cors = __webpack_require__(/*! cors */ \"cors\");\n\nvar mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nmongoose.Promise = __webpack_require__(/*! bluebird */ \"bluebird\");\n\nvar config = __webpack_require__(/*! ../config/DB */ \"./src/config/DB.js\");\n\nvar bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nmongoose.Promise = global.Promise;\nmongoose.connect(config.DB).then(() => {\n  console.log('Database is connected');\n}, err => {\n  console.log('Can not connect to the Database' + err);\n});\nvar db = mongoose.connection;\ndb.on('Error ', console.error.bind(console, 'MongoDB connection error: '));\nconst app = express();\napp.use(logger('dev'));\napp.use(express.json());\napp.use(express.urlencoded({\n  extended: false\n}));\napp.use(cookieParser());\napp.use(bodyParser.json());\napp.use(bodyParser.urlencoded({\n  extended: false\n}));\napp.use('/', express.static(path.join(__dirname, '../public')));\napp.use(express.static(path.join(__dirname, '../public')));\napp.use('/api', indexRouter);\napp.use(function (req, res, next) {\n  next(createError(404));\n});\napp.use(function (err, req, res, next) {\n  res.locals.message = err.message;\n  res.locals.error = req.app.get('env') === 'development' ? err : {};\n  res.status(err.status || 500);\n  res.render('error');\n});\n/*const DIST_DIR = __dirname;\nconst HTML_FILE = path.join(DIST_DIR, '../public');\n\n\n\nconsole.log(\"dist_dir \"+ DIST_DIR);\n//app.use(express.static(DIST_DIR));\napp.use(express.static(HTML_FILE));\napp.get('*', (req, res) => {\n\tres.sendFile(HTML_FILE);\n});\n*/\n\nvar port = normalizePort(process.env.PORT || '8080');\napp.set('port', port); //const PORT = process.env.PORT || 80;\n\nvar server = http.createServer(app);\nserver.listen(port, () => {\n  console.log(`App listening to ${port}....`);\n  server.on('error', onError);\n  console.log('Press CTRL+C to quit.');\n  server.on('listening', onListening);\n});\n\nfunction normalizePort(val) {\n  var port = parseInt(val, 10);\n\n  if (isNaN(port)) {\n    return val;\n  }\n\n  if (port >= 0) {\n    return port;\n  }\n\n  return false;\n}\n\nfunction onError(error) {\n  if (error.syscall !== 'listen') {\n    throw error;\n  }\n\n  var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port; // handle specific listen errors with friendly messages\n\n  switch (error.code) {\n    case 'EACCES':\n      console.error(bind + ' requires elevated privileges');\n      process.exit(1);\n      break;\n\n    case 'EADDRINUSE':\n      console.error(bind + ' is already in use');\n      process.exit(1);\n      break;\n\n    default:\n      throw error;\n  }\n}\n\nfunction onListening() {\n  var addr = server.address();\n  var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;\n  debug('Listening on ' + bind);\n}\n\n//# sourceURL=webpack:///./src/server/server-dev.js?");

/***/ }),

/***/ "bluebird":
/*!***************************!*\
  !*** external "bluebird" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bluebird\");\n\n//# sourceURL=webpack:///external_%22bluebird%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

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

/***/ "http-errors":
/*!******************************!*\
  !*** external "http-errors" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http-errors\");\n\n//# sourceURL=webpack:///external_%22http-errors%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

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
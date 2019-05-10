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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/bundle/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/prism.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/prism.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/* http://prismjs.com/download.html?themes=prism-okaidia&languages=markup+css+clike+javascript */\n/**\n * okaidia theme for JavaScript, CSS and HTML\n * Loosely based on Monokai textmate theme by http://www.monokai.nl/\n * @author ocodia\n */\n\ncode[class*=\"language-\"],\npre[class*=\"language-\"] {\n\tcolor: #f8f8f2;\n\tbackground: none;\n\ttext-shadow: 0 1px rgba(0, 0, 0, 0.3);\n\tfont-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;\n\ttext-align: left;\n\twhite-space: pre;\n\tword-spacing: normal;\n\tword-break: normal;\n\tword-wrap: normal;\n\tline-height: 1.5;\n\n\t-moz-tab-size: 4;\n\t-o-tab-size: 4;\n\ttab-size: 4;\n\n\t-webkit-hyphens: none;\n\t-moz-hyphens: none;\n\t-ms-hyphens: none;\n\thyphens: none;\n}\n\n/* Code blocks */\npre[class*=\"language-\"] {\n\tpadding: 1em;\n\tmargin: .5em 0;\n\toverflow: auto;\n\tborder-radius: 0.3em;\n}\n\n:not(pre) > code[class*=\"language-\"],\npre[class*=\"language-\"] {\n\tbackground: #272822;\n}\n\n/* Inline code */\n:not(pre) > code[class*=\"language-\"] {\n\tpadding: .1em;\n\tborder-radius: .3em;\n\twhite-space: normal;\n}\n\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n\tcolor: slategray;\n}\n\n.token.punctuation {\n\tcolor: #f8f8f2;\n}\n\n.namespace {\n\topacity: .7;\n}\n\n.token.property,\n.token.tag,\n.token.constant,\n.token.symbol,\n.token.deleted {\n\tcolor: #f92672;\n}\n\n.token.boolean,\n.token.number {\n\tcolor: #ae81ff;\n}\n\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.builtin,\n.token.inserted {\n\tcolor: #a6e22e;\n}\n\n.token.operator,\n.token.entity,\n.token.url,\n.language-css .token.string,\n.style .token.string,\n.token.variable {\n\tcolor: #f8f8f2;\n}\n\n.token.atrule,\n.token.attr-value,\n.token.function {\n\tcolor: #e6db74;\n}\n\n.token.keyword {\n\tcolor: #66d9ef;\n}\n\n.token.regex,\n.token.important {\n\tcolor: #fd971f;\n}\n\n.token.important,\n.token.bold {\n\tfont-weight: bold;\n}\n.token.italic {\n\tfont-style: italic;\n}\n\n.token.entity {\n\tcursor: help;\n}\n\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "*{\n\tbox-sizing: border-box;\n}\n\nbody{\n\tfont-family: Arial, Helvetica, sans-serif;\n\t/*width : 100%;\n\theight : 100%;*/\n\tbackground-color: #606794;\n}\n\n.row{\n\tmargin-right: 0px !important;\n\tmargin-left: 0px !important;\n}\n\n.row::after{\n\tcontent: \"\";\n\tclear: both;\n\tdisplay: table;\t\n}\n\n[class*=\"col-*\"]{\n\tfloat :left;\n\tpadding: 15px;\n}\n\n.col-1{ width: 8.33%; }\n.col-2{ width: 16.66%; }\n.col-3{ width: 25%; }\n.col-4{ width: 33.33%; }\n.col-5{ width: 41.66%; }\n.col-6{ width: 50%; }\n.col-7{ width: 58.33%; }\n.col-8{ width: 66.66%; }\n.col-9{ width: 75%; }\n.col-10{ width: 83.33%; }\n.col-11{ width: 91.66%; }\n.col-12{ width: 100%; }\n\n\n\n/*header{\n\tbackground-color: #666;\n\tpadding: 30px;\n\ttext-align: center;\n\tfont-size: 35px;\n\tcolor : white;\n}\n*/\n\nnav{\n\t/*float : left;*/\n\twidth : 100%;\n\t/*height : 100px;*/\n\tbackground: #ccc;\n\t/*padding : 20px;*/\n}\n\nnav ul{\n\tlist-style-type : none;\n\tpadding : 3px;\n}\n\narticle{\n\tfloat : left;\n\tpadding : 20px;\n\twidth: 100%;\n\tbackground-color: #f1f1f1;\n\theight: 150px;\n}\n\n\nsection{\n\tposition: static !important;\n}\n\nsection:after{\n\tcontent: \"\";\n\tdisplay: block;\n\tclear : both;\n}\n\n\nfooter{\n\tbackground-color: #777 !important;\n\tpadding : 10px;\n\ttext-align : center;\n\tcolor : white;\n\theight: 100px;\n\tmargin-bottom: -8px;\n}\n\n@media(max-width:  600px){\n\tnav, article{\n\t\twidth: 100%;\n\t\theight: auto;\n\t}\n}\n\n.container-fluid{\n\tmargin-left: 0px;\n\tmargin-top: -10px;\n\tpadding: 0px;\n}\n\n.title-block{\n\tbackground-color: #f1f1f1;\n\tpadding: 30px;\n\ttext-align: center;\n}\n\n.section-block{\n\theight: 150px;\n}\n\n.columns-float-left{\n\tfloat: left;\n}\n\n.content{\n\twidth: 100%;\n\tbackground-color: red;\n}\n\n#left-content-id a{\n\tcolor: #000;\n\ttext-align:center;\n\tmargin-right: 0px;\n\tpadding-right: 0px;\n\tpadding-left: 0px;\n\tmargin-left: 0px;\n\tpadding-top: 10px;\n\tpadding-bottom: 10px;\n}\n/*\n.first-content-block{\n\theight: 987px;\n\twidth: 100%;\n\tbackground-color: #c6cfac;\n}\n*/\n.left-content{\n\t/*width: 250px;*/\n\t/*float : left;*/\n\tpadding: 15px;\n\tbackground-color: #7378ec;\n\t/*height : 987px;*/\n\ttext-align: center;\n}\n\n.left-content a{\n\tdisplay: inline-block;\n\tmargin-right: -15px;\n\tmargin-top: 10px;\n\tmargin-bottom: 10px;\n\tmargin-left: 10px;\n\tpadding-top: 20px;\n\tpadding: 20px;\n}\n\n.main-content{\n\twidth : 100%;\n\t/*float : left;*/\n\ttext-align: center;\n\tpadding : 15px;\n\tbackground-color: #4d90c3cc;\n}\n\n.right-content{\n\twidth: 100%;\n\tfloat : left;\n\theight: 100%;\n\tpadding: 15px;\n\tbackground-color: #acab37;\n\theight: 100%;\n}\n\n.topnav-h{\n\tbackground-color: #555;\n\tmargin : 0;\n\tpadding-top: 10px;\n\tpadding-left: 10px;\n\tpadding-bottom : 10px;\n\ttext-align: center;\n\theight : 70px;\n}\n\n.topnav-h a{\n\tfloat: left;\n\tdisplay: block;\n\tcolor: black;\n\ttext-align: center;\n\tpadding : 14px 16px;\n\ttext-decoration: none;\n\tfont-size: 17px;\n}\n\n.topnav-h a:hover{\n\tbackground-color: #ddd;\n\tcolor : black;\n}\n.topnav-h a.active{\n\tbackground-color: #2196F3;\n\tcolor : white;\n}\n\n.topnav-h input[type=text]{\n\tfloat : right;\n\tpadding : 6px;\n\tmargin-top: 8px;\n\tmargin-right: 16px;\n\tborder : none;\n\tfont-size: 17px;\n}\n\n.sticky {\n\tposition: fixed;\n\ttop: 0;\n\twidth: 100%;\n}\n\n.sticky-left-side{\n\tposition: fixed;\n\ttop: 70px;\n\twidth: 16.66%;\n\t/*width: 250px;*/\n}\n\n.sticky + .content{\n\tpadding-top : 30px;\n}\n\n.sticky-left-side1 + .content{\n\tpadding-top: 30px;\n}\n.add-to-main-content{\n\t/*margin-left: 250px;*/\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/theme.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/theme.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/* REQUIRED STYLING */\n/* styles the close button for the dismissible popovers */\n.popover .close { position: absolute; top: 7px; right: 10px; }\n/* REQUIRED STYLING */\n\n\n/* GLOBAL STYLES\n-------------------------------------------------- */\n/* Padding below the footer and lighter body text */\n\nbody {\n  color: #5a5a5a;\n  font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;\n}\n\n#main-container {padding-top: 20px;}\n\nfooter { padding: 20px 0 10px; background: #e6f0f8 }\n\n/* some typo */\nh1,h2,h3,h4,h5,strong,b { color: #111 }\nh1 { letter-spacing: -2px }\nh2 { letter-spacing: -3px; font-size: 56px; font-weight: bold }\nh3:not(.popover-title) {\n  font-size: 32px;\n  font-weight: bold;\n  letter-spacing: -2px;\n}\n\nhr.clearfix {clear: both; width: 100%; float: left}\n\n/* colors */\n.bg-bootstrap { background-color: #563d7c }\n.bg-pink { background-color: #E91E63 }\n.bg-indigo { background-color: #673ab7 }\n.bg-purple { background-color: #9c27b0 }\n.bg-red { background-color: #e51c23 }\n\n\n/* CONTENT STYLING\n-------------------------------------------------- */\n\n /* required for scrollspy to work perfect */\n section { position: relative; display: inline-block; width: 100%; } \n\n.scrollspy-example {\n  position: relative; height: 150px; overflow: auto; margin-bottom: 20px;\n  padding: 0 15px; border: 1px solid #ddd; border-radius: 4px 0 0 4px;\n}\n /* required for scrollspy to work perfect */\n\n/* some content customization | because why not */\n#componentTab .nav-tabs, #componentTab .nav-pills, #componentTab .navbar-nav, #componentTab .nav-stacked { margin-bottom: 15px }\n\n#componentTab .nav-stacked li a {padding: 5px 10px}\n#componentTab .nav-stacked,\n#componentTab .nav.panel { float: left; margin: 0 15px 20px 0 }\n#componentTab .nav-list { float: left; margin: 0 15px 20px 0; border-right: 1px solid #ddd }\n\n#componentTab .nav.panel > li.active > a,\n#componentTab .nav-list > li.active > a { background: #286090; color: #fff }\n\n#componentTab .nav.panel > li:first-child > a { border-radius: 3px 3px 0 0; }\n#componentTab .nav.panel > li:last-child > a { border-radius: 0 0 3px 3px; }\n\n#componentTab .navbar-nav { background: #eee; width: 100%; border-radius: 3px; }\n#componentTab .navbar-nav > li:first-child > a { border-radius: 3px 0 0 3px; }\n#componentTab .navbar-nav > li.active > a { background: #286090; color: #fff }\n\n#componentTab .nav.nav-stacked .dropdown-menu,\n#componentTab .nav.panel .dropdown-menu,\n#componentTab .nav-list .dropdown-menu { margin: 0; top: 0; left: 103%; }\n\n#componentTab .nav.panel + .tab-content,\n#componentTab .nav.nav-list + .tab-content { display: table-cell }\n\n/*#componentTab .btn-group { position: absolute; top:8px; left: 85px }*/\n#componentTab .btn-group > .btn { margin: 0}\n#componentTab .btn-group { margin: 0 0 20px }\n\n/* buttons */\np .btn, p .form-control {vertical-align: top}\np .btn, p .form-control {margin-bottom: 20px; vertical-align: top}\n\n/*p .btn-group {margin-bottom: 20px}*/\n#collapseExampleWrapper { padding: 20px 20px 10px }\n#collapseExample .well {margin-bottom: 10px}\n.btn-group .btn {margin-bottom: 0}\n\n#components {padding-bottom: 20px }\n\n/* nested dropdowns */\n.dropdown-menu .dropdown-menu.left {\n  top: -1px;\n  left: auto; right: 100%;\n  margin: 0 3px 0 0;\n}\n.dropdown-menu .dropdown-menu.right {\n  top: -1px;\n  left: 100%;\n  margin: 0 0 0 3px;\n}\n\n/* when on mobile, disable affix position */\n#side-nav {clear: both}\n#side-nav .nav.affix,\n#side-nav .nav.affix.affix-bottom { position: relative; margin: 20px 0; backface-visibility: hidden; }\n\n#side-nav > .nav li.active > a,\n#side-nav > .nav li.active:hover > a { background-color: #e6f0f8 }\n#side-nav > .nav li:hover > a { background-color: #f5f9fc }\n\n\n/* CUSTOMIZE THE NAVBAR\n-------------------------------------------------- */\n\n.navbar-inverse .navbar-brand { color: #fff }\n\n.navbar-nav .open .dropdown-menu { left: auto; right:0 }\n\n.navbar-collapse.collapsing {overflow-y: hidden}\n\n.navbar-nav { float: none }\n.navbar-fixed-top { padding: .5rem 0; border:0 }\n.navbar-brand { font-size: 20px }\n.navbar-brand svg { display: inline-block; vertical-align:top; margin: -8px 0 0 0 } \n.navbar-brand span { display: inline-block; vertical-align: top }\n\n.navbar-inverse .navbar-nav>.open>a, \n.navbar-inverse .navbar-nav>.open>a:focus, \n.navbar-inverse .navbar-nav>.open>a:hover {\n    background-color: transparent;\n}\n\n.navbar-inverse .navbar-toggle {\n    border-color: #eee;\n}\n.navbar-inverse .navbar-toggle:hover,\n.navbar-inverse .navbar-toggle:focus {\n    border-color: #fff;\n}\n\n.navbar-inverse .navbar-toggle:focus, .navbar-inverse .navbar-toggle:hover {\n    background-color: #673ab7;\n}\n\n/* CUSTOMIZE THE CAROUSEL\n-------------------------------------------------- */\n\n/* Carousel base class */\n#myCarousel.carousel {\n  height: 500px;\n}\n/* Since positioning the image, we need to help out the caption */\n.carousel-caption {\n  z-index: 10;\n}\n/* do some transition */ \n#myCarousel .item,\n#myCarousel .item.active {\n  -webkit-transition-timing-function: cubic-bezier(.45,.18,0,1);\n  transition-timing-function: cubic-bezier(.45,.18,0,1);\n}\n#myCarousel .carousel-caption {\n  -webkit-transition: all 0.3s; \n  transition: all 0.3s;\n  -webkit-transition-timing-function: cubic-bezier(0,.24,0,1);\n  transition-timing-function: cubic-bezier(0,.24,0,1);\n  opacity: 0;\n}\n\n/* when going forward, captions slide left */\n#myCarousel .next .carousel-caption {\n  -webkit-transform: translate3d(50%, 0, 0);\n  transform: translate3d(50%, 0, 0);\n}\n#myCarousel .prev .carousel-caption {\n  -webkit-transform: translate3d(-50%, 0, 0);\n  transform: translate3d(-50%, 0, 0);\n}\n/* when going backward, captions move different */\n#myCarousel .right.next .carousel-caption {\n  -webkit-transform: /*translate3d(50%, 0, 0)*/ rotateX(90deg);\n  transform: /*translate3d(50%, 0, 0)*/ rotateX(90deg);\n}\n#myCarousel .right.prev .carousel-caption {\n  -webkit-transform: /*translate3d(-50%, 0, 0)*/ rotateX(-90deg);\n  transform: /*translate3d(-50%, 0, 0)*/ rotateX(-90deg);\n}\n#myCarousel .carousel-caption.slide {\n  -webkit-transform: translate3d( 0%, 0, 0);\n  transform: translate3d(0%, 0, 0);\n  opacity:1;\n  /*visibility: visible;  */\n}\n\n/* Declare heights because of positioning of img element */\n#myCarousel .item {\n  height: 500px; width: 100%;\n  background-color: #777;\n}\n\n.carousel h2 { letter-spacing: -1px; font-size: 30px; font-weight: bold }\n\n.carousel .item.prev,\n.carousel .item.next {display: block}\n\n#myCarousel .carousel-inner > .item > .item-bg {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 500px;\n}\n\n.carousel .btn-default.btn-empty { border-width: 2px; color: #fff; border-color: #fff; background: none transparent }\n.carousel .btn-default.btn-empty:hover { color: #337ab7; background: #fff }\n\n.carousel h1,.carousel h2,.carousel h3,.carousel strong,.carousel b { color: #fff }\n.carousel a { color: #fff; text-decoration:underline }\n.carousel a:hover { color: #eee }\n.carousel a.btn { text-decoration:none }\n\n/* the small carousel thumbnail */\n#carousel-example-generic { margin: 0 }\n#carousel-example-generic,\n#carousel-example-generic .carousel-inner > .item > img { height: auto }\n\n/* dropdown form */\n\n.form-vertical {\n  padding: 10px 10px 5px 10px;\n  width: 250px;\n}\n\n/* side navigation */\n#side-nav  { margin-top: 40px; clear: none }\n\n/*#side-nav > .nav > li > ul { margin-top: 2px; height:0; opacity: 0; padding-left: 15px; transition: all 0.3s ease-out; }*/\n#side-nav > .nav li > ul { height:0; opacity: 0; padding-left: 15px; transition: height 0.3s ease-out, opacity 0.3s ease; }\n#side-nav > .nav li { overflow: hidden }\n#side-nav > .nav li.active > ul { opacity: 1; margin-top: 2px; }\n#side-nav > .nav li.active.list2 > ul { height: 66px; height: calc(32px*2 + 2px); }\n#side-nav > .nav li.active.list3 > ul { height: 100px; height: calc(32px*3 + 2px*2); }\n#side-nav > .nav li.active.list4 > ul { height: 134px; height: calc(32px*4 + 2px*3); }\n#side-nav > .nav li.active.list5 > ul { height: 168px; height: calc(32px*5 + 2px*4); }\n#side-nav > .nav li.active.list6 > ul { height: 202px; height: calc(32px*6 + 2px*5); }\n#side-nav > .nav li.active.list7 > ul { height: 236px; height: calc(32px*7 + 2px*6); }\n#side-nav > .nav li.active.list8 > ul { height: 270px; height: calc(32px*8 + 2px*7); }\n#side-nav > .nav li.active.list9 > ul { height: 304px; height: calc(32px*9 + 2px*8); }\n\n#side-nav > .nav li.active.list11 > ul { height: 338px; height: calc(32px*11 + 2px*10); }\n#side-nav > .nav li.active.list11.additional > ul { height: 506px; height: calc(32px*11 + 2px*10 + 32px*5 + 2px*4); }\n\n#side-nav > .nav li > a { z-index: 1; padding: 6px 10px; }\n#side-nav > .nav li > ul { z-index: 0 }\n\n.tooltip b, .tooltip strong {color: #fff}\n\n/* RESPONSIVE CSS\n-------------------------------------------------- */\n@media screen and (max-width: 1200px) {\n\t.carousel-caption {\n\t  right: 10%;\n\t  left: 10%;\n\t  padding-bottom: 30px;\n\t}\n}\n@media (min-width: 768px) {\n\n\t/* affix example */\n\t#side-nav .nav.affix,\n\t#side-nav .nav.affix-bottom { position: fixed !important;  width: 263px; }\n\t#side-nav .nav.affix { top: 50px; }\n\t#side-nav .nav.affix-bottom { top: auto; bottom: 100px }\n\n  /* Navbar positioning foo */\n  .navbar .navbar-nav {margin-right: 15px; float: right}\n\n  \n  /* Bump up size of carousel content */\n  .carousel-caption p {\n    margin-bottom: 20px;\n    font-size: 21px;\n    line-height: 1.4;\n  }\n  .carousel h2 { letter-spacing: -3px; font-size: 56px; font-weight: bold }\n\n}\n\n\n/* IE8 without modernizr */\n.ie8 #side-nav .nav.affix { position: fixed !important;  width: 215px; top: 0; }\n.ie8 #side-nav .nav.affix.affix-bottom { top: auto;  bottom: 100px; } \n\n.ie8 .navbar-wrapper {  margin-top: 40px; }\n.ie8 .navbar-wrapper .container { padding-right: 15px; padding-left: 15px; }\n.ie8 .navbar-wrapper .navbar { padding-right: 0; padding-left: 0; }\n\n.ie8 .navbar .navbar-nav {margin-right: 15px; float: right}\n/* IE8 without modernizr */\n\n\n/* code wrapping */\npre {\n\tdisplay: block;\n\tpadding: 10px 15px !important;\n\t/*margin: 0 0 20px !important;*/\n\tline-height: 2.08;\n\tcolor: #999;\n\tword-break: break-all;\n\tbackground-color: rgb(33,33,33);\n\tbackground-color: rgba(11,11,11,0.8);\n\tborder: none;\n\tborder-radius: 4px;\n\ttext-align: left;\n\tposition: relative;\n}\npre code {background: none;padding: 0; font-weight: normal; font-size: 100%;}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/bundle/index.js":
/*!*****************************!*\
  !*** ./src/bundle/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//bootstrap js v4
const back_index = __webpack_require__(/*! ../js/background-index */ "./src/js/background-index.js");

const bootstrap_native_v4 = __webpack_require__(/*! ../js/bootstrap-native-v4 */ "./src/js/bootstrap-native-v4.js"); //console.log(bootstrap_native_v4);
//require('bootstrap');


__webpack_require__(/*! ../css/style.css */ "./src/css/style.css");

__webpack_require__(/*! ../css/theme.css */ "./src/css/theme.css");

__webpack_require__(/*! ../css/prism.css */ "./src/css/prism.css"); //bootstrap v3.3.7
//require('./css/bootstrap.min.css');
//require('./css/bootstrap-glyphicons.css');
//console.log(typeof bootstrap_css);


const Messagex = __webpack_require__(/*! ../js/logger */ "./src/js/logger.js");

console.log(typeof Messagex);

window.onscroll = function () {
  console.log("ssss");
  console.log(typeof back_index);
  back_index.functionSticky();
};

var height = document.getElementById("col-main-id").style;
console.log(height); //var app = document.getElementById('app');
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

/***/ }),

/***/ "./src/css/prism.css":
/*!***************************!*\
  !*** ./src/css/prism.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./prism.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/prism.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/css/theme.css":
/*!***************************!*\
  !*** ./src/css/theme.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./theme.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/theme.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/js/background-index.js":
/*!************************************!*\
  !*** ./src/js/background-index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    console.log(factory());
  } else { var bsn; }
})(this, function () {
  //console.log(this.process.env);
  "use strict";

  var globalObject = typeof global !== 'undefined' ? global : this || window,
      DOC = document,
      HTML = DOC.documentElement,
      body = 'body',
      BSN = globalObject.BSN = {},
      supports = BSN.supports = [];
  var navigation_menu_id = document.getElementById("navigation-menu-id");
  var sticky = navigation_menu_id.offsetTop;
  var left_content_id_1block = document.getElementById("left-content-id");
  var sticky1 = left_content_id_1block.offsetTop;
  var main_content_id = document.getElementById("main-content-id");
  var title_block_id = document.getElementById("title-block-id").offsetHeight;
  var section_block_id = document.getElementById("section-block-id").offsetHeight;
  var high_left_content = title_block_id + section_block_id - navigation_menu_id.offsetHeight;
  var width_left = document.querySelector('.col-2');
  var measure_width = window.getComputedStyle(width_left);
  var col_left_id = document.getElementById('col-left-id');
  var col_main_id = document.getElementById('col-main-id');

  var functionSticky = function () {
    console.log("title-block-id : " + title_block_id);
    console.log("title-section-id : " + section_block_id);
    console.log("navigation-menu-id : " + navigation_menu_id.offsetHeight);
    console.log("pageYoffset : " + window.pageYOffset + " high_left_content : " + high_left_content);

    if (window.pageYOffset > sticky - 1) {
      navigation_menu_id.classList.add("sticky");

      if (window.pageYOffset > high_left_content && window.pageYOffset > section_block_id - 9) {
        //>256
        //col_main_id.style.marginLeft = 225 + "px";
        console.log("col-main : " + col_main_id.style.marginLeft);
        left_content_id_1block.classList.add("sticky-left-side");
        main_content_id.classList.add("add-to-main-content");
        console.log(window.pageYOffset + "--- >656");
        /*
        if(window.pageYOffset > 656){
        	left_content_id_1block.style.height = 581 - (window.pageYOffset - 658) + "px";
        }else{
        	left_content_id_1block.style.height = 100 + "%";
        }
        */
      } else {
        col_main_id.style.marginLeft = 0 + "px";
        left_content_id_1block.classList.remove("sticky-left-side");
        main_content_id.classList.remove("add-to-main-content");
      }
    } else {
      navigation_menu_id.classList.remove("sticky");
    }
  };

  var stickyleft = function () {
    var left_content_id_1block = document.getElementById("left-content-id");
    left_content_id_1block.classList.add("sticky-left-side1");
  };

  return {
    functionSticky: functionSticky
  };
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/js/bootstrap-native-v4.js":
/*!***************************************!*\
  !*** ./src/js/bootstrap-native-v4.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Native Javascript for Bootstrap 4 v2.0.25 | © dnp_theme | MIT-License
(function (root, factory) {
  if (true) {
    // AMD support:
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var bsn; }
})(this, function () {
  /* Native Javascript for Bootstrap 4 | Internal Utility Functions
  ----------------------------------------------------------------*/
  "use strict"; // globals

  var globalObject = typeof global !== 'undefined' ? global : this || window,
      DOC = document,
      HTML = DOC.documentElement,
      body = 'body',
      // allow the library to be used in <head>
  // Native Javascript for Bootstrap Global Object
  BSN = globalObject.BSN = {},
      supports = BSN.supports = [],
      // function toggle attributes
  dataToggle = 'data-toggle',
      dataDismiss = 'data-dismiss',
      dataSpy = 'data-spy',
      dataRide = 'data-ride',
      // components
  stringAlert = 'Alert',
      stringButton = 'Button',
      stringCarousel = 'Carousel',
      stringCollapse = 'Collapse',
      stringDropdown = 'Dropdown',
      stringModal = 'Modal',
      stringPopover = 'Popover',
      stringScrollSpy = 'ScrollSpy',
      stringTab = 'Tab',
      stringTooltip = 'Tooltip',
      // options DATA API
  databackdrop = 'data-backdrop',
      dataKeyboard = 'data-keyboard',
      dataTarget = 'data-target',
      dataInterval = 'data-interval',
      dataHeight = 'data-height',
      dataPause = 'data-pause',
      dataTitle = 'data-title',
      dataOriginalTitle = 'data-original-title',
      dataOriginalText = 'data-original-text',
      dataDismissible = 'data-dismissible',
      dataTrigger = 'data-trigger',
      dataAnimation = 'data-animation',
      dataContainer = 'data-container',
      dataPlacement = 'data-placement',
      dataDelay = 'data-delay',
      dataOffsetTop = 'data-offset-top',
      dataOffsetBottom = 'data-offset-bottom',
      // option keys
  backdrop = 'backdrop',
      keyboard = 'keyboard',
      delay = 'delay',
      content = 'content',
      target = 'target',
      currentTarget = 'currentTarget',
      interval = 'interval',
      pause = 'pause',
      animation = 'animation',
      placement = 'placement',
      container = 'container',
      // box model
  offsetTop = 'offsetTop',
      offsetBottom = 'offsetBottom',
      offsetLeft = 'offsetLeft',
      scrollTop = 'scrollTop',
      scrollLeft = 'scrollLeft',
      clientWidth = 'clientWidth',
      clientHeight = 'clientHeight',
      offsetWidth = 'offsetWidth',
      offsetHeight = 'offsetHeight',
      innerWidth = 'innerWidth',
      innerHeight = 'innerHeight',
      scrollHeight = 'scrollHeight',
      height = 'height',
      // aria
  ariaExpanded = 'aria-expanded',
      ariaHidden = 'aria-hidden',
      ariaSelected = 'aria-selected',
      // event names
  clickEvent = 'click',
      hoverEvent = 'hover',
      keydownEvent = 'keydown',
      keyupEvent = 'keyup',
      resizeEvent = 'resize',
      scrollEvent = 'scroll',
      // originalEvents
  showEvent = 'show',
      shownEvent = 'shown',
      hideEvent = 'hide',
      hiddenEvent = 'hidden',
      closeEvent = 'close',
      closedEvent = 'closed',
      slidEvent = 'slid',
      slideEvent = 'slide',
      changeEvent = 'change',
      // other
  getAttribute = 'getAttribute',
      setAttribute = 'setAttribute',
      hasAttribute = 'hasAttribute',
      createElement = 'createElement',
      appendChild = 'appendChild',
      innerHTML = 'innerHTML',
      getElementsByTagName = 'getElementsByTagName',
      preventDefault = 'preventDefault',
      getBoundingClientRect = 'getBoundingClientRect',
      querySelectorAll = 'querySelectorAll',
      getElementsByCLASSNAME = 'getElementsByClassName',
      getComputedStyle = 'getComputedStyle',
      indexOf = 'indexOf',
      parentNode = 'parentNode',
      length = 'length',
      toLowerCase = 'toLowerCase',
      Transition = 'Transition',
      Duration = 'Duration',
      Webkit = 'Webkit',
      style = 'style',
      push = 'push',
      tabindex = 'tabindex',
      contains = 'contains',
      active = 'active',
      showClass = 'show',
      collapsing = 'collapsing',
      disabled = 'disabled',
      loading = 'loading',
      left = 'left',
      right = 'right',
      top = 'top',
      bottom = 'bottom',
      // tooltip / popover
  mouseHover = 'onmouseleave' in DOC ? ['mouseenter', 'mouseleave'] : ['mouseover', 'mouseout'],
      tipPositions = /\b(top|bottom|left|right)+/,
      // modal
  modalOverlay = 0,
      fixedTop = 'fixed-top',
      fixedBottom = 'fixed-bottom',
      // transitionEnd since 2.0.4
  supportTransitions = Webkit + Transition in HTML[style] || Transition[toLowerCase]() in HTML[style],
      transitionEndEvent = Webkit + Transition in HTML[style] ? Webkit[toLowerCase]() + Transition + 'End' : Transition[toLowerCase]() + 'end',
      transitionDuration = Webkit + Duration in HTML[style] ? Webkit[toLowerCase]() + Transition + Duration : Transition[toLowerCase]() + Duration,
      // set new focus element since 2.0.3
  setFocus = function (element) {
    element.focus ? element.focus() : element.setActive();
  },
      // class manipulation, since 2.0.0 requires polyfill.js
  addClass = function (element, classNAME) {
    element.classList.add(classNAME);
  },
      removeClass = function (element, classNAME) {
    element.classList.remove(classNAME);
  },
      hasClass = function (element, classNAME) {
    // since 2.0.0
    return element.classList[contains](classNAME);
  },
      // selection methods
  getElementsByClassName = function (element, classNAME) {
    // returns Array
    return [].slice.call(element[getElementsByCLASSNAME](classNAME));
  },
      queryElement = function (selector, parent) {
    var lookUp = parent ? parent : DOC;
    return typeof selector === 'object' ? selector : lookUp.querySelector(selector);
  },
      getClosest = function (element, selector) {
    //element is the element and selector is for the closest parent element to find
    // source http://gomakethings.com/climbing-up-and-down-the-dom-tree-with-vanilla-javascript/
    var firstChar = selector.charAt(0),
        selectorSubstring = selector.substr(1);

    if (firstChar === '.') {
      // If selector is a class
      for (; element && element !== DOC; element = element[parentNode]) {
        // Get closest match
        if (queryElement(selector, element[parentNode]) !== null && hasClass(element, selectorSubstring)) {
          return element;
        }
      }
    } else if (firstChar === '#') {
      // If selector is an ID
      for (; element && element !== DOC; element = element[parentNode]) {
        // Get closest match
        if (element.id === selectorSubstring) {
          return element;
        }
      }
    }

    return false;
  },
      // event attach jQuery style / trigger  since 1.2.0
  on = function (element, event, handler) {
    element.addEventListener(event, handler, false);
  },
      off = function (element, event, handler) {
    element.removeEventListener(event, handler, false);
  },
      one = function (element, event, handler) {
    // one since 2.0.4
    on(element, event, function handlerWrapper(e) {
      handler(e);
      off(element, event, handlerWrapper);
    });
  },
      getTransitionDurationFromElement = function (element) {
    var duration = supportTransitions ? globalObject[getComputedStyle](element)[transitionDuration] : 0;
    duration = parseFloat(duration);
    duration = typeof duration === 'number' && !isNaN(duration) ? duration * 1000 : 0;
    return duration + 50; // we take a short offset to make sure we fire on the next frame after animation
  },
      emulateTransitionEnd = function (element, handler) {
    // emulateTransitionEnd since 2.0.4
    var called = 0,
        duration = getTransitionDurationFromElement(element);
    supportTransitions && one(element, transitionEndEvent, function (e) {
      handler(e);
      called = 1;
    });
    setTimeout(function () {
      !called && handler();
    }, duration);
  },
      bootstrapCustomEvent = function (eventName, componentName, related) {
    var OriginalCustomEvent = new CustomEvent(eventName + '.bs.' + componentName);
    OriginalCustomEvent.relatedTarget = related;
    this.dispatchEvent(OriginalCustomEvent);
  },
      // tooltip / popover stuff
  getScroll = function () {
    // also Affix and ScrollSpy uses it
    return {
      y: globalObject.pageYOffset || HTML[scrollTop],
      x: globalObject.pageXOffset || HTML[scrollLeft]
    };
  },
      styleTip = function (link, element, position, parent) {
    // both popovers and tooltips (target,tooltip,placement,elementToAppendTo)
    var elementDimensions = {
      w: element[offsetWidth],
      h: element[offsetHeight]
    },
        windowWidth = HTML[clientWidth] || DOC[body][clientWidth],
        windowHeight = HTML[clientHeight] || DOC[body][clientHeight],
        rect = link[getBoundingClientRect](),
        scroll = parent === DOC[body] ? getScroll() : {
      x: parent[offsetLeft] + parent[scrollLeft],
      y: parent[offsetTop] + parent[scrollTop]
    },
        linkDimensions = {
      w: rect[right] - rect[left],
      h: rect[bottom] - rect[top]
    },
        isPopover = hasClass(element, 'popover'),
        topPosition,
        leftPosition,
        arrow = queryElement('.arrow', element),
        arrowTop,
        arrowLeft,
        arrowWidth,
        arrowHeight,
        halfTopExceed = rect[top] + linkDimensions.h / 2 - elementDimensions.h / 2 < 0,
        halfLeftExceed = rect[left] + linkDimensions.w / 2 - elementDimensions.w / 2 < 0,
        halfRightExceed = rect[left] + elementDimensions.w / 2 + linkDimensions.w / 2 >= windowWidth,
        halfBottomExceed = rect[top] + elementDimensions.h / 2 + linkDimensions.h / 2 >= windowHeight,
        topExceed = rect[top] - elementDimensions.h < 0,
        leftExceed = rect[left] - elementDimensions.w < 0,
        bottomExceed = rect[top] + elementDimensions.h + linkDimensions.h >= windowHeight,
        rightExceed = rect[left] + elementDimensions.w + linkDimensions.w >= windowWidth; // recompute position

    position = (position === left || position === right) && leftExceed && rightExceed ? top : position; // first, when both left and right limits are exceeded, we fall back to top|bottom

    position = position === top && topExceed ? bottom : position;
    position = position === bottom && bottomExceed ? top : position;
    position = position === left && leftExceed ? right : position;
    position = position === right && rightExceed ? left : position; // update tooltip/popover class

    element.className[indexOf](position) === -1 && (element.className = element.className.replace(tipPositions, position)); // we check the computed width & height and update here

    arrowWidth = arrow[offsetWidth];
    arrowHeight = arrow[offsetHeight]; // apply styling to tooltip or popover

    if (position === left || position === right) {
      // secondary|side positions
      if (position === left) {
        // LEFT
        leftPosition = rect[left] + scroll.x - elementDimensions.w - (isPopover ? arrowWidth : 0);
      } else {
        // RIGHT
        leftPosition = rect[left] + scroll.x + linkDimensions.w;
      } // adjust top and arrow


      if (halfTopExceed) {
        topPosition = rect[top] + scroll.y;
        arrowTop = linkDimensions.h / 2 - arrowWidth;
      } else if (halfBottomExceed) {
        topPosition = rect[top] + scroll.y - elementDimensions.h + linkDimensions.h;
        arrowTop = elementDimensions.h - linkDimensions.h / 2 - arrowWidth;
      } else {
        topPosition = rect[top] + scroll.y - elementDimensions.h / 2 + linkDimensions.h / 2;
        arrowTop = elementDimensions.h / 2 - (isPopover ? arrowHeight * 0.9 : arrowHeight / 2);
      }
    } else if (position === top || position === bottom) {
      // primary|vertical positions
      if (position === top) {
        // TOP
        topPosition = rect[top] + scroll.y - elementDimensions.h - (isPopover ? arrowHeight : 0);
      } else {
        // BOTTOM
        topPosition = rect[top] + scroll.y + linkDimensions.h;
      } // adjust left | right and also the arrow


      if (halfLeftExceed) {
        leftPosition = 0;
        arrowLeft = rect[left] + linkDimensions.w / 2 - arrowWidth;
      } else if (halfRightExceed) {
        leftPosition = windowWidth - elementDimensions.w * 1.01;
        arrowLeft = elementDimensions.w - (windowWidth - rect[left]) + linkDimensions.w / 2 - arrowWidth / 2;
      } else {
        leftPosition = rect[left] + scroll.x - elementDimensions.w / 2 + linkDimensions.w / 2;
        arrowLeft = elementDimensions.w / 2 - arrowWidth / 2;
      }
    } // apply style to tooltip/popover and its arrow


    element[style][top] = topPosition + 'px';
    element[style][left] = leftPosition + 'px';
    arrowTop && (arrow[style][top] = arrowTop + 'px');
    arrowLeft && (arrow[style][left] = arrowLeft + 'px');
  };

  BSN.version = '2.0.25';
  /* Native Javascript for Bootstrap 4 | Alert
  -------------------------------------------*/
  // ALERT DEFINITION
  // ================

  var Alert = function (element) {
    // initialization element
    element = queryElement(element); // bind, target alert, duration and stuff

    var self = this,
        component = 'alert',
        alert = getClosest(element, '.' + component),
        triggerHandler = function () {
      hasClass(alert, 'fade') ? emulateTransitionEnd(alert, transitionEndHandler) : transitionEndHandler();
    },
        // handlers
    clickHandler = function (e) {
      alert = getClosest(e[target], '.' + component);
      element = queryElement('[' + dataDismiss + '="' + component + '"]', alert);
      element && alert && (element === e[target] || element[contains](e[target])) && self.close();
    },
        transitionEndHandler = function () {
      bootstrapCustomEvent.call(alert, closedEvent, component);
      off(element, clickEvent, clickHandler); // detach it's listener

      alert[parentNode].removeChild(alert);
    }; // public method


    this.close = function () {
      if (alert && element && hasClass(alert, showClass)) {
        bootstrapCustomEvent.call(alert, closeEvent, component);
        removeClass(alert, showClass);
        alert && triggerHandler();
      }
    }; // init


    if (!(stringAlert in element)) {
      // prevent adding event handlers twice
      on(element, clickEvent, clickHandler);
    }

    element[stringAlert] = self;
  }; // ALERT DATA API
  // ==============


  supports[push]([stringAlert, Alert, '[' + dataDismiss + '="alert"]']);
  /* Native Javascript for Bootstrap 4 | Button
  ---------------------------------------------*/
  // BUTTON DEFINITION
  // ===================

  var Button = function (element) {
    // initialization element
    element = queryElement(element); // constant

    var toggled = false,
        // toggled makes sure to prevent triggering twice the change.bs.button events
    // strings
    component = 'button',
        checked = 'checked',
        reset = 'reset',
        LABEL = 'LABEL',
        INPUT = 'INPUT',
        // private methods
    keyHandler = function (e) {
      var key = e.which || e.keyCode;
      key === 32 && e[target] === DOC.activeElement && toggle(e);
    },
        preventScroll = function (e) {
      var key = e.which || e.keyCode;
      key === 32 && e[preventDefault]();
    },
        toggle = function (e) {
      var label = e[target].tagName === LABEL ? e[target] : e[target][parentNode].tagName === LABEL ? e[target][parentNode] : null; // the .btn label

      if (!label) return; //react if a label or its immediate child is clicked

      var eventTarget = e[target],
          // the button itself, the target of the handler function
      labels = getElementsByClassName(eventTarget[parentNode], 'btn'),
          // all the button group buttons
      input = label[getElementsByTagName](INPUT)[0];
      if (!input) return; //return if no input found
      // manage the dom manipulation

      if (input.type === 'checkbox') {
        //checkboxes
        if (!input[checked]) {
          addClass(label, active);
          input[getAttribute](checked);
          input[setAttribute](checked, checked);
          input[checked] = true;
        } else {
          removeClass(label, active);
          input[getAttribute](checked);
          input.removeAttribute(checked);
          input[checked] = false;
        }

        if (!toggled) {
          // prevent triggering the event twice
          toggled = true;
          bootstrapCustomEvent.call(input, changeEvent, component); //trigger the change for the input

          bootstrapCustomEvent.call(element, changeEvent, component); //trigger the change for the btn-group
        }
      }

      if (input.type === 'radio' && !toggled) {
        // radio buttons
        if (!input[checked]) {
          // don't trigger if already active
          addClass(label, active);
          input[setAttribute](checked, checked);
          input[checked] = true;
          bootstrapCustomEvent.call(input, changeEvent, component); //trigger the change for the input

          bootstrapCustomEvent.call(element, changeEvent, component); //trigger the change for the btn-group

          toggled = true;

          for (var i = 0, ll = labels[length]; i < ll; i++) {
            var otherLabel = labels[i],
                otherInput = otherLabel[getElementsByTagName](INPUT)[0];

            if (otherLabel !== label && hasClass(otherLabel, active)) {
              removeClass(otherLabel, active);
              otherInput.removeAttribute(checked);
              otherInput[checked] = false;
              bootstrapCustomEvent.call(otherInput, changeEvent, component); // trigger the change
            }
          }
        }
      }

      setTimeout(function () {
        toggled = false;
      }, 50);
    }; // init


    if (!(stringButton in element)) {
      // prevent adding event handlers twice
      on(element, clickEvent, toggle);
      queryElement('[' + tabindex + ']', element) && on(element, keyupEvent, keyHandler), on(element, keydownEvent, preventScroll);
    } // activate items on load


    var labelsToACtivate = getElementsByClassName(element, 'btn'),
        lbll = labelsToACtivate[length];

    for (var i = 0; i < lbll; i++) {
      !hasClass(labelsToACtivate[i], active) && queryElement('input:checked', labelsToACtivate[i]) && addClass(labelsToACtivate[i], active);
    }

    element[stringButton] = this;
  }; // BUTTON DATA API
  // =================


  supports[push]([stringButton, Button, '[' + dataToggle + '="buttons"]']);
  /* Native Javascript for Bootstrap 4 | Carousel
  ----------------------------------------------*/
  // CAROUSEL DEFINITION
  // ===================

  var Carousel = function (element, options) {
    // initialization element
    element = queryElement(element); // set options

    options = options || {}; // DATA API

    var intervalAttribute = element[getAttribute](dataInterval),
        intervalOption = options[interval],
        intervalData = intervalAttribute === 'false' ? 0 : parseInt(intervalAttribute),
        pauseData = element[getAttribute](dataPause) === hoverEvent || false,
        keyboardData = element[getAttribute](dataKeyboard) === 'true' || false,
        // strings
    component = 'carousel',
        paused = 'paused',
        direction = 'direction',
        carouselItem = 'carousel-item',
        dataSlideTo = 'data-slide-to';
    this[keyboard] = options[keyboard] === true || keyboardData;
    this[pause] = options[pause] === hoverEvent || pauseData ? hoverEvent : false; // false / hover

    this[interval] = typeof intervalOption === 'number' ? intervalOption : intervalOption === false || intervalData === 0 || intervalData === false ? 0 : isNaN(intervalData) ? 5000 // bootstrap carousel default interval
    : intervalData; // bind, event targets

    var self = this,
        index = element.index = 0,
        timer = element.timer = 0,
        isSliding = false,
        // isSliding prevents click event handlers when animation is running
    slides = getElementsByClassName(element, carouselItem),
        total = slides[length],
        slideDirection = this[direction] = left,
        leftArrow = getElementsByClassName(element, component + '-control-prev')[0],
        rightArrow = getElementsByClassName(element, component + '-control-next')[0],
        indicator = queryElement('.' + component + '-indicators', element),
        indicators = indicator && indicator[getElementsByTagName]("LI") || []; // invalidate when not enough items

    if (total < 2) {
      return;
    } // handlers


    var pauseHandler = function () {
      if (self[interval] !== false && !hasClass(element, paused)) {
        addClass(element, paused);
        !isSliding && (clearInterval(timer), timer = null);
      }
    },
        resumeHandler = function () {
      if (self[interval] !== false && hasClass(element, paused)) {
        removeClass(element, paused);
        !isSliding && (clearInterval(timer), timer = null);
        !isSliding && self.cycle();
      }
    },
        indicatorHandler = function (e) {
      e[preventDefault]();
      if (isSliding) return;
      var eventTarget = e[target]; // event target | the current active item

      if (eventTarget && !hasClass(eventTarget, active) && eventTarget[getAttribute](dataSlideTo)) {
        index = parseInt(eventTarget[getAttribute](dataSlideTo), 10);
      } else {
        return false;
      }

      self.slideTo(index); //Do the slide
    },
        controlsHandler = function (e) {
      e[preventDefault]();
      if (isSliding) return;
      var eventTarget = e.currentTarget || e.srcElement;

      if (eventTarget === rightArrow) {
        index++;
      } else if (eventTarget === leftArrow) {
        index--;
      }

      self.slideTo(index); //Do the slide
    },
        keyHandler = function (e) {
      if (isSliding) return;

      switch (e.which) {
        case 39:
          index++;
          break;

        case 37:
          index--;
          break;

        default:
          return;
      }

      self.slideTo(index); //Do the slide
    },
        // private methods
    isElementInScrollRange = function () {
      var rect = element[getBoundingClientRect](),
          viewportHeight = globalObject[innerHeight] || HTML[clientHeight];
      return rect[top] <= viewportHeight && rect[bottom] >= 0; // bottom && top
    },
        setActivePage = function (pageIndex) {
      //indicators
      for (var i = 0, icl = indicators[length]; i < icl; i++) {
        removeClass(indicators[i], active);
      }

      if (indicators[pageIndex]) addClass(indicators[pageIndex], active);
    }; // public methods


    this.cycle = function () {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }

      timer = setInterval(function () {
        isElementInScrollRange() && (index++, self.slideTo(index));
      }, this[interval]);
    };

    this.slideTo = function (next) {
      if (isSliding) return; // when controled via methods, make sure to check again      

      var activeItem = this.getActiveIndex(),
          // the current active
      orientation; // first return if we're on the same item #227

      if (activeItem === next) {
        return; // or determine slideDirection
      } else if (activeItem < next || activeItem === 0 && next === total - 1) {
        slideDirection = self[direction] = left; // next
      } else if (activeItem > next || activeItem === total - 1 && next === 0) {
        slideDirection = self[direction] = right; // prev
      } // find the right next index 


      if (next < 0) {
        next = total - 1;
      } else if (next >= total) {
        next = 0;
      } // update index


      index = next;
      orientation = slideDirection === left ? 'next' : 'prev'; //determine type

      bootstrapCustomEvent.call(element, slideEvent, component, slides[next]); // here we go with the slide

      isSliding = true;
      clearInterval(timer);
      timer = null;
      setActivePage(next);

      if (supportTransitions && hasClass(element, 'slide')) {
        addClass(slides[next], carouselItem + '-' + orientation);
        slides[next][offsetWidth];
        addClass(slides[next], carouselItem + '-' + slideDirection);
        addClass(slides[activeItem], carouselItem + '-' + slideDirection);
        one(slides[next], transitionEndEvent, function (e) {
          var timeout = e[target] !== slides[next] ? e.elapsedTime * 1000 + 100 : 20;
          isSliding && setTimeout(function () {
            isSliding = false;
            addClass(slides[next], active);
            removeClass(slides[activeItem], active);
            removeClass(slides[next], carouselItem + '-' + orientation);
            removeClass(slides[next], carouselItem + '-' + slideDirection);
            removeClass(slides[activeItem], carouselItem + '-' + slideDirection);
            bootstrapCustomEvent.call(element, slidEvent, component, slides[next]);

            if (!DOC.hidden && self[interval] && !hasClass(element, paused)) {
              self.cycle();
            }
          }, timeout);
        });
      } else {
        addClass(slides[next], active);
        slides[next][offsetWidth];
        removeClass(slides[activeItem], active);
        setTimeout(function () {
          isSliding = false;

          if (self[interval] && !hasClass(element, paused)) {
            self.cycle();
          }

          bootstrapCustomEvent.call(element, slidEvent, component, slides[next]);
        }, 100);
      }
    };

    this.getActiveIndex = function () {
      return slides[indexOf](getElementsByClassName(element, carouselItem + ' active')[0]) || 0;
    }; // init


    if (!(stringCarousel in element)) {
      // prevent adding event handlers twice
      if (self[pause] && self[interval]) {
        on(element, mouseHover[0], pauseHandler);
        on(element, mouseHover[1], resumeHandler);
        on(element, 'touchstart', pauseHandler);
        on(element, 'touchend', resumeHandler);
      }

      rightArrow && on(rightArrow, clickEvent, controlsHandler);
      leftArrow && on(leftArrow, clickEvent, controlsHandler);
      indicator && on(indicator, clickEvent, indicatorHandler);
      self[keyboard] === true && on(globalObject, keydownEvent, keyHandler);
    }

    if (self.getActiveIndex() < 0) {
      slides[length] && addClass(slides[0], active);
      indicators[length] && setActivePage(0);
    }

    if (self[interval]) {
      self.cycle();
    }

    element[stringCarousel] = self;
  }; // CAROUSEL DATA API
  // =================


  supports[push]([stringCarousel, Carousel, '[' + dataRide + '="carousel"]']);
  /* Native Javascript for Bootstrap 4 | Collapse
  -----------------------------------------------*/
  // COLLAPSE DEFINITION
  // ===================

  var Collapse = function (element, options) {
    // initialization element
    element = queryElement(element); // set options

    options = options || {}; // event targets and constants

    var accordion = null,
        collapse = null,
        self = this,
        accordionData = element[getAttribute]('data-parent'),
        activeCollapse,
        activeElement,
        // component strings
    component = 'collapse',
        collapsed = 'collapsed',
        isAnimating = 'isAnimating',
        // private methods
    openAction = function (collapseElement, toggle) {
      bootstrapCustomEvent.call(collapseElement, showEvent, component);
      collapseElement[isAnimating] = true;
      addClass(collapseElement, collapsing);
      removeClass(collapseElement, component);
      collapseElement[style][height] = collapseElement[scrollHeight] + 'px';
      emulateTransitionEnd(collapseElement, function () {
        collapseElement[isAnimating] = false;
        collapseElement[setAttribute](ariaExpanded, 'true');
        toggle[setAttribute](ariaExpanded, 'true');
        removeClass(collapseElement, collapsing);
        addClass(collapseElement, component);
        addClass(collapseElement, showClass);
        collapseElement[style][height] = '';
        bootstrapCustomEvent.call(collapseElement, shownEvent, component);
      });
    },
        closeAction = function (collapseElement, toggle) {
      bootstrapCustomEvent.call(collapseElement, hideEvent, component);
      collapseElement[isAnimating] = true;
      collapseElement[style][height] = collapseElement[scrollHeight] + 'px'; // set height first

      removeClass(collapseElement, component);
      removeClass(collapseElement, showClass);
      addClass(collapseElement, collapsing);
      collapseElement[offsetWidth]; // force reflow to enable transition

      collapseElement[style][height] = '0px';
      emulateTransitionEnd(collapseElement, function () {
        collapseElement[isAnimating] = false;
        collapseElement[setAttribute](ariaExpanded, 'false');
        toggle[setAttribute](ariaExpanded, 'false');
        removeClass(collapseElement, collapsing);
        addClass(collapseElement, component);
        collapseElement[style][height] = '';
        bootstrapCustomEvent.call(collapseElement, hiddenEvent, component);
      });
    },
        getTarget = function () {
      var href = element.href && element[getAttribute]('href'),
          parent = element[getAttribute](dataTarget),
          id = href || parent && parent.charAt(0) === '#' && parent;
      return id && queryElement(id);
    }; // public methods


    this.toggle = function (e) {
      e[preventDefault]();

      if (!hasClass(collapse, showClass)) {
        self.show();
      } else {
        self.hide();
      }
    };

    this.hide = function () {
      if (collapse[isAnimating]) return;
      closeAction(collapse, element);
      addClass(element, collapsed);
    };

    this.show = function () {
      if (accordion) {
        activeCollapse = queryElement('.' + component + '.' + showClass, accordion);
        activeElement = activeCollapse && (queryElement('[' + dataToggle + '="' + component + '"][' + dataTarget + '="#' + activeCollapse.id + '"]', accordion) || queryElement('[' + dataToggle + '="' + component + '"][href="#' + activeCollapse.id + '"]', accordion));
      }

      if (!collapse[isAnimating] || activeCollapse && !activeCollapse[isAnimating]) {
        if (activeElement && activeCollapse !== collapse) {
          closeAction(activeCollapse, activeElement);
          addClass(activeElement, collapsed);
        }

        openAction(collapse, element);
        removeClass(element, collapsed);
      }
    }; // init


    if (!(stringCollapse in element)) {
      // prevent adding event handlers twice
      on(element, clickEvent, self.toggle);
    }

    collapse = getTarget();
    collapse[isAnimating] = false; // when true it will prevent click handlers  

    accordion = queryElement(options.parent) || accordionData && getClosest(element, accordionData);
    element[stringCollapse] = self;
  }; // COLLAPSE DATA API
  // =================


  supports[push]([stringCollapse, Collapse, '[' + dataToggle + '="collapse"]']);
  /* Native Javascript for Bootstrap 4 | Dropdown
  ----------------------------------------------*/
  // DROPDOWN DEFINITION
  // ===================

  var Dropdown = function (element, option) {
    // initialization element
    element = queryElement(element); // set option

    this.persist = option === true || element[getAttribute]('data-persist') === 'true' || false; // constants, event targets, strings

    var self = this,
        children = 'children',
        parent = element[parentNode],
        component = 'dropdown',
        open = 'open',
        relatedTarget = null,
        menu = queryElement('.dropdown-menu', parent),
        menuItems = function () {
      var set = menu[children],
          newSet = [];

      for (var i = 0; i < set[length]; i++) {
        set[i][children][length] && set[i][children][0].tagName === 'A' && newSet[push](set[i][children][0]);
        set[i].tagName === 'A' && newSet[push](set[i]);
      }

      return newSet;
    }(),
        // preventDefault on empty anchor links
    preventEmptyAnchor = function (anchor) {
      (anchor.href && anchor.href.slice(-1) === '#' || anchor[parentNode] && anchor[parentNode].href && anchor[parentNode].href.slice(-1) === '#') && this[preventDefault]();
    },
        // toggle dismissible events
    toggleDismiss = function () {
      var type = element[open] ? on : off;
      type(DOC, clickEvent, dismissHandler);
      type(DOC, keydownEvent, preventScroll);
      type(DOC, keyupEvent, keyHandler);
    },
        // handlers
    dismissHandler = function (e) {
      var eventTarget = e[target],
          hasData = eventTarget && (stringDropdown in eventTarget || stringDropdown in eventTarget[parentNode]);

      if ((eventTarget === menu || menu[contains](eventTarget)) && (self.persist || hasData)) {
        return;
      } else {
        relatedTarget = eventTarget === element || element[contains](eventTarget) ? element : null;
        hide();
      }

      preventEmptyAnchor.call(e, eventTarget);
    },
        clickHandler = function (e) {
      relatedTarget = element;
      show();
      preventEmptyAnchor.call(e, e[target]);
    },
        preventScroll = function (e) {
      var key = e.which || e.keyCode;

      if (key === 38 || key === 40) {
        e[preventDefault]();
      }
    },
        keyHandler = function (e) {
      var key = e.which || e.keyCode,
          activeItem = DOC.activeElement,
          idx = menuItems[indexOf](activeItem),
          isSameElement = activeItem === element,
          isInsideMenu = menu[contains](activeItem),
          isMenuItem = activeItem[parentNode] === menu || activeItem[parentNode][parentNode] === menu;

      if (isMenuItem || isSameElement) {
        // navigate up | down
        idx = isSameElement ? 0 : key === 38 ? idx > 1 ? idx - 1 : 0 : key === 40 ? idx < menuItems[length] - 1 ? idx + 1 : idx : idx;
        menuItems[idx] && setFocus(menuItems[idx]);
      }

      if ((menuItems[length] && isMenuItem // menu has items
      || !menuItems[length] && (isInsideMenu || isSameElement) // menu might be a form
      || !isInsideMenu) && // or the focused element is not in the menu at all
      element[open] && key === 27 // menu must be open
      ) {
          self.toggle();
          relatedTarget = null;
        }
    },
        // private methods
    show = function () {
      bootstrapCustomEvent.call(parent, showEvent, component, relatedTarget);
      addClass(menu, showClass);
      addClass(parent, showClass);
      element[setAttribute](ariaExpanded, true);
      bootstrapCustomEvent.call(parent, shownEvent, component, relatedTarget);
      element[open] = true;
      off(element, clickEvent, clickHandler);
      setTimeout(function () {
        setFocus(menu[getElementsByTagName]('INPUT')[0] || element); // focus the first input item | element

        toggleDismiss();
      }, 1);
    },
        hide = function () {
      bootstrapCustomEvent.call(parent, hideEvent, component, relatedTarget);
      removeClass(menu, showClass);
      removeClass(parent, showClass);
      element[setAttribute](ariaExpanded, false);
      bootstrapCustomEvent.call(parent, hiddenEvent, component, relatedTarget);
      element[open] = false;
      toggleDismiss();
      setFocus(element);
      setTimeout(function () {
        on(element, clickEvent, clickHandler);
      }, 1);
    }; // set initial state to closed


    element[open] = false; // public methods

    this.toggle = function () {
      if (hasClass(parent, showClass) && element[open]) {
        hide();
      } else {
        show();
      }
    }; // init


    if (!(stringDropdown in element)) {
      // prevent adding event handlers twice
      !tabindex in menu && menu[setAttribute](tabindex, '0'); // Fix onblur on Chrome | Safari

      on(element, clickEvent, clickHandler);
    }

    element[stringDropdown] = self;
  }; // DROPDOWN DATA API
  // =================


  supports[push]([stringDropdown, Dropdown, '[' + dataToggle + '="dropdown"]']);
  /* Native Javascript for Bootstrap 4 | Modal
  -------------------------------------------*/
  // MODAL DEFINITION
  // ===============

  var Modal = function (element, options) {
    // element can be the modal/triggering button
    // the modal (both JavaScript / DATA API init) / triggering button element (DATA API)
    element = queryElement(element); // determine modal, triggering element

    var btnCheck = element[getAttribute](dataTarget) || element[getAttribute]('href'),
        checkModal = queryElement(btnCheck),
        modal = hasClass(element, 'modal') ? element : checkModal,
        overlayDelay,
        // strings
    component = 'modal',
        staticString = 'static',
        paddingLeft = 'paddingLeft',
        paddingRight = 'paddingRight',
        modalBackdropString = 'modal-backdrop';

    if (hasClass(element, 'modal')) {
      element = null;
    } // modal is now independent of it's triggering element


    if (!modal) {
      return;
    } // invalidate
    // set options


    options = options || {};
    this[keyboard] = options[keyboard] === false || modal[getAttribute](dataKeyboard) === 'false' ? false : true;
    this[backdrop] = options[backdrop] === staticString || modal[getAttribute](databackdrop) === staticString ? staticString : true;
    this[backdrop] = options[backdrop] === false || modal[getAttribute](databackdrop) === 'false' ? false : this[backdrop];
    this[content] = options[content]; // JavaScript only
    // bind, constants, event targets and other vars

    var self = this,
        relatedTarget = null,
        bodyIsOverflowing,
        modalIsOverflowing,
        scrollbarWidth,
        overlay,
        // also find fixed-top / fixed-bottom items
    fixedItems = getElementsByClassName(HTML, fixedTop).concat(getElementsByClassName(HTML, fixedBottom)),
        // private methods
    getWindowWidth = function () {
      var htmlRect = HTML[getBoundingClientRect]();
      return globalObject[innerWidth] || htmlRect[right] - Math.abs(htmlRect[left]);
    },
        setScrollbar = function () {
      var bodyStyle = globalObject[getComputedStyle](DOC[body]),
          bodyPad = parseInt(bodyStyle[paddingRight], 10),
          itemPad;

      if (bodyIsOverflowing) {
        DOC[body][style][paddingRight] = bodyPad + scrollbarWidth + 'px';

        if (fixedItems[length]) {
          for (var i = 0; i < fixedItems[length]; i++) {
            itemPad = globalObject[getComputedStyle](fixedItems[i])[paddingRight];
            fixedItems[i][style][paddingRight] = parseInt(itemPad) + scrollbarWidth + 'px';
          }
        }
      }
    },
        resetScrollbar = function () {
      DOC[body][style][paddingRight] = '';

      if (fixedItems[length]) {
        for (var i = 0; i < fixedItems[length]; i++) {
          fixedItems[i][style][paddingRight] = '';
        }
      }
    },
        measureScrollbar = function () {
      // thx walsh
      var scrollDiv = DOC[createElement]('div'),
          scrollBarWidth;
      scrollDiv.className = component + '-scrollbar-measure'; // this is here to stay

      DOC[body][appendChild](scrollDiv);
      scrollBarWidth = scrollDiv[offsetWidth] - scrollDiv[clientWidth];
      DOC[body].removeChild(scrollDiv);
      return scrollBarWidth;
    },
        checkScrollbar = function () {
      bodyIsOverflowing = DOC[body][clientWidth] < getWindowWidth();
      modalIsOverflowing = modal[scrollHeight] > HTML[clientHeight];
      scrollbarWidth = measureScrollbar();
    },
        adjustDialog = function () {
      modal[style][paddingLeft] = !bodyIsOverflowing && modalIsOverflowing ? scrollbarWidth + 'px' : '';
      modal[style][paddingRight] = bodyIsOverflowing && !modalIsOverflowing ? scrollbarWidth + 'px' : '';
    },
        resetAdjustments = function () {
      modal[style][paddingLeft] = '';
      modal[style][paddingRight] = '';
    },
        createOverlay = function () {
      modalOverlay = 1;
      var newOverlay = DOC[createElement]('div');
      overlay = queryElement('.' + modalBackdropString);

      if (overlay === null) {
        newOverlay[setAttribute]('class', modalBackdropString + ' fade');
        overlay = newOverlay;
        DOC[body][appendChild](overlay);
      }
    },
        removeOverlay = function () {
      overlay = queryElement('.' + modalBackdropString);

      if (overlay && overlay !== null && typeof overlay === 'object') {
        modalOverlay = 0;
        DOC[body].removeChild(overlay);
        overlay = null;
      }

      bootstrapCustomEvent.call(modal, hiddenEvent, component);
    },
        keydownHandlerToggle = function () {
      if (hasClass(modal, showClass)) {
        on(DOC, keydownEvent, keyHandler);
      } else {
        off(DOC, keydownEvent, keyHandler);
      }
    },
        resizeHandlerToggle = function () {
      if (hasClass(modal, showClass)) {
        on(globalObject, resizeEvent, self.update);
      } else {
        off(globalObject, resizeEvent, self.update);
      }
    },
        dismissHandlerToggle = function () {
      if (hasClass(modal, showClass)) {
        on(modal, clickEvent, dismissHandler);
      } else {
        off(modal, clickEvent, dismissHandler);
      }
    },
        // triggers
    triggerShow = function () {
      resizeHandlerToggle();
      dismissHandlerToggle();
      keydownHandlerToggle();
      setFocus(modal);
      bootstrapCustomEvent.call(modal, shownEvent, component, relatedTarget);
    },
        triggerHide = function () {
      modal[style].display = '';
      element && setFocus(element);

      (function () {
        if (!getElementsByClassName(DOC, component + ' ' + showClass)[0]) {
          resetAdjustments();
          resetScrollbar();
          removeClass(DOC[body], component + '-open');
          overlay && hasClass(overlay, 'fade') ? (removeClass(overlay, showClass), emulateTransitionEnd(overlay, removeOverlay)) : removeOverlay();
          resizeHandlerToggle();
          dismissHandlerToggle();
          keydownHandlerToggle();
        }
      })();
    },
        // handlers
    clickHandler = function (e) {
      var clickTarget = e[target];
      clickTarget = clickTarget[hasAttribute](dataTarget) || clickTarget[hasAttribute]('href') ? clickTarget : clickTarget[parentNode];

      if (clickTarget === element && !hasClass(modal, showClass)) {
        modal.modalTrigger = element;
        relatedTarget = element;
        self.show();
        e[preventDefault]();
      }
    },
        keyHandler = function (e) {
      if (self[keyboard] && e.which == 27 && hasClass(modal, showClass)) {
        self.hide();
      }
    },
        dismissHandler = function (e) {
      var clickTarget = e[target];

      if (hasClass(modal, showClass) && (clickTarget[parentNode][getAttribute](dataDismiss) === component || clickTarget[getAttribute](dataDismiss) === component || clickTarget === modal && self[backdrop] !== staticString)) {
        self.hide();
        relatedTarget = null;
        e[preventDefault]();
      }
    }; // public methods


    this.toggle = function () {
      if (hasClass(modal, showClass)) {
        this.hide();
      } else {
        this.show();
      }
    };

    this.show = function () {
      bootstrapCustomEvent.call(modal, showEvent, component, relatedTarget); // we elegantly hide any opened modal

      var currentOpen = getElementsByClassName(DOC, component + ' ' + showClass)[0];
      currentOpen && currentOpen !== modal && currentOpen.modalTrigger[stringModal].hide();

      if (this[backdrop]) {
        !modalOverlay && createOverlay();
      }

      if (overlay && modalOverlay && !hasClass(overlay, showClass)) {
        overlay[offsetWidth]; // force reflow to enable trasition

        overlayDelay = getTransitionDurationFromElement(overlay);
        addClass(overlay, showClass);
      }

      setTimeout(function () {
        modal[style].display = 'block';
        checkScrollbar();
        setScrollbar();
        adjustDialog();
        addClass(DOC[body], component + '-open');
        addClass(modal, showClass);
        modal[setAttribute](ariaHidden, false);
        hasClass(modal, 'fade') ? emulateTransitionEnd(modal, triggerShow) : triggerShow();
      }, supportTransitions && overlay ? overlayDelay : 0);
    };

    this.hide = function () {
      bootstrapCustomEvent.call(modal, hideEvent, component);
      overlay = queryElement('.' + modalBackdropString);
      overlayDelay = overlay && getTransitionDurationFromElement(overlay);
      removeClass(modal, showClass);
      modal[setAttribute](ariaHidden, true);
      setTimeout(function () {
        hasClass(modal, 'fade') ? emulateTransitionEnd(modal, triggerHide) : triggerHide();
      }, supportTransitions && overlay ? overlayDelay : 0);
    };

    this.setContent = function (content) {
      queryElement('.' + component + '-content', modal)[innerHTML] = content;
    };

    this.update = function () {
      if (hasClass(modal, showClass)) {
        checkScrollbar();
        setScrollbar();
        adjustDialog();
      }
    }; // init
    // prevent adding event handlers over and over
    // modal is independent of a triggering element


    if (!!element && !(stringModal in element)) {
      on(element, clickEvent, clickHandler);
    }

    if (!!self[content]) {
      self.setContent(self[content]);
    }

    !!element && (element[stringModal] = self);
  }; // DATA API


  supports[push]([stringModal, Modal, '[' + dataToggle + '="modal"]']);
  /* Native Javascript for Bootstrap 4 | Popover
  ----------------------------------------------*/
  // POPOVER DEFINITION
  // ==================

  var Popover = function (element, options) {
    // initialization element
    element = queryElement(element); // set options

    options = options || {}; // DATA API

    var triggerData = element[getAttribute](dataTrigger),
        // click / hover / focus
    animationData = element[getAttribute](dataAnimation),
        // true / false
    placementData = element[getAttribute](dataPlacement),
        dismissibleData = element[getAttribute](dataDismissible),
        delayData = element[getAttribute](dataDelay),
        containerData = element[getAttribute](dataContainer),
        // internal strings
    component = 'popover',
        template = 'template',
        trigger = 'trigger',
        classString = 'class',
        div = 'div',
        fade = 'fade',
        content = 'content',
        dataContent = 'data-content',
        dismissible = 'dismissible',
        closeBtn = '<button type="button" class="close">×</button>',
        // check container
    containerElement = queryElement(options[container]),
        containerDataElement = queryElement(containerData),
        // maybe the element is inside a modal
    modal = getClosest(element, '.modal'),
        // maybe the element is inside a fixed navbar
    navbarFixedTop = getClosest(element, '.' + fixedTop),
        navbarFixedBottom = getClosest(element, '.' + fixedBottom); // set instance options

    this[template] = options[template] ? options[template] : null; // JavaScript only

    this[trigger] = options[trigger] ? options[trigger] : triggerData || hoverEvent;
    this[animation] = options[animation] && options[animation] !== fade ? options[animation] : animationData || fade;
    this[placement] = options[placement] ? options[placement] : placementData || top;
    this[delay] = parseInt(options[delay] || delayData) || 200;
    this[dismissible] = options[dismissible] || dismissibleData === 'true' ? true : false;
    this[container] = containerElement ? containerElement : containerDataElement ? containerDataElement : navbarFixedTop ? navbarFixedTop : navbarFixedBottom ? navbarFixedBottom : modal ? modal : DOC[body]; // bind, content

    var self = this,
        titleString = element[getAttribute](dataTitle) || null,
        contentString = element[getAttribute](dataContent) || null;
    if (!contentString && !this[template]) return; // invalidate
    // constants, vars

    var popover = null,
        timer = 0,
        placementSetting = this[placement],
        // handlers
    dismissibleHandler = function (e) {
      if (popover !== null && e[target] === queryElement('.close', popover)) {
        self.hide();
      }
    },
        // private methods
    removePopover = function () {
      self[container].removeChild(popover);
      timer = null;
      popover = null;
    },
        createPopover = function () {
      titleString = element[getAttribute](dataTitle); // check content again

      contentString = element[getAttribute](dataContent);
      popover = DOC[createElement](div); // popover arrow

      var popoverArrow = DOC[createElement](div);
      popoverArrow[setAttribute](classString, 'arrow');
      popover[appendChild](popoverArrow);

      if (contentString !== null && self[template] === null) {
        //create the popover from data attributes
        popover[setAttribute]('role', 'tooltip');

        if (titleString !== null) {
          var popoverTitle = DOC[createElement]('h3');
          popoverTitle[setAttribute](classString, component + '-header');
          popoverTitle[innerHTML] = self[dismissible] ? titleString + closeBtn : titleString;
          popover[appendChild](popoverTitle);
        } //set popover content


        var popoverContent = DOC[createElement](div);
        popoverContent[setAttribute](classString, component + '-body');
        popoverContent[innerHTML] = self[dismissible] && titleString === null ? contentString + closeBtn : contentString;
        popover[appendChild](popoverContent);
      } else {
        // or create the popover from template
        var popoverTemplate = DOC[createElement](div);
        popoverTemplate[innerHTML] = self[template];
        popover[innerHTML] = popoverTemplate.firstChild[innerHTML];
      } //append to the container


      self[container][appendChild](popover);
      popover[style].display = 'block';
      popover[setAttribute](classString, component + ' bs-' + component + '-' + placementSetting + ' ' + self[animation]);
    },
        showPopover = function () {
      !hasClass(popover, showClass) && addClass(popover, showClass);
    },
        updatePopover = function () {
      styleTip(element, popover, placementSetting, self[container]);
    },
        // event toggle
    dismissHandlerToggle = function (type) {
      if (clickEvent == self[trigger] || 'focus' == self[trigger]) {
        !self[dismissible] && type(element, 'blur', self.hide);
      }

      self[dismissible] && type(DOC, clickEvent, dismissibleHandler);
      type(globalObject, resizeEvent, self.hide);
    },
        // triggers
    showTrigger = function () {
      dismissHandlerToggle(on);
      bootstrapCustomEvent.call(element, shownEvent, component);
    },
        hideTrigger = function () {
      dismissHandlerToggle(off);
      removePopover();
      bootstrapCustomEvent.call(element, hiddenEvent, component);
    }; // public methods / handlers


    this.toggle = function () {
      if (popover === null) {
        self.show();
      } else {
        self.hide();
      }
    };

    this.show = function () {
      clearTimeout(timer);
      timer = setTimeout(function () {
        if (popover === null) {
          placementSetting = self[placement]; // we reset placement in all cases

          createPopover();
          updatePopover();
          showPopover();
          bootstrapCustomEvent.call(element, showEvent, component);
          !!self[animation] ? emulateTransitionEnd(popover, showTrigger) : showTrigger();
        }
      }, 20);
    };

    this.hide = function () {
      clearTimeout(timer);
      timer = setTimeout(function () {
        if (popover && popover !== null && hasClass(popover, showClass)) {
          bootstrapCustomEvent.call(element, hideEvent, component);
          removeClass(popover, showClass);
          !!self[animation] ? emulateTransitionEnd(popover, hideTrigger) : hideTrigger();
        }
      }, self[delay]);
    }; // init


    if (!(stringPopover in element)) {
      // prevent adding event handlers twice
      if (self[trigger] === hoverEvent) {
        on(element, mouseHover[0], self.show);

        if (!self[dismissible]) {
          on(element, mouseHover[1], self.hide);
        }
      } else if (clickEvent == self[trigger] || 'focus' == self[trigger]) {
        on(element, self[trigger], self.toggle);
      }
    }

    element[stringPopover] = self;
  }; // POPOVER DATA API
  // ================


  supports[push]([stringPopover, Popover, '[' + dataToggle + '="popover"]']);
  /* Native Javascript for Bootstrap 4 | ScrollSpy
  -----------------------------------------------*/
  // SCROLLSPY DEFINITION
  // ====================

  var ScrollSpy = function (element, options) {
    // initialization element, the element we spy on
    element = queryElement(element); // DATA API

    var targetData = queryElement(element[getAttribute](dataTarget)),
        offsetData = element[getAttribute]('data-offset'); // set options

    options = options || {};

    if (!options[target] && !targetData) {
      return;
    } // invalidate
    // event targets, constants


    var self = this,
        spyTarget = options[target] && queryElement(options[target]) || targetData,
        links = spyTarget && spyTarget[getElementsByTagName]('A'),
        offset = parseInt(offsetData || options['offset']) || 10,
        items = [],
        targetItems = [],
        scrollOffset,
        scrollTarget = element[offsetHeight] < element[scrollHeight] ? element : globalObject,
        // determine which is the real scrollTarget
    isWindow = scrollTarget === globalObject; // populate items and targets

    for (var i = 0, il = links[length]; i < il; i++) {
      var href = links[i][getAttribute]('href'),
          targetItem = href && href.charAt(0) === '#' && href.slice(-1) !== '#' && queryElement(href);

      if (!!targetItem) {
        items[push](links[i]);
        targetItems[push](targetItem);
      }
    } // private methods


    var updateItem = function (index) {
      var item = items[index],
          targetItem = targetItems[index],
          // the menu item targets this element
      dropdown = item[parentNode][parentNode],
          dropdownLink = hasClass(dropdown, 'dropdown') && dropdown[getElementsByTagName]('A')[0],
          targetRect = isWindow && targetItem[getBoundingClientRect](),
          isActive = hasClass(item, active) || false,
          topEdge = (isWindow ? targetRect[top] + scrollOffset : targetItem[offsetTop]) - offset,
          bottomEdge = isWindow ? targetRect[bottom] + scrollOffset - offset : targetItems[index + 1] ? targetItems[index + 1][offsetTop] - offset : element[scrollHeight],
          inside = scrollOffset >= topEdge && bottomEdge > scrollOffset;

      if (!isActive && inside) {
        if (!hasClass(item, active)) {
          addClass(item, active);

          if (dropdownLink && !hasClass(dropdownLink, active)) {
            addClass(dropdownLink, active);
          }

          bootstrapCustomEvent.call(element, 'activate', 'scrollspy', items[index]);
        }
      } else if (!inside) {
        if (hasClass(item, active)) {
          removeClass(item, active);

          if (dropdownLink && hasClass(dropdownLink, active) && !getElementsByClassName(item[parentNode], active).length) {
            removeClass(dropdownLink, active);
          }
        }
      } else if (!inside && !isActive || isActive && inside) {
        return;
      }
    },
        updateItems = function () {
      scrollOffset = isWindow ? getScroll().y : element[scrollTop];

      for (var index = 0, itl = items[length]; index < itl; index++) {
        updateItem(index);
      }
    }; // public method


    this.refresh = function () {
      updateItems();
    }; // init


    if (!(stringScrollSpy in element)) {
      // prevent adding event handlers twice
      on(scrollTarget, scrollEvent, self.refresh);
      on(globalObject, resizeEvent, self.refresh);
    }

    self.refresh();
    element[stringScrollSpy] = self;
  }; // SCROLLSPY DATA API
  // ==================


  supports[push]([stringScrollSpy, ScrollSpy, '[' + dataSpy + '="scroll"]']);
  /* Native Javascript for Bootstrap 4 | Tab
  -----------------------------------------*/
  // TAB DEFINITION
  // ==============

  var Tab = function (element, options) {
    // initialization element
    element = queryElement(element); // DATA API

    var heightData = element[getAttribute](dataHeight),
        // strings
    component = 'tab',
        height = 'height',
        float = 'float',
        isAnimating = 'isAnimating'; // set options

    options = options || {};
    this[height] = supportTransitions ? options[height] || heightData === 'true' : false; // bind, event targets

    var self = this,
        next,
        tabs = getClosest(element, '.nav'),
        tabsContentContainer = false,
        dropdown = tabs && queryElement('.dropdown-toggle', tabs),
        activeTab,
        activeContent,
        nextContent,
        containerHeight,
        equalContents,
        nextHeight,
        // trigger
    triggerEnd = function () {
      tabsContentContainer[style][height] = '';
      removeClass(tabsContentContainer, collapsing);
      tabs[isAnimating] = false;
    },
        triggerShow = function () {
      if (tabsContentContainer) {
        // height animation
        if (equalContents) {
          triggerEnd();
        } else {
          setTimeout(function () {
            // enables height animation
            tabsContentContainer[style][height] = nextHeight + 'px'; // height animation

            tabsContentContainer[offsetWidth];
            emulateTransitionEnd(tabsContentContainer, triggerEnd);
          }, 50);
        }
      } else {
        tabs[isAnimating] = false;
      }

      bootstrapCustomEvent.call(next, shownEvent, component, activeTab);
    },
        triggerHide = function () {
      if (tabsContentContainer) {
        activeContent[style][float] = left;
        nextContent[style][float] = left;
        containerHeight = activeContent[scrollHeight];
      }

      addClass(nextContent, active);
      bootstrapCustomEvent.call(next, showEvent, component, activeTab);
      removeClass(activeContent, active);
      bootstrapCustomEvent.call(activeTab, hiddenEvent, component, next);

      if (tabsContentContainer) {
        nextHeight = nextContent[scrollHeight];
        equalContents = nextHeight === containerHeight;
        addClass(tabsContentContainer, collapsing);
        tabsContentContainer[style][height] = containerHeight + 'px'; // height animation

        tabsContentContainer[offsetHeight];
        activeContent[style][float] = '';
        nextContent[style][float] = '';
      }

      if (hasClass(nextContent, 'fade')) {
        setTimeout(function () {
          addClass(nextContent, showClass);
          emulateTransitionEnd(nextContent, triggerShow);
        }, 20);
      } else {
        triggerShow();
      }
    };

    if (!tabs) return; // invalidate
    // set default animation state

    tabs[isAnimating] = false; // private methods

    var getActiveTab = function () {
      var activeTabs = getElementsByClassName(tabs, active),
          activeTab;

      if (activeTabs[length] === 1 && !hasClass(activeTabs[0][parentNode], 'dropdown')) {
        activeTab = activeTabs[0];
      } else if (activeTabs[length] > 1) {
        activeTab = activeTabs[activeTabs[length] - 1];
      }

      return activeTab;
    },
        getActiveContent = function () {
      return queryElement(getActiveTab()[getAttribute]('href'));
    },
        // handler 
    clickHandler = function (e) {
      e[preventDefault]();
      next = e[currentTarget];
      !tabs[isAnimating] && !hasClass(next, active) && self.show();
    }; // public method


    this.show = function () {
      // the tab we clicked is now the next tab
      next = next || element;
      nextContent = queryElement(next[getAttribute]('href')); //this is the actual object, the next tab content to activate

      activeTab = getActiveTab();
      activeContent = getActiveContent();
      tabs[isAnimating] = true;
      removeClass(activeTab, active);
      activeTab[setAttribute](ariaSelected, 'false');
      addClass(next, active);
      next[setAttribute](ariaSelected, 'true');

      if (dropdown) {
        if (!hasClass(element[parentNode], 'dropdown-menu')) {
          if (hasClass(dropdown, active)) removeClass(dropdown, active);
        } else {
          if (!hasClass(dropdown, active)) addClass(dropdown, active);
        }
      }

      bootstrapCustomEvent.call(activeTab, hideEvent, component, next);

      if (hasClass(activeContent, 'fade')) {
        removeClass(activeContent, showClass);
        emulateTransitionEnd(activeContent, triggerHide);
      } else {
        triggerHide();
      }
    }; // init


    if (!(stringTab in element)) {
      // prevent adding event handlers twice
      on(element, clickEvent, clickHandler);
    }

    if (self[height]) {
      tabsContentContainer = getActiveContent()[parentNode];
    }

    element[stringTab] = self;
  }; // TAB DATA API
  // ============


  supports[push]([stringTab, Tab, '[' + dataToggle + '="tab"]']);
  /* Native Javascript for Bootstrap 4 | Tooltip
  ---------------------------------------------*/
  // TOOLTIP DEFINITION
  // ==================

  var Tooltip = function (element, options) {
    // initialization element
    element = queryElement(element); // set options

    options = options || {}; // DATA API

    var animationData = element[getAttribute](dataAnimation),
        placementData = element[getAttribute](dataPlacement),
        delayData = element[getAttribute](dataDelay),
        containerData = element[getAttribute](dataContainer),
        // strings
    component = 'tooltip',
        classString = 'class',
        title = 'title',
        fade = 'fade',
        div = 'div',
        // check container
    containerElement = queryElement(options[container]),
        containerDataElement = queryElement(containerData),
        // maybe the element is inside a modal
    modal = getClosest(element, '.modal'),
        // maybe the element is inside a fixed navbar
    navbarFixedTop = getClosest(element, '.' + fixedTop),
        navbarFixedBottom = getClosest(element, '.' + fixedBottom); // set instance options

    this[animation] = options[animation] && options[animation] !== fade ? options[animation] : animationData || fade;
    this[placement] = options[placement] ? options[placement] : placementData || top;
    this[delay] = parseInt(options[delay] || delayData) || 200;
    this[container] = containerElement ? containerElement : containerDataElement ? containerDataElement : navbarFixedTop ? navbarFixedTop : navbarFixedBottom ? navbarFixedBottom : modal ? modal : DOC[body]; // bind, event targets, title and constants

    var self = this,
        timer = 0,
        placementSetting = this[placement],
        tooltip = null,
        titleString = element[getAttribute](title) || element[getAttribute](dataTitle) || element[getAttribute](dataOriginalTitle);
    if (!titleString || titleString == "") return; // invalidate
    // private methods

    var removeToolTip = function () {
      self[container].removeChild(tooltip);
      tooltip = null;
      timer = null;
    },
        createToolTip = function () {
      titleString = element[getAttribute](title) || element[getAttribute](dataTitle) || element[getAttribute](dataOriginalTitle); // read the title again

      if (!titleString || titleString == "") return false; // invalidate

      tooltip = DOC[createElement](div);
      tooltip[setAttribute]('role', component); // tooltip arrow

      var tooltipArrow = DOC[createElement](div);
      tooltipArrow[setAttribute](classString, 'arrow');
      tooltip[appendChild](tooltipArrow);
      var tooltipInner = DOC[createElement](div);
      tooltipInner[setAttribute](classString, component + '-inner');
      tooltip[appendChild](tooltipInner);
      tooltipInner[innerHTML] = titleString;
      self[container][appendChild](tooltip);
      tooltip[setAttribute](classString, component + ' bs-' + component + '-' + placementSetting + ' ' + self[animation]);
    },
        updateTooltip = function () {
      styleTip(element, tooltip, placementSetting, self[container]);
    },
        showTooltip = function () {
      !hasClass(tooltip, showClass) && addClass(tooltip, showClass);
    },
        // triggers
    showTrigger = function () {
      on(globalObject, resizeEvent, self.hide);
      bootstrapCustomEvent.call(element, shownEvent, component);
    },
        hideTrigger = function () {
      off(globalObject, resizeEvent, self.hide);
      removeToolTip();
      bootstrapCustomEvent.call(element, hiddenEvent, component);
    }; // public methods


    this.show = function () {
      clearTimeout(timer);
      timer = setTimeout(function () {
        if (tooltip === null) {
          placementSetting = self[placement]; // we reset placement in all cases

          if (createToolTip() == false) return;
          updateTooltip();
          showTooltip();
          bootstrapCustomEvent.call(element, showEvent, component);
          !!self[animation] ? emulateTransitionEnd(tooltip, showTrigger) : showTrigger();
        }
      }, 20);
    };

    this.hide = function () {
      clearTimeout(timer);
      timer = setTimeout(function () {
        if (tooltip && hasClass(tooltip, showClass)) {
          bootstrapCustomEvent.call(element, hideEvent, component);
          removeClass(tooltip, showClass);
          !!self[animation] ? emulateTransitionEnd(tooltip, hideTrigger) : hideTrigger();
        }
      }, self[delay]);
    };

    this.toggle = function () {
      if (!tooltip) {
        self.show();
      } else {
        self.hide();
      }
    }; // init


    if (!(stringTooltip in element)) {
      // prevent adding event handlers twice
      element[setAttribute](dataOriginalTitle, titleString);
      element.removeAttribute(title);
      on(element, mouseHover[0], self.show);
      on(element, mouseHover[1], self.hide);
    }

    element[stringTooltip] = self;
  }; // TOOLTIP DATA API
  // =================


  supports[push]([stringTooltip, Tooltip, '[' + dataToggle + '="tooltip"]']);
  /* Native Javascript for Bootstrap 4 | Initialize Data API
  --------------------------------------------------------*/

  var initializeDataAPI = function (constructor, collection) {
    for (var i = 0, l = collection[length]; i < l; i++) {
      new constructor(collection[i]);
    }
  },
      initCallback = BSN.initCallback = function (lookUp) {
    lookUp = lookUp || DOC;

    for (var i = 0, l = supports[length]; i < l; i++) {
      initializeDataAPI(supports[i][1], lookUp[querySelectorAll](supports[i][2]));
    }
  }; // bulk initialize all components


  DOC[body] ? initCallback() : on(DOC, 'DOMContentLoaded', function () {
    initCallback();
  });
  return {
    Alert: Alert,
    Button: Button,
    Carousel: Carousel,
    Collapse: Collapse,
    Dropdown: Dropdown,
    Modal: Modal,
    Popover: Popover,
    ScrollSpy: ScrollSpy,
    Tab: Tab,
    Tooltip: Tooltip
  };
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/js/logger.js":
/*!**************************!*\
  !*** ./src/js/logger.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  logMessage: function (msg) {
    return msg;
  }
  /*
  var logMessage = function logMessage(msg){
  	return msg;
  }
  
  export default logMessage;
  */

};

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map
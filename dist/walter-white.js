(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["walterwhite"] = factory();
	else
		root["WalterWhite"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Lab/Assert/index.js":
/*!*********************************!*\
  !*** ./src/Lab/Assert/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

let results;

const assert = (value, text) => {
  const li = document.createElement('li')

  li.className = value ? 'pass': 'fail'
  li.appendChild(document.createTextNode(text))

  results.appendChild(li)

  if(!value) {
    li.parentNode.parentNode.className = 'fail'
  }

  return li
}

const groupTest = function(name, fn) {
  results = document.querySelector('.results-lists')

  results = assert(true, name).appendChild(
    document.createElement('ul')
  )

  fn()
}

module.exports = {
  assert,
  groupTest,
}


/***/ }),

/***/ "./src/Lab/Expect/index.js":
/*!*********************************!*\
  !*** ./src/Lab/Expect/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

const expect = function(testedValue) {
	return {
		toBePureAs: function(expectedValue) {
			if(testedValue !== expectedValue) {
				throw new Error(`${testedValue} isn't as pure as ${expectedValue}`)
			}
		},
		// TODO
		//toContains:
	}
}

module.exports = expect


/***/ }),

/***/ "./src/Lab/Test/index.js":
/*!*******************************!*\
  !*** ./src/Lab/Test/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

const test = (testName, givenTest) => {
	try{
		givenTest()
		console.log(`\n \u{2714}  : ${testName} has passed.\n `)
	}
	catch(error) {
		console.error(`\n \u{274C}  : ${testName} has failed. \n\n  ${error}\n`)
	}
}

module.exports = test


/***/ }),

/***/ "./src/Lab/index.js":
/*!**************************!*\
  !*** ./src/Lab/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const expect = __webpack_require__(/*! ./Expect */ "./src/Lab/Expect/index.js")
const test = __webpack_require__(/*! ./Test */ "./src/Lab/Test/index.js")
const assertion = __webpack_require__(/*! ./Assert */ "./src/Lab/Assert/index.js")

module.exports = {
	expect,
	test,
	assertion,
}


/***/ }),

/***/ "./src/Utils/Curry/index.js":
/*!**********************************!*\
  !*** ./src/Utils/Curry/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

const Curry = function() {
  const fn = arguments[0]
  const expectedArgs = fn.length
  let args = []

  return function wrapperFunction() {
    args = [...args, ...arguments]

    if(args.length >= expectedArgs) {
      const finalArguments = args.slice(0, expectedArgs)
      args = []

      return fn(...finalArguments)
    }

    return wrapperFunction
  }
}

module.exports = Curry


/***/ }),

/***/ "./src/Utils/Pipe/index.js":
/*!*********************************!*\
  !*** ./src/Utils/Pipe/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

const Pipe = (...functions) => initialValue => {
    return functions.reduce((acc, fn) => fn(acc), initialValue)
  }

module.exports = Pipe


/***/ }),

/***/ "./src/Utils/index.js":
/*!****************************!*\
  !*** ./src/Utils/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
//   ElapsedTime: require('./ElapsedTime'),
  Pipe: __webpack_require__(/*! ./Pipe */ "./src/Utils/Pipe/index.js"),
  Curry: __webpack_require__(/*! ./Curry */ "./src/Utils/Curry/index.js"),
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Lab = __webpack_require__(/*! ./Lab */ "./src/Lab/index.js")
const Utils = __webpack_require__(/*! ./Utils */ "./src/Utils/index.js")

module.exports = {
  Lab,
  Utils
}


/***/ })

/******/ });
});
//# sourceMappingURL=walter-white.js.map
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _require = __webpack_require__(1);

	var Component = _require.Component;

	var ReactDOM = __webpack_require__(2);

	var types = [{ name: 'primary', weight: 0.12 }, { name: 'special', weight: 0.12 }, { name: 'heavy', weight: 0.12 }, { name: 'ghost', weight: 0.08 }, { name: 'helmet', weight: 0.10 }, { name: 'gauntlets', weight: 0.10 }, { name: 'chest', weight: 0.10 }, { name: 'leg', weight: 0.10 }, { name: 'class', weight: 0.08 }, { name: 'artifact', weight: 0.08 }];

	var Type = (function (_Component) {
	  _inherits(Type, _Component);

	  function Type() {
	    var _this = this;

	    _classCallCheck(this, Type);

	    _get(Object.getPrototypeOf(Type.prototype), 'constructor', this).apply(this, arguments);

	    this.getValue = function () {
	      return _this.refs.input.value;
	    };

	    this.render = function () {
	      return React.createElement(
	        'div',
	        { style: { display: 'flex', justifyContent: 'space-between', marginBottom: 10 } },
	        React.createElement(
	          'label',
	          { style: { textTransform: 'capitalize' } },
	          _this.props.name
	        ),
	        React.createElement('input', {
	          type: 'number',
	          min: '0',
	          ref: 'input',
	          value: _this.props.value,
	          onChange: _this.props.onChange })
	      );
	    };
	  }

	  return Type;
	})(Component);

	var Progress = (function (_Component2) {
	  _inherits(Progress, _Component2);

	  function Progress() {
	    var _this2 = this;

	    _classCallCheck(this, Progress);

	    _get(Object.getPrototypeOf(Progress.prototype), 'constructor', this).apply(this, arguments);

	    this.render = function () {
	      return React.createElement(
	        'div',
	        { style: { width: '100%', border: 'solid #666 1px' } },
	        React.createElement('div', { style: { height: 20, backgroundColor: 'Yellow', width: _this2.props.progress + '%' } })
	      );
	    };
	  }

	  return Progress;
	})(Component);

	var Calculator = (function (_Component3) {
	  _inherits(Calculator, _Component3);

	  function Calculator() {
	    var _this3 = this;

	    _classCallCheck(this, Calculator);

	    _get(Object.getPrototypeOf(Calculator.prototype), 'constructor', this).apply(this, arguments);

	    this.componentDidMount = function () {
	      _this3.handleChange();
	    };

	    this.handleChange = function () {
	      _this3.props.updateValues(Object.keys(_this3.refs).reduce(function (values, ref) {
	        var val = parseInt(_this3.refs[ref].getValue()) || 0;
	        values[_this3.refs[ref].props.index] = val;
	        return values;
	      }, []));
	    };

	    this.toInput = function (type, i) {
	      return React.createElement(Type, {
	        name: type.name,
	        key: i,
	        index: i,
	        onChange: _this3.handleChange,
	        value: _this3.props.values[i] || 0,
	        ref: type.name });
	    };

	    this.render = function () {
	      var _props$lvl$toFixed$toString$split = _this3.props.lvl.toFixed(2).toString().split('.');

	      var _props$lvl$toFixed$toString$split2 = _slicedToArray(_props$lvl$toFixed$toString$split, 2);

	      var lvl = _props$lvl$toFixed$toString$split2[0];
	      var progress = _props$lvl$toFixed$toString$split2[1];

	      return React.createElement(
	        'div',
	        { style: { width: 250, margin: '20px auto' } },
	        types.map(_this3.toInput),
	        React.createElement(
	          'h1',
	          { style: { margin: 0 } },
	          lvl
	        ),
	        React.createElement(Progress, { progress: progress })
	      );
	    };
	  }

	  return Calculator;
	})(Component);

	var App = (function (_Component4) {
	  _inherits(App, _Component4);

	  function App() {
	    var _this4 = this;

	    _classCallCheck(this, App);

	    _get(Object.getPrototypeOf(App.prototype), 'constructor', this).apply(this, arguments);

	    this.state = {
	      values: window.location.hash.replace("#", "").split(","),
	      lvl: 0
	    };

	    this.updateValues = function (values) {
	      var lvl = values.reduce(function (sum, val, i) {
	        return val * types[i].weight + sum;
	      }, 0);

	      window.location.hash = values;

	      _this4.setState({ lvl: lvl, values: values });
	    };

	    this.render = function () {
	      return React.createElement(Calculator, { lvl: _this4.state.lvl, values: _this4.state.values, updateValues: _this4.updateValues });
	    };
	  }

	  return App;
	})(Component);

	ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ }
/******/ ]);
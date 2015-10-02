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
/***/ function(module, exports) {

	'use strict';

	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

	var types = [{ name: 'primary', weight: 0.12 }, { name: 'special', weight: 0.12 }, { name: 'heavy', weight: 0.12 }, { name: 'ghost', weight: 0.08 }, { name: 'helmet', weight: 0.10 }, { name: 'gauntlets', weight: 0.10 }, { name: 'chest', weight: 0.10 }, { name: 'leg', weight: 0.10 }, { name: 'class', weight: 0.08 }, { name: 'artifact', weight: 0.08 }];

	var Type = React.createClass({
	  displayName: 'Type',

	  getValue: function getValue() {
	    return this.refs.input.getDOMNode().value;
	  },

	  getWeight: function getWeight() {
	    return this.props.weight;
	  },

	  render: function render() {
	    return React.createElement(
	      'div',
	      { style: { display: 'flex', justifyContent: 'space-between', marginBottom: 10 } },
	      React.createElement(
	        'label',
	        { style: { textTransform: 'capitalize' } },
	        this.props.name
	      ),
	      React.createElement('input', {
	        type: 'number',
	        ref: 'input',
	        onChange: this.props.onChange })
	    );
	  }
	});

	var Progress = React.createClass({
	  displayName: 'Progress',

	  render: function render() {
	    return React.createElement(
	      'div',
	      { style: { width: '100%', border: 'solid #666 1px' } },
	      React.createElement('div', { style: { height: 20, backgroundColor: 'Yellow', width: this.props.progress + '%' } })
	    );
	  }
	});

	var Lvl = React.createClass({
	  displayName: 'Lvl',

	  getInitialState: function getInitialState() {
	    return {
	      lvl: 0
	    };
	  },

	  calcLvl: function calcLvl() {
	    var _this = this;

	    var refs = Object.keys(this.refs);
	    var lvl = refs.reduce(function (sum, ref) {
	      var val = parseInt(_this.refs[ref].getValue()) || 0;
	      var weight = _this.refs[ref].getWeight();

	      return val * weight + sum;
	    }, 0);

	    this.setState({ lvl: lvl });
	  },

	  toInput: function toInput(type, i) {
	    return React.createElement(Type, {
	      name: type.name,
	      weight: type.weight,
	      key: i,
	      onChange: this.calcLvl,
	      ref: type.name });
	  },

	  render: function render() {
	    var _state$lvl$toFixed$toString$split = this.state.lvl.toFixed(2).toString().split('.');

	    var _state$lvl$toFixed$toString$split2 = _slicedToArray(_state$lvl$toFixed$toString$split, 2);

	    var lvl = _state$lvl$toFixed$toString$split2[0];
	    var progress = _state$lvl$toFixed$toString$split2[1];

	    return React.createElement(
	      'div',
	      { style: { width: 250, margin: '20px auto' } },
	      types.map(this.toInput),
	      React.createElement(
	        'h1',
	        { style: { margin: 0 } },
	        lvl
	      ),
	      React.createElement(Progress, { progress: progress })
	    );
	  }
	});

	React.render(React.createElement(Lvl, null), document.getElementById('app'));

/***/ }
/******/ ]);
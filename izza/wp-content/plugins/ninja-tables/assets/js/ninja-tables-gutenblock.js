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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 359);
/******/ })
/************************************************************************/
/******/ ({

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(360);


/***/ }),

/***/ 360:
/***/ (function(module, exports) {

eval("var __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar SelectControl = wp.components.SelectControl;\n\nregisterBlockType('ninja-tables/guten-block', {\n    title: __('Ninja Tables'),\n    icon: React.createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 321.98 249.25' }, React.createElement('path', { 'class': 'A', d: 'M312.48 249.25H9.5a9.51 9.51 0 0 1-9.5-9.5V9.5A9.51 9.51 0 0 1 9.5 0h303a9.51 9.51 0 0 1 9.5 9.5v230.25a9.51 9.51 0 0 1-9.52 9.5zM9.5 7A2.53 2.53 0 0 0 7 9.5v230.25a2.53 2.53 0 0 0 2.5 2.5h303a2.53 2.53 0 0 0 2.5-2.5V9.5a2.53 2.53 0 0 0-2.5-2.5z' }), React.createElement('path', { 'class': 'A', d: 'M75 44.37h8.75v202.7H75z' }), React.createElement('path', { 'class': 'B', d: 'M129.37 44.37' }), React.createElement('path', { 'class': 'C', d: 'M249.37 44.37' }), React.createElement('path', { 'class': 'A', d: 'M6.16.5h309.66a6 6 0 0 1 6 6v43.8a.63.63 0 0 1-.63.63H.8a.63.63 0 0 1-.63-.63V6.5a6 6 0 0 1 6-6zM4.88 142.84h312.6v15.1H4.88zM22.47 90h28.27v16.97H22.47zm89.13 0h165.67v16.97H111.6zM22.47 190h28.27v16.97H22.47zm89.13 0h165.67v16.97H111.6z' })),\n    category: 'formatting',\n    keywords: [__('Ninja Tables'), __('Gutenberg Block'), __('ninja-tables-gutenberg-block')],\n    attributes: {\n        tableId: {\n            type: 'string'\n        }\n    },\n    edit: function edit(_ref) {\n        var attributes = _ref.attributes,\n            setAttributes = _ref.setAttributes;\n\n        var config = window.ninja_tables_tiny_mce;\n\n        return React.createElement('div', { className: 'ninja-tables-guten-wrapper' }, React.createElement('div', { className: 'ninja-tables-logo' }, React.createElement('img', { src: config.logo, alt: 'ninja-tables-logo' })), React.createElement(SelectControl, {\n            label: __(\"Select a Table\"),\n            value: attributes.tableId,\n            options: config.tables.map(function (table) {\n                return {\n                    value: table.value,\n                    label: table.text\n                };\n            }),\n            onChange: function onChange(tableId) {\n                return setAttributes({ tableId: tableId });\n            }\n        }));\n    },\n    save: function save(_ref2) {\n        var attributes = _ref2.attributes;\n\n        return '[ninja_tables id=\"' + attributes.tableId + '\"]';\n    }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYWRtaW4vZ3V0ZW5ibG9jay5qcz84NDI1Il0sIm5hbWVzIjpbIl9fIiwid3AiLCJpMThuIiwicmVnaXN0ZXJCbG9ja1R5cGUiLCJibG9ja3MiLCJTZWxlY3RDb250cm9sIiwiY29tcG9uZW50cyIsInRpdGxlIiwiaWNvbiIsImNhdGVnb3J5Iiwia2V5d29yZHMiLCJhdHRyaWJ1dGVzIiwidGFibGVJZCIsInR5cGUiLCJzZXRBdHRyaWJ1dGVzIiwiY29uZmlnIiwid2luZG93IiwidmFsdWUiLCJ0YWJsZSIsImxhYmVsIiwidGV4dCJdLCJtYXBwaW5ncyI6IklBQU9BLEtBQU1DLEdBQUdDLElBQUhELENBQU5ELEU7SUFDQUcsb0JBQXFCRixHQUFHRyxNQUFISCxDQUFyQkUsaUI7SUFFSEUsZ0JBQ0FKLEdBQUdLLFVBQUhMLENBREFJLGE7O0FBR0pGLDhDQUE4QztBQUMxQ0ksV0FBT1AsR0FEbUMsY0FDbkNBLENBRG1DO0FBRTFDUSxVQUFNLDZCQUFLLE9BQUwsOEJBQXdDLFNBQXhDLHVCQUFvRSw4QkFBTSxTQUFOLEtBQWdCLEdBQXBGLHVQQUFvRSxHQUFwRSxFQUErVSw4QkFBTSxTQUFOLEtBQWdCLEdBQS9WLDBCQUErVSxHQUEvVSxFQUE2WCw4QkFBTSxTQUFOLEtBQWdCLEdBQTdZLGVBQTZYLEdBQTdYLEVBQWdhLDhCQUFNLFNBQU4sS0FBZ0IsR0FBaGIsZUFBZ2EsR0FBaGEsRUFBbWMsOEJBQU0sU0FBTixLQUFnQixHQUFoQixtUEFBbmMsQ0FGb0M7QUFHMUNDLGNBSDBDO0FBSTFDQyxjQUFVLENBQ05WLEdBRE0sY0FDTkEsQ0FETSxFQUVOQSxHQUZNLGlCQUVOQSxDQUZNLEVBR05BLEdBUHNDLDhCQU90Q0EsQ0FITSxDQUpnQztBQVMxQ1csZ0JBQVk7QUFDUkMsaUJBQVM7QUFDTEMsa0JBQU07QUFERDtBQURELEtBVDhCO0FBQUEsOEJBY1I7QUFBQSxZQUE1QkYsYUFBNEIsS0FBNUJBLFVBQTRCO0FBQUEsWUFBaEJHLGdCQUFnQixLQUFoQkEsYUFBZ0I7O0FBQzlCLFlBQU1DLFNBQVNDLE9BQWY7O0FBRUEsZUFDSSw2QkFBSyxXQUFMLGdDQUNJLDZCQUFLLFdBQUwsdUJBQ0ksNkJBQUssS0FBS0QsT0FBVixNQUF1QixLQUF2QixzQkFESixDQURKLEVBS0k7QUFDSSxtQkFBT2YsR0FEWCxnQkFDV0EsQ0FEWDtBQUVJLG1CQUFPVyxXQUZYO0FBR0kscUJBQVMsa0JBQWtCO0FBQUEsdUJBQVU7QUFDakNNLDJCQUFPQyxNQUQwQjtBQUVqQ0MsMkJBQU9ELE1BQU1FO0FBRm9CLGlCQUFWO0FBSC9CLGFBR2EsQ0FIYjtBQU9JLHNCQUFVO0FBQUEsdUJBQVdOLGNBQWMsRUFBQ0YsU0FBMUIsT0FBeUIsRUFBZEUsQ0FBWDtBQUFBO0FBUGQsVUFMSixDQURKO0FBakJzQztBQUFBLCtCQW1DdkI7QUFBQSxZQUFiSCxhQUFhLE1BQWJBLFVBQWE7O0FBQ2YsZUFBTyx1QkFBcUJBLFdBQXJCLFVBQVA7QUFDSDtBQXJDeUMsQ0FBOUNSIiwiZmlsZSI6IjM2MC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtfX30gPSB3cC5pMThuO1xuY29uc3Qge3JlZ2lzdGVyQmxvY2tUeXBlfSA9IHdwLmJsb2NrcztcbmNvbnN0IHtcbiAgICBTZWxlY3RDb250cm9sXG59ID0gd3AuY29tcG9uZW50cztcblxucmVnaXN0ZXJCbG9ja1R5cGUoJ25pbmphLXRhYmxlcy9ndXRlbi1ibG9jaycsIHtcbiAgICB0aXRsZTogX18oJ05pbmphIFRhYmxlcycpLFxuICAgIGljb246IDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIxLjk4IDI0OS4yNVwiPjxwYXRoIGNsYXNzPVwiQVwiIGQ9XCJNMzEyLjQ4IDI0OS4yNUg5LjVhOS41MSA5LjUxIDAgMCAxLTkuNS05LjVWOS41QTkuNTEgOS41MSAwIDAgMSA5LjUgMGgzMDNhOS41MSA5LjUxIDAgMCAxIDkuNSA5LjV2MjMwLjI1YTkuNTEgOS41MSAwIDAgMS05LjUyIDkuNXpNOS41IDdBMi41MyAyLjUzIDAgMCAwIDcgOS41djIzMC4yNWEyLjUzIDIuNTMgMCAwIDAgMi41IDIuNWgzMDNhMi41MyAyLjUzIDAgMCAwIDIuNS0yLjVWOS41YTIuNTMgMi41MyAwIDAgMC0yLjUtMi41elwiLz48cGF0aCBjbGFzcz1cIkFcIiBkPVwiTTc1IDQ0LjM3aDguNzV2MjAyLjdINzV6XCIvPjxwYXRoIGNsYXNzPVwiQlwiIGQ9XCJNMTI5LjM3IDQ0LjM3XCIvPjxwYXRoIGNsYXNzPVwiQ1wiIGQ9XCJNMjQ5LjM3IDQ0LjM3XCIvPjxwYXRoIGNsYXNzPVwiQVwiIGQ9XCJNNi4xNi41aDMwOS42NmE2IDYgMCAwIDEgNiA2djQzLjhhLjYzLjYzIDAgMCAxLS42My42M0guOGEuNjMuNjMgMCAwIDEtLjYzLS42M1Y2LjVhNiA2IDAgMCAxIDYtNnpNNC44OCAxNDIuODRoMzEyLjZ2MTUuMUg0Ljg4ek0yMi40NyA5MGgyOC4yN3YxNi45N0gyMi40N3ptODkuMTMgMGgxNjUuNjd2MTYuOTdIMTExLjZ6TTIyLjQ3IDE5MGgyOC4yN3YxNi45N0gyMi40N3ptODkuMTMgMGgxNjUuNjd2MTYuOTdIMTExLjZ6XCIvPjwvc3ZnPixcbiAgICBjYXRlZ29yeTogJ2Zvcm1hdHRpbmcnLFxuICAgIGtleXdvcmRzOiBbXG4gICAgICAgIF9fKCdOaW5qYSBUYWJsZXMnKSxcbiAgICAgICAgX18oJ0d1dGVuYmVyZyBCbG9jaycpLFxuICAgICAgICBfXygnbmluamEtdGFibGVzLWd1dGVuYmVyZy1ibG9jaycpXG4gICAgXSxcbiAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIHRhYmxlSWQ6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGVkaXQoe2F0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXN9KSB7XG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHdpbmRvdy5uaW5qYV90YWJsZXNfdGlueV9tY2U7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmluamEtdGFibGVzLWd1dGVuLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5pbmphLXRhYmxlcy1sb2dvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjb25maWcubG9nb30gYWx0PVwibmluamEtdGFibGVzLWxvZ29cIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8U2VsZWN0Q29udHJvbFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17X18oXCJTZWxlY3QgYSBUYWJsZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2F0dHJpYnV0ZXMudGFibGVJZH1cbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17Y29uZmlnLnRhYmxlcy5tYXAodGFibGUgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0YWJsZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiB0YWJsZS50ZXh0XG4gICAgICAgICAgICAgICAgICAgIH0pKX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RhYmxlSWQgPT4gc2V0QXR0cmlidXRlcyh7dGFibGVJZH0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH0sXG4gICAgc2F2ZSh7YXR0cmlidXRlc30pIHtcbiAgICAgICAgcmV0dXJuICdbbmluamFfdGFibGVzIGlkPVwiJythdHRyaWJ1dGVzLnRhYmxlSWQrJ1wiXSdcbiAgICB9LFxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYWRtaW4vZ3V0ZW5ibG9jay5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///360\n");

/***/ })

/******/ });
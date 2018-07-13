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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blocks_full_screen_section__ = __webpack_require__(/*! ./blocks/full-screen-section */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9ja3MvZnVsbC1zY3JlZW4tc2VjdGlvbic7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*************************************************!*\
  !*** ./src/blocks/full-screen-section/index.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ../editor.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__(/*! ./style.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_admin_helpers__ = __webpack_require__(/*! ../../helpers/admin-helpers */ 7);\n/**\n * BLOCK: laboratory-blocks\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n// CSS.\n\n\n\n\n// Helpers\n\n\n// Selectors. In CSS target inside .wp-block-<your-registered-blocktype>\n// By including CSS classes as variables we reduce the chance of misspelling later.\nvar TITLE = 'title';\nvar LOGO = 'logo';\nvar ARROW = 'arrow';\nvar BG = 'background';\n\n// Guttenberg Imports.\nvar _wp$editor = wp.editor,\n    PlainText = _wp$editor.PlainText,\n    MediaUpload = _wp$editor.MediaUpload;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar CheckboxControl = wp.components.CheckboxControl;\n\n/**\n * Register Full Screen Gutenberg Block.\n *\n * @param  {string}   name     Block name.\n * @param  {Object}   settings Block settings.\n * @return {?WPBlock}          The block, if it has been successfully\n *                             registered; otherwise `undefined`.\n *\n * Note the dots for the CSS selectors are added here.\n */\n\nregisterBlockType('laboratory-blocks/full-screen-section', {\n  title: 'Full Screen Section',\n  icon: 'editor-expand',\n  category: 'common',\n\n  attributes: {\n    title: {\n      source: 'text',\n      selector: '.' + TITLE\n    },\n    includeArrow: {\n      selector: '.' + ARROW\n    },\n    logoUrl: {\n      attribute: 'src',\n      selector: '.' + LOGO\n    },\n    bgImageUrl: {\n      attribute: 'src',\n      selector: '.' + BG\n    }\n  },\n\n  /**\n   * The edit function describes the structure of your block in the context of the editor.\n   * This represents what the editor will render when the block is used.\n   */\n  edit: function edit(_ref) {\n    var attributes = _ref.attributes,\n        className = _ref.className,\n        setAttributes = _ref.setAttributes;\n\n    return wp.element.createElement(\n      'div',\n      { className: '' + className },\n      wp.element.createElement(\n        'div',\n        { className: 'p-3' },\n        wp.element.createElement(MediaUpload, {\n          onSelect: function onSelect(media) {\n            return setAttributes({ bgImageUrl: media.url });\n          },\n          type: 'image',\n          value: attributes.bgImageUrl,\n          render: function render(_ref2) {\n            var open = _ref2.open;\n            return Object(__WEBPACK_IMPORTED_MODULE_3__helpers_admin_helpers__[\"b\" /* getImageButton */])(open, Object.assign({}, attributes, {\n              src: attributes.bgImageUrl\n            }));\n          }\n        })\n      ),\n      wp.element.createElement(\n        'div',\n        { className: 'p-3' },\n        wp.element.createElement(MediaUpload, {\n          onSelect: function onSelect(media) {\n            return setAttributes({ logoUrl: media.url });\n          },\n          type: 'image',\n          value: attributes.logoUrl,\n          render: function render(_ref3) {\n            var open = _ref3.open;\n            return Object(__WEBPACK_IMPORTED_MODULE_3__helpers_admin_helpers__[\"b\" /* getImageButton */])(open, Object.assign({}, attributes, {\n              description: 'Logo',\n              src: attributes.logoUrl\n            }));\n          }\n        })\n      ),\n      wp.element.createElement(\n        'div',\n        { className: 'p-3' },\n        wp.element.createElement(PlainText, {\n          onChange: function onChange(content) {\n            return setAttributes({ title: content });\n          },\n          value: attributes.title,\n          placeholder: 'Hero Text',\n          className: 'heading'\n        })\n      ),\n      wp.element.createElement(\n        'div',\n        { className: 'p-3' },\n        wp.element.createElement(CheckboxControl, {\n          label: 'Include Arrow Down?',\n          checked: attributes.includeArrow,\n          onChange: function onChange(bool) {\n            return setAttributes({ includeArrow: bool });\n          }\n        })\n      )\n    );\n  },\n\n\n  /**\n   * The save function defines the way in which the different attributes should be combined\n   * into the final markup, which is then serialized by Gutenberg into post_content.\n   */\n  save: function save(_ref4) {\n    var attributes = _ref4.attributes;\n    var bgImageUrl = attributes.bgImageUrl,\n        logoUrl = attributes.logoUrl,\n        title = attributes.title,\n        includeArrow = attributes.includeArrow;\n\n\n    var bgStyle = bgImageUrl ? { backgroundImage: 'url(' + bgImageUrl + ')' } : {};\n    var arrow = includeArrow ? wp.element.createElement('span', { className: ARROW }) : wp.element.createElement('span', null);\n    var logo = Object(__WEBPACK_IMPORTED_MODULE_3__helpers_admin_helpers__[\"a\" /* conditionallyReturnImage */])({ src: logoUrl });\n\n    return wp.element.createElement(\n      'div',\n      {\n        className: BG,\n        style: bgStyle\n      },\n      wp.element.createElement(\n        'div',\n        { className: 'container' },\n        logo,\n        wp.element.createElement(\n          'h3',\n          { className: TITLE },\n          title\n        ),\n        arrow\n      )\n    );\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MvZnVsbC1zY3JlZW4tc2VjdGlvbi9pbmRleC5qcz82MDQ4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQkxPQ0s6IGxhYm9yYXRvcnktYmxvY2tzXG4gKlxuICogUmVnaXN0ZXJpbmcgYSBiYXNpYyBibG9jayB3aXRoIEd1dGVuYmVyZy5cbiAqIFNpbXBsZSBibG9jaywgcmVuZGVycyBhbmQgc2F2ZXMgdGhlIHNhbWUgY29udGVudCB3aXRob3V0IGFueSBpbnRlcmFjdGl2aXR5LlxuICovXG5cbi8vIENTUy5cbmltcG9ydCAnLi4vZWRpdG9yLnNjc3MnO1xuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcblxuLy8gSGVscGVyc1xuaW1wb3J0IHsgZ2V0SW1hZ2VCdXR0b24sIGNvbmRpdGlvbmFsbHlSZXR1cm5JbWFnZSB9IGZyb20gJy4uLy4uL2hlbHBlcnMvYWRtaW4taGVscGVycyc7XG5cbi8vIFNlbGVjdG9ycy4gSW4gQ1NTIHRhcmdldCBpbnNpZGUgLndwLWJsb2NrLTx5b3VyLXJlZ2lzdGVyZWQtYmxvY2t0eXBlPlxuLy8gQnkgaW5jbHVkaW5nIENTUyBjbGFzc2VzIGFzIHZhcmlhYmxlcyB3ZSByZWR1Y2UgdGhlIGNoYW5jZSBvZiBtaXNzcGVsbGluZyBsYXRlci5cbnZhciBUSVRMRSA9ICd0aXRsZSc7XG52YXIgTE9HTyA9ICdsb2dvJztcbnZhciBBUlJPVyA9ICdhcnJvdyc7XG52YXIgQkcgPSAnYmFja2dyb3VuZCc7XG5cbi8vIEd1dHRlbmJlcmcgSW1wb3J0cy5cbnZhciBfd3AkZWRpdG9yID0gd3AuZWRpdG9yLFxuICAgIFBsYWluVGV4dCA9IF93cCRlZGl0b3IuUGxhaW5UZXh0LFxuICAgIE1lZGlhVXBsb2FkID0gX3dwJGVkaXRvci5NZWRpYVVwbG9hZDtcbnZhciByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTtcbnZhciBDaGVja2JveENvbnRyb2wgPSB3cC5jb21wb25lbnRzLkNoZWNrYm94Q29udHJvbDtcblxuLyoqXG4gKiBSZWdpc3RlciBGdWxsIFNjcmVlbiBHdXRlbmJlcmcgQmxvY2suXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSAgIG5hbWUgICAgIEJsb2NrIG5hbWUuXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgc2V0dGluZ3MgQmxvY2sgc2V0dGluZ3MuXG4gKiBAcmV0dXJuIHs/V1BCbG9ja30gICAgICAgICAgVGhlIGJsb2NrLCBpZiBpdCBoYXMgYmVlbiBzdWNjZXNzZnVsbHlcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RlcmVkOyBvdGhlcndpc2UgYHVuZGVmaW5lZGAuXG4gKlxuICogTm90ZSB0aGUgZG90cyBmb3IgdGhlIENTUyBzZWxlY3RvcnMgYXJlIGFkZGVkIGhlcmUuXG4gKi9cblxucmVnaXN0ZXJCbG9ja1R5cGUoJ2xhYm9yYXRvcnktYmxvY2tzL2Z1bGwtc2NyZWVuLXNlY3Rpb24nLCB7XG4gIHRpdGxlOiAnRnVsbCBTY3JlZW4gU2VjdGlvbicsXG4gIGljb246ICdlZGl0b3ItZXhwYW5kJyxcbiAgY2F0ZWdvcnk6ICdjb21tb24nLFxuXG4gIGF0dHJpYnV0ZXM6IHtcbiAgICB0aXRsZToge1xuICAgICAgc291cmNlOiAndGV4dCcsXG4gICAgICBzZWxlY3RvcjogJy4nICsgVElUTEVcbiAgICB9LFxuICAgIGluY2x1ZGVBcnJvdzoge1xuICAgICAgc2VsZWN0b3I6ICcuJyArIEFSUk9XXG4gICAgfSxcbiAgICBsb2dvVXJsOiB7XG4gICAgICBhdHRyaWJ1dGU6ICdzcmMnLFxuICAgICAgc2VsZWN0b3I6ICcuJyArIExPR09cbiAgICB9LFxuICAgIGJnSW1hZ2VVcmw6IHtcbiAgICAgIGF0dHJpYnV0ZTogJ3NyYycsXG4gICAgICBzZWxlY3RvcjogJy4nICsgQkdcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRoZSBlZGl0IGZ1bmN0aW9uIGRlc2NyaWJlcyB0aGUgc3RydWN0dXJlIG9mIHlvdXIgYmxvY2sgaW4gdGhlIGNvbnRleHQgb2YgdGhlIGVkaXRvci5cbiAgICogVGhpcyByZXByZXNlbnRzIHdoYXQgdGhlIGVkaXRvciB3aWxsIHJlbmRlciB3aGVuIHRoZSBibG9jayBpcyB1c2VkLlxuICAgKi9cbiAgZWRpdDogZnVuY3Rpb24gZWRpdChfcmVmKSB7XG4gICAgdmFyIGF0dHJpYnV0ZXMgPSBfcmVmLmF0dHJpYnV0ZXMsXG4gICAgICAgIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgICBzZXRBdHRyaWJ1dGVzID0gX3JlZi5zZXRBdHRyaWJ1dGVzO1xuXG4gICAgcmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgeyBjbGFzc05hbWU6ICcnICsgY2xhc3NOYW1lIH0sXG4gICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGNsYXNzTmFtZTogJ3AtMycgfSxcbiAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KE1lZGlhVXBsb2FkLCB7XG4gICAgICAgICAgb25TZWxlY3Q6IGZ1bmN0aW9uIG9uU2VsZWN0KG1lZGlhKSB7XG4gICAgICAgICAgICByZXR1cm4gc2V0QXR0cmlidXRlcyh7IGJnSW1hZ2VVcmw6IG1lZGlhLnVybCB9KTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICAgICAgdmFsdWU6IGF0dHJpYnV0ZXMuYmdJbWFnZVVybCxcbiAgICAgICAgICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcihfcmVmMikge1xuICAgICAgICAgICAgdmFyIG9wZW4gPSBfcmVmMi5vcGVuO1xuICAgICAgICAgICAgcmV0dXJuIGdldEltYWdlQnV0dG9uKG9wZW4sIE9iamVjdC5hc3NpZ24oe30sIGF0dHJpYnV0ZXMsIHtcbiAgICAgICAgICAgICAgc3JjOiBhdHRyaWJ1dGVzLmJnSW1hZ2VVcmxcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApLFxuICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBjbGFzc05hbWU6ICdwLTMnIH0sXG4gICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChNZWRpYVVwbG9hZCwge1xuICAgICAgICAgIG9uU2VsZWN0OiBmdW5jdGlvbiBvblNlbGVjdChtZWRpYSkge1xuICAgICAgICAgICAgcmV0dXJuIHNldEF0dHJpYnV0ZXMoeyBsb2dvVXJsOiBtZWRpYS51cmwgfSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgICAgICAgIHZhbHVlOiBhdHRyaWJ1dGVzLmxvZ29VcmwsXG4gICAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoX3JlZjMpIHtcbiAgICAgICAgICAgIHZhciBvcGVuID0gX3JlZjMub3BlbjtcbiAgICAgICAgICAgIHJldHVybiBnZXRJbWFnZUJ1dHRvbihvcGVuLCBPYmplY3QuYXNzaWduKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTG9nbycsXG4gICAgICAgICAgICAgIHNyYzogYXR0cmlidXRlcy5sb2dvVXJsXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgKSxcbiAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiAncC0zJyB9LFxuICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoUGxhaW5UZXh0LCB7XG4gICAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKGNvbnRlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBzZXRBdHRyaWJ1dGVzKHsgdGl0bGU6IGNvbnRlbnQgfSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICB2YWx1ZTogYXR0cmlidXRlcy50aXRsZSxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJ0hlcm8gVGV4dCcsXG4gICAgICAgICAgY2xhc3NOYW1lOiAnaGVhZGluZydcbiAgICAgICAgfSlcbiAgICAgICksXG4gICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGNsYXNzTmFtZTogJ3AtMycgfSxcbiAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KENoZWNrYm94Q29udHJvbCwge1xuICAgICAgICAgIGxhYmVsOiAnSW5jbHVkZSBBcnJvdyBEb3duPycsXG4gICAgICAgICAgY2hlY2tlZDogYXR0cmlidXRlcy5pbmNsdWRlQXJyb3csXG4gICAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKGJvb2wpIHtcbiAgICAgICAgICAgIHJldHVybiBzZXRBdHRyaWJ1dGVzKHsgaW5jbHVkZUFycm93OiBib29sIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApO1xuICB9LFxuXG5cbiAgLyoqXG4gICAqIFRoZSBzYXZlIGZ1bmN0aW9uIGRlZmluZXMgdGhlIHdheSBpbiB3aGljaCB0aGUgZGlmZmVyZW50IGF0dHJpYnV0ZXMgc2hvdWxkIGJlIGNvbWJpbmVkXG4gICAqIGludG8gdGhlIGZpbmFsIG1hcmt1cCwgd2hpY2ggaXMgdGhlbiBzZXJpYWxpemVkIGJ5IEd1dGVuYmVyZyBpbnRvIHBvc3RfY29udGVudC5cbiAgICovXG4gIHNhdmU6IGZ1bmN0aW9uIHNhdmUoX3JlZjQpIHtcbiAgICB2YXIgYXR0cmlidXRlcyA9IF9yZWY0LmF0dHJpYnV0ZXM7XG4gICAgdmFyIGJnSW1hZ2VVcmwgPSBhdHRyaWJ1dGVzLmJnSW1hZ2VVcmwsXG4gICAgICAgIGxvZ29VcmwgPSBhdHRyaWJ1dGVzLmxvZ29VcmwsXG4gICAgICAgIHRpdGxlID0gYXR0cmlidXRlcy50aXRsZSxcbiAgICAgICAgaW5jbHVkZUFycm93ID0gYXR0cmlidXRlcy5pbmNsdWRlQXJyb3c7XG5cblxuICAgIHZhciBiZ1N0eWxlID0gYmdJbWFnZVVybCA/IHsgYmFja2dyb3VuZEltYWdlOiAndXJsKCcgKyBiZ0ltYWdlVXJsICsgJyknIH0gOiB7fTtcbiAgICB2YXIgYXJyb3cgPSBpbmNsdWRlQXJyb3cgPyB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7IGNsYXNzTmFtZTogQVJST1cgfSkgOiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCBudWxsKTtcbiAgICB2YXIgbG9nbyA9IGNvbmRpdGlvbmFsbHlSZXR1cm5JbWFnZSh7IHNyYzogbG9nb1VybCB9KTtcblxuICAgIHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiBCRyxcbiAgICAgICAgc3R5bGU6IGJnU3R5bGVcbiAgICAgIH0sXG4gICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGNsYXNzTmFtZTogJ2NvbnRhaW5lcicgfSxcbiAgICAgICAgbG9nbyxcbiAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdoMycsXG4gICAgICAgICAgeyBjbGFzc05hbWU6IFRJVExFIH0sXG4gICAgICAgICAgdGl0bGVcbiAgICAgICAgKSxcbiAgICAgICAgYXJyb3dcbiAgICAgIClcbiAgICApO1xuICB9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9ja3MvZnVsbC1zY3JlZW4tc2VjdGlvbi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!********************************!*\
  !*** ./src/blocks/editor.scss ***!
  \********************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MvZWRpdG9yLnNjc3M/OTIwZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2Nrcy9lZGl0b3Iuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!***************************************************!*\
  !*** ./src/blocks/full-screen-section/style.scss ***!
  \***************************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MvZnVsbC1zY3JlZW4tc2VjdGlvbi9zdHlsZS5zY3NzPzljM2UiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9ja3MvZnVsbC1zY3JlZW4tc2VjdGlvbi9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!****************************************************!*\
  !*** ./src/blocks/full-screen-section/editor.scss ***!
  \****************************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MvZnVsbC1zY3JlZW4tc2VjdGlvbi9lZGl0b3Iuc2Nzcz9hMThjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzL2Z1bGwtc2NyZWVuLXNlY3Rpb24vZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */
/*!**************************************!*\
  !*** ./src/helpers/admin-helpers.js ***!
  \**************************************/
/*! exports provided: getImageButton, conditionallyReturnImage */
/*! exports used: conditionallyReturnImage, getImageButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (immutable) */ __webpack_exports__[\"b\"] = getImageButton;\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = conditionallyReturnImage;\nvar Button = wp.components.Button;\n\n/**\n * Return either an example image, or an image button.\n *\n * @param openEvent - The event handler\n * @param {object} attributes Array of attributes.\n *    @param {string} src - src attribute of the image\n *    @param {string} description - button text\n *    @param {string} alt - alt attribute of the image\n *    @param {string} classes - css classes | className\n * @returns {object} Button\n */\n\nfunction getImageButton(openEvent, attributes) {\n  if (attributes.src) {\n    return wp.element.createElement(\n      \"button\",\n      {\n        onClick: openEvent,\n        onKeyPress: openEvent,\n        type: \"button\"\n      },\n      wp.element.createElement(\"img\", {\n        src: attributes.src,\n        className: attributes.classes + \" lab-blocks-editor-image\",\n        alt: attributes.alt || 'Image Selected'\n      })\n    );\n  }\n  return wp.element.createElement(\n    \"div\",\n    { className: \"button-container\" },\n    wp.element.createElement(\n      Button,\n      {\n        onClick: openEvent,\n        className: attributes.classes + \" button button-large lab-blocks-button\"\n      },\n      attributes.description || 'Image Selection'\n    )\n  );\n}\n\nfunction conditionallyReturnImage(attributes) {\n  if (attributes.src) {\n    return wp.element.createElement(\"img\", {\n      src: attributes.src,\n      className: \"\" + attributes.classes,\n      alt: attributes.alt || ''\n    });\n  }\n  return wp.element.createElement(\"span\", null);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL2FkbWluLWhlbHBlcnMuanM/ZmI0NiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQnV0dG9uID0gd3AuY29tcG9uZW50cy5CdXR0b247XG5cbi8qKlxuICogUmV0dXJuIGVpdGhlciBhbiBleGFtcGxlIGltYWdlLCBvciBhbiBpbWFnZSBidXR0b24uXG4gKlxuICogQHBhcmFtIG9wZW5FdmVudCAtIFRoZSBldmVudCBoYW5kbGVyXG4gKiBAcGFyYW0ge29iamVjdH0gYXR0cmlidXRlcyBBcnJheSBvZiBhdHRyaWJ1dGVzLlxuICogICAgQHBhcmFtIHtzdHJpbmd9IHNyYyAtIHNyYyBhdHRyaWJ1dGUgb2YgdGhlIGltYWdlXG4gKiAgICBAcGFyYW0ge3N0cmluZ30gZGVzY3JpcHRpb24gLSBidXR0b24gdGV4dFxuICogICAgQHBhcmFtIHtzdHJpbmd9IGFsdCAtIGFsdCBhdHRyaWJ1dGUgb2YgdGhlIGltYWdlXG4gKiAgICBAcGFyYW0ge3N0cmluZ30gY2xhc3NlcyAtIGNzcyBjbGFzc2VzIHwgY2xhc3NOYW1lXG4gKiBAcmV0dXJucyB7b2JqZWN0fSBCdXR0b25cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW1hZ2VCdXR0b24ob3BlbkV2ZW50LCBhdHRyaWJ1dGVzKSB7XG4gIGlmIChhdHRyaWJ1dGVzLnNyYykge1xuICAgIHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImJ1dHRvblwiLFxuICAgICAge1xuICAgICAgICBvbkNsaWNrOiBvcGVuRXZlbnQsXG4gICAgICAgIG9uS2V5UHJlc3M6IG9wZW5FdmVudCxcbiAgICAgICAgdHlwZTogXCJidXR0b25cIlxuICAgICAgfSxcbiAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7XG4gICAgICAgIHNyYzogYXR0cmlidXRlcy5zcmMsXG4gICAgICAgIGNsYXNzTmFtZTogYXR0cmlidXRlcy5jbGFzc2VzICsgXCIgbGFiLWJsb2Nrcy1lZGl0b3ItaW1hZ2VcIixcbiAgICAgICAgYWx0OiBhdHRyaWJ1dGVzLmFsdCB8fCAnSW1hZ2UgU2VsZWN0ZWQnXG4gICAgICB9KVxuICAgICk7XG4gIH1cbiAgcmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICBcImRpdlwiLFxuICAgIHsgY2xhc3NOYW1lOiBcImJ1dHRvbi1jb250YWluZXJcIiB9LFxuICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgIEJ1dHRvbixcbiAgICAgIHtcbiAgICAgICAgb25DbGljazogb3BlbkV2ZW50LFxuICAgICAgICBjbGFzc05hbWU6IGF0dHJpYnV0ZXMuY2xhc3NlcyArIFwiIGJ1dHRvbiBidXR0b24tbGFyZ2UgbGFiLWJsb2Nrcy1idXR0b25cIlxuICAgICAgfSxcbiAgICAgIGF0dHJpYnV0ZXMuZGVzY3JpcHRpb24gfHwgJ0ltYWdlIFNlbGVjdGlvbidcbiAgICApXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25kaXRpb25hbGx5UmV0dXJuSW1hZ2UoYXR0cmlidXRlcykge1xuICBpZiAoYXR0cmlidXRlcy5zcmMpIHtcbiAgICByZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHtcbiAgICAgIHNyYzogYXR0cmlidXRlcy5zcmMsXG4gICAgICBjbGFzc05hbWU6IFwiXCIgKyBhdHRyaWJ1dGVzLmNsYXNzZXMsXG4gICAgICBhbHQ6IGF0dHJpYnV0ZXMuYWx0IHx8ICcnXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaGVscGVycy9hZG1pbi1oZWxwZXJzLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///7\n");

/***/ })
/******/ ]);
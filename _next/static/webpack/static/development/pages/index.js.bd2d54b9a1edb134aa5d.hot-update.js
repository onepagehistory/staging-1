webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/Card/Card.tsx":
/*!***************************!*\
  !*** ./src/Card/Card.tsx ***!
  \***************************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Card_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card.scss */ "./src/Card/Card.scss");
/* harmony import */ var _Card_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Card_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_yearToTopPos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/yearToTopPos */ "./src/shared/yearToTopPos.ts");

var _jsxFileName = "/Users/kos/projects/onepagehistory/src/Card/Card.tsx";



var Card = function Card(_ref) {
  var entry = _ref.entry;
  var eventHeight = Math.max(1, entry.dating.to.year() - entry.dating.from.year()) * 1.5;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: entry.name,
    className: "Card",
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, entry.position, {
      top: Object(_shared_yearToTopPos__WEBPACK_IMPORTED_MODULE_3__["getTopPos"])(entry.dating.to.year())
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "Card__Range",
    style: {
      height: eventHeight
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "Card__Entry",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "Card__Body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "Card__Title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "Card__TitleLink",
    href: '#' + entry.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, entry.title), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "Card__WikiLink",
    target: "_blank",
    href: 'https://wikipedia.org/wiki/' + entry.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "[W]")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "Card__Date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, entry.subtitle), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "Card__ShortDescription",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, entry.shortDescription)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "Card__ImgWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: entry.name + ' representation',
    src: entry.imageUrl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }))));
};

/***/ })

})
//# sourceMappingURL=index.js.bd2d54b9a1edb134aa5d.hot-update.js.map
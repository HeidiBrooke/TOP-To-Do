"use strict";
(self["webpackChunktop_to_do"] = self["webpackChunktop_to_do"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=Oswald:wght@200;300;400;500;600;700&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* *{\n    box-sizing: border-box;\n} */\nbody {\n    padding: 0px;\n    margin: 0px;\n    position: relative;\n    \n    /* height: 100vh; */\n    \n}\n\ndiv {\n    /* border-top: 2px solid white; */\n    padding: 4px;\n\n}\n#content {\n    margin: 0px;\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    background-color: rgb(63, 135, 152);\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    align-items: center;\n    position: relative;\n}\n\n#container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 4px;\n    padding: 20px;\n    margin: 20px 0;\n    width: 480px;\n    height: 100vh;  \n}\n\n#header{\n    display: flex;\n    width: 100%;\n    height: 100px;\n}\n\n#deckDock{\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 200px;\n}\n\n.deckArea{\n    display: flex;\n    gap: 7px;\n}\n\n#table{\n    padding: 4px;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n}\n\n#logo, .title{\n    width: 100px;\n    font-size: 32px;\n    font-weight: 600;\n    font-family: 'Raleway', sans-serif;\n    color: white;\n    border: none;\n}\n\n.title{\n    width: auto;\n    font-size: 24px;\n}\n\n\n#cardArea{\n    display: grid;\n    grid-template-columns: 60px 1fr 60px;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    border: none;\n}\n\n.deck{\n    display: flex;\n    width: 60px;\n    height: 90px;\n    border-radius: 4px;\n    background-color: white;\n    /* box-shadow: rgba(0, 0, 0, 0.16) 0 7px 9px -7px;\n    box-shadow: rgba(53, 82, 94, 0.3) 1px 7px 7px 1px; */\n    justify-items: center;\n    align-items: center;\n}\n\n.menu{\n    border: none;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: left;\n    gap: 4px;\n}\n\n#deckTitle, #cardTitle, #cardDate, #cardSteps{\n    margin-top: 8px;\n    font-family: 'Raleway', sans-serif;\n    font-size: 14px;\n    color: rgb(63, 135, 152);\n    font-weight: 600;\n    text-transform: uppercase;\n}\n\n.selectedDeck {\n    box-shadow: rgb(102, 220, 241) 0 0 3px 2px;\n    /* box-shadow: rgba(53, 82, 94, 0.3) 1px 9px 9px 1px; */\n}\n\n#addCardButton, #addDeckButton{\n    font-size: 48px;\n    cursor: pointer;\n}\n\n#addCardButton:hover, #addDeckButton:hover, .nextButton:hover{\n    /* text-shadow:  0 0 3px 2px, rgb(102, 173, 241); */\n    text-shadow: -1px 1px 2px rgb(102, 220, 241),\n\t\t\t\t  1px 1px 2px rgb(102, 220, 241),\n\t\t\t\t  1px -1px 0 rgb(102, 220, 241),\n\t\t\t\t  -1px -1px 0 rgb(102, 220, 241);\n    \n}\n.nextButton{\n    justify-self: right;\n    color: white;\n    color: rgb(80, 163, 182);\n    font-family: 'Raleway', sans-serif;\n    font-size: 72px;\n    border: none;\n    cursor: pointer;\n}\n\n#forwardButton{\n    justify-self: left;\n    grid-column: 3/4;\n}\n\n#backwardButton{\n    justify-self: right;\n    grid-column: 1/2;\n    grid-row: 1/2;\n}\n\n\n.cardBig{\n    grid-column: 2/3;\n    grid-row: 1/2;\n    justify-self: center;\n    display: flex;\n    width: 240px;\n    height: 360px;\n    border-radius: 16px;\n    background-color: white;\n    box-shadow: rgba(53, 82, 94, 0.3) 1px 9px 9px 1px;\n    justify-content: center;\n    align-items: center;\n    z-index: 1;\n\n}\n\n#topCard{\n    flex-direction: column;\n}\n\n.stack0{\n    background-color: white;\n    position: absolute;\n    top: 6px;\n    left: 63px;\n    /* z-index: -1; */\n    transform: rotate(2deg);\n}\n\n.stack1{\n    position: absolute;\n    top: 3px;\n    left: 58px;\n    /* z-index: -2; */\n    transform: rotate(1deg);\n}\n\n.stack2{\n    position: absolute;\n    top: 4px;\n    left: 120px;\n    /* z-index: -3; */\n    transform: rotate(6deg);\n}\n\n.editSize{\n    /* position: absolute;\n    top: 180px; */\n    width: 300px;\n    height: 450px;\n    z-index: 3;\n}\n\n.overLayHolder{\n    position: absolute;\n    visibility: hidden;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100vw;\n    height: 100vh; \n    \n}\n.overlay{\n    display: grid;\n    position: absolute;\n    background-color: rgb(37, 107, 107);\n    opacity: 60%;\n    height: 100vh;\n    width: 100vw;\n    z-index: 2;\n    padding: 20px; \n}\n\n.formDiv{\n    display: flex;\n    flex-direction: column;\n    padding-top: 100px;\n    gap: 20px;\n    width: 300px;\n    height: 600px;\n    z-index: 3;\n}\n\n.submitButtonsDiv{\n    display: flex;\n    flex-direction: row;\n    gap: 16px;\n    height: 44px;\n}\n\n.cardForm{\n    display: grid;\n    gap: 16px;\n    width:300px;\n    height: 410px;\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: repeat(7, 1fr);\n    padding: 20px;\n}\n\n.input, .check{\n    padding: 8px;\n    grid-column: 1/5;\n    border: none;\n    outline: none;\n    border-radius: 16px;\n    background-color: rgb(242, 242, 242);\n    color: rgb(80, 163, 182);\n    font-family: 'Raleway', sans-serif;\n    font-size: 18px;\n    text-align: center;\n}\n\n.input:hover{\n    box-shadow: rgb(102, 173, 241) 0 0 3px 2px;\n    box-shadow: rgb(102, 220, 241) 0 0 3px 2px;\n}\n\n#card-title{\n   /* grid-row: 3/4; */\n}\n\n#date{\n    grid-row: 7/8;\n}\n\n.check{\n    background-color: white;\n    width: 50px;\n    z-index: 3;\n    text-align: center;\n    vertical-align: center;\n}\n\n.check:hover{\n    font-size: 24px;\n}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'); \n@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=Oswald:wght@200;300;400;500;600;700&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\n/* *{\n    box-sizing: border-box;\n} */\nbody {\n    padding: 0px;\n    margin: 0px;\n    position: relative;\n    \n    /* height: 100vh; */\n    \n}\n\ndiv {\n    /* border-top: 2px solid white; */\n    padding: 4px;\n\n}\n#content {\n    margin: 0px;\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    background-color: rgb(63, 135, 152);\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    align-items: center;\n    position: relative;\n}\n\n#container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 4px;\n    padding: 20px;\n    margin: 20px 0;\n    width: 480px;\n    height: 100vh;  \n}\n\n#header{\n    display: flex;\n    width: 100%;\n    height: 100px;\n}\n\n#deckDock{\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 200px;\n}\n\n.deckArea{\n    display: flex;\n    gap: 7px;\n}\n\n#table{\n    padding: 4px;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n}\n\n#logo, .title{\n    width: 100px;\n    font-size: 32px;\n    font-weight: 600;\n    font-family: 'Raleway', sans-serif;\n    color: white;\n    border: none;\n}\n\n.title{\n    width: auto;\n    font-size: 24px;\n}\n\n\n#cardArea{\n    display: grid;\n    grid-template-columns: 60px 1fr 60px;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    border: none;\n}\n\n.deck{\n    display: flex;\n    width: 60px;\n    height: 90px;\n    border-radius: 4px;\n    background-color: white;\n    /* box-shadow: rgba(0, 0, 0, 0.16) 0 7px 9px -7px;\n    box-shadow: rgba(53, 82, 94, 0.3) 1px 7px 7px 1px; */\n    justify-items: center;\n    align-items: center;\n}\n\n.menu{\n    border: none;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: left;\n    gap: 4px;\n}\n\n#deckTitle, #cardTitle, #cardDate, #cardSteps{\n    margin-top: 8px;\n    font-family: 'Raleway', sans-serif;\n    font-size: 14px;\n    color: rgb(63, 135, 152);\n    font-weight: 600;\n    text-transform: uppercase;\n}\n\n.selectedDeck {\n    box-shadow: rgb(102, 220, 241) 0 0 3px 2px;\n    /* box-shadow: rgba(53, 82, 94, 0.3) 1px 9px 9px 1px; */\n}\n\n#addCardButton, #addDeckButton{\n    font-size: 48px;\n    cursor: pointer;\n}\n\n#addCardButton:hover, #addDeckButton:hover, .nextButton:hover{\n    /* text-shadow:  0 0 3px 2px, rgb(102, 173, 241); */\n    text-shadow: -1px 1px 2px rgb(102, 220, 241),\n\t\t\t\t  1px 1px 2px rgb(102, 220, 241),\n\t\t\t\t  1px -1px 0 rgb(102, 220, 241),\n\t\t\t\t  -1px -1px 0 rgb(102, 220, 241);\n    \n}\n.nextButton{\n    justify-self: right;\n    color: white;\n    color: rgb(80, 163, 182);\n    font-family: 'Raleway', sans-serif;\n    font-size: 72px;\n    border: none;\n    cursor: pointer;\n}\n\n#forwardButton{\n    justify-self: left;\n    grid-column: 3/4;\n}\n\n#backwardButton{\n    justify-self: right;\n    grid-column: 1/2;\n    grid-row: 1/2;\n}\n\n\n.cardBig{\n    grid-column: 2/3;\n    grid-row: 1/2;\n    justify-self: center;\n    display: flex;\n    width: 240px;\n    height: 360px;\n    border-radius: 16px;\n    background-color: white;\n    box-shadow: rgba(53, 82, 94, 0.3) 1px 9px 9px 1px;\n    justify-content: center;\n    align-items: center;\n    z-index: 1;\n\n}\n\n#topCard{\n    flex-direction: column;\n}\n\n.stack0{\n    background-color: white;\n    position: absolute;\n    top: 6px;\n    left: 63px;\n    /* z-index: -1; */\n    transform: rotate(2deg);\n}\n\n.stack1{\n    position: absolute;\n    top: 3px;\n    left: 58px;\n    /* z-index: -2; */\n    transform: rotate(1deg);\n}\n\n.stack2{\n    position: absolute;\n    top: 4px;\n    left: 120px;\n    /* z-index: -3; */\n    transform: rotate(6deg);\n}\n\n.editSize{\n    /* position: absolute;\n    top: 180px; */\n    width: 300px;\n    height: 450px;\n    z-index: 3;\n}\n\n.overLayHolder{\n    position: absolute;\n    visibility: hidden;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100vw;\n    height: 100vh; \n    \n}\n.overlay{\n    display: grid;\n    position: absolute;\n    background-color: rgb(37, 107, 107);\n    opacity: 60%;\n    height: 100vh;\n    width: 100vw;\n    z-index: 2;\n    padding: 20px; \n}\n\n.formDiv{\n    display: flex;\n    flex-direction: column;\n    padding-top: 100px;\n    gap: 20px;\n    width: 300px;\n    height: 600px;\n    z-index: 3;\n}\n\n.submitButtonsDiv{\n    display: flex;\n    flex-direction: row;\n    gap: 16px;\n    height: 44px;\n}\n\n.cardForm{\n    display: grid;\n    gap: 16px;\n    width:300px;\n    height: 410px;\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: repeat(7, 1fr);\n    padding: 20px;\n}\n\n.input, .check{\n    padding: 8px;\n    grid-column: 1/5;\n    border: none;\n    outline: none;\n    border-radius: 16px;\n    background-color: rgb(242, 242, 242);\n    color: rgb(80, 163, 182);\n    font-family: 'Raleway', sans-serif;\n    font-size: 18px;\n    text-align: center;\n}\n\n.input:hover{\n    box-shadow: rgb(102, 173, 241) 0 0 3px 2px;\n    box-shadow: rgb(102, 220, 241) 0 0 3px 2px;\n}\n\n#card-title{\n   /* grid-row: 3/4; */\n}\n\n#date{\n    grid-row: 7/8;\n}\n\n.check{\n    background-color: white;\n    width: 50px;\n    z-index: 3;\n    text-align: center;\n    vertical-align: center;\n}\n\n.check:hover{\n    font-size: 24px;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/card.js":
/*!*********************!*\
  !*** ./src/card.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const card = (name) => {
  const cardName = name;
  const cardSteps = [];
  const cardDate = "";
  const cardCompleteValue = 0;
  const cardDecks = ["all"];
  return {
    cardName,
    cardCompleteValue,
    cardDate,
    cardSteps,
    cardDecks,
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (card);


/***/ }),

/***/ "./src/controlls.js":
/*!**************************!*\
  !*** ./src/controlls.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addCardtoDeck": () => (/* binding */ addCardtoDeck),
/* harmony export */   "all": () => (/* binding */ all),
/* harmony export */   "createCard": () => (/* binding */ createCard),
/* harmony export */   "createDeck": () => (/* binding */ createDeck),
/* harmony export */   "deckArray": () => (/* binding */ deckArray),
/* harmony export */   "defaultCard": () => (/* binding */ defaultCard),
/* harmony export */   "defaultCard2": () => (/* binding */ defaultCard2),
/* harmony export */   "defaultDeck": () => (/* binding */ defaultDeck),
/* harmony export */   "getCard": () => (/* binding */ getCard),
/* harmony export */   "getDeck": () => (/* binding */ getDeck),
/* harmony export */   "table": () => (/* binding */ table)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card */ "./src/card.js");
/* harmony import */ var _deck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deck */ "./src/deck.js");




const all = (0,_deck__WEBPACK_IMPORTED_MODULE_2__["default"])("all");
console.log(all);
const deckArray = [];
deckArray.push(all);
const table = deckArray;
const defaultDeck = (0,_deck__WEBPACK_IMPORTED_MODULE_2__["default"])('To-Do');
const defaultCard = (0,_card__WEBPACK_IMPORTED_MODULE_1__["default"])('Get Groceries');
const defaultCard2 = (0,_card__WEBPACK_IMPORTED_MODULE_1__["default"])('Mail Thank You Notes');
all.cardsArray.push(defaultCard);
all.cardsArray.push(defaultCard2);
defaultDeck.cardsArray.push(defaultCard.cardName);
defaultDeck.cardsArray.push(defaultCard2.cardName);
deckArray.push(defaultDeck);


    const viewAll = () => {
      console.log(`All cards are: ${all}`);
      console.log(`all decks are: ${table}`);
      all.cardsArray.forEach((cardElement) => {
        console.log(`all + ${cardElement}`);
      });
    };

    const viewDeck = (name) => {
      let currentDeck;
      let wasMatched = false;
      table.forEach((deckElement) => {
        console.log("in for each");
        console.log(deckElement);
        console.log(currentDeck);
        console.log(typeof currentDeck);
        if (deckElement.deckName === name) {
          currentDeck = deckElement;
          console.log(currentDeck);
          console.log(typeof currentDeck);
          wasMatched = true;
        }
      });
      if (wasMatched === false) {
        currentDeck = all;
        console.log(currentDeck);
        console.log(typeof currentDeck);
      }
      console.log(typeof currentDeck);
      console.log(`${currentDeck.deckName} contents are: `);
      currentDeck.cardsArray.forEach((cardElement) => {
        console.log(cardElement);
      });
      
    };

    const createDeck = (name) => {
        // const theName = prompt('What is the name of teh deck?')
      const thisDeck = (0,_deck__WEBPACK_IMPORTED_MODULE_2__["default"])(name);
      table.push(thisDeck);
      // console.log("the deck created is: " + thisDeck);
      // console.log("its name is: " + thisDeck.deckName);
    };

    const addCardtoDeck = (thisCard, thisDeck) => {
        thisCard.cardDeck = thisDeck.deckName;
        thisDeck.cardsArray.push(thisCard.cardName);
        console.log(thisDeck);
      };

    

    const getCard = (name) => {
        console.log(name)
      let theCard;
      all.cardsArray.forEach((cardElement) => {
        console.log(cardElement.cardName);
        console.log(name);
        if (cardElement.cardName === name) {
          theCard = cardElement;
        }
      });
    //   if (theCard === undefined) {
    //     // const cardName = prompt(
    //     //   "that card does not exist, please enter another name:"
    //     // );
    //     // theCard = getCard(cardName);
    //   }
      return theCard;
    };

    const getDeck = (name) => {
      let theDeck;
      table.forEach((deckElement) => {
        console.log("the  deck name is: " + deckElement.deckName);
        if (deckElement.deckName === name) {
          console.log("it matched!");
          console.log(deckElement.deckName, name);
          theDeck = deckElement;
        }
        console.log("getting deck: " + theDeck);
      });
      if (theDeck === undefined) {
        const deckName = prompt(
          "that deck does not exist, please enter another name:"
        );
        theDeck = getDeck(deckName);
      }
      console.log(theDeck);
      return theDeck;
    };

    const createCard = (name) => {
        // const theName = prompt('What is the name of the card?')
      const newCard = (0,_card__WEBPACK_IMPORTED_MODULE_1__["default"])(name);
      // const nameOfDeck = prompt('what deck?');
      // newCard.cardDecks.push(nameOfDeck);
      // console.log(newCard.cardDecks);
      // newCard.cardDecks.forEach(deckName => {
      //   if(deckName !== 'all'){
      //   const thisDeck = getDeck(deckName);
      //   console.log('adding hte fullowing card to the following deck '+ newCard.cardName + " " + thisDeck.deckName);
      //   addCardtoDeck(newCard, thisDeck)
      //   }
        
      // })
    all.cardsArray.push(newCard);
    console.log(all);
    };

    

    const deleteCardFromDeck = (thisCard, thisDeck) => {
      const index = thisDeck.cardsArray.indexOf(thisCard.cardName);
      if (index > -1) {
        thisDeck.cardsArray.splice(index, 1);
      }
      return thisDeck;
    };

    const deleteCard = (thisCard) => {
      const index = all.cardsArray.indexOf(thisCard);
      if (index > -1) {
        all.cardsArray.splice(index, 1);
      }
      return all;
    };

    const deleteDeck = (aDeckName) => {
      const deckObj = getDeck(aDeckName);
      const index = table.indexOf(deckObj);
      if (index > -1) {
        table.splice(index, 1);
      }
      return table;
    };

    const moveCard = (theCardName, deckOneName, deckTwoName) => {
      const thisCard = getCard(theCardName);
      const deckOne = getDeck(deckOneName);
      const deckTwo = getDeck(deckTwoName);
      console.log(thisCard, deckOne, deckTwo);
      deleteCardFromDeck(thisCard, deckOne);
      addCardtoDeck(thisCard, deckTwo);
    };

    const viewCard = (theCardName) => {
      const thisCard = getCard(theCardName);
      for (const prop in thisCard) {
        console.log(`obj.${prop} = ${thisCard[prop]}`);
      }
    };

    const setDate = (theCardName) => {
      const thisCard = getCard(theCardName);
      const aDate = prompt("enter the due date in the form of MM.DD.YY:");
      thisCard.cardDate = new Date(aDate);
    };

    const addStep = (theCardName) => {
      const thisCard = getCard(theCardName);
      const i = thisCard.cardSteps.length;
      thisCard.cardSteps[i] = prompt("enter your step:");
    };

    const setStep = (theCardName) => {
      const thisCard = getCard(theCardName);
      const i = prompt("what index?");
      thisCard.cardSteps[i] = prompt("enter your step:");
    };

    const setComplete = (theCardName) => {
      const thisCard = getCard(theCardName);
      thisCard.cardCompleteValue = Number(
        prompt(
          "is your task complete? If so, enter a '1' otherwise eneter '0'."
        )
      );
    };

    // return {
    //   viewAll,
    //   viewCard,
    //   viewDeck,
    //   createCard,
    //   createDeck,
    //   getCard,
    //   getDeck,
    //   addCardtoDeck,
    //   deleteCardFromDeck,
    //   deleteCard,
    //   deleteDeck,
    //   moveCard,
    //   setDate,
    //   addStep,
    //   setComplete,
    //   setStep,
    // };




/***/ }),

/***/ "./src/deck.js":
/*!*********************!*\
  !*** ./src/deck.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const deck = (name) => {
  const deckName = name;
  const cardsArray = [];
  const bookmark = 0;
  return {
    deckName,
    cardsArray,
    bookmark,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deck);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controlls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controlls */ "./src/controlls.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card */ "./src/card.js");
/* harmony import */ var _deck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deck */ "./src/deck.js");








const content = document.createElement('div');
content.setAttribute('id', 'content');
document.body.appendChild(content);

const container = document.createElement('div');
container.setAttribute('id', 'container');
content.appendChild(container);

const header = document.createElement('div');
header.setAttribute('id', 'header');
container.appendChild(header);

const deckDock = document.createElement('div');
deckDock.setAttribute('id', 'deckDock');
container.appendChild(deckDock);

const cardDock = document.createElement('div');
cardDock.setAttribute('id', 'table');
container.appendChild(cardDock);

const logo = document.createElement('div');
logo.setAttribute('id', 'logo');
header.appendChild(logo);
logo.textContent = 'Shuffle';

const deckDockMenu = document.createElement('div');
deckDockMenu.setAttribute('class', 'menu');
deckDock.appendChild(deckDockMenu);

let div = document.createElement('div');
div.setAttribute('class', 'title');
deckDockMenu.appendChild(div);
div.textContent = 'Decks';

const addDeckButton = document.createElement('div');
addDeckButton.setAttribute('id', 'addDeckButton');
addDeckButton.setAttribute('class', 'title')
deckDockMenu.appendChild(addDeckButton);
addDeckButton.textContent = '+';

const deckArea = document.createElement('div');
deckArea.setAttribute('class', 'deckArea');
deckDock.appendChild(deckArea);

const cardDockMenu = document.createElement('div');
cardDockMenu.setAttribute('class', 'menu');
cardDock.appendChild(cardDockMenu);

div = document.createElement('div');
div.setAttribute('class', 'title');
cardDockMenu.appendChild(div);
div.textContent = 'Cards';

const addCardButton = document.createElement('div');
addCardButton.setAttribute('id', 'addCardButton');
addCardButton.setAttribute('class', 'title')
cardDockMenu.appendChild(addCardButton);
addCardButton.textContent = '+';

const cardArea = document.createElement('div');
cardArea.setAttribute('id', 'cardArea');
cardDock.appendChild(cardArea);

const forwardButton = document.createElement('div');
forwardButton.setAttribute('class', 'nextButton');
forwardButton.setAttribute('id', 'forwardButton');
cardArea.appendChild(forwardButton);
forwardButton.textContent = '>';

const backwardButton = document.createElement('div');
backwardButton.setAttribute('class', 'nextButton');
backwardButton.setAttribute('id', 'backwardButton');
cardArea.appendChild(backwardButton);
backwardButton.textContent = '<';

const overLayHolder = document.createElement('div');
overLayHolder.setAttribute('class', 'content');
overLayHolder.setAttribute('id', 'overLayHolder');
overLayHolder.classList.add('overLayHolder');
content.appendChild(overLayHolder);

const overlay = document.createElement('div');
overlay.setAttribute('class', 'overlay');
overLayHolder.appendChild(overlay);

const formDiv = document.createElement('div');
formDiv.setAttribute('class', 'formDiv');
overLayHolder.appendChild(formDiv);

const newCardForm = document.createElement('div');
newCardForm.setAttribute('class', 'cardBig');
newCardForm.classList.add('editSize');
newCardForm.setAttribute('id', 'newCardForm');
formDiv.appendChild(newCardForm);

const submitButtonsDiv = document.createElement('div');
submitButtonsDiv.setAttribute('class', 'submitButtonsDiv');
formDiv.appendChild(submitButtonsDiv);

const cancel = document.createElement('div');
cancel.setAttribute('class', 'check');
cancel.setAttribute('id', 'cancel');
submitButtonsDiv.appendChild(cancel);
cancel.textContent = '✖';

const check = document.createElement('div');
check.setAttribute('class', 'check');
submitButtonsDiv.appendChild(check);
check.setAttribute('id', 'check');
check.textContent = '✓';

const cardForm = document.createElement('form');
cardForm.setAttribute('class', 'cardForm');
newCardForm.appendChild(cardForm);

const cardTitleInput = document.createElement('input');
cardTitleInput.setAttribute('class', 'cardTitleInput');
cardTitleInput.classList.add('input');
cardForm.appendChild(cardTitleInput);
cardTitleInput.setAttribute('id', 'card-title');
cardTitleInput.setAttribute('type', 'text');
cardTitleInput.setAttribute('name', 'card-title');
cardTitleInput.setAttribute('placeholder', 'Title');

const cardDeck = document.createElement('select');
cardDeck.setAttribute('class', 'cardDeck');
cardDeck.setAttribute('multiple', 'multiple');
cardDeck.classList.add('input');
cardForm.appendChild(cardDeck);
cardDeck.setAttribute('id', 'cardDeck');
// cardDeck.setAttribute('type', '');
cardDeck.setAttribute('name', 'cardDeck');
// cardDeck.setAttribute('placeholder', 'Deck');

const step = document.createElement('input');
step.setAttribute('class', 'step');
step.classList.add('input');
cardForm.appendChild(step);
step.setAttribute('id', 'step');
step.setAttribute('type', 'text');
step.setAttribute('name', 'step');
step.setAttribute('placeholder', '+ step');

const date = document.createElement('input');
date.setAttribute('class', 'date');
date.classList.add('input');
cardForm.appendChild(date);
// const theDate = new Date();
// console.log('the date is' + theDate);
date.setAttribute('id', 'date');
date.setAttribute('type', 'date');
date.setAttribute('name', 'date');
date.setAttribute('placeholder', ``);

let currentDeck = _controlls__WEBPACK_IMPORTED_MODULE_0__.defaultDeck;
let currentDeckDiv;


const updateCurrentDeckDiv = () => {
    console.log('im updateing the current DIV')
    const theCurrentDeckName = currentDeck.deckName;
    console.log('theCurrentDeckName is + ' + theCurrentDeckName);
    const deckDivs = document.getElementsByClassName(theCurrentDeckName);
    currentDeckDiv = deckDivs[0];
    // console.log(deckDivs);
    // Array.from(deckDivs).forEach(deckDiv => {
    //     console.log('the deckTitleis '+ deckTitleDiv);
    //     if(deckDiv.firstElementChild.textContent === theCurrentDeckName){
    //         currentDeckDiv = deckDiv;
    //     }
    // })
}


const styleCurrent = () => {
    currentDeckDiv.classList.add('selectedDeck');
    
}

const removeSelectedStyle = () => {
    currentDeckDiv.classList.remove('selectedDeck');
}

const updateCurrentDeck = (e) => {
    removeSelectedStyle();
    console.log('im UPDATInG!');
    console.log(e.target);
    const theDeckName = (e.target.textContent);
    currentDeck = _controlls__WEBPACK_IMPORTED_MODULE_0__.getDeck(theDeckName);
    console.log('gonna update current deck div');
    updateCurrentDeckDiv();
    console.log('gonna style current decDiv ' + currentDeckDiv);
    styleCurrent();
    populateCard();
}
const firstDrawDecks = (arrayOfDecks) => {
    console.log('running drawDecks')
    console.log(_controlls__WEBPACK_IMPORTED_MODULE_0__.deckArray[1]);
    arrayOfDecks.forEach(aDeck => {
        if((arrayOfDecks.indexOf(aDeck)) !== 0){
            const deckDiv = document.createElement('div');
            deckDiv.setAttribute('class', 'deck');
            deckArea.appendChild(deckDiv);

            const deckTitleDiv = document.createElement('div');
            deckTitleDiv.setAttribute('id', 'deckTitle');
            deckDiv.appendChild(deckTitleDiv);
            deckTitleDiv.textContent = aDeck.deckName;

            deckDiv.classList.add(deckTitleDiv.textContent);

            deckDiv.addEventListener('click', updateCurrentDeck);
            deckTitleDiv.addEventListener('click', updateCurrentDeck);
        }
        });
    updateCurrentDeckDiv();
    console.log(currentDeckDiv);

}

const drawDecks = (arrayOfDecks) => {
    console.log('running drawDecks')
    console.log(_controlls__WEBPACK_IMPORTED_MODULE_0__.deckArray[1]);
    arrayOfDecks.forEach(aDeck => {
        if((arrayOfDecks.indexOf(aDeck)) !== 0){
            const deckDiv = document.createElement('div');
            deckDiv.setAttribute('class', 'deck');
            deckArea.appendChild(deckDiv);

            const deckTitleDiv = document.createElement('div');
            deckTitleDiv.setAttribute('id', 'deckTitle');
            deckDiv.appendChild(deckTitleDiv);
            deckTitleDiv.textContent = aDeck.deckName;

            deckDiv.classList.add(deckTitleDiv.textContent);

            // const editDeck = document.createElement('div');
            // editDeck.setAttribute('id', 'editDeck')
            // deckDiv.appendChild(editDeck)
            // editDeck.textContent = 'Edit';

            deckDiv.addEventListener('click', updateCurrentDeck);
            deckTitleDiv.addEventListener('click', updateCurrentDeck);
            // editDeck.addEventListener('click', showForm);
        }
        });
    updateCurrentDeckDiv();
    styleCurrent();
    console.log(currentDeckDiv);

}

const drawAllCardsStack = (aDeck) => {
    const cardDiv = document.createElement('div');
    cardDiv.setAttribute('id', 'cardBig');
    cardDock.appendChild(cardDiv);
    console.log(aDeck.cardsArray[aDeck.bookmark]);
    const thisBookmark = aDeck.bookmark;
    const theCard = aDeck.cardsArray[thisBookmark].cardName;

    const cardTitleDiv = document.createElement('div');
    cardTitleDiv.setAttribute('id', 'cardTitle');
    cardDiv.appendChild(cardTitleDiv);
    cardTitleDiv.textContent = theCard.CardName;
}

const drawBackgroundCards = (num) => {
    for(let i = 0; i<num; i++ ){
    const fakeCard = document.createElement('div');
    fakeCard.setAttribute('class', 'cardBig');
    fakeCard.classList.add(`stack${i}`);
    cardArea.appendChild(fakeCard);
    }
}

const saveTitle = (e) => {
    console.log('saving change to title');
    const text = e.target.textContent;
    console.log(text);
    console.log(currentDeck.bookmark);
    console.log(currentDeck.cardsArray[currentDeck.bookmark]);
    // currentDeck.cardsArray[currentDeck.bookmark] = text;
    const theCard = _controlls__WEBPACK_IMPORTED_MODULE_0__.getCard(currentDeck.cardsArray[currentDeck.bookmark]);
    console.log(theCard);
    theCard.cardName = text;
    currentDeck.cardsArray[currentDeck.bookmark] = text;
    console.log(theCard.cardName);
}

const drawTitleDiv = () => {
    const cardTitleDiv = document.createElement('div');
    cardTitleDiv.setAttribute('id', 'cardTitle');
    cardTitleDiv.setAttribute('contenteditable', 'true');
    cardTitleDiv.addEventListener('input', saveTitle);
    return cardTitleDiv;
}

const drawDateDiv = () => {
    const cardDateDiv = document.createElement('div');
    cardDateDiv.setAttribute('id', 'cardDate');
    return cardDateDiv;
}

const saveStep = (e) => {
    console.log('saving change to text');
    const text = e.target.textContent;
    console.log(text);
    const theCard = _controlls__WEBPACK_IMPORTED_MODULE_0__.getCard(currentDeck.cardsArray[currentDeck.bookmark]);
    theCard.cardSteps[0] = text;
}

const drawStepsDiv = () => {
    const cardStepsDiv = document.createElement('ul');
    cardStepsDiv.setAttribute('id', 'cardSteps');
    cardStepsDiv.setAttribute('contenteditable', 'true');
    cardStepsDiv.addEventListener('input', saveStep);
    return cardStepsDiv;
}

const drawTopCard = () => {
    const cardDiv = document.createElement('div');
    cardDiv.setAttribute('id', 'topCard');
    cardDiv.setAttribute('class', 'cardBig');
    cardArea.appendChild(cardDiv);
    const cardTitleDiv = drawTitleDiv();
    cardDiv.appendChild(cardTitleDiv);
    const cardDateDiv = drawDateDiv();
    cardDiv.appendChild(cardDateDiv);
    const cardStepsDiv = drawStepsDiv();
    cardDiv.appendChild(cardStepsDiv);
    return cardDiv;
}

const getBookmarkedCard = (aDeck) => {
    const thisBookmark = aDeck.bookmark;
    const thisCardName = aDeck.cardsArray[thisBookmark];
    console.log(thisCardName);
    const aCard = _controlls__WEBPACK_IMPORTED_MODULE_0__.getCard(thisCardName);
    console.log(aCard);
    return aCard;
}

const eraseSteps = () => {
    const stepsDiv = document.getElementById('cardSteps');
    const steps = stepsDiv.children;
    Array.from(steps).forEach(stepElement => {
        stepElement.remove();
    })
    
}

const populateCard = () => {
    eraseSteps();
    const theCard = getBookmarkedCard(currentDeck);
    console.log('puopulating with: ' + theCard);
    const cardTitleDiv = document.getElementById('cardTitle');
    if(theCard !== undefined){
        cardTitleDiv.textContent = theCard.cardName;
    }
    else {
        cardTitleDiv.textContent = '';
    }
    const cardDateDiv = document.getElementById('cardDate');
    if(theCard !== undefined){
        cardDateDiv.textContent = `Due date: ${theCard.cardDate}`;
    }
    else {
        cardDateDiv.textContent = '';
    }

    const cardStepsDiv = document.getElementById('cardSteps');
    console.log(cardStepsDiv);
    console.log(typeof cardStepsDiv);
    if(theCard !== undefined){
        theCard.cardSteps.forEach(stepString => {
            const listItem = document.createElement('li');
            listItem.textContent = `${stepString}`
            console.log(cardStepsDiv);
            console.log(typeof cardStepsDiv);
            cardStepsDiv.appendChild(listItem);
        })
        // cardStepsDiv.textContent = `${theCard.cardSteps}`;
    }
    else {
        cardStepsDiv.textContent = '';
    }
    
}

const drawCardStack = (aDeck) => {
    console.log(aDeck);
    drawBackgroundCards(2);
    drawTopCard();
    populateCard();    
}

const advanceBookmark = () => {
    console.log('running advance bookmark')
    currentDeck.bookmark++;
    if(currentDeck.cardsArray[currentDeck.bookmark] !== undefined){
        populateCard();
    }
    else{
        currentDeck.bookmark--;
        populateCard();
    }
}

const previousBookmark = () => {
    console.log('running previous bookmark')
    currentDeck.bookmark--;
    if(currentDeck.cardsArray[currentDeck.bookmark] !== undefined){
        populateCard();
    }
    else{
        currentDeck.bookmark++;
        populateCard();
    }
    
}

const addEventListeners = (elementName, aFunction) =>{
    const element = document.getElementById(`${elementName}`);
    console.log(element);
    console.log(aFunction);
    element.addEventListener('click', aFunction);
}

const addForwardBackwardListeners = () => {
    addEventListeners('forwardButton', advanceBookmark);
    addEventListeners('backwardButton', previousBookmark);
}

const eraseTopCard = () => {
    const oldCard = document.getElementById('topCard');
    oldCard.remove();
    drawTopCard();
}

const eraseDecks = () => {
    const oldDecks = document.getElementsByClassName('deck');
    Array.from(oldDecks).forEach(deckElement => {
        deckElement.remove();
    })
}
const createAndRenderDeck = (name) => {
    _controlls__WEBPACK_IMPORTED_MODULE_0__.createDeck(name);
    eraseDecks();
    drawDecks(_controlls__WEBPACK_IMPORTED_MODULE_0__.deckArray);
}


const createAndRenderCard = (name) => {
    _controlls__WEBPACK_IMPORTED_MODULE_0__.createCard(name);
    populateCard();
}

let formType = 'deck';

const resetDeckOptions = () => {
    const deckSelector = document.getElementById('cardDeck');
    Array.from(deckSelector).forEach(deckElement => {
        deckElement.remove();
    })
}
const setDeckOptions = () => {
    resetDeckOptions();
    _controlls__WEBPACK_IMPORTED_MODULE_0__.deckArray.forEach(deckElement => {
        const deckOption = document.createElement('option');
        cardDeck.appendChild(deckOption);
        deckOption.value = deckElement.deckName;
        deckOption.textContent = deckElement.deckName;
    })
}

const resetFormDeck = () => {
    const aDiv = document.getElementById('card-title');
    aDiv.value = '';
}

const resetFormCard = () => {
    let aDiv = document.getElementById('card-title');
    aDiv.value = '';
    aDiv = document.getElementById('step');
    aDiv.value = '';
    aDiv.cardDate = document.getElementById('date').value;
    aDiv.value = '';
}

const showForm = () => {
    console.log('showing form!');
    const form = document.getElementById('overLayHolder');
    form.style.visibility = 'visible';
}

const hideForm = () => {
    console.log('hiding form!');
    const form = document.getElementById('overLayHolder');
    form.style.visibility = 'hidden';
    let aDiv = document.getElementById('step');
    aDiv.style.visibility = 'hidden';
    aDiv = document.getElementById('date');
    aDiv.style.visibility = 'hidden';
    aDiv = document.getElementById('cardDeck');
    aDiv.style.visibility = 'hidden';
}

const showDeckForm = () => {
    showForm();
    formType = 'deck';
    let aDiv = document.getElementById('step');
    aDiv.style.visibility = 'hidden';
    aDiv = document.getElementById('date');
    aDiv.style.visibility = 'hidden';
    aDiv = document.getElementById('cardDeck');
    aDiv.style.visibility = 'hidden';
    aDiv = document.getElementById('card-title');
    aDiv.style.gridRow = '3/4';
    
}

const showCardForm = () => {
    setDeckOptions();
    showForm();
    formType = 'card';
    let aDiv = document.getElementById('step');
    aDiv.style.visibility = 'visible';
    aDiv = document.getElementById('date');
    aDiv.style.visibility = 'visible';
    aDiv = document.getElementById('cardDeck');
    aDiv.style.visibility = 'visible';
    aDiv = document.getElementById('card-title');
    aDiv.style.gridRow = '1/2';
}

const saveDeck = () => {
    const aDiv = document.getElementById('card-title').value;
    createAndRenderDeck(aDiv);
    resetFormDeck();
    hideForm();
}

const saveCard = () => {
    let aDiv = document.getElementById('card-title').value;
    createAndRenderCard(aDiv);
    aDiv = _controlls__WEBPACK_IMPORTED_MODULE_0__.getCard(aDiv);
    aDiv.cardSteps.push(document.getElementById('step').value);
    aDiv.cardDate = document.getElementById('date').value;
    const deckList = document.getElementById('cardDeck');
    const collection = deckList.selectedOptions;
    Array.from(collection).forEach(option => {
            aDiv.cardDecks.push(option.value);  
    })
    aDiv.cardDecks.forEach(deckNameString => {
        const aDeck = _controlls__WEBPACK_IMPORTED_MODULE_0__.getDeck(deckNameString)
        _controlls__WEBPACK_IMPORTED_MODULE_0__.addCardtoDeck(aDiv, aDeck);
    })
    resetFormCard();
    hideForm();
}



const saveForm = () => {
    console.log('save type is: '+ formType);
    if(formType ==='deck'){
        console.log('saving deck!')
        saveDeck();
    }
    else if(formType === 'card'){
        console.log('saving card!')
        saveCard();
    }
}


addEventListeners('addDeckButton', showDeckForm);
addEventListeners('addCardButton', showCardForm);
addEventListeners('cancel', hideForm);
addEventListeners('check', saveForm);


drawCardStack(_controlls__WEBPACK_IMPORTED_MODULE_0__.defaultDeck);
firstDrawDecks(_controlls__WEBPACK_IMPORTED_MODULE_0__.deckArray);
addForwardBackwardListeners();
styleCurrent();





/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVUsVUFBVSxPQUFPLEtBQUssWUFBWSxRQUFRLFFBQVEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsUUFBUSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssTUFBTSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSx3R0FBd0csTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxzQkFBc0Isd0VBQXdFLElBQUksSUFBSSxJQUFJLElBQUksbUNBQW1DLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFN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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDWHNCO0FBQzJCO0FBQ2hEO0FBQ0s7QUFDQTs7OztBQUkxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsK0NBQWtCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLHNCQUFzQiwrQ0FBa0I7QUFDeEMsUUFBUSxxREFBd0I7QUFDaEMsS0FBSztBQUNMO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxjQUFjLG1EQUFXO0FBQ3pCLGVBQWUsaURBQVM7QUFDeEI7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcC10by1kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b3AtdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b3AtdG8tZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvcC10by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvcC10by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b3AtdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b3AtdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b3AtdG8tZG8vLi9zcmMvY2FyZC5qcyIsIndlYnBhY2s6Ly90b3AtdG8tZG8vLi9zcmMvY29udHJvbGxzLmpzIiwid2VicGFjazovL3RvcC10by1kby8uL3NyYy9kZWNrLmpzIiwid2VicGFjazovL3RvcC10by1kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJhbGV3YXk6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9zd2FsZDp3Z2h0QDIwMDszMDA7NDAwOzUwMDs2MDA7NzAwJmZhbWlseT1SYWxld2F5Oml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Db3VyaWVyK1ByaW1lOml0YWwsd2dodEAwLDQwMDswLDcwMDsxLDQwMDsxLDcwMCZmYW1pbHk9T3N3YWxkOndnaHRAMjAwOzMwMDs0MDA7NTAwOzYwMDs3MDAmZmFtaWx5PVJhbGV3YXk6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qICp7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufSAqL1xcbmJvZHkge1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIFxcbiAgICAvKiBoZWlnaHQ6IDEwMHZoOyAqL1xcbiAgICBcXG59XFxuXFxuZGl2IHtcXG4gICAgLyogYm9yZGVyLXRvcDogMnB4IHNvbGlkIHdoaXRlOyAqL1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuXFxufVxcbiNjb250ZW50IHtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYzLCAxMzUsIDE1Mik7XFxuICAgIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA0cHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIG1hcmdpbjogMjBweCAwO1xcbiAgICB3aWR0aDogNDgwcHg7XFxuICAgIGhlaWdodDogMTAwdmg7ICBcXG59XFxuXFxuI2hlYWRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwcHg7XFxufVxcblxcbiNkZWNrRG9ja3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMjAwcHg7XFxufVxcblxcbi5kZWNrQXJlYXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA3cHg7XFxufVxcblxcbiN0YWJsZXtcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4jbG9nbywgLnRpdGxle1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi50aXRsZXtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuXFxuI2NhcmRBcmVhe1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDYwcHggMWZyIDYwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmRlY2t7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBoZWlnaHQ6IDkwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIC8qIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMCA3cHggOXB4IC03cHg7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoNTMsIDgyLCA5NCwgMC4zKSAxcHggN3B4IDdweCAxcHg7ICovXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1lbnV7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcbiAgICBnYXA6IDRweDtcXG59XFxuXFxuI2RlY2tUaXRsZSwgI2NhcmRUaXRsZSwgI2NhcmREYXRlLCAjY2FyZFN0ZXBze1xcbiAgICBtYXJnaW4tdG9wOiA4cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgY29sb3I6IHJnYig2MywgMTM1LCAxNTIpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cXG4uc2VsZWN0ZWREZWNrIHtcXG4gICAgYm94LXNoYWRvdzogcmdiKDEwMiwgMjIwLCAyNDEpIDAgMCAzcHggMnB4O1xcbiAgICAvKiBib3gtc2hhZG93OiByZ2JhKDUzLCA4MiwgOTQsIDAuMykgMXB4IDlweCA5cHggMXB4OyAqL1xcbn1cXG5cXG4jYWRkQ2FyZEJ1dHRvbiwgI2FkZERlY2tCdXR0b257XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jYWRkQ2FyZEJ1dHRvbjpob3ZlciwgI2FkZERlY2tCdXR0b246aG92ZXIsIC5uZXh0QnV0dG9uOmhvdmVye1xcbiAgICAvKiB0ZXh0LXNoYWRvdzogIDAgMCAzcHggMnB4LCByZ2IoMTAyLCAxNzMsIDI0MSk7ICovXFxuICAgIHRleHQtc2hhZG93OiAtMXB4IDFweCAycHggcmdiKDEwMiwgMjIwLCAyNDEpLFxcblxcdFxcdFxcdFxcdCAgMXB4IDFweCAycHggcmdiKDEwMiwgMjIwLCAyNDEpLFxcblxcdFxcdFxcdFxcdCAgMXB4IC0xcHggMCByZ2IoMTAyLCAyMjAsIDI0MSksXFxuXFx0XFx0XFx0XFx0ICAtMXB4IC0xcHggMCByZ2IoMTAyLCAyMjAsIDI0MSk7XFxuICAgIFxcbn1cXG4ubmV4dEJ1dHRvbntcXG4gICAganVzdGlmeS1zZWxmOiByaWdodDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogcmdiKDgwLCAxNjMsIDE4Mik7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogNzJweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNmb3J3YXJkQnV0dG9ue1xcbiAgICBqdXN0aWZ5LXNlbGY6IGxlZnQ7XFxuICAgIGdyaWQtY29sdW1uOiAzLzQ7XFxufVxcblxcbiNiYWNrd2FyZEJ1dHRvbntcXG4gICAganVzdGlmeS1zZWxmOiByaWdodDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG59XFxuXFxuXFxuLmNhcmRCaWd7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMjQwcHg7XFxuICAgIGhlaWdodDogMzYwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDUzLCA4MiwgOTQsIDAuMykgMXB4IDlweCA5cHggMXB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgei1pbmRleDogMTtcXG5cXG59XFxuXFxuI3RvcENhcmR7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5zdGFjazB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNnB4O1xcbiAgICBsZWZ0OiA2M3B4O1xcbiAgICAvKiB6LWluZGV4OiAtMTsgKi9cXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMmRlZyk7XFxufVxcblxcbi5zdGFjazF7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAzcHg7XFxuICAgIGxlZnQ6IDU4cHg7XFxuICAgIC8qIHotaW5kZXg6IC0yOyAqL1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxZGVnKTtcXG59XFxuXFxuLnN0YWNrMntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDRweDtcXG4gICAgbGVmdDogMTIwcHg7XFxuICAgIC8qIHotaW5kZXg6IC0zOyAqL1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg2ZGVnKTtcXG59XFxuXFxuLmVkaXRTaXple1xcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTgwcHg7ICovXFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiA0NTBweDtcXG4gICAgei1pbmRleDogMztcXG59XFxuXFxuLm92ZXJMYXlIb2xkZXJ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoOyBcXG4gICAgXFxufVxcbi5vdmVybGF5e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNywgMTA3LCAxMDcpO1xcbiAgICBvcGFjaXR5OiA2MCU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgei1pbmRleDogMjtcXG4gICAgcGFkZGluZzogMjBweDsgXFxufVxcblxcbi5mb3JtRGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XFxuICAgIGdhcDogMjBweDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDYwMHB4O1xcbiAgICB6LWluZGV4OiAzO1xcbn1cXG5cXG4uc3VibWl0QnV0dG9uc0RpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZ2FwOiAxNnB4O1xcbiAgICBoZWlnaHQ6IDQ0cHg7XFxufVxcblxcbi5jYXJkRm9ybXtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxNnB4O1xcbiAgICB3aWR0aDozMDBweDtcXG4gICAgaGVpZ2h0OiA0MTBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNywgMWZyKTtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLmlucHV0LCAuY2hlY2t7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvNTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQyLCAyNDIsIDI0Mik7XFxuICAgIGNvbG9yOiByZ2IoODAsIDE2MywgMTgyKTtcXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5pbnB1dDpob3ZlcntcXG4gICAgYm94LXNoYWRvdzogcmdiKDEwMiwgMTczLCAyNDEpIDAgMCAzcHggMnB4O1xcbiAgICBib3gtc2hhZG93OiByZ2IoMTAyLCAyMjAsIDI0MSkgMCAwIDNweCAycHg7XFxufVxcblxcbiNjYXJkLXRpdGxle1xcbiAgIC8qIGdyaWQtcm93OiAzLzQ7ICovXFxufVxcblxcbiNkYXRle1xcbiAgICBncmlkLXJvdzogNy84O1xcbn1cXG5cXG4uY2hlY2t7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgei1pbmRleDogMztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY2hlY2s6aG92ZXJ7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTs7R0FFRztBQUNIO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7O0lBRWxCLG1CQUFtQjs7QUFFdkI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsWUFBWTs7QUFFaEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUNBQW1DO0lBQ25DLHdFQUF3RTtJQUN4RSxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLGFBQWE7SUFDYixjQUFjO0lBQ2QsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFFBQVE7QUFDWjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RC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QTBDO0lBQzFDLDBDQUEwQztBQUM5Qzs7QUFFQTtHQUNHLG1CQUFtQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SYWxld2F5Oml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXAnKTsgXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3N3YWxkOndnaHRAMjAwOzMwMDs0MDA7NTAwOzYwMDs3MDAmZmFtaWx5PVJhbGV3YXk6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCcpO1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNvdXJpZXIrUHJpbWU6aXRhbCx3Z2h0QDAsNDAwOzAsNzAwOzEsNDAwOzEsNzAwJmZhbWlseT1Pc3dhbGQ6d2dodEAyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMCZmYW1pbHk9UmFsZXdheTppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZGlzcGxheT1zd2FwJyk7XFxuLyogKntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59ICovXFxuYm9keSB7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgXFxuICAgIC8qIGhlaWdodDogMTAwdmg7ICovXFxuICAgIFxcbn1cXG5cXG5kaXYge1xcbiAgICAvKiBib3JkZXItdG9wOiAycHggc29saWQgd2hpdGU7ICovXFxuICAgIHBhZGRpbmc6IDRweDtcXG5cXG59XFxuI2NvbnRlbnQge1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjMsIDEzNSwgMTUyKTtcXG4gICAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDRweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgbWFyZ2luOiAyMHB4IDA7XFxuICAgIHdpZHRoOiA0ODBweDtcXG4gICAgaGVpZ2h0OiAxMDB2aDsgIFxcbn1cXG5cXG4jaGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuI2RlY2tEb2Nre1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG59XFxuXFxuLmRlY2tBcmVhe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDdweDtcXG59XFxuXFxuI3RhYmxle1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbiNsb2dvLCAudGl0bGV7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnRpdGxle1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG5cXG4jY2FyZEFyZWF7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjBweCAxZnIgNjBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uZGVja3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGhlaWdodDogOTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgLyogYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwIDdweCA5cHggLTdweDtcXG4gICAgYm94LXNoYWRvdzogcmdiYSg1MywgODIsIDk0LCAwLjMpIDFweCA3cHggN3B4IDFweDsgKi9cXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWVudXtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxuICAgIGdhcDogNHB4O1xcbn1cXG5cXG4jZGVja1RpdGxlLCAjY2FyZFRpdGxlLCAjY2FyZERhdGUsICNjYXJkU3RlcHN7XFxuICAgIG1hcmdpbi10b3A6IDhweDtcXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBjb2xvcjogcmdiKDYzLCAxMzUsIDE1Mik7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbi5zZWxlY3RlZERlY2sge1xcbiAgICBib3gtc2hhZG93OiByZ2IoMTAyLCAyMjAsIDI0MSkgMCAwIDNweCAycHg7XFxuICAgIC8qIGJveC1zaGFkb3c6IHJnYmEoNTMsIDgyLCA5NCwgMC4zKSAxcHggOXB4IDlweCAxcHg7ICovXFxufVxcblxcbiNhZGRDYXJkQnV0dG9uLCAjYWRkRGVja0J1dHRvbntcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNhZGRDYXJkQnV0dG9uOmhvdmVyLCAjYWRkRGVja0J1dHRvbjpob3ZlciwgLm5leHRCdXR0b246aG92ZXJ7XFxuICAgIC8qIHRleHQtc2hhZG93OiAgMCAwIDNweCAycHgsIHJnYigxMDIsIDE3MywgMjQxKTsgKi9cXG4gICAgdGV4dC1zaGFkb3c6IC0xcHggMXB4IDJweCByZ2IoMTAyLCAyMjAsIDI0MSksXFxuXFx0XFx0XFx0XFx0ICAxcHggMXB4IDJweCByZ2IoMTAyLCAyMjAsIDI0MSksXFxuXFx0XFx0XFx0XFx0ICAxcHggLTFweCAwIHJnYigxMDIsIDIyMCwgMjQxKSxcXG5cXHRcXHRcXHRcXHQgIC0xcHggLTFweCAwIHJnYigxMDIsIDIyMCwgMjQxKTtcXG4gICAgXFxufVxcbi5uZXh0QnV0dG9ue1xcbiAgICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiByZ2IoODAsIDE2MywgMTgyKTtcXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiA3MnB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2ZvcndhcmRCdXR0b257XFxuICAgIGp1c3RpZnktc2VsZjogbGVmdDtcXG4gICAgZ3JpZC1jb2x1bW46IDMvNDtcXG59XFxuXFxuI2JhY2t3YXJkQnV0dG9ue1xcbiAgICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogMS8yO1xcbn1cXG5cXG5cXG4uY2FyZEJpZ3tcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAyNDBweDtcXG4gICAgaGVpZ2h0OiAzNjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoNTMsIDgyLCA5NCwgMC4zKSAxcHggOXB4IDlweCAxcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB6LWluZGV4OiAxO1xcblxcbn1cXG5cXG4jdG9wQ2FyZHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnN0YWNrMHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA2cHg7XFxuICAgIGxlZnQ6IDYzcHg7XFxuICAgIC8qIHotaW5kZXg6IC0xOyAqL1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyZGVnKTtcXG59XFxuXFxuLnN0YWNrMXtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDNweDtcXG4gICAgbGVmdDogNThweDtcXG4gICAgLyogei1pbmRleDogLTI7ICovXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDFkZWcpO1xcbn1cXG5cXG4uc3RhY2sye1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNHB4O1xcbiAgICBsZWZ0OiAxMjBweDtcXG4gICAgLyogei1pbmRleDogLTM7ICovXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDZkZWcpO1xcbn1cXG5cXG4uZWRpdFNpemV7XFxuICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxODBweDsgKi9cXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDQ1MHB4O1xcbiAgICB6LWluZGV4OiAzO1xcbn1cXG5cXG4ub3ZlckxheUhvbGRlcntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7IFxcbiAgICBcXG59XFxuLm92ZXJsYXl7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM3LCAxMDcsIDEwNyk7XFxuICAgIG9wYWNpdHk6IDYwJTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBwYWRkaW5nOiAyMHB4OyBcXG59XFxuXFxuLmZvcm1EaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogNjAwcHg7XFxuICAgIHotaW5kZXg6IDM7XFxufVxcblxcbi5zdWJtaXRCdXR0b25zRGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBnYXA6IDE2cHg7XFxuICAgIGhlaWdodDogNDRweDtcXG59XFxuXFxuLmNhcmRGb3Jte1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDE2cHg7XFxuICAgIHdpZHRoOjMwMHB4O1xcbiAgICBoZWlnaHQ6IDQxMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg3LCAxZnIpO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4uaW5wdXQsIC5jaGVja3tcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBncmlkLWNvbHVtbjogMS81O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDIsIDI0MiwgMjQyKTtcXG4gICAgY29sb3I6IHJnYig4MCwgMTYzLCAxODIpO1xcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmlucHV0OmhvdmVye1xcbiAgICBib3gtc2hhZG93OiByZ2IoMTAyLCAxNzMsIDI0MSkgMCAwIDNweCAycHg7XFxuICAgIGJveC1zaGFkb3c6IHJnYigxMDIsIDIyMCwgMjQxKSAwIDAgM3B4IDJweDtcXG59XFxuXFxuI2NhcmQtdGl0bGV7XFxuICAgLyogZ3JpZC1yb3c6IDMvNDsgKi9cXG59XFxuXFxuI2RhdGV7XFxuICAgIGdyaWQtcm93OiA3Lzg7XFxufVxcblxcbi5jaGVja3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICB6LWluZGV4OiAzO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jaGVjazpob3ZlcntcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBjYXJkID0gKG5hbWUpID0+IHtcbiAgY29uc3QgY2FyZE5hbWUgPSBuYW1lO1xuICBjb25zdCBjYXJkU3RlcHMgPSBbXTtcbiAgY29uc3QgY2FyZERhdGUgPSBcIlwiO1xuICBjb25zdCBjYXJkQ29tcGxldGVWYWx1ZSA9IDA7XG4gIGNvbnN0IGNhcmREZWNrcyA9IFtcImFsbFwiXTtcbiAgcmV0dXJuIHtcbiAgICBjYXJkTmFtZSxcbiAgICBjYXJkQ29tcGxldGVWYWx1ZSxcbiAgICBjYXJkRGF0ZSxcbiAgICBjYXJkU3RlcHMsXG4gICAgY2FyZERlY2tzLFxuICB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IGNhcmQ7XG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IGNhcmQgZnJvbSBcIi4vY2FyZFwiO1xuaW1wb3J0IGRlY2sgZnJvbSBcIi4vZGVja1wiO1xuXG5leHBvcnQgY29uc3QgYWxsID0gZGVjayhcImFsbFwiKTtcbmNvbnNvbGUubG9nKGFsbCk7XG5leHBvcnQgY29uc3QgZGVja0FycmF5ID0gW107XG5kZWNrQXJyYXkucHVzaChhbGwpO1xuZXhwb3J0IGNvbnN0IHRhYmxlID0gZGVja0FycmF5O1xuZXhwb3J0IGNvbnN0IGRlZmF1bHREZWNrID0gZGVjaygnVG8tRG8nKTtcbmV4cG9ydCBjb25zdCBkZWZhdWx0Q2FyZCA9IGNhcmQoJ0dldCBHcm9jZXJpZXMnKTtcbmV4cG9ydCBjb25zdCBkZWZhdWx0Q2FyZDIgPSBjYXJkKCdNYWlsIFRoYW5rIFlvdSBOb3RlcycpO1xuYWxsLmNhcmRzQXJyYXkucHVzaChkZWZhdWx0Q2FyZCk7XG5hbGwuY2FyZHNBcnJheS5wdXNoKGRlZmF1bHRDYXJkMik7XG5kZWZhdWx0RGVjay5jYXJkc0FycmF5LnB1c2goZGVmYXVsdENhcmQuY2FyZE5hbWUpO1xuZGVmYXVsdERlY2suY2FyZHNBcnJheS5wdXNoKGRlZmF1bHRDYXJkMi5jYXJkTmFtZSk7XG5kZWNrQXJyYXkucHVzaChkZWZhdWx0RGVjayk7XG5cblxuICAgIGNvbnN0IHZpZXdBbGwgPSAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhgQWxsIGNhcmRzIGFyZTogJHthbGx9YCk7XG4gICAgICBjb25zb2xlLmxvZyhgYWxsIGRlY2tzIGFyZTogJHt0YWJsZX1gKTtcbiAgICAgIGFsbC5jYXJkc0FycmF5LmZvckVhY2goKGNhcmRFbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBhbGwgKyAke2NhcmRFbGVtZW50fWApO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHZpZXdEZWNrID0gKG5hbWUpID0+IHtcbiAgICAgIGxldCBjdXJyZW50RGVjaztcbiAgICAgIGxldCB3YXNNYXRjaGVkID0gZmFsc2U7XG4gICAgICB0YWJsZS5mb3JFYWNoKChkZWNrRWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImluIGZvciBlYWNoXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhkZWNrRWxlbWVudCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnREZWNrKTtcbiAgICAgICAgY29uc29sZS5sb2codHlwZW9mIGN1cnJlbnREZWNrKTtcbiAgICAgICAgaWYgKGRlY2tFbGVtZW50LmRlY2tOYW1lID09PSBuYW1lKSB7XG4gICAgICAgICAgY3VycmVudERlY2sgPSBkZWNrRWxlbWVudDtcbiAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50RGVjayk7XG4gICAgICAgICAgY29uc29sZS5sb2codHlwZW9mIGN1cnJlbnREZWNrKTtcbiAgICAgICAgICB3YXNNYXRjaGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAod2FzTWF0Y2hlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgY3VycmVudERlY2sgPSBhbGw7XG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnREZWNrKTtcbiAgICAgICAgY29uc29sZS5sb2codHlwZW9mIGN1cnJlbnREZWNrKTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiBjdXJyZW50RGVjayk7XG4gICAgICBjb25zb2xlLmxvZyhgJHtjdXJyZW50RGVjay5kZWNrTmFtZX0gY29udGVudHMgYXJlOiBgKTtcbiAgICAgIGN1cnJlbnREZWNrLmNhcmRzQXJyYXkuZm9yRWFjaCgoY2FyZEVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coY2FyZEVsZW1lbnQpO1xuICAgICAgfSk7XG4gICAgICBcbiAgICB9O1xuXG4gICAgZXhwb3J0IGNvbnN0IGNyZWF0ZURlY2sgPSAobmFtZSkgPT4ge1xuICAgICAgICAvLyBjb25zdCB0aGVOYW1lID0gcHJvbXB0KCdXaGF0IGlzIHRoZSBuYW1lIG9mIHRlaCBkZWNrPycpXG4gICAgICBjb25zdCB0aGlzRGVjayA9IGRlY2sobmFtZSk7XG4gICAgICB0YWJsZS5wdXNoKHRoaXNEZWNrKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwidGhlIGRlY2sgY3JlYXRlZCBpczogXCIgKyB0aGlzRGVjayk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcIml0cyBuYW1lIGlzOiBcIiArIHRoaXNEZWNrLmRlY2tOYW1lKTtcbiAgICB9O1xuXG4gICAgZXhwb3J0IGNvbnN0IGFkZENhcmR0b0RlY2sgPSAodGhpc0NhcmQsIHRoaXNEZWNrKSA9PiB7XG4gICAgICAgIHRoaXNDYXJkLmNhcmREZWNrID0gdGhpc0RlY2suZGVja05hbWU7XG4gICAgICAgIHRoaXNEZWNrLmNhcmRzQXJyYXkucHVzaCh0aGlzQ2FyZC5jYXJkTmFtZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXNEZWNrKTtcbiAgICAgIH07XG5cbiAgICBcblxuICAgIGV4cG9ydCBjb25zdCBnZXRDYXJkID0gKG5hbWUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cobmFtZSlcbiAgICAgIGxldCB0aGVDYXJkO1xuICAgICAgYWxsLmNhcmRzQXJyYXkuZm9yRWFjaCgoY2FyZEVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coY2FyZEVsZW1lbnQuY2FyZE5hbWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhuYW1lKTtcbiAgICAgICAgaWYgKGNhcmRFbGVtZW50LmNhcmROYW1lID09PSBuYW1lKSB7XG4gICAgICAgICAgdGhlQ2FyZCA9IGNhcmRFbGVtZW50O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAvLyAgIGlmICh0aGVDYXJkID09PSB1bmRlZmluZWQpIHtcbiAgICAvLyAgICAgLy8gY29uc3QgY2FyZE5hbWUgPSBwcm9tcHQoXG4gICAgLy8gICAgIC8vICAgXCJ0aGF0IGNhcmQgZG9lcyBub3QgZXhpc3QsIHBsZWFzZSBlbnRlciBhbm90aGVyIG5hbWU6XCJcbiAgICAvLyAgICAgLy8gKTtcbiAgICAvLyAgICAgLy8gdGhlQ2FyZCA9IGdldENhcmQoY2FyZE5hbWUpO1xuICAgIC8vICAgfVxuICAgICAgcmV0dXJuIHRoZUNhcmQ7XG4gICAgfTtcblxuICAgIGV4cG9ydCBjb25zdCBnZXREZWNrID0gKG5hbWUpID0+IHtcbiAgICAgIGxldCB0aGVEZWNrO1xuICAgICAgdGFibGUuZm9yRWFjaCgoZGVja0VsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0aGUgIGRlY2sgbmFtZSBpczogXCIgKyBkZWNrRWxlbWVudC5kZWNrTmFtZSk7XG4gICAgICAgIGlmIChkZWNrRWxlbWVudC5kZWNrTmFtZSA9PT0gbmFtZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiaXQgbWF0Y2hlZCFcIik7XG4gICAgICAgICAgY29uc29sZS5sb2coZGVja0VsZW1lbnQuZGVja05hbWUsIG5hbWUpO1xuICAgICAgICAgIHRoZURlY2sgPSBkZWNrRWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcImdldHRpbmcgZGVjazogXCIgKyB0aGVEZWNrKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKHRoZURlY2sgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBkZWNrTmFtZSA9IHByb21wdChcbiAgICAgICAgICBcInRoYXQgZGVjayBkb2VzIG5vdCBleGlzdCwgcGxlYXNlIGVudGVyIGFub3RoZXIgbmFtZTpcIlxuICAgICAgICApO1xuICAgICAgICB0aGVEZWNrID0gZ2V0RGVjayhkZWNrTmFtZSk7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyh0aGVEZWNrKTtcbiAgICAgIHJldHVybiB0aGVEZWNrO1xuICAgIH07XG5cbiAgICBleHBvcnQgY29uc3QgY3JlYXRlQ2FyZCA9IChuYW1lKSA9PiB7XG4gICAgICAgIC8vIGNvbnN0IHRoZU5hbWUgPSBwcm9tcHQoJ1doYXQgaXMgdGhlIG5hbWUgb2YgdGhlIGNhcmQ/JylcbiAgICAgIGNvbnN0IG5ld0NhcmQgPSBjYXJkKG5hbWUpO1xuICAgICAgLy8gY29uc3QgbmFtZU9mRGVjayA9IHByb21wdCgnd2hhdCBkZWNrPycpO1xuICAgICAgLy8gbmV3Q2FyZC5jYXJkRGVja3MucHVzaChuYW1lT2ZEZWNrKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKG5ld0NhcmQuY2FyZERlY2tzKTtcbiAgICAgIC8vIG5ld0NhcmQuY2FyZERlY2tzLmZvckVhY2goZGVja05hbWUgPT4ge1xuICAgICAgLy8gICBpZihkZWNrTmFtZSAhPT0gJ2FsbCcpe1xuICAgICAgLy8gICBjb25zdCB0aGlzRGVjayA9IGdldERlY2soZGVja05hbWUpO1xuICAgICAgLy8gICBjb25zb2xlLmxvZygnYWRkaW5nIGh0ZSBmdWxsb3dpbmcgY2FyZCB0byB0aGUgZm9sbG93aW5nIGRlY2sgJysgbmV3Q2FyZC5jYXJkTmFtZSArIFwiIFwiICsgdGhpc0RlY2suZGVja05hbWUpO1xuICAgICAgLy8gICBhZGRDYXJkdG9EZWNrKG5ld0NhcmQsIHRoaXNEZWNrKVxuICAgICAgLy8gICB9XG4gICAgICAgIFxuICAgICAgLy8gfSlcbiAgICBhbGwuY2FyZHNBcnJheS5wdXNoKG5ld0NhcmQpO1xuICAgIGNvbnNvbGUubG9nKGFsbCk7XG4gICAgfTtcblxuICAgIFxuXG4gICAgY29uc3QgZGVsZXRlQ2FyZEZyb21EZWNrID0gKHRoaXNDYXJkLCB0aGlzRGVjaykgPT4ge1xuICAgICAgY29uc3QgaW5kZXggPSB0aGlzRGVjay5jYXJkc0FycmF5LmluZGV4T2YodGhpc0NhcmQuY2FyZE5hbWUpO1xuICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgdGhpc0RlY2suY2FyZHNBcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXNEZWNrO1xuICAgIH07XG5cbiAgICBjb25zdCBkZWxldGVDYXJkID0gKHRoaXNDYXJkKSA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IGFsbC5jYXJkc0FycmF5LmluZGV4T2YodGhpc0NhcmQpO1xuICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgYWxsLmNhcmRzQXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhbGw7XG4gICAgfTtcblxuICAgIGNvbnN0IGRlbGV0ZURlY2sgPSAoYURlY2tOYW1lKSA9PiB7XG4gICAgICBjb25zdCBkZWNrT2JqID0gZ2V0RGVjayhhRGVja05hbWUpO1xuICAgICAgY29uc3QgaW5kZXggPSB0YWJsZS5pbmRleE9mKGRlY2tPYmopO1xuICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgdGFibGUuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0YWJsZTtcbiAgICB9O1xuXG4gICAgY29uc3QgbW92ZUNhcmQgPSAodGhlQ2FyZE5hbWUsIGRlY2tPbmVOYW1lLCBkZWNrVHdvTmFtZSkgPT4ge1xuICAgICAgY29uc3QgdGhpc0NhcmQgPSBnZXRDYXJkKHRoZUNhcmROYW1lKTtcbiAgICAgIGNvbnN0IGRlY2tPbmUgPSBnZXREZWNrKGRlY2tPbmVOYW1lKTtcbiAgICAgIGNvbnN0IGRlY2tUd28gPSBnZXREZWNrKGRlY2tUd29OYW1lKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXNDYXJkLCBkZWNrT25lLCBkZWNrVHdvKTtcbiAgICAgIGRlbGV0ZUNhcmRGcm9tRGVjayh0aGlzQ2FyZCwgZGVja09uZSk7XG4gICAgICBhZGRDYXJkdG9EZWNrKHRoaXNDYXJkLCBkZWNrVHdvKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgdmlld0NhcmQgPSAodGhlQ2FyZE5hbWUpID0+IHtcbiAgICAgIGNvbnN0IHRoaXNDYXJkID0gZ2V0Q2FyZCh0aGVDYXJkTmFtZSk7XG4gICAgICBmb3IgKGNvbnN0IHByb3AgaW4gdGhpc0NhcmQpIHtcbiAgICAgICAgY29uc29sZS5sb2coYG9iai4ke3Byb3B9ID0gJHt0aGlzQ2FyZFtwcm9wXX1gKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0RGF0ZSA9ICh0aGVDYXJkTmFtZSkgPT4ge1xuICAgICAgY29uc3QgdGhpc0NhcmQgPSBnZXRDYXJkKHRoZUNhcmROYW1lKTtcbiAgICAgIGNvbnN0IGFEYXRlID0gcHJvbXB0KFwiZW50ZXIgdGhlIGR1ZSBkYXRlIGluIHRoZSBmb3JtIG9mIE1NLkRELllZOlwiKTtcbiAgICAgIHRoaXNDYXJkLmNhcmREYXRlID0gbmV3IERhdGUoYURhdGUpO1xuICAgIH07XG5cbiAgICBjb25zdCBhZGRTdGVwID0gKHRoZUNhcmROYW1lKSA9PiB7XG4gICAgICBjb25zdCB0aGlzQ2FyZCA9IGdldENhcmQodGhlQ2FyZE5hbWUpO1xuICAgICAgY29uc3QgaSA9IHRoaXNDYXJkLmNhcmRTdGVwcy5sZW5ndGg7XG4gICAgICB0aGlzQ2FyZC5jYXJkU3RlcHNbaV0gPSBwcm9tcHQoXCJlbnRlciB5b3VyIHN0ZXA6XCIpO1xuICAgIH07XG5cbiAgICBjb25zdCBzZXRTdGVwID0gKHRoZUNhcmROYW1lKSA9PiB7XG4gICAgICBjb25zdCB0aGlzQ2FyZCA9IGdldENhcmQodGhlQ2FyZE5hbWUpO1xuICAgICAgY29uc3QgaSA9IHByb21wdChcIndoYXQgaW5kZXg/XCIpO1xuICAgICAgdGhpc0NhcmQuY2FyZFN0ZXBzW2ldID0gcHJvbXB0KFwiZW50ZXIgeW91ciBzdGVwOlwiKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0Q29tcGxldGUgPSAodGhlQ2FyZE5hbWUpID0+IHtcbiAgICAgIGNvbnN0IHRoaXNDYXJkID0gZ2V0Q2FyZCh0aGVDYXJkTmFtZSk7XG4gICAgICB0aGlzQ2FyZC5jYXJkQ29tcGxldGVWYWx1ZSA9IE51bWJlcihcbiAgICAgICAgcHJvbXB0KFxuICAgICAgICAgIFwiaXMgeW91ciB0YXNrIGNvbXBsZXRlPyBJZiBzbywgZW50ZXIgYSAnMScgb3RoZXJ3aXNlIGVuZXRlciAnMCcuXCJcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgLy8gcmV0dXJuIHtcbiAgICAvLyAgIHZpZXdBbGwsXG4gICAgLy8gICB2aWV3Q2FyZCxcbiAgICAvLyAgIHZpZXdEZWNrLFxuICAgIC8vICAgY3JlYXRlQ2FyZCxcbiAgICAvLyAgIGNyZWF0ZURlY2ssXG4gICAgLy8gICBnZXRDYXJkLFxuICAgIC8vICAgZ2V0RGVjayxcbiAgICAvLyAgIGFkZENhcmR0b0RlY2ssXG4gICAgLy8gICBkZWxldGVDYXJkRnJvbURlY2ssXG4gICAgLy8gICBkZWxldGVDYXJkLFxuICAgIC8vICAgZGVsZXRlRGVjayxcbiAgICAvLyAgIG1vdmVDYXJkLFxuICAgIC8vICAgc2V0RGF0ZSxcbiAgICAvLyAgIGFkZFN0ZXAsXG4gICAgLy8gICBzZXRDb21wbGV0ZSxcbiAgICAvLyAgIHNldFN0ZXAsXG4gICAgLy8gfTtcblxuXG4iLCJjb25zdCBkZWNrID0gKG5hbWUpID0+IHtcbiAgY29uc3QgZGVja05hbWUgPSBuYW1lO1xuICBjb25zdCBjYXJkc0FycmF5ID0gW107XG4gIGNvbnN0IGJvb2ttYXJrID0gMDtcbiAgcmV0dXJuIHtcbiAgICBkZWNrTmFtZSxcbiAgICBjYXJkc0FycmF5LFxuICAgIGJvb2ttYXJrLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVjaztcbiIsImltcG9ydCAqIGFzIGNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbHMnO1xuaW1wb3J0IHtkZWZhdWx0RGVjaywgZGVmYXVsdENhcmQsIGRlY2tBcnJheSwgYWxsfSBmcm9tICcuL2NvbnRyb2xscyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBjYXJkIGZyb20gXCIuL2NhcmRcIjtcbmltcG9ydCBkZWNrIGZyb20gXCIuL2RlY2tcIjtcblxuXG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnRlbnQuc2V0QXR0cmlidXRlKCdpZCcsICdjb250ZW50Jyk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhaW5lcicpO1xuY29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmhlYWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hlYWRlcicpO1xuY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbmNvbnN0IGRlY2tEb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5kZWNrRG9jay5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RlY2tEb2NrJyk7XG5jb250YWluZXIuYXBwZW5kQ2hpbGQoZGVja0RvY2spO1xuXG5jb25zdCBjYXJkRG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY2FyZERvY2suc2V0QXR0cmlidXRlKCdpZCcsICd0YWJsZScpO1xuY29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmREb2NrKTtcblxuY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubG9nby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xvZ28nKTtcbmhlYWRlci5hcHBlbmRDaGlsZChsb2dvKTtcbmxvZ28udGV4dENvbnRlbnQgPSAnU2h1ZmZsZSc7XG5cbmNvbnN0IGRlY2tEb2NrTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZGVja0RvY2tNZW51LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudScpO1xuZGVja0RvY2suYXBwZW5kQ2hpbGQoZGVja0RvY2tNZW51KTtcblxubGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGl0bGUnKTtcbmRlY2tEb2NrTWVudS5hcHBlbmRDaGlsZChkaXYpO1xuZGl2LnRleHRDb250ZW50ID0gJ0RlY2tzJztcblxuY29uc3QgYWRkRGVja0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuYWRkRGVja0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZERlY2tCdXR0b24nKTtcbmFkZERlY2tCdXR0b24uc2V0QXR0cmlidXRlKCdjbGFzcycsICd0aXRsZScpXG5kZWNrRG9ja01lbnUuYXBwZW5kQ2hpbGQoYWRkRGVja0J1dHRvbik7XG5hZGREZWNrQnV0dG9uLnRleHRDb250ZW50ID0gJysnO1xuXG5jb25zdCBkZWNrQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZGVja0FyZWEuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZWNrQXJlYScpO1xuZGVja0RvY2suYXBwZW5kQ2hpbGQoZGVja0FyZWEpO1xuXG5jb25zdCBjYXJkRG9ja01lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNhcmREb2NrTWVudS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUnKTtcbmNhcmREb2NrLmFwcGVuZENoaWxkKGNhcmREb2NrTWVudSk7XG5cbmRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGl0bGUnKTtcbmNhcmREb2NrTWVudS5hcHBlbmRDaGlsZChkaXYpO1xuZGl2LnRleHRDb250ZW50ID0gJ0NhcmRzJztcblxuY29uc3QgYWRkQ2FyZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuYWRkQ2FyZEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZENhcmRCdXR0b24nKTtcbmFkZENhcmRCdXR0b24uc2V0QXR0cmlidXRlKCdjbGFzcycsICd0aXRsZScpXG5jYXJkRG9ja01lbnUuYXBwZW5kQ2hpbGQoYWRkQ2FyZEJ1dHRvbik7XG5hZGRDYXJkQnV0dG9uLnRleHRDb250ZW50ID0gJysnO1xuXG5jb25zdCBjYXJkQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY2FyZEFyZWEuc2V0QXR0cmlidXRlKCdpZCcsICdjYXJkQXJlYScpO1xuY2FyZERvY2suYXBwZW5kQ2hpbGQoY2FyZEFyZWEpO1xuXG5jb25zdCBmb3J3YXJkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5mb3J3YXJkQnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbmV4dEJ1dHRvbicpO1xuZm9yd2FyZEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2ZvcndhcmRCdXR0b24nKTtcbmNhcmRBcmVhLmFwcGVuZENoaWxkKGZvcndhcmRCdXR0b24pO1xuZm9yd2FyZEJ1dHRvbi50ZXh0Q29udGVudCA9ICc+JztcblxuY29uc3QgYmFja3dhcmRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmJhY2t3YXJkQnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbmV4dEJ1dHRvbicpO1xuYmFja3dhcmRCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdiYWNrd2FyZEJ1dHRvbicpO1xuY2FyZEFyZWEuYXBwZW5kQ2hpbGQoYmFja3dhcmRCdXR0b24pO1xuYmFja3dhcmRCdXR0b24udGV4dENvbnRlbnQgPSAnPCc7XG5cbmNvbnN0IG92ZXJMYXlIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbm92ZXJMYXlIb2xkZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb250ZW50Jyk7XG5vdmVyTGF5SG9sZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnb3ZlckxheUhvbGRlcicpO1xub3ZlckxheUhvbGRlci5jbGFzc0xpc3QuYWRkKCdvdmVyTGF5SG9sZGVyJyk7XG5jb250ZW50LmFwcGVuZENoaWxkKG92ZXJMYXlIb2xkZXIpO1xuXG5jb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5vdmVybGF5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnb3ZlcmxheScpO1xub3ZlckxheUhvbGRlci5hcHBlbmRDaGlsZChvdmVybGF5KTtcblxuY29uc3QgZm9ybURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZm9ybURpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Zvcm1EaXYnKTtcbm92ZXJMYXlIb2xkZXIuYXBwZW5kQ2hpbGQoZm9ybURpdik7XG5cbmNvbnN0IG5ld0NhcmRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5uZXdDYXJkRm9ybS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmRCaWcnKTtcbm5ld0NhcmRGb3JtLmNsYXNzTGlzdC5hZGQoJ2VkaXRTaXplJyk7XG5uZXdDYXJkRm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25ld0NhcmRGb3JtJyk7XG5mb3JtRGl2LmFwcGVuZENoaWxkKG5ld0NhcmRGb3JtKTtcblxuY29uc3Qgc3VibWl0QnV0dG9uc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuc3VibWl0QnV0dG9uc0Rpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3N1Ym1pdEJ1dHRvbnNEaXYnKTtcbmZvcm1EaXYuYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uc0Rpdik7XG5cbmNvbnN0IGNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY2FuY2VsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2hlY2snKTtcbmNhbmNlbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NhbmNlbCcpO1xuc3VibWl0QnV0dG9uc0Rpdi5hcHBlbmRDaGlsZChjYW5jZWwpO1xuY2FuY2VsLnRleHRDb250ZW50ID0gJ+Kclic7XG5cbmNvbnN0IGNoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jaGVjay5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NoZWNrJyk7XG5zdWJtaXRCdXR0b25zRGl2LmFwcGVuZENoaWxkKGNoZWNrKTtcbmNoZWNrLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2hlY2snKTtcbmNoZWNrLnRleHRDb250ZW50ID0gJ+Kckyc7XG5cbmNvbnN0IGNhcmRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuY2FyZEZvcm0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkRm9ybScpO1xubmV3Q2FyZEZvcm0uYXBwZW5kQ2hpbGQoY2FyZEZvcm0pO1xuXG5jb25zdCBjYXJkVGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5jYXJkVGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmRUaXRsZUlucHV0Jyk7XG5jYXJkVGl0bGVJbnB1dC5jbGFzc0xpc3QuYWRkKCdpbnB1dCcpO1xuY2FyZEZvcm0uYXBwZW5kQ2hpbGQoY2FyZFRpdGxlSW5wdXQpO1xuY2FyZFRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdjYXJkLXRpdGxlJyk7XG5jYXJkVGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuY2FyZFRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2NhcmQtdGl0bGUnKTtcbmNhcmRUaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVGl0bGUnKTtcblxuY29uc3QgY2FyZERlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbmNhcmREZWNrLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZERlY2snKTtcbmNhcmREZWNrLnNldEF0dHJpYnV0ZSgnbXVsdGlwbGUnLCAnbXVsdGlwbGUnKTtcbmNhcmREZWNrLmNsYXNzTGlzdC5hZGQoJ2lucHV0Jyk7XG5jYXJkRm9ybS5hcHBlbmRDaGlsZChjYXJkRGVjayk7XG5jYXJkRGVjay5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NhcmREZWNrJyk7XG4vLyBjYXJkRGVjay5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnJyk7XG5jYXJkRGVjay5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnY2FyZERlY2snKTtcbi8vIGNhcmREZWNrLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRGVjaycpO1xuXG5jb25zdCBzdGVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbnN0ZXAuc2V0QXR0cmlidXRlKCdjbGFzcycsICdzdGVwJyk7XG5zdGVwLmNsYXNzTGlzdC5hZGQoJ2lucHV0Jyk7XG5jYXJkRm9ybS5hcHBlbmRDaGlsZChzdGVwKTtcbnN0ZXAuc2V0QXR0cmlidXRlKCdpZCcsICdzdGVwJyk7XG5zdGVwLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG5zdGVwLnNldEF0dHJpYnV0ZSgnbmFtZScsICdzdGVwJyk7XG5zdGVwLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnKyBzdGVwJyk7XG5cbmNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuZGF0ZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RhdGUnKTtcbmRhdGUuY2xhc3NMaXN0LmFkZCgnaW5wdXQnKTtcbmNhcmRGb3JtLmFwcGVuZENoaWxkKGRhdGUpO1xuLy8gY29uc3QgdGhlRGF0ZSA9IG5ldyBEYXRlKCk7XG4vLyBjb25zb2xlLmxvZygndGhlIGRhdGUgaXMnICsgdGhlRGF0ZSk7XG5kYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGF0ZScpO1xuZGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuZGF0ZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZGF0ZScpO1xuZGF0ZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgYGApO1xuXG5sZXQgY3VycmVudERlY2sgPSBkZWZhdWx0RGVjaztcbmxldCBjdXJyZW50RGVja0RpdjtcblxuXG5jb25zdCB1cGRhdGVDdXJyZW50RGVja0RpdiA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnaW0gdXBkYXRlaW5nIHRoZSBjdXJyZW50IERJVicpXG4gICAgY29uc3QgdGhlQ3VycmVudERlY2tOYW1lID0gY3VycmVudERlY2suZGVja05hbWU7XG4gICAgY29uc29sZS5sb2coJ3RoZUN1cnJlbnREZWNrTmFtZSBpcyArICcgKyB0aGVDdXJyZW50RGVja05hbWUpO1xuICAgIGNvbnN0IGRlY2tEaXZzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSh0aGVDdXJyZW50RGVja05hbWUpO1xuICAgIGN1cnJlbnREZWNrRGl2ID0gZGVja0RpdnNbMF07XG4gICAgLy8gY29uc29sZS5sb2coZGVja0RpdnMpO1xuICAgIC8vIEFycmF5LmZyb20oZGVja0RpdnMpLmZvckVhY2goZGVja0RpdiA9PiB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCd0aGUgZGVja1RpdGxlaXMgJysgZGVja1RpdGxlRGl2KTtcbiAgICAvLyAgICAgaWYoZGVja0Rpdi5maXJzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudCA9PT0gdGhlQ3VycmVudERlY2tOYW1lKXtcbiAgICAvLyAgICAgICAgIGN1cnJlbnREZWNrRGl2ID0gZGVja0RpdjtcbiAgICAvLyAgICAgfVxuICAgIC8vIH0pXG59XG5cblxuY29uc3Qgc3R5bGVDdXJyZW50ID0gKCkgPT4ge1xuICAgIGN1cnJlbnREZWNrRGl2LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkRGVjaycpO1xuICAgIFxufVxuXG5jb25zdCByZW1vdmVTZWxlY3RlZFN0eWxlID0gKCkgPT4ge1xuICAgIGN1cnJlbnREZWNrRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkRGVjaycpO1xufVxuXG5jb25zdCB1cGRhdGVDdXJyZW50RGVjayA9IChlKSA9PiB7XG4gICAgcmVtb3ZlU2VsZWN0ZWRTdHlsZSgpO1xuICAgIGNvbnNvbGUubG9nKCdpbSBVUERBVEluRyEnKTtcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldCk7XG4gICAgY29uc3QgdGhlRGVja05hbWUgPSAoZS50YXJnZXQudGV4dENvbnRlbnQpO1xuICAgIGN1cnJlbnREZWNrID0gY29udHJvbGxlci5nZXREZWNrKHRoZURlY2tOYW1lKTtcbiAgICBjb25zb2xlLmxvZygnZ29ubmEgdXBkYXRlIGN1cnJlbnQgZGVjayBkaXYnKTtcbiAgICB1cGRhdGVDdXJyZW50RGVja0RpdigpO1xuICAgIGNvbnNvbGUubG9nKCdnb25uYSBzdHlsZSBjdXJyZW50IGRlY0RpdiAnICsgY3VycmVudERlY2tEaXYpO1xuICAgIHN0eWxlQ3VycmVudCgpO1xuICAgIHBvcHVsYXRlQ2FyZCgpO1xufVxuY29uc3QgZmlyc3REcmF3RGVja3MgPSAoYXJyYXlPZkRlY2tzKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3J1bm5pbmcgZHJhd0RlY2tzJylcbiAgICBjb25zb2xlLmxvZyhkZWNrQXJyYXlbMV0pO1xuICAgIGFycmF5T2ZEZWNrcy5mb3JFYWNoKGFEZWNrID0+IHtcbiAgICAgICAgaWYoKGFycmF5T2ZEZWNrcy5pbmRleE9mKGFEZWNrKSkgIT09IDApe1xuICAgICAgICAgICAgY29uc3QgZGVja0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGVja0Rpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RlY2snKTtcbiAgICAgICAgICAgIGRlY2tBcmVhLmFwcGVuZENoaWxkKGRlY2tEaXYpO1xuXG4gICAgICAgICAgICBjb25zdCBkZWNrVGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRlY2tUaXRsZURpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RlY2tUaXRsZScpO1xuICAgICAgICAgICAgZGVja0Rpdi5hcHBlbmRDaGlsZChkZWNrVGl0bGVEaXYpO1xuICAgICAgICAgICAgZGVja1RpdGxlRGl2LnRleHRDb250ZW50ID0gYURlY2suZGVja05hbWU7XG5cbiAgICAgICAgICAgIGRlY2tEaXYuY2xhc3NMaXN0LmFkZChkZWNrVGl0bGVEaXYudGV4dENvbnRlbnQpO1xuXG4gICAgICAgICAgICBkZWNrRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdXBkYXRlQ3VycmVudERlY2spO1xuICAgICAgICAgICAgZGVja1RpdGxlRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdXBkYXRlQ3VycmVudERlY2spO1xuICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIHVwZGF0ZUN1cnJlbnREZWNrRGl2KCk7XG4gICAgY29uc29sZS5sb2coY3VycmVudERlY2tEaXYpO1xuXG59XG5cbmNvbnN0IGRyYXdEZWNrcyA9IChhcnJheU9mRGVja3MpID0+IHtcbiAgICBjb25zb2xlLmxvZygncnVubmluZyBkcmF3RGVja3MnKVxuICAgIGNvbnNvbGUubG9nKGRlY2tBcnJheVsxXSk7XG4gICAgYXJyYXlPZkRlY2tzLmZvckVhY2goYURlY2sgPT4ge1xuICAgICAgICBpZigoYXJyYXlPZkRlY2tzLmluZGV4T2YoYURlY2spKSAhPT0gMCl7XG4gICAgICAgICAgICBjb25zdCBkZWNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkZWNrRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGVjaycpO1xuICAgICAgICAgICAgZGVja0FyZWEuYXBwZW5kQ2hpbGQoZGVja0Rpdik7XG5cbiAgICAgICAgICAgIGNvbnN0IGRlY2tUaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGVja1RpdGxlRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVja1RpdGxlJyk7XG4gICAgICAgICAgICBkZWNrRGl2LmFwcGVuZENoaWxkKGRlY2tUaXRsZURpdik7XG4gICAgICAgICAgICBkZWNrVGl0bGVEaXYudGV4dENvbnRlbnQgPSBhRGVjay5kZWNrTmFtZTtcblxuICAgICAgICAgICAgZGVja0Rpdi5jbGFzc0xpc3QuYWRkKGRlY2tUaXRsZURpdi50ZXh0Q29udGVudCk7XG5cbiAgICAgICAgICAgIC8vIGNvbnN0IGVkaXREZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAvLyBlZGl0RGVjay5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2VkaXREZWNrJylcbiAgICAgICAgICAgIC8vIGRlY2tEaXYuYXBwZW5kQ2hpbGQoZWRpdERlY2spXG4gICAgICAgICAgICAvLyBlZGl0RGVjay50ZXh0Q29udGVudCA9ICdFZGl0JztcblxuICAgICAgICAgICAgZGVja0Rpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHVwZGF0ZUN1cnJlbnREZWNrKTtcbiAgICAgICAgICAgIGRlY2tUaXRsZURpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHVwZGF0ZUN1cnJlbnREZWNrKTtcbiAgICAgICAgICAgIC8vIGVkaXREZWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0Zvcm0pO1xuICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIHVwZGF0ZUN1cnJlbnREZWNrRGl2KCk7XG4gICAgc3R5bGVDdXJyZW50KCk7XG4gICAgY29uc29sZS5sb2coY3VycmVudERlY2tEaXYpO1xuXG59XG5cbmNvbnN0IGRyYXdBbGxDYXJkc1N0YWNrID0gKGFEZWNrKSA9PiB7XG4gICAgY29uc3QgY2FyZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmREaXYuc2V0QXR0cmlidXRlKCdpZCcsICdjYXJkQmlnJyk7XG4gICAgY2FyZERvY2suYXBwZW5kQ2hpbGQoY2FyZERpdik7XG4gICAgY29uc29sZS5sb2coYURlY2suY2FyZHNBcnJheVthRGVjay5ib29rbWFya10pO1xuICAgIGNvbnN0IHRoaXNCb29rbWFyayA9IGFEZWNrLmJvb2ttYXJrO1xuICAgIGNvbnN0IHRoZUNhcmQgPSBhRGVjay5jYXJkc0FycmF5W3RoaXNCb29rbWFya10uY2FyZE5hbWU7XG5cbiAgICBjb25zdCBjYXJkVGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkVGl0bGVEaXYuc2V0QXR0cmlidXRlKCdpZCcsICdjYXJkVGl0bGUnKTtcbiAgICBjYXJkRGl2LmFwcGVuZENoaWxkKGNhcmRUaXRsZURpdik7XG4gICAgY2FyZFRpdGxlRGl2LnRleHRDb250ZW50ID0gdGhlQ2FyZC5DYXJkTmFtZTtcbn1cblxuY29uc3QgZHJhd0JhY2tncm91bmRDYXJkcyA9IChudW0pID0+IHtcbiAgICBmb3IobGV0IGkgPSAwOyBpPG51bTsgaSsrICl7XG4gICAgY29uc3QgZmFrZUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmYWtlQ2FyZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmRCaWcnKTtcbiAgICBmYWtlQ2FyZC5jbGFzc0xpc3QuYWRkKGBzdGFjayR7aX1gKTtcbiAgICBjYXJkQXJlYS5hcHBlbmRDaGlsZChmYWtlQ2FyZCk7XG4gICAgfVxufVxuXG5jb25zdCBzYXZlVGl0bGUgPSAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdzYXZpbmcgY2hhbmdlIHRvIHRpdGxlJyk7XG4gICAgY29uc3QgdGV4dCA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xuICAgIGNvbnNvbGUubG9nKHRleHQpO1xuICAgIGNvbnNvbGUubG9nKGN1cnJlbnREZWNrLmJvb2ttYXJrKTtcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50RGVjay5jYXJkc0FycmF5W2N1cnJlbnREZWNrLmJvb2ttYXJrXSk7XG4gICAgLy8gY3VycmVudERlY2suY2FyZHNBcnJheVtjdXJyZW50RGVjay5ib29rbWFya10gPSB0ZXh0O1xuICAgIGNvbnN0IHRoZUNhcmQgPSBjb250cm9sbGVyLmdldENhcmQoY3VycmVudERlY2suY2FyZHNBcnJheVtjdXJyZW50RGVjay5ib29rbWFya10pO1xuICAgIGNvbnNvbGUubG9nKHRoZUNhcmQpO1xuICAgIHRoZUNhcmQuY2FyZE5hbWUgPSB0ZXh0O1xuICAgIGN1cnJlbnREZWNrLmNhcmRzQXJyYXlbY3VycmVudERlY2suYm9va21hcmtdID0gdGV4dDtcbiAgICBjb25zb2xlLmxvZyh0aGVDYXJkLmNhcmROYW1lKTtcbn1cblxuY29uc3QgZHJhd1RpdGxlRGl2ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNhcmRUaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmRUaXRsZURpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NhcmRUaXRsZScpO1xuICAgIGNhcmRUaXRsZURpdi5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsICd0cnVlJyk7XG4gICAgY2FyZFRpdGxlRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0Jywgc2F2ZVRpdGxlKTtcbiAgICByZXR1cm4gY2FyZFRpdGxlRGl2O1xufVxuXG5jb25zdCBkcmF3RGF0ZURpdiA9ICgpID0+IHtcbiAgICBjb25zdCBjYXJkRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmREYXRlRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnY2FyZERhdGUnKTtcbiAgICByZXR1cm4gY2FyZERhdGVEaXY7XG59XG5cbmNvbnN0IHNhdmVTdGVwID0gKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZygnc2F2aW5nIGNoYW5nZSB0byB0ZXh0Jyk7XG4gICAgY29uc3QgdGV4dCA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xuICAgIGNvbnNvbGUubG9nKHRleHQpO1xuICAgIGNvbnN0IHRoZUNhcmQgPSBjb250cm9sbGVyLmdldENhcmQoY3VycmVudERlY2suY2FyZHNBcnJheVtjdXJyZW50RGVjay5ib29rbWFya10pO1xuICAgIHRoZUNhcmQuY2FyZFN0ZXBzWzBdID0gdGV4dDtcbn1cblxuY29uc3QgZHJhd1N0ZXBzRGl2ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNhcmRTdGVwc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgY2FyZFN0ZXBzRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnY2FyZFN0ZXBzJyk7XG4gICAgY2FyZFN0ZXBzRGl2LnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgJ3RydWUnKTtcbiAgICBjYXJkU3RlcHNEaXYuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBzYXZlU3RlcCk7XG4gICAgcmV0dXJuIGNhcmRTdGVwc0Rpdjtcbn1cblxuY29uc3QgZHJhd1RvcENhcmQgPSAoKSA9PiB7XG4gICAgY29uc3QgY2FyZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmREaXYuc2V0QXR0cmlidXRlKCdpZCcsICd0b3BDYXJkJyk7XG4gICAgY2FyZERpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmRCaWcnKTtcbiAgICBjYXJkQXJlYS5hcHBlbmRDaGlsZChjYXJkRGl2KTtcbiAgICBjb25zdCBjYXJkVGl0bGVEaXYgPSBkcmF3VGl0bGVEaXYoKTtcbiAgICBjYXJkRGl2LmFwcGVuZENoaWxkKGNhcmRUaXRsZURpdik7XG4gICAgY29uc3QgY2FyZERhdGVEaXYgPSBkcmF3RGF0ZURpdigpO1xuICAgIGNhcmREaXYuYXBwZW5kQ2hpbGQoY2FyZERhdGVEaXYpO1xuICAgIGNvbnN0IGNhcmRTdGVwc0RpdiA9IGRyYXdTdGVwc0RpdigpO1xuICAgIGNhcmREaXYuYXBwZW5kQ2hpbGQoY2FyZFN0ZXBzRGl2KTtcbiAgICByZXR1cm4gY2FyZERpdjtcbn1cblxuY29uc3QgZ2V0Qm9va21hcmtlZENhcmQgPSAoYURlY2spID0+IHtcbiAgICBjb25zdCB0aGlzQm9va21hcmsgPSBhRGVjay5ib29rbWFyaztcbiAgICBjb25zdCB0aGlzQ2FyZE5hbWUgPSBhRGVjay5jYXJkc0FycmF5W3RoaXNCb29rbWFya107XG4gICAgY29uc29sZS5sb2codGhpc0NhcmROYW1lKTtcbiAgICBjb25zdCBhQ2FyZCA9IGNvbnRyb2xsZXIuZ2V0Q2FyZCh0aGlzQ2FyZE5hbWUpO1xuICAgIGNvbnNvbGUubG9nKGFDYXJkKTtcbiAgICByZXR1cm4gYUNhcmQ7XG59XG5cbmNvbnN0IGVyYXNlU3RlcHMgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3RlcHNEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZFN0ZXBzJyk7XG4gICAgY29uc3Qgc3RlcHMgPSBzdGVwc0Rpdi5jaGlsZHJlbjtcbiAgICBBcnJheS5mcm9tKHN0ZXBzKS5mb3JFYWNoKHN0ZXBFbGVtZW50ID0+IHtcbiAgICAgICAgc3RlcEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfSlcbiAgICBcbn1cblxuY29uc3QgcG9wdWxhdGVDYXJkID0gKCkgPT4ge1xuICAgIGVyYXNlU3RlcHMoKTtcbiAgICBjb25zdCB0aGVDYXJkID0gZ2V0Qm9va21hcmtlZENhcmQoY3VycmVudERlY2spO1xuICAgIGNvbnNvbGUubG9nKCdwdW9wdWxhdGluZyB3aXRoOiAnICsgdGhlQ2FyZCk7XG4gICAgY29uc3QgY2FyZFRpdGxlRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmRUaXRsZScpO1xuICAgIGlmKHRoZUNhcmQgIT09IHVuZGVmaW5lZCl7XG4gICAgICAgIGNhcmRUaXRsZURpdi50ZXh0Q29udGVudCA9IHRoZUNhcmQuY2FyZE5hbWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjYXJkVGl0bGVEaXYudGV4dENvbnRlbnQgPSAnJztcbiAgICB9XG4gICAgY29uc3QgY2FyZERhdGVEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZERhdGUnKTtcbiAgICBpZih0aGVDYXJkICE9PSB1bmRlZmluZWQpe1xuICAgICAgICBjYXJkRGF0ZURpdi50ZXh0Q29udGVudCA9IGBEdWUgZGF0ZTogJHt0aGVDYXJkLmNhcmREYXRlfWA7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjYXJkRGF0ZURpdi50ZXh0Q29udGVudCA9ICcnO1xuICAgIH1cblxuICAgIGNvbnN0IGNhcmRTdGVwc0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkU3RlcHMnKTtcbiAgICBjb25zb2xlLmxvZyhjYXJkU3RlcHNEaXYpO1xuICAgIGNvbnNvbGUubG9nKHR5cGVvZiBjYXJkU3RlcHNEaXYpO1xuICAgIGlmKHRoZUNhcmQgIT09IHVuZGVmaW5lZCl7XG4gICAgICAgIHRoZUNhcmQuY2FyZFN0ZXBzLmZvckVhY2goc3RlcFN0cmluZyA9PiB7XG4gICAgICAgICAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICBsaXN0SXRlbS50ZXh0Q29udGVudCA9IGAke3N0ZXBTdHJpbmd9YFxuICAgICAgICAgICAgY29uc29sZS5sb2coY2FyZFN0ZXBzRGl2KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiBjYXJkU3RlcHNEaXYpO1xuICAgICAgICAgICAgY2FyZFN0ZXBzRGl2LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgICAgICAgfSlcbiAgICAgICAgLy8gY2FyZFN0ZXBzRGl2LnRleHRDb250ZW50ID0gYCR7dGhlQ2FyZC5jYXJkU3RlcHN9YDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNhcmRTdGVwc0Rpdi50ZXh0Q29udGVudCA9ICcnO1xuICAgIH1cbiAgICBcbn1cblxuY29uc3QgZHJhd0NhcmRTdGFjayA9IChhRGVjaykgPT4ge1xuICAgIGNvbnNvbGUubG9nKGFEZWNrKTtcbiAgICBkcmF3QmFja2dyb3VuZENhcmRzKDIpO1xuICAgIGRyYXdUb3BDYXJkKCk7XG4gICAgcG9wdWxhdGVDYXJkKCk7ICAgIFxufVxuXG5jb25zdCBhZHZhbmNlQm9va21hcmsgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3J1bm5pbmcgYWR2YW5jZSBib29rbWFyaycpXG4gICAgY3VycmVudERlY2suYm9va21hcmsrKztcbiAgICBpZihjdXJyZW50RGVjay5jYXJkc0FycmF5W2N1cnJlbnREZWNrLmJvb2ttYXJrXSAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgcG9wdWxhdGVDYXJkKCk7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIGN1cnJlbnREZWNrLmJvb2ttYXJrLS07XG4gICAgICAgIHBvcHVsYXRlQ2FyZCgpO1xuICAgIH1cbn1cblxuY29uc3QgcHJldmlvdXNCb29rbWFyayA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygncnVubmluZyBwcmV2aW91cyBib29rbWFyaycpXG4gICAgY3VycmVudERlY2suYm9va21hcmstLTtcbiAgICBpZihjdXJyZW50RGVjay5jYXJkc0FycmF5W2N1cnJlbnREZWNrLmJvb2ttYXJrXSAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgcG9wdWxhdGVDYXJkKCk7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIGN1cnJlbnREZWNrLmJvb2ttYXJrKys7XG4gICAgICAgIHBvcHVsYXRlQ2FyZCgpO1xuICAgIH1cbiAgICBcbn1cblxuY29uc3QgYWRkRXZlbnRMaXN0ZW5lcnMgPSAoZWxlbWVudE5hbWUsIGFGdW5jdGlvbikgPT57XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2VsZW1lbnROYW1lfWApO1xuICAgIGNvbnNvbGUubG9nKGVsZW1lbnQpO1xuICAgIGNvbnNvbGUubG9nKGFGdW5jdGlvbik7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFGdW5jdGlvbik7XG59XG5cbmNvbnN0IGFkZEZvcndhcmRCYWNrd2FyZExpc3RlbmVycyA9ICgpID0+IHtcbiAgICBhZGRFdmVudExpc3RlbmVycygnZm9yd2FyZEJ1dHRvbicsIGFkdmFuY2VCb29rbWFyayk7XG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoJ2JhY2t3YXJkQnV0dG9uJywgcHJldmlvdXNCb29rbWFyayk7XG59XG5cbmNvbnN0IGVyYXNlVG9wQ2FyZCA9ICgpID0+IHtcbiAgICBjb25zdCBvbGRDYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvcENhcmQnKTtcbiAgICBvbGRDYXJkLnJlbW92ZSgpO1xuICAgIGRyYXdUb3BDYXJkKCk7XG59XG5cbmNvbnN0IGVyYXNlRGVja3MgPSAoKSA9PiB7XG4gICAgY29uc3Qgb2xkRGVja3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkZWNrJyk7XG4gICAgQXJyYXkuZnJvbShvbGREZWNrcykuZm9yRWFjaChkZWNrRWxlbWVudCA9PiB7XG4gICAgICAgIGRlY2tFbGVtZW50LnJlbW92ZSgpO1xuICAgIH0pXG59XG5jb25zdCBjcmVhdGVBbmRSZW5kZXJEZWNrID0gKG5hbWUpID0+IHtcbiAgICBjb250cm9sbGVyLmNyZWF0ZURlY2sobmFtZSk7XG4gICAgZXJhc2VEZWNrcygpO1xuICAgIGRyYXdEZWNrcyhkZWNrQXJyYXkpO1xufVxuXG5cbmNvbnN0IGNyZWF0ZUFuZFJlbmRlckNhcmQgPSAobmFtZSkgPT4ge1xuICAgIGNvbnRyb2xsZXIuY3JlYXRlQ2FyZChuYW1lKTtcbiAgICBwb3B1bGF0ZUNhcmQoKTtcbn1cblxubGV0IGZvcm1UeXBlID0gJ2RlY2snO1xuXG5jb25zdCByZXNldERlY2tPcHRpb25zID0gKCkgPT4ge1xuICAgIGNvbnN0IGRlY2tTZWxlY3RvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkRGVjaycpO1xuICAgIEFycmF5LmZyb20oZGVja1NlbGVjdG9yKS5mb3JFYWNoKGRlY2tFbGVtZW50ID0+IHtcbiAgICAgICAgZGVja0VsZW1lbnQucmVtb3ZlKCk7XG4gICAgfSlcbn1cbmNvbnN0IHNldERlY2tPcHRpb25zID0gKCkgPT4ge1xuICAgIHJlc2V0RGVja09wdGlvbnMoKTtcbiAgICBkZWNrQXJyYXkuZm9yRWFjaChkZWNrRWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnN0IGRlY2tPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgY2FyZERlY2suYXBwZW5kQ2hpbGQoZGVja09wdGlvbik7XG4gICAgICAgIGRlY2tPcHRpb24udmFsdWUgPSBkZWNrRWxlbWVudC5kZWNrTmFtZTtcbiAgICAgICAgZGVja09wdGlvbi50ZXh0Q29udGVudCA9IGRlY2tFbGVtZW50LmRlY2tOYW1lO1xuICAgIH0pXG59XG5cbmNvbnN0IHJlc2V0Rm9ybURlY2sgPSAoKSA9PiB7XG4gICAgY29uc3QgYURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkLXRpdGxlJyk7XG4gICAgYURpdi52YWx1ZSA9ICcnO1xufVxuXG5jb25zdCByZXNldEZvcm1DYXJkID0gKCkgPT4ge1xuICAgIGxldCBhRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmQtdGl0bGUnKTtcbiAgICBhRGl2LnZhbHVlID0gJyc7XG4gICAgYURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGVwJyk7XG4gICAgYURpdi52YWx1ZSA9ICcnO1xuICAgIGFEaXYuY2FyZERhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpLnZhbHVlO1xuICAgIGFEaXYudmFsdWUgPSAnJztcbn1cblxuY29uc3Qgc2hvd0Zvcm0gPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3Nob3dpbmcgZm9ybSEnKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJMYXlIb2xkZXInKTtcbiAgICBmb3JtLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG59XG5cbmNvbnN0IGhpZGVGb3JtID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdoaWRpbmcgZm9ybSEnKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJMYXlIb2xkZXInKTtcbiAgICBmb3JtLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICBsZXQgYURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGVwJyk7XG4gICAgYURpdi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgYURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlJyk7XG4gICAgYURpdi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgYURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkRGVjaycpO1xuICAgIGFEaXYuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xufVxuXG5jb25zdCBzaG93RGVja0Zvcm0gPSAoKSA9PiB7XG4gICAgc2hvd0Zvcm0oKTtcbiAgICBmb3JtVHlwZSA9ICdkZWNrJztcbiAgICBsZXQgYURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGVwJyk7XG4gICAgYURpdi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgYURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlJyk7XG4gICAgYURpdi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgYURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkRGVjaycpO1xuICAgIGFEaXYuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIGFEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZC10aXRsZScpO1xuICAgIGFEaXYuc3R5bGUuZ3JpZFJvdyA9ICczLzQnO1xuICAgIFxufVxuXG5jb25zdCBzaG93Q2FyZEZvcm0gPSAoKSA9PiB7XG4gICAgc2V0RGVja09wdGlvbnMoKTtcbiAgICBzaG93Rm9ybSgpO1xuICAgIGZvcm1UeXBlID0gJ2NhcmQnO1xuICAgIGxldCBhRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0ZXAnKTtcbiAgICBhRGl2LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgYURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlJyk7XG4gICAgYURpdi5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgIGFEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZERlY2snKTtcbiAgICBhRGl2LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgYURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkLXRpdGxlJyk7XG4gICAgYURpdi5zdHlsZS5ncmlkUm93ID0gJzEvMic7XG59XG5cbmNvbnN0IHNhdmVEZWNrID0gKCkgPT4ge1xuICAgIGNvbnN0IGFEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZC10aXRsZScpLnZhbHVlO1xuICAgIGNyZWF0ZUFuZFJlbmRlckRlY2soYURpdik7XG4gICAgcmVzZXRGb3JtRGVjaygpO1xuICAgIGhpZGVGb3JtKCk7XG59XG5cbmNvbnN0IHNhdmVDYXJkID0gKCkgPT4ge1xuICAgIGxldCBhRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmQtdGl0bGUnKS52YWx1ZTtcbiAgICBjcmVhdGVBbmRSZW5kZXJDYXJkKGFEaXYpO1xuICAgIGFEaXYgPSBjb250cm9sbGVyLmdldENhcmQoYURpdik7XG4gICAgYURpdi5jYXJkU3RlcHMucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RlcCcpLnZhbHVlKTtcbiAgICBhRGl2LmNhcmREYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKS52YWx1ZTtcbiAgICBjb25zdCBkZWNrTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkRGVjaycpO1xuICAgIGNvbnN0IGNvbGxlY3Rpb24gPSBkZWNrTGlzdC5zZWxlY3RlZE9wdGlvbnM7XG4gICAgQXJyYXkuZnJvbShjb2xsZWN0aW9uKS5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICAgICAgICBhRGl2LmNhcmREZWNrcy5wdXNoKG9wdGlvbi52YWx1ZSk7ICBcbiAgICB9KVxuICAgIGFEaXYuY2FyZERlY2tzLmZvckVhY2goZGVja05hbWVTdHJpbmcgPT4ge1xuICAgICAgICBjb25zdCBhRGVjayA9IGNvbnRyb2xsZXIuZ2V0RGVjayhkZWNrTmFtZVN0cmluZylcbiAgICAgICAgY29udHJvbGxlci5hZGRDYXJkdG9EZWNrKGFEaXYsIGFEZWNrKTtcbiAgICB9KVxuICAgIHJlc2V0Rm9ybUNhcmQoKTtcbiAgICBoaWRlRm9ybSgpO1xufVxuXG5cblxuY29uc3Qgc2F2ZUZvcm0gPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3NhdmUgdHlwZSBpczogJysgZm9ybVR5cGUpO1xuICAgIGlmKGZvcm1UeXBlID09PSdkZWNrJyl7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzYXZpbmcgZGVjayEnKVxuICAgICAgICBzYXZlRGVjaygpO1xuICAgIH1cbiAgICBlbHNlIGlmKGZvcm1UeXBlID09PSAnY2FyZCcpe1xuICAgICAgICBjb25zb2xlLmxvZygnc2F2aW5nIGNhcmQhJylcbiAgICAgICAgc2F2ZUNhcmQoKTtcbiAgICB9XG59XG5cblxuYWRkRXZlbnRMaXN0ZW5lcnMoJ2FkZERlY2tCdXR0b24nLCBzaG93RGVja0Zvcm0pO1xuYWRkRXZlbnRMaXN0ZW5lcnMoJ2FkZENhcmRCdXR0b24nLCBzaG93Q2FyZEZvcm0pO1xuYWRkRXZlbnRMaXN0ZW5lcnMoJ2NhbmNlbCcsIGhpZGVGb3JtKTtcbmFkZEV2ZW50TGlzdGVuZXJzKCdjaGVjaycsIHNhdmVGb3JtKTtcblxuXG5kcmF3Q2FyZFN0YWNrKGRlZmF1bHREZWNrKTtcbmZpcnN0RHJhd0RlY2tzKGRlY2tBcnJheSk7XG5hZGRGb3J3YXJkQmFja3dhcmRMaXN0ZW5lcnMoKTtcbnN0eWxlQ3VycmVudCgpO1xuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
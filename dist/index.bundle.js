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
___CSS_LOADER_EXPORT___.push([module.id, "/* *{\n    box-sizing: border-box;\n} */\nbody {\n    padding: 0px;\n    margin: 0px;\n    position: relative;\n    font-size: 14px;\n    \n    /* height: 100vh; */\n    \n}\n\ndiv {\n    /* border-top: 2px solid white; */\n    padding: 4px;\n\n}\n#content {\n    margin: 0px;\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    background-color: rgb(63, 135, 152);\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    align-items: center;\n    position: relative;\n}\n\n#container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 4px;\n    padding: 20px;\n    margin: 20px 0;\n    width: 480px;\n    height: 100vh;  \n}\n\n#header{\n    display: flex;\n    width: 100%;\n    height: 100px;\n}\n\n#deckDock{\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 200px;\n}\n\n.deckArea{\n    display: flex;\n    gap: 7px;\n}\n\n#table{\n    padding: 4px;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n}\n\n#logo, .title{\n    width: 100px;\n    font-size: 32px;\n    font-weight: 600;\n    font-family: 'Raleway', sans-serif;\n    color: white;\n    border: none;\n}\n\n.title{\n    width: auto;\n    font-size: 24px;\n}\n\n\n#cardArea{\n    display: grid;\n    grid-template-columns: 60px 1fr 60px;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    border: none;\n}\n\n.deck, .blankDeck{\n    /* pointer-events: none; */\n    display: flex;\n    flex-direction: column;\n    width: 60px;\n    height: 90px;\n    border-radius: 4px;\n    background-color: white;\n    /* box-shadow: rgba(0, 0, 0, 0.16) 0 7px 9px -7px;\n    box-shadow: rgba(53, 82, 94, 0.3) 1px 7px 7px 1px; */\n    justify-items: center;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.blankDeck{\n    background-color: rgb(31, 94, 94);\n}\n\n.menu{\n    border: none;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: left;\n    gap: 4px;\n}\n\n#deckTitle, #cardTitle, #cardDate, #cardSteps{\n    margin-top: 8px;\n    font-family: 'Raleway', sans-serif;\n    color: rgb(63, 135, 152);\n    font-weight: 600;\n    text-transform: uppercase;\n    text-align: center;\n    text-justify: center;\n}\n\n.selectedDeck {\n    box-shadow: rgb(102, 220, 241) 0 0 3px 2px;\n    /* box-shadow: rgba(53, 82, 94, 0.3) 1px 9px 9px 1px; */\n}\n\n#addCardButton, #addDeckButton{\n    font-size: 48px;\n    cursor: pointer;\n}\n\n#addCardButton:hover, #addDeckButton:hover, .nextButton:hover{\n    /* text-shadow:  0 0 3px 2px, rgb(102, 173, 241); */\n    text-shadow: -1px 1px 2px rgb(102, 220, 241),\n\t\t\t\t  1px 1px 2px rgb(102, 220, 241),\n\t\t\t\t  1px -1px 0 rgb(102, 220, 241),\n\t\t\t\t  -1px -1px 0 rgb(102, 220, 241);\n    \n}\n.nextButton{\n    justify-self: right;\n    color: white;\n    color: rgb(80, 163, 182);\n    font-family: 'Raleway', sans-serif;\n    font-size: 72px;\n    border: none;\n    cursor: pointer;\n}\n\n#forwardButton{\n    justify-self: left;\n    grid-column: 3/4;\n}\n\n#backwardButton{\n    justify-self: right;\n    grid-column: 1/2;\n    grid-row: 1/2;\n}\n\n\n.cardBig{\n    grid-column: 2/3;\n    grid-row: 1/2;\n    justify-self: center;\n    display: flex;\n    width: 240px;\n    height: 360px;\n    border-radius: 16px;\n    background-color: white;\n    box-shadow: rgba(53, 82, 94, 0.3) 1px 9px 9px 1px;\n    justify-content: center;\n    align-items: center;\n    z-index: 1;\n\n}\n\n#topCard{\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: repeat(8, 1fr);\n\n    /* flex-direction: column; */\n}\n\n.bigPlus, .littlePlus{\n    grid-column: 1/5;\n    grid-row: 4/6;\n    cursor: pointer;\n    font-size: 72px;\n    color: rgb(63, 135, 152);\n    font-family: 'Raleway', sans-serif;\n    font-weight: 600;\n    align-self: center;\n    justify-self: center;\n}\n\n.stack0{\n    background-color: white;\n    position: absolute;\n    top: 6px;\n    left: 63px;\n    /* z-index: -1; */\n    transform: rotate(2deg);\n}\n\n.stack1{\n    position: absolute;\n    top: 3px;\n    left: 58px;\n    /* z-index: -2; */\n    transform: rotate(1deg);\n}\n\n.stack2{\n    position: absolute;\n    top: 4px;\n    left: 120px;\n    /* z-index: -3; */\n    transform: rotate(6deg);\n}\n\n.editSize{\n    /* position: absolute;\n    top: 180px; */\n    width: 300px;\n    height: 450px;\n    z-index: 3;\n}\n\n.overLayHolder{\n    position: absolute;\n    visibility: hidden;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100vw;\n    height: 100vh; \n    \n}\n.overlay{\n    display: grid;\n    position: absolute;\n    background-color: rgb(37, 107, 107);\n    opacity: 60%;\n    height: 100vh;\n    width: 100vw;\n    z-index: 2;\n    padding: 20px; \n}\n\n.formDiv{\n    display: flex;\n    flex-direction: column;\n    padding-top: 100px;\n    gap: 20px;\n    width: 300px;\n    height: 600px;\n    z-index: 3;\n}\n\n.submitButtonsDiv{\n    display: flex;\n    flex-direction: row;\n    gap: 16px;\n    height: 44px;\n}\n\n.cardForm{\n    display: grid;\n    gap: 16px;\n    width:300px;\n    height: 410px;\n    grid-template-columns: 1fr 1.5fr 1.5fr 1fr;\n    grid-template-rows: repeat(7, 1fr);\n    padding: 20px;\n}\n\n.input, .check{\n    padding: 8px;\n    grid-column: 1/5;\n    border: none;\n    outline: none;\n    border-radius: 16px;\n    background-color: rgb(242, 242, 242);\n    color: rgb(80, 163, 182);\n    font-family: 'Raleway', sans-serif;\n    font-size: 18px;\n    text-align: center;\n}\n\n.input:hover{\n    box-shadow: rgb(102, 173, 241) 0 0 3px 2px;\n    box-shadow: rgb(102, 220, 241) 0 0 3px 2px;\n}\n\n.cardTitle{\n   grid-row: 1/2;\n   grid-column: 1/5;\n   text-align: center;\n}\n\n#cardSteps{\n    grid-column: 2/4;\n    grid-row: 2/7;\n}\n\n#cardDate{\n    grid-row: 7/8;\n    grid-column: 1/5;\n    text-align: center;\n}\n\n#cardDelete{\n    margin-left: 12px;\n    grid-column: 1/2;\n    grid-row: 8/9;\n    font-size: 16px;\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    background-color: rgb(80, 163, 182);\n    color: white;\n    text-align: center;\n    text-justify: center;\n}\n\n#deckDelete{\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    background-color: rgb(80, 163, 182);\n    color: white;\n    font-family: 'Raleway', sans-serif;\n    font-size: 9px;\n    font-weight: 600;\n    text-align: center;\n    text-justify: center; \n    align-self: flex-start;\n}\n\n.check{\n    background-color: white;\n    width: 50px;\n    z-index: 3;\n    text-align: center;\n    vertical-align: center;\n}\n\n.check:hover{\n    font-size: 24px;\n}\n\n[contenteditable] {\n    outline: 0px solid transparent;\n  }\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'); \n@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=Oswald:wght@200;300;400;500;600;700&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\n/* *{\n    box-sizing: border-box;\n} */\nbody {\n    padding: 0px;\n    margin: 0px;\n    position: relative;\n    font-size: 14px;\n    \n    /* height: 100vh; */\n    \n}\n\ndiv {\n    /* border-top: 2px solid white; */\n    padding: 4px;\n\n}\n#content {\n    margin: 0px;\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    background-color: rgb(63, 135, 152);\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    align-items: center;\n    position: relative;\n}\n\n#container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 4px;\n    padding: 20px;\n    margin: 20px 0;\n    width: 480px;\n    height: 100vh;  \n}\n\n#header{\n    display: flex;\n    width: 100%;\n    height: 100px;\n}\n\n#deckDock{\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 200px;\n}\n\n.deckArea{\n    display: flex;\n    gap: 7px;\n}\n\n#table{\n    padding: 4px;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n}\n\n#logo, .title{\n    width: 100px;\n    font-size: 32px;\n    font-weight: 600;\n    font-family: 'Raleway', sans-serif;\n    color: white;\n    border: none;\n}\n\n.title{\n    width: auto;\n    font-size: 24px;\n}\n\n\n#cardArea{\n    display: grid;\n    grid-template-columns: 60px 1fr 60px;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    border: none;\n}\n\n.deck, .blankDeck{\n    /* pointer-events: none; */\n    display: flex;\n    flex-direction: column;\n    width: 60px;\n    height: 90px;\n    border-radius: 4px;\n    background-color: white;\n    /* box-shadow: rgba(0, 0, 0, 0.16) 0 7px 9px -7px;\n    box-shadow: rgba(53, 82, 94, 0.3) 1px 7px 7px 1px; */\n    justify-items: center;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.blankDeck{\n    background-color: rgb(31, 94, 94);\n}\n\n.menu{\n    border: none;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: left;\n    gap: 4px;\n}\n\n#deckTitle, #cardTitle, #cardDate, #cardSteps{\n    margin-top: 8px;\n    font-family: 'Raleway', sans-serif;\n    color: rgb(63, 135, 152);\n    font-weight: 600;\n    text-transform: uppercase;\n    text-align: center;\n    text-justify: center;\n}\n\n.selectedDeck {\n    box-shadow: rgb(102, 220, 241) 0 0 3px 2px;\n    /* box-shadow: rgba(53, 82, 94, 0.3) 1px 9px 9px 1px; */\n}\n\n#addCardButton, #addDeckButton{\n    font-size: 48px;\n    cursor: pointer;\n}\n\n#addCardButton:hover, #addDeckButton:hover, .nextButton:hover{\n    /* text-shadow:  0 0 3px 2px, rgb(102, 173, 241); */\n    text-shadow: -1px 1px 2px rgb(102, 220, 241),\n\t\t\t\t  1px 1px 2px rgb(102, 220, 241),\n\t\t\t\t  1px -1px 0 rgb(102, 220, 241),\n\t\t\t\t  -1px -1px 0 rgb(102, 220, 241);\n    \n}\n.nextButton{\n    justify-self: right;\n    color: white;\n    color: rgb(80, 163, 182);\n    font-family: 'Raleway', sans-serif;\n    font-size: 72px;\n    border: none;\n    cursor: pointer;\n}\n\n#forwardButton{\n    justify-self: left;\n    grid-column: 3/4;\n}\n\n#backwardButton{\n    justify-self: right;\n    grid-column: 1/2;\n    grid-row: 1/2;\n}\n\n\n.cardBig{\n    grid-column: 2/3;\n    grid-row: 1/2;\n    justify-self: center;\n    display: flex;\n    width: 240px;\n    height: 360px;\n    border-radius: 16px;\n    background-color: white;\n    box-shadow: rgba(53, 82, 94, 0.3) 1px 9px 9px 1px;\n    justify-content: center;\n    align-items: center;\n    z-index: 1;\n\n}\n\n#topCard{\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: repeat(8, 1fr);\n\n    /* flex-direction: column; */\n}\n\n.bigPlus, .littlePlus{\n    grid-column: 1/5;\n    grid-row: 4/6;\n    cursor: pointer;\n    font-size: 72px;\n    color: rgb(63, 135, 152);\n    font-family: 'Raleway', sans-serif;\n    font-weight: 600;\n    align-self: center;\n    justify-self: center;\n}\n\n.stack0{\n    background-color: white;\n    position: absolute;\n    top: 6px;\n    left: 63px;\n    /* z-index: -1; */\n    transform: rotate(2deg);\n}\n\n.stack1{\n    position: absolute;\n    top: 3px;\n    left: 58px;\n    /* z-index: -2; */\n    transform: rotate(1deg);\n}\n\n.stack2{\n    position: absolute;\n    top: 4px;\n    left: 120px;\n    /* z-index: -3; */\n    transform: rotate(6deg);\n}\n\n.editSize{\n    /* position: absolute;\n    top: 180px; */\n    width: 300px;\n    height: 450px;\n    z-index: 3;\n}\n\n.overLayHolder{\n    position: absolute;\n    visibility: hidden;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100vw;\n    height: 100vh; \n    \n}\n.overlay{\n    display: grid;\n    position: absolute;\n    background-color: rgb(37, 107, 107);\n    opacity: 60%;\n    height: 100vh;\n    width: 100vw;\n    z-index: 2;\n    padding: 20px; \n}\n\n.formDiv{\n    display: flex;\n    flex-direction: column;\n    padding-top: 100px;\n    gap: 20px;\n    width: 300px;\n    height: 600px;\n    z-index: 3;\n}\n\n.submitButtonsDiv{\n    display: flex;\n    flex-direction: row;\n    gap: 16px;\n    height: 44px;\n}\n\n.cardForm{\n    display: grid;\n    gap: 16px;\n    width:300px;\n    height: 410px;\n    grid-template-columns: 1fr 1.5fr 1.5fr 1fr;\n    grid-template-rows: repeat(7, 1fr);\n    padding: 20px;\n}\n\n.input, .check{\n    padding: 8px;\n    grid-column: 1/5;\n    border: none;\n    outline: none;\n    border-radius: 16px;\n    background-color: rgb(242, 242, 242);\n    color: rgb(80, 163, 182);\n    font-family: 'Raleway', sans-serif;\n    font-size: 18px;\n    text-align: center;\n}\n\n.input:hover{\n    box-shadow: rgb(102, 173, 241) 0 0 3px 2px;\n    box-shadow: rgb(102, 220, 241) 0 0 3px 2px;\n}\n\n.cardTitle{\n   grid-row: 1/2;\n   grid-column: 1/5;\n   text-align: center;\n}\n\n#cardSteps{\n    grid-column: 2/4;\n    grid-row: 2/7;\n}\n\n#cardDate{\n    grid-row: 7/8;\n    grid-column: 1/5;\n    text-align: center;\n}\n\n#cardDelete{\n    margin-left: 12px;\n    grid-column: 1/2;\n    grid-row: 8/9;\n    font-size: 16px;\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    background-color: rgb(80, 163, 182);\n    color: white;\n    text-align: center;\n    text-justify: center;\n}\n\n#deckDelete{\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    background-color: rgb(80, 163, 182);\n    color: white;\n    font-family: 'Raleway', sans-serif;\n    font-size: 9px;\n    font-weight: 600;\n    text-align: center;\n    text-justify: center; \n    align-self: flex-start;\n}\n\n.check{\n    background-color: white;\n    width: 50px;\n    z-index: 3;\n    text-align: center;\n    vertical-align: center;\n}\n\n.check:hover{\n    font-size: 24px;\n}\n\n[contenteditable] {\n    outline: 0px solid transparent;\n  }\n\n"],"sourceRoot":""}]);
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
/* harmony export */   "deleteCard": () => (/* binding */ deleteCard),
/* harmony export */   "deleteDeck": () => (/* binding */ deleteDeck),
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
        // console.log(name)
      let thisCard;
      // console.log(thisCard);
      // console.log(all.length);
      console.log(all.cardsArray);
      all.cardsArray.forEach((cardElement) => {
        // console.log(cardElement.cardName);
        // console.log(name);
        if (cardElement.cardName === name) {
          console.log(`${cardElement.cardName} === ${name}`);
          console.log(thisCard);
          console.log(cardElement);
          thisCard = cardElement;
          console.log(thisCard);
        }
      });
    //   if (theCard === undefined) {
    //     // const cardName = prompt(
    //     //   "that card does not exist, please enter another name:"
    //     // );
    //     // theCard = getCard(cardName);
    //   }
      console.log(thisCard)
      return thisCard;
    };

    const getDeck = (name) => {
      console.log('GETTING DECK');
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
      // if (theDeck === undefined) {
      //   const deckName = prompt(
      //     "that deck does not exist, please enter another name:"
      //   );
      //   theDeck = getDeck(deckName);
      // }
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
    console.log(`pusing ${newCard} to ${all}`);
    return newCard;
    
    };

    

    const deleteCardFromDeck = (thisCard, thisDeck) => {
      const index = thisDeck.cardsArray.indexOf(thisCard.cardName);
      if (index > -1) {
        thisDeck.cardsArray.splice(index, 1);
      }
      return thisDeck;
    };

    const deleteCard = () => {
      console.log('deleting')
      const cardDiv = document.getElementById('cardTitle');
      const aCardName = cardDiv.textContent;
      const thisCard = getCard(aCardName);
      const index = all.cardsArray.indexOf(thisCard);
      if (index > -1) {
        all.cardsArray.splice(index, 1);
      }
      console.log(all);
      return all;
    };

    const deleteDeck = (aDeckName) => {
      console.log('DELETEING DECK IN CONTROLLS')
      console.log(`deck name is ${aDeckName}`)
      const deckObj = getDeck(aDeckName);
      const index = deckArray.indexOf(deckObj);
      if (index > -1) {
        deckArray.splice(index, 1);
      }
      return deckArray;
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
    // console.log('im updateing the current DIV')
    const theCurrentDeckName = currentDeck.deckName;
    // console.log('theCurrentDeckName is + ' + theCurrentDeckName);
    const deckDivs = document.getElementsByClassName('deck');
    Array.from(deckDivs).forEach(deckDiv => {
        const titleDiv = deckDiv.children[0];
        console.log(deckDiv);
        console.log(theCurrentDeckName);
        console.log(`does ${titleDiv} and ${theCurrentDeckName} match?`)
        if(titleDiv.textContent === theCurrentDeckName){
            currentDeckDiv = deckDiv;
        }
    })
    
    // console.log(deckDivs);
    // Array.from(deckDivs).forEach(deckDiv => {
    //     console.log('the deckTitleis '+ deckTitleDiv);
    //     if(deckDiv.firstElementChild.textContent === theCurrentDeckName){
    //         currentDeckDiv = deckDiv;
    //     }
    // })
}


const styleCurrent = () => {
    // console.log(currentDeckDiv);
    currentDeckDiv.classList.add('selectedDeck');
    
}

const removeSelectedStyle = () => {
    currentDeckDiv.classList.remove('selectedDeck');
}

const updateCurrentDeck = (e) => {
    removeSelectedStyle();
    // console.log('im UPDATInG!');
    console.log(e.target);
    const theDeckName = (e.target.textContent);
    currentDeck = _controlls__WEBPACK_IMPORTED_MODULE_0__.getDeck(theDeckName);
    // console.log('gonna update current deck div');
    updateCurrentDeckDiv();
    // console.log('gonna style current decDiv ' + currentDeckDiv);
    styleCurrent();
    populateCard();
}

const updateCurrentDeckByName = (name) => {
    removeSelectedStyle();
    // console.log('im UPDATInG!');
    
    const theDeckName = name;
    currentDeck = _controlls__WEBPACK_IMPORTED_MODULE_0__.getDeck(theDeckName);
    // console.log('gonna update current deck div');
    updateCurrentDeckDiv();
    // console.log('gonna style current decDiv ' + currentDeckDiv);
    styleCurrent();
    populateCard();
}
const firstDrawDecks = (arrayOfDecks) => {
    // console.log('running drawDecks')
    // console.log(deckArray[1]);
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

            // const deckDeleteButton = drawDeckDeleteButton();
            // deckDiv.appendChild(deckDeleteButton);

            deckDiv.addEventListener('click', updateCurrentDeck);
            deckTitleDiv.addEventListener('click', updateCurrentDeck);
            deckTitleDiv.addEventListener('input', saveDeckTitle);
        }
        });
    updateCurrentDeckDiv();
    // console.log(currentDeckDiv);

}


const saveDeckTitle = (e) => {
    // console.log('saving change to title');
    const text = e.target.textContent;
    currentDeck.deckName = text;
}

const drawDecks = (arrayOfDecks) => {
    // console.log('running drawDecks')
    // console.log(deckArray[1]);
    arrayOfDecks.forEach(aDeck => {
        if((arrayOfDecks.indexOf(aDeck)) !== 0){
            const deckDiv = document.createElement('div');
            deckDiv.setAttribute('class', 'deck');
            deckArea.appendChild(deckDiv);

            const deckTitleDiv = document.createElement('div');
            deckTitleDiv.setAttribute('id', 'deckTitle');
            deckTitleDiv.setAttribute('contenteditable', 'true');
            deckDiv.appendChild(deckTitleDiv);
            deckTitleDiv.textContent = aDeck.deckName;

            deckDiv.classList.add(deckTitleDiv.textContent);

            // const deckDeleteButton = drawDeckDeleteButton();
            // deckDiv.appendChild(deckDeleteButton);

            // const editDeck = document.createElement('div');
            // editDeck.setAttribute('id', 'editDeck')
            // deckDiv.appendChild(editDeck)
            // editDeck.textContent = 'Edit';

            deckDiv.addEventListener('click', updateCurrentDeck);
            deckTitleDiv.addEventListener('click', updateCurrentDeck);
            deckTitleDiv.addEventListener('input', saveDeckTitle);
            // editDeck.addEventListener('click', showForm);
        }
        });
    updateCurrentDeckDiv();
    styleCurrent();
    // console.log(currentDeckDiv);

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
    e.stopImmediatePropagation();

    // console.log('saving change to title');
    const text = e.target.textContent;
    // console.log(text);
    // console.log(currentDeck.bookmark);
    // console.log(currentDeck.cardsArray[currentDeck.bookmark]);
    // currentDeck.cardsArray[currentDeck.bookmark] = text;
    const theCard = _controlls__WEBPACK_IMPORTED_MODULE_0__.getCard(currentDeck.cardsArray[currentDeck.bookmark]);
    // console.log(theCard);
    theCard.cardName = text;
    currentDeck.cardsArray[currentDeck.bookmark] = text;
    // console.log(theCard.cardName);
}

const drawTitleDiv = () => {
    const cardTitleDiv = document.createElement('div');
    cardTitleDiv.setAttribute('id', 'cardTitle');
    cardTitleDiv.setAttribute('class', 'cardTitle');
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
    // console.log('saving change to text');
    const text = e.target.textContent;
    // console.log(text);
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

const deleteAndEraseCard = () => {
    _controlls__WEBPACK_IMPORTED_MODULE_0__.deleteCard();
    populateCard();
}

const deleteAndEraseDeck = (e) => {
    const deleteDiv = e.target;
    const deckDiv = deleteDiv.parentElement;
    const deckTitleDiv = deckDiv.firstChild();
    const deckTitle = deckTitleDiv.textContent;
    _controlls__WEBPACK_IMPORTED_MODULE_0__.deleteDeck(deckTitle);
    drawDecks();
}

const drawDeleteButton = () => {
    const cardDeleteButton = document.createElement('div');
    cardDeleteButton.setAttribute('id', 'cardDelete');
    cardDeleteButton.addEventListener('click', deleteAndEraseCard);
    cardDeleteButton.textContent = '-'
    return cardDeleteButton;
}

const drawDeckDeleteButton = () => {
    const deckDeleteButton = document.createElement('div');
    deckDeleteButton.setAttribute('id', 'deckDelete');
    deckDeleteButton.addEventListener('click', deleteAndEraseDeck);
    deckDeleteButton.textContent = '-'
    return deckDeleteButton;

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
    const cardDeleteButton = drawDeleteButton();
    cardDiv.appendChild(cardDeleteButton);
    return cardDiv;
}

const getBookmarkedCard = (aDeck) => {
    const thisBookmark = aDeck.bookmark;
    const thisCardName = aDeck.cardsArray[thisBookmark];
    console.log(`bookmrked crd is ${thisCardName}`);
    const aCard = _controlls__WEBPACK_IMPORTED_MODULE_0__.getCard(thisCardName);

    // console.log(aCard);
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
    console.log(currentDeck);
    console.log(currentDeck.bookmark);
    const theCard = getBookmarkedCard(currentDeck);
    console.log('puopulating with: ' + theCard);
    const cardTitleDiv = document.getElementById('cardTitle');
    cardTitleDiv.classList.remove('bigPlus');
    cardTitleDiv.classList.add('cardTitle');
    if(theCard !== undefined){
        cardTitleDiv.textContent = theCard.cardName;
    }
    else {
        console.log('making plus card')
        cardTitleDiv.textContent = '+';
        cardTitleDiv.setAttribute('class', 'bigPlus');
        cardTitleDiv.setAttribute('contenteditable', false);
        cardTitleDiv.addEventListener('click', showCardForm);
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
        if(theCard.cardSteps !== undefined){
            theCard.cardSteps.forEach(stepString => {
                const listItem = document.createElement('li');
                listItem.textContent = `${stepString}`
                console.log(cardStepsDiv);
                console.log(typeof cardStepsDiv);
                cardStepsDiv.appendChild(listItem);
            })
        }
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
    // console.log(element);
    // console.log(aFunction);
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

// const createCard = (name) => {
//     controller.createCard(name);
//     populateCard();
// }

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
    // console.log('showing form!');
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
    let isCurrent = 0;
    let aCard = document.getElementById('card-title').value;
    aCard = _controlls__WEBPACK_IMPORTED_MODULE_0__.createCard(aCard);
    aCard.cardSteps.push(document.getElementById('step').value);
    aCard.cardDate = document.getElementById('date').value;
    const deckList = document.getElementById('cardDeck');
    const collection = deckList.selectedOptions;
    console.log(`the current deck was ${currentDeck}`);
    if(collection.length < 2 ){
        const theSelectedDeck = collection[0].textContent;
        const theDeckName = theSelectedDeck;
        updateCurrentDeckByName(theDeckName);
    }
    console.log(`the current deck is now ${currentDeck}`);
    console.log(`selected options collection is ${collection}`);
    Array.from(collection).forEach(option => {
        console.log(`this option is ${option} it's value is ${option.value}`);
            aCard.cardDecks.push(option.value); 
            if(option.value === currentDeck.deckName){
                isCurrent = 1;
                console.log(`${option.value} is ${currentDeck.deckName}`);
            } 
    })
    aCard.cardDecks.forEach(deckNameString => {
        if(deckNameString !== 'all'){
            const aDeck = _controlls__WEBPACK_IMPORTED_MODULE_0__.getDeck(deckNameString)
            _controlls__WEBPACK_IMPORTED_MODULE_0__.addCardtoDeck(aCard, aDeck);
        }
    })
    if(isCurrent === 1){
        console.log(`${currentDeck.bookmark} is the current bookmark of the current deck.`)
        console.log(`but now it will be ${currentDeck.cardsArray.indexOf(aCard.cardName)}`);
        // const theCardBookmark = currentDeck.cardsArray.indexOf(aCard.cardName);
        currentDeck.bookmark = currentDeck.cardsArray.indexOf(aCard.cardName);
        console.log(`the current deck bookmark is now ${currentDeck.bookmark}`);
        isCurrent = 0;
    }
    console.log(`saving card. current deck is ${currentDeck}`);
    console.log(currentDeck.bookmark);
    populateCard();
    resetFormCard();
    hideForm();
    
}



const saveForm = () => {
    // console.log('save type is: '+ formType);
    if(formType ==='deck'){
        console.log('saving deck!')
        saveDeck();
    }
    else if(formType === 'card'){
        console.log('saving card!')
        saveCard();
        populateCard();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsUUFBUSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sT0FBTyxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFFBQVEsUUFBUSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxRQUFRLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxjQUFjLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssTUFBTSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcs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O0FBQ0E7QUFDQTs7QUFFQSxJQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFXO0FBQ1g7QUFDQSxrQ0FBa0MsVUFBVTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixNQUFNLElBQUksZUFBZTtBQUNwRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYc0I7QUFDMkI7QUFDaEQ7QUFDSztBQUNBOzs7O0FBSTFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FB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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxrREFBcUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsWUFBWTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLFlBQVk7QUFDdkQsa0RBQWtELFdBQVc7QUFDN0Q7QUFDQSxzQ0FBc0MsUUFBUSxnQkFBZ0IsYUFBYTtBQUMzRTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsY0FBYyxLQUFLLHFCQUFxQjtBQUN2RTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsMEJBQTBCLCtDQUFrQjtBQUM1QyxZQUFZLHFEQUF3QjtBQUNwQztBQUNBLEtBQUs7QUFDTDtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0MsMENBQTBDLCtDQUErQztBQUN6RjtBQUNBO0FBQ0Esd0RBQXdELHFCQUFxQjtBQUM3RTtBQUNBO0FBQ0EsZ0RBQWdELFlBQVk7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsY0FBYyxtREFBVztBQUN6QixlQUFlLGlEQUFTO0FBQ3hCO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtdG8tZG8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvcC10by1kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvcC10by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b3AtdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvcC10by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b3AtdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLy4vc3JjL2NhcmQuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLy4vc3JjL2NvbnRyb2xscy5qcyIsIndlYnBhY2s6Ly90b3AtdG8tZG8vLi9zcmMvZGVjay5qcyIsIndlYnBhY2s6Ly90b3AtdG8tZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SYWxld2F5Oml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Pc3dhbGQ6d2dodEAyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMCZmYW1pbHk9UmFsZXdheTppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q291cmllcitQcmltZTppdGFsLHdnaHRAMCw0MDA7MCw3MDA7MSw0MDA7MSw3MDAmZmFtaWx5PU9zd2FsZDp3Z2h0QDIwMDszMDA7NDAwOzUwMDs2MDA7NzAwJmZhbWlseT1SYWxld2F5Oml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiAqe1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn0gKi9cXG5ib2R5IHtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIFxcbiAgICAvKiBoZWlnaHQ6IDEwMHZoOyAqL1xcbiAgICBcXG59XFxuXFxuZGl2IHtcXG4gICAgLyogYm9yZGVyLXRvcDogMnB4IHNvbGlkIHdoaXRlOyAqL1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuXFxufVxcbiNjb250ZW50IHtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYzLCAxMzUsIDE1Mik7XFxuICAgIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA0cHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIG1hcmdpbjogMjBweCAwO1xcbiAgICB3aWR0aDogNDgwcHg7XFxuICAgIGhlaWdodDogMTAwdmg7ICBcXG59XFxuXFxuI2hlYWRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwcHg7XFxufVxcblxcbiNkZWNrRG9ja3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMjAwcHg7XFxufVxcblxcbi5kZWNrQXJlYXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA3cHg7XFxufVxcblxcbiN0YWJsZXtcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4jbG9nbywgLnRpdGxle1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi50aXRsZXtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuXFxuI2NhcmRBcmVhe1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDYwcHggMWZyIDYwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmRlY2ssIC5ibGFua0RlY2t7XFxuICAgIC8qIHBvaW50ZXItZXZlbnRzOiBub25lOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgaGVpZ2h0OiA5MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAvKiBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDAgN3B4IDlweCAtN3B4O1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDUzLCA4MiwgOTQsIDAuMykgMXB4IDdweCA3cHggMXB4OyAqL1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJsYW5rRGVja3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMxLCA5NCwgOTQpO1xcbn1cXG5cXG4ubWVudXtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxuICAgIGdhcDogNHB4O1xcbn1cXG5cXG4jZGVja1RpdGxlLCAjY2FyZFRpdGxlLCAjY2FyZERhdGUsICNjYXJkU3RlcHN7XFxuICAgIG1hcmdpbi10b3A6IDhweDtcXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHJnYig2MywgMTM1LCAxNTIpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtanVzdGlmeTogY2VudGVyO1xcbn1cXG5cXG4uc2VsZWN0ZWREZWNrIHtcXG4gICAgYm94LXNoYWRvdzogcmdiKDEwMiwgMjIwLCAyNDEpIDAgMCAzcHggMnB4O1xcbiAgICAvKiBib3gtc2hhZG93OiByZ2JhKDUzLCA4MiwgOTQsIDAuMykgMXB4IDlweCA5cHggMXB4OyAqL1xcbn1cXG5cXG4jYWRkQ2FyZEJ1dHRvbiwgI2FkZERlY2tCdXR0b257XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jYWRkQ2FyZEJ1dHRvbjpob3ZlciwgI2FkZERlY2tCdXR0b246aG92ZXIsIC5uZXh0QnV0dG9uOmhvdmVye1xcbiAgICAvKiB0ZXh0LXNoYWRvdzogIDAgMCAzcHggMnB4LCByZ2IoMTAyLCAxNzMsIDI0MSk7ICovXFxuICAgIHRleHQtc2hhZG93OiAtMXB4IDFweCAycHggcmdiKDEwMiwgMjIwLCAyNDEpLFxcblxcdFxcdFxcdFxcdCAgMXB4IDFweCAycHggcmdiKDEwMiwgMjIwLCAyNDEpLFxcblxcdFxcdFxcdFxcdCAgMXB4IC0xcHggMCByZ2IoMTAyLCAyMjAsIDI0MSksXFxuXFx0XFx0XFx0XFx0ICAtMXB4IC0xcHggMCByZ2IoMTAyLCAyMjAsIDI0MSk7XFxuICAgIFxcbn1cXG4ubmV4dEJ1dHRvbntcXG4gICAganVzdGlmeS1zZWxmOiByaWdodDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogcmdiKDgwLCAxNjMsIDE4Mik7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogNzJweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNmb3J3YXJkQnV0dG9ue1xcbiAgICBqdXN0aWZ5LXNlbGY6IGxlZnQ7XFxuICAgIGdyaWQtY29sdW1uOiAzLzQ7XFxufVxcblxcbiNiYWNrd2FyZEJ1dHRvbntcXG4gICAganVzdGlmeS1zZWxmOiByaWdodDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG59XFxuXFxuXFxuLmNhcmRCaWd7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMjQwcHg7XFxuICAgIGhlaWdodDogMzYwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDUzLCA4MiwgOTQsIDAuMykgMXB4IDlweCA5cHggMXB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgei1pbmRleDogMTtcXG5cXG59XFxuXFxuI3RvcENhcmR7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDgsIDFmcik7XFxuXFxuICAgIC8qIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICovXFxufVxcblxcbi5iaWdQbHVzLCAubGl0dGxlUGx1c3tcXG4gICAgZ3JpZC1jb2x1bW46IDEvNTtcXG4gICAgZ3JpZC1yb3c6IDQvNjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDcycHg7XFxuICAgIGNvbG9yOiByZ2IoNjMsIDEzNSwgMTUyKTtcXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnN0YWNrMHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA2cHg7XFxuICAgIGxlZnQ6IDYzcHg7XFxuICAgIC8qIHotaW5kZXg6IC0xOyAqL1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyZGVnKTtcXG59XFxuXFxuLnN0YWNrMXtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDNweDtcXG4gICAgbGVmdDogNThweDtcXG4gICAgLyogei1pbmRleDogLTI7ICovXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDFkZWcpO1xcbn1cXG5cXG4uc3RhY2sye1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNHB4O1xcbiAgICBsZWZ0OiAxMjBweDtcXG4gICAgLyogei1pbmRleDogLTM7ICovXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDZkZWcpO1xcbn1cXG5cXG4uZWRpdFNpemV7XFxuICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxODBweDsgKi9cXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDQ1MHB4O1xcbiAgICB6LWluZGV4OiAzO1xcbn1cXG5cXG4ub3ZlckxheUhvbGRlcntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7IFxcbiAgICBcXG59XFxuLm92ZXJsYXl7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM3LCAxMDcsIDEwNyk7XFxuICAgIG9wYWNpdHk6IDYwJTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBwYWRkaW5nOiAyMHB4OyBcXG59XFxuXFxuLmZvcm1EaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogNjAwcHg7XFxuICAgIHotaW5kZXg6IDM7XFxufVxcblxcbi5zdWJtaXRCdXR0b25zRGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBnYXA6IDE2cHg7XFxuICAgIGhlaWdodDogNDRweDtcXG59XFxuXFxuLmNhcmRGb3Jte1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDE2cHg7XFxuICAgIHdpZHRoOjMwMHB4O1xcbiAgICBoZWlnaHQ6IDQxMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxLjVmciAxLjVmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDcsIDFmcik7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5pbnB1dCwgLmNoZWNre1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGdyaWQtY29sdW1uOiAxLzU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MiwgMjQyLCAyNDIpO1xcbiAgICBjb2xvcjogcmdiKDgwLCAxNjMsIDE4Mik7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaW5wdXQ6aG92ZXJ7XFxuICAgIGJveC1zaGFkb3c6IHJnYigxMDIsIDE3MywgMjQxKSAwIDAgM3B4IDJweDtcXG4gICAgYm94LXNoYWRvdzogcmdiKDEwMiwgMjIwLCAyNDEpIDAgMCAzcHggMnB4O1xcbn1cXG5cXG4uY2FyZFRpdGxle1xcbiAgIGdyaWQtcm93OiAxLzI7XFxuICAgZ3JpZC1jb2x1bW46IDEvNTtcXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNjYXJkU3RlcHN7XFxuICAgIGdyaWQtY29sdW1uOiAyLzQ7XFxuICAgIGdyaWQtcm93OiAyLzc7XFxufVxcblxcbiNjYXJkRGF0ZXtcXG4gICAgZ3JpZC1yb3c6IDcvODtcXG4gICAgZ3JpZC1jb2x1bW46IDEvNTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jY2FyZERlbGV0ZXtcXG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiA4Lzk7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODAsIDE2MywgMTgyKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtanVzdGlmeTogY2VudGVyO1xcbn1cXG5cXG4jZGVja0RlbGV0ZXtcXG4gICAgd2lkdGg6IDhweDtcXG4gICAgaGVpZ2h0OiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgwLCAxNjMsIDE4Mik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiA5cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC1qdXN0aWZ5OiBjZW50ZXI7IFxcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uY2hlY2t7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgei1pbmRleDogMztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY2hlY2s6aG92ZXJ7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuW2NvbnRlbnRlZGl0YWJsZV0ge1xcbiAgICBvdXRsaW5lOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICB9XFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTs7R0FFRztBQUNIO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZUFBZTs7SUFFZixtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLFlBQVk7O0FBRWhCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1DQUFtQztJQUNuQyx3RUFBd0U7SUFDeEUsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUixhQUFhO0lBQ2IsY0FBYztJQUNkLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFl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QUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG9DQUFvQztJQUNwQyx3QkFBd0I7SUFDeEIsa0NBQWtDO0lBQ2xDLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwwQ0FBMEM7SUFDMUMsMENBQTBDO0FBQzlDOztBQUVBO0dBQ0csYUFBYTtHQUNiLGdCQUFnQjtHQUNoQixrQkFBa0I7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1DQUFtQztJQUNuQyxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG1DQUFtQztJQUNuQyxZQUFZO0lBQ1osa0NBQWtDO0lBQ2xDLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDhCQUE4QjtFQUNoQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SYWxld2F5Oml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXAnKTsgXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3N3YWxkOndnaHRAMjAwOzMwMDs0MDA7NTAwOzYwMDs3MDAmZmFtaWx5PVJhbGV3YXk6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCcpO1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNvdXJpZXIrUHJpbWU6aXRhbCx3Z2h0QDAsNDAwOzAsNzAwOzEsNDAwOzEsNzAwJmZhbWlseT1Pc3dhbGQ6d2dodEAyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMCZmYW1pbHk9UmFsZXdheTppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZGlzcGxheT1zd2FwJyk7XFxuLyogKntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59ICovXFxuYm9keSB7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBcXG4gICAgLyogaGVpZ2h0OiAxMDB2aDsgKi9cXG4gICAgXFxufVxcblxcbmRpdiB7XFxuICAgIC8qIGJvcmRlci10b3A6IDJweCBzb2xpZCB3aGl0ZTsgKi9cXG4gICAgcGFkZGluZzogNHB4O1xcblxcbn1cXG4jY29udGVudCB7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2MywgMTM1LCAxNTIpO1xcbiAgICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBtYXJnaW46IDIwcHggMDtcXG4gICAgd2lkdGg6IDQ4MHB4O1xcbiAgICBoZWlnaHQ6IDEwMHZoOyAgXFxufVxcblxcbiNoZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4jZGVja0RvY2t7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbn1cXG5cXG4uZGVja0FyZWF7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogN3B4O1xcbn1cXG5cXG4jdGFibGV7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuI2xvZ28sIC50aXRsZXtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4udGl0bGV7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcblxcbiNjYXJkQXJlYXtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2MHB4IDFmciA2MHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5kZWNrLCAuYmxhbmtEZWNre1xcbiAgICAvKiBwb2ludGVyLWV2ZW50czogbm9uZTsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGhlaWdodDogOTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgLyogYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwIDdweCA5cHggLTdweDtcXG4gICAgYm94LXNoYWRvdzogcmdiYSg1MywgODIsIDk0LCAwLjMpIDFweCA3cHggN3B4IDFweDsgKi9cXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ibGFua0RlY2t7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzMSwgOTQsIDk0KTtcXG59XFxuXFxuLm1lbnV7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcbiAgICBnYXA6IDRweDtcXG59XFxuXFxuI2RlY2tUaXRsZSwgI2NhcmRUaXRsZSwgI2NhcmREYXRlLCAjY2FyZFN0ZXBze1xcbiAgICBtYXJnaW4tdG9wOiA4cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiByZ2IoNjMsIDEzNSwgMTUyKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LWp1c3RpZnk6IGNlbnRlcjtcXG59XFxuXFxuLnNlbGVjdGVkRGVjayB7XFxuICAgIGJveC1zaGFkb3c6IHJnYigxMDIsIDIyMCwgMjQxKSAwIDAgM3B4IDJweDtcXG4gICAgLyogYm94LXNoYWRvdzogcmdiYSg1MywgODIsIDk0LCAwLjMpIDFweCA5cHggOXB4IDFweDsgKi9cXG59XFxuXFxuI2FkZENhcmRCdXR0b24sICNhZGREZWNrQnV0dG9ue1xcbiAgICBmb250LXNpemU6IDQ4cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2FkZENhcmRCdXR0b246aG92ZXIsICNhZGREZWNrQnV0dG9uOmhvdmVyLCAubmV4dEJ1dHRvbjpob3ZlcntcXG4gICAgLyogdGV4dC1zaGFkb3c6ICAwIDAgM3B4IDJweCwgcmdiKDEwMiwgMTczLCAyNDEpOyAqL1xcbiAgICB0ZXh0LXNoYWRvdzogLTFweCAxcHggMnB4IHJnYigxMDIsIDIyMCwgMjQxKSxcXG5cXHRcXHRcXHRcXHQgIDFweCAxcHggMnB4IHJnYigxMDIsIDIyMCwgMjQxKSxcXG5cXHRcXHRcXHRcXHQgIDFweCAtMXB4IDAgcmdiKDEwMiwgMjIwLCAyNDEpLFxcblxcdFxcdFxcdFxcdCAgLTFweCAtMXB4IDAgcmdiKDEwMiwgMjIwLCAyNDEpO1xcbiAgICBcXG59XFxuLm5leHRCdXR0b257XFxuICAgIGp1c3RpZnktc2VsZjogcmlnaHQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IHJnYig4MCwgMTYzLCAxODIpO1xcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDcycHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jZm9yd2FyZEJ1dHRvbntcXG4gICAganVzdGlmeS1zZWxmOiBsZWZ0O1xcbiAgICBncmlkLWNvbHVtbjogMy80O1xcbn1cXG5cXG4jYmFja3dhcmRCdXR0b257XFxuICAgIGp1c3RpZnktc2VsZjogcmlnaHQ7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxufVxcblxcblxcbi5jYXJkQmlne1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDI0MHB4O1xcbiAgICBoZWlnaHQ6IDM2MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSg1MywgODIsIDk0LCAwLjMpIDFweCA5cHggOXB4IDFweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHotaW5kZXg6IDE7XFxuXFxufVxcblxcbiN0b3BDYXJke1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg4LCAxZnIpO1xcblxcbiAgICAvKiBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAqL1xcbn1cXG5cXG4uYmlnUGx1cywgLmxpdHRsZVBsdXN7XFxuICAgIGdyaWQtY29sdW1uOiAxLzU7XFxuICAgIGdyaWQtcm93OiA0LzY7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiA3MnB4O1xcbiAgICBjb2xvcjogcmdiKDYzLCAxMzUsIDE1Mik7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5zdGFjazB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNnB4O1xcbiAgICBsZWZ0OiA2M3B4O1xcbiAgICAvKiB6LWluZGV4OiAtMTsgKi9cXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMmRlZyk7XFxufVxcblxcbi5zdGFjazF7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAzcHg7XFxuICAgIGxlZnQ6IDU4cHg7XFxuICAgIC8qIHotaW5kZXg6IC0yOyAqL1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxZGVnKTtcXG59XFxuXFxuLnN0YWNrMntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDRweDtcXG4gICAgbGVmdDogMTIwcHg7XFxuICAgIC8qIHotaW5kZXg6IC0zOyAqL1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg2ZGVnKTtcXG59XFxuXFxuLmVkaXRTaXple1xcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTgwcHg7ICovXFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiA0NTBweDtcXG4gICAgei1pbmRleDogMztcXG59XFxuXFxuLm92ZXJMYXlIb2xkZXJ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoOyBcXG4gICAgXFxufVxcbi5vdmVybGF5e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNywgMTA3LCAxMDcpO1xcbiAgICBvcGFjaXR5OiA2MCU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgei1pbmRleDogMjtcXG4gICAgcGFkZGluZzogMjBweDsgXFxufVxcblxcbi5mb3JtRGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XFxuICAgIGdhcDogMjBweDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDYwMHB4O1xcbiAgICB6LWluZGV4OiAzO1xcbn1cXG5cXG4uc3VibWl0QnV0dG9uc0RpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZ2FwOiAxNnB4O1xcbiAgICBoZWlnaHQ6IDQ0cHg7XFxufVxcblxcbi5jYXJkRm9ybXtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxNnB4O1xcbiAgICB3aWR0aDozMDBweDtcXG4gICAgaGVpZ2h0OiA0MTBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMS41ZnIgMS41ZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg3LCAxZnIpO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4uaW5wdXQsIC5jaGVja3tcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBncmlkLWNvbHVtbjogMS81O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDIsIDI0MiwgMjQyKTtcXG4gICAgY29sb3I6IHJnYig4MCwgMTYzLCAxODIpO1xcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmlucHV0OmhvdmVye1xcbiAgICBib3gtc2hhZG93OiByZ2IoMTAyLCAxNzMsIDI0MSkgMCAwIDNweCAycHg7XFxuICAgIGJveC1zaGFkb3c6IHJnYigxMDIsIDIyMCwgMjQxKSAwIDAgM3B4IDJweDtcXG59XFxuXFxuLmNhcmRUaXRsZXtcXG4gICBncmlkLXJvdzogMS8yO1xcbiAgIGdyaWQtY29sdW1uOiAxLzU7XFxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jY2FyZFN0ZXBze1xcbiAgICBncmlkLWNvbHVtbjogMi80O1xcbiAgICBncmlkLXJvdzogMi83O1xcbn1cXG5cXG4jY2FyZERhdGV7XFxuICAgIGdyaWQtcm93OiA3Lzg7XFxuICAgIGdyaWQtY29sdW1uOiAxLzU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2NhcmREZWxldGV7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogOC85O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgwLCAxNjMsIDE4Mik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LWp1c3RpZnk6IGNlbnRlcjtcXG59XFxuXFxuI2RlY2tEZWxldGV7XFxuICAgIHdpZHRoOiA4cHg7XFxuICAgIGhlaWdodDogOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4MCwgMTYzLCAxODIpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogOXB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtanVzdGlmeTogY2VudGVyOyBcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuLmNoZWNre1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIHotaW5kZXg6IDM7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNoZWNrOmhvdmVye1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbltjb250ZW50ZWRpdGFibGVdIHtcXG4gICAgb3V0bGluZTogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgfVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGNhcmQgPSAobmFtZSkgPT4ge1xuICBjb25zdCBjYXJkTmFtZSA9IG5hbWU7XG4gIGNvbnN0IGNhcmRTdGVwcyA9IFtdO1xuICBjb25zdCBjYXJkRGF0ZSA9IFwiXCI7XG4gIGNvbnN0IGNhcmRDb21wbGV0ZVZhbHVlID0gMDtcbiAgY29uc3QgY2FyZERlY2tzID0gW1wiYWxsXCJdO1xuICByZXR1cm4ge1xuICAgIGNhcmROYW1lLFxuICAgIGNhcmRDb21wbGV0ZVZhbHVlLFxuICAgIGNhcmREYXRlLFxuICAgIGNhcmRTdGVwcyxcbiAgICBjYXJkRGVja3MsXG4gIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgY2FyZDtcbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgY2FyZCBmcm9tIFwiLi9jYXJkXCI7XG5pbXBvcnQgZGVjayBmcm9tIFwiLi9kZWNrXCI7XG5cbmV4cG9ydCBjb25zdCBhbGwgPSBkZWNrKFwiYWxsXCIpO1xuY29uc29sZS5sb2coYWxsKTtcbmV4cG9ydCBjb25zdCBkZWNrQXJyYXkgPSBbXTtcbmRlY2tBcnJheS5wdXNoKGFsbCk7XG5leHBvcnQgY29uc3QgdGFibGUgPSBkZWNrQXJyYXk7XG5leHBvcnQgY29uc3QgZGVmYXVsdERlY2sgPSBkZWNrKCdUby1EbycpO1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRDYXJkID0gY2FyZCgnR2V0IEdyb2NlcmllcycpO1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRDYXJkMiA9IGNhcmQoJ01haWwgVGhhbmsgWW91IE5vdGVzJyk7XG5hbGwuY2FyZHNBcnJheS5wdXNoKGRlZmF1bHRDYXJkKTtcbmFsbC5jYXJkc0FycmF5LnB1c2goZGVmYXVsdENhcmQyKTtcbmRlZmF1bHREZWNrLmNhcmRzQXJyYXkucHVzaChkZWZhdWx0Q2FyZC5jYXJkTmFtZSk7XG5kZWZhdWx0RGVjay5jYXJkc0FycmF5LnB1c2goZGVmYXVsdENhcmQyLmNhcmROYW1lKTtcbmRlY2tBcnJheS5wdXNoKGRlZmF1bHREZWNrKTtcblxuXG4gICAgY29uc3Qgdmlld0FsbCA9ICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGBBbGwgY2FyZHMgYXJlOiAke2FsbH1gKTtcbiAgICAgIGNvbnNvbGUubG9nKGBhbGwgZGVja3MgYXJlOiAke3RhYmxlfWApO1xuICAgICAgYWxsLmNhcmRzQXJyYXkuZm9yRWFjaCgoY2FyZEVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYGFsbCArICR7Y2FyZEVsZW1lbnR9YCk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3Qgdmlld0RlY2sgPSAobmFtZSkgPT4ge1xuICAgICAgbGV0IGN1cnJlbnREZWNrO1xuICAgICAgbGV0IHdhc01hdGNoZWQgPSBmYWxzZTtcbiAgICAgIHRhYmxlLmZvckVhY2goKGRlY2tFbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW4gZm9yIGVhY2hcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKGRlY2tFbGVtZW50KTtcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudERlY2spO1xuICAgICAgICBjb25zb2xlLmxvZyh0eXBlb2YgY3VycmVudERlY2spO1xuICAgICAgICBpZiAoZGVja0VsZW1lbnQuZGVja05hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgICBjdXJyZW50RGVjayA9IGRlY2tFbGVtZW50O1xuICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnREZWNrKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyh0eXBlb2YgY3VycmVudERlY2spO1xuICAgICAgICAgIHdhc01hdGNoZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmICh3YXNNYXRjaGVkID09PSBmYWxzZSkge1xuICAgICAgICBjdXJyZW50RGVjayA9IGFsbDtcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudERlY2spO1xuICAgICAgICBjb25zb2xlLmxvZyh0eXBlb2YgY3VycmVudERlY2spO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2codHlwZW9mIGN1cnJlbnREZWNrKTtcbiAgICAgIGNvbnNvbGUubG9nKGAke2N1cnJlbnREZWNrLmRlY2tOYW1lfSBjb250ZW50cyBhcmU6IGApO1xuICAgICAgY3VycmVudERlY2suY2FyZHNBcnJheS5mb3JFYWNoKChjYXJkRWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhjYXJkRWxlbWVudCk7XG4gICAgICB9KTtcbiAgICAgIFxuICAgIH07XG5cbiAgICBleHBvcnQgY29uc3QgY3JlYXRlRGVjayA9IChuYW1lKSA9PiB7XG4gICAgICAgIC8vIGNvbnN0IHRoZU5hbWUgPSBwcm9tcHQoJ1doYXQgaXMgdGhlIG5hbWUgb2YgdGVoIGRlY2s/JylcbiAgICAgIGNvbnN0IHRoaXNEZWNrID0gZGVjayhuYW1lKTtcbiAgICAgIHRhYmxlLnB1c2godGhpc0RlY2spO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJ0aGUgZGVjayBjcmVhdGVkIGlzOiBcIiArIHRoaXNEZWNrKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiaXRzIG5hbWUgaXM6IFwiICsgdGhpc0RlY2suZGVja05hbWUpO1xuICAgIH07XG5cbiAgICBleHBvcnQgY29uc3QgYWRkQ2FyZHRvRGVjayA9ICh0aGlzQ2FyZCwgdGhpc0RlY2spID0+IHtcbiAgICAgICAgdGhpc0NhcmQuY2FyZERlY2sgPSB0aGlzRGVjay5kZWNrTmFtZTtcbiAgICAgICAgdGhpc0RlY2suY2FyZHNBcnJheS5wdXNoKHRoaXNDYXJkLmNhcmROYW1lKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpc0RlY2spO1xuICAgICAgfTtcblxuICAgIFxuXG4gICAgZXhwb3J0IGNvbnN0IGdldENhcmQgPSAobmFtZSkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhuYW1lKVxuICAgICAgbGV0IHRoaXNDYXJkO1xuICAgICAgLy8gY29uc29sZS5sb2codGhpc0NhcmQpO1xuICAgICAgLy8gY29uc29sZS5sb2coYWxsLmxlbmd0aCk7XG4gICAgICBjb25zb2xlLmxvZyhhbGwuY2FyZHNBcnJheSk7XG4gICAgICBhbGwuY2FyZHNBcnJheS5mb3JFYWNoKChjYXJkRWxlbWVudCkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhjYXJkRWxlbWVudC5jYXJkTmFtZSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG5hbWUpO1xuICAgICAgICBpZiAoY2FyZEVsZW1lbnQuY2FyZE5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgJHtjYXJkRWxlbWVudC5jYXJkTmFtZX0gPT09ICR7bmFtZX1gKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzQ2FyZCk7XG4gICAgICAgICAgY29uc29sZS5sb2coY2FyZEVsZW1lbnQpO1xuICAgICAgICAgIHRoaXNDYXJkID0gY2FyZEVsZW1lbnQ7XG4gICAgICAgICAgY29uc29sZS5sb2codGhpc0NhcmQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAvLyAgIGlmICh0aGVDYXJkID09PSB1bmRlZmluZWQpIHtcbiAgICAvLyAgICAgLy8gY29uc3QgY2FyZE5hbWUgPSBwcm9tcHQoXG4gICAgLy8gICAgIC8vICAgXCJ0aGF0IGNhcmQgZG9lcyBub3QgZXhpc3QsIHBsZWFzZSBlbnRlciBhbm90aGVyIG5hbWU6XCJcbiAgICAvLyAgICAgLy8gKTtcbiAgICAvLyAgICAgLy8gdGhlQ2FyZCA9IGdldENhcmQoY2FyZE5hbWUpO1xuICAgIC8vICAgfVxuICAgICAgY29uc29sZS5sb2codGhpc0NhcmQpXG4gICAgICByZXR1cm4gdGhpc0NhcmQ7XG4gICAgfTtcblxuICAgIGV4cG9ydCBjb25zdCBnZXREZWNrID0gKG5hbWUpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdHRVRUSU5HIERFQ0snKTtcbiAgICAgIGxldCB0aGVEZWNrO1xuICAgICAgdGFibGUuZm9yRWFjaCgoZGVja0VsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0aGUgIGRlY2sgbmFtZSBpczogXCIgKyBkZWNrRWxlbWVudC5kZWNrTmFtZSk7XG4gICAgICAgIGlmIChkZWNrRWxlbWVudC5kZWNrTmFtZSA9PT0gbmFtZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiaXQgbWF0Y2hlZCFcIik7XG4gICAgICAgICAgY29uc29sZS5sb2coZGVja0VsZW1lbnQuZGVja05hbWUsIG5hbWUpO1xuICAgICAgICAgIHRoZURlY2sgPSBkZWNrRWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcImdldHRpbmcgZGVjazogXCIgKyB0aGVEZWNrKTtcbiAgICAgIH0pO1xuICAgICAgLy8gaWYgKHRoZURlY2sgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gICBjb25zdCBkZWNrTmFtZSA9IHByb21wdChcbiAgICAgIC8vICAgICBcInRoYXQgZGVjayBkb2VzIG5vdCBleGlzdCwgcGxlYXNlIGVudGVyIGFub3RoZXIgbmFtZTpcIlxuICAgICAgLy8gICApO1xuICAgICAgLy8gICB0aGVEZWNrID0gZ2V0RGVjayhkZWNrTmFtZSk7XG4gICAgICAvLyB9XG4gICAgICBjb25zb2xlLmxvZyh0aGVEZWNrKTtcbiAgICAgIHJldHVybiB0aGVEZWNrO1xuICAgIH07XG5cbiAgICBleHBvcnQgY29uc3QgY3JlYXRlQ2FyZCA9IChuYW1lKSA9PiB7XG4gICAgICAgIC8vIGNvbnN0IHRoZU5hbWUgPSBwcm9tcHQoJ1doYXQgaXMgdGhlIG5hbWUgb2YgdGhlIGNhcmQ/JylcbiAgICAgIGNvbnN0IG5ld0NhcmQgPSBjYXJkKG5hbWUpO1xuICAgICAgLy8gY29uc3QgbmFtZU9mRGVjayA9IHByb21wdCgnd2hhdCBkZWNrPycpO1xuICAgICAgLy8gbmV3Q2FyZC5jYXJkRGVja3MucHVzaChuYW1lT2ZEZWNrKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKG5ld0NhcmQuY2FyZERlY2tzKTtcbiAgICAgIC8vIG5ld0NhcmQuY2FyZERlY2tzLmZvckVhY2goZGVja05hbWUgPT4ge1xuICAgICAgLy8gICBpZihkZWNrTmFtZSAhPT0gJ2FsbCcpe1xuICAgICAgLy8gICBjb25zdCB0aGlzRGVjayA9IGdldERlY2soZGVja05hbWUpO1xuICAgICAgLy8gICBjb25zb2xlLmxvZygnYWRkaW5nIGh0ZSBmdWxsb3dpbmcgY2FyZCB0byB0aGUgZm9sbG93aW5nIGRlY2sgJysgbmV3Q2FyZC5jYXJkTmFtZSArIFwiIFwiICsgdGhpc0RlY2suZGVja05hbWUpO1xuICAgICAgLy8gICBhZGRDYXJkdG9EZWNrKG5ld0NhcmQsIHRoaXNEZWNrKVxuICAgICAgLy8gICB9XG4gICAgICAgIFxuICAgICAgLy8gfSlcbiAgICBhbGwuY2FyZHNBcnJheS5wdXNoKG5ld0NhcmQpO1xuICAgIGNvbnNvbGUubG9nKGBwdXNpbmcgJHtuZXdDYXJkfSB0byAke2FsbH1gKTtcbiAgICByZXR1cm4gbmV3Q2FyZDtcbiAgICBcbiAgICB9O1xuXG4gICAgXG5cbiAgICBjb25zdCBkZWxldGVDYXJkRnJvbURlY2sgPSAodGhpc0NhcmQsIHRoaXNEZWNrKSA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXNEZWNrLmNhcmRzQXJyYXkuaW5kZXhPZih0aGlzQ2FyZC5jYXJkTmFtZSk7XG4gICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICB0aGlzRGVjay5jYXJkc0FycmF5LnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpc0RlY2s7XG4gICAgfTtcblxuICAgIGV4cG9ydCBjb25zdCBkZWxldGVDYXJkID0gKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2RlbGV0aW5nJylcbiAgICAgIGNvbnN0IGNhcmREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZFRpdGxlJyk7XG4gICAgICBjb25zdCBhQ2FyZE5hbWUgPSBjYXJkRGl2LnRleHRDb250ZW50O1xuICAgICAgY29uc3QgdGhpc0NhcmQgPSBnZXRDYXJkKGFDYXJkTmFtZSk7XG4gICAgICBjb25zdCBpbmRleCA9IGFsbC5jYXJkc0FycmF5LmluZGV4T2YodGhpc0NhcmQpO1xuICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgYWxsLmNhcmRzQXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKGFsbCk7XG4gICAgICByZXR1cm4gYWxsO1xuICAgIH07XG5cbiAgICBleHBvcnQgY29uc3QgZGVsZXRlRGVjayA9IChhRGVja05hbWUpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdERUxFVEVJTkcgREVDSyBJTiBDT05UUk9MTFMnKVxuICAgICAgY29uc29sZS5sb2coYGRlY2sgbmFtZSBpcyAke2FEZWNrTmFtZX1gKVxuICAgICAgY29uc3QgZGVja09iaiA9IGdldERlY2soYURlY2tOYW1lKTtcbiAgICAgIGNvbnN0IGluZGV4ID0gZGVja0FycmF5LmluZGV4T2YoZGVja09iaik7XG4gICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICBkZWNrQXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkZWNrQXJyYXk7XG4gICAgfTtcblxuICAgIGNvbnN0IG1vdmVDYXJkID0gKHRoZUNhcmROYW1lLCBkZWNrT25lTmFtZSwgZGVja1R3b05hbWUpID0+IHtcbiAgICAgIGNvbnN0IHRoaXNDYXJkID0gZ2V0Q2FyZCh0aGVDYXJkTmFtZSk7XG4gICAgICBjb25zdCBkZWNrT25lID0gZ2V0RGVjayhkZWNrT25lTmFtZSk7XG4gICAgICBjb25zdCBkZWNrVHdvID0gZ2V0RGVjayhkZWNrVHdvTmFtZSk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzQ2FyZCwgZGVja09uZSwgZGVja1R3byk7XG4gICAgICBkZWxldGVDYXJkRnJvbURlY2sodGhpc0NhcmQsIGRlY2tPbmUpO1xuICAgICAgYWRkQ2FyZHRvRGVjayh0aGlzQ2FyZCwgZGVja1R3byk7XG4gICAgfTtcblxuICAgIGNvbnN0IHZpZXdDYXJkID0gKHRoZUNhcmROYW1lKSA9PiB7XG4gICAgICBjb25zdCB0aGlzQ2FyZCA9IGdldENhcmQodGhlQ2FyZE5hbWUpO1xuICAgICAgZm9yIChjb25zdCBwcm9wIGluIHRoaXNDYXJkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBvYmouJHtwcm9wfSA9ICR7dGhpc0NhcmRbcHJvcF19YCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHNldERhdGUgPSAodGhlQ2FyZE5hbWUpID0+IHtcbiAgICAgIGNvbnN0IHRoaXNDYXJkID0gZ2V0Q2FyZCh0aGVDYXJkTmFtZSk7XG4gICAgICBjb25zdCBhRGF0ZSA9IHByb21wdChcImVudGVyIHRoZSBkdWUgZGF0ZSBpbiB0aGUgZm9ybSBvZiBNTS5ERC5ZWTpcIik7XG4gICAgICB0aGlzQ2FyZC5jYXJkRGF0ZSA9IG5ldyBEYXRlKGFEYXRlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgYWRkU3RlcCA9ICh0aGVDYXJkTmFtZSkgPT4ge1xuICAgICAgY29uc3QgdGhpc0NhcmQgPSBnZXRDYXJkKHRoZUNhcmROYW1lKTtcbiAgICAgIGNvbnN0IGkgPSB0aGlzQ2FyZC5jYXJkU3RlcHMubGVuZ3RoO1xuICAgICAgdGhpc0NhcmQuY2FyZFN0ZXBzW2ldID0gcHJvbXB0KFwiZW50ZXIgeW91ciBzdGVwOlwiKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0U3RlcCA9ICh0aGVDYXJkTmFtZSkgPT4ge1xuICAgICAgY29uc3QgdGhpc0NhcmQgPSBnZXRDYXJkKHRoZUNhcmROYW1lKTtcbiAgICAgIGNvbnN0IGkgPSBwcm9tcHQoXCJ3aGF0IGluZGV4P1wiKTtcbiAgICAgIHRoaXNDYXJkLmNhcmRTdGVwc1tpXSA9IHByb21wdChcImVudGVyIHlvdXIgc3RlcDpcIik7XG4gICAgfTtcblxuICAgIGNvbnN0IHNldENvbXBsZXRlID0gKHRoZUNhcmROYW1lKSA9PiB7XG4gICAgICBjb25zdCB0aGlzQ2FyZCA9IGdldENhcmQodGhlQ2FyZE5hbWUpO1xuICAgICAgdGhpc0NhcmQuY2FyZENvbXBsZXRlVmFsdWUgPSBOdW1iZXIoXG4gICAgICAgIHByb21wdChcbiAgICAgICAgICBcImlzIHlvdXIgdGFzayBjb21wbGV0ZT8gSWYgc28sIGVudGVyIGEgJzEnIG90aGVyd2lzZSBlbmV0ZXIgJzAnLlwiXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfTtcblxuICAgIC8vIHJldHVybiB7XG4gICAgLy8gICB2aWV3QWxsLFxuICAgIC8vICAgdmlld0NhcmQsXG4gICAgLy8gICB2aWV3RGVjayxcbiAgICAvLyAgIGNyZWF0ZUNhcmQsXG4gICAgLy8gICBjcmVhdGVEZWNrLFxuICAgIC8vICAgZ2V0Q2FyZCxcbiAgICAvLyAgIGdldERlY2ssXG4gICAgLy8gICBhZGRDYXJkdG9EZWNrLFxuICAgIC8vICAgZGVsZXRlQ2FyZEZyb21EZWNrLFxuICAgIC8vICAgZGVsZXRlQ2FyZCxcbiAgICAvLyAgIGRlbGV0ZURlY2ssXG4gICAgLy8gICBtb3ZlQ2FyZCxcbiAgICAvLyAgIHNldERhdGUsXG4gICAgLy8gICBhZGRTdGVwLFxuICAgIC8vICAgc2V0Q29tcGxldGUsXG4gICAgLy8gICBzZXRTdGVwLFxuICAgIC8vIH07XG5cblxuIiwiY29uc3QgZGVjayA9IChuYW1lKSA9PiB7XG4gIGNvbnN0IGRlY2tOYW1lID0gbmFtZTtcbiAgY29uc3QgY2FyZHNBcnJheSA9IFtdO1xuICBjb25zdCBib29rbWFyayA9IDA7XG4gIHJldHVybiB7XG4gICAgZGVja05hbWUsXG4gICAgY2FyZHNBcnJheSxcbiAgICBib29rbWFyayxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRlY2s7XG4iLCJpbXBvcnQgKiBhcyBjb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxzJztcbmltcG9ydCB7ZGVmYXVsdERlY2ssIGRlZmF1bHRDYXJkLCBkZWNrQXJyYXksIGFsbH0gZnJvbSAnLi9jb250cm9sbHMnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgY2FyZCBmcm9tIFwiLi9jYXJkXCI7XG5pbXBvcnQgZGVjayBmcm9tIFwiLi9kZWNrXCI7XG5cblxuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb250ZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGVudCcpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWluZXInKTtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5oZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsICdoZWFkZXInKTtcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG5jb25zdCBkZWNrRG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZGVja0RvY2suc2V0QXR0cmlidXRlKCdpZCcsICdkZWNrRG9jaycpO1xuY29udGFpbmVyLmFwcGVuZENoaWxkKGRlY2tEb2NrKTtcblxuY29uc3QgY2FyZERvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNhcmREb2NrLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFibGUnKTtcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkRG9jayk7XG5cbmNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmxvZ28uc2V0QXR0cmlidXRlKCdpZCcsICdsb2dvJyk7XG5oZWFkZXIuYXBwZW5kQ2hpbGQobG9nbyk7XG5sb2dvLnRleHRDb250ZW50ID0gJ1NodWZmbGUnO1xuXG5jb25zdCBkZWNrRG9ja01lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmRlY2tEb2NrTWVudS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUnKTtcbmRlY2tEb2NrLmFwcGVuZENoaWxkKGRlY2tEb2NrTWVudSk7XG5cbmxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmRpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RpdGxlJyk7XG5kZWNrRG9ja01lbnUuYXBwZW5kQ2hpbGQoZGl2KTtcbmRpdi50ZXh0Q29udGVudCA9ICdEZWNrcyc7XG5cbmNvbnN0IGFkZERlY2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmFkZERlY2tCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdhZGREZWNrQnV0dG9uJyk7XG5hZGREZWNrQnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGl0bGUnKVxuZGVja0RvY2tNZW51LmFwcGVuZENoaWxkKGFkZERlY2tCdXR0b24pO1xuYWRkRGVja0J1dHRvbi50ZXh0Q29udGVudCA9ICcrJztcblxuY29uc3QgZGVja0FyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmRlY2tBcmVhLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGVja0FyZWEnKTtcbmRlY2tEb2NrLmFwcGVuZENoaWxkKGRlY2tBcmVhKTtcblxuY29uc3QgY2FyZERvY2tNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jYXJkRG9ja01lbnUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51Jyk7XG5jYXJkRG9jay5hcHBlbmRDaGlsZChjYXJkRG9ja01lbnUpO1xuXG5kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmRpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RpdGxlJyk7XG5jYXJkRG9ja01lbnUuYXBwZW5kQ2hpbGQoZGl2KTtcbmRpdi50ZXh0Q29udGVudCA9ICdDYXJkcyc7XG5cbmNvbnN0IGFkZENhcmRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmFkZENhcmRCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdhZGRDYXJkQnV0dG9uJyk7XG5hZGRDYXJkQnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGl0bGUnKVxuY2FyZERvY2tNZW51LmFwcGVuZENoaWxkKGFkZENhcmRCdXR0b24pO1xuYWRkQ2FyZEJ1dHRvbi50ZXh0Q29udGVudCA9ICcrJztcblxuY29uc3QgY2FyZEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNhcmRBcmVhLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2FyZEFyZWEnKTtcbmNhcmREb2NrLmFwcGVuZENoaWxkKGNhcmRBcmVhKTtcblxuY29uc3QgZm9yd2FyZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZm9yd2FyZEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25leHRCdXR0b24nKTtcbmZvcndhcmRCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdmb3J3YXJkQnV0dG9uJyk7XG5jYXJkQXJlYS5hcHBlbmRDaGlsZChmb3J3YXJkQnV0dG9uKTtcbmZvcndhcmRCdXR0b24udGV4dENvbnRlbnQgPSAnPic7XG5cbmNvbnN0IGJhY2t3YXJkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5iYWNrd2FyZEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25leHRCdXR0b24nKTtcbmJhY2t3YXJkQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnYmFja3dhcmRCdXR0b24nKTtcbmNhcmRBcmVhLmFwcGVuZENoaWxkKGJhY2t3YXJkQnV0dG9uKTtcbmJhY2t3YXJkQnV0dG9uLnRleHRDb250ZW50ID0gJzwnO1xuXG5jb25zdCBvdmVyTGF5SG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5vdmVyTGF5SG9sZGVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY29udGVudCcpO1xub3ZlckxheUhvbGRlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ292ZXJMYXlIb2xkZXInKTtcbm92ZXJMYXlIb2xkZXIuY2xhc3NMaXN0LmFkZCgnb3ZlckxheUhvbGRlcicpO1xuY29udGVudC5hcHBlbmRDaGlsZChvdmVyTGF5SG9sZGVyKTtcblxuY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xub3ZlcmxheS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ292ZXJsYXknKTtcbm92ZXJMYXlIb2xkZXIuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG5cbmNvbnN0IGZvcm1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmZvcm1EaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb3JtRGl2Jyk7XG5vdmVyTGF5SG9sZGVyLmFwcGVuZENoaWxkKGZvcm1EaXYpO1xuXG5jb25zdCBuZXdDYXJkRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubmV3Q2FyZEZvcm0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkQmlnJyk7XG5uZXdDYXJkRm9ybS5jbGFzc0xpc3QuYWRkKCdlZGl0U2l6ZScpO1xubmV3Q2FyZEZvcm0uc2V0QXR0cmlidXRlKCdpZCcsICduZXdDYXJkRm9ybScpO1xuZm9ybURpdi5hcHBlbmRDaGlsZChuZXdDYXJkRm9ybSk7XG5cbmNvbnN0IHN1Ym1pdEJ1dHRvbnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnN1Ym1pdEJ1dHRvbnNEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdzdWJtaXRCdXR0b25zRGl2Jyk7XG5mb3JtRGl2LmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbnNEaXYpO1xuXG5jb25zdCBjYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNhbmNlbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NoZWNrJyk7XG5jYW5jZWwuc2V0QXR0cmlidXRlKCdpZCcsICdjYW5jZWwnKTtcbnN1Ym1pdEJ1dHRvbnNEaXYuYXBwZW5kQ2hpbGQoY2FuY2VsKTtcbmNhbmNlbC50ZXh0Q29udGVudCA9ICfinJYnO1xuXG5jb25zdCBjaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY2hlY2suc2V0QXR0cmlidXRlKCdjbGFzcycsICdjaGVjaycpO1xuc3VibWl0QnV0dG9uc0Rpdi5hcHBlbmRDaGlsZChjaGVjayk7XG5jaGVjay5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NoZWNrJyk7XG5jaGVjay50ZXh0Q29udGVudCA9ICfinJMnO1xuXG5jb25zdCBjYXJkRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbmNhcmRGb3JtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZEZvcm0nKTtcbm5ld0NhcmRGb3JtLmFwcGVuZENoaWxkKGNhcmRGb3JtKTtcblxuY29uc3QgY2FyZFRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuY2FyZFRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkVGl0bGVJbnB1dCcpO1xuY2FyZFRpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZCgnaW5wdXQnKTtcbmNhcmRGb3JtLmFwcGVuZENoaWxkKGNhcmRUaXRsZUlucHV0KTtcbmNhcmRUaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnY2FyZC10aXRsZScpO1xuY2FyZFRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbmNhcmRUaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdjYXJkLXRpdGxlJyk7XG5jYXJkVGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1RpdGxlJyk7XG5cbmNvbnN0IGNhcmREZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG5jYXJkRGVjay5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmREZWNrJyk7XG5jYXJkRGVjay5zZXRBdHRyaWJ1dGUoJ211bHRpcGxlJywgJ211bHRpcGxlJyk7XG5jYXJkRGVjay5jbGFzc0xpc3QuYWRkKCdpbnB1dCcpO1xuY2FyZEZvcm0uYXBwZW5kQ2hpbGQoY2FyZERlY2spO1xuY2FyZERlY2suc2V0QXR0cmlidXRlKCdpZCcsICdjYXJkRGVjaycpO1xuLy8gY2FyZERlY2suc2V0QXR0cmlidXRlKCd0eXBlJywgJycpO1xuY2FyZERlY2suc2V0QXR0cmlidXRlKCduYW1lJywgJ2NhcmREZWNrJyk7XG4vLyBjYXJkRGVjay5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0RlY2snKTtcblxuY29uc3Qgc3RlcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5zdGVwLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc3RlcCcpO1xuc3RlcC5jbGFzc0xpc3QuYWRkKCdpbnB1dCcpO1xuY2FyZEZvcm0uYXBwZW5kQ2hpbGQoc3RlcCk7XG5zdGVwLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3RlcCcpO1xuc3RlcC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuc3RlcC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnc3RlcCcpO1xuc3RlcC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJysgc3RlcCcpO1xuXG5jb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbmRhdGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkYXRlJyk7XG5kYXRlLmNsYXNzTGlzdC5hZGQoJ2lucHV0Jyk7XG5jYXJkRm9ybS5hcHBlbmRDaGlsZChkYXRlKTtcbi8vIGNvbnN0IHRoZURhdGUgPSBuZXcgRGF0ZSgpO1xuLy8gY29uc29sZS5sb2coJ3RoZSBkYXRlIGlzJyArIHRoZURhdGUpO1xuZGF0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RhdGUnKTtcbmRhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbmRhdGUuc2V0QXR0cmlidXRlKCduYW1lJywgJ2RhdGUnKTtcbmRhdGUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIGBgKTtcblxubGV0IGN1cnJlbnREZWNrID0gZGVmYXVsdERlY2s7XG5sZXQgY3VycmVudERlY2tEaXY7XG5cblxuY29uc3QgdXBkYXRlQ3VycmVudERlY2tEaXYgPSAoKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coJ2ltIHVwZGF0ZWluZyB0aGUgY3VycmVudCBESVYnKVxuICAgIGNvbnN0IHRoZUN1cnJlbnREZWNrTmFtZSA9IGN1cnJlbnREZWNrLmRlY2tOYW1lO1xuICAgIC8vIGNvbnNvbGUubG9nKCd0aGVDdXJyZW50RGVja05hbWUgaXMgKyAnICsgdGhlQ3VycmVudERlY2tOYW1lKTtcbiAgICBjb25zdCBkZWNrRGl2cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RlY2snKTtcbiAgICBBcnJheS5mcm9tKGRlY2tEaXZzKS5mb3JFYWNoKGRlY2tEaXYgPT4ge1xuICAgICAgICBjb25zdCB0aXRsZURpdiA9IGRlY2tEaXYuY2hpbGRyZW5bMF07XG4gICAgICAgIGNvbnNvbGUubG9nKGRlY2tEaXYpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGVDdXJyZW50RGVja05hbWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhgZG9lcyAke3RpdGxlRGl2fSBhbmQgJHt0aGVDdXJyZW50RGVja05hbWV9IG1hdGNoP2ApXG4gICAgICAgIGlmKHRpdGxlRGl2LnRleHRDb250ZW50ID09PSB0aGVDdXJyZW50RGVja05hbWUpe1xuICAgICAgICAgICAgY3VycmVudERlY2tEaXYgPSBkZWNrRGl2O1xuICAgICAgICB9XG4gICAgfSlcbiAgICBcbiAgICAvLyBjb25zb2xlLmxvZyhkZWNrRGl2cyk7XG4gICAgLy8gQXJyYXkuZnJvbShkZWNrRGl2cykuZm9yRWFjaChkZWNrRGl2ID0+IHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ3RoZSBkZWNrVGl0bGVpcyAnKyBkZWNrVGl0bGVEaXYpO1xuICAgIC8vICAgICBpZihkZWNrRGl2LmZpcnN0RWxlbWVudENoaWxkLnRleHRDb250ZW50ID09PSB0aGVDdXJyZW50RGVja05hbWUpe1xuICAgIC8vICAgICAgICAgY3VycmVudERlY2tEaXYgPSBkZWNrRGl2O1xuICAgIC8vICAgICB9XG4gICAgLy8gfSlcbn1cblxuXG5jb25zdCBzdHlsZUN1cnJlbnQgPSAoKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coY3VycmVudERlY2tEaXYpO1xuICAgIGN1cnJlbnREZWNrRGl2LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkRGVjaycpO1xuICAgIFxufVxuXG5jb25zdCByZW1vdmVTZWxlY3RlZFN0eWxlID0gKCkgPT4ge1xuICAgIGN1cnJlbnREZWNrRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkRGVjaycpO1xufVxuXG5jb25zdCB1cGRhdGVDdXJyZW50RGVjayA9IChlKSA9PiB7XG4gICAgcmVtb3ZlU2VsZWN0ZWRTdHlsZSgpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdpbSBVUERBVEluRyEnKTtcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldCk7XG4gICAgY29uc3QgdGhlRGVja05hbWUgPSAoZS50YXJnZXQudGV4dENvbnRlbnQpO1xuICAgIGN1cnJlbnREZWNrID0gY29udHJvbGxlci5nZXREZWNrKHRoZURlY2tOYW1lKTtcbiAgICAvLyBjb25zb2xlLmxvZygnZ29ubmEgdXBkYXRlIGN1cnJlbnQgZGVjayBkaXYnKTtcbiAgICB1cGRhdGVDdXJyZW50RGVja0RpdigpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdnb25uYSBzdHlsZSBjdXJyZW50IGRlY0RpdiAnICsgY3VycmVudERlY2tEaXYpO1xuICAgIHN0eWxlQ3VycmVudCgpO1xuICAgIHBvcHVsYXRlQ2FyZCgpO1xufVxuXG5jb25zdCB1cGRhdGVDdXJyZW50RGVja0J5TmFtZSA9IChuYW1lKSA9PiB7XG4gICAgcmVtb3ZlU2VsZWN0ZWRTdHlsZSgpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdpbSBVUERBVEluRyEnKTtcbiAgICBcbiAgICBjb25zdCB0aGVEZWNrTmFtZSA9IG5hbWU7XG4gICAgY3VycmVudERlY2sgPSBjb250cm9sbGVyLmdldERlY2sodGhlRGVja05hbWUpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdnb25uYSB1cGRhdGUgY3VycmVudCBkZWNrIGRpdicpO1xuICAgIHVwZGF0ZUN1cnJlbnREZWNrRGl2KCk7XG4gICAgLy8gY29uc29sZS5sb2coJ2dvbm5hIHN0eWxlIGN1cnJlbnQgZGVjRGl2ICcgKyBjdXJyZW50RGVja0Rpdik7XG4gICAgc3R5bGVDdXJyZW50KCk7XG4gICAgcG9wdWxhdGVDYXJkKCk7XG59XG5jb25zdCBmaXJzdERyYXdEZWNrcyA9IChhcnJheU9mRGVja3MpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZygncnVubmluZyBkcmF3RGVja3MnKVxuICAgIC8vIGNvbnNvbGUubG9nKGRlY2tBcnJheVsxXSk7XG4gICAgYXJyYXlPZkRlY2tzLmZvckVhY2goYURlY2sgPT4ge1xuICAgICAgICBpZigoYXJyYXlPZkRlY2tzLmluZGV4T2YoYURlY2spKSAhPT0gMCl7XG4gICAgICAgICAgICBjb25zdCBkZWNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkZWNrRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGVjaycpO1xuICAgICAgICAgICAgZGVja0FyZWEuYXBwZW5kQ2hpbGQoZGVja0Rpdik7XG5cbiAgICAgICAgICAgIGNvbnN0IGRlY2tUaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGVja1RpdGxlRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVja1RpdGxlJyk7XG4gICAgICAgICAgICBkZWNrRGl2LmFwcGVuZENoaWxkKGRlY2tUaXRsZURpdik7XG4gICAgICAgICAgICBkZWNrVGl0bGVEaXYudGV4dENvbnRlbnQgPSBhRGVjay5kZWNrTmFtZTtcblxuICAgICAgICAgICAgZGVja0Rpdi5jbGFzc0xpc3QuYWRkKGRlY2tUaXRsZURpdi50ZXh0Q29udGVudCk7XG5cbiAgICAgICAgICAgIC8vIGNvbnN0IGRlY2tEZWxldGVCdXR0b24gPSBkcmF3RGVja0RlbGV0ZUJ1dHRvbigpO1xuICAgICAgICAgICAgLy8gZGVja0Rpdi5hcHBlbmRDaGlsZChkZWNrRGVsZXRlQnV0dG9uKTtcblxuICAgICAgICAgICAgZGVja0Rpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHVwZGF0ZUN1cnJlbnREZWNrKTtcbiAgICAgICAgICAgIGRlY2tUaXRsZURpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHVwZGF0ZUN1cnJlbnREZWNrKTtcbiAgICAgICAgICAgIGRlY2tUaXRsZURpdi5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHNhdmVEZWNrVGl0bGUpO1xuICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIHVwZGF0ZUN1cnJlbnREZWNrRGl2KCk7XG4gICAgLy8gY29uc29sZS5sb2coY3VycmVudERlY2tEaXYpO1xuXG59XG5cblxuY29uc3Qgc2F2ZURlY2tUaXRsZSA9IChlKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coJ3NhdmluZyBjaGFuZ2UgdG8gdGl0bGUnKTtcbiAgICBjb25zdCB0ZXh0ID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XG4gICAgY3VycmVudERlY2suZGVja05hbWUgPSB0ZXh0O1xufVxuXG5jb25zdCBkcmF3RGVja3MgPSAoYXJyYXlPZkRlY2tzKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coJ3J1bm5pbmcgZHJhd0RlY2tzJylcbiAgICAvLyBjb25zb2xlLmxvZyhkZWNrQXJyYXlbMV0pO1xuICAgIGFycmF5T2ZEZWNrcy5mb3JFYWNoKGFEZWNrID0+IHtcbiAgICAgICAgaWYoKGFycmF5T2ZEZWNrcy5pbmRleE9mKGFEZWNrKSkgIT09IDApe1xuICAgICAgICAgICAgY29uc3QgZGVja0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGVja0Rpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RlY2snKTtcbiAgICAgICAgICAgIGRlY2tBcmVhLmFwcGVuZENoaWxkKGRlY2tEaXYpO1xuXG4gICAgICAgICAgICBjb25zdCBkZWNrVGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRlY2tUaXRsZURpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RlY2tUaXRsZScpO1xuICAgICAgICAgICAgZGVja1RpdGxlRGl2LnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgJ3RydWUnKTtcbiAgICAgICAgICAgIGRlY2tEaXYuYXBwZW5kQ2hpbGQoZGVja1RpdGxlRGl2KTtcbiAgICAgICAgICAgIGRlY2tUaXRsZURpdi50ZXh0Q29udGVudCA9IGFEZWNrLmRlY2tOYW1lO1xuXG4gICAgICAgICAgICBkZWNrRGl2LmNsYXNzTGlzdC5hZGQoZGVja1RpdGxlRGl2LnRleHRDb250ZW50KTtcblxuICAgICAgICAgICAgLy8gY29uc3QgZGVja0RlbGV0ZUJ1dHRvbiA9IGRyYXdEZWNrRGVsZXRlQnV0dG9uKCk7XG4gICAgICAgICAgICAvLyBkZWNrRGl2LmFwcGVuZENoaWxkKGRlY2tEZWxldGVCdXR0b24pO1xuXG4gICAgICAgICAgICAvLyBjb25zdCBlZGl0RGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgLy8gZWRpdERlY2suc2V0QXR0cmlidXRlKCdpZCcsICdlZGl0RGVjaycpXG4gICAgICAgICAgICAvLyBkZWNrRGl2LmFwcGVuZENoaWxkKGVkaXREZWNrKVxuICAgICAgICAgICAgLy8gZWRpdERlY2sudGV4dENvbnRlbnQgPSAnRWRpdCc7XG5cbiAgICAgICAgICAgIGRlY2tEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB1cGRhdGVDdXJyZW50RGVjayk7XG4gICAgICAgICAgICBkZWNrVGl0bGVEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB1cGRhdGVDdXJyZW50RGVjayk7XG4gICAgICAgICAgICBkZWNrVGl0bGVEaXYuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBzYXZlRGVja1RpdGxlKTtcbiAgICAgICAgICAgIC8vIGVkaXREZWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0Zvcm0pO1xuICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIHVwZGF0ZUN1cnJlbnREZWNrRGl2KCk7XG4gICAgc3R5bGVDdXJyZW50KCk7XG4gICAgLy8gY29uc29sZS5sb2coY3VycmVudERlY2tEaXYpO1xuXG59XG5cbmNvbnN0IGRyYXdBbGxDYXJkc1N0YWNrID0gKGFEZWNrKSA9PiB7XG4gICAgY29uc3QgY2FyZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmREaXYuc2V0QXR0cmlidXRlKCdpZCcsICdjYXJkQmlnJyk7XG4gICAgY2FyZERvY2suYXBwZW5kQ2hpbGQoY2FyZERpdik7XG4gICAgY29uc29sZS5sb2coYURlY2suY2FyZHNBcnJheVthRGVjay5ib29rbWFya10pO1xuICAgIGNvbnN0IHRoaXNCb29rbWFyayA9IGFEZWNrLmJvb2ttYXJrO1xuICAgIGNvbnN0IHRoZUNhcmQgPSBhRGVjay5jYXJkc0FycmF5W3RoaXNCb29rbWFya10uY2FyZE5hbWU7XG5cbiAgICBjb25zdCBjYXJkVGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkVGl0bGVEaXYuc2V0QXR0cmlidXRlKCdpZCcsICdjYXJkVGl0bGUnKTtcbiAgICBjYXJkRGl2LmFwcGVuZENoaWxkKGNhcmRUaXRsZURpdik7XG4gICAgY2FyZFRpdGxlRGl2LnRleHRDb250ZW50ID0gdGhlQ2FyZC5DYXJkTmFtZTtcbn1cblxuY29uc3QgZHJhd0JhY2tncm91bmRDYXJkcyA9IChudW0pID0+IHtcbiAgICBmb3IobGV0IGkgPSAwOyBpPG51bTsgaSsrICl7XG4gICAgY29uc3QgZmFrZUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmYWtlQ2FyZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmRCaWcnKTtcbiAgICBmYWtlQ2FyZC5jbGFzc0xpc3QuYWRkKGBzdGFjayR7aX1gKTtcbiAgICBjYXJkQXJlYS5hcHBlbmRDaGlsZChmYWtlQ2FyZCk7XG4gICAgfVxufVxuXG5jb25zdCBzYXZlVGl0bGUgPSAoZSkgPT4ge1xuICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG5cbiAgICAvLyBjb25zb2xlLmxvZygnc2F2aW5nIGNoYW5nZSB0byB0aXRsZScpO1xuICAgIGNvbnN0IHRleHQgPSBlLnRhcmdldC50ZXh0Q29udGVudDtcbiAgICAvLyBjb25zb2xlLmxvZyh0ZXh0KTtcbiAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50RGVjay5ib29rbWFyayk7XG4gICAgLy8gY29uc29sZS5sb2coY3VycmVudERlY2suY2FyZHNBcnJheVtjdXJyZW50RGVjay5ib29rbWFya10pO1xuICAgIC8vIGN1cnJlbnREZWNrLmNhcmRzQXJyYXlbY3VycmVudERlY2suYm9va21hcmtdID0gdGV4dDtcbiAgICBjb25zdCB0aGVDYXJkID0gY29udHJvbGxlci5nZXRDYXJkKGN1cnJlbnREZWNrLmNhcmRzQXJyYXlbY3VycmVudERlY2suYm9va21hcmtdKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGVDYXJkKTtcbiAgICB0aGVDYXJkLmNhcmROYW1lID0gdGV4dDtcbiAgICBjdXJyZW50RGVjay5jYXJkc0FycmF5W2N1cnJlbnREZWNrLmJvb2ttYXJrXSA9IHRleHQ7XG4gICAgLy8gY29uc29sZS5sb2codGhlQ2FyZC5jYXJkTmFtZSk7XG59XG5cbmNvbnN0IGRyYXdUaXRsZURpdiA9ICgpID0+IHtcbiAgICBjb25zdCBjYXJkVGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkVGl0bGVEaXYuc2V0QXR0cmlidXRlKCdpZCcsICdjYXJkVGl0bGUnKTtcbiAgICBjYXJkVGl0bGVEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkVGl0bGUnKTtcbiAgICBjYXJkVGl0bGVEaXYuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCAndHJ1ZScpO1xuICAgIGNhcmRUaXRsZURpdi5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHNhdmVUaXRsZSk7XG4gICAgcmV0dXJuIGNhcmRUaXRsZURpdjtcbn1cblxuY29uc3QgZHJhd0RhdGVEaXYgPSAoKSA9PiB7XG4gICAgY29uc3QgY2FyZERhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkRGF0ZURpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NhcmREYXRlJyk7XG4gICAgcmV0dXJuIGNhcmREYXRlRGl2O1xufVxuXG5jb25zdCBzYXZlU3RlcCA9IChlKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coJ3NhdmluZyBjaGFuZ2UgdG8gdGV4dCcpO1xuICAgIGNvbnN0IHRleHQgPSBlLnRhcmdldC50ZXh0Q29udGVudDtcbiAgICAvLyBjb25zb2xlLmxvZyh0ZXh0KTtcbiAgICBjb25zdCB0aGVDYXJkID0gY29udHJvbGxlci5nZXRDYXJkKGN1cnJlbnREZWNrLmNhcmRzQXJyYXlbY3VycmVudERlY2suYm9va21hcmtdKTtcbiAgICB0aGVDYXJkLmNhcmRTdGVwc1swXSA9IHRleHQ7XG59XG5cbmNvbnN0IGRyYXdTdGVwc0RpdiA9ICgpID0+IHtcbiAgICBjb25zdCBjYXJkU3RlcHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGNhcmRTdGVwc0Rpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NhcmRTdGVwcycpO1xuICAgIGNhcmRTdGVwc0Rpdi5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsICd0cnVlJyk7XG4gICAgY2FyZFN0ZXBzRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0Jywgc2F2ZVN0ZXApO1xuICAgIHJldHVybiBjYXJkU3RlcHNEaXY7XG59XG5cbmNvbnN0IGRlbGV0ZUFuZEVyYXNlQ2FyZCA9ICgpID0+IHtcbiAgICBjb250cm9sbGVyLmRlbGV0ZUNhcmQoKTtcbiAgICBwb3B1bGF0ZUNhcmQoKTtcbn1cblxuY29uc3QgZGVsZXRlQW5kRXJhc2VEZWNrID0gKGUpID0+IHtcbiAgICBjb25zdCBkZWxldGVEaXYgPSBlLnRhcmdldDtcbiAgICBjb25zdCBkZWNrRGl2ID0gZGVsZXRlRGl2LnBhcmVudEVsZW1lbnQ7XG4gICAgY29uc3QgZGVja1RpdGxlRGl2ID0gZGVja0Rpdi5maXJzdENoaWxkKCk7XG4gICAgY29uc3QgZGVja1RpdGxlID0gZGVja1RpdGxlRGl2LnRleHRDb250ZW50O1xuICAgIGNvbnRyb2xsZXIuZGVsZXRlRGVjayhkZWNrVGl0bGUpO1xuICAgIGRyYXdEZWNrcygpO1xufVxuXG5jb25zdCBkcmF3RGVsZXRlQnV0dG9uID0gKCkgPT4ge1xuICAgIGNvbnN0IGNhcmREZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkRGVsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2FyZERlbGV0ZScpO1xuICAgIGNhcmREZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVBbmRFcmFzZUNhcmQpO1xuICAgIGNhcmREZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSAnLSdcbiAgICByZXR1cm4gY2FyZERlbGV0ZUJ1dHRvbjtcbn1cblxuY29uc3QgZHJhd0RlY2tEZWxldGVCdXR0b24gPSAoKSA9PiB7XG4gICAgY29uc3QgZGVja0RlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlY2tEZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdkZWNrRGVsZXRlJyk7XG4gICAgZGVja0RlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZUFuZEVyYXNlRGVjayk7XG4gICAgZGVja0RlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICctJ1xuICAgIHJldHVybiBkZWNrRGVsZXRlQnV0dG9uO1xuXG59XG5cbmNvbnN0IGRyYXdUb3BDYXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IGNhcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAndG9wQ2FyZCcpO1xuICAgIGNhcmREaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkQmlnJyk7XG4gICAgY2FyZEFyZWEuYXBwZW5kQ2hpbGQoY2FyZERpdik7XG4gICAgY29uc3QgY2FyZFRpdGxlRGl2ID0gZHJhd1RpdGxlRGl2KCk7XG4gICAgY2FyZERpdi5hcHBlbmRDaGlsZChjYXJkVGl0bGVEaXYpO1xuICAgIGNvbnN0IGNhcmREYXRlRGl2ID0gZHJhd0RhdGVEaXYoKTtcbiAgICBjYXJkRGl2LmFwcGVuZENoaWxkKGNhcmREYXRlRGl2KTtcbiAgICBjb25zdCBjYXJkU3RlcHNEaXYgPSBkcmF3U3RlcHNEaXYoKTtcbiAgICBjYXJkRGl2LmFwcGVuZENoaWxkKGNhcmRTdGVwc0Rpdik7XG4gICAgY29uc3QgY2FyZERlbGV0ZUJ1dHRvbiA9IGRyYXdEZWxldGVCdXR0b24oKTtcbiAgICBjYXJkRGl2LmFwcGVuZENoaWxkKGNhcmREZWxldGVCdXR0b24pO1xuICAgIHJldHVybiBjYXJkRGl2O1xufVxuXG5jb25zdCBnZXRCb29rbWFya2VkQ2FyZCA9IChhRGVjaykgPT4ge1xuICAgIGNvbnN0IHRoaXNCb29rbWFyayA9IGFEZWNrLmJvb2ttYXJrO1xuICAgIGNvbnN0IHRoaXNDYXJkTmFtZSA9IGFEZWNrLmNhcmRzQXJyYXlbdGhpc0Jvb2ttYXJrXTtcbiAgICBjb25zb2xlLmxvZyhgYm9va21ya2VkIGNyZCBpcyAke3RoaXNDYXJkTmFtZX1gKTtcbiAgICBjb25zdCBhQ2FyZCA9IGNvbnRyb2xsZXIuZ2V0Q2FyZCh0aGlzQ2FyZE5hbWUpO1xuXG4gICAgLy8gY29uc29sZS5sb2coYUNhcmQpO1xuICAgIHJldHVybiBhQ2FyZDtcbn1cblxuY29uc3QgZXJhc2VTdGVwcyA9ICgpID0+IHtcbiAgICBjb25zdCBzdGVwc0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkU3RlcHMnKTtcbiAgICBjb25zdCBzdGVwcyA9IHN0ZXBzRGl2LmNoaWxkcmVuO1xuICAgIEFycmF5LmZyb20oc3RlcHMpLmZvckVhY2goc3RlcEVsZW1lbnQgPT4ge1xuICAgICAgICBzdGVwRWxlbWVudC5yZW1vdmUoKTtcbiAgICB9KVxuICAgIFxufVxuXG5jb25zdCBwb3B1bGF0ZUNhcmQgPSAoKSA9PiB7XG4gICAgZXJhc2VTdGVwcygpO1xuICAgIGNvbnNvbGUubG9nKGN1cnJlbnREZWNrKTtcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50RGVjay5ib29rbWFyayk7XG4gICAgY29uc3QgdGhlQ2FyZCA9IGdldEJvb2ttYXJrZWRDYXJkKGN1cnJlbnREZWNrKTtcbiAgICBjb25zb2xlLmxvZygncHVvcHVsYXRpbmcgd2l0aDogJyArIHRoZUNhcmQpO1xuICAgIGNvbnN0IGNhcmRUaXRsZURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkVGl0bGUnKTtcbiAgICBjYXJkVGl0bGVEaXYuY2xhc3NMaXN0LnJlbW92ZSgnYmlnUGx1cycpO1xuICAgIGNhcmRUaXRsZURpdi5jbGFzc0xpc3QuYWRkKCdjYXJkVGl0bGUnKTtcbiAgICBpZih0aGVDYXJkICE9PSB1bmRlZmluZWQpe1xuICAgICAgICBjYXJkVGl0bGVEaXYudGV4dENvbnRlbnQgPSB0aGVDYXJkLmNhcmROYW1lO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ21ha2luZyBwbHVzIGNhcmQnKVxuICAgICAgICBjYXJkVGl0bGVEaXYudGV4dENvbnRlbnQgPSAnKyc7XG4gICAgICAgIGNhcmRUaXRsZURpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2JpZ1BsdXMnKTtcbiAgICAgICAgY2FyZFRpdGxlRGl2LnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgZmFsc2UpO1xuICAgICAgICBjYXJkVGl0bGVEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93Q2FyZEZvcm0pO1xuICAgIH1cbiAgICBjb25zdCBjYXJkRGF0ZURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkRGF0ZScpO1xuICAgIGlmKHRoZUNhcmQgIT09IHVuZGVmaW5lZCl7XG4gICAgICAgIGNhcmREYXRlRGl2LnRleHRDb250ZW50ID0gYER1ZSBkYXRlOiAke3RoZUNhcmQuY2FyZERhdGV9YDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNhcmREYXRlRGl2LnRleHRDb250ZW50ID0gJyc7XG4gICAgfVxuXG4gICAgY29uc3QgY2FyZFN0ZXBzRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmRTdGVwcycpO1xuICAgIGNvbnNvbGUubG9nKGNhcmRTdGVwc0Rpdik7XG4gICAgY29uc29sZS5sb2codHlwZW9mIGNhcmRTdGVwc0Rpdik7XG4gICAgaWYodGhlQ2FyZCAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgaWYodGhlQ2FyZC5jYXJkU3RlcHMgIT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICB0aGVDYXJkLmNhcmRTdGVwcy5mb3JFYWNoKHN0ZXBTdHJpbmcgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgICAgICBsaXN0SXRlbS50ZXh0Q29udGVudCA9IGAke3N0ZXBTdHJpbmd9YFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNhcmRTdGVwc0Rpdik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codHlwZW9mIGNhcmRTdGVwc0Rpdik7XG4gICAgICAgICAgICAgICAgY2FyZFN0ZXBzRGl2LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNhcmRTdGVwc0Rpdi50ZXh0Q29udGVudCA9ICcnO1xuICAgIH1cbiAgICBcbn1cblxuY29uc3QgZHJhd0NhcmRTdGFjayA9IChhRGVjaykgPT4ge1xuICAgIGNvbnNvbGUubG9nKGFEZWNrKTtcbiAgICBkcmF3QmFja2dyb3VuZENhcmRzKDIpO1xuICAgIGRyYXdUb3BDYXJkKCk7XG4gICAgcG9wdWxhdGVDYXJkKCk7ICAgIFxufVxuXG5jb25zdCBhZHZhbmNlQm9va21hcmsgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3J1bm5pbmcgYWR2YW5jZSBib29rbWFyaycpXG4gICAgY3VycmVudERlY2suYm9va21hcmsrKztcbiAgICBpZihjdXJyZW50RGVjay5jYXJkc0FycmF5W2N1cnJlbnREZWNrLmJvb2ttYXJrXSAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgcG9wdWxhdGVDYXJkKCk7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIGN1cnJlbnREZWNrLmJvb2ttYXJrLS07XG4gICAgICAgIHBvcHVsYXRlQ2FyZCgpO1xuICAgIH1cbn1cblxuY29uc3QgcHJldmlvdXNCb29rbWFyayA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygncnVubmluZyBwcmV2aW91cyBib29rbWFyaycpXG4gICAgY3VycmVudERlY2suYm9va21hcmstLTtcbiAgICBpZihjdXJyZW50RGVjay5jYXJkc0FycmF5W2N1cnJlbnREZWNrLmJvb2ttYXJrXSAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgcG9wdWxhdGVDYXJkKCk7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIGN1cnJlbnREZWNrLmJvb2ttYXJrKys7XG4gICAgICAgIHBvcHVsYXRlQ2FyZCgpO1xuICAgIH1cbiAgICBcbn1cblxuY29uc3QgYWRkRXZlbnRMaXN0ZW5lcnMgPSAoZWxlbWVudE5hbWUsIGFGdW5jdGlvbikgPT57XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2VsZW1lbnROYW1lfWApO1xuICAgIC8vIGNvbnNvbGUubG9nKGVsZW1lbnQpO1xuICAgIC8vIGNvbnNvbGUubG9nKGFGdW5jdGlvbik7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFGdW5jdGlvbik7XG59XG5cbmNvbnN0IGFkZEZvcndhcmRCYWNrd2FyZExpc3RlbmVycyA9ICgpID0+IHtcbiAgICBhZGRFdmVudExpc3RlbmVycygnZm9yd2FyZEJ1dHRvbicsIGFkdmFuY2VCb29rbWFyayk7XG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoJ2JhY2t3YXJkQnV0dG9uJywgcHJldmlvdXNCb29rbWFyayk7XG59XG5cbmNvbnN0IGVyYXNlVG9wQ2FyZCA9ICgpID0+IHtcbiAgICBjb25zdCBvbGRDYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvcENhcmQnKTtcbiAgICBvbGRDYXJkLnJlbW92ZSgpO1xuICAgIGRyYXdUb3BDYXJkKCk7XG59XG5cbmNvbnN0IGVyYXNlRGVja3MgPSAoKSA9PiB7XG4gICAgY29uc3Qgb2xkRGVja3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkZWNrJyk7XG4gICAgQXJyYXkuZnJvbShvbGREZWNrcykuZm9yRWFjaChkZWNrRWxlbWVudCA9PiB7XG4gICAgICAgIGRlY2tFbGVtZW50LnJlbW92ZSgpO1xuICAgIH0pXG59XG5jb25zdCBjcmVhdGVBbmRSZW5kZXJEZWNrID0gKG5hbWUpID0+IHtcbiAgICBjb250cm9sbGVyLmNyZWF0ZURlY2sobmFtZSk7XG4gICAgZXJhc2VEZWNrcygpO1xuICAgIGRyYXdEZWNrcyhkZWNrQXJyYXkpO1xufVxuXG4vLyBjb25zdCBjcmVhdGVDYXJkID0gKG5hbWUpID0+IHtcbi8vICAgICBjb250cm9sbGVyLmNyZWF0ZUNhcmQobmFtZSk7XG4vLyAgICAgcG9wdWxhdGVDYXJkKCk7XG4vLyB9XG5cbmNvbnN0IGNyZWF0ZUFuZFJlbmRlckNhcmQgPSAobmFtZSkgPT4ge1xuICAgIGNvbnRyb2xsZXIuY3JlYXRlQ2FyZChuYW1lKTtcbiAgICBwb3B1bGF0ZUNhcmQoKTtcbn1cblxubGV0IGZvcm1UeXBlID0gJ2RlY2snO1xuXG5jb25zdCByZXNldERlY2tPcHRpb25zID0gKCkgPT4ge1xuICAgIGNvbnN0IGRlY2tTZWxlY3RvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkRGVjaycpO1xuICAgIEFycmF5LmZyb20oZGVja1NlbGVjdG9yKS5mb3JFYWNoKGRlY2tFbGVtZW50ID0+IHtcbiAgICAgICAgZGVja0VsZW1lbnQucmVtb3ZlKCk7XG4gICAgfSlcbn1cbmNvbnN0IHNldERlY2tPcHRpb25zID0gKCkgPT4ge1xuICAgIHJlc2V0RGVja09wdGlvbnMoKTtcbiAgICBkZWNrQXJyYXkuZm9yRWFjaChkZWNrRWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnN0IGRlY2tPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgY2FyZERlY2suYXBwZW5kQ2hpbGQoZGVja09wdGlvbik7XG4gICAgICAgIGRlY2tPcHRpb24udmFsdWUgPSBkZWNrRWxlbWVudC5kZWNrTmFtZTtcbiAgICAgICAgZGVja09wdGlvbi50ZXh0Q29udGVudCA9IGRlY2tFbGVtZW50LmRlY2tOYW1lO1xuICAgIH0pXG59XG5cbmNvbnN0IHJlc2V0Rm9ybURlY2sgPSAoKSA9PiB7XG4gICAgY29uc3QgYURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkLXRpdGxlJyk7XG4gICAgYURpdi52YWx1ZSA9ICcnO1xufVxuXG5jb25zdCByZXNldEZvcm1DYXJkID0gKCkgPT4ge1xuICAgIGxldCBhRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmQtdGl0bGUnKTtcbiAgICBhRGl2LnZhbHVlID0gJyc7XG4gICAgYURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGVwJyk7XG4gICAgYURpdi52YWx1ZSA9ICcnO1xuICAgIGFEaXYuY2FyZERhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpLnZhbHVlO1xuICAgIGFEaXYudmFsdWUgPSAnJztcbn1cblxuY29uc3Qgc2hvd0Zvcm0gPSAoKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coJ3Nob3dpbmcgZm9ybSEnKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJMYXlIb2xkZXInKTtcbiAgICBmb3JtLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG59XG5cbmNvbnN0IGhpZGVGb3JtID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdoaWRpbmcgZm9ybSEnKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJMYXlIb2xkZXInKTtcbiAgICBmb3JtLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICBsZXQgYURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGVwJyk7XG4gICAgYURpdi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgYURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlJyk7XG4gICAgYURpdi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgYURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkRGVjaycpO1xuICAgIGFEaXYuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xufVxuXG5jb25zdCBzaG93RGVja0Zvcm0gPSAoKSA9PiB7XG4gICAgc2hvd0Zvcm0oKTtcbiAgICBmb3JtVHlwZSA9ICdkZWNrJztcbiAgICBsZXQgYURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGVwJyk7XG4gICAgYURpdi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgYURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlJyk7XG4gICAgYURpdi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgYURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkRGVjaycpO1xuICAgIGFEaXYuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIGFEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZC10aXRsZScpO1xuICAgIGFEaXYuc3R5bGUuZ3JpZFJvdyA9ICczLzQnO1xuICAgIFxufVxuXG5jb25zdCBzaG93Q2FyZEZvcm0gPSAoKSA9PiB7XG4gICAgc2V0RGVja09wdGlvbnMoKTtcbiAgICBzaG93Rm9ybSgpO1xuICAgIGZvcm1UeXBlID0gJ2NhcmQnO1xuICAgIGxldCBhRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0ZXAnKTtcbiAgICBhRGl2LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgYURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlJyk7XG4gICAgYURpdi5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgIGFEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZERlY2snKTtcbiAgICBhRGl2LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgYURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkLXRpdGxlJyk7XG4gICAgYURpdi5zdHlsZS5ncmlkUm93ID0gJzEvMic7XG59XG5cbmNvbnN0IHNhdmVEZWNrID0gKCkgPT4ge1xuICAgIGNvbnN0IGFEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZC10aXRsZScpLnZhbHVlO1xuICAgIGNyZWF0ZUFuZFJlbmRlckRlY2soYURpdik7XG4gICAgcmVzZXRGb3JtRGVjaygpO1xuICAgIGhpZGVGb3JtKCk7XG59XG5cbmNvbnN0IHNhdmVDYXJkID0gKCkgPT4ge1xuICAgIGxldCBpc0N1cnJlbnQgPSAwO1xuICAgIGxldCBhQ2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkLXRpdGxlJykudmFsdWU7XG4gICAgYUNhcmQgPSBjb250cm9sbGVyLmNyZWF0ZUNhcmQoYUNhcmQpO1xuICAgIGFDYXJkLmNhcmRTdGVwcy5wdXNoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGVwJykudmFsdWUpO1xuICAgIGFDYXJkLmNhcmREYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKS52YWx1ZTtcbiAgICBjb25zdCBkZWNrTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkRGVjaycpO1xuICAgIGNvbnN0IGNvbGxlY3Rpb24gPSBkZWNrTGlzdC5zZWxlY3RlZE9wdGlvbnM7XG4gICAgY29uc29sZS5sb2coYHRoZSBjdXJyZW50IGRlY2sgd2FzICR7Y3VycmVudERlY2t9YCk7XG4gICAgaWYoY29sbGVjdGlvbi5sZW5ndGggPCAyICl7XG4gICAgICAgIGNvbnN0IHRoZVNlbGVjdGVkRGVjayA9IGNvbGxlY3Rpb25bMF0udGV4dENvbnRlbnQ7XG4gICAgICAgIGNvbnN0IHRoZURlY2tOYW1lID0gdGhlU2VsZWN0ZWREZWNrO1xuICAgICAgICB1cGRhdGVDdXJyZW50RGVja0J5TmFtZSh0aGVEZWNrTmFtZSk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGB0aGUgY3VycmVudCBkZWNrIGlzIG5vdyAke2N1cnJlbnREZWNrfWApO1xuICAgIGNvbnNvbGUubG9nKGBzZWxlY3RlZCBvcHRpb25zIGNvbGxlY3Rpb24gaXMgJHtjb2xsZWN0aW9ufWApO1xuICAgIEFycmF5LmZyb20oY29sbGVjdGlvbikuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhgdGhpcyBvcHRpb24gaXMgJHtvcHRpb259IGl0J3MgdmFsdWUgaXMgJHtvcHRpb24udmFsdWV9YCk7XG4gICAgICAgICAgICBhQ2FyZC5jYXJkRGVja3MucHVzaChvcHRpb24udmFsdWUpOyBcbiAgICAgICAgICAgIGlmKG9wdGlvbi52YWx1ZSA9PT0gY3VycmVudERlY2suZGVja05hbWUpe1xuICAgICAgICAgICAgICAgIGlzQ3VycmVudCA9IDE7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7b3B0aW9uLnZhbHVlfSBpcyAke2N1cnJlbnREZWNrLmRlY2tOYW1lfWApO1xuICAgICAgICAgICAgfSBcbiAgICB9KVxuICAgIGFDYXJkLmNhcmREZWNrcy5mb3JFYWNoKGRlY2tOYW1lU3RyaW5nID0+IHtcbiAgICAgICAgaWYoZGVja05hbWVTdHJpbmcgIT09ICdhbGwnKXtcbiAgICAgICAgICAgIGNvbnN0IGFEZWNrID0gY29udHJvbGxlci5nZXREZWNrKGRlY2tOYW1lU3RyaW5nKVxuICAgICAgICAgICAgY29udHJvbGxlci5hZGRDYXJkdG9EZWNrKGFDYXJkLCBhRGVjayk7XG4gICAgICAgIH1cbiAgICB9KVxuICAgIGlmKGlzQ3VycmVudCA9PT0gMSl7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke2N1cnJlbnREZWNrLmJvb2ttYXJrfSBpcyB0aGUgY3VycmVudCBib29rbWFyayBvZiB0aGUgY3VycmVudCBkZWNrLmApXG4gICAgICAgIGNvbnNvbGUubG9nKGBidXQgbm93IGl0IHdpbGwgYmUgJHtjdXJyZW50RGVjay5jYXJkc0FycmF5LmluZGV4T2YoYUNhcmQuY2FyZE5hbWUpfWApO1xuICAgICAgICAvLyBjb25zdCB0aGVDYXJkQm9va21hcmsgPSBjdXJyZW50RGVjay5jYXJkc0FycmF5LmluZGV4T2YoYUNhcmQuY2FyZE5hbWUpO1xuICAgICAgICBjdXJyZW50RGVjay5ib29rbWFyayA9IGN1cnJlbnREZWNrLmNhcmRzQXJyYXkuaW5kZXhPZihhQ2FyZC5jYXJkTmFtZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGB0aGUgY3VycmVudCBkZWNrIGJvb2ttYXJrIGlzIG5vdyAke2N1cnJlbnREZWNrLmJvb2ttYXJrfWApO1xuICAgICAgICBpc0N1cnJlbnQgPSAwO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhgc2F2aW5nIGNhcmQuIGN1cnJlbnQgZGVjayBpcyAke2N1cnJlbnREZWNrfWApO1xuICAgIGNvbnNvbGUubG9nKGN1cnJlbnREZWNrLmJvb2ttYXJrKTtcbiAgICBwb3B1bGF0ZUNhcmQoKTtcbiAgICByZXNldEZvcm1DYXJkKCk7XG4gICAgaGlkZUZvcm0oKTtcbiAgICBcbn1cblxuXG5cbmNvbnN0IHNhdmVGb3JtID0gKCkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKCdzYXZlIHR5cGUgaXM6ICcrIGZvcm1UeXBlKTtcbiAgICBpZihmb3JtVHlwZSA9PT0nZGVjaycpe1xuICAgICAgICBjb25zb2xlLmxvZygnc2F2aW5nIGRlY2shJylcbiAgICAgICAgc2F2ZURlY2soKTtcbiAgICB9XG4gICAgZWxzZSBpZihmb3JtVHlwZSA9PT0gJ2NhcmQnKXtcbiAgICAgICAgY29uc29sZS5sb2coJ3NhdmluZyBjYXJkIScpXG4gICAgICAgIHNhdmVDYXJkKCk7XG4gICAgICAgIHBvcHVsYXRlQ2FyZCgpO1xuICAgIH1cbn1cblxuXG5hZGRFdmVudExpc3RlbmVycygnYWRkRGVja0J1dHRvbicsIHNob3dEZWNrRm9ybSk7XG5hZGRFdmVudExpc3RlbmVycygnYWRkQ2FyZEJ1dHRvbicsIHNob3dDYXJkRm9ybSk7XG5hZGRFdmVudExpc3RlbmVycygnY2FuY2VsJywgaGlkZUZvcm0pO1xuYWRkRXZlbnRMaXN0ZW5lcnMoJ2NoZWNrJywgc2F2ZUZvcm0pO1xuXG5cbmRyYXdDYXJkU3RhY2soZGVmYXVsdERlY2spO1xuZmlyc3REcmF3RGVja3MoZGVja0FycmF5KTtcbmFkZEZvcndhcmRCYWNrd2FyZExpc3RlbmVycygpO1xuc3R5bGVDdXJyZW50KCk7XG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
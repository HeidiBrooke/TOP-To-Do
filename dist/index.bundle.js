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
___CSS_LOADER_EXPORT___.push([module.id, "/* *{\n    box-sizing: border-box;\n} */\nbody {\n    padding: 0px;\n    margin: 0px;\n    position: relative;\n    font-size: 14px;\n    \n    /* height: 100vh; */\n    \n}\n\ndiv {\n    /* border-top: 2px solid white; */\n    padding: 4px;\n\n}\n#content {\n    margin: 0px;\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    background-color: rgb(63, 135, 152);\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    align-items: center;\n    position: relative;\n}\n\n#container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 4px;\n    padding: 20px;\n    margin: 20px 0;\n    width: 480px;\n    height: 100vh;  \n}\n\n#header{\n    display: flex;\n    width: 100%;\n    height: 100px;\n}\n\n#deckDock{\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 200px;\n}\n\n.deckArea{\n    display: flex;\n    gap: 7px;\n}\n\n#table{\n    padding: 4px;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n}\n\n#logo, .title{\n    width: 100px;\n    font-size: 32px;\n    font-weight: 600;\n    font-family: 'Raleway', sans-serif;\n    color: white;\n    border: none;\n}\n\n.title{\n    width: auto;\n    font-size: 24px;\n}\n\n\n#cardArea{\n    display: grid;\n    grid-template-columns: 60px 1fr 60px;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    border: none;\n}\n\n.deck, .blankDeck{\n    /* pointer-events: none; */\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: repeat(5, 1fr);\n    width: 60px;\n    height: 90px;\n    border-radius: 4px;\n    background-color: white;\n    /* box-shadow: rgba(0, 0, 0, 0.16) 0 7px 9px -7px;\n    box-shadow: rgba(53, 82, 94, 0.3) 1px 7px 7px 1px; */\n    justify-items: center;\n    justify-content: space-between;\n    align-items: center;\n    /* padding: 0px; */\n}\n\n.blankDeck{\n    background-color:  rgb(46, 99, 111);\n    \n}\n\n.menu{\n    border: none;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: left;\n    gap: 4px;\n}\n\n#deckTitle, #cardTitle, #cardDate, #cardSteps{\n    margin-top: 8px;\n    font-family: 'Raleway', sans-serif;\n    color: rgb(63, 135, 152);\n    font-weight: 600;\n    text-transform: uppercase;\n    text-align: center;\n    text-justify: center;\n}\n\n#deckTitle{\n    margin: 0px;\n    grid-column: 1/4;\n    grid-row: 1/5;\n    /* background-color: aqua; */\n    /* width: 100%;\n    height: 100%; */\n    cursor: pointer;\n    /* opacity: 50%; */\n}\n\n.selectedDeck {\n    box-shadow: rgb(102, 220, 241) 0 0 3px 2px;\n    /* box-shadow: rgba(53, 82, 94, 0.3) 1px 9px 9px 1px; */\n}\n\n#addCardButton, #addDeckButton{\n    font-size: 48px;\n    cursor: pointer;\n}\n\n#addCardButton:hover, #addDeckButton:hover, .nextButton:hover{\n    /* text-shadow:  0 0 3px 2px, rgb(102, 173, 241); */\n    text-shadow: -1px 1px 2px rgb(102, 220, 241),\n\t\t\t\t  1px 1px 2px rgb(102, 220, 241),\n\t\t\t\t  1px -1px 0 rgb(102, 220, 241),\n\t\t\t\t  -1px -1px 0 rgb(102, 220, 241);\n    \n}\n.nextButton{\n    justify-self: right;\n    color: white;\n    color: rgb(80, 163, 182);\n    font-family: 'Raleway', sans-serif;\n    font-size: 72px;\n    border: none;\n    cursor: pointer;\n}\n\n#forwardButton{\n    justify-self: left;\n    grid-column: 3/4;\n}\n\n#backwardButton{\n    justify-self: right;\n    grid-column: 1/2;\n    grid-row: 1/2;\n}\n\n\n.cardBig{\n    grid-column: 2/3;\n    grid-row: 1/2;\n    justify-self: center;\n    display: flex;\n    width: 240px;\n    height: 360px;\n    border-radius: 16px;\n    background-color: white;\n    box-shadow: rgba(53, 82, 94, 0.3) 1px 9px 9px 1px;\n    justify-content: center;\n    align-items: center;\n    z-index: 1;\n\n}\n\n#topCard{\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: repeat(8, 1fr);\n\n    /* flex-direction: column; */\n}\n\n.bigPlus, .littlePlus{\n    grid-column: 1/5;\n    grid-row: 4/6;\n    cursor: pointer;\n    font-size: 72px;\n    color: rgb(63, 135, 152);\n    font-family: 'Raleway', sans-serif;\n    font-weight: 600;\n    align-self: center;\n    justify-self: center;\n    \n}\n\n.littlePlus{\n    grid-row: 3/4;\n}\n\n.stack0{\n    background-color: white;\n    position: absolute;\n    top: 6px;\n    left: 63px;\n    /* z-index: -1; */\n    transform: rotate(2deg);\n}\n\n.stack1{\n    position: absolute;\n    top: 3px;\n    left: 58px;\n    /* z-index: -2; */\n    transform: rotate(1deg);\n}\n\n.stack2{\n    position: absolute;\n    top: 4px;\n    left: 120px;\n    /* z-index: -3; */\n    transform: rotate(6deg);\n}\n\n.editSize{\n    /* position: absolute;\n    top: 180px; */\n    width: 300px;\n    height: 450px;\n    z-index: 3;\n}\n\n.overLayHolder{\n    position: absolute;\n    visibility: hidden;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100vw;\n    height: 100vh; \n    \n}\n\n.overlay{\n    display: grid;\n    position: absolute;\n    background-color: rgb(37, 107, 107);\n    opacity: 60%;\n    height: 100vh;\n    width: 100vw;\n    z-index: 2;\n    padding: 20px; \n}\n\n.formDiv{\n    display: flex;\n    flex-direction: column;\n    padding-top: 100px;\n    gap: 20px;\n    width: 300px;\n    height: 600px;\n    z-index: 3;\n}\n\n.submitButtonsDiv{\n    display: flex;\n    flex-direction: row;\n    gap: 16px;\n    height: 44px;\n}\n\n.cardForm{\n    display: grid;\n    gap: 16px;\n    width:300px;\n    height: 410px;\n    grid-template-columns: 1fr 1.5fr 1.5fr 1fr;\n    grid-template-rows: repeat(7, 1fr);\n    padding: 20px;\n}\n\n.input, .check{\n    padding: 8px;\n    grid-column: 1/5;\n    border: none;\n    outline: none;\n    border-radius: 16px;\n    background-color: rgb(242, 242, 242);\n    color: rgb(80, 163, 182);\n    font-family: 'Raleway', sans-serif;\n    font-size: 18px;\n    text-align: center;\n}\n\n.input:hover{\n    box-shadow: rgb(102, 173, 241) 0 0 3px 2px;\n    box-shadow: rgb(102, 220, 241) 0 0 3px 2px;\n}\n\n.cardTitle{\n   grid-row: 1/2;\n   grid-column: 1/5;\n   text-align: center;\n}\n\n#cardSteps{\n    grid-column: 2/4;\n    grid-row: 2/7;\n}\n\n#cardDate{\n    grid-row: 7/8;\n    grid-column: 1/5;\n    text-align: center;\n}\n\n#cardDelete{\n    margin-left: 12px;\n    grid-column: 1/2;\n    grid-row: 8/9;\n    font-size: 16px;\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    background-color: rgb(80, 163, 182);\n    color: white;\n    text-align: center;\n    text-justify: center;\n    cursor: pointer;\n}\n\n#deckDelete{\n    grid-column: 1/2;\n    grid-row: 5/6;\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    background-color: rgb(80, 163, 182);\n    color: white;\n    font-family: 'Raleway', sans-serif;\n    font-size: 9px;\n    font-weight: 600;\n    text-align: center;\n    text-justify: center; \n    align-self: flex-start;\n    cursor: pointer;\n}\n\n.check{\n    background-color: white;\n    width: 50px;\n    z-index: 3;\n    text-align: center;\n    vertical-align: center;\n}\n\n.grow { \n    cursor: pointer;\n    transition: all .1s ease-in-out; \n    }\n    \n.grow:hover { \n    transform: scale(1.05); \n    }\n\n.check:hover{\n    font-size: 24px;\n}\n\n[contenteditable] {\n    /* outline: 0px solid transparent; */\n  }\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'); \n@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=Oswald:wght@200;300;400;500;600;700&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\n/* *{\n    box-sizing: border-box;\n} */\nbody {\n    padding: 0px;\n    margin: 0px;\n    position: relative;\n    font-size: 14px;\n    \n    /* height: 100vh; */\n    \n}\n\ndiv {\n    /* border-top: 2px solid white; */\n    padding: 4px;\n\n}\n#content {\n    margin: 0px;\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    background-color: rgb(63, 135, 152);\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    align-items: center;\n    position: relative;\n}\n\n#container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 4px;\n    padding: 20px;\n    margin: 20px 0;\n    width: 480px;\n    height: 100vh;  \n}\n\n#header{\n    display: flex;\n    width: 100%;\n    height: 100px;\n}\n\n#deckDock{\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 200px;\n}\n\n.deckArea{\n    display: flex;\n    gap: 7px;\n}\n\n#table{\n    padding: 4px;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n}\n\n#logo, .title{\n    width: 100px;\n    font-size: 32px;\n    font-weight: 600;\n    font-family: 'Raleway', sans-serif;\n    color: white;\n    border: none;\n}\n\n.title{\n    width: auto;\n    font-size: 24px;\n}\n\n\n#cardArea{\n    display: grid;\n    grid-template-columns: 60px 1fr 60px;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    border: none;\n}\n\n.deck, .blankDeck{\n    /* pointer-events: none; */\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: repeat(5, 1fr);\n    width: 60px;\n    height: 90px;\n    border-radius: 4px;\n    background-color: white;\n    /* box-shadow: rgba(0, 0, 0, 0.16) 0 7px 9px -7px;\n    box-shadow: rgba(53, 82, 94, 0.3) 1px 7px 7px 1px; */\n    justify-items: center;\n    justify-content: space-between;\n    align-items: center;\n    /* padding: 0px; */\n}\n\n.blankDeck{\n    background-color:  rgb(46, 99, 111);\n    \n}\n\n.menu{\n    border: none;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: left;\n    gap: 4px;\n}\n\n#deckTitle, #cardTitle, #cardDate, #cardSteps{\n    margin-top: 8px;\n    font-family: 'Raleway', sans-serif;\n    color: rgb(63, 135, 152);\n    font-weight: 600;\n    text-transform: uppercase;\n    text-align: center;\n    text-justify: center;\n}\n\n#deckTitle{\n    margin: 0px;\n    grid-column: 1/4;\n    grid-row: 1/5;\n    /* background-color: aqua; */\n    /* width: 100%;\n    height: 100%; */\n    cursor: pointer;\n    /* opacity: 50%; */\n}\n\n.selectedDeck {\n    box-shadow: rgb(102, 220, 241) 0 0 3px 2px;\n    /* box-shadow: rgba(53, 82, 94, 0.3) 1px 9px 9px 1px; */\n}\n\n#addCardButton, #addDeckButton{\n    font-size: 48px;\n    cursor: pointer;\n}\n\n#addCardButton:hover, #addDeckButton:hover, .nextButton:hover{\n    /* text-shadow:  0 0 3px 2px, rgb(102, 173, 241); */\n    text-shadow: -1px 1px 2px rgb(102, 220, 241),\n\t\t\t\t  1px 1px 2px rgb(102, 220, 241),\n\t\t\t\t  1px -1px 0 rgb(102, 220, 241),\n\t\t\t\t  -1px -1px 0 rgb(102, 220, 241);\n    \n}\n.nextButton{\n    justify-self: right;\n    color: white;\n    color: rgb(80, 163, 182);\n    font-family: 'Raleway', sans-serif;\n    font-size: 72px;\n    border: none;\n    cursor: pointer;\n}\n\n#forwardButton{\n    justify-self: left;\n    grid-column: 3/4;\n}\n\n#backwardButton{\n    justify-self: right;\n    grid-column: 1/2;\n    grid-row: 1/2;\n}\n\n\n.cardBig{\n    grid-column: 2/3;\n    grid-row: 1/2;\n    justify-self: center;\n    display: flex;\n    width: 240px;\n    height: 360px;\n    border-radius: 16px;\n    background-color: white;\n    box-shadow: rgba(53, 82, 94, 0.3) 1px 9px 9px 1px;\n    justify-content: center;\n    align-items: center;\n    z-index: 1;\n\n}\n\n#topCard{\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: repeat(8, 1fr);\n\n    /* flex-direction: column; */\n}\n\n.bigPlus, .littlePlus{\n    grid-column: 1/5;\n    grid-row: 4/6;\n    cursor: pointer;\n    font-size: 72px;\n    color: rgb(63, 135, 152);\n    font-family: 'Raleway', sans-serif;\n    font-weight: 600;\n    align-self: center;\n    justify-self: center;\n    \n}\n\n.littlePlus{\n    grid-row: 3/4;\n}\n\n.stack0{\n    background-color: white;\n    position: absolute;\n    top: 6px;\n    left: 63px;\n    /* z-index: -1; */\n    transform: rotate(2deg);\n}\n\n.stack1{\n    position: absolute;\n    top: 3px;\n    left: 58px;\n    /* z-index: -2; */\n    transform: rotate(1deg);\n}\n\n.stack2{\n    position: absolute;\n    top: 4px;\n    left: 120px;\n    /* z-index: -3; */\n    transform: rotate(6deg);\n}\n\n.editSize{\n    /* position: absolute;\n    top: 180px; */\n    width: 300px;\n    height: 450px;\n    z-index: 3;\n}\n\n.overLayHolder{\n    position: absolute;\n    visibility: hidden;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100vw;\n    height: 100vh; \n    \n}\n\n.overlay{\n    display: grid;\n    position: absolute;\n    background-color: rgb(37, 107, 107);\n    opacity: 60%;\n    height: 100vh;\n    width: 100vw;\n    z-index: 2;\n    padding: 20px; \n}\n\n.formDiv{\n    display: flex;\n    flex-direction: column;\n    padding-top: 100px;\n    gap: 20px;\n    width: 300px;\n    height: 600px;\n    z-index: 3;\n}\n\n.submitButtonsDiv{\n    display: flex;\n    flex-direction: row;\n    gap: 16px;\n    height: 44px;\n}\n\n.cardForm{\n    display: grid;\n    gap: 16px;\n    width:300px;\n    height: 410px;\n    grid-template-columns: 1fr 1.5fr 1.5fr 1fr;\n    grid-template-rows: repeat(7, 1fr);\n    padding: 20px;\n}\n\n.input, .check{\n    padding: 8px;\n    grid-column: 1/5;\n    border: none;\n    outline: none;\n    border-radius: 16px;\n    background-color: rgb(242, 242, 242);\n    color: rgb(80, 163, 182);\n    font-family: 'Raleway', sans-serif;\n    font-size: 18px;\n    text-align: center;\n}\n\n.input:hover{\n    box-shadow: rgb(102, 173, 241) 0 0 3px 2px;\n    box-shadow: rgb(102, 220, 241) 0 0 3px 2px;\n}\n\n.cardTitle{\n   grid-row: 1/2;\n   grid-column: 1/5;\n   text-align: center;\n}\n\n#cardSteps{\n    grid-column: 2/4;\n    grid-row: 2/7;\n}\n\n#cardDate{\n    grid-row: 7/8;\n    grid-column: 1/5;\n    text-align: center;\n}\n\n#cardDelete{\n    margin-left: 12px;\n    grid-column: 1/2;\n    grid-row: 8/9;\n    font-size: 16px;\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    background-color: rgb(80, 163, 182);\n    color: white;\n    text-align: center;\n    text-justify: center;\n    cursor: pointer;\n}\n\n#deckDelete{\n    grid-column: 1/2;\n    grid-row: 5/6;\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    background-color: rgb(80, 163, 182);\n    color: white;\n    font-family: 'Raleway', sans-serif;\n    font-size: 9px;\n    font-weight: 600;\n    text-align: center;\n    text-justify: center; \n    align-self: flex-start;\n    cursor: pointer;\n}\n\n.check{\n    background-color: white;\n    width: 50px;\n    z-index: 3;\n    text-align: center;\n    vertical-align: center;\n}\n\n.grow { \n    cursor: pointer;\n    transition: all .1s ease-in-out; \n    }\n    \n.grow:hover { \n    transform: scale(1.05); \n    }\n\n.check:hover{\n    font-size: 24px;\n}\n\n[contenteditable] {\n    /* outline: 0px solid transparent; */\n  }\n\n"],"sourceRoot":""}]);
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
/* harmony export */   "deleteCardFromDeck": () => (/* binding */ deleteCardFromDeck),
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
      console.log(`the deck array is ${deckArray}`);
      deckArray.forEach(deckElement => {
        console.log("the  deck name is: " + deckElement.deckName);
        if (deckElement.deckName === name) {
          console.log("it matched!");
          console.log(deckElement.deckName, name);
          theDeck = deckElement;
        }
        
      });
      console.log("getting deck: " + theDeck.deckName);
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
    console.log(all.cardsArray);
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
      console.log(`go the deck object called ${deckObj.deckName}`);
      const index = deckArray.indexOf(deckObj);
      if (index > -1) {
        deckArray.splice(index, 1);
      }
      console.log(`DECK ARRAY IS ${deckArray}`);
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
addDeckButton.classList.add('grow');
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
addCardButton.classList.add('grow');
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
cancel.classList.add('grow');
submitButtonsDiv.appendChild(cancel);
cancel.textContent = '✖';

const check = document.createElement('div');
check.setAttribute('class', 'check');
submitButtonsDiv.appendChild(check);
check.setAttribute('id', 'check');
check.classList.add('grow');
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
    console.log(e.target.innerHTML);
    if(e.target.classList.contains('deck')){
        console.log('clickedon DECK DIV')
        console.log(e.target.getAttribute('data-title'))
        const theDeckName = (e.target.getAttribute('data-title'));
        currentDeck = _controlls__WEBPACK_IMPORTED_MODULE_0__.getDeck(theDeckName);
    }
    else {
        console.log('clickedon TITLE DIV')
        console.log(e.target.textContent)
        const theDeckName = (e.target.textContent);
        currentDeck = _controlls__WEBPACK_IMPORTED_MODULE_0__.getDeck(theDeckName);
    }
    
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

const drawBlankDeck = () => {
    const blankDeckDiv = document.createElement('div');
    blankDeckDiv.setAttribute('class', 'blankDeck');
    deckArea.appendChild(blankDeckDiv);

    const littlePlus = document.createElement('div');
    littlePlus.setAttribute('class', 'littlePlus');
    littlePlus.classList.add('grow');
    littlePlus.textContent = '+';
    littlePlus.addEventListener('click', showDeckForm)
    blankDeckDiv.appendChild(littlePlus);
}

const eraseBlankDeck = () => {
    const blankDeckDiv = document.getElementsByClassName('blankDeck');
    blankDeckDiv[0].remove();
}

const firstDrawDecks = (arrayOfDecks) => {
    // console.log('running drawDecks')
    // console.log(deckArray[1]);
    arrayOfDecks.forEach(aDeck => {
        const deckDiv = document.createElement('div');
            deckDiv.setAttribute('class', 'deck');
            // deckDiv.classList.add('grow');
            deckArea.appendChild(deckDiv);

            const deckTitleDiv = document.createElement('div');
            deckTitleDiv.setAttribute('id', 'deckTitle');
            deckTitleDiv.classList.add('grow');
            deckDiv.appendChild(deckTitleDiv);
            deckTitleDiv.textContent = aDeck.deckName;

            deckDiv.setAttribute('data-title', `${aDeck.deckName}`);

            deckDiv.addEventListener('click', updateCurrentDeck);
            deckTitleDiv.addEventListener('click', updateCurrentDeck);
            deckTitleDiv.addEventListener('input', saveDeckTitle);

            if((arrayOfDecks.indexOf(aDeck)) !== 0){
                const deckDeleteButton = drawDeckDeleteButton();
                deckDiv.appendChild(deckDeleteButton);
                deckDeleteButton.classList.add('grow');
                deckTitleDiv.setAttribute('contenteditable', 'true');
            }
        });
    drawBlankDeck();
    updateCurrentDeckDiv();
    // console.log(currentDeckDiv);

}


const saveDeckTitle = (e) => {
    // console.log('saving change to title');
    const text = e.target.textContent;
    currentDeck.deckName = text;
}

const drawDecks = (arrayOfDecks) => {
    console.log('running drawDecks')
    // console.log(deckArray[1]);
    arrayOfDecks.forEach(aDeck => {
        const deckDiv = document.createElement('div');
            deckDiv.setAttribute('class', 'deck');
            deckArea.appendChild(deckDiv);

            const deckTitleDiv = document.createElement('div');
            deckTitleDiv.setAttribute('id', 'deckTitle');
            deckDiv.appendChild(deckTitleDiv);
            deckTitleDiv.textContent = aDeck.deckName;

            deckDiv.setAttribute('data-title', `${aDeck.deckName}`);

            // const editDeck = document.createElement('div');
            // editDeck.setAttribute('id', 'editDeck')
            // deckDiv.appendChild(editDeck)
            // editDeck.textContent = 'Edit';

            deckDiv.addEventListener('click', updateCurrentDeck);
            // deckTitleDiv.addEventListener('click', updateCurrentDeck);
            deckTitleDiv.addEventListener('input', saveDeckTitle);
            // editDeck.addEventListener('click', showForm);
        if((arrayOfDecks.indexOf(aDeck)) !== 0){
            const deckDeleteButton = drawDeckDeleteButton();
            deckDiv.appendChild(deckDeleteButton);
            deckTitleDiv.setAttribute('contenteditable', 'true');
        }
        }
        );
    eraseBlankDeck();
    drawBlankDeck();
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
    const thisCardName = document.getElementById('cardTitle').textContent;
    const thisCard = _controlls__WEBPACK_IMPORTED_MODULE_0__.getCard(thisCardName);
    if(currentDeck === _controlls__WEBPACK_IMPORTED_MODULE_0__.all){
        thisCard.cardDecks.forEach(deckElement => {
            const thisDeck = _controlls__WEBPACK_IMPORTED_MODULE_0__.getDeck(deckElement);
            _controlls__WEBPACK_IMPORTED_MODULE_0__.deleteCardFromDeck(thisCard, thisDeck);
        })
        _controlls__WEBPACK_IMPORTED_MODULE_0__.deleteCard(thisCard);
    }
    else{
        _controlls__WEBPACK_IMPORTED_MODULE_0__.deleteCardFromDeck(thisCard, currentDeck);
    }
    
    
    // controller.deleteCard();
    populateCard();
}

const deleteAndEraseDeck = (e) => {
    console.log(`erasing and deleting deck.${currentDeck.deckName}`)
    e.stopPropagation();
    const deleteDiv = e.target;
    const deckDiv = deleteDiv.parentElement;
    const deckTitleDiv = deckDiv.firstChild;
    const deckTitle = deckTitleDiv.textContent;
    const currentDeckIndex = _controlls__WEBPACK_IMPORTED_MODULE_0__.deckArray.indexOf(currentDeck);
    console.log(`the index of the currenDeck is ${currentDeckIndex}`)
    _controlls__WEBPACK_IMPORTED_MODULE_0__.deleteDeck(deckTitle);
    if(currentDeck.deckName === deckTitle){
        console.log(`the deck deleted was the current deck.`)
        if(_controlls__WEBPACK_IMPORTED_MODULE_0__.deckArray.length < 2){
            currentDeck = _controlls__WEBPACK_IMPORTED_MODULE_0__.all;
        }
        else {
            currentDeck = _controlls__WEBPACK_IMPORTED_MODULE_0__.deckArray[currentDeckIndex];
            eraseDecks();
            drawDecks(_controlls__WEBPACK_IMPORTED_MODULE_0__.deckArray);
        }
        eraseDecks();
        drawDecks(_controlls__WEBPACK_IMPORTED_MODULE_0__.deckArray);
    }
    else{
        eraseDecks();
        drawDecks(_controlls__WEBPACK_IMPORTED_MODULE_0__.deckArray);
    }
    console.log(`AFTER DELETE currentDeck is ${currentDeck.deckName}`);
}

const drawDeleteButton = () => {
    const cardDeleteButton = document.createElement('div');
    cardDeleteButton.setAttribute('id', 'cardDelete');
    cardDeleteButton.addEventListener('click', deleteAndEraseCard);
    cardDeleteButton.classList.add('grow');
    cardDeleteButton.textContent = '-'
    return cardDeleteButton;
}

const drawDeckDeleteButton = () => {
    const deckDeleteButton = document.createElement('div');
    deckDeleteButton.setAttribute('id', 'deckDelete');
    deckDeleteButton.addEventListener('click', deleteAndEraseDeck, true);
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
    let thisCardName = aDeck.cardsArray[thisBookmark];
    const type = typeof(thisCardName);
    if(type !== "string"){
        if(thisCardName !== undefined){
            thisCardName = thisCardName.cardName;
        }
  
    }
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
    console.log(currentDeck.cardsArray[1]);
    const theCard = getBookmarkedCard(currentDeck);
    console.log('puopulating with: ' + theCard);
    const cardTitleDiv = document.getElementById('cardTitle');
    cardTitleDiv.classList.remove('bigPlus');
    cardTitleDiv.classList.remove('grow');
    cardTitleDiv.classList.add('cardTitle');
    if(theCard !== undefined){
        cardTitleDiv.textContent = theCard.cardName;
    }
    else {
        console.log('making plus card')
        cardTitleDiv.textContent = '+';
        cardTitleDiv.setAttribute('class', 'bigPlus');
        cardTitleDiv.setAttribute('contenteditable', false);
        cardTitleDiv.classList.add('grow');
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
    console.log(currentDeck.bookmark);
    if(currentDeck.cardsArray[currentDeck.bookmark] !== undefined){
        console.log('bookmark was defined')
        populateCard();
    }
    else{
        currentDeck.bookmark++;
        console.log(currentDeck.bookmark);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBdUIseUNBQXlDLE9BQU8sV0FBVyxpRkFBaUYsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLE9BQU8sYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksUUFBUSxRQUFRLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFFBQVEsS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGNBQWMsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGNBQWMsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLHdHQUF3RyxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5T0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDWHNCO0FBQzJCO0FBQ2hEO0FBQ0s7QUFDQTs7OztBQUkxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsbURBQVc7QUFDN0I7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVLE1BQU0sb0JBQW9CO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwrQ0FBa0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwrQ0FBa0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLCtDQUFrQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtEQUFrRCxlQUFlOztBQUVqRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrREFBa0QsZUFBZTs7QUFFakU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQSxtQ0FBbUMsRUFBRTtBQUNyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsK0NBQWtCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLCtDQUFrQjtBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsK0NBQWtCO0FBQ3ZDLHVCQUF1QiwyQ0FBRztBQUMxQjtBQUNBLDZCQUE2QiwrQ0FBa0I7QUFDL0MsWUFBWSwwREFBNkI7QUFDekMsU0FBUztBQUNULFFBQVEsa0RBQXFCO0FBQzdCO0FBQ0E7QUFDQSxRQUFRLDBEQUE2QjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2Q0FBNkMscUJBQXFCO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIseURBQWlCO0FBQzlDLGtEQUFrRCxpQkFBaUI7QUFDbkUsSUFBSSxrREFBcUI7QUFDekI7QUFDQTtBQUNBLFdBQVcsd0RBQWdCO0FBQzNCLDBCQUEwQiwyQ0FBRztBQUM3QjtBQUNBO0FBQ0EsMEJBQTBCLGlEQUFTO0FBQ25DO0FBQ0Esc0JBQXNCLGlEQUFTO0FBQy9CO0FBQ0E7QUFDQSxrQkFBa0IsaURBQVM7QUFDM0I7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlEQUFTO0FBQzNCO0FBQ0EsK0NBQStDLHFCQUFxQjtBQUNwRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxhQUFhO0FBQ2pELGtCQUFrQiwrQ0FBa0I7O0FBRXBDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGlCQUFpQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxXQUFXO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQ0FBK0MsWUFBWTtBQUMzRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxJQUFJLGtEQUFxQjtBQUN6QjtBQUNBLGNBQWMsaURBQVM7QUFDdkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLGtEQUFxQjtBQUN6QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLElBQUkseURBQWlCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGtEQUFxQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxZQUFZO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsWUFBWTtBQUN2RCxrREFBa0QsV0FBVztBQUM3RDtBQUNBLHNDQUFzQyxRQUFRLGdCQUFnQixhQUFhO0FBQzNFO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixjQUFjLEtBQUsscUJBQXFCO0FBQ3ZFO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSwwQkFBMEIsK0NBQWtCO0FBQzVDLFlBQVkscURBQXdCO0FBQ3BDO0FBQ0EsS0FBSztBQUNMO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QywwQ0FBMEMsK0NBQStDO0FBQ3pGO0FBQ0E7QUFDQSx3REFBd0QscUJBQXFCO0FBQzdFO0FBQ0E7QUFDQSxnREFBZ0QsWUFBWTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxjQUFjLG1EQUFXO0FBQ3pCLGVBQWUsaURBQVM7QUFDeEI7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcC10by1kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b3AtdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b3AtdG8tZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvcC10by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvcC10by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b3AtdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b3AtdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b3AtdG8tZG8vLi9zcmMvY2FyZC5qcyIsIndlYnBhY2s6Ly90b3AtdG8tZG8vLi9zcmMvY29udHJvbGxzLmpzIiwid2VicGFjazovL3RvcC10by1kby8uL3NyYy9kZWNrLmpzIiwid2VicGFjazovL3RvcC10by1kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJhbGV3YXk6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9zd2FsZDp3Z2h0QDIwMDszMDA7NDAwOzUwMDs2MDA7NzAwJmZhbWlseT1SYWxld2F5Oml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Db3VyaWVyK1ByaW1lOml0YWwsd2dodEAwLDQwMDswLDcwMDsxLDQwMDsxLDcwMCZmYW1pbHk9T3N3YWxkOndnaHRAMjAwOzMwMDs0MDA7NTAwOzYwMDs3MDAmZmFtaWx5PVJhbGV3YXk6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qICp7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufSAqL1xcbmJvZHkge1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgXFxuICAgIC8qIGhlaWdodDogMTAwdmg7ICovXFxuICAgIFxcbn1cXG5cXG5kaXYge1xcbiAgICAvKiBib3JkZXItdG9wOiAycHggc29saWQgd2hpdGU7ICovXFxuICAgIHBhZGRpbmc6IDRweDtcXG5cXG59XFxuI2NvbnRlbnQge1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjMsIDEzNSwgMTUyKTtcXG4gICAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDRweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgbWFyZ2luOiAyMHB4IDA7XFxuICAgIHdpZHRoOiA0ODBweDtcXG4gICAgaGVpZ2h0OiAxMDB2aDsgIFxcbn1cXG5cXG4jaGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuI2RlY2tEb2Nre1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG59XFxuXFxuLmRlY2tBcmVhe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDdweDtcXG59XFxuXFxuI3RhYmxle1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbiNsb2dvLCAudGl0bGV7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnRpdGxle1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG5cXG4jY2FyZEFyZWF7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjBweCAxZnIgNjBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uZGVjaywgLmJsYW5rRGVja3tcXG4gICAgLyogcG9pbnRlci1ldmVudHM6IG5vbmU7ICovXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDFmcik7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBoZWlnaHQ6IDkwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIC8qIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMCA3cHggOXB4IC03cHg7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoNTMsIDgyLCA5NCwgMC4zKSAxcHggN3B4IDdweCAxcHg7ICovXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAvKiBwYWRkaW5nOiAwcHg7ICovXFxufVxcblxcbi5ibGFua0RlY2t7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICByZ2IoNDYsIDk5LCAxMTEpO1xcbiAgICBcXG59XFxuXFxuLm1lbnV7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcbiAgICBnYXA6IDRweDtcXG59XFxuXFxuI2RlY2tUaXRsZSwgI2NhcmRUaXRsZSwgI2NhcmREYXRlLCAjY2FyZFN0ZXBze1xcbiAgICBtYXJnaW4tdG9wOiA4cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiByZ2IoNjMsIDEzNSwgMTUyKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LWp1c3RpZnk6IGNlbnRlcjtcXG59XFxuXFxuI2RlY2tUaXRsZXtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGdyaWQtY29sdW1uOiAxLzQ7XFxuICAgIGdyaWQtcm93OiAxLzU7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGFxdWE7ICovXFxuICAgIC8qIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7ICovXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgLyogb3BhY2l0eTogNTAlOyAqL1xcbn1cXG5cXG4uc2VsZWN0ZWREZWNrIHtcXG4gICAgYm94LXNoYWRvdzogcmdiKDEwMiwgMjIwLCAyNDEpIDAgMCAzcHggMnB4O1xcbiAgICAvKiBib3gtc2hhZG93OiByZ2JhKDUzLCA4MiwgOTQsIDAuMykgMXB4IDlweCA5cHggMXB4OyAqL1xcbn1cXG5cXG4jYWRkQ2FyZEJ1dHRvbiwgI2FkZERlY2tCdXR0b257XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jYWRkQ2FyZEJ1dHRvbjpob3ZlciwgI2FkZERlY2tCdXR0b246aG92ZXIsIC5uZXh0QnV0dG9uOmhvdmVye1xcbiAgICAvKiB0ZXh0LXNoYWRvdzogIDAgMCAzcHggMnB4LCByZ2IoMTAyLCAxNzMsIDI0MSk7ICovXFxuICAgIHRleHQtc2hhZG93OiAtMXB4IDFweCAycHggcmdiKDEwMiwgMjIwLCAyNDEpLFxcblxcdFxcdFxcdFxcdCAgMXB4IDFweCAycHggcmdiKDEwMiwgMjIwLCAyNDEpLFxcblxcdFxcdFxcdFxcdCAgMXB4IC0xcHggMCByZ2IoMTAyLCAyMjAsIDI0MSksXFxuXFx0XFx0XFx0XFx0ICAtMXB4IC0xcHggMCByZ2IoMTAyLCAyMjAsIDI0MSk7XFxuICAgIFxcbn1cXG4ubmV4dEJ1dHRvbntcXG4gICAganVzdGlmeS1zZWxmOiByaWdodDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogcmdiKDgwLCAxNjMsIDE4Mik7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogNzJweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNmb3J3YXJkQnV0dG9ue1xcbiAgICBqdXN0aWZ5LXNlbGY6IGxlZnQ7XFxuICAgIGdyaWQtY29sdW1uOiAzLzQ7XFxufVxcblxcbiNiYWNrd2FyZEJ1dHRvbntcXG4gICAganVzdGlmeS1zZWxmOiByaWdodDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG59XFxuXFxuXFxuLmNhcmRCaWd7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMjQwcHg7XFxuICAgIGhlaWdodDogMzYwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDUzLCA4MiwgOTQsIDAuMykgMXB4IDlweCA5cHggMXB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgei1pbmRleDogMTtcXG5cXG59XFxuXFxuI3RvcENhcmR7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDgsIDFmcik7XFxuXFxuICAgIC8qIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICovXFxufVxcblxcbi5iaWdQbHVzLCAubGl0dGxlUGx1c3tcXG4gICAgZ3JpZC1jb2x1bW46IDEvNTtcXG4gICAgZ3JpZC1yb3c6IDQvNjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDcycHg7XFxuICAgIGNvbG9yOiByZ2IoNjMsIDEzNSwgMTUyKTtcXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgXFxufVxcblxcbi5saXR0bGVQbHVze1xcbiAgICBncmlkLXJvdzogMy80O1xcbn1cXG5cXG4uc3RhY2swe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDZweDtcXG4gICAgbGVmdDogNjNweDtcXG4gICAgLyogei1pbmRleDogLTE7ICovXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDJkZWcpO1xcbn1cXG5cXG4uc3RhY2sxe1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogM3B4O1xcbiAgICBsZWZ0OiA1OHB4O1xcbiAgICAvKiB6LWluZGV4OiAtMjsgKi9cXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMWRlZyk7XFxufVxcblxcbi5zdGFjazJ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA0cHg7XFxuICAgIGxlZnQ6IDEyMHB4O1xcbiAgICAvKiB6LWluZGV4OiAtMzsgKi9cXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNmRlZyk7XFxufVxcblxcbi5lZGl0U2l6ZXtcXG4gICAgLyogcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDE4MHB4OyAqL1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogNDUwcHg7XFxuICAgIHotaW5kZXg6IDM7XFxufVxcblxcbi5vdmVyTGF5SG9sZGVye1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDsgXFxuICAgIFxcbn1cXG5cXG4ub3ZlcmxheXtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzcsIDEwNywgMTA3KTtcXG4gICAgb3BhY2l0eTogNjAlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIHBhZGRpbmc6IDIwcHg7IFxcbn1cXG5cXG4uZm9ybURpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiA2MDBweDtcXG4gICAgei1pbmRleDogMztcXG59XFxuXFxuLnN1Ym1pdEJ1dHRvbnNEaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogMTZweDtcXG4gICAgaGVpZ2h0OiA0NHB4O1xcbn1cXG5cXG4uY2FyZEZvcm17XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMTZweDtcXG4gICAgd2lkdGg6MzAwcHg7XFxuICAgIGhlaWdodDogNDEwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEuNWZyIDEuNWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNywgMWZyKTtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLmlucHV0LCAuY2hlY2t7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvNTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQyLCAyNDIsIDI0Mik7XFxuICAgIGNvbG9yOiByZ2IoODAsIDE2MywgMTgyKTtcXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5pbnB1dDpob3ZlcntcXG4gICAgYm94LXNoYWRvdzogcmdiKDEwMiwgMTczLCAyNDEpIDAgMCAzcHggMnB4O1xcbiAgICBib3gtc2hhZG93OiByZ2IoMTAyLCAyMjAsIDI0MSkgMCAwIDNweCAycHg7XFxufVxcblxcbi5jYXJkVGl0bGV7XFxuICAgZ3JpZC1yb3c6IDEvMjtcXG4gICBncmlkLWNvbHVtbjogMS81O1xcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2NhcmRTdGVwc3tcXG4gICAgZ3JpZC1jb2x1bW46IDIvNDtcXG4gICAgZ3JpZC1yb3c6IDIvNztcXG59XFxuXFxuI2NhcmREYXRle1xcbiAgICBncmlkLXJvdzogNy84O1xcbiAgICBncmlkLWNvbHVtbjogMS81O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNjYXJkRGVsZXRle1xcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDgvOTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4MCwgMTYzLCAxODIpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC1qdXN0aWZ5OiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2RlY2tEZWxldGV7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiA1LzY7XFxuICAgIHdpZHRoOiA4cHg7XFxuICAgIGhlaWdodDogOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4MCwgMTYzLCAxODIpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogOXB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtanVzdGlmeTogY2VudGVyOyBcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2hlY2t7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgei1pbmRleDogMztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZ3JvdyB7IFxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuMXMgZWFzZS1pbi1vdXQ7IFxcbiAgICB9XFxuICAgIFxcbi5ncm93OmhvdmVyIHsgXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7IFxcbiAgICB9XFxuXFxuLmNoZWNrOmhvdmVye1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbltjb250ZW50ZWRpdGFibGVdIHtcXG4gICAgLyogb3V0bGluZTogMHB4IHNvbGlkIHRyYW5zcGFyZW50OyAqL1xcbiAgfVxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7O0dBRUc7QUFDSDtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGVBQWU7O0lBRWYsbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxZQUFZOztBQUVoQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQ0FBbUM7SUFDbkMsd0VBQXdFO0lBQ3hFLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixRQUFRO0lBQ1IsYUFBYTtJQUNiLGNBQWM7SUFDZCxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsUUFBUTtBQUNaOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lB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LFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SYWxld2F5Oml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXAnKTsgXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3N3YWxkOndnaHRAMjAwOzMwMDs0MDA7NTAwOzYwMDs3MDAmZmFtaWx5PVJhbGV3YXk6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCcpO1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNvdXJpZXIrUHJpbWU6aXRhbCx3Z2h0QDAsNDAwOzAsNzAwOzEsNDAwOzEsNzAwJmZhbWlseT1Pc3dhbGQ6d2dodEAyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMCZmYW1pbHk9UmFsZXdheTppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZGlzcGxheT1zd2FwJyk7XFxuLyogKntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59ICovXFxuYm9keSB7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBcXG4gICAgLyogaGVpZ2h0OiAxMDB2aDsgKi9cXG4gICAgXFxufVxcblxcbmRpdiB7XFxuICAgIC8qIGJvcmRlci10b3A6IDJweCBzb2xpZCB3aGl0ZTsgKi9cXG4gICAgcGFkZGluZzogNHB4O1xcblxcbn1cXG4jY29udGVudCB7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2MywgMTM1LCAxNTIpO1xcbiAgICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBtYXJnaW46IDIwcHggMDtcXG4gICAgd2lkdGg6IDQ4MHB4O1xcbiAgICBoZWlnaHQ6IDEwMHZoOyAgXFxufVxcblxcbiNoZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4jZGVja0RvY2t7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbn1cXG5cXG4uZGVja0FyZWF7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogN3B4O1xcbn1cXG5cXG4jdGFibGV7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuI2xvZ28sIC50aXRsZXtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4udGl0bGV7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcblxcbiNjYXJkQXJlYXtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2MHB4IDFmciA2MHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5kZWNrLCAuYmxhbmtEZWNre1xcbiAgICAvKiBwb2ludGVyLWV2ZW50czogbm9uZTsgKi9cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgMWZyKTtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGhlaWdodDogOTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgLyogYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwIDdweCA5cHggLTdweDtcXG4gICAgYm94LXNoYWRvdzogcmdiYSg1MywgODIsIDk0LCAwLjMpIDFweCA3cHggN3B4IDFweDsgKi9cXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC8qIHBhZGRpbmc6IDBweDsgKi9cXG59XFxuXFxuLmJsYW5rRGVja3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIHJnYig0NiwgOTksIDExMSk7XFxuICAgIFxcbn1cXG5cXG4ubWVudXtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxuICAgIGdhcDogNHB4O1xcbn1cXG5cXG4jZGVja1RpdGxlLCAjY2FyZFRpdGxlLCAjY2FyZERhdGUsICNjYXJkU3RlcHN7XFxuICAgIG1hcmdpbi10b3A6IDhweDtcXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHJnYig2MywgMTM1LCAxNTIpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtanVzdGlmeTogY2VudGVyO1xcbn1cXG5cXG4jZGVja1RpdGxle1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvNDtcXG4gICAgZ3JpZC1yb3c6IDEvNTtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYXF1YTsgKi9cXG4gICAgLyogd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTsgKi9cXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAvKiBvcGFjaXR5OiA1MCU7ICovXFxufVxcblxcbi5zZWxlY3RlZERlY2sge1xcbiAgICBib3gtc2hhZG93OiByZ2IoMTAyLCAyMjAsIDI0MSkgMCAwIDNweCAycHg7XFxuICAgIC8qIGJveC1zaGFkb3c6IHJnYmEoNTMsIDgyLCA5NCwgMC4zKSAxcHggOXB4IDlweCAxcHg7ICovXFxufVxcblxcbiNhZGRDYXJkQnV0dG9uLCAjYWRkRGVja0J1dHRvbntcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNhZGRDYXJkQnV0dG9uOmhvdmVyLCAjYWRkRGVja0J1dHRvbjpob3ZlciwgLm5leHRCdXR0b246aG92ZXJ7XFxuICAgIC8qIHRleHQtc2hhZG93OiAgMCAwIDNweCAycHgsIHJnYigxMDIsIDE3MywgMjQxKTsgKi9cXG4gICAgdGV4dC1zaGFkb3c6IC0xcHggMXB4IDJweCByZ2IoMTAyLCAyMjAsIDI0MSksXFxuXFx0XFx0XFx0XFx0ICAxcHggMXB4IDJweCByZ2IoMTAyLCAyMjAsIDI0MSksXFxuXFx0XFx0XFx0XFx0ICAxcHggLTFweCAwIHJnYigxMDIsIDIyMCwgMjQxKSxcXG5cXHRcXHRcXHRcXHQgIC0xcHggLTFweCAwIHJnYigxMDIsIDIyMCwgMjQxKTtcXG4gICAgXFxufVxcbi5uZXh0QnV0dG9ue1xcbiAgICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiByZ2IoODAsIDE2MywgMTgyKTtcXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiA3MnB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2ZvcndhcmRCdXR0b257XFxuICAgIGp1c3RpZnktc2VsZjogbGVmdDtcXG4gICAgZ3JpZC1jb2x1bW46IDMvNDtcXG59XFxuXFxuI2JhY2t3YXJkQnV0dG9ue1xcbiAgICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogMS8yO1xcbn1cXG5cXG5cXG4uY2FyZEJpZ3tcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAyNDBweDtcXG4gICAgaGVpZ2h0OiAzNjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoNTMsIDgyLCA5NCwgMC4zKSAxcHggOXB4IDlweCAxcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB6LWluZGV4OiAxO1xcblxcbn1cXG5cXG4jdG9wQ2FyZHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoOCwgMWZyKTtcXG5cXG4gICAgLyogZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgKi9cXG59XFxuXFxuLmJpZ1BsdXMsIC5saXR0bGVQbHVze1xcbiAgICBncmlkLWNvbHVtbjogMS81O1xcbiAgICBncmlkLXJvdzogNC82O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogNzJweDtcXG4gICAgY29sb3I6IHJnYig2MywgMTM1LCAxNTIpO1xcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBcXG59XFxuXFxuLmxpdHRsZVBsdXN7XFxuICAgIGdyaWQtcm93OiAzLzQ7XFxufVxcblxcbi5zdGFjazB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNnB4O1xcbiAgICBsZWZ0OiA2M3B4O1xcbiAgICAvKiB6LWluZGV4OiAtMTsgKi9cXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMmRlZyk7XFxufVxcblxcbi5zdGFjazF7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAzcHg7XFxuICAgIGxlZnQ6IDU4cHg7XFxuICAgIC8qIHotaW5kZXg6IC0yOyAqL1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxZGVnKTtcXG59XFxuXFxuLnN0YWNrMntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDRweDtcXG4gICAgbGVmdDogMTIwcHg7XFxuICAgIC8qIHotaW5kZXg6IC0zOyAqL1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg2ZGVnKTtcXG59XFxuXFxuLmVkaXRTaXple1xcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTgwcHg7ICovXFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiA0NTBweDtcXG4gICAgei1pbmRleDogMztcXG59XFxuXFxuLm92ZXJMYXlIb2xkZXJ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoOyBcXG4gICAgXFxufVxcblxcbi5vdmVybGF5e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNywgMTA3LCAxMDcpO1xcbiAgICBvcGFjaXR5OiA2MCU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgei1pbmRleDogMjtcXG4gICAgcGFkZGluZzogMjBweDsgXFxufVxcblxcbi5mb3JtRGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XFxuICAgIGdhcDogMjBweDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDYwMHB4O1xcbiAgICB6LWluZGV4OiAzO1xcbn1cXG5cXG4uc3VibWl0QnV0dG9uc0RpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZ2FwOiAxNnB4O1xcbiAgICBoZWlnaHQ6IDQ0cHg7XFxufVxcblxcbi5jYXJkRm9ybXtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxNnB4O1xcbiAgICB3aWR0aDozMDBweDtcXG4gICAgaGVpZ2h0OiA0MTBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMS41ZnIgMS41ZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg3LCAxZnIpO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4uaW5wdXQsIC5jaGVja3tcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBncmlkLWNvbHVtbjogMS81O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDIsIDI0MiwgMjQyKTtcXG4gICAgY29sb3I6IHJnYig4MCwgMTYzLCAxODIpO1xcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmlucHV0OmhvdmVye1xcbiAgICBib3gtc2hhZG93OiByZ2IoMTAyLCAxNzMsIDI0MSkgMCAwIDNweCAycHg7XFxuICAgIGJveC1zaGFkb3c6IHJnYigxMDIsIDIyMCwgMjQxKSAwIDAgM3B4IDJweDtcXG59XFxuXFxuLmNhcmRUaXRsZXtcXG4gICBncmlkLXJvdzogMS8yO1xcbiAgIGdyaWQtY29sdW1uOiAxLzU7XFxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jY2FyZFN0ZXBze1xcbiAgICBncmlkLWNvbHVtbjogMi80O1xcbiAgICBncmlkLXJvdzogMi83O1xcbn1cXG5cXG4jY2FyZERhdGV7XFxuICAgIGdyaWQtcm93OiA3Lzg7XFxuICAgIGdyaWQtY29sdW1uOiAxLzU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2NhcmREZWxldGV7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogOC85O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgwLCAxNjMsIDE4Mik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LWp1c3RpZnk6IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jZGVja0RlbGV0ZXtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDUvNjtcXG4gICAgd2lkdGg6IDhweDtcXG4gICAgaGVpZ2h0OiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgwLCAxNjMsIDE4Mik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiA5cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC1qdXN0aWZ5OiBjZW50ZXI7IFxcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jaGVja3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICB6LWluZGV4OiAzO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5ncm93IHsgXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4xcyBlYXNlLWluLW91dDsgXFxuICAgIH1cXG4gICAgXFxuLmdyb3c6aG92ZXIgeyBcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTsgXFxuICAgIH1cXG5cXG4uY2hlY2s6aG92ZXJ7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuW2NvbnRlbnRlZGl0YWJsZV0ge1xcbiAgICAvKiBvdXRsaW5lOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7ICovXFxuICB9XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgY2FyZCA9IChuYW1lKSA9PiB7XG4gIGNvbnN0IGNhcmROYW1lID0gbmFtZTtcbiAgY29uc3QgY2FyZFN0ZXBzID0gW107XG4gIGNvbnN0IGNhcmREYXRlID0gXCJcIjtcbiAgY29uc3QgY2FyZENvbXBsZXRlVmFsdWUgPSAwO1xuICBjb25zdCBjYXJkRGVja3MgPSBbXCJhbGxcIl07XG4gIHJldHVybiB7XG4gICAgY2FyZE5hbWUsXG4gICAgY2FyZENvbXBsZXRlVmFsdWUsXG4gICAgY2FyZERhdGUsXG4gICAgY2FyZFN0ZXBzLFxuICAgIGNhcmREZWNrcyxcbiAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBjYXJkO1xuIiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBjYXJkIGZyb20gXCIuL2NhcmRcIjtcbmltcG9ydCBkZWNrIGZyb20gXCIuL2RlY2tcIjtcblxuZXhwb3J0IGNvbnN0IGFsbCA9IGRlY2soXCJhbGxcIik7XG5jb25zb2xlLmxvZyhhbGwpO1xuZXhwb3J0IGNvbnN0IGRlY2tBcnJheSA9IFtdO1xuZGVja0FycmF5LnB1c2goYWxsKTtcbmV4cG9ydCBjb25zdCB0YWJsZSA9IGRlY2tBcnJheTtcbmV4cG9ydCBjb25zdCBkZWZhdWx0RGVjayA9IGRlY2soJ1RvLURvJyk7XG5leHBvcnQgY29uc3QgZGVmYXVsdENhcmQgPSBjYXJkKCdHZXQgR3JvY2VyaWVzJyk7XG5leHBvcnQgY29uc3QgZGVmYXVsdENhcmQyID0gY2FyZCgnTWFpbCBUaGFuayBZb3UgTm90ZXMnKTtcbmFsbC5jYXJkc0FycmF5LnB1c2goZGVmYXVsdENhcmQpO1xuYWxsLmNhcmRzQXJyYXkucHVzaChkZWZhdWx0Q2FyZDIpO1xuZGVmYXVsdERlY2suY2FyZHNBcnJheS5wdXNoKGRlZmF1bHRDYXJkLmNhcmROYW1lKTtcbmRlZmF1bHREZWNrLmNhcmRzQXJyYXkucHVzaChkZWZhdWx0Q2FyZDIuY2FyZE5hbWUpO1xuZGVja0FycmF5LnB1c2goZGVmYXVsdERlY2spO1xuXG5cbiAgICBjb25zdCB2aWV3QWxsID0gKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coYEFsbCBjYXJkcyBhcmU6ICR7YWxsfWApO1xuICAgICAgY29uc29sZS5sb2coYGFsbCBkZWNrcyBhcmU6ICR7dGFibGV9YCk7XG4gICAgICBhbGwuY2FyZHNBcnJheS5mb3JFYWNoKChjYXJkRWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhgYWxsICsgJHtjYXJkRWxlbWVudH1gKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCB2aWV3RGVjayA9IChuYW1lKSA9PiB7XG4gICAgICBsZXQgY3VycmVudERlY2s7XG4gICAgICBsZXQgd2FzTWF0Y2hlZCA9IGZhbHNlO1xuICAgICAgdGFibGUuZm9yRWFjaCgoZGVja0VsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJpbiBmb3IgZWFjaFwiKTtcbiAgICAgICAgY29uc29sZS5sb2coZGVja0VsZW1lbnQpO1xuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50RGVjayk7XG4gICAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiBjdXJyZW50RGVjayk7XG4gICAgICAgIGlmIChkZWNrRWxlbWVudC5kZWNrTmFtZSA9PT0gbmFtZSkge1xuICAgICAgICAgIGN1cnJlbnREZWNrID0gZGVja0VsZW1lbnQ7XG4gICAgICAgICAgY29uc29sZS5sb2coY3VycmVudERlY2spO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiBjdXJyZW50RGVjayk7XG4gICAgICAgICAgd2FzTWF0Y2hlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKHdhc01hdGNoZWQgPT09IGZhbHNlKSB7XG4gICAgICAgIGN1cnJlbnREZWNrID0gYWxsO1xuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50RGVjayk7XG4gICAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiBjdXJyZW50RGVjayk7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyh0eXBlb2YgY3VycmVudERlY2spO1xuICAgICAgY29uc29sZS5sb2coYCR7Y3VycmVudERlY2suZGVja05hbWV9IGNvbnRlbnRzIGFyZTogYCk7XG4gICAgICBjdXJyZW50RGVjay5jYXJkc0FycmF5LmZvckVhY2goKGNhcmRFbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGNhcmRFbGVtZW50KTtcbiAgICAgIH0pO1xuICAgICAgXG4gICAgfTtcblxuICAgIGV4cG9ydCBjb25zdCBjcmVhdGVEZWNrID0gKG5hbWUpID0+IHtcbiAgICAgICAgLy8gY29uc3QgdGhlTmFtZSA9IHByb21wdCgnV2hhdCBpcyB0aGUgbmFtZSBvZiB0ZWggZGVjaz8nKVxuICAgICAgY29uc3QgdGhpc0RlY2sgPSBkZWNrKG5hbWUpO1xuICAgICAgdGFibGUucHVzaCh0aGlzRGVjayk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcInRoZSBkZWNrIGNyZWF0ZWQgaXM6IFwiICsgdGhpc0RlY2spO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJpdHMgbmFtZSBpczogXCIgKyB0aGlzRGVjay5kZWNrTmFtZSk7XG4gICAgfTtcblxuICAgIGV4cG9ydCBjb25zdCBhZGRDYXJkdG9EZWNrID0gKHRoaXNDYXJkLCB0aGlzRGVjaykgPT4ge1xuICAgICAgICB0aGlzQ2FyZC5jYXJkRGVjayA9IHRoaXNEZWNrLmRlY2tOYW1lO1xuICAgICAgICB0aGlzRGVjay5jYXJkc0FycmF5LnB1c2godGhpc0NhcmQuY2FyZE5hbWUpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzRGVjayk7XG4gICAgICB9O1xuXG4gICAgXG5cbiAgICBleHBvcnQgY29uc3QgZ2V0Q2FyZCA9IChuYW1lKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG5hbWUpXG4gICAgICBsZXQgdGhpc0NhcmQ7XG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzQ2FyZCk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhhbGwubGVuZ3RoKTtcbiAgICAgIGNvbnNvbGUubG9nKGFsbC5jYXJkc0FycmF5KTtcbiAgICAgIGFsbC5jYXJkc0FycmF5LmZvckVhY2goKGNhcmRFbGVtZW50KSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNhcmRFbGVtZW50LmNhcmROYW1lKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cobmFtZSk7XG4gICAgICAgIGlmIChjYXJkRWxlbWVudC5jYXJkTmFtZSA9PT0gbmFtZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGAke2NhcmRFbGVtZW50LmNhcmROYW1lfSA9PT0gJHtuYW1lfWApO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXNDYXJkKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhjYXJkRWxlbWVudCk7XG4gICAgICAgICAgdGhpc0NhcmQgPSBjYXJkRWxlbWVudDtcbiAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzQ2FyZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIC8vICAgaWYgKHRoZUNhcmQgPT09IHVuZGVmaW5lZCkge1xuICAgIC8vICAgICAvLyBjb25zdCBjYXJkTmFtZSA9IHByb21wdChcbiAgICAvLyAgICAgLy8gICBcInRoYXQgY2FyZCBkb2VzIG5vdCBleGlzdCwgcGxlYXNlIGVudGVyIGFub3RoZXIgbmFtZTpcIlxuICAgIC8vICAgICAvLyApO1xuICAgIC8vICAgICAvLyB0aGVDYXJkID0gZ2V0Q2FyZChjYXJkTmFtZSk7XG4gICAgLy8gICB9XG4gICAgICBjb25zb2xlLmxvZyh0aGlzQ2FyZClcbiAgICAgIHJldHVybiB0aGlzQ2FyZDtcbiAgICB9O1xuXG4gICAgZXhwb3J0IGNvbnN0IGdldERlY2sgPSAobmFtZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ0dFVFRJTkcgREVDSycpO1xuICAgICAgbGV0IHRoZURlY2s7XG4gICAgICBjb25zb2xlLmxvZyhgdGhlIGRlY2sgYXJyYXkgaXMgJHtkZWNrQXJyYXl9YCk7XG4gICAgICBkZWNrQXJyYXkuZm9yRWFjaChkZWNrRWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGhlICBkZWNrIG5hbWUgaXM6IFwiICsgZGVja0VsZW1lbnQuZGVja05hbWUpO1xuICAgICAgICBpZiAoZGVja0VsZW1lbnQuZGVja05hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIml0IG1hdGNoZWQhXCIpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGRlY2tFbGVtZW50LmRlY2tOYW1lLCBuYW1lKTtcbiAgICAgICAgICB0aGVEZWNrID0gZGVja0VsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKFwiZ2V0dGluZyBkZWNrOiBcIiArIHRoZURlY2suZGVja05hbWUpO1xuICAgICAgLy8gaWYgKHRoZURlY2sgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gICBjb25zdCBkZWNrTmFtZSA9IHByb21wdChcbiAgICAgIC8vICAgICBcInRoYXQgZGVjayBkb2VzIG5vdCBleGlzdCwgcGxlYXNlIGVudGVyIGFub3RoZXIgbmFtZTpcIlxuICAgICAgLy8gICApO1xuICAgICAgLy8gICB0aGVEZWNrID0gZ2V0RGVjayhkZWNrTmFtZSk7XG4gICAgICAvLyB9XG4gICAgICBjb25zb2xlLmxvZyh0aGVEZWNrKTtcbiAgICAgIHJldHVybiB0aGVEZWNrO1xuICAgIH07XG5cbiAgICBleHBvcnQgY29uc3QgY3JlYXRlQ2FyZCA9IChuYW1lKSA9PiB7XG4gICAgICAgIC8vIGNvbnN0IHRoZU5hbWUgPSBwcm9tcHQoJ1doYXQgaXMgdGhlIG5hbWUgb2YgdGhlIGNhcmQ/JylcbiAgICAgIGNvbnN0IG5ld0NhcmQgPSBjYXJkKG5hbWUpO1xuICAgICAgLy8gY29uc3QgbmFtZU9mRGVjayA9IHByb21wdCgnd2hhdCBkZWNrPycpO1xuICAgICAgLy8gbmV3Q2FyZC5jYXJkRGVja3MucHVzaChuYW1lT2ZEZWNrKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKG5ld0NhcmQuY2FyZERlY2tzKTtcbiAgICAgIC8vIG5ld0NhcmQuY2FyZERlY2tzLmZvckVhY2goZGVja05hbWUgPT4ge1xuICAgICAgLy8gICBpZihkZWNrTmFtZSAhPT0gJ2FsbCcpe1xuICAgICAgLy8gICBjb25zdCB0aGlzRGVjayA9IGdldERlY2soZGVja05hbWUpO1xuICAgICAgLy8gICBjb25zb2xlLmxvZygnYWRkaW5nIGh0ZSBmdWxsb3dpbmcgY2FyZCB0byB0aGUgZm9sbG93aW5nIGRlY2sgJysgbmV3Q2FyZC5jYXJkTmFtZSArIFwiIFwiICsgdGhpc0RlY2suZGVja05hbWUpO1xuICAgICAgLy8gICBhZGRDYXJkdG9EZWNrKG5ld0NhcmQsIHRoaXNEZWNrKVxuICAgICAgLy8gICB9XG4gICAgICAgIFxuICAgICAgLy8gfSlcbiAgICBhbGwuY2FyZHNBcnJheS5wdXNoKG5ld0NhcmQpO1xuICAgIGNvbnNvbGUubG9nKGFsbC5jYXJkc0FycmF5KTtcbiAgICByZXR1cm4gbmV3Q2FyZDtcbiAgICBcbiAgICB9O1xuXG4gICAgXG5cbiAgICBleHBvcnQgY29uc3QgZGVsZXRlQ2FyZEZyb21EZWNrID0gKHRoaXNDYXJkLCB0aGlzRGVjaykgPT4ge1xuICAgICAgY29uc3QgaW5kZXggPSB0aGlzRGVjay5jYXJkc0FycmF5LmluZGV4T2YodGhpc0NhcmQuY2FyZE5hbWUpO1xuICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgdGhpc0RlY2suY2FyZHNBcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXNEZWNrO1xuICAgIH07XG5cbiAgICBleHBvcnQgY29uc3QgZGVsZXRlQ2FyZCA9ICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdkZWxldGluZycpXG4gICAgICBjb25zdCBjYXJkRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmRUaXRsZScpO1xuICAgICAgY29uc3QgYUNhcmROYW1lID0gY2FyZERpdi50ZXh0Q29udGVudDtcbiAgICAgIGNvbnN0IHRoaXNDYXJkID0gZ2V0Q2FyZChhQ2FyZE5hbWUpO1xuICAgICAgY29uc3QgaW5kZXggPSBhbGwuY2FyZHNBcnJheS5pbmRleE9mKHRoaXNDYXJkKTtcbiAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIGFsbC5jYXJkc0FycmF5LnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhhbGwpO1xuICAgICAgcmV0dXJuIGFsbDtcbiAgICB9O1xuXG4gICAgZXhwb3J0IGNvbnN0IGRlbGV0ZURlY2sgPSAoYURlY2tOYW1lKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnREVMRVRFSU5HIERFQ0sgSU4gQ09OVFJPTExTJylcbiAgICAgIGNvbnNvbGUubG9nKGBkZWNrIG5hbWUgaXMgJHthRGVja05hbWV9YClcbiAgICAgIGNvbnN0IGRlY2tPYmogPSBnZXREZWNrKGFEZWNrTmFtZSk7XG4gICAgICBjb25zb2xlLmxvZyhgZ28gdGhlIGRlY2sgb2JqZWN0IGNhbGxlZCAke2RlY2tPYmouZGVja05hbWV9YCk7XG4gICAgICBjb25zdCBpbmRleCA9IGRlY2tBcnJheS5pbmRleE9mKGRlY2tPYmopO1xuICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgZGVja0FycmF5LnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhgREVDSyBBUlJBWSBJUyAke2RlY2tBcnJheX1gKTtcbiAgICAgIHJldHVybiBkZWNrQXJyYXk7XG4gICAgfTtcblxuICAgIGNvbnN0IG1vdmVDYXJkID0gKHRoZUNhcmROYW1lLCBkZWNrT25lTmFtZSwgZGVja1R3b05hbWUpID0+IHtcbiAgICAgIGNvbnN0IHRoaXNDYXJkID0gZ2V0Q2FyZCh0aGVDYXJkTmFtZSk7XG4gICAgICBjb25zdCBkZWNrT25lID0gZ2V0RGVjayhkZWNrT25lTmFtZSk7XG4gICAgICBjb25zdCBkZWNrVHdvID0gZ2V0RGVjayhkZWNrVHdvTmFtZSk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzQ2FyZCwgZGVja09uZSwgZGVja1R3byk7XG4gICAgICBkZWxldGVDYXJkRnJvbURlY2sodGhpc0NhcmQsIGRlY2tPbmUpO1xuICAgICAgYWRkQ2FyZHRvRGVjayh0aGlzQ2FyZCwgZGVja1R3byk7XG4gICAgfTtcblxuICAgIGNvbnN0IHZpZXdDYXJkID0gKHRoZUNhcmROYW1lKSA9PiB7XG4gICAgICBjb25zdCB0aGlzQ2FyZCA9IGdldENhcmQodGhlQ2FyZE5hbWUpO1xuICAgICAgZm9yIChjb25zdCBwcm9wIGluIHRoaXNDYXJkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBvYmouJHtwcm9wfSA9ICR7dGhpc0NhcmRbcHJvcF19YCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHNldERhdGUgPSAodGhlQ2FyZE5hbWUpID0+IHtcbiAgICAgIGNvbnN0IHRoaXNDYXJkID0gZ2V0Q2FyZCh0aGVDYXJkTmFtZSk7XG4gICAgICBjb25zdCBhRGF0ZSA9IHByb21wdChcImVudGVyIHRoZSBkdWUgZGF0ZSBpbiB0aGUgZm9ybSBvZiBNTS5ERC5ZWTpcIik7XG4gICAgICB0aGlzQ2FyZC5jYXJkRGF0ZSA9IG5ldyBEYXRlKGFEYXRlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgYWRkU3RlcCA9ICh0aGVDYXJkTmFtZSkgPT4ge1xuICAgICAgY29uc3QgdGhpc0NhcmQgPSBnZXRDYXJkKHRoZUNhcmROYW1lKTtcbiAgICAgIGNvbnN0IGkgPSB0aGlzQ2FyZC5jYXJkU3RlcHMubGVuZ3RoO1xuICAgICAgdGhpc0NhcmQuY2FyZFN0ZXBzW2ldID0gcHJvbXB0KFwiZW50ZXIgeW91ciBzdGVwOlwiKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0U3RlcCA9ICh0aGVDYXJkTmFtZSkgPT4ge1xuICAgICAgY29uc3QgdGhpc0NhcmQgPSBnZXRDYXJkKHRoZUNhcmROYW1lKTtcbiAgICAgIGNvbnN0IGkgPSBwcm9tcHQoXCJ3aGF0IGluZGV4P1wiKTtcbiAgICAgIHRoaXNDYXJkLmNhcmRTdGVwc1tpXSA9IHByb21wdChcImVudGVyIHlvdXIgc3RlcDpcIik7XG4gICAgfTtcblxuICAgIGNvbnN0IHNldENvbXBsZXRlID0gKHRoZUNhcmROYW1lKSA9PiB7XG4gICAgICBjb25zdCB0aGlzQ2FyZCA9IGdldENhcmQodGhlQ2FyZE5hbWUpO1xuICAgICAgdGhpc0NhcmQuY2FyZENvbXBsZXRlVmFsdWUgPSBOdW1iZXIoXG4gICAgICAgIHByb21wdChcbiAgICAgICAgICBcImlzIHlvdXIgdGFzayBjb21wbGV0ZT8gSWYgc28sIGVudGVyIGEgJzEnIG90aGVyd2lzZSBlbmV0ZXIgJzAnLlwiXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfTtcblxuICAgIC8vIHJldHVybiB7XG4gICAgLy8gICB2aWV3QWxsLFxuICAgIC8vICAgdmlld0NhcmQsXG4gICAgLy8gICB2aWV3RGVjayxcbiAgICAvLyAgIGNyZWF0ZUNhcmQsXG4gICAgLy8gICBjcmVhdGVEZWNrLFxuICAgIC8vICAgZ2V0Q2FyZCxcbiAgICAvLyAgIGdldERlY2ssXG4gICAgLy8gICBhZGRDYXJkdG9EZWNrLFxuICAgIC8vICAgZGVsZXRlQ2FyZEZyb21EZWNrLFxuICAgIC8vICAgZGVsZXRlQ2FyZCxcbiAgICAvLyAgIGRlbGV0ZURlY2ssXG4gICAgLy8gICBtb3ZlQ2FyZCxcbiAgICAvLyAgIHNldERhdGUsXG4gICAgLy8gICBhZGRTdGVwLFxuICAgIC8vICAgc2V0Q29tcGxldGUsXG4gICAgLy8gICBzZXRTdGVwLFxuICAgIC8vIH07XG5cblxuIiwiY29uc3QgZGVjayA9IChuYW1lKSA9PiB7XG4gIGNvbnN0IGRlY2tOYW1lID0gbmFtZTtcbiAgY29uc3QgY2FyZHNBcnJheSA9IFtdO1xuICBjb25zdCBib29rbWFyayA9IDA7XG4gIHJldHVybiB7XG4gICAgZGVja05hbWUsXG4gICAgY2FyZHNBcnJheSxcbiAgICBib29rbWFyayxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRlY2s7XG4iLCJpbXBvcnQgKiBhcyBjb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxzJztcbmltcG9ydCB7ZGVmYXVsdERlY2ssIGRlZmF1bHRDYXJkLCBkZWNrQXJyYXksIGFsbH0gZnJvbSAnLi9jb250cm9sbHMnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgY2FyZCBmcm9tIFwiLi9jYXJkXCI7XG5pbXBvcnQgZGVjayBmcm9tIFwiLi9kZWNrXCI7XG5cblxuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb250ZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGVudCcpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWluZXInKTtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5oZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsICdoZWFkZXInKTtcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG5jb25zdCBkZWNrRG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZGVja0RvY2suc2V0QXR0cmlidXRlKCdpZCcsICdkZWNrRG9jaycpO1xuY29udGFpbmVyLmFwcGVuZENoaWxkKGRlY2tEb2NrKTtcblxuY29uc3QgY2FyZERvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNhcmREb2NrLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFibGUnKTtcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkRG9jayk7XG5cbmNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmxvZ28uc2V0QXR0cmlidXRlKCdpZCcsICdsb2dvJyk7XG5oZWFkZXIuYXBwZW5kQ2hpbGQobG9nbyk7XG5sb2dvLnRleHRDb250ZW50ID0gJ1NodWZmbGUnO1xuXG5jb25zdCBkZWNrRG9ja01lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmRlY2tEb2NrTWVudS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUnKTtcbmRlY2tEb2NrLmFwcGVuZENoaWxkKGRlY2tEb2NrTWVudSk7XG5cbmxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmRpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RpdGxlJyk7XG5kZWNrRG9ja01lbnUuYXBwZW5kQ2hpbGQoZGl2KTtcbmRpdi50ZXh0Q29udGVudCA9ICdEZWNrcyc7XG5cbmNvbnN0IGFkZERlY2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmFkZERlY2tCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdhZGREZWNrQnV0dG9uJyk7XG5hZGREZWNrQnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGl0bGUnKVxuYWRkRGVja0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdncm93Jyk7XG5kZWNrRG9ja01lbnUuYXBwZW5kQ2hpbGQoYWRkRGVja0J1dHRvbik7XG5hZGREZWNrQnV0dG9uLnRleHRDb250ZW50ID0gJysnO1xuXG5jb25zdCBkZWNrQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZGVja0FyZWEuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZWNrQXJlYScpO1xuZGVja0RvY2suYXBwZW5kQ2hpbGQoZGVja0FyZWEpO1xuXG5jb25zdCBjYXJkRG9ja01lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNhcmREb2NrTWVudS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUnKTtcbmNhcmREb2NrLmFwcGVuZENoaWxkKGNhcmREb2NrTWVudSk7XG5cbmRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGl0bGUnKTtcbmNhcmREb2NrTWVudS5hcHBlbmRDaGlsZChkaXYpO1xuZGl2LnRleHRDb250ZW50ID0gJ0NhcmRzJztcblxuY29uc3QgYWRkQ2FyZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuYWRkQ2FyZEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZENhcmRCdXR0b24nKTtcbmFkZENhcmRCdXR0b24uc2V0QXR0cmlidXRlKCdjbGFzcycsICd0aXRsZScpXG5hZGRDYXJkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2dyb3cnKTtcbmNhcmREb2NrTWVudS5hcHBlbmRDaGlsZChhZGRDYXJkQnV0dG9uKTtcbmFkZENhcmRCdXR0b24udGV4dENvbnRlbnQgPSAnKyc7XG5cbmNvbnN0IGNhcmRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jYXJkQXJlYS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NhcmRBcmVhJyk7XG5jYXJkRG9jay5hcHBlbmRDaGlsZChjYXJkQXJlYSk7XG5cbmNvbnN0IGZvcndhcmRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmZvcndhcmRCdXR0b24uc2V0QXR0cmlidXRlKCdjbGFzcycsICduZXh0QnV0dG9uJyk7XG5mb3J3YXJkQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9yd2FyZEJ1dHRvbicpO1xuY2FyZEFyZWEuYXBwZW5kQ2hpbGQoZm9yd2FyZEJ1dHRvbik7XG5mb3J3YXJkQnV0dG9uLnRleHRDb250ZW50ID0gJz4nO1xuXG5jb25zdCBiYWNrd2FyZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuYmFja3dhcmRCdXR0b24uc2V0QXR0cmlidXRlKCdjbGFzcycsICduZXh0QnV0dG9uJyk7XG5iYWNrd2FyZEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2JhY2t3YXJkQnV0dG9uJyk7XG5jYXJkQXJlYS5hcHBlbmRDaGlsZChiYWNrd2FyZEJ1dHRvbik7XG5iYWNrd2FyZEJ1dHRvbi50ZXh0Q29udGVudCA9ICc8JztcblxuY29uc3Qgb3ZlckxheUhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xub3ZlckxheUhvbGRlci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NvbnRlbnQnKTtcbm92ZXJMYXlIb2xkZXIuc2V0QXR0cmlidXRlKCdpZCcsICdvdmVyTGF5SG9sZGVyJyk7XG5vdmVyTGF5SG9sZGVyLmNsYXNzTGlzdC5hZGQoJ292ZXJMYXlIb2xkZXInKTtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQob3ZlckxheUhvbGRlcik7XG5cbmNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbm92ZXJsYXkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdvdmVybGF5Jyk7XG5vdmVyTGF5SG9sZGVyLmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuXG5jb25zdCBmb3JtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5mb3JtRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZm9ybURpdicpO1xub3ZlckxheUhvbGRlci5hcHBlbmRDaGlsZChmb3JtRGl2KTtcblxuY29uc3QgbmV3Q2FyZEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbm5ld0NhcmRGb3JtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZEJpZycpO1xubmV3Q2FyZEZvcm0uY2xhc3NMaXN0LmFkZCgnZWRpdFNpemUnKTtcbm5ld0NhcmRGb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmV3Q2FyZEZvcm0nKTtcbmZvcm1EaXYuYXBwZW5kQ2hpbGQobmV3Q2FyZEZvcm0pO1xuXG5jb25zdCBzdWJtaXRCdXR0b25zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5zdWJtaXRCdXR0b25zRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc3VibWl0QnV0dG9uc0RpdicpO1xuZm9ybURpdi5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b25zRGl2KTtcblxuY29uc3QgY2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jYW5jZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjaGVjaycpO1xuY2FuY2VsLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2FuY2VsJyk7XG5jYW5jZWwuY2xhc3NMaXN0LmFkZCgnZ3JvdycpO1xuc3VibWl0QnV0dG9uc0Rpdi5hcHBlbmRDaGlsZChjYW5jZWwpO1xuY2FuY2VsLnRleHRDb250ZW50ID0gJ+Kclic7XG5cbmNvbnN0IGNoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jaGVjay5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NoZWNrJyk7XG5zdWJtaXRCdXR0b25zRGl2LmFwcGVuZENoaWxkKGNoZWNrKTtcbmNoZWNrLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2hlY2snKTtcbmNoZWNrLmNsYXNzTGlzdC5hZGQoJ2dyb3cnKTtcbmNoZWNrLnRleHRDb250ZW50ID0gJ+Kckyc7XG5cbmNvbnN0IGNhcmRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuY2FyZEZvcm0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkRm9ybScpO1xubmV3Q2FyZEZvcm0uYXBwZW5kQ2hpbGQoY2FyZEZvcm0pO1xuXG5jb25zdCBjYXJkVGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5jYXJkVGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmRUaXRsZUlucHV0Jyk7XG5jYXJkVGl0bGVJbnB1dC5jbGFzc0xpc3QuYWRkKCdpbnB1dCcpO1xuY2FyZEZvcm0uYXBwZW5kQ2hpbGQoY2FyZFRpdGxlSW5wdXQpO1xuY2FyZFRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdjYXJkLXRpdGxlJyk7XG5jYXJkVGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuY2FyZFRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2NhcmQtdGl0bGUnKTtcbmNhcmRUaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVGl0bGUnKTtcblxuY29uc3QgY2FyZERlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbmNhcmREZWNrLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZERlY2snKTtcbmNhcmREZWNrLnNldEF0dHJpYnV0ZSgnbXVsdGlwbGUnLCAnbXVsdGlwbGUnKTtcbmNhcmREZWNrLmNsYXNzTGlzdC5hZGQoJ2lucHV0Jyk7XG5jYXJkRm9ybS5hcHBlbmRDaGlsZChjYXJkRGVjayk7XG5jYXJkRGVjay5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NhcmREZWNrJyk7XG4vLyBjYXJkRGVjay5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnJyk7XG5jYXJkRGVjay5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnY2FyZERlY2snKTtcbi8vIGNhcmREZWNrLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRGVjaycpO1xuXG5jb25zdCBzdGVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbnN0ZXAuc2V0QXR0cmlidXRlKCdjbGFzcycsICdzdGVwJyk7XG5zdGVwLmNsYXNzTGlzdC5hZGQoJ2lucHV0Jyk7XG5jYXJkRm9ybS5hcHBlbmRDaGlsZChzdGVwKTtcbnN0ZXAuc2V0QXR0cmlidXRlKCdpZCcsICdzdGVwJyk7XG5zdGVwLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG5zdGVwLnNldEF0dHJpYnV0ZSgnbmFtZScsICdzdGVwJyk7XG5zdGVwLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnKyBzdGVwJyk7XG5cbmNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuZGF0ZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RhdGUnKTtcbmRhdGUuY2xhc3NMaXN0LmFkZCgnaW5wdXQnKTtcbmNhcmRGb3JtLmFwcGVuZENoaWxkKGRhdGUpO1xuLy8gY29uc3QgdGhlRGF0ZSA9IG5ldyBEYXRlKCk7XG4vLyBjb25zb2xlLmxvZygndGhlIGRhdGUgaXMnICsgdGhlRGF0ZSk7XG5kYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGF0ZScpO1xuZGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuZGF0ZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZGF0ZScpO1xuZGF0ZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgYGApO1xuXG5sZXQgY3VycmVudERlY2sgPSBkZWZhdWx0RGVjaztcbmxldCBjdXJyZW50RGVja0RpdjtcblxuXG5jb25zdCB1cGRhdGVDdXJyZW50RGVja0RpdiA9ICgpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZygnaW0gdXBkYXRlaW5nIHRoZSBjdXJyZW50IERJVicpXG4gICAgY29uc3QgdGhlQ3VycmVudERlY2tOYW1lID0gY3VycmVudERlY2suZGVja05hbWU7XG4gICAgLy8gY29uc29sZS5sb2coJ3RoZUN1cnJlbnREZWNrTmFtZSBpcyArICcgKyB0aGVDdXJyZW50RGVja05hbWUpO1xuICAgIGNvbnN0IGRlY2tEaXZzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGVjaycpO1xuICAgIEFycmF5LmZyb20oZGVja0RpdnMpLmZvckVhY2goZGVja0RpdiA9PiB7XG4gICAgICAgIGNvbnN0IHRpdGxlRGl2ID0gZGVja0Rpdi5jaGlsZHJlblswXTtcbiAgICAgICAgY29uc29sZS5sb2coZGVja0Rpdik7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoZUN1cnJlbnREZWNrTmFtZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBkb2VzICR7dGl0bGVEaXZ9IGFuZCAke3RoZUN1cnJlbnREZWNrTmFtZX0gbWF0Y2g/YClcbiAgICAgICAgaWYodGl0bGVEaXYudGV4dENvbnRlbnQgPT09IHRoZUN1cnJlbnREZWNrTmFtZSl7XG4gICAgICAgICAgICBjdXJyZW50RGVja0RpdiA9IGRlY2tEaXY7XG4gICAgICAgIH1cbiAgICB9KVxuICAgIFxuICAgIC8vIGNvbnNvbGUubG9nKGRlY2tEaXZzKTtcbiAgICAvLyBBcnJheS5mcm9tKGRlY2tEaXZzKS5mb3JFYWNoKGRlY2tEaXYgPT4ge1xuICAgIC8vICAgICBjb25zb2xlLmxvZygndGhlIGRlY2tUaXRsZWlzICcrIGRlY2tUaXRsZURpdik7XG4gICAgLy8gICAgIGlmKGRlY2tEaXYuZmlyc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQgPT09IHRoZUN1cnJlbnREZWNrTmFtZSl7XG4gICAgLy8gICAgICAgICBjdXJyZW50RGVja0RpdiA9IGRlY2tEaXY7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9KVxufVxuXG5cbmNvbnN0IHN0eWxlQ3VycmVudCA9ICgpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50RGVja0Rpdik7XG4gICAgY3VycmVudERlY2tEaXYuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWREZWNrJyk7XG4gICAgXG59XG5cbmNvbnN0IHJlbW92ZVNlbGVjdGVkU3R5bGUgPSAoKSA9PiB7XG4gICAgY3VycmVudERlY2tEaXYuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWREZWNrJyk7XG59XG5cbmNvbnN0IHVwZGF0ZUN1cnJlbnREZWNrID0gKGUpID0+IHtcbiAgICByZW1vdmVTZWxlY3RlZFN0eWxlKCk7XG4gICAgLy8gY29uc29sZS5sb2coJ2ltIFVQREFUSW5HIScpO1xuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmlubmVySFRNTCk7XG4gICAgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZWNrJykpe1xuICAgICAgICBjb25zb2xlLmxvZygnY2xpY2tlZG9uIERFQ0sgRElWJylcbiAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXRpdGxlJykpXG4gICAgICAgIGNvbnN0IHRoZURlY2tOYW1lID0gKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS10aXRsZScpKTtcbiAgICAgICAgY3VycmVudERlY2sgPSBjb250cm9sbGVyLmdldERlY2sodGhlRGVja05hbWUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2NsaWNrZWRvbiBUSVRMRSBESVYnKVxuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC50ZXh0Q29udGVudClcbiAgICAgICAgY29uc3QgdGhlRGVja05hbWUgPSAoZS50YXJnZXQudGV4dENvbnRlbnQpO1xuICAgICAgICBjdXJyZW50RGVjayA9IGNvbnRyb2xsZXIuZ2V0RGVjayh0aGVEZWNrTmFtZSk7XG4gICAgfVxuICAgIFxuICAgIC8vIGNvbnNvbGUubG9nKCdnb25uYSB1cGRhdGUgY3VycmVudCBkZWNrIGRpdicpO1xuICAgIHVwZGF0ZUN1cnJlbnREZWNrRGl2KCk7XG4gICAgLy8gY29uc29sZS5sb2coJ2dvbm5hIHN0eWxlIGN1cnJlbnQgZGVjRGl2ICcgKyBjdXJyZW50RGVja0Rpdik7XG4gICAgc3R5bGVDdXJyZW50KCk7XG4gICAgcG9wdWxhdGVDYXJkKCk7XG59XG5cbmNvbnN0IHVwZGF0ZUN1cnJlbnREZWNrQnlOYW1lID0gKG5hbWUpID0+IHtcbiAgICByZW1vdmVTZWxlY3RlZFN0eWxlKCk7XG4gICAgLy8gY29uc29sZS5sb2coJ2ltIFVQREFUSW5HIScpO1xuICAgIFxuICAgIGNvbnN0IHRoZURlY2tOYW1lID0gbmFtZTtcbiAgICBjdXJyZW50RGVjayA9IGNvbnRyb2xsZXIuZ2V0RGVjayh0aGVEZWNrTmFtZSk7XG4gICAgLy8gY29uc29sZS5sb2coJ2dvbm5hIHVwZGF0ZSBjdXJyZW50IGRlY2sgZGl2Jyk7XG4gICAgdXBkYXRlQ3VycmVudERlY2tEaXYoKTtcbiAgICAvLyBjb25zb2xlLmxvZygnZ29ubmEgc3R5bGUgY3VycmVudCBkZWNEaXYgJyArIGN1cnJlbnREZWNrRGl2KTtcbiAgICBzdHlsZUN1cnJlbnQoKTtcbiAgICBwb3B1bGF0ZUNhcmQoKTtcbn1cblxuY29uc3QgZHJhd0JsYW5rRGVjayA9ICgpID0+IHtcbiAgICBjb25zdCBibGFua0RlY2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBibGFua0RlY2tEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdibGFua0RlY2snKTtcbiAgICBkZWNrQXJlYS5hcHBlbmRDaGlsZChibGFua0RlY2tEaXYpO1xuXG4gICAgY29uc3QgbGl0dGxlUGx1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxpdHRsZVBsdXMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdsaXR0bGVQbHVzJyk7XG4gICAgbGl0dGxlUGx1cy5jbGFzc0xpc3QuYWRkKCdncm93Jyk7XG4gICAgbGl0dGxlUGx1cy50ZXh0Q29udGVudCA9ICcrJztcbiAgICBsaXR0bGVQbHVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0RlY2tGb3JtKVxuICAgIGJsYW5rRGVja0Rpdi5hcHBlbmRDaGlsZChsaXR0bGVQbHVzKTtcbn1cblxuY29uc3QgZXJhc2VCbGFua0RlY2sgPSAoKSA9PiB7XG4gICAgY29uc3QgYmxhbmtEZWNrRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYmxhbmtEZWNrJyk7XG4gICAgYmxhbmtEZWNrRGl2WzBdLnJlbW92ZSgpO1xufVxuXG5jb25zdCBmaXJzdERyYXdEZWNrcyA9IChhcnJheU9mRGVja3MpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZygncnVubmluZyBkcmF3RGVja3MnKVxuICAgIC8vIGNvbnNvbGUubG9nKGRlY2tBcnJheVsxXSk7XG4gICAgYXJyYXlPZkRlY2tzLmZvckVhY2goYURlY2sgPT4ge1xuICAgICAgICBjb25zdCBkZWNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkZWNrRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGVjaycpO1xuICAgICAgICAgICAgLy8gZGVja0Rpdi5jbGFzc0xpc3QuYWRkKCdncm93Jyk7XG4gICAgICAgICAgICBkZWNrQXJlYS5hcHBlbmRDaGlsZChkZWNrRGl2KTtcblxuICAgICAgICAgICAgY29uc3QgZGVja1RpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkZWNrVGl0bGVEaXYuc2V0QXR0cmlidXRlKCdpZCcsICdkZWNrVGl0bGUnKTtcbiAgICAgICAgICAgIGRlY2tUaXRsZURpdi5jbGFzc0xpc3QuYWRkKCdncm93Jyk7XG4gICAgICAgICAgICBkZWNrRGl2LmFwcGVuZENoaWxkKGRlY2tUaXRsZURpdik7XG4gICAgICAgICAgICBkZWNrVGl0bGVEaXYudGV4dENvbnRlbnQgPSBhRGVjay5kZWNrTmFtZTtcblxuICAgICAgICAgICAgZGVja0Rpdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGl0bGUnLCBgJHthRGVjay5kZWNrTmFtZX1gKTtcblxuICAgICAgICAgICAgZGVja0Rpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHVwZGF0ZUN1cnJlbnREZWNrKTtcbiAgICAgICAgICAgIGRlY2tUaXRsZURpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHVwZGF0ZUN1cnJlbnREZWNrKTtcbiAgICAgICAgICAgIGRlY2tUaXRsZURpdi5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHNhdmVEZWNrVGl0bGUpO1xuXG4gICAgICAgICAgICBpZigoYXJyYXlPZkRlY2tzLmluZGV4T2YoYURlY2spKSAhPT0gMCl7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVja0RlbGV0ZUJ1dHRvbiA9IGRyYXdEZWNrRGVsZXRlQnV0dG9uKCk7XG4gICAgICAgICAgICAgICAgZGVja0Rpdi5hcHBlbmRDaGlsZChkZWNrRGVsZXRlQnV0dG9uKTtcbiAgICAgICAgICAgICAgICBkZWNrRGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2dyb3cnKTtcbiAgICAgICAgICAgICAgICBkZWNrVGl0bGVEaXYuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCAndHJ1ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICBkcmF3QmxhbmtEZWNrKCk7XG4gICAgdXBkYXRlQ3VycmVudERlY2tEaXYoKTtcbiAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50RGVja0Rpdik7XG5cbn1cblxuXG5jb25zdCBzYXZlRGVja1RpdGxlID0gKGUpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZygnc2F2aW5nIGNoYW5nZSB0byB0aXRsZScpO1xuICAgIGNvbnN0IHRleHQgPSBlLnRhcmdldC50ZXh0Q29udGVudDtcbiAgICBjdXJyZW50RGVjay5kZWNrTmFtZSA9IHRleHQ7XG59XG5cbmNvbnN0IGRyYXdEZWNrcyA9IChhcnJheU9mRGVja3MpID0+IHtcbiAgICBjb25zb2xlLmxvZygncnVubmluZyBkcmF3RGVja3MnKVxuICAgIC8vIGNvbnNvbGUubG9nKGRlY2tBcnJheVsxXSk7XG4gICAgYXJyYXlPZkRlY2tzLmZvckVhY2goYURlY2sgPT4ge1xuICAgICAgICBjb25zdCBkZWNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkZWNrRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGVjaycpO1xuICAgICAgICAgICAgZGVja0FyZWEuYXBwZW5kQ2hpbGQoZGVja0Rpdik7XG5cbiAgICAgICAgICAgIGNvbnN0IGRlY2tUaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGVja1RpdGxlRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVja1RpdGxlJyk7XG4gICAgICAgICAgICBkZWNrRGl2LmFwcGVuZENoaWxkKGRlY2tUaXRsZURpdik7XG4gICAgICAgICAgICBkZWNrVGl0bGVEaXYudGV4dENvbnRlbnQgPSBhRGVjay5kZWNrTmFtZTtcblxuICAgICAgICAgICAgZGVja0Rpdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGl0bGUnLCBgJHthRGVjay5kZWNrTmFtZX1gKTtcblxuICAgICAgICAgICAgLy8gY29uc3QgZWRpdERlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIC8vIGVkaXREZWNrLnNldEF0dHJpYnV0ZSgnaWQnLCAnZWRpdERlY2snKVxuICAgICAgICAgICAgLy8gZGVja0Rpdi5hcHBlbmRDaGlsZChlZGl0RGVjaylcbiAgICAgICAgICAgIC8vIGVkaXREZWNrLnRleHRDb250ZW50ID0gJ0VkaXQnO1xuXG4gICAgICAgICAgICBkZWNrRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdXBkYXRlQ3VycmVudERlY2spO1xuICAgICAgICAgICAgLy8gZGVja1RpdGxlRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdXBkYXRlQ3VycmVudERlY2spO1xuICAgICAgICAgICAgZGVja1RpdGxlRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0Jywgc2F2ZURlY2tUaXRsZSk7XG4gICAgICAgICAgICAvLyBlZGl0RGVjay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dGb3JtKTtcbiAgICAgICAgaWYoKGFycmF5T2ZEZWNrcy5pbmRleE9mKGFEZWNrKSkgIT09IDApe1xuICAgICAgICAgICAgY29uc3QgZGVja0RlbGV0ZUJ1dHRvbiA9IGRyYXdEZWNrRGVsZXRlQnV0dG9uKCk7XG4gICAgICAgICAgICBkZWNrRGl2LmFwcGVuZENoaWxkKGRlY2tEZWxldGVCdXR0b24pO1xuICAgICAgICAgICAgZGVja1RpdGxlRGl2LnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgJ3RydWUnKTtcbiAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICk7XG4gICAgZXJhc2VCbGFua0RlY2soKTtcbiAgICBkcmF3QmxhbmtEZWNrKCk7XG4gICAgdXBkYXRlQ3VycmVudERlY2tEaXYoKTtcbiAgICBzdHlsZUN1cnJlbnQoKTtcbiAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50RGVja0Rpdik7XG5cbn1cblxuY29uc3QgZHJhd0FsbENhcmRzU3RhY2sgPSAoYURlY2spID0+IHtcbiAgICBjb25zdCBjYXJkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyZERpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NhcmRCaWcnKTtcbiAgICBjYXJkRG9jay5hcHBlbmRDaGlsZChjYXJkRGl2KTtcbiAgICBjb25zb2xlLmxvZyhhRGVjay5jYXJkc0FycmF5W2FEZWNrLmJvb2ttYXJrXSk7XG4gICAgY29uc3QgdGhpc0Jvb2ttYXJrID0gYURlY2suYm9va21hcms7XG4gICAgY29uc3QgdGhlQ2FyZCA9IGFEZWNrLmNhcmRzQXJyYXlbdGhpc0Jvb2ttYXJrXS5jYXJkTmFtZTtcblxuICAgIGNvbnN0IGNhcmRUaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmRUaXRsZURpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NhcmRUaXRsZScpO1xuICAgIGNhcmREaXYuYXBwZW5kQ2hpbGQoY2FyZFRpdGxlRGl2KTtcbiAgICBjYXJkVGl0bGVEaXYudGV4dENvbnRlbnQgPSB0aGVDYXJkLkNhcmROYW1lO1xufVxuXG5jb25zdCBkcmF3QmFja2dyb3VuZENhcmRzID0gKG51bSkgPT4ge1xuICAgIGZvcihsZXQgaSA9IDA7IGk8bnVtOyBpKysgKXtcbiAgICBjb25zdCBmYWtlQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZha2VDYXJkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZEJpZycpO1xuICAgIGZha2VDYXJkLmNsYXNzTGlzdC5hZGQoYHN0YWNrJHtpfWApO1xuICAgIGNhcmRBcmVhLmFwcGVuZENoaWxkKGZha2VDYXJkKTtcbiAgICB9XG59XG5cbmNvbnN0IHNhdmVUaXRsZSA9IChlKSA9PiB7XG4gICAgXG5cbiAgICAvLyBjb25zb2xlLmxvZygnc2F2aW5nIGNoYW5nZSB0byB0aXRsZScpO1xuICAgIGNvbnN0IHRleHQgPSBlLnRhcmdldC50ZXh0Q29udGVudDtcbiAgICAvLyBjb25zb2xlLmxvZyh0ZXh0KTtcbiAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50RGVjay5ib29rbWFyayk7XG4gICAgLy8gY29uc29sZS5sb2coY3VycmVudERlY2suY2FyZHNBcnJheVtjdXJyZW50RGVjay5ib29rbWFya10pO1xuICAgIC8vIGN1cnJlbnREZWNrLmNhcmRzQXJyYXlbY3VycmVudERlY2suYm9va21hcmtdID0gdGV4dDtcbiAgICBjb25zdCB0aGVDYXJkID0gY29udHJvbGxlci5nZXRDYXJkKGN1cnJlbnREZWNrLmNhcmRzQXJyYXlbY3VycmVudERlY2suYm9va21hcmtdKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGVDYXJkKTtcbiAgICB0aGVDYXJkLmNhcmROYW1lID0gdGV4dDtcbiAgICBjdXJyZW50RGVjay5jYXJkc0FycmF5W2N1cnJlbnREZWNrLmJvb2ttYXJrXSA9IHRleHQ7XG4gICAgLy8gY29uc29sZS5sb2codGhlQ2FyZC5jYXJkTmFtZSk7XG59XG5cbmNvbnN0IGRyYXdUaXRsZURpdiA9ICgpID0+IHtcbiAgICBjb25zdCBjYXJkVGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkVGl0bGVEaXYuc2V0QXR0cmlidXRlKCdpZCcsICdjYXJkVGl0bGUnKTtcbiAgICBjYXJkVGl0bGVEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkVGl0bGUnKTtcbiAgICBjYXJkVGl0bGVEaXYuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCAndHJ1ZScpO1xuICAgIGNhcmRUaXRsZURpdi5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHNhdmVUaXRsZSk7XG4gICAgcmV0dXJuIGNhcmRUaXRsZURpdjtcbn1cblxuY29uc3QgZHJhd0RhdGVEaXYgPSAoKSA9PiB7XG4gICAgY29uc3QgY2FyZERhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkRGF0ZURpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NhcmREYXRlJyk7XG4gICAgcmV0dXJuIGNhcmREYXRlRGl2O1xufVxuXG5jb25zdCBzYXZlU3RlcCA9IChlKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coJ3NhdmluZyBjaGFuZ2UgdG8gdGV4dCcpO1xuICAgIGNvbnN0IHRleHQgPSBlLnRhcmdldC50ZXh0Q29udGVudDtcbiAgICAvLyBjb25zb2xlLmxvZyh0ZXh0KTtcbiAgICBjb25zdCB0aGVDYXJkID0gY29udHJvbGxlci5nZXRDYXJkKGN1cnJlbnREZWNrLmNhcmRzQXJyYXlbY3VycmVudERlY2suYm9va21hcmtdKTtcbiAgICB0aGVDYXJkLmNhcmRTdGVwc1swXSA9IHRleHQ7XG59XG5cbmNvbnN0IGRyYXdTdGVwc0RpdiA9ICgpID0+IHtcbiAgICBjb25zdCBjYXJkU3RlcHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGNhcmRTdGVwc0Rpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NhcmRTdGVwcycpO1xuICAgIGNhcmRTdGVwc0Rpdi5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsICd0cnVlJyk7XG4gICAgY2FyZFN0ZXBzRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0Jywgc2F2ZVN0ZXApO1xuICAgIHJldHVybiBjYXJkU3RlcHNEaXY7XG59XG5cbmNvbnN0IGRlbGV0ZUFuZEVyYXNlQ2FyZCA9ICgpID0+IHtcbiAgICBjb25zdCB0aGlzQ2FyZE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZFRpdGxlJykudGV4dENvbnRlbnQ7XG4gICAgY29uc3QgdGhpc0NhcmQgPSBjb250cm9sbGVyLmdldENhcmQodGhpc0NhcmROYW1lKTtcbiAgICBpZihjdXJyZW50RGVjayA9PT0gYWxsKXtcbiAgICAgICAgdGhpc0NhcmQuY2FyZERlY2tzLmZvckVhY2goZGVja0VsZW1lbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGhpc0RlY2sgPSBjb250cm9sbGVyLmdldERlY2soZGVja0VsZW1lbnQpO1xuICAgICAgICAgICAgY29udHJvbGxlci5kZWxldGVDYXJkRnJvbURlY2sodGhpc0NhcmQsIHRoaXNEZWNrKTtcbiAgICAgICAgfSlcbiAgICAgICAgY29udHJvbGxlci5kZWxldGVDYXJkKHRoaXNDYXJkKTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgY29udHJvbGxlci5kZWxldGVDYXJkRnJvbURlY2sodGhpc0NhcmQsIGN1cnJlbnREZWNrKTtcbiAgICB9XG4gICAgXG4gICAgXG4gICAgLy8gY29udHJvbGxlci5kZWxldGVDYXJkKCk7XG4gICAgcG9wdWxhdGVDYXJkKCk7XG59XG5cbmNvbnN0IGRlbGV0ZUFuZEVyYXNlRGVjayA9IChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coYGVyYXNpbmcgYW5kIGRlbGV0aW5nIGRlY2suJHtjdXJyZW50RGVjay5kZWNrTmFtZX1gKVxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3QgZGVsZXRlRGl2ID0gZS50YXJnZXQ7XG4gICAgY29uc3QgZGVja0RpdiA9IGRlbGV0ZURpdi5wYXJlbnRFbGVtZW50O1xuICAgIGNvbnN0IGRlY2tUaXRsZURpdiA9IGRlY2tEaXYuZmlyc3RDaGlsZDtcbiAgICBjb25zdCBkZWNrVGl0bGUgPSBkZWNrVGl0bGVEaXYudGV4dENvbnRlbnQ7XG4gICAgY29uc3QgY3VycmVudERlY2tJbmRleCA9IGRlY2tBcnJheS5pbmRleE9mKGN1cnJlbnREZWNrKTtcbiAgICBjb25zb2xlLmxvZyhgdGhlIGluZGV4IG9mIHRoZSBjdXJyZW5EZWNrIGlzICR7Y3VycmVudERlY2tJbmRleH1gKVxuICAgIGNvbnRyb2xsZXIuZGVsZXRlRGVjayhkZWNrVGl0bGUpO1xuICAgIGlmKGN1cnJlbnREZWNrLmRlY2tOYW1lID09PSBkZWNrVGl0bGUpe1xuICAgICAgICBjb25zb2xlLmxvZyhgdGhlIGRlY2sgZGVsZXRlZCB3YXMgdGhlIGN1cnJlbnQgZGVjay5gKVxuICAgICAgICBpZihkZWNrQXJyYXkubGVuZ3RoIDwgMil7XG4gICAgICAgICAgICBjdXJyZW50RGVjayA9IGFsbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGN1cnJlbnREZWNrID0gZGVja0FycmF5W2N1cnJlbnREZWNrSW5kZXhdO1xuICAgICAgICAgICAgZXJhc2VEZWNrcygpO1xuICAgICAgICAgICAgZHJhd0RlY2tzKGRlY2tBcnJheSk7XG4gICAgICAgIH1cbiAgICAgICAgZXJhc2VEZWNrcygpO1xuICAgICAgICBkcmF3RGVja3MoZGVja0FycmF5KTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgZXJhc2VEZWNrcygpO1xuICAgICAgICBkcmF3RGVja3MoZGVja0FycmF5KTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coYEFGVEVSIERFTEVURSBjdXJyZW50RGVjayBpcyAke2N1cnJlbnREZWNrLmRlY2tOYW1lfWApO1xufVxuXG5jb25zdCBkcmF3RGVsZXRlQnV0dG9uID0gKCkgPT4ge1xuICAgIGNvbnN0IGNhcmREZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkRGVsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2FyZERlbGV0ZScpO1xuICAgIGNhcmREZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVBbmRFcmFzZUNhcmQpO1xuICAgIGNhcmREZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnZ3JvdycpO1xuICAgIGNhcmREZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSAnLSdcbiAgICByZXR1cm4gY2FyZERlbGV0ZUJ1dHRvbjtcbn1cblxuY29uc3QgZHJhd0RlY2tEZWxldGVCdXR0b24gPSAoKSA9PiB7XG4gICAgY29uc3QgZGVja0RlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlY2tEZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdkZWNrRGVsZXRlJyk7XG4gICAgZGVja0RlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZUFuZEVyYXNlRGVjaywgdHJ1ZSk7XG4gICAgZGVja0RlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICctJ1xuICAgIHJldHVybiBkZWNrRGVsZXRlQnV0dG9uO1xufVxuXG5jb25zdCBkcmF3VG9wQ2FyZCA9ICgpID0+IHtcbiAgICBjb25zdCBjYXJkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyZERpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvcENhcmQnKTtcbiAgICBjYXJkRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZEJpZycpO1xuICAgIGNhcmRBcmVhLmFwcGVuZENoaWxkKGNhcmREaXYpO1xuICAgIGNvbnN0IGNhcmRUaXRsZURpdiA9IGRyYXdUaXRsZURpdigpO1xuICAgIGNhcmREaXYuYXBwZW5kQ2hpbGQoY2FyZFRpdGxlRGl2KTtcbiAgICBjb25zdCBjYXJkRGF0ZURpdiA9IGRyYXdEYXRlRGl2KCk7XG4gICAgY2FyZERpdi5hcHBlbmRDaGlsZChjYXJkRGF0ZURpdik7XG4gICAgY29uc3QgY2FyZFN0ZXBzRGl2ID0gZHJhd1N0ZXBzRGl2KCk7XG4gICAgY2FyZERpdi5hcHBlbmRDaGlsZChjYXJkU3RlcHNEaXYpO1xuICAgIGNvbnN0IGNhcmREZWxldGVCdXR0b24gPSBkcmF3RGVsZXRlQnV0dG9uKCk7XG4gICAgY2FyZERpdi5hcHBlbmRDaGlsZChjYXJkRGVsZXRlQnV0dG9uKTtcbiAgICByZXR1cm4gY2FyZERpdjtcbn1cblxuY29uc3QgZ2V0Qm9va21hcmtlZENhcmQgPSAoYURlY2spID0+IHtcbiAgICBjb25zdCB0aGlzQm9va21hcmsgPSBhRGVjay5ib29rbWFyaztcbiAgICBsZXQgdGhpc0NhcmROYW1lID0gYURlY2suY2FyZHNBcnJheVt0aGlzQm9va21hcmtdO1xuICAgIGNvbnN0IHR5cGUgPSB0eXBlb2YodGhpc0NhcmROYW1lKTtcbiAgICBpZih0eXBlICE9PSBcInN0cmluZ1wiKXtcbiAgICAgICAgaWYodGhpc0NhcmROYW1lICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgdGhpc0NhcmROYW1lID0gdGhpc0NhcmROYW1lLmNhcmROYW1lO1xuICAgICAgICB9XG4gIFxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhgYm9va21ya2VkIGNyZCBpcyAke3RoaXNDYXJkTmFtZX1gKTtcbiAgICBjb25zdCBhQ2FyZCA9IGNvbnRyb2xsZXIuZ2V0Q2FyZCh0aGlzQ2FyZE5hbWUpO1xuXG4gICAgLy8gY29uc29sZS5sb2coYUNhcmQpO1xuICAgIHJldHVybiBhQ2FyZDtcbn1cblxuY29uc3QgZXJhc2VTdGVwcyA9ICgpID0+IHtcbiAgICBjb25zdCBzdGVwc0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkU3RlcHMnKTtcbiAgICBjb25zdCBzdGVwcyA9IHN0ZXBzRGl2LmNoaWxkcmVuO1xuICAgIEFycmF5LmZyb20oc3RlcHMpLmZvckVhY2goc3RlcEVsZW1lbnQgPT4ge1xuICAgICAgICBzdGVwRWxlbWVudC5yZW1vdmUoKTtcbiAgICB9KVxuICAgIFxufVxuXG5jb25zdCBwb3B1bGF0ZUNhcmQgPSAoKSA9PiB7XG4gICAgZXJhc2VTdGVwcygpO1xuICAgIGNvbnNvbGUubG9nKGN1cnJlbnREZWNrKTtcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50RGVjay5ib29rbWFyayk7XG4gICAgY29uc29sZS5sb2coY3VycmVudERlY2suY2FyZHNBcnJheVsxXSk7XG4gICAgY29uc3QgdGhlQ2FyZCA9IGdldEJvb2ttYXJrZWRDYXJkKGN1cnJlbnREZWNrKTtcbiAgICBjb25zb2xlLmxvZygncHVvcHVsYXRpbmcgd2l0aDogJyArIHRoZUNhcmQpO1xuICAgIGNvbnN0IGNhcmRUaXRsZURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkVGl0bGUnKTtcbiAgICBjYXJkVGl0bGVEaXYuY2xhc3NMaXN0LnJlbW92ZSgnYmlnUGx1cycpO1xuICAgIGNhcmRUaXRsZURpdi5jbGFzc0xpc3QucmVtb3ZlKCdncm93Jyk7XG4gICAgY2FyZFRpdGxlRGl2LmNsYXNzTGlzdC5hZGQoJ2NhcmRUaXRsZScpO1xuICAgIGlmKHRoZUNhcmQgIT09IHVuZGVmaW5lZCl7XG4gICAgICAgIGNhcmRUaXRsZURpdi50ZXh0Q29udGVudCA9IHRoZUNhcmQuY2FyZE5hbWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnbWFraW5nIHBsdXMgY2FyZCcpXG4gICAgICAgIGNhcmRUaXRsZURpdi50ZXh0Q29udGVudCA9ICcrJztcbiAgICAgICAgY2FyZFRpdGxlRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYmlnUGx1cycpO1xuICAgICAgICBjYXJkVGl0bGVEaXYuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCBmYWxzZSk7XG4gICAgICAgIGNhcmRUaXRsZURpdi5jbGFzc0xpc3QuYWRkKCdncm93Jyk7XG4gICAgICAgIGNhcmRUaXRsZURpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dDYXJkRm9ybSk7XG4gICAgfVxuICAgIGNvbnN0IGNhcmREYXRlRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmREYXRlJyk7XG4gICAgaWYodGhlQ2FyZCAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgY2FyZERhdGVEaXYudGV4dENvbnRlbnQgPSBgRHVlIGRhdGU6ICR7dGhlQ2FyZC5jYXJkRGF0ZX1gO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY2FyZERhdGVEaXYudGV4dENvbnRlbnQgPSAnJztcbiAgICB9XG5cbiAgICBjb25zdCBjYXJkU3RlcHNEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZFN0ZXBzJyk7XG4gICAgY29uc29sZS5sb2coY2FyZFN0ZXBzRGl2KTtcbiAgICBjb25zb2xlLmxvZyh0eXBlb2YgY2FyZFN0ZXBzRGl2KTtcbiAgICBpZih0aGVDYXJkICE9PSB1bmRlZmluZWQpe1xuICAgICAgICBpZih0aGVDYXJkLmNhcmRTdGVwcyAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIHRoZUNhcmQuY2FyZFN0ZXBzLmZvckVhY2goc3RlcFN0cmluZyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgICAgIGxpc3RJdGVtLnRleHRDb250ZW50ID0gYCR7c3RlcFN0cmluZ31gXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY2FyZFN0ZXBzRGl2KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0eXBlb2YgY2FyZFN0ZXBzRGl2KTtcbiAgICAgICAgICAgICAgICBjYXJkU3RlcHNEaXYuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY2FyZFN0ZXBzRGl2LnRleHRDb250ZW50ID0gJyc7XG4gICAgfVxuICAgIFxufVxuXG5jb25zdCBkcmF3Q2FyZFN0YWNrID0gKGFEZWNrKSA9PiB7XG4gICAgY29uc29sZS5sb2coYURlY2spO1xuICAgIGRyYXdCYWNrZ3JvdW5kQ2FyZHMoMik7XG4gICAgZHJhd1RvcENhcmQoKTtcbiAgICBwb3B1bGF0ZUNhcmQoKTsgICAgXG59XG5cbmNvbnN0IGFkdmFuY2VCb29rbWFyayA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygncnVubmluZyBhZHZhbmNlIGJvb2ttYXJrJylcbiAgICBjdXJyZW50RGVjay5ib29rbWFyaysrO1xuICAgIGlmKGN1cnJlbnREZWNrLmNhcmRzQXJyYXlbY3VycmVudERlY2suYm9va21hcmtdICE9PSB1bmRlZmluZWQpe1xuICAgICAgICBwb3B1bGF0ZUNhcmQoKTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgY3VycmVudERlY2suYm9va21hcmstLTtcbiAgICAgICAgcG9wdWxhdGVDYXJkKCk7XG4gICAgfVxufVxuXG5jb25zdCBwcmV2aW91c0Jvb2ttYXJrID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdydW5uaW5nIHByZXZpb3VzIGJvb2ttYXJrJylcbiAgICBjdXJyZW50RGVjay5ib29rbWFyay0tO1xuICAgIGNvbnNvbGUubG9nKGN1cnJlbnREZWNrLmJvb2ttYXJrKTtcbiAgICBpZihjdXJyZW50RGVjay5jYXJkc0FycmF5W2N1cnJlbnREZWNrLmJvb2ttYXJrXSAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgY29uc29sZS5sb2coJ2Jvb2ttYXJrIHdhcyBkZWZpbmVkJylcbiAgICAgICAgcG9wdWxhdGVDYXJkKCk7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIGN1cnJlbnREZWNrLmJvb2ttYXJrKys7XG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnREZWNrLmJvb2ttYXJrKTtcbiAgICAgICAgcG9wdWxhdGVDYXJkKCk7XG4gICAgfVxuICAgIFxufVxuXG5jb25zdCBhZGRFdmVudExpc3RlbmVycyA9IChlbGVtZW50TmFtZSwgYUZ1bmN0aW9uKSA9PntcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7ZWxlbWVudE5hbWV9YCk7XG4gICAgLy8gY29uc29sZS5sb2coZWxlbWVudCk7XG4gICAgLy8gY29uc29sZS5sb2coYUZ1bmN0aW9uKTtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYUZ1bmN0aW9uKTtcbn1cblxuY29uc3QgYWRkRm9yd2FyZEJhY2t3YXJkTGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCdmb3J3YXJkQnV0dG9uJywgYWR2YW5jZUJvb2ttYXJrKTtcbiAgICBhZGRFdmVudExpc3RlbmVycygnYmFja3dhcmRCdXR0b24nLCBwcmV2aW91c0Jvb2ttYXJrKTtcbn1cblxuY29uc3QgZXJhc2VUb3BDYXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IG9sZENhcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9wQ2FyZCcpO1xuICAgIG9sZENhcmQucmVtb3ZlKCk7XG4gICAgZHJhd1RvcENhcmQoKTtcbn1cblxuY29uc3QgZXJhc2VEZWNrcyA9ICgpID0+IHtcbiAgICBjb25zdCBvbGREZWNrcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RlY2snKTtcbiAgICBBcnJheS5mcm9tKG9sZERlY2tzKS5mb3JFYWNoKGRlY2tFbGVtZW50ID0+IHtcbiAgICAgICAgZGVja0VsZW1lbnQucmVtb3ZlKCk7XG4gICAgfSlcbn1cbmNvbnN0IGNyZWF0ZUFuZFJlbmRlckRlY2sgPSAobmFtZSkgPT4ge1xuICAgIGNvbnRyb2xsZXIuY3JlYXRlRGVjayhuYW1lKTtcbiAgICBlcmFzZURlY2tzKCk7XG4gICAgZHJhd0RlY2tzKGRlY2tBcnJheSk7XG59XG5cbi8vIGNvbnN0IGNyZWF0ZUNhcmQgPSAobmFtZSkgPT4ge1xuLy8gICAgIGNvbnRyb2xsZXIuY3JlYXRlQ2FyZChuYW1lKTtcbi8vICAgICBwb3B1bGF0ZUNhcmQoKTtcbi8vIH1cblxuY29uc3QgY3JlYXRlQW5kUmVuZGVyQ2FyZCA9IChuYW1lKSA9PiB7XG4gICAgY29udHJvbGxlci5jcmVhdGVDYXJkKG5hbWUpO1xuICAgIHBvcHVsYXRlQ2FyZCgpO1xufVxuXG5sZXQgZm9ybVR5cGUgPSAnZGVjayc7XG5cbmNvbnN0IHJlc2V0RGVja09wdGlvbnMgPSAoKSA9PiB7XG4gICAgY29uc3QgZGVja1NlbGVjdG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmREZWNrJyk7XG4gICAgQXJyYXkuZnJvbShkZWNrU2VsZWN0b3IpLmZvckVhY2goZGVja0VsZW1lbnQgPT4ge1xuICAgICAgICBkZWNrRWxlbWVudC5yZW1vdmUoKTtcbiAgICB9KVxufVxuY29uc3Qgc2V0RGVja09wdGlvbnMgPSAoKSA9PiB7XG4gICAgcmVzZXREZWNrT3B0aW9ucygpO1xuICAgIGRlY2tBcnJheS5mb3JFYWNoKGRlY2tFbGVtZW50ID0+IHtcbiAgICAgICAgY29uc3QgZGVja09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBjYXJkRGVjay5hcHBlbmRDaGlsZChkZWNrT3B0aW9uKTtcbiAgICAgICAgZGVja09wdGlvbi52YWx1ZSA9IGRlY2tFbGVtZW50LmRlY2tOYW1lO1xuICAgICAgICBkZWNrT3B0aW9uLnRleHRDb250ZW50ID0gZGVja0VsZW1lbnQuZGVja05hbWU7XG4gICAgfSlcbn1cblxuY29uc3QgcmVzZXRGb3JtRGVjayA9ICgpID0+IHtcbiAgICBjb25zdCBhRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmQtdGl0bGUnKTtcbiAgICBhRGl2LnZhbHVlID0gJyc7XG59XG5cbmNvbnN0IHJlc2V0Rm9ybUNhcmQgPSAoKSA9PiB7XG4gICAgbGV0IGFEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZC10aXRsZScpO1xuICAgIGFEaXYudmFsdWUgPSAnJztcbiAgICBhRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0ZXAnKTtcbiAgICBhRGl2LnZhbHVlID0gJyc7XG4gICAgYURpdi5jYXJkRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlJykudmFsdWU7XG4gICAgYURpdi52YWx1ZSA9ICcnO1xufVxuXG5jb25zdCBzaG93Rm9ybSA9ICgpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZygnc2hvd2luZyBmb3JtIScpO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlckxheUhvbGRlcicpO1xuICAgIGZvcm0uc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbn1cblxuY29uc3QgaGlkZUZvcm0gPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2hpZGluZyBmb3JtIScpO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlckxheUhvbGRlcicpO1xuICAgIGZvcm0uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIGxldCBhRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0ZXAnKTtcbiAgICBhRGl2LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICBhRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKTtcbiAgICBhRGl2LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICBhRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmREZWNrJyk7XG4gICAgYURpdi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG59XG5cbmNvbnN0IHNob3dEZWNrRm9ybSA9ICgpID0+IHtcbiAgICBzaG93Rm9ybSgpO1xuICAgIGZvcm1UeXBlID0gJ2RlY2snO1xuICAgIGxldCBhRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0ZXAnKTtcbiAgICBhRGl2LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICBhRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKTtcbiAgICBhRGl2LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICBhRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmREZWNrJyk7XG4gICAgYURpdi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgYURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkLXRpdGxlJyk7XG4gICAgYURpdi5zdHlsZS5ncmlkUm93ID0gJzMvNCc7XG4gICAgXG59XG5cbmNvbnN0IHNob3dDYXJkRm9ybSA9ICgpID0+IHtcbiAgICBzZXREZWNrT3B0aW9ucygpO1xuICAgIHNob3dGb3JtKCk7XG4gICAgZm9ybVR5cGUgPSAnY2FyZCc7XG4gICAgbGV0IGFEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RlcCcpO1xuICAgIGFEaXYuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICBhRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKTtcbiAgICBhRGl2LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgYURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkRGVjaycpO1xuICAgIGFEaXYuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICBhRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmQtdGl0bGUnKTtcbiAgICBhRGl2LnN0eWxlLmdyaWRSb3cgPSAnMS8yJztcbn1cblxuY29uc3Qgc2F2ZURlY2sgPSAoKSA9PiB7XG4gICAgY29uc3QgYURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkLXRpdGxlJykudmFsdWU7XG4gICAgY3JlYXRlQW5kUmVuZGVyRGVjayhhRGl2KTtcbiAgICByZXNldEZvcm1EZWNrKCk7XG4gICAgaGlkZUZvcm0oKTtcbn1cblxuY29uc3Qgc2F2ZUNhcmQgPSAoKSA9PiB7XG4gICAgbGV0IGlzQ3VycmVudCA9IDA7XG4gICAgbGV0IGFDYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmQtdGl0bGUnKS52YWx1ZTtcbiAgICBhQ2FyZCA9IGNvbnRyb2xsZXIuY3JlYXRlQ2FyZChhQ2FyZCk7XG4gICAgYUNhcmQuY2FyZFN0ZXBzLnB1c2goZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0ZXAnKS52YWx1ZSk7XG4gICAgYUNhcmQuY2FyZERhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpLnZhbHVlO1xuICAgIGNvbnN0IGRlY2tMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmREZWNrJyk7XG4gICAgY29uc3QgY29sbGVjdGlvbiA9IGRlY2tMaXN0LnNlbGVjdGVkT3B0aW9ucztcbiAgICBjb25zb2xlLmxvZyhgdGhlIGN1cnJlbnQgZGVjayB3YXMgJHtjdXJyZW50RGVja31gKTtcbiAgICBpZihjb2xsZWN0aW9uLmxlbmd0aCA8IDIgKXtcbiAgICAgICAgY29uc3QgdGhlU2VsZWN0ZWREZWNrID0gY29sbGVjdGlvblswXS50ZXh0Q29udGVudDtcbiAgICAgICAgY29uc3QgdGhlRGVja05hbWUgPSB0aGVTZWxlY3RlZERlY2s7XG4gICAgICAgIHVwZGF0ZUN1cnJlbnREZWNrQnlOYW1lKHRoZURlY2tOYW1lKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coYHRoZSBjdXJyZW50IGRlY2sgaXMgbm93ICR7Y3VycmVudERlY2t9YCk7XG4gICAgY29uc29sZS5sb2coYHNlbGVjdGVkIG9wdGlvbnMgY29sbGVjdGlvbiBpcyAke2NvbGxlY3Rpb259YCk7XG4gICAgQXJyYXkuZnJvbShjb2xsZWN0aW9uKS5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGB0aGlzIG9wdGlvbiBpcyAke29wdGlvbn0gaXQncyB2YWx1ZSBpcyAke29wdGlvbi52YWx1ZX1gKTtcbiAgICAgICAgICAgIGFDYXJkLmNhcmREZWNrcy5wdXNoKG9wdGlvbi52YWx1ZSk7IFxuICAgICAgICAgICAgaWYob3B0aW9uLnZhbHVlID09PSBjdXJyZW50RGVjay5kZWNrTmFtZSl7XG4gICAgICAgICAgICAgICAgaXNDdXJyZW50ID0gMTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtvcHRpb24udmFsdWV9IGlzICR7Y3VycmVudERlY2suZGVja05hbWV9YCk7XG4gICAgICAgICAgICB9IFxuICAgIH0pXG4gICAgYUNhcmQuY2FyZERlY2tzLmZvckVhY2goZGVja05hbWVTdHJpbmcgPT4ge1xuICAgICAgICBpZihkZWNrTmFtZVN0cmluZyAhPT0gJ2FsbCcpe1xuICAgICAgICAgICAgY29uc3QgYURlY2sgPSBjb250cm9sbGVyLmdldERlY2soZGVja05hbWVTdHJpbmcpXG4gICAgICAgICAgICBjb250cm9sbGVyLmFkZENhcmR0b0RlY2soYUNhcmQsIGFEZWNrKTtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgaWYoaXNDdXJyZW50ID09PSAxKXtcbiAgICAgICAgY29uc29sZS5sb2coYCR7Y3VycmVudERlY2suYm9va21hcmt9IGlzIHRoZSBjdXJyZW50IGJvb2ttYXJrIG9mIHRoZSBjdXJyZW50IGRlY2suYClcbiAgICAgICAgY29uc29sZS5sb2coYGJ1dCBub3cgaXQgd2lsbCBiZSAke2N1cnJlbnREZWNrLmNhcmRzQXJyYXkuaW5kZXhPZihhQ2FyZC5jYXJkTmFtZSl9YCk7XG4gICAgICAgIC8vIGNvbnN0IHRoZUNhcmRCb29rbWFyayA9IGN1cnJlbnREZWNrLmNhcmRzQXJyYXkuaW5kZXhPZihhQ2FyZC5jYXJkTmFtZSk7XG4gICAgICAgIGN1cnJlbnREZWNrLmJvb2ttYXJrID0gY3VycmVudERlY2suY2FyZHNBcnJheS5pbmRleE9mKGFDYXJkLmNhcmROYW1lKTtcbiAgICAgICAgY29uc29sZS5sb2coYHRoZSBjdXJyZW50IGRlY2sgYm9va21hcmsgaXMgbm93ICR7Y3VycmVudERlY2suYm9va21hcmt9YCk7XG4gICAgICAgIGlzQ3VycmVudCA9IDA7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGBzYXZpbmcgY2FyZC4gY3VycmVudCBkZWNrIGlzICR7Y3VycmVudERlY2t9YCk7XG4gICAgY29uc29sZS5sb2coY3VycmVudERlY2suYm9va21hcmspO1xuICAgIHBvcHVsYXRlQ2FyZCgpO1xuICAgIHJlc2V0Rm9ybUNhcmQoKTtcbiAgICBoaWRlRm9ybSgpO1xuICAgIFxufVxuXG5cblxuY29uc3Qgc2F2ZUZvcm0gPSAoKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coJ3NhdmUgdHlwZSBpczogJysgZm9ybVR5cGUpO1xuICAgIGlmKGZvcm1UeXBlID09PSdkZWNrJyl7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzYXZpbmcgZGVjayEnKVxuICAgICAgICBzYXZlRGVjaygpO1xuICAgIH1cbiAgICBlbHNlIGlmKGZvcm1UeXBlID09PSAnY2FyZCcpe1xuICAgICAgICBjb25zb2xlLmxvZygnc2F2aW5nIGNhcmQhJylcbiAgICAgICAgc2F2ZUNhcmQoKTtcbiAgICAgICAgcG9wdWxhdGVDYXJkKCk7XG4gICAgfVxufVxuXG5cbmFkZEV2ZW50TGlzdGVuZXJzKCdhZGREZWNrQnV0dG9uJywgc2hvd0RlY2tGb3JtKTtcbmFkZEV2ZW50TGlzdGVuZXJzKCdhZGRDYXJkQnV0dG9uJywgc2hvd0NhcmRGb3JtKTtcbmFkZEV2ZW50TGlzdGVuZXJzKCdjYW5jZWwnLCBoaWRlRm9ybSk7XG5hZGRFdmVudExpc3RlbmVycygnY2hlY2snLCBzYXZlRm9ybSk7XG5cblxuZHJhd0NhcmRTdGFjayhkZWZhdWx0RGVjayk7XG5maXJzdERyYXdEZWNrcyhkZWNrQXJyYXkpO1xuYWRkRm9yd2FyZEJhY2t3YXJkTGlzdGVuZXJzKCk7XG5zdHlsZUN1cnJlbnQoKTtcblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
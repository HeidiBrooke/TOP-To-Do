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
___CSS_LOADER_EXPORT___.push([module.id, "/* *{\n    box-sizing: border-box;\n} */\nbody {\n    padding: 0px;\n    margin: 0px;\n    position: relative;\n    font-size: 14px;\n    \n    /* height: 100vh; */\n    \n}\n\ndiv {\n    /* border-top: 2px solid white; */\n    padding: 4px;\n\n}\n#content {\n    margin: 0px;\n    width: 100vw;\n    /* height: 100vh; */\n    display: flex;\n    flex-direction: column;\n    background-color: rgb(63, 135, 152);\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    align-items: center;\n    position: relative;\n}\n\n#container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 4px;\n    padding: 20px;\n    margin: 0;\n    width: 480px;\n    height: 100vh;  \n}\n\n#header{\n    display: flex;\n    width: 100%;\n    height: 100px;\n}\n\n#deckDock{\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 200px;\n}\n\n#deckArea{\n    display: flex;\n    flex-direction: row;\n    gap: 7px;\n}\n\n#cardDock{\n    padding: 4px;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n}\n\n#logo, .title{\n    width: 100px;\n    font-size: 32px;\n    font-weight: 600;\n    font-family: 'Raleway', sans-serif;\n    color: white;\n    border: none;\n}\n\n.title{\n    width: auto;\n    font-size: 24px;\n}\n\n\n#cardArea{\n    display: grid;\n    grid-template-columns: 60px 1fr 60px;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    border: none;\n}\n\n.deck, .blankDeck{\n    /* pointer-events: none; */\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: repeat(5, 1fr);\n    width: 60px;\n    height: 90px;\n    border-radius: 4px;\n    background-color: white;\n    /* box-shadow: rgba(0, 0, 0, 0.16) 0 7px 9px -7px;\n    box-shadow: rgba(53, 82, 94, 0.3) 1px 7px 7px 1px; */\n    justify-items: center;\n    justify-content: space-between;\n    align-items: center;\n    /* padding: 0px; */\n}\n\n.blankDeck{\n    background-color:  rgb(46, 99, 111);\n    \n}\n\n.menu{\n    border: none;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: left;\n    gap: 4px;\n}\n\n#deckTitle, #cardTitle, #cardDate, #cardSteps{\n    margin-top: 8px;\n    font-family: 'Raleway', sans-serif;\n    color: rgb(63, 135, 152);\n    font-weight: 600;\n    text-transform: uppercase;\n    text-align: center;\n    text-justify: center;\n}\n\n#deckTitle{\n    margin: 0px;\n    grid-column: 1/4;\n    grid-row: 1/5;\n    /* background-color: aqua; */\n    /* width: 100%;\n    height: 100%; */\n    cursor: pointer;\n    /* opacity: 50%; */\n}\n\n.selectedDeck {\n    box-shadow: rgb(102, 220, 241) 0 0 3px 2px;\n    /* box-shadow: rgba(53, 82, 94, 0.3) 1px 9px 9px 1px; */\n}\n\n#addCardButton, #addDeckButton{\n    font-size: 48px;\n    cursor: pointer;\n}\n\n#addCardButton:hover, #addDeckButton:hover, .nextButton:hover{\n    /* text-shadow:  0 0 3px 2px, rgb(102, 173, 241); */\n    text-shadow: -1px 1px 2px rgb(102, 220, 241),\n\t\t\t\t  1px 1px 2px rgb(102, 220, 241),\n\t\t\t\t  1px -1px 0 rgb(102, 220, 241),\n\t\t\t\t  -1px -1px 0 rgb(102, 220, 241);\n    \n}\n.nextButton{\n    justify-self: right;\n    color: white;\n    color: rgb(80, 163, 182);\n    font-family: 'Raleway', sans-serif;\n    font-size: 72px;\n    border: none;\n    cursor: pointer;\n}\n\n#forwardButton{\n    justify-self: left;\n    grid-column: 3/4;\n}\n\n#backwardButton{\n    justify-self: right;\n    grid-column: 1/2;\n    grid-row: 1/2;\n}\n\n\n.cardBig{\n    grid-column: 2/3;\n    grid-row: 1/2;\n    justify-self: center;\n    display: flex;\n    width: 240px;\n    height: 360px;\n    border-radius: 16px;\n    background-color: white;\n    box-shadow: rgba(53, 82, 94, 0.3) 1px 9px 9px 1px;\n    justify-content: center;\n    align-items: center;\n    z-index: 1;\n\n}\n\n#topCard{\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: repeat(8, 1fr);\n\n    /* flex-direction: column; */\n}\n\n.bigPlus, .littlePlus{\n    grid-column: 1/5;\n    grid-row: 4/6;\n    cursor: pointer;\n    font-size: 72px;\n    color: rgb(63, 135, 152);\n    font-family: 'Raleway', sans-serif;\n    font-weight: 600;\n    align-self: center;\n    justify-self: center;\n    \n}\n\n.littlePlus{\n    grid-row: 3/4;\n}\n\n.stack0{\n    background-color: white;\n    position: absolute;\n    top: 6px;\n    left: 63px;\n    /* z-index: -1; */\n    transform: rotate(2deg);\n}\n\n.stack1{\n    position: absolute;\n    top: 3px;\n    left: 58px;\n    /* z-index: -2; */\n    transform: rotate(1deg);\n}\n\n.stack2{\n    position: absolute;\n    top: 4px;\n    left: 120px;\n    /* z-index: -3; */\n    transform: rotate(6deg);\n}\n\n.editSize{\n    /* position: absolute;\n    top: 180px; */\n    width: 300px;\n    height: 450px;\n    z-index: 3;\n}\n\n.overLayHolder{\n    position: absolute;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100vw;\n    height: 100vh; \n    \n}\n\n.overlay{\n    display: grid;\n    position: absolute;\n    background-color: rgb(37, 107, 107);\n    opacity: 60%;\n    height: 100vh;\n    width: 100vw;\n    z-index: 2;\n    padding: 20px; \n}\n\n.formDiv{\n    display: flex;\n    flex-direction: column;\n    padding-top: 100px;\n    gap: 20px;\n    width: 300px;\n    height: 600px;\n    z-index: 3;\n}\n\n.submitButtonsDiv{\n    display: flex;\n    flex-direction: row;\n    gap: 16px;\n    height: 44px;\n}\n\n.cardForm{\n    display: grid;\n    gap: 16px;\n    width:300px;\n    height: 410px;\n    grid-template-columns: 1fr 1.5fr 1.5fr 1fr;\n    grid-template-rows: repeat(7, 1fr);\n    padding: 20px;\n}\n\n.input, .check{\n    padding: 8px;\n    grid-column: 1/5;\n    border: none;\n    outline: none;\n    border-radius: 16px;\n    background-color: rgb(242, 242, 242);\n    color: rgb(80, 163, 182);\n    font-family: 'Raleway', sans-serif;\n    font-size: 18px;\n    text-align: center;\n}\n\n.input:hover{\n    box-shadow: rgb(102, 173, 241) 0 0 3px 2px;\n    box-shadow: rgb(102, 220, 241) 0 0 3px 2px;\n}\n\n#step{\n    grid-column: 2/5;\n    background-color: white;\n    font-size: 15px;\n    display: flex;\n    align-items: flex-start;\n    text-align: left;\n    text-justify: left;\n}\n\n#stepHolder{\n    grid-column: 1/5;\n    grid-row: 3/6;\n    /* background-color: aquamarine; */\n    display: flex;\n    flex-direction: column;\n}\n\n#preStep{\n    grid-column: 1/2;\n    grid-row: 3/4;\n    background-color: white;\n    font-size: 24px;\n    font-weight: 600;\n}\n\n#step:hover, #preStep:hover{\n    box-shadow: none;\n}\n\n.cardTitle{\n   grid-row: 1/2;\n   grid-column: 1/5;\n   text-align: center;\n}\n\n#cardSteps{\n    grid-column: 1/5;\n    grid-row: 2/7;\n    font-size: 14px;\n    text-transform: none;\n}\n\n#cardDate{\n    grid-row: 7/8;\n    grid-column: 1/5;\n    text-align: center;\n}\n\n#cardDelete{\n    margin-left: 12px;\n    grid-column: 1/2;\n    grid-row: 8/9;\n    font-size: 16px;\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    background-color: rgb(80, 163, 182);\n    color: white;\n    text-align: center;\n    text-justify: center;\n    cursor: pointer;\n}\n\n#deckDelete{\n    grid-column: 1/2;\n    grid-row: 5/6;\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    background-color: rgb(80, 163, 182);\n    color: white;\n    font-family: 'Raleway', sans-serif;\n    font-size: 9px;\n    font-weight: 600;\n    text-align: center;\n    text-justify: center; \n    align-self: flex-start;\n    cursor: pointer;\n}\n\n.check{\n    background-color: white;\n    width: 50px;\n    z-index: 3;\n    text-align: center;\n    vertical-align: center;\n}\n\n.grow { \n    cursor: pointer;\n    transition: all .1s ease-in-out; \n    }\n    \n.grow:hover { \n    transform: scale(1.05); \n    }\n\n.check:hover{\n    font-size: 24px;\n}\n\n[contenteditable] {\n    /* outline: 0px solid transparent; */\n  }\n\nul{\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    margin-right: 12px;\n}\nli {\n    text-align: start;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAGA;;GAEG;AACH;IACI,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,eAAe;;IAEf,mBAAmB;;AAEvB;;AAEA;IACI,iCAAiC;IACjC,YAAY;;AAEhB;AACA;IACI,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,mCAAmC;IACnC,wEAAwE;IACxE,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,QAAQ;IACR,aAAa;IACb,SAAS;IACT,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,gBAAgB;IAChB,kCAAkC;IAClC,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,eAAe;AACnB;;;AAGA;IACI,aAAa;IACb,oCAAoC;IACpC,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,0BAA0B;IAC1B,aAAa;IACb,kCAAkC;IAClC,kCAAkC;IAClC,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,uBAAuB;IACvB;wDACoD;IACpD,qBAAqB;IACrB,8BAA8B;IAC9B,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,mCAAmC;;AAEvC;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,qBAAqB;IACrB,QAAQ;AACZ;;AAEA;IACI,eAAe;IACf,kCAAkC;IAClC,wBAAwB;IACxB,gBAAgB;IAChB,yBAAyB;IACzB,kBAAkB;IAClB,oBAAoB;AACxB;;AAEA;IACI,WAAW;IACX,gBAAgB;IAChB,aAAa;IACb,4BAA4B;IAC5B;mBACe;IACf,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,0CAA0C;IAC1C,uDAAuD;AAC3D;;AAEA;IACI,eAAe;IACf,eAAe;AACnB;;AAEA;IACI,mDAAmD;IACnD;;;oCAGgC;;AAEpC;AACA;IACI,mBAAmB;IACnB,YAAY;IACZ,wBAAwB;IACxB,kCAAkC;IAClC,eAAe;IACf,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;IACnB,gBAAgB;IAChB,aAAa;AACjB;;;AAGA;IACI,gBAAgB;IAChB,aAAa;IACb,oBAAoB;IACpB,aAAa;IACb,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,iDAAiD;IACjD,uBAAuB;IACvB,mBAAmB;IACnB,UAAU;;AAEd;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,kCAAkC;;IAElC,4BAA4B;AAChC;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,eAAe;IACf,eAAe;IACf,wBAAwB;IACxB,kCAAkC;IAClC,gBAAgB;IAChB,kBAAkB;IAClB,oBAAoB;;AAExB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,uBAAuB;IACvB,kBAAkB;IAClB,QAAQ;IACR,UAAU;IACV,iBAAiB;IACjB,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,UAAU;IACV,iBAAiB;IACjB,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,WAAW;IACX,iBAAiB;IACjB,uBAAuB;AAC3B;;AAEA;IACI;iBACa;IACb,YAAY;IACZ,aAAa;IACb,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,aAAa;;AAEjB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,mCAAmC;IACnC,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,UAAU;IACV,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,SAAS;IACT,YAAY;IACZ,aAAa;IACb,UAAU;AACd;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,SAAS;IACT,WAAW;IACX,aAAa;IACb,0CAA0C;IAC1C,kCAAkC;IAClC,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,oCAAoC;IACpC,wBAAwB;IACxB,kCAAkC;IAClC,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,0CAA0C;IAC1C,0CAA0C;AAC9C;;AAEA;IACI,gBAAgB;IAChB,uBAAuB;IACvB,eAAe;IACf,aAAa;IACb,uBAAuB;IACvB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,kCAAkC;IAClC,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;GACG,aAAa;GACb,gBAAgB;GAChB,kBAAkB;AACrB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,eAAe;IACf,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,aAAa;IACb,eAAe;IACf,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,mCAAmC;IACnC,YAAY;IACZ,kBAAkB;IAClB,oBAAoB;IACpB,eAAe;AACnB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,UAAU;IACV,WAAW;IACX,kBAAkB;IAClB,mCAAmC;IACnC,YAAY;IACZ,kCAAkC;IAClC,cAAc;IACd,gBAAgB;IAChB,kBAAkB;IAClB,oBAAoB;IACpB,sBAAsB;IACtB,eAAe;AACnB;;AAEA;IACI,uBAAuB;IACvB,WAAW;IACX,UAAU;IACV,kBAAkB;IAClB,sBAAsB;AAC1B;;AAEA;IACI,eAAe;IACf,+BAA+B;IAC/B;;AAEJ;IACI,sBAAsB;IACtB;;AAEJ;IACI,eAAe;AACnB;;AAEA;IACI,oCAAoC;EACtC;;AAEF;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;IACR,kBAAkB;AACtB;AACA;IACI,iBAAiB;AACrB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'); \n@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=Oswald:wght@200;300;400;500;600;700&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\n/* *{\n    box-sizing: border-box;\n} */\nbody {\n    padding: 0px;\n    margin: 0px;\n    position: relative;\n    font-size: 14px;\n    \n    /* height: 100vh; */\n    \n}\n\ndiv {\n    /* border-top: 2px solid white; */\n    padding: 4px;\n\n}\n#content {\n    margin: 0px;\n    width: 100vw;\n    /* height: 100vh; */\n    display: flex;\n    flex-direction: column;\n    background-color: rgb(63, 135, 152);\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    align-items: center;\n    position: relative;\n}\n\n#container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 4px;\n    padding: 20px;\n    margin: 0;\n    width: 480px;\n    height: 100vh;  \n}\n\n#header{\n    display: flex;\n    width: 100%;\n    height: 100px;\n}\n\n#deckDock{\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 200px;\n}\n\n#deckArea{\n    display: flex;\n    flex-direction: row;\n    gap: 7px;\n}\n\n#cardDock{\n    padding: 4px;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n}\n\n#logo, .title{\n    width: 100px;\n    font-size: 32px;\n    font-weight: 600;\n    font-family: 'Raleway', sans-serif;\n    color: white;\n    border: none;\n}\n\n.title{\n    width: auto;\n    font-size: 24px;\n}\n\n\n#cardArea{\n    display: grid;\n    grid-template-columns: 60px 1fr 60px;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    border: none;\n}\n\n.deck, .blankDeck{\n    /* pointer-events: none; */\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: repeat(5, 1fr);\n    width: 60px;\n    height: 90px;\n    border-radius: 4px;\n    background-color: white;\n    /* box-shadow: rgba(0, 0, 0, 0.16) 0 7px 9px -7px;\n    box-shadow: rgba(53, 82, 94, 0.3) 1px 7px 7px 1px; */\n    justify-items: center;\n    justify-content: space-between;\n    align-items: center;\n    /* padding: 0px; */\n}\n\n.blankDeck{\n    background-color:  rgb(46, 99, 111);\n    \n}\n\n.menu{\n    border: none;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: left;\n    gap: 4px;\n}\n\n#deckTitle, #cardTitle, #cardDate, #cardSteps{\n    margin-top: 8px;\n    font-family: 'Raleway', sans-serif;\n    color: rgb(63, 135, 152);\n    font-weight: 600;\n    text-transform: uppercase;\n    text-align: center;\n    text-justify: center;\n}\n\n#deckTitle{\n    margin: 0px;\n    grid-column: 1/4;\n    grid-row: 1/5;\n    /* background-color: aqua; */\n    /* width: 100%;\n    height: 100%; */\n    cursor: pointer;\n    /* opacity: 50%; */\n}\n\n.selectedDeck {\n    box-shadow: rgb(102, 220, 241) 0 0 3px 2px;\n    /* box-shadow: rgba(53, 82, 94, 0.3) 1px 9px 9px 1px; */\n}\n\n#addCardButton, #addDeckButton{\n    font-size: 48px;\n    cursor: pointer;\n}\n\n#addCardButton:hover, #addDeckButton:hover, .nextButton:hover{\n    /* text-shadow:  0 0 3px 2px, rgb(102, 173, 241); */\n    text-shadow: -1px 1px 2px rgb(102, 220, 241),\n\t\t\t\t  1px 1px 2px rgb(102, 220, 241),\n\t\t\t\t  1px -1px 0 rgb(102, 220, 241),\n\t\t\t\t  -1px -1px 0 rgb(102, 220, 241);\n    \n}\n.nextButton{\n    justify-self: right;\n    color: white;\n    color: rgb(80, 163, 182);\n    font-family: 'Raleway', sans-serif;\n    font-size: 72px;\n    border: none;\n    cursor: pointer;\n}\n\n#forwardButton{\n    justify-self: left;\n    grid-column: 3/4;\n}\n\n#backwardButton{\n    justify-self: right;\n    grid-column: 1/2;\n    grid-row: 1/2;\n}\n\n\n.cardBig{\n    grid-column: 2/3;\n    grid-row: 1/2;\n    justify-self: center;\n    display: flex;\n    width: 240px;\n    height: 360px;\n    border-radius: 16px;\n    background-color: white;\n    box-shadow: rgba(53, 82, 94, 0.3) 1px 9px 9px 1px;\n    justify-content: center;\n    align-items: center;\n    z-index: 1;\n\n}\n\n#topCard{\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: repeat(8, 1fr);\n\n    /* flex-direction: column; */\n}\n\n.bigPlus, .littlePlus{\n    grid-column: 1/5;\n    grid-row: 4/6;\n    cursor: pointer;\n    font-size: 72px;\n    color: rgb(63, 135, 152);\n    font-family: 'Raleway', sans-serif;\n    font-weight: 600;\n    align-self: center;\n    justify-self: center;\n    \n}\n\n.littlePlus{\n    grid-row: 3/4;\n}\n\n.stack0{\n    background-color: white;\n    position: absolute;\n    top: 6px;\n    left: 63px;\n    /* z-index: -1; */\n    transform: rotate(2deg);\n}\n\n.stack1{\n    position: absolute;\n    top: 3px;\n    left: 58px;\n    /* z-index: -2; */\n    transform: rotate(1deg);\n}\n\n.stack2{\n    position: absolute;\n    top: 4px;\n    left: 120px;\n    /* z-index: -3; */\n    transform: rotate(6deg);\n}\n\n.editSize{\n    /* position: absolute;\n    top: 180px; */\n    width: 300px;\n    height: 450px;\n    z-index: 3;\n}\n\n.overLayHolder{\n    position: absolute;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100vw;\n    height: 100vh; \n    \n}\n\n.overlay{\n    display: grid;\n    position: absolute;\n    background-color: rgb(37, 107, 107);\n    opacity: 60%;\n    height: 100vh;\n    width: 100vw;\n    z-index: 2;\n    padding: 20px; \n}\n\n.formDiv{\n    display: flex;\n    flex-direction: column;\n    padding-top: 100px;\n    gap: 20px;\n    width: 300px;\n    height: 600px;\n    z-index: 3;\n}\n\n.submitButtonsDiv{\n    display: flex;\n    flex-direction: row;\n    gap: 16px;\n    height: 44px;\n}\n\n.cardForm{\n    display: grid;\n    gap: 16px;\n    width:300px;\n    height: 410px;\n    grid-template-columns: 1fr 1.5fr 1.5fr 1fr;\n    grid-template-rows: repeat(7, 1fr);\n    padding: 20px;\n}\n\n.input, .check{\n    padding: 8px;\n    grid-column: 1/5;\n    border: none;\n    outline: none;\n    border-radius: 16px;\n    background-color: rgb(242, 242, 242);\n    color: rgb(80, 163, 182);\n    font-family: 'Raleway', sans-serif;\n    font-size: 18px;\n    text-align: center;\n}\n\n.input:hover{\n    box-shadow: rgb(102, 173, 241) 0 0 3px 2px;\n    box-shadow: rgb(102, 220, 241) 0 0 3px 2px;\n}\n\n#step{\n    grid-column: 2/5;\n    background-color: white;\n    font-size: 15px;\n    display: flex;\n    align-items: flex-start;\n    text-align: left;\n    text-justify: left;\n}\n\n#stepHolder{\n    grid-column: 1/5;\n    grid-row: 3/6;\n    /* background-color: aquamarine; */\n    display: flex;\n    flex-direction: column;\n}\n\n#preStep{\n    grid-column: 1/2;\n    grid-row: 3/4;\n    background-color: white;\n    font-size: 24px;\n    font-weight: 600;\n}\n\n#step:hover, #preStep:hover{\n    box-shadow: none;\n}\n\n.cardTitle{\n   grid-row: 1/2;\n   grid-column: 1/5;\n   text-align: center;\n}\n\n#cardSteps{\n    grid-column: 1/5;\n    grid-row: 2/7;\n    font-size: 14px;\n    text-transform: none;\n}\n\n#cardDate{\n    grid-row: 7/8;\n    grid-column: 1/5;\n    text-align: center;\n}\n\n#cardDelete{\n    margin-left: 12px;\n    grid-column: 1/2;\n    grid-row: 8/9;\n    font-size: 16px;\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    background-color: rgb(80, 163, 182);\n    color: white;\n    text-align: center;\n    text-justify: center;\n    cursor: pointer;\n}\n\n#deckDelete{\n    grid-column: 1/2;\n    grid-row: 5/6;\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    background-color: rgb(80, 163, 182);\n    color: white;\n    font-family: 'Raleway', sans-serif;\n    font-size: 9px;\n    font-weight: 600;\n    text-align: center;\n    text-justify: center; \n    align-self: flex-start;\n    cursor: pointer;\n}\n\n.check{\n    background-color: white;\n    width: 50px;\n    z-index: 3;\n    text-align: center;\n    vertical-align: center;\n}\n\n.grow { \n    cursor: pointer;\n    transition: all .1s ease-in-out; \n    }\n    \n.grow:hover { \n    transform: scale(1.05); \n    }\n\n.check:hover{\n    font-size: 24px;\n}\n\n[contenteditable] {\n    /* outline: 0px solid transparent; */\n  }\n\nul{\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    margin-right: 12px;\n}\nli {\n    text-align: start;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/GUI/GUI.js":
/*!************************!*\
  !*** ./src/GUI/GUI.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GUILayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GUILayout */ "./src/GUI/GUILayout.js");
/* harmony import */ var _GUIDecks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GUIDecks */ "./src/GUI/GUIDecks.js");
/* harmony import */ var _GUICards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GUICards */ "./src/GUI/GUICards.js");
/* harmony import */ var _GUINewDeck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GUINewDeck */ "./src/GUI/GUINewDeck.js");
/* harmony import */ var _GUINewCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GUINewCard */ "./src/GUI/GUINewCard.js");





//DRAW page, deck area, card area, default decks and default top card

let isInitialLoad = 0;

const drawGUIInitial = (aDeckArray, aCurrentDeck, cardViewValue, currentCard) => {
    (0,_GUILayout__WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_GUIDecks__WEBPACK_IMPORTED_MODULE_1__.drawDecks)(aDeckArray);
    // console.log(`current card passed in is ${currentCard.cardName}`);
    (0,_GUICards__WEBPACK_IMPORTED_MODULE_2__["default"])(aCurrentDeck, cardViewValue, currentCard);
    
}

const drawGUI = (aDeckArray, aCurrentDeck, formValue, cardViewValue, currentCard) => {
    ;(0,_GUIDecks__WEBPACK_IMPORTED_MODULE_1__.drawDecks)(aDeckArray);
    const currentDeckDiv = document.querySelector(`[data-title="${aCurrentDeck.deckName}"]`);
    (0,_GUIDecks__WEBPACK_IMPORTED_MODULE_1__.styleCurrent)(currentDeckDiv);  
    (0,_GUINewDeck__WEBPACK_IMPORTED_MODULE_3__["default"])(formValue);   
    (0,_GUICards__WEBPACK_IMPORTED_MODULE_2__["default"])(aCurrentDeck, cardViewValue, currentCard);
    (0,_GUINewCard__WEBPACK_IMPORTED_MODULE_4__.drawNewCardForm)(aDeckArray, formValue);
}

const loadGUI = (aDeckArray, aCurrentDeck, formValue, cardViewValue, currentCard) => {
    console.log(`initial load is ${isInitialLoad}`);
    if(isInitialLoad === 0){
        console.log('is initial load');
        drawGUIInitial(aDeckArray, aCurrentDeck, formValue, cardViewValue, currentCard);
        isInitialLoad = 1;
    }
    else{
        drawGUI(aDeckArray, aCurrentDeck, formValue, cardViewValue, currentCard);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadGUI);








/***/ }),

/***/ "./src/GUI/GUICards.js":
/*!*****************************!*\
  !*** ./src/GUI/GUICards.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "drawCardStep": () => (/* binding */ drawCardStep)
/* harmony export */ });
const drawForwardAndBackButtons = () => {
    const cardArea = document.getElementById('cardArea');
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
}

const drawBackgroundCards = (num) => {
    const cardArea = document.getElementById('cardArea');
    for(let i = 0; i<num; i++ ){
    const fakeCard = document.createElement('div');
    fakeCard.setAttribute('class', 'cardBig');
    fakeCard.classList.add(`stack${i}`);
    cardArea.appendChild(fakeCard);
    }
}

const drawTitleDiv = () => {
    const cardTitleDiv = document.createElement('div');
    cardTitleDiv.setAttribute('id', 'cardTitle');
    cardTitleDiv.setAttribute('class', 'cardTitle');
    cardTitleDiv.setAttribute('contenteditable', 'true');
    
    return cardTitleDiv;
}
const drawStepsDiv = () => {
    console.log(`drawing step div`)
    const cardStepsDiv = document.createElement('ul');
    cardStepsDiv.setAttribute('id', 'cardSteps');
    return cardStepsDiv;
}

const drawCardStep = () => {
    console.log('drawing the step!')
    const stepDiv = document.createElement('li');
    stepDiv.setAttribute('contenteditable', 'true');
    stepDiv.setAttribute('class', 'stepDiv');
    const cardStepsDiv = document.getElementById('cardSteps');
    cardStepsDiv.appendChild(stepDiv);
    return stepDiv;
}
const drawDateDiv = () => {
    const cardDateDiv = document.createElement('div');
    cardDateDiv.setAttribute('id', 'cardDate');
    cardDateDiv.setAttribute('contenteditable', 'true');
    return cardDateDiv;
}
const drawDeleteButton = () => {
    const cardDeleteButton = document.createElement('div');
    cardDeleteButton.setAttribute('id', 'cardDelete');
    
    cardDeleteButton.classList.add('grow');
    cardDeleteButton.textContent = '-'
    return cardDeleteButton;
}

const populateSteps = (currentCard) => {
    const theCard = currentCard;
    if(theCard.cardSteps.length >= 1){
        console.log('there are step(s)! DRAW STEP DIV(s)');
        theCard.cardSteps.forEach(stepString => {
            const index = theCard.cardSteps.indexOf(stepString);
            const aStep = drawCardStep();
            aStep.setAttribute('data-index', `${index}`);
            aStep.textContent = stepString;
        })
    }
    else{
        console.log('the are no steps! DRAW empty STEP DIV');
        drawCardStep();
    }
}

const drawTopCard = (currentCard) => {
    const cardArea = document.getElementById('cardArea');
    const cardDiv = document.createElement('div');
    cardDiv.setAttribute('id', 'topCard');
    cardDiv.setAttribute('class', 'cardBig');
    cardArea.appendChild(cardDiv);
    const cardTitleDiv = drawTitleDiv();
    cardDiv.appendChild(cardTitleDiv);
    cardTitleDiv.textContent = currentCard.cardName;
    const cardStepsDiv = drawStepsDiv();
    cardDiv.appendChild(cardStepsDiv);
    populateSteps(currentCard);
    const cardDateDiv = drawDateDiv();
    cardDiv.appendChild(cardDateDiv);
    cardDateDiv.textContent = `Due: ${currentCard.cardDate}`;
    const cardDeleteButton = drawDeleteButton();
    cardDiv.appendChild(cardDeleteButton);
    return cardDiv;
}

const drawBlankTopCard = () => {
    const cardArea = document.getElementById('cardArea');
    const cardDiv = document.createElement('div');
    cardDiv.setAttribute('id', 'topCard');
    cardDiv.setAttribute('class', 'cardBig');
    cardArea.appendChild(cardDiv);
    const cardPlus = drawTitleDiv();
    cardPlus.setAttribute('id', 'cardPlus')
    console.log('making plus card')
    cardPlus.textContent = '+';
    cardPlus.setAttribute('class', 'bigPlus');
    cardPlus.setAttribute('contenteditable', false);
    cardPlus.classList.add('grow');
    cardDiv.appendChild(cardPlus);
}

const drawBlankStack = () => {
    drawForwardAndBackButtons();
    drawBackgroundCards(2);
    drawBlankTopCard();
}

const drawCardStack = (currentCard) => {
    console.log(`drawing card stack`);
    drawForwardAndBackButtons();
    drawBackgroundCards(2);
    drawTopCard(currentCard);   
}

const drawCards = (currentDeck,  cardViewValue, currentCard) => {
    if(cardViewValue === 0) {
        if(currentCard !== undefined){
            drawCardStack(currentCard);
        }
        else(drawBlankStack());
        
    }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (drawCards);


const drawAllCardsStack = (aDeck) => {
    const cardDock = document.getElementById('cardDock');
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

const populateCard = (currentDeck) => {
    eraseSteps();
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
        if(theCard.cardSteps.length > 1){
            console.log('there are step(s)! DRAW STEP DIV(s)');
            theCard.cardSteps.forEach(stepString => {
                const aStep = drawCardStep();
                aStep.textContent = stepString;
            })
        }
        else{
            console.log('the are no steps! DRAW empty STEP DIV');
            drawCardStep();
        }
    }
    else {
        cardStepsDiv.textContent = '';
    }
    
}



/***/ }),

/***/ "./src/GUI/GUIDecks.js":
/*!*****************************!*\
  !*** ./src/GUI/GUIDecks.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "drawDecks": () => (/* binding */ drawDecks),
/* harmony export */   "styleCurrent": () => (/* binding */ styleCurrent)
/* harmony export */ });
/* harmony import */ var _logic_deck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logic/deck */ "./src/logic/deck.js");
/* harmony import */ var _GUILayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GUILayout */ "./src/GUI/GUILayout.js");



const styleCurrent = (currentDeckDiv) => {
    currentDeckDiv.classList.add('selectedDeck');  
}

const removeSelectedStyle = (previousDeckDiv) => {
    previousDeckDiv.classList.remove('selectedDeck');
}

const styleDecks = (currentDeckDiv, previousDeckDiv) => {
    removeSelectedStyle(previousDeckDiv);
    styleCurrent(currentDeckDiv);
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


const drawDeckDeleteButton = () => {
    const deckDeleteButton = document.createElement('div');
    deckDeleteButton.setAttribute('id', 'deckDelete');
    deckDeleteButton.setAttribute('class', 'deckDelete');
    deckDeleteButton.textContent = '-'
    return deckDeleteButton;
}

const drawDecks = (arrayOfDecks) => {
    console.log('running drawDecks')
    const deckArea = document.getElementById('deckArea');
    // console.log(deckArray[1]);
    arrayOfDecks.forEach(aDeck => {
            const deckDiv = document.createElement('div');
            deckDiv.setAttribute('class', 'deck');
            deckArea.appendChild(deckDiv);

            const deckTitleDiv = document.createElement('div');
            deckTitleDiv.setAttribute('id', 'deckTitle');
            deckTitleDiv.setAttribute('class', 'deckTitle');
            deckDiv.appendChild(deckTitleDiv);
            deckTitleDiv.textContent = aDeck.deckName;

            deckDiv.setAttribute('data-title', `${aDeck.deckName}`);

            // const editDeck = document.createElement('div');
            // editDeck.setAttribute('id', 'editDeck')
            // deckDiv.appendChild(editDeck)
            // editDeck.textContent = 'Edit';

            //deckDiv.addEventListener('click', updateCurrentDeck);
            // deckTitleDiv.addEventListener('click', updateCurrentDeck);
            
            // editDeck.addEventListener('click', showForm);
        if((arrayOfDecks.indexOf(aDeck)) !== 0){
            const deckDeleteButton = drawDeckDeleteButton();
            deckDiv.appendChild(deckDeleteButton);
            deckTitleDiv.setAttribute('contenteditable', 'true');
        }
        }
        );
    // eraseBlankDeck();
    // drawBlankDeck();
    // updateCurrentDeckDiv();
    // styleCurrent();
    // console.log(currentDeckDiv);

}

/***/ }),

/***/ "./src/GUI/GUILayout.js":
/*!******************************!*\
  !*** ./src/GUI/GUILayout.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const layout = () =>{
    console.log(`drawing layout`);
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
    cardDock.setAttribute('id', 'cardDock');
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
    deckArea.setAttribute('id', 'deckArea');
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
    
    return {content, deckArea, cardArea};
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (layout);


/***/ }),

/***/ "./src/GUI/GUINewCard.js":
/*!*******************************!*\
  !*** ./src/GUI/GUINewCard.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "drawNewCardForm": () => (/* binding */ drawNewCardForm),
/* harmony export */   "drawOverlay": () => (/* binding */ drawOverlay),
/* harmony export */   "drawStep": () => (/* binding */ drawStep)
/* harmony export */ });
const drawOverlay = () => {
    console.log('drawing Overlay');
    const content = document.getElementById('content');
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
    
    const newForm = document.createElement('div');
    newForm.setAttribute('class', 'cardBig');
    newForm.classList.add('editSize');
    newForm.setAttribute('id', 'newForm');
    formDiv.appendChild(newForm);

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
}

const setDeckOptions = (deckArray, cardDeck) => {
    deckArray.forEach(deckElement => {
        const deckOption = document.createElement('option');
        cardDeck.appendChild(deckOption);
        deckOption.value = deckElement.deckName;
        deckOption.textContent = deckElement.deckName;
    })
}

const addNewStepField = (e) => {
    if(e.keyCode === 13){
        console.log(`pressed ENTER`);
        const step = drawStep();
        step.focus();
    }
}

const drawStep = () => {
    const stepHolder = document.getElementById('stepHolder');
    const step = document.createElement('input');
    step.setAttribute('class', 'step');
    step.classList.add('input');
    stepHolder.appendChild(step);
    step.setAttribute('id', 'step');
    step.setAttribute('type', 'text');
    step.setAttribute('name', 'step');
    step.setAttribute('placeholder', '+ step');
    step.addEventListener('keyup', addNewStepField);
    
    return step;
}

const drawCardFormFields = (deckArray) => {  
    const newForm = document.getElementById('newForm');
    const cardForm = document.createElement('form');
    cardForm.setAttribute('class', 'cardForm');
    newForm.appendChild(cardForm);
    
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
    cardDeck.setAttribute('name', 'cardDeck');

    setDeckOptions(deckArray, cardDeck);
    
    const stepHolder = document.createElement('div');
    stepHolder.classList.add('stepHolder');
    stepHolder.setAttribute('id', 'stepHolder');
    cardForm.appendChild(stepHolder);
    
    drawStep();
    
    const date = document.createElement('input');
    date.setAttribute('class', 'date');
    date.classList.add('input');
    cardForm.appendChild(date);
    date.setAttribute('id', 'date');
    date.setAttribute('type', 'date');
    date.setAttribute('name', 'date');
    date.setAttribute('placeholder', ``);
    
}

const resetDeckOptions = () => {
    const deckSelector = document.getElementById('cardDeck');
    Array.from(deckSelector).forEach(deckElement => {
        deckElement.remove();
    })
}



const resetFormCard = () => {
    let aDiv = document.getElementById('card-title');
    aDiv.value = '';
    aDiv = document.getElementById('step');
    aDiv.value = '';
    aDiv.cardDate = document.getElementById('date').value;
    aDiv.value = '';
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

const drawNewCardForm = (deckArray, value) => {
    console.log(`drawing new card form value is ${value}`)
    if(value === 2){
        drawOverlay();
        drawCardFormFields(deckArray);
    }
}





/***/ }),

/***/ "./src/GUI/GUINewDeck.js":
/*!*******************************!*\
  !*** ./src/GUI/GUINewDeck.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GUINewCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GUINewCard */ "./src/GUI/GUINewCard.js");



const drawDeckFormFields = () =>{
    const newForm = document.getElementById('newForm');
    const deckForm = document.createElement('form');
    deckForm.setAttribute('class', 'deckForm');
    deckForm.setAttribute('onSubmit', 'return false;');
    newForm.appendChild(deckForm);
    const newDeckTitle = document.createElement('input');
    newDeckTitle.setAttribute('class', 'deckTitleInput');
    newDeckTitle.classList.add('input');
    deckForm.appendChild(newDeckTitle);
    newDeckTitle.setAttribute('id', 'deck-title');
    newDeckTitle.setAttribute('type', 'text');
    newDeckTitle.setAttribute('name', 'deck-title');
    newDeckTitle.setAttribute('placeholder', 'Title');
    newDeckTitle.style.gridRow = '3/4';
}

const drawNewDeckForm = (value) => {
    console.log(`drawing new deck form value is ${value}`)
    if(value === 1){
        (0,_GUINewCard__WEBPACK_IMPORTED_MODULE_0__.drawOverlay)();
        drawDeckFormFields();
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (drawNewDeckForm);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _logic_controlls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic/controlls */ "./src/logic/controlls.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _GUI_GUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GUI/GUI */ "./src/GUI/GUI.js");
/* harmony import */ var _logic_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logic/card */ "./src/logic/card.js");
/* harmony import */ var _GUI_GUINewCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GUI/GUINewCard */ "./src/GUI/GUINewCard.js");
/* harmony import */ var _GUI_GUICards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GUI/GUICards */ "./src/GUI/GUICards.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
/* harmony import */ var _logic_deck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./logic/deck */ "./src/logic/deck.js");












let currentCard;
let currentDeckDiv;
let formValue = 0;
let cardViewValue = 0;
let theDeckArray;
let currentDeck = _logic_controlls__WEBPACK_IMPORTED_MODULE_0__.defaultDeck;
let all = _logic_controlls__WEBPACK_IMPORTED_MODULE_0__.theAllDeck;
theDeckArray = _logic_controlls__WEBPACK_IMPORTED_MODULE_0__.deckArray;

const loadStorage = () => {
    const storageExists = (0,_storage__WEBPACK_IMPORTED_MODULE_6__.deserializeDeckArray)();
    console.log(`StorageEists returns: ${storageExists}`);
    if(storageExists !== null){
        // console.log(`${storageExists[0].deckName}`)
        theDeckArray = storageExists;
        const index = (0,_storage__WEBPACK_IMPORTED_MODULE_6__.deserializeCurrentDeckIndex)();
        console.log(`the stored index is: ${index}`)
        currentDeck = theDeckArray[index];
        all = (0,_storage__WEBPACK_IMPORTED_MODULE_6__.deserializeAllDeck)('all');
    }
    else{
        theDeckArray = _logic_controlls__WEBPACK_IMPORTED_MODULE_0__.deckArray;
        currentDeck = _logic_controlls__WEBPACK_IMPORTED_MODULE_0__.defaultDeck;
    }
}



//loadStorage();

const getBookmarkedCard = (aDeck) => {
    console.log(`the current deck is ${aDeck}`);
    const thisBookmark = aDeck.bookmark;
    console.log(`the bookmakr is ${aDeck.bookmark}`);
    let thisCardName = aDeck.cardsArray[thisBookmark];
    console.log(`this card name is ${thisCardName}`);
    const type = typeof(thisCardName);
    if(type !== "string"){
        if(thisCardName !== undefined){
            thisCardName = thisCardName.cardName;
        }
    }
    //console.log(`bookmrked crd is ${thisCardName}`);
    const aCard = _logic_controlls__WEBPACK_IMPORTED_MODULE_0__.getCard(thisCardName);
    return aCard;
}
const updateCurrentCard = () => {
    currentCard = getBookmarkedCard(currentDeck);
    //console.log(`current card has been updated to ${currentCard.cardName}`);
}

updateCurrentCard();
(0,_GUI_GUI__WEBPACK_IMPORTED_MODULE_2__["default"])(theDeckArray, currentDeck, cardViewValue, currentCard);

const advanceBookmark = () => {
    console.log('running advance bookmark')
    currentDeck.bookmark++;
    if(currentDeck.cardsArray[currentDeck.bookmark] !== undefined){
        refresh();
    }
    else{
        currentDeck.bookmark--;
        refresh();
    }
}

const previousBookmark = () => {
    console.log('running previous bookmark')
    currentDeck.bookmark--;
    console.log(currentDeck.bookmark);
    if(currentDeck.cardsArray[currentDeck.bookmark] !== undefined){
        console.log('bookmark was defined')
        refresh();
    }
    else{
        currentDeck.bookmark++;
        console.log(currentDeck.bookmark);
        refresh();
    }
    
}

const selectDeck = (e) => {
    e.preventDefault();
    e.stopPropagation();
    let nameOfDeck = e.target.getAttribute('data-title');
    console.log(`nameOfDeck is ${nameOfDeck}`)
    // if(nameOfDeck === null){
    //     nameOfDeck = e.target.parentElement.getAttribute('data-title');
    // }
    currentDeck = _logic_controlls__WEBPACK_IMPORTED_MODULE_0__.getDeck(nameOfDeck);
    refresh();

}

const addDeck = () => {
    formValue = 1;
    refresh();
}

const saveDeck = () => {
        const titleText = document.getElementById('deck-title').value;
        _logic_controlls__WEBPACK_IMPORTED_MODULE_0__.createDeck(titleText);
        clearForm();
        refresh();  
}

const saveDeckOnEnter = (e) => {
    if(e.keyCode === 13){
        const titleText = document.getElementById('deck-title').value;
        _logic_controlls__WEBPACK_IMPORTED_MODULE_0__.createDeck(titleText);
        clearForm();
        refresh();
    }

}

const clearForm = () => {
    formValue = 0;
    const form = document.getElementById('overLayHolder');
    form.remove();
}

const deleteAndEraseDeck = (e) => {
    console.log(`erasing and deleting deck.${currentDeck.deckName}`)
    e.stopPropagation();
    const deleteDiv = e.target;
    const deckDiv = deleteDiv.parentElement;
    const deckTitleDiv = deckDiv.firstChild;
    const deckTitle = deckTitleDiv.textContent;
    const currentDeckIndex = _logic_controlls__WEBPACK_IMPORTED_MODULE_0__.deckArray.indexOf(currentDeck);
    console.log(`the index of the currenDeck is ${currentDeckIndex}`)
    _logic_controlls__WEBPACK_IMPORTED_MODULE_0__.deleteDeck(deckTitle);
    if(currentDeck.deckName === deckTitle){
        console.log(`the deck deleted was the current deck.`)
        if(_logic_controlls__WEBPACK_IMPORTED_MODULE_0__.deckArray.length < 2){
            currentDeck = all;
        }
        else {
            currentDeck = _logic_controlls__WEBPACK_IMPORTED_MODULE_0__.deckArray[currentDeckIndex - 1];
            refresh();
        }
        refresh();
    }
    else{
        refresh();
    }
    refresh();
    console.log(`AFTER DELETE currentDeck is ${currentDeck.deckName}`);
}

const saveTitle = (e) => {
    console.log('saving change to title');
    const text = e.target.textContent;
    console.log(text);
    console.log(currentDeck.bookmark);
    console.log(currentDeck.cardsArray[currentDeck.bookmark]);
    const theCard = _logic_controlls__WEBPACK_IMPORTED_MODULE_0__.getCard(currentDeck.cardsArray[currentDeck.bookmark]);
    console.log(theCard);
    theCard.cardName = text;
    currentDeck.cardsArray[currentDeck.bookmark] = text;
    console.log(theCard.cardName);
}

const saveStep = (e) => {
    console.log(`SAVING STEP!`)
    if(e.keyCode === 13){
        e.preventDefault();
        const dataIndex = e.target.getAttribute('data-index');
        //const initialText = e.target.textContent;
        //const stepString = e.target.textContent;
        //console.log(`stepString is ${stepString}`);
        const theCard = _logic_controlls__WEBPACK_IMPORTED_MODULE_0__.getCard(currentDeck.cardsArray[currentDeck.bookmark]);
        //const index = theCard.cardSteps.indexOf(stepString);
        //console.log(`the card steps are: ${theCard.cardSteps}`);
        const text = e.target.textContent;
        //console.log(`text is ${text}`);
        //console.log(`index is ${index}`);
        if(text !== ''){
            console.log(`Step is NOT empty`)
            console.log(`The length of the array of steps is ${theCard.cardSteps.length}`)
            console.log(`the stesp at dataIndex is ${theCard.cardSteps[dataIndex]}`);
            if(theCard.cardSteps.length < 1){
                    console.log(`card steps less than 1`)
                    theCard.cardSteps.push(text);
            }
            
            else if (theCard.cardSteps[dataIndex] !== undefined) {
                theCard.cardSteps[dataIndex] = text;
            }
            else {
                theCard.cardSteps.push(text);
            }
            }
            const newStepDiv = (0,_GUI_GUICards__WEBPACK_IMPORTED_MODULE_5__.drawCardStep)();
            newStepDiv.addEventListener('input', saveStep);
            newStepDiv.addEventListener('keydown', stopEnterCard);
            newStepDiv.focus();

            e.target.blur();
            const cardStepsDiv = document.getElementById('cardSteps');
            const thisStep = cardStepsDiv.lastChild;
            }
            
            // if(e.target.hasFocus() === false){
            //     thisStep.remove();
            // }  
}

const deleteAndEraseCard = () => {
    const thisCardName = document.getElementById('cardTitle').textContent;
    console.log(`the card name gotten is ${thisCardName}`);
    const thisCard = _logic_controlls__WEBPACK_IMPORTED_MODULE_0__.getCard(thisCardName);
    console.log(`the card returned was ${thisCard.cardName}`);
    if(currentDeck === all){
        thisCard.cardDecks.forEach(deckElement => {
            const thisDeck = _logic_controlls__WEBPACK_IMPORTED_MODULE_0__.getDeck(deckElement);
            _logic_controlls__WEBPACK_IMPORTED_MODULE_0__.deleteCardFromDeck(thisCard, thisDeck);
        })
        _logic_controlls__WEBPACK_IMPORTED_MODULE_0__.deleteCard(thisCard);
    }
    else{
        _logic_controlls__WEBPACK_IMPORTED_MODULE_0__.deleteCardFromDeck(thisCard, currentDeck);
    }
    console.log(`current deck is still ${currentDeck.deckName}`);
    console.log(`current deck length is ${currentDeck.cardsArray.length}`);
    if(currentDeck.cardsArray.length < 2){
        currentDeck.bookmark = 0;
        console.log(`current deck bookmark is now${currentDeck.bookmark}`);
    }
    refresh(); 
    // controller.deleteCard();
    //populateCard();
}

const addCard = () => {
    formValue = 2;
    refresh();     
}


const eraseGUI = () => {
    const decks = document.getElementsByClassName('deck');
    Array.from(decks).forEach(deckElement => 
        deckElement.remove());
    const cardArea = document.getElementById('cardArea');
    const cards = cardArea.childNodes;
    Array.from(cards).forEach(cardElement => {
        cardElement.remove();
    })
}

// const updateCurrentDeckDiv = () => {
//     // console.log('im updateing the current DIV')
//     const theCurrentDeckName = currentDeck.deckName;
//     // console.log('theCurrentDeckName is + ' + theCurrentDeckName);
//     const deckDivs = document.getElementsByClassName('deck');
//     Array.from(deckDivs).forEach(deckDiv => {
//         const titleDiv = deckDiv.children[0];
//         console.log(deckDiv);
//         console.log(theCurrentDeckName);
//         console.log(`does ${titleDiv} and ${theCurrentDeckName} match?`)
//         if(titleDiv.textContent === theCurrentDeckName){
//             currentDeckDiv = deckDiv;
//         }
//     })
    
//     // console.log(deckDivs);
//     // Array.from(deckDivs).forEach(deckDiv => {
//     //     console.log('the deckTitleis '+ deckTitleDiv);
//     //     if(deckDiv.firstElementChild.textContent === theCurrentDeckName){
//     //         currentDeckDiv = deckDiv;
//     //     }
//     // })
// }

// const updateCurrentDeck = (e) => {
//     removeSelectedStyle();
//     // console.log('im UPDATInG!');
//     console.log(e.target.innerHTML);
//     if(e.target.classList.contains('deck')){
//         console.log('clickedon DECK DIV')
//         console.log(e.target.getAttribute('data-title'))
//         const theDeckName = (e.target.getAttribute('data-title'));
//         currentDeck = controller.getDeck(theDeckName);
//     }
//     else {
//         console.log('clickedon TITLE DIV')
//         console.log(e.target.textContent)
//         const theDeckName = (e.target.textContent);
//         currentDeck = controller.getDeck(theDeckName);
//     }
    
//     // console.log('gonna update current deck div');
//     updateCurrentDeckDiv();
//     // console.log('gonna style current decDiv ' + currentDeckDiv);
//     styleCurrent();
//     populateCard();
// }

// const updateCurrentDeckByName = (name) => {
//     removeSelectedStyle();
//     // console.log('im UPDATInG!');
    
//     const theDeckName = name;
//     currentDeck = controller.getDeck(theDeckName);
//     // console.log('gonna update current deck div');
//     updateCurrentDeckDiv();
//     // console.log('gonna style current decDiv ' + currentDeckDiv);
//     styleCurrent();
//     populateCard();
// }

const saveDate = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const thisCardName = document.getElementById('cardTitle').textContent;
    const thisCard = _logic_controlls__WEBPACK_IMPORTED_MODULE_0__.getCard(thisCardName);
    if(e.keyCode === 13){
        thisCard.cardDate = e.target.value;
        
    }
    refresh();
}

const editDate = (e) => {
    const datePicker = document.createElement('input');
    datePicker.setAttribute('type', 'date');
    datePicker.setAttribute('class', 'input');
    datePicker.style.position = 'absolute';
    e.target.appendChild(datePicker);
    datePicker.addEventListener('keydown', saveDate);
}

const saveDeckTitle = (e) => {
    // console.log('saving change to title');
    e.preventDefault();
    e.stopPropagation();
    const text = e.target.textContent;
    currentDeck.deckName = text;
}

const stopEnter = (e) => {
    // console.log('saving change to title');
    if(e.keyCode === 13){
        e.preventDefault();
        saveDeckTitle(e);
        e.target.blur();

    }
   
}
const stopEnterCard = (e) => {
    // console.log('saving change to title');
    if(e.keyCode === 13){
        e.preventDefault();
        saveStep(e);
    }  
}
// const eraseSteps = () => {
//     const stepsDiv = document.getElementById('cardSteps');
//     const steps = stepsDiv.children;
//     Array.from(steps).forEach(stepElement => {
//         console.log(`removing ${stepElement} from ${stepsDiv}`)
//         stepElement.remove();
//     })
    
// }
// const showForm = () => {
//     // console.log('showing form!');
//     const form = document.getElementById('overLayHolder');
//     form.style.visibility = 'visible';
// }
// const hideForm = () => {
//     console.log('hiding form!');
//     const form = document.getElementById('overLayHolder');
//     form.style.visibility = 'hidden';
//     let aDiv = document.getElementById('step');
//     aDiv.style.visibility = 'hidden';
//     aDiv = document.getElementById('date');
//     aDiv.style.visibility = 'hidden';
//     aDiv = document.getElementById('cardDeck');
//     aDiv.style.visibility = 'hidden';
// }
const saveCard = () => {
    let isCurrent = 0;
    let aCard = document.getElementById('card-title').value;
    aCard = _logic_controlls__WEBPACK_IMPORTED_MODULE_0__.createCard(aCard);
    const stepCollection = document.getElementsByClassName('step');
    Array.from(stepCollection).forEach(step => {
        aCard.cardSteps.push(step.value);
    })

    aCard.cardDate = document.getElementById('date').value;
    const deckList = document.getElementById('cardDeck');
    const collection = deckList.selectedOptions;
    console.log(`the current deck was ${currentDeck}`);
    if(collection.length < 2 ){
        const theSelectedDeck = collection[0].textContent;
        const theDeckName = theSelectedDeck;
        currentDeck = _logic_controlls__WEBPACK_IMPORTED_MODULE_0__.getDeck(theDeckName);
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
            const aDeck = _logic_controlls__WEBPACK_IMPORTED_MODULE_0__.getDeck(deckNameString)
            _logic_controlls__WEBPACK_IMPORTED_MODULE_0__.addCardtoDeck(aCard, aDeck);
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
    clearForm();
    refresh();
    
}
// const saveForm = () => {
//     // console.log('save type is: '+ formType);
//     if(formType ==='deck'){
//         console.log('saving deck!')
//         saveDeck();
//     }
//     else if(formType === 'card'){
//         console.log('saving card!')
//         saveCard();
//         populateCard();
//     }
// }
const setDeckDeleteListeners = () => {
    const divCollection = document.getElementsByClassName('deckDelete');
    Array.from(divCollection).forEach(div => {
        div.addEventListener('click', deleteAndEraseDeck)
    })
}

const selectDeckListeners = () => {
    const deckCollection = document.getElementsByClassName('deck');
    Array.from(deckCollection).forEach(deckDiv => {
       deckDiv.addEventListener('click', selectDeck);
    })
    const deckTitleDivs = document.getElementsByClassName('deckTitle');
    Array.from(deckTitleDivs).forEach(deckTitleDiv => {
        deckTitleDiv.addEventListener('input', saveDeckTitle);
        deckTitleDiv.addEventListener('keydown', stopEnter);
    })
    
}

const setPlusListeners = () => {
    const addDeckDiv = document.getElementById('addDeckButton');
    addDeckDiv.addEventListener('click', addDeck);
    const addCardDiv = document.getElementById('addCardButton');
    addCardDiv.addEventListener('click', addCard);
}

const setFormButtonListeners = () => {
    const confirm = document.getElementById('check');
    const cancel = document.getElementById('cancel');
    if(formValue === 1){
        const titleInput = document.getElementById('deck-title');
    if(titleInput !== null){
        titleInput.addEventListener('keyup', saveDeckOnEnter);
    }
    if(confirm !== null){
        confirm.addEventListener('click', saveDeck);
    }
    }
    if(formValue === 2){
        const titleInput = document.getElementById('card-title');
    if(titleInput !== null){
        //titleInput.addEventListener('keyup', saveCardOnEnter);
    }
    if(confirm !== null){
        confirm.addEventListener('click', saveCard);
    }
    }
    
    if(cancel !== null){
        cancel.addEventListener('click', clearForm);
    }
    
}

const setCardlisteners = () => {
    const cardDeleteButton = document.getElementById('cardDelete')
    if(cardDeleteButton !== null){
        cardDeleteButton.addEventListener('click', deleteAndEraseCard);
    }
    const stepDivs = document.getElementsByClassName('stepDiv');
    if(stepDivs !== null){
    Array.from(stepDivs).forEach(stepDiv => {
       stepDiv.addEventListener('keydown', saveStep);
    })
    }
    const cardTitleDiv = document.getElementById('cardTitle');
    if(cardTitleDiv !== null){
        cardTitleDiv.addEventListener('input', saveTitle);
        cardTitleDiv.addEventListener('keydown', stopEnterCard);
    }
    const cardPlusDiv = document.getElementById('cardPlus');
    if(cardPlusDiv !== null){
        cardPlusDiv.addEventListener('click', addCard);
    }
    const cardDateDiv = document.getElementById('cardDate');
    if(cardDateDiv !== null){
        cardDateDiv.addEventListener('click', editDate);
    }

}

const addEventListeners = (elementName, aFunction) =>{
    const element = document.getElementById(`${elementName}`);
    element.addEventListener('click', aFunction);
}

const addForwardBackwardListeners = () => {
    addEventListeners('forwardButton', advanceBookmark);
    addEventListeners('backwardButton', previousBookmark);
}

const setListeners = () => {
    selectDeckListeners();
    setPlusListeners();
    setFormButtonListeners();
    setDeckDeleteListeners();
    setCardlisteners();
    addForwardBackwardListeners();
}

const refresh = () => {
    updateCurrentCard();
    eraseGUI();
    (0,_GUI_GUI__WEBPACK_IMPORTED_MODULE_2__["default"])(theDeckArray, currentDeck, formValue, cardViewValue, currentCard);
    setListeners()
    ;(0,_storage__WEBPACK_IMPORTED_MODULE_6__.serializeData)(theDeckArray, currentDeck);
}

refresh();

// const eraseTopCard = () => {
//     const oldCard = document.getElementById('topCard');
//     oldCard.remove();
//     drawTopCard();
// }

/***/ }),

/***/ "./src/logic/card.js":
/*!***************************!*\
  !*** ./src/logic/card.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const card = (name) => {
  const cardName = name;
  const cardSteps = [];
  const cardDate = new Date().toLocaleDateString();
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

/***/ "./src/logic/controlls.js":
/*!********************************!*\
  !*** ./src/logic/controlls.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addCardtoDeck": () => (/* binding */ addCardtoDeck),
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
/* harmony export */   "table": () => (/* binding */ table),
/* harmony export */   "theAllDeck": () => (/* binding */ theAllDeck)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/style.css");
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card */ "./src/logic/card.js");
/* harmony import */ var _deck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deck */ "./src/logic/deck.js");




const theAllDeck = (0,_deck__WEBPACK_IMPORTED_MODULE_2__["default"])("all");
const deckArray = [];
deckArray.push(theAllDeck);
const table = deckArray;
const defaultDeck = (0,_deck__WEBPACK_IMPORTED_MODULE_2__["default"])('To-Do');
const defaultCard = (0,_card__WEBPACK_IMPORTED_MODULE_1__["default"])('Get Groceries');
const defaultCard2 = (0,_card__WEBPACK_IMPORTED_MODULE_1__["default"])('Mail Thank You Notes');
theAllDeck.cardsArray.push(defaultCard);
theAllDeck.cardsArray.push(defaultCard2);
defaultCard.cardSteps.push(`This is task card.`);
defaultCard.cardSteps.push(`Click on any text field to edit the property`);
defaultCard.cardSteps.push(`Press the next arrow to the right to see the next card.`);
defaultCard2.cardSteps.push(`Click the delete button on a card to remove from the current (selected) deck.`);
defaultCard2.cardSteps.push(`To permanently delete a card, delete from the all deck.`);
defaultCard2.cardSteps.push(`Create cards or decks by pressing the '+' buttons.`);
defaultCard2.cardSteps.push(`More great features and Local Storage coming soon!`);
defaultDeck.cardsArray.push(defaultCard.cardName);
defaultDeck.cardsArray.push(defaultCard2.cardName);
deckArray.push(defaultDeck);


    const viewAll = () => {
      console.log(`All cards are: ${theAllDeck}`);
      console.log(`all decks are: ${table}`);
      theAllDeck.cardsArray.forEach((cardElement) => {
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
        currentDeck = theAllDeck;
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
      console.log(theAllDeck.cardsArray);
      theAllDeck.cardsArray.forEach((cardElement) => {
        // console.log(cardElement.cardName);
        // console.log(name);
        if (cardElement.cardName === name) {
          console.log(`${cardElement.cardName} === ${name}`);
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
      //console.log(`the card getting returned is: ${thisCard.cardName}`)
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
      console.log(theDeck);
      return theDeck;
    };

    const createCard = (name) => {
      const newCard = (0,_card__WEBPACK_IMPORTED_MODULE_1__["default"])(name);
    theAllDeck.cardsArray.push(newCard);
    console.log(theAllDeck.cardsArray);
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
      const index = theAllDeck.cardsArray.indexOf(thisCard);
      if (index > -1) {
        theAllDeck.cardsArray.splice(index, 1);
      }
      console.log(theAllDeck);
      return theAllDeck;
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

    // const viewCard = (theCardName) => {
    //   const thisCard = getCard(theCardName);
    //   for (const prop in thisCard) {
    //     console.log(`obj.${prop} = ${thisCard[prop]}`);
    //   }
    // };

    // const setDate = (theCardName) => {
    //   const thisCard = getCard(theCardName);
    //   const aDate = prompt("enter the due date in the form of MM.DD.YY:");
    //   thisCard.cardDate = new Date(aDate);
    // };

    // const addStep = (theCardName) => {
    //   const thisCard = getCard(theCardName);
    //   const i = thisCard.cardSteps.length;
    //   thisCard.cardSteps[i] = prompt("enter your step:");
    // };

    // const setStep = (theCardName) => {
    //   const thisCard = getCard(theCardName);
    //   const i = prompt("what index?");
    //   thisCard.cardSteps[i] = prompt("enter your step:");
    // };

    // const setComplete = (theCardName) => {
    //   const thisCard = getCard(theCardName);
    //   thisCard.cardCompleteValue = Number(
    //     prompt(
    //       "is your task complete? If so, enter a '1' otherwise eneter '0'."
    //     )
    //   );
    // };





/***/ }),

/***/ "./src/logic/deck.js":
/*!***************************!*\
  !*** ./src/logic/deck.js ***!
  \***************************/
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

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deserializeAllCards": () => (/* binding */ deserializeAllCards),
/* harmony export */   "deserializeAllDeck": () => (/* binding */ deserializeAllDeck),
/* harmony export */   "deserializeCurrentDeckIndex": () => (/* binding */ deserializeCurrentDeckIndex),
/* harmony export */   "deserializeDeckArray": () => (/* binding */ deserializeDeckArray),
/* harmony export */   "serializeData": () => (/* binding */ serializeData)
/* harmony export */ });
/* harmony import */ var _logic_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic/card */ "./src/logic/card.js");


const serializeDeck = (deckObj, theDeckArray) => {
    const index = theDeckArray.indexOf(deckObj);
    const deckSerialized = JSON.stringify(deckObj);
    localStorage.setItem(`${index}`, deckSerialized);
}

const deserializeDeck = (index) => {
    const deckDeserialized = JSON.parse(localStorage.getItem(`${index}`));
    return deckDeserialized;
}

const serializeCurrentDeckIndex = (index) => {
    console.log(`index to be serialized is ${index}`);
    console.log(`the type is ${typeof index}`)
    const theCurrentDeckIndexSerialized = JSON.stringify(index);
    console.log(`theCurrentDeckIndexSerialized is ${theCurrentDeckIndexSerialized}`)
    console.log(`the type is ${typeof theCurrentDeckIndexSerialized}`)
    localStorage.setItem(`theCurrentDeckIndex`, theCurrentDeckIndexSerialized);
}

const deserializeCurrentDeckIndex = () => {
    const unparsed = localStorage.getItem('theCurrentDeckIndex');
    console.log(`the unprsed result is: ${unparsed}`);
    const currentDeckIndexDeserialized = JSON.parse(localStorage.getItem('theCurrentDeckIndex'));
    console.log(`the currentDeckIndexDeserialized is ${currentDeckIndexDeserialized}`);
    return currentDeckIndexDeserialized;
}

const serializeCard = (cardObj, theAllDeck) => {
    const index = theAllDeck.cardsArray.indexOf(cardObj);
    const cardSerialized = JSON.stringify(cardObj);
    localStorage.setItem(`${index}`, cardSerialized);
}

const deserializeCard = (cardIndex) => {
    const cardDeserialized = JSON.parse(localStorage.getItem(`${cardIndex}`));
    return cardDeserialized;
}

const serializeAllCards = (aDeck) => {
    let index;
    const theDeck = aDeck;
    theDeck.cardsArray.forEach(cardObj => {
        index = theDeck.cardsArray.indexOf(cardObj);
        theDeck.cardsArray[index] = serializeCard(cardObj);
    });
    return theDeck;
}

const deserializeAllCards = (aDeck) => {
    let index;
    const theDeck = aDeck;
    theDeck.cardsArray.forEach(cardObj => {
        index = theDeck.cardsArray.indexOf(cardObj);
        theDeck.cardsArray[index] = deserializeCard(index);
    })
}


const deserializeAllDeck = (deckName) => {
    const theAllDeck = deserializeDeck(deckName);
    deserializeAllCards(theAllDeck);
    return theAllDeck;
}

const serializeAllDecks = (aDeckArray) => {
    aDeckArray.forEach(deckObj => {
        serializeDeck(deckObj);
    })
}

const serializeDeckArray = (aDeckArray) => {
    const theDeckArray = aDeckArray;
    const serAll = serializeAllCards(theDeckArray[0]);
    theDeckArray[0] = serAll;
    let index;
    theDeckArray.forEach(deckObj => {
        index = theDeckArray.indexOf(deckObj);
        if(index !== 0){
            theDeckArray[index] = serializeDeck(deckObj, aDeckArray);
        }
    })

    console.log(`the deck array tobe serialized is ${aDeckArray}`)
    const deckArraySerialized = JSON.stringify(aDeckArray);
    localStorage.setItem(`deckArray`, deckArraySerialized);
}

const deserializeDeckArray = () => {
    let index;
    const deckArrayDeserialized = JSON.parse(localStorage.getItem('deckArray'));
    deckArrayDeserialized.forEach(serDeck => {
        index = deckArrayDeserialized.indexOf(serDeck);
        deckArrayDeserialized[index] = deserializeDeck(index)
    })
    return deckArrayDeserialized;
}

const serializeData = (aDeckArray, aCurrentDeck) =>{
    const index = aDeckArray.indexOf(aCurrentDeck);
    console.log(`the index is ${index}`)
    console.log(`the currentDeck is ${aCurrentDeck.deckName}`)
    serializeCurrentDeckIndex(index);
    serializeDeckArray(aDeckArray);
}




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxRQUFRLFFBQVEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsUUFBUSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksY0FBYyxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsY0FBYyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxLQUFLLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FB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QTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtEQUFrRCxlQUFlOztBQUVqRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNwSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUEsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RFZjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7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TztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7OztBQUdPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTCxxREFBcUQsV0FBVztBQUNoRTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRU87QUFDUDtBQUNBLGdDQUFnQyxNQUFNO0FBQ3RDLHNDQUFzQyxzQkFBc0I7QUFDNUQ7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wLXRvLWRvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b3AtdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvcC10by1kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvcC10by1kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b3AtdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b3AtdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvcC10by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvcC10by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvcC10by1kby8uL3NyYy9HVUkvR1VJLmpzIiwid2VicGFjazovL3RvcC10by1kby8uL3NyYy9HVUkvR1VJQ2FyZHMuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLy4vc3JjL0dVSS9HVUlEZWNrcy5qcyIsIndlYnBhY2s6Ly90b3AtdG8tZG8vLi9zcmMvR1VJL0dVSUxheW91dC5qcyIsIndlYnBhY2s6Ly90b3AtdG8tZG8vLi9zcmMvR1VJL0dVSU5ld0NhcmQuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLy4vc3JjL0dVSS9HVUlOZXdEZWNrLmpzIiwid2VicGFjazovL3RvcC10by1kby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3AtdG8tZG8vLi9zcmMvbG9naWMvY2FyZC5qcyIsIndlYnBhY2s6Ly90b3AtdG8tZG8vLi9zcmMvbG9naWMvY29udHJvbGxzLmpzIiwid2VicGFjazovL3RvcC10by1kby8uL3NyYy9sb2dpYy9kZWNrLmpzIiwid2VicGFjazovL3RvcC10by1kby8uL3NyYy9zdG9yYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UmFsZXdheTppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3N3YWxkOndnaHRAMjAwOzMwMDs0MDA7NTAwOzYwMDs3MDAmZmFtaWx5PVJhbGV3YXk6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNvdXJpZXIrUHJpbWU6aXRhbCx3Z2h0QDAsNDAwOzAsNzAwOzEsNDAwOzEsNzAwJmZhbWlseT1Pc3dhbGQ6d2dodEAyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMCZmYW1pbHk9UmFsZXdheTppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogKntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59ICovXFxuYm9keSB7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBcXG4gICAgLyogaGVpZ2h0OiAxMDB2aDsgKi9cXG4gICAgXFxufVxcblxcbmRpdiB7XFxuICAgIC8qIGJvcmRlci10b3A6IDJweCBzb2xpZCB3aGl0ZTsgKi9cXG4gICAgcGFkZGluZzogNHB4O1xcblxcbn1cXG4jY29udGVudCB7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIC8qIGhlaWdodDogMTAwdmg7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2MywgMTM1LCAxNTIpO1xcbiAgICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHdpZHRoOiA0ODBweDtcXG4gICAgaGVpZ2h0OiAxMDB2aDsgIFxcbn1cXG5cXG4jaGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuI2RlY2tEb2Nre1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG59XFxuXFxuI2RlY2tBcmVhe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBnYXA6IDdweDtcXG59XFxuXFxuI2NhcmREb2Nre1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbiNsb2dvLCAudGl0bGV7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnRpdGxle1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG5cXG4jY2FyZEFyZWF7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjBweCAxZnIgNjBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uZGVjaywgLmJsYW5rRGVja3tcXG4gICAgLyogcG9pbnRlci1ldmVudHM6IG5vbmU7ICovXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDFmcik7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBoZWlnaHQ6IDkwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIC8qIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMCA3cHggOXB4IC03cHg7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoNTMsIDgyLCA5NCwgMC4zKSAxcHggN3B4IDdweCAxcHg7ICovXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAvKiBwYWRkaW5nOiAwcHg7ICovXFxufVxcblxcbi5ibGFua0RlY2t7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICByZ2IoNDYsIDk5LCAxMTEpO1xcbiAgICBcXG59XFxuXFxuLm1lbnV7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcbiAgICBnYXA6IDRweDtcXG59XFxuXFxuI2RlY2tUaXRsZSwgI2NhcmRUaXRsZSwgI2NhcmREYXRlLCAjY2FyZFN0ZXBze1xcbiAgICBtYXJnaW4tdG9wOiA4cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiByZ2IoNjMsIDEzNSwgMTUyKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LWp1c3RpZnk6IGNlbnRlcjtcXG59XFxuXFxuI2RlY2tUaXRsZXtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGdyaWQtY29sdW1uOiAxLzQ7XFxuICAgIGdyaWQtcm93OiAxLzU7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGFxdWE7ICovXFxuICAgIC8qIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7ICovXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgLyogb3BhY2l0eTogNTAlOyAqL1xcbn1cXG5cXG4uc2VsZWN0ZWREZWNrIHtcXG4gICAgYm94LXNoYWRvdzogcmdiKDEwMiwgMjIwLCAyNDEpIDAgMCAzcHggMnB4O1xcbiAgICAvKiBib3gtc2hhZG93OiByZ2JhKDUzLCA4MiwgOTQsIDAuMykgMXB4IDlweCA5cHggMXB4OyAqL1xcbn1cXG5cXG4jYWRkQ2FyZEJ1dHRvbiwgI2FkZERlY2tCdXR0b257XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jYWRkQ2FyZEJ1dHRvbjpob3ZlciwgI2FkZERlY2tCdXR0b246aG92ZXIsIC5uZXh0QnV0dG9uOmhvdmVye1xcbiAgICAvKiB0ZXh0LXNoYWRvdzogIDAgMCAzcHggMnB4LCByZ2IoMTAyLCAxNzMsIDI0MSk7ICovXFxuICAgIHRleHQtc2hhZG93OiAtMXB4IDFweCAycHggcmdiKDEwMiwgMjIwLCAyNDEpLFxcblxcdFxcdFxcdFxcdCAgMXB4IDFweCAycHggcmdiKDEwMiwgMjIwLCAyNDEpLFxcblxcdFxcdFxcdFxcdCAgMXB4IC0xcHggMCByZ2IoMTAyLCAyMjAsIDI0MSksXFxuXFx0XFx0XFx0XFx0ICAtMXB4IC0xcHggMCByZ2IoMTAyLCAyMjAsIDI0MSk7XFxuICAgIFxcbn1cXG4ubmV4dEJ1dHRvbntcXG4gICAganVzdGlmeS1zZWxmOiByaWdodDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogcmdiKDgwLCAxNjMsIDE4Mik7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogNzJweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNmb3J3YXJkQnV0dG9ue1xcbiAgICBqdXN0aWZ5LXNlbGY6IGxlZnQ7XFxuICAgIGdyaWQtY29sdW1uOiAzLzQ7XFxufVxcblxcbiNiYWNrd2FyZEJ1dHRvbntcXG4gICAganVzdGlmeS1zZWxmOiByaWdodDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG59XFxuXFxuXFxuLmNhcmRCaWd7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMjQwcHg7XFxuICAgIGhlaWdodDogMzYwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDUzLCA4MiwgOTQsIDAuMykgMXB4IDlweCA5cHggMXB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgei1pbmRleDogMTtcXG5cXG59XFxuXFxuI3RvcENhcmR7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDgsIDFmcik7XFxuXFxuICAgIC8qIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICovXFxufVxcblxcbi5iaWdQbHVzLCAubGl0dGxlUGx1c3tcXG4gICAgZ3JpZC1jb2x1bW46IDEvNTtcXG4gICAgZ3JpZC1yb3c6IDQvNjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDcycHg7XFxuICAgIGNvbG9yOiByZ2IoNjMsIDEzNSwgMTUyKTtcXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgXFxufVxcblxcbi5saXR0bGVQbHVze1xcbiAgICBncmlkLXJvdzogMy80O1xcbn1cXG5cXG4uc3RhY2swe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDZweDtcXG4gICAgbGVmdDogNjNweDtcXG4gICAgLyogei1pbmRleDogLTE7ICovXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDJkZWcpO1xcbn1cXG5cXG4uc3RhY2sxe1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogM3B4O1xcbiAgICBsZWZ0OiA1OHB4O1xcbiAgICAvKiB6LWluZGV4OiAtMjsgKi9cXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMWRlZyk7XFxufVxcblxcbi5zdGFjazJ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA0cHg7XFxuICAgIGxlZnQ6IDEyMHB4O1xcbiAgICAvKiB6LWluZGV4OiAtMzsgKi9cXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNmRlZyk7XFxufVxcblxcbi5lZGl0U2l6ZXtcXG4gICAgLyogcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDE4MHB4OyAqL1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogNDUwcHg7XFxuICAgIHotaW5kZXg6IDM7XFxufVxcblxcbi5vdmVyTGF5SG9sZGVye1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7IFxcbiAgICBcXG59XFxuXFxuLm92ZXJsYXl7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM3LCAxMDcsIDEwNyk7XFxuICAgIG9wYWNpdHk6IDYwJTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBwYWRkaW5nOiAyMHB4OyBcXG59XFxuXFxuLmZvcm1EaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogNjAwcHg7XFxuICAgIHotaW5kZXg6IDM7XFxufVxcblxcbi5zdWJtaXRCdXR0b25zRGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBnYXA6IDE2cHg7XFxuICAgIGhlaWdodDogNDRweDtcXG59XFxuXFxuLmNhcmRGb3Jte1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDE2cHg7XFxuICAgIHdpZHRoOjMwMHB4O1xcbiAgICBoZWlnaHQ6IDQxMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxLjVmciAxLjVmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDcsIDFmcik7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5pbnB1dCwgLmNoZWNre1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGdyaWQtY29sdW1uOiAxLzU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MiwgMjQyLCAyNDIpO1xcbiAgICBjb2xvcjogcmdiKDgwLCAxNjMsIDE4Mik7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaW5wdXQ6aG92ZXJ7XFxuICAgIGJveC1zaGFkb3c6IHJnYigxMDIsIDE3MywgMjQxKSAwIDAgM3B4IDJweDtcXG4gICAgYm94LXNoYWRvdzogcmdiKDEwMiwgMjIwLCAyNDEpIDAgMCAzcHggMnB4O1xcbn1cXG5cXG4jc3RlcHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvNTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIHRleHQtanVzdGlmeTogbGVmdDtcXG59XFxuXFxuI3N0ZXBIb2xkZXJ7XFxuICAgIGdyaWQtY29sdW1uOiAxLzU7XFxuICAgIGdyaWQtcm93OiAzLzY7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNwcmVTdGVwe1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogMy80O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4jc3RlcDpob3ZlciwgI3ByZVN0ZXA6aG92ZXJ7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi5jYXJkVGl0bGV7XFxuICAgZ3JpZC1yb3c6IDEvMjtcXG4gICBncmlkLWNvbHVtbjogMS81O1xcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2NhcmRTdGVwc3tcXG4gICAgZ3JpZC1jb2x1bW46IDEvNTtcXG4gICAgZ3JpZC1yb3c6IDIvNztcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuI2NhcmREYXRle1xcbiAgICBncmlkLXJvdzogNy84O1xcbiAgICBncmlkLWNvbHVtbjogMS81O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNjYXJkRGVsZXRle1xcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDgvOTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4MCwgMTYzLCAxODIpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC1qdXN0aWZ5OiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2RlY2tEZWxldGV7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiA1LzY7XFxuICAgIHdpZHRoOiA4cHg7XFxuICAgIGhlaWdodDogOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4MCwgMTYzLCAxODIpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogOXB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtanVzdGlmeTogY2VudGVyOyBcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2hlY2t7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgei1pbmRleDogMztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZ3JvdyB7IFxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuMXMgZWFzZS1pbi1vdXQ7IFxcbiAgICB9XFxuICAgIFxcbi5ncm93OmhvdmVyIHsgXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7IFxcbiAgICB9XFxuXFxuLmNoZWNrOmhvdmVye1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbltjb250ZW50ZWRpdGFibGVdIHtcXG4gICAgLyogb3V0bGluZTogMHB4IHNvbGlkIHRyYW5zcGFyZW50OyAqL1xcbiAgfVxcblxcbnVse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDhweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xcbn1cXG5saSB7XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBOztHQUVHO0FBQ0g7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixlQUFlOztJQUVmLG1CQUFtQjs7QUFFdkI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsWUFBWTs7QUFFaEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUNBQW1DO0lBQ25DLHdFQUF3RTtJQUN4RSxt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O0lBQ3ZCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7R0FDRyxhQUFhO0dBQ2IsZ0JBQWdCO0dBQ2hCLGtCQUFrQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsZUFBZTtJQUNmLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1DQUFtQztJQUNuQyxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixVQUFVO0lBQ1YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixtQ0FBbUM7SUFDbkMsWUFBWTtJQUNaLGtDQUFrQztJQUNsQyxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLCtCQUErQjtJQUMvQjs7QUFFSjtJQUNJLHNCQUFzQjtJQUN0Qjs7QUFFSjtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxvQ0FBb0M7RUFDdEM7O0FBRUY7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7SUFDUixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SYWxld2F5Oml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXAnKTsgXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3N3YWxkOndnaHRAMjAwOzMwMDs0MDA7NTAwOzYwMDs3MDAmZmFtaWx5PVJhbGV3YXk6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCcpO1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNvdXJpZXIrUHJpbWU6aXRhbCx3Z2h0QDAsNDAwOzAsNzAwOzEsNDAwOzEsNzAwJmZhbWlseT1Pc3dhbGQ6d2dodEAyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMCZmYW1pbHk9UmFsZXdheTppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZGlzcGxheT1zd2FwJyk7XFxuLyogKntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59ICovXFxuYm9keSB7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBcXG4gICAgLyogaGVpZ2h0OiAxMDB2aDsgKi9cXG4gICAgXFxufVxcblxcbmRpdiB7XFxuICAgIC8qIGJvcmRlci10b3A6IDJweCBzb2xpZCB3aGl0ZTsgKi9cXG4gICAgcGFkZGluZzogNHB4O1xcblxcbn1cXG4jY29udGVudCB7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIC8qIGhlaWdodDogMTAwdmg7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2MywgMTM1LCAxNTIpO1xcbiAgICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHdpZHRoOiA0ODBweDtcXG4gICAgaGVpZ2h0OiAxMDB2aDsgIFxcbn1cXG5cXG4jaGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuI2RlY2tEb2Nre1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG59XFxuXFxuI2RlY2tBcmVhe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBnYXA6IDdweDtcXG59XFxuXFxuI2NhcmREb2Nre1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbiNsb2dvLCAudGl0bGV7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnRpdGxle1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG5cXG4jY2FyZEFyZWF7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjBweCAxZnIgNjBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uZGVjaywgLmJsYW5rRGVja3tcXG4gICAgLyogcG9pbnRlci1ldmVudHM6IG5vbmU7ICovXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDFmcik7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBoZWlnaHQ6IDkwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIC8qIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMCA3cHggOXB4IC03cHg7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoNTMsIDgyLCA5NCwgMC4zKSAxcHggN3B4IDdweCAxcHg7ICovXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAvKiBwYWRkaW5nOiAwcHg7ICovXFxufVxcblxcbi5ibGFua0RlY2t7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICByZ2IoNDYsIDk5LCAxMTEpO1xcbiAgICBcXG59XFxuXFxuLm1lbnV7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcbiAgICBnYXA6IDRweDtcXG59XFxuXFxuI2RlY2tUaXRsZSwgI2NhcmRUaXRsZSwgI2NhcmREYXRlLCAjY2FyZFN0ZXBze1xcbiAgICBtYXJnaW4tdG9wOiA4cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiByZ2IoNjMsIDEzNSwgMTUyKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LWp1c3RpZnk6IGNlbnRlcjtcXG59XFxuXFxuI2RlY2tUaXRsZXtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGdyaWQtY29sdW1uOiAxLzQ7XFxuICAgIGdyaWQtcm93OiAxLzU7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGFxdWE7ICovXFxuICAgIC8qIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7ICovXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgLyogb3BhY2l0eTogNTAlOyAqL1xcbn1cXG5cXG4uc2VsZWN0ZWREZWNrIHtcXG4gICAgYm94LXNoYWRvdzogcmdiKDEwMiwgMjIwLCAyNDEpIDAgMCAzcHggMnB4O1xcbiAgICAvKiBib3gtc2hhZG93OiByZ2JhKDUzLCA4MiwgOTQsIDAuMykgMXB4IDlweCA5cHggMXB4OyAqL1xcbn1cXG5cXG4jYWRkQ2FyZEJ1dHRvbiwgI2FkZERlY2tCdXR0b257XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jYWRkQ2FyZEJ1dHRvbjpob3ZlciwgI2FkZERlY2tCdXR0b246aG92ZXIsIC5uZXh0QnV0dG9uOmhvdmVye1xcbiAgICAvKiB0ZXh0LXNoYWRvdzogIDAgMCAzcHggMnB4LCByZ2IoMTAyLCAxNzMsIDI0MSk7ICovXFxuICAgIHRleHQtc2hhZG93OiAtMXB4IDFweCAycHggcmdiKDEwMiwgMjIwLCAyNDEpLFxcblxcdFxcdFxcdFxcdCAgMXB4IDFweCAycHggcmdiKDEwMiwgMjIwLCAyNDEpLFxcblxcdFxcdFxcdFxcdCAgMXB4IC0xcHggMCByZ2IoMTAyLCAyMjAsIDI0MSksXFxuXFx0XFx0XFx0XFx0ICAtMXB4IC0xcHggMCByZ2IoMTAyLCAyMjAsIDI0MSk7XFxuICAgIFxcbn1cXG4ubmV4dEJ1dHRvbntcXG4gICAganVzdGlmeS1zZWxmOiByaWdodDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogcmdiKDgwLCAxNjMsIDE4Mik7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogNzJweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNmb3J3YXJkQnV0dG9ue1xcbiAgICBqdXN0aWZ5LXNlbGY6IGxlZnQ7XFxuICAgIGdyaWQtY29sdW1uOiAzLzQ7XFxufVxcblxcbiNiYWNrd2FyZEJ1dHRvbntcXG4gICAganVzdGlmeS1zZWxmOiByaWdodDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG59XFxuXFxuXFxuLmNhcmRCaWd7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMjQwcHg7XFxuICAgIGhlaWdodDogMzYwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDUzLCA4MiwgOTQsIDAuMykgMXB4IDlweCA5cHggMXB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgei1pbmRleDogMTtcXG5cXG59XFxuXFxuI3RvcENhcmR7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDgsIDFmcik7XFxuXFxuICAgIC8qIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICovXFxufVxcblxcbi5iaWdQbHVzLCAubGl0dGxlUGx1c3tcXG4gICAgZ3JpZC1jb2x1bW46IDEvNTtcXG4gICAgZ3JpZC1yb3c6IDQvNjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDcycHg7XFxuICAgIGNvbG9yOiByZ2IoNjMsIDEzNSwgMTUyKTtcXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgXFxufVxcblxcbi5saXR0bGVQbHVze1xcbiAgICBncmlkLXJvdzogMy80O1xcbn1cXG5cXG4uc3RhY2swe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDZweDtcXG4gICAgbGVmdDogNjNweDtcXG4gICAgLyogei1pbmRleDogLTE7ICovXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDJkZWcpO1xcbn1cXG5cXG4uc3RhY2sxe1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogM3B4O1xcbiAgICBsZWZ0OiA1OHB4O1xcbiAgICAvKiB6LWluZGV4OiAtMjsgKi9cXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMWRlZyk7XFxufVxcblxcbi5zdGFjazJ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA0cHg7XFxuICAgIGxlZnQ6IDEyMHB4O1xcbiAgICAvKiB6LWluZGV4OiAtMzsgKi9cXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNmRlZyk7XFxufVxcblxcbi5lZGl0U2l6ZXtcXG4gICAgLyogcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDE4MHB4OyAqL1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogNDUwcHg7XFxuICAgIHotaW5kZXg6IDM7XFxufVxcblxcbi5vdmVyTGF5SG9sZGVye1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7IFxcbiAgICBcXG59XFxuXFxuLm92ZXJsYXl7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM3LCAxMDcsIDEwNyk7XFxuICAgIG9wYWNpdHk6IDYwJTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBwYWRkaW5nOiAyMHB4OyBcXG59XFxuXFxuLmZvcm1EaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogNjAwcHg7XFxuICAgIHotaW5kZXg6IDM7XFxufVxcblxcbi5zdWJtaXRCdXR0b25zRGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBnYXA6IDE2cHg7XFxuICAgIGhlaWdodDogNDRweDtcXG59XFxuXFxuLmNhcmRGb3Jte1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDE2cHg7XFxuICAgIHdpZHRoOjMwMHB4O1xcbiAgICBoZWlnaHQ6IDQxMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxLjVmciAxLjVmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDcsIDFmcik7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5pbnB1dCwgLmNoZWNre1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGdyaWQtY29sdW1uOiAxLzU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MiwgMjQyLCAyNDIpO1xcbiAgICBjb2xvcjogcmdiKDgwLCAxNjMsIDE4Mik7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaW5wdXQ6aG92ZXJ7XFxuICAgIGJveC1zaGFkb3c6IHJnYigxMDIsIDE3MywgMjQxKSAwIDAgM3B4IDJweDtcXG4gICAgYm94LXNoYWRvdzogcmdiKDEwMiwgMjIwLCAyNDEpIDAgMCAzcHggMnB4O1xcbn1cXG5cXG4jc3RlcHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvNTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIHRleHQtanVzdGlmeTogbGVmdDtcXG59XFxuXFxuI3N0ZXBIb2xkZXJ7XFxuICAgIGdyaWQtY29sdW1uOiAxLzU7XFxuICAgIGdyaWQtcm93OiAzLzY7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNwcmVTdGVwe1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogMy80O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4jc3RlcDpob3ZlciwgI3ByZVN0ZXA6aG92ZXJ7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi5jYXJkVGl0bGV7XFxuICAgZ3JpZC1yb3c6IDEvMjtcXG4gICBncmlkLWNvbHVtbjogMS81O1xcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2NhcmRTdGVwc3tcXG4gICAgZ3JpZC1jb2x1bW46IDEvNTtcXG4gICAgZ3JpZC1yb3c6IDIvNztcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuI2NhcmREYXRle1xcbiAgICBncmlkLXJvdzogNy84O1xcbiAgICBncmlkLWNvbHVtbjogMS81O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNjYXJkRGVsZXRle1xcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDgvOTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4MCwgMTYzLCAxODIpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC1qdXN0aWZ5OiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2RlY2tEZWxldGV7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiA1LzY7XFxuICAgIHdpZHRoOiA4cHg7XFxuICAgIGhlaWdodDogOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4MCwgMTYzLCAxODIpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogOXB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtanVzdGlmeTogY2VudGVyOyBcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2hlY2t7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgei1pbmRleDogMztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZ3JvdyB7IFxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuMXMgZWFzZS1pbi1vdXQ7IFxcbiAgICB9XFxuICAgIFxcbi5ncm93OmhvdmVyIHsgXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7IFxcbiAgICB9XFxuXFxuLmNoZWNrOmhvdmVye1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbltjb250ZW50ZWRpdGFibGVdIHtcXG4gICAgLyogb3V0bGluZTogMHB4IHNvbGlkIHRyYW5zcGFyZW50OyAqL1xcbiAgfVxcblxcbnVse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDhweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xcbn1cXG5saSB7XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgbGF5b3V0IGZyb20gXCIuL0dVSUxheW91dFwiO1xuaW1wb3J0IHsgZHJhd0RlY2tzLCBzdHlsZUN1cnJlbnR9IGZyb20gXCIuL0dVSURlY2tzXCI7XG5pbXBvcnQgZHJhd0NhcmRzIGZyb20gXCIuL0dVSUNhcmRzXCI7XG5pbXBvcnQgZHJhd05ld0RlY2tGb3JtIGZyb20gXCIuL0dVSU5ld0RlY2tcIjtcbmltcG9ydCB7ZHJhd05ld0NhcmRGb3JtfSBmcm9tIFwiLi9HVUlOZXdDYXJkXCI7XG4vL0RSQVcgcGFnZSwgZGVjayBhcmVhLCBjYXJkIGFyZWEsIGRlZmF1bHQgZGVja3MgYW5kIGRlZmF1bHQgdG9wIGNhcmRcblxubGV0IGlzSW5pdGlhbExvYWQgPSAwO1xuXG5jb25zdCBkcmF3R1VJSW5pdGlhbCA9IChhRGVja0FycmF5LCBhQ3VycmVudERlY2ssIGNhcmRWaWV3VmFsdWUsIGN1cnJlbnRDYXJkKSA9PiB7XG4gICAgbGF5b3V0KCk7XG4gICAgZHJhd0RlY2tzKGFEZWNrQXJyYXkpO1xuICAgIC8vIGNvbnNvbGUubG9nKGBjdXJyZW50IGNhcmQgcGFzc2VkIGluIGlzICR7Y3VycmVudENhcmQuY2FyZE5hbWV9YCk7XG4gICAgZHJhd0NhcmRzKGFDdXJyZW50RGVjaywgY2FyZFZpZXdWYWx1ZSwgY3VycmVudENhcmQpO1xuICAgIFxufVxuXG5jb25zdCBkcmF3R1VJID0gKGFEZWNrQXJyYXksIGFDdXJyZW50RGVjaywgZm9ybVZhbHVlLCBjYXJkVmlld1ZhbHVlLCBjdXJyZW50Q2FyZCkgPT4ge1xuICAgIGRyYXdEZWNrcyhhRGVja0FycmF5KTtcbiAgICBjb25zdCBjdXJyZW50RGVja0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRpdGxlPVwiJHthQ3VycmVudERlY2suZGVja05hbWV9XCJdYCk7XG4gICAgc3R5bGVDdXJyZW50KGN1cnJlbnREZWNrRGl2KTsgIFxuICAgIGRyYXdOZXdEZWNrRm9ybShmb3JtVmFsdWUpOyAgIFxuICAgIGRyYXdDYXJkcyhhQ3VycmVudERlY2ssIGNhcmRWaWV3VmFsdWUsIGN1cnJlbnRDYXJkKTtcbiAgICBkcmF3TmV3Q2FyZEZvcm0oYURlY2tBcnJheSwgZm9ybVZhbHVlKTtcbn1cblxuY29uc3QgbG9hZEdVSSA9IChhRGVja0FycmF5LCBhQ3VycmVudERlY2ssIGZvcm1WYWx1ZSwgY2FyZFZpZXdWYWx1ZSwgY3VycmVudENhcmQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhgaW5pdGlhbCBsb2FkIGlzICR7aXNJbml0aWFsTG9hZH1gKTtcbiAgICBpZihpc0luaXRpYWxMb2FkID09PSAwKXtcbiAgICAgICAgY29uc29sZS5sb2coJ2lzIGluaXRpYWwgbG9hZCcpO1xuICAgICAgICBkcmF3R1VJSW5pdGlhbChhRGVja0FycmF5LCBhQ3VycmVudERlY2ssIGZvcm1WYWx1ZSwgY2FyZFZpZXdWYWx1ZSwgY3VycmVudENhcmQpO1xuICAgICAgICBpc0luaXRpYWxMb2FkID0gMTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgZHJhd0dVSShhRGVja0FycmF5LCBhQ3VycmVudERlY2ssIGZvcm1WYWx1ZSwgY2FyZFZpZXdWYWx1ZSwgY3VycmVudENhcmQpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZEdVSTtcblxuXG5cblxuXG5cbiIsImNvbnN0IGRyYXdGb3J3YXJkQW5kQmFja0J1dHRvbnMgPSAoKSA9PiB7XG4gICAgY29uc3QgY2FyZEFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZEFyZWEnKTtcbiAgICBjb25zdCBmb3J3YXJkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9yd2FyZEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25leHRCdXR0b24nKTtcbiAgICBmb3J3YXJkQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9yd2FyZEJ1dHRvbicpO1xuICAgIGNhcmRBcmVhLmFwcGVuZENoaWxkKGZvcndhcmRCdXR0b24pO1xuICAgIGZvcndhcmRCdXR0b24udGV4dENvbnRlbnQgPSAnPic7XG4gICAgXG4gICAgY29uc3QgYmFja3dhcmRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBiYWNrd2FyZEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25leHRCdXR0b24nKTtcbiAgICBiYWNrd2FyZEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2JhY2t3YXJkQnV0dG9uJyk7XG4gICAgY2FyZEFyZWEuYXBwZW5kQ2hpbGQoYmFja3dhcmRCdXR0b24pO1xuICAgIGJhY2t3YXJkQnV0dG9uLnRleHRDb250ZW50ID0gJzwnO1xufVxuXG5jb25zdCBkcmF3QmFja2dyb3VuZENhcmRzID0gKG51bSkgPT4ge1xuICAgIGNvbnN0IGNhcmRBcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmRBcmVhJyk7XG4gICAgZm9yKGxldCBpID0gMDsgaTxudW07IGkrKyApe1xuICAgIGNvbnN0IGZha2VDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZmFrZUNhcmQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkQmlnJyk7XG4gICAgZmFrZUNhcmQuY2xhc3NMaXN0LmFkZChgc3RhY2ske2l9YCk7XG4gICAgY2FyZEFyZWEuYXBwZW5kQ2hpbGQoZmFrZUNhcmQpO1xuICAgIH1cbn1cblxuY29uc3QgZHJhd1RpdGxlRGl2ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNhcmRUaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmRUaXRsZURpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NhcmRUaXRsZScpO1xuICAgIGNhcmRUaXRsZURpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmRUaXRsZScpO1xuICAgIGNhcmRUaXRsZURpdi5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsICd0cnVlJyk7XG4gICAgXG4gICAgcmV0dXJuIGNhcmRUaXRsZURpdjtcbn1cbmNvbnN0IGRyYXdTdGVwc0RpdiA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhgZHJhd2luZyBzdGVwIGRpdmApXG4gICAgY29uc3QgY2FyZFN0ZXBzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBjYXJkU3RlcHNEaXYuc2V0QXR0cmlidXRlKCdpZCcsICdjYXJkU3RlcHMnKTtcbiAgICByZXR1cm4gY2FyZFN0ZXBzRGl2O1xufVxuXG5leHBvcnQgY29uc3QgZHJhd0NhcmRTdGVwID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdkcmF3aW5nIHRoZSBzdGVwIScpXG4gICAgY29uc3Qgc3RlcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgc3RlcERpdi5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsICd0cnVlJyk7XG4gICAgc3RlcERpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3N0ZXBEaXYnKTtcbiAgICBjb25zdCBjYXJkU3RlcHNEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZFN0ZXBzJyk7XG4gICAgY2FyZFN0ZXBzRGl2LmFwcGVuZENoaWxkKHN0ZXBEaXYpO1xuICAgIHJldHVybiBzdGVwRGl2O1xufVxuY29uc3QgZHJhd0RhdGVEaXYgPSAoKSA9PiB7XG4gICAgY29uc3QgY2FyZERhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkRGF0ZURpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NhcmREYXRlJyk7XG4gICAgY2FyZERhdGVEaXYuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCAndHJ1ZScpO1xuICAgIHJldHVybiBjYXJkRGF0ZURpdjtcbn1cbmNvbnN0IGRyYXdEZWxldGVCdXR0b24gPSAoKSA9PiB7XG4gICAgY29uc3QgY2FyZERlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmREZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdjYXJkRGVsZXRlJyk7XG4gICAgXG4gICAgY2FyZERlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdncm93Jyk7XG4gICAgY2FyZERlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICctJ1xuICAgIHJldHVybiBjYXJkRGVsZXRlQnV0dG9uO1xufVxuXG5jb25zdCBwb3B1bGF0ZVN0ZXBzID0gKGN1cnJlbnRDYXJkKSA9PiB7XG4gICAgY29uc3QgdGhlQ2FyZCA9IGN1cnJlbnRDYXJkO1xuICAgIGlmKHRoZUNhcmQuY2FyZFN0ZXBzLmxlbmd0aCA+PSAxKXtcbiAgICAgICAgY29uc29sZS5sb2coJ3RoZXJlIGFyZSBzdGVwKHMpISBEUkFXIFNURVAgRElWKHMpJyk7XG4gICAgICAgIHRoZUNhcmQuY2FyZFN0ZXBzLmZvckVhY2goc3RlcFN0cmluZyA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoZUNhcmQuY2FyZFN0ZXBzLmluZGV4T2Yoc3RlcFN0cmluZyk7XG4gICAgICAgICAgICBjb25zdCBhU3RlcCA9IGRyYXdDYXJkU3RlcCgpO1xuICAgICAgICAgICAgYVN0ZXAuc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgYCR7aW5kZXh9YCk7XG4gICAgICAgICAgICBhU3RlcC50ZXh0Q29udGVudCA9IHN0ZXBTdHJpbmc7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0aGUgYXJlIG5vIHN0ZXBzISBEUkFXIGVtcHR5IFNURVAgRElWJyk7XG4gICAgICAgIGRyYXdDYXJkU3RlcCgpO1xuICAgIH1cbn1cblxuY29uc3QgZHJhd1RvcENhcmQgPSAoY3VycmVudENhcmQpID0+IHtcbiAgICBjb25zdCBjYXJkQXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkQXJlYScpO1xuICAgIGNvbnN0IGNhcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAndG9wQ2FyZCcpO1xuICAgIGNhcmREaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkQmlnJyk7XG4gICAgY2FyZEFyZWEuYXBwZW5kQ2hpbGQoY2FyZERpdik7XG4gICAgY29uc3QgY2FyZFRpdGxlRGl2ID0gZHJhd1RpdGxlRGl2KCk7XG4gICAgY2FyZERpdi5hcHBlbmRDaGlsZChjYXJkVGl0bGVEaXYpO1xuICAgIGNhcmRUaXRsZURpdi50ZXh0Q29udGVudCA9IGN1cnJlbnRDYXJkLmNhcmROYW1lO1xuICAgIGNvbnN0IGNhcmRTdGVwc0RpdiA9IGRyYXdTdGVwc0RpdigpO1xuICAgIGNhcmREaXYuYXBwZW5kQ2hpbGQoY2FyZFN0ZXBzRGl2KTtcbiAgICBwb3B1bGF0ZVN0ZXBzKGN1cnJlbnRDYXJkKTtcbiAgICBjb25zdCBjYXJkRGF0ZURpdiA9IGRyYXdEYXRlRGl2KCk7XG4gICAgY2FyZERpdi5hcHBlbmRDaGlsZChjYXJkRGF0ZURpdik7XG4gICAgY2FyZERhdGVEaXYudGV4dENvbnRlbnQgPSBgRHVlOiAke2N1cnJlbnRDYXJkLmNhcmREYXRlfWA7XG4gICAgY29uc3QgY2FyZERlbGV0ZUJ1dHRvbiA9IGRyYXdEZWxldGVCdXR0b24oKTtcbiAgICBjYXJkRGl2LmFwcGVuZENoaWxkKGNhcmREZWxldGVCdXR0b24pO1xuICAgIHJldHVybiBjYXJkRGl2O1xufVxuXG5jb25zdCBkcmF3QmxhbmtUb3BDYXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IGNhcmRBcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmRBcmVhJyk7XG4gICAgY29uc3QgY2FyZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmREaXYuc2V0QXR0cmlidXRlKCdpZCcsICd0b3BDYXJkJyk7XG4gICAgY2FyZERpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmRCaWcnKTtcbiAgICBjYXJkQXJlYS5hcHBlbmRDaGlsZChjYXJkRGl2KTtcbiAgICBjb25zdCBjYXJkUGx1cyA9IGRyYXdUaXRsZURpdigpO1xuICAgIGNhcmRQbHVzLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2FyZFBsdXMnKVxuICAgIGNvbnNvbGUubG9nKCdtYWtpbmcgcGx1cyBjYXJkJylcbiAgICBjYXJkUGx1cy50ZXh0Q29udGVudCA9ICcrJztcbiAgICBjYXJkUGx1cy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2JpZ1BsdXMnKTtcbiAgICBjYXJkUGx1cy5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsIGZhbHNlKTtcbiAgICBjYXJkUGx1cy5jbGFzc0xpc3QuYWRkKCdncm93Jyk7XG4gICAgY2FyZERpdi5hcHBlbmRDaGlsZChjYXJkUGx1cyk7XG59XG5cbmNvbnN0IGRyYXdCbGFua1N0YWNrID0gKCkgPT4ge1xuICAgIGRyYXdGb3J3YXJkQW5kQmFja0J1dHRvbnMoKTtcbiAgICBkcmF3QmFja2dyb3VuZENhcmRzKDIpO1xuICAgIGRyYXdCbGFua1RvcENhcmQoKTtcbn1cblxuY29uc3QgZHJhd0NhcmRTdGFjayA9IChjdXJyZW50Q2FyZCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGBkcmF3aW5nIGNhcmQgc3RhY2tgKTtcbiAgICBkcmF3Rm9yd2FyZEFuZEJhY2tCdXR0b25zKCk7XG4gICAgZHJhd0JhY2tncm91bmRDYXJkcygyKTtcbiAgICBkcmF3VG9wQ2FyZChjdXJyZW50Q2FyZCk7ICAgXG59XG5cbmNvbnN0IGRyYXdDYXJkcyA9IChjdXJyZW50RGVjaywgIGNhcmRWaWV3VmFsdWUsIGN1cnJlbnRDYXJkKSA9PiB7XG4gICAgaWYoY2FyZFZpZXdWYWx1ZSA9PT0gMCkge1xuICAgICAgICBpZihjdXJyZW50Q2FyZCAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIGRyYXdDYXJkU3RhY2soY3VycmVudENhcmQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UoZHJhd0JsYW5rU3RhY2soKSk7XG4gICAgICAgIFxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBkcmF3Q2FyZHM7XG5cblxuY29uc3QgZHJhd0FsbENhcmRzU3RhY2sgPSAoYURlY2spID0+IHtcbiAgICBjb25zdCBjYXJkRG9jayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkRG9jaycpO1xuICAgIGNvbnN0IGNhcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnY2FyZEJpZycpO1xuICAgIGNhcmREb2NrLmFwcGVuZENoaWxkKGNhcmREaXYpO1xuICAgIGNvbnNvbGUubG9nKGFEZWNrLmNhcmRzQXJyYXlbYURlY2suYm9va21hcmtdKTtcbiAgICBjb25zdCB0aGlzQm9va21hcmsgPSBhRGVjay5ib29rbWFyaztcbiAgICBjb25zdCB0aGVDYXJkID0gYURlY2suY2FyZHNBcnJheVt0aGlzQm9va21hcmtdLmNhcmROYW1lO1xuXG4gICAgY29uc3QgY2FyZFRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyZFRpdGxlRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnY2FyZFRpdGxlJyk7XG4gICAgY2FyZERpdi5hcHBlbmRDaGlsZChjYXJkVGl0bGVEaXYpO1xuICAgIGNhcmRUaXRsZURpdi50ZXh0Q29udGVudCA9IHRoZUNhcmQuQ2FyZE5hbWU7XG59XG5cbmNvbnN0IHBvcHVsYXRlQ2FyZCA9IChjdXJyZW50RGVjaykgPT4ge1xuICAgIGVyYXNlU3RlcHMoKTtcbiAgICBjb25zdCB0aGVDYXJkID0gZ2V0Qm9va21hcmtlZENhcmQoY3VycmVudERlY2spO1xuICAgIGNvbnNvbGUubG9nKCdwdW9wdWxhdGluZyB3aXRoOiAnICsgdGhlQ2FyZCk7XG4gICAgY29uc3QgY2FyZFRpdGxlRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmRUaXRsZScpO1xuICAgIGNhcmRUaXRsZURpdi5jbGFzc0xpc3QucmVtb3ZlKCdiaWdQbHVzJyk7XG4gICAgY2FyZFRpdGxlRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2dyb3cnKTtcbiAgICBjYXJkVGl0bGVEaXYuY2xhc3NMaXN0LmFkZCgnY2FyZFRpdGxlJyk7XG4gICAgaWYodGhlQ2FyZCAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgY2FyZFRpdGxlRGl2LnRleHRDb250ZW50ID0gdGhlQ2FyZC5jYXJkTmFtZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIFxuICAgIH1cbiAgICBjb25zdCBjYXJkRGF0ZURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkRGF0ZScpO1xuICAgIGlmKHRoZUNhcmQgIT09IHVuZGVmaW5lZCl7XG4gICAgICAgIGNhcmREYXRlRGl2LnRleHRDb250ZW50ID0gYER1ZSBkYXRlOiAke3RoZUNhcmQuY2FyZERhdGV9YDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNhcmREYXRlRGl2LnRleHRDb250ZW50ID0gJyc7XG4gICAgfVxuXG4gICAgY29uc3QgY2FyZFN0ZXBzRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmRTdGVwcycpO1xuICAgIGNvbnNvbGUubG9nKGNhcmRTdGVwc0Rpdik7XG4gICAgY29uc29sZS5sb2codHlwZW9mIGNhcmRTdGVwc0Rpdik7XG4gICAgaWYodGhlQ2FyZCAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgaWYodGhlQ2FyZC5jYXJkU3RlcHMubGVuZ3RoID4gMSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygndGhlcmUgYXJlIHN0ZXAocykhIERSQVcgU1RFUCBESVYocyknKTtcbiAgICAgICAgICAgIHRoZUNhcmQuY2FyZFN0ZXBzLmZvckVhY2goc3RlcFN0cmluZyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYVN0ZXAgPSBkcmF3Q2FyZFN0ZXAoKTtcbiAgICAgICAgICAgICAgICBhU3RlcC50ZXh0Q29udGVudCA9IHN0ZXBTdHJpbmc7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygndGhlIGFyZSBubyBzdGVwcyEgRFJBVyBlbXB0eSBTVEVQIERJVicpO1xuICAgICAgICAgICAgZHJhd0NhcmRTdGVwKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNhcmRTdGVwc0Rpdi50ZXh0Q29udGVudCA9ICcnO1xuICAgIH1cbiAgICBcbn1cblxuIiwiaW1wb3J0IGRlY2sgZnJvbSBcIi4uL2xvZ2ljL2RlY2tcIjtcbmltcG9ydCBsYXlvdXQgZnJvbSBcIi4vR1VJTGF5b3V0XCI7XG5cbmV4cG9ydCBjb25zdCBzdHlsZUN1cnJlbnQgPSAoY3VycmVudERlY2tEaXYpID0+IHtcbiAgICBjdXJyZW50RGVja0Rpdi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZERlY2snKTsgIFxufVxuXG5jb25zdCByZW1vdmVTZWxlY3RlZFN0eWxlID0gKHByZXZpb3VzRGVja0RpdikgPT4ge1xuICAgIHByZXZpb3VzRGVja0Rpdi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZERlY2snKTtcbn1cblxuY29uc3Qgc3R5bGVEZWNrcyA9IChjdXJyZW50RGVja0RpdiwgcHJldmlvdXNEZWNrRGl2KSA9PiB7XG4gICAgcmVtb3ZlU2VsZWN0ZWRTdHlsZShwcmV2aW91c0RlY2tEaXYpO1xuICAgIHN0eWxlQ3VycmVudChjdXJyZW50RGVja0Rpdik7XG59XG5cbmNvbnN0IGRyYXdCbGFua0RlY2sgPSAoKSA9PiB7XG4gICAgY29uc3QgYmxhbmtEZWNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYmxhbmtEZWNrRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYmxhbmtEZWNrJyk7XG4gICAgZGVja0FyZWEuYXBwZW5kQ2hpbGQoYmxhbmtEZWNrRGl2KTtcblxuICAgIGNvbnN0IGxpdHRsZVBsdXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsaXR0bGVQbHVzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbGl0dGxlUGx1cycpO1xuICAgIGxpdHRsZVBsdXMuY2xhc3NMaXN0LmFkZCgnZ3JvdycpO1xuICAgIGxpdHRsZVBsdXMudGV4dENvbnRlbnQgPSAnKyc7XG4gICAgbGl0dGxlUGx1cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dEZWNrRm9ybSlcbiAgICBibGFua0RlY2tEaXYuYXBwZW5kQ2hpbGQobGl0dGxlUGx1cyk7XG59XG5cbmNvbnN0IGVyYXNlQmxhbmtEZWNrID0gKCkgPT4ge1xuICAgIGNvbnN0IGJsYW5rRGVja0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2JsYW5rRGVjaycpO1xuICAgIGJsYW5rRGVja0RpdlswXS5yZW1vdmUoKTtcbn1cblxuY29uc3QgZmlyc3REcmF3RGVja3MgPSAoYXJyYXlPZkRlY2tzKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coJ3J1bm5pbmcgZHJhd0RlY2tzJylcbiAgICAvLyBjb25zb2xlLmxvZyhkZWNrQXJyYXlbMV0pO1xuICAgIGFycmF5T2ZEZWNrcy5mb3JFYWNoKGFEZWNrID0+IHtcbiAgICAgICAgY29uc3QgZGVja0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGVja0Rpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RlY2snKTtcbiAgICAgICAgICAgIC8vIGRlY2tEaXYuY2xhc3NMaXN0LmFkZCgnZ3JvdycpO1xuICAgICAgICAgICAgZGVja0FyZWEuYXBwZW5kQ2hpbGQoZGVja0Rpdik7XG5cbiAgICAgICAgICAgIGNvbnN0IGRlY2tUaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGVja1RpdGxlRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVja1RpdGxlJyk7XG4gICAgICAgICAgICBkZWNrVGl0bGVEaXYuY2xhc3NMaXN0LmFkZCgnZ3JvdycpO1xuICAgICAgICAgICAgZGVja0Rpdi5hcHBlbmRDaGlsZChkZWNrVGl0bGVEaXYpO1xuICAgICAgICAgICAgZGVja1RpdGxlRGl2LnRleHRDb250ZW50ID0gYURlY2suZGVja05hbWU7XG5cbiAgICAgICAgICAgIGRlY2tEaXYuc2V0QXR0cmlidXRlKCdkYXRhLXRpdGxlJywgYCR7YURlY2suZGVja05hbWV9YCk7XG5cbiAgICAgICAgICAgIGRlY2tEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB1cGRhdGVDdXJyZW50RGVjayk7XG4gICAgICAgICAgICBkZWNrVGl0bGVEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB1cGRhdGVDdXJyZW50RGVjayk7XG4gICAgICAgICAgICBkZWNrVGl0bGVEaXYuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBzYXZlRGVja1RpdGxlKTtcblxuICAgICAgICAgICAgaWYoKGFycmF5T2ZEZWNrcy5pbmRleE9mKGFEZWNrKSkgIT09IDApe1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlY2tEZWxldGVCdXR0b24gPSBkcmF3RGVja0RlbGV0ZUJ1dHRvbigpO1xuICAgICAgICAgICAgICAgIGRlY2tEaXYuYXBwZW5kQ2hpbGQoZGVja0RlbGV0ZUJ1dHRvbik7XG4gICAgICAgICAgICAgICAgZGVja0RlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdncm93Jyk7XG4gICAgICAgICAgICAgICAgZGVja1RpdGxlRGl2LnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgJ3RydWUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgZHJhd0JsYW5rRGVjaygpO1xuICAgIHVwZGF0ZUN1cnJlbnREZWNrRGl2KCk7XG4gICAgLy8gY29uc29sZS5sb2coY3VycmVudERlY2tEaXYpO1xuXG59XG5cblxuY29uc3QgZHJhd0RlY2tEZWxldGVCdXR0b24gPSAoKSA9PiB7XG4gICAgY29uc3QgZGVja0RlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlY2tEZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdkZWNrRGVsZXRlJyk7XG4gICAgZGVja0RlbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RlY2tEZWxldGUnKTtcbiAgICBkZWNrRGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gJy0nXG4gICAgcmV0dXJuIGRlY2tEZWxldGVCdXR0b247XG59XG5cbmV4cG9ydCBjb25zdCBkcmF3RGVja3MgPSAoYXJyYXlPZkRlY2tzKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3J1bm5pbmcgZHJhd0RlY2tzJylcbiAgICBjb25zdCBkZWNrQXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWNrQXJlYScpO1xuICAgIC8vIGNvbnNvbGUubG9nKGRlY2tBcnJheVsxXSk7XG4gICAgYXJyYXlPZkRlY2tzLmZvckVhY2goYURlY2sgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVja0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGVja0Rpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RlY2snKTtcbiAgICAgICAgICAgIGRlY2tBcmVhLmFwcGVuZENoaWxkKGRlY2tEaXYpO1xuXG4gICAgICAgICAgICBjb25zdCBkZWNrVGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRlY2tUaXRsZURpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RlY2tUaXRsZScpO1xuICAgICAgICAgICAgZGVja1RpdGxlRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGVja1RpdGxlJyk7XG4gICAgICAgICAgICBkZWNrRGl2LmFwcGVuZENoaWxkKGRlY2tUaXRsZURpdik7XG4gICAgICAgICAgICBkZWNrVGl0bGVEaXYudGV4dENvbnRlbnQgPSBhRGVjay5kZWNrTmFtZTtcblxuICAgICAgICAgICAgZGVja0Rpdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGl0bGUnLCBgJHthRGVjay5kZWNrTmFtZX1gKTtcblxuICAgICAgICAgICAgLy8gY29uc3QgZWRpdERlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIC8vIGVkaXREZWNrLnNldEF0dHJpYnV0ZSgnaWQnLCAnZWRpdERlY2snKVxuICAgICAgICAgICAgLy8gZGVja0Rpdi5hcHBlbmRDaGlsZChlZGl0RGVjaylcbiAgICAgICAgICAgIC8vIGVkaXREZWNrLnRleHRDb250ZW50ID0gJ0VkaXQnO1xuXG4gICAgICAgICAgICAvL2RlY2tEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB1cGRhdGVDdXJyZW50RGVjayk7XG4gICAgICAgICAgICAvLyBkZWNrVGl0bGVEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB1cGRhdGVDdXJyZW50RGVjayk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIGVkaXREZWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0Zvcm0pO1xuICAgICAgICBpZigoYXJyYXlPZkRlY2tzLmluZGV4T2YoYURlY2spKSAhPT0gMCl7XG4gICAgICAgICAgICBjb25zdCBkZWNrRGVsZXRlQnV0dG9uID0gZHJhd0RlY2tEZWxldGVCdXR0b24oKTtcbiAgICAgICAgICAgIGRlY2tEaXYuYXBwZW5kQ2hpbGQoZGVja0RlbGV0ZUJ1dHRvbik7XG4gICAgICAgICAgICBkZWNrVGl0bGVEaXYuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCAndHJ1ZScpO1xuICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAvLyBlcmFzZUJsYW5rRGVjaygpO1xuICAgIC8vIGRyYXdCbGFua0RlY2soKTtcbiAgICAvLyB1cGRhdGVDdXJyZW50RGVja0RpdigpO1xuICAgIC8vIHN0eWxlQ3VycmVudCgpO1xuICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnREZWNrRGl2KTtcblxufSIsImNvbnN0IGxheW91dCA9ICgpID0+e1xuICAgIGNvbnNvbGUubG9nKGBkcmF3aW5nIGxheW91dGApO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGVudCcpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFpbmVyJyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgIFxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hlYWRlcicpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIFxuICAgIGNvbnN0IGRlY2tEb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVja0RvY2suc2V0QXR0cmlidXRlKCdpZCcsICdkZWNrRG9jaycpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWNrRG9jayk7XG4gICAgXG4gICAgY29uc3QgY2FyZERvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkRG9jay5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NhcmREb2NrJyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmREb2NrKTtcbiAgICBcbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbG9nby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xvZ28nKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nbyk7XG4gICAgbG9nby50ZXh0Q29udGVudCA9ICdTaHVmZmxlJztcbiAgICBcbiAgICBjb25zdCBkZWNrRG9ja01lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZWNrRG9ja01lbnUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51Jyk7XG4gICAgZGVja0RvY2suYXBwZW5kQ2hpbGQoZGVja0RvY2tNZW51KTtcbiAgICBcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGl0bGUnKTtcbiAgICBkZWNrRG9ja01lbnUuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICBkaXYudGV4dENvbnRlbnQgPSAnRGVja3MnO1xuICAgIFxuICAgIGNvbnN0IGFkZERlY2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGREZWNrQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkRGVja0J1dHRvbicpO1xuICAgIGFkZERlY2tCdXR0b24uc2V0QXR0cmlidXRlKCdjbGFzcycsICd0aXRsZScpXG4gICAgYWRkRGVja0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdncm93Jyk7XG4gICAgZGVja0RvY2tNZW51LmFwcGVuZENoaWxkKGFkZERlY2tCdXR0b24pO1xuICAgIGFkZERlY2tCdXR0b24udGV4dENvbnRlbnQgPSAnKyc7XG4gICAgXG4gICAgY29uc3QgZGVja0FyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZWNrQXJlYS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RlY2tBcmVhJyk7XG4gICAgZGVja0RvY2suYXBwZW5kQ2hpbGQoZGVja0FyZWEpO1xuICAgIFxuICAgIGNvbnN0IGNhcmREb2NrTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmREb2NrTWVudS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUnKTtcbiAgICBjYXJkRG9jay5hcHBlbmRDaGlsZChjYXJkRG9ja01lbnUpO1xuICAgIFxuICAgIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RpdGxlJyk7XG4gICAgY2FyZERvY2tNZW51LmFwcGVuZENoaWxkKGRpdik7XG4gICAgZGl2LnRleHRDb250ZW50ID0gJ0NhcmRzJztcbiAgICBcbiAgICBjb25zdCBhZGRDYXJkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWRkQ2FyZEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZENhcmRCdXR0b24nKTtcbiAgICBhZGRDYXJkQnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGl0bGUnKVxuICAgIGFkZENhcmRCdXR0b24uY2xhc3NMaXN0LmFkZCgnZ3JvdycpO1xuICAgIGNhcmREb2NrTWVudS5hcHBlbmRDaGlsZChhZGRDYXJkQnV0dG9uKTtcbiAgICBhZGRDYXJkQnV0dG9uLnRleHRDb250ZW50ID0gJysnO1xuICAgIFxuICAgIGNvbnN0IGNhcmRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyZEFyZWEuc2V0QXR0cmlidXRlKCdpZCcsICdjYXJkQXJlYScpO1xuICAgIGNhcmREb2NrLmFwcGVuZENoaWxkKGNhcmRBcmVhKTtcbiAgICBcbiAgICByZXR1cm4ge2NvbnRlbnQsIGRlY2tBcmVhLCBjYXJkQXJlYX07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxheW91dDtcbiIsImV4cG9ydCBjb25zdCBkcmF3T3ZlcmxheSA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnZHJhd2luZyBPdmVybGF5Jyk7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29uc3Qgb3ZlckxheUhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG92ZXJMYXlIb2xkZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb250ZW50Jyk7XG4gICAgb3ZlckxheUhvbGRlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ292ZXJMYXlIb2xkZXInKTtcbiAgICBvdmVyTGF5SG9sZGVyLmNsYXNzTGlzdC5hZGQoJ292ZXJMYXlIb2xkZXInKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG92ZXJMYXlIb2xkZXIpO1xuICAgIFxuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvdmVybGF5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnb3ZlcmxheScpO1xuICAgIG92ZXJMYXlIb2xkZXIuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG4gICAgXG4gICAgY29uc3QgZm9ybURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1EaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb3JtRGl2Jyk7XG4gICAgb3ZlckxheUhvbGRlci5hcHBlbmRDaGlsZChmb3JtRGl2KTtcbiAgICBcbiAgICBjb25zdCBuZXdGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3Rm9ybS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmRCaWcnKTtcbiAgICBuZXdGb3JtLmNsYXNzTGlzdC5hZGQoJ2VkaXRTaXplJyk7XG4gICAgbmV3Rm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25ld0Zvcm0nKTtcbiAgICBmb3JtRGl2LmFwcGVuZENoaWxkKG5ld0Zvcm0pO1xuXG4gICAgY29uc3Qgc3VibWl0QnV0dG9uc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHN1Ym1pdEJ1dHRvbnNEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdzdWJtaXRCdXR0b25zRGl2Jyk7XG4gICAgZm9ybURpdi5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b25zRGl2KTtcbiAgICBcbiAgICBjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYW5jZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjaGVjaycpO1xuICAgIGNhbmNlbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NhbmNlbCcpO1xuICAgIGNhbmNlbC5jbGFzc0xpc3QuYWRkKCdncm93Jyk7XG4gICAgc3VibWl0QnV0dG9uc0Rpdi5hcHBlbmRDaGlsZChjYW5jZWwpO1xuICAgIGNhbmNlbC50ZXh0Q29udGVudCA9ICfinJYnO1xuICAgIFxuICAgIGNvbnN0IGNoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2hlY2suc2V0QXR0cmlidXRlKCdjbGFzcycsICdjaGVjaycpO1xuICAgIHN1Ym1pdEJ1dHRvbnNEaXYuYXBwZW5kQ2hpbGQoY2hlY2spO1xuICAgIGNoZWNrLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2hlY2snKTtcbiAgICBjaGVjay5jbGFzc0xpc3QuYWRkKCdncm93Jyk7XG4gICAgY2hlY2sudGV4dENvbnRlbnQgPSAn4pyTJztcbn1cblxuY29uc3Qgc2V0RGVja09wdGlvbnMgPSAoZGVja0FycmF5LCBjYXJkRGVjaykgPT4ge1xuICAgIGRlY2tBcnJheS5mb3JFYWNoKGRlY2tFbGVtZW50ID0+IHtcbiAgICAgICAgY29uc3QgZGVja09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBjYXJkRGVjay5hcHBlbmRDaGlsZChkZWNrT3B0aW9uKTtcbiAgICAgICAgZGVja09wdGlvbi52YWx1ZSA9IGRlY2tFbGVtZW50LmRlY2tOYW1lO1xuICAgICAgICBkZWNrT3B0aW9uLnRleHRDb250ZW50ID0gZGVja0VsZW1lbnQuZGVja05hbWU7XG4gICAgfSlcbn1cblxuY29uc3QgYWRkTmV3U3RlcEZpZWxkID0gKGUpID0+IHtcbiAgICBpZihlLmtleUNvZGUgPT09IDEzKXtcbiAgICAgICAgY29uc29sZS5sb2coYHByZXNzZWQgRU5URVJgKTtcbiAgICAgICAgY29uc3Qgc3RlcCA9IGRyYXdTdGVwKCk7XG4gICAgICAgIHN0ZXAuZm9jdXMoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBkcmF3U3RlcCA9ICgpID0+IHtcbiAgICBjb25zdCBzdGVwSG9sZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0ZXBIb2xkZXInKTtcbiAgICBjb25zdCBzdGVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBzdGVwLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc3RlcCcpO1xuICAgIHN0ZXAuY2xhc3NMaXN0LmFkZCgnaW5wdXQnKTtcbiAgICBzdGVwSG9sZGVyLmFwcGVuZENoaWxkKHN0ZXApO1xuICAgIHN0ZXAuc2V0QXR0cmlidXRlKCdpZCcsICdzdGVwJyk7XG4gICAgc3RlcC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIHN0ZXAuc2V0QXR0cmlidXRlKCduYW1lJywgJ3N0ZXAnKTtcbiAgICBzdGVwLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnKyBzdGVwJyk7XG4gICAgc3RlcC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGFkZE5ld1N0ZXBGaWVsZCk7XG4gICAgXG4gICAgcmV0dXJuIHN0ZXA7XG59XG5cbmNvbnN0IGRyYXdDYXJkRm9ybUZpZWxkcyA9IChkZWNrQXJyYXkpID0+IHsgIFxuICAgIGNvbnN0IG5ld0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3Rm9ybScpO1xuICAgIGNvbnN0IGNhcmRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGNhcmRGb3JtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZEZvcm0nKTtcbiAgICBuZXdGb3JtLmFwcGVuZENoaWxkKGNhcmRGb3JtKTtcbiAgICBcbiAgICBjb25zdCBjYXJkVGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY2FyZFRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkVGl0bGVJbnB1dCcpO1xuICAgIGNhcmRUaXRsZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2lucHV0Jyk7XG4gICAgY2FyZEZvcm0uYXBwZW5kQ2hpbGQoY2FyZFRpdGxlSW5wdXQpO1xuICAgIGNhcmRUaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnY2FyZC10aXRsZScpO1xuICAgIGNhcmRUaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgY2FyZFRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2NhcmQtdGl0bGUnKTtcbiAgICBjYXJkVGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1RpdGxlJyk7XG4gICAgXG4gICAgY29uc3QgY2FyZERlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBjYXJkRGVjay5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmREZWNrJyk7XG4gICAgY2FyZERlY2suc2V0QXR0cmlidXRlKCdtdWx0aXBsZScsICdtdWx0aXBsZScpO1xuICAgIGNhcmREZWNrLmNsYXNzTGlzdC5hZGQoJ2lucHV0Jyk7XG4gICAgY2FyZEZvcm0uYXBwZW5kQ2hpbGQoY2FyZERlY2spO1xuICAgIGNhcmREZWNrLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2FyZERlY2snKTtcbiAgICBjYXJkRGVjay5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnY2FyZERlY2snKTtcblxuICAgIHNldERlY2tPcHRpb25zKGRlY2tBcnJheSwgY2FyZERlY2spO1xuICAgIFxuICAgIGNvbnN0IHN0ZXBIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzdGVwSG9sZGVyLmNsYXNzTGlzdC5hZGQoJ3N0ZXBIb2xkZXInKTtcbiAgICBzdGVwSG9sZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3RlcEhvbGRlcicpO1xuICAgIGNhcmRGb3JtLmFwcGVuZENoaWxkKHN0ZXBIb2xkZXIpO1xuICAgIFxuICAgIGRyYXdTdGVwKCk7XG4gICAgXG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RhdGUnKTtcbiAgICBkYXRlLmNsYXNzTGlzdC5hZGQoJ2lucHV0Jyk7XG4gICAgY2FyZEZvcm0uYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RhdGUnKTtcbiAgICBkYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZGF0ZScpO1xuICAgIGRhdGUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIGBgKTtcbiAgICBcbn1cblxuY29uc3QgcmVzZXREZWNrT3B0aW9ucyA9ICgpID0+IHtcbiAgICBjb25zdCBkZWNrU2VsZWN0b3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZERlY2snKTtcbiAgICBBcnJheS5mcm9tKGRlY2tTZWxlY3RvcikuZm9yRWFjaChkZWNrRWxlbWVudCA9PiB7XG4gICAgICAgIGRlY2tFbGVtZW50LnJlbW92ZSgpO1xuICAgIH0pXG59XG5cblxuXG5jb25zdCByZXNldEZvcm1DYXJkID0gKCkgPT4ge1xuICAgIGxldCBhRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmQtdGl0bGUnKTtcbiAgICBhRGl2LnZhbHVlID0gJyc7XG4gICAgYURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGVwJyk7XG4gICAgYURpdi52YWx1ZSA9ICcnO1xuICAgIGFEaXYuY2FyZERhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpLnZhbHVlO1xuICAgIGFEaXYudmFsdWUgPSAnJztcbn1cblxuY29uc3Qgc2hvd0NhcmRGb3JtID0gKCkgPT4ge1xuICAgIHNldERlY2tPcHRpb25zKCk7XG4gICAgc2hvd0Zvcm0oKTtcbiAgICBmb3JtVHlwZSA9ICdjYXJkJztcbiAgICBsZXQgYURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGVwJyk7XG4gICAgYURpdi5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgIGFEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpO1xuICAgIGFEaXYuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICBhRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmREZWNrJyk7XG4gICAgYURpdi5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgIGFEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZC10aXRsZScpO1xuICAgIGFEaXYuc3R5bGUuZ3JpZFJvdyA9ICcxLzInO1xufVxuXG5leHBvcnQgY29uc3QgZHJhd05ld0NhcmRGb3JtID0gKGRlY2tBcnJheSwgdmFsdWUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhgZHJhd2luZyBuZXcgY2FyZCBmb3JtIHZhbHVlIGlzICR7dmFsdWV9YClcbiAgICBpZih2YWx1ZSA9PT0gMil7XG4gICAgICAgIGRyYXdPdmVybGF5KCk7XG4gICAgICAgIGRyYXdDYXJkRm9ybUZpZWxkcyhkZWNrQXJyYXkpO1xuICAgIH1cbn1cblxuXG5cbiIsImltcG9ydCB7IGRyYXdPdmVybGF5IH0gZnJvbSBcIi4vR1VJTmV3Q2FyZFwiO1xuXG5cbmNvbnN0IGRyYXdEZWNrRm9ybUZpZWxkcyA9ICgpID0+e1xuICAgIGNvbnN0IG5ld0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3Rm9ybScpO1xuICAgIGNvbnN0IGRlY2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGRlY2tGb3JtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGVja0Zvcm0nKTtcbiAgICBkZWNrRm9ybS5zZXRBdHRyaWJ1dGUoJ29uU3VibWl0JywgJ3JldHVybiBmYWxzZTsnKTtcbiAgICBuZXdGb3JtLmFwcGVuZENoaWxkKGRlY2tGb3JtKTtcbiAgICBjb25zdCBuZXdEZWNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIG5ld0RlY2tUaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RlY2tUaXRsZUlucHV0Jyk7XG4gICAgbmV3RGVja1RpdGxlLmNsYXNzTGlzdC5hZGQoJ2lucHV0Jyk7XG4gICAgZGVja0Zvcm0uYXBwZW5kQ2hpbGQobmV3RGVja1RpdGxlKTtcbiAgICBuZXdEZWNrVGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICdkZWNrLXRpdGxlJyk7XG4gICAgbmV3RGVja1RpdGxlLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgbmV3RGVja1RpdGxlLnNldEF0dHJpYnV0ZSgnbmFtZScsICdkZWNrLXRpdGxlJyk7XG4gICAgbmV3RGVja1RpdGxlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVGl0bGUnKTtcbiAgICBuZXdEZWNrVGl0bGUuc3R5bGUuZ3JpZFJvdyA9ICczLzQnO1xufVxuXG5jb25zdCBkcmF3TmV3RGVja0Zvcm0gPSAodmFsdWUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhgZHJhd2luZyBuZXcgZGVjayBmb3JtIHZhbHVlIGlzICR7dmFsdWV9YClcbiAgICBpZih2YWx1ZSA9PT0gMSl7XG4gICAgICAgIGRyYXdPdmVybGF5KCk7XG4gICAgICAgIGRyYXdEZWNrRm9ybUZpZWxkcygpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZHJhd05ld0RlY2tGb3JtOyIsImltcG9ydCAqIGFzIGNvbnRyb2xsZXIgZnJvbSAnLi9sb2dpYy9jb250cm9sbHMnO1xuaW1wb3J0IHtkZWZhdWx0RGVjaywgZGVja0FycmF5LCB0aGVBbGxEZWNrfSBmcm9tICcuL2xvZ2ljL2NvbnRyb2xscyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBndWkgZnJvbSAnLi9HVUkvR1VJJztcbmltcG9ydCBjYXJkIGZyb20gJy4vbG9naWMvY2FyZCc7XG5pbXBvcnQge2RyYXdTdGVwfSBmcm9tICcuL0dVSS9HVUlOZXdDYXJkJztcbmltcG9ydCB7IGRyYXdDYXJkU3RlcCB9IGZyb20gJy4vR1VJL0dVSUNhcmRzJztcbmltcG9ydCB7IHNlcmlhbGl6ZURhdGEsIGRlc2VyaWFsaXplRGVja0FycmF5LCBkZXNlcmlhbGl6ZUN1cnJlbnREZWNrSW5kZXgsIGRlc2VyaWFsaXplQWxsQ2FyZHMsIGRlc2VyaWFsaXplQWxsRGVjayB9IGZyb20gJy4vc3RvcmFnZSc7XG5pbXBvcnQgZGVjayBmcm9tICcuL2xvZ2ljL2RlY2snO1xuXG5cblxubGV0IGN1cnJlbnRDYXJkO1xubGV0IGN1cnJlbnREZWNrRGl2O1xubGV0IGZvcm1WYWx1ZSA9IDA7XG5sZXQgY2FyZFZpZXdWYWx1ZSA9IDA7XG5sZXQgdGhlRGVja0FycmF5O1xubGV0IGN1cnJlbnREZWNrID0gZGVmYXVsdERlY2s7XG5sZXQgYWxsID0gdGhlQWxsRGVjaztcbnRoZURlY2tBcnJheSA9IGRlY2tBcnJheTtcblxuY29uc3QgbG9hZFN0b3JhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3RvcmFnZUV4aXN0cyA9IGRlc2VyaWFsaXplRGVja0FycmF5KCk7XG4gICAgY29uc29sZS5sb2coYFN0b3JhZ2VFaXN0cyByZXR1cm5zOiAke3N0b3JhZ2VFeGlzdHN9YCk7XG4gICAgaWYoc3RvcmFnZUV4aXN0cyAhPT0gbnVsbCl7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGAke3N0b3JhZ2VFeGlzdHNbMF0uZGVja05hbWV9YClcbiAgICAgICAgdGhlRGVja0FycmF5ID0gc3RvcmFnZUV4aXN0cztcbiAgICAgICAgY29uc3QgaW5kZXggPSBkZXNlcmlhbGl6ZUN1cnJlbnREZWNrSW5kZXgoKTtcbiAgICAgICAgY29uc29sZS5sb2coYHRoZSBzdG9yZWQgaW5kZXggaXM6ICR7aW5kZXh9YClcbiAgICAgICAgY3VycmVudERlY2sgPSB0aGVEZWNrQXJyYXlbaW5kZXhdO1xuICAgICAgICBhbGwgPSBkZXNlcmlhbGl6ZUFsbERlY2soJ2FsbCcpO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgICB0aGVEZWNrQXJyYXkgPSBkZWNrQXJyYXk7XG4gICAgICAgIGN1cnJlbnREZWNrID0gZGVmYXVsdERlY2s7XG4gICAgfVxufVxuXG5cblxuLy9sb2FkU3RvcmFnZSgpO1xuXG5jb25zdCBnZXRCb29rbWFya2VkQ2FyZCA9IChhRGVjaykgPT4ge1xuICAgIGNvbnNvbGUubG9nKGB0aGUgY3VycmVudCBkZWNrIGlzICR7YURlY2t9YCk7XG4gICAgY29uc3QgdGhpc0Jvb2ttYXJrID0gYURlY2suYm9va21hcms7XG4gICAgY29uc29sZS5sb2coYHRoZSBib29rbWFrciBpcyAke2FEZWNrLmJvb2ttYXJrfWApO1xuICAgIGxldCB0aGlzQ2FyZE5hbWUgPSBhRGVjay5jYXJkc0FycmF5W3RoaXNCb29rbWFya107XG4gICAgY29uc29sZS5sb2coYHRoaXMgY2FyZCBuYW1lIGlzICR7dGhpc0NhcmROYW1lfWApO1xuICAgIGNvbnN0IHR5cGUgPSB0eXBlb2YodGhpc0NhcmROYW1lKTtcbiAgICBpZih0eXBlICE9PSBcInN0cmluZ1wiKXtcbiAgICAgICAgaWYodGhpc0NhcmROYW1lICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgdGhpc0NhcmROYW1lID0gdGhpc0NhcmROYW1lLmNhcmROYW1lO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vY29uc29sZS5sb2coYGJvb2ttcmtlZCBjcmQgaXMgJHt0aGlzQ2FyZE5hbWV9YCk7XG4gICAgY29uc3QgYUNhcmQgPSBjb250cm9sbGVyLmdldENhcmQodGhpc0NhcmROYW1lKTtcbiAgICByZXR1cm4gYUNhcmQ7XG59XG5jb25zdCB1cGRhdGVDdXJyZW50Q2FyZCA9ICgpID0+IHtcbiAgICBjdXJyZW50Q2FyZCA9IGdldEJvb2ttYXJrZWRDYXJkKGN1cnJlbnREZWNrKTtcbiAgICAvL2NvbnNvbGUubG9nKGBjdXJyZW50IGNhcmQgaGFzIGJlZW4gdXBkYXRlZCB0byAke2N1cnJlbnRDYXJkLmNhcmROYW1lfWApO1xufVxuXG51cGRhdGVDdXJyZW50Q2FyZCgpO1xuZ3VpKHRoZURlY2tBcnJheSwgY3VycmVudERlY2ssIGNhcmRWaWV3VmFsdWUsIGN1cnJlbnRDYXJkKTtcblxuY29uc3QgYWR2YW5jZUJvb2ttYXJrID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdydW5uaW5nIGFkdmFuY2UgYm9va21hcmsnKVxuICAgIGN1cnJlbnREZWNrLmJvb2ttYXJrKys7XG4gICAgaWYoY3VycmVudERlY2suY2FyZHNBcnJheVtjdXJyZW50RGVjay5ib29rbWFya10gIT09IHVuZGVmaW5lZCl7XG4gICAgICAgIHJlZnJlc2goKTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgY3VycmVudERlY2suYm9va21hcmstLTtcbiAgICAgICAgcmVmcmVzaCgpO1xuICAgIH1cbn1cblxuY29uc3QgcHJldmlvdXNCb29rbWFyayA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygncnVubmluZyBwcmV2aW91cyBib29rbWFyaycpXG4gICAgY3VycmVudERlY2suYm9va21hcmstLTtcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50RGVjay5ib29rbWFyayk7XG4gICAgaWYoY3VycmVudERlY2suY2FyZHNBcnJheVtjdXJyZW50RGVjay5ib29rbWFya10gIT09IHVuZGVmaW5lZCl7XG4gICAgICAgIGNvbnNvbGUubG9nKCdib29rbWFyayB3YXMgZGVmaW5lZCcpXG4gICAgICAgIHJlZnJlc2goKTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgY3VycmVudERlY2suYm9va21hcmsrKztcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudERlY2suYm9va21hcmspO1xuICAgICAgICByZWZyZXNoKCk7XG4gICAgfVxuICAgIFxufVxuXG5jb25zdCBzZWxlY3REZWNrID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBsZXQgbmFtZU9mRGVjayA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS10aXRsZScpO1xuICAgIGNvbnNvbGUubG9nKGBuYW1lT2ZEZWNrIGlzICR7bmFtZU9mRGVja31gKVxuICAgIC8vIGlmKG5hbWVPZkRlY2sgPT09IG51bGwpe1xuICAgIC8vICAgICBuYW1lT2ZEZWNrID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGl0bGUnKTtcbiAgICAvLyB9XG4gICAgY3VycmVudERlY2sgPSBjb250cm9sbGVyLmdldERlY2sobmFtZU9mRGVjayk7XG4gICAgcmVmcmVzaCgpO1xuXG59XG5cbmNvbnN0IGFkZERlY2sgPSAoKSA9PiB7XG4gICAgZm9ybVZhbHVlID0gMTtcbiAgICByZWZyZXNoKCk7XG59XG5cbmNvbnN0IHNhdmVEZWNrID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB0aXRsZVRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVjay10aXRsZScpLnZhbHVlO1xuICAgICAgICBjb250cm9sbGVyLmNyZWF0ZURlY2sodGl0bGVUZXh0KTtcbiAgICAgICAgY2xlYXJGb3JtKCk7XG4gICAgICAgIHJlZnJlc2goKTsgIFxufVxuXG5jb25zdCBzYXZlRGVja09uRW50ZXIgPSAoZSkgPT4ge1xuICAgIGlmKGUua2V5Q29kZSA9PT0gMTMpe1xuICAgICAgICBjb25zdCB0aXRsZVRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVjay10aXRsZScpLnZhbHVlO1xuICAgICAgICBjb250cm9sbGVyLmNyZWF0ZURlY2sodGl0bGVUZXh0KTtcbiAgICAgICAgY2xlYXJGb3JtKCk7XG4gICAgICAgIHJlZnJlc2goKTtcbiAgICB9XG5cbn1cblxuY29uc3QgY2xlYXJGb3JtID0gKCkgPT4ge1xuICAgIGZvcm1WYWx1ZSA9IDA7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdmVyTGF5SG9sZGVyJyk7XG4gICAgZm9ybS5yZW1vdmUoKTtcbn1cblxuY29uc3QgZGVsZXRlQW5kRXJhc2VEZWNrID0gKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhgZXJhc2luZyBhbmQgZGVsZXRpbmcgZGVjay4ke2N1cnJlbnREZWNrLmRlY2tOYW1lfWApXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCBkZWxldGVEaXYgPSBlLnRhcmdldDtcbiAgICBjb25zdCBkZWNrRGl2ID0gZGVsZXRlRGl2LnBhcmVudEVsZW1lbnQ7XG4gICAgY29uc3QgZGVja1RpdGxlRGl2ID0gZGVja0Rpdi5maXJzdENoaWxkO1xuICAgIGNvbnN0IGRlY2tUaXRsZSA9IGRlY2tUaXRsZURpdi50ZXh0Q29udGVudDtcbiAgICBjb25zdCBjdXJyZW50RGVja0luZGV4ID0gZGVja0FycmF5LmluZGV4T2YoY3VycmVudERlY2spO1xuICAgIGNvbnNvbGUubG9nKGB0aGUgaW5kZXggb2YgdGhlIGN1cnJlbkRlY2sgaXMgJHtjdXJyZW50RGVja0luZGV4fWApXG4gICAgY29udHJvbGxlci5kZWxldGVEZWNrKGRlY2tUaXRsZSk7XG4gICAgaWYoY3VycmVudERlY2suZGVja05hbWUgPT09IGRlY2tUaXRsZSl7XG4gICAgICAgIGNvbnNvbGUubG9nKGB0aGUgZGVjayBkZWxldGVkIHdhcyB0aGUgY3VycmVudCBkZWNrLmApXG4gICAgICAgIGlmKGRlY2tBcnJheS5sZW5ndGggPCAyKXtcbiAgICAgICAgICAgIGN1cnJlbnREZWNrID0gYWxsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY3VycmVudERlY2sgPSBkZWNrQXJyYXlbY3VycmVudERlY2tJbmRleCAtIDFdO1xuICAgICAgICAgICAgcmVmcmVzaCgpO1xuICAgICAgICB9XG4gICAgICAgIHJlZnJlc2goKTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgcmVmcmVzaCgpO1xuICAgIH1cbiAgICByZWZyZXNoKCk7XG4gICAgY29uc29sZS5sb2coYEFGVEVSIERFTEVURSBjdXJyZW50RGVjayBpcyAke2N1cnJlbnREZWNrLmRlY2tOYW1lfWApO1xufVxuXG5jb25zdCBzYXZlVGl0bGUgPSAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdzYXZpbmcgY2hhbmdlIHRvIHRpdGxlJyk7XG4gICAgY29uc3QgdGV4dCA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xuICAgIGNvbnNvbGUubG9nKHRleHQpO1xuICAgIGNvbnNvbGUubG9nKGN1cnJlbnREZWNrLmJvb2ttYXJrKTtcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50RGVjay5jYXJkc0FycmF5W2N1cnJlbnREZWNrLmJvb2ttYXJrXSk7XG4gICAgY29uc3QgdGhlQ2FyZCA9IGNvbnRyb2xsZXIuZ2V0Q2FyZChjdXJyZW50RGVjay5jYXJkc0FycmF5W2N1cnJlbnREZWNrLmJvb2ttYXJrXSk7XG4gICAgY29uc29sZS5sb2codGhlQ2FyZCk7XG4gICAgdGhlQ2FyZC5jYXJkTmFtZSA9IHRleHQ7XG4gICAgY3VycmVudERlY2suY2FyZHNBcnJheVtjdXJyZW50RGVjay5ib29rbWFya10gPSB0ZXh0O1xuICAgIGNvbnNvbGUubG9nKHRoZUNhcmQuY2FyZE5hbWUpO1xufVxuXG5jb25zdCBzYXZlU3RlcCA9IChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coYFNBVklORyBTVEVQIWApXG4gICAgaWYoZS5rZXlDb2RlID09PSAxMyl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgZGF0YUluZGV4ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4Jyk7XG4gICAgICAgIC8vY29uc3QgaW5pdGlhbFRleHQgPSBlLnRhcmdldC50ZXh0Q29udGVudDtcbiAgICAgICAgLy9jb25zdCBzdGVwU3RyaW5nID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XG4gICAgICAgIC8vY29uc29sZS5sb2coYHN0ZXBTdHJpbmcgaXMgJHtzdGVwU3RyaW5nfWApO1xuICAgICAgICBjb25zdCB0aGVDYXJkID0gY29udHJvbGxlci5nZXRDYXJkKGN1cnJlbnREZWNrLmNhcmRzQXJyYXlbY3VycmVudERlY2suYm9va21hcmtdKTtcbiAgICAgICAgLy9jb25zdCBpbmRleCA9IHRoZUNhcmQuY2FyZFN0ZXBzLmluZGV4T2Yoc3RlcFN0cmluZyk7XG4gICAgICAgIC8vY29uc29sZS5sb2coYHRoZSBjYXJkIHN0ZXBzIGFyZTogJHt0aGVDYXJkLmNhcmRTdGVwc31gKTtcbiAgICAgICAgY29uc3QgdGV4dCA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xuICAgICAgICAvL2NvbnNvbGUubG9nKGB0ZXh0IGlzICR7dGV4dH1gKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhgaW5kZXggaXMgJHtpbmRleH1gKTtcbiAgICAgICAgaWYodGV4dCAhPT0gJycpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFN0ZXAgaXMgTk9UIGVtcHR5YClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBUaGUgbGVuZ3RoIG9mIHRoZSBhcnJheSBvZiBzdGVwcyBpcyAke3RoZUNhcmQuY2FyZFN0ZXBzLmxlbmd0aH1gKVxuICAgICAgICAgICAgY29uc29sZS5sb2coYHRoZSBzdGVzcCBhdCBkYXRhSW5kZXggaXMgJHt0aGVDYXJkLmNhcmRTdGVwc1tkYXRhSW5kZXhdfWApO1xuICAgICAgICAgICAgaWYodGhlQ2FyZC5jYXJkU3RlcHMubGVuZ3RoIDwgMSl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBjYXJkIHN0ZXBzIGxlc3MgdGhhbiAxYClcbiAgICAgICAgICAgICAgICAgICAgdGhlQ2FyZC5jYXJkU3RlcHMucHVzaCh0ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZWxzZSBpZiAodGhlQ2FyZC5jYXJkU3RlcHNbZGF0YUluZGV4XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhlQ2FyZC5jYXJkU3RlcHNbZGF0YUluZGV4XSA9IHRleHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGVDYXJkLmNhcmRTdGVwcy5wdXNoKHRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbmV3U3RlcERpdiA9IGRyYXdDYXJkU3RlcCgpO1xuICAgICAgICAgICAgbmV3U3RlcERpdi5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHNhdmVTdGVwKTtcbiAgICAgICAgICAgIG5ld1N0ZXBEaXYuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHN0b3BFbnRlckNhcmQpO1xuICAgICAgICAgICAgbmV3U3RlcERpdi5mb2N1cygpO1xuXG4gICAgICAgICAgICBlLnRhcmdldC5ibHVyKCk7XG4gICAgICAgICAgICBjb25zdCBjYXJkU3RlcHNEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZFN0ZXBzJyk7XG4gICAgICAgICAgICBjb25zdCB0aGlzU3RlcCA9IGNhcmRTdGVwc0Rpdi5sYXN0Q2hpbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIGlmKGUudGFyZ2V0Lmhhc0ZvY3VzKCkgPT09IGZhbHNlKXtcbiAgICAgICAgICAgIC8vICAgICB0aGlzU3RlcC5yZW1vdmUoKTtcbiAgICAgICAgICAgIC8vIH0gIFxufVxuXG5jb25zdCBkZWxldGVBbmRFcmFzZUNhcmQgPSAoKSA9PiB7XG4gICAgY29uc3QgdGhpc0NhcmROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmRUaXRsZScpLnRleHRDb250ZW50O1xuICAgIGNvbnNvbGUubG9nKGB0aGUgY2FyZCBuYW1lIGdvdHRlbiBpcyAke3RoaXNDYXJkTmFtZX1gKTtcbiAgICBjb25zdCB0aGlzQ2FyZCA9IGNvbnRyb2xsZXIuZ2V0Q2FyZCh0aGlzQ2FyZE5hbWUpO1xuICAgIGNvbnNvbGUubG9nKGB0aGUgY2FyZCByZXR1cm5lZCB3YXMgJHt0aGlzQ2FyZC5jYXJkTmFtZX1gKTtcbiAgICBpZihjdXJyZW50RGVjayA9PT0gYWxsKXtcbiAgICAgICAgdGhpc0NhcmQuY2FyZERlY2tzLmZvckVhY2goZGVja0VsZW1lbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGhpc0RlY2sgPSBjb250cm9sbGVyLmdldERlY2soZGVja0VsZW1lbnQpO1xuICAgICAgICAgICAgY29udHJvbGxlci5kZWxldGVDYXJkRnJvbURlY2sodGhpc0NhcmQsIHRoaXNEZWNrKTtcbiAgICAgICAgfSlcbiAgICAgICAgY29udHJvbGxlci5kZWxldGVDYXJkKHRoaXNDYXJkKTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgY29udHJvbGxlci5kZWxldGVDYXJkRnJvbURlY2sodGhpc0NhcmQsIGN1cnJlbnREZWNrKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coYGN1cnJlbnQgZGVjayBpcyBzdGlsbCAke2N1cnJlbnREZWNrLmRlY2tOYW1lfWApO1xuICAgIGNvbnNvbGUubG9nKGBjdXJyZW50IGRlY2sgbGVuZ3RoIGlzICR7Y3VycmVudERlY2suY2FyZHNBcnJheS5sZW5ndGh9YCk7XG4gICAgaWYoY3VycmVudERlY2suY2FyZHNBcnJheS5sZW5ndGggPCAyKXtcbiAgICAgICAgY3VycmVudERlY2suYm9va21hcmsgPSAwO1xuICAgICAgICBjb25zb2xlLmxvZyhgY3VycmVudCBkZWNrIGJvb2ttYXJrIGlzIG5vdyR7Y3VycmVudERlY2suYm9va21hcmt9YCk7XG4gICAgfVxuICAgIHJlZnJlc2goKTsgXG4gICAgLy8gY29udHJvbGxlci5kZWxldGVDYXJkKCk7XG4gICAgLy9wb3B1bGF0ZUNhcmQoKTtcbn1cblxuY29uc3QgYWRkQ2FyZCA9ICgpID0+IHtcbiAgICBmb3JtVmFsdWUgPSAyO1xuICAgIHJlZnJlc2goKTsgICAgIFxufVxuXG5cbmNvbnN0IGVyYXNlR1VJID0gKCkgPT4ge1xuICAgIGNvbnN0IGRlY2tzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGVjaycpO1xuICAgIEFycmF5LmZyb20oZGVja3MpLmZvckVhY2goZGVja0VsZW1lbnQgPT4gXG4gICAgICAgIGRlY2tFbGVtZW50LnJlbW92ZSgpKTtcbiAgICBjb25zdCBjYXJkQXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkQXJlYScpO1xuICAgIGNvbnN0IGNhcmRzID0gY2FyZEFyZWEuY2hpbGROb2RlcztcbiAgICBBcnJheS5mcm9tKGNhcmRzKS5mb3JFYWNoKGNhcmRFbGVtZW50ID0+IHtcbiAgICAgICAgY2FyZEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfSlcbn1cblxuLy8gY29uc3QgdXBkYXRlQ3VycmVudERlY2tEaXYgPSAoKSA9PiB7XG4vLyAgICAgLy8gY29uc29sZS5sb2coJ2ltIHVwZGF0ZWluZyB0aGUgY3VycmVudCBESVYnKVxuLy8gICAgIGNvbnN0IHRoZUN1cnJlbnREZWNrTmFtZSA9IGN1cnJlbnREZWNrLmRlY2tOYW1lO1xuLy8gICAgIC8vIGNvbnNvbGUubG9nKCd0aGVDdXJyZW50RGVja05hbWUgaXMgKyAnICsgdGhlQ3VycmVudERlY2tOYW1lKTtcbi8vICAgICBjb25zdCBkZWNrRGl2cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RlY2snKTtcbi8vICAgICBBcnJheS5mcm9tKGRlY2tEaXZzKS5mb3JFYWNoKGRlY2tEaXYgPT4ge1xuLy8gICAgICAgICBjb25zdCB0aXRsZURpdiA9IGRlY2tEaXYuY2hpbGRyZW5bMF07XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGRlY2tEaXYpO1xuLy8gICAgICAgICBjb25zb2xlLmxvZyh0aGVDdXJyZW50RGVja05hbWUpO1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhgZG9lcyAke3RpdGxlRGl2fSBhbmQgJHt0aGVDdXJyZW50RGVja05hbWV9IG1hdGNoP2ApXG4vLyAgICAgICAgIGlmKHRpdGxlRGl2LnRleHRDb250ZW50ID09PSB0aGVDdXJyZW50RGVja05hbWUpe1xuLy8gICAgICAgICAgICAgY3VycmVudERlY2tEaXYgPSBkZWNrRGl2O1xuLy8gICAgICAgICB9XG4vLyAgICAgfSlcbiAgICBcbi8vICAgICAvLyBjb25zb2xlLmxvZyhkZWNrRGl2cyk7XG4vLyAgICAgLy8gQXJyYXkuZnJvbShkZWNrRGl2cykuZm9yRWFjaChkZWNrRGl2ID0+IHtcbi8vICAgICAvLyAgICAgY29uc29sZS5sb2coJ3RoZSBkZWNrVGl0bGVpcyAnKyBkZWNrVGl0bGVEaXYpO1xuLy8gICAgIC8vICAgICBpZihkZWNrRGl2LmZpcnN0RWxlbWVudENoaWxkLnRleHRDb250ZW50ID09PSB0aGVDdXJyZW50RGVja05hbWUpe1xuLy8gICAgIC8vICAgICAgICAgY3VycmVudERlY2tEaXYgPSBkZWNrRGl2O1xuLy8gICAgIC8vICAgICB9XG4vLyAgICAgLy8gfSlcbi8vIH1cblxuLy8gY29uc3QgdXBkYXRlQ3VycmVudERlY2sgPSAoZSkgPT4ge1xuLy8gICAgIHJlbW92ZVNlbGVjdGVkU3R5bGUoKTtcbi8vICAgICAvLyBjb25zb2xlLmxvZygnaW0gVVBEQVRJbkchJyk7XG4vLyAgICAgY29uc29sZS5sb2coZS50YXJnZXQuaW5uZXJIVE1MKTtcbi8vICAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RlY2snKSl7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCdjbGlja2Vkb24gREVDSyBESVYnKVxuLy8gICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGl0bGUnKSlcbi8vICAgICAgICAgY29uc3QgdGhlRGVja05hbWUgPSAoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXRpdGxlJykpO1xuLy8gICAgICAgICBjdXJyZW50RGVjayA9IGNvbnRyb2xsZXIuZ2V0RGVjayh0aGVEZWNrTmFtZSk7XG4vLyAgICAgfVxuLy8gICAgIGVsc2Uge1xuLy8gICAgICAgICBjb25zb2xlLmxvZygnY2xpY2tlZG9uIFRJVExFIERJVicpXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnRleHRDb250ZW50KVxuLy8gICAgICAgICBjb25zdCB0aGVEZWNrTmFtZSA9IChlLnRhcmdldC50ZXh0Q29udGVudCk7XG4vLyAgICAgICAgIGN1cnJlbnREZWNrID0gY29udHJvbGxlci5nZXREZWNrKHRoZURlY2tOYW1lKTtcbi8vICAgICB9XG4gICAgXG4vLyAgICAgLy8gY29uc29sZS5sb2coJ2dvbm5hIHVwZGF0ZSBjdXJyZW50IGRlY2sgZGl2Jyk7XG4vLyAgICAgdXBkYXRlQ3VycmVudERlY2tEaXYoKTtcbi8vICAgICAvLyBjb25zb2xlLmxvZygnZ29ubmEgc3R5bGUgY3VycmVudCBkZWNEaXYgJyArIGN1cnJlbnREZWNrRGl2KTtcbi8vICAgICBzdHlsZUN1cnJlbnQoKTtcbi8vICAgICBwb3B1bGF0ZUNhcmQoKTtcbi8vIH1cblxuLy8gY29uc3QgdXBkYXRlQ3VycmVudERlY2tCeU5hbWUgPSAobmFtZSkgPT4ge1xuLy8gICAgIHJlbW92ZVNlbGVjdGVkU3R5bGUoKTtcbi8vICAgICAvLyBjb25zb2xlLmxvZygnaW0gVVBEQVRJbkchJyk7XG4gICAgXG4vLyAgICAgY29uc3QgdGhlRGVja05hbWUgPSBuYW1lO1xuLy8gICAgIGN1cnJlbnREZWNrID0gY29udHJvbGxlci5nZXREZWNrKHRoZURlY2tOYW1lKTtcbi8vICAgICAvLyBjb25zb2xlLmxvZygnZ29ubmEgdXBkYXRlIGN1cnJlbnQgZGVjayBkaXYnKTtcbi8vICAgICB1cGRhdGVDdXJyZW50RGVja0RpdigpO1xuLy8gICAgIC8vIGNvbnNvbGUubG9nKCdnb25uYSBzdHlsZSBjdXJyZW50IGRlY0RpdiAnICsgY3VycmVudERlY2tEaXYpO1xuLy8gICAgIHN0eWxlQ3VycmVudCgpO1xuLy8gICAgIHBvcHVsYXRlQ2FyZCgpO1xuLy8gfVxuXG5jb25zdCBzYXZlRGF0ZSA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3QgdGhpc0NhcmROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmRUaXRsZScpLnRleHRDb250ZW50O1xuICAgIGNvbnN0IHRoaXNDYXJkID0gY29udHJvbGxlci5nZXRDYXJkKHRoaXNDYXJkTmFtZSk7XG4gICAgaWYoZS5rZXlDb2RlID09PSAxMyl7XG4gICAgICAgIHRoaXNDYXJkLmNhcmREYXRlID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgIFxuICAgIH1cbiAgICByZWZyZXNoKCk7XG59XG5cbmNvbnN0IGVkaXREYXRlID0gKGUpID0+IHtcbiAgICBjb25zdCBkYXRlUGlja2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkYXRlUGlja2VyLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gICAgZGF0ZVBpY2tlci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2lucHV0Jyk7XG4gICAgZGF0ZVBpY2tlci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgZS50YXJnZXQuYXBwZW5kQ2hpbGQoZGF0ZVBpY2tlcik7XG4gICAgZGF0ZVBpY2tlci5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgc2F2ZURhdGUpO1xufVxuXG5jb25zdCBzYXZlRGVja1RpdGxlID0gKGUpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZygnc2F2aW5nIGNoYW5nZSB0byB0aXRsZScpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IHRleHQgPSBlLnRhcmdldC50ZXh0Q29udGVudDtcbiAgICBjdXJyZW50RGVjay5kZWNrTmFtZSA9IHRleHQ7XG59XG5cbmNvbnN0IHN0b3BFbnRlciA9IChlKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coJ3NhdmluZyBjaGFuZ2UgdG8gdGl0bGUnKTtcbiAgICBpZihlLmtleUNvZGUgPT09IDEzKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzYXZlRGVja1RpdGxlKGUpO1xuICAgICAgICBlLnRhcmdldC5ibHVyKCk7XG5cbiAgICB9XG4gICBcbn1cbmNvbnN0IHN0b3BFbnRlckNhcmQgPSAoZSkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKCdzYXZpbmcgY2hhbmdlIHRvIHRpdGxlJyk7XG4gICAgaWYoZS5rZXlDb2RlID09PSAxMyl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2F2ZVN0ZXAoZSk7XG4gICAgfSAgXG59XG4vLyBjb25zdCBlcmFzZVN0ZXBzID0gKCkgPT4ge1xuLy8gICAgIGNvbnN0IHN0ZXBzRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmRTdGVwcycpO1xuLy8gICAgIGNvbnN0IHN0ZXBzID0gc3RlcHNEaXYuY2hpbGRyZW47XG4vLyAgICAgQXJyYXkuZnJvbShzdGVwcykuZm9yRWFjaChzdGVwRWxlbWVudCA9PiB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGByZW1vdmluZyAke3N0ZXBFbGVtZW50fSBmcm9tICR7c3RlcHNEaXZ9YClcbi8vICAgICAgICAgc3RlcEVsZW1lbnQucmVtb3ZlKCk7XG4vLyAgICAgfSlcbiAgICBcbi8vIH1cbi8vIGNvbnN0IHNob3dGb3JtID0gKCkgPT4ge1xuLy8gICAgIC8vIGNvbnNvbGUubG9nKCdzaG93aW5nIGZvcm0hJyk7XG4vLyAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdmVyTGF5SG9sZGVyJyk7XG4vLyAgICAgZm9ybS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuLy8gfVxuLy8gY29uc3QgaGlkZUZvcm0gPSAoKSA9PiB7XG4vLyAgICAgY29uc29sZS5sb2coJ2hpZGluZyBmb3JtIScpO1xuLy8gICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlckxheUhvbGRlcicpO1xuLy8gICAgIGZvcm0uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuLy8gICAgIGxldCBhRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0ZXAnKTtcbi8vICAgICBhRGl2LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbi8vICAgICBhRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKTtcbi8vICAgICBhRGl2LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbi8vICAgICBhRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmREZWNrJyk7XG4vLyAgICAgYURpdi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4vLyB9XG5jb25zdCBzYXZlQ2FyZCA9ICgpID0+IHtcbiAgICBsZXQgaXNDdXJyZW50ID0gMDtcbiAgICBsZXQgYUNhcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZC10aXRsZScpLnZhbHVlO1xuICAgIGFDYXJkID0gY29udHJvbGxlci5jcmVhdGVDYXJkKGFDYXJkKTtcbiAgICBjb25zdCBzdGVwQ29sbGVjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N0ZXAnKTtcbiAgICBBcnJheS5mcm9tKHN0ZXBDb2xsZWN0aW9uKS5mb3JFYWNoKHN0ZXAgPT4ge1xuICAgICAgICBhQ2FyZC5jYXJkU3RlcHMucHVzaChzdGVwLnZhbHVlKTtcbiAgICB9KVxuXG4gICAgYUNhcmQuY2FyZERhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpLnZhbHVlO1xuICAgIGNvbnN0IGRlY2tMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmREZWNrJyk7XG4gICAgY29uc3QgY29sbGVjdGlvbiA9IGRlY2tMaXN0LnNlbGVjdGVkT3B0aW9ucztcbiAgICBjb25zb2xlLmxvZyhgdGhlIGN1cnJlbnQgZGVjayB3YXMgJHtjdXJyZW50RGVja31gKTtcbiAgICBpZihjb2xsZWN0aW9uLmxlbmd0aCA8IDIgKXtcbiAgICAgICAgY29uc3QgdGhlU2VsZWN0ZWREZWNrID0gY29sbGVjdGlvblswXS50ZXh0Q29udGVudDtcbiAgICAgICAgY29uc3QgdGhlRGVja05hbWUgPSB0aGVTZWxlY3RlZERlY2s7XG4gICAgICAgIGN1cnJlbnREZWNrID0gY29udHJvbGxlci5nZXREZWNrKHRoZURlY2tOYW1lKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coYHRoZSBjdXJyZW50IGRlY2sgaXMgbm93ICR7Y3VycmVudERlY2t9YCk7XG4gICAgY29uc29sZS5sb2coYHNlbGVjdGVkIG9wdGlvbnMgY29sbGVjdGlvbiBpcyAke2NvbGxlY3Rpb259YCk7XG4gICAgQXJyYXkuZnJvbShjb2xsZWN0aW9uKS5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGB0aGlzIG9wdGlvbiBpcyAke29wdGlvbn0gaXQncyB2YWx1ZSBpcyAke29wdGlvbi52YWx1ZX1gKTtcbiAgICAgICAgICAgIGFDYXJkLmNhcmREZWNrcy5wdXNoKG9wdGlvbi52YWx1ZSk7IFxuICAgICAgICAgICAgaWYob3B0aW9uLnZhbHVlID09PSBjdXJyZW50RGVjay5kZWNrTmFtZSl7XG4gICAgICAgICAgICAgICAgaXNDdXJyZW50ID0gMTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtvcHRpb24udmFsdWV9IGlzICR7Y3VycmVudERlY2suZGVja05hbWV9YCk7XG4gICAgICAgICAgICB9IFxuICAgIH0pXG4gICAgYUNhcmQuY2FyZERlY2tzLmZvckVhY2goZGVja05hbWVTdHJpbmcgPT4ge1xuICAgICAgICBpZihkZWNrTmFtZVN0cmluZyAhPT0gJ2FsbCcpe1xuICAgICAgICAgICAgY29uc3QgYURlY2sgPSBjb250cm9sbGVyLmdldERlY2soZGVja05hbWVTdHJpbmcpXG4gICAgICAgICAgICBjb250cm9sbGVyLmFkZENhcmR0b0RlY2soYUNhcmQsIGFEZWNrKTtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgaWYoaXNDdXJyZW50ID09PSAxKXtcbiAgICAgICAgY29uc29sZS5sb2coYCR7Y3VycmVudERlY2suYm9va21hcmt9IGlzIHRoZSBjdXJyZW50IGJvb2ttYXJrIG9mIHRoZSBjdXJyZW50IGRlY2suYClcbiAgICAgICAgY29uc29sZS5sb2coYGJ1dCBub3cgaXQgd2lsbCBiZSAke2N1cnJlbnREZWNrLmNhcmRzQXJyYXkuaW5kZXhPZihhQ2FyZC5jYXJkTmFtZSl9YCk7XG4gICAgICAgIC8vIGNvbnN0IHRoZUNhcmRCb29rbWFyayA9IGN1cnJlbnREZWNrLmNhcmRzQXJyYXkuaW5kZXhPZihhQ2FyZC5jYXJkTmFtZSk7XG4gICAgICAgIGN1cnJlbnREZWNrLmJvb2ttYXJrID0gY3VycmVudERlY2suY2FyZHNBcnJheS5pbmRleE9mKGFDYXJkLmNhcmROYW1lKTtcbiAgICAgICAgY29uc29sZS5sb2coYHRoZSBjdXJyZW50IGRlY2sgYm9va21hcmsgaXMgbm93ICR7Y3VycmVudERlY2suYm9va21hcmt9YCk7XG4gICAgICAgIGlzQ3VycmVudCA9IDA7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGBzYXZpbmcgY2FyZC4gY3VycmVudCBkZWNrIGlzICR7Y3VycmVudERlY2t9YCk7XG4gICAgY29uc29sZS5sb2coY3VycmVudERlY2suYm9va21hcmspO1xuICAgIGNsZWFyRm9ybSgpO1xuICAgIHJlZnJlc2goKTtcbiAgICBcbn1cbi8vIGNvbnN0IHNhdmVGb3JtID0gKCkgPT4ge1xuLy8gICAgIC8vIGNvbnNvbGUubG9nKCdzYXZlIHR5cGUgaXM6ICcrIGZvcm1UeXBlKTtcbi8vICAgICBpZihmb3JtVHlwZSA9PT0nZGVjaycpe1xuLy8gICAgICAgICBjb25zb2xlLmxvZygnc2F2aW5nIGRlY2shJylcbi8vICAgICAgICAgc2F2ZURlY2soKTtcbi8vICAgICB9XG4vLyAgICAgZWxzZSBpZihmb3JtVHlwZSA9PT0gJ2NhcmQnKXtcbi8vICAgICAgICAgY29uc29sZS5sb2coJ3NhdmluZyBjYXJkIScpXG4vLyAgICAgICAgIHNhdmVDYXJkKCk7XG4vLyAgICAgICAgIHBvcHVsYXRlQ2FyZCgpO1xuLy8gICAgIH1cbi8vIH1cbmNvbnN0IHNldERlY2tEZWxldGVMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgY29uc3QgZGl2Q29sbGVjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RlY2tEZWxldGUnKTtcbiAgICBBcnJheS5mcm9tKGRpdkNvbGxlY3Rpb24pLmZvckVhY2goZGl2ID0+IHtcbiAgICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlQW5kRXJhc2VEZWNrKVxuICAgIH0pXG59XG5cbmNvbnN0IHNlbGVjdERlY2tMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgY29uc3QgZGVja0NvbGxlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkZWNrJyk7XG4gICAgQXJyYXkuZnJvbShkZWNrQ29sbGVjdGlvbikuZm9yRWFjaChkZWNrRGl2ID0+IHtcbiAgICAgICBkZWNrRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VsZWN0RGVjayk7XG4gICAgfSlcbiAgICBjb25zdCBkZWNrVGl0bGVEaXZzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGVja1RpdGxlJyk7XG4gICAgQXJyYXkuZnJvbShkZWNrVGl0bGVEaXZzKS5mb3JFYWNoKGRlY2tUaXRsZURpdiA9PiB7XG4gICAgICAgIGRlY2tUaXRsZURpdi5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHNhdmVEZWNrVGl0bGUpO1xuICAgICAgICBkZWNrVGl0bGVEaXYuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHN0b3BFbnRlcik7XG4gICAgfSlcbiAgICBcbn1cblxuY29uc3Qgc2V0UGx1c0xpc3RlbmVycyA9ICgpID0+IHtcbiAgICBjb25zdCBhZGREZWNrRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZERlY2tCdXR0b24nKTtcbiAgICBhZGREZWNrRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkRGVjayk7XG4gICAgY29uc3QgYWRkQ2FyZERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRDYXJkQnV0dG9uJyk7XG4gICAgYWRkQ2FyZERpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZENhcmQpO1xufVxuXG5jb25zdCBzZXRGb3JtQnV0dG9uTGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbmZpcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hlY2snKTtcbiAgICBjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FuY2VsJyk7XG4gICAgaWYoZm9ybVZhbHVlID09PSAxKXtcbiAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWNrLXRpdGxlJyk7XG4gICAgaWYodGl0bGVJbnB1dCAhPT0gbnVsbCl7XG4gICAgICAgIHRpdGxlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBzYXZlRGVja09uRW50ZXIpO1xuICAgIH1cbiAgICBpZihjb25maXJtICE9PSBudWxsKXtcbiAgICAgICAgY29uZmlybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNhdmVEZWNrKTtcbiAgICB9XG4gICAgfVxuICAgIGlmKGZvcm1WYWx1ZSA9PT0gMil7XG4gICAgICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZC10aXRsZScpO1xuICAgIGlmKHRpdGxlSW5wdXQgIT09IG51bGwpe1xuICAgICAgICAvL3RpdGxlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBzYXZlQ2FyZE9uRW50ZXIpO1xuICAgIH1cbiAgICBpZihjb25maXJtICE9PSBudWxsKXtcbiAgICAgICAgY29uZmlybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNhdmVDYXJkKTtcbiAgICB9XG4gICAgfVxuICAgIFxuICAgIGlmKGNhbmNlbCAhPT0gbnVsbCl7XG4gICAgICAgIGNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsZWFyRm9ybSk7XG4gICAgfVxuICAgIFxufVxuXG5jb25zdCBzZXRDYXJkbGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIGNvbnN0IGNhcmREZWxldGVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZERlbGV0ZScpXG4gICAgaWYoY2FyZERlbGV0ZUJ1dHRvbiAhPT0gbnVsbCl7XG4gICAgICAgIGNhcmREZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVBbmRFcmFzZUNhcmQpO1xuICAgIH1cbiAgICBjb25zdCBzdGVwRGl2cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N0ZXBEaXYnKTtcbiAgICBpZihzdGVwRGl2cyAhPT0gbnVsbCl7XG4gICAgQXJyYXkuZnJvbShzdGVwRGl2cykuZm9yRWFjaChzdGVwRGl2ID0+IHtcbiAgICAgICBzdGVwRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBzYXZlU3RlcCk7XG4gICAgfSlcbiAgICB9XG4gICAgY29uc3QgY2FyZFRpdGxlRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmRUaXRsZScpO1xuICAgIGlmKGNhcmRUaXRsZURpdiAhPT0gbnVsbCl7XG4gICAgICAgIGNhcmRUaXRsZURpdi5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHNhdmVUaXRsZSk7XG4gICAgICAgIGNhcmRUaXRsZURpdi5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgc3RvcEVudGVyQ2FyZCk7XG4gICAgfVxuICAgIGNvbnN0IGNhcmRQbHVzRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmRQbHVzJyk7XG4gICAgaWYoY2FyZFBsdXNEaXYgIT09IG51bGwpe1xuICAgICAgICBjYXJkUGx1c0Rpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZENhcmQpO1xuICAgIH1cbiAgICBjb25zdCBjYXJkRGF0ZURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkRGF0ZScpO1xuICAgIGlmKGNhcmREYXRlRGl2ICE9PSBudWxsKXtcbiAgICAgICAgY2FyZERhdGVEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlZGl0RGF0ZSk7XG4gICAgfVxuXG59XG5cbmNvbnN0IGFkZEV2ZW50TGlzdGVuZXJzID0gKGVsZW1lbnROYW1lLCBhRnVuY3Rpb24pID0+e1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtlbGVtZW50TmFtZX1gKTtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYUZ1bmN0aW9uKTtcbn1cblxuY29uc3QgYWRkRm9yd2FyZEJhY2t3YXJkTGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCdmb3J3YXJkQnV0dG9uJywgYWR2YW5jZUJvb2ttYXJrKTtcbiAgICBhZGRFdmVudExpc3RlbmVycygnYmFja3dhcmRCdXR0b24nLCBwcmV2aW91c0Jvb2ttYXJrKTtcbn1cblxuY29uc3Qgc2V0TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIHNlbGVjdERlY2tMaXN0ZW5lcnMoKTtcbiAgICBzZXRQbHVzTGlzdGVuZXJzKCk7XG4gICAgc2V0Rm9ybUJ1dHRvbkxpc3RlbmVycygpO1xuICAgIHNldERlY2tEZWxldGVMaXN0ZW5lcnMoKTtcbiAgICBzZXRDYXJkbGlzdGVuZXJzKCk7XG4gICAgYWRkRm9yd2FyZEJhY2t3YXJkTGlzdGVuZXJzKCk7XG59XG5cbmNvbnN0IHJlZnJlc2ggPSAoKSA9PiB7XG4gICAgdXBkYXRlQ3VycmVudENhcmQoKTtcbiAgICBlcmFzZUdVSSgpO1xuICAgIGd1aSh0aGVEZWNrQXJyYXksIGN1cnJlbnREZWNrLCBmb3JtVmFsdWUsIGNhcmRWaWV3VmFsdWUsIGN1cnJlbnRDYXJkKTtcbiAgICBzZXRMaXN0ZW5lcnMoKVxuICAgIHNlcmlhbGl6ZURhdGEodGhlRGVja0FycmF5LCBjdXJyZW50RGVjayk7XG59XG5cbnJlZnJlc2goKTtcblxuLy8gY29uc3QgZXJhc2VUb3BDYXJkID0gKCkgPT4ge1xuLy8gICAgIGNvbnN0IG9sZENhcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9wQ2FyZCcpO1xuLy8gICAgIG9sZENhcmQucmVtb3ZlKCk7XG4vLyAgICAgZHJhd1RvcENhcmQoKTtcbi8vIH0iLCJjb25zdCBjYXJkID0gKG5hbWUpID0+IHtcbiAgY29uc3QgY2FyZE5hbWUgPSBuYW1lO1xuICBjb25zdCBjYXJkU3RlcHMgPSBbXTtcbiAgY29uc3QgY2FyZERhdGUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygpO1xuICBjb25zdCBjYXJkQ29tcGxldGVWYWx1ZSA9IDA7XG4gIGNvbnN0IGNhcmREZWNrcyA9IFtcImFsbFwiXTtcbiAgcmV0dXJuIHtcbiAgICBjYXJkTmFtZSxcbiAgICBjYXJkQ29tcGxldGVWYWx1ZSxcbiAgICBjYXJkRGF0ZSxcbiAgICBjYXJkU3RlcHMsXG4gICAgY2FyZERlY2tzLFxuICB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IGNhcmQ7XG4iLCJpbXBvcnQgXCIuLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBjYXJkIGZyb20gXCIuL2NhcmRcIjtcbmltcG9ydCBkZWNrIGZyb20gXCIuL2RlY2tcIjtcblxuZXhwb3J0IGNvbnN0IHRoZUFsbERlY2sgPSBkZWNrKFwiYWxsXCIpO1xuZXhwb3J0IGNvbnN0IGRlY2tBcnJheSA9IFtdO1xuZGVja0FycmF5LnB1c2godGhlQWxsRGVjayk7XG5leHBvcnQgY29uc3QgdGFibGUgPSBkZWNrQXJyYXk7XG5leHBvcnQgY29uc3QgZGVmYXVsdERlY2sgPSBkZWNrKCdUby1EbycpO1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRDYXJkID0gY2FyZCgnR2V0IEdyb2NlcmllcycpO1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRDYXJkMiA9IGNhcmQoJ01haWwgVGhhbmsgWW91IE5vdGVzJyk7XG50aGVBbGxEZWNrLmNhcmRzQXJyYXkucHVzaChkZWZhdWx0Q2FyZCk7XG50aGVBbGxEZWNrLmNhcmRzQXJyYXkucHVzaChkZWZhdWx0Q2FyZDIpO1xuZGVmYXVsdENhcmQuY2FyZFN0ZXBzLnB1c2goYFRoaXMgaXMgdGFzayBjYXJkLmApO1xuZGVmYXVsdENhcmQuY2FyZFN0ZXBzLnB1c2goYENsaWNrIG9uIGFueSB0ZXh0IGZpZWxkIHRvIGVkaXQgdGhlIHByb3BlcnR5YCk7XG5kZWZhdWx0Q2FyZC5jYXJkU3RlcHMucHVzaChgUHJlc3MgdGhlIG5leHQgYXJyb3cgdG8gdGhlIHJpZ2h0IHRvIHNlZSB0aGUgbmV4dCBjYXJkLmApO1xuZGVmYXVsdENhcmQyLmNhcmRTdGVwcy5wdXNoKGBDbGljayB0aGUgZGVsZXRlIGJ1dHRvbiBvbiBhIGNhcmQgdG8gcmVtb3ZlIGZyb20gdGhlIGN1cnJlbnQgKHNlbGVjdGVkKSBkZWNrLmApO1xuZGVmYXVsdENhcmQyLmNhcmRTdGVwcy5wdXNoKGBUbyBwZXJtYW5lbnRseSBkZWxldGUgYSBjYXJkLCBkZWxldGUgZnJvbSB0aGUgYWxsIGRlY2suYCk7XG5kZWZhdWx0Q2FyZDIuY2FyZFN0ZXBzLnB1c2goYENyZWF0ZSBjYXJkcyBvciBkZWNrcyBieSBwcmVzc2luZyB0aGUgJysnIGJ1dHRvbnMuYCk7XG5kZWZhdWx0Q2FyZDIuY2FyZFN0ZXBzLnB1c2goYE1vcmUgZ3JlYXQgZmVhdHVyZXMgYW5kIExvY2FsIFN0b3JhZ2UgY29taW5nIHNvb24hYCk7XG5kZWZhdWx0RGVjay5jYXJkc0FycmF5LnB1c2goZGVmYXVsdENhcmQuY2FyZE5hbWUpO1xuZGVmYXVsdERlY2suY2FyZHNBcnJheS5wdXNoKGRlZmF1bHRDYXJkMi5jYXJkTmFtZSk7XG5kZWNrQXJyYXkucHVzaChkZWZhdWx0RGVjayk7XG5cblxuICAgIGNvbnN0IHZpZXdBbGwgPSAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhgQWxsIGNhcmRzIGFyZTogJHt0aGVBbGxEZWNrfWApO1xuICAgICAgY29uc29sZS5sb2coYGFsbCBkZWNrcyBhcmU6ICR7dGFibGV9YCk7XG4gICAgICB0aGVBbGxEZWNrLmNhcmRzQXJyYXkuZm9yRWFjaCgoY2FyZEVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYGFsbCArICR7Y2FyZEVsZW1lbnR9YCk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3Qgdmlld0RlY2sgPSAobmFtZSkgPT4ge1xuICAgICAgbGV0IGN1cnJlbnREZWNrO1xuICAgICAgbGV0IHdhc01hdGNoZWQgPSBmYWxzZTtcbiAgICAgIHRhYmxlLmZvckVhY2goKGRlY2tFbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW4gZm9yIGVhY2hcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKGRlY2tFbGVtZW50KTtcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudERlY2spO1xuICAgICAgICBjb25zb2xlLmxvZyh0eXBlb2YgY3VycmVudERlY2spO1xuICAgICAgICBpZiAoZGVja0VsZW1lbnQuZGVja05hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgICBjdXJyZW50RGVjayA9IGRlY2tFbGVtZW50O1xuICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnREZWNrKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyh0eXBlb2YgY3VycmVudERlY2spO1xuICAgICAgICAgIHdhc01hdGNoZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmICh3YXNNYXRjaGVkID09PSBmYWxzZSkge1xuICAgICAgICBjdXJyZW50RGVjayA9IHRoZUFsbERlY2s7XG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnREZWNrKTtcbiAgICAgICAgY29uc29sZS5sb2codHlwZW9mIGN1cnJlbnREZWNrKTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiBjdXJyZW50RGVjayk7XG4gICAgICBjb25zb2xlLmxvZyhgJHtjdXJyZW50RGVjay5kZWNrTmFtZX0gY29udGVudHMgYXJlOiBgKTtcbiAgICAgIGN1cnJlbnREZWNrLmNhcmRzQXJyYXkuZm9yRWFjaCgoY2FyZEVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coY2FyZEVsZW1lbnQpO1xuICAgICAgfSk7XG4gICAgICBcbiAgICB9O1xuXG4gICAgZXhwb3J0IGNvbnN0IGNyZWF0ZURlY2sgPSAobmFtZSkgPT4ge1xuICAgICAgICAvLyBjb25zdCB0aGVOYW1lID0gcHJvbXB0KCdXaGF0IGlzIHRoZSBuYW1lIG9mIHRlaCBkZWNrPycpXG4gICAgICBjb25zdCB0aGlzRGVjayA9IGRlY2sobmFtZSk7XG4gICAgICB0YWJsZS5wdXNoKHRoaXNEZWNrKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwidGhlIGRlY2sgY3JlYXRlZCBpczogXCIgKyB0aGlzRGVjayk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcIml0cyBuYW1lIGlzOiBcIiArIHRoaXNEZWNrLmRlY2tOYW1lKTtcbiAgICB9O1xuXG4gICAgZXhwb3J0IGNvbnN0IGFkZENhcmR0b0RlY2sgPSAodGhpc0NhcmQsIHRoaXNEZWNrKSA9PiB7XG4gICAgICAgIHRoaXNDYXJkLmNhcmREZWNrID0gdGhpc0RlY2suZGVja05hbWU7XG4gICAgICAgIHRoaXNEZWNrLmNhcmRzQXJyYXkucHVzaCh0aGlzQ2FyZC5jYXJkTmFtZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXNEZWNrKTtcbiAgICAgIH07XG5cbiAgICBcblxuICAgIGV4cG9ydCBjb25zdCBnZXRDYXJkID0gKG5hbWUpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2cobmFtZSlcbiAgICAgIGxldCB0aGlzQ2FyZDtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXNDYXJkKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGFsbC5sZW5ndGgpO1xuICAgICAgY29uc29sZS5sb2codGhlQWxsRGVjay5jYXJkc0FycmF5KTtcbiAgICAgIHRoZUFsbERlY2suY2FyZHNBcnJheS5mb3JFYWNoKChjYXJkRWxlbWVudCkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhjYXJkRWxlbWVudC5jYXJkTmFtZSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG5hbWUpO1xuICAgICAgICBpZiAoY2FyZEVsZW1lbnQuY2FyZE5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgJHtjYXJkRWxlbWVudC5jYXJkTmFtZX0gPT09ICR7bmFtZX1gKTtcbiAgICAgICAgICB0aGlzQ2FyZCA9IGNhcmRFbGVtZW50O1xuICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXNDYXJkKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgLy8gICBpZiAodGhlQ2FyZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gICAgIC8vIGNvbnN0IGNhcmROYW1lID0gcHJvbXB0KFxuICAgIC8vICAgICAvLyAgIFwidGhhdCBjYXJkIGRvZXMgbm90IGV4aXN0LCBwbGVhc2UgZW50ZXIgYW5vdGhlciBuYW1lOlwiXG4gICAgLy8gICAgIC8vICk7XG4gICAgLy8gICAgIC8vIHRoZUNhcmQgPSBnZXRDYXJkKGNhcmROYW1lKTtcbiAgICAvLyAgIH1cbiAgICAgIC8vY29uc29sZS5sb2coYHRoZSBjYXJkIGdldHRpbmcgcmV0dXJuZWQgaXM6ICR7dGhpc0NhcmQuY2FyZE5hbWV9YClcbiAgICAgIHJldHVybiB0aGlzQ2FyZDtcbiAgICB9O1xuXG4gICAgZXhwb3J0IGNvbnN0IGdldERlY2sgPSAobmFtZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ0dFVFRJTkcgREVDSycpO1xuICAgICAgbGV0IHRoZURlY2s7XG4gICAgICBjb25zb2xlLmxvZyhgdGhlIGRlY2sgYXJyYXkgaXMgJHtkZWNrQXJyYXl9YCk7XG4gICAgICBkZWNrQXJyYXkuZm9yRWFjaChkZWNrRWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGhlICBkZWNrIG5hbWUgaXM6IFwiICsgZGVja0VsZW1lbnQuZGVja05hbWUpO1xuICAgICAgICBpZiAoZGVja0VsZW1lbnQuZGVja05hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIml0IG1hdGNoZWQhXCIpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGRlY2tFbGVtZW50LmRlY2tOYW1lLCBuYW1lKTtcbiAgICAgICAgICB0aGVEZWNrID0gZGVja0VsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKFwiZ2V0dGluZyBkZWNrOiBcIiArIHRoZURlY2suZGVja05hbWUpO1xuICAgICAgY29uc29sZS5sb2codGhlRGVjayk7XG4gICAgICByZXR1cm4gdGhlRGVjaztcbiAgICB9O1xuXG4gICAgZXhwb3J0IGNvbnN0IGNyZWF0ZUNhcmQgPSAobmFtZSkgPT4ge1xuICAgICAgY29uc3QgbmV3Q2FyZCA9IGNhcmQobmFtZSk7XG4gICAgdGhlQWxsRGVjay5jYXJkc0FycmF5LnB1c2gobmV3Q2FyZCk7XG4gICAgY29uc29sZS5sb2codGhlQWxsRGVjay5jYXJkc0FycmF5KTtcbiAgICByZXR1cm4gbmV3Q2FyZDtcbiAgICBcbiAgICB9O1xuXG4gICAgXG5cbiAgICBleHBvcnQgY29uc3QgZGVsZXRlQ2FyZEZyb21EZWNrID0gKHRoaXNDYXJkLCB0aGlzRGVjaykgPT4ge1xuICAgICAgY29uc3QgaW5kZXggPSB0aGlzRGVjay5jYXJkc0FycmF5LmluZGV4T2YodGhpc0NhcmQuY2FyZE5hbWUpO1xuICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgdGhpc0RlY2suY2FyZHNBcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXNEZWNrO1xuICAgIH07XG5cbiAgICBleHBvcnQgY29uc3QgZGVsZXRlQ2FyZCA9ICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdkZWxldGluZycpXG4gICAgICBjb25zdCBjYXJkRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmRUaXRsZScpO1xuICAgICAgY29uc3QgYUNhcmROYW1lID0gY2FyZERpdi50ZXh0Q29udGVudDtcbiAgICAgIGNvbnN0IHRoaXNDYXJkID0gZ2V0Q2FyZChhQ2FyZE5hbWUpO1xuICAgICAgY29uc3QgaW5kZXggPSB0aGVBbGxEZWNrLmNhcmRzQXJyYXkuaW5kZXhPZih0aGlzQ2FyZCk7XG4gICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICB0aGVBbGxEZWNrLmNhcmRzQXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKHRoZUFsbERlY2spO1xuICAgICAgcmV0dXJuIHRoZUFsbERlY2s7XG4gICAgfTtcblxuICAgIGV4cG9ydCBjb25zdCBkZWxldGVEZWNrID0gKGFEZWNrTmFtZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ0RFTEVURUlORyBERUNLIElOIENPTlRST0xMUycpXG4gICAgICBjb25zb2xlLmxvZyhgZGVjayBuYW1lIGlzICR7YURlY2tOYW1lfWApXG4gICAgICBjb25zdCBkZWNrT2JqID0gZ2V0RGVjayhhRGVja05hbWUpO1xuICAgICAgY29uc29sZS5sb2coYGdvIHRoZSBkZWNrIG9iamVjdCBjYWxsZWQgJHtkZWNrT2JqLmRlY2tOYW1lfWApO1xuICAgICAgY29uc3QgaW5kZXggPSBkZWNrQXJyYXkuaW5kZXhPZihkZWNrT2JqKTtcbiAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIGRlY2tBcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coYERFQ0sgQVJSQVkgSVMgJHtkZWNrQXJyYXl9YCk7XG4gICAgICByZXR1cm4gZGVja0FycmF5O1xuICAgIH07XG5cbiAgICBjb25zdCBtb3ZlQ2FyZCA9ICh0aGVDYXJkTmFtZSwgZGVja09uZU5hbWUsIGRlY2tUd29OYW1lKSA9PiB7XG4gICAgICBjb25zdCB0aGlzQ2FyZCA9IGdldENhcmQodGhlQ2FyZE5hbWUpO1xuICAgICAgY29uc3QgZGVja09uZSA9IGdldERlY2soZGVja09uZU5hbWUpO1xuICAgICAgY29uc3QgZGVja1R3byA9IGdldERlY2soZGVja1R3b05hbWUpO1xuICAgICAgY29uc29sZS5sb2codGhpc0NhcmQsIGRlY2tPbmUsIGRlY2tUd28pO1xuICAgICAgZGVsZXRlQ2FyZEZyb21EZWNrKHRoaXNDYXJkLCBkZWNrT25lKTtcbiAgICAgIGFkZENhcmR0b0RlY2sodGhpc0NhcmQsIGRlY2tUd28pO1xuICAgIH07XG5cbiAgICAvLyBjb25zdCB2aWV3Q2FyZCA9ICh0aGVDYXJkTmFtZSkgPT4ge1xuICAgIC8vICAgY29uc3QgdGhpc0NhcmQgPSBnZXRDYXJkKHRoZUNhcmROYW1lKTtcbiAgICAvLyAgIGZvciAoY29uc3QgcHJvcCBpbiB0aGlzQ2FyZCkge1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhgb2JqLiR7cHJvcH0gPSAke3RoaXNDYXJkW3Byb3BdfWApO1xuICAgIC8vICAgfVxuICAgIC8vIH07XG5cbiAgICAvLyBjb25zdCBzZXREYXRlID0gKHRoZUNhcmROYW1lKSA9PiB7XG4gICAgLy8gICBjb25zdCB0aGlzQ2FyZCA9IGdldENhcmQodGhlQ2FyZE5hbWUpO1xuICAgIC8vICAgY29uc3QgYURhdGUgPSBwcm9tcHQoXCJlbnRlciB0aGUgZHVlIGRhdGUgaW4gdGhlIGZvcm0gb2YgTU0uREQuWVk6XCIpO1xuICAgIC8vICAgdGhpc0NhcmQuY2FyZERhdGUgPSBuZXcgRGF0ZShhRGF0ZSk7XG4gICAgLy8gfTtcblxuICAgIC8vIGNvbnN0IGFkZFN0ZXAgPSAodGhlQ2FyZE5hbWUpID0+IHtcbiAgICAvLyAgIGNvbnN0IHRoaXNDYXJkID0gZ2V0Q2FyZCh0aGVDYXJkTmFtZSk7XG4gICAgLy8gICBjb25zdCBpID0gdGhpc0NhcmQuY2FyZFN0ZXBzLmxlbmd0aDtcbiAgICAvLyAgIHRoaXNDYXJkLmNhcmRTdGVwc1tpXSA9IHByb21wdChcImVudGVyIHlvdXIgc3RlcDpcIik7XG4gICAgLy8gfTtcblxuICAgIC8vIGNvbnN0IHNldFN0ZXAgPSAodGhlQ2FyZE5hbWUpID0+IHtcbiAgICAvLyAgIGNvbnN0IHRoaXNDYXJkID0gZ2V0Q2FyZCh0aGVDYXJkTmFtZSk7XG4gICAgLy8gICBjb25zdCBpID0gcHJvbXB0KFwid2hhdCBpbmRleD9cIik7XG4gICAgLy8gICB0aGlzQ2FyZC5jYXJkU3RlcHNbaV0gPSBwcm9tcHQoXCJlbnRlciB5b3VyIHN0ZXA6XCIpO1xuICAgIC8vIH07XG5cbiAgICAvLyBjb25zdCBzZXRDb21wbGV0ZSA9ICh0aGVDYXJkTmFtZSkgPT4ge1xuICAgIC8vICAgY29uc3QgdGhpc0NhcmQgPSBnZXRDYXJkKHRoZUNhcmROYW1lKTtcbiAgICAvLyAgIHRoaXNDYXJkLmNhcmRDb21wbGV0ZVZhbHVlID0gTnVtYmVyKFxuICAgIC8vICAgICBwcm9tcHQoXG4gICAgLy8gICAgICAgXCJpcyB5b3VyIHRhc2sgY29tcGxldGU/IElmIHNvLCBlbnRlciBhICcxJyBvdGhlcndpc2UgZW5ldGVyICcwJy5cIlxuICAgIC8vICAgICApXG4gICAgLy8gICApO1xuICAgIC8vIH07XG5cblxuXG4iLCJjb25zdCBkZWNrID0gKG5hbWUpID0+IHtcbiAgY29uc3QgZGVja05hbWUgPSBuYW1lO1xuICBjb25zdCBjYXJkc0FycmF5ID0gW107XG4gIGNvbnN0IGJvb2ttYXJrID0gMDtcbiAgcmV0dXJuIHtcbiAgICBkZWNrTmFtZSxcbiAgICBjYXJkc0FycmF5LFxuICAgIGJvb2ttYXJrLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVjaztcbiIsImltcG9ydCBjYXJkIGZyb20gXCIuL2xvZ2ljL2NhcmRcIjtcblxuY29uc3Qgc2VyaWFsaXplRGVjayA9IChkZWNrT2JqLCB0aGVEZWNrQXJyYXkpID0+IHtcbiAgICBjb25zdCBpbmRleCA9IHRoZURlY2tBcnJheS5pbmRleE9mKGRlY2tPYmopO1xuICAgIGNvbnN0IGRlY2tTZXJpYWxpemVkID0gSlNPTi5zdHJpbmdpZnkoZGVja09iaik7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7aW5kZXh9YCwgZGVja1NlcmlhbGl6ZWQpO1xufVxuXG5jb25zdCBkZXNlcmlhbGl6ZURlY2sgPSAoaW5kZXgpID0+IHtcbiAgICBjb25zdCBkZWNrRGVzZXJpYWxpemVkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHtpbmRleH1gKSk7XG4gICAgcmV0dXJuIGRlY2tEZXNlcmlhbGl6ZWQ7XG59XG5cbmNvbnN0IHNlcmlhbGl6ZUN1cnJlbnREZWNrSW5kZXggPSAoaW5kZXgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhgaW5kZXggdG8gYmUgc2VyaWFsaXplZCBpcyAke2luZGV4fWApO1xuICAgIGNvbnNvbGUubG9nKGB0aGUgdHlwZSBpcyAke3R5cGVvZiBpbmRleH1gKVxuICAgIGNvbnN0IHRoZUN1cnJlbnREZWNrSW5kZXhTZXJpYWxpemVkID0gSlNPTi5zdHJpbmdpZnkoaW5kZXgpO1xuICAgIGNvbnNvbGUubG9nKGB0aGVDdXJyZW50RGVja0luZGV4U2VyaWFsaXplZCBpcyAke3RoZUN1cnJlbnREZWNrSW5kZXhTZXJpYWxpemVkfWApXG4gICAgY29uc29sZS5sb2coYHRoZSB0eXBlIGlzICR7dHlwZW9mIHRoZUN1cnJlbnREZWNrSW5kZXhTZXJpYWxpemVkfWApXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYHRoZUN1cnJlbnREZWNrSW5kZXhgLCB0aGVDdXJyZW50RGVja0luZGV4U2VyaWFsaXplZCk7XG59XG5cbmV4cG9ydCBjb25zdCBkZXNlcmlhbGl6ZUN1cnJlbnREZWNrSW5kZXggPSAoKSA9PiB7XG4gICAgY29uc3QgdW5wYXJzZWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlQ3VycmVudERlY2tJbmRleCcpO1xuICAgIGNvbnNvbGUubG9nKGB0aGUgdW5wcnNlZCByZXN1bHQgaXM6ICR7dW5wYXJzZWR9YCk7XG4gICAgY29uc3QgY3VycmVudERlY2tJbmRleERlc2VyaWFsaXplZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZUN1cnJlbnREZWNrSW5kZXgnKSk7XG4gICAgY29uc29sZS5sb2coYHRoZSBjdXJyZW50RGVja0luZGV4RGVzZXJpYWxpemVkIGlzICR7Y3VycmVudERlY2tJbmRleERlc2VyaWFsaXplZH1gKTtcbiAgICByZXR1cm4gY3VycmVudERlY2tJbmRleERlc2VyaWFsaXplZDtcbn1cblxuY29uc3Qgc2VyaWFsaXplQ2FyZCA9IChjYXJkT2JqLCB0aGVBbGxEZWNrKSA9PiB7XG4gICAgY29uc3QgaW5kZXggPSB0aGVBbGxEZWNrLmNhcmRzQXJyYXkuaW5kZXhPZihjYXJkT2JqKTtcbiAgICBjb25zdCBjYXJkU2VyaWFsaXplZCA9IEpTT04uc3RyaW5naWZ5KGNhcmRPYmopO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke2luZGV4fWAsIGNhcmRTZXJpYWxpemVkKTtcbn1cblxuY29uc3QgZGVzZXJpYWxpemVDYXJkID0gKGNhcmRJbmRleCkgPT4ge1xuICAgIGNvbnN0IGNhcmREZXNlcmlhbGl6ZWQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGAke2NhcmRJbmRleH1gKSk7XG4gICAgcmV0dXJuIGNhcmREZXNlcmlhbGl6ZWQ7XG59XG5cbmNvbnN0IHNlcmlhbGl6ZUFsbENhcmRzID0gKGFEZWNrKSA9PiB7XG4gICAgbGV0IGluZGV4O1xuICAgIGNvbnN0IHRoZURlY2sgPSBhRGVjaztcbiAgICB0aGVEZWNrLmNhcmRzQXJyYXkuZm9yRWFjaChjYXJkT2JqID0+IHtcbiAgICAgICAgaW5kZXggPSB0aGVEZWNrLmNhcmRzQXJyYXkuaW5kZXhPZihjYXJkT2JqKTtcbiAgICAgICAgdGhlRGVjay5jYXJkc0FycmF5W2luZGV4XSA9IHNlcmlhbGl6ZUNhcmQoY2FyZE9iaik7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoZURlY2s7XG59XG5cbmV4cG9ydCBjb25zdCBkZXNlcmlhbGl6ZUFsbENhcmRzID0gKGFEZWNrKSA9PiB7XG4gICAgbGV0IGluZGV4O1xuICAgIGNvbnN0IHRoZURlY2sgPSBhRGVjaztcbiAgICB0aGVEZWNrLmNhcmRzQXJyYXkuZm9yRWFjaChjYXJkT2JqID0+IHtcbiAgICAgICAgaW5kZXggPSB0aGVEZWNrLmNhcmRzQXJyYXkuaW5kZXhPZihjYXJkT2JqKTtcbiAgICAgICAgdGhlRGVjay5jYXJkc0FycmF5W2luZGV4XSA9IGRlc2VyaWFsaXplQ2FyZChpbmRleCk7XG4gICAgfSlcbn1cblxuXG5leHBvcnQgY29uc3QgZGVzZXJpYWxpemVBbGxEZWNrID0gKGRlY2tOYW1lKSA9PiB7XG4gICAgY29uc3QgdGhlQWxsRGVjayA9IGRlc2VyaWFsaXplRGVjayhkZWNrTmFtZSk7XG4gICAgZGVzZXJpYWxpemVBbGxDYXJkcyh0aGVBbGxEZWNrKTtcbiAgICByZXR1cm4gdGhlQWxsRGVjaztcbn1cblxuY29uc3Qgc2VyaWFsaXplQWxsRGVja3MgPSAoYURlY2tBcnJheSkgPT4ge1xuICAgIGFEZWNrQXJyYXkuZm9yRWFjaChkZWNrT2JqID0+IHtcbiAgICAgICAgc2VyaWFsaXplRGVjayhkZWNrT2JqKTtcbiAgICB9KVxufVxuXG5jb25zdCBzZXJpYWxpemVEZWNrQXJyYXkgPSAoYURlY2tBcnJheSkgPT4ge1xuICAgIGNvbnN0IHRoZURlY2tBcnJheSA9IGFEZWNrQXJyYXk7XG4gICAgY29uc3Qgc2VyQWxsID0gc2VyaWFsaXplQWxsQ2FyZHModGhlRGVja0FycmF5WzBdKTtcbiAgICB0aGVEZWNrQXJyYXlbMF0gPSBzZXJBbGw7XG4gICAgbGV0IGluZGV4O1xuICAgIHRoZURlY2tBcnJheS5mb3JFYWNoKGRlY2tPYmogPT4ge1xuICAgICAgICBpbmRleCA9IHRoZURlY2tBcnJheS5pbmRleE9mKGRlY2tPYmopO1xuICAgICAgICBpZihpbmRleCAhPT0gMCl7XG4gICAgICAgICAgICB0aGVEZWNrQXJyYXlbaW5kZXhdID0gc2VyaWFsaXplRGVjayhkZWNrT2JqLCBhRGVja0FycmF5KTtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zb2xlLmxvZyhgdGhlIGRlY2sgYXJyYXkgdG9iZSBzZXJpYWxpemVkIGlzICR7YURlY2tBcnJheX1gKVxuICAgIGNvbnN0IGRlY2tBcnJheVNlcmlhbGl6ZWQgPSBKU09OLnN0cmluZ2lmeShhRGVja0FycmF5KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgZGVja0FycmF5YCwgZGVja0FycmF5U2VyaWFsaXplZCk7XG59XG5cbmV4cG9ydCBjb25zdCBkZXNlcmlhbGl6ZURlY2tBcnJheSA9ICgpID0+IHtcbiAgICBsZXQgaW5kZXg7XG4gICAgY29uc3QgZGVja0FycmF5RGVzZXJpYWxpemVkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGVja0FycmF5JykpO1xuICAgIGRlY2tBcnJheURlc2VyaWFsaXplZC5mb3JFYWNoKHNlckRlY2sgPT4ge1xuICAgICAgICBpbmRleCA9IGRlY2tBcnJheURlc2VyaWFsaXplZC5pbmRleE9mKHNlckRlY2spO1xuICAgICAgICBkZWNrQXJyYXlEZXNlcmlhbGl6ZWRbaW5kZXhdID0gZGVzZXJpYWxpemVEZWNrKGluZGV4KVxuICAgIH0pXG4gICAgcmV0dXJuIGRlY2tBcnJheURlc2VyaWFsaXplZDtcbn1cblxuZXhwb3J0IGNvbnN0IHNlcmlhbGl6ZURhdGEgPSAoYURlY2tBcnJheSwgYUN1cnJlbnREZWNrKSA9PntcbiAgICBjb25zdCBpbmRleCA9IGFEZWNrQXJyYXkuaW5kZXhPZihhQ3VycmVudERlY2spO1xuICAgIGNvbnNvbGUubG9nKGB0aGUgaW5kZXggaXMgJHtpbmRleH1gKVxuICAgIGNvbnNvbGUubG9nKGB0aGUgY3VycmVudERlY2sgaXMgJHthQ3VycmVudERlY2suZGVja05hbWV9YClcbiAgICBzZXJpYWxpemVDdXJyZW50RGVja0luZGV4KGluZGV4KTtcbiAgICBzZXJpYWxpemVEZWNrQXJyYXkoYURlY2tBcnJheSk7XG59XG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
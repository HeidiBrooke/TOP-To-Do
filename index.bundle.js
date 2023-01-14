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
___CSS_LOADER_EXPORT___.push([module.id, "/* *{\n    box-sizing: border-box;\n} */\nbody {\n    padding: 0px;\n    margin: 0px;\n    position: relative;\n    font-size: 14px;\n    \n    /* height: 100vh; */\n    \n}\n\ndiv {\n    /* border-top: 2px solid white; */\n    padding: 4px;\n\n}\n#content {\n    margin: 0px;\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    background-color: rgb(63, 135, 152);\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    align-items: center;\n    position: relative;\n}\n\n#container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 4px;\n    padding: 20px;\n    margin: 20px 0;\n    width: 480px;\n    height: 100vh;  \n}\n\n#header{\n    display: flex;\n    width: 100%;\n    height: 100px;\n}\n\n#deckDock{\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 200px;\n}\n\n#deckArea{\n    display: flex;\n    flex-direction: row;\n    gap: 7px;\n}\n\n#table{\n    padding: 4px;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n}\n\n#logo, .title{\n    width: 100px;\n    font-size: 32px;\n    font-weight: 600;\n    font-family: 'Raleway', sans-serif;\n    color: white;\n    border: none;\n}\n\n.title{\n    width: auto;\n    font-size: 24px;\n}\n\n\n#cardArea{\n    display: grid;\n    grid-template-columns: 60px 1fr 60px;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    border: none;\n}\n\n.deck, .blankDeck{\n    /* pointer-events: none; */\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: repeat(5, 1fr);\n    width: 60px;\n    height: 90px;\n    border-radius: 4px;\n    background-color: white;\n    /* box-shadow: rgba(0, 0, 0, 0.16) 0 7px 9px -7px;\n    box-shadow: rgba(53, 82, 94, 0.3) 1px 7px 7px 1px; */\n    justify-items: center;\n    justify-content: space-between;\n    align-items: center;\n    /* padding: 0px; */\n}\n\n.blankDeck{\n    background-color:  rgb(46, 99, 111);\n    \n}\n\n.menu{\n    border: none;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: left;\n    gap: 4px;\n}\n\n#deckTitle, #cardTitle, #cardDate, #cardSteps{\n    margin-top: 8px;\n    font-family: 'Raleway', sans-serif;\n    color: rgb(63, 135, 152);\n    font-weight: 600;\n    text-transform: uppercase;\n    text-align: center;\n    text-justify: center;\n}\n\n#deckTitle{\n    margin: 0px;\n    grid-column: 1/4;\n    grid-row: 1/5;\n    /* background-color: aqua; */\n    /* width: 100%;\n    height: 100%; */\n    cursor: pointer;\n    /* opacity: 50%; */\n}\n\n.selectedDeck {\n    box-shadow: rgb(102, 220, 241) 0 0 3px 2px;\n    /* box-shadow: rgba(53, 82, 94, 0.3) 1px 9px 9px 1px; */\n}\n\n#addCardButton, #addDeckButton{\n    font-size: 48px;\n    cursor: pointer;\n}\n\n#addCardButton:hover, #addDeckButton:hover, .nextButton:hover{\n    /* text-shadow:  0 0 3px 2px, rgb(102, 173, 241); */\n    text-shadow: -1px 1px 2px rgb(102, 220, 241),\n\t\t\t\t  1px 1px 2px rgb(102, 220, 241),\n\t\t\t\t  1px -1px 0 rgb(102, 220, 241),\n\t\t\t\t  -1px -1px 0 rgb(102, 220, 241);\n    \n}\n.nextButton{\n    justify-self: right;\n    color: white;\n    color: rgb(80, 163, 182);\n    font-family: 'Raleway', sans-serif;\n    font-size: 72px;\n    border: none;\n    cursor: pointer;\n}\n\n#forwardButton{\n    justify-self: left;\n    grid-column: 3/4;\n}\n\n#backwardButton{\n    justify-self: right;\n    grid-column: 1/2;\n    grid-row: 1/2;\n}\n\n\n.cardBig{\n    grid-column: 2/3;\n    grid-row: 1/2;\n    justify-self: center;\n    display: flex;\n    width: 240px;\n    height: 360px;\n    border-radius: 16px;\n    background-color: white;\n    box-shadow: rgba(53, 82, 94, 0.3) 1px 9px 9px 1px;\n    justify-content: center;\n    align-items: center;\n    z-index: 1;\n\n}\n\n#topCard{\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: repeat(8, 1fr);\n\n    /* flex-direction: column; */\n}\n\n.bigPlus, .littlePlus{\n    grid-column: 1/5;\n    grid-row: 4/6;\n    cursor: pointer;\n    font-size: 72px;\n    color: rgb(63, 135, 152);\n    font-family: 'Raleway', sans-serif;\n    font-weight: 600;\n    align-self: center;\n    justify-self: center;\n    \n}\n\n.littlePlus{\n    grid-row: 3/4;\n}\n\n.stack0{\n    background-color: white;\n    position: absolute;\n    top: 6px;\n    left: 63px;\n    /* z-index: -1; */\n    transform: rotate(2deg);\n}\n\n.stack1{\n    position: absolute;\n    top: 3px;\n    left: 58px;\n    /* z-index: -2; */\n    transform: rotate(1deg);\n}\n\n.stack2{\n    position: absolute;\n    top: 4px;\n    left: 120px;\n    /* z-index: -3; */\n    transform: rotate(6deg);\n}\n\n.editSize{\n    /* position: absolute;\n    top: 180px; */\n    width: 300px;\n    height: 450px;\n    z-index: 3;\n}\n\n.overLayHolder{\n    position: absolute;\n    visibility: hidden;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100vw;\n    height: 100vh; \n    \n}\n\n.overlay{\n    display: grid;\n    position: absolute;\n    background-color: rgb(37, 107, 107);\n    opacity: 60%;\n    height: 100vh;\n    width: 100vw;\n    z-index: 2;\n    padding: 20px; \n}\n\n.formDiv{\n    display: flex;\n    flex-direction: column;\n    padding-top: 100px;\n    gap: 20px;\n    width: 300px;\n    height: 600px;\n    z-index: 3;\n}\n\n.submitButtonsDiv{\n    display: flex;\n    flex-direction: row;\n    gap: 16px;\n    height: 44px;\n}\n\n.cardForm{\n    display: grid;\n    gap: 16px;\n    width:300px;\n    height: 410px;\n    grid-template-columns: 1fr 1.5fr 1.5fr 1fr;\n    grid-template-rows: repeat(7, 1fr);\n    padding: 20px;\n}\n\n.input, .check{\n    padding: 8px;\n    grid-column: 1/5;\n    border: none;\n    outline: none;\n    border-radius: 16px;\n    background-color: rgb(242, 242, 242);\n    color: rgb(80, 163, 182);\n    font-family: 'Raleway', sans-serif;\n    font-size: 18px;\n    text-align: center;\n}\n\n.input:hover{\n    box-shadow: rgb(102, 173, 241) 0 0 3px 2px;\n    box-shadow: rgb(102, 220, 241) 0 0 3px 2px;\n}\n\n#step{\n    grid-column: 2/5;\n    background-color: white;\n    font-size: 15px;\n    display: flex;\n    align-items: flex-start;\n    text-align: left;\n    text-justify: left;\n}\n\n#stepHolder{\n    grid-column: 1/5;\n    grid-row: 3/6;\n    /* background-color: aquamarine; */\n    display: flex;\n    flex-direction: column;\n}\n\n#preStep{\n    grid-column: 1/2;\n    grid-row: 3/4;\n    background-color: white;\n    font-size: 24px;\n    font-weight: 600;\n}\n\n\n.stepDiv{\n    /* background-color: aqua; */\n}\n\n\n#step:hover, #preStep:hover{\n    box-shadow: none;\n}\n\n.cardTitle{\n   grid-row: 1/2;\n   grid-column: 1/5;\n   text-align: center;\n}\n\n#cardSteps{\n    grid-column: 2/4;\n    grid-row: 2/7;\n}\n\n#cardDate{\n    grid-row: 7/8;\n    grid-column: 1/5;\n    text-align: center;\n}\n\n#cardDelete{\n    margin-left: 12px;\n    grid-column: 1/2;\n    grid-row: 8/9;\n    font-size: 16px;\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    background-color: rgb(80, 163, 182);\n    color: white;\n    text-align: center;\n    text-justify: center;\n    cursor: pointer;\n}\n\n#deckDelete{\n    grid-column: 1/2;\n    grid-row: 5/6;\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    background-color: rgb(80, 163, 182);\n    color: white;\n    font-family: 'Raleway', sans-serif;\n    font-size: 9px;\n    font-weight: 600;\n    text-align: center;\n    text-justify: center; \n    align-self: flex-start;\n    cursor: pointer;\n}\n\n.check{\n    background-color: white;\n    width: 50px;\n    z-index: 3;\n    text-align: center;\n    vertical-align: center;\n}\n\n.grow { \n    cursor: pointer;\n    transition: all .1s ease-in-out; \n    }\n    \n.grow:hover { \n    transform: scale(1.05); \n    }\n\n.check:hover{\n    font-size: 24px;\n}\n\n[contenteditable] {\n    /* outline: 0px solid transparent; */\n  }\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'); \n@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=Oswald:wght@200;300;400;500;600;700&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\n/* *{\n    box-sizing: border-box;\n} */\nbody {\n    padding: 0px;\n    margin: 0px;\n    position: relative;\n    font-size: 14px;\n    \n    /* height: 100vh; */\n    \n}\n\ndiv {\n    /* border-top: 2px solid white; */\n    padding: 4px;\n\n}\n#content {\n    margin: 0px;\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    background-color: rgb(63, 135, 152);\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    align-items: center;\n    position: relative;\n}\n\n#container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 4px;\n    padding: 20px;\n    margin: 20px 0;\n    width: 480px;\n    height: 100vh;  \n}\n\n#header{\n    display: flex;\n    width: 100%;\n    height: 100px;\n}\n\n#deckDock{\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 200px;\n}\n\n#deckArea{\n    display: flex;\n    flex-direction: row;\n    gap: 7px;\n}\n\n#table{\n    padding: 4px;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n}\n\n#logo, .title{\n    width: 100px;\n    font-size: 32px;\n    font-weight: 600;\n    font-family: 'Raleway', sans-serif;\n    color: white;\n    border: none;\n}\n\n.title{\n    width: auto;\n    font-size: 24px;\n}\n\n\n#cardArea{\n    display: grid;\n    grid-template-columns: 60px 1fr 60px;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    border: none;\n}\n\n.deck, .blankDeck{\n    /* pointer-events: none; */\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: repeat(5, 1fr);\n    width: 60px;\n    height: 90px;\n    border-radius: 4px;\n    background-color: white;\n    /* box-shadow: rgba(0, 0, 0, 0.16) 0 7px 9px -7px;\n    box-shadow: rgba(53, 82, 94, 0.3) 1px 7px 7px 1px; */\n    justify-items: center;\n    justify-content: space-between;\n    align-items: center;\n    /* padding: 0px; */\n}\n\n.blankDeck{\n    background-color:  rgb(46, 99, 111);\n    \n}\n\n.menu{\n    border: none;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: left;\n    gap: 4px;\n}\n\n#deckTitle, #cardTitle, #cardDate, #cardSteps{\n    margin-top: 8px;\n    font-family: 'Raleway', sans-serif;\n    color: rgb(63, 135, 152);\n    font-weight: 600;\n    text-transform: uppercase;\n    text-align: center;\n    text-justify: center;\n}\n\n#deckTitle{\n    margin: 0px;\n    grid-column: 1/4;\n    grid-row: 1/5;\n    /* background-color: aqua; */\n    /* width: 100%;\n    height: 100%; */\n    cursor: pointer;\n    /* opacity: 50%; */\n}\n\n.selectedDeck {\n    box-shadow: rgb(102, 220, 241) 0 0 3px 2px;\n    /* box-shadow: rgba(53, 82, 94, 0.3) 1px 9px 9px 1px; */\n}\n\n#addCardButton, #addDeckButton{\n    font-size: 48px;\n    cursor: pointer;\n}\n\n#addCardButton:hover, #addDeckButton:hover, .nextButton:hover{\n    /* text-shadow:  0 0 3px 2px, rgb(102, 173, 241); */\n    text-shadow: -1px 1px 2px rgb(102, 220, 241),\n\t\t\t\t  1px 1px 2px rgb(102, 220, 241),\n\t\t\t\t  1px -1px 0 rgb(102, 220, 241),\n\t\t\t\t  -1px -1px 0 rgb(102, 220, 241);\n    \n}\n.nextButton{\n    justify-self: right;\n    color: white;\n    color: rgb(80, 163, 182);\n    font-family: 'Raleway', sans-serif;\n    font-size: 72px;\n    border: none;\n    cursor: pointer;\n}\n\n#forwardButton{\n    justify-self: left;\n    grid-column: 3/4;\n}\n\n#backwardButton{\n    justify-self: right;\n    grid-column: 1/2;\n    grid-row: 1/2;\n}\n\n\n.cardBig{\n    grid-column: 2/3;\n    grid-row: 1/2;\n    justify-self: center;\n    display: flex;\n    width: 240px;\n    height: 360px;\n    border-radius: 16px;\n    background-color: white;\n    box-shadow: rgba(53, 82, 94, 0.3) 1px 9px 9px 1px;\n    justify-content: center;\n    align-items: center;\n    z-index: 1;\n\n}\n\n#topCard{\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: repeat(8, 1fr);\n\n    /* flex-direction: column; */\n}\n\n.bigPlus, .littlePlus{\n    grid-column: 1/5;\n    grid-row: 4/6;\n    cursor: pointer;\n    font-size: 72px;\n    color: rgb(63, 135, 152);\n    font-family: 'Raleway', sans-serif;\n    font-weight: 600;\n    align-self: center;\n    justify-self: center;\n    \n}\n\n.littlePlus{\n    grid-row: 3/4;\n}\n\n.stack0{\n    background-color: white;\n    position: absolute;\n    top: 6px;\n    left: 63px;\n    /* z-index: -1; */\n    transform: rotate(2deg);\n}\n\n.stack1{\n    position: absolute;\n    top: 3px;\n    left: 58px;\n    /* z-index: -2; */\n    transform: rotate(1deg);\n}\n\n.stack2{\n    position: absolute;\n    top: 4px;\n    left: 120px;\n    /* z-index: -3; */\n    transform: rotate(6deg);\n}\n\n.editSize{\n    /* position: absolute;\n    top: 180px; */\n    width: 300px;\n    height: 450px;\n    z-index: 3;\n}\n\n.overLayHolder{\n    position: absolute;\n    visibility: hidden;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100vw;\n    height: 100vh; \n    \n}\n\n.overlay{\n    display: grid;\n    position: absolute;\n    background-color: rgb(37, 107, 107);\n    opacity: 60%;\n    height: 100vh;\n    width: 100vw;\n    z-index: 2;\n    padding: 20px; \n}\n\n.formDiv{\n    display: flex;\n    flex-direction: column;\n    padding-top: 100px;\n    gap: 20px;\n    width: 300px;\n    height: 600px;\n    z-index: 3;\n}\n\n.submitButtonsDiv{\n    display: flex;\n    flex-direction: row;\n    gap: 16px;\n    height: 44px;\n}\n\n.cardForm{\n    display: grid;\n    gap: 16px;\n    width:300px;\n    height: 410px;\n    grid-template-columns: 1fr 1.5fr 1.5fr 1fr;\n    grid-template-rows: repeat(7, 1fr);\n    padding: 20px;\n}\n\n.input, .check{\n    padding: 8px;\n    grid-column: 1/5;\n    border: none;\n    outline: none;\n    border-radius: 16px;\n    background-color: rgb(242, 242, 242);\n    color: rgb(80, 163, 182);\n    font-family: 'Raleway', sans-serif;\n    font-size: 18px;\n    text-align: center;\n}\n\n.input:hover{\n    box-shadow: rgb(102, 173, 241) 0 0 3px 2px;\n    box-shadow: rgb(102, 220, 241) 0 0 3px 2px;\n}\n\n#step{\n    grid-column: 2/5;\n    background-color: white;\n    font-size: 15px;\n    display: flex;\n    align-items: flex-start;\n    text-align: left;\n    text-justify: left;\n}\n\n#stepHolder{\n    grid-column: 1/5;\n    grid-row: 3/6;\n    /* background-color: aquamarine; */\n    display: flex;\n    flex-direction: column;\n}\n\n#preStep{\n    grid-column: 1/2;\n    grid-row: 3/4;\n    background-color: white;\n    font-size: 24px;\n    font-weight: 600;\n}\n\n\n.stepDiv{\n    /* background-color: aqua; */\n}\n\n\n#step:hover, #preStep:hover{\n    box-shadow: none;\n}\n\n.cardTitle{\n   grid-row: 1/2;\n   grid-column: 1/5;\n   text-align: center;\n}\n\n#cardSteps{\n    grid-column: 2/4;\n    grid-row: 2/7;\n}\n\n#cardDate{\n    grid-row: 7/8;\n    grid-column: 1/5;\n    text-align: center;\n}\n\n#cardDelete{\n    margin-left: 12px;\n    grid-column: 1/2;\n    grid-row: 8/9;\n    font-size: 16px;\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    background-color: rgb(80, 163, 182);\n    color: white;\n    text-align: center;\n    text-justify: center;\n    cursor: pointer;\n}\n\n#deckDelete{\n    grid-column: 1/2;\n    grid-row: 5/6;\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    background-color: rgb(80, 163, 182);\n    color: white;\n    font-family: 'Raleway', sans-serif;\n    font-size: 9px;\n    font-weight: 600;\n    text-align: center;\n    text-justify: center; \n    align-self: flex-start;\n    cursor: pointer;\n}\n\n.check{\n    background-color: white;\n    width: 50px;\n    z-index: 3;\n    text-align: center;\n    vertical-align: center;\n}\n\n.grow { \n    cursor: pointer;\n    transition: all .1s ease-in-out; \n    }\n    \n.grow:hover { \n    transform: scale(1.05); \n    }\n\n.check:hover{\n    font-size: 24px;\n}\n\n[contenteditable] {\n    /* outline: 0px solid transparent; */\n  }\n\n"],"sourceRoot":""}]);
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

/***/ "./src/GUI.js":
/*!********************!*\
  !*** ./src/GUI.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GUILayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GUILayout */ "./src/GUILayout.js");
/* harmony import */ var _GUIDecks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GUIDecks */ "./src/GUIDecks.js");


//DRAW page, deck area, card area, default decks and default top card

let isInitialLoad = 0;

const drawGUIInitial = (aDeckArray) => {
    (0,_GUILayout__WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_GUIDecks__WEBPACK_IMPORTED_MODULE_1__.drawDecks)(aDeckArray);
}

const drawGUI = (aDeckArray, aCurrentDeck) => {
    ;(0,_GUIDecks__WEBPACK_IMPORTED_MODULE_1__.drawDecks)(aDeckArray);
    const currentDeckDiv = document.querySelector(`[data-title="${aCurrentDeck.deckName}"]`);
    (0,_GUIDecks__WEBPACK_IMPORTED_MODULE_1__.styleCurrent)(currentDeckDiv);  
}

const loadGUI = (aDeckArray, aCurrentDeck) => {
    if(isInitialLoad === 0){
        drawGUIInitial(aDeckArray, aCurrentDeck);
        isInitialLoad = 1;
    }
    else{
        drawGUI(aDeckArray, aCurrentDeck);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadGUI);








/***/ }),

/***/ "./src/GUIDecks.js":
/*!*************************!*\
  !*** ./src/GUIDecks.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "drawDecks": () => (/* binding */ drawDecks),
/* harmony export */   "styleCurrent": () => (/* binding */ styleCurrent)
/* harmony export */ });
/* harmony import */ var _deck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deck */ "./src/deck.js");
/* harmony import */ var _GUILayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GUILayout */ "./src/GUILayout.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




const {deckArea} = (0,_GUILayout__WEBPACK_IMPORTED_MODULE_1__["default"])();


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

            //deckDiv.addEventListener('click', updateCurrentDeck);
            // deckTitleDiv.addEventListener('click', updateCurrentDeck);
            //deckTitleDiv.addEventListener('input', saveDeckTitle);
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
const drawDeckDeleteButton = () => {
    const deckDeleteButton = document.createElement('div');
    deckDeleteButton.setAttribute('id', 'deckDelete');
    //deckDeleteButton.addEventListener('click', deleteAndEraseDeck, true);
    deckDeleteButton.textContent = '-'
    return deckDeleteButton;
}

const eraseDecks = () => {
    const oldDecks = document.getElementsByClassName('deck');
    Array.from(oldDecks).forEach(deckElement => {
        deckElement.remove();
    })
}

/***/ }),

/***/ "./src/GUILayout.js":
/*!**************************!*\
  !*** ./src/GUILayout.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const layout = () =>{
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
/* harmony import */ var _GUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GUI */ "./src/GUI.js");





let currentDeck = _controlls__WEBPACK_IMPORTED_MODULE_0__.defaultDeck;
let currentDeckDiv;

(0,_GUI__WEBPACK_IMPORTED_MODULE_2__["default"])(_controlls__WEBPACK_IMPORTED_MODULE_0__.deckArray, currentDeck);

const selectDeck = (e) => {
    const nameOfDeck = e.target.getAttribute('data-title');
    currentDeck = _controlls__WEBPACK_IMPORTED_MODULE_0__.getDeck(nameOfDeck);
    refresh();

}

const selectDeckListeners = () => {
    const deckCollection = document.getElementsByClassName('deck');
    Array.from(deckCollection).forEach(deckDiv => {
       deckDiv.addEventListener('click', selectDeck);
    })
}

const setListeners = () => {
    selectDeckListeners();
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
const refresh = () => {
    eraseGUI();
    (0,_GUI__WEBPACK_IMPORTED_MODULE_2__["default"])(_controlls__WEBPACK_IMPORTED_MODULE_0__.deckArray, currentDeck);
    setListeners()
}

refresh();

const addEventListeners = (elementName, aFunction) =>{
    const element = document.getElementById(`${elementName}`);
    element.addEventListener('click', aFunction);
}

const addNewStepField = (e) => {
    if(e.keyCode === 13){
        console.log(`pressed ENTER`);
        const step = drawStep();
        step.focus();
    }
}

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






const saveDeckTitle = (e) => {
    // console.log('saving change to title');
    const text = e.target.textContent;
    currentDeck.deckName = text;
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



const saveStep = (e) => {
    if(e.keyCode === 13){
        e.preventDefault();
        const initialText = e.target.textContent;
        const stepString = e.target.textContent;
        console.log(`stepString is ${stepString}`);
        const theCard = _controlls__WEBPACK_IMPORTED_MODULE_0__.getCard(currentDeck.cardsArray[currentDeck.bookmark]);
        const index = theCard.cardSteps.indexOf(stepString);
        console.log(`the card steps are: ${theCard.cardSteps}`);
        const text = e.target.textContent;
        console.log(`text is ${text}`);
        console.log(`index is ${index}`);
        if(text !== ''){
            if(theCard.cardSteps.length < 1){
                
                    console.log(`card steps less than 1`)
                    theCard.cardSteps.push(text);
                
            }
            else {
                    if(theCard.cardSteps[index] === initialText){
                        theCard.cardSteps[index] = text;
                    }
                    else {
                        theCard.cardSteps.push(text);
                    }
                        
                
                    
                }
            const newStepDiv = drawCardStep();
            newStepDiv.focus();
            }
            e.target.blur();
            const cardStepsDiv = document.getElementById('cardSteps');
            const thisStep = cardStepsDiv.lastChild;
            // if(e.target.hasFocus() == false){
            //     thisStep.remove();
            // }
            
        }
        
        

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
        console.log(`removing ${stepElement} from ${stepsDiv}`)
        stepElement.remove();
    })
    
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



const addForwardBackwardListeners = () => {
    addEventListeners('forwardButton', advanceBookmark);
    addEventListeners('backwardButton', previousBookmark);
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


// addEventListeners('addDeckButton', showDeckForm);
// addEventListeners('addCardButton', showCardForm);
// addEventListeners('cancel', hideForm);
// addEventListeners('check', saveForm);


// drawCardStack(defaultDeck);
// firstDrawDecks(deckArray);
// addForwardBackwardListeners();
// styleCurrent();





/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxRQUFRLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxjQUFjLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssTUFBTSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFFBQVEsS0FBSyxZQUFZLFFBQVEsS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxV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N0MsMENBQTBDLCtDQUErQztBQUN6RjtBQUNBO0FBQ0Esd0RBQXdELHFCQUFxQjtBQUM3RTtBQUNBO0FBQ0EsZ0RBQWdELFlBQVk7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtdG8tZG8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvcC10by1kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvcC10by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b3AtdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvcC10by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b3AtdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLy4vc3JjL0dVSS5qcyIsIndlYnBhY2s6Ly90b3AtdG8tZG8vLi9zcmMvR1VJRGVja3MuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLy4vc3JjL0dVSUxheW91dC5qcyIsIndlYnBhY2s6Ly90b3AtdG8tZG8vLi9zcmMvY2FyZC5qcyIsIndlYnBhY2s6Ly90b3AtdG8tZG8vLi9zcmMvY29udHJvbGxzLmpzIiwid2VicGFjazovL3RvcC10by1kby8uL3NyYy9kZWNrLmpzIiwid2VicGFjazovL3RvcC10by1kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJhbGV3YXk6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9zd2FsZDp3Z2h0QDIwMDszMDA7NDAwOzUwMDs2MDA7NzAwJmZhbWlseT1SYWxld2F5Oml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Db3VyaWVyK1ByaW1lOml0YWwsd2dodEAwLDQwMDswLDcwMDsxLDQwMDsxLDcwMCZmYW1pbHk9T3N3YWxkOndnaHRAMjAwOzMwMDs0MDA7NTAwOzYwMDs3MDAmZmFtaWx5PVJhbGV3YXk6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qICp7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufSAqL1xcbmJvZHkge1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgXFxuICAgIC8qIGhlaWdodDogMTAwdmg7ICovXFxuICAgIFxcbn1cXG5cXG5kaXYge1xcbiAgICAvKiBib3JkZXItdG9wOiAycHggc29saWQgd2hpdGU7ICovXFxuICAgIHBhZGRpbmc6IDRweDtcXG5cXG59XFxuI2NvbnRlbnQge1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjMsIDEzNSwgMTUyKTtcXG4gICAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDRweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgbWFyZ2luOiAyMHB4IDA7XFxuICAgIHdpZHRoOiA0ODBweDtcXG4gICAgaGVpZ2h0OiAxMDB2aDsgIFxcbn1cXG5cXG4jaGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuI2RlY2tEb2Nre1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG59XFxuXFxuI2RlY2tBcmVhe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBnYXA6IDdweDtcXG59XFxuXFxuI3RhYmxle1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbiNsb2dvLCAudGl0bGV7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnRpdGxle1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG5cXG4jY2FyZEFyZWF7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjBweCAxZnIgNjBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uZGVjaywgLmJsYW5rRGVja3tcXG4gICAgLyogcG9pbnRlci1ldmVudHM6IG5vbmU7ICovXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDFmcik7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBoZWlnaHQ6IDkwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIC8qIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMCA3cHggOXB4IC03cHg7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoNTMsIDgyLCA5NCwgMC4zKSAxcHggN3B4IDdweCAxcHg7ICovXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAvKiBwYWRkaW5nOiAwcHg7ICovXFxufVxcblxcbi5ibGFua0RlY2t7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICByZ2IoNDYsIDk5LCAxMTEpO1xcbiAgICBcXG59XFxuXFxuLm1lbnV7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcbiAgICBnYXA6IDRweDtcXG59XFxuXFxuI2RlY2tUaXRsZSwgI2NhcmRUaXRsZSwgI2NhcmREYXRlLCAjY2FyZFN0ZXBze1xcbiAgICBtYXJnaW4tdG9wOiA4cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiByZ2IoNjMsIDEzNSwgMTUyKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LWp1c3RpZnk6IGNlbnRlcjtcXG59XFxuXFxuI2RlY2tUaXRsZXtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGdyaWQtY29sdW1uOiAxLzQ7XFxuICAgIGdyaWQtcm93OiAxLzU7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGFxdWE7ICovXFxuICAgIC8qIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7ICovXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgLyogb3BhY2l0eTogNTAlOyAqL1xcbn1cXG5cXG4uc2VsZWN0ZWREZWNrIHtcXG4gICAgYm94LXNoYWRvdzogcmdiKDEwMiwgMjIwLCAyNDEpIDAgMCAzcHggMnB4O1xcbiAgICAvKiBib3gtc2hhZG93OiByZ2JhKDUzLCA4MiwgOTQsIDAuMykgMXB4IDlweCA5cHggMXB4OyAqL1xcbn1cXG5cXG4jYWRkQ2FyZEJ1dHRvbiwgI2FkZERlY2tCdXR0b257XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jYWRkQ2FyZEJ1dHRvbjpob3ZlciwgI2FkZERlY2tCdXR0b246aG92ZXIsIC5uZXh0QnV0dG9uOmhvdmVye1xcbiAgICAvKiB0ZXh0LXNoYWRvdzogIDAgMCAzcHggMnB4LCByZ2IoMTAyLCAxNzMsIDI0MSk7ICovXFxuICAgIHRleHQtc2hhZG93OiAtMXB4IDFweCAycHggcmdiKDEwMiwgMjIwLCAyNDEpLFxcblxcdFxcdFxcdFxcdCAgMXB4IDFweCAycHggcmdiKDEwMiwgMjIwLCAyNDEpLFxcblxcdFxcdFxcdFxcdCAgMXB4IC0xcHggMCByZ2IoMTAyLCAyMjAsIDI0MSksXFxuXFx0XFx0XFx0XFx0ICAtMXB4IC0xcHggMCByZ2IoMTAyLCAyMjAsIDI0MSk7XFxuICAgIFxcbn1cXG4ubmV4dEJ1dHRvbntcXG4gICAganVzdGlmeS1zZWxmOiByaWdodDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogcmdiKDgwLCAxNjMsIDE4Mik7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogNzJweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNmb3J3YXJkQnV0dG9ue1xcbiAgICBqdXN0aWZ5LXNlbGY6IGxlZnQ7XFxuICAgIGdyaWQtY29sdW1uOiAzLzQ7XFxufVxcblxcbiNiYWNrd2FyZEJ1dHRvbntcXG4gICAganVzdGlmeS1zZWxmOiByaWdodDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG59XFxuXFxuXFxuLmNhcmRCaWd7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMjQwcHg7XFxuICAgIGhlaWdodDogMzYwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDUzLCA4MiwgOTQsIDAuMykgMXB4IDlweCA5cHggMXB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgei1pbmRleDogMTtcXG5cXG59XFxuXFxuI3RvcENhcmR7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDgsIDFmcik7XFxuXFxuICAgIC8qIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICovXFxufVxcblxcbi5iaWdQbHVzLCAubGl0dGxlUGx1c3tcXG4gICAgZ3JpZC1jb2x1bW46IDEvNTtcXG4gICAgZ3JpZC1yb3c6IDQvNjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDcycHg7XFxuICAgIGNvbG9yOiByZ2IoNjMsIDEzNSwgMTUyKTtcXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgXFxufVxcblxcbi5saXR0bGVQbHVze1xcbiAgICBncmlkLXJvdzogMy80O1xcbn1cXG5cXG4uc3RhY2swe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDZweDtcXG4gICAgbGVmdDogNjNweDtcXG4gICAgLyogei1pbmRleDogLTE7ICovXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDJkZWcpO1xcbn1cXG5cXG4uc3RhY2sxe1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogM3B4O1xcbiAgICBsZWZ0OiA1OHB4O1xcbiAgICAvKiB6LWluZGV4OiAtMjsgKi9cXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMWRlZyk7XFxufVxcblxcbi5zdGFjazJ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA0cHg7XFxuICAgIGxlZnQ6IDEyMHB4O1xcbiAgICAvKiB6LWluZGV4OiAtMzsgKi9cXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNmRlZyk7XFxufVxcblxcbi5lZGl0U2l6ZXtcXG4gICAgLyogcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDE4MHB4OyAqL1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogNDUwcHg7XFxuICAgIHotaW5kZXg6IDM7XFxufVxcblxcbi5vdmVyTGF5SG9sZGVye1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDsgXFxuICAgIFxcbn1cXG5cXG4ub3ZlcmxheXtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzcsIDEwNywgMTA3KTtcXG4gICAgb3BhY2l0eTogNjAlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIHBhZGRpbmc6IDIwcHg7IFxcbn1cXG5cXG4uZm9ybURpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiA2MDBweDtcXG4gICAgei1pbmRleDogMztcXG59XFxuXFxuLnN1Ym1pdEJ1dHRvbnNEaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogMTZweDtcXG4gICAgaGVpZ2h0OiA0NHB4O1xcbn1cXG5cXG4uY2FyZEZvcm17XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMTZweDtcXG4gICAgd2lkdGg6MzAwcHg7XFxuICAgIGhlaWdodDogNDEwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEuNWZyIDEuNWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNywgMWZyKTtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLmlucHV0LCAuY2hlY2t7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvNTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQyLCAyNDIsIDI0Mik7XFxuICAgIGNvbG9yOiByZ2IoODAsIDE2MywgMTgyKTtcXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5pbnB1dDpob3ZlcntcXG4gICAgYm94LXNoYWRvdzogcmdiKDEwMiwgMTczLCAyNDEpIDAgMCAzcHggMnB4O1xcbiAgICBib3gtc2hhZG93OiByZ2IoMTAyLCAyMjAsIDI0MSkgMCAwIDNweCAycHg7XFxufVxcblxcbiNzdGVwe1xcbiAgICBncmlkLWNvbHVtbjogMi81O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgdGV4dC1qdXN0aWZ5OiBsZWZ0O1xcbn1cXG5cXG4jc3RlcEhvbGRlcntcXG4gICAgZ3JpZC1jb2x1bW46IDEvNTtcXG4gICAgZ3JpZC1yb3c6IDMvNjtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI3ByZVN0ZXB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiAzLzQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcblxcbi5zdGVwRGl2e1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhOyAqL1xcbn1cXG5cXG5cXG4jc3RlcDpob3ZlciwgI3ByZVN0ZXA6aG92ZXJ7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi5jYXJkVGl0bGV7XFxuICAgZ3JpZC1yb3c6IDEvMjtcXG4gICBncmlkLWNvbHVtbjogMS81O1xcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2NhcmRTdGVwc3tcXG4gICAgZ3JpZC1jb2x1bW46IDIvNDtcXG4gICAgZ3JpZC1yb3c6IDIvNztcXG59XFxuXFxuI2NhcmREYXRle1xcbiAgICBncmlkLXJvdzogNy84O1xcbiAgICBncmlkLWNvbHVtbjogMS81O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNjYXJkRGVsZXRle1xcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDgvOTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4MCwgMTYzLCAxODIpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC1qdXN0aWZ5OiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2RlY2tEZWxldGV7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiA1LzY7XFxuICAgIHdpZHRoOiA4cHg7XFxuICAgIGhlaWdodDogOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4MCwgMTYzLCAxODIpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogOXB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtanVzdGlmeTogY2VudGVyOyBcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2hlY2t7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgei1pbmRleDogMztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZ3JvdyB7IFxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuMXMgZWFzZS1pbi1vdXQ7IFxcbiAgICB9XFxuICAgIFxcbi5ncm93OmhvdmVyIHsgXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7IFxcbiAgICB9XFxuXFxuLmNoZWNrOmhvdmVye1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbltjb250ZW50ZWRpdGFibGVdIHtcXG4gICAgLyogb3V0bGluZTogMHB4IHNvbGlkIHRyYW5zcGFyZW50OyAqL1xcbiAgfVxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7O0dBRUc7QUFDSDtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGVBQWU7O0lBRWYsbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxZQUFZOztBQUVoQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQ0FBbUM7SUFDbkMsd0VBQXdFO0lBQ3hFLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixRQUFRO0lBQ1IsYUFBYTtJQUNiLGNBQWM7SUFDZCxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFFBQVE7QUFDWjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7QUFDbkI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLG9DQUFvQztJQUNwQyx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsa0NBQWtDO0lBQ2xDLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2Qjt3REFDb0Q7SUFDcEQscUJBQXFCO0lBQ3JCLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUNBQW1DOztBQUV2Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtDQUFrQztJQUNsQyx3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCO21CQUNlO0lBQ2YsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDBDQUEwQztJQUMxQyx1REFBdUQ7QUFDM0Q7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1EQUFtRDtJQUNuRDs7O29DQUdnQzs7QUFFcEM7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLGtDQUFrQztJQUNsQyxlQUFlO0lBQ2YsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCOzs7QUFHQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsaURBQWlEO0lBQ2pELHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsVUFBVTs7QUFFZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsa0NBQWtDOztJQUVsQyw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGVBQWU7SUFDZixlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLGtDQUFrQztJQUNsQyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjs7QUFFeEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJO2lCQUNhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhOztBQUVqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUNBQW1DO0lBQ25DLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLFVBQVU7SUFDVixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFlBQVk7SUFDWixhQUFhO0lBQ2IsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsV0FBVztJQUNYLGFBQWE7SUFDYiwwQ0FBMEM7SUFDMUMsa0NBQWtDO0lBQ2xDLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG9DQUFvQztJQUNwQyx3QkFBd0I7SUFDeEIsa0NBQWtDO0lBQ2xDLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwwQ0FBMEM7SUFDMUMsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7OztBQUdBO0lBQ0ksNEJBQTRCO0FBQ2hDOzs7QUFHQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtHQUNHLGFBQWE7R0FDYixnQkFBZ0I7R0FDaEIsa0JBQWtCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQ0FBbUM7SUFDbkMsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUNBQW1DO0lBQ25DLFlBQVk7SUFDWixrQ0FBa0M7SUFDbEMsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGVBQWU7SUFDZiwrQkFBK0I7SUFDL0I7O0FBRUo7SUFDSSxzQkFBc0I7SUFDdEI7O0FBRUo7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksb0NBQW9DO0VBQ3RDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJhbGV3YXk6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCcpOyBcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Pc3dhbGQ6d2dodEAyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMCZmYW1pbHk9UmFsZXdheTppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZGlzcGxheT1zd2FwJyk7XFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q291cmllcitQcmltZTppdGFsLHdnaHRAMCw0MDA7MCw3MDA7MSw0MDA7MSw3MDAmZmFtaWx5PU9zd2FsZDp3Z2h0QDIwMDszMDA7NDAwOzUwMDs2MDA7NzAwJmZhbWlseT1SYWxld2F5Oml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXAnKTtcXG4vKiAqe1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn0gKi9cXG5ib2R5IHtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIFxcbiAgICAvKiBoZWlnaHQ6IDEwMHZoOyAqL1xcbiAgICBcXG59XFxuXFxuZGl2IHtcXG4gICAgLyogYm9yZGVyLXRvcDogMnB4IHNvbGlkIHdoaXRlOyAqL1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuXFxufVxcbiNjb250ZW50IHtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYzLCAxMzUsIDE1Mik7XFxuICAgIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA0cHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIG1hcmdpbjogMjBweCAwO1xcbiAgICB3aWR0aDogNDgwcHg7XFxuICAgIGhlaWdodDogMTAwdmg7ICBcXG59XFxuXFxuI2hlYWRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwcHg7XFxufVxcblxcbiNkZWNrRG9ja3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMjAwcHg7XFxufVxcblxcbiNkZWNrQXJlYXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZ2FwOiA3cHg7XFxufVxcblxcbiN0YWJsZXtcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4jbG9nbywgLnRpdGxle1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi50aXRsZXtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuXFxuI2NhcmRBcmVhe1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDYwcHggMWZyIDYwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmRlY2ssIC5ibGFua0RlY2t7XFxuICAgIC8qIHBvaW50ZXItZXZlbnRzOiBub25lOyAqL1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCAxZnIpO1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgaGVpZ2h0OiA5MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAvKiBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDAgN3B4IDlweCAtN3B4O1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDUzLCA4MiwgOTQsIDAuMykgMXB4IDdweCA3cHggMXB4OyAqL1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLyogcGFkZGluZzogMHB4OyAqL1xcbn1cXG5cXG4uYmxhbmtEZWNre1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiKDQ2LCA5OSwgMTExKTtcXG4gICAgXFxufVxcblxcbi5tZW51e1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcXG4gICAgZ2FwOiA0cHg7XFxufVxcblxcbiNkZWNrVGl0bGUsICNjYXJkVGl0bGUsICNjYXJkRGF0ZSwgI2NhcmRTdGVwc3tcXG4gICAgbWFyZ2luLXRvcDogOHB4O1xcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogcmdiKDYzLCAxMzUsIDE1Mik7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC1qdXN0aWZ5OiBjZW50ZXI7XFxufVxcblxcbiNkZWNrVGl0bGV7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBncmlkLWNvbHVtbjogMS80O1xcbiAgICBncmlkLXJvdzogMS81O1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhOyAqL1xcbiAgICAvKiB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlOyAqL1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIC8qIG9wYWNpdHk6IDUwJTsgKi9cXG59XFxuXFxuLnNlbGVjdGVkRGVjayB7XFxuICAgIGJveC1zaGFkb3c6IHJnYigxMDIsIDIyMCwgMjQxKSAwIDAgM3B4IDJweDtcXG4gICAgLyogYm94LXNoYWRvdzogcmdiYSg1MywgODIsIDk0LCAwLjMpIDFweCA5cHggOXB4IDFweDsgKi9cXG59XFxuXFxuI2FkZENhcmRCdXR0b24sICNhZGREZWNrQnV0dG9ue1xcbiAgICBmb250LXNpemU6IDQ4cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2FkZENhcmRCdXR0b246aG92ZXIsICNhZGREZWNrQnV0dG9uOmhvdmVyLCAubmV4dEJ1dHRvbjpob3ZlcntcXG4gICAgLyogdGV4dC1zaGFkb3c6ICAwIDAgM3B4IDJweCwgcmdiKDEwMiwgMTczLCAyNDEpOyAqL1xcbiAgICB0ZXh0LXNoYWRvdzogLTFweCAxcHggMnB4IHJnYigxMDIsIDIyMCwgMjQxKSxcXG5cXHRcXHRcXHRcXHQgIDFweCAxcHggMnB4IHJnYigxMDIsIDIyMCwgMjQxKSxcXG5cXHRcXHRcXHRcXHQgIDFweCAtMXB4IDAgcmdiKDEwMiwgMjIwLCAyNDEpLFxcblxcdFxcdFxcdFxcdCAgLTFweCAtMXB4IDAgcmdiKDEwMiwgMjIwLCAyNDEpO1xcbiAgICBcXG59XFxuLm5leHRCdXR0b257XFxuICAgIGp1c3RpZnktc2VsZjogcmlnaHQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IHJnYig4MCwgMTYzLCAxODIpO1xcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDcycHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jZm9yd2FyZEJ1dHRvbntcXG4gICAganVzdGlmeS1zZWxmOiBsZWZ0O1xcbiAgICBncmlkLWNvbHVtbjogMy80O1xcbn1cXG5cXG4jYmFja3dhcmRCdXR0b257XFxuICAgIGp1c3RpZnktc2VsZjogcmlnaHQ7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxufVxcblxcblxcbi5jYXJkQmlne1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDI0MHB4O1xcbiAgICBoZWlnaHQ6IDM2MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSg1MywgODIsIDk0LCAwLjMpIDFweCA5cHggOXB4IDFweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHotaW5kZXg6IDE7XFxuXFxufVxcblxcbiN0b3BDYXJke1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg4LCAxZnIpO1xcblxcbiAgICAvKiBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAqL1xcbn1cXG5cXG4uYmlnUGx1cywgLmxpdHRsZVBsdXN7XFxuICAgIGdyaWQtY29sdW1uOiAxLzU7XFxuICAgIGdyaWQtcm93OiA0LzY7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiA3MnB4O1xcbiAgICBjb2xvcjogcmdiKDYzLCAxMzUsIDE1Mik7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIFxcbn1cXG5cXG4ubGl0dGxlUGx1c3tcXG4gICAgZ3JpZC1yb3c6IDMvNDtcXG59XFxuXFxuLnN0YWNrMHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA2cHg7XFxuICAgIGxlZnQ6IDYzcHg7XFxuICAgIC8qIHotaW5kZXg6IC0xOyAqL1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyZGVnKTtcXG59XFxuXFxuLnN0YWNrMXtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDNweDtcXG4gICAgbGVmdDogNThweDtcXG4gICAgLyogei1pbmRleDogLTI7ICovXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDFkZWcpO1xcbn1cXG5cXG4uc3RhY2sye1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNHB4O1xcbiAgICBsZWZ0OiAxMjBweDtcXG4gICAgLyogei1pbmRleDogLTM7ICovXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDZkZWcpO1xcbn1cXG5cXG4uZWRpdFNpemV7XFxuICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxODBweDsgKi9cXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDQ1MHB4O1xcbiAgICB6LWluZGV4OiAzO1xcbn1cXG5cXG4ub3ZlckxheUhvbGRlcntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7IFxcbiAgICBcXG59XFxuXFxuLm92ZXJsYXl7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM3LCAxMDcsIDEwNyk7XFxuICAgIG9wYWNpdHk6IDYwJTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBwYWRkaW5nOiAyMHB4OyBcXG59XFxuXFxuLmZvcm1EaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogNjAwcHg7XFxuICAgIHotaW5kZXg6IDM7XFxufVxcblxcbi5zdWJtaXRCdXR0b25zRGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBnYXA6IDE2cHg7XFxuICAgIGhlaWdodDogNDRweDtcXG59XFxuXFxuLmNhcmRGb3Jte1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDE2cHg7XFxuICAgIHdpZHRoOjMwMHB4O1xcbiAgICBoZWlnaHQ6IDQxMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxLjVmciAxLjVmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDcsIDFmcik7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5pbnB1dCwgLmNoZWNre1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGdyaWQtY29sdW1uOiAxLzU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MiwgMjQyLCAyNDIpO1xcbiAgICBjb2xvcjogcmdiKDgwLCAxNjMsIDE4Mik7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaW5wdXQ6aG92ZXJ7XFxuICAgIGJveC1zaGFkb3c6IHJnYigxMDIsIDE3MywgMjQxKSAwIDAgM3B4IDJweDtcXG4gICAgYm94LXNoYWRvdzogcmdiKDEwMiwgMjIwLCAyNDEpIDAgMCAzcHggMnB4O1xcbn1cXG5cXG4jc3RlcHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvNTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIHRleHQtanVzdGlmeTogbGVmdDtcXG59XFxuXFxuI3N0ZXBIb2xkZXJ7XFxuICAgIGdyaWQtY29sdW1uOiAxLzU7XFxuICAgIGdyaWQtcm93OiAzLzY7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNwcmVTdGVwe1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogMy80O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG5cXG4uc3RlcERpdntcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYXF1YTsgKi9cXG59XFxuXFxuXFxuI3N0ZXA6aG92ZXIsICNwcmVTdGVwOmhvdmVye1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4uY2FyZFRpdGxle1xcbiAgIGdyaWQtcm93OiAxLzI7XFxuICAgZ3JpZC1jb2x1bW46IDEvNTtcXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNjYXJkU3RlcHN7XFxuICAgIGdyaWQtY29sdW1uOiAyLzQ7XFxuICAgIGdyaWQtcm93OiAyLzc7XFxufVxcblxcbiNjYXJkRGF0ZXtcXG4gICAgZ3JpZC1yb3c6IDcvODtcXG4gICAgZ3JpZC1jb2x1bW46IDEvNTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jY2FyZERlbGV0ZXtcXG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiA4Lzk7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODAsIDE2MywgMTgyKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtanVzdGlmeTogY2VudGVyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNkZWNrRGVsZXRle1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogNS82O1xcbiAgICB3aWR0aDogOHB4O1xcbiAgICBoZWlnaHQ6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODAsIDE2MywgMTgyKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDlweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LWp1c3RpZnk6IGNlbnRlcjsgXFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNoZWNre1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIHotaW5kZXg6IDM7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmdyb3cgeyBcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjFzIGVhc2UtaW4tb3V0OyBcXG4gICAgfVxcbiAgICBcXG4uZ3Jvdzpob3ZlciB7IFxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpOyBcXG4gICAgfVxcblxcbi5jaGVjazpob3ZlcntcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG5bY29udGVudGVkaXRhYmxlXSB7XFxuICAgIC8qIG91dGxpbmU6IDBweCBzb2xpZCB0cmFuc3BhcmVudDsgKi9cXG4gIH1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgbGF5b3V0IGZyb20gXCIuL0dVSUxheW91dFwiO1xuaW1wb3J0IHsgZHJhd0RlY2tzLCBzdHlsZUN1cnJlbnQsIHN0eWxlRGVja3MgfSBmcm9tIFwiLi9HVUlEZWNrc1wiO1xuLy9EUkFXIHBhZ2UsIGRlY2sgYXJlYSwgY2FyZCBhcmVhLCBkZWZhdWx0IGRlY2tzIGFuZCBkZWZhdWx0IHRvcCBjYXJkXG5cbmxldCBpc0luaXRpYWxMb2FkID0gMDtcblxuY29uc3QgZHJhd0dVSUluaXRpYWwgPSAoYURlY2tBcnJheSkgPT4ge1xuICAgIGxheW91dCgpO1xuICAgIGRyYXdEZWNrcyhhRGVja0FycmF5KTtcbn1cblxuY29uc3QgZHJhd0dVSSA9IChhRGVja0FycmF5LCBhQ3VycmVudERlY2spID0+IHtcbiAgICBkcmF3RGVja3MoYURlY2tBcnJheSk7XG4gICAgY29uc3QgY3VycmVudERlY2tEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10aXRsZT1cIiR7YUN1cnJlbnREZWNrLmRlY2tOYW1lfVwiXWApO1xuICAgIHN0eWxlQ3VycmVudChjdXJyZW50RGVja0Rpdik7ICBcbn1cblxuY29uc3QgbG9hZEdVSSA9IChhRGVja0FycmF5LCBhQ3VycmVudERlY2spID0+IHtcbiAgICBpZihpc0luaXRpYWxMb2FkID09PSAwKXtcbiAgICAgICAgZHJhd0dVSUluaXRpYWwoYURlY2tBcnJheSwgYUN1cnJlbnREZWNrKTtcbiAgICAgICAgaXNJbml0aWFsTG9hZCA9IDE7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIGRyYXdHVUkoYURlY2tBcnJheSwgYUN1cnJlbnREZWNrKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRHVUk7XG5cblxuXG5cblxuXG4iLCJpbXBvcnQgZGVjayBmcm9tIFwiLi9kZWNrXCI7XG5pbXBvcnQgbGF5b3V0IGZyb20gXCIuL0dVSUxheW91dFwiO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmNvbnN0IHtkZWNrQXJlYX0gPSBsYXlvdXQoKTtcblxuXG5leHBvcnQgY29uc3Qgc3R5bGVDdXJyZW50ID0gKGN1cnJlbnREZWNrRGl2KSA9PiB7XG4gICAgY3VycmVudERlY2tEaXYuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWREZWNrJyk7ICBcbn1cblxuY29uc3QgcmVtb3ZlU2VsZWN0ZWRTdHlsZSA9IChwcmV2aW91c0RlY2tEaXYpID0+IHtcbiAgICBwcmV2aW91c0RlY2tEaXYuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWREZWNrJyk7XG59XG5cbmNvbnN0IHN0eWxlRGVja3MgPSAoY3VycmVudERlY2tEaXYsIHByZXZpb3VzRGVja0RpdikgPT4ge1xuICAgIHJlbW92ZVNlbGVjdGVkU3R5bGUocHJldmlvdXNEZWNrRGl2KTtcbiAgICBzdHlsZUN1cnJlbnQoY3VycmVudERlY2tEaXYpO1xufVxuXG5jb25zdCBkcmF3QmxhbmtEZWNrID0gKCkgPT4ge1xuICAgIGNvbnN0IGJsYW5rRGVja0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJsYW5rRGVja0Rpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2JsYW5rRGVjaycpO1xuICAgIGRlY2tBcmVhLmFwcGVuZENoaWxkKGJsYW5rRGVja0Rpdik7XG5cbiAgICBjb25zdCBsaXR0bGVQbHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGl0dGxlUGx1cy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xpdHRsZVBsdXMnKTtcbiAgICBsaXR0bGVQbHVzLmNsYXNzTGlzdC5hZGQoJ2dyb3cnKTtcbiAgICBsaXR0bGVQbHVzLnRleHRDb250ZW50ID0gJysnO1xuICAgIGxpdHRsZVBsdXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93RGVja0Zvcm0pXG4gICAgYmxhbmtEZWNrRGl2LmFwcGVuZENoaWxkKGxpdHRsZVBsdXMpO1xufVxuXG5jb25zdCBlcmFzZUJsYW5rRGVjayA9ICgpID0+IHtcbiAgICBjb25zdCBibGFua0RlY2tEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdibGFua0RlY2snKTtcbiAgICBibGFua0RlY2tEaXZbMF0ucmVtb3ZlKCk7XG59XG5cbmNvbnN0IGZpcnN0RHJhd0RlY2tzID0gKGFycmF5T2ZEZWNrcykgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKCdydW5uaW5nIGRyYXdEZWNrcycpXG4gICAgLy8gY29uc29sZS5sb2coZGVja0FycmF5WzFdKTtcbiAgICBhcnJheU9mRGVja3MuZm9yRWFjaChhRGVjayA9PiB7XG4gICAgICAgIGNvbnN0IGRlY2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRlY2tEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZWNrJyk7XG4gICAgICAgICAgICAvLyBkZWNrRGl2LmNsYXNzTGlzdC5hZGQoJ2dyb3cnKTtcbiAgICAgICAgICAgIGRlY2tBcmVhLmFwcGVuZENoaWxkKGRlY2tEaXYpO1xuXG4gICAgICAgICAgICBjb25zdCBkZWNrVGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRlY2tUaXRsZURpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RlY2tUaXRsZScpO1xuICAgICAgICAgICAgZGVja1RpdGxlRGl2LmNsYXNzTGlzdC5hZGQoJ2dyb3cnKTtcbiAgICAgICAgICAgIGRlY2tEaXYuYXBwZW5kQ2hpbGQoZGVja1RpdGxlRGl2KTtcbiAgICAgICAgICAgIGRlY2tUaXRsZURpdi50ZXh0Q29udGVudCA9IGFEZWNrLmRlY2tOYW1lO1xuXG4gICAgICAgICAgICBkZWNrRGl2LnNldEF0dHJpYnV0ZSgnZGF0YS10aXRsZScsIGAke2FEZWNrLmRlY2tOYW1lfWApO1xuXG4gICAgICAgICAgICBkZWNrRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdXBkYXRlQ3VycmVudERlY2spO1xuICAgICAgICAgICAgZGVja1RpdGxlRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdXBkYXRlQ3VycmVudERlY2spO1xuICAgICAgICAgICAgZGVja1RpdGxlRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0Jywgc2F2ZURlY2tUaXRsZSk7XG5cbiAgICAgICAgICAgIGlmKChhcnJheU9mRGVja3MuaW5kZXhPZihhRGVjaykpICE9PSAwKXtcbiAgICAgICAgICAgICAgICBjb25zdCBkZWNrRGVsZXRlQnV0dG9uID0gZHJhd0RlY2tEZWxldGVCdXR0b24oKTtcbiAgICAgICAgICAgICAgICBkZWNrRGl2LmFwcGVuZENoaWxkKGRlY2tEZWxldGVCdXR0b24pO1xuICAgICAgICAgICAgICAgIGRlY2tEZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnZ3JvdycpO1xuICAgICAgICAgICAgICAgIGRlY2tUaXRsZURpdi5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsICd0cnVlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIGRyYXdCbGFua0RlY2soKTtcbiAgICB1cGRhdGVDdXJyZW50RGVja0RpdigpO1xuICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnREZWNrRGl2KTtcblxufVxuXG5leHBvcnQgY29uc3QgZHJhd0RlY2tzID0gKGFycmF5T2ZEZWNrcykgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdydW5uaW5nIGRyYXdEZWNrcycpXG4gICAgLy8gY29uc29sZS5sb2coZGVja0FycmF5WzFdKTtcbiAgICBhcnJheU9mRGVja3MuZm9yRWFjaChhRGVjayA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkZWNrRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGVjaycpO1xuICAgICAgICAgICAgZGVja0FyZWEuYXBwZW5kQ2hpbGQoZGVja0Rpdik7XG5cbiAgICAgICAgICAgIGNvbnN0IGRlY2tUaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGVja1RpdGxlRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVja1RpdGxlJyk7XG4gICAgICAgICAgICBkZWNrRGl2LmFwcGVuZENoaWxkKGRlY2tUaXRsZURpdik7XG4gICAgICAgICAgICBkZWNrVGl0bGVEaXYudGV4dENvbnRlbnQgPSBhRGVjay5kZWNrTmFtZTtcblxuICAgICAgICAgICAgZGVja0Rpdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGl0bGUnLCBgJHthRGVjay5kZWNrTmFtZX1gKTtcblxuICAgICAgICAgICAgLy8gY29uc3QgZWRpdERlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIC8vIGVkaXREZWNrLnNldEF0dHJpYnV0ZSgnaWQnLCAnZWRpdERlY2snKVxuICAgICAgICAgICAgLy8gZGVja0Rpdi5hcHBlbmRDaGlsZChlZGl0RGVjaylcbiAgICAgICAgICAgIC8vIGVkaXREZWNrLnRleHRDb250ZW50ID0gJ0VkaXQnO1xuXG4gICAgICAgICAgICAvL2RlY2tEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB1cGRhdGVDdXJyZW50RGVjayk7XG4gICAgICAgICAgICAvLyBkZWNrVGl0bGVEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB1cGRhdGVDdXJyZW50RGVjayk7XG4gICAgICAgICAgICAvL2RlY2tUaXRsZURpdi5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHNhdmVEZWNrVGl0bGUpO1xuICAgICAgICAgICAgLy8gZWRpdERlY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93Rm9ybSk7XG4gICAgICAgIGlmKChhcnJheU9mRGVja3MuaW5kZXhPZihhRGVjaykpICE9PSAwKXtcbiAgICAgICAgICAgIGNvbnN0IGRlY2tEZWxldGVCdXR0b24gPSBkcmF3RGVja0RlbGV0ZUJ1dHRvbigpO1xuICAgICAgICAgICAgZGVja0Rpdi5hcHBlbmRDaGlsZChkZWNrRGVsZXRlQnV0dG9uKTtcbiAgICAgICAgICAgIGRlY2tUaXRsZURpdi5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsICd0cnVlJyk7XG4gICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICApO1xuICAgIC8vIGVyYXNlQmxhbmtEZWNrKCk7XG4gICAgLy8gZHJhd0JsYW5rRGVjaygpO1xuICAgIC8vIHVwZGF0ZUN1cnJlbnREZWNrRGl2KCk7XG4gICAgLy8gc3R5bGVDdXJyZW50KCk7XG4gICAgLy8gY29uc29sZS5sb2coY3VycmVudERlY2tEaXYpO1xuXG59XG5jb25zdCBkcmF3RGVja0RlbGV0ZUJ1dHRvbiA9ICgpID0+IHtcbiAgICBjb25zdCBkZWNrRGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVja0RlbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RlY2tEZWxldGUnKTtcbiAgICAvL2RlY2tEZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVBbmRFcmFzZURlY2ssIHRydWUpO1xuICAgIGRlY2tEZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSAnLSdcbiAgICByZXR1cm4gZGVja0RlbGV0ZUJ1dHRvbjtcbn1cblxuY29uc3QgZXJhc2VEZWNrcyA9ICgpID0+IHtcbiAgICBjb25zdCBvbGREZWNrcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RlY2snKTtcbiAgICBBcnJheS5mcm9tKG9sZERlY2tzKS5mb3JFYWNoKGRlY2tFbGVtZW50ID0+IHtcbiAgICAgICAgZGVja0VsZW1lbnQucmVtb3ZlKCk7XG4gICAgfSlcbn0iLCJjb25zdCBsYXlvdXQgPSAoKSA9PntcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRlbnQnKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgIFxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhaW5lcicpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICBcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsICdoZWFkZXInKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBcbiAgICBjb25zdCBkZWNrRG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlY2tEb2NrLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVja0RvY2snKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVja0RvY2spO1xuICAgIFxuICAgIGNvbnN0IGNhcmREb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyZERvY2suc2V0QXR0cmlidXRlKCdpZCcsICd0YWJsZScpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkRG9jayk7XG4gICAgXG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxvZ28uc2V0QXR0cmlidXRlKCdpZCcsICdsb2dvJyk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGxvZ28pO1xuICAgIGxvZ28udGV4dENvbnRlbnQgPSAnU2h1ZmZsZSc7XG4gICAgXG4gICAgY29uc3QgZGVja0RvY2tNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVja0RvY2tNZW51LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudScpO1xuICAgIGRlY2tEb2NrLmFwcGVuZENoaWxkKGRlY2tEb2NrTWVudSk7XG4gICAgXG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RpdGxlJyk7XG4gICAgZGVja0RvY2tNZW51LmFwcGVuZENoaWxkKGRpdik7XG4gICAgZGl2LnRleHRDb250ZW50ID0gJ0RlY2tzJztcbiAgICBcbiAgICBjb25zdCBhZGREZWNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWRkRGVja0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZERlY2tCdXR0b24nKTtcbiAgICBhZGREZWNrQnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGl0bGUnKVxuICAgIGFkZERlY2tCdXR0b24uY2xhc3NMaXN0LmFkZCgnZ3JvdycpO1xuICAgIGRlY2tEb2NrTWVudS5hcHBlbmRDaGlsZChhZGREZWNrQnV0dG9uKTtcbiAgICBhZGREZWNrQnV0dG9uLnRleHRDb250ZW50ID0gJysnO1xuICAgIFxuICAgIGNvbnN0IGRlY2tBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVja0FyZWEuc2V0QXR0cmlidXRlKCdpZCcsICdkZWNrQXJlYScpO1xuICAgIGRlY2tEb2NrLmFwcGVuZENoaWxkKGRlY2tBcmVhKTtcbiAgICBcbiAgICBjb25zdCBjYXJkRG9ja01lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkRG9ja01lbnUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51Jyk7XG4gICAgY2FyZERvY2suYXBwZW5kQ2hpbGQoY2FyZERvY2tNZW51KTtcbiAgICBcbiAgICBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0aXRsZScpO1xuICAgIGNhcmREb2NrTWVudS5hcHBlbmRDaGlsZChkaXYpO1xuICAgIGRpdi50ZXh0Q29udGVudCA9ICdDYXJkcyc7XG4gICAgXG4gICAgY29uc3QgYWRkQ2FyZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFkZENhcmRCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdhZGRDYXJkQnV0dG9uJyk7XG4gICAgYWRkQ2FyZEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RpdGxlJylcbiAgICBhZGRDYXJkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2dyb3cnKTtcbiAgICBjYXJkRG9ja01lbnUuYXBwZW5kQ2hpbGQoYWRkQ2FyZEJ1dHRvbik7XG4gICAgYWRkQ2FyZEJ1dHRvbi50ZXh0Q29udGVudCA9ICcrJztcbiAgICBcbiAgICBjb25zdCBjYXJkQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmRBcmVhLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2FyZEFyZWEnKTtcbiAgICBjYXJkRG9jay5hcHBlbmRDaGlsZChjYXJkQXJlYSk7XG4gICAgXG4gICAgcmV0dXJuIHtjb250ZW50LCBkZWNrQXJlYSwgY2FyZEFyZWF9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBsYXlvdXQ7XG4iLCJjb25zdCBjYXJkID0gKG5hbWUpID0+IHtcbiAgY29uc3QgY2FyZE5hbWUgPSBuYW1lO1xuICBjb25zdCBjYXJkU3RlcHMgPSBbXTtcbiAgY29uc3QgY2FyZERhdGUgPSBcIlwiO1xuICBjb25zdCBjYXJkQ29tcGxldGVWYWx1ZSA9IDA7XG4gIGNvbnN0IGNhcmREZWNrcyA9IFtcImFsbFwiXTtcbiAgcmV0dXJuIHtcbiAgICBjYXJkTmFtZSxcbiAgICBjYXJkQ29tcGxldGVWYWx1ZSxcbiAgICBjYXJkRGF0ZSxcbiAgICBjYXJkU3RlcHMsXG4gICAgY2FyZERlY2tzLFxuICB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IGNhcmQ7XG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IGNhcmQgZnJvbSBcIi4vY2FyZFwiO1xuaW1wb3J0IGRlY2sgZnJvbSBcIi4vZGVja1wiO1xuXG5leHBvcnQgY29uc3QgYWxsID0gZGVjayhcImFsbFwiKTtcbmNvbnNvbGUubG9nKGFsbCk7XG5leHBvcnQgY29uc3QgZGVja0FycmF5ID0gW107XG5kZWNrQXJyYXkucHVzaChhbGwpO1xuZXhwb3J0IGNvbnN0IHRhYmxlID0gZGVja0FycmF5O1xuZXhwb3J0IGNvbnN0IGRlZmF1bHREZWNrID0gZGVjaygnVG8tRG8nKTtcbmV4cG9ydCBjb25zdCBkZWZhdWx0Q2FyZCA9IGNhcmQoJ0dldCBHcm9jZXJpZXMnKTtcbmV4cG9ydCBjb25zdCBkZWZhdWx0Q2FyZDIgPSBjYXJkKCdNYWlsIFRoYW5rIFlvdSBOb3RlcycpO1xuYWxsLmNhcmRzQXJyYXkucHVzaChkZWZhdWx0Q2FyZCk7XG5hbGwuY2FyZHNBcnJheS5wdXNoKGRlZmF1bHRDYXJkMik7XG5kZWZhdWx0RGVjay5jYXJkc0FycmF5LnB1c2goZGVmYXVsdENhcmQuY2FyZE5hbWUpO1xuZGVmYXVsdERlY2suY2FyZHNBcnJheS5wdXNoKGRlZmF1bHRDYXJkMi5jYXJkTmFtZSk7XG5kZWNrQXJyYXkucHVzaChkZWZhdWx0RGVjayk7XG5cblxuICAgIGNvbnN0IHZpZXdBbGwgPSAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhgQWxsIGNhcmRzIGFyZTogJHthbGx9YCk7XG4gICAgICBjb25zb2xlLmxvZyhgYWxsIGRlY2tzIGFyZTogJHt0YWJsZX1gKTtcbiAgICAgIGFsbC5jYXJkc0FycmF5LmZvckVhY2goKGNhcmRFbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBhbGwgKyAke2NhcmRFbGVtZW50fWApO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHZpZXdEZWNrID0gKG5hbWUpID0+IHtcbiAgICAgIGxldCBjdXJyZW50RGVjaztcbiAgICAgIGxldCB3YXNNYXRjaGVkID0gZmFsc2U7XG4gICAgICB0YWJsZS5mb3JFYWNoKChkZWNrRWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImluIGZvciBlYWNoXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhkZWNrRWxlbWVudCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnREZWNrKTtcbiAgICAgICAgY29uc29sZS5sb2codHlwZW9mIGN1cnJlbnREZWNrKTtcbiAgICAgICAgaWYgKGRlY2tFbGVtZW50LmRlY2tOYW1lID09PSBuYW1lKSB7XG4gICAgICAgICAgY3VycmVudERlY2sgPSBkZWNrRWxlbWVudDtcbiAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50RGVjayk7XG4gICAgICAgICAgY29uc29sZS5sb2codHlwZW9mIGN1cnJlbnREZWNrKTtcbiAgICAgICAgICB3YXNNYXRjaGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAod2FzTWF0Y2hlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgY3VycmVudERlY2sgPSBhbGw7XG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnREZWNrKTtcbiAgICAgICAgY29uc29sZS5sb2codHlwZW9mIGN1cnJlbnREZWNrKTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiBjdXJyZW50RGVjayk7XG4gICAgICBjb25zb2xlLmxvZyhgJHtjdXJyZW50RGVjay5kZWNrTmFtZX0gY29udGVudHMgYXJlOiBgKTtcbiAgICAgIGN1cnJlbnREZWNrLmNhcmRzQXJyYXkuZm9yRWFjaCgoY2FyZEVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coY2FyZEVsZW1lbnQpO1xuICAgICAgfSk7XG4gICAgICBcbiAgICB9O1xuXG4gICAgZXhwb3J0IGNvbnN0IGNyZWF0ZURlY2sgPSAobmFtZSkgPT4ge1xuICAgICAgICAvLyBjb25zdCB0aGVOYW1lID0gcHJvbXB0KCdXaGF0IGlzIHRoZSBuYW1lIG9mIHRlaCBkZWNrPycpXG4gICAgICBjb25zdCB0aGlzRGVjayA9IGRlY2sobmFtZSk7XG4gICAgICB0YWJsZS5wdXNoKHRoaXNEZWNrKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwidGhlIGRlY2sgY3JlYXRlZCBpczogXCIgKyB0aGlzRGVjayk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcIml0cyBuYW1lIGlzOiBcIiArIHRoaXNEZWNrLmRlY2tOYW1lKTtcbiAgICB9O1xuXG4gICAgZXhwb3J0IGNvbnN0IGFkZENhcmR0b0RlY2sgPSAodGhpc0NhcmQsIHRoaXNEZWNrKSA9PiB7XG4gICAgICAgIHRoaXNDYXJkLmNhcmREZWNrID0gdGhpc0RlY2suZGVja05hbWU7XG4gICAgICAgIHRoaXNEZWNrLmNhcmRzQXJyYXkucHVzaCh0aGlzQ2FyZC5jYXJkTmFtZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXNEZWNrKTtcbiAgICAgIH07XG5cbiAgICBcblxuICAgIGV4cG9ydCBjb25zdCBnZXRDYXJkID0gKG5hbWUpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2cobmFtZSlcbiAgICAgIGxldCB0aGlzQ2FyZDtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXNDYXJkKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGFsbC5sZW5ndGgpO1xuICAgICAgY29uc29sZS5sb2coYWxsLmNhcmRzQXJyYXkpO1xuICAgICAgYWxsLmNhcmRzQXJyYXkuZm9yRWFjaCgoY2FyZEVsZW1lbnQpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coY2FyZEVsZW1lbnQuY2FyZE5hbWUpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhuYW1lKTtcbiAgICAgICAgaWYgKGNhcmRFbGVtZW50LmNhcmROYW1lID09PSBuYW1lKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coYCR7Y2FyZEVsZW1lbnQuY2FyZE5hbWV9ID09PSAke25hbWV9YCk7XG4gICAgICAgICAgY29uc29sZS5sb2codGhpc0NhcmQpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGNhcmRFbGVtZW50KTtcbiAgICAgICAgICB0aGlzQ2FyZCA9IGNhcmRFbGVtZW50O1xuICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXNDYXJkKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgLy8gICBpZiAodGhlQ2FyZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gICAgIC8vIGNvbnN0IGNhcmROYW1lID0gcHJvbXB0KFxuICAgIC8vICAgICAvLyAgIFwidGhhdCBjYXJkIGRvZXMgbm90IGV4aXN0LCBwbGVhc2UgZW50ZXIgYW5vdGhlciBuYW1lOlwiXG4gICAgLy8gICAgIC8vICk7XG4gICAgLy8gICAgIC8vIHRoZUNhcmQgPSBnZXRDYXJkKGNhcmROYW1lKTtcbiAgICAvLyAgIH1cbiAgICAgIGNvbnNvbGUubG9nKHRoaXNDYXJkKVxuICAgICAgcmV0dXJuIHRoaXNDYXJkO1xuICAgIH07XG5cbiAgICBleHBvcnQgY29uc3QgZ2V0RGVjayA9IChuYW1lKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnR0VUVElORyBERUNLJyk7XG4gICAgICBsZXQgdGhlRGVjaztcbiAgICAgIGNvbnNvbGUubG9nKGB0aGUgZGVjayBhcnJheSBpcyAke2RlY2tBcnJheX1gKTtcbiAgICAgIGRlY2tBcnJheS5mb3JFYWNoKGRlY2tFbGVtZW50ID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0aGUgIGRlY2sgbmFtZSBpczogXCIgKyBkZWNrRWxlbWVudC5kZWNrTmFtZSk7XG4gICAgICAgIGlmIChkZWNrRWxlbWVudC5kZWNrTmFtZSA9PT0gbmFtZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiaXQgbWF0Y2hlZCFcIik7XG4gICAgICAgICAgY29uc29sZS5sb2coZGVja0VsZW1lbnQuZGVja05hbWUsIG5hbWUpO1xuICAgICAgICAgIHRoZURlY2sgPSBkZWNrRWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2coXCJnZXR0aW5nIGRlY2s6IFwiICsgdGhlRGVjay5kZWNrTmFtZSk7XG4gICAgICAvLyBpZiAodGhlRGVjayA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyAgIGNvbnN0IGRlY2tOYW1lID0gcHJvbXB0KFxuICAgICAgLy8gICAgIFwidGhhdCBkZWNrIGRvZXMgbm90IGV4aXN0LCBwbGVhc2UgZW50ZXIgYW5vdGhlciBuYW1lOlwiXG4gICAgICAvLyAgICk7XG4gICAgICAvLyAgIHRoZURlY2sgPSBnZXREZWNrKGRlY2tOYW1lKTtcbiAgICAgIC8vIH1cbiAgICAgIGNvbnNvbGUubG9nKHRoZURlY2spO1xuICAgICAgcmV0dXJuIHRoZURlY2s7XG4gICAgfTtcblxuICAgIGV4cG9ydCBjb25zdCBjcmVhdGVDYXJkID0gKG5hbWUpID0+IHtcbiAgICAgICAgLy8gY29uc3QgdGhlTmFtZSA9IHByb21wdCgnV2hhdCBpcyB0aGUgbmFtZSBvZiB0aGUgY2FyZD8nKVxuICAgICAgY29uc3QgbmV3Q2FyZCA9IGNhcmQobmFtZSk7XG4gICAgICAvLyBjb25zdCBuYW1lT2ZEZWNrID0gcHJvbXB0KCd3aGF0IGRlY2s/Jyk7XG4gICAgICAvLyBuZXdDYXJkLmNhcmREZWNrcy5wdXNoKG5hbWVPZkRlY2spO1xuICAgICAgLy8gY29uc29sZS5sb2cobmV3Q2FyZC5jYXJkRGVja3MpO1xuICAgICAgLy8gbmV3Q2FyZC5jYXJkRGVja3MuZm9yRWFjaChkZWNrTmFtZSA9PiB7XG4gICAgICAvLyAgIGlmKGRlY2tOYW1lICE9PSAnYWxsJyl7XG4gICAgICAvLyAgIGNvbnN0IHRoaXNEZWNrID0gZ2V0RGVjayhkZWNrTmFtZSk7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKCdhZGRpbmcgaHRlIGZ1bGxvd2luZyBjYXJkIHRvIHRoZSBmb2xsb3dpbmcgZGVjayAnKyBuZXdDYXJkLmNhcmROYW1lICsgXCIgXCIgKyB0aGlzRGVjay5kZWNrTmFtZSk7XG4gICAgICAvLyAgIGFkZENhcmR0b0RlY2sobmV3Q2FyZCwgdGhpc0RlY2spXG4gICAgICAvLyAgIH1cbiAgICAgICAgXG4gICAgICAvLyB9KVxuICAgIGFsbC5jYXJkc0FycmF5LnB1c2gobmV3Q2FyZCk7XG4gICAgY29uc29sZS5sb2coYWxsLmNhcmRzQXJyYXkpO1xuICAgIHJldHVybiBuZXdDYXJkO1xuICAgIFxuICAgIH07XG5cbiAgICBcblxuICAgIGV4cG9ydCBjb25zdCBkZWxldGVDYXJkRnJvbURlY2sgPSAodGhpc0NhcmQsIHRoaXNEZWNrKSA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXNEZWNrLmNhcmRzQXJyYXkuaW5kZXhPZih0aGlzQ2FyZC5jYXJkTmFtZSk7XG4gICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICB0aGlzRGVjay5jYXJkc0FycmF5LnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpc0RlY2s7XG4gICAgfTtcblxuICAgIGV4cG9ydCBjb25zdCBkZWxldGVDYXJkID0gKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2RlbGV0aW5nJylcbiAgICAgIGNvbnN0IGNhcmREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZFRpdGxlJyk7XG4gICAgICBjb25zdCBhQ2FyZE5hbWUgPSBjYXJkRGl2LnRleHRDb250ZW50O1xuICAgICAgY29uc3QgdGhpc0NhcmQgPSBnZXRDYXJkKGFDYXJkTmFtZSk7XG4gICAgICBjb25zdCBpbmRleCA9IGFsbC5jYXJkc0FycmF5LmluZGV4T2YodGhpc0NhcmQpO1xuICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgYWxsLmNhcmRzQXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKGFsbCk7XG4gICAgICByZXR1cm4gYWxsO1xuICAgIH07XG5cbiAgICBleHBvcnQgY29uc3QgZGVsZXRlRGVjayA9IChhRGVja05hbWUpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdERUxFVEVJTkcgREVDSyBJTiBDT05UUk9MTFMnKVxuICAgICAgY29uc29sZS5sb2coYGRlY2sgbmFtZSBpcyAke2FEZWNrTmFtZX1gKVxuICAgICAgY29uc3QgZGVja09iaiA9IGdldERlY2soYURlY2tOYW1lKTtcbiAgICAgIGNvbnNvbGUubG9nKGBnbyB0aGUgZGVjayBvYmplY3QgY2FsbGVkICR7ZGVja09iai5kZWNrTmFtZX1gKTtcbiAgICAgIGNvbnN0IGluZGV4ID0gZGVja0FycmF5LmluZGV4T2YoZGVja09iaik7XG4gICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICBkZWNrQXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKGBERUNLIEFSUkFZIElTICR7ZGVja0FycmF5fWApO1xuICAgICAgcmV0dXJuIGRlY2tBcnJheTtcbiAgICB9O1xuXG4gICAgY29uc3QgbW92ZUNhcmQgPSAodGhlQ2FyZE5hbWUsIGRlY2tPbmVOYW1lLCBkZWNrVHdvTmFtZSkgPT4ge1xuICAgICAgY29uc3QgdGhpc0NhcmQgPSBnZXRDYXJkKHRoZUNhcmROYW1lKTtcbiAgICAgIGNvbnN0IGRlY2tPbmUgPSBnZXREZWNrKGRlY2tPbmVOYW1lKTtcbiAgICAgIGNvbnN0IGRlY2tUd28gPSBnZXREZWNrKGRlY2tUd29OYW1lKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXNDYXJkLCBkZWNrT25lLCBkZWNrVHdvKTtcbiAgICAgIGRlbGV0ZUNhcmRGcm9tRGVjayh0aGlzQ2FyZCwgZGVja09uZSk7XG4gICAgICBhZGRDYXJkdG9EZWNrKHRoaXNDYXJkLCBkZWNrVHdvKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgdmlld0NhcmQgPSAodGhlQ2FyZE5hbWUpID0+IHtcbiAgICAgIGNvbnN0IHRoaXNDYXJkID0gZ2V0Q2FyZCh0aGVDYXJkTmFtZSk7XG4gICAgICBmb3IgKGNvbnN0IHByb3AgaW4gdGhpc0NhcmQpIHtcbiAgICAgICAgY29uc29sZS5sb2coYG9iai4ke3Byb3B9ID0gJHt0aGlzQ2FyZFtwcm9wXX1gKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0RGF0ZSA9ICh0aGVDYXJkTmFtZSkgPT4ge1xuICAgICAgY29uc3QgdGhpc0NhcmQgPSBnZXRDYXJkKHRoZUNhcmROYW1lKTtcbiAgICAgIGNvbnN0IGFEYXRlID0gcHJvbXB0KFwiZW50ZXIgdGhlIGR1ZSBkYXRlIGluIHRoZSBmb3JtIG9mIE1NLkRELllZOlwiKTtcbiAgICAgIHRoaXNDYXJkLmNhcmREYXRlID0gbmV3IERhdGUoYURhdGUpO1xuICAgIH07XG5cbiAgICBjb25zdCBhZGRTdGVwID0gKHRoZUNhcmROYW1lKSA9PiB7XG4gICAgICBjb25zdCB0aGlzQ2FyZCA9IGdldENhcmQodGhlQ2FyZE5hbWUpO1xuICAgICAgY29uc3QgaSA9IHRoaXNDYXJkLmNhcmRTdGVwcy5sZW5ndGg7XG4gICAgICB0aGlzQ2FyZC5jYXJkU3RlcHNbaV0gPSBwcm9tcHQoXCJlbnRlciB5b3VyIHN0ZXA6XCIpO1xuICAgIH07XG5cbiAgICBjb25zdCBzZXRTdGVwID0gKHRoZUNhcmROYW1lKSA9PiB7XG4gICAgICBjb25zdCB0aGlzQ2FyZCA9IGdldENhcmQodGhlQ2FyZE5hbWUpO1xuICAgICAgY29uc3QgaSA9IHByb21wdChcIndoYXQgaW5kZXg/XCIpO1xuICAgICAgdGhpc0NhcmQuY2FyZFN0ZXBzW2ldID0gcHJvbXB0KFwiZW50ZXIgeW91ciBzdGVwOlwiKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0Q29tcGxldGUgPSAodGhlQ2FyZE5hbWUpID0+IHtcbiAgICAgIGNvbnN0IHRoaXNDYXJkID0gZ2V0Q2FyZCh0aGVDYXJkTmFtZSk7XG4gICAgICB0aGlzQ2FyZC5jYXJkQ29tcGxldGVWYWx1ZSA9IE51bWJlcihcbiAgICAgICAgcHJvbXB0KFxuICAgICAgICAgIFwiaXMgeW91ciB0YXNrIGNvbXBsZXRlPyBJZiBzbywgZW50ZXIgYSAnMScgb3RoZXJ3aXNlIGVuZXRlciAnMCcuXCJcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgLy8gcmV0dXJuIHtcbiAgICAvLyAgIHZpZXdBbGwsXG4gICAgLy8gICB2aWV3Q2FyZCxcbiAgICAvLyAgIHZpZXdEZWNrLFxuICAgIC8vICAgY3JlYXRlQ2FyZCxcbiAgICAvLyAgIGNyZWF0ZURlY2ssXG4gICAgLy8gICBnZXRDYXJkLFxuICAgIC8vICAgZ2V0RGVjayxcbiAgICAvLyAgIGFkZENhcmR0b0RlY2ssXG4gICAgLy8gICBkZWxldGVDYXJkRnJvbURlY2ssXG4gICAgLy8gICBkZWxldGVDYXJkLFxuICAgIC8vICAgZGVsZXRlRGVjayxcbiAgICAvLyAgIG1vdmVDYXJkLFxuICAgIC8vICAgc2V0RGF0ZSxcbiAgICAvLyAgIGFkZFN0ZXAsXG4gICAgLy8gICBzZXRDb21wbGV0ZSxcbiAgICAvLyAgIHNldFN0ZXAsXG4gICAgLy8gfTtcblxuXG4iLCJjb25zdCBkZWNrID0gKG5hbWUpID0+IHtcbiAgY29uc3QgZGVja05hbWUgPSBuYW1lO1xuICBjb25zdCBjYXJkc0FycmF5ID0gW107XG4gIGNvbnN0IGJvb2ttYXJrID0gMDtcbiAgcmV0dXJuIHtcbiAgICBkZWNrTmFtZSxcbiAgICBjYXJkc0FycmF5LFxuICAgIGJvb2ttYXJrLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVjaztcbiIsImltcG9ydCAqIGFzIGNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbHMnO1xuaW1wb3J0IHtkZWZhdWx0RGVjaywgZGVja0FycmF5LCBhbGx9IGZyb20gJy4vY29udHJvbGxzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGd1aSBmcm9tICcuL0dVSSc7XG5cbmxldCBjdXJyZW50RGVjayA9IGRlZmF1bHREZWNrO1xubGV0IGN1cnJlbnREZWNrRGl2O1xuXG5ndWkoZGVja0FycmF5LCBjdXJyZW50RGVjayk7XG5cbmNvbnN0IHNlbGVjdERlY2sgPSAoZSkgPT4ge1xuICAgIGNvbnN0IG5hbWVPZkRlY2sgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGl0bGUnKTtcbiAgICBjdXJyZW50RGVjayA9IGNvbnRyb2xsZXIuZ2V0RGVjayhuYW1lT2ZEZWNrKTtcbiAgICByZWZyZXNoKCk7XG5cbn1cblxuY29uc3Qgc2VsZWN0RGVja0xpc3RlbmVycyA9ICgpID0+IHtcbiAgICBjb25zdCBkZWNrQ29sbGVjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RlY2snKTtcbiAgICBBcnJheS5mcm9tKGRlY2tDb2xsZWN0aW9uKS5mb3JFYWNoKGRlY2tEaXYgPT4ge1xuICAgICAgIGRlY2tEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxlY3REZWNrKTtcbiAgICB9KVxufVxuXG5jb25zdCBzZXRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgc2VsZWN0RGVja0xpc3RlbmVycygpO1xufVxuXG5jb25zdCBlcmFzZUdVSSA9ICgpID0+IHtcbiAgICBjb25zdCBkZWNrcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RlY2snKTtcbiAgICBBcnJheS5mcm9tKGRlY2tzKS5mb3JFYWNoKGRlY2tFbGVtZW50ID0+IFxuICAgICAgICBkZWNrRWxlbWVudC5yZW1vdmUoKSk7XG4gICAgY29uc3QgY2FyZEFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZEFyZWEnKTtcbiAgICBjb25zdCBjYXJkcyA9IGNhcmRBcmVhLmNoaWxkTm9kZXM7XG4gICAgQXJyYXkuZnJvbShjYXJkcykuZm9yRWFjaChjYXJkRWxlbWVudCA9PiB7XG4gICAgICAgIGNhcmRFbGVtZW50LnJlbW92ZSgpO1xuICAgIH0pXG59XG5jb25zdCByZWZyZXNoID0gKCkgPT4ge1xuICAgIGVyYXNlR1VJKCk7XG4gICAgZ3VpKGRlY2tBcnJheSwgY3VycmVudERlY2spO1xuICAgIHNldExpc3RlbmVycygpXG59XG5cbnJlZnJlc2goKTtcblxuY29uc3QgYWRkRXZlbnRMaXN0ZW5lcnMgPSAoZWxlbWVudE5hbWUsIGFGdW5jdGlvbikgPT57XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2VsZW1lbnROYW1lfWApO1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhRnVuY3Rpb24pO1xufVxuXG5jb25zdCBhZGROZXdTdGVwRmllbGQgPSAoZSkgPT4ge1xuICAgIGlmKGUua2V5Q29kZSA9PT0gMTMpe1xuICAgICAgICBjb25zb2xlLmxvZyhgcHJlc3NlZCBFTlRFUmApO1xuICAgICAgICBjb25zdCBzdGVwID0gZHJhd1N0ZXAoKTtcbiAgICAgICAgc3RlcC5mb2N1cygpO1xuICAgIH1cbn1cblxuY29uc3QgdXBkYXRlQ3VycmVudERlY2tEaXYgPSAoKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coJ2ltIHVwZGF0ZWluZyB0aGUgY3VycmVudCBESVYnKVxuICAgIGNvbnN0IHRoZUN1cnJlbnREZWNrTmFtZSA9IGN1cnJlbnREZWNrLmRlY2tOYW1lO1xuICAgIC8vIGNvbnNvbGUubG9nKCd0aGVDdXJyZW50RGVja05hbWUgaXMgKyAnICsgdGhlQ3VycmVudERlY2tOYW1lKTtcbiAgICBjb25zdCBkZWNrRGl2cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RlY2snKTtcbiAgICBBcnJheS5mcm9tKGRlY2tEaXZzKS5mb3JFYWNoKGRlY2tEaXYgPT4ge1xuICAgICAgICBjb25zdCB0aXRsZURpdiA9IGRlY2tEaXYuY2hpbGRyZW5bMF07XG4gICAgICAgIGNvbnNvbGUubG9nKGRlY2tEaXYpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGVDdXJyZW50RGVja05hbWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhgZG9lcyAke3RpdGxlRGl2fSBhbmQgJHt0aGVDdXJyZW50RGVja05hbWV9IG1hdGNoP2ApXG4gICAgICAgIGlmKHRpdGxlRGl2LnRleHRDb250ZW50ID09PSB0aGVDdXJyZW50RGVja05hbWUpe1xuICAgICAgICAgICAgY3VycmVudERlY2tEaXYgPSBkZWNrRGl2O1xuICAgICAgICB9XG4gICAgfSlcbiAgICBcbiAgICAvLyBjb25zb2xlLmxvZyhkZWNrRGl2cyk7XG4gICAgLy8gQXJyYXkuZnJvbShkZWNrRGl2cykuZm9yRWFjaChkZWNrRGl2ID0+IHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ3RoZSBkZWNrVGl0bGVpcyAnKyBkZWNrVGl0bGVEaXYpO1xuICAgIC8vICAgICBpZihkZWNrRGl2LmZpcnN0RWxlbWVudENoaWxkLnRleHRDb250ZW50ID09PSB0aGVDdXJyZW50RGVja05hbWUpe1xuICAgIC8vICAgICAgICAgY3VycmVudERlY2tEaXYgPSBkZWNrRGl2O1xuICAgIC8vICAgICB9XG4gICAgLy8gfSlcbn1cblxuXG5cblxuXG5cbmNvbnN0IHVwZGF0ZUN1cnJlbnREZWNrID0gKGUpID0+IHtcbiAgICByZW1vdmVTZWxlY3RlZFN0eWxlKCk7XG4gICAgLy8gY29uc29sZS5sb2coJ2ltIFVQREFUSW5HIScpO1xuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmlubmVySFRNTCk7XG4gICAgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZWNrJykpe1xuICAgICAgICBjb25zb2xlLmxvZygnY2xpY2tlZG9uIERFQ0sgRElWJylcbiAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXRpdGxlJykpXG4gICAgICAgIGNvbnN0IHRoZURlY2tOYW1lID0gKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS10aXRsZScpKTtcbiAgICAgICAgY3VycmVudERlY2sgPSBjb250cm9sbGVyLmdldERlY2sodGhlRGVja05hbWUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2NsaWNrZWRvbiBUSVRMRSBESVYnKVxuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC50ZXh0Q29udGVudClcbiAgICAgICAgY29uc3QgdGhlRGVja05hbWUgPSAoZS50YXJnZXQudGV4dENvbnRlbnQpO1xuICAgICAgICBjdXJyZW50RGVjayA9IGNvbnRyb2xsZXIuZ2V0RGVjayh0aGVEZWNrTmFtZSk7XG4gICAgfVxuICAgIFxuICAgIC8vIGNvbnNvbGUubG9nKCdnb25uYSB1cGRhdGUgY3VycmVudCBkZWNrIGRpdicpO1xuICAgIHVwZGF0ZUN1cnJlbnREZWNrRGl2KCk7XG4gICAgLy8gY29uc29sZS5sb2coJ2dvbm5hIHN0eWxlIGN1cnJlbnQgZGVjRGl2ICcgKyBjdXJyZW50RGVja0Rpdik7XG4gICAgc3R5bGVDdXJyZW50KCk7XG4gICAgcG9wdWxhdGVDYXJkKCk7XG59XG5cbmNvbnN0IHVwZGF0ZUN1cnJlbnREZWNrQnlOYW1lID0gKG5hbWUpID0+IHtcbiAgICByZW1vdmVTZWxlY3RlZFN0eWxlKCk7XG4gICAgLy8gY29uc29sZS5sb2coJ2ltIFVQREFUSW5HIScpO1xuICAgIFxuICAgIGNvbnN0IHRoZURlY2tOYW1lID0gbmFtZTtcbiAgICBjdXJyZW50RGVjayA9IGNvbnRyb2xsZXIuZ2V0RGVjayh0aGVEZWNrTmFtZSk7XG4gICAgLy8gY29uc29sZS5sb2coJ2dvbm5hIHVwZGF0ZSBjdXJyZW50IGRlY2sgZGl2Jyk7XG4gICAgdXBkYXRlQ3VycmVudERlY2tEaXYoKTtcbiAgICAvLyBjb25zb2xlLmxvZygnZ29ubmEgc3R5bGUgY3VycmVudCBkZWNEaXYgJyArIGN1cnJlbnREZWNrRGl2KTtcbiAgICBzdHlsZUN1cnJlbnQoKTtcbiAgICBwb3B1bGF0ZUNhcmQoKTtcbn1cblxuXG5cblxuXG5cbmNvbnN0IHNhdmVEZWNrVGl0bGUgPSAoZSkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKCdzYXZpbmcgY2hhbmdlIHRvIHRpdGxlJyk7XG4gICAgY29uc3QgdGV4dCA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xuICAgIGN1cnJlbnREZWNrLmRlY2tOYW1lID0gdGV4dDtcbn1cblxuXG5cblxuXG5jb25zdCBzYXZlVGl0bGUgPSAoZSkgPT4ge1xuICAgIFxuXG4gICAgLy8gY29uc29sZS5sb2coJ3NhdmluZyBjaGFuZ2UgdG8gdGl0bGUnKTtcbiAgICBjb25zdCB0ZXh0ID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XG4gICAgLy8gY29uc29sZS5sb2codGV4dCk7XG4gICAgLy8gY29uc29sZS5sb2coY3VycmVudERlY2suYm9va21hcmspO1xuICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnREZWNrLmNhcmRzQXJyYXlbY3VycmVudERlY2suYm9va21hcmtdKTtcbiAgICAvLyBjdXJyZW50RGVjay5jYXJkc0FycmF5W2N1cnJlbnREZWNrLmJvb2ttYXJrXSA9IHRleHQ7XG4gICAgY29uc3QgdGhlQ2FyZCA9IGNvbnRyb2xsZXIuZ2V0Q2FyZChjdXJyZW50RGVjay5jYXJkc0FycmF5W2N1cnJlbnREZWNrLmJvb2ttYXJrXSk7XG4gICAgLy8gY29uc29sZS5sb2codGhlQ2FyZCk7XG4gICAgdGhlQ2FyZC5jYXJkTmFtZSA9IHRleHQ7XG4gICAgY3VycmVudERlY2suY2FyZHNBcnJheVtjdXJyZW50RGVjay5ib29rbWFya10gPSB0ZXh0O1xuICAgIC8vIGNvbnNvbGUubG9nKHRoZUNhcmQuY2FyZE5hbWUpO1xufVxuXG5cblxuY29uc3Qgc2F2ZVN0ZXAgPSAoZSkgPT4ge1xuICAgIGlmKGUua2V5Q29kZSA9PT0gMTMpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGluaXRpYWxUZXh0ID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XG4gICAgICAgIGNvbnN0IHN0ZXBTdHJpbmcgPSBlLnRhcmdldC50ZXh0Q29udGVudDtcbiAgICAgICAgY29uc29sZS5sb2coYHN0ZXBTdHJpbmcgaXMgJHtzdGVwU3RyaW5nfWApO1xuICAgICAgICBjb25zdCB0aGVDYXJkID0gY29udHJvbGxlci5nZXRDYXJkKGN1cnJlbnREZWNrLmNhcmRzQXJyYXlbY3VycmVudERlY2suYm9va21hcmtdKTtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGVDYXJkLmNhcmRTdGVwcy5pbmRleE9mKHN0ZXBTdHJpbmcpO1xuICAgICAgICBjb25zb2xlLmxvZyhgdGhlIGNhcmQgc3RlcHMgYXJlOiAke3RoZUNhcmQuY2FyZFN0ZXBzfWApO1xuICAgICAgICBjb25zdCB0ZXh0ID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XG4gICAgICAgIGNvbnNvbGUubG9nKGB0ZXh0IGlzICR7dGV4dH1gKTtcbiAgICAgICAgY29uc29sZS5sb2coYGluZGV4IGlzICR7aW5kZXh9YCk7XG4gICAgICAgIGlmKHRleHQgIT09ICcnKXtcbiAgICAgICAgICAgIGlmKHRoZUNhcmQuY2FyZFN0ZXBzLmxlbmd0aCA8IDEpe1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgY2FyZCBzdGVwcyBsZXNzIHRoYW4gMWApXG4gICAgICAgICAgICAgICAgICAgIHRoZUNhcmQuY2FyZFN0ZXBzLnB1c2godGV4dCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYodGhlQ2FyZC5jYXJkU3RlcHNbaW5kZXhdID09PSBpbml0aWFsVGV4dCl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGVDYXJkLmNhcmRTdGVwc1tpbmRleF0gPSB0ZXh0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhlQ2FyZC5jYXJkU3RlcHMucHVzaCh0ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG5ld1N0ZXBEaXYgPSBkcmF3Q2FyZFN0ZXAoKTtcbiAgICAgICAgICAgIG5ld1N0ZXBEaXYuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGUudGFyZ2V0LmJsdXIoKTtcbiAgICAgICAgICAgIGNvbnN0IGNhcmRTdGVwc0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkU3RlcHMnKTtcbiAgICAgICAgICAgIGNvbnN0IHRoaXNTdGVwID0gY2FyZFN0ZXBzRGl2Lmxhc3RDaGlsZDtcbiAgICAgICAgICAgIC8vIGlmKGUudGFyZ2V0Lmhhc0ZvY3VzKCkgPT0gZmFsc2Upe1xuICAgICAgICAgICAgLy8gICAgIHRoaXNTdGVwLnJlbW92ZSgpO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuXG4gICAgfVxuICAgIFxuXG5cblxuY29uc3QgZGVsZXRlQW5kRXJhc2VDYXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IHRoaXNDYXJkTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkVGl0bGUnKS50ZXh0Q29udGVudDtcbiAgICBjb25zdCB0aGlzQ2FyZCA9IGNvbnRyb2xsZXIuZ2V0Q2FyZCh0aGlzQ2FyZE5hbWUpO1xuICAgIGlmKGN1cnJlbnREZWNrID09PSBhbGwpe1xuICAgICAgICB0aGlzQ2FyZC5jYXJkRGVja3MuZm9yRWFjaChkZWNrRWxlbWVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCB0aGlzRGVjayA9IGNvbnRyb2xsZXIuZ2V0RGVjayhkZWNrRWxlbWVudCk7XG4gICAgICAgICAgICBjb250cm9sbGVyLmRlbGV0ZUNhcmRGcm9tRGVjayh0aGlzQ2FyZCwgdGhpc0RlY2spO1xuICAgICAgICB9KVxuICAgICAgICBjb250cm9sbGVyLmRlbGV0ZUNhcmQodGhpc0NhcmQpO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgICBjb250cm9sbGVyLmRlbGV0ZUNhcmRGcm9tRGVjayh0aGlzQ2FyZCwgY3VycmVudERlY2spO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICAvLyBjb250cm9sbGVyLmRlbGV0ZUNhcmQoKTtcbiAgICBwb3B1bGF0ZUNhcmQoKTtcbn1cblxuY29uc3QgZGVsZXRlQW5kRXJhc2VEZWNrID0gKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhgZXJhc2luZyBhbmQgZGVsZXRpbmcgZGVjay4ke2N1cnJlbnREZWNrLmRlY2tOYW1lfWApXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCBkZWxldGVEaXYgPSBlLnRhcmdldDtcbiAgICBjb25zdCBkZWNrRGl2ID0gZGVsZXRlRGl2LnBhcmVudEVsZW1lbnQ7XG4gICAgY29uc3QgZGVja1RpdGxlRGl2ID0gZGVja0Rpdi5maXJzdENoaWxkO1xuICAgIGNvbnN0IGRlY2tUaXRsZSA9IGRlY2tUaXRsZURpdi50ZXh0Q29udGVudDtcbiAgICBjb25zdCBjdXJyZW50RGVja0luZGV4ID0gZGVja0FycmF5LmluZGV4T2YoY3VycmVudERlY2spO1xuICAgIGNvbnNvbGUubG9nKGB0aGUgaW5kZXggb2YgdGhlIGN1cnJlbkRlY2sgaXMgJHtjdXJyZW50RGVja0luZGV4fWApXG4gICAgY29udHJvbGxlci5kZWxldGVEZWNrKGRlY2tUaXRsZSk7XG4gICAgaWYoY3VycmVudERlY2suZGVja05hbWUgPT09IGRlY2tUaXRsZSl7XG4gICAgICAgIGNvbnNvbGUubG9nKGB0aGUgZGVjayBkZWxldGVkIHdhcyB0aGUgY3VycmVudCBkZWNrLmApXG4gICAgICAgIGlmKGRlY2tBcnJheS5sZW5ndGggPCAyKXtcbiAgICAgICAgICAgIGN1cnJlbnREZWNrID0gYWxsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY3VycmVudERlY2sgPSBkZWNrQXJyYXlbY3VycmVudERlY2tJbmRleF07XG4gICAgICAgICAgICBlcmFzZURlY2tzKCk7XG4gICAgICAgICAgICBkcmF3RGVja3MoZGVja0FycmF5KTtcbiAgICAgICAgfVxuICAgICAgICBlcmFzZURlY2tzKCk7XG4gICAgICAgIGRyYXdEZWNrcyhkZWNrQXJyYXkpO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgICBlcmFzZURlY2tzKCk7XG4gICAgICAgIGRyYXdEZWNrcyhkZWNrQXJyYXkpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhgQUZURVIgREVMRVRFIGN1cnJlbnREZWNrIGlzICR7Y3VycmVudERlY2suZGVja05hbWV9YCk7XG59XG5cblxuXG5cblxuXG5cbmNvbnN0IGdldEJvb2ttYXJrZWRDYXJkID0gKGFEZWNrKSA9PiB7XG4gICAgY29uc3QgdGhpc0Jvb2ttYXJrID0gYURlY2suYm9va21hcms7XG4gICAgbGV0IHRoaXNDYXJkTmFtZSA9IGFEZWNrLmNhcmRzQXJyYXlbdGhpc0Jvb2ttYXJrXTtcbiAgICBjb25zdCB0eXBlID0gdHlwZW9mKHRoaXNDYXJkTmFtZSk7XG4gICAgaWYodHlwZSAhPT0gXCJzdHJpbmdcIil7XG4gICAgICAgIGlmKHRoaXNDYXJkTmFtZSAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIHRoaXNDYXJkTmFtZSA9IHRoaXNDYXJkTmFtZS5jYXJkTmFtZTtcbiAgICAgICAgfVxuICBcbiAgICB9XG4gICAgY29uc29sZS5sb2coYGJvb2ttcmtlZCBjcmQgaXMgJHt0aGlzQ2FyZE5hbWV9YCk7XG4gICAgY29uc3QgYUNhcmQgPSBjb250cm9sbGVyLmdldENhcmQodGhpc0NhcmROYW1lKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKGFDYXJkKTtcbiAgICByZXR1cm4gYUNhcmQ7XG59XG5cbmNvbnN0IGVyYXNlU3RlcHMgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3RlcHNEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZFN0ZXBzJyk7XG4gICAgY29uc3Qgc3RlcHMgPSBzdGVwc0Rpdi5jaGlsZHJlbjtcbiAgICBBcnJheS5mcm9tKHN0ZXBzKS5mb3JFYWNoKHN0ZXBFbGVtZW50ID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYHJlbW92aW5nICR7c3RlcEVsZW1lbnR9IGZyb20gJHtzdGVwc0Rpdn1gKVxuICAgICAgICBzdGVwRWxlbWVudC5yZW1vdmUoKTtcbiAgICB9KVxuICAgIFxufVxuXG5cblxuY29uc3QgZHJhd0NhcmRTdGFjayA9IChhRGVjaykgPT4ge1xuICAgIGNvbnNvbGUubG9nKGFEZWNrKTtcbiAgICBkcmF3QmFja2dyb3VuZENhcmRzKDIpO1xuICAgIGRyYXdUb3BDYXJkKCk7XG4gICAgcG9wdWxhdGVDYXJkKCk7ICAgIFxufVxuXG5jb25zdCBhZHZhbmNlQm9va21hcmsgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3J1bm5pbmcgYWR2YW5jZSBib29rbWFyaycpXG4gICAgY3VycmVudERlY2suYm9va21hcmsrKztcbiAgICBpZihjdXJyZW50RGVjay5jYXJkc0FycmF5W2N1cnJlbnREZWNrLmJvb2ttYXJrXSAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgcG9wdWxhdGVDYXJkKCk7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIGN1cnJlbnREZWNrLmJvb2ttYXJrLS07XG4gICAgICAgIHBvcHVsYXRlQ2FyZCgpO1xuICAgIH1cbn1cblxuY29uc3QgcHJldmlvdXNCb29rbWFyayA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygncnVubmluZyBwcmV2aW91cyBib29rbWFyaycpXG4gICAgY3VycmVudERlY2suYm9va21hcmstLTtcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50RGVjay5ib29rbWFyayk7XG4gICAgaWYoY3VycmVudERlY2suY2FyZHNBcnJheVtjdXJyZW50RGVjay5ib29rbWFya10gIT09IHVuZGVmaW5lZCl7XG4gICAgICAgIGNvbnNvbGUubG9nKCdib29rbWFyayB3YXMgZGVmaW5lZCcpXG4gICAgICAgIHBvcHVsYXRlQ2FyZCgpO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgICBjdXJyZW50RGVjay5ib29rbWFyaysrO1xuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50RGVjay5ib29rbWFyayk7XG4gICAgICAgIHBvcHVsYXRlQ2FyZCgpO1xuICAgIH1cbiAgICBcbn1cblxuXG5cbmNvbnN0IGFkZEZvcndhcmRCYWNrd2FyZExpc3RlbmVycyA9ICgpID0+IHtcbiAgICBhZGRFdmVudExpc3RlbmVycygnZm9yd2FyZEJ1dHRvbicsIGFkdmFuY2VCb29rbWFyayk7XG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoJ2JhY2t3YXJkQnV0dG9uJywgcHJldmlvdXNCb29rbWFyayk7XG59XG5cblxuXG5cbmNvbnN0IGNyZWF0ZUFuZFJlbmRlckRlY2sgPSAobmFtZSkgPT4ge1xuICAgIGNvbnRyb2xsZXIuY3JlYXRlRGVjayhuYW1lKTtcbiAgICBlcmFzZURlY2tzKCk7XG4gICAgZHJhd0RlY2tzKGRlY2tBcnJheSk7XG59XG5cbi8vIGNvbnN0IGNyZWF0ZUNhcmQgPSAobmFtZSkgPT4ge1xuLy8gICAgIGNvbnRyb2xsZXIuY3JlYXRlQ2FyZChuYW1lKTtcbi8vICAgICBwb3B1bGF0ZUNhcmQoKTtcbi8vIH1cblxuY29uc3QgY3JlYXRlQW5kUmVuZGVyQ2FyZCA9IChuYW1lKSA9PiB7XG4gICAgY29udHJvbGxlci5jcmVhdGVDYXJkKG5hbWUpO1xuICAgIHBvcHVsYXRlQ2FyZCgpO1xufVxuXG5sZXQgZm9ybVR5cGUgPSAnZGVjayc7XG5cblxuXG5cblxuXG5cbmNvbnN0IHNob3dGb3JtID0gKCkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKCdzaG93aW5nIGZvcm0hJyk7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdmVyTGF5SG9sZGVyJyk7XG4gICAgZm9ybS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xufVxuXG5jb25zdCBoaWRlRm9ybSA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnaGlkaW5nIGZvcm0hJyk7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdmVyTGF5SG9sZGVyJyk7XG4gICAgZm9ybS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgbGV0IGFEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RlcCcpO1xuICAgIGFEaXYuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIGFEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpO1xuICAgIGFEaXYuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIGFEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZERlY2snKTtcbiAgICBhRGl2LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbn1cblxuXG5cblxuXG5jb25zdCBzYXZlRGVjayA9ICgpID0+IHtcbiAgICBjb25zdCBhRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmQtdGl0bGUnKS52YWx1ZTtcbiAgICBjcmVhdGVBbmRSZW5kZXJEZWNrKGFEaXYpO1xuICAgIHJlc2V0Rm9ybURlY2soKTtcbiAgICBoaWRlRm9ybSgpO1xufVxuXG5jb25zdCBzYXZlQ2FyZCA9ICgpID0+IHtcbiAgICBsZXQgaXNDdXJyZW50ID0gMDtcbiAgICBsZXQgYUNhcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZC10aXRsZScpLnZhbHVlO1xuICAgIGFDYXJkID0gY29udHJvbGxlci5jcmVhdGVDYXJkKGFDYXJkKTtcbiAgICBjb25zdCBzdGVwQ29sbGVjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N0ZXAnKTtcbiAgICBBcnJheS5mcm9tKHN0ZXBDb2xsZWN0aW9uKS5mb3JFYWNoKHN0ZXAgPT4ge1xuICAgICAgICBhQ2FyZC5jYXJkU3RlcHMucHVzaChzdGVwLnZhbHVlKTtcbiAgICB9KVxuXG4gICAgYUNhcmQuY2FyZERhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpLnZhbHVlO1xuICAgIGNvbnN0IGRlY2tMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmREZWNrJyk7XG4gICAgY29uc3QgY29sbGVjdGlvbiA9IGRlY2tMaXN0LnNlbGVjdGVkT3B0aW9ucztcbiAgICBjb25zb2xlLmxvZyhgdGhlIGN1cnJlbnQgZGVjayB3YXMgJHtjdXJyZW50RGVja31gKTtcbiAgICBpZihjb2xsZWN0aW9uLmxlbmd0aCA8IDIgKXtcbiAgICAgICAgY29uc3QgdGhlU2VsZWN0ZWREZWNrID0gY29sbGVjdGlvblswXS50ZXh0Q29udGVudDtcbiAgICAgICAgY29uc3QgdGhlRGVja05hbWUgPSB0aGVTZWxlY3RlZERlY2s7XG4gICAgICAgIHVwZGF0ZUN1cnJlbnREZWNrQnlOYW1lKHRoZURlY2tOYW1lKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coYHRoZSBjdXJyZW50IGRlY2sgaXMgbm93ICR7Y3VycmVudERlY2t9YCk7XG4gICAgY29uc29sZS5sb2coYHNlbGVjdGVkIG9wdGlvbnMgY29sbGVjdGlvbiBpcyAke2NvbGxlY3Rpb259YCk7XG4gICAgQXJyYXkuZnJvbShjb2xsZWN0aW9uKS5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGB0aGlzIG9wdGlvbiBpcyAke29wdGlvbn0gaXQncyB2YWx1ZSBpcyAke29wdGlvbi52YWx1ZX1gKTtcbiAgICAgICAgICAgIGFDYXJkLmNhcmREZWNrcy5wdXNoKG9wdGlvbi52YWx1ZSk7IFxuICAgICAgICAgICAgaWYob3B0aW9uLnZhbHVlID09PSBjdXJyZW50RGVjay5kZWNrTmFtZSl7XG4gICAgICAgICAgICAgICAgaXNDdXJyZW50ID0gMTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtvcHRpb24udmFsdWV9IGlzICR7Y3VycmVudERlY2suZGVja05hbWV9YCk7XG4gICAgICAgICAgICB9IFxuICAgIH0pXG4gICAgYUNhcmQuY2FyZERlY2tzLmZvckVhY2goZGVja05hbWVTdHJpbmcgPT4ge1xuICAgICAgICBpZihkZWNrTmFtZVN0cmluZyAhPT0gJ2FsbCcpe1xuICAgICAgICAgICAgY29uc3QgYURlY2sgPSBjb250cm9sbGVyLmdldERlY2soZGVja05hbWVTdHJpbmcpXG4gICAgICAgICAgICBjb250cm9sbGVyLmFkZENhcmR0b0RlY2soYUNhcmQsIGFEZWNrKTtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgaWYoaXNDdXJyZW50ID09PSAxKXtcbiAgICAgICAgY29uc29sZS5sb2coYCR7Y3VycmVudERlY2suYm9va21hcmt9IGlzIHRoZSBjdXJyZW50IGJvb2ttYXJrIG9mIHRoZSBjdXJyZW50IGRlY2suYClcbiAgICAgICAgY29uc29sZS5sb2coYGJ1dCBub3cgaXQgd2lsbCBiZSAke2N1cnJlbnREZWNrLmNhcmRzQXJyYXkuaW5kZXhPZihhQ2FyZC5jYXJkTmFtZSl9YCk7XG4gICAgICAgIC8vIGNvbnN0IHRoZUNhcmRCb29rbWFyayA9IGN1cnJlbnREZWNrLmNhcmRzQXJyYXkuaW5kZXhPZihhQ2FyZC5jYXJkTmFtZSk7XG4gICAgICAgIGN1cnJlbnREZWNrLmJvb2ttYXJrID0gY3VycmVudERlY2suY2FyZHNBcnJheS5pbmRleE9mKGFDYXJkLmNhcmROYW1lKTtcbiAgICAgICAgY29uc29sZS5sb2coYHRoZSBjdXJyZW50IGRlY2sgYm9va21hcmsgaXMgbm93ICR7Y3VycmVudERlY2suYm9va21hcmt9YCk7XG4gICAgICAgIGlzQ3VycmVudCA9IDA7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGBzYXZpbmcgY2FyZC4gY3VycmVudCBkZWNrIGlzICR7Y3VycmVudERlY2t9YCk7XG4gICAgY29uc29sZS5sb2coY3VycmVudERlY2suYm9va21hcmspO1xuICAgIHBvcHVsYXRlQ2FyZCgpO1xuICAgIHJlc2V0Rm9ybUNhcmQoKTtcbiAgICBoaWRlRm9ybSgpO1xuICAgIFxufVxuXG5cblxuY29uc3Qgc2F2ZUZvcm0gPSAoKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coJ3NhdmUgdHlwZSBpczogJysgZm9ybVR5cGUpO1xuICAgIGlmKGZvcm1UeXBlID09PSdkZWNrJyl7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzYXZpbmcgZGVjayEnKVxuICAgICAgICBzYXZlRGVjaygpO1xuICAgIH1cbiAgICBlbHNlIGlmKGZvcm1UeXBlID09PSAnY2FyZCcpe1xuICAgICAgICBjb25zb2xlLmxvZygnc2F2aW5nIGNhcmQhJylcbiAgICAgICAgc2F2ZUNhcmQoKTtcbiAgICAgICAgcG9wdWxhdGVDYXJkKCk7XG4gICAgfVxufVxuXG5cbi8vIGFkZEV2ZW50TGlzdGVuZXJzKCdhZGREZWNrQnV0dG9uJywgc2hvd0RlY2tGb3JtKTtcbi8vIGFkZEV2ZW50TGlzdGVuZXJzKCdhZGRDYXJkQnV0dG9uJywgc2hvd0NhcmRGb3JtKTtcbi8vIGFkZEV2ZW50TGlzdGVuZXJzKCdjYW5jZWwnLCBoaWRlRm9ybSk7XG4vLyBhZGRFdmVudExpc3RlbmVycygnY2hlY2snLCBzYXZlRm9ybSk7XG5cblxuLy8gZHJhd0NhcmRTdGFjayhkZWZhdWx0RGVjayk7XG4vLyBmaXJzdERyYXdEZWNrcyhkZWNrQXJyYXkpO1xuLy8gYWRkRm9yd2FyZEJhY2t3YXJkTGlzdGVuZXJzKCk7XG4vLyBzdHlsZUN1cnJlbnQoKTtcblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
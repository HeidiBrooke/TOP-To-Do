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
___CSS_LOADER_EXPORT___.push([module.id, "/* *{\n    box-sizing: border-box;\n} */\nbody {\n    padding: 0px;\n    margin: 0px;\n    position: relative;\n    font-size: 14px;\n    \n    /* height: 100vh; */\n    \n}\n\ndiv {\n    /* border-top: 2px solid white; */\n    padding: 4px;\n\n}\n#content {\n    margin: 0px;\n    width: 100vw;\n    /* height: 100vh; */\n    display: flex;\n    flex-direction: column;\n    background-color: rgb(63, 135, 152);\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    align-items: center;\n    position: relative;\n}\n\n#container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 4px;\n    padding: 20px;\n    margin: 20px 0;\n    width: 480px;\n    height: 100vh;  \n}\n\n#header{\n    display: flex;\n    width: 100%;\n    height: 100px;\n}\n\n#deckDock{\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 200px;\n}\n\n#deckArea{\n    display: flex;\n    flex-direction: row;\n    gap: 7px;\n}\n\n#cardDock{\n    padding: 4px;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n}\n\n#logo, .title{\n    width: 100px;\n    font-size: 32px;\n    font-weight: 600;\n    font-family: 'Raleway', sans-serif;\n    color: white;\n    border: none;\n}\n\n.title{\n    width: auto;\n    font-size: 24px;\n}\n\n\n#cardArea{\n    display: grid;\n    grid-template-columns: 60px 1fr 60px;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    border: none;\n}\n\n.deck, .blankDeck{\n    /* pointer-events: none; */\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: repeat(5, 1fr);\n    width: 60px;\n    height: 90px;\n    border-radius: 4px;\n    background-color: white;\n    /* box-shadow: rgba(0, 0, 0, 0.16) 0 7px 9px -7px;\n    box-shadow: rgba(53, 82, 94, 0.3) 1px 7px 7px 1px; */\n    justify-items: center;\n    justify-content: space-between;\n    align-items: center;\n    /* padding: 0px; */\n}\n\n.blankDeck{\n    background-color:  rgb(46, 99, 111);\n    \n}\n\n.menu{\n    border: none;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: left;\n    gap: 4px;\n}\n\n#deckTitle, #cardTitle, #cardDate, #cardSteps{\n    margin-top: 8px;\n    font-family: 'Raleway', sans-serif;\n    color: rgb(63, 135, 152);\n    font-weight: 600;\n    text-transform: uppercase;\n    text-align: center;\n    text-justify: center;\n}\n\n#deckTitle{\n    margin: 0px;\n    grid-column: 1/4;\n    grid-row: 1/5;\n    /* background-color: aqua; */\n    /* width: 100%;\n    height: 100%; */\n    cursor: pointer;\n    /* opacity: 50%; */\n}\n\n.selectedDeck {\n    box-shadow: rgb(102, 220, 241) 0 0 3px 2px;\n    /* box-shadow: rgba(53, 82, 94, 0.3) 1px 9px 9px 1px; */\n}\n\n#addCardButton, #addDeckButton{\n    font-size: 48px;\n    cursor: pointer;\n}\n\n#addCardButton:hover, #addDeckButton:hover, .nextButton:hover{\n    /* text-shadow:  0 0 3px 2px, rgb(102, 173, 241); */\n    text-shadow: -1px 1px 2px rgb(102, 220, 241),\n\t\t\t\t  1px 1px 2px rgb(102, 220, 241),\n\t\t\t\t  1px -1px 0 rgb(102, 220, 241),\n\t\t\t\t  -1px -1px 0 rgb(102, 220, 241);\n    \n}\n.nextButton{\n    justify-self: right;\n    color: white;\n    color: rgb(80, 163, 182);\n    font-family: 'Raleway', sans-serif;\n    font-size: 72px;\n    border: none;\n    cursor: pointer;\n}\n\n#forwardButton{\n    justify-self: left;\n    grid-column: 3/4;\n}\n\n#backwardButton{\n    justify-self: right;\n    grid-column: 1/2;\n    grid-row: 1/2;\n}\n\n\n.cardBig{\n    grid-column: 2/3;\n    grid-row: 1/2;\n    justify-self: center;\n    display: flex;\n    width: 240px;\n    height: 360px;\n    border-radius: 16px;\n    background-color: white;\n    box-shadow: rgba(53, 82, 94, 0.3) 1px 9px 9px 1px;\n    justify-content: center;\n    align-items: center;\n    z-index: 1;\n\n}\n\n#topCard{\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: repeat(8, 1fr);\n\n    /* flex-direction: column; */\n}\n\n.bigPlus, .littlePlus{\n    grid-column: 1/5;\n    grid-row: 4/6;\n    cursor: pointer;\n    font-size: 72px;\n    color: rgb(63, 135, 152);\n    font-family: 'Raleway', sans-serif;\n    font-weight: 600;\n    align-self: center;\n    justify-self: center;\n    \n}\n\n.littlePlus{\n    grid-row: 3/4;\n}\n\n.stack0{\n    background-color: white;\n    position: absolute;\n    top: 6px;\n    left: 63px;\n    /* z-index: -1; */\n    transform: rotate(2deg);\n}\n\n.stack1{\n    position: absolute;\n    top: 3px;\n    left: 58px;\n    /* z-index: -2; */\n    transform: rotate(1deg);\n}\n\n.stack2{\n    position: absolute;\n    top: 4px;\n    left: 120px;\n    /* z-index: -3; */\n    transform: rotate(6deg);\n}\n\n.editSize{\n    /* position: absolute;\n    top: 180px; */\n    width: 300px;\n    height: 450px;\n    z-index: 3;\n}\n\n.overLayHolder{\n    position: absolute;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100vw;\n    height: 100vh; \n    \n}\n\n.overlay{\n    display: grid;\n    position: absolute;\n    background-color: rgb(37, 107, 107);\n    opacity: 60%;\n    height: 100vh;\n    width: 100vw;\n    z-index: 2;\n    padding: 20px; \n}\n\n.formDiv{\n    display: flex;\n    flex-direction: column;\n    padding-top: 100px;\n    gap: 20px;\n    width: 300px;\n    height: 600px;\n    z-index: 3;\n}\n\n.submitButtonsDiv{\n    display: flex;\n    flex-direction: row;\n    gap: 16px;\n    height: 44px;\n}\n\n.cardForm{\n    display: grid;\n    gap: 16px;\n    width:300px;\n    height: 410px;\n    grid-template-columns: 1fr 1.5fr 1.5fr 1fr;\n    grid-template-rows: repeat(7, 1fr);\n    padding: 20px;\n}\n\n.input, .check{\n    padding: 8px;\n    grid-column: 1/5;\n    border: none;\n    outline: none;\n    border-radius: 16px;\n    background-color: rgb(242, 242, 242);\n    color: rgb(80, 163, 182);\n    font-family: 'Raleway', sans-serif;\n    font-size: 18px;\n    text-align: center;\n}\n\n.input:hover{\n    box-shadow: rgb(102, 173, 241) 0 0 3px 2px;\n    box-shadow: rgb(102, 220, 241) 0 0 3px 2px;\n}\n\n#step{\n    grid-column: 2/5;\n    background-color: white;\n    font-size: 15px;\n    display: flex;\n    align-items: flex-start;\n    text-align: left;\n    text-justify: left;\n}\n\n#stepHolder{\n    grid-column: 1/5;\n    grid-row: 3/6;\n    /* background-color: aquamarine; */\n    display: flex;\n    flex-direction: column;\n}\n\n#preStep{\n    grid-column: 1/2;\n    grid-row: 3/4;\n    background-color: white;\n    font-size: 24px;\n    font-weight: 600;\n}\n\n\n.stepDiv{\n    /* background-color: aqua; */\n}\n\n\n#step:hover, #preStep:hover{\n    box-shadow: none;\n}\n\n.cardTitle{\n   grid-row: 1/2;\n   grid-column: 1/5;\n   text-align: center;\n}\n\n#cardSteps{\n    grid-column: 2/4;\n    grid-row: 2/7;\n}\n\n#cardDate{\n    grid-row: 7/8;\n    grid-column: 1/5;\n    text-align: center;\n}\n\n#cardDelete{\n    margin-left: 12px;\n    grid-column: 1/2;\n    grid-row: 8/9;\n    font-size: 16px;\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    background-color: rgb(80, 163, 182);\n    color: white;\n    text-align: center;\n    text-justify: center;\n    cursor: pointer;\n}\n\n#deckDelete{\n    grid-column: 1/2;\n    grid-row: 5/6;\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    background-color: rgb(80, 163, 182);\n    color: white;\n    font-family: 'Raleway', sans-serif;\n    font-size: 9px;\n    font-weight: 600;\n    text-align: center;\n    text-justify: center; \n    align-self: flex-start;\n    cursor: pointer;\n}\n\n.check{\n    background-color: white;\n    width: 50px;\n    z-index: 3;\n    text-align: center;\n    vertical-align: center;\n}\n\n.grow { \n    cursor: pointer;\n    transition: all .1s ease-in-out; \n    }\n    \n.grow:hover { \n    transform: scale(1.05); \n    }\n\n.check:hover{\n    font-size: 24px;\n}\n\n[contenteditable] {\n    /* outline: 0px solid transparent; */\n  }\n\nli {\n    text-align: start;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'); \n@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=Oswald:wght@200;300;400;500;600;700&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\n/* *{\n    box-sizing: border-box;\n} */\nbody {\n    padding: 0px;\n    margin: 0px;\n    position: relative;\n    font-size: 14px;\n    \n    /* height: 100vh; */\n    \n}\n\ndiv {\n    /* border-top: 2px solid white; */\n    padding: 4px;\n\n}\n#content {\n    margin: 0px;\n    width: 100vw;\n    /* height: 100vh; */\n    display: flex;\n    flex-direction: column;\n    background-color: rgb(63, 135, 152);\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    align-items: center;\n    position: relative;\n}\n\n#container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 4px;\n    padding: 20px;\n    margin: 20px 0;\n    width: 480px;\n    height: 100vh;  \n}\n\n#header{\n    display: flex;\n    width: 100%;\n    height: 100px;\n}\n\n#deckDock{\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 200px;\n}\n\n#deckArea{\n    display: flex;\n    flex-direction: row;\n    gap: 7px;\n}\n\n#cardDock{\n    padding: 4px;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n}\n\n#logo, .title{\n    width: 100px;\n    font-size: 32px;\n    font-weight: 600;\n    font-family: 'Raleway', sans-serif;\n    color: white;\n    border: none;\n}\n\n.title{\n    width: auto;\n    font-size: 24px;\n}\n\n\n#cardArea{\n    display: grid;\n    grid-template-columns: 60px 1fr 60px;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    border: none;\n}\n\n.deck, .blankDeck{\n    /* pointer-events: none; */\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: repeat(5, 1fr);\n    width: 60px;\n    height: 90px;\n    border-radius: 4px;\n    background-color: white;\n    /* box-shadow: rgba(0, 0, 0, 0.16) 0 7px 9px -7px;\n    box-shadow: rgba(53, 82, 94, 0.3) 1px 7px 7px 1px; */\n    justify-items: center;\n    justify-content: space-between;\n    align-items: center;\n    /* padding: 0px; */\n}\n\n.blankDeck{\n    background-color:  rgb(46, 99, 111);\n    \n}\n\n.menu{\n    border: none;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: left;\n    gap: 4px;\n}\n\n#deckTitle, #cardTitle, #cardDate, #cardSteps{\n    margin-top: 8px;\n    font-family: 'Raleway', sans-serif;\n    color: rgb(63, 135, 152);\n    font-weight: 600;\n    text-transform: uppercase;\n    text-align: center;\n    text-justify: center;\n}\n\n#deckTitle{\n    margin: 0px;\n    grid-column: 1/4;\n    grid-row: 1/5;\n    /* background-color: aqua; */\n    /* width: 100%;\n    height: 100%; */\n    cursor: pointer;\n    /* opacity: 50%; */\n}\n\n.selectedDeck {\n    box-shadow: rgb(102, 220, 241) 0 0 3px 2px;\n    /* box-shadow: rgba(53, 82, 94, 0.3) 1px 9px 9px 1px; */\n}\n\n#addCardButton, #addDeckButton{\n    font-size: 48px;\n    cursor: pointer;\n}\n\n#addCardButton:hover, #addDeckButton:hover, .nextButton:hover{\n    /* text-shadow:  0 0 3px 2px, rgb(102, 173, 241); */\n    text-shadow: -1px 1px 2px rgb(102, 220, 241),\n\t\t\t\t  1px 1px 2px rgb(102, 220, 241),\n\t\t\t\t  1px -1px 0 rgb(102, 220, 241),\n\t\t\t\t  -1px -1px 0 rgb(102, 220, 241);\n    \n}\n.nextButton{\n    justify-self: right;\n    color: white;\n    color: rgb(80, 163, 182);\n    font-family: 'Raleway', sans-serif;\n    font-size: 72px;\n    border: none;\n    cursor: pointer;\n}\n\n#forwardButton{\n    justify-self: left;\n    grid-column: 3/4;\n}\n\n#backwardButton{\n    justify-self: right;\n    grid-column: 1/2;\n    grid-row: 1/2;\n}\n\n\n.cardBig{\n    grid-column: 2/3;\n    grid-row: 1/2;\n    justify-self: center;\n    display: flex;\n    width: 240px;\n    height: 360px;\n    border-radius: 16px;\n    background-color: white;\n    box-shadow: rgba(53, 82, 94, 0.3) 1px 9px 9px 1px;\n    justify-content: center;\n    align-items: center;\n    z-index: 1;\n\n}\n\n#topCard{\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: repeat(8, 1fr);\n\n    /* flex-direction: column; */\n}\n\n.bigPlus, .littlePlus{\n    grid-column: 1/5;\n    grid-row: 4/6;\n    cursor: pointer;\n    font-size: 72px;\n    color: rgb(63, 135, 152);\n    font-family: 'Raleway', sans-serif;\n    font-weight: 600;\n    align-self: center;\n    justify-self: center;\n    \n}\n\n.littlePlus{\n    grid-row: 3/4;\n}\n\n.stack0{\n    background-color: white;\n    position: absolute;\n    top: 6px;\n    left: 63px;\n    /* z-index: -1; */\n    transform: rotate(2deg);\n}\n\n.stack1{\n    position: absolute;\n    top: 3px;\n    left: 58px;\n    /* z-index: -2; */\n    transform: rotate(1deg);\n}\n\n.stack2{\n    position: absolute;\n    top: 4px;\n    left: 120px;\n    /* z-index: -3; */\n    transform: rotate(6deg);\n}\n\n.editSize{\n    /* position: absolute;\n    top: 180px; */\n    width: 300px;\n    height: 450px;\n    z-index: 3;\n}\n\n.overLayHolder{\n    position: absolute;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100vw;\n    height: 100vh; \n    \n}\n\n.overlay{\n    display: grid;\n    position: absolute;\n    background-color: rgb(37, 107, 107);\n    opacity: 60%;\n    height: 100vh;\n    width: 100vw;\n    z-index: 2;\n    padding: 20px; \n}\n\n.formDiv{\n    display: flex;\n    flex-direction: column;\n    padding-top: 100px;\n    gap: 20px;\n    width: 300px;\n    height: 600px;\n    z-index: 3;\n}\n\n.submitButtonsDiv{\n    display: flex;\n    flex-direction: row;\n    gap: 16px;\n    height: 44px;\n}\n\n.cardForm{\n    display: grid;\n    gap: 16px;\n    width:300px;\n    height: 410px;\n    grid-template-columns: 1fr 1.5fr 1.5fr 1fr;\n    grid-template-rows: repeat(7, 1fr);\n    padding: 20px;\n}\n\n.input, .check{\n    padding: 8px;\n    grid-column: 1/5;\n    border: none;\n    outline: none;\n    border-radius: 16px;\n    background-color: rgb(242, 242, 242);\n    color: rgb(80, 163, 182);\n    font-family: 'Raleway', sans-serif;\n    font-size: 18px;\n    text-align: center;\n}\n\n.input:hover{\n    box-shadow: rgb(102, 173, 241) 0 0 3px 2px;\n    box-shadow: rgb(102, 220, 241) 0 0 3px 2px;\n}\n\n#step{\n    grid-column: 2/5;\n    background-color: white;\n    font-size: 15px;\n    display: flex;\n    align-items: flex-start;\n    text-align: left;\n    text-justify: left;\n}\n\n#stepHolder{\n    grid-column: 1/5;\n    grid-row: 3/6;\n    /* background-color: aquamarine; */\n    display: flex;\n    flex-direction: column;\n}\n\n#preStep{\n    grid-column: 1/2;\n    grid-row: 3/4;\n    background-color: white;\n    font-size: 24px;\n    font-weight: 600;\n}\n\n\n.stepDiv{\n    /* background-color: aqua; */\n}\n\n\n#step:hover, #preStep:hover{\n    box-shadow: none;\n}\n\n.cardTitle{\n   grid-row: 1/2;\n   grid-column: 1/5;\n   text-align: center;\n}\n\n#cardSteps{\n    grid-column: 2/4;\n    grid-row: 2/7;\n}\n\n#cardDate{\n    grid-row: 7/8;\n    grid-column: 1/5;\n    text-align: center;\n}\n\n#cardDelete{\n    margin-left: 12px;\n    grid-column: 1/2;\n    grid-row: 8/9;\n    font-size: 16px;\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    background-color: rgb(80, 163, 182);\n    color: white;\n    text-align: center;\n    text-justify: center;\n    cursor: pointer;\n}\n\n#deckDelete{\n    grid-column: 1/2;\n    grid-row: 5/6;\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    background-color: rgb(80, 163, 182);\n    color: white;\n    font-family: 'Raleway', sans-serif;\n    font-size: 9px;\n    font-weight: 600;\n    text-align: center;\n    text-justify: center; \n    align-self: flex-start;\n    cursor: pointer;\n}\n\n.check{\n    background-color: white;\n    width: 50px;\n    z-index: 3;\n    text-align: center;\n    vertical-align: center;\n}\n\n.grow { \n    cursor: pointer;\n    transition: all .1s ease-in-out; \n    }\n    \n.grow:hover { \n    transform: scale(1.05); \n    }\n\n.check:hover{\n    font-size: 24px;\n}\n\n[contenteditable] {\n    /* outline: 0px solid transparent; */\n  }\n\nli {\n    text-align: start;\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _GUICards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GUICards */ "./src/GUICards.js");
/* harmony import */ var _GUINewDeck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GUINewDeck */ "./src/GUINewDeck.js");
/* harmony import */ var _GUINewCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GUINewCard */ "./src/GUINewCard.js");





//DRAW page, deck area, card area, default decks and default top card

let isInitialLoad = 0;

const drawGUIInitial = (aDeckArray, aCurrentDeck, cardViewValue, currentCard) => {
    (0,_GUILayout__WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_GUIDecks__WEBPACK_IMPORTED_MODULE_1__.drawDecks)(aDeckArray);
    console.log(`current card passed in is ${currentCard.cardName}`);
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

/***/ "./src/GUICards.js":
/*!*************************!*\
  !*** ./src/GUICards.js ***!
  \*************************/
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
    cardDateDiv.textContent = currentCard.cardDate;
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

/***/ "./src/GUINewCard.js":
/*!***************************!*\
  !*** ./src/GUINewCard.js ***!
  \***************************/
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

/***/ "./src/GUINewDeck.js":
/*!***************************!*\
  !*** ./src/GUINewDeck.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GUINewCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GUINewCard */ "./src/GUINewCard.js");



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
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card */ "./src/card.js");
/* harmony import */ var _GUINewCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GUINewCard */ "./src/GUINewCard.js");
/* harmony import */ var _GUICards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GUICards */ "./src/GUICards.js");








let currentDeck = _controlls__WEBPACK_IMPORTED_MODULE_0__.defaultDeck;
let currentCard;
let currentDeckDiv;
let formValue = 0;
let cardViewValue = 0;

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
    const aCard = _controlls__WEBPACK_IMPORTED_MODULE_0__.getCard(thisCardName);
    return aCard;
}
const updateCurrentCard = () => {
    currentCard = getBookmarkedCard(currentDeck);
    //console.log(`current card has been updated to ${currentCard.cardName}`);
}

updateCurrentCard();
(0,_GUI__WEBPACK_IMPORTED_MODULE_2__["default"])(_controlls__WEBPACK_IMPORTED_MODULE_0__.deckArray, currentDeck, cardViewValue, currentCard);

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
    currentDeck = _controlls__WEBPACK_IMPORTED_MODULE_0__.getDeck(nameOfDeck);
    refresh();

}

const addDeck = () => {
    formValue = 1;
    refresh();
}

const saveDeck = () => {
        const titleText = document.getElementById('deck-title').value;
        _controlls__WEBPACK_IMPORTED_MODULE_0__.createDeck(titleText);
        clearForm();
        refresh();  
}

const saveDeckOnEnter = (e) => {
    if(e.keyCode === 13){
        const titleText = document.getElementById('deck-title').value;
        _controlls__WEBPACK_IMPORTED_MODULE_0__.createDeck(titleText);
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
    const currentDeckIndex = _controlls__WEBPACK_IMPORTED_MODULE_0__.deckArray.indexOf(currentDeck);
    console.log(`the index of the currenDeck is ${currentDeckIndex}`)
    _controlls__WEBPACK_IMPORTED_MODULE_0__.deleteDeck(deckTitle);
    if(currentDeck.deckName === deckTitle){
        console.log(`the deck deleted was the current deck.`)
        if(_controlls__WEBPACK_IMPORTED_MODULE_0__.deckArray.length < 2){
            currentDeck = _controlls__WEBPACK_IMPORTED_MODULE_0__.all;
        }
        else {
            currentDeck = _controlls__WEBPACK_IMPORTED_MODULE_0__.deckArray[currentDeckIndex - 1];
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
    const theCard = _controlls__WEBPACK_IMPORTED_MODULE_0__.getCard(currentDeck.cardsArray[currentDeck.bookmark]);
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
        const theCard = _controlls__WEBPACK_IMPORTED_MODULE_0__.getCard(currentDeck.cardsArray[currentDeck.bookmark]);
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
            const newStepDiv = (0,_GUICards__WEBPACK_IMPORTED_MODULE_5__.drawCardStep)();
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
    const thisCard = _controlls__WEBPACK_IMPORTED_MODULE_0__.getCard(thisCardName);
    console.log(`the card returned was ${thisCard.cardName}`);
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
    const thisCard = _controlls__WEBPACK_IMPORTED_MODULE_0__.getCard(thisCardName);
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
        currentDeck = _controlls__WEBPACK_IMPORTED_MODULE_0__.getDeck(theDeckName);
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
    (0,_GUI__WEBPACK_IMPORTED_MODULE_2__["default"])(_controlls__WEBPACK_IMPORTED_MODULE_0__.deckArray, currentDeck, formValue, cardViewValue, currentCard);
    setListeners()
}

refresh();

// const eraseTopCard = () => {
//     const oldCard = document.getElementById('topCard');
//     oldCard.remove();
//     drawTopCard();
// }

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRLFFBQVEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsUUFBUSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksY0FBYyxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsY0FBYyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxLQUFLLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksUUFBUSxLQUFLLFlBQVksUUFBUSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxL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O0FBQ0E7QUFDQTs7QUFFQSxrREFBa0QsZUFBZTs7QUFFakU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDckhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBLGlFQUFlLE1BQU0sRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RWY7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsK0NBQStDLFlBQVk7QUFDM0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0RBQUcsQ0FBQyxpREFBUztBQUNqQjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtdG8tZG8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvcC10by1kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvcC10by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b3AtdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvcC10by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b3AtdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLy4vc3JjL0dVSS5qcyIsIndlYnBhY2s6Ly90b3AtdG8tZG8vLi9zcmMvR1VJQ2FyZHMuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLy4vc3JjL0dVSURlY2tzLmpzIiwid2VicGFjazovL3RvcC10by1kby8uL3NyYy9HVUlMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLy4vc3JjL0dVSU5ld0NhcmQuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLy4vc3JjL0dVSU5ld0RlY2suanMiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLy4vc3JjL2NhcmQuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLy4vc3JjL2NvbnRyb2xscy5qcyIsIndlYnBhY2s6Ly90b3AtdG8tZG8vLi9zcmMvZGVjay5qcyIsIndlYnBhY2s6Ly90b3AtdG8tZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SYWxld2F5Oml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Pc3dhbGQ6d2dodEAyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMCZmYW1pbHk9UmFsZXdheTppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q291cmllcitQcmltZTppdGFsLHdnaHRAMCw0MDA7MCw3MDA7MSw0MDA7MSw3MDAmZmFtaWx5PU9zd2FsZDp3Z2h0QDIwMDszMDA7NDAwOzUwMDs2MDA7NzAwJmZhbWlseT1SYWxld2F5Oml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiAqe1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn0gKi9cXG5ib2R5IHtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIFxcbiAgICAvKiBoZWlnaHQ6IDEwMHZoOyAqL1xcbiAgICBcXG59XFxuXFxuZGl2IHtcXG4gICAgLyogYm9yZGVyLXRvcDogMnB4IHNvbGlkIHdoaXRlOyAqL1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuXFxufVxcbiNjb250ZW50IHtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgLyogaGVpZ2h0OiAxMDB2aDsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYzLCAxMzUsIDE1Mik7XFxuICAgIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA0cHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIG1hcmdpbjogMjBweCAwO1xcbiAgICB3aWR0aDogNDgwcHg7XFxuICAgIGhlaWdodDogMTAwdmg7ICBcXG59XFxuXFxuI2hlYWRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwcHg7XFxufVxcblxcbiNkZWNrRG9ja3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMjAwcHg7XFxufVxcblxcbiNkZWNrQXJlYXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZ2FwOiA3cHg7XFxufVxcblxcbiNjYXJkRG9ja3tcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4jbG9nbywgLnRpdGxle1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi50aXRsZXtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuXFxuI2NhcmRBcmVhe1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDYwcHggMWZyIDYwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmRlY2ssIC5ibGFua0RlY2t7XFxuICAgIC8qIHBvaW50ZXItZXZlbnRzOiBub25lOyAqL1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCAxZnIpO1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgaGVpZ2h0OiA5MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAvKiBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDAgN3B4IDlweCAtN3B4O1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDUzLCA4MiwgOTQsIDAuMykgMXB4IDdweCA3cHggMXB4OyAqL1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLyogcGFkZGluZzogMHB4OyAqL1xcbn1cXG5cXG4uYmxhbmtEZWNre1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiKDQ2LCA5OSwgMTExKTtcXG4gICAgXFxufVxcblxcbi5tZW51e1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcXG4gICAgZ2FwOiA0cHg7XFxufVxcblxcbiNkZWNrVGl0bGUsICNjYXJkVGl0bGUsICNjYXJkRGF0ZSwgI2NhcmRTdGVwc3tcXG4gICAgbWFyZ2luLXRvcDogOHB4O1xcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogcmdiKDYzLCAxMzUsIDE1Mik7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC1qdXN0aWZ5OiBjZW50ZXI7XFxufVxcblxcbiNkZWNrVGl0bGV7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBncmlkLWNvbHVtbjogMS80O1xcbiAgICBncmlkLXJvdzogMS81O1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhOyAqL1xcbiAgICAvKiB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlOyAqL1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIC8qIG9wYWNpdHk6IDUwJTsgKi9cXG59XFxuXFxuLnNlbGVjdGVkRGVjayB7XFxuICAgIGJveC1zaGFkb3c6IHJnYigxMDIsIDIyMCwgMjQxKSAwIDAgM3B4IDJweDtcXG4gICAgLyogYm94LXNoYWRvdzogcmdiYSg1MywgODIsIDk0LCAwLjMpIDFweCA5cHggOXB4IDFweDsgKi9cXG59XFxuXFxuI2FkZENhcmRCdXR0b24sICNhZGREZWNrQnV0dG9ue1xcbiAgICBmb250LXNpemU6IDQ4cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2FkZENhcmRCdXR0b246aG92ZXIsICNhZGREZWNrQnV0dG9uOmhvdmVyLCAubmV4dEJ1dHRvbjpob3ZlcntcXG4gICAgLyogdGV4dC1zaGFkb3c6ICAwIDAgM3B4IDJweCwgcmdiKDEwMiwgMTczLCAyNDEpOyAqL1xcbiAgICB0ZXh0LXNoYWRvdzogLTFweCAxcHggMnB4IHJnYigxMDIsIDIyMCwgMjQxKSxcXG5cXHRcXHRcXHRcXHQgIDFweCAxcHggMnB4IHJnYigxMDIsIDIyMCwgMjQxKSxcXG5cXHRcXHRcXHRcXHQgIDFweCAtMXB4IDAgcmdiKDEwMiwgMjIwLCAyNDEpLFxcblxcdFxcdFxcdFxcdCAgLTFweCAtMXB4IDAgcmdiKDEwMiwgMjIwLCAyNDEpO1xcbiAgICBcXG59XFxuLm5leHRCdXR0b257XFxuICAgIGp1c3RpZnktc2VsZjogcmlnaHQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IHJnYig4MCwgMTYzLCAxODIpO1xcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDcycHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jZm9yd2FyZEJ1dHRvbntcXG4gICAganVzdGlmeS1zZWxmOiBsZWZ0O1xcbiAgICBncmlkLWNvbHVtbjogMy80O1xcbn1cXG5cXG4jYmFja3dhcmRCdXR0b257XFxuICAgIGp1c3RpZnktc2VsZjogcmlnaHQ7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxufVxcblxcblxcbi5jYXJkQmlne1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDI0MHB4O1xcbiAgICBoZWlnaHQ6IDM2MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSg1MywgODIsIDk0LCAwLjMpIDFweCA5cHggOXB4IDFweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHotaW5kZXg6IDE7XFxuXFxufVxcblxcbiN0b3BDYXJke1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg4LCAxZnIpO1xcblxcbiAgICAvKiBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAqL1xcbn1cXG5cXG4uYmlnUGx1cywgLmxpdHRsZVBsdXN7XFxuICAgIGdyaWQtY29sdW1uOiAxLzU7XFxuICAgIGdyaWQtcm93OiA0LzY7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiA3MnB4O1xcbiAgICBjb2xvcjogcmdiKDYzLCAxMzUsIDE1Mik7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIFxcbn1cXG5cXG4ubGl0dGxlUGx1c3tcXG4gICAgZ3JpZC1yb3c6IDMvNDtcXG59XFxuXFxuLnN0YWNrMHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA2cHg7XFxuICAgIGxlZnQ6IDYzcHg7XFxuICAgIC8qIHotaW5kZXg6IC0xOyAqL1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyZGVnKTtcXG59XFxuXFxuLnN0YWNrMXtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDNweDtcXG4gICAgbGVmdDogNThweDtcXG4gICAgLyogei1pbmRleDogLTI7ICovXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDFkZWcpO1xcbn1cXG5cXG4uc3RhY2sye1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNHB4O1xcbiAgICBsZWZ0OiAxMjBweDtcXG4gICAgLyogei1pbmRleDogLTM7ICovXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDZkZWcpO1xcbn1cXG5cXG4uZWRpdFNpemV7XFxuICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxODBweDsgKi9cXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDQ1MHB4O1xcbiAgICB6LWluZGV4OiAzO1xcbn1cXG5cXG4ub3ZlckxheUhvbGRlcntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoOyBcXG4gICAgXFxufVxcblxcbi5vdmVybGF5e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNywgMTA3LCAxMDcpO1xcbiAgICBvcGFjaXR5OiA2MCU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgei1pbmRleDogMjtcXG4gICAgcGFkZGluZzogMjBweDsgXFxufVxcblxcbi5mb3JtRGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XFxuICAgIGdhcDogMjBweDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDYwMHB4O1xcbiAgICB6LWluZGV4OiAzO1xcbn1cXG5cXG4uc3VibWl0QnV0dG9uc0RpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZ2FwOiAxNnB4O1xcbiAgICBoZWlnaHQ6IDQ0cHg7XFxufVxcblxcbi5jYXJkRm9ybXtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxNnB4O1xcbiAgICB3aWR0aDozMDBweDtcXG4gICAgaGVpZ2h0OiA0MTBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMS41ZnIgMS41ZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg3LCAxZnIpO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4uaW5wdXQsIC5jaGVja3tcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBncmlkLWNvbHVtbjogMS81O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDIsIDI0MiwgMjQyKTtcXG4gICAgY29sb3I6IHJnYig4MCwgMTYzLCAxODIpO1xcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmlucHV0OmhvdmVye1xcbiAgICBib3gtc2hhZG93OiByZ2IoMTAyLCAxNzMsIDI0MSkgMCAwIDNweCAycHg7XFxuICAgIGJveC1zaGFkb3c6IHJnYigxMDIsIDIyMCwgMjQxKSAwIDAgM3B4IDJweDtcXG59XFxuXFxuI3N0ZXB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICB0ZXh0LWp1c3RpZnk6IGxlZnQ7XFxufVxcblxcbiNzdGVwSG9sZGVye1xcbiAgICBncmlkLWNvbHVtbjogMS81O1xcbiAgICBncmlkLXJvdzogMy82O1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jcHJlU3RlcHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDMvNDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuXFxuLnN0ZXBEaXZ7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGFxdWE7ICovXFxufVxcblxcblxcbiNzdGVwOmhvdmVyLCAjcHJlU3RlcDpob3ZlcntcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLmNhcmRUaXRsZXtcXG4gICBncmlkLXJvdzogMS8yO1xcbiAgIGdyaWQtY29sdW1uOiAxLzU7XFxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jY2FyZFN0ZXBze1xcbiAgICBncmlkLWNvbHVtbjogMi80O1xcbiAgICBncmlkLXJvdzogMi83O1xcbn1cXG5cXG4jY2FyZERhdGV7XFxuICAgIGdyaWQtcm93OiA3Lzg7XFxuICAgIGdyaWQtY29sdW1uOiAxLzU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2NhcmREZWxldGV7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogOC85O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgwLCAxNjMsIDE4Mik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LWp1c3RpZnk6IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jZGVja0RlbGV0ZXtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDUvNjtcXG4gICAgd2lkdGg6IDhweDtcXG4gICAgaGVpZ2h0OiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgwLCAxNjMsIDE4Mik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiA5cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC1qdXN0aWZ5OiBjZW50ZXI7IFxcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jaGVja3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICB6LWluZGV4OiAzO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5ncm93IHsgXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4xcyBlYXNlLWluLW91dDsgXFxuICAgIH1cXG4gICAgXFxuLmdyb3c6aG92ZXIgeyBcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTsgXFxuICAgIH1cXG5cXG4uY2hlY2s6aG92ZXJ7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuW2NvbnRlbnRlZGl0YWJsZV0ge1xcbiAgICAvKiBvdXRsaW5lOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7ICovXFxuICB9XFxuXFxubGkge1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTs7R0FFRztBQUNIO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZUFBZTs7SUFFZixtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLFlBQVk7O0FBRWhCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1DQUFtQztJQUNuQyx3RUFBd0U7SUFDeEUsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUixhQUFhO0lBQ2IsY0FBYztJQUNkLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFB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LGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUNBQW1DO0lBQ25DLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG1DQUFtQztJQUNuQyxZQUFZO0lBQ1osa0NBQWtDO0lBQ2xDLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsK0JBQStCO0lBQy9COztBQUVKO0lBQ0ksc0JBQXNCO0lBQ3RCOztBQUVKO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG9DQUFvQztFQUN0Qzs7QUFFRjtJQUNJLGlCQUFpQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SYWxld2F5Oml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXAnKTsgXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3N3YWxkOndnaHRAMjAwOzMwMDs0MDA7NTAwOzYwMDs3MDAmZmFtaWx5PVJhbGV3YXk6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCcpO1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNvdXJpZXIrUHJpbWU6aXRhbCx3Z2h0QDAsNDAwOzAsNzAwOzEsNDAwOzEsNzAwJmZhbWlseT1Pc3dhbGQ6d2dodEAyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMCZmYW1pbHk9UmFsZXdheTppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZGlzcGxheT1zd2FwJyk7XFxuLyogKntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59ICovXFxuYm9keSB7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBcXG4gICAgLyogaGVpZ2h0OiAxMDB2aDsgKi9cXG4gICAgXFxufVxcblxcbmRpdiB7XFxuICAgIC8qIGJvcmRlci10b3A6IDJweCBzb2xpZCB3aGl0ZTsgKi9cXG4gICAgcGFkZGluZzogNHB4O1xcblxcbn1cXG4jY29udGVudCB7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIC8qIGhlaWdodDogMTAwdmg7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2MywgMTM1LCAxNTIpO1xcbiAgICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBtYXJnaW46IDIwcHggMDtcXG4gICAgd2lkdGg6IDQ4MHB4O1xcbiAgICBoZWlnaHQ6IDEwMHZoOyAgXFxufVxcblxcbiNoZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4jZGVja0RvY2t7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbn1cXG5cXG4jZGVja0FyZWF7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogN3B4O1xcbn1cXG5cXG4jY2FyZERvY2t7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuI2xvZ28sIC50aXRsZXtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4udGl0bGV7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcblxcbiNjYXJkQXJlYXtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2MHB4IDFmciA2MHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5kZWNrLCAuYmxhbmtEZWNre1xcbiAgICAvKiBwb2ludGVyLWV2ZW50czogbm9uZTsgKi9cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgMWZyKTtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGhlaWdodDogOTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgLyogYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwIDdweCA5cHggLTdweDtcXG4gICAgYm94LXNoYWRvdzogcmdiYSg1MywgODIsIDk0LCAwLjMpIDFweCA3cHggN3B4IDFweDsgKi9cXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC8qIHBhZGRpbmc6IDBweDsgKi9cXG59XFxuXFxuLmJsYW5rRGVja3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIHJnYig0NiwgOTksIDExMSk7XFxuICAgIFxcbn1cXG5cXG4ubWVudXtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxuICAgIGdhcDogNHB4O1xcbn1cXG5cXG4jZGVja1RpdGxlLCAjY2FyZFRpdGxlLCAjY2FyZERhdGUsICNjYXJkU3RlcHN7XFxuICAgIG1hcmdpbi10b3A6IDhweDtcXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHJnYig2MywgMTM1LCAxNTIpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtanVzdGlmeTogY2VudGVyO1xcbn1cXG5cXG4jZGVja1RpdGxle1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvNDtcXG4gICAgZ3JpZC1yb3c6IDEvNTtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYXF1YTsgKi9cXG4gICAgLyogd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTsgKi9cXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAvKiBvcGFjaXR5OiA1MCU7ICovXFxufVxcblxcbi5zZWxlY3RlZERlY2sge1xcbiAgICBib3gtc2hhZG93OiByZ2IoMTAyLCAyMjAsIDI0MSkgMCAwIDNweCAycHg7XFxuICAgIC8qIGJveC1zaGFkb3c6IHJnYmEoNTMsIDgyLCA5NCwgMC4zKSAxcHggOXB4IDlweCAxcHg7ICovXFxufVxcblxcbiNhZGRDYXJkQnV0dG9uLCAjYWRkRGVja0J1dHRvbntcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNhZGRDYXJkQnV0dG9uOmhvdmVyLCAjYWRkRGVja0J1dHRvbjpob3ZlciwgLm5leHRCdXR0b246aG92ZXJ7XFxuICAgIC8qIHRleHQtc2hhZG93OiAgMCAwIDNweCAycHgsIHJnYigxMDIsIDE3MywgMjQxKTsgKi9cXG4gICAgdGV4dC1zaGFkb3c6IC0xcHggMXB4IDJweCByZ2IoMTAyLCAyMjAsIDI0MSksXFxuXFx0XFx0XFx0XFx0ICAxcHggMXB4IDJweCByZ2IoMTAyLCAyMjAsIDI0MSksXFxuXFx0XFx0XFx0XFx0ICAxcHggLTFweCAwIHJnYigxMDIsIDIyMCwgMjQxKSxcXG5cXHRcXHRcXHRcXHQgIC0xcHggLTFweCAwIHJnYigxMDIsIDIyMCwgMjQxKTtcXG4gICAgXFxufVxcbi5uZXh0QnV0dG9ue1xcbiAgICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiByZ2IoODAsIDE2MywgMTgyKTtcXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiA3MnB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2ZvcndhcmRCdXR0b257XFxuICAgIGp1c3RpZnktc2VsZjogbGVmdDtcXG4gICAgZ3JpZC1jb2x1bW46IDMvNDtcXG59XFxuXFxuI2JhY2t3YXJkQnV0dG9ue1xcbiAgICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogMS8yO1xcbn1cXG5cXG5cXG4uY2FyZEJpZ3tcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAyNDBweDtcXG4gICAgaGVpZ2h0OiAzNjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoNTMsIDgyLCA5NCwgMC4zKSAxcHggOXB4IDlweCAxcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB6LWluZGV4OiAxO1xcblxcbn1cXG5cXG4jdG9wQ2FyZHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoOCwgMWZyKTtcXG5cXG4gICAgLyogZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgKi9cXG59XFxuXFxuLmJpZ1BsdXMsIC5saXR0bGVQbHVze1xcbiAgICBncmlkLWNvbHVtbjogMS81O1xcbiAgICBncmlkLXJvdzogNC82O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogNzJweDtcXG4gICAgY29sb3I6IHJnYig2MywgMTM1LCAxNTIpO1xcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBcXG59XFxuXFxuLmxpdHRsZVBsdXN7XFxuICAgIGdyaWQtcm93OiAzLzQ7XFxufVxcblxcbi5zdGFjazB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNnB4O1xcbiAgICBsZWZ0OiA2M3B4O1xcbiAgICAvKiB6LWluZGV4OiAtMTsgKi9cXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMmRlZyk7XFxufVxcblxcbi5zdGFjazF7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAzcHg7XFxuICAgIGxlZnQ6IDU4cHg7XFxuICAgIC8qIHotaW5kZXg6IC0yOyAqL1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxZGVnKTtcXG59XFxuXFxuLnN0YWNrMntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDRweDtcXG4gICAgbGVmdDogMTIwcHg7XFxuICAgIC8qIHotaW5kZXg6IC0zOyAqL1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg2ZGVnKTtcXG59XFxuXFxuLmVkaXRTaXple1xcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTgwcHg7ICovXFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiA0NTBweDtcXG4gICAgei1pbmRleDogMztcXG59XFxuXFxuLm92ZXJMYXlIb2xkZXJ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDsgXFxuICAgIFxcbn1cXG5cXG4ub3ZlcmxheXtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzcsIDEwNywgMTA3KTtcXG4gICAgb3BhY2l0eTogNjAlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIHBhZGRpbmc6IDIwcHg7IFxcbn1cXG5cXG4uZm9ybURpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiA2MDBweDtcXG4gICAgei1pbmRleDogMztcXG59XFxuXFxuLnN1Ym1pdEJ1dHRvbnNEaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogMTZweDtcXG4gICAgaGVpZ2h0OiA0NHB4O1xcbn1cXG5cXG4uY2FyZEZvcm17XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMTZweDtcXG4gICAgd2lkdGg6MzAwcHg7XFxuICAgIGhlaWdodDogNDEwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEuNWZyIDEuNWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNywgMWZyKTtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLmlucHV0LCAuY2hlY2t7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvNTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQyLCAyNDIsIDI0Mik7XFxuICAgIGNvbG9yOiByZ2IoODAsIDE2MywgMTgyKTtcXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5pbnB1dDpob3ZlcntcXG4gICAgYm94LXNoYWRvdzogcmdiKDEwMiwgMTczLCAyNDEpIDAgMCAzcHggMnB4O1xcbiAgICBib3gtc2hhZG93OiByZ2IoMTAyLCAyMjAsIDI0MSkgMCAwIDNweCAycHg7XFxufVxcblxcbiNzdGVwe1xcbiAgICBncmlkLWNvbHVtbjogMi81O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgdGV4dC1qdXN0aWZ5OiBsZWZ0O1xcbn1cXG5cXG4jc3RlcEhvbGRlcntcXG4gICAgZ3JpZC1jb2x1bW46IDEvNTtcXG4gICAgZ3JpZC1yb3c6IDMvNjtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI3ByZVN0ZXB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiAzLzQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcblxcbi5zdGVwRGl2e1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhOyAqL1xcbn1cXG5cXG5cXG4jc3RlcDpob3ZlciwgI3ByZVN0ZXA6aG92ZXJ7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi5jYXJkVGl0bGV7XFxuICAgZ3JpZC1yb3c6IDEvMjtcXG4gICBncmlkLWNvbHVtbjogMS81O1xcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2NhcmRTdGVwc3tcXG4gICAgZ3JpZC1jb2x1bW46IDIvNDtcXG4gICAgZ3JpZC1yb3c6IDIvNztcXG59XFxuXFxuI2NhcmREYXRle1xcbiAgICBncmlkLXJvdzogNy84O1xcbiAgICBncmlkLWNvbHVtbjogMS81O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNjYXJkRGVsZXRle1xcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDgvOTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4MCwgMTYzLCAxODIpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC1qdXN0aWZ5OiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2RlY2tEZWxldGV7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiA1LzY7XFxuICAgIHdpZHRoOiA4cHg7XFxuICAgIGhlaWdodDogOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4MCwgMTYzLCAxODIpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogOXB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtanVzdGlmeTogY2VudGVyOyBcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2hlY2t7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgei1pbmRleDogMztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZ3JvdyB7IFxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuMXMgZWFzZS1pbi1vdXQ7IFxcbiAgICB9XFxuICAgIFxcbi5ncm93OmhvdmVyIHsgXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7IFxcbiAgICB9XFxuXFxuLmNoZWNrOmhvdmVye1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbltjb250ZW50ZWRpdGFibGVdIHtcXG4gICAgLyogb3V0bGluZTogMHB4IHNvbGlkIHRyYW5zcGFyZW50OyAqL1xcbiAgfVxcblxcbmxpIHtcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBsYXlvdXQgZnJvbSBcIi4vR1VJTGF5b3V0XCI7XG5pbXBvcnQgeyBkcmF3RGVja3MsIHN0eWxlQ3VycmVudH0gZnJvbSBcIi4vR1VJRGVja3NcIjtcbmltcG9ydCBkcmF3Q2FyZHMgZnJvbSBcIi4vR1VJQ2FyZHNcIjtcbmltcG9ydCBkcmF3TmV3RGVja0Zvcm0gZnJvbSBcIi4vR1VJTmV3RGVja1wiO1xuaW1wb3J0IHtkcmF3TmV3Q2FyZEZvcm19IGZyb20gXCIuL0dVSU5ld0NhcmRcIjtcbi8vRFJBVyBwYWdlLCBkZWNrIGFyZWEsIGNhcmQgYXJlYSwgZGVmYXVsdCBkZWNrcyBhbmQgZGVmYXVsdCB0b3AgY2FyZFxuXG5sZXQgaXNJbml0aWFsTG9hZCA9IDA7XG5cbmNvbnN0IGRyYXdHVUlJbml0aWFsID0gKGFEZWNrQXJyYXksIGFDdXJyZW50RGVjaywgY2FyZFZpZXdWYWx1ZSwgY3VycmVudENhcmQpID0+IHtcbiAgICBsYXlvdXQoKTtcbiAgICBkcmF3RGVja3MoYURlY2tBcnJheSk7XG4gICAgY29uc29sZS5sb2coYGN1cnJlbnQgY2FyZCBwYXNzZWQgaW4gaXMgJHtjdXJyZW50Q2FyZC5jYXJkTmFtZX1gKTtcbiAgICBkcmF3Q2FyZHMoYUN1cnJlbnREZWNrLCBjYXJkVmlld1ZhbHVlLCBjdXJyZW50Q2FyZCk7XG4gICAgXG59XG5cbmNvbnN0IGRyYXdHVUkgPSAoYURlY2tBcnJheSwgYUN1cnJlbnREZWNrLCBmb3JtVmFsdWUsIGNhcmRWaWV3VmFsdWUsIGN1cnJlbnRDYXJkKSA9PiB7XG4gICAgZHJhd0RlY2tzKGFEZWNrQXJyYXkpO1xuICAgIGNvbnN0IGN1cnJlbnREZWNrRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdGl0bGU9XCIke2FDdXJyZW50RGVjay5kZWNrTmFtZX1cIl1gKTtcbiAgICBzdHlsZUN1cnJlbnQoY3VycmVudERlY2tEaXYpOyAgXG4gICAgZHJhd05ld0RlY2tGb3JtKGZvcm1WYWx1ZSk7ICAgXG4gICAgZHJhd0NhcmRzKGFDdXJyZW50RGVjaywgY2FyZFZpZXdWYWx1ZSwgY3VycmVudENhcmQpO1xuICAgIGRyYXdOZXdDYXJkRm9ybShhRGVja0FycmF5LCBmb3JtVmFsdWUpO1xufVxuXG5jb25zdCBsb2FkR1VJID0gKGFEZWNrQXJyYXksIGFDdXJyZW50RGVjaywgZm9ybVZhbHVlLCBjYXJkVmlld1ZhbHVlLCBjdXJyZW50Q2FyZCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGBpbml0aWFsIGxvYWQgaXMgJHtpc0luaXRpYWxMb2FkfWApO1xuICAgIGlmKGlzSW5pdGlhbExvYWQgPT09IDApe1xuICAgICAgICBjb25zb2xlLmxvZygnaXMgaW5pdGlhbCBsb2FkJyk7XG4gICAgICAgIGRyYXdHVUlJbml0aWFsKGFEZWNrQXJyYXksIGFDdXJyZW50RGVjaywgZm9ybVZhbHVlLCBjYXJkVmlld1ZhbHVlLCBjdXJyZW50Q2FyZCk7XG4gICAgICAgIGlzSW5pdGlhbExvYWQgPSAxO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgICBkcmF3R1VJKGFEZWNrQXJyYXksIGFDdXJyZW50RGVjaywgZm9ybVZhbHVlLCBjYXJkVmlld1ZhbHVlLCBjdXJyZW50Q2FyZCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkR1VJO1xuXG5cblxuXG5cblxuIiwiY29uc3QgZHJhd0ZvcndhcmRBbmRCYWNrQnV0dG9ucyA9ICgpID0+IHtcbiAgICBjb25zdCBjYXJkQXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkQXJlYScpO1xuICAgIGNvbnN0IGZvcndhcmRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3J3YXJkQnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbmV4dEJ1dHRvbicpO1xuICAgIGZvcndhcmRCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdmb3J3YXJkQnV0dG9uJyk7XG4gICAgY2FyZEFyZWEuYXBwZW5kQ2hpbGQoZm9yd2FyZEJ1dHRvbik7XG4gICAgZm9yd2FyZEJ1dHRvbi50ZXh0Q29udGVudCA9ICc+JztcbiAgICBcbiAgICBjb25zdCBiYWNrd2FyZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJhY2t3YXJkQnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbmV4dEJ1dHRvbicpO1xuICAgIGJhY2t3YXJkQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnYmFja3dhcmRCdXR0b24nKTtcbiAgICBjYXJkQXJlYS5hcHBlbmRDaGlsZChiYWNrd2FyZEJ1dHRvbik7XG4gICAgYmFja3dhcmRCdXR0b24udGV4dENvbnRlbnQgPSAnPCc7XG59XG5cbmNvbnN0IGRyYXdCYWNrZ3JvdW5kQ2FyZHMgPSAobnVtKSA9PiB7XG4gICAgY29uc3QgY2FyZEFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZEFyZWEnKTtcbiAgICBmb3IobGV0IGkgPSAwOyBpPG51bTsgaSsrICl7XG4gICAgY29uc3QgZmFrZUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmYWtlQ2FyZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmRCaWcnKTtcbiAgICBmYWtlQ2FyZC5jbGFzc0xpc3QuYWRkKGBzdGFjayR7aX1gKTtcbiAgICBjYXJkQXJlYS5hcHBlbmRDaGlsZChmYWtlQ2FyZCk7XG4gICAgfVxufVxuXG5jb25zdCBkcmF3VGl0bGVEaXYgPSAoKSA9PiB7XG4gICAgY29uc3QgY2FyZFRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyZFRpdGxlRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnY2FyZFRpdGxlJyk7XG4gICAgY2FyZFRpdGxlRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZFRpdGxlJyk7XG4gICAgY2FyZFRpdGxlRGl2LnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgJ3RydWUnKTtcbiAgICBcbiAgICByZXR1cm4gY2FyZFRpdGxlRGl2O1xufVxuY29uc3QgZHJhd1N0ZXBzRGl2ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGBkcmF3aW5nIHN0ZXAgZGl2YClcbiAgICBjb25zdCBjYXJkU3RlcHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGNhcmRTdGVwc0Rpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NhcmRTdGVwcycpO1xuICAgIHJldHVybiBjYXJkU3RlcHNEaXY7XG59XG5cbmV4cG9ydCBjb25zdCBkcmF3Q2FyZFN0ZXAgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2RyYXdpbmcgdGhlIHN0ZXAhJylcbiAgICBjb25zdCBzdGVwRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBzdGVwRGl2LnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgJ3RydWUnKTtcbiAgICBzdGVwRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc3RlcERpdicpO1xuICAgIGNvbnN0IGNhcmRTdGVwc0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkU3RlcHMnKTtcbiAgICBjYXJkU3RlcHNEaXYuYXBwZW5kQ2hpbGQoc3RlcERpdik7XG4gICAgcmV0dXJuIHN0ZXBEaXY7XG59XG5jb25zdCBkcmF3RGF0ZURpdiA9ICgpID0+IHtcbiAgICBjb25zdCBjYXJkRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmREYXRlRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnY2FyZERhdGUnKTtcbiAgICBjYXJkRGF0ZURpdi5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsICd0cnVlJyk7XG4gICAgcmV0dXJuIGNhcmREYXRlRGl2O1xufVxuY29uc3QgZHJhd0RlbGV0ZUJ1dHRvbiA9ICgpID0+IHtcbiAgICBjb25zdCBjYXJkRGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyZERlbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NhcmREZWxldGUnKTtcbiAgICBcbiAgICBjYXJkRGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2dyb3cnKTtcbiAgICBjYXJkRGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gJy0nXG4gICAgcmV0dXJuIGNhcmREZWxldGVCdXR0b247XG59XG5cbmNvbnN0IHBvcHVsYXRlU3RlcHMgPSAoY3VycmVudENhcmQpID0+IHtcbiAgICBjb25zdCB0aGVDYXJkID0gY3VycmVudENhcmQ7XG4gICAgaWYodGhlQ2FyZC5jYXJkU3RlcHMubGVuZ3RoID49IDEpe1xuICAgICAgICBjb25zb2xlLmxvZygndGhlcmUgYXJlIHN0ZXAocykhIERSQVcgU1RFUCBESVYocyknKTtcbiAgICAgICAgdGhlQ2FyZC5jYXJkU3RlcHMuZm9yRWFjaChzdGVwU3RyaW5nID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhlQ2FyZC5jYXJkU3RlcHMuaW5kZXhPZihzdGVwU3RyaW5nKTtcbiAgICAgICAgICAgIGNvbnN0IGFTdGVwID0gZHJhd0NhcmRTdGVwKCk7XG4gICAgICAgICAgICBhU3RlcC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBgJHtpbmRleH1gKTtcbiAgICAgICAgICAgIGFTdGVwLnRleHRDb250ZW50ID0gc3RlcFN0cmluZztcbiAgICAgICAgfSlcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgY29uc29sZS5sb2coJ3RoZSBhcmUgbm8gc3RlcHMhIERSQVcgZW1wdHkgU1RFUCBESVYnKTtcbiAgICAgICAgZHJhd0NhcmRTdGVwKCk7XG4gICAgfVxufVxuXG5jb25zdCBkcmF3VG9wQ2FyZCA9IChjdXJyZW50Q2FyZCkgPT4ge1xuICAgIGNvbnN0IGNhcmRBcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmRBcmVhJyk7XG4gICAgY29uc3QgY2FyZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmREaXYuc2V0QXR0cmlidXRlKCdpZCcsICd0b3BDYXJkJyk7XG4gICAgY2FyZERpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmRCaWcnKTtcbiAgICBjYXJkQXJlYS5hcHBlbmRDaGlsZChjYXJkRGl2KTtcbiAgICBjb25zdCBjYXJkVGl0bGVEaXYgPSBkcmF3VGl0bGVEaXYoKTtcbiAgICBjYXJkRGl2LmFwcGVuZENoaWxkKGNhcmRUaXRsZURpdik7XG4gICAgY2FyZFRpdGxlRGl2LnRleHRDb250ZW50ID0gY3VycmVudENhcmQuY2FyZE5hbWU7XG4gICAgY29uc3QgY2FyZFN0ZXBzRGl2ID0gZHJhd1N0ZXBzRGl2KCk7XG4gICAgY2FyZERpdi5hcHBlbmRDaGlsZChjYXJkU3RlcHNEaXYpO1xuICAgIHBvcHVsYXRlU3RlcHMoY3VycmVudENhcmQpO1xuICAgIGNvbnN0IGNhcmREYXRlRGl2ID0gZHJhd0RhdGVEaXYoKTtcbiAgICBjYXJkRGl2LmFwcGVuZENoaWxkKGNhcmREYXRlRGl2KTtcbiAgICBjYXJkRGF0ZURpdi50ZXh0Q29udGVudCA9IGN1cnJlbnRDYXJkLmNhcmREYXRlO1xuICAgIGNvbnN0IGNhcmREZWxldGVCdXR0b24gPSBkcmF3RGVsZXRlQnV0dG9uKCk7XG4gICAgY2FyZERpdi5hcHBlbmRDaGlsZChjYXJkRGVsZXRlQnV0dG9uKTtcbiAgICByZXR1cm4gY2FyZERpdjtcbn1cblxuY29uc3QgZHJhd0JsYW5rVG9wQ2FyZCA9ICgpID0+IHtcbiAgICBjb25zdCBjYXJkQXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkQXJlYScpO1xuICAgIGNvbnN0IGNhcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAndG9wQ2FyZCcpO1xuICAgIGNhcmREaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkQmlnJyk7XG4gICAgY2FyZEFyZWEuYXBwZW5kQ2hpbGQoY2FyZERpdik7XG4gICAgY29uc3QgY2FyZFBsdXMgPSBkcmF3VGl0bGVEaXYoKTtcbiAgICBjYXJkUGx1cy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NhcmRQbHVzJylcbiAgICBjb25zb2xlLmxvZygnbWFraW5nIHBsdXMgY2FyZCcpXG4gICAgY2FyZFBsdXMudGV4dENvbnRlbnQgPSAnKyc7XG4gICAgY2FyZFBsdXMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdiaWdQbHVzJyk7XG4gICAgY2FyZFBsdXMuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCBmYWxzZSk7XG4gICAgY2FyZFBsdXMuY2xhc3NMaXN0LmFkZCgnZ3JvdycpO1xuICAgIGNhcmREaXYuYXBwZW5kQ2hpbGQoY2FyZFBsdXMpO1xufVxuXG5jb25zdCBkcmF3QmxhbmtTdGFjayA9ICgpID0+IHtcbiAgICBkcmF3Rm9yd2FyZEFuZEJhY2tCdXR0b25zKCk7XG4gICAgZHJhd0JhY2tncm91bmRDYXJkcygyKTtcbiAgICBkcmF3QmxhbmtUb3BDYXJkKCk7XG59XG5cbmNvbnN0IGRyYXdDYXJkU3RhY2sgPSAoY3VycmVudENhcmQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhgZHJhd2luZyBjYXJkIHN0YWNrYCk7XG4gICAgZHJhd0ZvcndhcmRBbmRCYWNrQnV0dG9ucygpO1xuICAgIGRyYXdCYWNrZ3JvdW5kQ2FyZHMoMik7XG4gICAgZHJhd1RvcENhcmQoY3VycmVudENhcmQpOyAgIFxufVxuXG5jb25zdCBkcmF3Q2FyZHMgPSAoY3VycmVudERlY2ssICBjYXJkVmlld1ZhbHVlLCBjdXJyZW50Q2FyZCkgPT4ge1xuICAgIGlmKGNhcmRWaWV3VmFsdWUgPT09IDApIHtcbiAgICAgICAgaWYoY3VycmVudENhcmQgIT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICBkcmF3Q2FyZFN0YWNrKGN1cnJlbnRDYXJkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlKGRyYXdCbGFua1N0YWNrKCkpO1xuICAgICAgICBcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZHJhd0NhcmRzO1xuXG5cbmNvbnN0IGRyYXdBbGxDYXJkc1N0YWNrID0gKGFEZWNrKSA9PiB7XG4gICAgY29uc3QgY2FyZERvY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZERvY2snKTtcbiAgICBjb25zdCBjYXJkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyZERpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NhcmRCaWcnKTtcbiAgICBjYXJkRG9jay5hcHBlbmRDaGlsZChjYXJkRGl2KTtcbiAgICBjb25zb2xlLmxvZyhhRGVjay5jYXJkc0FycmF5W2FEZWNrLmJvb2ttYXJrXSk7XG4gICAgY29uc3QgdGhpc0Jvb2ttYXJrID0gYURlY2suYm9va21hcms7XG4gICAgY29uc3QgdGhlQ2FyZCA9IGFEZWNrLmNhcmRzQXJyYXlbdGhpc0Jvb2ttYXJrXS5jYXJkTmFtZTtcblxuICAgIGNvbnN0IGNhcmRUaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmRUaXRsZURpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NhcmRUaXRsZScpO1xuICAgIGNhcmREaXYuYXBwZW5kQ2hpbGQoY2FyZFRpdGxlRGl2KTtcbiAgICBjYXJkVGl0bGVEaXYudGV4dENvbnRlbnQgPSB0aGVDYXJkLkNhcmROYW1lO1xufVxuXG5jb25zdCBwb3B1bGF0ZUNhcmQgPSAoY3VycmVudERlY2spID0+IHtcbiAgICBlcmFzZVN0ZXBzKCk7XG4gICAgY29uc3QgdGhlQ2FyZCA9IGdldEJvb2ttYXJrZWRDYXJkKGN1cnJlbnREZWNrKTtcbiAgICBjb25zb2xlLmxvZygncHVvcHVsYXRpbmcgd2l0aDogJyArIHRoZUNhcmQpO1xuICAgIGNvbnN0IGNhcmRUaXRsZURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkVGl0bGUnKTtcbiAgICBjYXJkVGl0bGVEaXYuY2xhc3NMaXN0LnJlbW92ZSgnYmlnUGx1cycpO1xuICAgIGNhcmRUaXRsZURpdi5jbGFzc0xpc3QucmVtb3ZlKCdncm93Jyk7XG4gICAgY2FyZFRpdGxlRGl2LmNsYXNzTGlzdC5hZGQoJ2NhcmRUaXRsZScpO1xuICAgIGlmKHRoZUNhcmQgIT09IHVuZGVmaW5lZCl7XG4gICAgICAgIGNhcmRUaXRsZURpdi50ZXh0Q29udGVudCA9IHRoZUNhcmQuY2FyZE5hbWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBcbiAgICB9XG4gICAgY29uc3QgY2FyZERhdGVEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZERhdGUnKTtcbiAgICBpZih0aGVDYXJkICE9PSB1bmRlZmluZWQpe1xuICAgICAgICBjYXJkRGF0ZURpdi50ZXh0Q29udGVudCA9IGBEdWUgZGF0ZTogJHt0aGVDYXJkLmNhcmREYXRlfWA7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjYXJkRGF0ZURpdi50ZXh0Q29udGVudCA9ICcnO1xuICAgIH1cblxuICAgIGNvbnN0IGNhcmRTdGVwc0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkU3RlcHMnKTtcbiAgICBjb25zb2xlLmxvZyhjYXJkU3RlcHNEaXYpO1xuICAgIGNvbnNvbGUubG9nKHR5cGVvZiBjYXJkU3RlcHNEaXYpO1xuICAgIGlmKHRoZUNhcmQgIT09IHVuZGVmaW5lZCl7XG4gICAgICAgIGlmKHRoZUNhcmQuY2FyZFN0ZXBzLmxlbmd0aCA+IDEpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3RoZXJlIGFyZSBzdGVwKHMpISBEUkFXIFNURVAgRElWKHMpJyk7XG4gICAgICAgICAgICB0aGVDYXJkLmNhcmRTdGVwcy5mb3JFYWNoKHN0ZXBTdHJpbmcgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFTdGVwID0gZHJhd0NhcmRTdGVwKCk7XG4gICAgICAgICAgICAgICAgYVN0ZXAudGV4dENvbnRlbnQgPSBzdGVwU3RyaW5nO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3RoZSBhcmUgbm8gc3RlcHMhIERSQVcgZW1wdHkgU1RFUCBESVYnKTtcbiAgICAgICAgICAgIGRyYXdDYXJkU3RlcCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjYXJkU3RlcHNEaXYudGV4dENvbnRlbnQgPSAnJztcbiAgICB9XG4gICAgXG59XG5cbiIsImltcG9ydCBkZWNrIGZyb20gXCIuL2RlY2tcIjtcbmltcG9ydCBsYXlvdXQgZnJvbSBcIi4vR1VJTGF5b3V0XCI7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuZXhwb3J0IGNvbnN0IHN0eWxlQ3VycmVudCA9IChjdXJyZW50RGVja0RpdikgPT4ge1xuICAgIGN1cnJlbnREZWNrRGl2LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkRGVjaycpOyAgXG59XG5cbmNvbnN0IHJlbW92ZVNlbGVjdGVkU3R5bGUgPSAocHJldmlvdXNEZWNrRGl2KSA9PiB7XG4gICAgcHJldmlvdXNEZWNrRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkRGVjaycpO1xufVxuXG5jb25zdCBzdHlsZURlY2tzID0gKGN1cnJlbnREZWNrRGl2LCBwcmV2aW91c0RlY2tEaXYpID0+IHtcbiAgICByZW1vdmVTZWxlY3RlZFN0eWxlKHByZXZpb3VzRGVja0Rpdik7XG4gICAgc3R5bGVDdXJyZW50KGN1cnJlbnREZWNrRGl2KTtcbn1cblxuY29uc3QgZHJhd0JsYW5rRGVjayA9ICgpID0+IHtcbiAgICBjb25zdCBibGFua0RlY2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBibGFua0RlY2tEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdibGFua0RlY2snKTtcbiAgICBkZWNrQXJlYS5hcHBlbmRDaGlsZChibGFua0RlY2tEaXYpO1xuXG4gICAgY29uc3QgbGl0dGxlUGx1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxpdHRsZVBsdXMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdsaXR0bGVQbHVzJyk7XG4gICAgbGl0dGxlUGx1cy5jbGFzc0xpc3QuYWRkKCdncm93Jyk7XG4gICAgbGl0dGxlUGx1cy50ZXh0Q29udGVudCA9ICcrJztcbiAgICBsaXR0bGVQbHVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0RlY2tGb3JtKVxuICAgIGJsYW5rRGVja0Rpdi5hcHBlbmRDaGlsZChsaXR0bGVQbHVzKTtcbn1cblxuY29uc3QgZXJhc2VCbGFua0RlY2sgPSAoKSA9PiB7XG4gICAgY29uc3QgYmxhbmtEZWNrRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYmxhbmtEZWNrJyk7XG4gICAgYmxhbmtEZWNrRGl2WzBdLnJlbW92ZSgpO1xufVxuXG5jb25zdCBmaXJzdERyYXdEZWNrcyA9IChhcnJheU9mRGVja3MpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZygncnVubmluZyBkcmF3RGVja3MnKVxuICAgIC8vIGNvbnNvbGUubG9nKGRlY2tBcnJheVsxXSk7XG4gICAgYXJyYXlPZkRlY2tzLmZvckVhY2goYURlY2sgPT4ge1xuICAgICAgICBjb25zdCBkZWNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkZWNrRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGVjaycpO1xuICAgICAgICAgICAgLy8gZGVja0Rpdi5jbGFzc0xpc3QuYWRkKCdncm93Jyk7XG4gICAgICAgICAgICBkZWNrQXJlYS5hcHBlbmRDaGlsZChkZWNrRGl2KTtcblxuICAgICAgICAgICAgY29uc3QgZGVja1RpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkZWNrVGl0bGVEaXYuc2V0QXR0cmlidXRlKCdpZCcsICdkZWNrVGl0bGUnKTtcbiAgICAgICAgICAgIGRlY2tUaXRsZURpdi5jbGFzc0xpc3QuYWRkKCdncm93Jyk7XG4gICAgICAgICAgICBkZWNrRGl2LmFwcGVuZENoaWxkKGRlY2tUaXRsZURpdik7XG4gICAgICAgICAgICBkZWNrVGl0bGVEaXYudGV4dENvbnRlbnQgPSBhRGVjay5kZWNrTmFtZTtcblxuICAgICAgICAgICAgZGVja0Rpdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGl0bGUnLCBgJHthRGVjay5kZWNrTmFtZX1gKTtcblxuICAgICAgICAgICAgZGVja0Rpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHVwZGF0ZUN1cnJlbnREZWNrKTtcbiAgICAgICAgICAgIGRlY2tUaXRsZURpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHVwZGF0ZUN1cnJlbnREZWNrKTtcbiAgICAgICAgICAgIGRlY2tUaXRsZURpdi5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHNhdmVEZWNrVGl0bGUpO1xuXG4gICAgICAgICAgICBpZigoYXJyYXlPZkRlY2tzLmluZGV4T2YoYURlY2spKSAhPT0gMCl7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVja0RlbGV0ZUJ1dHRvbiA9IGRyYXdEZWNrRGVsZXRlQnV0dG9uKCk7XG4gICAgICAgICAgICAgICAgZGVja0Rpdi5hcHBlbmRDaGlsZChkZWNrRGVsZXRlQnV0dG9uKTtcbiAgICAgICAgICAgICAgICBkZWNrRGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2dyb3cnKTtcbiAgICAgICAgICAgICAgICBkZWNrVGl0bGVEaXYuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCAndHJ1ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICBkcmF3QmxhbmtEZWNrKCk7XG4gICAgdXBkYXRlQ3VycmVudERlY2tEaXYoKTtcbiAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50RGVja0Rpdik7XG5cbn1cblxuXG5jb25zdCBkcmF3RGVja0RlbGV0ZUJ1dHRvbiA9ICgpID0+IHtcbiAgICBjb25zdCBkZWNrRGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVja0RlbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RlY2tEZWxldGUnKTtcbiAgICBkZWNrRGVsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGVja0RlbGV0ZScpO1xuICAgIGRlY2tEZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSAnLSdcbiAgICByZXR1cm4gZGVja0RlbGV0ZUJ1dHRvbjtcbn1cblxuZXhwb3J0IGNvbnN0IGRyYXdEZWNrcyA9IChhcnJheU9mRGVja3MpID0+IHtcbiAgICBjb25zb2xlLmxvZygncnVubmluZyBkcmF3RGVja3MnKVxuICAgIGNvbnN0IGRlY2tBcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlY2tBcmVhJyk7XG4gICAgLy8gY29uc29sZS5sb2coZGVja0FycmF5WzFdKTtcbiAgICBhcnJheU9mRGVja3MuZm9yRWFjaChhRGVjayA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkZWNrRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGVjaycpO1xuICAgICAgICAgICAgZGVja0FyZWEuYXBwZW5kQ2hpbGQoZGVja0Rpdik7XG5cbiAgICAgICAgICAgIGNvbnN0IGRlY2tUaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGVja1RpdGxlRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVja1RpdGxlJyk7XG4gICAgICAgICAgICBkZWNrVGl0bGVEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZWNrVGl0bGUnKTtcbiAgICAgICAgICAgIGRlY2tEaXYuYXBwZW5kQ2hpbGQoZGVja1RpdGxlRGl2KTtcbiAgICAgICAgICAgIGRlY2tUaXRsZURpdi50ZXh0Q29udGVudCA9IGFEZWNrLmRlY2tOYW1lO1xuXG4gICAgICAgICAgICBkZWNrRGl2LnNldEF0dHJpYnV0ZSgnZGF0YS10aXRsZScsIGAke2FEZWNrLmRlY2tOYW1lfWApO1xuXG4gICAgICAgICAgICAvLyBjb25zdCBlZGl0RGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgLy8gZWRpdERlY2suc2V0QXR0cmlidXRlKCdpZCcsICdlZGl0RGVjaycpXG4gICAgICAgICAgICAvLyBkZWNrRGl2LmFwcGVuZENoaWxkKGVkaXREZWNrKVxuICAgICAgICAgICAgLy8gZWRpdERlY2sudGV4dENvbnRlbnQgPSAnRWRpdCc7XG5cbiAgICAgICAgICAgIC8vZGVja0Rpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHVwZGF0ZUN1cnJlbnREZWNrKTtcbiAgICAgICAgICAgIC8vIGRlY2tUaXRsZURpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHVwZGF0ZUN1cnJlbnREZWNrKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gZWRpdERlY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93Rm9ybSk7XG4gICAgICAgIGlmKChhcnJheU9mRGVja3MuaW5kZXhPZihhRGVjaykpICE9PSAwKXtcbiAgICAgICAgICAgIGNvbnN0IGRlY2tEZWxldGVCdXR0b24gPSBkcmF3RGVja0RlbGV0ZUJ1dHRvbigpO1xuICAgICAgICAgICAgZGVja0Rpdi5hcHBlbmRDaGlsZChkZWNrRGVsZXRlQnV0dG9uKTtcbiAgICAgICAgICAgIGRlY2tUaXRsZURpdi5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsICd0cnVlJyk7XG4gICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICApO1xuICAgIC8vIGVyYXNlQmxhbmtEZWNrKCk7XG4gICAgLy8gZHJhd0JsYW5rRGVjaygpO1xuICAgIC8vIHVwZGF0ZUN1cnJlbnREZWNrRGl2KCk7XG4gICAgLy8gc3R5bGVDdXJyZW50KCk7XG4gICAgLy8gY29uc29sZS5sb2coY3VycmVudERlY2tEaXYpO1xuXG59IiwiY29uc3QgbGF5b3V0ID0gKCkgPT57XG4gICAgY29uc29sZS5sb2coYGRyYXdpbmcgbGF5b3V0YCk7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnQuc2V0QXR0cmlidXRlKCdpZCcsICdjb250ZW50Jyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICBcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWluZXInKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGVhZGVyJyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgXG4gICAgY29uc3QgZGVja0RvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZWNrRG9jay5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RlY2tEb2NrJyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlY2tEb2NrKTtcbiAgICBcbiAgICBjb25zdCBjYXJkRG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmREb2NrLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2FyZERvY2snKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZERvY2spO1xuICAgIFxuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsb2dvLnNldEF0dHJpYnV0ZSgnaWQnLCAnbG9nbycpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvKTtcbiAgICBsb2dvLnRleHRDb250ZW50ID0gJ1NodWZmbGUnO1xuICAgIFxuICAgIGNvbnN0IGRlY2tEb2NrTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlY2tEb2NrTWVudS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUnKTtcbiAgICBkZWNrRG9jay5hcHBlbmRDaGlsZChkZWNrRG9ja01lbnUpO1xuICAgIFxuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0aXRsZScpO1xuICAgIGRlY2tEb2NrTWVudS5hcHBlbmRDaGlsZChkaXYpO1xuICAgIGRpdi50ZXh0Q29udGVudCA9ICdEZWNrcyc7XG4gICAgXG4gICAgY29uc3QgYWRkRGVja0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFkZERlY2tCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdhZGREZWNrQnV0dG9uJyk7XG4gICAgYWRkRGVja0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RpdGxlJylcbiAgICBhZGREZWNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2dyb3cnKTtcbiAgICBkZWNrRG9ja01lbnUuYXBwZW5kQ2hpbGQoYWRkRGVja0J1dHRvbik7XG4gICAgYWRkRGVja0J1dHRvbi50ZXh0Q29udGVudCA9ICcrJztcbiAgICBcbiAgICBjb25zdCBkZWNrQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlY2tBcmVhLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVja0FyZWEnKTtcbiAgICBkZWNrRG9jay5hcHBlbmRDaGlsZChkZWNrQXJlYSk7XG4gICAgXG4gICAgY29uc3QgY2FyZERvY2tNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyZERvY2tNZW51LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudScpO1xuICAgIGNhcmREb2NrLmFwcGVuZENoaWxkKGNhcmREb2NrTWVudSk7XG4gICAgXG4gICAgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGl0bGUnKTtcbiAgICBjYXJkRG9ja01lbnUuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICBkaXYudGV4dENvbnRlbnQgPSAnQ2FyZHMnO1xuICAgIFxuICAgIGNvbnN0IGFkZENhcmRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGRDYXJkQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkQ2FyZEJ1dHRvbicpO1xuICAgIGFkZENhcmRCdXR0b24uc2V0QXR0cmlidXRlKCdjbGFzcycsICd0aXRsZScpXG4gICAgYWRkQ2FyZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdncm93Jyk7XG4gICAgY2FyZERvY2tNZW51LmFwcGVuZENoaWxkKGFkZENhcmRCdXR0b24pO1xuICAgIGFkZENhcmRCdXR0b24udGV4dENvbnRlbnQgPSAnKyc7XG4gICAgXG4gICAgY29uc3QgY2FyZEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkQXJlYS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NhcmRBcmVhJyk7XG4gICAgY2FyZERvY2suYXBwZW5kQ2hpbGQoY2FyZEFyZWEpO1xuICAgIFxuICAgIHJldHVybiB7Y29udGVudCwgZGVja0FyZWEsIGNhcmRBcmVhfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbGF5b3V0O1xuIiwiZXhwb3J0IGNvbnN0IGRyYXdPdmVybGF5ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdkcmF3aW5nIE92ZXJsYXknKTtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBjb25zdCBvdmVyTGF5SG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgb3ZlckxheUhvbGRlci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NvbnRlbnQnKTtcbiAgICBvdmVyTGF5SG9sZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnb3ZlckxheUhvbGRlcicpO1xuICAgIG92ZXJMYXlIb2xkZXIuY2xhc3NMaXN0LmFkZCgnb3ZlckxheUhvbGRlcicpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQob3ZlckxheUhvbGRlcik7XG4gICAgXG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG92ZXJsYXkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdvdmVybGF5Jyk7XG4gICAgb3ZlckxheUhvbGRlci5hcHBlbmRDaGlsZChvdmVybGF5KTtcbiAgICBcbiAgICBjb25zdCBmb3JtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybURpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Zvcm1EaXYnKTtcbiAgICBvdmVyTGF5SG9sZGVyLmFwcGVuZENoaWxkKGZvcm1EaXYpO1xuICAgIFxuICAgIGNvbnN0IG5ld0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdGb3JtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZEJpZycpO1xuICAgIG5ld0Zvcm0uY2xhc3NMaXN0LmFkZCgnZWRpdFNpemUnKTtcbiAgICBuZXdGb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmV3Rm9ybScpO1xuICAgIGZvcm1EaXYuYXBwZW5kQ2hpbGQobmV3Rm9ybSk7XG5cbiAgICBjb25zdCBzdWJtaXRCdXR0b25zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3VibWl0QnV0dG9uc0Rpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3N1Ym1pdEJ1dHRvbnNEaXYnKTtcbiAgICBmb3JtRGl2LmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbnNEaXYpO1xuICAgIFxuICAgIGNvbnN0IGNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhbmNlbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NoZWNrJyk7XG4gICAgY2FuY2VsLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2FuY2VsJyk7XG4gICAgY2FuY2VsLmNsYXNzTGlzdC5hZGQoJ2dyb3cnKTtcbiAgICBzdWJtaXRCdXR0b25zRGl2LmFwcGVuZENoaWxkKGNhbmNlbCk7XG4gICAgY2FuY2VsLnRleHRDb250ZW50ID0gJ+Kclic7XG4gICAgXG4gICAgY29uc3QgY2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjaGVjay5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NoZWNrJyk7XG4gICAgc3VibWl0QnV0dG9uc0Rpdi5hcHBlbmRDaGlsZChjaGVjayk7XG4gICAgY2hlY2suc2V0QXR0cmlidXRlKCdpZCcsICdjaGVjaycpO1xuICAgIGNoZWNrLmNsYXNzTGlzdC5hZGQoJ2dyb3cnKTtcbiAgICBjaGVjay50ZXh0Q29udGVudCA9ICfinJMnO1xufVxuXG5jb25zdCBzZXREZWNrT3B0aW9ucyA9IChkZWNrQXJyYXksIGNhcmREZWNrKSA9PiB7XG4gICAgZGVja0FycmF5LmZvckVhY2goZGVja0VsZW1lbnQgPT4ge1xuICAgICAgICBjb25zdCBkZWNrT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIGNhcmREZWNrLmFwcGVuZENoaWxkKGRlY2tPcHRpb24pO1xuICAgICAgICBkZWNrT3B0aW9uLnZhbHVlID0gZGVja0VsZW1lbnQuZGVja05hbWU7XG4gICAgICAgIGRlY2tPcHRpb24udGV4dENvbnRlbnQgPSBkZWNrRWxlbWVudC5kZWNrTmFtZTtcbiAgICB9KVxufVxuXG5jb25zdCBhZGROZXdTdGVwRmllbGQgPSAoZSkgPT4ge1xuICAgIGlmKGUua2V5Q29kZSA9PT0gMTMpe1xuICAgICAgICBjb25zb2xlLmxvZyhgcHJlc3NlZCBFTlRFUmApO1xuICAgICAgICBjb25zdCBzdGVwID0gZHJhd1N0ZXAoKTtcbiAgICAgICAgc3RlcC5mb2N1cygpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGRyYXdTdGVwID0gKCkgPT4ge1xuICAgIGNvbnN0IHN0ZXBIb2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RlcEhvbGRlcicpO1xuICAgIGNvbnN0IHN0ZXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHN0ZXAuc2V0QXR0cmlidXRlKCdjbGFzcycsICdzdGVwJyk7XG4gICAgc3RlcC5jbGFzc0xpc3QuYWRkKCdpbnB1dCcpO1xuICAgIHN0ZXBIb2xkZXIuYXBwZW5kQ2hpbGQoc3RlcCk7XG4gICAgc3RlcC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N0ZXAnKTtcbiAgICBzdGVwLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgc3RlcC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnc3RlcCcpO1xuICAgIHN0ZXAuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICcrIHN0ZXAnKTtcbiAgICBzdGVwLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgYWRkTmV3U3RlcEZpZWxkKTtcbiAgICBcbiAgICByZXR1cm4gc3RlcDtcbn1cblxuY29uc3QgZHJhd0NhcmRGb3JtRmllbGRzID0gKGRlY2tBcnJheSkgPT4geyAgXG4gICAgY29uc3QgbmV3Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdGb3JtJyk7XG4gICAgY29uc3QgY2FyZEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgY2FyZEZvcm0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkRm9ybScpO1xuICAgIG5ld0Zvcm0uYXBwZW5kQ2hpbGQoY2FyZEZvcm0pO1xuICAgIFxuICAgIGNvbnN0IGNhcmRUaXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjYXJkVGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmRUaXRsZUlucHV0Jyk7XG4gICAgY2FyZFRpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZCgnaW5wdXQnKTtcbiAgICBjYXJkRm9ybS5hcHBlbmRDaGlsZChjYXJkVGl0bGVJbnB1dCk7XG4gICAgY2FyZFRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdjYXJkLXRpdGxlJyk7XG4gICAgY2FyZFRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBjYXJkVGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnY2FyZC10aXRsZScpO1xuICAgIGNhcmRUaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVGl0bGUnKTtcbiAgICBcbiAgICBjb25zdCBjYXJkRGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIGNhcmREZWNrLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZERlY2snKTtcbiAgICBjYXJkRGVjay5zZXRBdHRyaWJ1dGUoJ211bHRpcGxlJywgJ211bHRpcGxlJyk7XG4gICAgY2FyZERlY2suY2xhc3NMaXN0LmFkZCgnaW5wdXQnKTtcbiAgICBjYXJkRm9ybS5hcHBlbmRDaGlsZChjYXJkRGVjayk7XG4gICAgY2FyZERlY2suc2V0QXR0cmlidXRlKCdpZCcsICdjYXJkRGVjaycpO1xuICAgIGNhcmREZWNrLnNldEF0dHJpYnV0ZSgnbmFtZScsICdjYXJkRGVjaycpO1xuXG4gICAgc2V0RGVja09wdGlvbnMoZGVja0FycmF5LCBjYXJkRGVjayk7XG4gICAgXG4gICAgY29uc3Qgc3RlcEhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHN0ZXBIb2xkZXIuY2xhc3NMaXN0LmFkZCgnc3RlcEhvbGRlcicpO1xuICAgIHN0ZXBIb2xkZXIuc2V0QXR0cmlidXRlKCdpZCcsICdzdGVwSG9sZGVyJyk7XG4gICAgY2FyZEZvcm0uYXBwZW5kQ2hpbGQoc3RlcEhvbGRlcik7XG4gICAgXG4gICAgZHJhd1N0ZXAoKTtcbiAgICBcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkYXRlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGF0ZScpO1xuICAgIGRhdGUuY2xhc3NMaXN0LmFkZCgnaW5wdXQnKTtcbiAgICBjYXJkRm9ybS5hcHBlbmRDaGlsZChkYXRlKTtcbiAgICBkYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGF0ZScpO1xuICAgIGRhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgICBkYXRlLnNldEF0dHJpYnV0ZSgnbmFtZScsICdkYXRlJyk7XG4gICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgYGApO1xuICAgIFxufVxuXG5jb25zdCByZXNldERlY2tPcHRpb25zID0gKCkgPT4ge1xuICAgIGNvbnN0IGRlY2tTZWxlY3RvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkRGVjaycpO1xuICAgIEFycmF5LmZyb20oZGVja1NlbGVjdG9yKS5mb3JFYWNoKGRlY2tFbGVtZW50ID0+IHtcbiAgICAgICAgZGVja0VsZW1lbnQucmVtb3ZlKCk7XG4gICAgfSlcbn1cblxuXG5cbmNvbnN0IHJlc2V0Rm9ybUNhcmQgPSAoKSA9PiB7XG4gICAgbGV0IGFEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZC10aXRsZScpO1xuICAgIGFEaXYudmFsdWUgPSAnJztcbiAgICBhRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0ZXAnKTtcbiAgICBhRGl2LnZhbHVlID0gJyc7XG4gICAgYURpdi5jYXJkRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlJykudmFsdWU7XG4gICAgYURpdi52YWx1ZSA9ICcnO1xufVxuXG5jb25zdCBzaG93Q2FyZEZvcm0gPSAoKSA9PiB7XG4gICAgc2V0RGVja09wdGlvbnMoKTtcbiAgICBzaG93Rm9ybSgpO1xuICAgIGZvcm1UeXBlID0gJ2NhcmQnO1xuICAgIGxldCBhRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0ZXAnKTtcbiAgICBhRGl2LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgYURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlJyk7XG4gICAgYURpdi5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgIGFEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZERlY2snKTtcbiAgICBhRGl2LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgYURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkLXRpdGxlJyk7XG4gICAgYURpdi5zdHlsZS5ncmlkUm93ID0gJzEvMic7XG59XG5cbmV4cG9ydCBjb25zdCBkcmF3TmV3Q2FyZEZvcm0gPSAoZGVja0FycmF5LCB2YWx1ZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGBkcmF3aW5nIG5ldyBjYXJkIGZvcm0gdmFsdWUgaXMgJHt2YWx1ZX1gKVxuICAgIGlmKHZhbHVlID09PSAyKXtcbiAgICAgICAgZHJhd092ZXJsYXkoKTtcbiAgICAgICAgZHJhd0NhcmRGb3JtRmllbGRzKGRlY2tBcnJheSk7XG4gICAgfVxufVxuXG5cblxuIiwiaW1wb3J0IHsgZHJhd092ZXJsYXkgfSBmcm9tIFwiLi9HVUlOZXdDYXJkXCI7XG5cblxuY29uc3QgZHJhd0RlY2tGb3JtRmllbGRzID0gKCkgPT57XG4gICAgY29uc3QgbmV3Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdGb3JtJyk7XG4gICAgY29uc3QgZGVja0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZGVja0Zvcm0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZWNrRm9ybScpO1xuICAgIGRlY2tGb3JtLnNldEF0dHJpYnV0ZSgnb25TdWJtaXQnLCAncmV0dXJuIGZhbHNlOycpO1xuICAgIG5ld0Zvcm0uYXBwZW5kQ2hpbGQoZGVja0Zvcm0pO1xuICAgIGNvbnN0IG5ld0RlY2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbmV3RGVja1RpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGVja1RpdGxlSW5wdXQnKTtcbiAgICBuZXdEZWNrVGl0bGUuY2xhc3NMaXN0LmFkZCgnaW5wdXQnKTtcbiAgICBkZWNrRm9ybS5hcHBlbmRDaGlsZChuZXdEZWNrVGl0bGUpO1xuICAgIG5ld0RlY2tUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RlY2stdGl0bGUnKTtcbiAgICBuZXdEZWNrVGl0bGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBuZXdEZWNrVGl0bGUuc2V0QXR0cmlidXRlKCduYW1lJywgJ2RlY2stdGl0bGUnKTtcbiAgICBuZXdEZWNrVGl0bGUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdUaXRsZScpO1xuICAgIG5ld0RlY2tUaXRsZS5zdHlsZS5ncmlkUm93ID0gJzMvNCc7XG59XG5cbmNvbnN0IGRyYXdOZXdEZWNrRm9ybSA9ICh2YWx1ZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGBkcmF3aW5nIG5ldyBkZWNrIGZvcm0gdmFsdWUgaXMgJHt2YWx1ZX1gKVxuICAgIGlmKHZhbHVlID09PSAxKXtcbiAgICAgICAgZHJhd092ZXJsYXkoKTtcbiAgICAgICAgZHJhd0RlY2tGb3JtRmllbGRzKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBkcmF3TmV3RGVja0Zvcm07IiwiY29uc3QgY2FyZCA9IChuYW1lKSA9PiB7XG4gIGNvbnN0IGNhcmROYW1lID0gbmFtZTtcbiAgY29uc3QgY2FyZFN0ZXBzID0gW107XG4gIGNvbnN0IGNhcmREYXRlID0gbmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoKTtcbiAgY29uc3QgY2FyZENvbXBsZXRlVmFsdWUgPSAwO1xuICBjb25zdCBjYXJkRGVja3MgPSBbXCJhbGxcIl07XG4gIHJldHVybiB7XG4gICAgY2FyZE5hbWUsXG4gICAgY2FyZENvbXBsZXRlVmFsdWUsXG4gICAgY2FyZERhdGUsXG4gICAgY2FyZFN0ZXBzLFxuICAgIGNhcmREZWNrcyxcbiAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBjYXJkO1xuIiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBjYXJkIGZyb20gXCIuL2NhcmRcIjtcbmltcG9ydCBkZWNrIGZyb20gXCIuL2RlY2tcIjtcblxuZXhwb3J0IGNvbnN0IGFsbCA9IGRlY2soXCJhbGxcIik7XG5jb25zb2xlLmxvZyhhbGwpO1xuZXhwb3J0IGNvbnN0IGRlY2tBcnJheSA9IFtdO1xuZGVja0FycmF5LnB1c2goYWxsKTtcbmV4cG9ydCBjb25zdCB0YWJsZSA9IGRlY2tBcnJheTtcbmV4cG9ydCBjb25zdCBkZWZhdWx0RGVjayA9IGRlY2soJ1RvLURvJyk7XG5leHBvcnQgY29uc3QgZGVmYXVsdENhcmQgPSBjYXJkKCdHZXQgR3JvY2VyaWVzJyk7XG5leHBvcnQgY29uc3QgZGVmYXVsdENhcmQyID0gY2FyZCgnTWFpbCBUaGFuayBZb3UgTm90ZXMnKTtcbmFsbC5jYXJkc0FycmF5LnB1c2goZGVmYXVsdENhcmQpO1xuYWxsLmNhcmRzQXJyYXkucHVzaChkZWZhdWx0Q2FyZDIpO1xuZGVmYXVsdERlY2suY2FyZHNBcnJheS5wdXNoKGRlZmF1bHRDYXJkLmNhcmROYW1lKTtcbmRlZmF1bHREZWNrLmNhcmRzQXJyYXkucHVzaChkZWZhdWx0Q2FyZDIuY2FyZE5hbWUpO1xuZGVja0FycmF5LnB1c2goZGVmYXVsdERlY2spO1xuXG5cbiAgICBjb25zdCB2aWV3QWxsID0gKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coYEFsbCBjYXJkcyBhcmU6ICR7YWxsfWApO1xuICAgICAgY29uc29sZS5sb2coYGFsbCBkZWNrcyBhcmU6ICR7dGFibGV9YCk7XG4gICAgICBhbGwuY2FyZHNBcnJheS5mb3JFYWNoKChjYXJkRWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhgYWxsICsgJHtjYXJkRWxlbWVudH1gKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCB2aWV3RGVjayA9IChuYW1lKSA9PiB7XG4gICAgICBsZXQgY3VycmVudERlY2s7XG4gICAgICBsZXQgd2FzTWF0Y2hlZCA9IGZhbHNlO1xuICAgICAgdGFibGUuZm9yRWFjaCgoZGVja0VsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJpbiBmb3IgZWFjaFwiKTtcbiAgICAgICAgY29uc29sZS5sb2coZGVja0VsZW1lbnQpO1xuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50RGVjayk7XG4gICAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiBjdXJyZW50RGVjayk7XG4gICAgICAgIGlmIChkZWNrRWxlbWVudC5kZWNrTmFtZSA9PT0gbmFtZSkge1xuICAgICAgICAgIGN1cnJlbnREZWNrID0gZGVja0VsZW1lbnQ7XG4gICAgICAgICAgY29uc29sZS5sb2coY3VycmVudERlY2spO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiBjdXJyZW50RGVjayk7XG4gICAgICAgICAgd2FzTWF0Y2hlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKHdhc01hdGNoZWQgPT09IGZhbHNlKSB7XG4gICAgICAgIGN1cnJlbnREZWNrID0gYWxsO1xuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50RGVjayk7XG4gICAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiBjdXJyZW50RGVjayk7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyh0eXBlb2YgY3VycmVudERlY2spO1xuICAgICAgY29uc29sZS5sb2coYCR7Y3VycmVudERlY2suZGVja05hbWV9IGNvbnRlbnRzIGFyZTogYCk7XG4gICAgICBjdXJyZW50RGVjay5jYXJkc0FycmF5LmZvckVhY2goKGNhcmRFbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGNhcmRFbGVtZW50KTtcbiAgICAgIH0pO1xuICAgICAgXG4gICAgfTtcblxuICAgIGV4cG9ydCBjb25zdCBjcmVhdGVEZWNrID0gKG5hbWUpID0+IHtcbiAgICAgICAgLy8gY29uc3QgdGhlTmFtZSA9IHByb21wdCgnV2hhdCBpcyB0aGUgbmFtZSBvZiB0ZWggZGVjaz8nKVxuICAgICAgY29uc3QgdGhpc0RlY2sgPSBkZWNrKG5hbWUpO1xuICAgICAgdGFibGUucHVzaCh0aGlzRGVjayk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcInRoZSBkZWNrIGNyZWF0ZWQgaXM6IFwiICsgdGhpc0RlY2spO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJpdHMgbmFtZSBpczogXCIgKyB0aGlzRGVjay5kZWNrTmFtZSk7XG4gICAgfTtcblxuICAgIGV4cG9ydCBjb25zdCBhZGRDYXJkdG9EZWNrID0gKHRoaXNDYXJkLCB0aGlzRGVjaykgPT4ge1xuICAgICAgICB0aGlzQ2FyZC5jYXJkRGVjayA9IHRoaXNEZWNrLmRlY2tOYW1lO1xuICAgICAgICB0aGlzRGVjay5jYXJkc0FycmF5LnB1c2godGhpc0NhcmQuY2FyZE5hbWUpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzRGVjayk7XG4gICAgICB9O1xuXG4gICAgXG5cbiAgICBleHBvcnQgY29uc3QgZ2V0Q2FyZCA9IChuYW1lKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG5hbWUpXG4gICAgICBsZXQgdGhpc0NhcmQ7XG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzQ2FyZCk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhhbGwubGVuZ3RoKTtcbiAgICAgIGNvbnNvbGUubG9nKGFsbC5jYXJkc0FycmF5KTtcbiAgICAgIGFsbC5jYXJkc0FycmF5LmZvckVhY2goKGNhcmRFbGVtZW50KSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNhcmRFbGVtZW50LmNhcmROYW1lKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cobmFtZSk7XG4gICAgICAgIGlmIChjYXJkRWxlbWVudC5jYXJkTmFtZSA9PT0gbmFtZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGAke2NhcmRFbGVtZW50LmNhcmROYW1lfSA9PT0gJHtuYW1lfWApO1xuICAgICAgICAgIHRoaXNDYXJkID0gY2FyZEVsZW1lbnQ7XG4gICAgICAgICAgY29uc29sZS5sb2codGhpc0NhcmQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAvLyAgIGlmICh0aGVDYXJkID09PSB1bmRlZmluZWQpIHtcbiAgICAvLyAgICAgLy8gY29uc3QgY2FyZE5hbWUgPSBwcm9tcHQoXG4gICAgLy8gICAgIC8vICAgXCJ0aGF0IGNhcmQgZG9lcyBub3QgZXhpc3QsIHBsZWFzZSBlbnRlciBhbm90aGVyIG5hbWU6XCJcbiAgICAvLyAgICAgLy8gKTtcbiAgICAvLyAgICAgLy8gdGhlQ2FyZCA9IGdldENhcmQoY2FyZE5hbWUpO1xuICAgIC8vICAgfVxuICAgICAgLy9jb25zb2xlLmxvZyhgdGhlIGNhcmQgZ2V0dGluZyByZXR1cm5lZCBpczogJHt0aGlzQ2FyZC5jYXJkTmFtZX1gKVxuICAgICAgcmV0dXJuIHRoaXNDYXJkO1xuICAgIH07XG5cbiAgICBleHBvcnQgY29uc3QgZ2V0RGVjayA9IChuYW1lKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnR0VUVElORyBERUNLJyk7XG4gICAgICBsZXQgdGhlRGVjaztcbiAgICAgIGNvbnNvbGUubG9nKGB0aGUgZGVjayBhcnJheSBpcyAke2RlY2tBcnJheX1gKTtcbiAgICAgIGRlY2tBcnJheS5mb3JFYWNoKGRlY2tFbGVtZW50ID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0aGUgIGRlY2sgbmFtZSBpczogXCIgKyBkZWNrRWxlbWVudC5kZWNrTmFtZSk7XG4gICAgICAgIGlmIChkZWNrRWxlbWVudC5kZWNrTmFtZSA9PT0gbmFtZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiaXQgbWF0Y2hlZCFcIik7XG4gICAgICAgICAgY29uc29sZS5sb2coZGVja0VsZW1lbnQuZGVja05hbWUsIG5hbWUpO1xuICAgICAgICAgIHRoZURlY2sgPSBkZWNrRWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2coXCJnZXR0aW5nIGRlY2s6IFwiICsgdGhlRGVjay5kZWNrTmFtZSk7XG4gICAgICAvLyBpZiAodGhlRGVjayA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyAgIGNvbnN0IGRlY2tOYW1lID0gcHJvbXB0KFxuICAgICAgLy8gICAgIFwidGhhdCBkZWNrIGRvZXMgbm90IGV4aXN0LCBwbGVhc2UgZW50ZXIgYW5vdGhlciBuYW1lOlwiXG4gICAgICAvLyAgICk7XG4gICAgICAvLyAgIHRoZURlY2sgPSBnZXREZWNrKGRlY2tOYW1lKTtcbiAgICAgIC8vIH1cbiAgICAgIGNvbnNvbGUubG9nKHRoZURlY2spO1xuICAgICAgcmV0dXJuIHRoZURlY2s7XG4gICAgfTtcblxuICAgIGV4cG9ydCBjb25zdCBjcmVhdGVDYXJkID0gKG5hbWUpID0+IHtcbiAgICAgICAgLy8gY29uc3QgdGhlTmFtZSA9IHByb21wdCgnV2hhdCBpcyB0aGUgbmFtZSBvZiB0aGUgY2FyZD8nKVxuICAgICAgY29uc3QgbmV3Q2FyZCA9IGNhcmQobmFtZSk7XG4gICAgICAvLyBjb25zdCBuYW1lT2ZEZWNrID0gcHJvbXB0KCd3aGF0IGRlY2s/Jyk7XG4gICAgICAvLyBuZXdDYXJkLmNhcmREZWNrcy5wdXNoKG5hbWVPZkRlY2spO1xuICAgICAgLy8gY29uc29sZS5sb2cobmV3Q2FyZC5jYXJkRGVja3MpO1xuICAgICAgLy8gbmV3Q2FyZC5jYXJkRGVja3MuZm9yRWFjaChkZWNrTmFtZSA9PiB7XG4gICAgICAvLyAgIGlmKGRlY2tOYW1lICE9PSAnYWxsJyl7XG4gICAgICAvLyAgIGNvbnN0IHRoaXNEZWNrID0gZ2V0RGVjayhkZWNrTmFtZSk7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKCdhZGRpbmcgaHRlIGZ1bGxvd2luZyBjYXJkIHRvIHRoZSBmb2xsb3dpbmcgZGVjayAnKyBuZXdDYXJkLmNhcmROYW1lICsgXCIgXCIgKyB0aGlzRGVjay5kZWNrTmFtZSk7XG4gICAgICAvLyAgIGFkZENhcmR0b0RlY2sobmV3Q2FyZCwgdGhpc0RlY2spXG4gICAgICAvLyAgIH1cbiAgICAgICAgXG4gICAgICAvLyB9KVxuICAgIGFsbC5jYXJkc0FycmF5LnB1c2gobmV3Q2FyZCk7XG4gICAgY29uc29sZS5sb2coYWxsLmNhcmRzQXJyYXkpO1xuICAgIHJldHVybiBuZXdDYXJkO1xuICAgIFxuICAgIH07XG5cbiAgICBcblxuICAgIGV4cG9ydCBjb25zdCBkZWxldGVDYXJkRnJvbURlY2sgPSAodGhpc0NhcmQsIHRoaXNEZWNrKSA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXNEZWNrLmNhcmRzQXJyYXkuaW5kZXhPZih0aGlzQ2FyZC5jYXJkTmFtZSk7XG4gICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICB0aGlzRGVjay5jYXJkc0FycmF5LnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpc0RlY2s7XG4gICAgfTtcblxuICAgIGV4cG9ydCBjb25zdCBkZWxldGVDYXJkID0gKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2RlbGV0aW5nJylcbiAgICAgIGNvbnN0IGNhcmREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZFRpdGxlJyk7XG4gICAgICBjb25zdCBhQ2FyZE5hbWUgPSBjYXJkRGl2LnRleHRDb250ZW50O1xuICAgICAgY29uc3QgdGhpc0NhcmQgPSBnZXRDYXJkKGFDYXJkTmFtZSk7XG4gICAgICBjb25zdCBpbmRleCA9IGFsbC5jYXJkc0FycmF5LmluZGV4T2YodGhpc0NhcmQpO1xuICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgYWxsLmNhcmRzQXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKGFsbCk7XG4gICAgICByZXR1cm4gYWxsO1xuICAgIH07XG5cbiAgICBleHBvcnQgY29uc3QgZGVsZXRlRGVjayA9IChhRGVja05hbWUpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdERUxFVEVJTkcgREVDSyBJTiBDT05UUk9MTFMnKVxuICAgICAgY29uc29sZS5sb2coYGRlY2sgbmFtZSBpcyAke2FEZWNrTmFtZX1gKVxuICAgICAgY29uc3QgZGVja09iaiA9IGdldERlY2soYURlY2tOYW1lKTtcbiAgICAgIGNvbnNvbGUubG9nKGBnbyB0aGUgZGVjayBvYmplY3QgY2FsbGVkICR7ZGVja09iai5kZWNrTmFtZX1gKTtcbiAgICAgIGNvbnN0IGluZGV4ID0gZGVja0FycmF5LmluZGV4T2YoZGVja09iaik7XG4gICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICBkZWNrQXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKGBERUNLIEFSUkFZIElTICR7ZGVja0FycmF5fWApO1xuICAgICAgcmV0dXJuIGRlY2tBcnJheTtcbiAgICB9O1xuXG4gICAgY29uc3QgbW92ZUNhcmQgPSAodGhlQ2FyZE5hbWUsIGRlY2tPbmVOYW1lLCBkZWNrVHdvTmFtZSkgPT4ge1xuICAgICAgY29uc3QgdGhpc0NhcmQgPSBnZXRDYXJkKHRoZUNhcmROYW1lKTtcbiAgICAgIGNvbnN0IGRlY2tPbmUgPSBnZXREZWNrKGRlY2tPbmVOYW1lKTtcbiAgICAgIGNvbnN0IGRlY2tUd28gPSBnZXREZWNrKGRlY2tUd29OYW1lKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXNDYXJkLCBkZWNrT25lLCBkZWNrVHdvKTtcbiAgICAgIGRlbGV0ZUNhcmRGcm9tRGVjayh0aGlzQ2FyZCwgZGVja09uZSk7XG4gICAgICBhZGRDYXJkdG9EZWNrKHRoaXNDYXJkLCBkZWNrVHdvKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgdmlld0NhcmQgPSAodGhlQ2FyZE5hbWUpID0+IHtcbiAgICAgIGNvbnN0IHRoaXNDYXJkID0gZ2V0Q2FyZCh0aGVDYXJkTmFtZSk7XG4gICAgICBmb3IgKGNvbnN0IHByb3AgaW4gdGhpc0NhcmQpIHtcbiAgICAgICAgY29uc29sZS5sb2coYG9iai4ke3Byb3B9ID0gJHt0aGlzQ2FyZFtwcm9wXX1gKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0RGF0ZSA9ICh0aGVDYXJkTmFtZSkgPT4ge1xuICAgICAgY29uc3QgdGhpc0NhcmQgPSBnZXRDYXJkKHRoZUNhcmROYW1lKTtcbiAgICAgIGNvbnN0IGFEYXRlID0gcHJvbXB0KFwiZW50ZXIgdGhlIGR1ZSBkYXRlIGluIHRoZSBmb3JtIG9mIE1NLkRELllZOlwiKTtcbiAgICAgIHRoaXNDYXJkLmNhcmREYXRlID0gbmV3IERhdGUoYURhdGUpO1xuICAgIH07XG5cbiAgICBjb25zdCBhZGRTdGVwID0gKHRoZUNhcmROYW1lKSA9PiB7XG4gICAgICBjb25zdCB0aGlzQ2FyZCA9IGdldENhcmQodGhlQ2FyZE5hbWUpO1xuICAgICAgY29uc3QgaSA9IHRoaXNDYXJkLmNhcmRTdGVwcy5sZW5ndGg7XG4gICAgICB0aGlzQ2FyZC5jYXJkU3RlcHNbaV0gPSBwcm9tcHQoXCJlbnRlciB5b3VyIHN0ZXA6XCIpO1xuICAgIH07XG5cbiAgICBjb25zdCBzZXRTdGVwID0gKHRoZUNhcmROYW1lKSA9PiB7XG4gICAgICBjb25zdCB0aGlzQ2FyZCA9IGdldENhcmQodGhlQ2FyZE5hbWUpO1xuICAgICAgY29uc3QgaSA9IHByb21wdChcIndoYXQgaW5kZXg/XCIpO1xuICAgICAgdGhpc0NhcmQuY2FyZFN0ZXBzW2ldID0gcHJvbXB0KFwiZW50ZXIgeW91ciBzdGVwOlwiKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0Q29tcGxldGUgPSAodGhlQ2FyZE5hbWUpID0+IHtcbiAgICAgIGNvbnN0IHRoaXNDYXJkID0gZ2V0Q2FyZCh0aGVDYXJkTmFtZSk7XG4gICAgICB0aGlzQ2FyZC5jYXJkQ29tcGxldGVWYWx1ZSA9IE51bWJlcihcbiAgICAgICAgcHJvbXB0KFxuICAgICAgICAgIFwiaXMgeW91ciB0YXNrIGNvbXBsZXRlPyBJZiBzbywgZW50ZXIgYSAnMScgb3RoZXJ3aXNlIGVuZXRlciAnMCcuXCJcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgLy8gcmV0dXJuIHtcbiAgICAvLyAgIHZpZXdBbGwsXG4gICAgLy8gICB2aWV3Q2FyZCxcbiAgICAvLyAgIHZpZXdEZWNrLFxuICAgIC8vICAgY3JlYXRlQ2FyZCxcbiAgICAvLyAgIGNyZWF0ZURlY2ssXG4gICAgLy8gICBnZXRDYXJkLFxuICAgIC8vICAgZ2V0RGVjayxcbiAgICAvLyAgIGFkZENhcmR0b0RlY2ssXG4gICAgLy8gICBkZWxldGVDYXJkRnJvbURlY2ssXG4gICAgLy8gICBkZWxldGVDYXJkLFxuICAgIC8vICAgZGVsZXRlRGVjayxcbiAgICAvLyAgIG1vdmVDYXJkLFxuICAgIC8vICAgc2V0RGF0ZSxcbiAgICAvLyAgIGFkZFN0ZXAsXG4gICAgLy8gICBzZXRDb21wbGV0ZSxcbiAgICAvLyAgIHNldFN0ZXAsXG4gICAgLy8gfTtcblxuXG4iLCJjb25zdCBkZWNrID0gKG5hbWUpID0+IHtcbiAgY29uc3QgZGVja05hbWUgPSBuYW1lO1xuICBjb25zdCBjYXJkc0FycmF5ID0gW107XG4gIGNvbnN0IGJvb2ttYXJrID0gMDtcbiAgcmV0dXJuIHtcbiAgICBkZWNrTmFtZSxcbiAgICBjYXJkc0FycmF5LFxuICAgIGJvb2ttYXJrLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVjaztcbiIsImltcG9ydCAqIGFzIGNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbHMnO1xuaW1wb3J0IHtkZWZhdWx0RGVjaywgZGVja0FycmF5LCBhbGx9IGZyb20gJy4vY29udHJvbGxzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGd1aSBmcm9tICcuL0dVSSc7XG5pbXBvcnQgY2FyZCBmcm9tICcuL2NhcmQnO1xuaW1wb3J0IHtkcmF3U3RlcH0gZnJvbSAnLi9HVUlOZXdDYXJkJztcbmltcG9ydCB7IGRyYXdDYXJkU3RlcCB9IGZyb20gJy4vR1VJQ2FyZHMnO1xuXG5sZXQgY3VycmVudERlY2sgPSBkZWZhdWx0RGVjaztcbmxldCBjdXJyZW50Q2FyZDtcbmxldCBjdXJyZW50RGVja0RpdjtcbmxldCBmb3JtVmFsdWUgPSAwO1xubGV0IGNhcmRWaWV3VmFsdWUgPSAwO1xuXG5jb25zdCBnZXRCb29rbWFya2VkQ2FyZCA9IChhRGVjaykgPT4ge1xuICAgIGNvbnNvbGUubG9nKGB0aGUgY3VycmVudCBkZWNrIGlzICR7YURlY2t9YCk7XG4gICAgY29uc3QgdGhpc0Jvb2ttYXJrID0gYURlY2suYm9va21hcms7XG4gICAgY29uc29sZS5sb2coYHRoZSBib29rbWFrciBpcyAke2FEZWNrLmJvb2ttYXJrfWApO1xuICAgIGxldCB0aGlzQ2FyZE5hbWUgPSBhRGVjay5jYXJkc0FycmF5W3RoaXNCb29rbWFya107XG4gICAgY29uc29sZS5sb2coYHRoaXMgY2FyZCBuYW1lIGlzICR7dGhpc0NhcmROYW1lfWApO1xuICAgIGNvbnN0IHR5cGUgPSB0eXBlb2YodGhpc0NhcmROYW1lKTtcbiAgICBpZih0eXBlICE9PSBcInN0cmluZ1wiKXtcbiAgICAgICAgaWYodGhpc0NhcmROYW1lICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgdGhpc0NhcmROYW1lID0gdGhpc0NhcmROYW1lLmNhcmROYW1lO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vY29uc29sZS5sb2coYGJvb2ttcmtlZCBjcmQgaXMgJHt0aGlzQ2FyZE5hbWV9YCk7XG4gICAgY29uc3QgYUNhcmQgPSBjb250cm9sbGVyLmdldENhcmQodGhpc0NhcmROYW1lKTtcbiAgICByZXR1cm4gYUNhcmQ7XG59XG5jb25zdCB1cGRhdGVDdXJyZW50Q2FyZCA9ICgpID0+IHtcbiAgICBjdXJyZW50Q2FyZCA9IGdldEJvb2ttYXJrZWRDYXJkKGN1cnJlbnREZWNrKTtcbiAgICAvL2NvbnNvbGUubG9nKGBjdXJyZW50IGNhcmQgaGFzIGJlZW4gdXBkYXRlZCB0byAke2N1cnJlbnRDYXJkLmNhcmROYW1lfWApO1xufVxuXG51cGRhdGVDdXJyZW50Q2FyZCgpO1xuZ3VpKGRlY2tBcnJheSwgY3VycmVudERlY2ssIGNhcmRWaWV3VmFsdWUsIGN1cnJlbnRDYXJkKTtcblxuY29uc3QgYWR2YW5jZUJvb2ttYXJrID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdydW5uaW5nIGFkdmFuY2UgYm9va21hcmsnKVxuICAgIGN1cnJlbnREZWNrLmJvb2ttYXJrKys7XG4gICAgaWYoY3VycmVudERlY2suY2FyZHNBcnJheVtjdXJyZW50RGVjay5ib29rbWFya10gIT09IHVuZGVmaW5lZCl7XG4gICAgICAgIHJlZnJlc2goKTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgY3VycmVudERlY2suYm9va21hcmstLTtcbiAgICAgICAgcmVmcmVzaCgpO1xuICAgIH1cbn1cblxuY29uc3QgcHJldmlvdXNCb29rbWFyayA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygncnVubmluZyBwcmV2aW91cyBib29rbWFyaycpXG4gICAgY3VycmVudERlY2suYm9va21hcmstLTtcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50RGVjay5ib29rbWFyayk7XG4gICAgaWYoY3VycmVudERlY2suY2FyZHNBcnJheVtjdXJyZW50RGVjay5ib29rbWFya10gIT09IHVuZGVmaW5lZCl7XG4gICAgICAgIGNvbnNvbGUubG9nKCdib29rbWFyayB3YXMgZGVmaW5lZCcpXG4gICAgICAgIHJlZnJlc2goKTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgY3VycmVudERlY2suYm9va21hcmsrKztcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudERlY2suYm9va21hcmspO1xuICAgICAgICByZWZyZXNoKCk7XG4gICAgfVxuICAgIFxufVxuXG5jb25zdCBzZWxlY3REZWNrID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBsZXQgbmFtZU9mRGVjayA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS10aXRsZScpO1xuICAgIGNvbnNvbGUubG9nKGBuYW1lT2ZEZWNrIGlzICR7bmFtZU9mRGVja31gKVxuICAgIC8vIGlmKG5hbWVPZkRlY2sgPT09IG51bGwpe1xuICAgIC8vICAgICBuYW1lT2ZEZWNrID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGl0bGUnKTtcbiAgICAvLyB9XG4gICAgY3VycmVudERlY2sgPSBjb250cm9sbGVyLmdldERlY2sobmFtZU9mRGVjayk7XG4gICAgcmVmcmVzaCgpO1xuXG59XG5cbmNvbnN0IGFkZERlY2sgPSAoKSA9PiB7XG4gICAgZm9ybVZhbHVlID0gMTtcbiAgICByZWZyZXNoKCk7XG59XG5cbmNvbnN0IHNhdmVEZWNrID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB0aXRsZVRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVjay10aXRsZScpLnZhbHVlO1xuICAgICAgICBjb250cm9sbGVyLmNyZWF0ZURlY2sodGl0bGVUZXh0KTtcbiAgICAgICAgY2xlYXJGb3JtKCk7XG4gICAgICAgIHJlZnJlc2goKTsgIFxufVxuXG5jb25zdCBzYXZlRGVja09uRW50ZXIgPSAoZSkgPT4ge1xuICAgIGlmKGUua2V5Q29kZSA9PT0gMTMpe1xuICAgICAgICBjb25zdCB0aXRsZVRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVjay10aXRsZScpLnZhbHVlO1xuICAgICAgICBjb250cm9sbGVyLmNyZWF0ZURlY2sodGl0bGVUZXh0KTtcbiAgICAgICAgY2xlYXJGb3JtKCk7XG4gICAgICAgIHJlZnJlc2goKTtcbiAgICB9XG5cbn1cblxuY29uc3QgY2xlYXJGb3JtID0gKCkgPT4ge1xuICAgIGZvcm1WYWx1ZSA9IDA7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdmVyTGF5SG9sZGVyJyk7XG4gICAgZm9ybS5yZW1vdmUoKTtcbn1cblxuY29uc3QgZGVsZXRlQW5kRXJhc2VEZWNrID0gKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhgZXJhc2luZyBhbmQgZGVsZXRpbmcgZGVjay4ke2N1cnJlbnREZWNrLmRlY2tOYW1lfWApXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCBkZWxldGVEaXYgPSBlLnRhcmdldDtcbiAgICBjb25zdCBkZWNrRGl2ID0gZGVsZXRlRGl2LnBhcmVudEVsZW1lbnQ7XG4gICAgY29uc3QgZGVja1RpdGxlRGl2ID0gZGVja0Rpdi5maXJzdENoaWxkO1xuICAgIGNvbnN0IGRlY2tUaXRsZSA9IGRlY2tUaXRsZURpdi50ZXh0Q29udGVudDtcbiAgICBjb25zdCBjdXJyZW50RGVja0luZGV4ID0gZGVja0FycmF5LmluZGV4T2YoY3VycmVudERlY2spO1xuICAgIGNvbnNvbGUubG9nKGB0aGUgaW5kZXggb2YgdGhlIGN1cnJlbkRlY2sgaXMgJHtjdXJyZW50RGVja0luZGV4fWApXG4gICAgY29udHJvbGxlci5kZWxldGVEZWNrKGRlY2tUaXRsZSk7XG4gICAgaWYoY3VycmVudERlY2suZGVja05hbWUgPT09IGRlY2tUaXRsZSl7XG4gICAgICAgIGNvbnNvbGUubG9nKGB0aGUgZGVjayBkZWxldGVkIHdhcyB0aGUgY3VycmVudCBkZWNrLmApXG4gICAgICAgIGlmKGRlY2tBcnJheS5sZW5ndGggPCAyKXtcbiAgICAgICAgICAgIGN1cnJlbnREZWNrID0gYWxsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY3VycmVudERlY2sgPSBkZWNrQXJyYXlbY3VycmVudERlY2tJbmRleCAtIDFdO1xuICAgICAgICAgICAgcmVmcmVzaCgpO1xuICAgICAgICB9XG4gICAgICAgIHJlZnJlc2goKTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgcmVmcmVzaCgpO1xuICAgIH1cbiAgICByZWZyZXNoKCk7XG4gICAgY29uc29sZS5sb2coYEFGVEVSIERFTEVURSBjdXJyZW50RGVjayBpcyAke2N1cnJlbnREZWNrLmRlY2tOYW1lfWApO1xufVxuXG5jb25zdCBzYXZlVGl0bGUgPSAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdzYXZpbmcgY2hhbmdlIHRvIHRpdGxlJyk7XG4gICAgY29uc3QgdGV4dCA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xuICAgIGNvbnNvbGUubG9nKHRleHQpO1xuICAgIGNvbnNvbGUubG9nKGN1cnJlbnREZWNrLmJvb2ttYXJrKTtcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50RGVjay5jYXJkc0FycmF5W2N1cnJlbnREZWNrLmJvb2ttYXJrXSk7XG4gICAgY29uc3QgdGhlQ2FyZCA9IGNvbnRyb2xsZXIuZ2V0Q2FyZChjdXJyZW50RGVjay5jYXJkc0FycmF5W2N1cnJlbnREZWNrLmJvb2ttYXJrXSk7XG4gICAgY29uc29sZS5sb2codGhlQ2FyZCk7XG4gICAgdGhlQ2FyZC5jYXJkTmFtZSA9IHRleHQ7XG4gICAgY3VycmVudERlY2suY2FyZHNBcnJheVtjdXJyZW50RGVjay5ib29rbWFya10gPSB0ZXh0O1xuICAgIGNvbnNvbGUubG9nKHRoZUNhcmQuY2FyZE5hbWUpO1xufVxuXG5jb25zdCBzYXZlU3RlcCA9IChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coYFNBVklORyBTVEVQIWApXG4gICAgaWYoZS5rZXlDb2RlID09PSAxMyl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgZGF0YUluZGV4ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4Jyk7XG4gICAgICAgIC8vY29uc3QgaW5pdGlhbFRleHQgPSBlLnRhcmdldC50ZXh0Q29udGVudDtcbiAgICAgICAgLy9jb25zdCBzdGVwU3RyaW5nID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XG4gICAgICAgIC8vY29uc29sZS5sb2coYHN0ZXBTdHJpbmcgaXMgJHtzdGVwU3RyaW5nfWApO1xuICAgICAgICBjb25zdCB0aGVDYXJkID0gY29udHJvbGxlci5nZXRDYXJkKGN1cnJlbnREZWNrLmNhcmRzQXJyYXlbY3VycmVudERlY2suYm9va21hcmtdKTtcbiAgICAgICAgLy9jb25zdCBpbmRleCA9IHRoZUNhcmQuY2FyZFN0ZXBzLmluZGV4T2Yoc3RlcFN0cmluZyk7XG4gICAgICAgIC8vY29uc29sZS5sb2coYHRoZSBjYXJkIHN0ZXBzIGFyZTogJHt0aGVDYXJkLmNhcmRTdGVwc31gKTtcbiAgICAgICAgY29uc3QgdGV4dCA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xuICAgICAgICAvL2NvbnNvbGUubG9nKGB0ZXh0IGlzICR7dGV4dH1gKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhgaW5kZXggaXMgJHtpbmRleH1gKTtcbiAgICAgICAgaWYodGV4dCAhPT0gJycpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFN0ZXAgaXMgTk9UIGVtcHR5YClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBUaGUgbGVuZ3RoIG9mIHRoZSBhcnJheSBvZiBzdGVwcyBpcyAke3RoZUNhcmQuY2FyZFN0ZXBzLmxlbmd0aH1gKVxuICAgICAgICAgICAgY29uc29sZS5sb2coYHRoZSBzdGVzcCBhdCBkYXRhSW5kZXggaXMgJHt0aGVDYXJkLmNhcmRTdGVwc1tkYXRhSW5kZXhdfWApO1xuICAgICAgICAgICAgaWYodGhlQ2FyZC5jYXJkU3RlcHMubGVuZ3RoIDwgMSl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBjYXJkIHN0ZXBzIGxlc3MgdGhhbiAxYClcbiAgICAgICAgICAgICAgICAgICAgdGhlQ2FyZC5jYXJkU3RlcHMucHVzaCh0ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZWxzZSBpZiAodGhlQ2FyZC5jYXJkU3RlcHNbZGF0YUluZGV4XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhlQ2FyZC5jYXJkU3RlcHNbZGF0YUluZGV4XSA9IHRleHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGVDYXJkLmNhcmRTdGVwcy5wdXNoKHRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbmV3U3RlcERpdiA9IGRyYXdDYXJkU3RlcCgpO1xuICAgICAgICAgICAgbmV3U3RlcERpdi5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHNhdmVTdGVwKTtcbiAgICAgICAgICAgIG5ld1N0ZXBEaXYuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHN0b3BFbnRlckNhcmQpO1xuICAgICAgICAgICAgbmV3U3RlcERpdi5mb2N1cygpO1xuXG4gICAgICAgICAgICBlLnRhcmdldC5ibHVyKCk7XG4gICAgICAgICAgICBjb25zdCBjYXJkU3RlcHNEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZFN0ZXBzJyk7XG4gICAgICAgICAgICBjb25zdCB0aGlzU3RlcCA9IGNhcmRTdGVwc0Rpdi5sYXN0Q2hpbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIGlmKGUudGFyZ2V0Lmhhc0ZvY3VzKCkgPT09IGZhbHNlKXtcbiAgICAgICAgICAgIC8vICAgICB0aGlzU3RlcC5yZW1vdmUoKTtcbiAgICAgICAgICAgIC8vIH0gIFxufVxuXG5jb25zdCBkZWxldGVBbmRFcmFzZUNhcmQgPSAoKSA9PiB7XG4gICAgY29uc3QgdGhpc0NhcmROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmRUaXRsZScpLnRleHRDb250ZW50O1xuICAgIGNvbnNvbGUubG9nKGB0aGUgY2FyZCBuYW1lIGdvdHRlbiBpcyAke3RoaXNDYXJkTmFtZX1gKTtcbiAgICBjb25zdCB0aGlzQ2FyZCA9IGNvbnRyb2xsZXIuZ2V0Q2FyZCh0aGlzQ2FyZE5hbWUpO1xuICAgIGNvbnNvbGUubG9nKGB0aGUgY2FyZCByZXR1cm5lZCB3YXMgJHt0aGlzQ2FyZC5jYXJkTmFtZX1gKTtcbiAgICBpZihjdXJyZW50RGVjayA9PT0gYWxsKXtcbiAgICAgICAgdGhpc0NhcmQuY2FyZERlY2tzLmZvckVhY2goZGVja0VsZW1lbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGhpc0RlY2sgPSBjb250cm9sbGVyLmdldERlY2soZGVja0VsZW1lbnQpO1xuICAgICAgICAgICAgY29udHJvbGxlci5kZWxldGVDYXJkRnJvbURlY2sodGhpc0NhcmQsIHRoaXNEZWNrKTtcbiAgICAgICAgfSlcbiAgICAgICAgY29udHJvbGxlci5kZWxldGVDYXJkKHRoaXNDYXJkKTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgY29udHJvbGxlci5kZWxldGVDYXJkRnJvbURlY2sodGhpc0NhcmQsIGN1cnJlbnREZWNrKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coYGN1cnJlbnQgZGVjayBpcyBzdGlsbCAke2N1cnJlbnREZWNrLmRlY2tOYW1lfWApO1xuICAgIGNvbnNvbGUubG9nKGBjdXJyZW50IGRlY2sgbGVuZ3RoIGlzICR7Y3VycmVudERlY2suY2FyZHNBcnJheS5sZW5ndGh9YCk7XG4gICAgaWYoY3VycmVudERlY2suY2FyZHNBcnJheS5sZW5ndGggPCAyKXtcbiAgICAgICAgY3VycmVudERlY2suYm9va21hcmsgPSAwO1xuICAgICAgICBjb25zb2xlLmxvZyhgY3VycmVudCBkZWNrIGJvb2ttYXJrIGlzIG5vdyR7Y3VycmVudERlY2suYm9va21hcmt9YCk7XG4gICAgfVxuICAgIHJlZnJlc2goKTsgXG4gICAgLy8gY29udHJvbGxlci5kZWxldGVDYXJkKCk7XG4gICAgLy9wb3B1bGF0ZUNhcmQoKTtcbn1cblxuY29uc3QgYWRkQ2FyZCA9ICgpID0+IHtcbiAgICBmb3JtVmFsdWUgPSAyO1xuICAgIHJlZnJlc2goKTsgICAgIFxufVxuXG5cbmNvbnN0IGVyYXNlR1VJID0gKCkgPT4ge1xuICAgIGNvbnN0IGRlY2tzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGVjaycpO1xuICAgIEFycmF5LmZyb20oZGVja3MpLmZvckVhY2goZGVja0VsZW1lbnQgPT4gXG4gICAgICAgIGRlY2tFbGVtZW50LnJlbW92ZSgpKTtcbiAgICBjb25zdCBjYXJkQXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkQXJlYScpO1xuICAgIGNvbnN0IGNhcmRzID0gY2FyZEFyZWEuY2hpbGROb2RlcztcbiAgICBBcnJheS5mcm9tKGNhcmRzKS5mb3JFYWNoKGNhcmRFbGVtZW50ID0+IHtcbiAgICAgICAgY2FyZEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfSlcbn1cblxuLy8gY29uc3QgdXBkYXRlQ3VycmVudERlY2tEaXYgPSAoKSA9PiB7XG4vLyAgICAgLy8gY29uc29sZS5sb2coJ2ltIHVwZGF0ZWluZyB0aGUgY3VycmVudCBESVYnKVxuLy8gICAgIGNvbnN0IHRoZUN1cnJlbnREZWNrTmFtZSA9IGN1cnJlbnREZWNrLmRlY2tOYW1lO1xuLy8gICAgIC8vIGNvbnNvbGUubG9nKCd0aGVDdXJyZW50RGVja05hbWUgaXMgKyAnICsgdGhlQ3VycmVudERlY2tOYW1lKTtcbi8vICAgICBjb25zdCBkZWNrRGl2cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RlY2snKTtcbi8vICAgICBBcnJheS5mcm9tKGRlY2tEaXZzKS5mb3JFYWNoKGRlY2tEaXYgPT4ge1xuLy8gICAgICAgICBjb25zdCB0aXRsZURpdiA9IGRlY2tEaXYuY2hpbGRyZW5bMF07XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGRlY2tEaXYpO1xuLy8gICAgICAgICBjb25zb2xlLmxvZyh0aGVDdXJyZW50RGVja05hbWUpO1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhgZG9lcyAke3RpdGxlRGl2fSBhbmQgJHt0aGVDdXJyZW50RGVja05hbWV9IG1hdGNoP2ApXG4vLyAgICAgICAgIGlmKHRpdGxlRGl2LnRleHRDb250ZW50ID09PSB0aGVDdXJyZW50RGVja05hbWUpe1xuLy8gICAgICAgICAgICAgY3VycmVudERlY2tEaXYgPSBkZWNrRGl2O1xuLy8gICAgICAgICB9XG4vLyAgICAgfSlcbiAgICBcbi8vICAgICAvLyBjb25zb2xlLmxvZyhkZWNrRGl2cyk7XG4vLyAgICAgLy8gQXJyYXkuZnJvbShkZWNrRGl2cykuZm9yRWFjaChkZWNrRGl2ID0+IHtcbi8vICAgICAvLyAgICAgY29uc29sZS5sb2coJ3RoZSBkZWNrVGl0bGVpcyAnKyBkZWNrVGl0bGVEaXYpO1xuLy8gICAgIC8vICAgICBpZihkZWNrRGl2LmZpcnN0RWxlbWVudENoaWxkLnRleHRDb250ZW50ID09PSB0aGVDdXJyZW50RGVja05hbWUpe1xuLy8gICAgIC8vICAgICAgICAgY3VycmVudERlY2tEaXYgPSBkZWNrRGl2O1xuLy8gICAgIC8vICAgICB9XG4vLyAgICAgLy8gfSlcbi8vIH1cblxuLy8gY29uc3QgdXBkYXRlQ3VycmVudERlY2sgPSAoZSkgPT4ge1xuLy8gICAgIHJlbW92ZVNlbGVjdGVkU3R5bGUoKTtcbi8vICAgICAvLyBjb25zb2xlLmxvZygnaW0gVVBEQVRJbkchJyk7XG4vLyAgICAgY29uc29sZS5sb2coZS50YXJnZXQuaW5uZXJIVE1MKTtcbi8vICAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RlY2snKSl7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCdjbGlja2Vkb24gREVDSyBESVYnKVxuLy8gICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGl0bGUnKSlcbi8vICAgICAgICAgY29uc3QgdGhlRGVja05hbWUgPSAoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXRpdGxlJykpO1xuLy8gICAgICAgICBjdXJyZW50RGVjayA9IGNvbnRyb2xsZXIuZ2V0RGVjayh0aGVEZWNrTmFtZSk7XG4vLyAgICAgfVxuLy8gICAgIGVsc2Uge1xuLy8gICAgICAgICBjb25zb2xlLmxvZygnY2xpY2tlZG9uIFRJVExFIERJVicpXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnRleHRDb250ZW50KVxuLy8gICAgICAgICBjb25zdCB0aGVEZWNrTmFtZSA9IChlLnRhcmdldC50ZXh0Q29udGVudCk7XG4vLyAgICAgICAgIGN1cnJlbnREZWNrID0gY29udHJvbGxlci5nZXREZWNrKHRoZURlY2tOYW1lKTtcbi8vICAgICB9XG4gICAgXG4vLyAgICAgLy8gY29uc29sZS5sb2coJ2dvbm5hIHVwZGF0ZSBjdXJyZW50IGRlY2sgZGl2Jyk7XG4vLyAgICAgdXBkYXRlQ3VycmVudERlY2tEaXYoKTtcbi8vICAgICAvLyBjb25zb2xlLmxvZygnZ29ubmEgc3R5bGUgY3VycmVudCBkZWNEaXYgJyArIGN1cnJlbnREZWNrRGl2KTtcbi8vICAgICBzdHlsZUN1cnJlbnQoKTtcbi8vICAgICBwb3B1bGF0ZUNhcmQoKTtcbi8vIH1cblxuLy8gY29uc3QgdXBkYXRlQ3VycmVudERlY2tCeU5hbWUgPSAobmFtZSkgPT4ge1xuLy8gICAgIHJlbW92ZVNlbGVjdGVkU3R5bGUoKTtcbi8vICAgICAvLyBjb25zb2xlLmxvZygnaW0gVVBEQVRJbkchJyk7XG4gICAgXG4vLyAgICAgY29uc3QgdGhlRGVja05hbWUgPSBuYW1lO1xuLy8gICAgIGN1cnJlbnREZWNrID0gY29udHJvbGxlci5nZXREZWNrKHRoZURlY2tOYW1lKTtcbi8vICAgICAvLyBjb25zb2xlLmxvZygnZ29ubmEgdXBkYXRlIGN1cnJlbnQgZGVjayBkaXYnKTtcbi8vICAgICB1cGRhdGVDdXJyZW50RGVja0RpdigpO1xuLy8gICAgIC8vIGNvbnNvbGUubG9nKCdnb25uYSBzdHlsZSBjdXJyZW50IGRlY0RpdiAnICsgY3VycmVudERlY2tEaXYpO1xuLy8gICAgIHN0eWxlQ3VycmVudCgpO1xuLy8gICAgIHBvcHVsYXRlQ2FyZCgpO1xuLy8gfVxuXG5jb25zdCBzYXZlRGF0ZSA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3QgdGhpc0NhcmROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmRUaXRsZScpLnRleHRDb250ZW50O1xuICAgIGNvbnN0IHRoaXNDYXJkID0gY29udHJvbGxlci5nZXRDYXJkKHRoaXNDYXJkTmFtZSk7XG4gICAgaWYoZS5rZXlDb2RlID09PSAxMyl7XG4gICAgICAgIHRoaXNDYXJkLmNhcmREYXRlID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgIFxuICAgIH1cbiAgICByZWZyZXNoKCk7XG59XG5cbmNvbnN0IGVkaXREYXRlID0gKGUpID0+IHtcbiAgICBjb25zdCBkYXRlUGlja2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkYXRlUGlja2VyLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gICAgZGF0ZVBpY2tlci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2lucHV0Jyk7XG4gICAgZGF0ZVBpY2tlci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgZS50YXJnZXQuYXBwZW5kQ2hpbGQoZGF0ZVBpY2tlcik7XG4gICAgZGF0ZVBpY2tlci5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgc2F2ZURhdGUpO1xufVxuXG5jb25zdCBzYXZlRGVja1RpdGxlID0gKGUpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZygnc2F2aW5nIGNoYW5nZSB0byB0aXRsZScpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IHRleHQgPSBlLnRhcmdldC50ZXh0Q29udGVudDtcbiAgICBjdXJyZW50RGVjay5kZWNrTmFtZSA9IHRleHQ7XG59XG5cbmNvbnN0IHN0b3BFbnRlciA9IChlKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coJ3NhdmluZyBjaGFuZ2UgdG8gdGl0bGUnKTtcbiAgICBpZihlLmtleUNvZGUgPT09IDEzKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzYXZlRGVja1RpdGxlKGUpO1xuICAgICAgICBlLnRhcmdldC5ibHVyKCk7XG5cbiAgICB9XG4gICBcbn1cbmNvbnN0IHN0b3BFbnRlckNhcmQgPSAoZSkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKCdzYXZpbmcgY2hhbmdlIHRvIHRpdGxlJyk7XG4gICAgaWYoZS5rZXlDb2RlID09PSAxMyl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2F2ZVN0ZXAoZSk7XG4gICAgfSAgXG59XG4vLyBjb25zdCBlcmFzZVN0ZXBzID0gKCkgPT4ge1xuLy8gICAgIGNvbnN0IHN0ZXBzRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmRTdGVwcycpO1xuLy8gICAgIGNvbnN0IHN0ZXBzID0gc3RlcHNEaXYuY2hpbGRyZW47XG4vLyAgICAgQXJyYXkuZnJvbShzdGVwcykuZm9yRWFjaChzdGVwRWxlbWVudCA9PiB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGByZW1vdmluZyAke3N0ZXBFbGVtZW50fSBmcm9tICR7c3RlcHNEaXZ9YClcbi8vICAgICAgICAgc3RlcEVsZW1lbnQucmVtb3ZlKCk7XG4vLyAgICAgfSlcbiAgICBcbi8vIH1cbi8vIGNvbnN0IHNob3dGb3JtID0gKCkgPT4ge1xuLy8gICAgIC8vIGNvbnNvbGUubG9nKCdzaG93aW5nIGZvcm0hJyk7XG4vLyAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdmVyTGF5SG9sZGVyJyk7XG4vLyAgICAgZm9ybS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuLy8gfVxuLy8gY29uc3QgaGlkZUZvcm0gPSAoKSA9PiB7XG4vLyAgICAgY29uc29sZS5sb2coJ2hpZGluZyBmb3JtIScpO1xuLy8gICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlckxheUhvbGRlcicpO1xuLy8gICAgIGZvcm0uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuLy8gICAgIGxldCBhRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0ZXAnKTtcbi8vICAgICBhRGl2LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbi8vICAgICBhRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKTtcbi8vICAgICBhRGl2LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbi8vICAgICBhRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmREZWNrJyk7XG4vLyAgICAgYURpdi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4vLyB9XG5jb25zdCBzYXZlQ2FyZCA9ICgpID0+IHtcbiAgICBsZXQgaXNDdXJyZW50ID0gMDtcbiAgICBsZXQgYUNhcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZC10aXRsZScpLnZhbHVlO1xuICAgIGFDYXJkID0gY29udHJvbGxlci5jcmVhdGVDYXJkKGFDYXJkKTtcbiAgICBjb25zdCBzdGVwQ29sbGVjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N0ZXAnKTtcbiAgICBBcnJheS5mcm9tKHN0ZXBDb2xsZWN0aW9uKS5mb3JFYWNoKHN0ZXAgPT4ge1xuICAgICAgICBhQ2FyZC5jYXJkU3RlcHMucHVzaChzdGVwLnZhbHVlKTtcbiAgICB9KVxuXG4gICAgYUNhcmQuY2FyZERhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpLnZhbHVlO1xuICAgIGNvbnN0IGRlY2tMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmREZWNrJyk7XG4gICAgY29uc3QgY29sbGVjdGlvbiA9IGRlY2tMaXN0LnNlbGVjdGVkT3B0aW9ucztcbiAgICBjb25zb2xlLmxvZyhgdGhlIGN1cnJlbnQgZGVjayB3YXMgJHtjdXJyZW50RGVja31gKTtcbiAgICBpZihjb2xsZWN0aW9uLmxlbmd0aCA8IDIgKXtcbiAgICAgICAgY29uc3QgdGhlU2VsZWN0ZWREZWNrID0gY29sbGVjdGlvblswXS50ZXh0Q29udGVudDtcbiAgICAgICAgY29uc3QgdGhlRGVja05hbWUgPSB0aGVTZWxlY3RlZERlY2s7XG4gICAgICAgIGN1cnJlbnREZWNrID0gY29udHJvbGxlci5nZXREZWNrKHRoZURlY2tOYW1lKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coYHRoZSBjdXJyZW50IGRlY2sgaXMgbm93ICR7Y3VycmVudERlY2t9YCk7XG4gICAgY29uc29sZS5sb2coYHNlbGVjdGVkIG9wdGlvbnMgY29sbGVjdGlvbiBpcyAke2NvbGxlY3Rpb259YCk7XG4gICAgQXJyYXkuZnJvbShjb2xsZWN0aW9uKS5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGB0aGlzIG9wdGlvbiBpcyAke29wdGlvbn0gaXQncyB2YWx1ZSBpcyAke29wdGlvbi52YWx1ZX1gKTtcbiAgICAgICAgICAgIGFDYXJkLmNhcmREZWNrcy5wdXNoKG9wdGlvbi52YWx1ZSk7IFxuICAgICAgICAgICAgaWYob3B0aW9uLnZhbHVlID09PSBjdXJyZW50RGVjay5kZWNrTmFtZSl7XG4gICAgICAgICAgICAgICAgaXNDdXJyZW50ID0gMTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtvcHRpb24udmFsdWV9IGlzICR7Y3VycmVudERlY2suZGVja05hbWV9YCk7XG4gICAgICAgICAgICB9IFxuICAgIH0pXG4gICAgYUNhcmQuY2FyZERlY2tzLmZvckVhY2goZGVja05hbWVTdHJpbmcgPT4ge1xuICAgICAgICBpZihkZWNrTmFtZVN0cmluZyAhPT0gJ2FsbCcpe1xuICAgICAgICAgICAgY29uc3QgYURlY2sgPSBjb250cm9sbGVyLmdldERlY2soZGVja05hbWVTdHJpbmcpXG4gICAgICAgICAgICBjb250cm9sbGVyLmFkZENhcmR0b0RlY2soYUNhcmQsIGFEZWNrKTtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgaWYoaXNDdXJyZW50ID09PSAxKXtcbiAgICAgICAgY29uc29sZS5sb2coYCR7Y3VycmVudERlY2suYm9va21hcmt9IGlzIHRoZSBjdXJyZW50IGJvb2ttYXJrIG9mIHRoZSBjdXJyZW50IGRlY2suYClcbiAgICAgICAgY29uc29sZS5sb2coYGJ1dCBub3cgaXQgd2lsbCBiZSAke2N1cnJlbnREZWNrLmNhcmRzQXJyYXkuaW5kZXhPZihhQ2FyZC5jYXJkTmFtZSl9YCk7XG4gICAgICAgIC8vIGNvbnN0IHRoZUNhcmRCb29rbWFyayA9IGN1cnJlbnREZWNrLmNhcmRzQXJyYXkuaW5kZXhPZihhQ2FyZC5jYXJkTmFtZSk7XG4gICAgICAgIGN1cnJlbnREZWNrLmJvb2ttYXJrID0gY3VycmVudERlY2suY2FyZHNBcnJheS5pbmRleE9mKGFDYXJkLmNhcmROYW1lKTtcbiAgICAgICAgY29uc29sZS5sb2coYHRoZSBjdXJyZW50IGRlY2sgYm9va21hcmsgaXMgbm93ICR7Y3VycmVudERlY2suYm9va21hcmt9YCk7XG4gICAgICAgIGlzQ3VycmVudCA9IDA7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGBzYXZpbmcgY2FyZC4gY3VycmVudCBkZWNrIGlzICR7Y3VycmVudERlY2t9YCk7XG4gICAgY29uc29sZS5sb2coY3VycmVudERlY2suYm9va21hcmspO1xuICAgIGNsZWFyRm9ybSgpO1xuICAgIHJlZnJlc2goKTtcbiAgICBcbn1cbi8vIGNvbnN0IHNhdmVGb3JtID0gKCkgPT4ge1xuLy8gICAgIC8vIGNvbnNvbGUubG9nKCdzYXZlIHR5cGUgaXM6ICcrIGZvcm1UeXBlKTtcbi8vICAgICBpZihmb3JtVHlwZSA9PT0nZGVjaycpe1xuLy8gICAgICAgICBjb25zb2xlLmxvZygnc2F2aW5nIGRlY2shJylcbi8vICAgICAgICAgc2F2ZURlY2soKTtcbi8vICAgICB9XG4vLyAgICAgZWxzZSBpZihmb3JtVHlwZSA9PT0gJ2NhcmQnKXtcbi8vICAgICAgICAgY29uc29sZS5sb2coJ3NhdmluZyBjYXJkIScpXG4vLyAgICAgICAgIHNhdmVDYXJkKCk7XG4vLyAgICAgICAgIHBvcHVsYXRlQ2FyZCgpO1xuLy8gICAgIH1cbi8vIH1cbmNvbnN0IHNldERlY2tEZWxldGVMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgY29uc3QgZGl2Q29sbGVjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RlY2tEZWxldGUnKTtcbiAgICBBcnJheS5mcm9tKGRpdkNvbGxlY3Rpb24pLmZvckVhY2goZGl2ID0+IHtcbiAgICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlQW5kRXJhc2VEZWNrKVxuICAgIH0pXG59XG5cbmNvbnN0IHNlbGVjdERlY2tMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgY29uc3QgZGVja0NvbGxlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkZWNrJyk7XG4gICAgQXJyYXkuZnJvbShkZWNrQ29sbGVjdGlvbikuZm9yRWFjaChkZWNrRGl2ID0+IHtcbiAgICAgICBkZWNrRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VsZWN0RGVjayk7XG4gICAgfSlcbiAgICBjb25zdCBkZWNrVGl0bGVEaXZzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGVja1RpdGxlJyk7XG4gICAgQXJyYXkuZnJvbShkZWNrVGl0bGVEaXZzKS5mb3JFYWNoKGRlY2tUaXRsZURpdiA9PiB7XG4gICAgICAgIGRlY2tUaXRsZURpdi5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHNhdmVEZWNrVGl0bGUpO1xuICAgICAgICBkZWNrVGl0bGVEaXYuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHN0b3BFbnRlcik7XG4gICAgfSlcbiAgICBcbn1cblxuY29uc3Qgc2V0UGx1c0xpc3RlbmVycyA9ICgpID0+IHtcbiAgICBjb25zdCBhZGREZWNrRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZERlY2tCdXR0b24nKTtcbiAgICBhZGREZWNrRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkRGVjayk7XG4gICAgY29uc3QgYWRkQ2FyZERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRDYXJkQnV0dG9uJyk7XG4gICAgYWRkQ2FyZERpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZENhcmQpO1xufVxuXG5jb25zdCBzZXRGb3JtQnV0dG9uTGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbmZpcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hlY2snKTtcbiAgICBjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FuY2VsJyk7XG4gICAgaWYoZm9ybVZhbHVlID09PSAxKXtcbiAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWNrLXRpdGxlJyk7XG4gICAgaWYodGl0bGVJbnB1dCAhPT0gbnVsbCl7XG4gICAgICAgIHRpdGxlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBzYXZlRGVja09uRW50ZXIpO1xuICAgIH1cbiAgICBpZihjb25maXJtICE9PSBudWxsKXtcbiAgICAgICAgY29uZmlybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNhdmVEZWNrKTtcbiAgICB9XG4gICAgfVxuICAgIGlmKGZvcm1WYWx1ZSA9PT0gMil7XG4gICAgICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZC10aXRsZScpO1xuICAgIGlmKHRpdGxlSW5wdXQgIT09IG51bGwpe1xuICAgICAgICAvL3RpdGxlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBzYXZlQ2FyZE9uRW50ZXIpO1xuICAgIH1cbiAgICBpZihjb25maXJtICE9PSBudWxsKXtcbiAgICAgICAgY29uZmlybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNhdmVDYXJkKTtcbiAgICB9XG4gICAgfVxuICAgIFxuICAgIGlmKGNhbmNlbCAhPT0gbnVsbCl7XG4gICAgICAgIGNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsZWFyRm9ybSk7XG4gICAgfVxuICAgIFxufVxuXG5jb25zdCBzZXRDYXJkbGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIGNvbnN0IGNhcmREZWxldGVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZERlbGV0ZScpXG4gICAgaWYoY2FyZERlbGV0ZUJ1dHRvbiAhPT0gbnVsbCl7XG4gICAgICAgIGNhcmREZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVBbmRFcmFzZUNhcmQpO1xuICAgIH1cbiAgICBjb25zdCBzdGVwRGl2cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N0ZXBEaXYnKTtcbiAgICBpZihzdGVwRGl2cyAhPT0gbnVsbCl7XG4gICAgQXJyYXkuZnJvbShzdGVwRGl2cykuZm9yRWFjaChzdGVwRGl2ID0+IHtcbiAgICAgICBzdGVwRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBzYXZlU3RlcCk7XG4gICAgfSlcbiAgICB9XG4gICAgY29uc3QgY2FyZFRpdGxlRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmRUaXRsZScpO1xuICAgIGlmKGNhcmRUaXRsZURpdiAhPT0gbnVsbCl7XG4gICAgICAgIGNhcmRUaXRsZURpdi5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHNhdmVUaXRsZSk7XG4gICAgICAgIGNhcmRUaXRsZURpdi5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgc3RvcEVudGVyQ2FyZCk7XG4gICAgfVxuICAgIGNvbnN0IGNhcmRQbHVzRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmRQbHVzJyk7XG4gICAgaWYoY2FyZFBsdXNEaXYgIT09IG51bGwpe1xuICAgICAgICBjYXJkUGx1c0Rpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZENhcmQpO1xuICAgIH1cbiAgICBjb25zdCBjYXJkRGF0ZURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkRGF0ZScpO1xuICAgIGlmKGNhcmREYXRlRGl2ICE9PSBudWxsKXtcbiAgICAgICAgY2FyZERhdGVEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlZGl0RGF0ZSk7XG4gICAgfVxuXG59XG5cbmNvbnN0IGFkZEV2ZW50TGlzdGVuZXJzID0gKGVsZW1lbnROYW1lLCBhRnVuY3Rpb24pID0+e1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtlbGVtZW50TmFtZX1gKTtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYUZ1bmN0aW9uKTtcbn1cblxuY29uc3QgYWRkRm9yd2FyZEJhY2t3YXJkTGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCdmb3J3YXJkQnV0dG9uJywgYWR2YW5jZUJvb2ttYXJrKTtcbiAgICBhZGRFdmVudExpc3RlbmVycygnYmFja3dhcmRCdXR0b24nLCBwcmV2aW91c0Jvb2ttYXJrKTtcbn1cblxuY29uc3Qgc2V0TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIHNlbGVjdERlY2tMaXN0ZW5lcnMoKTtcbiAgICBzZXRQbHVzTGlzdGVuZXJzKCk7XG4gICAgc2V0Rm9ybUJ1dHRvbkxpc3RlbmVycygpO1xuICAgIHNldERlY2tEZWxldGVMaXN0ZW5lcnMoKTtcbiAgICBzZXRDYXJkbGlzdGVuZXJzKCk7XG4gICAgYWRkRm9yd2FyZEJhY2t3YXJkTGlzdGVuZXJzKCk7XG59XG5cbmNvbnN0IHJlZnJlc2ggPSAoKSA9PiB7XG4gICAgdXBkYXRlQ3VycmVudENhcmQoKTtcbiAgICBlcmFzZUdVSSgpO1xuICAgIGd1aShkZWNrQXJyYXksIGN1cnJlbnREZWNrLCBmb3JtVmFsdWUsIGNhcmRWaWV3VmFsdWUsIGN1cnJlbnRDYXJkKTtcbiAgICBzZXRMaXN0ZW5lcnMoKVxufVxuXG5yZWZyZXNoKCk7XG5cbi8vIGNvbnN0IGVyYXNlVG9wQ2FyZCA9ICgpID0+IHtcbi8vICAgICBjb25zdCBvbGRDYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvcENhcmQnKTtcbi8vICAgICBvbGRDYXJkLnJlbW92ZSgpO1xuLy8gICAgIGRyYXdUb3BDYXJkKCk7XG4vLyB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
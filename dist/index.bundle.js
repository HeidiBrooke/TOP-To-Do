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
___CSS_LOADER_EXPORT___.push([module.id, "/* *{\n    box-sizing: border-box;\n} */\nbody {\n    padding: 0px;\n    margin: 0px;\n    position: relative;\n    font-size: 14px;\n    \n    /* height: 100vh; */\n    \n}\n\ndiv {\n    /* border-top: 2px solid white; */\n    padding: 4px;\n\n}\n#content {\n    margin: 0px;\n    width: 100vw;\n    /* height: 100vh; */\n    display: flex;\n    flex-direction: column;\n    background-color: rgb(63, 135, 152);\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    align-items: center;\n    position: relative;\n}\n\n#container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 4px;\n    padding: 20px;\n    margin: 20px 0;\n    width: 480px;\n    height: 100vh;  \n}\n\n#header{\n    display: flex;\n    width: 100%;\n    height: 100px;\n}\n\n#deckDock{\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 200px;\n}\n\n#deckArea{\n    display: flex;\n    flex-direction: row;\n    gap: 7px;\n}\n\n#cardDock{\n    padding: 4px;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n}\n\n#logo, .title{\n    width: 100px;\n    font-size: 32px;\n    font-weight: 600;\n    font-family: 'Raleway', sans-serif;\n    color: white;\n    border: none;\n}\n\n.title{\n    width: auto;\n    font-size: 24px;\n}\n\n\n#cardArea{\n    display: grid;\n    grid-template-columns: 60px 1fr 60px;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    border: none;\n}\n\n.deck, .blankDeck{\n    /* pointer-events: none; */\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: repeat(5, 1fr);\n    width: 60px;\n    height: 90px;\n    border-radius: 4px;\n    background-color: white;\n    /* box-shadow: rgba(0, 0, 0, 0.16) 0 7px 9px -7px;\n    box-shadow: rgba(53, 82, 94, 0.3) 1px 7px 7px 1px; */\n    justify-items: center;\n    justify-content: space-between;\n    align-items: center;\n    /* padding: 0px; */\n}\n\n.blankDeck{\n    background-color:  rgb(46, 99, 111);\n    \n}\n\n.menu{\n    border: none;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: left;\n    gap: 4px;\n}\n\n#deckTitle, #cardTitle, #cardDate, #cardSteps{\n    margin-top: 8px;\n    font-family: 'Raleway', sans-serif;\n    color: rgb(63, 135, 152);\n    font-weight: 600;\n    text-transform: uppercase;\n    text-align: center;\n    text-justify: center;\n}\n\n#deckTitle{\n    margin: 0px;\n    grid-column: 1/4;\n    grid-row: 1/5;\n    /* background-color: aqua; */\n    /* width: 100%;\n    height: 100%; */\n    cursor: pointer;\n    /* opacity: 50%; */\n}\n\n.selectedDeck {\n    box-shadow: rgb(102, 220, 241) 0 0 3px 2px;\n    /* box-shadow: rgba(53, 82, 94, 0.3) 1px 9px 9px 1px; */\n}\n\n#addCardButton, #addDeckButton{\n    font-size: 48px;\n    cursor: pointer;\n}\n\n#addCardButton:hover, #addDeckButton:hover, .nextButton:hover{\n    /* text-shadow:  0 0 3px 2px, rgb(102, 173, 241); */\n    text-shadow: -1px 1px 2px rgb(102, 220, 241),\n\t\t\t\t  1px 1px 2px rgb(102, 220, 241),\n\t\t\t\t  1px -1px 0 rgb(102, 220, 241),\n\t\t\t\t  -1px -1px 0 rgb(102, 220, 241);\n    \n}\n.nextButton{\n    justify-self: right;\n    color: white;\n    color: rgb(80, 163, 182);\n    font-family: 'Raleway', sans-serif;\n    font-size: 72px;\n    border: none;\n    cursor: pointer;\n}\n\n#forwardButton{\n    justify-self: left;\n    grid-column: 3/4;\n}\n\n#backwardButton{\n    justify-self: right;\n    grid-column: 1/2;\n    grid-row: 1/2;\n}\n\n\n.cardBig{\n    grid-column: 2/3;\n    grid-row: 1/2;\n    justify-self: center;\n    display: flex;\n    width: 240px;\n    height: 360px;\n    border-radius: 16px;\n    background-color: white;\n    box-shadow: rgba(53, 82, 94, 0.3) 1px 9px 9px 1px;\n    justify-content: center;\n    align-items: center;\n    z-index: 1;\n\n}\n\n#topCard{\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: repeat(8, 1fr);\n\n    /* flex-direction: column; */\n}\n\n.bigPlus, .littlePlus{\n    grid-column: 1/5;\n    grid-row: 4/6;\n    cursor: pointer;\n    font-size: 72px;\n    color: rgb(63, 135, 152);\n    font-family: 'Raleway', sans-serif;\n    font-weight: 600;\n    align-self: center;\n    justify-self: center;\n    \n}\n\n.littlePlus{\n    grid-row: 3/4;\n}\n\n.stack0{\n    background-color: white;\n    position: absolute;\n    top: 6px;\n    left: 63px;\n    /* z-index: -1; */\n    transform: rotate(2deg);\n}\n\n.stack1{\n    position: absolute;\n    top: 3px;\n    left: 58px;\n    /* z-index: -2; */\n    transform: rotate(1deg);\n}\n\n.stack2{\n    position: absolute;\n    top: 4px;\n    left: 120px;\n    /* z-index: -3; */\n    transform: rotate(6deg);\n}\n\n.editSize{\n    /* position: absolute;\n    top: 180px; */\n    width: 300px;\n    height: 450px;\n    z-index: 3;\n}\n\n.overLayHolder{\n    position: absolute;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100vw;\n    height: 100vh; \n    \n}\n\n.overlay{\n    display: grid;\n    position: absolute;\n    background-color: rgb(37, 107, 107);\n    opacity: 60%;\n    height: 100vh;\n    width: 100vw;\n    z-index: 2;\n    padding: 20px; \n}\n\n.formDiv{\n    display: flex;\n    flex-direction: column;\n    padding-top: 100px;\n    gap: 20px;\n    width: 300px;\n    height: 600px;\n    z-index: 3;\n}\n\n.submitButtonsDiv{\n    display: flex;\n    flex-direction: row;\n    gap: 16px;\n    height: 44px;\n}\n\n.cardForm{\n    display: grid;\n    gap: 16px;\n    width:300px;\n    height: 410px;\n    grid-template-columns: 1fr 1.5fr 1.5fr 1fr;\n    grid-template-rows: repeat(7, 1fr);\n    padding: 20px;\n}\n\n.input, .check{\n    padding: 8px;\n    grid-column: 1/5;\n    border: none;\n    outline: none;\n    border-radius: 16px;\n    background-color: rgb(242, 242, 242);\n    color: rgb(80, 163, 182);\n    font-family: 'Raleway', sans-serif;\n    font-size: 18px;\n    text-align: center;\n}\n\n.input:hover{\n    box-shadow: rgb(102, 173, 241) 0 0 3px 2px;\n    box-shadow: rgb(102, 220, 241) 0 0 3px 2px;\n}\n\n#step{\n    grid-column: 2/5;\n    background-color: white;\n    font-size: 15px;\n    display: flex;\n    align-items: flex-start;\n    text-align: left;\n    text-justify: left;\n}\n\n#stepHolder{\n    grid-column: 1/5;\n    grid-row: 3/6;\n    /* background-color: aquamarine; */\n    display: flex;\n    flex-direction: column;\n}\n\n#preStep{\n    grid-column: 1/2;\n    grid-row: 3/4;\n    background-color: white;\n    font-size: 24px;\n    font-weight: 600;\n}\n\n\n.stepDiv{\n    /* background-color: aqua; */\n}\n\n\n#step:hover, #preStep:hover{\n    box-shadow: none;\n}\n\n.cardTitle{\n   grid-row: 1/2;\n   grid-column: 1/5;\n   text-align: center;\n}\n\n#cardSteps{\n    grid-column: 1/5;\n    grid-row: 2/7;\n    font-size: 14px;\n    text-transform: capitalize;\n    /* margin: 4px;\n    margin-top: 8px; */\n}\n\n#cardDate{\n    grid-row: 7/8;\n    grid-column: 1/5;\n    text-align: center;\n}\n\n#cardDelete{\n    margin-left: 12px;\n    grid-column: 1/2;\n    grid-row: 8/9;\n    font-size: 16px;\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    background-color: rgb(80, 163, 182);\n    color: white;\n    text-align: center;\n    text-justify: center;\n    cursor: pointer;\n}\n\n#deckDelete{\n    grid-column: 1/2;\n    grid-row: 5/6;\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    background-color: rgb(80, 163, 182);\n    color: white;\n    font-family: 'Raleway', sans-serif;\n    font-size: 9px;\n    font-weight: 600;\n    text-align: center;\n    text-justify: center; \n    align-self: flex-start;\n    cursor: pointer;\n}\n\n.check{\n    background-color: white;\n    width: 50px;\n    z-index: 3;\n    text-align: center;\n    vertical-align: center;\n}\n\n.grow { \n    cursor: pointer;\n    transition: all .1s ease-in-out; \n    }\n    \n.grow:hover { \n    transform: scale(1.05); \n    }\n\n.check:hover{\n    font-size: 24px;\n}\n\n[contenteditable] {\n    /* outline: 0px solid transparent; */\n  }\n\nul{\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    margin-right: 12px;\n}\nli {\n    text-align: start;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'); \n@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=Oswald:wght@200;300;400;500;600;700&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\n/* *{\n    box-sizing: border-box;\n} */\nbody {\n    padding: 0px;\n    margin: 0px;\n    position: relative;\n    font-size: 14px;\n    \n    /* height: 100vh; */\n    \n}\n\ndiv {\n    /* border-top: 2px solid white; */\n    padding: 4px;\n\n}\n#content {\n    margin: 0px;\n    width: 100vw;\n    /* height: 100vh; */\n    display: flex;\n    flex-direction: column;\n    background-color: rgb(63, 135, 152);\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    align-items: center;\n    position: relative;\n}\n\n#container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 4px;\n    padding: 20px;\n    margin: 20px 0;\n    width: 480px;\n    height: 100vh;  \n}\n\n#header{\n    display: flex;\n    width: 100%;\n    height: 100px;\n}\n\n#deckDock{\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 200px;\n}\n\n#deckArea{\n    display: flex;\n    flex-direction: row;\n    gap: 7px;\n}\n\n#cardDock{\n    padding: 4px;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n}\n\n#logo, .title{\n    width: 100px;\n    font-size: 32px;\n    font-weight: 600;\n    font-family: 'Raleway', sans-serif;\n    color: white;\n    border: none;\n}\n\n.title{\n    width: auto;\n    font-size: 24px;\n}\n\n\n#cardArea{\n    display: grid;\n    grid-template-columns: 60px 1fr 60px;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    border: none;\n}\n\n.deck, .blankDeck{\n    /* pointer-events: none; */\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: repeat(5, 1fr);\n    width: 60px;\n    height: 90px;\n    border-radius: 4px;\n    background-color: white;\n    /* box-shadow: rgba(0, 0, 0, 0.16) 0 7px 9px -7px;\n    box-shadow: rgba(53, 82, 94, 0.3) 1px 7px 7px 1px; */\n    justify-items: center;\n    justify-content: space-between;\n    align-items: center;\n    /* padding: 0px; */\n}\n\n.blankDeck{\n    background-color:  rgb(46, 99, 111);\n    \n}\n\n.menu{\n    border: none;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: left;\n    gap: 4px;\n}\n\n#deckTitle, #cardTitle, #cardDate, #cardSteps{\n    margin-top: 8px;\n    font-family: 'Raleway', sans-serif;\n    color: rgb(63, 135, 152);\n    font-weight: 600;\n    text-transform: uppercase;\n    text-align: center;\n    text-justify: center;\n}\n\n#deckTitle{\n    margin: 0px;\n    grid-column: 1/4;\n    grid-row: 1/5;\n    /* background-color: aqua; */\n    /* width: 100%;\n    height: 100%; */\n    cursor: pointer;\n    /* opacity: 50%; */\n}\n\n.selectedDeck {\n    box-shadow: rgb(102, 220, 241) 0 0 3px 2px;\n    /* box-shadow: rgba(53, 82, 94, 0.3) 1px 9px 9px 1px; */\n}\n\n#addCardButton, #addDeckButton{\n    font-size: 48px;\n    cursor: pointer;\n}\n\n#addCardButton:hover, #addDeckButton:hover, .nextButton:hover{\n    /* text-shadow:  0 0 3px 2px, rgb(102, 173, 241); */\n    text-shadow: -1px 1px 2px rgb(102, 220, 241),\n\t\t\t\t  1px 1px 2px rgb(102, 220, 241),\n\t\t\t\t  1px -1px 0 rgb(102, 220, 241),\n\t\t\t\t  -1px -1px 0 rgb(102, 220, 241);\n    \n}\n.nextButton{\n    justify-self: right;\n    color: white;\n    color: rgb(80, 163, 182);\n    font-family: 'Raleway', sans-serif;\n    font-size: 72px;\n    border: none;\n    cursor: pointer;\n}\n\n#forwardButton{\n    justify-self: left;\n    grid-column: 3/4;\n}\n\n#backwardButton{\n    justify-self: right;\n    grid-column: 1/2;\n    grid-row: 1/2;\n}\n\n\n.cardBig{\n    grid-column: 2/3;\n    grid-row: 1/2;\n    justify-self: center;\n    display: flex;\n    width: 240px;\n    height: 360px;\n    border-radius: 16px;\n    background-color: white;\n    box-shadow: rgba(53, 82, 94, 0.3) 1px 9px 9px 1px;\n    justify-content: center;\n    align-items: center;\n    z-index: 1;\n\n}\n\n#topCard{\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: repeat(8, 1fr);\n\n    /* flex-direction: column; */\n}\n\n.bigPlus, .littlePlus{\n    grid-column: 1/5;\n    grid-row: 4/6;\n    cursor: pointer;\n    font-size: 72px;\n    color: rgb(63, 135, 152);\n    font-family: 'Raleway', sans-serif;\n    font-weight: 600;\n    align-self: center;\n    justify-self: center;\n    \n}\n\n.littlePlus{\n    grid-row: 3/4;\n}\n\n.stack0{\n    background-color: white;\n    position: absolute;\n    top: 6px;\n    left: 63px;\n    /* z-index: -1; */\n    transform: rotate(2deg);\n}\n\n.stack1{\n    position: absolute;\n    top: 3px;\n    left: 58px;\n    /* z-index: -2; */\n    transform: rotate(1deg);\n}\n\n.stack2{\n    position: absolute;\n    top: 4px;\n    left: 120px;\n    /* z-index: -3; */\n    transform: rotate(6deg);\n}\n\n.editSize{\n    /* position: absolute;\n    top: 180px; */\n    width: 300px;\n    height: 450px;\n    z-index: 3;\n}\n\n.overLayHolder{\n    position: absolute;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100vw;\n    height: 100vh; \n    \n}\n\n.overlay{\n    display: grid;\n    position: absolute;\n    background-color: rgb(37, 107, 107);\n    opacity: 60%;\n    height: 100vh;\n    width: 100vw;\n    z-index: 2;\n    padding: 20px; \n}\n\n.formDiv{\n    display: flex;\n    flex-direction: column;\n    padding-top: 100px;\n    gap: 20px;\n    width: 300px;\n    height: 600px;\n    z-index: 3;\n}\n\n.submitButtonsDiv{\n    display: flex;\n    flex-direction: row;\n    gap: 16px;\n    height: 44px;\n}\n\n.cardForm{\n    display: grid;\n    gap: 16px;\n    width:300px;\n    height: 410px;\n    grid-template-columns: 1fr 1.5fr 1.5fr 1fr;\n    grid-template-rows: repeat(7, 1fr);\n    padding: 20px;\n}\n\n.input, .check{\n    padding: 8px;\n    grid-column: 1/5;\n    border: none;\n    outline: none;\n    border-radius: 16px;\n    background-color: rgb(242, 242, 242);\n    color: rgb(80, 163, 182);\n    font-family: 'Raleway', sans-serif;\n    font-size: 18px;\n    text-align: center;\n}\n\n.input:hover{\n    box-shadow: rgb(102, 173, 241) 0 0 3px 2px;\n    box-shadow: rgb(102, 220, 241) 0 0 3px 2px;\n}\n\n#step{\n    grid-column: 2/5;\n    background-color: white;\n    font-size: 15px;\n    display: flex;\n    align-items: flex-start;\n    text-align: left;\n    text-justify: left;\n}\n\n#stepHolder{\n    grid-column: 1/5;\n    grid-row: 3/6;\n    /* background-color: aquamarine; */\n    display: flex;\n    flex-direction: column;\n}\n\n#preStep{\n    grid-column: 1/2;\n    grid-row: 3/4;\n    background-color: white;\n    font-size: 24px;\n    font-weight: 600;\n}\n\n\n.stepDiv{\n    /* background-color: aqua; */\n}\n\n\n#step:hover, #preStep:hover{\n    box-shadow: none;\n}\n\n.cardTitle{\n   grid-row: 1/2;\n   grid-column: 1/5;\n   text-align: center;\n}\n\n#cardSteps{\n    grid-column: 1/5;\n    grid-row: 2/7;\n    font-size: 14px;\n    text-transform: capitalize;\n    /* margin: 4px;\n    margin-top: 8px; */\n}\n\n#cardDate{\n    grid-row: 7/8;\n    grid-column: 1/5;\n    text-align: center;\n}\n\n#cardDelete{\n    margin-left: 12px;\n    grid-column: 1/2;\n    grid-row: 8/9;\n    font-size: 16px;\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    background-color: rgb(80, 163, 182);\n    color: white;\n    text-align: center;\n    text-justify: center;\n    cursor: pointer;\n}\n\n#deckDelete{\n    grid-column: 1/2;\n    grid-row: 5/6;\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    background-color: rgb(80, 163, 182);\n    color: white;\n    font-family: 'Raleway', sans-serif;\n    font-size: 9px;\n    font-weight: 600;\n    text-align: center;\n    text-justify: center; \n    align-self: flex-start;\n    cursor: pointer;\n}\n\n.check{\n    background-color: white;\n    width: 50px;\n    z-index: 3;\n    text-align: center;\n    vertical-align: center;\n}\n\n.grow { \n    cursor: pointer;\n    transition: all .1s ease-in-out; \n    }\n    \n.grow:hover { \n    transform: scale(1.05); \n    }\n\n.check:hover{\n    font-size: 24px;\n}\n\n[contenteditable] {\n    /* outline: 0px solid transparent; */\n  }\n\nul{\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    margin-right: 12px;\n}\nli {\n    text-align: start;\n}\n"],"sourceRoot":""}]);
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
defaultCard.cardSteps.push(`This is task card.`);
defaultCard.cardSteps.push(`Click on any text field to edit the property`);
defaultCard.cardSteps.push(`Press the next arrow to the right to see the next card.`);
defaultCard2.cardSteps.push(`Click the delete button on a card to remove from the current (selected) deck.`);
defaultCard2.cardSteps.push(`To permanently delete a card, delete from the all deck.`);
defaultCard2.cardSteps.push(`Create cards or decks by pressing the '+' buttons.`);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksUUFBUSxRQUFRLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFFBQVEsS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGNBQWMsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGNBQWMsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFFBQVEsS0FBSyxZQUFZLFFB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Q0E7O0FBRUEsa0RBQWtELGVBQWU7O0FBRWpFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0RBQWtELGVBQWU7O0FBRWpFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ3JIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQSxpRUFBZSxNQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEVmO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Q0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLCtDQUErQyxZQUFZO0FBQzNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGdEQUFHLENBQUMsaURBQVM7QUFDakI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wLXRvLWRvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b3AtdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvcC10by1kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvcC10by1kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b3AtdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b3AtdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvcC10by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvcC10by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvcC10by1kby8uL3NyYy9HVUkuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLy4vc3JjL0dVSUNhcmRzLmpzIiwid2VicGFjazovL3RvcC10by1kby8uL3NyYy9HVUlEZWNrcy5qcyIsIndlYnBhY2s6Ly90b3AtdG8tZG8vLi9zcmMvR1VJTGF5b3V0LmpzIiwid2VicGFjazovL3RvcC10by1kby8uL3NyYy9HVUlOZXdDYXJkLmpzIiwid2VicGFjazovL3RvcC10by1kby8uL3NyYy9HVUlOZXdEZWNrLmpzIiwid2VicGFjazovL3RvcC10by1kby8uL3NyYy9jYXJkLmpzIiwid2VicGFjazovL3RvcC10by1kby8uL3NyYy9jb250cm9sbHMuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLy4vc3JjL2RlY2suanMiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UmFsZXdheTppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3N3YWxkOndnaHRAMjAwOzMwMDs0MDA7NTAwOzYwMDs3MDAmZmFtaWx5PVJhbGV3YXk6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNvdXJpZXIrUHJpbWU6aXRhbCx3Z2h0QDAsNDAwOzAsNzAwOzEsNDAwOzEsNzAwJmZhbWlseT1Pc3dhbGQ6d2dodEAyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMCZmYW1pbHk9UmFsZXdheTppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogKntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59ICovXFxuYm9keSB7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBcXG4gICAgLyogaGVpZ2h0OiAxMDB2aDsgKi9cXG4gICAgXFxufVxcblxcbmRpdiB7XFxuICAgIC8qIGJvcmRlci10b3A6IDJweCBzb2xpZCB3aGl0ZTsgKi9cXG4gICAgcGFkZGluZzogNHB4O1xcblxcbn1cXG4jY29udGVudCB7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIC8qIGhlaWdodDogMTAwdmg7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2MywgMTM1LCAxNTIpO1xcbiAgICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBtYXJnaW46IDIwcHggMDtcXG4gICAgd2lkdGg6IDQ4MHB4O1xcbiAgICBoZWlnaHQ6IDEwMHZoOyAgXFxufVxcblxcbiNoZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4jZGVja0RvY2t7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbn1cXG5cXG4jZGVja0FyZWF7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogN3B4O1xcbn1cXG5cXG4jY2FyZERvY2t7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuI2xvZ28sIC50aXRsZXtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4udGl0bGV7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcblxcbiNjYXJkQXJlYXtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2MHB4IDFmciA2MHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5kZWNrLCAuYmxhbmtEZWNre1xcbiAgICAvKiBwb2ludGVyLWV2ZW50czogbm9uZTsgKi9cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgMWZyKTtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGhlaWdodDogOTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgLyogYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwIDdweCA5cHggLTdweDtcXG4gICAgYm94LXNoYWRvdzogcmdiYSg1MywgODIsIDk0LCAwLjMpIDFweCA3cHggN3B4IDFweDsgKi9cXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC8qIHBhZGRpbmc6IDBweDsgKi9cXG59XFxuXFxuLmJsYW5rRGVja3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIHJnYig0NiwgOTksIDExMSk7XFxuICAgIFxcbn1cXG5cXG4ubWVudXtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxuICAgIGdhcDogNHB4O1xcbn1cXG5cXG4jZGVja1RpdGxlLCAjY2FyZFRpdGxlLCAjY2FyZERhdGUsICNjYXJkU3RlcHN7XFxuICAgIG1hcmdpbi10b3A6IDhweDtcXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHJnYig2MywgMTM1LCAxNTIpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtanVzdGlmeTogY2VudGVyO1xcbn1cXG5cXG4jZGVja1RpdGxle1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvNDtcXG4gICAgZ3JpZC1yb3c6IDEvNTtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYXF1YTsgKi9cXG4gICAgLyogd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTsgKi9cXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAvKiBvcGFjaXR5OiA1MCU7ICovXFxufVxcblxcbi5zZWxlY3RlZERlY2sge1xcbiAgICBib3gtc2hhZG93OiByZ2IoMTAyLCAyMjAsIDI0MSkgMCAwIDNweCAycHg7XFxuICAgIC8qIGJveC1zaGFkb3c6IHJnYmEoNTMsIDgyLCA5NCwgMC4zKSAxcHggOXB4IDlweCAxcHg7ICovXFxufVxcblxcbiNhZGRDYXJkQnV0dG9uLCAjYWRkRGVja0J1dHRvbntcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNhZGRDYXJkQnV0dG9uOmhvdmVyLCAjYWRkRGVja0J1dHRvbjpob3ZlciwgLm5leHRCdXR0b246aG92ZXJ7XFxuICAgIC8qIHRleHQtc2hhZG93OiAgMCAwIDNweCAycHgsIHJnYigxMDIsIDE3MywgMjQxKTsgKi9cXG4gICAgdGV4dC1zaGFkb3c6IC0xcHggMXB4IDJweCByZ2IoMTAyLCAyMjAsIDI0MSksXFxuXFx0XFx0XFx0XFx0ICAxcHggMXB4IDJweCByZ2IoMTAyLCAyMjAsIDI0MSksXFxuXFx0XFx0XFx0XFx0ICAxcHggLTFweCAwIHJnYigxMDIsIDIyMCwgMjQxKSxcXG5cXHRcXHRcXHRcXHQgIC0xcHggLTFweCAwIHJnYigxMDIsIDIyMCwgMjQxKTtcXG4gICAgXFxufVxcbi5uZXh0QnV0dG9ue1xcbiAgICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiByZ2IoODAsIDE2MywgMTgyKTtcXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiA3MnB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2ZvcndhcmRCdXR0b257XFxuICAgIGp1c3RpZnktc2VsZjogbGVmdDtcXG4gICAgZ3JpZC1jb2x1bW46IDMvNDtcXG59XFxuXFxuI2JhY2t3YXJkQnV0dG9ue1xcbiAgICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogMS8yO1xcbn1cXG5cXG5cXG4uY2FyZEJpZ3tcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAyNDBweDtcXG4gICAgaGVpZ2h0OiAzNjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoNTMsIDgyLCA5NCwgMC4zKSAxcHggOXB4IDlweCAxcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB6LWluZGV4OiAxO1xcblxcbn1cXG5cXG4jdG9wQ2FyZHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoOCwgMWZyKTtcXG5cXG4gICAgLyogZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgKi9cXG59XFxuXFxuLmJpZ1BsdXMsIC5saXR0bGVQbHVze1xcbiAgICBncmlkLWNvbHVtbjogMS81O1xcbiAgICBncmlkLXJvdzogNC82O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogNzJweDtcXG4gICAgY29sb3I6IHJnYig2MywgMTM1LCAxNTIpO1xcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBcXG59XFxuXFxuLmxpdHRsZVBsdXN7XFxuICAgIGdyaWQtcm93OiAzLzQ7XFxufVxcblxcbi5zdGFjazB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNnB4O1xcbiAgICBsZWZ0OiA2M3B4O1xcbiAgICAvKiB6LWluZGV4OiAtMTsgKi9cXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMmRlZyk7XFxufVxcblxcbi5zdGFjazF7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAzcHg7XFxuICAgIGxlZnQ6IDU4cHg7XFxuICAgIC8qIHotaW5kZXg6IC0yOyAqL1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxZGVnKTtcXG59XFxuXFxuLnN0YWNrMntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDRweDtcXG4gICAgbGVmdDogMTIwcHg7XFxuICAgIC8qIHotaW5kZXg6IC0zOyAqL1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg2ZGVnKTtcXG59XFxuXFxuLmVkaXRTaXple1xcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTgwcHg7ICovXFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiA0NTBweDtcXG4gICAgei1pbmRleDogMztcXG59XFxuXFxuLm92ZXJMYXlIb2xkZXJ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDsgXFxuICAgIFxcbn1cXG5cXG4ub3ZlcmxheXtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzcsIDEwNywgMTA3KTtcXG4gICAgb3BhY2l0eTogNjAlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIHBhZGRpbmc6IDIwcHg7IFxcbn1cXG5cXG4uZm9ybURpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiA2MDBweDtcXG4gICAgei1pbmRleDogMztcXG59XFxuXFxuLnN1Ym1pdEJ1dHRvbnNEaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogMTZweDtcXG4gICAgaGVpZ2h0OiA0NHB4O1xcbn1cXG5cXG4uY2FyZEZvcm17XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMTZweDtcXG4gICAgd2lkdGg6MzAwcHg7XFxuICAgIGhlaWdodDogNDEwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEuNWZyIDEuNWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNywgMWZyKTtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLmlucHV0LCAuY2hlY2t7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvNTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQyLCAyNDIsIDI0Mik7XFxuICAgIGNvbG9yOiByZ2IoODAsIDE2MywgMTgyKTtcXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5pbnB1dDpob3ZlcntcXG4gICAgYm94LXNoYWRvdzogcmdiKDEwMiwgMTczLCAyNDEpIDAgMCAzcHggMnB4O1xcbiAgICBib3gtc2hhZG93OiByZ2IoMTAyLCAyMjAsIDI0MSkgMCAwIDNweCAycHg7XFxufVxcblxcbiNzdGVwe1xcbiAgICBncmlkLWNvbHVtbjogMi81O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgdGV4dC1qdXN0aWZ5OiBsZWZ0O1xcbn1cXG5cXG4jc3RlcEhvbGRlcntcXG4gICAgZ3JpZC1jb2x1bW46IDEvNTtcXG4gICAgZ3JpZC1yb3c6IDMvNjtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI3ByZVN0ZXB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiAzLzQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcblxcbi5zdGVwRGl2e1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhOyAqL1xcbn1cXG5cXG5cXG4jc3RlcDpob3ZlciwgI3ByZVN0ZXA6aG92ZXJ7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi5jYXJkVGl0bGV7XFxuICAgZ3JpZC1yb3c6IDEvMjtcXG4gICBncmlkLWNvbHVtbjogMS81O1xcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2NhcmRTdGVwc3tcXG4gICAgZ3JpZC1jb2x1bW46IDEvNTtcXG4gICAgZ3JpZC1yb3c6IDIvNztcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gICAgLyogbWFyZ2luOiA0cHg7XFxuICAgIG1hcmdpbi10b3A6IDhweDsgKi9cXG59XFxuXFxuI2NhcmREYXRle1xcbiAgICBncmlkLXJvdzogNy84O1xcbiAgICBncmlkLWNvbHVtbjogMS81O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNjYXJkRGVsZXRle1xcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDgvOTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4MCwgMTYzLCAxODIpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC1qdXN0aWZ5OiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2RlY2tEZWxldGV7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiA1LzY7XFxuICAgIHdpZHRoOiA4cHg7XFxuICAgIGhlaWdodDogOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4MCwgMTYzLCAxODIpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogOXB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtanVzdGlmeTogY2VudGVyOyBcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2hlY2t7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgei1pbmRleDogMztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZ3JvdyB7IFxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuMXMgZWFzZS1pbi1vdXQ7IFxcbiAgICB9XFxuICAgIFxcbi5ncm93OmhvdmVyIHsgXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7IFxcbiAgICB9XFxuXFxuLmNoZWNrOmhvdmVye1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbltjb250ZW50ZWRpdGFibGVdIHtcXG4gICAgLyogb3V0bGluZTogMHB4IHNvbGlkIHRyYW5zcGFyZW50OyAqL1xcbiAgfVxcblxcbnVse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDhweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xcbn1cXG5saSB7XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBOztHQUVHO0FBQ0g7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixlQUFlOztJQUVmLG1CQUFtQjs7QUFFdkI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsWUFBWTs7QUFFaEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUNBQW1DO0lBQ25DLHdFQUF3RTtJQUN4RSxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLGFBQWE7SUFDYixjQUFjO0lBQ2QsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0FBQ25COzs7QUFHQTtJQUNJLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLGtDQUFrQztJQUNsQyxXQUFXO0lBQ1gs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QVU7SUFDVixrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLCtCQUErQjtJQUMvQjs7QUFFSjtJQUNJLHNCQUFzQjtJQUN0Qjs7QUFFSjtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxvQ0FBb0M7RUFDdEM7O0FBRUY7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7SUFDUixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SYWxld2F5Oml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXAnKTsgXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3N3YWxkOndnaHRAMjAwOzMwMDs0MDA7NTAwOzYwMDs3MDAmZmFtaWx5PVJhbGV3YXk6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCcpO1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNvdXJpZXIrUHJpbWU6aXRhbCx3Z2h0QDAsNDAwOzAsNzAwOzEsNDAwOzEsNzAwJmZhbWlseT1Pc3dhbGQ6d2dodEAyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMCZmYW1pbHk9UmFsZXdheTppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZGlzcGxheT1zd2FwJyk7XFxuLyogKntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59ICovXFxuYm9keSB7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBcXG4gICAgLyogaGVpZ2h0OiAxMDB2aDsgKi9cXG4gICAgXFxufVxcblxcbmRpdiB7XFxuICAgIC8qIGJvcmRlci10b3A6IDJweCBzb2xpZCB3aGl0ZTsgKi9cXG4gICAgcGFkZGluZzogNHB4O1xcblxcbn1cXG4jY29udGVudCB7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIC8qIGhlaWdodDogMTAwdmg7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2MywgMTM1LCAxNTIpO1xcbiAgICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBtYXJnaW46IDIwcHggMDtcXG4gICAgd2lkdGg6IDQ4MHB4O1xcbiAgICBoZWlnaHQ6IDEwMHZoOyAgXFxufVxcblxcbiNoZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4jZGVja0RvY2t7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbn1cXG5cXG4jZGVja0FyZWF7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogN3B4O1xcbn1cXG5cXG4jY2FyZERvY2t7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuI2xvZ28sIC50aXRsZXtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4udGl0bGV7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcblxcbiNjYXJkQXJlYXtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2MHB4IDFmciA2MHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5kZWNrLCAuYmxhbmtEZWNre1xcbiAgICAvKiBwb2ludGVyLWV2ZW50czogbm9uZTsgKi9cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgMWZyKTtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGhlaWdodDogOTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgLyogYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwIDdweCA5cHggLTdweDtcXG4gICAgYm94LXNoYWRvdzogcmdiYSg1MywgODIsIDk0LCAwLjMpIDFweCA3cHggN3B4IDFweDsgKi9cXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC8qIHBhZGRpbmc6IDBweDsgKi9cXG59XFxuXFxuLmJsYW5rRGVja3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIHJnYig0NiwgOTksIDExMSk7XFxuICAgIFxcbn1cXG5cXG4ubWVudXtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxuICAgIGdhcDogNHB4O1xcbn1cXG5cXG4jZGVja1RpdGxlLCAjY2FyZFRpdGxlLCAjY2FyZERhdGUsICNjYXJkU3RlcHN7XFxuICAgIG1hcmdpbi10b3A6IDhweDtcXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHJnYig2MywgMTM1LCAxNTIpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtanVzdGlmeTogY2VudGVyO1xcbn1cXG5cXG4jZGVja1RpdGxle1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvNDtcXG4gICAgZ3JpZC1yb3c6IDEvNTtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYXF1YTsgKi9cXG4gICAgLyogd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTsgKi9cXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAvKiBvcGFjaXR5OiA1MCU7ICovXFxufVxcblxcbi5zZWxlY3RlZERlY2sge1xcbiAgICBib3gtc2hhZG93OiByZ2IoMTAyLCAyMjAsIDI0MSkgMCAwIDNweCAycHg7XFxuICAgIC8qIGJveC1zaGFkb3c6IHJnYmEoNTMsIDgyLCA5NCwgMC4zKSAxcHggOXB4IDlweCAxcHg7ICovXFxufVxcblxcbiNhZGRDYXJkQnV0dG9uLCAjYWRkRGVja0J1dHRvbntcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNhZGRDYXJkQnV0dG9uOmhvdmVyLCAjYWRkRGVja0J1dHRvbjpob3ZlciwgLm5leHRCdXR0b246aG92ZXJ7XFxuICAgIC8qIHRleHQtc2hhZG93OiAgMCAwIDNweCAycHgsIHJnYigxMDIsIDE3MywgMjQxKTsgKi9cXG4gICAgdGV4dC1zaGFkb3c6IC0xcHggMXB4IDJweCByZ2IoMTAyLCAyMjAsIDI0MSksXFxuXFx0XFx0XFx0XFx0ICAxcHggMXB4IDJweCByZ2IoMTAyLCAyMjAsIDI0MSksXFxuXFx0XFx0XFx0XFx0ICAxcHggLTFweCAwIHJnYigxMDIsIDIyMCwgMjQxKSxcXG5cXHRcXHRcXHRcXHQgIC0xcHggLTFweCAwIHJnYigxMDIsIDIyMCwgMjQxKTtcXG4gICAgXFxufVxcbi5uZXh0QnV0dG9ue1xcbiAgICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiByZ2IoODAsIDE2MywgMTgyKTtcXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiA3MnB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2ZvcndhcmRCdXR0b257XFxuICAgIGp1c3RpZnktc2VsZjogbGVmdDtcXG4gICAgZ3JpZC1jb2x1bW46IDMvNDtcXG59XFxuXFxuI2JhY2t3YXJkQnV0dG9ue1xcbiAgICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogMS8yO1xcbn1cXG5cXG5cXG4uY2FyZEJpZ3tcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAyNDBweDtcXG4gICAgaGVpZ2h0OiAzNjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoNTMsIDgyLCA5NCwgMC4zKSAxcHggOXB4IDlweCAxcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB6LWluZGV4OiAxO1xcblxcbn1cXG5cXG4jdG9wQ2FyZHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoOCwgMWZyKTtcXG5cXG4gICAgLyogZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgKi9cXG59XFxuXFxuLmJpZ1BsdXMsIC5saXR0bGVQbHVze1xcbiAgICBncmlkLWNvbHVtbjogMS81O1xcbiAgICBncmlkLXJvdzogNC82O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogNzJweDtcXG4gICAgY29sb3I6IHJnYig2MywgMTM1LCAxNTIpO1xcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBcXG59XFxuXFxuLmxpdHRsZVBsdXN7XFxuICAgIGdyaWQtcm93OiAzLzQ7XFxufVxcblxcbi5zdGFjazB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNnB4O1xcbiAgICBsZWZ0OiA2M3B4O1xcbiAgICAvKiB6LWluZGV4OiAtMTsgKi9cXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMmRlZyk7XFxufVxcblxcbi5zdGFjazF7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAzcHg7XFxuICAgIGxlZnQ6IDU4cHg7XFxuICAgIC8qIHotaW5kZXg6IC0yOyAqL1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxZGVnKTtcXG59XFxuXFxuLnN0YWNrMntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDRweDtcXG4gICAgbGVmdDogMTIwcHg7XFxuICAgIC8qIHotaW5kZXg6IC0zOyAqL1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg2ZGVnKTtcXG59XFxuXFxuLmVkaXRTaXple1xcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTgwcHg7ICovXFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiA0NTBweDtcXG4gICAgei1pbmRleDogMztcXG59XFxuXFxuLm92ZXJMYXlIb2xkZXJ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDsgXFxuICAgIFxcbn1cXG5cXG4ub3ZlcmxheXtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzcsIDEwNywgMTA3KTtcXG4gICAgb3BhY2l0eTogNjAlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIHBhZGRpbmc6IDIwcHg7IFxcbn1cXG5cXG4uZm9ybURpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiA2MDBweDtcXG4gICAgei1pbmRleDogMztcXG59XFxuXFxuLnN1Ym1pdEJ1dHRvbnNEaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogMTZweDtcXG4gICAgaGVpZ2h0OiA0NHB4O1xcbn1cXG5cXG4uY2FyZEZvcm17XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMTZweDtcXG4gICAgd2lkdGg6MzAwcHg7XFxuICAgIGhlaWdodDogNDEwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEuNWZyIDEuNWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNywgMWZyKTtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLmlucHV0LCAuY2hlY2t7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvNTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQyLCAyNDIsIDI0Mik7XFxuICAgIGNvbG9yOiByZ2IoODAsIDE2MywgMTgyKTtcXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5pbnB1dDpob3ZlcntcXG4gICAgYm94LXNoYWRvdzogcmdiKDEwMiwgMTczLCAyNDEpIDAgMCAzcHggMnB4O1xcbiAgICBib3gtc2hhZG93OiByZ2IoMTAyLCAyMjAsIDI0MSkgMCAwIDNweCAycHg7XFxufVxcblxcbiNzdGVwe1xcbiAgICBncmlkLWNvbHVtbjogMi81O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgdGV4dC1qdXN0aWZ5OiBsZWZ0O1xcbn1cXG5cXG4jc3RlcEhvbGRlcntcXG4gICAgZ3JpZC1jb2x1bW46IDEvNTtcXG4gICAgZ3JpZC1yb3c6IDMvNjtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI3ByZVN0ZXB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiAzLzQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcblxcbi5zdGVwRGl2e1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhOyAqL1xcbn1cXG5cXG5cXG4jc3RlcDpob3ZlciwgI3ByZVN0ZXA6aG92ZXJ7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi5jYXJkVGl0bGV7XFxuICAgZ3JpZC1yb3c6IDEvMjtcXG4gICBncmlkLWNvbHVtbjogMS81O1xcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2NhcmRTdGVwc3tcXG4gICAgZ3JpZC1jb2x1bW46IDEvNTtcXG4gICAgZ3JpZC1yb3c6IDIvNztcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gICAgLyogbWFyZ2luOiA0cHg7XFxuICAgIG1hcmdpbi10b3A6IDhweDsgKi9cXG59XFxuXFxuI2NhcmREYXRle1xcbiAgICBncmlkLXJvdzogNy84O1xcbiAgICBncmlkLWNvbHVtbjogMS81O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNjYXJkRGVsZXRle1xcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDgvOTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4MCwgMTYzLCAxODIpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC1qdXN0aWZ5OiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2RlY2tEZWxldGV7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiA1LzY7XFxuICAgIHdpZHRoOiA4cHg7XFxuICAgIGhlaWdodDogOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4MCwgMTYzLCAxODIpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogOXB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtanVzdGlmeTogY2VudGVyOyBcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2hlY2t7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgei1pbmRleDogMztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZ3JvdyB7IFxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuMXMgZWFzZS1pbi1vdXQ7IFxcbiAgICB9XFxuICAgIFxcbi5ncm93OmhvdmVyIHsgXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7IFxcbiAgICB9XFxuXFxuLmNoZWNrOmhvdmVye1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbltjb250ZW50ZWRpdGFibGVdIHtcXG4gICAgLyogb3V0bGluZTogMHB4IHNvbGlkIHRyYW5zcGFyZW50OyAqL1xcbiAgfVxcblxcbnVse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDhweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xcbn1cXG5saSB7XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgbGF5b3V0IGZyb20gXCIuL0dVSUxheW91dFwiO1xuaW1wb3J0IHsgZHJhd0RlY2tzLCBzdHlsZUN1cnJlbnR9IGZyb20gXCIuL0dVSURlY2tzXCI7XG5pbXBvcnQgZHJhd0NhcmRzIGZyb20gXCIuL0dVSUNhcmRzXCI7XG5pbXBvcnQgZHJhd05ld0RlY2tGb3JtIGZyb20gXCIuL0dVSU5ld0RlY2tcIjtcbmltcG9ydCB7ZHJhd05ld0NhcmRGb3JtfSBmcm9tIFwiLi9HVUlOZXdDYXJkXCI7XG4vL0RSQVcgcGFnZSwgZGVjayBhcmVhLCBjYXJkIGFyZWEsIGRlZmF1bHQgZGVja3MgYW5kIGRlZmF1bHQgdG9wIGNhcmRcblxubGV0IGlzSW5pdGlhbExvYWQgPSAwO1xuXG5jb25zdCBkcmF3R1VJSW5pdGlhbCA9IChhRGVja0FycmF5LCBhQ3VycmVudERlY2ssIGNhcmRWaWV3VmFsdWUsIGN1cnJlbnRDYXJkKSA9PiB7XG4gICAgbGF5b3V0KCk7XG4gICAgZHJhd0RlY2tzKGFEZWNrQXJyYXkpO1xuICAgIGNvbnNvbGUubG9nKGBjdXJyZW50IGNhcmQgcGFzc2VkIGluIGlzICR7Y3VycmVudENhcmQuY2FyZE5hbWV9YCk7XG4gICAgZHJhd0NhcmRzKGFDdXJyZW50RGVjaywgY2FyZFZpZXdWYWx1ZSwgY3VycmVudENhcmQpO1xuICAgIFxufVxuXG5jb25zdCBkcmF3R1VJID0gKGFEZWNrQXJyYXksIGFDdXJyZW50RGVjaywgZm9ybVZhbHVlLCBjYXJkVmlld1ZhbHVlLCBjdXJyZW50Q2FyZCkgPT4ge1xuICAgIGRyYXdEZWNrcyhhRGVja0FycmF5KTtcbiAgICBjb25zdCBjdXJyZW50RGVja0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRpdGxlPVwiJHthQ3VycmVudERlY2suZGVja05hbWV9XCJdYCk7XG4gICAgc3R5bGVDdXJyZW50KGN1cnJlbnREZWNrRGl2KTsgIFxuICAgIGRyYXdOZXdEZWNrRm9ybShmb3JtVmFsdWUpOyAgIFxuICAgIGRyYXdDYXJkcyhhQ3VycmVudERlY2ssIGNhcmRWaWV3VmFsdWUsIGN1cnJlbnRDYXJkKTtcbiAgICBkcmF3TmV3Q2FyZEZvcm0oYURlY2tBcnJheSwgZm9ybVZhbHVlKTtcbn1cblxuY29uc3QgbG9hZEdVSSA9IChhRGVja0FycmF5LCBhQ3VycmVudERlY2ssIGZvcm1WYWx1ZSwgY2FyZFZpZXdWYWx1ZSwgY3VycmVudENhcmQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhgaW5pdGlhbCBsb2FkIGlzICR7aXNJbml0aWFsTG9hZH1gKTtcbiAgICBpZihpc0luaXRpYWxMb2FkID09PSAwKXtcbiAgICAgICAgY29uc29sZS5sb2coJ2lzIGluaXRpYWwgbG9hZCcpO1xuICAgICAgICBkcmF3R1VJSW5pdGlhbChhRGVja0FycmF5LCBhQ3VycmVudERlY2ssIGZvcm1WYWx1ZSwgY2FyZFZpZXdWYWx1ZSwgY3VycmVudENhcmQpO1xuICAgICAgICBpc0luaXRpYWxMb2FkID0gMTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgZHJhd0dVSShhRGVja0FycmF5LCBhQ3VycmVudERlY2ssIGZvcm1WYWx1ZSwgY2FyZFZpZXdWYWx1ZSwgY3VycmVudENhcmQpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZEdVSTtcblxuXG5cblxuXG5cbiIsImNvbnN0IGRyYXdGb3J3YXJkQW5kQmFja0J1dHRvbnMgPSAoKSA9PiB7XG4gICAgY29uc3QgY2FyZEFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZEFyZWEnKTtcbiAgICBjb25zdCBmb3J3YXJkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9yd2FyZEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25leHRCdXR0b24nKTtcbiAgICBmb3J3YXJkQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9yd2FyZEJ1dHRvbicpO1xuICAgIGNhcmRBcmVhLmFwcGVuZENoaWxkKGZvcndhcmRCdXR0b24pO1xuICAgIGZvcndhcmRCdXR0b24udGV4dENvbnRlbnQgPSAnPic7XG4gICAgXG4gICAgY29uc3QgYmFja3dhcmRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBiYWNrd2FyZEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25leHRCdXR0b24nKTtcbiAgICBiYWNrd2FyZEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2JhY2t3YXJkQnV0dG9uJyk7XG4gICAgY2FyZEFyZWEuYXBwZW5kQ2hpbGQoYmFja3dhcmRCdXR0b24pO1xuICAgIGJhY2t3YXJkQnV0dG9uLnRleHRDb250ZW50ID0gJzwnO1xufVxuXG5jb25zdCBkcmF3QmFja2dyb3VuZENhcmRzID0gKG51bSkgPT4ge1xuICAgIGNvbnN0IGNhcmRBcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmRBcmVhJyk7XG4gICAgZm9yKGxldCBpID0gMDsgaTxudW07IGkrKyApe1xuICAgIGNvbnN0IGZha2VDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZmFrZUNhcmQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkQmlnJyk7XG4gICAgZmFrZUNhcmQuY2xhc3NMaXN0LmFkZChgc3RhY2ske2l9YCk7XG4gICAgY2FyZEFyZWEuYXBwZW5kQ2hpbGQoZmFrZUNhcmQpO1xuICAgIH1cbn1cblxuY29uc3QgZHJhd1RpdGxlRGl2ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNhcmRUaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmRUaXRsZURpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NhcmRUaXRsZScpO1xuICAgIGNhcmRUaXRsZURpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmRUaXRsZScpO1xuICAgIGNhcmRUaXRsZURpdi5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsICd0cnVlJyk7XG4gICAgXG4gICAgcmV0dXJuIGNhcmRUaXRsZURpdjtcbn1cbmNvbnN0IGRyYXdTdGVwc0RpdiA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhgZHJhd2luZyBzdGVwIGRpdmApXG4gICAgY29uc3QgY2FyZFN0ZXBzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBjYXJkU3RlcHNEaXYuc2V0QXR0cmlidXRlKCdpZCcsICdjYXJkU3RlcHMnKTtcbiAgICByZXR1cm4gY2FyZFN0ZXBzRGl2O1xufVxuXG5leHBvcnQgY29uc3QgZHJhd0NhcmRTdGVwID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdkcmF3aW5nIHRoZSBzdGVwIScpXG4gICAgY29uc3Qgc3RlcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgc3RlcERpdi5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsICd0cnVlJyk7XG4gICAgc3RlcERpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3N0ZXBEaXYnKTtcbiAgICBjb25zdCBjYXJkU3RlcHNEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZFN0ZXBzJyk7XG4gICAgY2FyZFN0ZXBzRGl2LmFwcGVuZENoaWxkKHN0ZXBEaXYpO1xuICAgIHJldHVybiBzdGVwRGl2O1xufVxuY29uc3QgZHJhd0RhdGVEaXYgPSAoKSA9PiB7XG4gICAgY29uc3QgY2FyZERhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkRGF0ZURpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NhcmREYXRlJyk7XG4gICAgY2FyZERhdGVEaXYuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCAndHJ1ZScpO1xuICAgIHJldHVybiBjYXJkRGF0ZURpdjtcbn1cbmNvbnN0IGRyYXdEZWxldGVCdXR0b24gPSAoKSA9PiB7XG4gICAgY29uc3QgY2FyZERlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmREZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdjYXJkRGVsZXRlJyk7XG4gICAgXG4gICAgY2FyZERlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdncm93Jyk7XG4gICAgY2FyZERlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICctJ1xuICAgIHJldHVybiBjYXJkRGVsZXRlQnV0dG9uO1xufVxuXG5jb25zdCBwb3B1bGF0ZVN0ZXBzID0gKGN1cnJlbnRDYXJkKSA9PiB7XG4gICAgY29uc3QgdGhlQ2FyZCA9IGN1cnJlbnRDYXJkO1xuICAgIGlmKHRoZUNhcmQuY2FyZFN0ZXBzLmxlbmd0aCA+PSAxKXtcbiAgICAgICAgY29uc29sZS5sb2coJ3RoZXJlIGFyZSBzdGVwKHMpISBEUkFXIFNURVAgRElWKHMpJyk7XG4gICAgICAgIHRoZUNhcmQuY2FyZFN0ZXBzLmZvckVhY2goc3RlcFN0cmluZyA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoZUNhcmQuY2FyZFN0ZXBzLmluZGV4T2Yoc3RlcFN0cmluZyk7XG4gICAgICAgICAgICBjb25zdCBhU3RlcCA9IGRyYXdDYXJkU3RlcCgpO1xuICAgICAgICAgICAgYVN0ZXAuc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgYCR7aW5kZXh9YCk7XG4gICAgICAgICAgICBhU3RlcC50ZXh0Q29udGVudCA9IHN0ZXBTdHJpbmc7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0aGUgYXJlIG5vIHN0ZXBzISBEUkFXIGVtcHR5IFNURVAgRElWJyk7XG4gICAgICAgIGRyYXdDYXJkU3RlcCgpO1xuICAgIH1cbn1cblxuY29uc3QgZHJhd1RvcENhcmQgPSAoY3VycmVudENhcmQpID0+IHtcbiAgICBjb25zdCBjYXJkQXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkQXJlYScpO1xuICAgIGNvbnN0IGNhcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAndG9wQ2FyZCcpO1xuICAgIGNhcmREaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkQmlnJyk7XG4gICAgY2FyZEFyZWEuYXBwZW5kQ2hpbGQoY2FyZERpdik7XG4gICAgY29uc3QgY2FyZFRpdGxlRGl2ID0gZHJhd1RpdGxlRGl2KCk7XG4gICAgY2FyZERpdi5hcHBlbmRDaGlsZChjYXJkVGl0bGVEaXYpO1xuICAgIGNhcmRUaXRsZURpdi50ZXh0Q29udGVudCA9IGN1cnJlbnRDYXJkLmNhcmROYW1lO1xuICAgIGNvbnN0IGNhcmRTdGVwc0RpdiA9IGRyYXdTdGVwc0RpdigpO1xuICAgIGNhcmREaXYuYXBwZW5kQ2hpbGQoY2FyZFN0ZXBzRGl2KTtcbiAgICBwb3B1bGF0ZVN0ZXBzKGN1cnJlbnRDYXJkKTtcbiAgICBjb25zdCBjYXJkRGF0ZURpdiA9IGRyYXdEYXRlRGl2KCk7XG4gICAgY2FyZERpdi5hcHBlbmRDaGlsZChjYXJkRGF0ZURpdik7XG4gICAgY2FyZERhdGVEaXYudGV4dENvbnRlbnQgPSBgRHVlOiAke2N1cnJlbnRDYXJkLmNhcmREYXRlfWA7XG4gICAgY29uc3QgY2FyZERlbGV0ZUJ1dHRvbiA9IGRyYXdEZWxldGVCdXR0b24oKTtcbiAgICBjYXJkRGl2LmFwcGVuZENoaWxkKGNhcmREZWxldGVCdXR0b24pO1xuICAgIHJldHVybiBjYXJkRGl2O1xufVxuXG5jb25zdCBkcmF3QmxhbmtUb3BDYXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IGNhcmRBcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmRBcmVhJyk7XG4gICAgY29uc3QgY2FyZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmREaXYuc2V0QXR0cmlidXRlKCdpZCcsICd0b3BDYXJkJyk7XG4gICAgY2FyZERpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmRCaWcnKTtcbiAgICBjYXJkQXJlYS5hcHBlbmRDaGlsZChjYXJkRGl2KTtcbiAgICBjb25zdCBjYXJkUGx1cyA9IGRyYXdUaXRsZURpdigpO1xuICAgIGNhcmRQbHVzLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2FyZFBsdXMnKVxuICAgIGNvbnNvbGUubG9nKCdtYWtpbmcgcGx1cyBjYXJkJylcbiAgICBjYXJkUGx1cy50ZXh0Q29udGVudCA9ICcrJztcbiAgICBjYXJkUGx1cy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2JpZ1BsdXMnKTtcbiAgICBjYXJkUGx1cy5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsIGZhbHNlKTtcbiAgICBjYXJkUGx1cy5jbGFzc0xpc3QuYWRkKCdncm93Jyk7XG4gICAgY2FyZERpdi5hcHBlbmRDaGlsZChjYXJkUGx1cyk7XG59XG5cbmNvbnN0IGRyYXdCbGFua1N0YWNrID0gKCkgPT4ge1xuICAgIGRyYXdGb3J3YXJkQW5kQmFja0J1dHRvbnMoKTtcbiAgICBkcmF3QmFja2dyb3VuZENhcmRzKDIpO1xuICAgIGRyYXdCbGFua1RvcENhcmQoKTtcbn1cblxuY29uc3QgZHJhd0NhcmRTdGFjayA9IChjdXJyZW50Q2FyZCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGBkcmF3aW5nIGNhcmQgc3RhY2tgKTtcbiAgICBkcmF3Rm9yd2FyZEFuZEJhY2tCdXR0b25zKCk7XG4gICAgZHJhd0JhY2tncm91bmRDYXJkcygyKTtcbiAgICBkcmF3VG9wQ2FyZChjdXJyZW50Q2FyZCk7ICAgXG59XG5cbmNvbnN0IGRyYXdDYXJkcyA9IChjdXJyZW50RGVjaywgIGNhcmRWaWV3VmFsdWUsIGN1cnJlbnRDYXJkKSA9PiB7XG4gICAgaWYoY2FyZFZpZXdWYWx1ZSA9PT0gMCkge1xuICAgICAgICBpZihjdXJyZW50Q2FyZCAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIGRyYXdDYXJkU3RhY2soY3VycmVudENhcmQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UoZHJhd0JsYW5rU3RhY2soKSk7XG4gICAgICAgIFxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBkcmF3Q2FyZHM7XG5cblxuY29uc3QgZHJhd0FsbENhcmRzU3RhY2sgPSAoYURlY2spID0+IHtcbiAgICBjb25zdCBjYXJkRG9jayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkRG9jaycpO1xuICAgIGNvbnN0IGNhcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnY2FyZEJpZycpO1xuICAgIGNhcmREb2NrLmFwcGVuZENoaWxkKGNhcmREaXYpO1xuICAgIGNvbnNvbGUubG9nKGFEZWNrLmNhcmRzQXJyYXlbYURlY2suYm9va21hcmtdKTtcbiAgICBjb25zdCB0aGlzQm9va21hcmsgPSBhRGVjay5ib29rbWFyaztcbiAgICBjb25zdCB0aGVDYXJkID0gYURlY2suY2FyZHNBcnJheVt0aGlzQm9va21hcmtdLmNhcmROYW1lO1xuXG4gICAgY29uc3QgY2FyZFRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyZFRpdGxlRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnY2FyZFRpdGxlJyk7XG4gICAgY2FyZERpdi5hcHBlbmRDaGlsZChjYXJkVGl0bGVEaXYpO1xuICAgIGNhcmRUaXRsZURpdi50ZXh0Q29udGVudCA9IHRoZUNhcmQuQ2FyZE5hbWU7XG59XG5cbmNvbnN0IHBvcHVsYXRlQ2FyZCA9IChjdXJyZW50RGVjaykgPT4ge1xuICAgIGVyYXNlU3RlcHMoKTtcbiAgICBjb25zdCB0aGVDYXJkID0gZ2V0Qm9va21hcmtlZENhcmQoY3VycmVudERlY2spO1xuICAgIGNvbnNvbGUubG9nKCdwdW9wdWxhdGluZyB3aXRoOiAnICsgdGhlQ2FyZCk7XG4gICAgY29uc3QgY2FyZFRpdGxlRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmRUaXRsZScpO1xuICAgIGNhcmRUaXRsZURpdi5jbGFzc0xpc3QucmVtb3ZlKCdiaWdQbHVzJyk7XG4gICAgY2FyZFRpdGxlRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2dyb3cnKTtcbiAgICBjYXJkVGl0bGVEaXYuY2xhc3NMaXN0LmFkZCgnY2FyZFRpdGxlJyk7XG4gICAgaWYodGhlQ2FyZCAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgY2FyZFRpdGxlRGl2LnRleHRDb250ZW50ID0gdGhlQ2FyZC5jYXJkTmFtZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIFxuICAgIH1cbiAgICBjb25zdCBjYXJkRGF0ZURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkRGF0ZScpO1xuICAgIGlmKHRoZUNhcmQgIT09IHVuZGVmaW5lZCl7XG4gICAgICAgIGNhcmREYXRlRGl2LnRleHRDb250ZW50ID0gYER1ZSBkYXRlOiAke3RoZUNhcmQuY2FyZERhdGV9YDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNhcmREYXRlRGl2LnRleHRDb250ZW50ID0gJyc7XG4gICAgfVxuXG4gICAgY29uc3QgY2FyZFN0ZXBzRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmRTdGVwcycpO1xuICAgIGNvbnNvbGUubG9nKGNhcmRTdGVwc0Rpdik7XG4gICAgY29uc29sZS5sb2codHlwZW9mIGNhcmRTdGVwc0Rpdik7XG4gICAgaWYodGhlQ2FyZCAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgaWYodGhlQ2FyZC5jYXJkU3RlcHMubGVuZ3RoID4gMSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygndGhlcmUgYXJlIHN0ZXAocykhIERSQVcgU1RFUCBESVYocyknKTtcbiAgICAgICAgICAgIHRoZUNhcmQuY2FyZFN0ZXBzLmZvckVhY2goc3RlcFN0cmluZyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYVN0ZXAgPSBkcmF3Q2FyZFN0ZXAoKTtcbiAgICAgICAgICAgICAgICBhU3RlcC50ZXh0Q29udGVudCA9IHN0ZXBTdHJpbmc7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygndGhlIGFyZSBubyBzdGVwcyEgRFJBVyBlbXB0eSBTVEVQIERJVicpO1xuICAgICAgICAgICAgZHJhd0NhcmRTdGVwKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNhcmRTdGVwc0Rpdi50ZXh0Q29udGVudCA9ICcnO1xuICAgIH1cbiAgICBcbn1cblxuIiwiaW1wb3J0IGRlY2sgZnJvbSBcIi4vZGVja1wiO1xuaW1wb3J0IGxheW91dCBmcm9tIFwiLi9HVUlMYXlvdXRcIjtcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5leHBvcnQgY29uc3Qgc3R5bGVDdXJyZW50ID0gKGN1cnJlbnREZWNrRGl2KSA9PiB7XG4gICAgY3VycmVudERlY2tEaXYuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWREZWNrJyk7ICBcbn1cblxuY29uc3QgcmVtb3ZlU2VsZWN0ZWRTdHlsZSA9IChwcmV2aW91c0RlY2tEaXYpID0+IHtcbiAgICBwcmV2aW91c0RlY2tEaXYuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWREZWNrJyk7XG59XG5cbmNvbnN0IHN0eWxlRGVja3MgPSAoY3VycmVudERlY2tEaXYsIHByZXZpb3VzRGVja0RpdikgPT4ge1xuICAgIHJlbW92ZVNlbGVjdGVkU3R5bGUocHJldmlvdXNEZWNrRGl2KTtcbiAgICBzdHlsZUN1cnJlbnQoY3VycmVudERlY2tEaXYpO1xufVxuXG5jb25zdCBkcmF3QmxhbmtEZWNrID0gKCkgPT4ge1xuICAgIGNvbnN0IGJsYW5rRGVja0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJsYW5rRGVja0Rpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2JsYW5rRGVjaycpO1xuICAgIGRlY2tBcmVhLmFwcGVuZENoaWxkKGJsYW5rRGVja0Rpdik7XG5cbiAgICBjb25zdCBsaXR0bGVQbHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGl0dGxlUGx1cy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xpdHRsZVBsdXMnKTtcbiAgICBsaXR0bGVQbHVzLmNsYXNzTGlzdC5hZGQoJ2dyb3cnKTtcbiAgICBsaXR0bGVQbHVzLnRleHRDb250ZW50ID0gJysnO1xuICAgIGxpdHRsZVBsdXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93RGVja0Zvcm0pXG4gICAgYmxhbmtEZWNrRGl2LmFwcGVuZENoaWxkKGxpdHRsZVBsdXMpO1xufVxuXG5jb25zdCBlcmFzZUJsYW5rRGVjayA9ICgpID0+IHtcbiAgICBjb25zdCBibGFua0RlY2tEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdibGFua0RlY2snKTtcbiAgICBibGFua0RlY2tEaXZbMF0ucmVtb3ZlKCk7XG59XG5cbmNvbnN0IGZpcnN0RHJhd0RlY2tzID0gKGFycmF5T2ZEZWNrcykgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKCdydW5uaW5nIGRyYXdEZWNrcycpXG4gICAgLy8gY29uc29sZS5sb2coZGVja0FycmF5WzFdKTtcbiAgICBhcnJheU9mRGVja3MuZm9yRWFjaChhRGVjayA9PiB7XG4gICAgICAgIGNvbnN0IGRlY2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRlY2tEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZWNrJyk7XG4gICAgICAgICAgICAvLyBkZWNrRGl2LmNsYXNzTGlzdC5hZGQoJ2dyb3cnKTtcbiAgICAgICAgICAgIGRlY2tBcmVhLmFwcGVuZENoaWxkKGRlY2tEaXYpO1xuXG4gICAgICAgICAgICBjb25zdCBkZWNrVGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRlY2tUaXRsZURpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RlY2tUaXRsZScpO1xuICAgICAgICAgICAgZGVja1RpdGxlRGl2LmNsYXNzTGlzdC5hZGQoJ2dyb3cnKTtcbiAgICAgICAgICAgIGRlY2tEaXYuYXBwZW5kQ2hpbGQoZGVja1RpdGxlRGl2KTtcbiAgICAgICAgICAgIGRlY2tUaXRsZURpdi50ZXh0Q29udGVudCA9IGFEZWNrLmRlY2tOYW1lO1xuXG4gICAgICAgICAgICBkZWNrRGl2LnNldEF0dHJpYnV0ZSgnZGF0YS10aXRsZScsIGAke2FEZWNrLmRlY2tOYW1lfWApO1xuXG4gICAgICAgICAgICBkZWNrRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdXBkYXRlQ3VycmVudERlY2spO1xuICAgICAgICAgICAgZGVja1RpdGxlRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdXBkYXRlQ3VycmVudERlY2spO1xuICAgICAgICAgICAgZGVja1RpdGxlRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0Jywgc2F2ZURlY2tUaXRsZSk7XG5cbiAgICAgICAgICAgIGlmKChhcnJheU9mRGVja3MuaW5kZXhPZihhRGVjaykpICE9PSAwKXtcbiAgICAgICAgICAgICAgICBjb25zdCBkZWNrRGVsZXRlQnV0dG9uID0gZHJhd0RlY2tEZWxldGVCdXR0b24oKTtcbiAgICAgICAgICAgICAgICBkZWNrRGl2LmFwcGVuZENoaWxkKGRlY2tEZWxldGVCdXR0b24pO1xuICAgICAgICAgICAgICAgIGRlY2tEZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnZ3JvdycpO1xuICAgICAgICAgICAgICAgIGRlY2tUaXRsZURpdi5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsICd0cnVlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIGRyYXdCbGFua0RlY2soKTtcbiAgICB1cGRhdGVDdXJyZW50RGVja0RpdigpO1xuICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnREZWNrRGl2KTtcblxufVxuXG5cbmNvbnN0IGRyYXdEZWNrRGVsZXRlQnV0dG9uID0gKCkgPT4ge1xuICAgIGNvbnN0IGRlY2tEZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZWNrRGVsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVja0RlbGV0ZScpO1xuICAgIGRlY2tEZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZWNrRGVsZXRlJyk7XG4gICAgZGVja0RlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICctJ1xuICAgIHJldHVybiBkZWNrRGVsZXRlQnV0dG9uO1xufVxuXG5leHBvcnQgY29uc3QgZHJhd0RlY2tzID0gKGFycmF5T2ZEZWNrcykgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdydW5uaW5nIGRyYXdEZWNrcycpXG4gICAgY29uc3QgZGVja0FyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVja0FyZWEnKTtcbiAgICAvLyBjb25zb2xlLmxvZyhkZWNrQXJyYXlbMV0pO1xuICAgIGFycmF5T2ZEZWNrcy5mb3JFYWNoKGFEZWNrID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRlY2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRlY2tEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZWNrJyk7XG4gICAgICAgICAgICBkZWNrQXJlYS5hcHBlbmRDaGlsZChkZWNrRGl2KTtcblxuICAgICAgICAgICAgY29uc3QgZGVja1RpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkZWNrVGl0bGVEaXYuc2V0QXR0cmlidXRlKCdpZCcsICdkZWNrVGl0bGUnKTtcbiAgICAgICAgICAgIGRlY2tUaXRsZURpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RlY2tUaXRsZScpO1xuICAgICAgICAgICAgZGVja0Rpdi5hcHBlbmRDaGlsZChkZWNrVGl0bGVEaXYpO1xuICAgICAgICAgICAgZGVja1RpdGxlRGl2LnRleHRDb250ZW50ID0gYURlY2suZGVja05hbWU7XG5cbiAgICAgICAgICAgIGRlY2tEaXYuc2V0QXR0cmlidXRlKCdkYXRhLXRpdGxlJywgYCR7YURlY2suZGVja05hbWV9YCk7XG5cbiAgICAgICAgICAgIC8vIGNvbnN0IGVkaXREZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAvLyBlZGl0RGVjay5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2VkaXREZWNrJylcbiAgICAgICAgICAgIC8vIGRlY2tEaXYuYXBwZW5kQ2hpbGQoZWRpdERlY2spXG4gICAgICAgICAgICAvLyBlZGl0RGVjay50ZXh0Q29udGVudCA9ICdFZGl0JztcblxuICAgICAgICAgICAgLy9kZWNrRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdXBkYXRlQ3VycmVudERlY2spO1xuICAgICAgICAgICAgLy8gZGVja1RpdGxlRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdXBkYXRlQ3VycmVudERlY2spO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBlZGl0RGVjay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dGb3JtKTtcbiAgICAgICAgaWYoKGFycmF5T2ZEZWNrcy5pbmRleE9mKGFEZWNrKSkgIT09IDApe1xuICAgICAgICAgICAgY29uc3QgZGVja0RlbGV0ZUJ1dHRvbiA9IGRyYXdEZWNrRGVsZXRlQnV0dG9uKCk7XG4gICAgICAgICAgICBkZWNrRGl2LmFwcGVuZENoaWxkKGRlY2tEZWxldGVCdXR0b24pO1xuICAgICAgICAgICAgZGVja1RpdGxlRGl2LnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgJ3RydWUnKTtcbiAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICk7XG4gICAgLy8gZXJhc2VCbGFua0RlY2soKTtcbiAgICAvLyBkcmF3QmxhbmtEZWNrKCk7XG4gICAgLy8gdXBkYXRlQ3VycmVudERlY2tEaXYoKTtcbiAgICAvLyBzdHlsZUN1cnJlbnQoKTtcbiAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50RGVja0Rpdik7XG5cbn0iLCJjb25zdCBsYXlvdXQgPSAoKSA9PntcbiAgICBjb25zb2xlLmxvZyhgZHJhd2luZyBsYXlvdXRgKTtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRlbnQnKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgIFxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhaW5lcicpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICBcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsICdoZWFkZXInKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBcbiAgICBjb25zdCBkZWNrRG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlY2tEb2NrLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVja0RvY2snKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVja0RvY2spO1xuICAgIFxuICAgIGNvbnN0IGNhcmREb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyZERvY2suc2V0QXR0cmlidXRlKCdpZCcsICdjYXJkRG9jaycpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkRG9jayk7XG4gICAgXG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxvZ28uc2V0QXR0cmlidXRlKCdpZCcsICdsb2dvJyk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGxvZ28pO1xuICAgIGxvZ28udGV4dENvbnRlbnQgPSAnU2h1ZmZsZSc7XG4gICAgXG4gICAgY29uc3QgZGVja0RvY2tNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVja0RvY2tNZW51LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudScpO1xuICAgIGRlY2tEb2NrLmFwcGVuZENoaWxkKGRlY2tEb2NrTWVudSk7XG4gICAgXG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RpdGxlJyk7XG4gICAgZGVja0RvY2tNZW51LmFwcGVuZENoaWxkKGRpdik7XG4gICAgZGl2LnRleHRDb250ZW50ID0gJ0RlY2tzJztcbiAgICBcbiAgICBjb25zdCBhZGREZWNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWRkRGVja0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZERlY2tCdXR0b24nKTtcbiAgICBhZGREZWNrQnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGl0bGUnKVxuICAgIGFkZERlY2tCdXR0b24uY2xhc3NMaXN0LmFkZCgnZ3JvdycpO1xuICAgIGRlY2tEb2NrTWVudS5hcHBlbmRDaGlsZChhZGREZWNrQnV0dG9uKTtcbiAgICBhZGREZWNrQnV0dG9uLnRleHRDb250ZW50ID0gJysnO1xuICAgIFxuICAgIGNvbnN0IGRlY2tBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVja0FyZWEuc2V0QXR0cmlidXRlKCdpZCcsICdkZWNrQXJlYScpO1xuICAgIGRlY2tEb2NrLmFwcGVuZENoaWxkKGRlY2tBcmVhKTtcbiAgICBcbiAgICBjb25zdCBjYXJkRG9ja01lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkRG9ja01lbnUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51Jyk7XG4gICAgY2FyZERvY2suYXBwZW5kQ2hpbGQoY2FyZERvY2tNZW51KTtcbiAgICBcbiAgICBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0aXRsZScpO1xuICAgIGNhcmREb2NrTWVudS5hcHBlbmRDaGlsZChkaXYpO1xuICAgIGRpdi50ZXh0Q29udGVudCA9ICdDYXJkcyc7XG4gICAgXG4gICAgY29uc3QgYWRkQ2FyZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFkZENhcmRCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdhZGRDYXJkQnV0dG9uJyk7XG4gICAgYWRkQ2FyZEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RpdGxlJylcbiAgICBhZGRDYXJkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2dyb3cnKTtcbiAgICBjYXJkRG9ja01lbnUuYXBwZW5kQ2hpbGQoYWRkQ2FyZEJ1dHRvbik7XG4gICAgYWRkQ2FyZEJ1dHRvbi50ZXh0Q29udGVudCA9ICcrJztcbiAgICBcbiAgICBjb25zdCBjYXJkQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmRBcmVhLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2FyZEFyZWEnKTtcbiAgICBjYXJkRG9jay5hcHBlbmRDaGlsZChjYXJkQXJlYSk7XG4gICAgXG4gICAgcmV0dXJuIHtjb250ZW50LCBkZWNrQXJlYSwgY2FyZEFyZWF9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBsYXlvdXQ7XG4iLCJleHBvcnQgY29uc3QgZHJhd092ZXJsYXkgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2RyYXdpbmcgT3ZlcmxheScpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnN0IG92ZXJMYXlIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvdmVyTGF5SG9sZGVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY29udGVudCcpO1xuICAgIG92ZXJMYXlIb2xkZXIuc2V0QXR0cmlidXRlKCdpZCcsICdvdmVyTGF5SG9sZGVyJyk7XG4gICAgb3ZlckxheUhvbGRlci5jbGFzc0xpc3QuYWRkKCdvdmVyTGF5SG9sZGVyJyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChvdmVyTGF5SG9sZGVyKTtcbiAgICBcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgb3ZlcmxheS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ292ZXJsYXknKTtcbiAgICBvdmVyTGF5SG9sZGVyLmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuICAgIFxuICAgIGNvbnN0IGZvcm1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZm9ybURpdicpO1xuICAgIG92ZXJMYXlIb2xkZXIuYXBwZW5kQ2hpbGQoZm9ybURpdik7XG4gICAgXG4gICAgY29uc3QgbmV3Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld0Zvcm0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkQmlnJyk7XG4gICAgbmV3Rm9ybS5jbGFzc0xpc3QuYWRkKCdlZGl0U2l6ZScpO1xuICAgIG5ld0Zvcm0uc2V0QXR0cmlidXRlKCdpZCcsICduZXdGb3JtJyk7XG4gICAgZm9ybURpdi5hcHBlbmRDaGlsZChuZXdGb3JtKTtcblxuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzdWJtaXRCdXR0b25zRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc3VibWl0QnV0dG9uc0RpdicpO1xuICAgIGZvcm1EaXYuYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uc0Rpdik7XG4gICAgXG4gICAgY29uc3QgY2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FuY2VsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2hlY2snKTtcbiAgICBjYW5jZWwuc2V0QXR0cmlidXRlKCdpZCcsICdjYW5jZWwnKTtcbiAgICBjYW5jZWwuY2xhc3NMaXN0LmFkZCgnZ3JvdycpO1xuICAgIHN1Ym1pdEJ1dHRvbnNEaXYuYXBwZW5kQ2hpbGQoY2FuY2VsKTtcbiAgICBjYW5jZWwudGV4dENvbnRlbnQgPSAn4pyWJztcbiAgICBcbiAgICBjb25zdCBjaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNoZWNrLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2hlY2snKTtcbiAgICBzdWJtaXRCdXR0b25zRGl2LmFwcGVuZENoaWxkKGNoZWNrKTtcbiAgICBjaGVjay5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NoZWNrJyk7XG4gICAgY2hlY2suY2xhc3NMaXN0LmFkZCgnZ3JvdycpO1xuICAgIGNoZWNrLnRleHRDb250ZW50ID0gJ+Kckyc7XG59XG5cbmNvbnN0IHNldERlY2tPcHRpb25zID0gKGRlY2tBcnJheSwgY2FyZERlY2spID0+IHtcbiAgICBkZWNrQXJyYXkuZm9yRWFjaChkZWNrRWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnN0IGRlY2tPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgY2FyZERlY2suYXBwZW5kQ2hpbGQoZGVja09wdGlvbik7XG4gICAgICAgIGRlY2tPcHRpb24udmFsdWUgPSBkZWNrRWxlbWVudC5kZWNrTmFtZTtcbiAgICAgICAgZGVja09wdGlvbi50ZXh0Q29udGVudCA9IGRlY2tFbGVtZW50LmRlY2tOYW1lO1xuICAgIH0pXG59XG5cbmNvbnN0IGFkZE5ld1N0ZXBGaWVsZCA9IChlKSA9PiB7XG4gICAgaWYoZS5rZXlDb2RlID09PSAxMyl7XG4gICAgICAgIGNvbnNvbGUubG9nKGBwcmVzc2VkIEVOVEVSYCk7XG4gICAgICAgIGNvbnN0IHN0ZXAgPSBkcmF3U3RlcCgpO1xuICAgICAgICBzdGVwLmZvY3VzKCk7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgZHJhd1N0ZXAgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3RlcEhvbGRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGVwSG9sZGVyJyk7XG4gICAgY29uc3Qgc3RlcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgc3RlcC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3N0ZXAnKTtcbiAgICBzdGVwLmNsYXNzTGlzdC5hZGQoJ2lucHV0Jyk7XG4gICAgc3RlcEhvbGRlci5hcHBlbmRDaGlsZChzdGVwKTtcbiAgICBzdGVwLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3RlcCcpO1xuICAgIHN0ZXAuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBzdGVwLnNldEF0dHJpYnV0ZSgnbmFtZScsICdzdGVwJyk7XG4gICAgc3RlcC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJysgc3RlcCcpO1xuICAgIHN0ZXAuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBhZGROZXdTdGVwRmllbGQpO1xuICAgIFxuICAgIHJldHVybiBzdGVwO1xufVxuXG5jb25zdCBkcmF3Q2FyZEZvcm1GaWVsZHMgPSAoZGVja0FycmF5KSA9PiB7ICBcbiAgICBjb25zdCBuZXdGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld0Zvcm0nKTtcbiAgICBjb25zdCBjYXJkRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBjYXJkRm9ybS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmRGb3JtJyk7XG4gICAgbmV3Rm9ybS5hcHBlbmRDaGlsZChjYXJkRm9ybSk7XG4gICAgXG4gICAgY29uc3QgY2FyZFRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNhcmRUaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZFRpdGxlSW5wdXQnKTtcbiAgICBjYXJkVGl0bGVJbnB1dC5jbGFzc0xpc3QuYWRkKCdpbnB1dCcpO1xuICAgIGNhcmRGb3JtLmFwcGVuZENoaWxkKGNhcmRUaXRsZUlucHV0KTtcbiAgICBjYXJkVGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NhcmQtdGl0bGUnKTtcbiAgICBjYXJkVGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIGNhcmRUaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdjYXJkLXRpdGxlJyk7XG4gICAgY2FyZFRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdUaXRsZScpO1xuICAgIFxuICAgIGNvbnN0IGNhcmREZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgY2FyZERlY2suc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkRGVjaycpO1xuICAgIGNhcmREZWNrLnNldEF0dHJpYnV0ZSgnbXVsdGlwbGUnLCAnbXVsdGlwbGUnKTtcbiAgICBjYXJkRGVjay5jbGFzc0xpc3QuYWRkKCdpbnB1dCcpO1xuICAgIGNhcmRGb3JtLmFwcGVuZENoaWxkKGNhcmREZWNrKTtcbiAgICBjYXJkRGVjay5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NhcmREZWNrJyk7XG4gICAgY2FyZERlY2suc2V0QXR0cmlidXRlKCduYW1lJywgJ2NhcmREZWNrJyk7XG5cbiAgICBzZXREZWNrT3B0aW9ucyhkZWNrQXJyYXksIGNhcmREZWNrKTtcbiAgICBcbiAgICBjb25zdCBzdGVwSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3RlcEhvbGRlci5jbGFzc0xpc3QuYWRkKCdzdGVwSG9sZGVyJyk7XG4gICAgc3RlcEhvbGRlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N0ZXBIb2xkZXInKTtcbiAgICBjYXJkRm9ybS5hcHBlbmRDaGlsZChzdGVwSG9sZGVyKTtcbiAgICBcbiAgICBkcmF3U3RlcCgpO1xuICAgIFxuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGRhdGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkYXRlJyk7XG4gICAgZGF0ZS5jbGFzc0xpc3QuYWRkKCdpbnB1dCcpO1xuICAgIGNhcmRGb3JtLmFwcGVuZENoaWxkKGRhdGUpO1xuICAgIGRhdGUuc2V0QXR0cmlidXRlKCdpZCcsICdkYXRlJyk7XG4gICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgIGRhdGUuc2V0QXR0cmlidXRlKCduYW1lJywgJ2RhdGUnKTtcbiAgICBkYXRlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCBgYCk7XG4gICAgXG59XG5cbmNvbnN0IHJlc2V0RGVja09wdGlvbnMgPSAoKSA9PiB7XG4gICAgY29uc3QgZGVja1NlbGVjdG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmREZWNrJyk7XG4gICAgQXJyYXkuZnJvbShkZWNrU2VsZWN0b3IpLmZvckVhY2goZGVja0VsZW1lbnQgPT4ge1xuICAgICAgICBkZWNrRWxlbWVudC5yZW1vdmUoKTtcbiAgICB9KVxufVxuXG5cblxuY29uc3QgcmVzZXRGb3JtQ2FyZCA9ICgpID0+IHtcbiAgICBsZXQgYURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkLXRpdGxlJyk7XG4gICAgYURpdi52YWx1ZSA9ICcnO1xuICAgIGFEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RlcCcpO1xuICAgIGFEaXYudmFsdWUgPSAnJztcbiAgICBhRGl2LmNhcmREYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKS52YWx1ZTtcbiAgICBhRGl2LnZhbHVlID0gJyc7XG59XG5cbmNvbnN0IHNob3dDYXJkRm9ybSA9ICgpID0+IHtcbiAgICBzZXREZWNrT3B0aW9ucygpO1xuICAgIHNob3dGb3JtKCk7XG4gICAgZm9ybVR5cGUgPSAnY2FyZCc7XG4gICAgbGV0IGFEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RlcCcpO1xuICAgIGFEaXYuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICBhRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKTtcbiAgICBhRGl2LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgYURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkRGVjaycpO1xuICAgIGFEaXYuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICBhRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmQtdGl0bGUnKTtcbiAgICBhRGl2LnN0eWxlLmdyaWRSb3cgPSAnMS8yJztcbn1cblxuZXhwb3J0IGNvbnN0IGRyYXdOZXdDYXJkRm9ybSA9IChkZWNrQXJyYXksIHZhbHVlKSA9PiB7XG4gICAgY29uc29sZS5sb2coYGRyYXdpbmcgbmV3IGNhcmQgZm9ybSB2YWx1ZSBpcyAke3ZhbHVlfWApXG4gICAgaWYodmFsdWUgPT09IDIpe1xuICAgICAgICBkcmF3T3ZlcmxheSgpO1xuICAgICAgICBkcmF3Q2FyZEZvcm1GaWVsZHMoZGVja0FycmF5KTtcbiAgICB9XG59XG5cblxuXG4iLCJpbXBvcnQgeyBkcmF3T3ZlcmxheSB9IGZyb20gXCIuL0dVSU5ld0NhcmRcIjtcblxuXG5jb25zdCBkcmF3RGVja0Zvcm1GaWVsZHMgPSAoKSA9PntcbiAgICBjb25zdCBuZXdGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld0Zvcm0nKTtcbiAgICBjb25zdCBkZWNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBkZWNrRm9ybS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RlY2tGb3JtJyk7XG4gICAgZGVja0Zvcm0uc2V0QXR0cmlidXRlKCdvblN1Ym1pdCcsICdyZXR1cm4gZmFsc2U7Jyk7XG4gICAgbmV3Rm9ybS5hcHBlbmRDaGlsZChkZWNrRm9ybSk7XG4gICAgY29uc3QgbmV3RGVja1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBuZXdEZWNrVGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZWNrVGl0bGVJbnB1dCcpO1xuICAgIG5ld0RlY2tUaXRsZS5jbGFzc0xpc3QuYWRkKCdpbnB1dCcpO1xuICAgIGRlY2tGb3JtLmFwcGVuZENoaWxkKG5ld0RlY2tUaXRsZSk7XG4gICAgbmV3RGVja1RpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVjay10aXRsZScpO1xuICAgIG5ld0RlY2tUaXRsZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIG5ld0RlY2tUaXRsZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZGVjay10aXRsZScpO1xuICAgIG5ld0RlY2tUaXRsZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1RpdGxlJyk7XG4gICAgbmV3RGVja1RpdGxlLnN0eWxlLmdyaWRSb3cgPSAnMy80Jztcbn1cblxuY29uc3QgZHJhd05ld0RlY2tGb3JtID0gKHZhbHVlKSA9PiB7XG4gICAgY29uc29sZS5sb2coYGRyYXdpbmcgbmV3IGRlY2sgZm9ybSB2YWx1ZSBpcyAke3ZhbHVlfWApXG4gICAgaWYodmFsdWUgPT09IDEpe1xuICAgICAgICBkcmF3T3ZlcmxheSgpO1xuICAgICAgICBkcmF3RGVja0Zvcm1GaWVsZHMoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRyYXdOZXdEZWNrRm9ybTsiLCJjb25zdCBjYXJkID0gKG5hbWUpID0+IHtcbiAgY29uc3QgY2FyZE5hbWUgPSBuYW1lO1xuICBjb25zdCBjYXJkU3RlcHMgPSBbXTtcbiAgY29uc3QgY2FyZERhdGUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygpO1xuICBjb25zdCBjYXJkQ29tcGxldGVWYWx1ZSA9IDA7XG4gIGNvbnN0IGNhcmREZWNrcyA9IFtcImFsbFwiXTtcbiAgcmV0dXJuIHtcbiAgICBjYXJkTmFtZSxcbiAgICBjYXJkQ29tcGxldGVWYWx1ZSxcbiAgICBjYXJkRGF0ZSxcbiAgICBjYXJkU3RlcHMsXG4gICAgY2FyZERlY2tzLFxuICB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IGNhcmQ7XG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IGNhcmQgZnJvbSBcIi4vY2FyZFwiO1xuaW1wb3J0IGRlY2sgZnJvbSBcIi4vZGVja1wiO1xuXG5leHBvcnQgY29uc3QgYWxsID0gZGVjayhcImFsbFwiKTtcbmNvbnNvbGUubG9nKGFsbCk7XG5leHBvcnQgY29uc3QgZGVja0FycmF5ID0gW107XG5kZWNrQXJyYXkucHVzaChhbGwpO1xuZXhwb3J0IGNvbnN0IHRhYmxlID0gZGVja0FycmF5O1xuZXhwb3J0IGNvbnN0IGRlZmF1bHREZWNrID0gZGVjaygnVG8tRG8nKTtcbmV4cG9ydCBjb25zdCBkZWZhdWx0Q2FyZCA9IGNhcmQoJ0dldCBHcm9jZXJpZXMnKTtcbmV4cG9ydCBjb25zdCBkZWZhdWx0Q2FyZDIgPSBjYXJkKCdNYWlsIFRoYW5rIFlvdSBOb3RlcycpO1xuYWxsLmNhcmRzQXJyYXkucHVzaChkZWZhdWx0Q2FyZCk7XG5hbGwuY2FyZHNBcnJheS5wdXNoKGRlZmF1bHRDYXJkMik7XG5kZWZhdWx0Q2FyZC5jYXJkU3RlcHMucHVzaChgVGhpcyBpcyB0YXNrIGNhcmQuYCk7XG5kZWZhdWx0Q2FyZC5jYXJkU3RlcHMucHVzaChgQ2xpY2sgb24gYW55IHRleHQgZmllbGQgdG8gZWRpdCB0aGUgcHJvcGVydHlgKTtcbmRlZmF1bHRDYXJkLmNhcmRTdGVwcy5wdXNoKGBQcmVzcyB0aGUgbmV4dCBhcnJvdyB0byB0aGUgcmlnaHQgdG8gc2VlIHRoZSBuZXh0IGNhcmQuYCk7XG5kZWZhdWx0Q2FyZDIuY2FyZFN0ZXBzLnB1c2goYENsaWNrIHRoZSBkZWxldGUgYnV0dG9uIG9uIGEgY2FyZCB0byByZW1vdmUgZnJvbSB0aGUgY3VycmVudCAoc2VsZWN0ZWQpIGRlY2suYCk7XG5kZWZhdWx0Q2FyZDIuY2FyZFN0ZXBzLnB1c2goYFRvIHBlcm1hbmVudGx5IGRlbGV0ZSBhIGNhcmQsIGRlbGV0ZSBmcm9tIHRoZSBhbGwgZGVjay5gKTtcbmRlZmF1bHRDYXJkMi5jYXJkU3RlcHMucHVzaChgQ3JlYXRlIGNhcmRzIG9yIGRlY2tzIGJ5IHByZXNzaW5nIHRoZSAnKycgYnV0dG9ucy5gKTtcbmRlZmF1bHREZWNrLmNhcmRzQXJyYXkucHVzaChkZWZhdWx0Q2FyZC5jYXJkTmFtZSk7XG5kZWZhdWx0RGVjay5jYXJkc0FycmF5LnB1c2goZGVmYXVsdENhcmQyLmNhcmROYW1lKTtcbmRlY2tBcnJheS5wdXNoKGRlZmF1bHREZWNrKTtcblxuXG4gICAgY29uc3Qgdmlld0FsbCA9ICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGBBbGwgY2FyZHMgYXJlOiAke2FsbH1gKTtcbiAgICAgIGNvbnNvbGUubG9nKGBhbGwgZGVja3MgYXJlOiAke3RhYmxlfWApO1xuICAgICAgYWxsLmNhcmRzQXJyYXkuZm9yRWFjaCgoY2FyZEVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYGFsbCArICR7Y2FyZEVsZW1lbnR9YCk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3Qgdmlld0RlY2sgPSAobmFtZSkgPT4ge1xuICAgICAgbGV0IGN1cnJlbnREZWNrO1xuICAgICAgbGV0IHdhc01hdGNoZWQgPSBmYWxzZTtcbiAgICAgIHRhYmxlLmZvckVhY2goKGRlY2tFbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW4gZm9yIGVhY2hcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKGRlY2tFbGVtZW50KTtcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudERlY2spO1xuICAgICAgICBjb25zb2xlLmxvZyh0eXBlb2YgY3VycmVudERlY2spO1xuICAgICAgICBpZiAoZGVja0VsZW1lbnQuZGVja05hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgICBjdXJyZW50RGVjayA9IGRlY2tFbGVtZW50O1xuICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnREZWNrKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyh0eXBlb2YgY3VycmVudERlY2spO1xuICAgICAgICAgIHdhc01hdGNoZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmICh3YXNNYXRjaGVkID09PSBmYWxzZSkge1xuICAgICAgICBjdXJyZW50RGVjayA9IGFsbDtcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudERlY2spO1xuICAgICAgICBjb25zb2xlLmxvZyh0eXBlb2YgY3VycmVudERlY2spO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2codHlwZW9mIGN1cnJlbnREZWNrKTtcbiAgICAgIGNvbnNvbGUubG9nKGAke2N1cnJlbnREZWNrLmRlY2tOYW1lfSBjb250ZW50cyBhcmU6IGApO1xuICAgICAgY3VycmVudERlY2suY2FyZHNBcnJheS5mb3JFYWNoKChjYXJkRWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhjYXJkRWxlbWVudCk7XG4gICAgICB9KTtcbiAgICAgIFxuICAgIH07XG5cbiAgICBleHBvcnQgY29uc3QgY3JlYXRlRGVjayA9IChuYW1lKSA9PiB7XG4gICAgICAgIC8vIGNvbnN0IHRoZU5hbWUgPSBwcm9tcHQoJ1doYXQgaXMgdGhlIG5hbWUgb2YgdGVoIGRlY2s/JylcbiAgICAgIGNvbnN0IHRoaXNEZWNrID0gZGVjayhuYW1lKTtcbiAgICAgIHRhYmxlLnB1c2godGhpc0RlY2spO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJ0aGUgZGVjayBjcmVhdGVkIGlzOiBcIiArIHRoaXNEZWNrKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiaXRzIG5hbWUgaXM6IFwiICsgdGhpc0RlY2suZGVja05hbWUpO1xuICAgIH07XG5cbiAgICBleHBvcnQgY29uc3QgYWRkQ2FyZHRvRGVjayA9ICh0aGlzQ2FyZCwgdGhpc0RlY2spID0+IHtcbiAgICAgICAgdGhpc0NhcmQuY2FyZERlY2sgPSB0aGlzRGVjay5kZWNrTmFtZTtcbiAgICAgICAgdGhpc0RlY2suY2FyZHNBcnJheS5wdXNoKHRoaXNDYXJkLmNhcmROYW1lKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpc0RlY2spO1xuICAgICAgfTtcblxuICAgIFxuXG4gICAgZXhwb3J0IGNvbnN0IGdldENhcmQgPSAobmFtZSkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhuYW1lKVxuICAgICAgbGV0IHRoaXNDYXJkO1xuICAgICAgLy8gY29uc29sZS5sb2codGhpc0NhcmQpO1xuICAgICAgLy8gY29uc29sZS5sb2coYWxsLmxlbmd0aCk7XG4gICAgICBjb25zb2xlLmxvZyhhbGwuY2FyZHNBcnJheSk7XG4gICAgICBhbGwuY2FyZHNBcnJheS5mb3JFYWNoKChjYXJkRWxlbWVudCkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhjYXJkRWxlbWVudC5jYXJkTmFtZSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG5hbWUpO1xuICAgICAgICBpZiAoY2FyZEVsZW1lbnQuY2FyZE5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgJHtjYXJkRWxlbWVudC5jYXJkTmFtZX0gPT09ICR7bmFtZX1gKTtcbiAgICAgICAgICB0aGlzQ2FyZCA9IGNhcmRFbGVtZW50O1xuICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXNDYXJkKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgLy8gICBpZiAodGhlQ2FyZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gICAgIC8vIGNvbnN0IGNhcmROYW1lID0gcHJvbXB0KFxuICAgIC8vICAgICAvLyAgIFwidGhhdCBjYXJkIGRvZXMgbm90IGV4aXN0LCBwbGVhc2UgZW50ZXIgYW5vdGhlciBuYW1lOlwiXG4gICAgLy8gICAgIC8vICk7XG4gICAgLy8gICAgIC8vIHRoZUNhcmQgPSBnZXRDYXJkKGNhcmROYW1lKTtcbiAgICAvLyAgIH1cbiAgICAgIC8vY29uc29sZS5sb2coYHRoZSBjYXJkIGdldHRpbmcgcmV0dXJuZWQgaXM6ICR7dGhpc0NhcmQuY2FyZE5hbWV9YClcbiAgICAgIHJldHVybiB0aGlzQ2FyZDtcbiAgICB9O1xuXG4gICAgZXhwb3J0IGNvbnN0IGdldERlY2sgPSAobmFtZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ0dFVFRJTkcgREVDSycpO1xuICAgICAgbGV0IHRoZURlY2s7XG4gICAgICBjb25zb2xlLmxvZyhgdGhlIGRlY2sgYXJyYXkgaXMgJHtkZWNrQXJyYXl9YCk7XG4gICAgICBkZWNrQXJyYXkuZm9yRWFjaChkZWNrRWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGhlICBkZWNrIG5hbWUgaXM6IFwiICsgZGVja0VsZW1lbnQuZGVja05hbWUpO1xuICAgICAgICBpZiAoZGVja0VsZW1lbnQuZGVja05hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIml0IG1hdGNoZWQhXCIpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGRlY2tFbGVtZW50LmRlY2tOYW1lLCBuYW1lKTtcbiAgICAgICAgICB0aGVEZWNrID0gZGVja0VsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKFwiZ2V0dGluZyBkZWNrOiBcIiArIHRoZURlY2suZGVja05hbWUpO1xuICAgICAgLy8gaWYgKHRoZURlY2sgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gICBjb25zdCBkZWNrTmFtZSA9IHByb21wdChcbiAgICAgIC8vICAgICBcInRoYXQgZGVjayBkb2VzIG5vdCBleGlzdCwgcGxlYXNlIGVudGVyIGFub3RoZXIgbmFtZTpcIlxuICAgICAgLy8gICApO1xuICAgICAgLy8gICB0aGVEZWNrID0gZ2V0RGVjayhkZWNrTmFtZSk7XG4gICAgICAvLyB9XG4gICAgICBjb25zb2xlLmxvZyh0aGVEZWNrKTtcbiAgICAgIHJldHVybiB0aGVEZWNrO1xuICAgIH07XG5cbiAgICBleHBvcnQgY29uc3QgY3JlYXRlQ2FyZCA9IChuYW1lKSA9PiB7XG4gICAgICAgIC8vIGNvbnN0IHRoZU5hbWUgPSBwcm9tcHQoJ1doYXQgaXMgdGhlIG5hbWUgb2YgdGhlIGNhcmQ/JylcbiAgICAgIGNvbnN0IG5ld0NhcmQgPSBjYXJkKG5hbWUpO1xuICAgICAgLy8gY29uc3QgbmFtZU9mRGVjayA9IHByb21wdCgnd2hhdCBkZWNrPycpO1xuICAgICAgLy8gbmV3Q2FyZC5jYXJkRGVja3MucHVzaChuYW1lT2ZEZWNrKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKG5ld0NhcmQuY2FyZERlY2tzKTtcbiAgICAgIC8vIG5ld0NhcmQuY2FyZERlY2tzLmZvckVhY2goZGVja05hbWUgPT4ge1xuICAgICAgLy8gICBpZihkZWNrTmFtZSAhPT0gJ2FsbCcpe1xuICAgICAgLy8gICBjb25zdCB0aGlzRGVjayA9IGdldERlY2soZGVja05hbWUpO1xuICAgICAgLy8gICBjb25zb2xlLmxvZygnYWRkaW5nIGh0ZSBmdWxsb3dpbmcgY2FyZCB0byB0aGUgZm9sbG93aW5nIGRlY2sgJysgbmV3Q2FyZC5jYXJkTmFtZSArIFwiIFwiICsgdGhpc0RlY2suZGVja05hbWUpO1xuICAgICAgLy8gICBhZGRDYXJkdG9EZWNrKG5ld0NhcmQsIHRoaXNEZWNrKVxuICAgICAgLy8gICB9XG4gICAgICAgIFxuICAgICAgLy8gfSlcbiAgICBhbGwuY2FyZHNBcnJheS5wdXNoKG5ld0NhcmQpO1xuICAgIGNvbnNvbGUubG9nKGFsbC5jYXJkc0FycmF5KTtcbiAgICByZXR1cm4gbmV3Q2FyZDtcbiAgICBcbiAgICB9O1xuXG4gICAgXG5cbiAgICBleHBvcnQgY29uc3QgZGVsZXRlQ2FyZEZyb21EZWNrID0gKHRoaXNDYXJkLCB0aGlzRGVjaykgPT4ge1xuICAgICAgY29uc3QgaW5kZXggPSB0aGlzRGVjay5jYXJkc0FycmF5LmluZGV4T2YodGhpc0NhcmQuY2FyZE5hbWUpO1xuICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgdGhpc0RlY2suY2FyZHNBcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXNEZWNrO1xuICAgIH07XG5cbiAgICBleHBvcnQgY29uc3QgZGVsZXRlQ2FyZCA9ICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdkZWxldGluZycpXG4gICAgICBjb25zdCBjYXJkRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmRUaXRsZScpO1xuICAgICAgY29uc3QgYUNhcmROYW1lID0gY2FyZERpdi50ZXh0Q29udGVudDtcbiAgICAgIGNvbnN0IHRoaXNDYXJkID0gZ2V0Q2FyZChhQ2FyZE5hbWUpO1xuICAgICAgY29uc3QgaW5kZXggPSBhbGwuY2FyZHNBcnJheS5pbmRleE9mKHRoaXNDYXJkKTtcbiAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIGFsbC5jYXJkc0FycmF5LnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhhbGwpO1xuICAgICAgcmV0dXJuIGFsbDtcbiAgICB9O1xuXG4gICAgZXhwb3J0IGNvbnN0IGRlbGV0ZURlY2sgPSAoYURlY2tOYW1lKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnREVMRVRFSU5HIERFQ0sgSU4gQ09OVFJPTExTJylcbiAgICAgIGNvbnNvbGUubG9nKGBkZWNrIG5hbWUgaXMgJHthRGVja05hbWV9YClcbiAgICAgIGNvbnN0IGRlY2tPYmogPSBnZXREZWNrKGFEZWNrTmFtZSk7XG4gICAgICBjb25zb2xlLmxvZyhgZ28gdGhlIGRlY2sgb2JqZWN0IGNhbGxlZCAke2RlY2tPYmouZGVja05hbWV9YCk7XG4gICAgICBjb25zdCBpbmRleCA9IGRlY2tBcnJheS5pbmRleE9mKGRlY2tPYmopO1xuICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgZGVja0FycmF5LnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhgREVDSyBBUlJBWSBJUyAke2RlY2tBcnJheX1gKTtcbiAgICAgIHJldHVybiBkZWNrQXJyYXk7XG4gICAgfTtcblxuICAgIGNvbnN0IG1vdmVDYXJkID0gKHRoZUNhcmROYW1lLCBkZWNrT25lTmFtZSwgZGVja1R3b05hbWUpID0+IHtcbiAgICAgIGNvbnN0IHRoaXNDYXJkID0gZ2V0Q2FyZCh0aGVDYXJkTmFtZSk7XG4gICAgICBjb25zdCBkZWNrT25lID0gZ2V0RGVjayhkZWNrT25lTmFtZSk7XG4gICAgICBjb25zdCBkZWNrVHdvID0gZ2V0RGVjayhkZWNrVHdvTmFtZSk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzQ2FyZCwgZGVja09uZSwgZGVja1R3byk7XG4gICAgICBkZWxldGVDYXJkRnJvbURlY2sodGhpc0NhcmQsIGRlY2tPbmUpO1xuICAgICAgYWRkQ2FyZHRvRGVjayh0aGlzQ2FyZCwgZGVja1R3byk7XG4gICAgfTtcblxuICAgIGNvbnN0IHZpZXdDYXJkID0gKHRoZUNhcmROYW1lKSA9PiB7XG4gICAgICBjb25zdCB0aGlzQ2FyZCA9IGdldENhcmQodGhlQ2FyZE5hbWUpO1xuICAgICAgZm9yIChjb25zdCBwcm9wIGluIHRoaXNDYXJkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBvYmouJHtwcm9wfSA9ICR7dGhpc0NhcmRbcHJvcF19YCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHNldERhdGUgPSAodGhlQ2FyZE5hbWUpID0+IHtcbiAgICAgIGNvbnN0IHRoaXNDYXJkID0gZ2V0Q2FyZCh0aGVDYXJkTmFtZSk7XG4gICAgICBjb25zdCBhRGF0ZSA9IHByb21wdChcImVudGVyIHRoZSBkdWUgZGF0ZSBpbiB0aGUgZm9ybSBvZiBNTS5ERC5ZWTpcIik7XG4gICAgICB0aGlzQ2FyZC5jYXJkRGF0ZSA9IG5ldyBEYXRlKGFEYXRlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgYWRkU3RlcCA9ICh0aGVDYXJkTmFtZSkgPT4ge1xuICAgICAgY29uc3QgdGhpc0NhcmQgPSBnZXRDYXJkKHRoZUNhcmROYW1lKTtcbiAgICAgIGNvbnN0IGkgPSB0aGlzQ2FyZC5jYXJkU3RlcHMubGVuZ3RoO1xuICAgICAgdGhpc0NhcmQuY2FyZFN0ZXBzW2ldID0gcHJvbXB0KFwiZW50ZXIgeW91ciBzdGVwOlwiKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0U3RlcCA9ICh0aGVDYXJkTmFtZSkgPT4ge1xuICAgICAgY29uc3QgdGhpc0NhcmQgPSBnZXRDYXJkKHRoZUNhcmROYW1lKTtcbiAgICAgIGNvbnN0IGkgPSBwcm9tcHQoXCJ3aGF0IGluZGV4P1wiKTtcbiAgICAgIHRoaXNDYXJkLmNhcmRTdGVwc1tpXSA9IHByb21wdChcImVudGVyIHlvdXIgc3RlcDpcIik7XG4gICAgfTtcblxuICAgIGNvbnN0IHNldENvbXBsZXRlID0gKHRoZUNhcmROYW1lKSA9PiB7XG4gICAgICBjb25zdCB0aGlzQ2FyZCA9IGdldENhcmQodGhlQ2FyZE5hbWUpO1xuICAgICAgdGhpc0NhcmQuY2FyZENvbXBsZXRlVmFsdWUgPSBOdW1iZXIoXG4gICAgICAgIHByb21wdChcbiAgICAgICAgICBcImlzIHlvdXIgdGFzayBjb21wbGV0ZT8gSWYgc28sIGVudGVyIGEgJzEnIG90aGVyd2lzZSBlbmV0ZXIgJzAnLlwiXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfTtcblxuICAgIC8vIHJldHVybiB7XG4gICAgLy8gICB2aWV3QWxsLFxuICAgIC8vICAgdmlld0NhcmQsXG4gICAgLy8gICB2aWV3RGVjayxcbiAgICAvLyAgIGNyZWF0ZUNhcmQsXG4gICAgLy8gICBjcmVhdGVEZWNrLFxuICAgIC8vICAgZ2V0Q2FyZCxcbiAgICAvLyAgIGdldERlY2ssXG4gICAgLy8gICBhZGRDYXJkdG9EZWNrLFxuICAgIC8vICAgZGVsZXRlQ2FyZEZyb21EZWNrLFxuICAgIC8vICAgZGVsZXRlQ2FyZCxcbiAgICAvLyAgIGRlbGV0ZURlY2ssXG4gICAgLy8gICBtb3ZlQ2FyZCxcbiAgICAvLyAgIHNldERhdGUsXG4gICAgLy8gICBhZGRTdGVwLFxuICAgIC8vICAgc2V0Q29tcGxldGUsXG4gICAgLy8gICBzZXRTdGVwLFxuICAgIC8vIH07XG5cblxuIiwiY29uc3QgZGVjayA9IChuYW1lKSA9PiB7XG4gIGNvbnN0IGRlY2tOYW1lID0gbmFtZTtcbiAgY29uc3QgY2FyZHNBcnJheSA9IFtdO1xuICBjb25zdCBib29rbWFyayA9IDA7XG4gIHJldHVybiB7XG4gICAgZGVja05hbWUsXG4gICAgY2FyZHNBcnJheSxcbiAgICBib29rbWFyayxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRlY2s7XG4iLCJpbXBvcnQgKiBhcyBjb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxzJztcbmltcG9ydCB7ZGVmYXVsdERlY2ssIGRlY2tBcnJheSwgYWxsfSBmcm9tICcuL2NvbnRyb2xscyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBndWkgZnJvbSAnLi9HVUknO1xuaW1wb3J0IGNhcmQgZnJvbSAnLi9jYXJkJztcbmltcG9ydCB7ZHJhd1N0ZXB9IGZyb20gJy4vR1VJTmV3Q2FyZCc7XG5pbXBvcnQgeyBkcmF3Q2FyZFN0ZXAgfSBmcm9tICcuL0dVSUNhcmRzJztcblxubGV0IGN1cnJlbnREZWNrID0gZGVmYXVsdERlY2s7XG5sZXQgY3VycmVudENhcmQ7XG5sZXQgY3VycmVudERlY2tEaXY7XG5sZXQgZm9ybVZhbHVlID0gMDtcbmxldCBjYXJkVmlld1ZhbHVlID0gMDtcblxuY29uc3QgZ2V0Qm9va21hcmtlZENhcmQgPSAoYURlY2spID0+IHtcbiAgICBjb25zb2xlLmxvZyhgdGhlIGN1cnJlbnQgZGVjayBpcyAke2FEZWNrfWApO1xuICAgIGNvbnN0IHRoaXNCb29rbWFyayA9IGFEZWNrLmJvb2ttYXJrO1xuICAgIGNvbnNvbGUubG9nKGB0aGUgYm9va21ha3IgaXMgJHthRGVjay5ib29rbWFya31gKTtcbiAgICBsZXQgdGhpc0NhcmROYW1lID0gYURlY2suY2FyZHNBcnJheVt0aGlzQm9va21hcmtdO1xuICAgIGNvbnNvbGUubG9nKGB0aGlzIGNhcmQgbmFtZSBpcyAke3RoaXNDYXJkTmFtZX1gKTtcbiAgICBjb25zdCB0eXBlID0gdHlwZW9mKHRoaXNDYXJkTmFtZSk7XG4gICAgaWYodHlwZSAhPT0gXCJzdHJpbmdcIil7XG4gICAgICAgIGlmKHRoaXNDYXJkTmFtZSAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIHRoaXNDYXJkTmFtZSA9IHRoaXNDYXJkTmFtZS5jYXJkTmFtZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvL2NvbnNvbGUubG9nKGBib29rbXJrZWQgY3JkIGlzICR7dGhpc0NhcmROYW1lfWApO1xuICAgIGNvbnN0IGFDYXJkID0gY29udHJvbGxlci5nZXRDYXJkKHRoaXNDYXJkTmFtZSk7XG4gICAgcmV0dXJuIGFDYXJkO1xufVxuY29uc3QgdXBkYXRlQ3VycmVudENhcmQgPSAoKSA9PiB7XG4gICAgY3VycmVudENhcmQgPSBnZXRCb29rbWFya2VkQ2FyZChjdXJyZW50RGVjayk7XG4gICAgLy9jb25zb2xlLmxvZyhgY3VycmVudCBjYXJkIGhhcyBiZWVuIHVwZGF0ZWQgdG8gJHtjdXJyZW50Q2FyZC5jYXJkTmFtZX1gKTtcbn1cblxudXBkYXRlQ3VycmVudENhcmQoKTtcbmd1aShkZWNrQXJyYXksIGN1cnJlbnREZWNrLCBjYXJkVmlld1ZhbHVlLCBjdXJyZW50Q2FyZCk7XG5cbmNvbnN0IGFkdmFuY2VCb29rbWFyayA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygncnVubmluZyBhZHZhbmNlIGJvb2ttYXJrJylcbiAgICBjdXJyZW50RGVjay5ib29rbWFyaysrO1xuICAgIGlmKGN1cnJlbnREZWNrLmNhcmRzQXJyYXlbY3VycmVudERlY2suYm9va21hcmtdICE9PSB1bmRlZmluZWQpe1xuICAgICAgICByZWZyZXNoKCk7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIGN1cnJlbnREZWNrLmJvb2ttYXJrLS07XG4gICAgICAgIHJlZnJlc2goKTtcbiAgICB9XG59XG5cbmNvbnN0IHByZXZpb3VzQm9va21hcmsgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3J1bm5pbmcgcHJldmlvdXMgYm9va21hcmsnKVxuICAgIGN1cnJlbnREZWNrLmJvb2ttYXJrLS07XG4gICAgY29uc29sZS5sb2coY3VycmVudERlY2suYm9va21hcmspO1xuICAgIGlmKGN1cnJlbnREZWNrLmNhcmRzQXJyYXlbY3VycmVudERlY2suYm9va21hcmtdICE9PSB1bmRlZmluZWQpe1xuICAgICAgICBjb25zb2xlLmxvZygnYm9va21hcmsgd2FzIGRlZmluZWQnKVxuICAgICAgICByZWZyZXNoKCk7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIGN1cnJlbnREZWNrLmJvb2ttYXJrKys7XG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnREZWNrLmJvb2ttYXJrKTtcbiAgICAgICAgcmVmcmVzaCgpO1xuICAgIH1cbiAgICBcbn1cblxuY29uc3Qgc2VsZWN0RGVjayA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgbGV0IG5hbWVPZkRlY2sgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGl0bGUnKTtcbiAgICBjb25zb2xlLmxvZyhgbmFtZU9mRGVjayBpcyAke25hbWVPZkRlY2t9YClcbiAgICAvLyBpZihuYW1lT2ZEZWNrID09PSBudWxsKXtcbiAgICAvLyAgICAgbmFtZU9mRGVjayA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRpdGxlJyk7XG4gICAgLy8gfVxuICAgIGN1cnJlbnREZWNrID0gY29udHJvbGxlci5nZXREZWNrKG5hbWVPZkRlY2spO1xuICAgIHJlZnJlc2goKTtcblxufVxuXG5jb25zdCBhZGREZWNrID0gKCkgPT4ge1xuICAgIGZvcm1WYWx1ZSA9IDE7XG4gICAgcmVmcmVzaCgpO1xufVxuXG5jb25zdCBzYXZlRGVjayA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdGl0bGVUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlY2stdGl0bGUnKS52YWx1ZTtcbiAgICAgICAgY29udHJvbGxlci5jcmVhdGVEZWNrKHRpdGxlVGV4dCk7XG4gICAgICAgIGNsZWFyRm9ybSgpO1xuICAgICAgICByZWZyZXNoKCk7ICBcbn1cblxuY29uc3Qgc2F2ZURlY2tPbkVudGVyID0gKGUpID0+IHtcbiAgICBpZihlLmtleUNvZGUgPT09IDEzKXtcbiAgICAgICAgY29uc3QgdGl0bGVUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlY2stdGl0bGUnKS52YWx1ZTtcbiAgICAgICAgY29udHJvbGxlci5jcmVhdGVEZWNrKHRpdGxlVGV4dCk7XG4gICAgICAgIGNsZWFyRm9ybSgpO1xuICAgICAgICByZWZyZXNoKCk7XG4gICAgfVxuXG59XG5cbmNvbnN0IGNsZWFyRm9ybSA9ICgpID0+IHtcbiAgICBmb3JtVmFsdWUgPSAwO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlckxheUhvbGRlcicpO1xuICAgIGZvcm0ucmVtb3ZlKCk7XG59XG5cbmNvbnN0IGRlbGV0ZUFuZEVyYXNlRGVjayA9IChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coYGVyYXNpbmcgYW5kIGRlbGV0aW5nIGRlY2suJHtjdXJyZW50RGVjay5kZWNrTmFtZX1gKVxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3QgZGVsZXRlRGl2ID0gZS50YXJnZXQ7XG4gICAgY29uc3QgZGVja0RpdiA9IGRlbGV0ZURpdi5wYXJlbnRFbGVtZW50O1xuICAgIGNvbnN0IGRlY2tUaXRsZURpdiA9IGRlY2tEaXYuZmlyc3RDaGlsZDtcbiAgICBjb25zdCBkZWNrVGl0bGUgPSBkZWNrVGl0bGVEaXYudGV4dENvbnRlbnQ7XG4gICAgY29uc3QgY3VycmVudERlY2tJbmRleCA9IGRlY2tBcnJheS5pbmRleE9mKGN1cnJlbnREZWNrKTtcbiAgICBjb25zb2xlLmxvZyhgdGhlIGluZGV4IG9mIHRoZSBjdXJyZW5EZWNrIGlzICR7Y3VycmVudERlY2tJbmRleH1gKVxuICAgIGNvbnRyb2xsZXIuZGVsZXRlRGVjayhkZWNrVGl0bGUpO1xuICAgIGlmKGN1cnJlbnREZWNrLmRlY2tOYW1lID09PSBkZWNrVGl0bGUpe1xuICAgICAgICBjb25zb2xlLmxvZyhgdGhlIGRlY2sgZGVsZXRlZCB3YXMgdGhlIGN1cnJlbnQgZGVjay5gKVxuICAgICAgICBpZihkZWNrQXJyYXkubGVuZ3RoIDwgMil7XG4gICAgICAgICAgICBjdXJyZW50RGVjayA9IGFsbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGN1cnJlbnREZWNrID0gZGVja0FycmF5W2N1cnJlbnREZWNrSW5kZXggLSAxXTtcbiAgICAgICAgICAgIHJlZnJlc2goKTtcbiAgICAgICAgfVxuICAgICAgICByZWZyZXNoKCk7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIHJlZnJlc2goKTtcbiAgICB9XG4gICAgcmVmcmVzaCgpO1xuICAgIGNvbnNvbGUubG9nKGBBRlRFUiBERUxFVEUgY3VycmVudERlY2sgaXMgJHtjdXJyZW50RGVjay5kZWNrTmFtZX1gKTtcbn1cblxuY29uc3Qgc2F2ZVRpdGxlID0gKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZygnc2F2aW5nIGNoYW5nZSB0byB0aXRsZScpO1xuICAgIGNvbnN0IHRleHQgPSBlLnRhcmdldC50ZXh0Q29udGVudDtcbiAgICBjb25zb2xlLmxvZyh0ZXh0KTtcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50RGVjay5ib29rbWFyayk7XG4gICAgY29uc29sZS5sb2coY3VycmVudERlY2suY2FyZHNBcnJheVtjdXJyZW50RGVjay5ib29rbWFya10pO1xuICAgIGNvbnN0IHRoZUNhcmQgPSBjb250cm9sbGVyLmdldENhcmQoY3VycmVudERlY2suY2FyZHNBcnJheVtjdXJyZW50RGVjay5ib29rbWFya10pO1xuICAgIGNvbnNvbGUubG9nKHRoZUNhcmQpO1xuICAgIHRoZUNhcmQuY2FyZE5hbWUgPSB0ZXh0O1xuICAgIGN1cnJlbnREZWNrLmNhcmRzQXJyYXlbY3VycmVudERlY2suYm9va21hcmtdID0gdGV4dDtcbiAgICBjb25zb2xlLmxvZyh0aGVDYXJkLmNhcmROYW1lKTtcbn1cblxuY29uc3Qgc2F2ZVN0ZXAgPSAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGBTQVZJTkcgU1RFUCFgKVxuICAgIGlmKGUua2V5Q29kZSA9PT0gMTMpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGRhdGFJbmRleCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpO1xuICAgICAgICAvL2NvbnN0IGluaXRpYWxUZXh0ID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XG4gICAgICAgIC8vY29uc3Qgc3RlcFN0cmluZyA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xuICAgICAgICAvL2NvbnNvbGUubG9nKGBzdGVwU3RyaW5nIGlzICR7c3RlcFN0cmluZ31gKTtcbiAgICAgICAgY29uc3QgdGhlQ2FyZCA9IGNvbnRyb2xsZXIuZ2V0Q2FyZChjdXJyZW50RGVjay5jYXJkc0FycmF5W2N1cnJlbnREZWNrLmJvb2ttYXJrXSk7XG4gICAgICAgIC8vY29uc3QgaW5kZXggPSB0aGVDYXJkLmNhcmRTdGVwcy5pbmRleE9mKHN0ZXBTdHJpbmcpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKGB0aGUgY2FyZCBzdGVwcyBhcmU6ICR7dGhlQ2FyZC5jYXJkU3RlcHN9YCk7XG4gICAgICAgIGNvbnN0IHRleHQgPSBlLnRhcmdldC50ZXh0Q29udGVudDtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhgdGV4dCBpcyAke3RleHR9YCk7XG4gICAgICAgIC8vY29uc29sZS5sb2coYGluZGV4IGlzICR7aW5kZXh9YCk7XG4gICAgICAgIGlmKHRleHQgIT09ICcnKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBTdGVwIGlzIE5PVCBlbXB0eWApXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgVGhlIGxlbmd0aCBvZiB0aGUgYXJyYXkgb2Ygc3RlcHMgaXMgJHt0aGVDYXJkLmNhcmRTdGVwcy5sZW5ndGh9YClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGB0aGUgc3Rlc3AgYXQgZGF0YUluZGV4IGlzICR7dGhlQ2FyZC5jYXJkU3RlcHNbZGF0YUluZGV4XX1gKTtcbiAgICAgICAgICAgIGlmKHRoZUNhcmQuY2FyZFN0ZXBzLmxlbmd0aCA8IDEpe1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgY2FyZCBzdGVwcyBsZXNzIHRoYW4gMWApXG4gICAgICAgICAgICAgICAgICAgIHRoZUNhcmQuY2FyZFN0ZXBzLnB1c2godGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoZUNhcmQuY2FyZFN0ZXBzW2RhdGFJbmRleF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoZUNhcmQuY2FyZFN0ZXBzW2RhdGFJbmRleF0gPSB0ZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhlQ2FyZC5jYXJkU3RlcHMucHVzaCh0ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG5ld1N0ZXBEaXYgPSBkcmF3Q2FyZFN0ZXAoKTtcbiAgICAgICAgICAgIG5ld1N0ZXBEaXYuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBzYXZlU3RlcCk7XG4gICAgICAgICAgICBuZXdTdGVwRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBzdG9wRW50ZXJDYXJkKTtcbiAgICAgICAgICAgIG5ld1N0ZXBEaXYuZm9jdXMoKTtcblxuICAgICAgICAgICAgZS50YXJnZXQuYmx1cigpO1xuICAgICAgICAgICAgY29uc3QgY2FyZFN0ZXBzRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmRTdGVwcycpO1xuICAgICAgICAgICAgY29uc3QgdGhpc1N0ZXAgPSBjYXJkU3RlcHNEaXYubGFzdENoaWxkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBpZihlLnRhcmdldC5oYXNGb2N1cygpID09PSBmYWxzZSl7XG4gICAgICAgICAgICAvLyAgICAgdGhpc1N0ZXAucmVtb3ZlKCk7XG4gICAgICAgICAgICAvLyB9ICBcbn1cblxuY29uc3QgZGVsZXRlQW5kRXJhc2VDYXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IHRoaXNDYXJkTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkVGl0bGUnKS50ZXh0Q29udGVudDtcbiAgICBjb25zb2xlLmxvZyhgdGhlIGNhcmQgbmFtZSBnb3R0ZW4gaXMgJHt0aGlzQ2FyZE5hbWV9YCk7XG4gICAgY29uc3QgdGhpc0NhcmQgPSBjb250cm9sbGVyLmdldENhcmQodGhpc0NhcmROYW1lKTtcbiAgICBjb25zb2xlLmxvZyhgdGhlIGNhcmQgcmV0dXJuZWQgd2FzICR7dGhpc0NhcmQuY2FyZE5hbWV9YCk7XG4gICAgaWYoY3VycmVudERlY2sgPT09IGFsbCl7XG4gICAgICAgIHRoaXNDYXJkLmNhcmREZWNrcy5mb3JFYWNoKGRlY2tFbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRoaXNEZWNrID0gY29udHJvbGxlci5nZXREZWNrKGRlY2tFbGVtZW50KTtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuZGVsZXRlQ2FyZEZyb21EZWNrKHRoaXNDYXJkLCB0aGlzRGVjayk7XG4gICAgICAgIH0pXG4gICAgICAgIGNvbnRyb2xsZXIuZGVsZXRlQ2FyZCh0aGlzQ2FyZCk7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIGNvbnRyb2xsZXIuZGVsZXRlQ2FyZEZyb21EZWNrKHRoaXNDYXJkLCBjdXJyZW50RGVjayk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGBjdXJyZW50IGRlY2sgaXMgc3RpbGwgJHtjdXJyZW50RGVjay5kZWNrTmFtZX1gKTtcbiAgICBjb25zb2xlLmxvZyhgY3VycmVudCBkZWNrIGxlbmd0aCBpcyAke2N1cnJlbnREZWNrLmNhcmRzQXJyYXkubGVuZ3RofWApO1xuICAgIGlmKGN1cnJlbnREZWNrLmNhcmRzQXJyYXkubGVuZ3RoIDwgMil7XG4gICAgICAgIGN1cnJlbnREZWNrLmJvb2ttYXJrID0gMDtcbiAgICAgICAgY29uc29sZS5sb2coYGN1cnJlbnQgZGVjayBib29rbWFyayBpcyBub3cke2N1cnJlbnREZWNrLmJvb2ttYXJrfWApO1xuICAgIH1cbiAgICByZWZyZXNoKCk7IFxuICAgIC8vIGNvbnRyb2xsZXIuZGVsZXRlQ2FyZCgpO1xuICAgIC8vcG9wdWxhdGVDYXJkKCk7XG59XG5cbmNvbnN0IGFkZENhcmQgPSAoKSA9PiB7XG4gICAgZm9ybVZhbHVlID0gMjtcbiAgICByZWZyZXNoKCk7ICAgICBcbn1cblxuXG5jb25zdCBlcmFzZUdVSSA9ICgpID0+IHtcbiAgICBjb25zdCBkZWNrcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RlY2snKTtcbiAgICBBcnJheS5mcm9tKGRlY2tzKS5mb3JFYWNoKGRlY2tFbGVtZW50ID0+IFxuICAgICAgICBkZWNrRWxlbWVudC5yZW1vdmUoKSk7XG4gICAgY29uc3QgY2FyZEFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZEFyZWEnKTtcbiAgICBjb25zdCBjYXJkcyA9IGNhcmRBcmVhLmNoaWxkTm9kZXM7XG4gICAgQXJyYXkuZnJvbShjYXJkcykuZm9yRWFjaChjYXJkRWxlbWVudCA9PiB7XG4gICAgICAgIGNhcmRFbGVtZW50LnJlbW92ZSgpO1xuICAgIH0pXG59XG5cbi8vIGNvbnN0IHVwZGF0ZUN1cnJlbnREZWNrRGl2ID0gKCkgPT4ge1xuLy8gICAgIC8vIGNvbnNvbGUubG9nKCdpbSB1cGRhdGVpbmcgdGhlIGN1cnJlbnQgRElWJylcbi8vICAgICBjb25zdCB0aGVDdXJyZW50RGVja05hbWUgPSBjdXJyZW50RGVjay5kZWNrTmFtZTtcbi8vICAgICAvLyBjb25zb2xlLmxvZygndGhlQ3VycmVudERlY2tOYW1lIGlzICsgJyArIHRoZUN1cnJlbnREZWNrTmFtZSk7XG4vLyAgICAgY29uc3QgZGVja0RpdnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkZWNrJyk7XG4vLyAgICAgQXJyYXkuZnJvbShkZWNrRGl2cykuZm9yRWFjaChkZWNrRGl2ID0+IHtcbi8vICAgICAgICAgY29uc3QgdGl0bGVEaXYgPSBkZWNrRGl2LmNoaWxkcmVuWzBdO1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhkZWNrRGl2KTtcbi8vICAgICAgICAgY29uc29sZS5sb2codGhlQ3VycmVudERlY2tOYW1lKTtcbi8vICAgICAgICAgY29uc29sZS5sb2coYGRvZXMgJHt0aXRsZURpdn0gYW5kICR7dGhlQ3VycmVudERlY2tOYW1lfSBtYXRjaD9gKVxuLy8gICAgICAgICBpZih0aXRsZURpdi50ZXh0Q29udGVudCA9PT0gdGhlQ3VycmVudERlY2tOYW1lKXtcbi8vICAgICAgICAgICAgIGN1cnJlbnREZWNrRGl2ID0gZGVja0Rpdjtcbi8vICAgICAgICAgfVxuLy8gICAgIH0pXG4gICAgXG4vLyAgICAgLy8gY29uc29sZS5sb2coZGVja0RpdnMpO1xuLy8gICAgIC8vIEFycmF5LmZyb20oZGVja0RpdnMpLmZvckVhY2goZGVja0RpdiA9PiB7XG4vLyAgICAgLy8gICAgIGNvbnNvbGUubG9nKCd0aGUgZGVja1RpdGxlaXMgJysgZGVja1RpdGxlRGl2KTtcbi8vICAgICAvLyAgICAgaWYoZGVja0Rpdi5maXJzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudCA9PT0gdGhlQ3VycmVudERlY2tOYW1lKXtcbi8vICAgICAvLyAgICAgICAgIGN1cnJlbnREZWNrRGl2ID0gZGVja0Rpdjtcbi8vICAgICAvLyAgICAgfVxuLy8gICAgIC8vIH0pXG4vLyB9XG5cbi8vIGNvbnN0IHVwZGF0ZUN1cnJlbnREZWNrID0gKGUpID0+IHtcbi8vICAgICByZW1vdmVTZWxlY3RlZFN0eWxlKCk7XG4vLyAgICAgLy8gY29uc29sZS5sb2coJ2ltIFVQREFUSW5HIScpO1xuLy8gICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmlubmVySFRNTCk7XG4vLyAgICAgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZWNrJykpe1xuLy8gICAgICAgICBjb25zb2xlLmxvZygnY2xpY2tlZG9uIERFQ0sgRElWJylcbi8vICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXRpdGxlJykpXG4vLyAgICAgICAgIGNvbnN0IHRoZURlY2tOYW1lID0gKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS10aXRsZScpKTtcbi8vICAgICAgICAgY3VycmVudERlY2sgPSBjb250cm9sbGVyLmdldERlY2sodGhlRGVja05hbWUpO1xuLy8gICAgIH1cbi8vICAgICBlbHNlIHtcbi8vICAgICAgICAgY29uc29sZS5sb2coJ2NsaWNrZWRvbiBUSVRMRSBESVYnKVxuLy8gICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC50ZXh0Q29udGVudClcbi8vICAgICAgICAgY29uc3QgdGhlRGVja05hbWUgPSAoZS50YXJnZXQudGV4dENvbnRlbnQpO1xuLy8gICAgICAgICBjdXJyZW50RGVjayA9IGNvbnRyb2xsZXIuZ2V0RGVjayh0aGVEZWNrTmFtZSk7XG4vLyAgICAgfVxuICAgIFxuLy8gICAgIC8vIGNvbnNvbGUubG9nKCdnb25uYSB1cGRhdGUgY3VycmVudCBkZWNrIGRpdicpO1xuLy8gICAgIHVwZGF0ZUN1cnJlbnREZWNrRGl2KCk7XG4vLyAgICAgLy8gY29uc29sZS5sb2coJ2dvbm5hIHN0eWxlIGN1cnJlbnQgZGVjRGl2ICcgKyBjdXJyZW50RGVja0Rpdik7XG4vLyAgICAgc3R5bGVDdXJyZW50KCk7XG4vLyAgICAgcG9wdWxhdGVDYXJkKCk7XG4vLyB9XG5cbi8vIGNvbnN0IHVwZGF0ZUN1cnJlbnREZWNrQnlOYW1lID0gKG5hbWUpID0+IHtcbi8vICAgICByZW1vdmVTZWxlY3RlZFN0eWxlKCk7XG4vLyAgICAgLy8gY29uc29sZS5sb2coJ2ltIFVQREFUSW5HIScpO1xuICAgIFxuLy8gICAgIGNvbnN0IHRoZURlY2tOYW1lID0gbmFtZTtcbi8vICAgICBjdXJyZW50RGVjayA9IGNvbnRyb2xsZXIuZ2V0RGVjayh0aGVEZWNrTmFtZSk7XG4vLyAgICAgLy8gY29uc29sZS5sb2coJ2dvbm5hIHVwZGF0ZSBjdXJyZW50IGRlY2sgZGl2Jyk7XG4vLyAgICAgdXBkYXRlQ3VycmVudERlY2tEaXYoKTtcbi8vICAgICAvLyBjb25zb2xlLmxvZygnZ29ubmEgc3R5bGUgY3VycmVudCBkZWNEaXYgJyArIGN1cnJlbnREZWNrRGl2KTtcbi8vICAgICBzdHlsZUN1cnJlbnQoKTtcbi8vICAgICBwb3B1bGF0ZUNhcmQoKTtcbi8vIH1cblxuY29uc3Qgc2F2ZURhdGUgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IHRoaXNDYXJkTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkVGl0bGUnKS50ZXh0Q29udGVudDtcbiAgICBjb25zdCB0aGlzQ2FyZCA9IGNvbnRyb2xsZXIuZ2V0Q2FyZCh0aGlzQ2FyZE5hbWUpO1xuICAgIGlmKGUua2V5Q29kZSA9PT0gMTMpe1xuICAgICAgICB0aGlzQ2FyZC5jYXJkRGF0ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICBcbiAgICB9XG4gICAgcmVmcmVzaCgpO1xufVxuXG5jb25zdCBlZGl0RGF0ZSA9IChlKSA9PiB7XG4gICAgY29uc3QgZGF0ZVBpY2tlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZGF0ZVBpY2tlci5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgIGRhdGVQaWNrZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdpbnB1dCcpO1xuICAgIGRhdGVQaWNrZXIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIGUudGFyZ2V0LmFwcGVuZENoaWxkKGRhdGVQaWNrZXIpO1xuICAgIGRhdGVQaWNrZXIuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHNhdmVEYXRlKTtcbn1cblxuY29uc3Qgc2F2ZURlY2tUaXRsZSA9IChlKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coJ3NhdmluZyBjaGFuZ2UgdG8gdGl0bGUnKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCB0ZXh0ID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XG4gICAgY3VycmVudERlY2suZGVja05hbWUgPSB0ZXh0O1xufVxuXG5jb25zdCBzdG9wRW50ZXIgPSAoZSkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKCdzYXZpbmcgY2hhbmdlIHRvIHRpdGxlJyk7XG4gICAgaWYoZS5rZXlDb2RlID09PSAxMyl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2F2ZURlY2tUaXRsZShlKTtcbiAgICAgICAgZS50YXJnZXQuYmx1cigpO1xuXG4gICAgfVxuICAgXG59XG5jb25zdCBzdG9wRW50ZXJDYXJkID0gKGUpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZygnc2F2aW5nIGNoYW5nZSB0byB0aXRsZScpO1xuICAgIGlmKGUua2V5Q29kZSA9PT0gMTMpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNhdmVTdGVwKGUpO1xuICAgIH0gIFxufVxuLy8gY29uc3QgZXJhc2VTdGVwcyA9ICgpID0+IHtcbi8vICAgICBjb25zdCBzdGVwc0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkU3RlcHMnKTtcbi8vICAgICBjb25zdCBzdGVwcyA9IHN0ZXBzRGl2LmNoaWxkcmVuO1xuLy8gICAgIEFycmF5LmZyb20oc3RlcHMpLmZvckVhY2goc3RlcEVsZW1lbnQgPT4ge1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhgcmVtb3ZpbmcgJHtzdGVwRWxlbWVudH0gZnJvbSAke3N0ZXBzRGl2fWApXG4vLyAgICAgICAgIHN0ZXBFbGVtZW50LnJlbW92ZSgpO1xuLy8gICAgIH0pXG4gICAgXG4vLyB9XG4vLyBjb25zdCBzaG93Rm9ybSA9ICgpID0+IHtcbi8vICAgICAvLyBjb25zb2xlLmxvZygnc2hvd2luZyBmb3JtIScpO1xuLy8gICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlckxheUhvbGRlcicpO1xuLy8gICAgIGZvcm0uc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbi8vIH1cbi8vIGNvbnN0IGhpZGVGb3JtID0gKCkgPT4ge1xuLy8gICAgIGNvbnNvbGUubG9nKCdoaWRpbmcgZm9ybSEnKTtcbi8vICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJMYXlIb2xkZXInKTtcbi8vICAgICBmb3JtLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbi8vICAgICBsZXQgYURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGVwJyk7XG4vLyAgICAgYURpdi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4vLyAgICAgYURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlJyk7XG4vLyAgICAgYURpdi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4vLyAgICAgYURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkRGVjaycpO1xuLy8gICAgIGFEaXYuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuLy8gfVxuY29uc3Qgc2F2ZUNhcmQgPSAoKSA9PiB7XG4gICAgbGV0IGlzQ3VycmVudCA9IDA7XG4gICAgbGV0IGFDYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmQtdGl0bGUnKS52YWx1ZTtcbiAgICBhQ2FyZCA9IGNvbnRyb2xsZXIuY3JlYXRlQ2FyZChhQ2FyZCk7XG4gICAgY29uc3Qgc3RlcENvbGxlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdGVwJyk7XG4gICAgQXJyYXkuZnJvbShzdGVwQ29sbGVjdGlvbikuZm9yRWFjaChzdGVwID0+IHtcbiAgICAgICAgYUNhcmQuY2FyZFN0ZXBzLnB1c2goc3RlcC52YWx1ZSk7XG4gICAgfSlcblxuICAgIGFDYXJkLmNhcmREYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKS52YWx1ZTtcbiAgICBjb25zdCBkZWNrTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkRGVjaycpO1xuICAgIGNvbnN0IGNvbGxlY3Rpb24gPSBkZWNrTGlzdC5zZWxlY3RlZE9wdGlvbnM7XG4gICAgY29uc29sZS5sb2coYHRoZSBjdXJyZW50IGRlY2sgd2FzICR7Y3VycmVudERlY2t9YCk7XG4gICAgaWYoY29sbGVjdGlvbi5sZW5ndGggPCAyICl7XG4gICAgICAgIGNvbnN0IHRoZVNlbGVjdGVkRGVjayA9IGNvbGxlY3Rpb25bMF0udGV4dENvbnRlbnQ7XG4gICAgICAgIGNvbnN0IHRoZURlY2tOYW1lID0gdGhlU2VsZWN0ZWREZWNrO1xuICAgICAgICBjdXJyZW50RGVjayA9IGNvbnRyb2xsZXIuZ2V0RGVjayh0aGVEZWNrTmFtZSk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGB0aGUgY3VycmVudCBkZWNrIGlzIG5vdyAke2N1cnJlbnREZWNrfWApO1xuICAgIGNvbnNvbGUubG9nKGBzZWxlY3RlZCBvcHRpb25zIGNvbGxlY3Rpb24gaXMgJHtjb2xsZWN0aW9ufWApO1xuICAgIEFycmF5LmZyb20oY29sbGVjdGlvbikuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhgdGhpcyBvcHRpb24gaXMgJHtvcHRpb259IGl0J3MgdmFsdWUgaXMgJHtvcHRpb24udmFsdWV9YCk7XG4gICAgICAgICAgICBhQ2FyZC5jYXJkRGVja3MucHVzaChvcHRpb24udmFsdWUpOyBcbiAgICAgICAgICAgIGlmKG9wdGlvbi52YWx1ZSA9PT0gY3VycmVudERlY2suZGVja05hbWUpe1xuICAgICAgICAgICAgICAgIGlzQ3VycmVudCA9IDE7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7b3B0aW9uLnZhbHVlfSBpcyAke2N1cnJlbnREZWNrLmRlY2tOYW1lfWApO1xuICAgICAgICAgICAgfSBcbiAgICB9KVxuICAgIGFDYXJkLmNhcmREZWNrcy5mb3JFYWNoKGRlY2tOYW1lU3RyaW5nID0+IHtcbiAgICAgICAgaWYoZGVja05hbWVTdHJpbmcgIT09ICdhbGwnKXtcbiAgICAgICAgICAgIGNvbnN0IGFEZWNrID0gY29udHJvbGxlci5nZXREZWNrKGRlY2tOYW1lU3RyaW5nKVxuICAgICAgICAgICAgY29udHJvbGxlci5hZGRDYXJkdG9EZWNrKGFDYXJkLCBhRGVjayk7XG4gICAgICAgIH1cbiAgICB9KVxuICAgIGlmKGlzQ3VycmVudCA9PT0gMSl7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke2N1cnJlbnREZWNrLmJvb2ttYXJrfSBpcyB0aGUgY3VycmVudCBib29rbWFyayBvZiB0aGUgY3VycmVudCBkZWNrLmApXG4gICAgICAgIGNvbnNvbGUubG9nKGBidXQgbm93IGl0IHdpbGwgYmUgJHtjdXJyZW50RGVjay5jYXJkc0FycmF5LmluZGV4T2YoYUNhcmQuY2FyZE5hbWUpfWApO1xuICAgICAgICAvLyBjb25zdCB0aGVDYXJkQm9va21hcmsgPSBjdXJyZW50RGVjay5jYXJkc0FycmF5LmluZGV4T2YoYUNhcmQuY2FyZE5hbWUpO1xuICAgICAgICBjdXJyZW50RGVjay5ib29rbWFyayA9IGN1cnJlbnREZWNrLmNhcmRzQXJyYXkuaW5kZXhPZihhQ2FyZC5jYXJkTmFtZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGB0aGUgY3VycmVudCBkZWNrIGJvb2ttYXJrIGlzIG5vdyAke2N1cnJlbnREZWNrLmJvb2ttYXJrfWApO1xuICAgICAgICBpc0N1cnJlbnQgPSAwO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhgc2F2aW5nIGNhcmQuIGN1cnJlbnQgZGVjayBpcyAke2N1cnJlbnREZWNrfWApO1xuICAgIGNvbnNvbGUubG9nKGN1cnJlbnREZWNrLmJvb2ttYXJrKTtcbiAgICBjbGVhckZvcm0oKTtcbiAgICByZWZyZXNoKCk7XG4gICAgXG59XG4vLyBjb25zdCBzYXZlRm9ybSA9ICgpID0+IHtcbi8vICAgICAvLyBjb25zb2xlLmxvZygnc2F2ZSB0eXBlIGlzOiAnKyBmb3JtVHlwZSk7XG4vLyAgICAgaWYoZm9ybVR5cGUgPT09J2RlY2snKXtcbi8vICAgICAgICAgY29uc29sZS5sb2coJ3NhdmluZyBkZWNrIScpXG4vLyAgICAgICAgIHNhdmVEZWNrKCk7XG4vLyAgICAgfVxuLy8gICAgIGVsc2UgaWYoZm9ybVR5cGUgPT09ICdjYXJkJyl7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCdzYXZpbmcgY2FyZCEnKVxuLy8gICAgICAgICBzYXZlQ2FyZCgpO1xuLy8gICAgICAgICBwb3B1bGF0ZUNhcmQoKTtcbi8vICAgICB9XG4vLyB9XG5jb25zdCBzZXREZWNrRGVsZXRlTGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIGNvbnN0IGRpdkNvbGxlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkZWNrRGVsZXRlJyk7XG4gICAgQXJyYXkuZnJvbShkaXZDb2xsZWN0aW9uKS5mb3JFYWNoKGRpdiA9PiB7XG4gICAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZUFuZEVyYXNlRGVjaylcbiAgICB9KVxufVxuXG5jb25zdCBzZWxlY3REZWNrTGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIGNvbnN0IGRlY2tDb2xsZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGVjaycpO1xuICAgIEFycmF5LmZyb20oZGVja0NvbGxlY3Rpb24pLmZvckVhY2goZGVja0RpdiA9PiB7XG4gICAgICAgZGVja0Rpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNlbGVjdERlY2spO1xuICAgIH0pXG4gICAgY29uc3QgZGVja1RpdGxlRGl2cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RlY2tUaXRsZScpO1xuICAgIEFycmF5LmZyb20oZGVja1RpdGxlRGl2cykuZm9yRWFjaChkZWNrVGl0bGVEaXYgPT4ge1xuICAgICAgICBkZWNrVGl0bGVEaXYuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBzYXZlRGVja1RpdGxlKTtcbiAgICAgICAgZGVja1RpdGxlRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBzdG9wRW50ZXIpO1xuICAgIH0pXG4gICAgXG59XG5cbmNvbnN0IHNldFBsdXNMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgY29uc3QgYWRkRGVja0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGREZWNrQnV0dG9uJyk7XG4gICAgYWRkRGVja0Rpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZERlY2spO1xuICAgIGNvbnN0IGFkZENhcmREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkQ2FyZEJ1dHRvbicpO1xuICAgIGFkZENhcmREaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRDYXJkKTtcbn1cblxuY29uc3Qgc2V0Rm9ybUJ1dHRvbkxpc3RlbmVycyA9ICgpID0+IHtcbiAgICBjb25zdCBjb25maXJtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoZWNrJyk7XG4gICAgY29uc3QgY2FuY2VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbmNlbCcpO1xuICAgIGlmKGZvcm1WYWx1ZSA9PT0gMSl7XG4gICAgICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVjay10aXRsZScpO1xuICAgIGlmKHRpdGxlSW5wdXQgIT09IG51bGwpe1xuICAgICAgICB0aXRsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgc2F2ZURlY2tPbkVudGVyKTtcbiAgICB9XG4gICAgaWYoY29uZmlybSAhPT0gbnVsbCl7XG4gICAgICAgIGNvbmZpcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzYXZlRGVjayk7XG4gICAgfVxuICAgIH1cbiAgICBpZihmb3JtVmFsdWUgPT09IDIpe1xuICAgICAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmQtdGl0bGUnKTtcbiAgICBpZih0aXRsZUlucHV0ICE9PSBudWxsKXtcbiAgICAgICAgLy90aXRsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgc2F2ZUNhcmRPbkVudGVyKTtcbiAgICB9XG4gICAgaWYoY29uZmlybSAhPT0gbnVsbCl7XG4gICAgICAgIGNvbmZpcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzYXZlQ2FyZCk7XG4gICAgfVxuICAgIH1cbiAgICBcbiAgICBpZihjYW5jZWwgIT09IG51bGwpe1xuICAgICAgICBjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGVhckZvcm0pO1xuICAgIH1cbiAgICBcbn1cblxuY29uc3Qgc2V0Q2FyZGxpc3RlbmVycyA9ICgpID0+IHtcbiAgICBjb25zdCBjYXJkRGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmREZWxldGUnKVxuICAgIGlmKGNhcmREZWxldGVCdXR0b24gIT09IG51bGwpe1xuICAgICAgICBjYXJkRGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlQW5kRXJhc2VDYXJkKTtcbiAgICB9XG4gICAgY29uc3Qgc3RlcERpdnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdGVwRGl2Jyk7XG4gICAgaWYoc3RlcERpdnMgIT09IG51bGwpe1xuICAgIEFycmF5LmZyb20oc3RlcERpdnMpLmZvckVhY2goc3RlcERpdiA9PiB7XG4gICAgICAgc3RlcERpdi5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgc2F2ZVN0ZXApO1xuICAgIH0pXG4gICAgfVxuICAgIGNvbnN0IGNhcmRUaXRsZURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkVGl0bGUnKTtcbiAgICBpZihjYXJkVGl0bGVEaXYgIT09IG51bGwpe1xuICAgICAgICBjYXJkVGl0bGVEaXYuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBzYXZlVGl0bGUpO1xuICAgICAgICBjYXJkVGl0bGVEaXYuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHN0b3BFbnRlckNhcmQpO1xuICAgIH1cbiAgICBjb25zdCBjYXJkUGx1c0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkUGx1cycpO1xuICAgIGlmKGNhcmRQbHVzRGl2ICE9PSBudWxsKXtcbiAgICAgICAgY2FyZFBsdXNEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRDYXJkKTtcbiAgICB9XG4gICAgY29uc3QgY2FyZERhdGVEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZERhdGUnKTtcbiAgICBpZihjYXJkRGF0ZURpdiAhPT0gbnVsbCl7XG4gICAgICAgIGNhcmREYXRlRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZWRpdERhdGUpO1xuICAgIH1cblxufVxuXG5jb25zdCBhZGRFdmVudExpc3RlbmVycyA9IChlbGVtZW50TmFtZSwgYUZ1bmN0aW9uKSA9PntcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7ZWxlbWVudE5hbWV9YCk7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFGdW5jdGlvbik7XG59XG5cbmNvbnN0IGFkZEZvcndhcmRCYWNrd2FyZExpc3RlbmVycyA9ICgpID0+IHtcbiAgICBhZGRFdmVudExpc3RlbmVycygnZm9yd2FyZEJ1dHRvbicsIGFkdmFuY2VCb29rbWFyayk7XG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoJ2JhY2t3YXJkQnV0dG9uJywgcHJldmlvdXNCb29rbWFyayk7XG59XG5cbmNvbnN0IHNldExpc3RlbmVycyA9ICgpID0+IHtcbiAgICBzZWxlY3REZWNrTGlzdGVuZXJzKCk7XG4gICAgc2V0UGx1c0xpc3RlbmVycygpO1xuICAgIHNldEZvcm1CdXR0b25MaXN0ZW5lcnMoKTtcbiAgICBzZXREZWNrRGVsZXRlTGlzdGVuZXJzKCk7XG4gICAgc2V0Q2FyZGxpc3RlbmVycygpO1xuICAgIGFkZEZvcndhcmRCYWNrd2FyZExpc3RlbmVycygpO1xufVxuXG5jb25zdCByZWZyZXNoID0gKCkgPT4ge1xuICAgIHVwZGF0ZUN1cnJlbnRDYXJkKCk7XG4gICAgZXJhc2VHVUkoKTtcbiAgICBndWkoZGVja0FycmF5LCBjdXJyZW50RGVjaywgZm9ybVZhbHVlLCBjYXJkVmlld1ZhbHVlLCBjdXJyZW50Q2FyZCk7XG4gICAgc2V0TGlzdGVuZXJzKClcbn1cblxucmVmcmVzaCgpO1xuXG4vLyBjb25zdCBlcmFzZVRvcENhcmQgPSAoKSA9PiB7XG4vLyAgICAgY29uc3Qgb2xkQ2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3BDYXJkJyk7XG4vLyAgICAgb2xkQ2FyZC5yZW1vdmUoKTtcbi8vICAgICBkcmF3VG9wQ2FyZCgpO1xuLy8gfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
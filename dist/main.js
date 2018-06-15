(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a href=\"https://github.com/owsolutions/amazing-time-picker\" class=\"forker\">\r\n    <img style=\"position: absolute; top: 0; right: 0; border: 0;\" src=\"https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67\"\r\n        alt=\"Fork me on GitHub\" data-canonical-src=\"https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png\">\r\n</a>\r\n\r\n<nav class=\"nav-extended\">\r\n    <div class=\"nav-wrapper\">\r\n        <div class=\"container\">\r\n            <a href=\"#\" class=\"brand-logo\">\r\n                <img [src]=\"logo\" alt=\"Amazing Time Picker\">\r\n            </a>\r\n        </div>\r\n    </div>\r\n</nav>\r\n <div class=\"nav-content\">\r\n    <div class=\"container\">\r\n        <ul class=\"tabs tabs-transparent\">\r\n            <li class=\"tab\">\r\n                <a routerLink=\"/Examples\" routerLinkActive=\"active\">Examples</a>\r\n            </li>\r\n            <li class=\"tab\">\r\n                <a routerLink=\"/API\" routerLinkActive=\"active\">API</a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n\r\n</div>\r\n<div id=\"main-container\" class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col l9\">\r\n                <router-outlet></router-outlet>\r\n            </div>\r\n            <div class=\"col l3 right-acc hide-on-med-and-down\">\r\n                    <h1>Amazing Time Picker (Clock)</h1> \r\n                    <a href=\"https://camo.githubusercontent.com/5188f22e80981bc2c6b3f4361ca8286083239d13/68747470733a2f2f7472617669732d63692e6f72672f6f77736f6c7574696f6e732f616d617a696e672d74696d652d7069636b65722e7376673f6272616e63683d6d6173746572\" target=\"_blank\"><img src=\"https://camo.githubusercontent.com/5188f22e80981bc2c6b3f4361ca8286083239d13/68747470733a2f2f7472617669732d63692e6f72672f6f77736f6c7574696f6e732f616d617a696e672d74696d652d7069636b65722e7376673f6272616e63683d6d6173746572\" alt=\"Build Status\" data-canonical-src=\"https://travis-ci.org/owsolutions/amazing-time-picker.svg?branch=master\" style=\"max-width:100%;\"></a> \r\n                    <a href=\"https://opensource.org/licenses/MIT\" rel=\"nofollow\"><img src=\"https://camo.githubusercontent.com/311762166ef25238116d3cadd22fcb6091edab98/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c6963656e73652d4d49542d626c75652e737667\" alt=\"License: MIT\" data-canonical-src=\"https://img.shields.io/badge/License-MIT-blue.svg\" style=\"max-width:100%;\"></a>\r\n                            \r\n                            <p>This is time picker for angular projects, for Angular Material 4.</p>\r\n                            <p>A visual time picker for angular 2+ projects. You can use this timepicker with Angular 2, 4 and Angular Material.</p>\r\n                            \r\n                            <pre class=\"npm\"><code>npm i amazing-time-picker --save</code></pre>\r\n            </div>\r\n        </div>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  width: 100%;\n  overflow: hidden;\n  height: 275px;\n  text-align: center;\n  color: #555;\n  font-family: 'Dancing Script', cursive;\n  background: #00c6ff;\n  background: linear-gradient(to bottom, #becfe4, #fafafa); }\n\n.forker {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 150px;\n  height: 150px;\n  z-index: 100; }\n\n.nav-wrapper .container {\n  text-align: center;\n  height: 150px; }\n\n.nav-wrapper .container .brand-logo p {\n    font-size: 20px;\n    margin: 0px; }\n\n.nav-wrapper .container .brand-logo img {\n    margin-top: 30px;\n    width: 100px; }\n\n.nav-content {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1000;\n  background: #ee6e72;\n  box-shadow: 0px 6px 8px 0px #ddd; }\n\n.nav-content .tab {\n    text-transform: none; }\n\n.nav-content .tab a {\n      font-size: 16px !important; }\n\n.nav-content .tab a.active {\n        border-bottom: 3px solid #fff; }\n\n.npm {\n  background: #717171;\n  padding: 10px;\n  border-radius: 5px;\n  color: #ffffcc; }\n\n.right-acc {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 48px;\n  text-align: center; }\n\n.right-acc h1 {\n    text-align: center;\n    font-size: 1.4em;\n    border-bottom: 1px solid #ddd;\n    padding-bottom: 15px;\n    margin-bottom: 15px;\n    margin-top: 43px; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.logo = __webpack_require__(/*! ./atp.png */ "./src/app/atp.png");
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.router */ "./src/app/app.router.ts");
/* harmony import */ var _atp_library_atp_time_picker_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./atp-library/atp-time-picker.module */ "./src/app/atp-library/atp-time-picker.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _presentation_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./presentation/tabs/tabs.component */ "./src/app/presentation/tabs/tabs.component.ts");
/* harmony import */ var _presentation_tab_tab_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./presentation/tab/tab.component */ "./src/app/presentation/tab/tab.component.ts");
/* harmony import */ var _presentation_example_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./presentation/example/example.component */ "./src/app/presentation/example/example.component.ts");
/* harmony import */ var _presentation_api_api_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./presentation/api/api.component */ "./src/app/presentation/api/api.component.ts");
/* harmony import */ var _presentation_examples_example_persian_example_persian_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./presentation/examples/example-persian/example-persian.component */ "./src/app/presentation/examples/example-persian/example-persian.component.ts");
/* harmony import */ var _presentation_examples_example_arabic_example_arabic_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./presentation/examples/example-arabic/example-arabic.component */ "./src/app/presentation/examples/example-arabic/example-arabic.component.ts");
/* harmony import */ var _presentation_examples_example_material_example_material_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./presentation/examples/example-material/example-material.component */ "./src/app/presentation/examples/example-material/example-material.component.ts");
/* harmony import */ var _presentation_examples_example_hour_example_hour_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./presentation/examples/example-hour/example-hour.component */ "./src/app/presentation/examples/example-hour/example-hour.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _presentation_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_5__["TabsComponent"],
                _presentation_tab_tab_component__WEBPACK_IMPORTED_MODULE_6__["TabComponent"],
                _presentation_example_example_component__WEBPACK_IMPORTED_MODULE_7__["ExampleComponent"],
                _presentation_api_api_component__WEBPACK_IMPORTED_MODULE_8__["ApiComponent"],
                _presentation_examples_example_persian_example_persian_component__WEBPACK_IMPORTED_MODULE_9__["ExamplePersianComponent"],
                _presentation_examples_example_hour_example_hour_component__WEBPACK_IMPORTED_MODULE_12__["ExampleHourComponent"],
                _presentation_examples_example_arabic_example_arabic_component__WEBPACK_IMPORTED_MODULE_10__["ExampleArabicComponent"],
                _presentation_examples_example_material_example_material_component__WEBPACK_IMPORTED_MODULE_11__["ExampleMaterialComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _atp_library_atp_time_picker_module__WEBPACK_IMPORTED_MODULE_3__["AmazingTimePickerModule"],
                Object(_app_router__WEBPACK_IMPORTED_MODULE_2__["appRoutersGenerator"])(),
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.router.ts":
/*!*******************************!*\
  !*** ./src/app/app.router.ts ***!
  \*******************************/
/*! exports provided: appRoutes, appRoutersGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutersGenerator", function() { return appRoutersGenerator; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _presentation_example_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./presentation/example/example.component */ "./src/app/presentation/example/example.component.ts");
/* harmony import */ var _presentation_api_api_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./presentation/api/api.component */ "./src/app/presentation/api/api.component.ts");



var appRoutes = [
    {
        path: 'Examples',
        component: _presentation_example_example_component__WEBPACK_IMPORTED_MODULE_1__["ExampleComponent"]
    },
    {
        path: 'API',
        component: _presentation_api_api_component__WEBPACK_IMPORTED_MODULE_2__["ApiComponent"]
    },
    {
        path: '',
        redirectTo: '/Examples',
        pathMatch: 'full'
    }
];
function appRoutersGenerator() {
    return _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);
}


/***/ }),

/***/ "./src/app/atp-library/atp-core.service.ts":
/*!*************************************************!*\
  !*** ./src/app/atp-library/atp-core.service.ts ***!
  \*************************************************/
/*! exports provided: AtpCoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AtpCoreService", function() { return AtpCoreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AtpCoreService = /** @class */ (function () {
    function AtpCoreService() {
    }
    AtpCoreService.prototype.allowedTimes = function (min, max) {
        var allTimes = [];
        var nowMinHour = +min.split(':')[0];
        var nowMaxHour = +max.split(':')[0];
        var nowMinMin = +min.split(':')[1];
        var nowMaxMin = +max.split(':')[1];
        for (var i = nowMinHour; i <= nowMaxHour; i++) {
            var j = 0, jDest = 59;
            if (i === nowMinHour) {
                j = nowMinMin;
            }
            else if (i === nowMaxHour) {
                jDest = nowMaxMin;
            }
            for (j; j <= jDest; j++) {
                var hour = i <= 12 ? i : i - 12;
                var minute = j;
                var ampm = i < 12 ? 'AM' : 'PM';
                allTimes.push(hour + ':' + minute + ' ' + ampm);
            }
        }
        return allTimes;
    };
    AtpCoreService.prototype.ClockMaker = function (type) {
        var items = [];
        var timeVal = (type === 'minute') ? 60 : 12;
        var timeStep = (type === 'minute') ? 5 : 1;
        var timeStart = (type === 'minute') ? 0 : 1;
        var r = 124;
        var j = r - 25;
        for (var min = timeStart; min <= timeVal; min += timeStep) {
            if (min !== 60) {
                var str = String(min);
                var x = j * Math.sin(Math.PI * 2 * (min / timeVal));
                var y = j * Math.cos(Math.PI * 2 * (min / timeVal));
                items.push({
                    time: str,
                    left: (x + r - 17) + 'px',
                    top: (-y + r - 17) + 'px',
                    type: type
                });
            }
        }
        return items;
    };
    AtpCoreService.prototype.TimeToString = function (time) {
        var ampm = time.ampm, minute = time.minute, hour = time.hour;
        var hh = ampm === 'PM' ? +hour + 12 : +hour;
        if (ampm === 'AM' && hh === 12) {
            hh = 0;
        }
        if (hh === 24) {
            hh = 12;
        }
        hh = hh < 10 ? '0' + hh : '' + hh;
        var mm = minute < 10 ? '0' + minute : minute;
        return hh + ":" + mm;
    };
    /**
     * Converts 00:00 format to ITime object
     */
    AtpCoreService.prototype.StringToTime = function (time) {
        var _a = time.split(':'), h = _a[0], m = _a[1];
        var hour = +h > 12 ? +h - 12 : +h;
        hour = hour === 0 ? 12 : hour;
        var ampm = +h >= 12 ? 'PM' : 'AM';
        return {
            ampm: ampm, minute: +m, hour: hour
        };
    };
    /**
     * @experimental
     */
    AtpCoreService.prototype.CalcDegrees = function (ele, parrentPos, step) {
        var clock = {
            width: ele.currentTarget.offsetWidth,
            height: ele.currentTarget.offsetHeight
        };
        var targetX = clock.width / 2;
        var targetY = clock.height / 2;
        var Vx = Math.round((ele.clientX - parrentPos.left) - targetX);
        var Vy = Math.round(targetY - (ele.clientY - parrentPos.top));
        var radians = -Math.atan2(Vy, Vx);
        radians += 2.5 * Math.PI;
        var degrees = Math.round(radians * 180 / Math.PI);
        var degMod = degrees % step;
        if (degMod >= step / 2) {
            degrees = degrees + (step - degMod);
        }
        else if (degMod < step / 2) {
            degrees = degrees - degMod;
        }
        return degrees;
    };
    AtpCoreService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AtpCoreService);
    return AtpCoreService;
}());



/***/ }),

/***/ "./src/app/atp-library/atp-time-picker.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/atp-library/atp-time-picker.module.ts ***!
  \*******************************************************/
/*! exports provided: AmazingTimePickerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmazingTimePickerModule", function() { return AmazingTimePickerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _time_picker_time_picker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./time-picker/time-picker.component */ "./src/app/atp-library/time-picker/time-picker.component.ts");
/* harmony import */ var _atp_time_picker_atp_time_picker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./atp-time-picker/atp-time-picker.component */ "./src/app/atp-library/atp-time-picker/atp-time-picker.component.ts");
/* harmony import */ var _atp_time_picker_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./atp-time-picker.service */ "./src/app/atp-library/atp-time-picker.service.ts");
/* harmony import */ var _atp_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./atp.directive */ "./src/app/atp-library/atp.directive.ts");
/* harmony import */ var _atp_core_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./atp-core.service */ "./src/app/atp-library/atp-core.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AmazingTimePickerModule = /** @class */ (function () {
    function AmazingTimePickerModule() {
    }
    AmazingTimePickerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ],
            declarations: [
                _time_picker_time_picker_component__WEBPACK_IMPORTED_MODULE_2__["TimePickerComponent"],
                _atp_time_picker_atp_time_picker_component__WEBPACK_IMPORTED_MODULE_3__["AtpTimePickerComponent"],
                _atp_directive__WEBPACK_IMPORTED_MODULE_5__["AtpDirective"]
            ],
            providers: [
                _atp_time_picker_service__WEBPACK_IMPORTED_MODULE_4__["AmazingTimePickerService"],
                _atp_core_service__WEBPACK_IMPORTED_MODULE_6__["AtpCoreService"]
            ],
            entryComponents: [_time_picker_time_picker_component__WEBPACK_IMPORTED_MODULE_2__["TimePickerComponent"]],
            exports: [
                _time_picker_time_picker_component__WEBPACK_IMPORTED_MODULE_2__["TimePickerComponent"],
                _atp_time_picker_atp_time_picker_component__WEBPACK_IMPORTED_MODULE_3__["AtpTimePickerComponent"],
                _atp_directive__WEBPACK_IMPORTED_MODULE_5__["AtpDirective"]
            ]
        })
    ], AmazingTimePickerModule);
    return AmazingTimePickerModule;
}());



/***/ }),

/***/ "./src/app/atp-library/atp-time-picker.service.ts":
/*!********************************************************!*\
  !*** ./src/app/atp-library/atp-time-picker.service.ts ***!
  \********************************************************/
/*! exports provided: AmazingTimePickerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmazingTimePickerService", function() { return AmazingTimePickerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _time_picker_time_picker_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./time-picker/time-picker.component */ "./src/app/atp-library/time-picker/time-picker.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _preferences__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./preferences */ "./src/app/atp-library/preferences.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AmazingTimePickerService = /** @class */ (function () {
    function AmazingTimePickerService(resolver, appRef, injector) {
        this.resolver = resolver;
        this.appRef = appRef;
        this.injector = injector;
    }
    AmazingTimePickerService.prototype.open = function (config) {
        var thems = ['light', 'dark', 'material-red', 'material-green', 'material-blue', 'material-purple', 'material-orange'];
        var _self = this;
        config = config || {};
        config = {
            time: config.time || '00:00',
            theme: thems.indexOf(config.theme) > 0 ? config.theme : 'light' || config.theme || 'light',
            rangeTime: config.rangeTime || { start: '0:0', end: '24:0' },
            arrowStyle: config.arrowStyle || {},
            locale: config.locale || 'en',
            changeToMinutes: config.changeToMinutes || false,
            preference: config.preference || null,
            onlyHour: config.onlyHour || false,
            onlyMinute: config.onlyMinute || false,
            onlyAM: config.onlyAM || false,
            onlyPM: config.onlyPM || false,
        };
        config.rangeTime = {
            start: config.rangeTime.start || '0:0',
            end: config.rangeTime.end || '24:0',
        };
        config.arrowStyle = {
            background: (config.arrowStyle.background) ?
                config.arrowStyle.background : config.theme !== undefined ?
                config.theme === 'dark' ? 'rgb(128, 203, 196)' : '' : '',
            color: config.arrowStyle.color || ''
        };
        var componentRef = this.resolver.resolveComponentFactory(_time_picker_time_picker_component__WEBPACK_IMPORTED_MODULE_1__["TimePickerComponent"]);
        var tsc = componentRef.create(this.injector);
        this.appRef.attachView(tsc.hostView);
        var domElem = tsc.hostView.rootNodes[0];
        document.body.appendChild(domElem);
        tsc.instance.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        tsc.instance._ref = tsc;
        tsc.instance.appRef = this.appRef;
        tsc.instance.timerElement = '';
        tsc.instance.config = config;
        if (config.preference) {
            tsc.instance.preference = config.preference;
        }
        else {
            tsc.instance.preference = Object(_preferences__WEBPACK_IMPORTED_MODULE_3__["Preference"])(config.locale);
        }
        tsc.instance.ParseStringToTime(config.time);
        return {
            afterClose: function () {
                return tsc.instance.subject.asObservable();
            }
        };
    };
    AmazingTimePickerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], AmazingTimePickerService);
    return AmazingTimePickerService;
}());



/***/ }),

/***/ "./src/app/atp-library/atp-time-picker/atp-time-picker.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/atp-library/atp-time-picker/atp-time-picker.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #container></div>"

/***/ }),

/***/ "./src/app/atp-library/atp-time-picker/atp-time-picker.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/atp-library/atp-time-picker/atp-time-picker.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".atp-time-picker .icon-container {\n  display: inline-block;\n  margin-right: .2em; }\n  .atp-time-picker .icon-container svg {\n    cursor: pointer;\n    position: relative;\n    top: .5em; }\n  .atp-time-picker .icon-container /deep/ i {\n    cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/atp-library/atp-time-picker/atp-time-picker.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/atp-library/atp-time-picker/atp-time-picker.component.ts ***!
  \**************************************************************************/
/*! exports provided: AtpTimePickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AtpTimePickerComponent", function() { return AtpTimePickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _time_picker_time_picker_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../time-picker/time-picker.component */ "./src/app/atp-library/time-picker/time-picker.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AtpTimePickerComponent = /** @class */ (function () {
    function AtpTimePickerComponent(resolver, appRef) {
        this.resolver = resolver;
        this.appRef = appRef;
        this.timeSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.config = {};
    }
    AtpTimePickerComponent.prototype.ngOnInit = function () {
        var _this = this;
        var config = this.config;
        config = {
            time: config.time || '00:00',
            theme: ['light', 'dark', 'material'].indexOf(config.theme) > 0 ? config.theme : 'light' || config.theme || 'light',
            rangeTime: config.rangeTime || { start: '0:0', end: '24:0' },
            arrowStyle: config.arrowStyle || {}
        };
        config.arrowStyle = {
            background: (config.arrowStyle.background) ?
                config.arrowStyle.background : config.theme !== undefined ?
                config.theme === 'dark' ? 'rgb(128, 203, 196)' : 'blue' : 'blue',
            color: config.arrowStyle.color || '#fff'
        };
        var cfr = this.resolver.resolveComponentFactory(_time_picker_time_picker_component__WEBPACK_IMPORTED_MODULE_1__["TimePickerComponent"]);
        var tsc = this.container.createComponent(cfr);
        tsc.instance.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        tsc.instance._ref = tsc;
        tsc.instance.appRef = this.appRef;
        tsc.instance.timerElement = '';
        tsc.instance.config = config;
        tsc.instance.activeModal = true;
        tsc.instance.isPopup = false;
        tsc.instance.ParseStringToTime(config.time);
        tsc.instance.subject.asObservable().subscribe(function (time) {
            _this.timeSelected.emit(time);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('container', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])
    ], AtpTimePickerComponent.prototype, "container", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AtpTimePickerComponent.prototype, "timeSelected", void 0);
    AtpTimePickerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'atp-time-picker',
            template: __webpack_require__(/*! ./atp-time-picker.component.html */ "./src/app/atp-library/atp-time-picker/atp-time-picker.component.html"),
            styles: [__webpack_require__(/*! ./atp-time-picker.component.scss */ "./src/app/atp-library/atp-time-picker/atp-time-picker.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]])
    ], AtpTimePickerComponent);
    return AtpTimePickerComponent;
}());



/***/ }),

/***/ "./src/app/atp-library/atp.directive.ts":
/*!**********************************************!*\
  !*** ./src/app/atp-library/atp.directive.ts ***!
  \**********************************************/
/*! exports provided: AtpDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AtpDirective", function() { return AtpDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _atp_time_picker_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./atp-time-picker.service */ "./src/app/atp-library/atp-time-picker.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AtpDirective = /** @class */ (function () {
    function AtpDirective(viewContainerRef, atp) {
        this.viewContainerRef = viewContainerRef;
        this.atp = atp;
        this.myClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onChange = function (x) { };
        this.elementRef = this.viewContainerRef.element;
    }
    AtpDirective_1 = AtpDirective;
    AtpDirective.prototype.onClick = function (e) {
        var _this = this;
        var ele = this.viewContainerRef.element.nativeElement;
        var time = ele.value;
        var theme = ele.getAttribute('theme');
        var start = ele.getAttribute('start');
        var end = ele.getAttribute('end');
        var locale = ele.getAttribute('locale') || 'en';
        var changeToMinutes = ele.getAttribute('changeToMinutes') === 'true';
        var preference = ele.getAttribute('preference') || null;
        var onlyHour = ele.getAttribute('onlyHour') || false;
        var onlyMinute = ele.getAttribute('onlyMinute') || false;
        var onlyAM = ele.getAttribute('onlyAM') || false;
        var onlyPM = ele.getAttribute('onlyPM') || false;
        var arrowStyle = ele.getAttribute('arrowStyle');
        arrowStyle = (arrowStyle) ? JSON.parse(arrowStyle.replace(new RegExp('\'', 'g'), '"')) : '';
        var timePickerFunction = this.atp.open({
            time: time,
            theme: theme,
            rangeTime: { start: start, end: end },
            'arrowStyle': arrowStyle,
            locale: locale,
            changeToMinutes: changeToMinutes,
            onlyHour: onlyHour,
            onlyMinute: onlyMinute,
            onlyAM: onlyAM,
            onlyPM: onlyPM,
            preference: preference
        });
        timePickerFunction.afterClose().subscribe(function (retTime) {
            _this.writeValue(retTime); // update the native element
            _this.onChange(retTime); // update the form value (if there's a form)
        });
    };
    AtpDirective.prototype.writeValue = function (value) {
        if (this.elementRef) {
            this.elementRef.nativeElement.value = value;
        }
    };
    AtpDirective.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    AtpDirective.prototype.registerOnTouched = function (fn) { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AtpDirective.prototype, "myClick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AtpDirective.prototype, "onClick", null);
    AtpDirective = AtpDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: 'input[atp-time-picker]',
            providers: [{
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: AtpDirective_1,
                    multi: true
                }]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"],
            _atp_time_picker_service__WEBPACK_IMPORTED_MODULE_2__["AmazingTimePickerService"]])
    ], AtpDirective);
    return AtpDirective;
    var AtpDirective_1;
}());



/***/ }),

/***/ "./src/app/atp-library/preferences.ts":
/*!********************************************!*\
  !*** ./src/app/atp-library/preferences.ts ***!
  \********************************************/
/*! exports provided: PersianPreference, ArabicPreference, ChinesePreference, Preference */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersianPreference", function() { return PersianPreference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArabicPreference", function() { return ArabicPreference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChinesePreference", function() { return ChinesePreference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Preference", function() { return Preference; });
var arabic = new Intl.NumberFormat('ar-AE');
var persian = new Intl.NumberFormat('fa-IR');
var PersianPreference = {
    hour: function (x) { return persian.format(x); },
    minute: function (x) {
        var exp = persian.format(x);
        if (exp.length === 1) {
            exp = persian.format(0) + exp;
        }
        return exp;
    },
    separator: ':',
    period: function (x) { return x === 'AM' ? 'صبح' : 'عصر'; },
    clockHour: function (x) { return persian.format(x); },
    clockMinute: function (x) { return persian.format(x); },
    labels: {
        ok: 'تایید',
        cancel: 'لغو'
    }
};
var ArabicPreference = {
    hour: function (x) { return arabic.format(x); },
    minute: function (x) {
        var exp = arabic.format(x);
        if (exp.length === 1) {
            exp = arabic.format(0) + exp;
        }
        return exp;
    },
    separator: ':',
    period: function (x) { return x === 'AM' ? 'صباحا' : 'مساء'; },
    clockHour: function (x) { return arabic.format(x); },
    clockMinute: function (x) { return arabic.format(x); },
    labels: {
        ok: 'حسنا',
        cancel: 'إلغاء'
    }
};
var ChinesePreference = {
    hour: function (x) { return x; },
    minute: function (x) {
        var exp = x;
        if (exp.length === 1) {
            exp = '۰' + exp;
        }
        return exp;
    },
    separator: ':',
    period: function (x) { return x === 'AM' ? '上午' : '下午'; },
    clockHour: function (x) { return x; },
    clockMinute: function (x) { return x; },
    labels: {
        ok: '好',
        cancel: '取消'
    }
};
var Preference = function (locale) {
    switch (locale) {
        case 'fa':
            return PersianPreference;
        case 'ar':
            return ArabicPreference;
        case 'ch':
            return ChinesePreference;
        default:
            return null;
    }
};


/***/ }),

/***/ "./src/app/atp-library/time-picker/time-picker.component.html":
/*!********************************************************************!*\
  !*** ./src/app/atp-library/time-picker/time-picker.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"time-picker-wrapper\" class=\"{{config.theme}}\" [ngClass]=\"{'active': activeModal, 'static': !isPopup}\" (click)=\"Close($event);\">\r\n  <div id=\"time-picker\" [ngClass]=\"{'active': activeModal, 'static': !isPopup}\">\r\n    <div class=\"time-picker-header\">\r\n      <div class=\"time-picker-selected-time\">\r\n          <div class=\"time-picker-hour\" (click)=\"HourClick()\" [attr.disabled]=\"(config.onlyMinute) ? 'disabled' : null\"\r\n            [ngClass]=\"{'selected' : clockType == 'hour'}\">{{GetHour()}}</div>\r\n          <span class=\"time-seprator\">{{GetSeparator()}}</span>\r\n          <div class=\"time-picker-minute\" (click)=\"MinuteClick();\" [attr.disabled]=\"(config.onlyHour) ? 'disabled' : null\"\r\n            [ngClass]=\"{'selected' : clockType == 'minute'}\">{{GetMinute()}}</div>\r\n      </div>\r\n      <div class=\"time-picker-selected-ampm\">\r\n        <div class=\"time-picker-am\" (click)=\"SetAM();\" [attr.disabled]=\"(config.onlyPM) ? 'disabled' : null\" [ngClass]=\"{'selected' : time.ampm == 'AM'}\">{{GetPeriod('AM')}}</div>\r\n        <div class=\"time-picker-pm\" (click)=\"SetPM();\" [attr.disabled]=\"(config.onlyAM) ? 'disabled' : null\" [ngClass]=\"{'selected' : time.ampm == 'PM'}\">{{GetPeriod('PM')}}</div>\r\n\r\n      </div>\r\n    </div>\r\n    <div class=\"time-picker-content\">\r\n        <div class=\"time-picker-clock\" (mousemove)=\"getDegree($event);\" (mousedown)=\"isClicked=true; getDegree($event);\" (mouseup)=\"setTime()\">\r\n          <button *ngFor=\"let clock of clockObject\" [ngClass]=\"{'active' : nowTime == clock.time}\" \r\n            [id]=\"'timepicker-item-id-' + clock.time\" \r\n            [ngStyle]=\"{top: clock.top,left: clock.left, color: nowTime == clock.time ? config.arrowStyle.color :  '', background: nowTime == clock.time ? config.arrowStyle.background : 'transparent'}\">\r\n            {{GetClockTime(clock)}}\r\n          </button>\r\n          <div class=\"time-picker-clock-origin\" [ngStyle]=\"{ background: config.arrowStyle.background}\"></div>\r\n          <div id=\"tpc-arrow\" class=\"time-picker-clock-arrow\" [ngStyle]=\"{transform: 'rotate(' + this.degree + 'deg)','-webkit-transform': 'rotate(' + this.degree + 'deg)', background: config.arrowStyle.background}\">\r\n            <span [ngStyle]=\"{ background: config.arrowStyle.background }\"></span>\r\n          </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"time-picker-footer\">\r\n        <button (click)=\"Close($event);\">{{GetLabel('cancel')}}</button>\r\n        <button (click)=\"GetTime();Close($event);\" class=\"atp-ref-dialog-close\">{{GetLabel('ok')}}</button>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/atp-library/time-picker/time-picker.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/atp-library/time-picker/time-picker.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#time-picker-wrapper {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: transparent;\n  transition: background 0.4s;\n  font-family: 'Roboto', sans-serif;\n  z-index: 1000; }\n  #time-picker-wrapper.static {\n    position: relative !important;\n    background: transparent !important;\n    display: inline-block;\n    z-index: 0; }\n  #time-picker-wrapper.active {\n    background: rgba(0, 0, 0, 0.3); }\n  #time-picker-wrapper.dark #time-picker {\n    background: #424242; }\n  #time-picker-wrapper.dark #time-picker .time-picker-header {\n      border-bottom: none;\n      background: #555555; }\n  #time-picker-wrapper.dark #time-picker .time-picker-header .time-picker-selected-time {\n        color: #999; }\n  #time-picker-wrapper.dark #time-picker .time-picker-header .time-picker-selected-time div.selected {\n          color: #fff; }\n  #time-picker-wrapper.dark #time-picker .time-picker-header .time-picker-selected-ampm {\n        color: #999; }\n  #time-picker-wrapper.dark #time-picker .time-picker-header .time-picker-selected-ampm div.selected {\n          color: #fff; }\n  #time-picker-wrapper.dark #time-picker .time-picker-clock {\n      background: #555555; }\n  #time-picker-wrapper.dark #time-picker .time-picker-clock > button {\n        color: #fff; }\n  #time-picker-wrapper.dark #time-picker .time-picker-footer {\n      border-top: none; }\n  #time-picker-wrapper.dark #time-picker .time-picker-footer button {\n        background: #555555;\n        color: #fff; }\n  #time-picker-wrapper.dark #time-picker .time-picker-footer button:hover {\n          background: #777; }\n  #time-picker-wrapper.light #time-picker {\n    background: #fff; }\n  #time-picker-wrapper.light #time-picker .time-picker-header {\n      border-bottom: 1px solid #e1e1e1; }\n  #time-picker-wrapper.light #time-picker .time-picker-header .time-picker-selected-time {\n        color: #aaa; }\n  #time-picker-wrapper.light #time-picker .time-picker-header .time-picker-selected-time div.selected {\n          color: #000; }\n  #time-picker-wrapper.light #time-picker .time-picker-header .time-picker-selected-ampm {\n        color: #aaa; }\n  #time-picker-wrapper.light #time-picker .time-picker-header .time-picker-selected-ampm div.selected {\n          color: #000; }\n  #time-picker-wrapper.light #time-picker .time-picker-clock {\n      background: #ededed; }\n  #time-picker-wrapper.light #time-picker .time-picker-clock > button {\n        color: #000; }\n  #time-picker-wrapper.light #time-picker .time-picker-clock > button.active {\n          background: blue;\n          color: #fff; }\n  #time-picker-wrapper.light #time-picker .time-picker-clock .time-picker-clock-origin {\n        background: blue; }\n  #time-picker-wrapper.light #time-picker .time-picker-clock .time-picker-clock-arrow {\n        background: blue; }\n  #time-picker-wrapper.light #time-picker .time-picker-clock .time-picker-clock-arrow span {\n          background: blue; }\n  #time-picker-wrapper.light #time-picker .time-picker-footer {\n      border-top: 1px solid #e1e1e1; }\n  #time-picker-wrapper.light #time-picker .time-picker-footer button {\n        background: #f1f1f1; }\n  #time-picker-wrapper.light #time-picker .time-picker-footer button:hover {\n          background: #ddd; }\n  #time-picker-wrapper.material-green #time-picker {\n    background: #fff; }\n  #time-picker-wrapper.material-green #time-picker .time-picker-header {\n      background-color: #00897b;\n      border-bottom: 1px solid #e1e1e1; }\n  #time-picker-wrapper.material-green #time-picker .time-picker-header .time-picker-selected-time {\n        color: rgba(255, 255, 255, 0.4); }\n  #time-picker-wrapper.material-green #time-picker .time-picker-header .time-picker-selected-time div.selected {\n          color: #fff; }\n  #time-picker-wrapper.material-green #time-picker .time-picker-header .time-picker-selected-ampm {\n        color: rgba(255, 255, 255, 0.4); }\n  #time-picker-wrapper.material-green #time-picker .time-picker-header .time-picker-selected-ampm div.selected {\n          color: #fff; }\n  #time-picker-wrapper.material-green #time-picker .time-picker-clock {\n      background: #ededed; }\n  #time-picker-wrapper.material-green #time-picker .time-picker-clock > button {\n        color: #000; }\n  #time-picker-wrapper.material-green #time-picker .time-picker-clock > button.active {\n          background: #00897b;\n          color: #fff; }\n  #time-picker-wrapper.material-green #time-picker .time-picker-clock .time-picker-clock-origin {\n        background: #00897b; }\n  #time-picker-wrapper.material-green #time-picker .time-picker-clock .time-picker-clock-arrow {\n        background: #00897b; }\n  #time-picker-wrapper.material-green #time-picker .time-picker-clock .time-picker-clock-arrow span {\n          background: #00897b; }\n  #time-picker-wrapper.material-green #time-picker .time-picker-footer {\n      border-top: 1px solid #e1e1e1; }\n  #time-picker-wrapper.material-green #time-picker .time-picker-footer button {\n        font-weight: bold;\n        text-transform: uppercase;\n        background: transparent;\n        color: #00897b; }\n  #time-picker-wrapper.material-green #time-picker .time-picker-footer button:hover {\n          background: #ddd; }\n  #time-picker-wrapper.material-blue #time-picker {\n    background: #fff; }\n  #time-picker-wrapper.material-blue #time-picker .time-picker-header {\n      background-color: #3F51B5;\n      border-bottom: 1px solid #e1e1e1; }\n  #time-picker-wrapper.material-blue #time-picker .time-picker-header .time-picker-selected-time {\n        color: rgba(255, 255, 255, 0.4); }\n  #time-picker-wrapper.material-blue #time-picker .time-picker-header .time-picker-selected-time div.selected {\n          color: #fff; }\n  #time-picker-wrapper.material-blue #time-picker .time-picker-header .time-picker-selected-ampm {\n        color: rgba(255, 255, 255, 0.4); }\n  #time-picker-wrapper.material-blue #time-picker .time-picker-header .time-picker-selected-ampm div.selected {\n          color: #fff; }\n  #time-picker-wrapper.material-blue #time-picker .time-picker-clock {\n      background: #ededed; }\n  #time-picker-wrapper.material-blue #time-picker .time-picker-clock > button {\n        color: #000; }\n  #time-picker-wrapper.material-blue #time-picker .time-picker-clock > button.active {\n          background: #3F51B5;\n          color: #fff; }\n  #time-picker-wrapper.material-blue #time-picker .time-picker-clock .time-picker-clock-origin {\n        background: #3F51B5; }\n  #time-picker-wrapper.material-blue #time-picker .time-picker-clock .time-picker-clock-arrow {\n        background: #3F51B5; }\n  #time-picker-wrapper.material-blue #time-picker .time-picker-clock .time-picker-clock-arrow span {\n          background: #3F51B5; }\n  #time-picker-wrapper.material-blue #time-picker .time-picker-footer {\n      border-top: 1px solid #e1e1e1; }\n  #time-picker-wrapper.material-blue #time-picker .time-picker-footer button {\n        font-weight: bold;\n        text-transform: uppercase;\n        background: transparent;\n        color: #3F51B5; }\n  #time-picker-wrapper.material-blue #time-picker .time-picker-footer button:hover {\n          background: #ddd; }\n  #time-picker-wrapper.material-red #time-picker {\n    background: #fff; }\n  #time-picker-wrapper.material-red #time-picker .time-picker-header {\n      background-color: #F44336;\n      border-bottom: 1px solid #e1e1e1; }\n  #time-picker-wrapper.material-red #time-picker .time-picker-header .time-picker-selected-time {\n        color: rgba(255, 255, 255, 0.4); }\n  #time-picker-wrapper.material-red #time-picker .time-picker-header .time-picker-selected-time div.selected {\n          color: #fff; }\n  #time-picker-wrapper.material-red #time-picker .time-picker-header .time-picker-selected-ampm {\n        color: rgba(255, 255, 255, 0.4); }\n  #time-picker-wrapper.material-red #time-picker .time-picker-header .time-picker-selected-ampm div.selected {\n          color: #fff; }\n  #time-picker-wrapper.material-red #time-picker .time-picker-clock {\n      background: #ededed; }\n  #time-picker-wrapper.material-red #time-picker .time-picker-clock > button {\n        color: #000; }\n  #time-picker-wrapper.material-red #time-picker .time-picker-clock > button.active {\n          background: #F44336;\n          color: #fff; }\n  #time-picker-wrapper.material-red #time-picker .time-picker-clock .time-picker-clock-origin {\n        background: #F44336; }\n  #time-picker-wrapper.material-red #time-picker .time-picker-clock .time-picker-clock-arrow {\n        background: #F44336; }\n  #time-picker-wrapper.material-red #time-picker .time-picker-clock .time-picker-clock-arrow span {\n          background: #F44336; }\n  #time-picker-wrapper.material-red #time-picker .time-picker-footer {\n      border-top: 1px solid #e1e1e1; }\n  #time-picker-wrapper.material-red #time-picker .time-picker-footer button {\n        font-weight: bold;\n        text-transform: uppercase;\n        background: transparent;\n        color: #F44336; }\n  #time-picker-wrapper.material-red #time-picker .time-picker-footer button:hover {\n          background: #ddd; }\n  #time-picker-wrapper.material-purple #time-picker {\n    background: #fff; }\n  #time-picker-wrapper.material-purple #time-picker .time-picker-header {\n      background-color: #9C27B0;\n      border-bottom: 1px solid #e1e1e1; }\n  #time-picker-wrapper.material-purple #time-picker .time-picker-header .time-picker-selected-time {\n        color: rgba(255, 255, 255, 0.4); }\n  #time-picker-wrapper.material-purple #time-picker .time-picker-header .time-picker-selected-time div.selected {\n          color: #fff; }\n  #time-picker-wrapper.material-purple #time-picker .time-picker-header .time-picker-selected-ampm {\n        color: rgba(255, 255, 255, 0.4); }\n  #time-picker-wrapper.material-purple #time-picker .time-picker-header .time-picker-selected-ampm div.selected {\n          color: #fff; }\n  #time-picker-wrapper.material-purple #time-picker .time-picker-clock {\n      background: #ededed; }\n  #time-picker-wrapper.material-purple #time-picker .time-picker-clock > button {\n        color: #000; }\n  #time-picker-wrapper.material-purple #time-picker .time-picker-clock > button.active {\n          background: #9C27B0;\n          color: #fff; }\n  #time-picker-wrapper.material-purple #time-picker .time-picker-clock .time-picker-clock-origin {\n        background: #9C27B0; }\n  #time-picker-wrapper.material-purple #time-picker .time-picker-clock .time-picker-clock-arrow {\n        background: #9C27B0; }\n  #time-picker-wrapper.material-purple #time-picker .time-picker-clock .time-picker-clock-arrow span {\n          background: #9C27B0; }\n  #time-picker-wrapper.material-purple #time-picker .time-picker-footer {\n      border-top: 1px solid #e1e1e1; }\n  #time-picker-wrapper.material-purple #time-picker .time-picker-footer button {\n        font-weight: bold;\n        text-transform: uppercase;\n        background: transparent;\n        color: #9C27B0; }\n  #time-picker-wrapper.material-purple #time-picker .time-picker-footer button:hover {\n          background: #ddd; }\n  #time-picker-wrapper.material-orange #time-picker {\n    background: #fff; }\n  #time-picker-wrapper.material-orange #time-picker .time-picker-header {\n      background-color: #FF9800;\n      border-bottom: 1px solid #e1e1e1; }\n  #time-picker-wrapper.material-orange #time-picker .time-picker-header .time-picker-selected-time {\n        color: rgba(255, 255, 255, 0.4); }\n  #time-picker-wrapper.material-orange #time-picker .time-picker-header .time-picker-selected-time div.selected {\n          color: #fff; }\n  #time-picker-wrapper.material-orange #time-picker .time-picker-header .time-picker-selected-ampm {\n        color: rgba(255, 255, 255, 0.4); }\n  #time-picker-wrapper.material-orange #time-picker .time-picker-header .time-picker-selected-ampm div.selected {\n          color: #fff; }\n  #time-picker-wrapper.material-orange #time-picker .time-picker-clock {\n      background: #ededed; }\n  #time-picker-wrapper.material-orange #time-picker .time-picker-clock > button {\n        color: #000; }\n  #time-picker-wrapper.material-orange #time-picker .time-picker-clock > button.active {\n          background: #FF9800;\n          color: #fff; }\n  #time-picker-wrapper.material-orange #time-picker .time-picker-clock .time-picker-clock-origin {\n        background: #FF9800; }\n  #time-picker-wrapper.material-orange #time-picker .time-picker-clock .time-picker-clock-arrow {\n        background: #FF9800; }\n  #time-picker-wrapper.material-orange #time-picker .time-picker-clock .time-picker-clock-arrow span {\n          background: #FF9800; }\n  #time-picker-wrapper.material-orange #time-picker .time-picker-footer {\n      border-top: 1px solid #e1e1e1; }\n  #time-picker-wrapper.material-orange #time-picker .time-picker-footer button {\n        font-weight: bold;\n        text-transform: uppercase;\n        background: transparent;\n        color: #FF9800; }\n  #time-picker-wrapper.material-orange #time-picker .time-picker-footer button:hover {\n          background: #ddd; }\n  #time-picker-wrapper #time-picker {\n    width: 325px;\n    height: auto;\n    box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);\n    border-radius: 2px;\n    margin: 15vh auto !important;\n    -webkit-transform: scale(0.5) !important;\n            transform: scale(0.5) !important;\n    transition: opacity 0.3s, -webkit-transform 0.3s;\n    transition: transform 0.3s, opacity 0.3s;\n    transition: transform 0.3s, opacity 0.3s, -webkit-transform 0.3s;\n    opacity: 0; }\n  #time-picker-wrapper #time-picker.static {\n      margin: 0px !important;\n      box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 0 7px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12); }\n  #time-picker-wrapper #time-picker.active {\n      -webkit-transform: scale(1) !important;\n              transform: scale(1) !important;\n      opacity: 1; }\n  #time-picker-wrapper #time-picker .time-picker-header {\n      text-align: center;\n      padding: 15px 0px; }\n  #time-picker-wrapper #time-picker .time-picker-header .time-picker-selected-time {\n        font-size: 35px;\n        padding: 5px 0px; }\n  #time-picker-wrapper #time-picker .time-picker-header .time-picker-selected-time div {\n          display: inline-block;\n          cursor: pointer; }\n  #time-picker-wrapper #time-picker .time-picker-header .time-picker-selected-time div[disabled=true] {\n            cursor: default; }\n  #time-picker-wrapper #time-picker .time-picker-header .time-picker-selected-ampm {\n        font-size: 18px; }\n  #time-picker-wrapper #time-picker .time-picker-header .time-picker-selected-ampm div {\n          display: inline-block;\n          padding: 0 5px;\n          cursor: pointer; }\n  #time-picker-wrapper #time-picker .time-picker-header .time-picker-selected-ampm div[disabled=true] {\n            cursor: default; }\n  #time-picker-wrapper #time-picker .time-picker-content .time-picker-clock {\n      width: 200px;\n      height: 200px;\n      padding: 24px;\n      border-radius: 50%;\n      cursor: pointer;\n      margin: 25px auto;\n      position: relative;\n      user-select: none;\n      -moz-user-select: none;\n      -ms-user-select: none;\n      -webkit-user-select: none; }\n  #time-picker-wrapper #time-picker .time-picker-content .time-picker-clock button {\n        border: none;\n        position: absolute;\n        width: 35px;\n        height: 35px;\n        border-radius: 50%;\n        cursor: pointer;\n        font-size: 17px;\n        text-align: center;\n        padding: 0;\n        transition: all .2s;\n        z-index: 3; }\n  #time-picker-wrapper #time-picker .time-picker-content .time-picker-clock .time-picker-clock-origin {\n        width: 6px;\n        height: 6px;\n        border-radius: 50%;\n        position: absolute;\n        left: 50%;\n        top: 50%;\n        margin-left: -3px;\n        margin-top: -3px; }\n  #time-picker-wrapper #time-picker .time-picker-content .time-picker-clock .time-picker-clock-arrow {\n        width: 2px;\n        height: 41%;\n        position: absolute;\n        left: 0;\n        top: 22px;\n        right: 0;\n        margin: auto;\n        -webkit-transform-origin: top left;\n        transform-origin: bottom; }\n  #time-picker-wrapper #time-picker .time-picker-content .time-picker-clock .time-picker-clock-arrow span {\n          width: 8px;\n          height: 8px;\n          border-radius: 50%;\n          position: absolute;\n          top: 0;\n          right: -3px; }\n  #time-picker-wrapper #time-picker .time-picker-footer {\n      padding: 15px;\n      text-align: right; }\n  #time-picker-wrapper #time-picker .time-picker-footer button {\n        border: transparent;\n        margin-left: 10px;\n        padding: 10px;\n        font-size: 14px;\n        border-radius: 2px;\n        cursor: pointer; }\n  * {\n  outline: none;\n  box-sizing: content-box; }\n"

/***/ }),

/***/ "./src/app/atp-library/time-picker/time-picker.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/atp-library/time-picker/time-picker.component.ts ***!
  \******************************************************************/
/*! exports provided: TimePickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimePickerComponent", function() { return TimePickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _atp_core_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../atp-core.service */ "./src/app/atp-library/atp-core.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TimePickerComponent = /** @class */ (function () {
    function TimePickerComponent(core) {
        var _this = this;
        this.core = core;
        this.subject = null;
        this.activeModal = false;
        this.clockType = 'hour';
        this.time = {
            ampm: 'AM',
            minute: 0,
            hour: 12
        };
        this.nowTime = this.time.hour;
        this.isPopup = true;
        this.clockMaker = function () {
            var type = _this.clockType;
            _this.clockObject = _this.core.ClockMaker(type);
            _this.setArrow(null);
        };
        this.setActiveTime = function () {
            _this.nowTime = (_this.clockType === 'minute' ? _this.time.minute : _this.time.hour);
        };
        this.setArrow = function (obj) {
            if (obj) {
                _this.clockType = obj.type;
                if (_this.clockType === 'minute') {
                    _this.time.minute = obj.time;
                }
                else {
                    _this.time.hour = obj.time;
                }
            }
            var step = (_this.clockType === 'minute') ? 6 : 30;
            var time = (_this.clockType === 'minute') ? _this.time.minute : _this.time.hour;
            var degrees = time * step;
            _this.rotationClass(degrees);
            _this.setActiveTime();
        };
        this.rotationClass = function (degrees) {
            _this.degree = degrees;
        };
        this.getDegree = function (ele) {
            var step = _this.clockType === 'minute' ? 6 : 30;
            var parrentPos = ele.currentTarget.getBoundingClientRect();
            if (_this.isClicked && (ele.currentTarget === ele.target || ele.target.nodeName === 'BUTTON')) {
                var clock = {
                    width: ele.currentTarget.offsetWidth,
                    height: ele.currentTarget.offsetHeight
                };
                var degrees = _this.core.CalcDegrees(ele, parrentPos, step);
                var hour = _this.time.hour, minute = _this.time.minute;
                if (_this.clockType === 'hour') {
                    hour = (degrees / step);
                    hour = (hour > 12) ? hour - 12 : hour;
                }
                else if (_this.clockType === 'minute') {
                    minute = (degrees / step);
                    minute = (minute > 59) ? minute - 60 : minute;
                }
                var min = _this.config.rangeTime.start, max = _this.config.rangeTime.end;
                var nowMinHour = +min.split(':')[0] < 12 ? +min.split(':')[0] : +min.split(':')[0] - 12;
                var nowMaxHour = +max.split(':')[0] < 12 ? +max.split(':')[0] : +max.split(':')[0] - 12;
                var nowMinMin = +min.split(':')[1];
                var nowMaxMin = +max.split(':')[1];
                var nowTime = _this.GetNowTime(hour, _this.time.ampm, minute);
                if (_this.allowed.indexOf(nowTime) > -1) {
                    _this.time.hour = hour;
                    _this.time.minute = minute;
                    _this.rotationClass(degrees);
                    _this.setActiveTime();
                }
                else if (_this.clockType === 'hour' && (hour === nowMinHour && minute <= nowMinMin)) {
                    _this.time.hour = nowMinHour;
                    _this.time.minute = nowMinMin;
                }
                else if (_this.clockType === 'hour' && (hour === nowMaxHour && minute >= nowMaxMin)) {
                    _this.time.hour = nowMaxHour;
                    _this.time.minute = nowMaxMin;
                }
            }
        };
    }
    TimePickerComponent.prototype.ParseStringToTime = function (time) {
        time = (time === '' || time === undefined || time === null) ? this.time.hour + ':' + this.time.minute : time;
        this.time = this.core.StringToTime(time);
    };
    TimePickerComponent.prototype.GetTime = function () {
        var time = this.core.TimeToString(this.time);
        this.subject.next(time);
    };
    TimePickerComponent.prototype.setTime = function () {
        this.isClicked = false;
        if (this.config.changeToMinutes && this.clockType === 'hour') {
            this.clockType = 'minute';
            this.clockMaker();
        }
    };
    TimePickerComponent.prototype.GetNowTime = function (hour, ampm, minute) {
        var Hour = (hour === 12 && ampm === 'AM') ? '0' : hour;
        var nowTime = Hour + ':' + minute + ' ' + ampm;
        return nowTime;
    };
    TimePickerComponent.prototype.checkBet = function () {
        var nowTime = this.GetNowTime(this.time.hour, this.time.ampm, this.time.minute);
        if (this.allowed.indexOf(nowTime) === -1) {
            this.ParseStringToTime(this.config.rangeTime.start);
            this.setArrow(null);
            this.setActiveTime();
        }
    };
    TimePickerComponent.prototype.modalAnimation = function () {
        var _this = this;
        setTimeout(function () {
            _this.activeModal = true;
        }, 1);
    };
    TimePickerComponent.prototype.ngOnInit = function () {
        this.allowed = this.core.allowedTimes(this.config.rangeTime.start, this.config.rangeTime.end);
        if (this.config && this.config.onlyMinute) {
            this.clockType = 'minute';
        }
        if (this.config && this.config.onlyPM) {
            this.time.ampm = 'PM';
        }
        this.clockMaker();
        this.modalAnimation();
    };
    TimePickerComponent.prototype.MinuteClick = function () {
        /**
         * We are not permitting user to select the minute.
         * but anyway, it will return the standard time, if provided the default time.
         */
        if (this.config && this.config.onlyHour) {
            return false;
        }
        this.clockType = 'minute';
        this.clockMaker();
    };
    TimePickerComponent.prototype.HourClick = function () {
        /**
         * We are not permitting user to select the minute.
         * but anyway, it will return the standard time, if provided the default time.
         */
        if (this.config && this.config.onlyMinute) {
            return false;
        }
        this.clockType = 'hour';
        this.clockMaker();
    };
    TimePickerComponent.prototype.SetAM = function () {
        if (this.config && this.config.onlyPM) {
            return false;
        }
        this.time.ampm = 'AM';
        this.checkBet();
    };
    TimePickerComponent.prototype.SetPM = function () {
        if (this.config && this.config.onlyAM) {
            return false;
        }
        this.time.ampm = 'PM';
        this.checkBet();
    };
    TimePickerComponent.prototype.Close = function (e) {
        var _this = this;
        if (e.target === e.currentTarget) {
            if (this.isPopup === true) {
                this.activeModal = false;
                setTimeout(function () {
                    _this.appRef.detachView(_this._ref.hostView);
                    _this._ref.destroy();
                }, 400);
            }
        }
    };
    TimePickerComponent.prototype.GetSeparator = function () {
        if (this.preference && this.preference.separator) {
            return this.preference.separator;
        }
        return ':';
    };
    TimePickerComponent.prototype.GetPeriod = function (period) {
        if (this.preference && this.preference.period) {
            return this.preference.period(period);
        }
        return period;
    };
    TimePickerComponent.prototype.GetMinute = function () {
        if (this.preference && this.preference.minute) {
            return this.preference.minute(this.time.minute);
        }
        var min = this.time.minute.toString();
        if (+min < 10) {
            min = '0' + min;
        }
        return min;
    };
    TimePickerComponent.prototype.GetHour = function () {
        if (this.preference && this.preference.hour) {
            return this.preference.hour(this.time.hour);
        }
        return this.time.hour;
    };
    TimePickerComponent.prototype.GetClockTime = function (clock) {
        if (!this.preference) {
            return clock.time;
        }
        if (this.clockType === 'hour' && this.preference.clockHour) {
            return this.preference.clockHour(clock.time);
        }
        if (this.clockType === 'minute' && this.preference.clockMinute) {
            return this.preference.clockMinute(clock.time);
        }
        return clock.time;
    };
    TimePickerComponent.prototype.GetLabel = function (key) {
        var defaults = {
            'ok': 'Ok',
            'cancel': 'Cancel'
        };
        if ((this.preference && this.preference.labels && this.preference.labels.ok)) {
            defaults.ok = this.preference.labels.ok;
        }
        if ((this.preference && this.preference.labels && this.preference.labels.cancel)) {
            defaults.cancel = this.preference.labels.cancel;
        }
        return defaults[key];
    };
    TimePickerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'time-picker',
            template: __webpack_require__(/*! ./time-picker.component.html */ "./src/app/atp-library/time-picker/time-picker.component.html"),
            styles: [__webpack_require__(/*! ./time-picker.component.scss */ "./src/app/atp-library/time-picker/time-picker.component.scss")]
        }),
        __metadata("design:paramtypes", [_atp_core_service__WEBPACK_IMPORTED_MODULE_1__["AtpCoreService"]])
    ], TimePickerComponent);
    return TimePickerComponent;
}());



/***/ }),

/***/ "./src/app/atp.png":
/*!*************************!*\
  !*** ./src/app/atp.png ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "atp.png";

/***/ }),

/***/ "./src/app/presentation/api/api.component.html":
/*!*****************************************************!*\
  !*** ./src/app/presentation/api/api.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"pre-title\">API reference for Amazing Time Picker</h2>\r\n<pre class=\"pre-code L\"><code>import {{ '{' }} AmazingTimePickerService {{ '}' }} from 'amazing-time-picker';</code></pre>\r\n<br>\r\n\r\n<h3 class=\"pre-title\">Directives</h3>\r\n<div class=\"box\">\r\n    <div class=\"box-content\">\r\n        <table class=\"mat-table\">\r\n\r\n            <thead class=\"header\">\r\n              <tr>\r\n                <th width=\"30%\">Name</th>\r\n                <th>Description</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td>atp-time-picker</td>\r\n                <td>You can add this directive to any <strong>input</strong> element. It will read the value of element, if its there with\r\n                  <i>00:00</i> format, and it is compatible with HTML 5 input time.\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n    </div>\r\n</div>\r\n\r\n<h3 class=\"pre-title\">Services</h3>\r\nYou can use amazing time picker service in order to open dialog programmatically.\r\nYou can simply import this service to any component that might need to display a dialog.\r\n\r\n<h4 class=\"box-title\">Methods</h4>\r\n<div class=\"box\">\r\n  <div class=\"box-header\">\r\n    open\r\n  </div>\r\n  <div class=\"box-content\">\r\n    <p>\r\n        Opens the dialog, and returns a function that you can subscribe to, so when dialog is\r\n            closed, it's gonna give you the result as a <strong>Observable {{'<'}}string{{'>'}}</strong>\r\n    </p>\r\n    <div class=\"box-header\">\r\n      Parameters\r\n    </div>\r\n    <table class=\"mat-table\">\r\n      <thead>\r\n        <tr>\r\n          <th width=\"30%\">Name</th>\r\n          <th>Description</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td>time: string</td>\r\n          <td>\r\n            Default time when Timepicker dialog appears\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>theme: string</td>\r\n          <td>\r\n            Select theme to change dialog style\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>arrowStyle: Pallete</td>\r\n          <td>\r\n            Change arrow color of Timepicker\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n<br>\r\n<div class=\"box\">\r\n    <div class=\"box-header\">\r\n      afterClose\r\n    </div>\r\n    <div class=\"box-content\">\r\n      <p>\r\n          Gets an observable that is notified when the dialog is selected.\r\n      </p>\r\n      <div class=\"box-header\">\r\n        return\r\n      </div>\r\n      <p>\r\n        Observabel{{'<'}}string{{'>'}}\r\n      </p>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/presentation/api/api.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/presentation/api/api.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main-container {\n  font-size: 17px;\n  line-height: 30px; }\n  #main-container pre {\n    line-height: 20px;\n    font-size: 12px !important; }\n  .tab-wrapper {\n  border: 1px solid #ddd;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12); }\n  .tab-wrapper .row {\n    margin: 0; }\n  .tab-wrapper .tab-header {\n    padding: 15px;\n    background: #EFEFEF; }\n  .tab-wrapper .tab-header .title {\n      font-size: 17px; }\n  .tab-wrapper pre {\n    background: transparent;\n    border: 0;\n    margin: 0; }\n  .tab-wrapper .tab-content {\n    padding: 15px; }\n  .pre-title {\n  font-size: 1.5em;\n  border-bottom: 1px solid #ddd;\n  padding: 15px 0; }\n  .pre-code.L {\n  background: #eee;\n  padding: 10px;\n  display: inline-block;\n  margin-top: 0; }\n  .pre-code.S {\n  background: #eee;\n  padding: 3px 5px;\n  display: inline-block;\n  margin: 0 5px; }\n  .box-title {\n  font-size: 1.1em;\n  color: #555;\n  margin: 25px 0; }\n  .box {\n  border: 1px solid #ddd;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12); }\n  .box .box-header {\n    padding: 15px;\n    background: #eee; }\n  .box .box-content p {\n    padding: 15px; }\n  .box .box-content table .header {\n    background: #eee; }\n  .box .box-content table tr td, .box .box-content table tr th {\n    padding: 15px; }\n  .box .box-content .box-header {\n    color: #8f95c3; }\n"

/***/ }),

/***/ "./src/app/presentation/api/api.component.ts":
/*!***************************************************!*\
  !*** ./src/app/presentation/api/api.component.ts ***!
  \***************************************************/
/*! exports provided: ApiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiComponent", function() { return ApiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ApiComponent = /** @class */ (function () {
    function ApiComponent() {
    }
    ApiComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-api',
            template: __webpack_require__(/*! ./api.component.html */ "./src/app/presentation/api/api.component.html"),
            styles: [__webpack_require__(/*! ./api.component.scss */ "./src/app/presentation/api/api.component.scss")]
        })
    ], ApiComponent);
    return ApiComponent;
}());



/***/ }),

/***/ "./src/app/presentation/example/example.component.html":
/*!*************************************************************!*\
  !*** ./src/app/presentation/example/example.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"pre-title\">Using in component markup</h2>\r\n<p>After you have installed this module, you can use it within your html templates and give the directive to the any tag. When user closes the dialog, it's gonna update the input value and will listen to input click event to open the dialog.</p>\r\n<br>\r\n<div class=\"tab-wrapper\" id=\"sec1\">\r\n  <div class=\"tab-header\">\r\n      <div class=\"row\">\r\n          <div class=\"col s6 title\">Directive</div>\r\n      </div>\r\n  </div>\r\n  <app-tabs #tab1>\r\n      <app-tab tabTitle=\"test.component.html\">\r\n            <pre style='color:#000000;'>     \r\n    <span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>input</span><span style='color:#274796; '> </span><span style='color:#074726; '>type</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>\"time\"</span><span style='color:#274796; '> atp-time-picker </span><span style='color:#074726; '>value</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>\"20:55\"</span><span style='color:#a65700; '>/></span>\r\n            </pre>\r\n      </app-tab>\r\n      <app-tab tabTitle=\"test.component.ts\">\r\n          <div>\r\n            <pre style='color:#000000;'>\r\n               \r\n    <span style='color:#800000; font-weight:bold; '>import</span> <span style='color:#800080; '>{{ '{' }}</span> Component <span style='color:#800080; '>{{ '}' }}</span> from <span style='color:#800000; '>'</span><span style='color:#0000e6; '>@angular/core</span><span style='color:#800000; '>'</span><span style='color:#800080; '>;</span>\r\n\r\n    @Component<span style='color:#808030; '>(</span><span style='color:#800080; '>{{ '{' }}</span>\r\n        selector<span style='color:#800080; '>:</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>app-test</span><span style='color:#800000; '>'</span><span style='color:#808030; '>,</span>\r\n        templateUrl<span style='color:#800080; '>:</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>./api.component.html</span><span style='color:#800000; '>'</span><span style='color:#808030; '>,</span>\r\n        styleUrls<span style='color:#800080; '>:</span> <span style='color:#808030; '>[</span><span style='color:#800000; '>'</span><span style='color:#0000e6; '>./api.component.scss</span><span style='color:#800000; '>'</span><span style='color:#808030; '>]</span>\r\n    <span style='color:#800080; '>{{ '}' }}</span><span style='color:#808030; '>)</span>\r\n\r\n    <span style='color:#800000; font-weight:bold; '>export</span> <span style='color:#800000; font-weight:bold; '>class</span> TestComponent <span style='color:#800080; '>{{ '{' }}</span>\r\n\r\n    <span style='color:#800080; '>{{ '}' }}</span>\r\n</pre>\r\n          </div>\r\n      </app-tab>\r\n  </app-tabs>\r\n  <div class=\"tab-content\">\r\n      \r\n      <div class=\"row\">\r\n          <div class=\"col s12\">\r\n                Time:\r\n                <div class=\"input-field inline\">\r\n                    <input type=\"time\" atp-time-picker value=\"20:55\"/>\r\n                </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n<br>\r\n<p>\r\n    When using in component markup we can set Timepicker configuration with using attributes.\r\n</p>\r\n<br>\r\n<div class=\"tab-wrapper\" id=\"sec10\">\r\n    <div class=\"tab-header\">\r\n        <div class=\"row\">\r\n            <div class=\"col s6 title\">Directive with configuration</div>\r\n        </div>\r\n    </div>\r\n    <app-tabs #tab1>\r\n        <app-tab tabTitle=\"test.component.html\">\r\n            <pre style='color:#000000;'>\r\n\r\n    <span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>input</span><span style='color:#274796; '> </span><span style='color:#074726; '>type</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>\"time\"</span><span style='color:#274796; '> atp-time-picker </span><span style='color:#074726; '>value</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>\"20:55\"</span><span style='color:#274796; '> theme</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>\"dark\"</span><span style='color:#274796; '> locale</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>'fa'</span><span style='color:#274796; '> </span><span style='color:#074726; '>start</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>'18:30'</span><span style='color:#274796; '> end</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>\"23:00\"</span><span style='color:#274796; '> arrowStyle</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>\"{{'{'}}'background': 'red', 'color': 'white'{{'}'}}\"</span><span style='color:#a65700; '>/></span>\r\n            </pre>\r\n        </app-tab>\r\n        <app-tab tabTitle=\"test.component.ts\">\r\n            <div>\r\n            <pre style='color:#000000;'>\r\n                \r\n    <span style='color:#800000; font-weight:bold; '>import</span> <span style='color:#800080; '>{{ '{' }}</span> Component <span style='color:#800080; '>{{ '}' }}</span> from <span style='color:#800000; '>'</span><span style='color:#0000e6; '>@angular/core</span><span style='color:#800000; '>'</span><span style='color:#800080; '>;</span>\r\n\r\n    @Component<span style='color:#808030; '>(</span><span style='color:#800080; '>{{ '{' }}</span>\r\n        selector<span style='color:#800080; '>:</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>app-test</span><span style='color:#800000; '>'</span><span style='color:#808030; '>,</span>\r\n        templateUrl<span style='color:#800080; '>:</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>./api.component.html</span><span style='color:#800000; '>'</span><span style='color:#808030; '>,</span>\r\n        styleUrls<span style='color:#800080; '>:</span> <span style='color:#808030; '>[</span><span style='color:#800000; '>'</span><span style='color:#0000e6; '>./api.component.scss</span><span style='color:#800000; '>'</span><span style='color:#808030; '>]</span>\r\n    <span style='color:#800080; '>{{ '}' }}</span><span style='color:#808030; '>)</span>\r\n\r\n    <span style='color:#800000; font-weight:bold; '>export</span> <span style='color:#800000; font-weight:bold; '>class</span> TestComponent <span style='color:#800080; '>{{ '{' }}</span>\r\n\r\n    <span style='color:#800080; '>{{ '}' }}</span>\r\n</pre>\r\n            </div>\r\n        </app-tab>\r\n    </app-tabs>\r\n    <div class=\"tab-content\">\r\n        <div class=\"row\">\r\n            <div class=\"col s12\">\r\n                Time:\r\n                <div class=\"input-field inline\">\r\n                    <input type=\"time\" atp-time-picker value=\"20:55\" theme=\"dark\" locale='fa' start='18:30' end=\"23:00\" arrowStyle=\"{'background': 'red', 'color': 'white'}\"/>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<br>\r\n<div class=\"tab-wrapper\" id=\"sec10\">\r\n    <div class=\"tab-header\">\r\n        <div class=\"row\">\r\n            <div class=\"col s6 title\">Restrict user to select hour and AM only with Directive</div>\r\n        </div>\r\n    </div>\r\n    <app-tabs #tab1>\r\n        <app-tab tabTitle=\"test.component.html\">\r\n            <pre style='color:#000000;'>\r\n\r\n    <span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>input</span><span style='color:#274796; '> </span><span style='color:#074726; '>type</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>\"time\"</span><span style='color:#274796; '> atp-time-picker </span><span style='color:#074726; '>value</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>\"8:55\"</span><span style='color:#274796; '> onlyHour</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>\"true\"</span><span style='color:#274796; '> onlyAM</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>'true'</span><span style='color:#274796; '> </span><span style='color:#a65700; '>/></span>\r\n            </pre>\r\n        </app-tab>\r\n        <app-tab tabTitle=\"test.component.ts\">\r\n            <div>\r\n            <pre style='color:#000000;'>\r\n                \r\n    <span style='color:#800000; font-weight:bold; '>import</span> <span style='color:#800080; '>{{ '{' }}</span> Component <span style='color:#800080; '>{{ '}' }}</span> from <span style='color:#800000; '>'</span><span style='color:#0000e6; '>@angular/core</span><span style='color:#800000; '>'</span><span style='color:#800080; '>;</span>\r\n\r\n    @Component<span style='color:#808030; '>(</span><span style='color:#800080; '>{{ '{' }}</span>\r\n        selector<span style='color:#800080; '>:</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>app-test</span><span style='color:#800000; '>'</span><span style='color:#808030; '>,</span>\r\n        templateUrl<span style='color:#800080; '>:</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>./api.component.html</span><span style='color:#800000; '>'</span><span style='color:#808030; '>,</span>\r\n        styleUrls<span style='color:#800080; '>:</span> <span style='color:#808030; '>[</span><span style='color:#800000; '>'</span><span style='color:#0000e6; '>./api.component.scss</span><span style='color:#800000; '>'</span><span style='color:#808030; '>]</span>\r\n    <span style='color:#800080; '>{{ '}' }}</span><span style='color:#808030; '>)</span>\r\n\r\n    <span style='color:#800000; font-weight:bold; '>export</span> <span style='color:#800000; font-weight:bold; '>class</span> TestComponent <span style='color:#800080; '>{{ '{' }}</span>\r\n\r\n    <span style='color:#800080; '>{{ '}' }}</span>\r\n</pre>\r\n            </div>\r\n        </app-tab>\r\n    </app-tabs>\r\n    <div class=\"tab-content\">\r\n        <div class=\"row\">\r\n            <div class=\"col s12\">\r\n                Time:\r\n                <div class=\"input-field inline\">\r\n                    <input type=\"time\" atp-time-picker value=\"03:30\" onlyHour=\"true\" onlyAM=\"true\"/>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<br>\r\n<h2 class=\"pre-title\">Opening component programmatically</h2>\r\n<p>You can also open a timepicker dialog programmatically. In order to open that, you need to import the service in your component </p>\r\n<pre class=\"pre-code L\"><code>import {{ '{' }} AmazingTimePickerService {{ '}' }} from 'amazing-time-picker';</code></pre>\r\n<p>Then add it inside your <code  class=\"pre-code S\">test.component.ts</code> or any other component that you want to use timepicker inside of that.</p>\r\n<br>\r\n<div class=\"tab-wrapper\" id=\"sec2\">\r\n    <div class=\"tab-header\">\r\n        <div class=\"row\">\r\n            <div class=\"col s6 title\">Programmatically</div>\r\n        </div>\r\n    </div>\r\n    <app-tabs #tab1>\r\n        <app-tab tabTitle=\"test.component.html\">\r\n<pre style='color:#000000;'>\r\n\r\n<span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>button</span><span style='color:#274796; '> (click)</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>\"open()\"</span><span style='color:#a65700; '>></span>Time<span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>button</span><span style='color:#a65700; '>></span>\r\n<span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>input</span><span style='color:#274796; '> </span><span style='color:#074726; '>type</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>\"time\"</span><span style='color:#274796; '> </span><span style='color:#074726; '>value</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>\"{{sintax}}\"</span><span style='color:#a65700; '>></span>\r\n</pre>\r\n        </app-tab>\r\n        <app-tab tabTitle=\"test.component.ts\">\r\n            <div>\r\n                    <pre style='color:#000000;'>\r\n<span style='color:#800000; font-weight:bold; '>import</span> <span style='color:#800080; '>{{ '{' }}</span> Component <span style='color:#800080; '>{{ '}' }}</span> from <span style='color:#800000; '>'</span><span style='color:#0000e6; '>@angular/core</span><span style='color:#800000; '>'</span><span style='color:#800080; '>;</span>\r\n<span style='color:#800000; font-weight:bold; '>import</span> <span style='color:#800080; '>{{ '{' }}</span> AmazingTimePickerService <span style='color:#800080; '>{{ '}' }}</span> from <span style='color:#800000; '>'</span><span style='color:#0000e6; '>amazing-time-picker</span><span style='color:#800000; '>'</span><span style='color:#800080; '>;</span>\r\n\r\n@Component<span style='color:#808030; '>(</span><span style='color:#800080; '>{{ '{' }}</span>\r\n    selector<span style='color:#800080; '>:</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>app-test</span><span style='color:#800000; '>'</span><span style='color:#808030; '>,</span>\r\n    templateUrl<span style='color:#800080; '>:</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>./test.component.html</span><span style='color:#800000; '>'</span><span style='color:#808030; '>,</span>\r\n    styleUrls<span style='color:#800080; '>:</span> <span style='color:#808030; '>[</span><span style='color:#800000; '>'</span><span style='color:#0000e6; '>./test.component.scss</span><span style='color:#800000; '>'</span><span style='color:#808030; '>]</span>\r\n<span style='color:#800080; '>{{ '}' }}</span><span style='color:#808030; '>)</span>\r\n<span style='color:#800000; font-weight:bold; '>export</span> <span style='color:#800000; font-weight:bold; '>class</span> TestComponent <span style='color:#800080; '>{{ '{' }}</span>\r\n    <span style='color:#800000; font-weight:bold; '>public</span> selectedTime<span style='color:#800080; '>:</span> string<span style='color:#800080; '>;</span>\r\n\r\n    <span style='color:#797997; '>constructor</span><span style='color:#808030; '>(</span> <span style='color:#800000; font-weight:bold; '>private</span> atp<span style='color:#800080; '>:</span> AmazingTimePickerService <span style='color:#808030; '>)</span> <span style='color:#800080; '>{{ '{' }}</span> <span style='color:#800080; '>{{ '}' }}</span>\r\n\r\n    open<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span> <span style='color:#800080; '>{{ '{' }}</span>\r\n        <span style='color:#800000; font-weight:bold; '>const</span> amazingTimePicker <span style='color:#808030; '>=</span> <span style='color:#800000; font-weight:bold; '>this</span><span style='color:#808030; '>.</span>atp<span style='color:#808030; '>.</span>open<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>\r\n        amazingTimePicker<span style='color:#808030; '>.</span>afterClose<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#808030; '>.</span>subscribe<span style='color:#808030; '>(</span>time <span style='color:#808030; '>=</span><span style='color:#808030; '>></span> <span style='color:#800080; '>{{ '{' }}</span>\r\n            <span style='color:#800000; font-weight:bold; '>this</span><span style='color:#808030; '>.</span>selectedTime <span style='color:#808030; '>=</span> time<span style='color:#800080; '>;</span>\r\n        <span style='color:#800080; '>{{ '}' }}</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>\r\n    <span style='color:#800080; '>{{ '}' }}</span>\r\n<span style='color:#800080; '>{{ '}' }}</span>\r\n                        </pre>\r\n            </div>\r\n        </app-tab>\r\n    </app-tabs>\r\n    <div class=\"tab-content\">\r\n        <div class=\"row\">\r\n            <div class=\"col s12\">\r\n                <button class=\"waves-effect waves-light btn test-open-dialog\"  (click)=\"open()\">Time</button>\r\n                <div class=\"input-field inline\">\r\n                <input type=\"time\" class=\"validate\" [value]=\"selectedTime\" class=\"atp-ref-dialog-result\" id=\"atp-ref-dialog-result\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n\r\n  \r\n      <br>\r\n      <h2 class=\"pre-title\">Opening component programmatically with custom configuration</h2>\r\n      <p>You can also open a timepicker dialog programmatically with parameter to config Timepicker such as set time as default and change style and other things.</p>\r\n      <p>The config structure like below code:</p>\r\n      <pre class=\"pre-code L\"><code>{{ '{' }}\r\n    time: '18:30',\r\n    theme: 'dark',  <span style=\"color:#aaa\">// Default: 'light'</span>\r\n    locale: 'fa',   <span style=\"color:#aaa\">// Default: 'en'</span>\r\n    rangeTime: {{ '{' }}\r\n        start: '15:30',\r\n        end: '18:45'\r\n    {{ '}' }},\r\n    arrowStyle: {{ '{' }}\r\n        background: 'red',\r\n        color: 'white'\r\n    {{ '}' }}\r\n{{ '}' }}</code></pre>\r\n      <br>\r\n      <div class=\"tab-wrapper\" id=\"sec2\">\r\n            <div class=\"tab-header\">\r\n                <div class=\"row\">\r\n                    <div class=\"col s6 title\">Programmatically with parameter</div>\r\n                </div>\r\n            </div>\r\n            <app-tabs #tab1>\r\n                <app-tab tabTitle=\"test.component.html\">\r\n    <pre style='color:#000000;'>\r\n\r\n    <span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>button</span><span style='color:#274796; '> (click)</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>\"open()\"</span><span style='color:#a65700; '>></span>Time<span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>button</span><span style='color:#a65700; '>></span>\r\n    <span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>input</span><span style='color:#274796; '> </span><span style='color:#074726; '>type</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>\"time\"</span><span style='color:#274796; '> </span><span style='color:#074726; '>value</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>\"{{sintax}}\"</span><span style='color:#a65700; '>></span>\r\n    </pre>\r\n            </app-tab>\r\n            <app-tab tabTitle=\"test.component.ts\">\r\n                <div>\r\n<pre style='color:#000000;'>\r\n    <span style='color:#800000; font-weight:bold; '>import</span> <span style='color:#800080; '>{{ '{' }}</span> Component <span style='color:#800080; '>{{ '}' }}</span> from <span style='color:#800000; '>'</span><span style='color:#0000e6; '>@angular/core</span><span style='color:#800000; '>'</span><span style='color:#800080; '>;</span>\r\n    <span style='color:#800000; font-weight:bold; '>import</span> <span style='color:#800080; '>{{ '{' }}</span> AmazingTimePickerService <span style='color:#800080; '>{{ '}' }}</span> from <span style='color:#800000; '>'</span><span style='color:#0000e6; '>amazing-time-picker</span><span style='color:#800000; '>'</span><span style='color:#800080; '>;</span>\r\n    \r\n    @Component<span style='color:#808030; '>(</span><span style='color:#800080; '>{{ '{' }}</span>\r\n        selector<span style='color:#800080; '>:</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>app-test</span><span style='color:#800000; '>'</span><span style='color:#808030; '>,</span>\r\n        templateUrl<span style='color:#800080; '>:</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>./test.component.html</span><span style='color:#800000; '>'</span><span style='color:#808030; '>,</span>\r\n        styleUrls<span style='color:#800080; '>:</span> <span style='color:#808030; '>[</span><span style='color:#800000; '>'</span><span style='color:#0000e6; '>./test.component.scss</span><span style='color:#800000; '>'</span><span style='color:#808030; '>]</span>\r\n    <span style='color:#800080; '>{{ '}' }}</span><span style='color:#808030; '>)</span>\r\n    <span style='color:#800000; font-weight:bold; '>export</span> <span style='color:#800000; font-weight:bold; '>class</span> TestComponent <span style='color:#800080; '>{{ '{' }}</span>\r\n        <span style='color:#800000; font-weight:bold; '>public</span> selectedTime <span style='color:#808030; '>=</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>18:33</span><span style='color:#800000; '>'</span><span style='color:#800080; '>;</span>\r\n    \r\n        <span style='color:#797997; '>constructor</span><span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>private</span> atp<span style='color:#800080; '>:</span> AmazingTimePickerService<span style='color:#808030; '>)</span> <span style='color:#800080; '>{{ '{' }}</span> <span style='color:#800080; '>{{ '}' }}</span>\r\n    \r\n        open<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span> <span style='color:#800080; '>{{ '{' }}</span>\r\n            <span style='color:#800000; font-weight:bold; '>const</span> amazingTimePicker <span style='color:#808030; '>=</span> <span style='color:#800000; font-weight:bold; '>this</span><span style='color:#808030; '>.</span>atp<span style='color:#808030; '>.</span>open<span style='color:#808030; '>(</span><span style='color:#800080; '>{{ '{' }}</span>\r\n                time<span style='color:#800080; '>:</span>  <span style='color:#800000; font-weight:bold; '>this</span><span style='color:#808030; '>.</span>selectedTime<span style='color:#808030; '>,</span>\r\n                theme<span style='color:#800080; '>:</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>dark</span><span style='color:#800000; '>'</span><span style='color:#808030; '>,</span>\r\n                arrowStyle<span style='color:#800080; '>:</span> <span style='color:#800080; '>{{ '{' }}</span>\r\n                    background<span style='color:#800080; '>:</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>red</span><span style='color:#800000; '>'</span><span style='color:#808030; '>,</span>\r\n                    color<span style='color:#800080; '>:</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>white</span><span style='color:#800000; '>'</span>\r\n                <span style='color:#800080; '>{{ '}' }}</span>\r\n            <span style='color:#800080; '>{{ '}' }}</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>\r\n            amazingTimePicker<span style='color:#808030; '>.</span>afterClose<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#808030; '>.</span>subscribe<span style='color:#808030; '>(</span>time <span style='color:#808030; '>=</span><span style='color:#808030; '>></span> <span style='color:#800080; '>{{ '{' }}</span>\r\n                <span style='color:#800000; font-weight:bold; '>this</span><span style='color:#808030; '>.</span>selectedTime <span style='color:#808030; '>=</span> time<span style='color:#800080; '>;</span>\r\n            <span style='color:#800080; '>{{ '}' }}</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>\r\n        <span style='color:#800080; '>{{ '}' }}</span>\r\n    <span style='color:#800080; '>{{ '}' }}</span>\r\n    </pre>\r\n                    </div>\r\n                </app-tab>\r\n            </app-tabs>\r\n            <div class=\"tab-content\">\r\n                <div class=\"row\">\r\n                    <div class=\"col s12\">\r\n                        <button class=\"waves-effect waves-light btn\"  (click)=\"openDark()\">Time</button>\r\n                        <div class=\"input-field inline\">\r\n                        <input type=\"time\" class=\"validate\" value=\"{{selectedTimeDark}}\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n        \r\n<app-example-material></app-example-material>\r\n<app-example-persian></app-example-persian>\r\n<app-example-arabic></app-example-arabic>\r\n<app-example-hour></app-example-hour>\r\n"

/***/ }),

/***/ "./src/app/presentation/example/example.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/presentation/example/example.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main-container {\n  font-size: 17px;\n  line-height: 30px; }\n  #main-container pre {\n    line-height: 20px;\n    font-size: 12px !important; }\n  .tab-wrapper {\n  border: 1px solid #ddd;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12); }\n  .tab-wrapper .row {\n    margin: 0; }\n  .tab-wrapper .tab-header {\n    padding: 15px;\n    background: #EFEFEF; }\n  .tab-wrapper .tab-header .title {\n      font-size: 17px; }\n  .tab-wrapper pre {\n    background: transparent;\n    border: 0;\n    margin: 0; }\n  .tab-wrapper .tab-content {\n    padding: 15px; }\n  .pre-title {\n  font-size: 1.5em;\n  border-bottom: 1px solid #ddd;\n  padding: 15px 0; }\n  .pre-code.L {\n  background: #eee;\n  padding: 15px;\n  display: block; }\n  .pre-code.S {\n  background: #eee;\n  padding: 3px 5px;\n  display: inline-block;\n  margin: 0 5px; }\n"

/***/ }),

/***/ "./src/app/presentation/example/example.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/presentation/example/example.component.ts ***!
  \***********************************************************/
/*! exports provided: ExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleComponent", function() { return ExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _atp_library_atp_time_picker_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../atp-library/atp-time-picker.service */ "./src/app/atp-library/atp-time-picker.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExampleComponent = /** @class */ (function () {
    function ExampleComponent(atp) {
        this.atp = atp;
        this.selectedTimeDark = '18:33';
        this.sintax = '{{selectedTime}}';
    }
    ExampleComponent.prototype.open = function () {
        var _this = this;
        var amazingTimePicker = this.atp.open();
        amazingTimePicker.afterClose().subscribe(function (time) {
            _this.selectedTime = time;
        });
    };
    ExampleComponent.prototype.openDark = function () {
        var _this = this;
        var amazingTimePicker = this.atp.open({
            time: this.selectedTimeDark,
            theme: 'dark',
            arrowStyle: {
                background: 'red',
                color: 'white'
            }
        });
        amazingTimePicker.afterClose().subscribe(function (time) {
            _this.selectedTimeDark = time;
        });
    };
    ExampleComponent.prototype.toggleTab = function () {
    };
    ExampleComponent.prototype.onCustomEvent = function (response) {
    };
    ExampleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-example',
            template: __webpack_require__(/*! ./example.component.html */ "./src/app/presentation/example/example.component.html"),
            styles: [__webpack_require__(/*! ./example.component.scss */ "./src/app/presentation/example/example.component.scss")]
        }),
        __metadata("design:paramtypes", [_atp_library_atp_time_picker_service__WEBPACK_IMPORTED_MODULE_1__["AmazingTimePickerService"]])
    ], ExampleComponent);
    return ExampleComponent;
}());



/***/ }),

/***/ "./src/app/presentation/examples/example-arabic/example-arabic.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/presentation/examples/example-arabic/example-arabic.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<p>\r\n  This can be used to override the modal behavior. We have added a builtin display preference for Arabic Language.\r\n</p>\r\n<div class=\"tab-wrapper\" id=\"sec2\">\r\n  <div class=\"tab-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col s6 title\">Programmatically with Arabic Language</div>\r\n    </div>\r\n  </div>\r\n  <app-tabs>\r\n    <app-tab tabTitle=\"test.component.html\">\r\n        <pre style='color:#000000;'>\r\n\r\n    <span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>button</span><span style='color:#274796; '> (click)</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>\"open()\"</span><span style='color:#a65700; '>></span>Time<span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>button</span><span style='color:#a65700; '>></span>\r\n    <span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>input</span><span style='color:#274796; '> </span><span style='color:#074726; '>type</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>\"time\"</span><span style='color:#274796; '> </span><span style='color:#074726; '>value</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>\"{{sintax}}\"</span><span style='color:#a65700; '>></span>\r\n        </pre>\r\n    </app-tab>\r\n    <app-tab tabTitle=\"test.component.ts\">\r\n<pre style='color:#000000;'>\r\n    <span style='color:#800000; font-weight:bold; '>import</span> <span style='color:#800080; '>{{ '{' }}</span> Component <span style='color:#800080; '>{{ '}' }}</span> from <span style='color:#800000; '>'</span><span style='color:#0000e6; '>@angular/core</span><span style='color:#800000; '>'</span><span style='color:#800080; '>;</span>\r\n    <span style='color:#800000; font-weight:bold; '>import</span> <span style='color:#800080; '>{{ '{' }}</span> AmazingTimePickerService <span style='color:#800080; '>{{ '}' }}</span> from <span style='color:#800000; '>'</span><span style='color:#0000e6; '>amazing-time-picker</span><span style='color:#800000; '>'</span><span style='color:#800080; '>;</span>\r\n    \r\n    @Component<span style='color:#808030; '>(</span><span style='color:#800080; '>{{ '{' }}</span>\r\n        selector<span style='color:#800080; '>:</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>app-test</span><span style='color:#800000; '>'</span><span style='color:#808030; '>,</span>\r\n        templateUrl<span style='color:#800080; '>:</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>./test.component.html</span><span style='color:#800000; '>'</span><span style='color:#808030; '>,</span>\r\n        styleUrls<span style='color:#800080; '>:</span> <span style='color:#808030; '>[</span><span style='color:#800000; '>'</span><span style='color:#0000e6; '>./test.component.scss</span><span style='color:#800000; '>'</span><span style='color:#808030; '>]</span>\r\n    <span style='color:#800080; '>{{ '}' }}</span><span style='color:#808030; '>)</span>\r\n    <span style='color:#800000; font-weight:bold; '>export</span> <span style='color:#800000; font-weight:bold; '>class</span> TestComponent <span style='color:#800080; '>{{ '{' }}</span>\r\n        <span style='color:#800000; font-weight:bold; '>public</span> selectedTime <span style='color:#808030; '>=</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>18:33</span><span style='color:#800000; '>'</span><span style='color:#800080; '>;</span>\r\n\r\n        <span style='color:#797997; '>constructor</span><span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>private</span> atp<span style='color:#800080; '>:</span> AmazingTimePickerService<span style='color:#808030; '>)</span> <span style='color:#800080; '>{{ '{' }}</span> <span style='color:#800080; '>{{ '}' }}</span>\r\n    \r\n        open<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span> <span style='color:#800080; '>{{ '{' }}</span>\r\n            <span style='color:#800000; font-weight:bold; '>const</span> amazingTimePicker <span style='color:#808030; '>=</span> <span style='color:#800000; font-weight:bold; '>this</span><span style='color:#808030; '>.</span>atp<span style='color:#808030; '>.</span>open<span style='color:#808030; '>(</span><span style='color:#800080; '>{{ '{' }}</span>\r\n                locale<span style='color:#800080; '>:</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>ar</span><span style='color:#800000; '>'</span><span style='color:#808030; '>,</span>\r\n            <span style='color:#800080; '>{{ '}' }}</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>\r\n            amazingTimePicker<span style='color:#808030; '>.</span>afterClose<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#808030; '>.</span>subscribe<span style='color:#808030; '>(</span>time <span style='color:#808030; '>=</span><span style='color:#808030; '>></span> <span style='color:#800080; '>{{ '{' }}</span>\r\n                <span style='color:#800000; font-weight:bold; '>this</span><span style='color:#808030; '>.</span>selectedTime <span style='color:#808030; '>=</span> time<span style='color:#800080; '>;</span>\r\n            <span style='color:#800080; '>{{ '}' }}</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>\r\n        <span style='color:#800080; '>{{ '}' }}</span>\r\n    <span style='color:#800080; '>{{ '}' }}</span>\r\n    </pre>\r\n    </app-tab>\r\n  </app-tabs>\r\n  <div class=\"tab-content\">\r\n    <div class=\"row\">\r\n      <div class=\"col s12\">\r\n        <button class=\"waves-effect waves-light btn \"  (click)=\"openArabic()\">Time</button>\r\n        <div class=\"input-field inline\">\r\n        <input type=\"time\" class=\"validate\" [value]=\"selectedTime\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/presentation/examples/example-arabic/example-arabic.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/presentation/examples/example-arabic/example-arabic.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main-container {\n  font-size: 17px;\n  line-height: 30px; }\n  #main-container pre {\n    line-height: 20px;\n    font-size: 12px !important; }\n  .tab-wrapper {\n  border: 1px solid #ddd;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12); }\n  .tab-wrapper .row {\n    margin: 0; }\n  .tab-wrapper .tab-header {\n    padding: 15px;\n    background: #EFEFEF; }\n  .tab-wrapper .tab-header .title {\n      font-size: 17px; }\n  .tab-wrapper pre {\n    background: transparent;\n    border: 0;\n    margin: 0; }\n  .tab-wrapper .tab-content {\n    padding: 15px; }\n  .pre-title {\n  font-size: 1.5em;\n  border-bottom: 1px solid #ddd;\n  padding: 15px 0; }\n  .pre-code.L {\n  background: #eee;\n  padding: 15px;\n  display: block; }\n  .pre-code.S {\n  background: #eee;\n  padding: 3px 5px;\n  display: inline-block;\n  margin: 0 5px; }\n"

/***/ }),

/***/ "./src/app/presentation/examples/example-arabic/example-arabic.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/presentation/examples/example-arabic/example-arabic.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ExampleArabicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleArabicComponent", function() { return ExampleArabicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _atp_library_atp_time_picker_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../atp-library/atp-time-picker.service */ "./src/app/atp-library/atp-time-picker.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var encode = function (x) { return x.replace(/[\u00A0-\u9999<>\&]/gim, function (i) {
    return '&#' + i.charCodeAt(0) + ';';
}); };
var ExampleArabicComponent = /** @class */ (function () {
    function ExampleArabicComponent(atp) {
        this.atp = atp;
        this.sintax = '{{selectedTime}}';
    }
    ExampleArabicComponent.prototype.ngOnInit = function () {
    };
    ExampleArabicComponent.prototype.openArabic = function () {
        var _this = this;
        var amazingTimePicker = this.atp.open({
            locale: 'ar'
        });
        amazingTimePicker.afterClose().subscribe(function (time) {
            _this.selectedTime = time;
        });
    };
    ExampleArabicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-example-arabic',
            template: __webpack_require__(/*! ./example-arabic.component.html */ "./src/app/presentation/examples/example-arabic/example-arabic.component.html"),
            styles: [__webpack_require__(/*! ./example-arabic.component.scss */ "./src/app/presentation/examples/example-arabic/example-arabic.component.scss")]
        }),
        __metadata("design:paramtypes", [_atp_library_atp_time_picker_service__WEBPACK_IMPORTED_MODULE_1__["AmazingTimePickerService"]])
    ], ExampleArabicComponent);
    return ExampleArabicComponent;
}());



/***/ }),

/***/ "./src/app/presentation/examples/example-hour/example-hour.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/presentation/examples/example-hour/example-hour.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<br>\r\n\r\n<div class=\"tab-wrapper\" id=\"sec2\">\r\n  <div class=\"tab-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col s6 title\">\r\n        Restrict user to select hour only, not the minute.\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <app-tabs>\r\n    <app-tab tabTitle=\"test.component.html\">\r\n        <pre style='color:#000000;'>\r\n\r\n    <span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>button</span><span style='color:#274796; '> (click)</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>\"open()\"</span><span style='color:#a65700; '>></span>Time<span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>button</span><span style='color:#a65700; '>></span>\r\n    <span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>input</span><span style='color:#274796; '> </span><span style='color:#074726; '>type</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>\"time\"</span><span style='color:#274796; '> </span><span style='color:#074726; '>value</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>\"{{sintax}}\"</span><span style='color:#a65700; '>></span>\r\n        </pre>\r\n    </app-tab>\r\n    <app-tab tabTitle=\"test.component.ts\">\r\n<pre style='color:#000000;'>\r\n    <span style='color:#800000; font-weight:bold; '>import</span> <span style='color:#800080; '>{{ '{' }}</span> Component <span style='color:#800080; '>{{ '}' }}</span> from <span style='color:#800000; '>'</span><span style='color:#0000e6; '>@angular/core</span><span style='color:#800000; '>'</span><span style='color:#800080; '>;</span>\r\n    <span style='color:#800000; font-weight:bold; '>import</span> <span style='color:#800080; '>{{ '{' }}</span> AmazingTimePickerService <span style='color:#800080; '>{{ '}' }}</span> from <span style='color:#800000; '>'</span><span style='color:#0000e6; '>amazing-time-picker</span><span style='color:#800000; '>'</span><span style='color:#800080; '>;</span>\r\n    \r\n    @Component<span style='color:#808030; '>(</span><span style='color:#800080; '>{{ '{' }}</span>\r\n        selector<span style='color:#800080; '>:</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>app-test</span><span style='color:#800000; '>'</span><span style='color:#808030; '>,</span>\r\n        templateUrl<span style='color:#800080; '>:</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>./test.component.html</span><span style='color:#800000; '>'</span><span style='color:#808030; '>,</span>\r\n        styleUrls<span style='color:#800080; '>:</span> <span style='color:#808030; '>[</span><span style='color:#800000; '>'</span><span style='color:#0000e6; '>./test.component.scss</span><span style='color:#800000; '>'</span><span style='color:#808030; '>]</span>\r\n    <span style='color:#800080; '>{{ '}' }}</span><span style='color:#808030; '>)</span>\r\n    <span style='color:#800000; font-weight:bold; '>export</span> <span style='color:#800000; font-weight:bold; '>class</span> TestComponent <span style='color:#800080; '>{{ '{' }}</span>\r\n        <span style='color:#800000; font-weight:bold; '>public</span> selectedTime <span style='color:#808030; '>=</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>18:33</span><span style='color:#800000; '>'</span><span style='color:#800080; '>;</span>\r\n\r\n        <span style='color:#797997; '>constructor</span><span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>private</span> atp<span style='color:#800080; '>:</span> AmazingTimePickerService<span style='color:#808030; '>)</span> <span style='color:#800080; '>{{ '{' }}</span> <span style='color:#800080; '>{{ '}' }}</span>\r\n    \r\n        open<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span> <span style='color:#800080; '>{{ '{' }}</span>\r\n            <span style='color:#800000; font-weight:bold; '>const</span> amazingTimePicker <span style='color:#808030; '>=</span> <span style='color:#800000; font-weight:bold; '>this</span><span style='color:#808030; '>.</span>atp<span style='color:#808030; '>.</span>open<span style='color:#808030; '>(</span><span style='color:#800080; '>{{ '{' }}</span>\r\n                onlyHour<span style='color:#800080; '>:</span> <span style='color:#800000; '></span><span style='color:#0000e6; '>true</span><span style='color:#800000; '></span><span style='color:#808030; '>,</span>\r\n            <span style='color:#800080; '>{{ '}' }}</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>\r\n            amazingTimePicker<span style='color:#808030; '>.</span>afterClose<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#808030; '>.</span>subscribe<span style='color:#808030; '>(</span>time <span style='color:#808030; '>=</span><span style='color:#808030; '>></span> <span style='color:#800080; '>{{ '{' }}</span>\r\n                <span style='color:#800000; font-weight:bold; '>this</span><span style='color:#808030; '>.</span>selectedTime <span style='color:#808030; '>=</span> time<span style='color:#800080; '>;</span>\r\n            <span style='color:#800080; '>{{ '}' }}</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>\r\n        <span style='color:#800080; '>{{ '}' }}</span>\r\n    <span style='color:#800080; '>{{ '}' }}</span>\r\n    </pre>\r\n    </app-tab>\r\n  </app-tabs>\r\n  <div class=\"tab-content\">\r\n    <div class=\"row\">\r\n      <div class=\"col s12\">\r\n        <button class=\"waves-effect waves-light btn \"  (click)=\"openHour()\">Time</button>\r\n        <div class=\"input-field inline\">\r\n        <input type=\"time\" class=\"validate\" [value]=\"selectedTime\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/presentation/examples/example-hour/example-hour.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/presentation/examples/example-hour/example-hour.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main-container {\n  font-size: 17px;\n  line-height: 30px; }\n  #main-container pre {\n    line-height: 20px;\n    font-size: 12px !important; }\n  .tab-wrapper {\n  border: 1px solid #ddd;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12); }\n  .tab-wrapper .row {\n    margin: 0; }\n  .tab-wrapper .tab-header {\n    padding: 15px;\n    background: #EFEFEF; }\n  .tab-wrapper .tab-header .title {\n      font-size: 17px; }\n  .tab-wrapper pre {\n    background: transparent;\n    border: 0;\n    margin: 0; }\n  .tab-wrapper .tab-content {\n    padding: 15px; }\n  .pre-title {\n  font-size: 1.5em;\n  border-bottom: 1px solid #ddd;\n  padding: 15px 0; }\n  .pre-code.L {\n  background: #eee;\n  padding: 15px;\n  display: block; }\n  .pre-code.S {\n  background: #eee;\n  padding: 3px 5px;\n  display: inline-block;\n  margin: 0 5px; }\n"

/***/ }),

/***/ "./src/app/presentation/examples/example-hour/example-hour.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/presentation/examples/example-hour/example-hour.component.ts ***!
  \******************************************************************************/
/*! exports provided: ExampleHourComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleHourComponent", function() { return ExampleHourComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _atp_library_atp_time_picker_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../atp-library/atp-time-picker.service */ "./src/app/atp-library/atp-time-picker.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var encode = function (x) { return x.replace(/[\u00A0-\u9999<>\&]/gim, function (i) {
    return '&#' + i.charCodeAt(0) + ';';
}); };
var ExampleHourComponent = /** @class */ (function () {
    function ExampleHourComponent(atp) {
        this.atp = atp;
        this.interface = encode("\n  export interface IDisplayPreference {\n    minute?: Function;\n    hour?: Function;\n    onlyHour?: boolean;\n    separator?: string;\n    labels?: {\n      ok?: string;\n      cancel?: string;\n    };\n    period?(period: 'AM' | 'PM');\n    clockMinute?(minute: any);\n    clockHour?(hour: any);\n  }\n  ");
        this.sintax = '{{selectedTime}}';
    }
    ExampleHourComponent.prototype.ngOnInit = function () {
    };
    ExampleHourComponent.prototype.openHour = function () {
        var _this = this;
        var amazingTimePicker = this.atp.open({
            time: '3:30',
            onlyHour: true
        });
        amazingTimePicker.afterClose().subscribe(function (time) {
            _this.selectedTime = time;
        });
    };
    ExampleHourComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-example-hour',
            template: __webpack_require__(/*! ./example-hour.component.html */ "./src/app/presentation/examples/example-hour/example-hour.component.html"),
            styles: [__webpack_require__(/*! ./example-hour.component.scss */ "./src/app/presentation/examples/example-hour/example-hour.component.scss")]
        }),
        __metadata("design:paramtypes", [_atp_library_atp_time_picker_service__WEBPACK_IMPORTED_MODULE_1__["AmazingTimePickerService"]])
    ], ExampleHourComponent);
    return ExampleHourComponent;
}());



/***/ }),

/***/ "./src/app/presentation/examples/example-material/example-material.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/presentation/examples/example-material/example-material.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<p>\r\n  There is an special theme for material design green, which you can use by setting the theme to material.\r\n</p>\r\n<pre class=\"pre-code L\"><code>There are few material colours available:\r\n  <strong>material-green</strong>\r\n  <strong>material-blue</strong>\r\n  <strong>material-red</strong>\r\n  <strong>material-orange</strong>\r\n  <strong>meterial-purple</strong>\r\n</code></pre>\r\n<div class=\"tab-wrapper\" id=\"sec2\">\r\n  <div class=\"tab-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col s6 title\">Programmatically with Material theme</div>\r\n    </div>\r\n\r\n    \r\n  </div>\r\n  <app-tabs>\r\n    <app-tab tabTitle=\"test.component.html\">\r\n        <pre style='color:#000000;'>\r\n\r\n    <span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>button</span><span style='color:#274796; '> (click)</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>\"open()\"</span><span style='color:#a65700; '>></span>Time<span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>button</span><span style='color:#a65700; '>></span>\r\n    <span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>input</span><span style='color:#274796; '> </span><span style='color:#074726; '>type</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>\"time\"</span><span style='color:#274796; '> </span><span style='color:#074726; '>value</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>\"{{sintax}}\"</span><span style='color:#a65700; '>></span>\r\n        </pre>\r\n    </app-tab>\r\n    <app-tab tabTitle=\"test.component.ts\">\r\n<pre style='color:#000000;'>\r\n    <span style='color:#800000; font-weight:bold; '>import</span> <span style='color:#800080; '>{{ '{' }}</span> Component <span style='color:#800080; '>{{ '}' }}</span> from <span style='color:#800000; '>'</span><span style='color:#0000e6; '>@angular/core</span><span style='color:#800000; '>'</span><span style='color:#800080; '>;</span>\r\n    <span style='color:#800000; font-weight:bold; '>import</span> <span style='color:#800080; '>{{ '{' }}</span> AmazingTimePickerService <span style='color:#800080; '>{{ '}' }}</span> from <span style='color:#800000; '>'</span><span style='color:#0000e6; '>amazing-time-picker</span><span style='color:#800000; '>'</span><span style='color:#800080; '>;</span>\r\n    \r\n    @Component<span style='color:#808030; '>(</span><span style='color:#800080; '>{{ '{' }}</span>\r\n        selector<span style='color:#800080; '>:</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>app-test</span><span style='color:#800000; '>'</span><span style='color:#808030; '>,</span>\r\n        templateUrl<span style='color:#800080; '>:</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>./test.component.html</span><span style='color:#800000; '>'</span><span style='color:#808030; '>,</span>\r\n        styleUrls<span style='color:#800080; '>:</span> <span style='color:#808030; '>[</span><span style='color:#800000; '>'</span><span style='color:#0000e6; '>./test.component.scss</span><span style='color:#800000; '>'</span><span style='color:#808030; '>]</span>\r\n    <span style='color:#800080; '>{{ '}' }}</span><span style='color:#808030; '>)</span>\r\n    <span style='color:#800000; font-weight:bold; '>export</span> <span style='color:#800000; font-weight:bold; '>class</span> TestComponent <span style='color:#800080; '>{{ '{' }}</span>\r\n        <span style='color:#800000; font-weight:bold; '>public</span> selectedTime <span style='color:#808030; '>=</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>18:33</span><span style='color:#800000; '>'</span><span style='color:#800080; '>;</span>\r\n\r\n        <span style='color:#797997; '>constructor</span><span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>private</span> atp<span style='color:#800080; '>:</span> AmazingTimePickerService<span style='color:#808030; '>)</span> <span style='color:#800080; '>{{ '{' }}</span> <span style='color:#800080; '>{{ '}' }}</span>\r\n    \r\n        open<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span> <span style='color:#800080; '>{{ '{' }}</span>\r\n            <span style='color:#800000; font-weight:bold; '>const</span> amazingTimePicker <span style='color:#808030; '>=</span> <span style='color:#800000; font-weight:bold; '>this</span><span style='color:#808030; '>.</span>atp<span style='color:#808030; '>.</span>open<span style='color:#808030; '>(</span><span style='color:#800080; '>{{ '{' }}</span>\r\n                theme<span style='color:#800080; '>:</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>material-blue</span><span style='color:#800000; '>'</span><span style='color:#808030; '>,</span>\r\n            <span style='color:#800080; '>{{ '}' }}</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>\r\n            amazingTimePicker<span style='color:#808030; '>.</span>afterClose<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#808030; '>.</span>subscribe<span style='color:#808030; '>(</span>time <span style='color:#808030; '>=</span><span style='color:#808030; '>></span> <span style='color:#800080; '>{{ '{' }}</span>\r\n                <span style='color:#800000; font-weight:bold; '>this</span><span style='color:#808030; '>.</span>selectedTime <span style='color:#808030; '>=</span> time<span style='color:#800080; '>;</span>\r\n            <span style='color:#800080; '>{{ '}' }}</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>\r\n        <span style='color:#800080; '>{{ '}' }}</span>\r\n    <span style='color:#800080; '>{{ '}' }}</span>\r\n    </pre>\r\n    </app-tab>\r\n  </app-tabs>\r\n  <div class=\"tab-content\">\r\n    <div class=\"row\">\r\n      <div class=\"col s12\">\r\n\r\n        <button class=\"waves-effect waves-light btn button-material-green\"  (click)=\"openByTheme('material-green')\"></button>\r\n        <button class=\"waves-effect waves-light btn button-material-blue\"  (click)=\"openByTheme('material-blue')\"></button>\r\n        <button class=\"waves-effect waves-light btn button-material-red\"  (click)=\"openByTheme('material-red')\"></button>\r\n        <button class=\"waves-effect waves-light btn button-material-orange\"  (click)=\"openByTheme('material-orange')\"></button>\r\n        <button class=\"waves-effect waves-light btn button-material-purple\"  (click)=\"openByTheme('material-purple')\"></button>\r\n<br>\r\n        <div class=\"input-field inline\">\r\n        <input type=\"time\" class=\"validate\" [value]=\"selectedTime\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/presentation/examples/example-material/example-material.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/presentation/examples/example-material/example-material.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main-container {\n  font-size: 17px;\n  line-height: 30px; }\n  #main-container pre {\n    line-height: 20px;\n    font-size: 12px !important; }\n  .tab-wrapper {\n  border: 1px solid #ddd;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12); }\n  .tab-wrapper .row {\n    margin: 0; }\n  .tab-wrapper .tab-header {\n    padding: 15px;\n    background: #EFEFEF; }\n  .tab-wrapper .tab-header .title {\n      font-size: 17px; }\n  .tab-wrapper pre {\n    background: transparent;\n    border: 0;\n    margin: 0; }\n  .tab-wrapper .tab-content {\n    padding: 15px; }\n  .pre-title {\n  font-size: 1.5em;\n  border-bottom: 1px solid #ddd;\n  padding: 15px 0; }\n  .pre-code.L {\n  background: #eee;\n  padding: 15px;\n  display: block; }\n  .pre-code.S {\n  background: #eee;\n  padding: 3px 5px;\n  display: inline-block;\n  margin: 0 5px; }\n  .button-material-green {\n  background-color: #00897b;\n  padding: 18px; }\n  .button-material-blue {\n  background-color: #3F51B5;\n  padding: 18px; }\n  .button-material-red {\n  background-color: #F44336;\n  padding: 18px; }\n  .button-material-purple {\n  background-color: #9C27B0;\n  padding: 18px; }\n  .button-material-orange {\n  background-color: #FF9800;\n  padding: 18px; }\n"

/***/ }),

/***/ "./src/app/presentation/examples/example-material/example-material.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/presentation/examples/example-material/example-material.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ExampleMaterialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleMaterialComponent", function() { return ExampleMaterialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _atp_library_atp_time_picker_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../atp-library/atp-time-picker.service */ "./src/app/atp-library/atp-time-picker.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var encode = function (x) { return x.replace(/[\u00A0-\u9999<>\&]/gim, function (i) {
    return '&#' + i.charCodeAt(0) + ';';
}); };
var ExampleMaterialComponent = /** @class */ (function () {
    function ExampleMaterialComponent(atp) {
        this.atp = atp;
        this.interface = encode("\n  export interface IDisplayPreference {\n    minute?: Function;\n    hour?: Function;\n    separator?: string;\n    labels?: {\n      ok?: string;\n      cancel?: string;\n    };\n    period?(period: 'AM' | 'PM');\n    clockMinute?(minute: any);\n    clockHour?(hour: any);\n  }\n  ");
        this.selectedTime = '18:30';
        this.sintax = '{{selectedTime}}';
    }
    ExampleMaterialComponent.prototype.ngOnInit = function () {
    };
    ExampleMaterialComponent.prototype.openByTheme = function (theme) {
        var _this = this;
        var amazingTimePicker = this.atp.open({
            time: this.selectedTime,
            theme: theme
        });
        amazingTimePicker.afterClose().subscribe(function (time) {
            _this.selectedTime = time;
        });
    };
    ExampleMaterialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-example-material',
            template: __webpack_require__(/*! ./example-material.component.html */ "./src/app/presentation/examples/example-material/example-material.component.html"),
            styles: [__webpack_require__(/*! ./example-material.component.scss */ "./src/app/presentation/examples/example-material/example-material.component.scss")]
        }),
        __metadata("design:paramtypes", [_atp_library_atp_time_picker_service__WEBPACK_IMPORTED_MODULE_1__["AmazingTimePickerService"]])
    ], ExampleMaterialComponent);
    return ExampleMaterialComponent;
}());



/***/ }),

/***/ "./src/app/presentation/examples/example-persian/example-persian.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/presentation/examples/example-persian/example-persian.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<br>\r\n<p>We do accept a parameter called preferrence, which can help you to modify the appreance of the dialog</p>\r\nPlease take a review of the interface here:\r\n<pre class=\"pre-code L\"><code [innerHTML]=\"interface\"></code></pre>\r\n<br>\r\n<p>\r\n  This can be used to override the modal behavior. We have added a builtin display preference for Persian Language.\r\n</p>\r\n<div class=\"tab-wrapper\" id=\"sec2\">\r\n  <div class=\"tab-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col s6 title\">Programmatically with Persian Language</div>\r\n    </div>\r\n  </div>\r\n  <app-tabs>\r\n    <app-tab tabTitle=\"test.component.html\">\r\n        <pre style='color:#000000;'>\r\n\r\n    <span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>button</span><span style='color:#274796; '> (click)</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>\"open()\"</span><span style='color:#a65700; '>></span>Time<span style='color:#a65700; '>&lt;/</span><span style='color:#800000; font-weight:bold; '>button</span><span style='color:#a65700; '>></span>\r\n    <span style='color:#a65700; '>&lt;</span><span style='color:#800000; font-weight:bold; '>input</span><span style='color:#274796; '> </span><span style='color:#074726; '>type</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>\"time\"</span><span style='color:#274796; '> </span><span style='color:#074726; '>value</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>\"{{sintax}}\"</span><span style='color:#a65700; '>></span>\r\n        </pre>\r\n    </app-tab>\r\n    <app-tab tabTitle=\"test.component.ts\">\r\n<pre style='color:#000000;'>\r\n    <span style='color:#800000; font-weight:bold; '>import</span> <span style='color:#800080; '>{{ '{' }}</span> Component <span style='color:#800080; '>{{ '}' }}</span> from <span style='color:#800000; '>'</span><span style='color:#0000e6; '>@angular/core</span><span style='color:#800000; '>'</span><span style='color:#800080; '>;</span>\r\n    <span style='color:#800000; font-weight:bold; '>import</span> <span style='color:#800080; '>{{ '{' }}</span> AmazingTimePickerService <span style='color:#800080; '>{{ '}' }}</span> from <span style='color:#800000; '>'</span><span style='color:#0000e6; '>amazing-time-picker</span><span style='color:#800000; '>'</span><span style='color:#800080; '>;</span>\r\n    \r\n    @Component<span style='color:#808030; '>(</span><span style='color:#800080; '>{{ '{' }}</span>\r\n        selector<span style='color:#800080; '>:</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>app-test</span><span style='color:#800000; '>'</span><span style='color:#808030; '>,</span>\r\n        templateUrl<span style='color:#800080; '>:</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>./test.component.html</span><span style='color:#800000; '>'</span><span style='color:#808030; '>,</span>\r\n        styleUrls<span style='color:#800080; '>:</span> <span style='color:#808030; '>[</span><span style='color:#800000; '>'</span><span style='color:#0000e6; '>./test.component.scss</span><span style='color:#800000; '>'</span><span style='color:#808030; '>]</span>\r\n    <span style='color:#800080; '>{{ '}' }}</span><span style='color:#808030; '>)</span>\r\n    <span style='color:#800000; font-weight:bold; '>export</span> <span style='color:#800000; font-weight:bold; '>class</span> TestComponent <span style='color:#800080; '>{{ '{' }}</span>\r\n        <span style='color:#800000; font-weight:bold; '>public</span> selectedTime <span style='color:#808030; '>=</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>18:33</span><span style='color:#800000; '>'</span><span style='color:#800080; '>;</span>\r\n\r\n        <span style='color:#797997; '>constructor</span><span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>private</span> atp<span style='color:#800080; '>:</span> AmazingTimePickerService<span style='color:#808030; '>)</span> <span style='color:#800080; '>{{ '{' }}</span> <span style='color:#800080; '>{{ '}' }}</span>\r\n    \r\n        open<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span> <span style='color:#800080; '>{{ '{' }}</span>\r\n            <span style='color:#800000; font-weight:bold; '>const</span> amazingTimePicker <span style='color:#808030; '>=</span> <span style='color:#800000; font-weight:bold; '>this</span><span style='color:#808030; '>.</span>atp<span style='color:#808030; '>.</span>open<span style='color:#808030; '>(</span><span style='color:#800080; '>{{ '{' }}</span>\r\n                locale<span style='color:#800080; '>:</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>fa</span><span style='color:#800000; '>'</span><span style='color:#808030; '>,</span>\r\n            <span style='color:#800080; '>{{ '}' }}</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>\r\n            amazingTimePicker<span style='color:#808030; '>.</span>afterClose<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span><span style='color:#808030; '>.</span>subscribe<span style='color:#808030; '>(</span>time <span style='color:#808030; '>=</span><span style='color:#808030; '>></span> <span style='color:#800080; '>{{ '{' }}</span>\r\n                <span style='color:#800000; font-weight:bold; '>this</span><span style='color:#808030; '>.</span>selectedTime <span style='color:#808030; '>=</span> time<span style='color:#800080; '>;</span>\r\n            <span style='color:#800080; '>{{ '}' }}</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>\r\n        <span style='color:#800080; '>{{ '}' }}</span>\r\n    <span style='color:#800080; '>{{ '}' }}</span>\r\n    </pre>\r\n    </app-tab>\r\n  </app-tabs>\r\n  <div class=\"tab-content\">\r\n    <div class=\"row\">\r\n      <div class=\"col s12\">\r\n        <button class=\"waves-effect waves-light btn \"  (click)=\"openPersian()\">Time</button>\r\n        <div class=\"input-field inline\">\r\n        <input type=\"time\" class=\"validate\" [value]=\"selectedTime\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/presentation/examples/example-persian/example-persian.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/presentation/examples/example-persian/example-persian.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main-container {\n  font-size: 17px;\n  line-height: 30px; }\n  #main-container pre {\n    line-height: 20px;\n    font-size: 12px !important; }\n  .tab-wrapper {\n  border: 1px solid #ddd;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12); }\n  .tab-wrapper .row {\n    margin: 0; }\n  .tab-wrapper .tab-header {\n    padding: 15px;\n    background: #EFEFEF; }\n  .tab-wrapper .tab-header .title {\n      font-size: 17px; }\n  .tab-wrapper pre {\n    background: transparent;\n    border: 0;\n    margin: 0; }\n  .tab-wrapper .tab-content {\n    padding: 15px; }\n  .pre-title {\n  font-size: 1.5em;\n  border-bottom: 1px solid #ddd;\n  padding: 15px 0; }\n  .pre-code.L {\n  background: #eee;\n  padding: 15px;\n  display: block; }\n  .pre-code.S {\n  background: #eee;\n  padding: 3px 5px;\n  display: inline-block;\n  margin: 0 5px; }\n"

/***/ }),

/***/ "./src/app/presentation/examples/example-persian/example-persian.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/presentation/examples/example-persian/example-persian.component.ts ***!
  \************************************************************************************/
/*! exports provided: ExamplePersianComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplePersianComponent", function() { return ExamplePersianComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _atp_library_atp_time_picker_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../atp-library/atp-time-picker.service */ "./src/app/atp-library/atp-time-picker.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var encode = function (x) { return x.replace(/[\u00A0-\u9999<>\&]/gim, function (i) {
    return '&#' + i.charCodeAt(0) + ';';
}); };
var ExamplePersianComponent = /** @class */ (function () {
    function ExamplePersianComponent(atp) {
        this.atp = atp;
        this.interface = encode("\n  export interface IDisplayPreference {\n    minute?: Function;\n    hour?: Function;\n    onlyHour?: boolean;\n    separator?: string;\n    labels?: {\n      ok?: string;\n      cancel?: string;\n    };\n    period?(period: 'AM' | 'PM');\n    clockMinute?(minute: any);\n    clockHour?(hour: any);\n  }\n  ");
        this.sintax = '{{selectedTime}}';
    }
    ExamplePersianComponent.prototype.ngOnInit = function () {
    };
    ExamplePersianComponent.prototype.openPersian = function () {
        var _this = this;
        var amazingTimePicker = this.atp.open({
            locale: 'fa'
        });
        amazingTimePicker.afterClose().subscribe(function (time) {
            _this.selectedTime = time;
        });
    };
    ExamplePersianComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-example-persian',
            template: __webpack_require__(/*! ./example-persian.component.html */ "./src/app/presentation/examples/example-persian/example-persian.component.html"),
            styles: [__webpack_require__(/*! ./example-persian.component.scss */ "./src/app/presentation/examples/example-persian/example-persian.component.scss")]
        }),
        __metadata("design:paramtypes", [_atp_library_atp_time_picker_service__WEBPACK_IMPORTED_MODULE_1__["AmazingTimePickerService"]])
    ], ExamplePersianComponent);
    return ExamplePersianComponent;
}());



/***/ }),

/***/ "./src/app/presentation/tab/tab.component.html":
/*!*****************************************************!*\
  !*** ./src/app/presentation/tab/tab.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!active\" class=\"pane\">\r\n  <ng-content></ng-content>\r\n</div>"

/***/ }),

/***/ "./src/app/presentation/tab/tab.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/presentation/tab/tab.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pane {\n  padding: 1em;\n  background: #f5f2f0;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px; }\n"

/***/ }),

/***/ "./src/app/presentation/tab/tab.component.ts":
/*!***************************************************!*\
  !*** ./src/app/presentation/tab/tab.component.ts ***!
  \***************************************************/
/*! exports provided: TabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabComponent", function() { return TabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TabComponent = /** @class */ (function () {
    function TabComponent() {
        this.active = false;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('tabTitle'),
        __metadata("design:type", String)
    ], TabComponent.prototype, "tabTitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TabComponent.prototype, "active", void 0);
    TabComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tab',
            template: __webpack_require__(/*! ./tab.component.html */ "./src/app/presentation/tab/tab.component.html"),
            styles: [__webpack_require__(/*! ./tab.component.scss */ "./src/app/presentation/tab/tab.component.scss")]
        })
    ], TabComponent);
    return TabComponent;
}());



/***/ }),

/***/ "./src/app/presentation/tabs/tabs.component.html":
/*!*******************************************************!*\
  !*** ./src/app/presentation/tabs/tabs.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"tabs\">\r\n  <li *ngFor=\"let tab of tabs\" (click)=\"selectTab(tab)\" class=\"tab col s3\" [class.active]=\"tab.active\">\r\n    <a>{{tab.tabTitle}}</a>\r\n  </li>\r\n</ul>\r\n<ng-content></ng-content>"

/***/ }),

/***/ "./src/app/presentation/tabs/tabs.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/presentation/tabs/tabs.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tab.col.s3.active a {\n  border-bottom: 3px solid #f6b2b5; }\n\n.tab.col.s3 a {\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/presentation/tabs/tabs.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/presentation/tabs/tabs.component.ts ***!
  \*****************************************************/
/*! exports provided: TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tab_tab_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tab/tab.component */ "./src/app/presentation/tab/tab.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabsComponent = /** @class */ (function () {
    function TabsComponent() {
    }
    // contentChildren are set
    TabsComponent.prototype.ngAfterContentInit = function () {
        // get all active tabs
        var activeTabs = this.tabs.filter(function (tab) { return tab.active; });
        // if there is no active tab set, activate the first
        if (activeTabs.length === 0) {
            this.selectTab(this.tabs.first);
        }
    };
    TabsComponent.prototype.selectTab = function (tab) {
        // deactivate all tabs
        this.tabs.toArray().forEach(function (tabs) { return tabs.active = false; });
        // activate the tab the user has clicked on.
        tab.active = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(_tab_tab_component__WEBPACK_IMPORTED_MODULE_1__["TabComponent"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], TabsComponent.prototype, "tabs", void 0);
    TabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! ./tabs.component.html */ "./src/app/presentation/tabs/tabs.component.html"),
            styles: [__webpack_require__(/*! ./tabs.component.scss */ "./src/app/presentation/tabs/tabs.component.scss")]
        })
    ], TabsComponent);
    return TabsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    hmr: false
};


/***/ }),

/***/ "./src/hmr.ts":
/*!********************!*\
  !*** ./src/hmr.ts ***!
  \********************/
/*! exports provided: hmrBootstrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hmrBootstrap", function() { return hmrBootstrap; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angularclass_hmr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angularclass/hmr */ "./node_modules/@angularclass/hmr/dist/index.js");
/* harmony import */ var _angularclass_hmr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angularclass_hmr__WEBPACK_IMPORTED_MODULE_1__);


var hmrBootstrap = function (module, bootstrap) {
    var ngModule;
    module.hot.accept();
    bootstrap().then(function (mod) { return ngModule = mod; });
    module.hot.dispose(function () {
        var appRef = ngModule.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]);
        var elements = appRef.components.map(function (c) { return c.location.nativeElement; });
        var makeVisible = Object(_angularclass_hmr__WEBPACK_IMPORTED_MODULE_1__["createNewHosts"])(elements);
        ngModule.destroy();
        makeVisible();
    });
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _hmr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hmr */ "./src/hmr.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
var bootstrap = function () { return Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]); };
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].hmr) {
    if (false) {}
    else {
        console.error('HMR is not enabled for webpack-dev-server!');
        console.log('Are you using the --hmr flag for ng serve?');
    }
}
else {
    bootstrap();
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\dgarnacho\amazing-time-picker\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
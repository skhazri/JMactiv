(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./facebookConfig.ts":
/*!***************************!*\
  !*** ./facebookConfig.ts ***!
  \***************************/
/*! exports provided: getAuthServiceConfigs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthServiceConfigs", function() { return getAuthServiceConfigs; });
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_0__);
// Facebook Configs

function getAuthServiceConfigs() {
    var appID = "2229942433740406";
    var config = new angular_6_social_login__WEBPACK_IMPORTED_MODULE_0__["AuthServiceConfig"]([
        {
            id: angular_6_social_login__WEBPACK_IMPORTED_MODULE_0__["FacebookLoginProvider"].PROVIDER_ID,
            provider: new angular_6_social_login__WEBPACK_IMPORTED_MODULE_0__["FacebookLoginProvider"](appID)
        }
    ]);
    return config;
}


/***/ }),

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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Sidenav -->\n<nav class=\"navbar navbar-horizontal navbar-expand-lg navbar-light bg-white\" id=\"sidenav-main\">\n  <div class=\"container-fluid\">\n    <!-- Toggler -->\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#sidenav-collapse-main\"\n      aria-controls=\"sidenav-main\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <!-- Brand -->\n    <a class=\"navbar-brand pt-0\" routerLink=\"\">\n      <img src=\"../assets/logo.png\" class=\"navbar-brand-img\" style=\"height: 70px\" alt=\"...\">\n    </a>\n    <!-- User -->\n    <ul *ngIf=\"user\" class=\"nav align-items-center d-md-none\">\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link\" href=\"#\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <div class=\"media align-items-center\">\n            <span class=\"avatar avatar-sm rounded-circle\">\n              <img alt=\"Image placeholder\" src={{user.image}}>\n            </span>\n          </div>\n        </a>\n        <div class=\"dropdown-menu dropdown-menu-arrow dropdown-menu-right\">\n          <div class=\" dropdown-header noti-title\">\n            <h6 class=\"text-overflow m-0\">Welcome!</h6>\n          </div>\n          <a routerLink=\"/profile\" class=\"dropdown-item\">\n            <i class=\"ni ni-single-02\"></i>\n            <span>My profile</span>\n          </a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" (click)=\"signOut()\">\n            <i class=\"ni ni-user-run\"></i>\n            <span>Logout</span>\n          </a>\n        </div>\n      </li>\n    </ul>\n    <!-- Collapse -->\n    <div class=\"collapse navbar-collapse\" id=\"sidenav-collapse-main\">\n      <!-- Collapse header -->\n      <div class=\"navbar-collapse-header d-md-none\">\n        <div class=\"row\">\n          <div class=\"col-6 collapse-brand\">\n            <a routerLink=\"\">\n              <img src=\"../assets/logo.png\">\n            </a>\n          </div>\n          <div class=\"col-6 collapse-close\">\n            <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#sidenav-collapse-main\"\n              aria-controls=\"sidenav-main\" aria-expanded=\"false\" aria-label=\"Toggle sidenav\">\n              <span></span>\n              <span></span>\n            </button>\n          </div>\n        </div>\n      </div>\n    \n      <!-- Navigation -->\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"\">\n            <i class=\"ni ni-tv-2 text-success\"></i> Home\n          </a>\n        </li>\n      </ul>\n      <!-- Divider -->\n      <hr class=\"my-3\">\n      <app-login></app-login>\n    </div>\n  </div>\n</nav>\n<!-- Main content -->\n<div class=\"main-content\">\n  <!-- Top navbar -->\n  <nav class=\"navbar navbar-top navbar-expand-md navbar-dark\" id=\"navbar-main\">\n    <div class=\"container-fluid\">\n  \n      <!-- User -->\n      <ul *ngIf=\"user\" class=\"navbar-nav align-items-center d-none d-md-flex\">\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link pr-0\" href=\"#\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n            aria-expanded=\"false\">\n            <div class=\"media align-items-center\">\n              <span class=\"avatar avatar-sm rounded-circle\">\n                <img alt=\"Image placeholder\" src={{user.image}}>\n              </span>\n              <div class=\"media-body ml-2 d-none d-lg-block\">\n                <span class=\"mb-0 text-sm  font-weight-bold\">{{user.name}}</span>\n              </div>\n            </div>\n          </a>\n          <div class=\"dropdown-menu dropdown-menu-arrow dropdown-menu-right\">\n            <div class=\" dropdown-header noti-title\">\n              <h6 class=\"text-overflow m-0\">Welcome!</h6>\n            </div>\n            <a routerLink=\"/profile\" class=\"dropdown-item\">\n              <i class=\"ni ni-single-02\"></i>\n              <span>My profile</span>\n            </a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" (click)=\"signOut()\">\n              <i class=\"ni ni-user-run\"></i>\n              <span>Logout</span>\n            </a>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </nav>\n  <!-- Header -->\n  <div class=\"header pb-8 pt-5 pt-lg-8 d-flex align-items-center\"\n    style=\"min-height: 500px; background-image: url(../../assets/skiing.jpg); background-size: cover; background-position: center top;\">\n    <!-- Mask -->\n    <span class=\"mask opacity-8\"></span>\n    <!-- Header container -->\n    <div class=\"container-fluid d-flex align-items-center\">\n      <div class=\"row\">\n        <div class=\"col-lg-7 col-md-10\">\n          <h1 class=\"display-2 text-success\">JMACTIV</h1>\n          <h3 class=\"text-primary\">Find and share your activities</h3>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- Page content -->\n  <div class=\"container-fluid mt--7\">\n    <div class=\"row\">\n      <div class=\"col-lg\">\n        <div class=\"card  shadow\">\n          <div class=\"card-header bg-white border-0\">\n\n            <div class=\"row align-items-center\">\n              <div class=\"col\">\n                <div class=\"card-profile-stats d-flex justify-content-center mt-md-5\">\n                  <div>\n                    <span class=\"heading text-success\">JMACTIV</span>\n                    <hr class=\"my-4\" />\n\n                    <p>is an application that allows users to browse, create, and promote local events</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"text-center\">\n              <h3 class=\"text-purple\">\n                Our technologies\n              </h3>\n              <div class=\"h5 \">\n                <i class=\"ni location_pin mr-2\"></i> Our product is built on top of modern frameworks.\n\n              </div>\n              <div class=\"row\"> \n          \n              \n              <div class=\"col\" style=\"width: 18rem; border: none\"> <a href=\"https://angularjs.org/\" target=_blank \n                  title=\"Angular - One framework. Mobile & desktop\"> <img\n                    src=\"../../assets/img/angular.png\"  style=\"width:90px\">\n                </a> </div>\n              \n              <div class=\"col\"><a href=\"https://getbootstrap.com/\" target=_blank rel=tooltip\n                  title=\"Bootstrap - Most popular front-end component library\"> <img\n                    src=\"../../assets/img/bootstarp.png\"  style=\"width:100px\">\n                </a> </div>\n              <div class=\"col\"> <a href=\"https://nodejs.org/\" target=_blank rel=tooltip\n                  title=\"The faster back end framework for web apps\"> <img\n                    src=\"../../assets/img/node.png\"  style=\"width:100px\">\n                </a> </div>\n                <div class=\"col\"> <a href=\"Facebook for Developers\n                  https://developers.facebook.com/\" target=_blank rel=tooltip\n                  title=\"Facebook api \"> <img\n                    src=\"../../assets/img/facebookapi.jpeg\" style=\"width:100px\">\n                </a> </div>\n        </div>\n       \n        <hr class=\"my-4\" />\n        \n        <a href=\"#\">Developed By </a>\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"container\">\n        <div class=\"row \">\n          <div class=\"col-sm col-md-4\">\n            <div class=\"card\" style=\"width: 18rem; border: none\">\n              <img class=\"card-img-top rounded-circle\" src=\"../../assets/img/wafa.jpg\"\n                style=\"width: 11rem; position: center center\" alt=\"Card image cap\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title text-success\">wafa Ismail</h5>\n                <span class=\"heading text-purple\">Etudiante UQAM</span>\n                  \n              </div>\n            </div>\n          </div>\n          <div class=\"col-sm col-md-4\">\n            <div class=\"card\" style=\"width: 18rem; border: none\">\n              <img class=\"card-img-top rounded-circle\" src=\"../../assets/img/jaime.jpg\"\n                style=\"width: 11rem; position: center center\" alt=\"Card image cap\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title text-success\">Jaime Tandindir</h5>\n                <span class=\"heading text-purple\">Etudiante UQAM</span>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-sm col-md-4\">\n            <div class=\"card\" style=\"width: 18rem; border: none\">\n              <img class=\"card-img-top rounded-circle\" src=\"../../assets/img/kristian.jpg\"\n                style=\"width: 11rem; position: center center\" alt=\"Card image cap\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title text-success\"> Kristian Mtl</h5>\n                <span class=\"heading text-purple\">Etudiante UQAM</span>\n              </div>\n            </div>\n          </div>\n\n\n\n          <div class=\"col-sm col-md-4\">\n            <div class=\"card\" style=\"width: 18rem; border: none\">\n              <img class=\"card-img-top rounded-circle\" src=\"../../assets/img/melanie.jpg\"\n                style=\"width: 11rem; position: center center\" alt=\"Card image cap\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title text-success\">Melanie Gadoury</h5>\n                <span class=\"heading text-purple\">Etudiante UQAM</span>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-sm col-md-4\">\n            <div class=\"card\" style=\"width: 18rem; border: none\">\n              <img class=\"card-img-top rounded-circle\" src=\"../../assets/img/yasine.jpg\"\n                style=\"width: 11rem; position: center center\" alt=\"Card image cap\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title text-success\">Yassine El Makhad</h5>\n                <span class=\"heading text-purple\">Etudiante UQAM</span>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n  </div>\n</div>\n</div>\n<!-- Footer -->\n<footer class=\"footer\">\n    <div class=\"row align-items-center justify-content-xl-between\">\n      <div class=\"col-xl-6\">\n        <div class=\"copyright text-center text-xl-left text-muted\">\n          &copy; 2019 <a href=\"#\" class=\"font-weight-bold ml-1\" >JMactiv</a>\n        </div>\n      </div>\n      <div class=\"col-xl-6\">\n        <ul class=\"nav nav-footer justify-content-center justify-content-xl-end\">\n          <li class=\"nav-item\">\n            <a href=\"#\" class=\"nav-link\" target=\"_blank\">INF5001</a>\n          </li>\n          <li class=\"nav-item\">\n            <a routerLink=\"/team\" class=\"nav-link\">About Us</a>\n          </li>\n          <li class=\"nav-item\">\n            <a href=\"#\" class=\"nav-link\"\n              target=\"_blank\">MIT License</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </footer>\n</div>"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/accueil/accueil.component.html":
/*!************************************************!*\
  !*** ./src/app/accueil/accueil.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Sidenav -->\n<nav class=\"navbar navbar-horizontal navbar-expand-lg navbar-light bg-white\" id=\"sidenav-main\">\n  <div class=\"container-fluid\">\n    <!-- Toggler -->\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#sidenav-collapse-main\"\n      aria-controls=\"sidenav-main\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <!-- Brand -->\n    <a class=\"navbar-brand pt-0\" routerLink=\"\">\n      <img src=\"../assets/logo.png\" class=\"navbar-brand-img\" style=\"height: 70px\" alt=\"...\">\n    </a>\n    <!-- User -->\n    <ul *ngIf=\"user\" class=\"nav align-items-center d-md-none\">\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link\" href=\"#\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <div class=\"media align-items-center\">\n            <span class=\"avatar avatar-sm rounded-circle\">\n              <img alt=\"Image placeholder\" src={{user.image}}>\n            </span>\n          </div>\n        </a>\n        <div class=\"dropdown-menu dropdown-menu-arrow dropdown-menu-right\">\n          <div class=\" dropdown-header noti-title\">\n            <h6 class=\"text-overflow m-0\">Welcome!</h6>\n          </div>\n          <a routerLink=\"/profile\" class=\"dropdown-item\">\n            <i class=\"ni ni-single-02\"></i>\n            <span>My profile</span>\n          </a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" (click)=\"signOut()\">\n            <i class=\"ni ni-user-run\"></i>\n            <span>Logout</span>\n          </a>\n        </div>\n      </li>\n    </ul>\n    <!-- Collapse -->\n    <div class=\"collapse navbar-collapse\" id=\"sidenav-collapse-main\">\n      <!-- Collapse header -->\n      <div class=\"navbar-collapse-header d-md-none\">\n        <div class=\"row\">\n          <div class=\"col-6 collapse-brand\">\n            <a routerLink=\"\">\n              <img src=\"../assets/logo.png\">\n            </a>\n          </div>\n          <div class=\"col-6 collapse-close\">\n            <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#sidenav-collapse-main\"\n              aria-controls=\"sidenav-main\" aria-expanded=\"false\" aria-label=\"Toggle sidenav\">\n              <span></span>\n              <span></span>\n            </button>\n          </div>\n        </div>\n      </div>\n      <!-- Form -->\n      <form class=\"mt-4 mb-3 d-md-none\">\n        <div class=\"input-group input-group-rounded input-group-merge\">\n          <input type=\"search\" class=\"form-control form-control-rounded form-control-prepended\" placeholder=\"Search\"\n            aria-label=\"Search\">\n          <div class=\"input-group-prepend\">\n            <div class=\"input-group-text\">\n              <span class=\"fa fa-search\"></span>\n            </div>\n          </div>\n        </div>\n      </form>\n      <!-- Navigation -->\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"\">\n            <i class=\"ni ni-tv-2 text-success\"></i> Home\n          </a>\n        </li>\n      </ul>\n      <!-- Divider -->\n      <hr class=\"my-3\">\n      <app-login></app-login>\n    </div>\n  </div>\n</nav>\n<!-- Main content -->\n<div class=\"main-content\">\n  <!-- Top navbar -->\n  <nav class=\"navbar navbar-top navbar-expand-md navbar-dark\" id=\"navbar-main\">\n    <div class=\"container-fluid\">\n      <!-- Form -->\n      <form class=\"navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto\">\n        <div class=\"form-group mb-0\">\n          <div class=\"input-group input-group-alternative\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\"><i class=\"fas fa-search\"></i></span>\n            </div>\n            <input class=\"form-control\" placeholder=\"Search\" type=\"text\">\n          </div>\n        </div>\n      </form>\n      <!-- User -->\n      <ul *ngIf=\"user\" class=\"navbar-nav align-items-center d-none d-md-flex\">\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link pr-0\" href=\"#\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n            aria-expanded=\"false\">\n            <div class=\"media align-items-center\">\n              <span class=\"avatar avatar-sm rounded-circle\">\n                <img alt=\"Image placeholder\" src={{user.image}}>\n              </span>\n              <div class=\"media-body ml-2 d-none d-lg-block\">\n                <span class=\"mb-0 text-sm  font-weight-bold\">{{user.name}}</span>\n              </div>\n            </div>\n          </a>\n          <div class=\"dropdown-menu dropdown-menu-arrow dropdown-menu-right\">\n            <div class=\" dropdown-header noti-title\">\n              <h6 class=\"text-overflow m-0\">Welcome!</h6>\n            </div>\n            <a routerLink=\"/profile\" class=\"dropdown-item\">\n              <i class=\"ni ni-single-02\"></i>\n              <span>My profile</span>\n            </a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" (click)=\"signOut()\">\n              <i class=\"ni ni-user-run\"></i>\n              <span>Logout</span>\n            </a>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </nav>\n  <!-- Header -->\n  <div class=\"header pb-8 pt-5 pt-lg-8 d-flex align-items-center\"\n    style=\"min-height: 700px; background-image: url(../../assets/skiing.jpg); background-size: cover; background-position: center top;\">\n    <!-- Mask -->\n    <span class=\"mask opacity-8\"></span>\n    <!-- Header container -->\n    <div class=\"container-fluid d-flex align-items-center\">\n      <div class=\"row\">\n        <div class=\"col-lg-7 col-md-10\">\n          <h1 class=\"display-2 text-success\">JMACTIV</h1>\n          <h3 class=\"text-primary\">Find and share your activities</h3>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- Page content -->\n  <div class=\"container-fluid mt--7\">\n    <div class=\"row\">\n      <div class=\"col-lg\">\n        <div class=\"card bg-white shadow\">\n          <div class=\"card-header bg-white border-0\">\n            <div class=\"row align-items-center\">\n              <div class=\"col-8\">\n                <h3 class=\"mb-0 text-success\">Upcoming Events</h3>\n              </div>\n            </div>\n          </div>\n          <div class=\"card-body\">\n            <div class=\"container\">\n              <div class=\"row\">\n                <div class=\"col-sm\">\n                  <div class=\"card\" style=\"width: 16rem;\">\n                    <img class=\"card-img-top\" src=\"../../assets/img/activ2.jpg\" alt=\"Card image cap\">\n                    <div class=\"card-body\">\n                      <h5 class=\"card-title\">Card title</h5>\n                      <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of\n                        the card's content.</p>\n                      <a href=\"#\" class=\"btn btn-primary\">Read More</a>\n                    </div>\n                  </div>\n                </div>\n                <br>\n                <div class=\"col-sm\">\n                  <div class=\"card\" style=\"width: 18rem;\">\n                    <img class=\"card-img-top\" src=\"../../assets/img/activ2.jpg\" alt=\"Card image cap\">\n                    <div class=\"card-body\">\n                      <h5 class=\"card-title\">Card title</h5>\n                      <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of\n                        the card's content.</p>\n                      <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n                    </div>\n                  </div>\n                </div>\n                <br>\n                <div class=\"col-sm\">\n                  <div class=\"card\" style=\"width: 18rem;\">\n                    <img class=\"card-img-top\" src=\"../../assets/img/activ2.jpg\" alt=\"Card image cap\">\n                    <div class=\"card-body\">\n                      <h5 class=\"card-title\">Card title</h5>\n                      <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of\n                        the card's content.</p>\n                      <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n                    </div>\n                  </div>\n                </div>\n                <br>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- Footer -->\n    <footer class=\"footer\">\n      <div class=\"row align-items-center justify-content-xl-between\">\n        <div class=\"col-xl-6\">\n          <div class=\"copyright text-center text-xl-left text-muted\">\n            &copy; 2019 <a href=\"#\" class=\"font-weight-bold ml-1\" >JMactiv</a>\n          </div>\n        </div>\n        <div class=\"col-xl-6\">\n          <ul class=\"nav nav-footer justify-content-center justify-content-xl-end\">\n            <li class=\"nav-item\">\n              <a href=\"#\" class=\"nav-link\" target=\"_blank\">INF5001</a>\n            </li>\n            <li class=\"nav-item\">\n              <a routerLink=\"/team\" class=\"nav-link\">About Us</a>\n            </li>\n            <li class=\"nav-item\">\n              <a href=\"#\" class=\"nav-link\"\n                target=\"_blank\">MIT License</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </footer>\n  </div>"

/***/ }),

/***/ "./src/app/accueil/accueil.component.scss":
/*!************************************************!*\
  !*** ./src/app/accueil/accueil.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY3VlaWwvYWNjdWVpbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/accueil/accueil.component.ts":
/*!**********************************************!*\
  !*** ./src/app/accueil/accueil.component.ts ***!
  \**********************************************/
/*! exports provided: AccueilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccueilComponent", function() { return AccueilComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_3__);




var AccueilComponent = /** @class */ (function () {
    function AccueilComponent(router, socialAuthService) {
        this.router = router;
        this.socialAuthService = socialAuthService;
        this.loggedIn = false;
    }
    AccueilComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Check if user is logged in to Facebook and return a user with its properties
        this.socialAuthService.authState.subscribe(function (user) {
            _this.user = user;
            _this.loggedIn = (user != null);
        });
    };
    /**
     * SignOut
     */
    AccueilComponent.prototype.SignOut = function () {
        this.socialAuthService.signOut();
        this.router.navigate(['']);
    };
    AccueilComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-accueil',
            template: __webpack_require__(/*! ./accueil.component.html */ "./src/app/accueil/accueil.component.html"),
            styles: [__webpack_require__(/*! ./accueil.component.scss */ "./src/app/accueil/accueil.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], angular_6_social_login__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], AccueilComponent);
    return AccueilComponent;
}());



/***/ }),

/***/ "./src/app/afficheractivite/afficheractivite.component.html":
/*!******************************************************************!*\
  !*** ./src/app/afficheractivite/afficheractivite.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"fb-root\"></div>\n<!-- Sidenav -->\n<nav class=\"navbar navbar-horizontal navbar-expand-lg navbar-light bg-white\" id=\"sidenav-main\">\n  <div class=\"container-fluid\">\n    <!-- Toggler -->\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#sidenav-collapse-main\"\n      aria-controls=\"sidenav-main\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <!-- Brand -->\n    <a class=\"navbar-brand pt-0\" routerLink=\"\">\n      <img src=\"../assets/logo.png\" class=\"navbar-brand-img\" style=\"width=70px\" alt=\"...\">\n    </a>\n    <!-- User -->\n    <ul class=\"nav align-items-center d-md-none\">\n\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link\" href=\"#\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <div class=\"media align-items-center\">\n            <span class=\"avatar avatar-sm rounded-circle\">\n              <img alt=\"Image placeholder\" src={{user.image}}>\n            </span>\n          </div>\n        </a>\n        <div class=\"dropdown-menu dropdown-menu-arrow dropdown-menu-right\">\n          <div class=\" dropdown-header noti-title\">\n            <h6 class=\"text-overflow m-0\">Welcome!</h6>\n          </div>\n          <a routerLink=\"/profile\" class=\"dropdown-item\">\n            <i class=\"ni ni-single-02\"></i>\n            <span>My profile</span>\n          </a>\n\n          <div class=\"dropdown-divider\"></div>\n          <a (click)=\"signOut()\" class=\"dropdown-item\">\n            <i class=\"ni ni-user-run\"></i>\n            <span>Logout</span>\n          </a>\n        </div>\n      </li>\n    </ul>\n    <!-- Collapse -->\n    <div class=\"collapse navbar-collapse\" id=\"sidenav-collapse-main\">\n      <!-- Collapse header -->\n      <div class=\"navbar-collapse-header d-md-none\">\n        <div class=\"row\">\n          <div class=\"col-6 collapse-brand\">\n            <a routerLink=\"\">\n              <img src=\"../assets/logo.png\">\n            </a>\n          </div>\n          <div class=\"col-6 collapse-close\">\n            <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#sidenav-collapse-main\"\n              aria-controls=\"sidenav-main\" aria-expanded=\"false\" aria-label=\"Toggle sidenav\">\n              <span></span>\n              <span></span>\n            </button>\n          </div>\n        </div>\n      </div>\n      <!-- Form -->\n      <form class=\"mt-4 mb-3 d-md-none\">\n        <div class=\"input-group input-group-rounded input-group-merge\">\n          <input type=\"search\" class=\"form-control form-control-rounded form-control-prepended\" placeholder=\"Search\"\n            aria-label=\"Search\">\n          <div class=\"input-group-prepend\">\n            <div class=\"input-group-text\">\n              <span class=\"fa fa-search\"></span>\n            </div>\n          </div>\n        </div>\n      </form>\n      <!-- Navigation -->\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"\">\n            <i class=\"ni ni-tv-2 text-primary\"></i> Home\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<!-- Main content -->\n<div class=\"main-content\">\n  <!-- Top navbar -->\n  <nav class=\"navbar navbar-top navbar-expand-md navbar-dark\" id=\"navbar-main\">\n    <div class=\"container-fluid\">\n      <!-- Form -->\n      <form class=\"navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto\">\n        <div class=\"form-group mb-0\">\n          <div class=\"input-group input-group-alternative\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\"><i class=\"fas fa-search\"></i></span>\n            </div>\n            <input class=\"form-control\" placeholder=\"Search\" type=\"text\">\n          </div>\n        </div>\n      </form>\n      <!-- User -->\n      <ul class=\"navbar-nav align-items-center d-none d-md-flex\">\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link pr-0\" routerLink=\"/profile\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n            aria-expanded=\"false\">\n            <div class=\"media align-items-center\">\n              <span class=\"avatar avatar-sm rounded-circle\">\n                <img alt=\"Image placeholder\" src={{user.image}}>\n              </span>\n              <div class=\"media-body ml-2 d-none d-lg-block\">\n                <span class=\"mb-0 text-sm  font-weight-bold\">{{user.name}}</span>\n              </div>\n            </div>\n          </a>\n          <div class=\"dropdown-menu dropdown-menu-arrow dropdown-menu-right\">\n            <div class=\" dropdown-header noti-title\">\n              <h6 class=\"text-overflow m-0\">Welcome!</h6>\n            </div>\n            <a routerLink=\"/profile\" class=\"dropdown-item\">\n              <i class=\"ni ni-single-02\"></i>\n              <span>My profile</span>\n            </a>\n            <div class=\"dropdown-divider\"></div>\n            <a (click)=\"signOut()\" class=\"dropdown-item\">\n              <i class=\"ni ni-user-run\"></i>\n              <span>Logout</span>\n            </a>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </nav>\n  <!-- Header -->\n  <div class=\"header pb-8 pt-5 pt-lg-8 d-flex align-items-center\"\n    style=\"min-height:400px; background-image: url(../assets/event.jpg); background-size:contain; background-position: center top;\">\n    <!-- Mask -->\n    <span class=\"mask bg-gradient-default opacity-8\"></span>\n    <!-- Header container -->\n    <div class=\"container-fluid d-flex align-items-center\">\n      <div class=\"row\" *ngIf=\"event\">\n        <div class=\"col-lg-7 col-md-10\">\n          <h1 class=\"display-2 text-white\">{{event.name}}</h1>\n          <p class=\"text-white mt-0 mb-5\">{{event.place.location.city}}, {{event.place.location.country}}\n            {{event.place.name}}</p>\n          <p class=\"text-white mt-0 mb-5\">{{event.start_time | date:'fullDate'}}</p>\n\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- Page content -->\n  <div class=\"container-fluid mt--7\">\n    <div class=\"row\">\n      <div class=\"col-xl\">\n        <div class=\"card bg-secondary shadow\" *ngIf=\"event\">\n          <div class=\"card-header bg-white border-0\">\n            <div class=\"row align-items-center\">\n              <div class=\"col-8\">\n                <h3 class=\"mb-0\">{{event.name}}</h3>\n              </div>\n              <div class=\"col-4 text-right\">\n                    <share-button button=\"facebook\" url={{currentUrl}}><h1 class=\"display-2 text-blue\"></h1></share-button>\n              </div>\n            </div>\n          </div>\n          <div class=\"card-body\">\n            {{event.description}}\n          </div>\n        </div>\n      </div>\n    </div>\n  <!-- Footer -->\n  <footer class=\"footer\">\n      <div class=\"row align-items-center justify-content-xl-between\">\n        <div class=\"col-xl-6\">\n          <div class=\"copyright text-center text-xl-left text-muted\">\n            &copy; 2019 <a href=\"#\" class=\"font-weight-bold ml-1\" >JMactiv</a>\n          </div>\n        </div>\n        <div class=\"col-xl-6\">\n          <ul class=\"nav nav-footer justify-content-center justify-content-xl-end\">\n            <li class=\"nav-item\">\n              <a href=\"#\" class=\"nav-link\" target=\"_blank\">INF5001</a>\n            </li>\n            <li class=\"nav-item\">\n              <a routerLink=\"/team\" class=\"nav-link\">About Us</a>\n            </li>\n            <li class=\"nav-item\">\n              <a href=\"#\" class=\"nav-link\"\n                target=\"_blank\">MIT License</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </footer>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/afficheractivite/afficheractivite.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/afficheractivite/afficheractivite.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FmZmljaGVyYWN0aXZpdGUvYWZmaWNoZXJhY3Rpdml0ZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/afficheractivite/afficheractivite.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/afficheractivite/afficheractivite.component.ts ***!
  \****************************************************************/
/*! exports provided: AfficheractiviteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AfficheractiviteComponent", function() { return AfficheractiviteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_facebook_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/facebook.service */ "./src/app/services/facebook.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_4__);





var AfficheractiviteComponent = /** @class */ (function () {
    function AfficheractiviteComponent(route, facebookService, socialAuthService, router) {
        this.route = route;
        this.facebookService = facebookService;
        this.socialAuthService = socialAuthService;
        this.router = router;
    }
    AfficheractiviteComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get id passed in the url
        var id = this.route.snapshot.params['id'];
        // get current url
        this.currentUrl = "http://www.google.com/" + this.router.url;
        //uncomment after depolyment
        //this.currentUrl = window.location.href;
        // Check if user is logged in to Facebook and return a user with its properties
        this.socialAuthService.authState.subscribe(function (user) {
            _this.user = user;
            _this.loggedIn = (user != null);
        });
        // get event data and format it to json
        this.facebookService.getEvent(id, this.user.token)
            .subscribe(function (data) {
            _this.event = (data.json());
        });
    };
    AfficheractiviteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-afficheractivite',
            template: __webpack_require__(/*! ./afficheractivite.component.html */ "./src/app/afficheractivite/afficheractivite.component.html"),
            styles: [__webpack_require__(/*! ./afficheractivite.component.scss */ "./src/app/afficheractivite/afficheractivite.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_facebook_service__WEBPACK_IMPORTED_MODULE_2__["FacebookService"],
            angular_6_social_login__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AfficheractiviteComponent);
    return AfficheractiviteComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: "<router-outlet></router-outlet>"
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _facebookConfig__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../facebookConfig */ "./facebookConfig.ts");
/* harmony import */ var _authentification_authentification_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./authentification/authentification.component */ "./src/app/authentification/authentification.component.ts");
/* harmony import */ var _chercher_chercher_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./chercher/chercher.component */ "./src/app/chercher/chercher.component.ts");
/* harmony import */ var _creeractivite_creeractivite_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./creeractivite/creeractivite.component */ "./src/app/creeractivite/creeractivite.component.ts");
/* harmony import */ var _accueil_accueil_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./accueil/accueil.component */ "./src/app/accueil/accueil.component.ts");
/* harmony import */ var _services_facebook_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/facebook.service */ "./src/app/services/facebook.service.ts");
/* harmony import */ var _afficheractivite_afficheractivite_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./afficheractivite/afficheractivite.component */ "./src/app/afficheractivite/afficheractivite.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _ngx_share_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-share/button */ "./node_modules/@ngx-share/button/fesm5/ngx-share-button.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



















//Decorator
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _authentification_authentification_component__WEBPACK_IMPORTED_MODULE_9__["AuthentificationComponent"],
                _chercher_chercher_component__WEBPACK_IMPORTED_MODULE_10__["ChercherComponent"],
                _creeractivite_creeractivite_component__WEBPACK_IMPORTED_MODULE_11__["CreeractiviteComponent"],
                _accueil_accueil_component__WEBPACK_IMPORTED_MODULE_12__["AccueilComponent"],
                _afficheractivite_afficheractivite_component__WEBPACK_IMPORTED_MODULE_14__["AfficheractiviteComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_15__["NotFoundComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_16__["AboutComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                angular_6_social_login__WEBPACK_IMPORTED_MODULE_6__["SocialLoginModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRouting"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientJsonpModule"],
                _ngx_share_button__WEBPACK_IMPORTED_MODULE_17__["ShareButtonModule"]
            ],
            providers: [
                {
                    provide: angular_6_social_login__WEBPACK_IMPORTED_MODULE_6__["AuthServiceConfig"],
                    useFactory: _facebookConfig__WEBPACK_IMPORTED_MODULE_8__["getAuthServiceConfigs"],
                },
                _services_facebook_service__WEBPACK_IMPORTED_MODULE_13__["FacebookService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routes, AppRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRouting", function() { return AppRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _accueil_accueil_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accueil/accueil.component */ "./src/app/accueil/accueil.component.ts");
/* harmony import */ var _afficheractivite_afficheractivite_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./afficheractivite/afficheractivite.component */ "./src/app/afficheractivite/afficheractivite.component.ts");
/* harmony import */ var _authentification_authentification_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authentification/authentification.component */ "./src/app/authentification/authentification.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");






var routes = [
    {
        path: '',
        component: _accueil_accueil_component__WEBPACK_IMPORTED_MODULE_2__["AccueilComponent"]
    },
    {
        path: 'team',
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"]
    },
    {
        path: 'profile',
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
        children: [
            {
                path: '',
                component: _authentification_authentification_component__WEBPACK_IMPORTED_MODULE_4__["AuthentificationComponent"]
            },
            {
                path: 'events/:id',
                component: _afficheractivite_afficheractivite_component__WEBPACK_IMPORTED_MODULE_3__["AfficheractiviteComponent"]
            }
        ]
    }
];
var AppRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_3__);

/**
 *  Angular’s route guards are interfaces which can tell the router whether
 *  or not it should allow navigation to a requested route.
 */



var AuthGuard = /** @class */ (function () {
    function AuthGuard(socialAuthService, router) {
        this.socialAuthService = socialAuthService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        // check if the user is logged in or not
        //You receive a SocialUser object when the user logs in and a null when the user logs out
        this.socialAuthService.authState.subscribe(function (user) {
            _this.user = user;
            _this.loggedIn = (user != null);
        });
        if (this.loggedIn) {
            return true;
        }
        // // navigate to home page
        this.router.navigate(['']);
        return false;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular_6_social_login__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/authentification/authentification.component.html":
/*!******************************************************************!*\
  !*** ./src/app/authentification/authentification.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Sidenav -->\n<nav class=\"navbar navbar-horizontal navbar-expand-lg navbar-light bg-white\" id=\"sidenav-main\">\n  <div class=\"container-fluid\">\n    <!-- Toggler -->\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#sidenav-collapse-main\"\n      aria-controls=\"sidenav-main\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <!-- Brand -->\n    <a class=\"navbar-brand pt-0\" routerLink=\"\">\n      <img src=\"../assets/logo.png\" class=\"navbar-brand-img\" style=\"width=70px\" alt=\"...\">\n    </a>\n    <!-- User -->\n    <ul class=\"nav align-items-center d-md-none\">\n\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link\" href=\"#\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <div class=\"media align-items-center\">\n            <span class=\"avatar avatar-sm rounded-circle\">\n              <img alt=\"Image placeholder\" src={{user.image}}>\n            </span>\n          </div>\n        </a>\n        <div class=\"dropdown-menu dropdown-menu-arrow dropdown-menu-right\">\n          <div class=\" dropdown-header noti-title\">\n            <h6 class=\"text-overflow m-0\">Welcome!</h6>\n          </div>\n          <a routerLink=\"/profile\" class=\"dropdown-item\">\n            <i class=\"ni ni-single-02\"></i>\n            <span>My profile</span>\n          </a>\n\n          <div class=\"dropdown-divider\"></div>\n          <a (click)=\"signOut()\" class=\"dropdown-item\">\n            <i class=\"ni ni-user-run\"></i>\n            <span>Logout</span>\n          </a>\n        </div>\n      </li>\n    </ul>\n    <!-- Collapse -->\n    <div class=\"collapse navbar-collapse\" id=\"sidenav-collapse-main\">\n      <!-- Collapse header -->\n      <div class=\"navbar-collapse-header d-md-none\">\n        <div class=\"row\">\n          <div class=\"col-6 collapse-brand\">\n            <a routerLink=\"\">\n              <img src=\"../assets/logo.png\">\n            </a>\n          </div>\n          <div class=\"col-6 collapse-close\">\n            <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#sidenav-collapse-main\"\n              aria-controls=\"sidenav-main\" aria-expanded=\"false\" aria-label=\"Toggle sidenav\">\n              <span></span>\n              <span></span>\n            </button>\n          </div>\n        </div>\n      </div>\n      <!-- Form -->\n      <form class=\"mt-4 mb-3 d-md-none\">\n        <div class=\"input-group input-group-rounded input-group-merge\">\n          <input type=\"search\" class=\"form-control form-control-rounded form-control-prepended\" placeholder=\"Search\"\n            aria-label=\"Search\">\n          <div class=\"input-group-prepend\">\n            <div class=\"input-group-text\">\n              <span class=\"fa fa-search\"></span>\n            </div>\n          </div>\n        </div>\n      </form>\n      <!-- Navigation -->\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"\">\n            <i class=\"ni ni-tv-2 text-primary\"></i> Home\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<!-- Main content -->\n<div class=\"main-content\">\n  <!-- Top navbar -->\n  <nav class=\"navbar navbar-top navbar-expand-md navbar-dark\" id=\"navbar-main\">\n    <div class=\"container-fluid\">\n      <!-- Form -->\n      <form class=\"navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto\">\n        <div class=\"form-group mb-0\">\n          <div class=\"input-group input-group-alternative\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\"><i class=\"fas fa-search\"></i></span>\n            </div>\n            <input class=\"form-control\" placeholder=\"Search\" type=\"text\">\n          </div>\n        </div>\n      </form>\n      <!-- User -->\n      <ul class=\"navbar-nav align-items-center d-none d-md-flex\">\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link pr-0\" routerLink=\"/profile\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n            aria-expanded=\"false\">\n            <div class=\"media align-items-center\">\n              <span class=\"avatar avatar-sm rounded-circle\">\n                <img alt=\"Image placeholder\" src={{user.image}}>\n              </span>\n              <div class=\"media-body ml-2 d-none d-lg-block\">\n                <span class=\"mb-0 text-sm  font-weight-bold\">{{user.name}}</span>\n              </div>\n            </div>\n          </a>\n          <div class=\"dropdown-menu dropdown-menu-arrow dropdown-menu-right\">\n            <div class=\" dropdown-header noti-title\">\n              <h6 class=\"text-overflow m-0\">Welcome!</h6>\n            </div>\n            <a routerLink=\"/profile\" class=\"dropdown-item\">\n              <i class=\"ni ni-single-02\"></i>\n              <span>My profile</span>\n            </a>\n            <div class=\"dropdown-divider\"></div>\n            <a (click)=\"signOut()\" class=\"dropdown-item\">\n              <i class=\"ni ni-user-run\"></i>\n              <span>Logout</span>\n            </a>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </nav>\n  <!-- Header -->\n  <div class=\"header pb-8 pt-5 pt-lg-8 d-flex align-items-center\"\n    style=\"min-height:400px; background-image: url(../assets/activ1.jpg); background-size:contain; background-position: center top;\">\n    <!-- Mask -->\n    <span class=\"mask bg-gradient-default opacity-8\"></span>\n    <!-- Header container -->\n    <div class=\"container-fluid d-flex align-items-center\">\n      <div class=\"row\">\n        <div class=\"col-lg-7 col-md-10\">\n          <h1 class=\"display-2 text-white\">Hello {{user.name}}</h1>\n          <p class=\"text-white mt-0 mb-5\">This is your profile page. You can manage your events</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- Page content -->\n  <div class=\"container-fluid mt--7\">\n    <div class=\"row\">\n      <div class=\"col-xl-4 order-xl-2 mb-5 mb-xl-0\">\n        <div class=\"card card-profile shadow\">\n          <div class=\"row justify-content-center\">\n            <div class=\"col-lg-3 order-lg-2\">\n              <div class=\"card-profile-image\">\n                <a routerLink=\"/profile\">\n                  <img src={{user.image}} class=\"rounded-circle\" style=\"width:140px;height:140px\">\n                </a>\n              </div>\n            </div>\n          </div>\n          <div class=\"card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4\">\n            <div class=\"d-flex justify-content-between\">\n            </div>\n          </div>\n          <div class=\"card-body pt-0 pt-md-4\">\n            <div class=\"row\">\n              <div class=\"col\">\n                <div class=\"card-profile-stats d-flex justify-content-center mt-md-5\">\n                  <div>\n                    <span class=\"heading\">{{events.length}}</span>\n                    <span class=\"description text-primary\">Events</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"text-center\">\n              <h3>\n                {{user.name}}<span class=\"font-weight-light\">{{user.age}}</span>\n              </h3>\n              <div class=\"h5 font-weight-300\">\n                <i class=\"ni location_pin mr-2\"></i>{{user.email}}\n              </div>\n              <div class=\"h5 mt-4\">\n                <i class=\"ni business_briefcase-24 mr-2\"></i>{{user.id}}\n              </div>\n              <div>\n                <i class=\"ni education_hat mr-2\"></i>{{user.token}}\n              </div>\n              <hr class=\"my-4\" />\n              <span class=\"badge badge-default\">Sport</span>\n              <span class=\"badge badge-primary\" style=\"margin-left:10px\">activ</span>\n              <span class=\"badge badge-secondary\" style=\"margin-left:10px\">cinema</span>\n              <span class=\"badge badge-info\" style=\"margin-left:10px\">Info</span>\n              <span class=\"badge badge-success\" style=\"margin-left:10px\">Sport</span>\n              <span class=\"badge badge-danger\" style=\"margin-left:10px\">music</span>\n              <span class=\"badge badge-warning\" style=\"margin-left:10px\">cinema</span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-xl-8 order-xl-1\">\n        <div class=\"card bg-secondary shadow\">\n          <div class=\"card-header bg-white border-0\">\n            <div class=\"row align-items-center\">\n              <div class=\"col-8\">\n                <h3 class=\"mb-0\">My Events</h3>\n              </div>\n              <div class=\"col-4 text-right\">\n                <app-creeractivite></app-creeractivite>\n              </div>\n            </div>\n          </div>\n          <div class=\"card-body\">\n            <form>\n              <div *ngIf=\"events\">\n                <div class=\"row\">\n                  <div *ngFor=\"let event of events\">\n                    <div class=\"col-sm\">\n                      <div class=\"card\" style=\"width: 14rem;\">\n                        <img class=\"card-img-top\" src=\"../../assets/event.jpg\" alt=\"Card image cap\">\n                        <div class=\"card-body\">\n                          <h5 class=\"card-title\">{{event.name}}</h5>\n                          <p class=\"card-text\">{{event.description | slice:0:70 }}</p>\n                          <a [routerLink]=\"['/profile/events', event.id]\" class=\"btn btn-primary\">Read More</a>\n                        </div>\n                      </div>\n                      <br>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n     <!-- Footer -->\n  <footer class=\"footer\">\n      <div class=\"row align-items-center justify-content-xl-between\">\n        <div class=\"col-xl-6\">\n          <div class=\"copyright text-center text-xl-left text-muted\">\n            &copy; 2019 <a href=\"#\" class=\"font-weight-bold ml-1\" >JMactiv</a>\n          </div>\n        </div>\n        <div class=\"col-xl-6\">\n          <ul class=\"nav nav-footer justify-content-center justify-content-xl-end\">\n            <li class=\"nav-item\">\n              <a href=\"#\" class=\"nav-link\" target=\"_blank\">INF5001</a>\n            </li>\n            <li class=\"nav-item\">\n              <a routerLink=\"/team\" class=\"nav-link\">About Us</a>\n            </li>\n            <li class=\"nav-item\">\n              <a href=\"#\" class=\"nav-link\"\n                target=\"_blank\">MIT License</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </footer>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/authentification/authentification.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/authentification/authentification.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpZmljYXRpb24vYXV0aGVudGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/authentification/authentification.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/authentification/authentification.component.ts ***!
  \****************************************************************/
/*! exports provided: AuthentificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthentificationComponent", function() { return AuthentificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_facebook_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/facebook.service */ "./src/app/services/facebook.service.ts");





var AuthentificationComponent = /** @class */ (function () {
    function AuthentificationComponent(route, router, socialAuthService, facebookService) {
        this.route = route;
        this.router = router;
        this.socialAuthService = socialAuthService;
        this.facebookService = facebookService;
    }
    AuthentificationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.name = params["name"];
        });
        this.socialAuthService.authState.subscribe(function (user) {
            _this.user = user;
            _this.loggedIn = (user != null);
        });
        this.getEvents();
    };
    /**
     *
     */
    AuthentificationComponent.prototype.signOut = function () {
        this.socialAuthService.signOut();
        this.router.navigate(['']);
    };
    /**
     * get FB events associated to user
     */
    AuthentificationComponent.prototype.getEvents = function () {
        var _this = this;
        this.facebookService.getEvents(this.user.id, this.user.token)
            .subscribe(function (data) {
            _this.events = (data.json().data);
            console.log(_this.events);
        });
    };
    AuthentificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-authentification',
            template: __webpack_require__(/*! ./authentification.component.html */ "./src/app/authentification/authentification.component.html"),
            styles: [__webpack_require__(/*! ./authentification.component.scss */ "./src/app/authentification/authentification.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            angular_6_social_login__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _services_facebook_service__WEBPACK_IMPORTED_MODULE_4__["FacebookService"]])
    ], AuthentificationComponent);
    return AuthentificationComponent;
}());



/***/ }),

/***/ "./src/app/chercher/chercher.component.html":
/*!**************************************************!*\
  !*** ./src/app/chercher/chercher.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Another variation with a button -->\n<div class=\"input-group\">\n  <input type=\"text\" class=\"form-control\" placeholder=\"Chercher vous une activité?\">\n  <div class=\"input-group-append\">\n    <button class=\"btn btn-secondary\" type=\"button\">\n      <i class=\"fa fa-search\"></i>\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/chercher/chercher.component.scss":
/*!**************************************************!*\
  !*** ./src/app/chercher/chercher.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Styles for wrapping the search box */\n.main {\n  width: 50%;\n  height: 50%;\n  margin: 50px auto; }\n/* Bootstrap 4 text input with search icon */\n.has-search .form-control {\n  padding-left: 2.375rem; }\n.has-search .form-control-feedback {\n  position: absolute;\n  z-index: 2;\n  display: block;\n  width: 2.375rem;\n  height: 2.375rem;\n  line-height: 2.375rem;\n  text-align: center;\n  pointer-events: none;\n  color: #aaa; }\n.input-group {\n  padding-bottom: 20px;\n  padding-top: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYXJyYS9EZXNrdG9wL1dBRkFfQ09VUlMvam1hY3Rpdl9pbm01MDAxL215LWFuZ3VsYXItc2l0ZS9zcmMvYXBwL2NoZXJjaGVyL2NoZXJjaGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFLHVDQUFBO0FBRUY7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLGlCQUFpQixFQUFBO0FBR25CLDRDQUFBO0FBRUE7RUFDRSxzQkFBc0IsRUFBQTtBQUd4QjtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsV0FBVyxFQUFBO0FBR2I7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jaGVyY2hlci9jaGVyY2hlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAvKiBTdHlsZXMgZm9yIHdyYXBwaW5nIHRoZSBzZWFyY2ggYm94ICovXG5cbi5tYWluIHtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiA1MCU7XG4gIG1hcmdpbjogNTBweCBhdXRvO1xufVxuXG4vKiBCb290c3RyYXAgNCB0ZXh0IGlucHV0IHdpdGggc2VhcmNoIGljb24gKi9cblxuLmhhcy1zZWFyY2ggLmZvcm0tY29udHJvbCB7XG4gIHBhZGRpbmctbGVmdDogMi4zNzVyZW07XG59XG5cbi5oYXMtc2VhcmNoIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMi4zNzVyZW07XG4gIGhlaWdodDogMi4zNzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAyLjM3NXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgY29sb3I6ICNhYWE7XG59XG5cbi5pbnB1dC1ncm91cCB7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/chercher/chercher.component.ts":
/*!************************************************!*\
  !*** ./src/app/chercher/chercher.component.ts ***!
  \************************************************/
/*! exports provided: ChercherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChercherComponent", function() { return ChercherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChercherComponent = /** @class */ (function () {
    function ChercherComponent() {
    }
    ChercherComponent.prototype.ngOnInit = function () {
    };
    ChercherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chercher',
            template: __webpack_require__(/*! ./chercher.component.html */ "./src/app/chercher/chercher.component.html"),
            styles: [__webpack_require__(/*! ./chercher.component.scss */ "./src/app/chercher/chercher.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChercherComponent);
    return ChercherComponent;
}());



/***/ }),

/***/ "./src/app/creeractivite/creeractivite.component.html":
/*!************************************************************!*\
  !*** ./src/app/creeractivite/creeractivite.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Button trigger modal -->\n<button type=\"button\" class=\"btn btn-info btn-sm\" data-toggle=\"modal\" data-target=\"#exampleModal\"> Add Event\n</button>\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Add Event</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form role=\"form\">\n          <div class=\"form-group mb-3\">\n            <div class=\"input-group input-group-alternative\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\n              </div>\n              <input class=\"form-control\" placeholder=\"Email\" type=\"email\">\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"input-group input-group-alternative\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\n              </div>\n              <input class=\"form-control\" placeholder=\"Password\" type=\"password\">\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"input-group input-group-alternative\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\n              </div>\n              <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\"\n                placeholder=\"Event Description ...\"></textarea>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"input-group input-group-alternative\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\"><i class=\"ni ni-calendar-grid-58\"></i></span>\n              </div>\n              <input class=\"form-control datepicker\" placeholder=\"Select date\" type=\"text\" value=\"06/20/2018\">\n            </div>\n          </div>\n          <!-- <div class=\"custom-control custom-control-alternative custom-checkbox\">\n                    <input class=\"custom-control-input\" id=\" customCheckLogin\" type=\"checkbox\">\n                    <label class=\"custom-control-label\" for=\" customCheckLogin\">\n                        <span class=\"text-muted\">Remember me</span>\n                    </label>\n                </div> -->\n          <div class=\"text-center\">\n            <button type=\"button\" class=\"btn btn-primary my-4\">Sign in</button>\n          </div>\n        </form>\n\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n      </div>\n    </div>\n  </div>\n</div>\n<script src=\"../../assets/vendor//bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js\"></script>"

/***/ }),

/***/ "./src/app/creeractivite/creeractivite.component.scss":
/*!************************************************************!*\
  !*** ./src/app/creeractivite/creeractivite.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWVyYWN0aXZpdGUvY3JlZXJhY3Rpdml0ZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/creeractivite/creeractivite.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/creeractivite/creeractivite.component.ts ***!
  \**********************************************************/
/*! exports provided: CreeractiviteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreeractiviteComponent", function() { return CreeractiviteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CreeractiviteComponent = /** @class */ (function () {
    function CreeractiviteComponent() {
    }
    CreeractiviteComponent.prototype.ngOnInit = function () {
    };
    CreeractiviteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-creeractivite',
            template: __webpack_require__(/*! ./creeractivite.component.html */ "./src/app/creeractivite/creeractivite.component.html"),
            styles: [__webpack_require__(/*! ./creeractivite.component.scss */ "./src/app/creeractivite/creeractivite.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CreeractiviteComponent);
    return CreeractiviteComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul *ngIf=\"!user\" class=\"navbar-nav\">\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" (click)=\"socialLogin()\">\n      <i class=\"fab fa-facebook text-success\"></i> Login with Facebook\n    </a>\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_3__);




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, socialAuthService) {
        this.router = router;
        this.socialAuthService = socialAuthService;
        this.loggedIn = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socialAuthService.authState.subscribe(function (user) {
            _this.user = user;
            _this.loggedIn = (user != null);
        });
    };
    LoginComponent.prototype.socialLogin = function () {
        var _this = this;
        var socialPlatformProvider = angular_6_social_login__WEBPACK_IMPORTED_MODULE_3__["FacebookLoginProvider"].PROVIDER_ID;
        this.socialAuthService.signIn(socialPlatformProvider).then(function (userData) {
            _this.name = userData.name;
            var navigationExtras = {
                queryParams: {
                    name: _this.name
                }
            };
            _this.router.navigate(['profile'], navigationExtras);
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            angular_6_social_login__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Page not found</h2>\n\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.scss":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/not-found/not-found.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/services/facebook.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/facebook.service.ts ***!
  \**********************************************/
/*! exports provided: FacebookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacebookService", function() { return FacebookService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var FacebookService = /** @class */ (function () {
    function FacebookService(http) {
        this.http = http;
    }
    /**
     * get User Events from FB API
     * @param id
     * @param token
     */
    FacebookService.prototype.getEvents = function (id, token) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Facebook_API + "/" + id + "/events?access_token=" + token;
        return this.http.get(url);
    };
    /**
     * get single User Event from FB API
     * @param id
     * @param token
     */
    FacebookService.prototype.getEvent = function (id, token) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Facebook_API + "/" + id + "?access_token=" + token;
        return this.http.get(url);
    };
    FacebookService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], FacebookService);
    return FacebookService;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    Facebook_API: "https://graph.facebook.com/v3.2",
    App_ID: "2229942433740406"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sarra/Desktop/WAFA_COURS/jmactiv_inm5001/my-angular-site/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
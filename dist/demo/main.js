(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../node_modules/raw-loader/index.js!../common/src/lib/controls/side-nav/side-nav.component.html":
/*!********************************************************************************************************************************************************************************!*\
  !*** D:/projects/workspace/Fathym/Git/Open Source/lowcodeunit/lcu-hamburger-menu-side-nav/node_modules/raw-loader!../common/src/lib/controls/side-nav/side-nav.component.html ***!
  \********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"mat-sidenav-container\">\r\n  <mat-sidenav-content class=\"mat-sidenav-content\">\r\n      <button *ngIf=\"SideOpen === false\"class=\"hamburger-menu\" mat-icon-button (click)=\"toggleDrawer()\">\r\n        <mat-icon [inline]=\"true\">menu</mat-icon>\r\n      </button>\r\n    </mat-sidenav-content>\r\n      <!-- Builds the hamburger menu from the items in the constants.ts file-->\r\n      <mat-sidenav class=\"side-nav\" #sidenav mode=\"side\"  >\r\n          <button class=\"hamburger-menu\" mat-icon-button (click)=\"toggleDrawer()\">\r\n              <mat-icon [inline]=\"true\">menu</mat-icon>\r\n            </button>\r\n        <div class=\"button-container\" fxLayout=\"column\" fxLayoutAlign=\"space-around\" >\r\n        <button class=\"item-button\"  mat-menu-item  fxLayoutAlign=\"space-around center\"  *ngFor= \"let item of MenuItems\" \r\n          [disabled]= item.Disabled [routerLink]=[item.Url,item.Param]>\r\n          <!-- <mat-icon *ngIf=\"item.Icon\">{{ item.Icon }}</mat-icon> -->\r\n          <span>{{ item.Label }}</span>\r\n        </button>\r\n      </div>\r\n      </mat-sidenav>\r\n</mat-sidenav-container>\r\n\r\n     "

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** D:/projects/workspace/Fathym/Git/Open Source/lowcodeunit/lcu-hamburger-menu-side-nav/node_modules/raw-loader!./src/app/app.component.html ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <lcu-side-nav [MenuItems]=\"Items\"></lcu-side-nav>\r\n\r\n\r\n"

/***/ }),

/***/ "../common/src/lib/controls/side-nav/side-nav.component.scss":
/*!*******************************************************************!*\
  !*** ../common/src/lib/controls/side-nav/side-nav.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hamburger-menu {\n  background-color: transparent;\n  border-width: 0;\n  outline: none;\n  font-size: 30px;\n}\n\n.mat-sidenav-container {\n  width: 150px;\n  background-color: transparent;\n}\n\n.mat-sidenav-content {\n  height: 100vh;\n  background-color: transparent;\n  width: 40px;\n}\n\n.side-nav {\n  height: 100vh;\n  background-color: transparent;\n  border-right: transparent;\n}\n\n.button-container {\n  height: 50vh;\n  background-color: transparent;\n  z-index: 10;\n}\n\n.item-button {\n  width: 100%;\n  background-color: whitesmoke;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2NvbW1vbi9zcmMvbGliL2NvbnRyb2xzL3NpZGUtbmF2L0Q6XFxwcm9qZWN0c1xcd29ya3NwYWNlXFxGYXRoeW1cXEdpdFxcT3BlbiBTb3VyY2VcXGxvd2NvZGV1bml0XFxsY3UtaGFtYnVyZ2VyLW1lbnUtc2lkZS1uYXYvcHJvamVjdHNcXGNvbW1vblxcc3JjXFxsaWJcXGNvbnRyb2xzXFxzaWRlLW5hdlxcc2lkZS1uYXYuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9jb21tb24vc3JjL2xpYi9jb250cm9scy9zaWRlLW5hdi9zaWRlLW5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxZQUFBO0VBQ0EsNkJBQUE7QUNFRjs7QURDQTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7QUNFRjs7QURBQTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0FDR0Y7O0FEREE7RUFDRSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0FDSUY7O0FERkE7RUFDRSxXQUFBO0VBQ0EsNEJBQUE7QUNLRiIsImZpbGUiOiJwcm9qZWN0cy9jb21tb24vc3JjL2xpYi9jb250cm9scy9zaWRlLW5hdi9zaWRlLW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oYW1idXJnZXItbWVudSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXdpZHRoOjA7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuLm1hdC1zaWRlbmF2LWNvbnRhaW5lcntcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLm1hdC1zaWRlbmF2LWNvbnRlbnR7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xyXG4gIHdpZHRoOjQwcHg7XHJcbn1cclxuLnNpZGUtbmF2e1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJpZ2h0OiB0cmFuc3BhcmVudDtcclxufVxyXG4uYnV0dG9uLWNvbnRhaW5lcntcclxuICBoZWlnaHQ6IDUwdmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcclxuICB6LWluZGV4OiAxMDtcclxufVxyXG4uaXRlbS1idXR0b257XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG5cclxuIiwiLmhhbWJ1cmdlci1tZW51IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci13aWR0aDogMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4ubWF0LXNpZGVuYXYtY29udGFpbmVyIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLm1hdC1zaWRlbmF2LWNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgd2lkdGg6IDQwcHg7XG59XG5cbi5zaWRlLW5hdiB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IHRyYW5zcGFyZW50O1xufVxuXG4uYnV0dG9uLWNvbnRhaW5lciB7XG4gIGhlaWdodDogNTB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4uaXRlbS1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbn0iXX0= */"

/***/ }),

/***/ "../common/src/lib/controls/side-nav/side-nav.component.ts":
/*!*****************************************************************!*\
  !*** ../common/src/lib/controls/side-nav/side-nav.component.ts ***!
  \*****************************************************************/
/*! exports provided: SideNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavComponent", function() { return SideNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "../../node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");





var SideNavComponent = /** @class */ (function () {
    function SideNavComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.matches; }));
        this.SideOpen = false;
    }
    SideNavComponent.prototype.ngOnInit = function () {
    };
    SideNavComponent.prototype.toggleDrawer = function () {
        if (this.sidenav.opened) {
            this.sidenav.close();
            this.SideOpen = false;
        }
        else {
            this.sidenav.open();
            this.SideOpen = true;
        }
    };
    SideNavComponent.ctorParameters = function () { return [
        { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], SideNavComponent.prototype, "MenuItems", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sidenav', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenav"])
    ], SideNavComponent.prototype, "sidenav", void 0);
    SideNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'lcu-side-nav',
            template: __webpack_require__(/*! raw-loader!./side-nav.component.html */ "../../node_modules/raw-loader/index.js!../common/src/lib/controls/side-nav/side-nav.component.html"),
            styles: [__webpack_require__(/*! ./side-nav.component.scss */ "../common/src/lib/controls/side-nav/side-nav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]])
    ], SideNavComponent);
    return SideNavComponent;
}());



/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");



var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIn0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/overlay */ "../../node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _utils_constants_navigation_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/constants/navigation.constants */ "./src/app/utils/constants/navigation.constants.ts");





var AppComponent = /** @class */ (function () {
    // public BackgroundImage: string;
    // public DarkTheme: boolean;
    // public Links: Array<NavLinkModel>;
    // public SelectedTheme: string;
    // public title = 'demo';
    // protected themesSubscriptions: Subscription;
    function AppComponent(router, activatedRoute, overlayContainer) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.overlayContainer = overlayContainer;
        this.Items = new Array();
        // this.BackgroundImage = './assets/images/bg_image.jpg';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.Items = _utils_constants_navigation_constants__WEBPACK_IMPORTED_MODULE_4__["NavigationConstants"].MENU_ITEMS;
        // this.resetTheme();
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayContainer"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'lcu-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "../../node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayContainer"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "../../node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _lcu_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @lcu/common */ "../../node_modules/@lcu/common/fesm5/lcu-common.js");
/* harmony import */ var projects_common_src_lib_controls_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! projects/common/src/lib/controls/side-nav/side-nav.component */ "../common/src/lib/controls/side-nav/side-nav.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                projects_common_src_lib_controls_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_8__["SideNavComponent"]
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                _lcu_common__WEBPACK_IMPORTED_MODULE_7__["FathymSharedModule"],
                _lcu_common__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
            ],
            providers: [
                {
                    provide: _lcu_common__WEBPACK_IMPORTED_MODULE_7__["FaviconsService"], useClass: _lcu_common__WEBPACK_IMPORTED_MODULE_7__["BrowserFavicons"]
                },
                {
                    provide: _lcu_common__WEBPACK_IMPORTED_MODULE_7__["BROWSER_FAVICONS_CONFIG"],
                    useValue: {
                        icons: {
                            'arctic-theme': {
                                type: 'image/png',
                                href: './assets/images/favicons/thinky_arctic.png'
                            },
                            'cool-candy-theme': {
                                type: 'image/png',
                                href: './assets/images/favicons/thinky_cool_candy.png'
                            },
                            'flipper-theme': {
                                type: 'image/png',
                                href: './assets/images/favicons/thinky_flipper.png'
                            },
                            'ice-theme': {
                                type: 'image/png',
                                href: './assets/images/favicons/thinky_flipper.png'
                            },
                            'white-mint-theme': {
                                type: 'image/png',
                                href: './assets/images/favicons/thinky_flipper.png'
                            },
                            'contrast-theme': {
                                type: 'image/png',
                                href: './assets/images/favicons/thinky_circle_red.png',
                                isDefault: true
                            },
                            'sea-green-theme': {
                                type: 'image/png',
                                href: './assets/images/favicons/thinky_arctic.png'
                            },
                        },
                        // determine whether or not a random token is auto-appended to the HREF
                        // values whenever an icon is injected into the document
                        cacheBusting: true
                    }
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/utils/constants/navigation.constants.ts":
/*!*********************************************************!*\
  !*** ./src/app/utils/constants/navigation.constants.ts ***!
  \*********************************************************/
/*! exports provided: NavigationConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationConstants", function() { return NavigationConstants; });
// @dynamic
/**
 * @dynamic is used because this class contains static properties
 *
 * Used to build the items in the navigation menu
 */
var NavigationConstants = /** @class */ (function () {
    function NavigationConstants() {
    }
    NavigationConstants.MENU_ITEMS = [
        { Label: 'Home', Url: '/home', Disabled: 'false', Icon: 'home', },
        { Label: 'My Modal', Url: '/home', Disabled: 'false', Icon: 'public', Param: 'modal' },
        { Label: 'My Itineraries', Url: 'www', Disabled: 'true', Icon: 'map' },
        { Label: 'My Top Lists', Url: 'www', Disabled: 'true', Icon: 'sort' },
        { Label: 'My Albums', Url: 'www', Disabled: 'true', Icon: 'photo_library' },
        { Label: 'My Friends', Url: 'www', Disabled: 'true', Icon: 'group' },
        { Label: 'My Profile', Url: 'www', Disabled: 'true', Icon: 'person' }
    ];
    return NavigationConstants;
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
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
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

module.exports = __webpack_require__(/*! D:\projects\workspace\Fathym\Git\Open Source\lowcodeunit\lcu-hamburger-menu-side-nav\projects\demo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
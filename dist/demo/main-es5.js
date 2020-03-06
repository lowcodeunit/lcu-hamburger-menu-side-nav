function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "../common/src/lib/controls/side-nav/side-nav.component.ngfactory.js":
  /*!***************************************************************************!*\
    !*** ../common/src/lib/controls/side-nav/side-nav.component.ngfactory.js ***!
    \***************************************************************************/

  /*! exports provided: RenderType_SideNavComponent, View_SideNavComponent_0, View_SideNavComponent_Host_0, SideNavComponentNgFactory */

  /***/
  function commonSrcLibControlsSideNavSideNavComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_SideNavComponent", function () {
      return RenderType_SideNavComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_SideNavComponent_0", function () {
      return View_SideNavComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_SideNavComponent_Host_0", function () {
      return View_SideNavComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SideNavComponentNgFactory", function () {
      return SideNavComponentNgFactory;
    });
    /* harmony import */


    var _side_nav_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./side-nav.component.scss.shim.ngstyle */
    "../common/src/lib/controls/side-nav/side-nav.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../../node_modules/@angular/material/icon/index.ngfactory */
    "../../node_modules/@angular/material/icon/index.ngfactory.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/icon */
    "../../node_modules/@angular/material/fesm2015/icon.js");
    /* harmony import */


    var _node_modules_angular_material_menu_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../../node_modules/@angular/material/menu/index.ngfactory */
    "../../node_modules/@angular/material/menu/index.ngfactory.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "../../node_modules/@angular/flex-layout/esm2015/flex.js");
    /* harmony import */


    var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/flex-layout/core */
    "../../node_modules/@angular/flex-layout/esm2015/core.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "../../node_modules/@angular/flex-layout/esm2015/extended.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/menu */
    "../../node_modules/@angular/material/fesm2015/menu.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "../../node_modules/@angular/cdk/fesm2015/a11y.js");
    /* harmony import */


    var _node_modules_angular_material_sidenav_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../../../../node_modules/@angular/material/sidenav/index.ngfactory */
    "../../node_modules/@angular/material/sidenav/index.ngfactory.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "../../node_modules/@angular/material/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "../../node_modules/@angular/cdk/fesm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "../../node_modules/@angular/cdk/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "../../node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../../../../../node_modules/@angular/material/button/index.ngfactory */
    "../../node_modules/@angular/material/button/index.ngfactory.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/fesm2015/button.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "../../node_modules/@angular/cdk/fesm2015/platform.js");
    /* harmony import */


    var _side_nav_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./side-nav.component */
    "../common/src/lib/controls/side-nav/side-nav.component.ts");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "../../node_modules/@angular/cdk/fesm2015/layout.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_SideNavComponent = [_side_nav_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_SideNavComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_SideNavComponent,
      data: {}
    });

    function View_SideNavComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "mat-icon", [["class", "button-icon mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, 0, ["", ""]))], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).inline;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).color !== "warn";

        _ck(_v, 0, 0, currVal_0, currVal_1);

        var currVal_2 = _v.parent.context.$implicit.Icon;

        _ck(_v, 2, 0, currVal_2);
      });
    }

    function View_SideNavComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 12, "button", [["class", "item-button mat-focus-indicator"], ["fxLayoutAlign", "start center"], ["mat-menu-item", ""]], [[1, "role", 0], [2, "mat-menu-item", null], [2, "mat-menu-item-highlighted", null], [2, "mat-menu-item-submenu-trigger", null], [1, "tabindex", 0], [1, "aria-disabled", 0], [1, "disabled", 0]], [[null, "click"], [null, "mouseenter"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._checkDisabled($event) !== false;
          ad = pd_0 && ad;
        }

        if ("mouseenter" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._handleMouseEnter() !== false;
          ad = pd_1 && ad;
        }

        if ("click" === en) {
          var pd_2 = _co.ButtonClicked(_v.context.$implicit) !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, _node_modules_angular_material_menu_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatMenuItem_0"], _node_modules_angular_material_menu_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatMenuItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        ngStyle: [0, "ngStyle"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](2, {
        "color": 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["LayoutAlignStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["MediaMarshaller"]], {
        fxLayoutAlign: [0, "fxLayoutAlign"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 933888, null, 0, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__["DefaultStyleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["MediaMarshaller"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [6, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["SERVER_TOKEN"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]], {
        ngStyle: [0, "ngStyle"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](5, {
        "color": 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 180224, null, 0, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__["FocusMonitor"], [2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MAT_MENU_PANEL"]]], {
        disabled: [0, "disabled"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 0, 5, "div", [["fxLayoutAlign", "start center"]], [[1, "id", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["LayoutAlignStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["MediaMarshaller"]], {
        fxLayoutAlign: [0, "fxLayoutAlign"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SideNavComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "span", [["class", "button-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](12, null, ["", ""]))], function (_ck, _v) {
        var _co = _v.component;

        var currVal_7 = _ck(_v, 2, 0, _co.FontColor);

        _ck(_v, 1, 0, currVal_7);

        var currVal_8 = "start center";

        _ck(_v, 3, 0, currVal_8);

        var currVal_9 = _ck(_v, 5, 0, _co.FontColor);

        _ck(_v, 4, 0, currVal_9);

        var currVal_10 = _v.context.$implicit.Disabled;

        _ck(_v, 6, 0, currVal_10);

        var currVal_12 = "start center";

        _ck(_v, 8, 0, currVal_12);

        var currVal_13 = _v.context.$implicit.Icon;

        _ck(_v, 10, 0, currVal_13);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).role;

        var currVal_1 = true;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._highlighted;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._triggersSubmenu;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._getTabIndex();

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).disabled.toString();

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).disabled || null;

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);

        var currVal_11 = "button-" + _v.context.$implicit.Label;

        _ck(_v, 7, 0, currVal_11);

        var currVal_14 = _v.context.$implicit.Label;

        _ck(_v, 12, 0, currVal_14);
      });
    }

    function View_SideNavComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 1, {
        sidenav: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 39, "mat-sidenav-container", [["class", "mat-sidenav-container mat-drawer-container mat-sidenav-container"]], [[2, "mat-drawer-container-explicit-backdrop", null]], null, null, _node_modules_angular_material_sidenav_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_MatSidenavContainer_0"], _node_modules_angular_material_sidenav_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_MatSidenavContainer"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        ngStyle: [0, "ngStyle"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](3, {
        width: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 933888, null, 0, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__["DefaultStyleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["MediaMarshaller"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [6, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["SERVER_TOKEN"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]], {
        ngStyle: [0, "ngStyle"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](5, {
        width: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 1490944, null, 2, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MatSidenavContainer"], [[2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__["Directionality"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_15__["ViewportRuler"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MAT_DRAWER_DEFAULT_AUTOSIZE"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["ANIMATION_MODULE_TYPE"]]], {
        hasBackdrop: [0, "hasBackdrop"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, {
        _allDrawers: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, {
        _content: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["ɵangular_material_src_material_sidenav_sidenav_a"], null, [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MatSidenavContainer"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, 1, 14, "mat-sidenav-content", [["class", "mat-sidenav-content mat-drawer-content mat-sidenav-content"]], [[4, "margin-left", "px"], [4, "margin-right", "px"]], null, null, _node_modules_angular_material_sidenav_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_MatSidenavContent_0"], _node_modules_angular_material_sidenav_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_MatSidenavContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        ngStyle: [0, "ngStyle"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](12, {
        width: 0,
        height: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 933888, null, 0, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__["DefaultStyleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["MediaMarshaller"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [6, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["SERVER_TOKEN"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]], {
        ngStyle: [0, "ngStyle"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](14, {
        width: 0,
        height: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 1294336, [[3, 4]], 0, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MatSidenavContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MatSidenavContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_15__["ScrollDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, 0, 8, "button", [["class", "hamburger-menu mat-focus-indicator"], ["mat-icon-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.toggleDrawer() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, 0, 6, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], [[null, "mouseover"], [null, "mouseleave"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("mouseover" === en) {
          var pd_0 = _co.OnHover() !== false;
          ad = pd_0 && ad;
        }

        if ("mouseleave" === en) {
          var pd_1 = _co.LeaveHover() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        ngStyle: [0, "ngStyle"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](20, {
        "color": 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 933888, null, 0, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__["DefaultStyleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["MediaMarshaller"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [6, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["SERVER_TOKEN"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]], {
        ngStyle: [0, "ngStyle"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](22, {
        "color": 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], {
        inline: [0, "inline"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["menu"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, 0, 15, "mat-sidenav", [["class", "side-nav mat-drawer mat-sidenav"], ["mode", "side"], ["tabIndex", "-1"]], [[1, "align", 0], [2, "mat-drawer-end", null], [2, "mat-drawer-over", null], [2, "mat-drawer-push", null], [2, "mat-drawer-side", null], [2, "mat-drawer-opened", null], [2, "mat-sidenav-fixed", null], [4, "top", "px"], [4, "bottom", "px"], [40, "@transform", 0]], [[null, "click"], ["component", "@transform.start"], ["component", "@transform.done"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("component:@transform.start" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._animationStartListener($event) !== false;
          ad = pd_0 && ad;
        }

        if ("component:@transform.done" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._animationDoneListener($event) !== false;
          ad = pd_1 && ad;
        }

        if ("click" === en) {
          var pd_2 = _co.toggleDrawer() !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, _node_modules_angular_material_sidenav_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_MatSidenav_0"], _node_modules_angular_material_sidenav_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_MatSidenav"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 3325952, [[2, 4], [1, 4], ["sidenav", 4]], 0, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MatSidenav"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__["FocusTrapFactory"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__["FocusMonitor"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_19__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]], [2, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["ɵangular_material_src_material_sidenav_sidenav_a"]]], {
        mode: [0, "mode"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, 0, 8, "button", [["class", "hamburger-menu mat-focus-indicator"], ["mat-icon-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, 0, 6, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], [[null, "mouseover"], [null, "mouseleave"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("mouseover" === en) {
          var pd_0 = _co.OnHover() !== false;
          ad = pd_0 && ad;
        }

        if ("mouseleave" === en) {
          var pd_1 = _co.LeaveHover() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        ngStyle: [0, "ngStyle"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](31, {
        "color": 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 933888, null, 0, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__["DefaultStyleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["MediaMarshaller"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [6, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["SERVER_TOKEN"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]], {
        ngStyle: [0, "ngStyle"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](33, {
        "color": 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], {
        inline: [0, "inline"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["menu"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, 0, 4, "div", [["class", "button-container"], ["fxLayout", "column"], ["fxLayoutAlign", "space-between"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["MediaMarshaller"]], {
        fxLayout: [0, "fxLayout"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["LayoutAlignStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["MediaMarshaller"]], {
        fxLayoutAlign: [0, "fxLayoutAlign"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SideNavComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;

        var currVal_1 = _ck(_v, 3, 0, _co.MatContainerWidth);

        _ck(_v, 2, 0, currVal_1);

        var currVal_2 = _ck(_v, 5, 0, _co.MatContainerWidth);

        _ck(_v, 4, 0, currVal_2);

        var currVal_3 = false;

        _ck(_v, 6, 0, currVal_3);

        var currVal_6 = _ck(_v, 12, 0, _co.MatContentWidth, _co.MatContentHeight);

        _ck(_v, 11, 0, currVal_6);

        var currVal_7 = _ck(_v, 14, 0, _co.MatContentWidth, _co.MatContentHeight);

        _ck(_v, 13, 0, currVal_7);

        _ck(_v, 15, 0);

        var currVal_12 = _ck(_v, 20, 0, _co.MenuBGColor);

        _ck(_v, 19, 0, currVal_12);

        var currVal_13 = _ck(_v, 22, 0, _co.MenuBGColor);

        _ck(_v, 21, 0, currVal_13);

        var currVal_14 = true;

        _ck(_v, 23, 0, currVal_14);

        var currVal_25 = "side";

        _ck(_v, 26, 0, currVal_25);

        var currVal_30 = _ck(_v, 31, 0, _co.MenuBGColor);

        _ck(_v, 30, 0, currVal_30);

        var currVal_31 = _ck(_v, 33, 0, _co.MenuBGColor);

        _ck(_v, 32, 0, currVal_31);

        var currVal_32 = true;

        _ck(_v, 34, 0, currVal_32);

        var currVal_33 = "column";

        _ck(_v, 37, 0, currVal_33);

        var currVal_34 = "space-between";

        _ck(_v, 38, 0, currVal_34);

        var currVal_35 = _co.MenuItems;

        _ck(_v, 40, 0, currVal_35);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._backdropOverride;

        _ck(_v, 1, 0, currVal_0);

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._container._contentMargins.left;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._container._contentMargins.right;

        _ck(_v, 10, 0, currVal_4, currVal_5);

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).disabled || null;
        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17)._animationMode === "NoopAnimations";

        _ck(_v, 16, 0, currVal_8, currVal_9);

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).inline;

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).color !== "warn";

        _ck(_v, 18, 0, currVal_10, currVal_11);

        var currVal_15 = null;
        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).position === "end";
        var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).mode === "over";
        var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).mode === "push";
        var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).mode === "side";

        var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).opened;

        var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).fixedInViewport;

        var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).fixedInViewport ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).fixedTopGap : null;
        var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).fixedInViewport ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).fixedBottomGap : null;

        var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._animationState;

        _ck(_v, 25, 0, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24);

        var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).disabled || null;
        var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28)._animationMode === "NoopAnimations";

        _ck(_v, 27, 0, currVal_26, currVal_27);

        var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).inline;

        var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).color !== "warn";

        _ck(_v, 29, 0, currVal_28, currVal_29);
      });
    }

    function View_SideNavComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "lcu-side-nav", [], null, null, null, View_SideNavComponent_0, RenderType_SideNavComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 1163264, null, 0, _side_nav_component__WEBPACK_IMPORTED_MODULE_20__["SideNavComponent"], [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_21__["BreakpointObserver"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var SideNavComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("lcu-side-nav", _side_nav_component__WEBPACK_IMPORTED_MODULE_20__["SideNavComponent"], View_SideNavComponent_Host_0, {
      MenuItems: "menu-items",
      openedSubject: "opened-subject",
      MenuColor: "menu-color",
      HoverMenuColor: "hover-menu-color",
      MatContentWidth: "mat-content-width",
      MatContentHeight: "mat-content-height",
      MatContainerWidth: "mat-container-width",
      ButtonBackgroundColor: "button-background-color",
      ButtonBackgroundColorHover: "button-background-color-hover",
      FontColor: "font-color"
    }, {
      NavItemClicked: "nav-item-clicked"
    }, []);
    /***/

  },

  /***/
  "../common/src/lib/controls/side-nav/side-nav.component.scss.shim.ngstyle.js":
  /*!***********************************************************************************!*\
    !*** ../common/src/lib/controls/side-nav/side-nav.component.scss.shim.ngstyle.js ***!
    \***********************************************************************************/

  /*! exports provided: styles */

  /***/
  function commonSrcLibControlsSideNavSideNavComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = [".hamburger-menu[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-width: 0;\n  outline: none;\n  font-size: 30px;\n  margin-left: 15px;\n}\n\n.mat-sidenav-container[_ngcontent-%COMP%] {\n  z-index: 2;\n  background-color: transparent;\n}\n\n  .mat-sidenav-container .mat-drawer-inner-container {\n  z-index: 10 !important;\n  background-color: transparent !important;\n  overflow: hidden !important;\n}\n\n.mat-sidenav-content[_ngcontent-%COMP%] {\n  background-color: transparent;\n  overflow: hidden;\n}\n\n.side-nav[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 230px;\n  background-color: transparent;\n  border-right: transparent;\n  overflow: hidden;\n}\n\n.button-container[_ngcontent-%COMP%] {\n  background-color: transparent;\n  z-index: 10;\n  width: 100%;\n}\n\n.button-container[_ngcontent-%COMP%]   .item-button[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 100%;\n  font-size: 20px;\n  border-color: #eaeaea;\n  border-width: 1px;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  background-color: white;\n}\n\n.button-container[_ngcontent-%COMP%]   .item-button[_ngcontent-%COMP%]   .button-icon[_ngcontent-%COMP%] {\n  padding-left: 17px;\n}\n\n.button-container[_ngcontent-%COMP%]   .item-button[_ngcontent-%COMP%]   .button-title[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  padding-left: 42px;\n}\n\n.button-container[_ngcontent-%COMP%]   .item-button[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.button-container[_ngcontent-%COMP%]   .item-button[_ngcontent-%COMP%]:hover {\n  background-color: #f4f4f3;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2NvbW1vbi9zcmMvbGliL2NvbnRyb2xzL3NpZGUtbmF2L0M6XFxVc2Vyc1xcR2VvcmdlSGF0Y2hcXHNvdXJjZVxccmVwb3NcXGxvd2NvZGV1bml0XFxsY3UtaGFtYnVyZ2VyLW1lbnUtc2lkZS1uYXYvcHJvamVjdHNcXGNvbW1vblxcc3JjXFxsaWJcXGNvbnRyb2xzXFxzaWRlLW5hdlxcc2lkZS1uYXYuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9jb21tb24vc3JjL2xpYi9jb250cm9scy9zaWRlLW5hdi9zaWRlLW5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7RUFDQSw2QkFBQTtBQ0NGOztBREdBO0VBQ0Usc0JBQUE7RUFDQSx3Q0FBQTtFQUNBLDJCQUFBO0FDQUY7O0FESUE7RUFDRSw2QkFBQTtFQUNBLGdCQUFBO0FDREY7O0FER0E7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQ0FGOztBREVBO0VBRUUsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0FGOztBREVFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FDQUo7O0FERUk7RUFDRSxrQkFBQTtBQ0FOOztBREVJO0VBQ0UscUNBQUE7RUFDQSxrQkFBQTtBQ0FOOztBREdJO0VBQWUsbUJBQUE7QUNBbkI7O0FEQ0k7RUFDRSx5QkFBQTtFQUNBLGVBQUE7QUNDTiIsImZpbGUiOiJwcm9qZWN0cy9jb21tb24vc3JjL2xpYi9jb250cm9scy9zaWRlLW5hdi9zaWRlLW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oYW1idXJnZXItbWVudSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXdpZHRoOjA7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi5tYXQtc2lkZW5hdi1jb250YWluZXJ7XHJcbiAgei1pbmRleDogMjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xyXG4gIC8vIGhlaWdodDo4MyU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXNpZGVuYXYtY29udGFpbmVyIC5tYXQtZHJhd2VyLWlubmVyLWNvbnRhaW5lcntcclxuICB6LWluZGV4OjEwICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgLy8gaGVpZ2h0OiA5NXZoO1xyXG4gIC8vIHdpZHRoOjIxMHB4O1xyXG59XHJcbi5tYXQtc2lkZW5hdi1jb250ZW50e1xyXG4gIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uc2lkZS1uYXZ7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB3aWR0aDogMjMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJpZ2h0OiB0cmFuc3BhcmVudDtcclxuICBvdmVyZmxvdzpoaWRkZW47XHJcbn1cclxuLmJ1dHRvbi1jb250YWluZXJ7XHJcbiAgLy8gaGVpZ2h0OiA4MS41JTsgLy9jaGFuZ2UgdG8gbWF0Y2ggdGhlIGxlbmd0aCBvZiB0aGUgbGVnZW5kXHJcbiAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcclxuICB6LWluZGV4OiAxMDtcclxuICB3aWR0aDoxMDAlO1xyXG5cclxuICAuaXRlbS1idXR0b257XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGJvcmRlci1jb2xvcjogI2VhZWFlYTtcclxuICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcclxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblxyXG4gICAgLmJ1dHRvbi1pY29ue1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDE3cHg7XHJcbiAgICB9XHJcbiAgICAuYnV0dG9uLXRpdGxle1xyXG4gICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDQycHg7XHJcbiAgICB9XHJcblxyXG4gICAgJjpsYXN0LWNoaWxkIHsgYm9yZGVyLWJvdHRvbTogbm9uZTsgfVxyXG4gICAgJjpob3ZlcntcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjojZjRmNGYzO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gIH1cclxuIFxyXG59XHJcblxyXG5cclxuXHJcblxyXG4iLCIuaGFtYnVyZ2VyLW1lbnUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXdpZHRoOiAwO1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4ubWF0LXNpZGVuYXYtY29udGFpbmVyIHtcbiAgei1pbmRleDogMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LXNpZGVuYXYtY29udGFpbmVyIC5tYXQtZHJhd2VyLWlubmVyLWNvbnRhaW5lciB7XG4gIHotaW5kZXg6IDEwICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbn1cblxuLm1hdC1zaWRlbmF2LWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnNpZGUtbmF2IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDIzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiB0cmFuc3BhcmVudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmJ1dHRvbi1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgei1pbmRleDogMTA7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmJ1dHRvbi1jb250YWluZXIgLml0ZW0tYnV0dG9uIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBib3JkZXItY29sb3I6ICNlYWVhZWE7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5idXR0b24tY29udGFpbmVyIC5pdGVtLWJ1dHRvbiAuYnV0dG9uLWljb24ge1xuICBwYWRkaW5nLWxlZnQ6IDE3cHg7XG59XG4uYnV0dG9uLWNvbnRhaW5lciAuaXRlbS1idXR0b24gLmJ1dHRvbi10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgcGFkZGluZy1sZWZ0OiA0MnB4O1xufVxuLmJ1dHRvbi1jb250YWluZXIgLml0ZW0tYnV0dG9uOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuLmJ1dHRvbi1jb250YWluZXIgLml0ZW0tYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmMztcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"];
    /***/
  },

  /***/
  "../common/src/lib/controls/side-nav/side-nav.component.ts":
  /*!*****************************************************************!*\
    !*** ../common/src/lib/controls/side-nav/side-nav.component.ts ***!
    \*****************************************************************/

  /*! exports provided: SideNavComponent */

  /***/
  function commonSrcLibControlsSideNavSideNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SideNavComponent", function () {
      return SideNavComponent;
    });
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "../../node_modules/@angular/cdk/fesm2015/layout.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");

    var SideNavComponent =
    /*#__PURE__*/
    function () {
      // public MenuColor: string;
      function SideNavComponent(breakpointObserver) {
        _classCallCheck(this, SideNavComponent);

        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
          return result.matches;
        }));
        this.NavItemClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.openedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.MatContentWidth = "50px";
        this.MatContentHeight = "40px";
        this.MatContainerWidth = "50px";
      }

      _createClass(SideNavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setDefaultStyles();
        }
      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this = this;

          this.openedSubject.subscribe(function (result) {
            _this.sidenav[result ? 'open' : 'close']();

            _this.setStyles();
          });
        }
      }, {
        key: "ButtonClicked",
        value: function ButtonClicked(button) {
          this.NavItemClicked.emit(button);
        }
      }, {
        key: "toggleDrawer",
        value: function toggleDrawer() {
          this.openedSubject.next(!this.sidenav.opened);

          if (!this.sidenav.opened) {
            this.MatContentWidth = "50px";
            this.MatContainerWidth = "50px";
            this.MatContentHeight = "40px"; // console.log("sidenav closed", this.MatContentWidth);
          } else {
            this.MatContentWidth = "0px";
            this.MatContentHeight = "94vh"; //94vh

            this.MatContainerWidth = "230px"; // console.log("sidenav open", this.MatContentWidth);
          }
        }
      }, {
        key: "OnHover",
        value: function OnHover() {
          this.MenuBGColor = this.HoverMenuColor;
        }
      }, {
        key: "OnButtonHover",
        value: function OnButtonHover() {
          // this.ButtonBGColor = this.ButtonBackgroundColorHover;
          this.ButtonHover = true;
        }
      }, {
        key: "LeaveHover",
        value: function LeaveHover() {
          this.MenuBGColor = this.MenuColor;
        }
      }, {
        key: "LeaveButtonHover",
        value: function LeaveButtonHover() {
          // this.ButtonBGColor = this.ButtonBackgroundColor;
          this.ButtonHover = false;
        } // public setButtonStyles() {
        //   let styles = {
        //     'background-color': this.ButtonHover ? this.ButtonBackgroundColorHover : this.ButtonBackgroundColor
        //   };
        //   return styles;
        // }

      }, {
        key: "setStyles",
        value: function setStyles() {
          this.MatContentWidth = "50px";
          this.MatContainerWidth = "50px";
          this.MatContentHeight = "40px";
        }
      }, {
        key: "setDefaultStyles",
        value: function setDefaultStyles() {
          this.setStyles();

          if (!this.FontColor) {
            this.FontColor = 'black';
          }

          if (!this.ButtonBackgroundColorHover) {
            this.ButtonBackgroundColorHover = "grey"; //#96957
          }

          if (!this.ButtonBackgroundColor) {
            this.ButtonBackgroundColor = "white"; //#96957
          }

          if (!this.MenuColor) {
            this.MenuBGColor = 'black';
          }

          this.MenuBGColor = this.MenuColor;

          if (!this.HoverMenuColor) {
            this.HoverMenuColor = 'grey';
          }
        }
      }]);

      return SideNavComponent;
    }();
    /***/

  },

  /***/
  "../common/src/lib/lcu-hamburger-menu-side-nav.module.ts":
  /*!***************************************************************!*\
    !*** ../common/src/lib/lcu-hamburger-menu-side-nav.module.ts ***!
    \***************************************************************/

  /*! exports provided: LcuHamburgerMenuSideNavModule */

  /***/
  function commonSrcLibLcuHamburgerMenuSideNavModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LcuHamburgerMenuSideNavModule", function () {
      return LcuHamburgerMenuSideNavModule;
    });

    var LcuHamburgerMenuSideNavModule = function LcuHamburgerMenuSideNavModule() {
      _classCallCheck(this, LcuHamburgerMenuSideNavModule);
    };
    /***/

  },

  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });

    var routes = [{
      path: '',
      redirectTo: 'landingPage',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };
    /***/

  },

  /***/
  "./src/app/app.component.ngfactory.js":
  /*!********************************************!*\
    !*** ./src/app/app.component.ngfactory.js ***!
    \********************************************/

  /*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */

  /***/
  function srcAppAppComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function () {
      return RenderType_AppComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function () {
      return View_AppComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function () {
      return View_AppComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function () {
      return AppComponentNgFactory;
    });
    /* harmony import */


    var _app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./app.component.scss.shim.ngstyle */
    "./src/app/app.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _common_src_lib_controls_side_nav_side_nav_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../common/src/lib/controls/side-nav/side-nav.component.ngfactory */
    "../common/src/lib/controls/side-nav/side-nav.component.ngfactory.js");
    /* harmony import */


    var _common_src_lib_controls_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../common/src/lib/controls/side-nav/side-nav.component */
    "../common/src/lib/controls/side-nav/side-nav.component.ts");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "../../node_modules/@angular/cdk/fesm2015/layout.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "../../node_modules/@angular/cdk/fesm2015/overlay.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_AppComponent = [_app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_AppComponent,
      data: {}
    });

    function View_AppComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "lcu-side-nav", [], null, [[null, "nav-item-clicked"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("nav-item-clicked" === en) {
          var pd_0 = _co.NavItemClicked($event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _common_src_lib_controls_side_nav_side_nav_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_SideNavComponent_0"], _common_src_lib_controls_side_nav_side_nav_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_SideNavComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 1163264, null, 0, _common_src_lib_controls_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_3__["SideNavComponent"], [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["BreakpointObserver"]], {
        MenuItems: [0, "MenuItems"],
        openedSubject: [1, "openedSubject"],
        MenuColor: [2, "MenuColor"],
        HoverMenuColor: [3, "HoverMenuColor"],
        ButtonBackgroundColor: [4, "ButtonBackgroundColor"],
        ButtonBackgroundColorHover: [5, "ButtonBackgroundColorHover"],
        FontColor: [6, "FontColor"]
      }, {
        NavItemClicked: "nav-item-clicked"
      })], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.Items;
        var currVal_1 = _co.openedSubject;
        var currVal_2 = _co.Color;
        var currVal_3 = _co.HoverColor;
        var currVal_4 = _co.ButtonBgColor;
        var currVal_5 = _co.ButtonHoverBgColor;
        var currVal_6 = _co.FontColor;

        _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
      }, null);
    }

    function View_AppComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "lcu-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["OverlayContainer"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("lcu-root", _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/app.component.scss.shim.ngstyle.js":
  /*!****************************************************!*\
    !*** ./src/app/app.component.scss.shim.ngstyle.js ***!
    \****************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppAppComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIn0= */"];
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _utils_constants_navigation_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./utils/constants/navigation.constants */
    "./src/app/utils/constants/navigation.constants.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(router, activatedRoute, overlayContainer) {
        _classCallCheck(this, AppComponent);

        this.router = router;
        this.activatedRoute = activatedRoute;
        this.overlayContainer = overlayContainer;
        this.Items = new Array();
        this.openedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.Color = 'black';
        this.HoverColor = '#FF9849';
        this.ButtonBgColor = 'white';
        this.ButtonHoverBgColor = 'red'; //'#f4f4f3'

        this.FontColor = '#8b868d';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.Items = _utils_constants_navigation_constants__WEBPACK_IMPORTED_MODULE_0__["NavigationConstants"].MENU_ITEMS;
        }
      }, {
        key: "toggleSide",
        value: function toggleSide() {
          this.openedSubject.next(false);
        }
      }, {
        key: "NavItemClicked",
        value: function NavItemClicked(item) {
          console.log(item);
        }
      }]);

      return AppComponent;
    }();
    /***/

  },

  /***/
  "./src/app/app.module.ngfactory.js":
  /*!*****************************************!*\
    !*** ./src/app/app.module.ngfactory.js ***!
    \*****************************************/

  /*! exports provided: AppModuleNgFactory */

  /***/
  function srcAppAppModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModuleNgFactory", function () {
      return AppModuleNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/router/router.ngfactory */
    "../../node_modules/@angular/router/router.ngfactory.js");
    /* harmony import */


    var _node_modules_angular_material_dialog_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/material/dialog/index.ngfactory */
    "../../node_modules/@angular/material/dialog/index.ngfactory.js");
    /* harmony import */


    var _node_modules_angular_material_datepicker_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/material/datepicker/index.ngfactory */
    "../../node_modules/@angular/material/datepicker/index.ngfactory.js");
    /* harmony import */


    var _node_modules_angular_material_tooltip_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/material/tooltip/index.ngfactory */
    "../../node_modules/@angular/material/tooltip/index.ngfactory.js");
    /* harmony import */


    var _node_modules_angular_material_snack_bar_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/material/snack-bar/index.ngfactory */
    "../../node_modules/@angular/material/snack-bar/index.ngfactory.js");
    /* harmony import */


    var _common_src_lib_controls_side_nav_side_nav_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../common/src/lib/controls/side-nav/side-nav.component.ngfactory */
    "../common/src/lib/controls/side-nav/side-nav.component.ngfactory.js");
    /* harmony import */


    var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app.component.ngfactory */
    "./src/app/app.component.ngfactory.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/animations/browser */
    "../../node_modules/@angular/animations/fesm2015/browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "../../node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/animations */
    "../../node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/flex-layout/core */
    "../../node_modules/@angular/flex-layout/esm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/common/http */
    "../../node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "../../node_modules/@angular/cdk/fesm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "../../node_modules/@angular/cdk/fesm2015/bidi.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "../../node_modules/@angular/material/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/cdk/observers */
    "../../node_modules/@angular/cdk/fesm2015/observers.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/core */
    "../../node_modules/@angular/material/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/dialog */
    "../../node_modules/@angular/material/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "../../node_modules/@angular/material/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/menu */
    "../../node_modules/@angular/material/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/select */
    "../../node_modules/@angular/material/fesm2015/select.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "../../node_modules/@angular/material/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/paginator */
    "../../node_modules/@angular/material/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/sort */
    "../../node_modules/@angular/material/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/stepper */
    "../../node_modules/@angular/material/fesm2015/stepper.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "../../node_modules/@angular/cdk/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "../../node_modules/@angular/cdk/fesm2015/platform.js");
    /* harmony import */


    var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/cdk/tree */
    "../../node_modules/@angular/cdk/fesm2015/tree.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "../../node_modules/@angular/cdk/fesm2015/drag-drop.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "../../node_modules/@angular/cdk/fesm2015/scrolling.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "../../node_modules/@angular/flex-layout/esm2015/flex.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "../../node_modules/@angular/flex-layout/esm2015/extended.js");
    /* harmony import */


    var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! @angular/flex-layout/grid */
    "../../node_modules/@angular/flex-layout/esm2015/grid.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! @angular/flex-layout */
    "../../node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _lcu_common__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! @lcu/common */
    "../../node_modules/@lcu/common/fesm2015/lcu-common.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "../../node_modules/@angular/cdk/fesm2015/portal.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! @angular/material/badge */
    "../../node_modules/@angular/material/fesm2015/badge.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/fesm2015/button.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "../../node_modules/@angular/material/fesm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! @angular/material/card */
    "../../node_modules/@angular/material/fesm2015/card.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "../../node_modules/@angular/material/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! @angular/material/chips */
    "../../node_modules/@angular/material/fesm2015/chips.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
    /*! @angular/material/divider */
    "../../node_modules/@angular/material/fesm2015/divider.js");
    /* harmony import */


    var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
    /*! @angular/cdk/accordion */
    "../../node_modules/@angular/cdk/fesm2015/accordion.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
    /*! @angular/material/expansion */
    "../../node_modules/@angular/material/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
    /*! @angular/material/form-field */
    "../../node_modules/@angular/material/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "../../node_modules/@angular/material/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
    /*! @angular/material/icon */
    "../../node_modules/@angular/material/fesm2015/icon.js");
    /* harmony import */


    var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(
    /*! @angular/cdk/text-field */
    "../../node_modules/@angular/cdk/fesm2015/text-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(
    /*! @angular/material/input */
    "../../node_modules/@angular/material/fesm2015/input.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(
    /*! @angular/material/list */
    "../../node_modules/@angular/material/fesm2015/list.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "../../node_modules/@angular/material/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "../../node_modules/@angular/material/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(
    /*! @angular/material/radio */
    "../../node_modules/@angular/material/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "../../node_modules/@angular/material/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "../../node_modules/@angular/material/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(
    /*! @angular/material/slider */
    "../../node_modules/@angular/material/fesm2015/slider.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "../../node_modules/@angular/material/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(
    /*! @angular/cdk/stepper */
    "../../node_modules/@angular/cdk/fesm2015/stepper.js");
    /* harmony import */


    var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(
    /*! @angular/cdk/table */
    "../../node_modules/@angular/cdk/fesm2015/table.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(
    /*! @angular/material/table */
    "../../node_modules/@angular/material/fesm2015/table.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(
    /*! @angular/material/tabs */
    "../../node_modules/@angular/material/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "../../node_modules/@angular/material/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_tree__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(
    /*! @angular/material/tree */
    "../../node_modules/@angular/material/fesm2015/tree.js");
    /* harmony import */


    var _common_src_lib_lcu_hamburger_menu_side_nav_module__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(
    /*! ../../../common/src/lib/lcu-hamburger-menu-side-nav.module */
    "../common/src/lib/lcu-hamburger-menu-side-nav.module.ts");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "../../node_modules/@angular/cdk/fesm2015/keycodes.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var AppModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_router_router_lNgFactory"], _node_modules_angular_material_dialog_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["MatDialogContainerNgFactory"], _node_modules_angular_material_datepicker_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerContentNgFactory"], _node_modules_angular_material_datepicker_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["MatCalendarHeaderNgFactory"], _node_modules_angular_material_tooltip_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["TooltipComponentNgFactory"], _node_modules_angular_material_snack_bar_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarContainerNgFactory"], _node_modules_angular_material_snack_bar_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["SimpleSnackBarNgFactory"], _common_src_lib_controls_side_nav_side_nav_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["SideNavComponentNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_r"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_x"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_t"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_g"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_p"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_q"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵDomSanitizerImpl"], [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["HAMMER_GESTURE_CONFIG"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["HammerGestureConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3) {
        return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3)];
      }, [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵDomSharedStylesHost"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_12__["AnimationDriver"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_platform_browser_animations_animations_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_12__["ɵAnimationStyleNormalizer"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_platform_browser_animations_animations_b"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_12__["ɵAnimationEngine"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["ɵInjectableAnimationEngine"], [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_12__["AnimationDriver"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_12__["ɵAnimationStyleNormalizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_platform_browser_animations_animations_c"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵDomRendererFactory2"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_12__["ɵAnimationEngine"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵSharedStylesHost"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations__WEBPACK_IMPORTED_MODULE_14__["AnimationBuilder"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["ɵBrowserAnimationBuilder"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_g"], [_angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_15__["NoPreloading"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["NoPreloading"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_router__WEBPACK_IMPORTED_MODULE_15__["PreloadingStrategy"], null, [_angular_router__WEBPACK_IMPORTED_MODULE_15__["NoPreloading"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterPreloader"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterPreloader"], [_angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["PreloadingStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_15__["PreloadAllModules"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["PreloadAllModules"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_o"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_c"], [_angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["ViewportScroller"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_j"], [_angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0, p1_0, p1_1) {
        return [p0_0, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_16__["removeStyles"](p1_0, p1_1)];
      }, [_angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTER_INITIALIZER"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HTTP_INTERCEPTORS"], function (p0_0) {
        return [p0_0];
      }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_18__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__["ɵangular_material_src_cdk_overlay_overlay_c"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__["ɵangular_material_src_cdk_overlay_overlay_d"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__["MAT_AUTOCOMPLETE_SCROLL_STRATEGY"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__["MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_22__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_22__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["ErrorStateMatcher"], _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["ErrorStateMatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MAT_DIALOG_SCROLL_STRATEGY"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialog"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialog"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"]], [2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MAT_DIALOG_DEFAULT_OPTIONS"]], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MAT_DIALOG_SCROLL_STRATEGY"], [3, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialog"]], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__["OverlayContainer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__["MatDatepickerIntl"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__["MatDatepickerIntl"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__["MAT_DATEPICKER_SCROLL_STRATEGY"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__["MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MAT_MENU_SCROLL_STRATEGY"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["ɵangular_material_src_material_menu_menu_b"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_select__WEBPACK_IMPORTED_MODULE_27__["MAT_SELECT_SCROLL_STRATEGY"], _angular_material_select__WEBPACK_IMPORTED_MODULE_27__["MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__["MAT_TOOLTIP_SCROLL_STRATEGY"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__["MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__["MatPaginatorIntl"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__["MAT_PAGINATOR_INTL_PROVIDER_FACTORY"], [[3, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__["MatPaginatorIntl"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_sort__WEBPACK_IMPORTED_MODULE_30__["MatSortHeaderIntl"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_30__["MAT_SORT_HEADER_INTL_PROVIDER_FACTORY"], [[3, _angular_material_sort__WEBPACK_IMPORTED_MODULE_30__["MatSortHeaderIntl"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_31__["MatStepperIntl"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_31__["MAT_STEPPER_INTL_PROVIDER_FACTORY"], [[3, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_31__["MatStepperIntl"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_32__["FocusMonitor"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_32__["FocusMonitor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_33__["Platform"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_34__["CdkTreeNodeDef"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_34__["CdkTreeNodeDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_35__["DragDrop"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_35__["DragDrop"], [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_36__["ViewportRuler"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_35__["DragDropRegistry"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_platform_browser_platform_browser_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"], function () {
        return [_angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_b"]()];
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_h"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_h"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0, p1_0) {
        return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_platform_browser_platform_browser_m"](p0_0), _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_i"](p1_0)];
      }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_a"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_e"], [[3, _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_15__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["DefaultUrlSerializer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ChildrenOutletContexts"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ChildrenOutletContexts"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTER_CONFIGURATION"], {}, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_common__WEBPACK_IMPORTED_MODULE_10__["LocationStrategy"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_d"], [_angular_common__WEBPACK_IMPORTED_MODULE_10__["PlatformLocation"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_10__["APP_BASE_HREF"]], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"], [_angular_common__WEBPACK_IMPORTED_MODULE_10__["LocationStrategy"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["PlatformLocation"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoader"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoaderConfig"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTES"], function () {
        return [[{
          path: "",
          redirectTo: "landingPage",
          pathMatch: "full"
        }]];
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_f"], [_angular_router__WEBPACK_IMPORTED_MODULE_15__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ChildrenOutletContexts"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTES"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTER_CONFIGURATION"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_15__["UrlHandlingStrategy"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouteReuseStrategy"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_routing_module__WEBPACK_IMPORTED_MODULE_37__["AppRoutingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_37__["AppRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_16__["CoreModule"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_16__["CoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_38__["FlexModule"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_38__["FlexModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_39__["ExtendedModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_39__["ExtendedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_40__["GridModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_40__["GridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_41__["FlexLayoutModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_41__["FlexLayoutModule"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_16__["SERVER_TOKEN"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _lcu_common__WEBPACK_IMPORTED_MODULE_42__["FathymSharedModule"], _lcu_common__WEBPACK_IMPORTED_MODULE_42__["FathymSharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_32__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MATERIAL_SANITY_CHECKS"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_33__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_33__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatPseudoCheckboxModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatPseudoCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatOptionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_43__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_43__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_36__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_36__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__["MatAutocompleteModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__["MatAutocompleteModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_22__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_22__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_32__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_32__["A11yModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_32__["HighContrastModeDetector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_badge__WEBPACK_IMPORTED_MODULE_44__["MatBadgeModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_44__["MatBadgeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_45__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_45__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_46__["MatButtonToggleModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_46__["MatButtonToggleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_card__WEBPACK_IMPORTED_MODULE_47__["MatCardModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_47__["MatCardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_48__["_MatCheckboxRequiredValidatorModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_48__["_MatCheckboxRequiredValidatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_48__["MatCheckboxModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_48__["MatCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_chips__WEBPACK_IMPORTED_MODULE_49__["MatChipsModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_49__["MatChipsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__["MatDatepickerModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__["MatDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_divider__WEBPACK_IMPORTED_MODULE_50__["MatDividerModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_50__["MatDividerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_51__["CdkAccordionModule"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_51__["CdkAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_52__["MatExpansionModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_52__["MatExpansionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_53__["MatFormFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_53__["MatFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatLineModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_54__["MatGridListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_54__["MatGridListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_55__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_55__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_56__["TextFieldModule"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_56__["TextFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_input__WEBPACK_IMPORTED_MODULE_57__["MatInputModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_57__["MatInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_list__WEBPACK_IMPORTED_MODULE_58__["MatListModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_58__["MatListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["_MatMenuDirectivesModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["_MatMenuDirectivesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_select__WEBPACK_IMPORTED_MODULE_27__["MatSelectModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_27__["MatSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__["MatTooltipModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__["MatTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__["MatPaginatorModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__["MatPaginatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_59__["MatProgressBarModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_59__["MatProgressBarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_60__["MatProgressSpinnerModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_60__["MatProgressSpinnerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_radio__WEBPACK_IMPORTED_MODULE_61__["MatRadioModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_61__["MatRadioModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_62__["MatSidenavModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_62__["MatSidenavModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_63__["_MatSlideToggleRequiredValidatorModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_63__["_MatSlideToggleRequiredValidatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_63__["MatSlideToggleModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_63__["MatSlideToggleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_slider__WEBPACK_IMPORTED_MODULE_64__["MatSliderModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_64__["MatSliderModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_65__["MatSnackBarModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_65__["MatSnackBarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_sort__WEBPACK_IMPORTED_MODULE_30__["MatSortModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_30__["MatSortModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_66__["CdkStepperModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_66__["CdkStepperModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_31__["MatStepperModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_31__["MatStepperModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_67__["CdkTableModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_67__["CdkTableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_table__WEBPACK_IMPORTED_MODULE_68__["MatTableModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_68__["MatTableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_69__["MatTabsModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_69__["MatTabsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_70__["MatToolbarModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_70__["MatToolbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_34__["CdkTreeModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_34__["CdkTreeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_tree__WEBPACK_IMPORTED_MODULE_71__["MatTreeModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_71__["MatTreeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_35__["DragDropModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_35__["DragDropModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _lcu_common__WEBPACK_IMPORTED_MODULE_42__["MaterialModule"], _lcu_common__WEBPACK_IMPORTED_MODULE_42__["MaterialModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_src_lib_lcu_hamburger_menu_side_nav_module__WEBPACK_IMPORTED_MODULE_72__["LcuHamburgerMenuSideNavModule"], _common_src_lib_lcu_hamburger_menu_side_nav_module__WEBPACK_IMPORTED_MODULE_72__["LcuHamburgerMenuSideNavModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_CURRENCY_CODE"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_u"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵINJECTOR_SCOPE"], "root", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["ANIMATION_MODULE_TYPE"], "BrowserAnimations", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_material_chips__WEBPACK_IMPORTED_MODULE_49__["MAT_CHIPS_DEFAULT_OPTIONS"], {
        separatorKeyCodes: [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_73__["ENTER"]]
      }, [])]);
    });
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };
    /***/

  },

  /***/
  "./src/app/utils/constants/navigation.constants.ts":
  /*!*********************************************************!*\
    !*** ./src/app/utils/constants/navigation.constants.ts ***!
    \*********************************************************/

  /*! exports provided: NavigationConstants */

  /***/
  function srcAppUtilsConstantsNavigationConstantsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationConstants", function () {
      return NavigationConstants;
    }); // @dynamic

    /**
     * @dynamic is used because this class contains static properties
     *
     * Used to build the items in the navigation menu
     */


    var NavigationConstants = function NavigationConstants() {
      _classCallCheck(this, NavigationConstants);
    };

    NavigationConstants.MENU_ITEMS = [{
      Label: 'Maps',
      Url: '/landingPage',
      Disabled: 'false',
      Icon: 'map'
    }, {
      Label: 'Iteneraries',
      Url: '',
      Disabled: 'false',
      Icon: 'public'
    }, {
      Label: 'Top Lists',
      Url: 'www',
      Disabled: 'true',
      Icon: 'sort'
    }, {
      Label: 'Albums',
      Url: 'www',
      Disabled: 'true',
      Icon: 'photo_library'
    }, {
      Label: 'Friends',
      Url: 'www',
      Disabled: 'true',
      Icon: 'photo_library'
    }, {
      Label: 'Profile',
      Url: 'www',
      Disabled: 'true',
      Icon: 'person'
    }];
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module.ngfactory */
    "./src/app/app.module.ngfactory.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModuleFactory(_app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__["AppModuleNgFactory"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\GeorgeHatch\source\repos\lowcodeunit\lcu-hamburger-menu-side-nav\projects\demo\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
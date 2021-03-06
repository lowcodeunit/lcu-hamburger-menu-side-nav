(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/material/sidenav'), require('@angular/cdk/layout'), require('rxjs'), require('rxjs/operators'), require('@angular/flex-layout'), require('@lcu/common'), require('@angular/material/icon')) :
    typeof define === 'function' && define.amd ? define('@lowcodeunit/lcu-hamburger-menu-side-nav-common', ['exports', '@angular/core', '@angular/common', '@angular/material/sidenav', '@angular/cdk/layout', 'rxjs', 'rxjs/operators', '@angular/flex-layout', '@lcu/common', '@angular/material/icon'], factory) :
    (global = global || self, factory((global.lowcodeunit = global.lowcodeunit || {}, global.lowcodeunit['lcu-hamburger-menu-side-nav-common'] = {}), global.ng.core, global.ng.common, global.ng.material.sidenav, global.ng.cdk.layout, global.rxjs, global.rxjs.operators, global.ng['flex-layout'], global.common$1, global.ng.material.icon));
}(this, (function (exports, core, common, sidenav, layout, rxjs, operators, flexLayout, common$1, icon) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var SideNavComponent = /** @class */ (function () {
        // public MenuColor: string;
        function SideNavComponent(breakpointObserver) {
            this.breakpointObserver = breakpointObserver;
            this.isHandset$ = this.breakpointObserver.observe(layout.Breakpoints.Handset)
                .pipe(operators.map(function (result) { return result.matches; }));
            this.NavItemClicked = new core.EventEmitter();
            this.openedSubject = new rxjs.Subject();
            this.MatContentWidth = "50px";
            this.MatContentHeight = "40px";
            this.MatContainerWidth = "50px";
            this.isDisabled = true;
        }
        SideNavComponent.prototype.ngOnInit = function () {
            this.setDefaultStyles();
        };
        SideNavComponent.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.openedSubject.subscribe(function (result) {
                _this.sidenav[result ? 'open' : 'close']();
                _this.setStyles();
            });
        };
        SideNavComponent.prototype.ButtonClicked = function (button) {
            this.NavItemClicked.emit(button);
        };
        SideNavComponent.prototype.toggleDrawer = function () {
            this.openedSubject.next(!this.sidenav.opened);
            if (!this.sidenav.opened) {
                this.MatContentWidth = "50px";
                this.MatContainerWidth = "50px";
                this.MatContentHeight = "40px";
                // console.log("sidenav closed", this.MatContentWidth);
            }
            else {
                this.MatContentWidth = "0px";
                this.MatContentHeight = "94vh"; //94vh
                this.MatContainerWidth = "230px";
                // console.log("sidenav open", this.MatContentWidth);
            }
        };
        SideNavComponent.prototype.OnHover = function () {
            this.MenuBGColor = this.HoverMenuColor;
        };
        SideNavComponent.prototype.OnButtonHover = function () {
            // this.ButtonBGColor = this.ButtonBackgroundColorHover;
            this.ButtonHover = true;
        };
        SideNavComponent.prototype.LeaveHover = function () {
            this.MenuBGColor = this.MenuColor;
        };
        SideNavComponent.prototype.LeaveButtonHover = function () {
            // this.ButtonBGColor = this.ButtonBackgroundColor;
            this.ButtonHover = false;
        };
        // public setButtonStyles() {
        //   let styles = {
        //     'background-color': this.ButtonHover ? this.ButtonBackgroundColorHover : this.ButtonBackgroundColor
        //   };
        //   return styles;
        // }
        SideNavComponent.prototype.setStyles = function () {
            this.MatContentWidth = "50px";
            this.MatContainerWidth = "50px";
            this.MatContentHeight = "40px";
        };
        SideNavComponent.prototype.setDefaultStyles = function () {
            this.setStyles();
            if (!this.FontColor) {
                this.FontColor = 'black';
            }
            if (!this.FontFamily) {
                this.FontFamily = "'Montserrat', sans-serif";
            }
            if (!this.FontWeight) {
                this.FontWeight = "bold";
            }
            if (!this.FontSize) {
                this.FontSize = "20px";
            }
            if (!this.ButtonBackgroundColorHover) {
                this.ButtonBackgroundColorHover = "grey"; //#96957
            }
            if (!this.ButtonBackgroundColor) {
                this.ButtonBackgroundColor = "white"; //#96957
            }
            if (!this.ButtonBorder) {
                this.ButtonBorder = "none";
            }
            if (!this.ButtonTextPadding) {
                this.ButtonTextPadding = "0px 0px 0px 29px";
            }
            if (!this.MenuColor) {
                this.MenuBGColor = 'black';
            }
            this.MenuBGColor = this.MenuColor;
            if (!this.HoverMenuColor) {
                this.HoverMenuColor = 'grey';
            }
        };
        SideNavComponent.ctorParameters = function () { return [
            { type: layout.BreakpointObserver }
        ]; };
        __decorate([
            core.Output('nav-item-clicked'),
            __metadata("design:type", core.EventEmitter)
        ], SideNavComponent.prototype, "NavItemClicked", void 0);
        __decorate([
            core.Input('menu-items'),
            __metadata("design:type", Array)
        ], SideNavComponent.prototype, "MenuItems", void 0);
        __decorate([
            core.Input('opened-subject'),
            __metadata("design:type", rxjs.Subject)
        ], SideNavComponent.prototype, "openedSubject", void 0);
        __decorate([
            core.Input('font-family'),
            __metadata("design:type", String)
        ], SideNavComponent.prototype, "FontFamily", void 0);
        __decorate([
            core.Input('font-weight'),
            __metadata("design:type", String)
        ], SideNavComponent.prototype, "FontWeight", void 0);
        __decorate([
            core.Input('font-size'),
            __metadata("design:type", String)
        ], SideNavComponent.prototype, "FontSize", void 0);
        __decorate([
            core.Input('menu-color'),
            __metadata("design:type", String)
        ], SideNavComponent.prototype, "MenuColor", void 0);
        __decorate([
            core.Input('hover-menu-color'),
            __metadata("design:type", String)
        ], SideNavComponent.prototype, "HoverMenuColor", void 0);
        __decorate([
            core.Input('mat-content-width'),
            __metadata("design:type", String)
        ], SideNavComponent.prototype, "MatContentWidth", void 0);
        __decorate([
            core.Input('mat-content-height'),
            __metadata("design:type", String)
        ], SideNavComponent.prototype, "MatContentHeight", void 0);
        __decorate([
            core.Input('mat-container-width'),
            __metadata("design:type", String)
        ], SideNavComponent.prototype, "MatContainerWidth", void 0);
        __decorate([
            core.Input('button-border'),
            __metadata("design:type", String)
        ], SideNavComponent.prototype, "ButtonBorder", void 0);
        __decorate([
            core.Input('button-background-color'),
            __metadata("design:type", String)
        ], SideNavComponent.prototype, "ButtonBackgroundColor", void 0);
        __decorate([
            core.Input('button-background-color-hover'),
            __metadata("design:type", String)
        ], SideNavComponent.prototype, "ButtonBackgroundColorHover", void 0);
        __decorate([
            core.Input('button-text-padding'),
            __metadata("design:type", String)
        ], SideNavComponent.prototype, "ButtonTextPadding", void 0);
        __decorate([
            core.Input('font-color'),
            __metadata("design:type", String)
        ], SideNavComponent.prototype, "FontColor", void 0);
        __decorate([
            core.ViewChild('sidenav', { static: false }),
            __metadata("design:type", sidenav.MatSidenav)
        ], SideNavComponent.prototype, "sidenav", void 0);
        SideNavComponent = __decorate([
            core.Component({
                selector: 'lcu-side-nav',
                template: "<!-- disabled animations on mox request -->\r\n<mat-sidenav-container  class=\"mat-sidenav-container\" [@.disabled]=\"isDisabled\" [hasBackdrop]=\"false\" [ngStyle]=\"{width: MatContainerWidth}\">\r\n  <mat-sidenav-content class=\"mat-sidenav-content\" [ngStyle]=\"{width: MatContentWidth, height: MatContentHeight}\">\r\n    <button  class=\"hamburger-menu\" mat-icon-button (click)=\"toggleDrawer()\" >\r\n      <mat-icon [inline]=\"true\" (mouseover)=\"OnHover()\" (mouseleave)=\"LeaveHover()\"[ngStyle]=\"{'color':MenuBGColor}\" >menu</mat-icon>\r\n    </button>\r\n  </mat-sidenav-content>\r\n  <!-- Builds the hamburger menu from the items in the constants.ts file-->\r\n  <mat-sidenav class=\"side-nav\" #sidenav mode=\"side\" (click)=\"toggleDrawer()\" >\r\n    <button class=\"hamburger-menu\" mat-icon-button>\r\n      <mat-icon [inline]=\"true\" (mouseover)=\"OnHover()\" (mouseleave)=\"LeaveHover()\"[ngStyle]=\"{'color':MenuBGColor}\">menu</mat-icon>\r\n    </button>\r\n    <!--  -->\r\n    <div class=\"button-container\" fxLayout=\"column\" fxLayoutAlign=\"space-between\">\r\n        <!-- [ngStyle]=\"setButtonStyles()\" (mouseover)=\"OnButtonHover()\" (mouseleave)=\"LeaveButtonHover()\" -->\r\n      <button class=\"item-button\" mat-menu-item \r\n        fxLayoutAlign=\"start center\" \r\n        [ngStyle]=\"{'color':FontColor, 'border': ButtonBorder}\"\r\n        *ngFor=\"let item of MenuItems\"\r\n        [disabled]=item.Disabled (click)=\"ButtonClicked(item)\" >\r\n        <div [attr.id]=\"'button-' + item.Label\" fxLayoutAlign=\"start center\" >\r\n        <mat-icon \r\n          class=\"button-icon material-icons material-icons-outlined\" \r\n          *ngIf=\"item.Icon\"\r\n          [ngStyle]=\"{'color':FontColor}\">\r\n          {{ item.Icon }}\r\n        </mat-icon>\r\n        <span class=\"button-title\" \r\n        [ngStyle]=\"{'font-family': FontFamily, \r\n                    'font-weight': FontWeight, \r\n                    'padding': ButtonTextPadding, \r\n                    'font-size': FontSize }\">{{ item.Label }}</span>\r\n      </div>\r\n      <!-- <div class=\"button-border\"></div> -->\r\n      </button>\r\n      \r\n    </div>\r\n    \r\n  </mat-sidenav>\r\n</mat-sidenav-container>",
                styles: [".hamburger-menu{background-color:transparent;border-width:0;outline:0;font-size:30px;margin-left:15px;margin-bottom:2px}.no-animation{-webkit-transition-duration:0s!important;transition-duration:0s!important}.mat-sidenav-container{z-index:2;background-color:transparent}::ng-deep .mat-sidenav-container .mat-drawer-inner-container{z-index:10!important;background-color:transparent!important;overflow:hidden!important}.mat-sidenav-content{background-color:transparent;overflow:hidden}.side-nav{height:100vh;width:230px;background-color:transparent;border-right:transparent;overflow:hidden}.button-container{background-color:transparent;z-index:10;width:100%;border-left:1px solid rgba(0,0,0,.2);border-right:1px solid rgba(0,0,0,.2);box-shadow:1px 2px 1px rgba(0,0,0,.2)}.button-container .item-button{height:40px;width:100%;font-size:20px;outline:0;background-color:#fff}.button-container .item-button .button-icon{padding-left:17px}.button-container .item-button:last-child{border-bottom:none}.button-container .item-button:hover{background-color:#f4f4f3;cursor:pointer}"]
            }),
            __metadata("design:paramtypes", [layout.BreakpointObserver])
        ], SideNavComponent);
        return SideNavComponent;
    }());

    var LcuHamburgerMenuSideNavModule = /** @class */ (function () {
        function LcuHamburgerMenuSideNavModule() {
        }
        LcuHamburgerMenuSideNavModule = __decorate([
            core.NgModule({
                declarations: [SideNavComponent],
                imports: [
                    common.CommonModule,
                    flexLayout.FlexLayoutModule,
                    common$1.FathymSharedModule,
                    common$1.MaterialModule,
                    sidenav.MatSidenavModule,
                    icon.MatIconModule
                ],
                exports: [SideNavComponent],
                entryComponents: [SideNavComponent]
            })
        ], LcuHamburgerMenuSideNavModule);
        return LcuHamburgerMenuSideNavModule;
    }());

    /**
     * Model for naviation link structure
     */
    var NavLinkModel = /** @class */ (function () {
        function NavLinkModel(label, Url, icon, param, disabled) {
            this.Icon = icon;
            this.Label = label;
            this.Url = Url;
            this.Param = param;
            this.Disabled = disabled;
        }
        return NavLinkModel;
    }());

    exports.LcuHamburgerMenuSideNavModule = LcuHamburgerMenuSideNavModule;
    exports.NavLinkModel = NavLinkModel;
    exports.SideNavComponent = SideNavComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=lowcodeunit-lcu-hamburger-menu-side-nav-common.umd.js.map

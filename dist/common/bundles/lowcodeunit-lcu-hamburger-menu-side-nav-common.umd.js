(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/cdk/layout'), require('rxjs/operators'), require('@angular/platform-browser/animations'), require('@angular/flex-layout'), require('@lcu-ide/common'), require('@angular/forms'), require('@angular/material')) :
    typeof define === 'function' && define.amd ? define('@lowcodeunit/lcu-hamburger-menu-side-nav-common', ['exports', '@angular/common', '@angular/core', '@angular/cdk/layout', 'rxjs/operators', '@angular/platform-browser/animations', '@angular/flex-layout', '@lcu-ide/common', '@angular/forms', '@angular/material'], factory) :
    (factory((global.lowcodeunit = global.lowcodeunit || {}, global.lowcodeunit['lcu-hamburger-menu-side-nav-common'] = {}),global.ng.common,global.ng.core,global.ng.cdk.layout,global.rxjs.operators,global.ng.platformBrowser.animations,global.ng['flex-layout'],global.common$1,global.ng.forms,global.ng.material));
}(this, (function (exports,common,core,layout,operators,animations,flexLayout,common$1,forms,material) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SideNavComponent = /** @class */ (function () {
        function SideNavComponent(breakpointObserver) {
            this.breakpointObserver = breakpointObserver;
            this.isHandset$ = this.breakpointObserver.observe(layout.Breakpoints.Handset)
                .pipe(operators.map(( /**
         * @param {?} result
         * @return {?}
         */function (result) { return result.matches; })));
            this.SideOpen = false;
        }
        /**
         * @return {?}
         */
        SideNavComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        /**
         * @return {?}
         */
        SideNavComponent.prototype.toggleDrawer = /**
         * @return {?}
         */
            function () {
                if (this.sidenav.opened) {
                    this.sidenav.close();
                    this.SideOpen = false;
                }
                else {
                    this.sidenav.open();
                    this.SideOpen = true;
                }
            };
        SideNavComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lcu-side-nav',
                        template: "<mat-sidenav-container class=\"mat-sidenav-container\">\r\n  <mat-sidenav-content class=\"mat-sidenav-content\">\r\n      <button *ngIf=\"SideOpen === false\"class=\"hamburger-menu\" mat-icon-button (click)=\"toggleDrawer()\">\r\n        <mat-icon [inline]=\"true\">menu</mat-icon>\r\n      </button>\r\n    </mat-sidenav-content>\r\n      <!-- Builds the hamburger menu from the items in the constants.ts file-->\r\n      <mat-sidenav class=\"side-nav\" #sidenav mode=\"side\"  >\r\n          <button class=\"hamburger-menu\" mat-icon-button (click)=\"toggleDrawer()\">\r\n              <mat-icon [inline]=\"true\">menu</mat-icon>\r\n            </button>\r\n        <div class=\"button-container\" fxLayout=\"column\" fxLayoutAlign=\"space-around\" >\r\n        <button class=\"item-button\"  mat-menu-item  fxLayoutAlign=\"space-around center\"  *ngFor= \"let item of MenuItems\" \r\n          [disabled]= item.Disabled [routerLink]=[item.Url,item.Param]>\r\n          <!-- <mat-icon *ngIf=\"item.Icon\">{{ item.Icon }}</mat-icon> -->\r\n          <span>{{ item.Label }}</span>\r\n        </button>\r\n      </div>\r\n      </mat-sidenav>\r\n</mat-sidenav-container>\r\n\r\n     ",
                        styles: [".hamburger-menu{background-color:transparent;border-width:0;outline:0;font-size:30px}.mat-sidenav-container{width:150px;background-color:transparent}.mat-sidenav-content{height:100vh;background-color:transparent;width:40px}.side-nav{height:100vh;background-color:transparent;border-right:transparent}.button-container{height:50vh;background-color:transparent;z-index:10}.item-button{width:100%;background-color:#f5f5f5}"]
                    }] }
        ];
        /** @nocollapse */
        SideNavComponent.ctorParameters = function () {
            return [
                { type: layout.BreakpointObserver }
            ];
        };
        SideNavComponent.propDecorators = {
            MenuItems: [{ type: core.Input }],
            sidenav: [{ type: core.ViewChild, args: ['sidenav',] }]
        };
        return SideNavComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LcuHamburgerMenuSideNavModule = /** @class */ (function () {
        function LcuHamburgerMenuSideNavModule() {
        }
        LcuHamburgerMenuSideNavModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [SideNavComponent],
                        imports: [
                            common.CommonModule,
                            animations.BrowserAnimationsModule,
                            flexLayout.FlexLayoutModule,
                            common$1.FathymSharedModule,
                            common$1.MaterialModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            material.MatSidenavModule,
                            material.MatIconModule
                        ],
                        exports: [SideNavComponent],
                        entryComponents: [SideNavComponent]
                    },] }
        ];
        return LcuHamburgerMenuSideNavModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Model for naviation link structure
     */
    var /**
     * Model for naviation link structure
     */ NavLinkModel = /** @class */ (function () {
        function NavLinkModel(label, Url, icon, param, disabled) {
            this.Icon = icon;
            this.Label = label;
            this.Url = Url;
            this.Param = param;
            this.Disabled = disabled;
        }
        return NavLinkModel;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.LcuHamburgerMenuSideNavModule = LcuHamburgerMenuSideNavModule;
    exports.SideNavComponent = SideNavComponent;
    exports.NavLinkModel = NavLinkModel;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=lowcodeunit-lcu-hamburger-menu-side-nav-common.umd.js.map
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/cdk/layout'), require('rxjs'), require('rxjs/operators'), require('@angular/flex-layout'), require('@lcu-ide/common'), require('@angular/material')) :
    typeof define === 'function' && define.amd ? define('@lowcodeunit/lcu-hamburger-menu-side-nav-common', ['exports', '@angular/common', '@angular/core', '@angular/cdk/layout', 'rxjs', 'rxjs/operators', '@angular/flex-layout', '@lcu-ide/common', '@angular/material'], factory) :
    (factory((global.lowcodeunit = global.lowcodeunit || {}, global.lowcodeunit['lcu-hamburger-menu-side-nav-common'] = {}),global.ng.common,global.ng.core,global.ng.cdk.layout,global.rxjs,global.rxjs.operators,global.ng['flex-layout'],global.common$1,global.ng.material));
}(this, (function (exports,common,core,layout,rxjs,operators,flexLayout,common$1,material) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SideNavComponent = /** @class */ (function () {
        // @ViewChild('sidenav', { static: true })public sidenav: MatSidenav;
        function SideNavComponent(breakpointObserver) {
            this.breakpointObserver = breakpointObserver;
            this.isHandset$ = this.breakpointObserver.observe(layout.Breakpoints.Handset)
                .pipe(operators.map(( /**
         * @param {?} result
         * @return {?}
         */function (result) { return result.matches; })));
            this.openedSubject = new rxjs.Subject();
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
        SideNavComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.openedSubject.subscribe(( /**
                 * @param {?} keepOpen
                 * @return {?}
                 */function (keepOpen) { return _this.sidenav[keepOpen ? 'open' : 'close'](); }));
            };
        /**
         * @return {?}
         */
        SideNavComponent.prototype.toggleDrawer = /**
         * @return {?}
         */
            function () {
                this.openedSubject.next(!this.sidenav.opened);
            };
        SideNavComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lcu-side-nav',
                        template: "<mat-sidenav-container class=\"mat-sidenav-container\" [hasBackdrop]=\"false\">\r\n  <mat-sidenav-content class=\"mat-sidenav-content\">\r\n      <button  class=\"hamburger-menu\" mat-icon-button (click)=\"toggleDrawer()\">\r\n        <mat-icon [inline]=\"true\">menu</mat-icon>\r\n      </button>\r\n    </mat-sidenav-content>\r\n      <!-- Builds the hamburger menu from the items in the constants.ts file-->\r\n      <mat-sidenav class=\"side-nav\" #sidenav mode=\"side\"  >\r\n        <div class=\"mat-drawer-inner-container\"  (click)=\"toggleDrawer()\" >\r\n          <button class=\"hamburger-menu\" mat-icon-button>\r\n              <mat-icon [inline]=\"true\">menu</mat-icon>\r\n            </button>\r\n            <!--  -->\r\n        <div class=\"button-container\" fxLayout=\"column\" fxLayoutAlign=\"space-between\" >\r\n        <button class=\"item-button\"  mat-menu-item  fxLayoutAlign=\"space-between center\"  *ngFor= \"let item of MenuItems\" \r\n          [disabled]= item.Disabled [routerLink]=[item.Url,item.Param] >\r\n          <!-- <mat-icon *ngIf=\"item.Icon\">{{ item.Icon }}</mat-icon> -->\r\n          <span>{{ item.Label }}</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n      </mat-sidenav>\r\n</mat-sidenav-container>\r\n\r\n     ",
                        styles: [".hamburger-menu{background-color:transparent;border-width:0;outline:0;font-size:30px}.mat-sidenav-container{width:97.5vw;background-color:transparent;z-index:20}.mat-sidenav-content{height:100vh;background-color:transparent;width:40px}.side-nav{height:100vh;width:100vw;background-color:transparent;border-right:transparent}.button-container{height:75vh;background-color:transparent;z-index:10;width:210px}.item-button{height:40px;width:100%;background-color:#fff;font-size:20px}.item-button:hover{background-color:Grey}"]
                    }] }
        ];
        /** @nocollapse */
        SideNavComponent.ctorParameters = function () {
            return [
                { type: layout.BreakpointObserver }
            ];
        };
        SideNavComponent.propDecorators = {
            MenuItems: [{ type: core.Input, args: ['menu-items',] }],
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
                            flexLayout.FlexLayoutModule,
                            common$1.FathymSharedModule,
                            common$1.MaterialModule,
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
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/cdk/layout'), require('rxjs'), require('rxjs/operators'), require('@angular/material'), require('@angular/flex-layout'), require('@lcu/common')) :
    typeof define === 'function' && define.amd ? define('@lowcodeunit/lcu-hamburger-menu-side-nav-common', ['exports', '@angular/core', '@angular/common', '@angular/cdk/layout', 'rxjs', 'rxjs/operators', '@angular/material', '@angular/flex-layout', '@lcu/common'], factory) :
    (global = global || self, factory((global.lowcodeunit = global.lowcodeunit || {}, global.lowcodeunit['lcu-hamburger-menu-side-nav-common'] = {}), global.ng.core, global.ng.common, global.ng.cdk.layout, global.rxjs, global.rxjs.operators, global.ng.material, global.ng['flex-layout'], global.common$1));
}(this, function (exports, core, common, layout, rxjs, operators, material, flexLayout, common$1) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SideNavComponent = /** @class */ (function () {
        // public MenuColor: string;
        function SideNavComponent(breakpointObserver) {
            this.breakpointObserver = breakpointObserver;
            this.isHandset$ = this.breakpointObserver.observe(layout.Breakpoints.Handset)
                .pipe(operators.map((/**
             * @param {?} result
             * @return {?}
             */
            function (result) { return result.matches; })));
            this.NavItemClicked = new core.EventEmitter();
            this.openedSubject = new rxjs.Subject();
            this.MatContentWidth = "50px";
            this.MatContentHeight = "40px";
            this.MatContainerWidth = "50px";
        }
        /**
         * @return {?}
         */
        SideNavComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.setDefaultStyles();
        };
        /**
         * @return {?}
         */
        SideNavComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.openedSubject.subscribe((/**
             * @param {?} result
             * @return {?}
             */
            function (result) {
                _this.sidenav[result ? 'open' : 'close']();
                _this.setStyles();
            }));
        };
        /**
         * @param {?} button
         * @return {?}
         */
        SideNavComponent.prototype.ButtonClicked = /**
         * @param {?} button
         * @return {?}
         */
        function (button) {
            this.NavItemClicked.emit(button);
        };
        /**
         * @return {?}
         */
        SideNavComponent.prototype.toggleDrawer = /**
         * @return {?}
         */
        function () {
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
        /**
         * @return {?}
         */
        SideNavComponent.prototype.OnHover = /**
         * @return {?}
         */
        function () {
            this.MenuBGColor = this.HoverMenuColor;
        };
        /**
         * @return {?}
         */
        SideNavComponent.prototype.OnButtonHover = /**
         * @return {?}
         */
        function () {
            // this.ButtonBGColor = this.ButtonBackgroundColorHover;
            this.ButtonHover = true;
        };
        /**
         * @return {?}
         */
        SideNavComponent.prototype.LeaveHover = /**
         * @return {?}
         */
        function () {
            this.MenuBGColor = this.MenuColor;
        };
        /**
         * @return {?}
         */
        SideNavComponent.prototype.LeaveButtonHover = /**
         * @return {?}
         */
        function () {
            // this.ButtonBGColor = this.ButtonBackgroundColor;
            this.ButtonHover = false;
        };
        // public setButtonStyles() {
        //   let styles = {
        //     'background-color': this.ButtonHover ? this.ButtonBackgroundColorHover : this.ButtonBackgroundColor
        //   };
        //   return styles;
        // }
        // public setButtonStyles() {
        //   let styles = {
        //     'background-color': this.ButtonHover ? this.ButtonBackgroundColorHover : this.ButtonBackgroundColor
        //   };
        //   return styles;
        // }
        /**
         * @protected
         * @return {?}
         */
        SideNavComponent.prototype.setStyles = 
        // public setButtonStyles() {
        //   let styles = {
        //     'background-color': this.ButtonHover ? this.ButtonBackgroundColorHover : this.ButtonBackgroundColor
        //   };
        //   return styles;
        // }
        /**
         * @protected
         * @return {?}
         */
        function () {
            this.MatContentWidth = "50px";
            this.MatContainerWidth = "50px";
            this.MatContentHeight = "40px";
        };
        /**
         * @protected
         * @return {?}
         */
        SideNavComponent.prototype.setDefaultStyles = /**
         * @protected
         * @return {?}
         */
        function () {
            this.setStyles();
            if (!this.FontColor) {
                this.FontColor = 'black';
            }
            if (!this.ButtonBackgroundColorHover) {
                this.ButtonBackgroundColorHover = "grey"; //#96957
            }
            if (!this.ButtonBackgroundColor) {
                this.ButtonBGColor = "white"; //#96957
            }
            if (!this.MenuColor) {
                this.MenuBGColor = 'black';
            }
            this.MenuBGColor = this.MenuColor;
            if (!this.HoverMenuColor) {
                this.HoverMenuColor = 'grey';
            }
        };
        SideNavComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lcu-side-nav',
                        template: "<mat-sidenav-container  class=\"mat-sidenav-container\" [hasBackdrop]=\"false\" [ngStyle]=\"{width: MatContainerWidth}\">\r\n  <mat-sidenav-content class=\"mat-sidenav-content\" [ngStyle]=\"{width: MatContentWidth, height: MatContentHeight}\">\r\n    <button  class=\"hamburger-menu\" mat-icon-button (click)=\"toggleDrawer()\" >\r\n      <mat-icon [inline]=\"true\" (mouseover)=\"OnHover()\" (mouseleave)=\"LeaveHover()\"[ngStyle]=\"{'color':MenuBGColor}\" >menu</mat-icon>\r\n    </button>\r\n  </mat-sidenav-content>\r\n  <!-- Builds the hamburger menu from the items in the constants.ts file-->\r\n  <mat-sidenav class=\"side-nav\" #sidenav mode=\"side\" (click)=\"toggleDrawer()\">\r\n    <button class=\"hamburger-menu\" mat-icon-button>\r\n      <mat-icon [inline]=\"true\" (mouseover)=\"OnHover()\" (mouseleave)=\"LeaveHover()\"[ngStyle]=\"{'color':MenuBGColor}\">menu</mat-icon>\r\n    </button>\r\n    <!--  -->\r\n    <div class=\"button-container\" fxLayout=\"column\" fxLayoutAlign=\"space-between\">\r\n        <!-- [ngStyle]=\"setButtonStyles()\" (mouseover)=\"OnButtonHover()\" (mouseleave)=\"LeaveButtonHover()\" -->\r\n      <button class=\"item-button\" mat-menu-item fxLayoutAlign=\"start center\" \r\n      [ngStyle]=\"{'color':FontColor}\"\r\n      *ngFor=\"let item of MenuItems\"\r\n        [disabled]=item.Disabled (click)=\"ButtonClicked(item)\" >\r\n        <div [attr.id]=\"'button-' + item.Label\">\r\n        <mat-icon class=\"button-icon\" *ngIf=\"item.Icon\">{{ item.Icon }}</mat-icon>\r\n        <span class=\"button-title\">{{ item.Label }}</span>\r\n\r\n      </div>\r\n      <div class=\"button-border\"></div>\r\n      </button>\r\n      \r\n    </div>\r\n    \r\n  </mat-sidenav>\r\n</mat-sidenav-container>",
                        styles: [".hamburger-menu{background-color:transparent;border-width:0;outline:0;font-size:30px;padding-left:20px}.mat-sidenav-container{z-index:2;background-color:transparent}::ng-deep .mat-sidenav-container .mat-drawer-inner-container{z-index:10!important;background-color:transparent!important;overflow:hidden!important}.mat-sidenav-content{background-color:transparent;overflow:hidden}.side-nav{height:100vh;width:230px;background-color:transparent;border-right:transparent;overflow:hidden}.button-container{background-color:transparent;z-index:10;width:100%}.button-container .item-button{height:40px;width:100%;font-size:20px;border-color:#eaeaea;border-width:1px;border-top:none;border-left:none;border-right:none}.button-container .item-button .button-icon{padding-left:17px}.button-container .item-button .button-title{font-family:Montserrat,sans-serif;padding-left:60px}.button-container .item-button:hover{background-color:#f4f4f3}"]
                    }] }
        ];
        /** @nocollapse */
        SideNavComponent.ctorParameters = function () { return [
            { type: layout.BreakpointObserver }
        ]; };
        SideNavComponent.propDecorators = {
            NavItemClicked: [{ type: core.Output, args: ['nav-item-clicked',] }],
            MenuItems: [{ type: core.Input, args: ['menu-items',] }],
            openedSubject: [{ type: core.Input, args: ['opened-subject',] }],
            MenuColor: [{ type: core.Input, args: ['menu-color',] }],
            HoverMenuColor: [{ type: core.Input, args: ['hover-menu-color',] }],
            MatContentWidth: [{ type: core.Input, args: ['mat-content-width',] }],
            MatContentHeight: [{ type: core.Input, args: ['mat-content-height',] }],
            MatContainerWidth: [{ type: core.Input, args: ['mat-container-width',] }],
            ButtonBackgroundColor: [{ type: core.Input, args: ['button-background-color',] }],
            ButtonBackgroundColorHover: [{ type: core.Input, args: ['button-background-color-hover',] }],
            FontColor: [{ type: core.Input, args: ['font-color',] }],
            sidenav: [{ type: core.ViewChild, args: ['sidenav', { static: false },] }]
        };
        return SideNavComponent;
    }());
    if (false) {
        /** @type {?} */
        SideNavComponent.prototype.isHandset$;
        /**
         * @type {?}
         * @protected
         */
        SideNavComponent.prototype._navLinks;
        /** @type {?} */
        SideNavComponent.prototype.NavItemClicked;
        /** @type {?} */
        SideNavComponent.prototype.MenuItems;
        /** @type {?} */
        SideNavComponent.prototype.openedSubject;
        /** @type {?} */
        SideNavComponent.prototype.MenuColor;
        /** @type {?} */
        SideNavComponent.prototype.HoverMenuColor;
        /** @type {?} */
        SideNavComponent.prototype.MatContentWidth;
        /** @type {?} */
        SideNavComponent.prototype.MatContentHeight;
        /** @type {?} */
        SideNavComponent.prototype.MatContainerWidth;
        /** @type {?} */
        SideNavComponent.prototype.ButtonBackgroundColor;
        /** @type {?} */
        SideNavComponent.prototype.ButtonBackgroundColorHover;
        /** @type {?} */
        SideNavComponent.prototype.FontColor;
        /** @type {?} */
        SideNavComponent.prototype.MenuBGColor;
        /** @type {?} */
        SideNavComponent.prototype.ButtonBGColor;
        /** @type {?} */
        SideNavComponent.prototype.ButtonHover;
        /** @type {?} */
        SideNavComponent.prototype.sidenav;
        /**
         * @type {?}
         * @protected
         */
        SideNavComponent.prototype.breakpointObserver;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Model for naviation link structure
     */
    var   /**
     * Model for naviation link structure
     */
    NavLinkModel = /** @class */ (function () {
        function NavLinkModel(label, Url, icon, param, disabled) {
            this.Icon = icon;
            this.Label = label;
            this.Url = Url;
            this.Param = param;
            this.Disabled = disabled;
        }
        return NavLinkModel;
    }());
    if (false) {
        /**
         * Menu icon
         * @type {?}
         */
        NavLinkModel.prototype.Icon;
        /**
         * Menu label
         * @type {?}
         */
        NavLinkModel.prototype.Label;
        /**
         * Menu parameter
         * @type {?}
         */
        NavLinkModel.prototype.Param;
        /**
         * Navigation URL
         * @type {?}
         */
        NavLinkModel.prototype.Url;
        /**
         * String value true or false, whether or not to grey out the button
         * @type {?}
         */
        NavLinkModel.prototype.Disabled;
    }

    exports.LcuHamburgerMenuSideNavModule = LcuHamburgerMenuSideNavModule;
    exports.NavLinkModel = NavLinkModel;
    exports.SideNavComponent = SideNavComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=lowcodeunit-lcu-hamburger-menu-side-nav-common.umd.js.map

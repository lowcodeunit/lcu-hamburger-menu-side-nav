import { Component, Input, ViewChild, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatSidenavModule, MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FathymSharedModule, MaterialModule } from '@lcu/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SideNavComponent = /** @class */ (function () {
    function SideNavComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
            .pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return result.matches; })));
        this.openedSubject = new Subject();
        this.MatContentWidth = "40px";
        this.MatContentHeight = "40px";
        this.MatContainerWidth = "40px";
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
     * @return {?}
     */
    SideNavComponent.prototype.toggleDrawer = /**
     * @return {?}
     */
    function () {
        this.openedSubject.next(!this.sidenav.opened);
        if (!this.sidenav.opened) {
            this.MatContentWidth = "40px";
            this.MatContainerWidth = "40px";
            this.MatContentHeight = "40px";
            // console.log("sidenav closed", this.MatContentWidth);
        }
        else {
            this.MatContentWidth = "0px";
            this.MatContentHeight = "94vh"; //94vh
            this.MatContainerWidth = "210px";
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
        this.MenuColor = this.HoverColor;
    };
    /**
     * @return {?}
     */
    SideNavComponent.prototype.LeaveHover = /**
     * @return {?}
     */
    function () {
        this.MenuColor = this.Color;
    };
    /**
     * @protected
     * @return {?}
     */
    SideNavComponent.prototype.setStyles = /**
     * @protected
     * @return {?}
     */
    function () {
        this.MatContentWidth = "40px";
        this.MatContainerWidth = "40px";
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
        if (!this.Color) {
            this.Color = 'black';
        }
        this.MenuColor = this.Color;
        if (!this.HoverColor) {
            this.HoverColor = 'grey';
        }
    };
    SideNavComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lcu-side-nav',
                    template: "<mat-sidenav-container  class=\"mat-sidenav-container\" [hasBackdrop]=\"false\" [ngStyle]=\"{width: MatContainerWidth}\">\r\n  <mat-sidenav-content class=\"mat-sidenav-content\" [ngStyle]=\"{width: MatContentWidth, height: MatContentHeight}\">\r\n    <button  class=\"hamburger-menu\" mat-icon-button (click)=\"toggleDrawer()\" >\r\n      <mat-icon [inline]=\"true\" (mouseover)=\"OnHover()\" (mouseleave)=\"LeaveHover()\"[ngStyle]=\"{'color':MenuColor}\" >menu</mat-icon>\r\n    </button>\r\n  </mat-sidenav-content>\r\n  <!-- Builds the hamburger menu from the items in the constants.ts file-->\r\n  <mat-sidenav class=\"side-nav\" #sidenav mode=\"side\" (click)=\"toggleDrawer()\">\r\n    <button class=\"hamburger-menu\" mat-icon-button>\r\n      <mat-icon [inline]=\"true\" (mouseover)=\"OnHover()\" (mouseleave)=\"LeaveHover()\"[ngStyle]=\"{'color':MenuColor}\">menu</mat-icon>\r\n    </button>\r\n    <!--  -->\r\n    <div class=\"button-container\" fxLayout=\"column\" fxLayoutAlign=\"space-between\">\r\n      <button class=\"item-button\" mat-menu-item fxLayoutAlign=\"space-between center\" *ngFor=\"let item of MenuItems\"\r\n        [disabled]=item.Disabled [routerLink]=[item.Url,item.Param]>\r\n        <!-- <mat-icon *ngIf=\"item.Icon\">{{ item.Icon }}</mat-icon> -->\r\n        <span>{{ item.Label }}</span>\r\n      </button>\r\n    </div>\r\n    \r\n  </mat-sidenav>\r\n</mat-sidenav-container>",
                    styles: [".hamburger-menu{background-color:transparent;border-width:0;outline:0;font-size:30px}.mat-sidenav-container{z-index:2;background-color:transparent}::ng-deep .mat-sidenav-container .mat-drawer-inner-container{z-index:10!important;background-color:transparent!important;overflow:hidden!important}.mat-sidenav-content{background-color:transparent;overflow:hidden}.side-nav{height:100vh;width:210px;background-color:transparent;border-right:transparent;overflow:hidden}.button-container{height:81.5%;background-color:transparent;z-index:10;width:100%}.button-container .item-button{height:40px;width:100%;background-color:#fff;font-size:20px}.button-container .item-button:hover{background-color:Grey}"]
                }] }
    ];
    /** @nocollapse */
    SideNavComponent.ctorParameters = function () { return [
        { type: BreakpointObserver }
    ]; };
    SideNavComponent.propDecorators = {
        MenuItems: [{ type: Input, args: ['menu-items',] }],
        openedSubject: [{ type: Input, args: ['opened-subject',] }],
        Color: [{ type: Input, args: ['color',] }],
        HoverColor: [{ type: Input, args: ['hover-color',] }],
        MatContentWidth: [{ type: Input, args: ['mat-content-width',] }],
        MatContentHeight: [{ type: Input, args: ['mat-content-height',] }],
        MatContainerWidth: [{ type: Input, args: ['mat-container-width',] }],
        sidenav: [{ type: ViewChild, args: ['sidenav', { static: false },] }]
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
    SideNavComponent.prototype.MenuItems;
    /** @type {?} */
    SideNavComponent.prototype.openedSubject;
    /** @type {?} */
    SideNavComponent.prototype.Color;
    /** @type {?} */
    SideNavComponent.prototype.HoverColor;
    /** @type {?} */
    SideNavComponent.prototype.MatContentWidth;
    /** @type {?} */
    SideNavComponent.prototype.MatContentHeight;
    /** @type {?} */
    SideNavComponent.prototype.MatContainerWidth;
    /** @type {?} */
    SideNavComponent.prototype.sidenav;
    /** @type {?} */
    SideNavComponent.prototype.MenuColor;
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
        { type: NgModule, args: [{
                    declarations: [SideNavComponent],
                    imports: [
                        CommonModule,
                        FlexLayoutModule,
                        FathymSharedModule,
                        MaterialModule,
                        MatSidenavModule,
                        MatIconModule
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
var  /**
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { LcuHamburgerMenuSideNavModule, NavLinkModel, SideNavComponent };
//# sourceMappingURL=lowcodeunit-lcu-hamburger-menu-side-nav-common.js.map

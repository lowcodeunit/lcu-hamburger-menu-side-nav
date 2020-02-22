import { Component, Input, ViewChild, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { MatSidenavModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FathymSharedModule, MaterialModule } from '@lcu/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/controls/side-nav/side-nav.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SideNavComponent {
    /**
     * @param {?} breakpointObserver
     */
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
            .pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        result => result.matches)));
        this.SideOpen = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    toggleDrawer() {
        if (this.sidenav.opened) {
            this.sidenav.close();
            this.SideOpen = false;
        }
        else {
            this.sidenav.open();
            this.SideOpen = true;
        }
    }
}
SideNavComponent.decorators = [
    { type: Component, args: [{
                selector: 'lcu-side-nav',
                template: "<mat-sidenav-container class=\"mat-sidenav-container\">\r\n  <mat-sidenav-content class=\"mat-sidenav-content\">\r\n      <button *ngIf=\"SideOpen === false\"class=\"hamburger-menu\" mat-icon-button (click)=\"toggleDrawer()\">\r\n        <mat-icon [inline]=\"true\">menu</mat-icon>\r\n      </button>\r\n    </mat-sidenav-content>\r\n      <!-- Builds the hamburger menu from the items in the constants.ts file-->\r\n      <mat-sidenav class=\"side-nav\" #sidenav mode=\"side\"  >\r\n          <button class=\"hamburger-menu\" mat-icon-button (click)=\"toggleDrawer()\">\r\n              <mat-icon [inline]=\"true\">menu</mat-icon>\r\n            </button>\r\n        <div class=\"button-container\" fxLayout=\"column\" fxLayoutAlign=\"space-around\" >\r\n        <button class=\"item-button\"  mat-menu-item  fxLayoutAlign=\"space-around center\"  *ngFor= \"let item of MenuItems\" \r\n          [disabled]= item.Disabled [routerLink]=[item.Url,item.Param]>\r\n          <!-- <mat-icon *ngIf=\"item.Icon\">{{ item.Icon }}</mat-icon> -->\r\n          <span>{{ item.Label }}</span>\r\n        </button>\r\n      </div>\r\n      </mat-sidenav>\r\n</mat-sidenav-container>\r\n\r\n     ",
                styles: [".hamburger-menu{background-color:transparent;border-width:0;outline:0;font-size:30px}.mat-sidenav-container{width:150px;background-color:transparent}.mat-sidenav-content{height:100vh;background-color:transparent;width:40px}.side-nav{height:100vh;background-color:transparent;border-right:transparent}.button-container{height:50vh;background-color:transparent;z-index:10}.item-button{width:100%;background-color:#f5f5f5}"]
            }] }
];
/** @nocollapse */
SideNavComponent.ctorParameters = () => [
    { type: BreakpointObserver }
];
SideNavComponent.propDecorators = {
    MenuItems: [{ type: Input }],
    sidenav: [{ type: ViewChild, args: ['sidenav', { static: false },] }]
};
if (false) {
    /** @type {?} */
    SideNavComponent.prototype.isHandset$;
    /**
     * @type {?}
     * @protected
     */
    SideNavComponent.prototype._navLinks;
    /** @type {?} */
    SideNavComponent.prototype.SideOpen;
    /** @type {?} */
    SideNavComponent.prototype.MenuItems;
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
 * Generated from: lib/lcu-hamburger-menu-side-nav.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LcuHamburgerMenuSideNavModule {
}
LcuHamburgerMenuSideNavModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SideNavComponent],
                imports: [
                    CommonModule,
                    BrowserAnimationsModule,
                    FlexLayoutModule,
                    FathymSharedModule,
                    MaterialModule,
                    FormsModule,
                    ReactiveFormsModule,
                    MatSidenavModule,
                    MatIconModule
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/nav-link.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Model for naviation link structure
 */
class NavLinkModel {
    /**
     * @param {?} label
     * @param {?} Url
     * @param {?=} icon
     * @param {?=} param
     * @param {?=} disabled
     */
    constructor(label, Url, icon, param, disabled) {
        this.Icon = icon;
        this.Label = label;
        this.Url = Url;
        this.Param = param;
        this.Disabled = disabled;
    }
}
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
 * Generated from: lcu.api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lowcodeunit-lcu-hamburger-menu-side-nav-common.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { LcuHamburgerMenuSideNavModule, NavLinkModel, SideNavComponent };
//# sourceMappingURL=lowcodeunit-lcu-hamburger-menu-side-nav-common.js.map

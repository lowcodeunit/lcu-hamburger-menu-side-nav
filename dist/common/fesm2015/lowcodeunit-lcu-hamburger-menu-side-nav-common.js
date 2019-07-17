import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild, NgModule } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FathymSharedModule, MaterialModule } from '@lcu-ide/common';
import { MatSidenavModule, MatIconModule } from '@angular/material';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                template: "<mat-sidenav-container class=\"mat-sidenav-container\">\r\n  <mat-sidenav-content class=\"mat-sidenav-content\">\r\n      <button *ngIf=\"SideOpen === false\"class=\"hamburger-menu\" mat-icon-button (click)=\"toggleDrawer()\">\r\n        <mat-icon [inline]=\"true\">menu</mat-icon>\r\n      </button>\r\n    </mat-sidenav-content>\r\n      <!-- Builds the hamburger menu from the items in the constants.ts file-->\r\n      <mat-sidenav class=\"side-nav\" #sidenav mode=\"side\"  >\r\n          <button class=\"hamburger-menu\" mat-icon-button (click)=\"toggleDrawer()\">\r\n              <mat-icon [inline]=\"true\">menu</mat-icon>\r\n            </button>\r\n            <!--  -->\r\n        <div class=\"button-container\" fxLayout=\"column\" fxLayoutAlign=\"space-between\" >\r\n        <button class=\"item-button\"  mat-menu-item  fxLayoutAlign=\"space-between center\"  *ngFor= \"let item of MenuItems\" \r\n          [disabled]= item.Disabled [routerLink]=[item.Url,item.Param]>\r\n          <!-- <mat-icon *ngIf=\"item.Icon\">{{ item.Icon }}</mat-icon> -->\r\n          <span>{{ item.Label }}</span>\r\n        </button>\r\n      </div>\r\n      </mat-sidenav>\r\n</mat-sidenav-container>\r\n\r\n     ",
                styles: [".hamburger-menu{background-color:transparent;border-width:0;outline:0;font-size:30px}.mat-sidenav-container{width:210px;background-color:transparent}.mat-sidenav-content{height:100vh;background-color:transparent;width:40px}.side-nav{height:100vh;background-color:transparent;border-right:transparent}.button-container{height:100vh;background-color:transparent;z-index:10;width:210px}.item-button{width:100%;background-color:#fff;padding:9px;margin-bottom:30px;border-radius:1px;border-color:#000;font-size:20px}.item-button:hover{background-color:Grey}"]
            }] }
];
/** @nocollapse */
SideNavComponent.ctorParameters = () => [
    { type: BreakpointObserver }
];
SideNavComponent.propDecorators = {
    MenuItems: [{ type: Input }],
    sidenav: [{ type: ViewChild, args: ['sidenav',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LcuHamburgerMenuSideNavModule {
}
LcuHamburgerMenuSideNavModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SideNavComponent],
                imports: [
                    CommonModule,
                    // BrowserAnimationsModule,
                    FlexLayoutModule,
                    FathymSharedModule,
                    MaterialModule,
                    // FormsModule,
                    // ReactiveFormsModule,
                    MatSidenavModule,
                    MatIconModule
                ],
                exports: [SideNavComponent],
                entryComponents: [SideNavComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { LcuHamburgerMenuSideNavModule, SideNavComponent, NavLinkModel };

//# sourceMappingURL=lowcodeunit-lcu-hamburger-menu-side-nav-common.js.map
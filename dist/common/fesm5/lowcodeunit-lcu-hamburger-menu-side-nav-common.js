import { __decorate, __metadata } from 'tslib';
import { Input, ViewChild, Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FathymSharedModule, MaterialModule } from '@lcu/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

var SideNavComponent = /** @class */ (function () {
    function SideNavComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
            .pipe(map(function (result) { return result.matches; }));
        this.SideOpen = false;
    }
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
        { type: BreakpointObserver }
    ]; };
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], SideNavComponent.prototype, "MenuItems", void 0);
    __decorate([
        ViewChild('sidenav', { static: false }),
        __metadata("design:type", MatSidenav)
    ], SideNavComponent.prototype, "sidenav", void 0);
    SideNavComponent = __decorate([
        Component({
            selector: 'lcu-side-nav',
            template: "<mat-sidenav-container class=\"mat-sidenav-container\">\r\n  <mat-sidenav-content class=\"mat-sidenav-content\">\r\n      <button *ngIf=\"SideOpen === false\"class=\"hamburger-menu\" mat-icon-button (click)=\"toggleDrawer()\">\r\n        <mat-icon [inline]=\"true\">menu</mat-icon>\r\n      </button>\r\n    </mat-sidenav-content>\r\n      <!-- Builds the hamburger menu from the items in the constants.ts file-->\r\n      <mat-sidenav class=\"side-nav\" #sidenav mode=\"side\"  >\r\n          <button class=\"hamburger-menu\" mat-icon-button (click)=\"toggleDrawer()\">\r\n              <mat-icon [inline]=\"true\">menu</mat-icon>\r\n            </button>\r\n        <div class=\"button-container\" fxLayout=\"column\" fxLayoutAlign=\"space-around\" >\r\n        <button class=\"item-button\"  mat-menu-item  fxLayoutAlign=\"space-around center\"  *ngFor= \"let item of MenuItems\" \r\n          [disabled]= item.Disabled [routerLink]=[item.Url,item.Param]>\r\n          <!-- <mat-icon *ngIf=\"item.Icon\">{{ item.Icon }}</mat-icon> -->\r\n          <span>{{ item.Label }}</span>\r\n        </button>\r\n      </div>\r\n      </mat-sidenav>\r\n</mat-sidenav-container>\r\n\r\n     ",
            styles: [".hamburger-menu{background-color:transparent;border-width:0;outline:0;font-size:30px}.mat-sidenav-container{width:150px;background-color:transparent}.mat-sidenav-content{height:100vh;background-color:transparent;width:40px}.side-nav{height:100vh;background-color:transparent;border-right:transparent}.button-container{height:50vh;background-color:transparent;z-index:10}.item-button{width:100%;background-color:#f5f5f5}"]
        }),
        __metadata("design:paramtypes", [BreakpointObserver])
    ], SideNavComponent);
    return SideNavComponent;
}());

var LcuHamburgerMenuSideNavModule = /** @class */ (function () {
    function LcuHamburgerMenuSideNavModule() {
    }
    LcuHamburgerMenuSideNavModule = __decorate([
        NgModule({
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

/**
 * Generated bundle index. Do not edit.
 */

export { LcuHamburgerMenuSideNavModule, NavLinkModel, SideNavComponent };
//# sourceMappingURL=lowcodeunit-lcu-hamburger-menu-side-nav-common.js.map

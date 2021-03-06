import { __decorate, __metadata } from 'tslib';
import { EventEmitter, Output, Input, ViewChild, Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FathymSharedModule, MaterialModule } from '@lcu/common';
import { MatIconModule } from '@angular/material/icon';

var SideNavComponent = /** @class */ (function () {
    // public MenuColor: string;
    function SideNavComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
            .pipe(map(function (result) { return result.matches; }));
        this.NavItemClicked = new EventEmitter();
        this.openedSubject = new Subject();
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
        { type: BreakpointObserver }
    ]; };
    __decorate([
        Output('nav-item-clicked'),
        __metadata("design:type", EventEmitter)
    ], SideNavComponent.prototype, "NavItemClicked", void 0);
    __decorate([
        Input('menu-items'),
        __metadata("design:type", Array)
    ], SideNavComponent.prototype, "MenuItems", void 0);
    __decorate([
        Input('opened-subject'),
        __metadata("design:type", Subject)
    ], SideNavComponent.prototype, "openedSubject", void 0);
    __decorate([
        Input('font-family'),
        __metadata("design:type", String)
    ], SideNavComponent.prototype, "FontFamily", void 0);
    __decorate([
        Input('font-weight'),
        __metadata("design:type", String)
    ], SideNavComponent.prototype, "FontWeight", void 0);
    __decorate([
        Input('font-size'),
        __metadata("design:type", String)
    ], SideNavComponent.prototype, "FontSize", void 0);
    __decorate([
        Input('menu-color'),
        __metadata("design:type", String)
    ], SideNavComponent.prototype, "MenuColor", void 0);
    __decorate([
        Input('hover-menu-color'),
        __metadata("design:type", String)
    ], SideNavComponent.prototype, "HoverMenuColor", void 0);
    __decorate([
        Input('mat-content-width'),
        __metadata("design:type", String)
    ], SideNavComponent.prototype, "MatContentWidth", void 0);
    __decorate([
        Input('mat-content-height'),
        __metadata("design:type", String)
    ], SideNavComponent.prototype, "MatContentHeight", void 0);
    __decorate([
        Input('mat-container-width'),
        __metadata("design:type", String)
    ], SideNavComponent.prototype, "MatContainerWidth", void 0);
    __decorate([
        Input('button-border'),
        __metadata("design:type", String)
    ], SideNavComponent.prototype, "ButtonBorder", void 0);
    __decorate([
        Input('button-background-color'),
        __metadata("design:type", String)
    ], SideNavComponent.prototype, "ButtonBackgroundColor", void 0);
    __decorate([
        Input('button-background-color-hover'),
        __metadata("design:type", String)
    ], SideNavComponent.prototype, "ButtonBackgroundColorHover", void 0);
    __decorate([
        Input('button-text-padding'),
        __metadata("design:type", String)
    ], SideNavComponent.prototype, "ButtonTextPadding", void 0);
    __decorate([
        Input('font-color'),
        __metadata("design:type", String)
    ], SideNavComponent.prototype, "FontColor", void 0);
    __decorate([
        ViewChild('sidenav', { static: false }),
        __metadata("design:type", MatSidenav)
    ], SideNavComponent.prototype, "sidenav", void 0);
    SideNavComponent = __decorate([
        Component({
            selector: 'lcu-side-nav',
            template: "<!-- disabled animations on mox request -->\r\n<mat-sidenav-container  class=\"mat-sidenav-container\" [@.disabled]=\"isDisabled\" [hasBackdrop]=\"false\" [ngStyle]=\"{width: MatContainerWidth}\">\r\n  <mat-sidenav-content class=\"mat-sidenav-content\" [ngStyle]=\"{width: MatContentWidth, height: MatContentHeight}\">\r\n    <button  class=\"hamburger-menu\" mat-icon-button (click)=\"toggleDrawer()\" >\r\n      <mat-icon [inline]=\"true\" (mouseover)=\"OnHover()\" (mouseleave)=\"LeaveHover()\"[ngStyle]=\"{'color':MenuBGColor}\" >menu</mat-icon>\r\n    </button>\r\n  </mat-sidenav-content>\r\n  <!-- Builds the hamburger menu from the items in the constants.ts file-->\r\n  <mat-sidenav class=\"side-nav\" #sidenav mode=\"side\" (click)=\"toggleDrawer()\" >\r\n    <button class=\"hamburger-menu\" mat-icon-button>\r\n      <mat-icon [inline]=\"true\" (mouseover)=\"OnHover()\" (mouseleave)=\"LeaveHover()\"[ngStyle]=\"{'color':MenuBGColor}\">menu</mat-icon>\r\n    </button>\r\n    <!--  -->\r\n    <div class=\"button-container\" fxLayout=\"column\" fxLayoutAlign=\"space-between\">\r\n        <!-- [ngStyle]=\"setButtonStyles()\" (mouseover)=\"OnButtonHover()\" (mouseleave)=\"LeaveButtonHover()\" -->\r\n      <button class=\"item-button\" mat-menu-item \r\n        fxLayoutAlign=\"start center\" \r\n        [ngStyle]=\"{'color':FontColor, 'border': ButtonBorder}\"\r\n        *ngFor=\"let item of MenuItems\"\r\n        [disabled]=item.Disabled (click)=\"ButtonClicked(item)\" >\r\n        <div [attr.id]=\"'button-' + item.Label\" fxLayoutAlign=\"start center\" >\r\n        <mat-icon \r\n          class=\"button-icon material-icons material-icons-outlined\" \r\n          *ngIf=\"item.Icon\"\r\n          [ngStyle]=\"{'color':FontColor}\">\r\n          {{ item.Icon }}\r\n        </mat-icon>\r\n        <span class=\"button-title\" \r\n        [ngStyle]=\"{'font-family': FontFamily, \r\n                    'font-weight': FontWeight, \r\n                    'padding': ButtonTextPadding, \r\n                    'font-size': FontSize }\">{{ item.Label }}</span>\r\n      </div>\r\n      <!-- <div class=\"button-border\"></div> -->\r\n      </button>\r\n      \r\n    </div>\r\n    \r\n  </mat-sidenav>\r\n</mat-sidenav-container>",
            styles: [".hamburger-menu{background-color:transparent;border-width:0;outline:0;font-size:30px;margin-left:15px;margin-bottom:2px}.no-animation{-webkit-transition-duration:0s!important;transition-duration:0s!important}.mat-sidenav-container{z-index:2;background-color:transparent}::ng-deep .mat-sidenav-container .mat-drawer-inner-container{z-index:10!important;background-color:transparent!important;overflow:hidden!important}.mat-sidenav-content{background-color:transparent;overflow:hidden}.side-nav{height:100vh;width:230px;background-color:transparent;border-right:transparent;overflow:hidden}.button-container{background-color:transparent;z-index:10;width:100%;border-left:1px solid rgba(0,0,0,.2);border-right:1px solid rgba(0,0,0,.2);box-shadow:1px 2px 1px rgba(0,0,0,.2)}.button-container .item-button{height:40px;width:100%;font-size:20px;outline:0;background-color:#fff}.button-container .item-button .button-icon{padding-left:17px}.button-container .item-button:last-child{border-bottom:none}.button-container .item-button:hover{background-color:#f4f4f3;cursor:pointer}"]
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
                FlexLayoutModule,
                FathymSharedModule,
                MaterialModule,
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

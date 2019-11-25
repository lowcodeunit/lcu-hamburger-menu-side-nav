import { EventEmitter, Component, Output, Input, ViewChild, NgModule } from '@angular/core';
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
    // public MenuColor: string;
    function SideNavComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
            .pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return result.matches; })));
        this.NavItemClicked = new EventEmitter();
        this.openedSubject = new Subject();
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
            this.ButtonBackgroundColor = "white"; //#96957
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
        { type: Component, args: [{
                    selector: 'lcu-side-nav',
                    template: "<mat-sidenav-container  class=\"mat-sidenav-container\" [hasBackdrop]=\"false\" [ngStyle]=\"{width: MatContainerWidth}\">\r\n  <mat-sidenav-content class=\"mat-sidenav-content\" [ngStyle]=\"{width: MatContentWidth, height: MatContentHeight}\">\r\n    <button  class=\"hamburger-menu\" mat-icon-button (click)=\"toggleDrawer()\" >\r\n      <mat-icon [inline]=\"true\" (mouseover)=\"OnHover()\" (mouseleave)=\"LeaveHover()\"[ngStyle]=\"{'color':MenuBGColor}\" >menu</mat-icon>\r\n    </button>\r\n  </mat-sidenav-content>\r\n  <!-- Builds the hamburger menu from the items in the constants.ts file-->\r\n  <mat-sidenav class=\"side-nav\" #sidenav mode=\"side\" (click)=\"toggleDrawer()\">\r\n    <button class=\"hamburger-menu\" mat-icon-button>\r\n      <mat-icon [inline]=\"true\" (mouseover)=\"OnHover()\" (mouseleave)=\"LeaveHover()\"[ngStyle]=\"{'color':MenuBGColor}\">menu</mat-icon>\r\n    </button>\r\n    <!--  -->\r\n    <div class=\"button-container\" fxLayout=\"column\" fxLayoutAlign=\"space-between\">\r\n        <!-- [ngStyle]=\"setButtonStyles()\" (mouseover)=\"OnButtonHover()\" (mouseleave)=\"LeaveButtonHover()\" -->\r\n      <button class=\"item-button\" mat-menu-item fxLayoutAlign=\"start center\" \r\n      [ngStyle]=\"{'color':FontColor}\"\r\n      *ngFor=\"let item of MenuItems\"\r\n        [disabled]=item.Disabled (click)=\"ButtonClicked(item)\" >\r\n        <div [attr.id]=\"'button-' + item.Label\" fxLayoutAlign=\"start center\" >\r\n        <mat-icon class=\"button-icon\" *ngIf=\"item.Icon\">{{ item.Icon }}</mat-icon>\r\n        <span class=\"button-title\">{{ item.Label }}</span>\r\n      </div>\r\n      <!-- <div class=\"button-border\"></div> -->\r\n      </button>\r\n      \r\n    </div>\r\n    \r\n  </mat-sidenav>\r\n</mat-sidenav-container>",
                    styles: [".hamburger-menu{background-color:transparent;border-width:0;outline:0;font-size:30px;margin-left:20px}.mat-sidenav-container{z-index:2;background-color:transparent}::ng-deep .mat-sidenav-container .mat-drawer-inner-container{z-index:10!important;background-color:transparent!important;overflow:hidden!important}.mat-sidenav-content{background-color:transparent;overflow:hidden}.side-nav{height:100vh;width:230px;background-color:transparent;border-right:transparent;overflow:hidden}.button-container{background-color:transparent;z-index:10;width:100%}.button-container .item-button{height:40px;width:100%;font-size:20px;border-color:#eaeaea;border-width:1px;border-top:none;border-left:none;border-right:none;background-color:#fff}.button-container .item-button .button-icon{padding-left:17px}.button-container .item-button .button-title{font-family:Montserrat,sans-serif;padding-left:42px}.button-container .item-button:last-child{border-bottom:none}.button-container .item-button:hover{background-color:#f4f4f3;cursor:pointer}"]
                }] }
    ];
    /** @nocollapse */
    SideNavComponent.ctorParameters = function () { return [
        { type: BreakpointObserver }
    ]; };
    SideNavComponent.propDecorators = {
        NavItemClicked: [{ type: Output, args: ['nav-item-clicked',] }],
        MenuItems: [{ type: Input, args: ['menu-items',] }],
        openedSubject: [{ type: Input, args: ['opened-subject',] }],
        MenuColor: [{ type: Input, args: ['menu-color',] }],
        HoverMenuColor: [{ type: Input, args: ['hover-menu-color',] }],
        MatContentWidth: [{ type: Input, args: ['mat-content-width',] }],
        MatContentHeight: [{ type: Input, args: ['mat-content-height',] }],
        MatContainerWidth: [{ type: Input, args: ['mat-container-width',] }],
        ButtonBackgroundColor: [{ type: Input, args: ['button-background-color',] }],
        ButtonBackgroundColorHover: [{ type: Input, args: ['button-background-color-hover',] }],
        FontColor: [{ type: Input, args: ['font-color',] }],
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
    SideNavComponent.prototype.NavItemClicked;
    /**
     * The items in the button icon,title, link
     * @type {?}
     */
    SideNavComponent.prototype.MenuItems;
    /**
     * public openedSubject: Subject<boolean>;
     * detects if the button has been clicked
     * @type {?}
     */
    SideNavComponent.prototype.openedSubject;
    /**
     * The color of the menu Icon
     * @type {?}
     */
    SideNavComponent.prototype.MenuColor;
    /**
     * The color of the menu icon when hover
     * @type {?}
     */
    SideNavComponent.prototype.HoverMenuColor;
    /**
     * The width of the side nav content
     * @type {?}
     */
    SideNavComponent.prototype.MatContentWidth;
    /**
     * The height of the side nav content
     * @type {?}
     */
    SideNavComponent.prototype.MatContentHeight;
    /**
     * The width of the side nav container
     * @type {?}
     */
    SideNavComponent.prototype.MatContainerWidth;
    /**
     * the background color of the buttons in menu
     * @type {?}
     */
    SideNavComponent.prototype.ButtonBackgroundColor;
    /**
     * TODO when hover color is assigned all buttons display that color
     * @type {?}
     */
    SideNavComponent.prototype.ButtonBackgroundColorHover;
    /**
     * The font color of both the icons and the text in the menu
     * @type {?}
     */
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

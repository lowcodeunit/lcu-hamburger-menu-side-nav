/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatSidenav } from '@angular/material';
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
export { SideNavComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1uYXYuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGxvd2NvZGV1bml0L2xjdS1oYW1idXJnZXItbWVudS1zaWRlLW5hdi1jb21tb24vIiwic291cmNlcyI6WyJsaWIvY29udHJvbHMvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEUsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRy9DO0lBNkVFLDRCQUE0QjtJQUU1QiwwQkFBc0Isa0JBQXNDO1FBQXRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUF2RTVELGVBQVUsR0FBd0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDO2FBQ25GLElBQUksQ0FDSCxHQUFHOzs7O1FBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsRUFBQyxDQUM5QixDQUFDO1FBcUVGLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUM5QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksT0FBTyxFQUFXLENBQUM7UUFDNUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUM7UUFDOUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQztRQUMvQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFFTSxtQ0FBUTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsNkNBQWtCOzs7SUFBbEI7UUFBQSxpQkFLQztRQUpDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsTUFBZTtZQUMzQyxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFBO1lBQ3pDLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNuQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRU0sd0NBQWE7Ozs7SUFBcEIsVUFBcUIsTUFBTTtRQUN6QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7O0lBR00sdUNBQVk7OztJQUFuQjtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUM7WUFDOUIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQztZQUNoQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDO1lBQy9CLHVEQUF1RDtTQUN4RDthQUNJO1lBQ0gsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7WUFDN0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxDQUFBLE1BQU07WUFDckMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE9BQU8sQ0FBQztZQUNqQyxxREFBcUQ7U0FFdEQ7SUFDSCxDQUFDOzs7O0lBQ00sa0NBQU87OztJQUFkO1FBQ0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFFTSx3Q0FBYTs7O0lBQXBCO1FBQ0Usd0RBQXdEO1FBQ3hELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFTSxxQ0FBVTs7O0lBQWpCO1FBQ0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3BDLENBQUM7Ozs7SUFFTSwyQ0FBZ0I7OztJQUF2QjtRQUNFLG1EQUFtRDtRQUNuRCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBRUQsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQiwwR0FBMEc7SUFDMUcsT0FBTztJQUNQLG1CQUFtQjtJQUNuQixJQUFJOzs7Ozs7Ozs7OztJQUNNLG9DQUFTOzs7Ozs7Ozs7OztJQUFuQjtRQUNFLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDO1FBQzlCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLENBQUM7UUFDaEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQztJQUNqQyxDQUFDOzs7OztJQUVTLDJDQUFnQjs7OztJQUExQjtRQUNFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUVqQixJQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBQztZQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztTQUMxQjtRQUVELElBQUcsQ0FBQyxJQUFJLENBQUMsMEJBQTBCLEVBQUM7WUFDbEMsSUFBSSxDQUFDLDBCQUEwQixHQUFHLE1BQU0sQ0FBQSxDQUFBLFFBQVE7U0FDakQ7UUFDRCxJQUFHLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFDO1lBQzdCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxPQUFPLENBQUEsQ0FBQSxRQUFRO1NBQzdDO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUM7U0FDNUI7UUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUM7U0FDOUI7SUFDSCxDQUFDOztnQkExS0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4Qixrd0RBQXdDOztpQkFFekM7Ozs7Z0JBWFEsa0JBQWtCOzs7aUNBc0J4QixNQUFNLFNBQUMsa0JBQWtCOzRCQUt6QixLQUFLLFNBQUMsWUFBWTtnQ0FPbEIsS0FBSyxTQUFDLGdCQUFnQjs0QkFLdEIsS0FBSyxTQUFDLFlBQVk7aUNBS2xCLEtBQUssU0FBQyxrQkFBa0I7a0NBS3hCLEtBQUssU0FBQyxtQkFBbUI7bUNBS3pCLEtBQUssU0FBQyxvQkFBb0I7b0NBSzFCLEtBQUssU0FBQyxxQkFBcUI7d0NBSzNCLEtBQUssU0FBQyx5QkFBeUI7NkNBSy9CLEtBQUssU0FBQywrQkFBK0I7NEJBS3JDLEtBQUssU0FBQyxZQUFZOzBCQVFsQixTQUFTLFNBQUMsU0FBUyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7SUFnR3pDLHVCQUFDO0NBQUEsQUEzS0QsSUEyS0M7U0FyS1ksZ0JBQWdCOzs7SUFFM0Isc0NBR0k7Ozs7O0lBRUoscUNBQXlDOztJQUV6QywwQ0FDeUM7Ozs7O0lBSXpDLHFDQUNzQzs7Ozs7O0lBTXRDLHlDQUNzQzs7Ozs7SUFJdEMscUNBQ3lCOzs7OztJQUl6QiwwQ0FDOEI7Ozs7O0lBSTlCLDJDQUMrQjs7Ozs7SUFJL0IsNENBQ2dDOzs7OztJQUloQyw2Q0FDaUM7Ozs7O0lBSWpDLGlEQUNxQzs7Ozs7SUFJckMsc0RBQ3lDOzs7OztJQUl6QyxxQ0FDeUI7O0lBRXpCLHVDQUEyQjs7SUFDM0IseUNBQTZCOztJQUM3Qix1Q0FBNEI7O0lBRzVCLG1DQUFvRTs7Ozs7SUFJeEQsOENBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCcmVha3BvaW50T2JzZXJ2ZXIsIEJyZWFrcG9pbnRzIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2xheW91dCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBOYXZMaW5rTW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbHMvbmF2LWxpbmsubW9kZWwnO1xyXG5pbXBvcnQgeyBNYXRTaWRlbmF2IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGN1LXNpZGUtbmF2JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2lkZS1uYXYuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3NpZGUtbmF2LmNvbXBvbmVudC5zY3NzJ10gIFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNpZGVOYXZDb21wb25lbnQge1xyXG5cclxuICBpc0hhbmRzZXQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5icmVha3BvaW50T2JzZXJ2ZXIub2JzZXJ2ZShCcmVha3BvaW50cy5IYW5kc2V0KVxyXG4gICAgLnBpcGUoXHJcbiAgICAgIG1hcChyZXN1bHQgPT4gcmVzdWx0Lm1hdGNoZXMpXHJcbiAgICApO1xyXG5cclxuICBwcm90ZWN0ZWQgX25hdkxpbmtzOiBBcnJheTxOYXZMaW5rTW9kZWw+O1xyXG5cclxuICBAT3V0cHV0KCduYXYtaXRlbS1jbGlja2VkJylcclxuICBwdWJsaWMgTmF2SXRlbUNsaWNrZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG4vKipcclxuICogVGhlIGl0ZW1zIGluIHRoZSBidXR0b24gaWNvbix0aXRsZSwgbGlua1xyXG4gKi9cclxuICBASW5wdXQoJ21lbnUtaXRlbXMnKVxyXG4gIHB1YmxpYyBNZW51SXRlbXM6IEFycmF5PE5hdkxpbmtNb2RlbD47XHJcblxyXG4gIC8qKlxyXG4gICAqIHB1YmxpYyBvcGVuZWRTdWJqZWN0OiBTdWJqZWN0PGJvb2xlYW4+O1xyXG4gICAqIGRldGVjdHMgaWYgdGhlIGJ1dHRvbiBoYXMgYmVlbiBjbGlja2VkXHJcbiAgICovXHJcbiAgQElucHV0KCdvcGVuZWQtc3ViamVjdCcpXHJcbiAgcHVibGljIG9wZW5lZFN1YmplY3Q6IFN1YmplY3Q8Ym9vbGVhbj5cclxuLyoqXHJcbiAqIFRoZSBjb2xvciBvZiB0aGUgbWVudSBJY29uXHJcbiAqL1xyXG4gIEBJbnB1dCgnbWVudS1jb2xvcicpXHJcbiAgcHVibGljIE1lbnVDb2xvcjogc3RyaW5nO1xyXG4vKipcclxuICogVGhlIGNvbG9yIG9mIHRoZSBtZW51IGljb24gd2hlbiBob3ZlciBcclxuICovXHJcbiAgQElucHV0KCdob3Zlci1tZW51LWNvbG9yJylcclxuICBwdWJsaWMgSG92ZXJNZW51Q29sb3I6IHN0cmluZztcclxuLyoqXHJcbiAqIFRoZSB3aWR0aCBvZiB0aGUgc2lkZSBuYXYgY29udGVudFxyXG4gKi9cclxuICBASW5wdXQoJ21hdC1jb250ZW50LXdpZHRoJylcclxuICBwdWJsaWMgTWF0Q29udGVudFdpZHRoOiBzdHJpbmc7XHJcbi8qKlxyXG4gKiBUaGUgaGVpZ2h0IG9mIHRoZSBzaWRlIG5hdiBjb250ZW50XHJcbiAqL1xyXG4gIEBJbnB1dCgnbWF0LWNvbnRlbnQtaGVpZ2h0JylcclxuICBwdWJsaWMgTWF0Q29udGVudEhlaWdodDogc3RyaW5nO1xyXG4vKipcclxuICogVGhlIHdpZHRoIG9mIHRoZSBzaWRlIG5hdiBjb250YWluZXJcclxuICovXHJcbiAgQElucHV0KCdtYXQtY29udGFpbmVyLXdpZHRoJylcclxuICBwdWJsaWMgTWF0Q29udGFpbmVyV2lkdGg6IHN0cmluZztcclxuLyoqXHJcbiAqIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSBidXR0b25zIGluIG1lbnVcclxuICovXHJcbiAgQElucHV0KCdidXR0b24tYmFja2dyb3VuZC1jb2xvcicpXHJcbiAgcHVibGljIEJ1dHRvbkJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xyXG4vKipcclxuICogVE9ETyB3aGVuIGhvdmVyIGNvbG9yIGlzIGFzc2lnbmVkIGFsbCBidXR0b25zIGRpc3BsYXkgdGhhdCBjb2xvclxyXG4gKi9cclxuICBASW5wdXQoJ2J1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyJylcclxuICBwdWJsaWMgQnV0dG9uQmFja2dyb3VuZENvbG9ySG92ZXI6c3RyaW5nO1xyXG4vKipcclxuICogVGhlIGZvbnQgY29sb3Igb2YgYm90aCB0aGUgaWNvbnMgYW5kIHRoZSB0ZXh0IGluIHRoZSBtZW51XHJcbiAqL1xyXG4gIEBJbnB1dCgnZm9udC1jb2xvcicpXHJcbiAgcHVibGljIEZvbnRDb2xvcjogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgTWVudUJHQ29sb3I6IHN0cmluZztcclxuICBwdWJsaWMgQnV0dG9uQkdDb2xvcjogc3RyaW5nO1xyXG4gIHB1YmxpYyBCdXR0b25Ib3ZlcjogYm9vbGVhbjtcclxuXHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3NpZGVuYXYnLCB7IHN0YXRpYzogZmFsc2UgfSkgcHVibGljIHNpZGVuYXY6IE1hdFNpZGVuYXY7XHJcblxyXG4gIC8vIHB1YmxpYyBNZW51Q29sb3I6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGJyZWFrcG9pbnRPYnNlcnZlcjogQnJlYWtwb2ludE9ic2VydmVyKSB7XHJcbiAgICB0aGlzLk5hdkl0ZW1DbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICB0aGlzLm9wZW5lZFN1YmplY3QgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xyXG4gICAgdGhpcy5NYXRDb250ZW50V2lkdGggPSBcIjUwcHhcIjtcclxuICAgIHRoaXMuTWF0Q29udGVudEhlaWdodCA9IFwiNDBweFwiO1xyXG4gICAgdGhpcy5NYXRDb250YWluZXJXaWR0aCA9IFwiNTBweFwiO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXREZWZhdWx0U3R5bGVzKCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICB0aGlzLm9wZW5lZFN1YmplY3Quc3Vic2NyaWJlKChyZXN1bHQ6IGJvb2xlYW4pID0+IHtcclxuICAgICAgdGhpcy5zaWRlbmF2W3Jlc3VsdCA/ICdvcGVuJyA6ICdjbG9zZSddKClcclxuICAgICAgdGhpcy5zZXRTdHlsZXMoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIEJ1dHRvbkNsaWNrZWQoYnV0dG9uKSB7XHJcbiAgICB0aGlzLk5hdkl0ZW1DbGlja2VkLmVtaXQoYnV0dG9uKTtcclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgdG9nZ2xlRHJhd2VyKCkge1xyXG4gICAgdGhpcy5vcGVuZWRTdWJqZWN0Lm5leHQoIXRoaXMuc2lkZW5hdi5vcGVuZWQpO1xyXG4gICAgaWYgKCF0aGlzLnNpZGVuYXYub3BlbmVkKSB7XHJcbiAgICAgIHRoaXMuTWF0Q29udGVudFdpZHRoID0gXCI1MHB4XCI7XHJcbiAgICAgIHRoaXMuTWF0Q29udGFpbmVyV2lkdGggPSBcIjUwcHhcIjtcclxuICAgICAgdGhpcy5NYXRDb250ZW50SGVpZ2h0ID0gXCI0MHB4XCI7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwic2lkZW5hdiBjbG9zZWRcIiwgdGhpcy5NYXRDb250ZW50V2lkdGgpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuTWF0Q29udGVudFdpZHRoID0gXCIwcHhcIjtcclxuICAgICAgdGhpcy5NYXRDb250ZW50SGVpZ2h0ID0gXCI5NHZoXCI7Ly85NHZoXHJcbiAgICAgIHRoaXMuTWF0Q29udGFpbmVyV2lkdGggPSBcIjIzMHB4XCI7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwic2lkZW5hdiBvcGVuXCIsIHRoaXMuTWF0Q29udGVudFdpZHRoKTtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG4gIHB1YmxpYyBPbkhvdmVyKCk6IHZvaWQge1xyXG4gICAgdGhpcy5NZW51QkdDb2xvciA9IHRoaXMuSG92ZXJNZW51Q29sb3I7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgT25CdXR0b25Ib3ZlcigpOnZvaWR7XHJcbiAgICAvLyB0aGlzLkJ1dHRvbkJHQ29sb3IgPSB0aGlzLkJ1dHRvbkJhY2tncm91bmRDb2xvckhvdmVyO1xyXG4gICAgdGhpcy5CdXR0b25Ib3ZlciA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgTGVhdmVIb3ZlcigpOiB2b2lkIHtcclxuICAgIHRoaXMuTWVudUJHQ29sb3IgPSB0aGlzLk1lbnVDb2xvcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBMZWF2ZUJ1dHRvbkhvdmVyKCk6dm9pZHtcclxuICAgIC8vIHRoaXMuQnV0dG9uQkdDb2xvciA9IHRoaXMuQnV0dG9uQmFja2dyb3VuZENvbG9yO1xyXG4gICAgdGhpcy5CdXR0b25Ib3ZlciA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLy8gcHVibGljIHNldEJ1dHRvblN0eWxlcygpIHtcclxuICAvLyAgIGxldCBzdHlsZXMgPSB7XHJcbiAgLy8gICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogdGhpcy5CdXR0b25Ib3ZlciA/IHRoaXMuQnV0dG9uQmFja2dyb3VuZENvbG9ySG92ZXIgOiB0aGlzLkJ1dHRvbkJhY2tncm91bmRDb2xvclxyXG4gIC8vICAgfTtcclxuICAvLyAgIHJldHVybiBzdHlsZXM7XHJcbiAgLy8gfVxyXG4gIHByb3RlY3RlZCBzZXRTdHlsZXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLk1hdENvbnRlbnRXaWR0aCA9IFwiNTBweFwiO1xyXG4gICAgdGhpcy5NYXRDb250YWluZXJXaWR0aCA9IFwiNTBweFwiO1xyXG4gICAgdGhpcy5NYXRDb250ZW50SGVpZ2h0ID0gXCI0MHB4XCI7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgc2V0RGVmYXVsdFN0eWxlcygpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0U3R5bGVzKCk7XHJcblxyXG4gICAgaWYoIXRoaXMuRm9udENvbG9yKXtcclxuICAgICAgdGhpcy5Gb250Q29sb3IgPSAnYmxhY2snO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKCF0aGlzLkJ1dHRvbkJhY2tncm91bmRDb2xvckhvdmVyKXtcclxuICAgICAgdGhpcy5CdXR0b25CYWNrZ3JvdW5kQ29sb3JIb3ZlciA9IFwiZ3JleVwiLy8jOTY5NTdcclxuICAgIH1cclxuICAgIGlmKCF0aGlzLkJ1dHRvbkJhY2tncm91bmRDb2xvcil7XHJcbiAgICAgIHRoaXMuQnV0dG9uQmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiLy8jOTY5NTdcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuTWVudUNvbG9yKSB7XHJcbiAgICAgIHRoaXMuTWVudUJHQ29sb3IgPSAnYmxhY2snO1xyXG4gICAgfVxyXG4gICAgdGhpcy5NZW51QkdDb2xvciA9IHRoaXMuTWVudUNvbG9yO1xyXG4gICAgaWYgKCF0aGlzLkhvdmVyTWVudUNvbG9yKSB7XHJcbiAgICAgIHRoaXMuSG92ZXJNZW51Q29sb3IgPSAnZ3JleSc7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4iXX0=
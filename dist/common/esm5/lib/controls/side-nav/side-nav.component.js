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
        { type: Component, args: [{
                    selector: 'lcu-side-nav',
                    template: "<mat-sidenav-container  class=\"mat-sidenav-container\" [hasBackdrop]=\"false\" [ngStyle]=\"{width: MatContainerWidth}\">\r\n  <mat-sidenav-content class=\"mat-sidenav-content\" [ngStyle]=\"{width: MatContentWidth, height: MatContentHeight}\">\r\n    <button  class=\"hamburger-menu\" mat-icon-button (click)=\"toggleDrawer()\" >\r\n      <mat-icon [inline]=\"true\" (mouseover)=\"OnHover()\" (mouseleave)=\"LeaveHover()\"[ngStyle]=\"{'color':MenuBGColor}\" >menu</mat-icon>\r\n    </button>\r\n  </mat-sidenav-content>\r\n  <!-- Builds the hamburger menu from the items in the constants.ts file-->\r\n  <mat-sidenav class=\"side-nav\" #sidenav mode=\"side\" (click)=\"toggleDrawer()\">\r\n    <button class=\"hamburger-menu\" mat-icon-button>\r\n      <mat-icon [inline]=\"true\" (mouseover)=\"OnHover()\" (mouseleave)=\"LeaveHover()\"[ngStyle]=\"{'color':MenuBGColor}\">menu</mat-icon>\r\n    </button>\r\n    <!--  -->\r\n    <div class=\"button-container\" fxLayout=\"column\" fxLayoutAlign=\"space-between\">\r\n        <!-- [ngStyle]=\"setButtonStyles()\" (mouseover)=\"OnButtonHover()\" (mouseleave)=\"LeaveButtonHover()\" -->\r\n      <button class=\"item-button\" mat-menu-item fxLayoutAlign=\"start center\" \r\n      [ngStyle]=\"{'color':FontColor}\"\r\n      *ngFor=\"let item of MenuItems\"\r\n        [disabled]=item.Disabled (click)=\"ButtonClicked(item)\" >\r\n        <div [attr.id]=\"'button-' + item.Label\">\r\n        <mat-icon class=\"button-icon\" *ngIf=\"item.Icon\">{{ item.Icon }}</mat-icon>\r\n        <span class=\"button-title\">{{ item.Label }}</span>\r\n\r\n      </div>\r\n      <div class=\"button-border\"></div>\r\n      </button>\r\n      \r\n    </div>\r\n    \r\n  </mat-sidenav>\r\n</mat-sidenav-container>",
                    styles: [".hamburger-menu{background-color:transparent;border-width:0;outline:0;font-size:30px;padding-left:20px}.mat-sidenav-container{z-index:2;background-color:transparent}::ng-deep .mat-sidenav-container .mat-drawer-inner-container{z-index:10!important;background-color:transparent!important;overflow:hidden!important}.mat-sidenav-content{background-color:transparent;overflow:hidden}.side-nav{height:100vh;width:230px;background-color:transparent;border-right:transparent;overflow:hidden}.button-container{background-color:transparent;z-index:10;width:100%}.button-container .item-button{height:40px;width:100%;font-size:20px;border-color:#eaeaea;border-width:1px;border-top:none;border-left:none;border-right:none}.button-container .item-button .button-icon{padding-left:17px}.button-container .item-button .button-title{font-family:Montserrat,sans-serif;padding-left:60px}.button-container .item-button:hover{background-color:#f4f4f3}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1uYXYuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGxvd2NvZGV1bml0L2xjdS1oYW1idXJnZXItbWVudS1zaWRlLW5hdi1jb21tb24vIiwic291cmNlcyI6WyJsaWIvY29udHJvbHMvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEUsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRy9DO0lBd0RFLDRCQUE0QjtJQUU1QiwwQkFBc0Isa0JBQXNDO1FBQXRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFsRDVELGVBQVUsR0FBd0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDO2FBQ25GLElBQUksQ0FDSCxHQUFHOzs7O1FBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsRUFBQyxDQUM5QixDQUFDO1FBZ0RGLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUM5QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksT0FBTyxFQUFXLENBQUM7UUFDNUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUM7UUFDOUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQztRQUMvQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDO0lBQ2xD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U0FBUyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDO1NBQzlCO0lBQ0gsQ0FBQzs7Z0JBckpGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsNnREQUF3Qzs7aUJBRXpDOzs7O2dCQVhRLGtCQUFrQjs7O2lDQXNCeEIsTUFBTSxTQUFDLGtCQUFrQjs0QkFHekIsS0FBSyxTQUFDLFlBQVk7Z0NBSWxCLEtBQUssU0FBQyxnQkFBZ0I7NEJBR3RCLEtBQUssU0FBQyxZQUFZO2lDQUdsQixLQUFLLFNBQUMsa0JBQWtCO2tDQUd4QixLQUFLLFNBQUMsbUJBQW1CO21DQUd6QixLQUFLLFNBQUMsb0JBQW9CO29DQUcxQixLQUFLLFNBQUMscUJBQXFCO3dDQUczQixLQUFLLFNBQUMseUJBQXlCOzZDQUcvQixLQUFLLFNBQUMsK0JBQStCOzRCQUdyQyxLQUFLLFNBQUMsWUFBWTswQkFRbEIsU0FBUyxTQUFDLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7O0lBZ0d6Qyx1QkFBQztDQUFBLEFBdEpELElBc0pDO1NBaEpZLGdCQUFnQjs7O0lBRTNCLHNDQUdJOzs7OztJQUVKLHFDQUF5Qzs7SUFFekMsMENBQ3lDOztJQUV6QyxxQ0FDc0M7O0lBR3RDLHlDQUNzQzs7SUFFdEMscUNBQ3lCOztJQUV6QiwwQ0FDOEI7O0lBRTlCLDJDQUMrQjs7SUFFL0IsNENBQ2dDOztJQUVoQyw2Q0FDaUM7O0lBRWpDLGlEQUNxQzs7SUFFckMsc0RBQ3lDOztJQUV6QyxxQ0FDeUI7O0lBRXpCLHVDQUEyQjs7SUFDM0IseUNBQTZCOztJQUM3Qix1Q0FBNEI7O0lBRzVCLG1DQUFvRTs7Ozs7SUFJeEQsOENBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCcmVha3BvaW50T2JzZXJ2ZXIsIEJyZWFrcG9pbnRzIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2xheW91dCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBOYXZMaW5rTW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbHMvbmF2LWxpbmsubW9kZWwnO1xyXG5pbXBvcnQgeyBNYXRTaWRlbmF2IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGN1LXNpZGUtbmF2JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2lkZS1uYXYuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3NpZGUtbmF2LmNvbXBvbmVudC5zY3NzJ10gIFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNpZGVOYXZDb21wb25lbnQge1xyXG5cclxuICBpc0hhbmRzZXQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5icmVha3BvaW50T2JzZXJ2ZXIub2JzZXJ2ZShCcmVha3BvaW50cy5IYW5kc2V0KVxyXG4gICAgLnBpcGUoXHJcbiAgICAgIG1hcChyZXN1bHQgPT4gcmVzdWx0Lm1hdGNoZXMpXHJcbiAgICApO1xyXG5cclxuICBwcm90ZWN0ZWQgX25hdkxpbmtzOiBBcnJheTxOYXZMaW5rTW9kZWw+O1xyXG5cclxuICBAT3V0cHV0KCduYXYtaXRlbS1jbGlja2VkJylcclxuICBwdWJsaWMgTmF2SXRlbUNsaWNrZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICBASW5wdXQoJ21lbnUtaXRlbXMnKVxyXG4gIHB1YmxpYyBNZW51SXRlbXM6IEFycmF5PE5hdkxpbmtNb2RlbD47XHJcblxyXG4gIC8vcHVibGljIG9wZW5lZFN1YmplY3Q6IFN1YmplY3Q8Ym9vbGVhbj47XHJcbiAgQElucHV0KCdvcGVuZWQtc3ViamVjdCcpXHJcbiAgcHVibGljIG9wZW5lZFN1YmplY3Q6IFN1YmplY3Q8Ym9vbGVhbj5cclxuXHJcbiAgQElucHV0KCdtZW51LWNvbG9yJylcclxuICBwdWJsaWMgTWVudUNvbG9yOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgnaG92ZXItbWVudS1jb2xvcicpXHJcbiAgcHVibGljIEhvdmVyTWVudUNvbG9yOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgnbWF0LWNvbnRlbnQtd2lkdGgnKVxyXG4gIHB1YmxpYyBNYXRDb250ZW50V2lkdGg6IHN0cmluZztcclxuXHJcbiAgQElucHV0KCdtYXQtY29udGVudC1oZWlnaHQnKVxyXG4gIHB1YmxpYyBNYXRDb250ZW50SGVpZ2h0OiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgnbWF0LWNvbnRhaW5lci13aWR0aCcpXHJcbiAgcHVibGljIE1hdENvbnRhaW5lcldpZHRoOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgnYnV0dG9uLWJhY2tncm91bmQtY29sb3InKVxyXG4gIHB1YmxpYyBCdXR0b25CYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcclxuXHJcbiAgQElucHV0KCdidXR0b24tYmFja2dyb3VuZC1jb2xvci1ob3ZlcicpXHJcbiAgcHVibGljIEJ1dHRvbkJhY2tncm91bmRDb2xvckhvdmVyOnN0cmluZztcclxuXHJcbiAgQElucHV0KCdmb250LWNvbG9yJylcclxuICBwdWJsaWMgRm9udENvbG9yOiBzdHJpbmc7XHJcblxyXG4gIHB1YmxpYyBNZW51QkdDb2xvcjogc3RyaW5nO1xyXG4gIHB1YmxpYyBCdXR0b25CR0NvbG9yOiBzdHJpbmc7XHJcbiAgcHVibGljIEJ1dHRvbkhvdmVyOiBib29sZWFuO1xyXG5cclxuXHJcbiAgQFZpZXdDaGlsZCgnc2lkZW5hdicsIHsgc3RhdGljOiBmYWxzZSB9KSBwdWJsaWMgc2lkZW5hdjogTWF0U2lkZW5hdjtcclxuXHJcbiAgLy8gcHVibGljIE1lbnVDb2xvcjogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYnJlYWtwb2ludE9ic2VydmVyOiBCcmVha3BvaW50T2JzZXJ2ZXIpIHtcclxuICAgIHRoaXMuTmF2SXRlbUNsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIHRoaXMub3BlbmVkU3ViamVjdCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XHJcbiAgICB0aGlzLk1hdENvbnRlbnRXaWR0aCA9IFwiNTBweFwiO1xyXG4gICAgdGhpcy5NYXRDb250ZW50SGVpZ2h0ID0gXCI0MHB4XCI7XHJcbiAgICB0aGlzLk1hdENvbnRhaW5lcldpZHRoID0gXCI1MHB4XCI7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldERlZmF1bHRTdHlsZXMoKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgIHRoaXMub3BlbmVkU3ViamVjdC5zdWJzY3JpYmUoKHJlc3VsdDogYm9vbGVhbikgPT4ge1xyXG4gICAgICB0aGlzLnNpZGVuYXZbcmVzdWx0ID8gJ29wZW4nIDogJ2Nsb3NlJ10oKVxyXG4gICAgICB0aGlzLnNldFN0eWxlcygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgQnV0dG9uQ2xpY2tlZChidXR0b24pIHtcclxuICAgIHRoaXMuTmF2SXRlbUNsaWNrZWQuZW1pdChidXR0b24pO1xyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyB0b2dnbGVEcmF3ZXIoKSB7XHJcbiAgICB0aGlzLm9wZW5lZFN1YmplY3QubmV4dCghdGhpcy5zaWRlbmF2Lm9wZW5lZCk7XHJcbiAgICBpZiAoIXRoaXMuc2lkZW5hdi5vcGVuZWQpIHtcclxuICAgICAgdGhpcy5NYXRDb250ZW50V2lkdGggPSBcIjUwcHhcIjtcclxuICAgICAgdGhpcy5NYXRDb250YWluZXJXaWR0aCA9IFwiNTBweFwiO1xyXG4gICAgICB0aGlzLk1hdENvbnRlbnRIZWlnaHQgPSBcIjQwcHhcIjtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJzaWRlbmF2IGNsb3NlZFwiLCB0aGlzLk1hdENvbnRlbnRXaWR0aCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5NYXRDb250ZW50V2lkdGggPSBcIjBweFwiO1xyXG4gICAgICB0aGlzLk1hdENvbnRlbnRIZWlnaHQgPSBcIjk0dmhcIjsvLzk0dmhcclxuICAgICAgdGhpcy5NYXRDb250YWluZXJXaWR0aCA9IFwiMjMwcHhcIjtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJzaWRlbmF2IG9wZW5cIiwgdGhpcy5NYXRDb250ZW50V2lkdGgpO1xyXG5cclxuICAgIH1cclxuICB9XHJcbiAgcHVibGljIE9uSG92ZXIoKTogdm9pZCB7XHJcbiAgICB0aGlzLk1lbnVCR0NvbG9yID0gdGhpcy5Ib3Zlck1lbnVDb2xvcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBPbkJ1dHRvbkhvdmVyKCk6dm9pZHtcclxuICAgIC8vIHRoaXMuQnV0dG9uQkdDb2xvciA9IHRoaXMuQnV0dG9uQmFja2dyb3VuZENvbG9ySG92ZXI7XHJcbiAgICB0aGlzLkJ1dHRvbkhvdmVyID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBMZWF2ZUhvdmVyKCk6IHZvaWQge1xyXG4gICAgdGhpcy5NZW51QkdDb2xvciA9IHRoaXMuTWVudUNvbG9yO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIExlYXZlQnV0dG9uSG92ZXIoKTp2b2lke1xyXG4gICAgLy8gdGhpcy5CdXR0b25CR0NvbG9yID0gdGhpcy5CdXR0b25CYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICB0aGlzLkJ1dHRvbkhvdmVyID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvLyBwdWJsaWMgc2V0QnV0dG9uU3R5bGVzKCkge1xyXG4gIC8vICAgbGV0IHN0eWxlcyA9IHtcclxuICAvLyAgICAgJ2JhY2tncm91bmQtY29sb3InOiB0aGlzLkJ1dHRvbkhvdmVyID8gdGhpcy5CdXR0b25CYWNrZ3JvdW5kQ29sb3JIb3ZlciA6IHRoaXMuQnV0dG9uQmFja2dyb3VuZENvbG9yXHJcbiAgLy8gICB9O1xyXG4gIC8vICAgcmV0dXJuIHN0eWxlcztcclxuICAvLyB9XHJcbiAgcHJvdGVjdGVkIHNldFN0eWxlcygpOiB2b2lkIHtcclxuICAgIHRoaXMuTWF0Q29udGVudFdpZHRoID0gXCI1MHB4XCI7XHJcbiAgICB0aGlzLk1hdENvbnRhaW5lcldpZHRoID0gXCI1MHB4XCI7XHJcbiAgICB0aGlzLk1hdENvbnRlbnRIZWlnaHQgPSBcIjQwcHhcIjtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBzZXREZWZhdWx0U3R5bGVzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRTdHlsZXMoKTtcclxuXHJcbiAgICBpZighdGhpcy5Gb250Q29sb3Ipe1xyXG4gICAgICB0aGlzLkZvbnRDb2xvciA9ICdibGFjayc7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoIXRoaXMuQnV0dG9uQmFja2dyb3VuZENvbG9ySG92ZXIpe1xyXG4gICAgICB0aGlzLkJ1dHRvbkJhY2tncm91bmRDb2xvckhvdmVyID0gXCJncmV5XCIvLyM5Njk1N1xyXG4gICAgfVxyXG4gICAgaWYoIXRoaXMuQnV0dG9uQmFja2dyb3VuZENvbG9yKXtcclxuICAgICAgdGhpcy5CdXR0b25CR0NvbG9yID0gXCJ3aGl0ZVwiLy8jOTY5NTdcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuTWVudUNvbG9yKSB7XHJcbiAgICAgIHRoaXMuTWVudUJHQ29sb3IgPSAnYmxhY2snO1xyXG4gICAgfVxyXG4gICAgdGhpcy5NZW51QkdDb2xvciA9IHRoaXMuTWVudUNvbG9yO1xyXG4gICAgaWYgKCF0aGlzLkhvdmVyTWVudUNvbG9yKSB7XHJcbiAgICAgIHRoaXMuSG92ZXJNZW51Q29sb3IgPSAnZ3JleSc7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4iXX0=
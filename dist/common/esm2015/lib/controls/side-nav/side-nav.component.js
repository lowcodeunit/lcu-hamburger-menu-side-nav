/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatSidenav } from '@angular/material';
export class SideNavComponent {
    // public MenuColor: string;
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
        this.NavItemClicked = new EventEmitter();
        this.openedSubject = new Subject();
        this.MatContentWidth = "50px";
        this.MatContentHeight = "40px";
        this.MatContainerWidth = "50px";
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setDefaultStyles();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.openedSubject.subscribe((/**
         * @param {?} result
         * @return {?}
         */
        (result) => {
            this.sidenav[result ? 'open' : 'close']();
            this.setStyles();
        }));
    }
    /**
     * @param {?} button
     * @return {?}
     */
    ButtonClicked(button) {
        this.NavItemClicked.emit(button);
    }
    /**
     * @return {?}
     */
    toggleDrawer() {
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
    }
    /**
     * @return {?}
     */
    OnHover() {
        this.MenuBGColor = this.HoverMenuColor;
    }
    /**
     * @return {?}
     */
    OnButtonHover() {
        // this.ButtonBGColor = this.ButtonBackgroundColorHover;
        this.ButtonHover = true;
    }
    /**
     * @return {?}
     */
    LeaveHover() {
        this.MenuBGColor = this.MenuColor;
    }
    /**
     * @return {?}
     */
    LeaveButtonHover() {
        // this.ButtonBGColor = this.ButtonBackgroundColor;
        this.ButtonHover = false;
    }
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
    setStyles() {
        this.MatContentWidth = "50px";
        this.MatContainerWidth = "50px";
        this.MatContentHeight = "40px";
    }
    /**
     * @protected
     * @return {?}
     */
    setDefaultStyles() {
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
    }
}
SideNavComponent.decorators = [
    { type: Component, args: [{
                selector: 'lcu-side-nav',
                template: "<mat-sidenav-container  class=\"mat-sidenav-container\" [hasBackdrop]=\"false\" [ngStyle]=\"{width: MatContainerWidth}\">\r\n  <mat-sidenav-content class=\"mat-sidenav-content\" [ngStyle]=\"{width: MatContentWidth, height: MatContentHeight}\">\r\n    <button  class=\"hamburger-menu\" mat-icon-button (click)=\"toggleDrawer()\" >\r\n      <mat-icon [inline]=\"true\" (mouseover)=\"OnHover()\" (mouseleave)=\"LeaveHover()\"[ngStyle]=\"{'color':MenuBGColor}\" >menu</mat-icon>\r\n    </button>\r\n  </mat-sidenav-content>\r\n  <!-- Builds the hamburger menu from the items in the constants.ts file-->\r\n  <mat-sidenav class=\"side-nav\" #sidenav mode=\"side\" (click)=\"toggleDrawer()\">\r\n    <button class=\"hamburger-menu\" mat-icon-button>\r\n      <mat-icon [inline]=\"true\" (mouseover)=\"OnHover()\" (mouseleave)=\"LeaveHover()\"[ngStyle]=\"{'color':MenuBGColor}\">menu</mat-icon>\r\n    </button>\r\n    <!--  -->\r\n    <div class=\"button-container\" fxLayout=\"column\" fxLayoutAlign=\"space-between\">\r\n        <!-- [ngStyle]=\"setButtonStyles()\" (mouseover)=\"OnButtonHover()\" (mouseleave)=\"LeaveButtonHover()\" -->\r\n      <button class=\"item-button\" mat-menu-item fxLayoutAlign=\"start center\" \r\n      [ngStyle]=\"{'color':FontColor}\"\r\n      *ngFor=\"let item of MenuItems\"\r\n        [disabled]=item.Disabled (click)=\"ButtonClicked(item)\" >\r\n        <div [attr.id]=\"'button-' + item.Label\" fxLayoutAlign=\"start center\" >\r\n        <mat-icon class=\"button-icon\" *ngIf=\"item.Icon\">{{ item.Icon }}</mat-icon>\r\n        <span class=\"button-title\">{{ item.Label }}</span>\r\n      </div>\r\n      <!-- <div class=\"button-border\"></div> -->\r\n      </button>\r\n      \r\n    </div>\r\n    \r\n  </mat-sidenav>\r\n</mat-sidenav-container>",
                styles: [".hamburger-menu{background-color:transparent;border-width:0;outline:0;font-size:30px;margin-left:15px}.mat-sidenav-container{z-index:2;background-color:transparent}::ng-deep .mat-sidenav-container .mat-drawer-inner-container{z-index:10!important;background-color:transparent!important;overflow:hidden!important}.mat-sidenav-content{background-color:transparent;overflow:hidden}.side-nav{height:100vh;width:230px;background-color:transparent;border-right:transparent;overflow:hidden}.button-container{background-color:transparent;z-index:10;width:100%}.button-container .item-button{height:40px;width:100%;font-size:20px;border-color:#eaeaea;border-width:1px;border-top:none;border-left:none;border-right:none;background-color:#fff}.button-container .item-button .button-icon{padding-left:17px}.button-container .item-button .button-title{font-family:Montserrat,sans-serif;padding-left:42px}.button-container .item-button:last-child{border-bottom:none}.button-container .item-button:hover{background-color:#f4f4f3;cursor:pointer}"]
            }] }
];
/** @nocollapse */
SideNavComponent.ctorParameters = () => [
    { type: BreakpointObserver }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1uYXYuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGxvd2NvZGV1bml0L2xjdS1oYW1idXJnZXItbWVudS1zaWRlLW5hdi1jb21tb24vIiwic291cmNlcyI6WyJsaWIvY29udHJvbHMvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEUsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBUy9DLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7O0lBeUUzQixZQUFzQixrQkFBc0M7UUFBdEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQXZFNUQsZUFBVSxHQUF3QixJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUM7YUFDbkYsSUFBSSxDQUNILEdBQUc7Ozs7UUFBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUMsQ0FDOUIsQ0FBQztRQXFFRixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDOUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLE9BQU8sRUFBVyxDQUFDO1FBQzVDLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDO1FBQzlCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUM7UUFDL0IsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQztJQUNsQyxD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QVhRLGtCQUFrQjs7OzZCQXNCeEIsTUFBTSxTQUFDLGtCQUFrQjt3QkFLekIsS0FBSyxTQUFDLFlBQVk7NEJBT2xCLEtBQUssU0FBQyxnQkFBZ0I7d0JBS3RCLEtBQUssU0FBQyxZQUFZOzZCQUtsQixLQUFLLFNBQUMsa0JBQWtCOzhCQUt4QixLQUFLLFNBQUMsbUJBQW1COytCQUt6QixLQUFLLFNBQUMsb0JBQW9CO2dDQUsxQixLQUFLLFNBQUMscUJBQXFCO29DQUszQixLQUFLLFNBQUMseUJBQXlCO3lDQUsvQixLQUFLLFNBQUMsK0JBQStCO3dCQUtyQyxLQUFLLFNBQUMsWUFBWTtzQkFRbEIsU0FBUyxTQUFDLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7Ozs7SUFuRXZDLHNDQUdJOzs7OztJQUVKLHFDQUF5Qzs7SUFFekMsMENBQ3lDOzs7OztJQUl6QyxxQ0FDc0M7Ozs7OztJQU10Qyx5Q0FDc0M7Ozs7O0lBSXRDLHFDQUN5Qjs7Ozs7SUFJekIsMENBQzhCOzs7OztJQUk5QiwyQ0FDK0I7Ozs7O0lBSS9CLDRDQUNnQzs7Ozs7SUFJaEMsNkNBQ2lDOzs7OztJQUlqQyxpREFDcUM7Ozs7O0lBSXJDLHNEQUN5Qzs7Ozs7SUFJekMscUNBQ3lCOztJQUV6Qix1Q0FBMkI7O0lBQzNCLHlDQUE2Qjs7SUFDN0IsdUNBQTRCOztJQUc1QixtQ0FBb0U7Ozs7O0lBSXhELDhDQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQnJlYWtwb2ludE9ic2VydmVyLCBCcmVha3BvaW50cyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9sYXlvdXQnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgTmF2TGlua01vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzL25hdi1saW5rLm1vZGVsJztcclxuaW1wb3J0IHsgTWF0U2lkZW5hdiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xjdS1zaWRlLW5hdicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NpZGUtbmF2LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zaWRlLW5hdi5jb21wb25lbnQuc2NzcyddICBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTaWRlTmF2Q29tcG9uZW50IHtcclxuXHJcbiAgaXNIYW5kc2V0JDogT2JzZXJ2YWJsZTxib29sZWFuPiA9IHRoaXMuYnJlYWtwb2ludE9ic2VydmVyLm9ic2VydmUoQnJlYWtwb2ludHMuSGFuZHNldClcclxuICAgIC5waXBlKFxyXG4gICAgICBtYXAocmVzdWx0ID0+IHJlc3VsdC5tYXRjaGVzKVxyXG4gICAgKTtcclxuXHJcbiAgcHJvdGVjdGVkIF9uYXZMaW5rczogQXJyYXk8TmF2TGlua01vZGVsPjtcclxuXHJcbiAgQE91dHB1dCgnbmF2LWl0ZW0tY2xpY2tlZCcpXHJcbiAgcHVibGljIE5hdkl0ZW1DbGlja2VkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuLyoqXHJcbiAqIFRoZSBpdGVtcyBpbiB0aGUgYnV0dG9uIGljb24sdGl0bGUsIGxpbmtcclxuICovXHJcbiAgQElucHV0KCdtZW51LWl0ZW1zJylcclxuICBwdWJsaWMgTWVudUl0ZW1zOiBBcnJheTxOYXZMaW5rTW9kZWw+O1xyXG5cclxuICAvKipcclxuICAgKiBwdWJsaWMgb3BlbmVkU3ViamVjdDogU3ViamVjdDxib29sZWFuPjtcclxuICAgKiBkZXRlY3RzIGlmIHRoZSBidXR0b24gaGFzIGJlZW4gY2xpY2tlZFxyXG4gICAqL1xyXG4gIEBJbnB1dCgnb3BlbmVkLXN1YmplY3QnKVxyXG4gIHB1YmxpYyBvcGVuZWRTdWJqZWN0OiBTdWJqZWN0PGJvb2xlYW4+XHJcbi8qKlxyXG4gKiBUaGUgY29sb3Igb2YgdGhlIG1lbnUgSWNvblxyXG4gKi9cclxuICBASW5wdXQoJ21lbnUtY29sb3InKVxyXG4gIHB1YmxpYyBNZW51Q29sb3I6IHN0cmluZztcclxuLyoqXHJcbiAqIFRoZSBjb2xvciBvZiB0aGUgbWVudSBpY29uIHdoZW4gaG92ZXIgXHJcbiAqL1xyXG4gIEBJbnB1dCgnaG92ZXItbWVudS1jb2xvcicpXHJcbiAgcHVibGljIEhvdmVyTWVudUNvbG9yOiBzdHJpbmc7XHJcbi8qKlxyXG4gKiBUaGUgd2lkdGggb2YgdGhlIHNpZGUgbmF2IGNvbnRlbnRcclxuICovXHJcbiAgQElucHV0KCdtYXQtY29udGVudC13aWR0aCcpXHJcbiAgcHVibGljIE1hdENvbnRlbnRXaWR0aDogc3RyaW5nO1xyXG4vKipcclxuICogVGhlIGhlaWdodCBvZiB0aGUgc2lkZSBuYXYgY29udGVudFxyXG4gKi9cclxuICBASW5wdXQoJ21hdC1jb250ZW50LWhlaWdodCcpXHJcbiAgcHVibGljIE1hdENvbnRlbnRIZWlnaHQ6IHN0cmluZztcclxuLyoqXHJcbiAqIFRoZSB3aWR0aCBvZiB0aGUgc2lkZSBuYXYgY29udGFpbmVyXHJcbiAqL1xyXG4gIEBJbnB1dCgnbWF0LWNvbnRhaW5lci13aWR0aCcpXHJcbiAgcHVibGljIE1hdENvbnRhaW5lcldpZHRoOiBzdHJpbmc7XHJcbi8qKlxyXG4gKiB0aGUgYmFja2dyb3VuZCBjb2xvciBvZiB0aGUgYnV0dG9ucyBpbiBtZW51XHJcbiAqL1xyXG4gIEBJbnB1dCgnYnV0dG9uLWJhY2tncm91bmQtY29sb3InKVxyXG4gIHB1YmxpYyBCdXR0b25CYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcclxuLyoqXHJcbiAqIFRPRE8gd2hlbiBob3ZlciBjb2xvciBpcyBhc3NpZ25lZCBhbGwgYnV0dG9ucyBkaXNwbGF5IHRoYXQgY29sb3JcclxuICovXHJcbiAgQElucHV0KCdidXR0b24tYmFja2dyb3VuZC1jb2xvci1ob3ZlcicpXHJcbiAgcHVibGljIEJ1dHRvbkJhY2tncm91bmRDb2xvckhvdmVyOnN0cmluZztcclxuLyoqXHJcbiAqIFRoZSBmb250IGNvbG9yIG9mIGJvdGggdGhlIGljb25zIGFuZCB0aGUgdGV4dCBpbiB0aGUgbWVudVxyXG4gKi9cclxuICBASW5wdXQoJ2ZvbnQtY29sb3InKVxyXG4gIHB1YmxpYyBGb250Q29sb3I6IHN0cmluZztcclxuXHJcbiAgcHVibGljIE1lbnVCR0NvbG9yOiBzdHJpbmc7XHJcbiAgcHVibGljIEJ1dHRvbkJHQ29sb3I6IHN0cmluZztcclxuICBwdWJsaWMgQnV0dG9uSG92ZXI6IGJvb2xlYW47XHJcblxyXG5cclxuICBAVmlld0NoaWxkKCdzaWRlbmF2JywgeyBzdGF0aWM6IGZhbHNlIH0pIHB1YmxpYyBzaWRlbmF2OiBNYXRTaWRlbmF2O1xyXG5cclxuICAvLyBwdWJsaWMgTWVudUNvbG9yOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBicmVha3BvaW50T2JzZXJ2ZXI6IEJyZWFrcG9pbnRPYnNlcnZlcikge1xyXG4gICAgdGhpcy5OYXZJdGVtQ2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgdGhpcy5vcGVuZWRTdWJqZWN0ID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcclxuICAgIHRoaXMuTWF0Q29udGVudFdpZHRoID0gXCI1MHB4XCI7XHJcbiAgICB0aGlzLk1hdENvbnRlbnRIZWlnaHQgPSBcIjQwcHhcIjtcclxuICAgIHRoaXMuTWF0Q29udGFpbmVyV2lkdGggPSBcIjUwcHhcIjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0RGVmYXVsdFN0eWxlcygpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgdGhpcy5vcGVuZWRTdWJqZWN0LnN1YnNjcmliZSgocmVzdWx0OiBib29sZWFuKSA9PiB7XHJcbiAgICAgIHRoaXMuc2lkZW5hdltyZXN1bHQgPyAnb3BlbicgOiAnY2xvc2UnXSgpXHJcbiAgICAgIHRoaXMuc2V0U3R5bGVzKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBCdXR0b25DbGlja2VkKGJ1dHRvbikge1xyXG4gICAgdGhpcy5OYXZJdGVtQ2xpY2tlZC5lbWl0KGJ1dHRvbik7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIHRvZ2dsZURyYXdlcigpIHtcclxuICAgIHRoaXMub3BlbmVkU3ViamVjdC5uZXh0KCF0aGlzLnNpZGVuYXYub3BlbmVkKTtcclxuICAgIGlmICghdGhpcy5zaWRlbmF2Lm9wZW5lZCkge1xyXG4gICAgICB0aGlzLk1hdENvbnRlbnRXaWR0aCA9IFwiNTBweFwiO1xyXG4gICAgICB0aGlzLk1hdENvbnRhaW5lcldpZHRoID0gXCI1MHB4XCI7XHJcbiAgICAgIHRoaXMuTWF0Q29udGVudEhlaWdodCA9IFwiNDBweFwiO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcInNpZGVuYXYgY2xvc2VkXCIsIHRoaXMuTWF0Q29udGVudFdpZHRoKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLk1hdENvbnRlbnRXaWR0aCA9IFwiMHB4XCI7XHJcbiAgICAgIHRoaXMuTWF0Q29udGVudEhlaWdodCA9IFwiOTR2aFwiOy8vOTR2aFxyXG4gICAgICB0aGlzLk1hdENvbnRhaW5lcldpZHRoID0gXCIyMzBweFwiO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcInNpZGVuYXYgb3BlblwiLCB0aGlzLk1hdENvbnRlbnRXaWR0aCk7XHJcblxyXG4gICAgfVxyXG4gIH1cclxuICBwdWJsaWMgT25Ib3ZlcigpOiB2b2lkIHtcclxuICAgIHRoaXMuTWVudUJHQ29sb3IgPSB0aGlzLkhvdmVyTWVudUNvbG9yO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIE9uQnV0dG9uSG92ZXIoKTp2b2lke1xyXG4gICAgLy8gdGhpcy5CdXR0b25CR0NvbG9yID0gdGhpcy5CdXR0b25CYWNrZ3JvdW5kQ29sb3JIb3ZlcjtcclxuICAgIHRoaXMuQnV0dG9uSG92ZXIgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIExlYXZlSG92ZXIoKTogdm9pZCB7XHJcbiAgICB0aGlzLk1lbnVCR0NvbG9yID0gdGhpcy5NZW51Q29sb3I7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgTGVhdmVCdXR0b25Ib3ZlcigpOnZvaWR7XHJcbiAgICAvLyB0aGlzLkJ1dHRvbkJHQ29sb3IgPSB0aGlzLkJ1dHRvbkJhY2tncm91bmRDb2xvcjtcclxuICAgIHRoaXMuQnV0dG9uSG92ZXIgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIC8vIHB1YmxpYyBzZXRCdXR0b25TdHlsZXMoKSB7XHJcbiAgLy8gICBsZXQgc3R5bGVzID0ge1xyXG4gIC8vICAgICAnYmFja2dyb3VuZC1jb2xvcic6IHRoaXMuQnV0dG9uSG92ZXIgPyB0aGlzLkJ1dHRvbkJhY2tncm91bmRDb2xvckhvdmVyIDogdGhpcy5CdXR0b25CYWNrZ3JvdW5kQ29sb3JcclxuICAvLyAgIH07XHJcbiAgLy8gICByZXR1cm4gc3R5bGVzO1xyXG4gIC8vIH1cclxuICBwcm90ZWN0ZWQgc2V0U3R5bGVzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5NYXRDb250ZW50V2lkdGggPSBcIjUwcHhcIjtcclxuICAgIHRoaXMuTWF0Q29udGFpbmVyV2lkdGggPSBcIjUwcHhcIjtcclxuICAgIHRoaXMuTWF0Q29udGVudEhlaWdodCA9IFwiNDBweFwiO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHNldERlZmF1bHRTdHlsZXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldFN0eWxlcygpO1xyXG5cclxuICAgIGlmKCF0aGlzLkZvbnRDb2xvcil7XHJcbiAgICAgIHRoaXMuRm9udENvbG9yID0gJ2JsYWNrJztcclxuICAgIH1cclxuXHJcbiAgICBpZighdGhpcy5CdXR0b25CYWNrZ3JvdW5kQ29sb3JIb3Zlcil7XHJcbiAgICAgIHRoaXMuQnV0dG9uQmFja2dyb3VuZENvbG9ySG92ZXIgPSBcImdyZXlcIi8vIzk2OTU3XHJcbiAgICB9XHJcbiAgICBpZighdGhpcy5CdXR0b25CYWNrZ3JvdW5kQ29sb3Ipe1xyXG4gICAgICB0aGlzLkJ1dHRvbkJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIi8vIzk2OTU3XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLk1lbnVDb2xvcikge1xyXG4gICAgICB0aGlzLk1lbnVCR0NvbG9yID0gJ2JsYWNrJztcclxuICAgIH1cclxuICAgIHRoaXMuTWVudUJHQ29sb3IgPSB0aGlzLk1lbnVDb2xvcjtcclxuICAgIGlmICghdGhpcy5Ib3Zlck1lbnVDb2xvcikge1xyXG4gICAgICB0aGlzLkhvdmVyTWVudUNvbG9yID0gJ2dyZXknO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuIl19
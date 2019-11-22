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
            this.ButtonBGColor = "white"; //#96957
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
                template: "<mat-sidenav-container  class=\"mat-sidenav-container\" [hasBackdrop]=\"false\" [ngStyle]=\"{width: MatContainerWidth}\">\r\n  <mat-sidenav-content class=\"mat-sidenav-content\" [ngStyle]=\"{width: MatContentWidth, height: MatContentHeight}\">\r\n    <button  class=\"hamburger-menu\" mat-icon-button (click)=\"toggleDrawer()\" >\r\n      <mat-icon [inline]=\"true\" (mouseover)=\"OnHover()\" (mouseleave)=\"LeaveHover()\"[ngStyle]=\"{'color':MenuBGColor}\" >menu</mat-icon>\r\n    </button>\r\n  </mat-sidenav-content>\r\n  <!-- Builds the hamburger menu from the items in the constants.ts file-->\r\n  <mat-sidenav class=\"side-nav\" #sidenav mode=\"side\" (click)=\"toggleDrawer()\">\r\n    <button class=\"hamburger-menu\" mat-icon-button>\r\n      <mat-icon [inline]=\"true\" (mouseover)=\"OnHover()\" (mouseleave)=\"LeaveHover()\"[ngStyle]=\"{'color':MenuBGColor}\">menu</mat-icon>\r\n    </button>\r\n    <!--  -->\r\n    <div class=\"button-container\" fxLayout=\"column\" fxLayoutAlign=\"space-between\">\r\n        <!-- [ngStyle]=\"setButtonStyles()\" (mouseover)=\"OnButtonHover()\" (mouseleave)=\"LeaveButtonHover()\" -->\r\n      <button class=\"item-button\" mat-menu-item fxLayoutAlign=\"start center\" \r\n      [ngStyle]=\"{'color':FontColor}\"\r\n      *ngFor=\"let item of MenuItems\"\r\n        [disabled]=item.Disabled (click)=\"ButtonClicked(item)\" >\r\n        <div [attr.id]=\"'button-' + item.Label\">\r\n        <mat-icon class=\"button-icon\" *ngIf=\"item.Icon\">{{ item.Icon }}</mat-icon>\r\n        <span class=\"button-title\">{{ item.Label }}</span>\r\n\r\n      </div>\r\n      <div class=\"button-border\"></div>\r\n      </button>\r\n      \r\n    </div>\r\n    \r\n  </mat-sidenav>\r\n</mat-sidenav-container>",
                styles: [".hamburger-menu{background-color:transparent;border-width:0;outline:0;font-size:30px;padding-left:20px}.mat-sidenav-container{z-index:2;background-color:transparent}::ng-deep .mat-sidenav-container .mat-drawer-inner-container{z-index:10!important;background-color:transparent!important;overflow:hidden!important}.mat-sidenav-content{background-color:transparent;overflow:hidden}.side-nav{height:100vh;width:230px;background-color:transparent;border-right:transparent;overflow:hidden}.button-container{background-color:transparent;z-index:10;width:100%}.button-container .item-button{height:40px;width:100%;font-size:20px;border-color:#eaeaea;border-width:1px;border-top:none;border-left:none;border-right:none}.button-container .item-button .button-icon{padding-left:17px}.button-container .item-button .button-title{font-family:Montserrat,sans-serif;padding-left:60px}.button-container .item-button:hover{background-color:#f4f4f3}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1uYXYuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGxvd2NvZGV1bml0L2xjdS1oYW1idXJnZXItbWVudS1zaWRlLW5hdi1jb21tb24vIiwic291cmNlcyI6WyJsaWIvY29udHJvbHMvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEUsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBUy9DLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7O0lBeUUzQixZQUFzQixrQkFBc0M7UUFBdEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQXZFNUQsZUFBVSxHQUF3QixJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUM7YUFDbkYsSUFBSSxDQUNILEdBQUc7Ozs7UUFBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUMsQ0FDOUIsQ0FBQztRQXFFRixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDOUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLE9BQU8sRUFBVyxDQUFDO1FBQzVDLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDO1FBQzlCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUM7UUFDL0IsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQztJQUNsQyxD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USxrQkFBa0I7Ozs2QkFzQnhCLE1BQU0sU0FBQyxrQkFBa0I7d0JBS3pCLEtBQUssU0FBQyxZQUFZOzRCQU9sQixLQUFLLFNBQUMsZ0JBQWdCO3dCQUt0QixLQUFLLFNBQUMsWUFBWTs2QkFLbEIsS0FBSyxTQUFDLGtCQUFrQjs4QkFLeEIsS0FBSyxTQUFDLG1CQUFtQjsrQkFLekIsS0FBSyxTQUFDLG9CQUFvQjtnQ0FLMUIsS0FBSyxTQUFDLHFCQUFxQjtvQ0FLM0IsS0FBSyxTQUFDLHlCQUF5Qjt5Q0FLL0IsS0FBSyxTQUFDLCtCQUErQjt3QkFLckMsS0FBSyxTQUFDLFlBQVk7c0JBUWxCLFNBQVMsU0FBQyxTQUFTLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOzs7O0lBbkV2QyxzQ0FHSTs7Ozs7SUFFSixxQ0FBeUM7O0lBRXpDLDBDQUN5Qzs7Ozs7SUFJekMscUNBQ3NDOzs7Ozs7SUFNdEMseUNBQ3NDOzs7OztJQUl0QyxxQ0FDeUI7Ozs7O0lBSXpCLDBDQUM4Qjs7Ozs7SUFJOUIsMkNBQytCOzs7OztJQUkvQiw0Q0FDZ0M7Ozs7O0lBSWhDLDZDQUNpQzs7Ozs7SUFJakMsaURBQ3FDOzs7OztJQUlyQyxzREFDeUM7Ozs7O0lBSXpDLHFDQUN5Qjs7SUFFekIsdUNBQTJCOztJQUMzQix5Q0FBNkI7O0lBQzdCLHVDQUE0Qjs7SUFHNUIsbUNBQW9FOzs7OztJQUl4RCw4Q0FBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3Q2hpbGQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJyZWFrcG9pbnRPYnNlcnZlciwgQnJlYWtwb2ludHMgfSBmcm9tICdAYW5ndWxhci9jZGsvbGF5b3V0JztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IE5hdkxpbmtNb2RlbCB9IGZyb20gJy4uLy4uL21vZGVscy9uYXYtbGluay5tb2RlbCc7XHJcbmltcG9ydCB7IE1hdFNpZGVuYXYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsY3Utc2lkZS1uYXYnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWRlLW5hdi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc2lkZS1uYXYuY29tcG9uZW50LnNjc3MnXSAgXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU2lkZU5hdkNvbXBvbmVudCB7XHJcblxyXG4gIGlzSGFuZHNldCQ6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLmJyZWFrcG9pbnRPYnNlcnZlci5vYnNlcnZlKEJyZWFrcG9pbnRzLkhhbmRzZXQpXHJcbiAgICAucGlwZShcclxuICAgICAgbWFwKHJlc3VsdCA9PiByZXN1bHQubWF0Y2hlcylcclxuICAgICk7XHJcblxyXG4gIHByb3RlY3RlZCBfbmF2TGlua3M6IEFycmF5PE5hdkxpbmtNb2RlbD47XHJcblxyXG4gIEBPdXRwdXQoJ25hdi1pdGVtLWNsaWNrZWQnKVxyXG4gIHB1YmxpYyBOYXZJdGVtQ2xpY2tlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcbi8qKlxyXG4gKiBUaGUgaXRlbXMgaW4gdGhlIGJ1dHRvbiBpY29uLHRpdGxlLCBsaW5rXHJcbiAqL1xyXG4gIEBJbnB1dCgnbWVudS1pdGVtcycpXHJcbiAgcHVibGljIE1lbnVJdGVtczogQXJyYXk8TmF2TGlua01vZGVsPjtcclxuXHJcbiAgLyoqXHJcbiAgICogcHVibGljIG9wZW5lZFN1YmplY3Q6IFN1YmplY3Q8Ym9vbGVhbj47XHJcbiAgICogZGV0ZWN0cyBpZiB0aGUgYnV0dG9uIGhhcyBiZWVuIGNsaWNrZWRcclxuICAgKi9cclxuICBASW5wdXQoJ29wZW5lZC1zdWJqZWN0JylcclxuICBwdWJsaWMgb3BlbmVkU3ViamVjdDogU3ViamVjdDxib29sZWFuPlxyXG4vKipcclxuICogVGhlIGNvbG9yIG9mIHRoZSBtZW51IEljb25cclxuICovXHJcbiAgQElucHV0KCdtZW51LWNvbG9yJylcclxuICBwdWJsaWMgTWVudUNvbG9yOiBzdHJpbmc7XHJcbi8qKlxyXG4gKiBUaGUgY29sb3Igb2YgdGhlIG1lbnUgaWNvbiB3aGVuIGhvdmVyIFxyXG4gKi9cclxuICBASW5wdXQoJ2hvdmVyLW1lbnUtY29sb3InKVxyXG4gIHB1YmxpYyBIb3Zlck1lbnVDb2xvcjogc3RyaW5nO1xyXG4vKipcclxuICogVGhlIHdpZHRoIG9mIHRoZSBzaWRlIG5hdiBjb250ZW50XHJcbiAqL1xyXG4gIEBJbnB1dCgnbWF0LWNvbnRlbnQtd2lkdGgnKVxyXG4gIHB1YmxpYyBNYXRDb250ZW50V2lkdGg6IHN0cmluZztcclxuLyoqXHJcbiAqIFRoZSBoZWlnaHQgb2YgdGhlIHNpZGUgbmF2IGNvbnRlbnRcclxuICovXHJcbiAgQElucHV0KCdtYXQtY29udGVudC1oZWlnaHQnKVxyXG4gIHB1YmxpYyBNYXRDb250ZW50SGVpZ2h0OiBzdHJpbmc7XHJcbi8qKlxyXG4gKiBUaGUgd2lkdGggb2YgdGhlIHNpZGUgbmF2IGNvbnRhaW5lclxyXG4gKi9cclxuICBASW5wdXQoJ21hdC1jb250YWluZXItd2lkdGgnKVxyXG4gIHB1YmxpYyBNYXRDb250YWluZXJXaWR0aDogc3RyaW5nO1xyXG4vKipcclxuICogdGhlIGJhY2tncm91bmQgY29sb3Igb2YgdGhlIGJ1dHRvbnMgaW4gbWVudVxyXG4gKi9cclxuICBASW5wdXQoJ2J1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yJylcclxuICBwdWJsaWMgQnV0dG9uQmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XHJcbi8qKlxyXG4gKiBUT0RPIHdoZW4gaG92ZXIgY29sb3IgaXMgYXNzaWduZWQgYWxsIGJ1dHRvbnMgZGlzcGxheSB0aGF0IGNvbG9yXHJcbiAqL1xyXG4gIEBJbnB1dCgnYnV0dG9uLWJhY2tncm91bmQtY29sb3ItaG92ZXInKVxyXG4gIHB1YmxpYyBCdXR0b25CYWNrZ3JvdW5kQ29sb3JIb3ZlcjpzdHJpbmc7XHJcbi8qKlxyXG4gKiBUaGUgZm9udCBjb2xvciBvZiBib3RoIHRoZSBpY29ucyBhbmQgdGhlIHRleHQgaW4gdGhlIG1lbnVcclxuICovXHJcbiAgQElucHV0KCdmb250LWNvbG9yJylcclxuICBwdWJsaWMgRm9udENvbG9yOiBzdHJpbmc7XHJcblxyXG4gIHB1YmxpYyBNZW51QkdDb2xvcjogc3RyaW5nO1xyXG4gIHB1YmxpYyBCdXR0b25CR0NvbG9yOiBzdHJpbmc7XHJcbiAgcHVibGljIEJ1dHRvbkhvdmVyOiBib29sZWFuO1xyXG5cclxuXHJcbiAgQFZpZXdDaGlsZCgnc2lkZW5hdicsIHsgc3RhdGljOiBmYWxzZSB9KSBwdWJsaWMgc2lkZW5hdjogTWF0U2lkZW5hdjtcclxuXHJcbiAgLy8gcHVibGljIE1lbnVDb2xvcjogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYnJlYWtwb2ludE9ic2VydmVyOiBCcmVha3BvaW50T2JzZXJ2ZXIpIHtcclxuICAgIHRoaXMuTmF2SXRlbUNsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIHRoaXMub3BlbmVkU3ViamVjdCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XHJcbiAgICB0aGlzLk1hdENvbnRlbnRXaWR0aCA9IFwiNTBweFwiO1xyXG4gICAgdGhpcy5NYXRDb250ZW50SGVpZ2h0ID0gXCI0MHB4XCI7XHJcbiAgICB0aGlzLk1hdENvbnRhaW5lcldpZHRoID0gXCI1MHB4XCI7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldERlZmF1bHRTdHlsZXMoKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgIHRoaXMub3BlbmVkU3ViamVjdC5zdWJzY3JpYmUoKHJlc3VsdDogYm9vbGVhbikgPT4ge1xyXG4gICAgICB0aGlzLnNpZGVuYXZbcmVzdWx0ID8gJ29wZW4nIDogJ2Nsb3NlJ10oKVxyXG4gICAgICB0aGlzLnNldFN0eWxlcygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgQnV0dG9uQ2xpY2tlZChidXR0b24pIHtcclxuICAgIHRoaXMuTmF2SXRlbUNsaWNrZWQuZW1pdChidXR0b24pO1xyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyB0b2dnbGVEcmF3ZXIoKSB7XHJcbiAgICB0aGlzLm9wZW5lZFN1YmplY3QubmV4dCghdGhpcy5zaWRlbmF2Lm9wZW5lZCk7XHJcbiAgICBpZiAoIXRoaXMuc2lkZW5hdi5vcGVuZWQpIHtcclxuICAgICAgdGhpcy5NYXRDb250ZW50V2lkdGggPSBcIjUwcHhcIjtcclxuICAgICAgdGhpcy5NYXRDb250YWluZXJXaWR0aCA9IFwiNTBweFwiO1xyXG4gICAgICB0aGlzLk1hdENvbnRlbnRIZWlnaHQgPSBcIjQwcHhcIjtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJzaWRlbmF2IGNsb3NlZFwiLCB0aGlzLk1hdENvbnRlbnRXaWR0aCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5NYXRDb250ZW50V2lkdGggPSBcIjBweFwiO1xyXG4gICAgICB0aGlzLk1hdENvbnRlbnRIZWlnaHQgPSBcIjk0dmhcIjsvLzk0dmhcclxuICAgICAgdGhpcy5NYXRDb250YWluZXJXaWR0aCA9IFwiMjMwcHhcIjtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJzaWRlbmF2IG9wZW5cIiwgdGhpcy5NYXRDb250ZW50V2lkdGgpO1xyXG5cclxuICAgIH1cclxuICB9XHJcbiAgcHVibGljIE9uSG92ZXIoKTogdm9pZCB7XHJcbiAgICB0aGlzLk1lbnVCR0NvbG9yID0gdGhpcy5Ib3Zlck1lbnVDb2xvcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBPbkJ1dHRvbkhvdmVyKCk6dm9pZHtcclxuICAgIC8vIHRoaXMuQnV0dG9uQkdDb2xvciA9IHRoaXMuQnV0dG9uQmFja2dyb3VuZENvbG9ySG92ZXI7XHJcbiAgICB0aGlzLkJ1dHRvbkhvdmVyID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBMZWF2ZUhvdmVyKCk6IHZvaWQge1xyXG4gICAgdGhpcy5NZW51QkdDb2xvciA9IHRoaXMuTWVudUNvbG9yO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIExlYXZlQnV0dG9uSG92ZXIoKTp2b2lke1xyXG4gICAgLy8gdGhpcy5CdXR0b25CR0NvbG9yID0gdGhpcy5CdXR0b25CYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICB0aGlzLkJ1dHRvbkhvdmVyID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvLyBwdWJsaWMgc2V0QnV0dG9uU3R5bGVzKCkge1xyXG4gIC8vICAgbGV0IHN0eWxlcyA9IHtcclxuICAvLyAgICAgJ2JhY2tncm91bmQtY29sb3InOiB0aGlzLkJ1dHRvbkhvdmVyID8gdGhpcy5CdXR0b25CYWNrZ3JvdW5kQ29sb3JIb3ZlciA6IHRoaXMuQnV0dG9uQmFja2dyb3VuZENvbG9yXHJcbiAgLy8gICB9O1xyXG4gIC8vICAgcmV0dXJuIHN0eWxlcztcclxuICAvLyB9XHJcbiAgcHJvdGVjdGVkIHNldFN0eWxlcygpOiB2b2lkIHtcclxuICAgIHRoaXMuTWF0Q29udGVudFdpZHRoID0gXCI1MHB4XCI7XHJcbiAgICB0aGlzLk1hdENvbnRhaW5lcldpZHRoID0gXCI1MHB4XCI7XHJcbiAgICB0aGlzLk1hdENvbnRlbnRIZWlnaHQgPSBcIjQwcHhcIjtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBzZXREZWZhdWx0U3R5bGVzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRTdHlsZXMoKTtcclxuXHJcbiAgICBpZighdGhpcy5Gb250Q29sb3Ipe1xyXG4gICAgICB0aGlzLkZvbnRDb2xvciA9ICdibGFjayc7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoIXRoaXMuQnV0dG9uQmFja2dyb3VuZENvbG9ySG92ZXIpe1xyXG4gICAgICB0aGlzLkJ1dHRvbkJhY2tncm91bmRDb2xvckhvdmVyID0gXCJncmV5XCIvLyM5Njk1N1xyXG4gICAgfVxyXG4gICAgaWYoIXRoaXMuQnV0dG9uQmFja2dyb3VuZENvbG9yKXtcclxuICAgICAgdGhpcy5CdXR0b25CR0NvbG9yID0gXCJ3aGl0ZVwiLy8jOTY5NTdcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuTWVudUNvbG9yKSB7XHJcbiAgICAgIHRoaXMuTWVudUJHQ29sb3IgPSAnYmxhY2snO1xyXG4gICAgfVxyXG4gICAgdGhpcy5NZW51QkdDb2xvciA9IHRoaXMuTWVudUNvbG9yO1xyXG4gICAgaWYgKCF0aGlzLkhvdmVyTWVudUNvbG9yKSB7XHJcbiAgICAgIHRoaXMuSG92ZXJNZW51Q29sb3IgPSAnZ3JleSc7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4iXX0=
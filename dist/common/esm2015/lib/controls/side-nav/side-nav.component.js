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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1uYXYuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGxvd2NvZGV1bml0L2xjdS1oYW1idXJnZXItbWVudS1zaWRlLW5hdi1jb21tb24vIiwic291cmNlcyI6WyJsaWIvY29udHJvbHMvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEUsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBUy9DLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7O0lBb0QzQixZQUFzQixrQkFBc0M7UUFBdEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQWxENUQsZUFBVSxHQUF3QixJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUM7YUFDbkYsSUFBSSxDQUNILEdBQUc7Ozs7UUFBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUMsQ0FDOUIsQ0FBQztRQWdERixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDOUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLE9BQU8sRUFBVyxDQUFDO1FBQzVDLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDO1FBQzlCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUM7UUFDL0IsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQztJQUNsQyxD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USxrQkFBa0I7Ozs2QkFzQnhCLE1BQU0sU0FBQyxrQkFBa0I7d0JBR3pCLEtBQUssU0FBQyxZQUFZOzRCQUlsQixLQUFLLFNBQUMsZ0JBQWdCO3dCQUd0QixLQUFLLFNBQUMsWUFBWTs2QkFHbEIsS0FBSyxTQUFDLGtCQUFrQjs4QkFHeEIsS0FBSyxTQUFDLG1CQUFtQjsrQkFHekIsS0FBSyxTQUFDLG9CQUFvQjtnQ0FHMUIsS0FBSyxTQUFDLHFCQUFxQjtvQ0FHM0IsS0FBSyxTQUFDLHlCQUF5Qjt5Q0FHL0IsS0FBSyxTQUFDLCtCQUErQjt3QkFHckMsS0FBSyxTQUFDLFlBQVk7c0JBUWxCLFNBQVMsU0FBQyxTQUFTLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOzs7O0lBOUN2QyxzQ0FHSTs7Ozs7SUFFSixxQ0FBeUM7O0lBRXpDLDBDQUN5Qzs7SUFFekMscUNBQ3NDOztJQUd0Qyx5Q0FDc0M7O0lBRXRDLHFDQUN5Qjs7SUFFekIsMENBQzhCOztJQUU5QiwyQ0FDK0I7O0lBRS9CLDRDQUNnQzs7SUFFaEMsNkNBQ2lDOztJQUVqQyxpREFDcUM7O0lBRXJDLHNEQUN5Qzs7SUFFekMscUNBQ3lCOztJQUV6Qix1Q0FBMkI7O0lBQzNCLHlDQUE2Qjs7SUFDN0IsdUNBQTRCOztJQUc1QixtQ0FBb0U7Ozs7O0lBSXhELDhDQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQnJlYWtwb2ludE9ic2VydmVyLCBCcmVha3BvaW50cyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9sYXlvdXQnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgTmF2TGlua01vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzL25hdi1saW5rLm1vZGVsJztcclxuaW1wb3J0IHsgTWF0U2lkZW5hdiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xjdS1zaWRlLW5hdicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NpZGUtbmF2LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zaWRlLW5hdi5jb21wb25lbnQuc2NzcyddICBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTaWRlTmF2Q29tcG9uZW50IHtcclxuXHJcbiAgaXNIYW5kc2V0JDogT2JzZXJ2YWJsZTxib29sZWFuPiA9IHRoaXMuYnJlYWtwb2ludE9ic2VydmVyLm9ic2VydmUoQnJlYWtwb2ludHMuSGFuZHNldClcclxuICAgIC5waXBlKFxyXG4gICAgICBtYXAocmVzdWx0ID0+IHJlc3VsdC5tYXRjaGVzKVxyXG4gICAgKTtcclxuXHJcbiAgcHJvdGVjdGVkIF9uYXZMaW5rczogQXJyYXk8TmF2TGlua01vZGVsPjtcclxuXHJcbiAgQE91dHB1dCgnbmF2LWl0ZW0tY2xpY2tlZCcpXHJcbiAgcHVibGljIE5hdkl0ZW1DbGlja2VkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgQElucHV0KCdtZW51LWl0ZW1zJylcclxuICBwdWJsaWMgTWVudUl0ZW1zOiBBcnJheTxOYXZMaW5rTW9kZWw+O1xyXG5cclxuICAvL3B1YmxpYyBvcGVuZWRTdWJqZWN0OiBTdWJqZWN0PGJvb2xlYW4+O1xyXG4gIEBJbnB1dCgnb3BlbmVkLXN1YmplY3QnKVxyXG4gIHB1YmxpYyBvcGVuZWRTdWJqZWN0OiBTdWJqZWN0PGJvb2xlYW4+XHJcblxyXG4gIEBJbnB1dCgnbWVudS1jb2xvcicpXHJcbiAgcHVibGljIE1lbnVDb2xvcjogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoJ2hvdmVyLW1lbnUtY29sb3InKVxyXG4gIHB1YmxpYyBIb3Zlck1lbnVDb2xvcjogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoJ21hdC1jb250ZW50LXdpZHRoJylcclxuICBwdWJsaWMgTWF0Q29udGVudFdpZHRoOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgnbWF0LWNvbnRlbnQtaGVpZ2h0JylcclxuICBwdWJsaWMgTWF0Q29udGVudEhlaWdodDogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoJ21hdC1jb250YWluZXItd2lkdGgnKVxyXG4gIHB1YmxpYyBNYXRDb250YWluZXJXaWR0aDogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoJ2J1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yJylcclxuICBwdWJsaWMgQnV0dG9uQmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgnYnV0dG9uLWJhY2tncm91bmQtY29sb3ItaG92ZXInKVxyXG4gIHB1YmxpYyBCdXR0b25CYWNrZ3JvdW5kQ29sb3JIb3ZlcjpzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgnZm9udC1jb2xvcicpXHJcbiAgcHVibGljIEZvbnRDb2xvcjogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgTWVudUJHQ29sb3I6IHN0cmluZztcclxuICBwdWJsaWMgQnV0dG9uQkdDb2xvcjogc3RyaW5nO1xyXG4gIHB1YmxpYyBCdXR0b25Ib3ZlcjogYm9vbGVhbjtcclxuXHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3NpZGVuYXYnLCB7IHN0YXRpYzogZmFsc2UgfSkgcHVibGljIHNpZGVuYXY6IE1hdFNpZGVuYXY7XHJcblxyXG4gIC8vIHB1YmxpYyBNZW51Q29sb3I6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGJyZWFrcG9pbnRPYnNlcnZlcjogQnJlYWtwb2ludE9ic2VydmVyKSB7XHJcbiAgICB0aGlzLk5hdkl0ZW1DbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICB0aGlzLm9wZW5lZFN1YmplY3QgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xyXG4gICAgdGhpcy5NYXRDb250ZW50V2lkdGggPSBcIjUwcHhcIjtcclxuICAgIHRoaXMuTWF0Q29udGVudEhlaWdodCA9IFwiNDBweFwiO1xyXG4gICAgdGhpcy5NYXRDb250YWluZXJXaWR0aCA9IFwiNTBweFwiO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXREZWZhdWx0U3R5bGVzKCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICB0aGlzLm9wZW5lZFN1YmplY3Quc3Vic2NyaWJlKChyZXN1bHQ6IGJvb2xlYW4pID0+IHtcclxuICAgICAgdGhpcy5zaWRlbmF2W3Jlc3VsdCA/ICdvcGVuJyA6ICdjbG9zZSddKClcclxuICAgICAgdGhpcy5zZXRTdHlsZXMoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIEJ1dHRvbkNsaWNrZWQoYnV0dG9uKSB7XHJcbiAgICB0aGlzLk5hdkl0ZW1DbGlja2VkLmVtaXQoYnV0dG9uKTtcclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgdG9nZ2xlRHJhd2VyKCkge1xyXG4gICAgdGhpcy5vcGVuZWRTdWJqZWN0Lm5leHQoIXRoaXMuc2lkZW5hdi5vcGVuZWQpO1xyXG4gICAgaWYgKCF0aGlzLnNpZGVuYXYub3BlbmVkKSB7XHJcbiAgICAgIHRoaXMuTWF0Q29udGVudFdpZHRoID0gXCI1MHB4XCI7XHJcbiAgICAgIHRoaXMuTWF0Q29udGFpbmVyV2lkdGggPSBcIjUwcHhcIjtcclxuICAgICAgdGhpcy5NYXRDb250ZW50SGVpZ2h0ID0gXCI0MHB4XCI7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwic2lkZW5hdiBjbG9zZWRcIiwgdGhpcy5NYXRDb250ZW50V2lkdGgpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuTWF0Q29udGVudFdpZHRoID0gXCIwcHhcIjtcclxuICAgICAgdGhpcy5NYXRDb250ZW50SGVpZ2h0ID0gXCI5NHZoXCI7Ly85NHZoXHJcbiAgICAgIHRoaXMuTWF0Q29udGFpbmVyV2lkdGggPSBcIjIzMHB4XCI7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwic2lkZW5hdiBvcGVuXCIsIHRoaXMuTWF0Q29udGVudFdpZHRoKTtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG4gIHB1YmxpYyBPbkhvdmVyKCk6IHZvaWQge1xyXG4gICAgdGhpcy5NZW51QkdDb2xvciA9IHRoaXMuSG92ZXJNZW51Q29sb3I7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgT25CdXR0b25Ib3ZlcigpOnZvaWR7XHJcbiAgICAvLyB0aGlzLkJ1dHRvbkJHQ29sb3IgPSB0aGlzLkJ1dHRvbkJhY2tncm91bmRDb2xvckhvdmVyO1xyXG4gICAgdGhpcy5CdXR0b25Ib3ZlciA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgTGVhdmVIb3ZlcigpOiB2b2lkIHtcclxuICAgIHRoaXMuTWVudUJHQ29sb3IgPSB0aGlzLk1lbnVDb2xvcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBMZWF2ZUJ1dHRvbkhvdmVyKCk6dm9pZHtcclxuICAgIC8vIHRoaXMuQnV0dG9uQkdDb2xvciA9IHRoaXMuQnV0dG9uQmFja2dyb3VuZENvbG9yO1xyXG4gICAgdGhpcy5CdXR0b25Ib3ZlciA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLy8gcHVibGljIHNldEJ1dHRvblN0eWxlcygpIHtcclxuICAvLyAgIGxldCBzdHlsZXMgPSB7XHJcbiAgLy8gICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogdGhpcy5CdXR0b25Ib3ZlciA/IHRoaXMuQnV0dG9uQmFja2dyb3VuZENvbG9ySG92ZXIgOiB0aGlzLkJ1dHRvbkJhY2tncm91bmRDb2xvclxyXG4gIC8vICAgfTtcclxuICAvLyAgIHJldHVybiBzdHlsZXM7XHJcbiAgLy8gfVxyXG4gIHByb3RlY3RlZCBzZXRTdHlsZXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLk1hdENvbnRlbnRXaWR0aCA9IFwiNTBweFwiO1xyXG4gICAgdGhpcy5NYXRDb250YWluZXJXaWR0aCA9IFwiNTBweFwiO1xyXG4gICAgdGhpcy5NYXRDb250ZW50SGVpZ2h0ID0gXCI0MHB4XCI7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgc2V0RGVmYXVsdFN0eWxlcygpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0U3R5bGVzKCk7XHJcblxyXG4gICAgaWYoIXRoaXMuRm9udENvbG9yKXtcclxuICAgICAgdGhpcy5Gb250Q29sb3IgPSAnYmxhY2snO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKCF0aGlzLkJ1dHRvbkJhY2tncm91bmRDb2xvckhvdmVyKXtcclxuICAgICAgdGhpcy5CdXR0b25CYWNrZ3JvdW5kQ29sb3JIb3ZlciA9IFwiZ3JleVwiLy8jOTY5NTdcclxuICAgIH1cclxuICAgIGlmKCF0aGlzLkJ1dHRvbkJhY2tncm91bmRDb2xvcil7XHJcbiAgICAgIHRoaXMuQnV0dG9uQkdDb2xvciA9IFwid2hpdGVcIi8vIzk2OTU3XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLk1lbnVDb2xvcikge1xyXG4gICAgICB0aGlzLk1lbnVCR0NvbG9yID0gJ2JsYWNrJztcclxuICAgIH1cclxuICAgIHRoaXMuTWVudUJHQ29sb3IgPSB0aGlzLk1lbnVDb2xvcjtcclxuICAgIGlmICghdGhpcy5Ib3Zlck1lbnVDb2xvcikge1xyXG4gICAgICB0aGlzLkhvdmVyTWVudUNvbG9yID0gJ2dyZXknO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuIl19
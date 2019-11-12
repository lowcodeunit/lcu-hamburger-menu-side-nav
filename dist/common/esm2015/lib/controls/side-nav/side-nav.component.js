/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatSidenav } from '@angular/material';
export class SideNavComponent {
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
        this.openedSubject = new Subject();
        this.MatContentWidth = "40px";
        this.MatContentHeight = "40px";
        this.MatContainerWidth = "40px";
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
     * @return {?}
     */
    toggleDrawer() {
        this.openedSubject.next(!this.sidenav.opened);
        if (!this.sidenav.opened) {
            this.MatContentWidth = "40px";
            this.MatContainerWidth = "40px";
            this.MatContentHeight = "40px";
            // console.log("sidenav closed", this.MatContentWidth);
        }
        else {
            this.MatContentWidth = "0px";
            this.MatContentHeight = "94vh"; //94vh
            this.MatContainerWidth = "210px";
            // console.log("sidenav open", this.MatContentWidth);
        }
    }
    /**
     * @return {?}
     */
    OnHover() {
        this.MenuColor = this.HoverColor;
    }
    /**
     * @return {?}
     */
    LeaveHover() {
        this.MenuColor = this.Color;
    }
    /**
     * @protected
     * @return {?}
     */
    setStyles() {
        this.MatContentWidth = "40px";
        this.MatContainerWidth = "40px";
        this.MatContentHeight = "40px";
    }
    /**
     * @protected
     * @return {?}
     */
    setDefaultStyles() {
        this.setStyles();
        if (!this.Color) {
            this.Color = 'black';
        }
        this.MenuColor = this.Color;
        if (!this.HoverColor) {
            this.HoverColor = 'grey';
        }
    }
}
SideNavComponent.decorators = [
    { type: Component, args: [{
                selector: 'lcu-side-nav',
                template: "<mat-sidenav-container  class=\"mat-sidenav-container\" [hasBackdrop]=\"false\" [ngStyle]=\"{width: MatContainerWidth}\">\r\n  <mat-sidenav-content class=\"mat-sidenav-content\" [ngStyle]=\"{width: MatContentWidth, height: MatContentHeight}\">\r\n    <button  class=\"hamburger-menu\" mat-icon-button (click)=\"toggleDrawer()\" >\r\n      <mat-icon [inline]=\"true\" (mouseover)=\"OnHover()\" (mouseleave)=\"LeaveHover()\"[ngStyle]=\"{'color':MenuColor}\" >menu</mat-icon>\r\n    </button>\r\n  </mat-sidenav-content>\r\n  <!-- Builds the hamburger menu from the items in the constants.ts file-->\r\n  <mat-sidenav class=\"side-nav\" #sidenav mode=\"side\" (click)=\"toggleDrawer()\">\r\n    <button class=\"hamburger-menu\" mat-icon-button>\r\n      <mat-icon [inline]=\"true\" (mouseover)=\"OnHover()\" (mouseleave)=\"LeaveHover()\"[ngStyle]=\"{'color':MenuColor}\">menu</mat-icon>\r\n    </button>\r\n    <!--  -->\r\n    <div class=\"button-container\" fxLayout=\"column\" fxLayoutAlign=\"space-between\">\r\n      <button class=\"item-button\" mat-menu-item fxLayoutAlign=\"space-between center\" *ngFor=\"let item of MenuItems\"\r\n        [disabled]=item.Disabled [routerLink]=[item.Url,item.Param]>\r\n        <!-- <mat-icon *ngIf=\"item.Icon\">{{ item.Icon }}</mat-icon> -->\r\n        <span>{{ item.Label }}</span>\r\n      </button>\r\n    </div>\r\n    \r\n  </mat-sidenav>\r\n</mat-sidenav-container>",
                styles: [".hamburger-menu{background-color:transparent;border-width:0;outline:0;font-size:30px}.mat-sidenav-container{z-index:2;background-color:transparent}::ng-deep .mat-sidenav-container .mat-drawer-inner-container{z-index:10!important;background-color:transparent!important;overflow:hidden!important}.mat-sidenav-content{background-color:transparent;overflow:hidden}.side-nav{height:100vh;width:210px;background-color:transparent;border-right:transparent;overflow:hidden}.button-container{height:81.5%;background-color:transparent;z-index:10;width:100%}.button-container .item-button{height:40px;width:100%;background-color:#fff;font-size:20px}.button-container .item-button:hover{background-color:Grey}"]
            }] }
];
/** @nocollapse */
SideNavComponent.ctorParameters = () => [
    { type: BreakpointObserver }
];
SideNavComponent.propDecorators = {
    MenuItems: [{ type: Input, args: ['menu-items',] }],
    openedSubject: [{ type: Input, args: ['opened-subject',] }],
    Color: [{ type: Input, args: ['color',] }],
    HoverColor: [{ type: Input, args: ['hover-color',] }],
    MatContentWidth: [{ type: Input, args: ['mat-content-width',] }],
    MatContentHeight: [{ type: Input, args: ['mat-content-height',] }],
    MatContainerWidth: [{ type: Input, args: ['mat-container-width',] }],
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
    SideNavComponent.prototype.MenuItems;
    /** @type {?} */
    SideNavComponent.prototype.openedSubject;
    /** @type {?} */
    SideNavComponent.prototype.Color;
    /** @type {?} */
    SideNavComponent.prototype.HoverColor;
    /** @type {?} */
    SideNavComponent.prototype.MatContentWidth;
    /** @type {?} */
    SideNavComponent.prototype.MatContentHeight;
    /** @type {?} */
    SideNavComponent.prototype.MatContainerWidth;
    /** @type {?} */
    SideNavComponent.prototype.sidenav;
    /** @type {?} */
    SideNavComponent.prototype.MenuColor;
    /**
     * @type {?}
     * @protected
     */
    SideNavComponent.prototype.breakpointObserver;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1uYXYuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGxvd2NvZGV1bml0L2xjdS1oYW1idXJnZXItbWVudS1zaWRlLW5hdi1jb21tb24vIiwic291cmNlcyI6WyJsaWIvY29udHJvbHMvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RFLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQVMvQyxNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBbUMzQixZQUFzQixrQkFBc0M7UUFBdEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQWpDNUQsZUFBVSxHQUF3QixJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUM7YUFDbkYsSUFBSSxDQUNILEdBQUc7Ozs7UUFBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUMsQ0FDOUIsQ0FBQztRQStCSCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksT0FBTyxFQUFXLENBQUM7UUFDNUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUM7UUFDOUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQztRQUMvQixJQUFJLENBQUMsaUJBQWlCLEdBQUUsTUFBTSxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFFTSxRQUFRO1FBQ2IsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLE1BQWUsRUFBQyxFQUFFO1lBQzlDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUE7WUFDeEMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ25CLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUdNLFlBQVk7UUFDakIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlDLElBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBQztZQUN4QixJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQztZQUM5QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUM7WUFDL0IsdURBQXVEO1NBQ3hEO2FBQ0c7WUFDRixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztZQUM3QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLENBQUEsTUFBTTtZQUNyQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsT0FBTyxDQUFDO1lBQ2pDLHFEQUFxRDtTQUV0RDtJQUNELENBQUM7Ozs7SUFDTSxPQUFPO1FBQ1osSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ25DLENBQUM7Ozs7SUFFTSxVQUFVO1FBQ2YsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBQ1MsU0FBUztRQUNqQixJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQztRQUM5QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUM7SUFDakMsQ0FBQzs7Ozs7SUFFUyxnQkFBZ0I7UUFDeEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRWpCLElBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFDO1lBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7U0FDdEI7UUFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDNUIsSUFBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUM7WUFDbEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7U0FDMUI7SUFDSCxDQUFDOzs7WUFuR0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixpNUNBQXdDOzthQUV6Qzs7OztZQVhRLGtCQUFrQjs7O3dCQXNCeEIsS0FBSyxTQUFDLFlBQVk7NEJBSWxCLEtBQUssU0FBQyxnQkFBZ0I7b0JBR3RCLEtBQUssU0FBQyxPQUFPO3lCQUdiLEtBQUssU0FBQyxhQUFhOzhCQUduQixLQUFLLFNBQUMsbUJBQW1COytCQUd6QixLQUFLLFNBQUMsb0JBQW9CO2dDQUcxQixLQUFLLFNBQUMscUJBQXFCO3NCQUczQixTQUFTLFNBQUMsU0FBUyxFQUFDLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQzs7OztJQTdCcEMsc0NBR0k7Ozs7O0lBRUoscUNBQXlDOztJQUV6QyxxQ0FDc0M7O0lBR3RDLHlDQUNzQzs7SUFFdEMsaUNBQ3FCOztJQUVyQixzQ0FDMEI7O0lBRTFCLDJDQUMrQjs7SUFFL0IsNENBQ2dDOztJQUVoQyw2Q0FDaUM7O0lBRWpDLG1DQUFpRTs7SUFFakUscUNBQXlCOzs7OztJQUViLDhDQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCcmVha3BvaW50T2JzZXJ2ZXIsIEJyZWFrcG9pbnRzIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2xheW91dCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBOYXZMaW5rTW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbHMvbmF2LWxpbmsubW9kZWwnO1xyXG5pbXBvcnQgeyBNYXRTaWRlbmF2IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGN1LXNpZGUtbmF2JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2lkZS1uYXYuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3NpZGUtbmF2LmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTaWRlTmF2Q29tcG9uZW50IHtcclxuXHJcbiAgaXNIYW5kc2V0JDogT2JzZXJ2YWJsZTxib29sZWFuPiA9IHRoaXMuYnJlYWtwb2ludE9ic2VydmVyLm9ic2VydmUoQnJlYWtwb2ludHMuSGFuZHNldClcclxuICAgIC5waXBlKFxyXG4gICAgICBtYXAocmVzdWx0ID0+IHJlc3VsdC5tYXRjaGVzKVxyXG4gICAgKTtcclxuXHJcbiAgcHJvdGVjdGVkIF9uYXZMaW5rczogQXJyYXk8TmF2TGlua01vZGVsPjtcclxuICBcclxuICBASW5wdXQoJ21lbnUtaXRlbXMnKSBcclxuICBwdWJsaWMgTWVudUl0ZW1zOiBBcnJheTxOYXZMaW5rTW9kZWw+O1xyXG5cclxuICAvL3B1YmxpYyBvcGVuZWRTdWJqZWN0OiBTdWJqZWN0PGJvb2xlYW4+O1xyXG4gIEBJbnB1dCgnb3BlbmVkLXN1YmplY3QnKSBcclxuICBwdWJsaWMgb3BlbmVkU3ViamVjdDogU3ViamVjdDxib29sZWFuPlxyXG5cclxuICBASW5wdXQoJ2NvbG9yJylcclxuICBwdWJsaWMgQ29sb3I6IHN0cmluZztcclxuXHJcbiAgQElucHV0KCdob3Zlci1jb2xvcicpXHJcbiAgcHVibGljIEhvdmVyQ29sb3I6IHN0cmluZztcclxuICBcclxuICBASW5wdXQoJ21hdC1jb250ZW50LXdpZHRoJylcclxuICBwdWJsaWMgTWF0Q29udGVudFdpZHRoOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgnbWF0LWNvbnRlbnQtaGVpZ2h0JylcclxuICBwdWJsaWMgTWF0Q29udGVudEhlaWdodDogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoJ21hdC1jb250YWluZXItd2lkdGgnKVxyXG4gIHB1YmxpYyBNYXRDb250YWluZXJXaWR0aDogc3RyaW5nO1xyXG5cclxuICBAVmlld0NoaWxkKCdzaWRlbmF2Jyx7c3RhdGljOiBmYWxzZX0pIHB1YmxpYyBzaWRlbmF2OiBNYXRTaWRlbmF2O1xyXG5cclxuICBwdWJsaWMgTWVudUNvbG9yOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBicmVha3BvaW50T2JzZXJ2ZXI6IEJyZWFrcG9pbnRPYnNlcnZlcikge1xyXG4gICB0aGlzLm9wZW5lZFN1YmplY3QgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xyXG4gICB0aGlzLk1hdENvbnRlbnRXaWR0aCA9IFwiNDBweFwiO1xyXG4gICB0aGlzLk1hdENvbnRlbnRIZWlnaHQgPSBcIjQwcHhcIjtcclxuICAgdGhpcy5NYXRDb250YWluZXJXaWR0aD0gXCI0MHB4XCI7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldERlZmF1bHRTdHlsZXMoKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgIHRoaXMub3BlbmVkU3ViamVjdC5zdWJzY3JpYmUoKHJlc3VsdDogYm9vbGVhbik9PntcclxuICAgICAgdGhpcy5zaWRlbmF2W3Jlc3VsdCA/ICdvcGVuJzogJ2Nsb3NlJ10oKVxyXG4gICAgICB0aGlzLnNldFN0eWxlcygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIHRvZ2dsZURyYXdlcigpIHtcclxuICAgIHRoaXMub3BlbmVkU3ViamVjdC5uZXh0KCF0aGlzLnNpZGVuYXYub3BlbmVkKTtcclxuICAgIGlmKCF0aGlzLnNpZGVuYXYub3BlbmVkKXtcclxuICAgIHRoaXMuTWF0Q29udGVudFdpZHRoID0gXCI0MHB4XCI7XHJcbiAgICB0aGlzLk1hdENvbnRhaW5lcldpZHRoID0gXCI0MHB4XCI7XHJcbiAgICB0aGlzLk1hdENvbnRlbnRIZWlnaHQgPSBcIjQwcHhcIjtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwic2lkZW5hdiBjbG9zZWRcIiwgdGhpcy5NYXRDb250ZW50V2lkdGgpO1xyXG4gIH1cclxuICBlbHNle1xyXG4gICAgdGhpcy5NYXRDb250ZW50V2lkdGggPSBcIjBweFwiO1xyXG4gICAgdGhpcy5NYXRDb250ZW50SGVpZ2h0ID0gXCI5NHZoXCI7Ly85NHZoXHJcbiAgICB0aGlzLk1hdENvbnRhaW5lcldpZHRoID0gXCIyMTBweFwiO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJzaWRlbmF2IG9wZW5cIiwgdGhpcy5NYXRDb250ZW50V2lkdGgpO1xyXG5cclxuICB9XHJcbiAgfVxyXG4gIHB1YmxpYyBPbkhvdmVyKCk6dm9pZHtcclxuICAgIHRoaXMuTWVudUNvbG9yID0gdGhpcy5Ib3ZlckNvbG9yO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIExlYXZlSG92ZXIoKTogdm9pZHtcclxuICAgIHRoaXMuTWVudUNvbG9yID0gdGhpcy5Db2xvcjtcclxuICB9XHJcbiAgcHJvdGVjdGVkIHNldFN0eWxlcygpOnZvaWR7XHJcbiAgICB0aGlzLk1hdENvbnRlbnRXaWR0aCA9IFwiNDBweFwiO1xyXG4gICAgdGhpcy5NYXRDb250YWluZXJXaWR0aCA9IFwiNDBweFwiO1xyXG4gICAgdGhpcy5NYXRDb250ZW50SGVpZ2h0ID0gXCI0MHB4XCI7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgc2V0RGVmYXVsdFN0eWxlcygpOiB2b2lke1xyXG4gICAgdGhpcy5zZXRTdHlsZXMoKTtcclxuICAgIFxyXG4gICAgaWYoIXRoaXMuQ29sb3Ipe1xyXG4gICAgICB0aGlzLkNvbG9yID0gJ2JsYWNrJztcclxuICAgIH1cclxuICAgIHRoaXMuTWVudUNvbG9yID0gdGhpcy5Db2xvcjtcclxuICAgIGlmKCF0aGlzLkhvdmVyQ29sb3Ipe1xyXG4gICAgICB0aGlzLkhvdmVyQ29sb3IgPSAnZ3JleSc7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4iXX0=
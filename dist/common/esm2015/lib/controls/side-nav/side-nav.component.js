/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatSidenav } from '@angular/material';
export class SideNavComponent {
    // @ViewChild('sidenav', { static: true })public sidenav: MatSidenav;
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
        //this.SideOpen = false;
        this.MatContentWidth = "40px";
        this.MatContentHeight = "40px";
        this.MatContainerWidth = "40px";
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set OpenedSubject(value) {
        this.openedSubject = value;
        console.log("contentWidth: ", this.MatContentWidth);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        // this.openedSubject.subscribe(
        //   keepOpen => this.sidenav[keepOpen ? 'open' : 'close']()
        // );
        this.openedSubject.subscribe((/**
         * @param {?} result
         * @return {?}
         */
        (result) => {
            this.sidenav[result ? 'open' : 'close']();
            this.setStyles();
        }));
        //console.log("Opened Subject: ", this.MatContainerWidth);
    }
    /**
     * @return {?}
     */
    toggleDrawer() {
        this.openedSubject.next(!this.sidenav.opened);
        //so the hamburger menu doesnt come all the way across the screen when closing the menu
        if (!this.sidenav.opened) {
            this.MatContentWidth = "40px";
            this.MatContainerWidth = "40px";
            this.MatContentHeight = "40px";
            // console.log("sidenav closed", this.MatContentWidth);
        }
        else {
            this.MatContentWidth = "0px";
            this.MatContentHeight = "100vh";
            this.MatContainerWidth = "210px";
            // console.log("sidenav open", this.MatContentWidth);
        }
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
}
SideNavComponent.decorators = [
    { type: Component, args: [{
                selector: 'lcu-side-nav',
                template: "<mat-sidenav-container  class=\"mat-sidenav-container\" [hasBackdrop]=\"false\" [ngStyle]=\"{width: MatContainerWidth}\">\r\n  <mat-sidenav-content class=\"mat-sidenav-content\" [ngStyle]=\"{width: MatContentWidth, height: MatContentHeight}\">\r\n    <button  class=\"hamburger-menu\" mat-icon-button (click)=\"toggleDrawer()\" >\r\n      <mat-icon [inline]=\"true\">menu</mat-icon>\r\n    </button>\r\n  </mat-sidenav-content>\r\n  <!-- Builds the hamburger menu from the items in the constants.ts file-->\r\n  <mat-sidenav class=\"side-nav\" #sidenav mode=\"side\" (click)=\"toggleDrawer()\">\r\n    <button class=\"hamburger-menu\" mat-icon-button>\r\n      <mat-icon [inline]=\"true\">menu</mat-icon>\r\n    </button>\r\n    <!--  -->\r\n    <div class=\"button-container\" fxLayout=\"column\" fxLayoutAlign=\"space-between\">\r\n      <button class=\"item-button\" mat-menu-item fxLayoutAlign=\"space-between center\" *ngFor=\"let item of MenuItems\"\r\n        [disabled]=item.Disabled [routerLink]=[item.Url,item.Param]>\r\n        <!-- <mat-icon *ngIf=\"item.Icon\">{{ item.Icon }}</mat-icon> -->\r\n        <span>{{ item.Label }}</span>\r\n      </button>\r\n    </div>\r\n    \r\n  </mat-sidenav>\r\n</mat-sidenav-container>",
                styles: [".hamburger-menu{background-color:transparent;border-width:0;outline:0;font-size:30px}.mat-sidenav-container{z-index:2;background-color:transparent}::ng-deep .mat-drawer-inner-container{z-index:10!important;background-color:transparent!important;overflow:hidden!important;height:100vh}.mat-sidenav-content{background-color:transparent;overflow:hidden}.side-nav{height:100vh;width:210px;background-color:transparent;border-right:transparent}.button-container{height:75vh;background-color:transparent;z-index:10;width:210px}.item-button{height:40px;width:100%;background-color:#fff;font-size:20px}.item-button:hover{background-color:Grey}"]
            }] }
];
/** @nocollapse */
SideNavComponent.ctorParameters = () => [
    { type: BreakpointObserver }
];
SideNavComponent.propDecorators = {
    MenuItems: [{ type: Input, args: ['menu-items',] }],
    OpenedSubject: [{ type: Input, args: ['opened-subject',] }],
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
    SideNavComponent.prototype.MatContentWidth;
    /** @type {?} */
    SideNavComponent.prototype.MatContentHeight;
    /** @type {?} */
    SideNavComponent.prototype.MatContainerWidth;
    /** @type {?} */
    SideNavComponent.prototype.sidenav;
    /**
     * @type {?}
     * @protected
     */
    SideNavComponent.prototype.breakpointObserver;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1uYXYuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGxvd2NvZGV1bml0L2xjdS1oYW1idXJnZXItbWVudS1zaWRlLW5hdi1jb21tb24vIiwic291cmNlcyI6WyJsaWIvY29udHJvbHMvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RFLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQVMvQyxNQUFNLE9BQU8sZ0JBQWdCOzs7OztJQTZCM0IsWUFBc0Isa0JBQXNDO1FBQXRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUEzQjVELGVBQVUsR0FBd0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDO2FBQ25GLElBQUksQ0FDSCxHQUFHOzs7O1FBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFDLENBQzlCLENBQUM7UUF5QkgsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLE9BQU8sRUFBVyxDQUFDO1FBQzVDLHdCQUF3QjtRQUN4QixJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQztRQUM5QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDO1FBQy9CLElBQUksQ0FBQyxpQkFBaUIsR0FBRSxNQUFNLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUF0QkQsSUFDVyxhQUFhLENBQUMsS0FBdUI7UUFDOUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7OztJQW9CTSxRQUFRO0lBRWYsQ0FBQzs7OztJQUVELGtCQUFrQjtRQUNoQixnQ0FBZ0M7UUFDaEMsNERBQTREO1FBQzVELEtBQUs7UUFDTCxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLE1BQWUsRUFBQyxFQUFFO1lBQzlDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUE7WUFDeEMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ25CLENBQUMsRUFBQyxDQUFDO1FBQ0gsMERBQTBEO0lBQzVELENBQUM7Ozs7SUFHTSxZQUFZO1FBQ2pCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5Qyx1RkFBdUY7UUFDdkYsSUFBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFDO1lBQ3hCLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDO1lBQzlCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLENBQUM7WUFDaEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQztZQUMvQix1REFBdUQ7U0FDeEQ7YUFDRztZQUNGLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1lBQzdCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxPQUFPLENBQUM7WUFDaEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE9BQU8sQ0FBQztZQUNqQyxxREFBcUQ7U0FFdEQ7SUFDRCxDQUFDOzs7OztJQUNTLFNBQVM7UUFDakIsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUM7UUFDOUIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQztRQUNoQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDO0lBQ2pDLENBQUM7OztZQWhGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLDh0Q0FBd0M7O2FBRXpDOzs7O1lBWFEsa0JBQWtCOzs7d0JBc0J4QixLQUFLLFNBQUMsWUFBWTs0QkFJbEIsS0FBSyxTQUFDLGdCQUFnQjtzQkFZdEIsU0FBUyxTQUFDLFNBQVMsRUFBQyxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUM7Ozs7SUF2QnBDLHNDQUdJOzs7OztJQUVKLHFDQUF5Qzs7SUFFekMscUNBQ3NDOztJQUV0Qyx5Q0FBdUM7O0lBT3ZDLDJDQUErQjs7SUFFL0IsNENBQWdDOztJQUVoQyw2Q0FBaUM7O0lBRWpDLG1DQUFpRTs7Ozs7SUFJckQsOENBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJyZWFrcG9pbnRPYnNlcnZlciwgQnJlYWtwb2ludHMgfSBmcm9tICdAYW5ndWxhci9jZGsvbGF5b3V0JztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IE5hdkxpbmtNb2RlbCB9IGZyb20gJy4uLy4uL21vZGVscy9uYXYtbGluay5tb2RlbCc7XHJcbmltcG9ydCB7IE1hdFNpZGVuYXYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsY3Utc2lkZS1uYXYnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWRlLW5hdi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc2lkZS1uYXYuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNpZGVOYXZDb21wb25lbnQge1xyXG5cclxuICBpc0hhbmRzZXQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5icmVha3BvaW50T2JzZXJ2ZXIub2JzZXJ2ZShCcmVha3BvaW50cy5IYW5kc2V0KVxyXG4gICAgLnBpcGUoXHJcbiAgICAgIG1hcChyZXN1bHQgPT4gcmVzdWx0Lm1hdGNoZXMpXHJcbiAgICApO1xyXG5cclxuICBwcm90ZWN0ZWQgX25hdkxpbmtzOiBBcnJheTxOYXZMaW5rTW9kZWw+O1xyXG4gIFxyXG4gIEBJbnB1dCgnbWVudS1pdGVtcycpIFxyXG4gIHB1YmxpYyBNZW51SXRlbXM6IEFycmF5PE5hdkxpbmtNb2RlbD47XHJcblxyXG4gIHB1YmxpYyBvcGVuZWRTdWJqZWN0OiBTdWJqZWN0PGJvb2xlYW4+O1xyXG4gIEBJbnB1dCgnb3BlbmVkLXN1YmplY3QnKSBcclxuICBwdWJsaWMgc2V0IE9wZW5lZFN1YmplY3QodmFsdWU6IFN1YmplY3Q8Ym9vbGVhbj4pe1xyXG4gICAgdGhpcy5vcGVuZWRTdWJqZWN0ID0gdmFsdWU7XHJcbiAgICBjb25zb2xlLmxvZyhcImNvbnRlbnRXaWR0aDogXCIsIHRoaXMuTWF0Q29udGVudFdpZHRoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBNYXRDb250ZW50V2lkdGg6IHN0cmluZztcclxuXHJcbiAgcHVibGljIE1hdENvbnRlbnRIZWlnaHQ6IHN0cmluZztcclxuXHJcbiAgcHVibGljIE1hdENvbnRhaW5lcldpZHRoOiBzdHJpbmc7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3NpZGVuYXYnLHtzdGF0aWM6IGZhbHNlfSkgcHVibGljIHNpZGVuYXY6IE1hdFNpZGVuYXY7XHJcbiAgLy8gQFZpZXdDaGlsZCgnc2lkZW5hdicsIHsgc3RhdGljOiB0cnVlIH0pcHVibGljIHNpZGVuYXY6IE1hdFNpZGVuYXY7XHJcblxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYnJlYWtwb2ludE9ic2VydmVyOiBCcmVha3BvaW50T2JzZXJ2ZXIpIHtcclxuICAgdGhpcy5vcGVuZWRTdWJqZWN0ID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcclxuICAgLy90aGlzLlNpZGVPcGVuID0gZmFsc2U7XHJcbiAgIHRoaXMuTWF0Q29udGVudFdpZHRoID0gXCI0MHB4XCI7XHJcbiAgIHRoaXMuTWF0Q29udGVudEhlaWdodCA9IFwiNDBweFwiO1xyXG4gICB0aGlzLk1hdENvbnRhaW5lcldpZHRoPSBcIjQwcHhcIjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgLy8gdGhpcy5vcGVuZWRTdWJqZWN0LnN1YnNjcmliZShcclxuICAgIC8vICAga2VlcE9wZW4gPT4gdGhpcy5zaWRlbmF2W2tlZXBPcGVuID8gJ29wZW4nIDogJ2Nsb3NlJ10oKVxyXG4gICAgLy8gKTtcclxuICAgIHRoaXMub3BlbmVkU3ViamVjdC5zdWJzY3JpYmUoKHJlc3VsdDogYm9vbGVhbik9PntcclxuICAgICAgdGhpcy5zaWRlbmF2W3Jlc3VsdCA/ICdvcGVuJzogJ2Nsb3NlJ10oKVxyXG4gICAgICB0aGlzLnNldFN0eWxlcygpO1xyXG4gICAgfSk7XHJcbiAgICAvL2NvbnNvbGUubG9nKFwiT3BlbmVkIFN1YmplY3Q6IFwiLCB0aGlzLk1hdENvbnRhaW5lcldpZHRoKTtcclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgdG9nZ2xlRHJhd2VyKCkge1xyXG4gICAgdGhpcy5vcGVuZWRTdWJqZWN0Lm5leHQoIXRoaXMuc2lkZW5hdi5vcGVuZWQpO1xyXG4gICAgLy9zbyB0aGUgaGFtYnVyZ2VyIG1lbnUgZG9lc250IGNvbWUgYWxsIHRoZSB3YXkgYWNyb3NzIHRoZSBzY3JlZW4gd2hlbiBjbG9zaW5nIHRoZSBtZW51XHJcbiAgICBpZighdGhpcy5zaWRlbmF2Lm9wZW5lZCl7XHJcbiAgICB0aGlzLk1hdENvbnRlbnRXaWR0aCA9IFwiNDBweFwiO1xyXG4gICAgdGhpcy5NYXRDb250YWluZXJXaWR0aCA9IFwiNDBweFwiO1xyXG4gICAgdGhpcy5NYXRDb250ZW50SGVpZ2h0ID0gXCI0MHB4XCI7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcInNpZGVuYXYgY2xvc2VkXCIsIHRoaXMuTWF0Q29udGVudFdpZHRoKTtcclxuICB9XHJcbiAgZWxzZXtcclxuICAgIHRoaXMuTWF0Q29udGVudFdpZHRoID0gXCIwcHhcIjtcclxuICAgIHRoaXMuTWF0Q29udGVudEhlaWdodCA9IFwiMTAwdmhcIjtcclxuICAgIHRoaXMuTWF0Q29udGFpbmVyV2lkdGggPSBcIjIxMHB4XCI7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcInNpZGVuYXYgb3BlblwiLCB0aGlzLk1hdENvbnRlbnRXaWR0aCk7XHJcblxyXG4gIH1cclxuICB9XHJcbiAgcHJvdGVjdGVkIHNldFN0eWxlcygpOnZvaWR7XHJcbiAgICB0aGlzLk1hdENvbnRlbnRXaWR0aCA9IFwiNDBweFwiO1xyXG4gICAgdGhpcy5NYXRDb250YWluZXJXaWR0aCA9IFwiNDBweFwiO1xyXG4gICAgdGhpcy5NYXRDb250ZW50SGVpZ2h0ID0gXCI0MHB4XCI7XHJcbiAgfVxyXG59XHJcblxyXG4iXX0=
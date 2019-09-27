/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatSidenav } from '@angular/material';
var SideNavComponent = /** @class */ (function () {
    function SideNavComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
            .pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return result.matches; })));
        this.openedSubject = new Subject();
        this.MatContentWidth = "40px";
        this.MatContentHeight = "40px";
        this.MatContainerWidth = "40px";
    }
    /**
     * @return {?}
     */
    SideNavComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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
     * @return {?}
     */
    SideNavComponent.prototype.toggleDrawer = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @protected
     * @return {?}
     */
    SideNavComponent.prototype.setStyles = /**
     * @protected
     * @return {?}
     */
    function () {
        this.MatContentWidth = "40px";
        this.MatContainerWidth = "40px";
        this.MatContentHeight = "40px";
    };
    SideNavComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lcu-side-nav',
                    template: "<mat-sidenav-container  class=\"mat-sidenav-container\" [hasBackdrop]=\"false\" [ngStyle]=\"{width: MatContainerWidth}\">\r\n  <mat-sidenav-content class=\"mat-sidenav-content\" [ngStyle]=\"{width: MatContentWidth, height: MatContentHeight}\">\r\n    <button  class=\"hamburger-menu\" mat-icon-button (click)=\"toggleDrawer()\" >\r\n      <mat-icon [inline]=\"true\">menu</mat-icon>\r\n    </button>\r\n  </mat-sidenav-content>\r\n  <!-- Builds the hamburger menu from the items in the constants.ts file-->\r\n  <mat-sidenav class=\"side-nav\" #sidenav mode=\"side\" (click)=\"toggleDrawer()\">\r\n    <button class=\"hamburger-menu\" mat-icon-button>\r\n      <mat-icon [inline]=\"true\">menu</mat-icon>\r\n    </button>\r\n    <!--  -->\r\n    <div class=\"button-container\" fxLayout=\"column\" fxLayoutAlign=\"space-between\">\r\n      <button class=\"item-button\" mat-menu-item fxLayoutAlign=\"space-between center\" *ngFor=\"let item of MenuItems\"\r\n        [disabled]=item.Disabled [routerLink]=[item.Url,item.Param]>\r\n        <!-- <mat-icon *ngIf=\"item.Icon\">{{ item.Icon }}</mat-icon> -->\r\n        <span>{{ item.Label }}</span>\r\n      </button>\r\n    </div>\r\n    \r\n  </mat-sidenav>\r\n</mat-sidenav-container>",
                    styles: [".hamburger-menu{background-color:transparent;border-width:0;outline:0;font-size:30px}.mat-sidenav-container{z-index:2;background-color:transparent}::ng-deep .mat-sidenav-container .mat-drawer-inner-container{z-index:10!important;background-color:transparent!important;overflow:hidden!important}.mat-sidenav-content{background-color:transparent;overflow:hidden}.side-nav{height:100vh;width:210px;background-color:transparent;border-right:transparent;overflow:hidden}.button-container{height:81.5%;background-color:transparent;z-index:10;width:100%}.button-container .item-button{height:40px;width:100%;background-color:#fff;font-size:20px}.button-container .item-button:hover{background-color:Grey}"]
                }] }
    ];
    /** @nocollapse */
    SideNavComponent.ctorParameters = function () { return [
        { type: BreakpointObserver }
    ]; };
    SideNavComponent.propDecorators = {
        MenuItems: [{ type: Input, args: ['menu-items',] }],
        openedSubject: [{ type: Input, args: ['opened-subject',] }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1uYXYuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGxvd2NvZGV1bml0L2xjdS1oYW1idXJnZXItbWVudS1zaWRlLW5hdi1jb21tb24vIiwic291cmNlcyI6WyJsaWIvY29udHJvbHMvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RFLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUcvQztJQThCRSwwQkFBc0Isa0JBQXNDO1FBQXRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUF0QjVELGVBQVUsR0FBd0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDO2FBQ25GLElBQUksQ0FDSCxHQUFHOzs7O1FBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsRUFBQyxDQUM5QixDQUFDO1FBb0JILElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxPQUFPLEVBQVcsQ0FBQztRQUM1QyxJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQztRQUM5QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDO1FBQy9CLElBQUksQ0FBQyxpQkFBaUIsR0FBRSxNQUFNLENBQUM7SUFDaEMsQ0FBQzs7OztJQUVNLG1DQUFROzs7SUFBZjtJQUVBLENBQUM7Ozs7SUFFRCw2Q0FBa0I7OztJQUFsQjtRQUFBLGlCQUtDO1FBSkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxNQUFlO1lBQzNDLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUE7WUFDeEMsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ25CLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUdNLHVDQUFZOzs7SUFBbkI7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUMsSUFBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFDO1lBQ3hCLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDO1lBQzlCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLENBQUM7WUFDaEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQztZQUMvQix1REFBdUQ7U0FDeEQ7YUFDRztZQUNGLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1lBQzdCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsQ0FBQSxNQUFNO1lBQ3JDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxPQUFPLENBQUM7WUFDakMscURBQXFEO1NBRXREO0lBQ0QsQ0FBQzs7Ozs7SUFDUyxvQ0FBUzs7OztJQUFuQjtRQUNFLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDO1FBQzlCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLENBQUM7UUFDaEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQztJQUNqQyxDQUFDOztnQkFyRUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4Qiw4dENBQXdDOztpQkFFekM7Ozs7Z0JBWFEsa0JBQWtCOzs7NEJBc0J4QixLQUFLLFNBQUMsWUFBWTtnQ0FJbEIsS0FBSyxTQUFDLGdCQUFnQjswQkFTdEIsU0FBUyxTQUFDLFNBQVMsRUFBQyxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUM7O0lBMEN0Qyx1QkFBQztDQUFBLEFBdEVELElBc0VDO1NBaEVZLGdCQUFnQjs7O0lBRTNCLHNDQUdJOzs7OztJQUVKLHFDQUF5Qzs7SUFFekMscUNBQ3NDOztJQUd0Qyx5Q0FDc0M7O0lBRXRDLDJDQUErQjs7SUFFL0IsNENBQWdDOztJQUVoQyw2Q0FBaUM7O0lBRWpDLG1DQUFpRTs7Ozs7SUFFckQsOENBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJyZWFrcG9pbnRPYnNlcnZlciwgQnJlYWtwb2ludHMgfSBmcm9tICdAYW5ndWxhci9jZGsvbGF5b3V0JztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IE5hdkxpbmtNb2RlbCB9IGZyb20gJy4uLy4uL21vZGVscy9uYXYtbGluay5tb2RlbCc7XHJcbmltcG9ydCB7IE1hdFNpZGVuYXYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsY3Utc2lkZS1uYXYnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWRlLW5hdi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc2lkZS1uYXYuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNpZGVOYXZDb21wb25lbnQge1xyXG5cclxuICBpc0hhbmRzZXQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5icmVha3BvaW50T2JzZXJ2ZXIub2JzZXJ2ZShCcmVha3BvaW50cy5IYW5kc2V0KVxyXG4gICAgLnBpcGUoXHJcbiAgICAgIG1hcChyZXN1bHQgPT4gcmVzdWx0Lm1hdGNoZXMpXHJcbiAgICApO1xyXG5cclxuICBwcm90ZWN0ZWQgX25hdkxpbmtzOiBBcnJheTxOYXZMaW5rTW9kZWw+O1xyXG4gIFxyXG4gIEBJbnB1dCgnbWVudS1pdGVtcycpIFxyXG4gIHB1YmxpYyBNZW51SXRlbXM6IEFycmF5PE5hdkxpbmtNb2RlbD47XHJcblxyXG4gIC8vcHVibGljIG9wZW5lZFN1YmplY3Q6IFN1YmplY3Q8Ym9vbGVhbj47XHJcbiAgQElucHV0KCdvcGVuZWQtc3ViamVjdCcpIFxyXG4gIHB1YmxpYyBvcGVuZWRTdWJqZWN0OiBTdWJqZWN0PGJvb2xlYW4+XHJcblxyXG4gIHB1YmxpYyBNYXRDb250ZW50V2lkdGg6IHN0cmluZztcclxuXHJcbiAgcHVibGljIE1hdENvbnRlbnRIZWlnaHQ6IHN0cmluZztcclxuXHJcbiAgcHVibGljIE1hdENvbnRhaW5lcldpZHRoOiBzdHJpbmc7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3NpZGVuYXYnLHtzdGF0aWM6IGZhbHNlfSkgcHVibGljIHNpZGVuYXY6IE1hdFNpZGVuYXY7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBicmVha3BvaW50T2JzZXJ2ZXI6IEJyZWFrcG9pbnRPYnNlcnZlcikge1xyXG4gICB0aGlzLm9wZW5lZFN1YmplY3QgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xyXG4gICB0aGlzLk1hdENvbnRlbnRXaWR0aCA9IFwiNDBweFwiO1xyXG4gICB0aGlzLk1hdENvbnRlbnRIZWlnaHQgPSBcIjQwcHhcIjtcclxuICAgdGhpcy5NYXRDb250YWluZXJXaWR0aD0gXCI0MHB4XCI7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgIHRoaXMub3BlbmVkU3ViamVjdC5zdWJzY3JpYmUoKHJlc3VsdDogYm9vbGVhbik9PntcclxuICAgICAgdGhpcy5zaWRlbmF2W3Jlc3VsdCA/ICdvcGVuJzogJ2Nsb3NlJ10oKVxyXG4gICAgICB0aGlzLnNldFN0eWxlcygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIHRvZ2dsZURyYXdlcigpIHtcclxuICAgIHRoaXMub3BlbmVkU3ViamVjdC5uZXh0KCF0aGlzLnNpZGVuYXYub3BlbmVkKTtcclxuICAgIGlmKCF0aGlzLnNpZGVuYXYub3BlbmVkKXtcclxuICAgIHRoaXMuTWF0Q29udGVudFdpZHRoID0gXCI0MHB4XCI7XHJcbiAgICB0aGlzLk1hdENvbnRhaW5lcldpZHRoID0gXCI0MHB4XCI7XHJcbiAgICB0aGlzLk1hdENvbnRlbnRIZWlnaHQgPSBcIjQwcHhcIjtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwic2lkZW5hdiBjbG9zZWRcIiwgdGhpcy5NYXRDb250ZW50V2lkdGgpO1xyXG4gIH1cclxuICBlbHNle1xyXG4gICAgdGhpcy5NYXRDb250ZW50V2lkdGggPSBcIjBweFwiO1xyXG4gICAgdGhpcy5NYXRDb250ZW50SGVpZ2h0ID0gXCI5NHZoXCI7Ly85NHZoXHJcbiAgICB0aGlzLk1hdENvbnRhaW5lcldpZHRoID0gXCIyMTBweFwiO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJzaWRlbmF2IG9wZW5cIiwgdGhpcy5NYXRDb250ZW50V2lkdGgpO1xyXG5cclxuICB9XHJcbiAgfVxyXG4gIHByb3RlY3RlZCBzZXRTdHlsZXMoKTp2b2lke1xyXG4gICAgdGhpcy5NYXRDb250ZW50V2lkdGggPSBcIjQwcHhcIjtcclxuICAgIHRoaXMuTWF0Q29udGFpbmVyV2lkdGggPSBcIjQwcHhcIjtcclxuICAgIHRoaXMuTWF0Q29udGVudEhlaWdodCA9IFwiNDBweFwiO1xyXG4gIH1cclxufVxyXG5cclxuIl19
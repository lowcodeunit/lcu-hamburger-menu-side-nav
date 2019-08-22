/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatSidenav } from '@angular/material';
var SideNavComponent = /** @class */ (function () {
    // @ViewChild('sidenav', { static: true })public sidenav: MatSidenav;
    function SideNavComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
            .pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return result.matches; })));
        this.openedSubject = new Subject();
        //this.SideOpen = false;
        this.MatContentWidth = "40px";
        this.MatContentHeight = "40px";
        this.MatContainerWidth = "40px";
    }
    Object.defineProperty(SideNavComponent.prototype, "OpenedSubject", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.openedSubject = value;
            console.log("contentWidth: ", this.MatContentWidth);
        },
        enumerable: true,
        configurable: true
    });
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
        // this.openedSubject.subscribe(
        //   keepOpen => this.sidenav[keepOpen ? 'open' : 'close']()
        // );
        this.openedSubject.subscribe((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            _this.sidenav[result ? 'open' : 'close']();
            _this.setStyles();
        }));
        //console.log("Opened Subject: ", this.MatContainerWidth);
    };
    /**
     * @return {?}
     */
    SideNavComponent.prototype.toggleDrawer = /**
     * @return {?}
     */
    function () {
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
                    styles: [".hamburger-menu{background-color:transparent;border-width:0;outline:0;font-size:30px}.mat-sidenav-container{z-index:2;background-color:transparent}::ng-deep .mat-drawer-inner-container{z-index:10!important;background-color:transparent!important;overflow:hidden!important;height:100vh}.mat-sidenav-content{background-color:transparent;overflow:hidden}.side-nav{height:100vh;width:210px;background-color:transparent;border-right:transparent}.button-container{height:75vh;background-color:transparent;z-index:10;width:210px}.item-button{height:40px;width:100%;background-color:#fff;font-size:20px}.item-button:hover{background-color:Grey}"]
                }] }
    ];
    /** @nocollapse */
    SideNavComponent.ctorParameters = function () { return [
        { type: BreakpointObserver }
    ]; };
    SideNavComponent.propDecorators = {
        MenuItems: [{ type: Input, args: ['menu-items',] }],
        OpenedSubject: [{ type: Input, args: ['opened-subject',] }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1uYXYuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGxvd2NvZGV1bml0L2xjdS1oYW1idXJnZXItbWVudS1zaWRlLW5hdi1jb21tb24vIiwic291cmNlcyI6WyJsaWIvY29udHJvbHMvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RFLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUcvQztJQWdDRSxxRUFBcUU7SUFHckUsMEJBQXNCLGtCQUFzQztRQUF0Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBM0I1RCxlQUFVLEdBQXdCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQzthQUNuRixJQUFJLENBQ0gsR0FBRzs7OztRQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLEVBQUMsQ0FDOUIsQ0FBQztRQXlCSCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksT0FBTyxFQUFXLENBQUM7UUFDNUMsd0JBQXdCO1FBQ3hCLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDO1FBQzlCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUM7UUFDL0IsSUFBSSxDQUFDLGlCQUFpQixHQUFFLE1BQU0sQ0FBQztJQUNoQyxDQUFDO0lBdEJELHNCQUNXLDJDQUFhOzs7OztRQUR4QixVQUN5QixLQUF1QjtZQUM5QyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN0RCxDQUFDOzs7T0FBQTs7OztJQW9CTSxtQ0FBUTs7O0lBQWY7SUFFQSxDQUFDOzs7O0lBRUQsNkNBQWtCOzs7SUFBbEI7UUFBQSxpQkFTQztRQVJDLGdDQUFnQztRQUNoQyw0REFBNEQ7UUFDNUQsS0FBSztRQUNMLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsTUFBZTtZQUMzQyxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFBLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFBO1lBQ3hDLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNuQixDQUFDLEVBQUMsQ0FBQztRQUNILDBEQUEwRDtJQUM1RCxDQUFDOzs7O0lBR00sdUNBQVk7OztJQUFuQjtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5Qyx1RkFBdUY7UUFDdkYsSUFBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFDO1lBQ3hCLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDO1lBQzlCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLENBQUM7WUFDaEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQztZQUMvQix1REFBdUQ7U0FDeEQ7YUFDRztZQUNGLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1lBQzdCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxPQUFPLENBQUM7WUFDaEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE9BQU8sQ0FBQztZQUNqQyxxREFBcUQ7U0FFdEQ7SUFDRCxDQUFDOzs7OztJQUNTLG9DQUFTOzs7O0lBQW5CO1FBQ0UsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUM7UUFDOUIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQztRQUNoQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDO0lBQ2pDLENBQUM7O2dCQWhGRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLDh0Q0FBd0M7O2lCQUV6Qzs7OztnQkFYUSxrQkFBa0I7Ozs0QkFzQnhCLEtBQUssU0FBQyxZQUFZO2dDQUlsQixLQUFLLFNBQUMsZ0JBQWdCOzBCQVl0QixTQUFTLFNBQUMsU0FBUyxFQUFDLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQzs7SUFrRHRDLHVCQUFDO0NBQUEsQUFqRkQsSUFpRkM7U0EzRVksZ0JBQWdCOzs7SUFFM0Isc0NBR0k7Ozs7O0lBRUoscUNBQXlDOztJQUV6QyxxQ0FDc0M7O0lBRXRDLHlDQUF1Qzs7SUFPdkMsMkNBQStCOztJQUUvQiw0Q0FBZ0M7O0lBRWhDLDZDQUFpQzs7SUFFakMsbUNBQWlFOzs7OztJQUlyRCw4Q0FBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQnJlYWtwb2ludE9ic2VydmVyLCBCcmVha3BvaW50cyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9sYXlvdXQnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgTmF2TGlua01vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzL25hdi1saW5rLm1vZGVsJztcclxuaW1wb3J0IHsgTWF0U2lkZW5hdiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xjdS1zaWRlLW5hdicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NpZGUtbmF2LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zaWRlLW5hdi5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU2lkZU5hdkNvbXBvbmVudCB7XHJcblxyXG4gIGlzSGFuZHNldCQ6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLmJyZWFrcG9pbnRPYnNlcnZlci5vYnNlcnZlKEJyZWFrcG9pbnRzLkhhbmRzZXQpXHJcbiAgICAucGlwZShcclxuICAgICAgbWFwKHJlc3VsdCA9PiByZXN1bHQubWF0Y2hlcylcclxuICAgICk7XHJcblxyXG4gIHByb3RlY3RlZCBfbmF2TGlua3M6IEFycmF5PE5hdkxpbmtNb2RlbD47XHJcbiAgXHJcbiAgQElucHV0KCdtZW51LWl0ZW1zJykgXHJcbiAgcHVibGljIE1lbnVJdGVtczogQXJyYXk8TmF2TGlua01vZGVsPjtcclxuXHJcbiAgcHVibGljIG9wZW5lZFN1YmplY3Q6IFN1YmplY3Q8Ym9vbGVhbj47XHJcbiAgQElucHV0KCdvcGVuZWQtc3ViamVjdCcpIFxyXG4gIHB1YmxpYyBzZXQgT3BlbmVkU3ViamVjdCh2YWx1ZTogU3ViamVjdDxib29sZWFuPil7XHJcbiAgICB0aGlzLm9wZW5lZFN1YmplY3QgPSB2YWx1ZTtcclxuICAgIGNvbnNvbGUubG9nKFwiY29udGVudFdpZHRoOiBcIiwgdGhpcy5NYXRDb250ZW50V2lkdGgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIE1hdENvbnRlbnRXaWR0aDogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgTWF0Q29udGVudEhlaWdodDogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgTWF0Q29udGFpbmVyV2lkdGg6IHN0cmluZztcclxuXHJcbiAgQFZpZXdDaGlsZCgnc2lkZW5hdicse3N0YXRpYzogZmFsc2V9KSBwdWJsaWMgc2lkZW5hdjogTWF0U2lkZW5hdjtcclxuICAvLyBAVmlld0NoaWxkKCdzaWRlbmF2JywgeyBzdGF0aWM6IHRydWUgfSlwdWJsaWMgc2lkZW5hdjogTWF0U2lkZW5hdjtcclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBicmVha3BvaW50T2JzZXJ2ZXI6IEJyZWFrcG9pbnRPYnNlcnZlcikge1xyXG4gICB0aGlzLm9wZW5lZFN1YmplY3QgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xyXG4gICAvL3RoaXMuU2lkZU9wZW4gPSBmYWxzZTtcclxuICAgdGhpcy5NYXRDb250ZW50V2lkdGggPSBcIjQwcHhcIjtcclxuICAgdGhpcy5NYXRDb250ZW50SGVpZ2h0ID0gXCI0MHB4XCI7XHJcbiAgIHRoaXMuTWF0Q29udGFpbmVyV2lkdGg9IFwiNDBweFwiO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICAvLyB0aGlzLm9wZW5lZFN1YmplY3Quc3Vic2NyaWJlKFxyXG4gICAgLy8gICBrZWVwT3BlbiA9PiB0aGlzLnNpZGVuYXZba2VlcE9wZW4gPyAnb3BlbicgOiAnY2xvc2UnXSgpXHJcbiAgICAvLyApO1xyXG4gICAgdGhpcy5vcGVuZWRTdWJqZWN0LnN1YnNjcmliZSgocmVzdWx0OiBib29sZWFuKT0+e1xyXG4gICAgICB0aGlzLnNpZGVuYXZbcmVzdWx0ID8gJ29wZW4nOiAnY2xvc2UnXSgpXHJcbiAgICAgIHRoaXMuc2V0U3R5bGVzKCk7XHJcbiAgICB9KTtcclxuICAgIC8vY29uc29sZS5sb2coXCJPcGVuZWQgU3ViamVjdDogXCIsIHRoaXMuTWF0Q29udGFpbmVyV2lkdGgpO1xyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyB0b2dnbGVEcmF3ZXIoKSB7XHJcbiAgICB0aGlzLm9wZW5lZFN1YmplY3QubmV4dCghdGhpcy5zaWRlbmF2Lm9wZW5lZCk7XHJcbiAgICAvL3NvIHRoZSBoYW1idXJnZXIgbWVudSBkb2VzbnQgY29tZSBhbGwgdGhlIHdheSBhY3Jvc3MgdGhlIHNjcmVlbiB3aGVuIGNsb3NpbmcgdGhlIG1lbnVcclxuICAgIGlmKCF0aGlzLnNpZGVuYXYub3BlbmVkKXtcclxuICAgIHRoaXMuTWF0Q29udGVudFdpZHRoID0gXCI0MHB4XCI7XHJcbiAgICB0aGlzLk1hdENvbnRhaW5lcldpZHRoID0gXCI0MHB4XCI7XHJcbiAgICB0aGlzLk1hdENvbnRlbnRIZWlnaHQgPSBcIjQwcHhcIjtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwic2lkZW5hdiBjbG9zZWRcIiwgdGhpcy5NYXRDb250ZW50V2lkdGgpO1xyXG4gIH1cclxuICBlbHNle1xyXG4gICAgdGhpcy5NYXRDb250ZW50V2lkdGggPSBcIjBweFwiO1xyXG4gICAgdGhpcy5NYXRDb250ZW50SGVpZ2h0ID0gXCIxMDB2aFwiO1xyXG4gICAgdGhpcy5NYXRDb250YWluZXJXaWR0aCA9IFwiMjEwcHhcIjtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwic2lkZW5hdiBvcGVuXCIsIHRoaXMuTWF0Q29udGVudFdpZHRoKTtcclxuXHJcbiAgfVxyXG4gIH1cclxuICBwcm90ZWN0ZWQgc2V0U3R5bGVzKCk6dm9pZHtcclxuICAgIHRoaXMuTWF0Q29udGVudFdpZHRoID0gXCI0MHB4XCI7XHJcbiAgICB0aGlzLk1hdENvbnRhaW5lcldpZHRoID0gXCI0MHB4XCI7XHJcbiAgICB0aGlzLk1hdENvbnRlbnRIZWlnaHQgPSBcIjQwcHhcIjtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ==
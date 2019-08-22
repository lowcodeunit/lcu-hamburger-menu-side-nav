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
        this.SideOpen = false;
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
         * @param {?} keepOpen
         * @return {?}
         */
        function (keepOpen) { return _this.sidenav[keepOpen ? 'open' : 'close'](); }));
    };
    /**
     * @return {?}
     */
    SideNavComponent.prototype.toggleDrawer = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.openedSubject.next(!this.sidenav.opened);
        //so the hamburger menu doesnt come all the way across the screen when closing the menu
        if (this.SideOpen === true) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.SideOpen = !_this.SideOpen;
            }), 100);
            this.MatContentWidth = "40px";
            this.MatContainerWidth = "40px";
            this.MatContentHeight = "40px";
            // console.log("sidenav closed", this.MatContentWidth);
        }
        else {
            this.SideOpen = !this.SideOpen;
            this.MatContentWidth = "0px";
            this.MatContentHeight = "100vh";
            this.MatContainerWidth = "210px";
            // console.log("sidenav open", this.MatContentWidth);
        }
    };
    SideNavComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lcu-side-nav',
                    template: "<mat-sidenav-container  class=\"mat-sidenav-container\" [hasBackdrop]=\"false\" [ngStyle]=\"{width: MatContainerWidth}\">\r\n  <mat-sidenav-content class=\"mat-sidenav-content\" [ngStyle]=\"{width: MatContentWidth, height: MatContentHeight}\">\r\n    <button *ngIf=\"SideOpen === false\" class=\"hamburger-menu\" mat-icon-button (click)=\"toggleDrawer()\" >\r\n      <mat-icon [inline]=\"true\">menu</mat-icon>\r\n    </button>\r\n  </mat-sidenav-content>\r\n  <!-- Builds the hamburger menu from the items in the constants.ts file-->\r\n  <mat-sidenav class=\"side-nav\" #sidenav mode=\"side\" (click)=\"toggleDrawer()\">\r\n    <button class=\"hamburger-menu\" mat-icon-button>\r\n      <mat-icon [inline]=\"true\">menu</mat-icon>\r\n    </button>\r\n    <!--  -->\r\n    <div class=\"button-container\" fxLayout=\"column\" fxLayoutAlign=\"space-between\">\r\n      <button class=\"item-button\" mat-menu-item fxLayoutAlign=\"space-between center\" *ngFor=\"let item of MenuItems\"\r\n        [disabled]=item.Disabled [routerLink]=[item.Url,item.Param]>\r\n        <!-- <mat-icon *ngIf=\"item.Icon\">{{ item.Icon }}</mat-icon> -->\r\n        <span>{{ item.Label }}</span>\r\n      </button>\r\n    </div>\r\n    \r\n  </mat-sidenav>\r\n</mat-sidenav-container>",
                    styles: [".hamburger-menu{background-color:transparent;border-width:0;outline:0;font-size:30px}.mat-sidenav-container{z-index:2;background-color:transparent}::ng-deep .mat-drawer-inner-container{z-index:10!important;background-color:transparent!important}.mat-sidenav-content{background-color:transparent;overflow:hidden}.side-nav{height:100vh;width:210px;background-color:transparent;border-right:transparent}.button-container{height:75vh;background-color:transparent;z-index:10;width:210px}.item-button{height:40px;width:100%;background-color:#fff;font-size:20px}.item-button:hover{background-color:Grey}"]
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
    SideNavComponent.prototype.SideOpen;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1uYXYuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGxvd2NvZGV1bml0L2xjdS1oYW1idXJnZXItbWVudS1zaWRlLW5hdi1jb21tb24vIiwic291cmNlcyI6WyJsaWIvY29udHJvbHMvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RFLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUcvQztJQThCRSxxRUFBcUU7SUFHckUsMEJBQXNCLGtCQUFzQztRQUF0Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBekI1RCxlQUFVLEdBQXdCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQzthQUNuRixJQUFJLENBQ0gsR0FBRzs7OztRQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLEVBQUMsQ0FDOUIsQ0FBQztRQXVCSCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksT0FBTyxFQUFXLENBQUM7UUFDNUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUM7UUFDOUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQztRQUMvQixJQUFJLENBQUMsaUJBQWlCLEdBQUUsTUFBTSxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFFTSxtQ0FBUTs7O0lBQWY7SUFFQSxDQUFDOzs7O0lBRUQsNkNBQWtCOzs7SUFBbEI7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUzs7OztRQUMxQixVQUFBLFFBQVEsSUFBSSxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQTNDLENBQTJDLEVBQ3hELENBQUM7SUFDSixDQUFDOzs7O0lBR00sdUNBQVk7OztJQUFuQjtRQUFBLGlCQW9CQztRQW5CQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUMsdUZBQXVGO1FBQ3ZGLElBQUcsSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLEVBQUM7WUFDMUIsVUFBVTs7O1lBQUM7Z0JBQ1QsS0FBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUM7WUFDakMsQ0FBQyxHQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ1AsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUM7WUFDOUIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQztZQUNoQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDO1lBQy9CLHVEQUF1RDtTQUN4RDthQUNHO1lBQ0YsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDL0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7WUFDN0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE9BQU8sQ0FBQztZQUNoQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsT0FBTyxDQUFDO1lBQ2pDLHFEQUFxRDtTQUV0RDtJQUNELENBQUM7O2dCQXhFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLDB2Q0FBd0M7O2lCQUV6Qzs7OztnQkFYUSxrQkFBa0I7Ozs0QkFzQnhCLEtBQUssU0FBQyxZQUFZO2dDQUdsQixLQUFLLFNBQUMsZ0JBQWdCOzBCQVd0QixTQUFTLFNBQUMsU0FBUyxFQUFDLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQzs7SUE2Q3RDLHVCQUFDO0NBQUEsQUExRUQsSUEwRUM7U0FwRVksZ0JBQWdCOzs7SUFFM0Isc0NBR0k7Ozs7O0lBRUoscUNBQXlDOztJQUV6QyxxQ0FDK0I7O0lBRS9CLHlDQUN1Qzs7SUFFdkMsb0NBQXlCOztJQUV6QiwyQ0FBK0I7O0lBRS9CLDRDQUFnQzs7SUFFaEMsNkNBQWlDOztJQUVqQyxtQ0FBaUU7Ozs7O0lBSXJELDhDQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCcmVha3BvaW50T2JzZXJ2ZXIsIEJyZWFrcG9pbnRzIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2xheW91dCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBOYXZMaW5rTW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbHMvbmF2LWxpbmsubW9kZWwnO1xyXG5pbXBvcnQgeyBNYXRTaWRlbmF2IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGN1LXNpZGUtbmF2JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2lkZS1uYXYuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3NpZGUtbmF2LmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTaWRlTmF2Q29tcG9uZW50IHtcclxuXHJcbiAgaXNIYW5kc2V0JDogT2JzZXJ2YWJsZTxib29sZWFuPiA9IHRoaXMuYnJlYWtwb2ludE9ic2VydmVyLm9ic2VydmUoQnJlYWtwb2ludHMuSGFuZHNldClcclxuICAgIC5waXBlKFxyXG4gICAgICBtYXAocmVzdWx0ID0+IHJlc3VsdC5tYXRjaGVzKVxyXG4gICAgKTtcclxuXHJcbiAgcHJvdGVjdGVkIF9uYXZMaW5rczogQXJyYXk8TmF2TGlua01vZGVsPjtcclxuICBcclxuICBASW5wdXQoJ21lbnUtaXRlbXMnKSBcclxuICBNZW51SXRlbXM6IEFycmF5PE5hdkxpbmtNb2RlbD47XHJcblxyXG4gIEBJbnB1dCgnb3BlbmVkLXN1YmplY3QnKSBcclxuICBwdWJsaWMgb3BlbmVkU3ViamVjdDogU3ViamVjdDxib29sZWFuPjtcclxuXHJcbiAgcHVibGljIFNpZGVPcGVuOiBib29sZWFuO1xyXG5cclxuICBwdWJsaWMgTWF0Q29udGVudFdpZHRoOiBzdHJpbmc7XHJcblxyXG4gIHB1YmxpYyBNYXRDb250ZW50SGVpZ2h0OiBzdHJpbmc7XHJcblxyXG4gIHB1YmxpYyBNYXRDb250YWluZXJXaWR0aDogc3RyaW5nO1xyXG5cclxuICBAVmlld0NoaWxkKCdzaWRlbmF2Jyx7c3RhdGljOiBmYWxzZX0pIHB1YmxpYyBzaWRlbmF2OiBNYXRTaWRlbmF2O1xyXG4gIC8vIEBWaWV3Q2hpbGQoJ3NpZGVuYXYnLCB7IHN0YXRpYzogdHJ1ZSB9KXB1YmxpYyBzaWRlbmF2OiBNYXRTaWRlbmF2O1xyXG5cclxuXHJcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGJyZWFrcG9pbnRPYnNlcnZlcjogQnJlYWtwb2ludE9ic2VydmVyKSB7XHJcbiAgIHRoaXMub3BlbmVkU3ViamVjdCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XHJcbiAgIHRoaXMuU2lkZU9wZW4gPSBmYWxzZTtcclxuICAgdGhpcy5NYXRDb250ZW50V2lkdGggPSBcIjQwcHhcIjtcclxuICAgdGhpcy5NYXRDb250ZW50SGVpZ2h0ID0gXCI0MHB4XCI7XHJcbiAgIHRoaXMuTWF0Q29udGFpbmVyV2lkdGg9IFwiNDBweFwiO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICB0aGlzLm9wZW5lZFN1YmplY3Quc3Vic2NyaWJlKFxyXG4gICAgICBrZWVwT3BlbiA9PiB0aGlzLnNpZGVuYXZba2VlcE9wZW4gPyAnb3BlbicgOiAnY2xvc2UnXSgpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyB0b2dnbGVEcmF3ZXIoKSB7XHJcbiAgICB0aGlzLm9wZW5lZFN1YmplY3QubmV4dCghdGhpcy5zaWRlbmF2Lm9wZW5lZCk7XHJcbiAgICAvL3NvIHRoZSBoYW1idXJnZXIgbWVudSBkb2VzbnQgY29tZSBhbGwgdGhlIHdheSBhY3Jvc3MgdGhlIHNjcmVlbiB3aGVuIGNsb3NpbmcgdGhlIG1lbnVcclxuICAgIGlmKHRoaXMuU2lkZU9wZW4gPT09IHRydWUpe1xyXG4gICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICB0aGlzLlNpZGVPcGVuID0gIXRoaXMuU2lkZU9wZW47XHJcbiAgICB9LDEwMCk7XHJcbiAgICB0aGlzLk1hdENvbnRlbnRXaWR0aCA9IFwiNDBweFwiO1xyXG4gICAgdGhpcy5NYXRDb250YWluZXJXaWR0aCA9IFwiNDBweFwiO1xyXG4gICAgdGhpcy5NYXRDb250ZW50SGVpZ2h0ID0gXCI0MHB4XCI7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcInNpZGVuYXYgY2xvc2VkXCIsIHRoaXMuTWF0Q29udGVudFdpZHRoKTtcclxuICB9XHJcbiAgZWxzZXtcclxuICAgIHRoaXMuU2lkZU9wZW4gPSAhdGhpcy5TaWRlT3BlbjtcclxuICAgIHRoaXMuTWF0Q29udGVudFdpZHRoID0gXCIwcHhcIjtcclxuICAgIHRoaXMuTWF0Q29udGVudEhlaWdodCA9IFwiMTAwdmhcIjtcclxuICAgIHRoaXMuTWF0Q29udGFpbmVyV2lkdGggPSBcIjIxMHB4XCI7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcInNpZGVuYXYgb3BlblwiLCB0aGlzLk1hdENvbnRlbnRXaWR0aCk7XHJcblxyXG4gIH1cclxuICB9XHJcblxyXG59XHJcblxyXG4iXX0=
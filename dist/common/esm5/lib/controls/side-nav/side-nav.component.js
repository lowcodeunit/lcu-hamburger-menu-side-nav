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
        }
        else {
            this.SideOpen = !this.SideOpen;
        }
    };
    SideNavComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lcu-side-nav',
                    template: "<mat-sidenav-container class=\"mat-sidenav-container\" [hasBackdrop]=\"false\">\r\n  <mat-sidenav-content class=\"mat-sidenav-content\">\r\n      <button class=\"hamburger-menu\" mat-icon-button (click)=\"toggleDrawer()\">\r\n        <mat-icon [inline]=\"true\">menu</mat-icon>\r\n      </button>\r\n    </mat-sidenav-content>\r\n      <!-- Builds the hamburger menu from the items in the constants.ts file-->\r\n      <mat-sidenav class=\"side-nav\" #sidenav mode=\"side\"  >\r\n        <div class=\"mat-drawer-inner-container\"  (click)=\"toggleDrawer()\" >\r\n          <button class=\"hamburger-menu\" mat-icon-button>\r\n              <mat-icon [inline]=\"true\">menu</mat-icon>\r\n            </button>\r\n            <!--  -->\r\n        <div class=\"button-container\" fxLayout=\"column\" fxLayoutAlign=\"space-between\" >\r\n        <button class=\"item-button\"  mat-menu-item  fxLayoutAlign=\"space-between center\"  *ngFor= \"let item of MenuItems\" \r\n          [disabled]= item.Disabled [routerLink]=[item.Url,item.Param] >\r\n          <!-- <mat-icon *ngIf=\"item.Icon\">{{ item.Icon }}</mat-icon> -->\r\n          <span>{{ item.Label }}</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n      </mat-sidenav>\r\n</mat-sidenav-container>\r\n\r\n     ",
                    styles: [".hamburger-menu{background-color:transparent;border-width:0;outline:0;font-size:30px}.mat-sidenav-container{width:210px;z-index:2;background-color:transparent}.mat-drawer-inner-container{z-index:10}.mat-sidenav-content{height:100vh;background-color:transparent;width:40px}.side-nav{height:100vh;width:100vw;background-color:transparent;border-right:transparent}.button-container{height:75vh;background-color:transparent;z-index:10;width:210px}.item-button{height:40px;width:100%;background-color:#fff;font-size:20px}.item-button:hover{background-color:Grey}"]
                }] }
    ];
    /** @nocollapse */
    SideNavComponent.ctorParameters = function () { return [
        { type: BreakpointObserver }
    ]; };
    SideNavComponent.propDecorators = {
        MenuItems: [{ type: Input, args: ['menu-items',] }],
        openedSubject: [{ type: Input, args: ['opened-subject',] }],
        sidenav: [{ type: ViewChild, args: ['sidenav',] }]
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
    SideNavComponent.prototype.sidenav;
    /**
     * @type {?}
     * @protected
     */
    SideNavComponent.prototype.breakpointObserver;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1uYXYuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGxvd2NvZGV1bml0L2xjdS1oYW1idXJnZXItbWVudS1zaWRlLW5hdi1jb21tb24vIiwic291cmNlcyI6WyJsaWIvY29udHJvbHMvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RFLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUcvQztJQXdCRSxxRUFBcUU7SUFHckUsMEJBQXNCLGtCQUFzQztRQUF0Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBbkI1RCxlQUFVLEdBQXdCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQzthQUNuRixJQUFJLENBQ0gsR0FBRzs7OztRQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLEVBQUMsQ0FDOUIsQ0FBQztRQWlCSCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksT0FBTyxFQUFXLENBQUM7UUFDNUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVNLG1DQUFROzs7SUFBZjtJQUVBLENBQUM7Ozs7SUFFRCw2Q0FBa0I7OztJQUFsQjtRQUFBLGlCQUlDO1FBSEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTOzs7O1FBQzFCLFVBQUEsUUFBUSxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBM0MsQ0FBMkMsRUFDeEQsQ0FBQztJQUNKLENBQUM7Ozs7SUFHTSx1Q0FBWTs7O0lBQW5CO1FBQUEsaUJBV0M7UUFWQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUMsdUZBQXVGO1FBQ3ZGLElBQUcsSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLEVBQUM7WUFDMUIsVUFBVTs7O1lBQUM7Z0JBQ1QsS0FBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUM7WUFDakMsQ0FBQyxHQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ1I7YUFDRztZQUNGLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQ2hDO0lBQ0QsQ0FBQzs7Z0JBdERGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsd3dDQUF3Qzs7aUJBRXpDOzs7O2dCQVhRLGtCQUFrQjs7OzRCQXNCeEIsS0FBSyxTQUFDLFlBQVk7Z0NBR2xCLEtBQUssU0FBQyxnQkFBZ0I7MEJBS3RCLFNBQVMsU0FBQyxTQUFTOztJQWlDdEIsdUJBQUM7Q0FBQSxBQXhERCxJQXdEQztTQWxEWSxnQkFBZ0I7OztJQUUzQixzQ0FHSTs7Ozs7SUFFSixxQ0FBeUM7O0lBRXpDLHFDQUMrQjs7SUFFL0IseUNBQ3VDOztJQUV2QyxvQ0FBeUI7O0lBRXpCLG1DQUFpRDs7Ozs7SUFJckMsOENBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJyZWFrcG9pbnRPYnNlcnZlciwgQnJlYWtwb2ludHMgfSBmcm9tICdAYW5ndWxhci9jZGsvbGF5b3V0JztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IE5hdkxpbmtNb2RlbCB9IGZyb20gJy4uLy4uL21vZGVscy9uYXYtbGluay5tb2RlbCc7XHJcbmltcG9ydCB7IE1hdFNpZGVuYXYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsY3Utc2lkZS1uYXYnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWRlLW5hdi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc2lkZS1uYXYuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNpZGVOYXZDb21wb25lbnQge1xyXG5cclxuICBpc0hhbmRzZXQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5icmVha3BvaW50T2JzZXJ2ZXIub2JzZXJ2ZShCcmVha3BvaW50cy5IYW5kc2V0KVxyXG4gICAgLnBpcGUoXHJcbiAgICAgIG1hcChyZXN1bHQgPT4gcmVzdWx0Lm1hdGNoZXMpXHJcbiAgICApO1xyXG5cclxuICBwcm90ZWN0ZWQgX25hdkxpbmtzOiBBcnJheTxOYXZMaW5rTW9kZWw+O1xyXG4gIFxyXG4gIEBJbnB1dCgnbWVudS1pdGVtcycpIFxyXG4gIE1lbnVJdGVtczogQXJyYXk8TmF2TGlua01vZGVsPjtcclxuXHJcbiAgQElucHV0KCdvcGVuZWQtc3ViamVjdCcpIFxyXG4gIHB1YmxpYyBvcGVuZWRTdWJqZWN0OiBTdWJqZWN0PGJvb2xlYW4+O1xyXG5cclxuICBwdWJsaWMgU2lkZU9wZW46IGJvb2xlYW47XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3NpZGVuYXYnKSBwdWJsaWMgc2lkZW5hdjogTWF0U2lkZW5hdjtcclxuICAvLyBAVmlld0NoaWxkKCdzaWRlbmF2JywgeyBzdGF0aWM6IHRydWUgfSlwdWJsaWMgc2lkZW5hdjogTWF0U2lkZW5hdjtcclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBicmVha3BvaW50T2JzZXJ2ZXI6IEJyZWFrcG9pbnRPYnNlcnZlcikge1xyXG4gICB0aGlzLm9wZW5lZFN1YmplY3QgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xyXG4gICB0aGlzLlNpZGVPcGVuID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgIHRoaXMub3BlbmVkU3ViamVjdC5zdWJzY3JpYmUoXHJcbiAgICAgIGtlZXBPcGVuID0+IHRoaXMuc2lkZW5hdltrZWVwT3BlbiA/ICdvcGVuJyA6ICdjbG9zZSddKClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIHRvZ2dsZURyYXdlcigpIHtcclxuICAgIHRoaXMub3BlbmVkU3ViamVjdC5uZXh0KCF0aGlzLnNpZGVuYXYub3BlbmVkKTtcclxuICAgIC8vc28gdGhlIGhhbWJ1cmdlciBtZW51IGRvZXNudCBjb21lIGFsbCB0aGUgd2F5IGFjcm9zcyB0aGUgc2NyZWVuIHdoZW4gY2xvc2luZyB0aGUgbWVudVxyXG4gICAgaWYodGhpcy5TaWRlT3BlbiA9PT0gdHJ1ZSl7XHJcbiAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgIHRoaXMuU2lkZU9wZW4gPSAhdGhpcy5TaWRlT3BlbjtcclxuICAgIH0sMTAwKTtcclxuICB9XHJcbiAgZWxzZXtcclxuICAgIHRoaXMuU2lkZU9wZW4gPSAhdGhpcy5TaWRlT3BlbjtcclxuICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuIl19
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
        this.openedSubject.next(!this.sidenav.opened);
    };
    SideNavComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lcu-side-nav',
                    template: "<mat-sidenav-container class=\"mat-sidenav-container\">\r\n  <mat-sidenav-content class=\"mat-sidenav-content\">\r\n      <button class=\"hamburger-menu\" mat-icon-button (click)=\"toggleDrawer()\">\r\n        <mat-icon [inline]=\"true\">menu</mat-icon>\r\n      </button>\r\n    </mat-sidenav-content>\r\n      <!-- Builds the hamburger menu from the items in the constants.ts file-->\r\n      <mat-sidenav class=\"side-nav\" #sidenav mode=\"over\"  >\r\n        <div class=\"mat-drawer-inner-container\"  (click)=\"toggleDrawer()\">\r\n          <button class=\"hamburger-menu\" mat-icon-button (click)=\"toggleDrawer()\">\r\n              <mat-icon [inline]=\"true\">menu</mat-icon>\r\n            </button>\r\n            <!--  -->\r\n        <div class=\"button-container\" fxLayout=\"column\" fxLayoutAlign=\"space-between\" >\r\n        <button class=\"item-button\"  mat-menu-item  fxLayoutAlign=\"space-between center\"  *ngFor= \"let item of MenuItems\" \r\n          [disabled]= item.Disabled [routerLink]=[item.Url,item.Param] >\r\n          <!-- <mat-icon *ngIf=\"item.Icon\">{{ item.Icon }}</mat-icon> -->\r\n          <span>{{ item.Label }}</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n      </mat-sidenav>\r\n</mat-sidenav-container>\r\n\r\n     ",
                    styles: [".hamburger-menu{background-color:transparent;border-width:0;outline:0;font-size:30px}.mat-sidenav-container{width:100vw;background-color:transparent}.mat-sidenav-content{height:100vh;background-color:transparent;width:40px}.side-nav{height:100vh;width:100vw;background-color:transparent;border-right:transparent}.button-container{height:75vh;background-color:transparent;z-index:10;width:210px}.item-button{height:40px;width:100%;background-color:#fff;font-size:20px}.item-button:hover{background-color:Grey}"]
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
    SideNavComponent.prototype.SideOpen;
    /** @type {?} */
    SideNavComponent.prototype.MenuItems;
    /** @type {?} */
    SideNavComponent.prototype.openedSubject;
    /** @type {?} */
    SideNavComponent.prototype.sidenav;
    /**
     * @type {?}
     * @protected
     */
    SideNavComponent.prototype.breakpointObserver;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1uYXYuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGxvd2NvZGV1bml0L2xjdS1oYW1idXJnZXItbWVudS1zaWRlLW5hdi1jb21tb24vIiwic291cmNlcyI6WyJsaWIvY29udHJvbHMvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RFLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUcvQztJQXVCRSxxRUFBcUU7SUFHckUsMEJBQXNCLGtCQUFzQztRQUF0Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBbEI1RCxlQUFVLEdBQXdCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQzthQUNuRixJQUFJLENBQ0gsR0FBRzs7OztRQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLEVBQUMsQ0FDOUIsQ0FBQztRQWdCRixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDOzs7O0lBRU0sbUNBQVE7OztJQUFmO0lBQ0EsQ0FBQzs7OztJQUVELDZDQUFrQjs7O0lBQWxCO1FBQUEsaUJBSUM7UUFIQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVM7Ozs7UUFDMUIsVUFBQSxRQUFRLElBQUksT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUEzQyxDQUEyQyxFQUN4RCxDQUFDO0lBQ0osQ0FBQzs7OztJQUdNLHVDQUFZOzs7SUFBbkI7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7Z0JBMUNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsMHdDQUF3Qzs7aUJBRXpDOzs7O2dCQVhRLGtCQUFrQjs7OzRCQXdCeEIsS0FBSyxTQUFDLFlBQVk7Z0NBR2xCLEtBQUssU0FBQyxnQkFBZ0I7MEJBRXRCLFNBQVMsU0FBQyxTQUFTOztJQXNCdEIsdUJBQUM7Q0FBQSxBQTVDRCxJQTRDQztTQXRDWSxnQkFBZ0I7OztJQUUzQixzQ0FHSTs7Ozs7SUFFSixxQ0FBeUM7O0lBRXpDLG9DQUF5Qjs7SUFFekIscUNBQytCOztJQUUvQix5Q0FBeUQ7O0lBRXpELG1DQUFpRDs7Ozs7SUFJckMsOENBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJyZWFrcG9pbnRPYnNlcnZlciwgQnJlYWtwb2ludHMgfSBmcm9tICdAYW5ndWxhci9jZGsvbGF5b3V0JztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IE5hdkxpbmtNb2RlbCB9IGZyb20gJy4uLy4uL21vZGVscy9uYXYtbGluay5tb2RlbCc7XHJcbmltcG9ydCB7IE1hdFNpZGVuYXYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsY3Utc2lkZS1uYXYnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWRlLW5hdi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc2lkZS1uYXYuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNpZGVOYXZDb21wb25lbnQge1xyXG5cclxuICBpc0hhbmRzZXQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5icmVha3BvaW50T2JzZXJ2ZXIub2JzZXJ2ZShCcmVha3BvaW50cy5IYW5kc2V0KVxyXG4gICAgLnBpcGUoXHJcbiAgICAgIG1hcChyZXN1bHQgPT4gcmVzdWx0Lm1hdGNoZXMpXHJcbiAgICApO1xyXG5cclxuICBwcm90ZWN0ZWQgX25hdkxpbmtzOiBBcnJheTxOYXZMaW5rTW9kZWw+O1xyXG4gIFxyXG4gIHB1YmxpYyBTaWRlT3BlbjogYm9vbGVhbjtcclxuXHJcbiAgQElucHV0KCdtZW51LWl0ZW1zJykgXHJcbiAgTWVudUl0ZW1zOiBBcnJheTxOYXZMaW5rTW9kZWw+O1xyXG5cclxuICBASW5wdXQoJ29wZW5lZC1zdWJqZWN0Jykgb3BlbmVkU3ViamVjdDogU3ViamVjdDxib29sZWFuPjtcclxuXHJcbiAgQFZpZXdDaGlsZCgnc2lkZW5hdicpIHB1YmxpYyBzaWRlbmF2OiBNYXRTaWRlbmF2O1xyXG4gIC8vIEBWaWV3Q2hpbGQoJ3NpZGVuYXYnLCB7IHN0YXRpYzogdHJ1ZSB9KXB1YmxpYyBzaWRlbmF2OiBNYXRTaWRlbmF2O1xyXG5cclxuXHJcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGJyZWFrcG9pbnRPYnNlcnZlcjogQnJlYWtwb2ludE9ic2VydmVyKSB7XHJcbiAgICB0aGlzLlNpZGVPcGVuID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICB0aGlzLm9wZW5lZFN1YmplY3Quc3Vic2NyaWJlKFxyXG4gICAgICBrZWVwT3BlbiA9PiB0aGlzLnNpZGVuYXZba2VlcE9wZW4gPyAnb3BlbicgOiAnY2xvc2UnXSgpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyB0b2dnbGVEcmF3ZXIoKSB7XHJcbiAgICB0aGlzLm9wZW5lZFN1YmplY3QubmV4dCghdGhpcy5zaWRlbmF2Lm9wZW5lZCk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuIl19
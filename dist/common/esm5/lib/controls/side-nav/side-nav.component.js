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
        this.openedSubject = new Subject();
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
                    template: "<mat-sidenav-container class=\"mat-sidenav-container\" [hasBackdrop]=\"false\">\r\n  <mat-sidenav-content class=\"mat-sidenav-content\">\r\n      <button class=\"hamburger-menu\" mat-icon-button (click)=\"toggleDrawer()\">\r\n        <mat-icon [inline]=\"true\">menu</mat-icon>\r\n      </button>\r\n    </mat-sidenav-content>\r\n      <!-- Builds the hamburger menu from the items in the constants.ts file-->\r\n      <mat-sidenav class=\"side-nav\" #sidenav mode=\"side\"  >\r\n        <div class=\"mat-drawer-inner-container\"  (click)=\"toggleDrawer()\" >\r\n          <button class=\"hamburger-menu\" mat-icon-button (click)=\"toggleDrawer()\">\r\n              <mat-icon [inline]=\"true\">menu</mat-icon>\r\n            </button>\r\n            <!--  -->\r\n        <div class=\"button-container\" fxLayout=\"column\" fxLayoutAlign=\"space-between\" >\r\n        <button class=\"item-button\"  mat-menu-item  fxLayoutAlign=\"space-between center\"  *ngFor= \"let item of MenuItems\" \r\n          [disabled]= item.Disabled [routerLink]=[item.Url,item.Param] >\r\n          <!-- <mat-icon *ngIf=\"item.Icon\">{{ item.Icon }}</mat-icon> -->\r\n          <span>{{ item.Label }}</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n      </mat-sidenav>\r\n</mat-sidenav-container>\r\n\r\n     ",
                    styles: [".hamburger-menu{background-color:transparent;border-width:0;outline:0;font-size:30px}.mat-sidenav-container{width:97.5vw;background-color:transparent;z-index:20}.mat-sidenav-content{height:100vh;background-color:transparent;width:40px}.side-nav{height:100vh;width:100vw;background-color:transparent;border-right:transparent}.button-container{height:75vh;background-color:transparent;z-index:10;width:210px}.item-button{height:40px;width:100%;background-color:#fff;font-size:20px}.item-button:hover{background-color:Grey}"]
                }] }
    ];
    /** @nocollapse */
    SideNavComponent.ctorParameters = function () { return [
        { type: BreakpointObserver }
    ]; };
    SideNavComponent.propDecorators = {
        MenuItems: [{ type: Input, args: ['menu-items',] }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1uYXYuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGxvd2NvZGV1bml0L2xjdS1oYW1idXJnZXItbWVudS1zaWRlLW5hdi1jb21tb24vIiwic291cmNlcyI6WyJsaWIvY29udHJvbHMvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RFLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUcvQztJQXdCRSxxRUFBcUU7SUFHckUsMEJBQXNCLGtCQUFzQztRQUF0Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBbkI1RCxlQUFVLEdBQXdCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQzthQUNuRixJQUFJLENBQ0gsR0FBRzs7OztRQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLEVBQUMsQ0FDOUIsQ0FBQztRQWlCRixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksT0FBTyxFQUFXLENBQUM7SUFDN0MsQ0FBQzs7OztJQUVNLG1DQUFROzs7SUFBZjtJQUVBLENBQUM7Ozs7SUFFRCw2Q0FBa0I7OztJQUFsQjtRQUFBLGlCQUlDO1FBSEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTOzs7O1FBQzFCLFVBQUEsUUFBUSxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBM0MsQ0FBMkMsRUFDeEQsQ0FBQztJQUNKLENBQUM7Ozs7SUFHTSx1Q0FBWTs7O0lBQW5CO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hELENBQUM7O2dCQTdDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLG15Q0FBd0M7O2lCQUV6Qzs7OztnQkFYUSxrQkFBa0I7Ozs0QkF3QnhCLEtBQUssU0FBQyxZQUFZOzBCQU1sQixTQUFTLFNBQUMsU0FBUzs7SUF3QnRCLHVCQUFDO0NBQUEsQUEvQ0QsSUErQ0M7U0F6Q1ksZ0JBQWdCOzs7SUFFM0Isc0NBR0k7Ozs7O0lBRUoscUNBQXlDOztJQUV6QyxvQ0FBeUI7O0lBRXpCLHFDQUMrQjs7SUFHL0IseUNBQXVDOztJQUV2QyxtQ0FBaUQ7Ozs7O0lBSXJDLDhDQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCcmVha3BvaW50T2JzZXJ2ZXIsIEJyZWFrcG9pbnRzIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2xheW91dCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBOYXZMaW5rTW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbHMvbmF2LWxpbmsubW9kZWwnO1xyXG5pbXBvcnQgeyBNYXRTaWRlbmF2IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGN1LXNpZGUtbmF2JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2lkZS1uYXYuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3NpZGUtbmF2LmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTaWRlTmF2Q29tcG9uZW50IHtcclxuXHJcbiAgaXNIYW5kc2V0JDogT2JzZXJ2YWJsZTxib29sZWFuPiA9IHRoaXMuYnJlYWtwb2ludE9ic2VydmVyLm9ic2VydmUoQnJlYWtwb2ludHMuSGFuZHNldClcclxuICAgIC5waXBlKFxyXG4gICAgICBtYXAocmVzdWx0ID0+IHJlc3VsdC5tYXRjaGVzKVxyXG4gICAgKTtcclxuXHJcbiAgcHJvdGVjdGVkIF9uYXZMaW5rczogQXJyYXk8TmF2TGlua01vZGVsPjtcclxuICBcclxuICBwdWJsaWMgU2lkZU9wZW46IGJvb2xlYW47XHJcblxyXG4gIEBJbnB1dCgnbWVudS1pdGVtcycpIFxyXG4gIE1lbnVJdGVtczogQXJyYXk8TmF2TGlua01vZGVsPjtcclxuXHJcbiAgLy8gQElucHV0KCdvcGVuZWQtc3ViamVjdCcpIFxyXG4gIHB1YmxpYyBvcGVuZWRTdWJqZWN0OiBTdWJqZWN0PGJvb2xlYW4+O1xyXG5cclxuICBAVmlld0NoaWxkKCdzaWRlbmF2JykgcHVibGljIHNpZGVuYXY6IE1hdFNpZGVuYXY7XHJcbiAgLy8gQFZpZXdDaGlsZCgnc2lkZW5hdicsIHsgc3RhdGljOiB0cnVlIH0pcHVibGljIHNpZGVuYXY6IE1hdFNpZGVuYXY7XHJcblxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYnJlYWtwb2ludE9ic2VydmVyOiBCcmVha3BvaW50T2JzZXJ2ZXIpIHtcclxuICAgIHRoaXMuU2lkZU9wZW4gPSBmYWxzZTtcclxuICAgdGhpcy5vcGVuZWRTdWJqZWN0ID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgdGhpcy5vcGVuZWRTdWJqZWN0LnN1YnNjcmliZShcclxuICAgICAga2VlcE9wZW4gPT4gdGhpcy5zaWRlbmF2W2tlZXBPcGVuID8gJ29wZW4nIDogJ2Nsb3NlJ10oKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgdG9nZ2xlRHJhd2VyKCkge1xyXG4gICAgdGhpcy5vcGVuZWRTdWJqZWN0Lm5leHQoIXRoaXMuc2lkZW5hdi5vcGVuZWQpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbiJdfQ==
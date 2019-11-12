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
        this.setDefaultStyles();
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
     * @return {?}
     */
    SideNavComponent.prototype.OnHover = /**
     * @return {?}
     */
    function () {
        this.MenuColor = this.HoverColor;
    };
    /**
     * @return {?}
     */
    SideNavComponent.prototype.LeaveHover = /**
     * @return {?}
     */
    function () {
        this.MenuColor = this.Color;
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
    /**
     * @protected
     * @return {?}
     */
    SideNavComponent.prototype.setDefaultStyles = /**
     * @protected
     * @return {?}
     */
    function () {
        this.setStyles();
        if (!this.Color) {
            this.Color = 'black';
        }
        this.MenuColor = this.Color;
        if (!this.HoverColor) {
            this.HoverColor = 'grey';
        }
    };
    SideNavComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lcu-side-nav',
                    template: "<mat-sidenav-container  class=\"mat-sidenav-container\" [hasBackdrop]=\"false\" [ngStyle]=\"{width: MatContainerWidth}\">\r\n  <mat-sidenav-content class=\"mat-sidenav-content\" [ngStyle]=\"{width: MatContentWidth, height: MatContentHeight}\">\r\n    <button  class=\"hamburger-menu\" mat-icon-button (click)=\"toggleDrawer()\" >\r\n      <mat-icon [inline]=\"true\" (mouseover)=\"OnHover()\" (mouseleave)=\"LeaveHover()\"[ngStyle]=\"{'color':MenuColor}\" >menu</mat-icon>\r\n    </button>\r\n  </mat-sidenav-content>\r\n  <!-- Builds the hamburger menu from the items in the constants.ts file-->\r\n  <mat-sidenav class=\"side-nav\" #sidenav mode=\"side\" (click)=\"toggleDrawer()\">\r\n    <button class=\"hamburger-menu\" mat-icon-button>\r\n      <mat-icon [inline]=\"true\" (mouseover)=\"OnHover()\" (mouseleave)=\"LeaveHover()\"[ngStyle]=\"{'color':MenuColor}\">menu</mat-icon>\r\n    </button>\r\n    <!--  -->\r\n    <div class=\"button-container\" fxLayout=\"column\" fxLayoutAlign=\"space-between\">\r\n      <button class=\"item-button\" mat-menu-item fxLayoutAlign=\"space-between center\" *ngFor=\"let item of MenuItems\"\r\n        [disabled]=item.Disabled [routerLink]=[item.Url,item.Param]>\r\n        <!-- <mat-icon *ngIf=\"item.Icon\">{{ item.Icon }}</mat-icon> -->\r\n        <span>{{ item.Label }}</span>\r\n      </button>\r\n    </div>\r\n    \r\n  </mat-sidenav>\r\n</mat-sidenav-container>",
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
        Color: [{ type: Input, args: ['color',] }],
        HoverColor: [{ type: Input, args: ['hover-color',] }],
        MatContentWidth: [{ type: Input, args: ['mat-content-width',] }],
        MatContentHeight: [{ type: Input, args: ['mat-content-height',] }],
        MatContainerWidth: [{ type: Input, args: ['mat-container-width',] }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1uYXYuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGxvd2NvZGV1bml0L2xjdS1oYW1idXJnZXItbWVudS1zaWRlLW5hdi1jb21tb24vIiwic291cmNlcyI6WyJsaWIvY29udHJvbHMvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RFLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUcvQztJQXlDRSwwQkFBc0Isa0JBQXNDO1FBQXRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFqQzVELGVBQVUsR0FBd0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDO2FBQ25GLElBQUksQ0FDSCxHQUFHOzs7O1FBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsRUFBQyxDQUM5QixDQUFDO1FBK0JILElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxPQUFPLEVBQVcsQ0FBQztRQUM1QyxJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQztRQUM5QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDO1FBQy9CLElBQUksQ0FBQyxpQkFBaUIsR0FBRSxNQUFNLENBQUM7SUFDaEMsQ0FBQzs7OztJQUVNLG1DQUFROzs7SUFBZjtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCw2Q0FBa0I7OztJQUFsQjtRQUFBLGlCQUtDO1FBSkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxNQUFlO1lBQzNDLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUE7WUFDeEMsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ25CLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUdNLHVDQUFZOzs7SUFBbkI7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUMsSUFBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFDO1lBQ3hCLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDO1lBQzlCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLENBQUM7WUFDaEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQztZQUMvQix1REFBdUQ7U0FDeEQ7YUFDRztZQUNGLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1lBQzdCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsQ0FBQSxNQUFNO1lBQ3JDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxPQUFPLENBQUM7WUFDakMscURBQXFEO1NBRXREO0lBQ0QsQ0FBQzs7OztJQUNNLGtDQUFPOzs7SUFBZDtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUNuQyxDQUFDOzs7O0lBRU0scUNBQVU7OztJQUFqQjtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUM5QixDQUFDOzs7OztJQUNTLG9DQUFTOzs7O0lBQW5CO1FBQ0UsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUM7UUFDOUIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQztRQUNoQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDO0lBQ2pDLENBQUM7Ozs7O0lBRVMsMkNBQWdCOzs7O0lBQTFCO1FBQ0UsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRWpCLElBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFDO1lBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7U0FDdEI7UUFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDNUIsSUFBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUM7WUFDbEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7U0FDMUI7SUFDSCxDQUFDOztnQkFuR0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4QixpNUNBQXdDOztpQkFFekM7Ozs7Z0JBWFEsa0JBQWtCOzs7NEJBc0J4QixLQUFLLFNBQUMsWUFBWTtnQ0FJbEIsS0FBSyxTQUFDLGdCQUFnQjt3QkFHdEIsS0FBSyxTQUFDLE9BQU87NkJBR2IsS0FBSyxTQUFDLGFBQWE7a0NBR25CLEtBQUssU0FBQyxtQkFBbUI7bUNBR3pCLEtBQUssU0FBQyxvQkFBb0I7b0NBRzFCLEtBQUssU0FBQyxxQkFBcUI7MEJBRzNCLFNBQVMsU0FBQyxTQUFTLEVBQUMsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDOztJQStEdEMsdUJBQUM7Q0FBQSxBQXBHRCxJQW9HQztTQTlGWSxnQkFBZ0I7OztJQUUzQixzQ0FHSTs7Ozs7SUFFSixxQ0FBeUM7O0lBRXpDLHFDQUNzQzs7SUFHdEMseUNBQ3NDOztJQUV0QyxpQ0FDcUI7O0lBRXJCLHNDQUMwQjs7SUFFMUIsMkNBQytCOztJQUUvQiw0Q0FDZ0M7O0lBRWhDLDZDQUNpQzs7SUFFakMsbUNBQWlFOztJQUVqRSxxQ0FBeUI7Ozs7O0lBRWIsOENBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJyZWFrcG9pbnRPYnNlcnZlciwgQnJlYWtwb2ludHMgfSBmcm9tICdAYW5ndWxhci9jZGsvbGF5b3V0JztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IE5hdkxpbmtNb2RlbCB9IGZyb20gJy4uLy4uL21vZGVscy9uYXYtbGluay5tb2RlbCc7XHJcbmltcG9ydCB7IE1hdFNpZGVuYXYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsY3Utc2lkZS1uYXYnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWRlLW5hdi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc2lkZS1uYXYuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNpZGVOYXZDb21wb25lbnQge1xyXG5cclxuICBpc0hhbmRzZXQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5icmVha3BvaW50T2JzZXJ2ZXIub2JzZXJ2ZShCcmVha3BvaW50cy5IYW5kc2V0KVxyXG4gICAgLnBpcGUoXHJcbiAgICAgIG1hcChyZXN1bHQgPT4gcmVzdWx0Lm1hdGNoZXMpXHJcbiAgICApO1xyXG5cclxuICBwcm90ZWN0ZWQgX25hdkxpbmtzOiBBcnJheTxOYXZMaW5rTW9kZWw+O1xyXG4gIFxyXG4gIEBJbnB1dCgnbWVudS1pdGVtcycpIFxyXG4gIHB1YmxpYyBNZW51SXRlbXM6IEFycmF5PE5hdkxpbmtNb2RlbD47XHJcblxyXG4gIC8vcHVibGljIG9wZW5lZFN1YmplY3Q6IFN1YmplY3Q8Ym9vbGVhbj47XHJcbiAgQElucHV0KCdvcGVuZWQtc3ViamVjdCcpIFxyXG4gIHB1YmxpYyBvcGVuZWRTdWJqZWN0OiBTdWJqZWN0PGJvb2xlYW4+XHJcblxyXG4gIEBJbnB1dCgnY29sb3InKVxyXG4gIHB1YmxpYyBDb2xvcjogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoJ2hvdmVyLWNvbG9yJylcclxuICBwdWJsaWMgSG92ZXJDb2xvcjogc3RyaW5nO1xyXG4gIFxyXG4gIEBJbnB1dCgnbWF0LWNvbnRlbnQtd2lkdGgnKVxyXG4gIHB1YmxpYyBNYXRDb250ZW50V2lkdGg6IHN0cmluZztcclxuXHJcbiAgQElucHV0KCdtYXQtY29udGVudC1oZWlnaHQnKVxyXG4gIHB1YmxpYyBNYXRDb250ZW50SGVpZ2h0OiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgnbWF0LWNvbnRhaW5lci13aWR0aCcpXHJcbiAgcHVibGljIE1hdENvbnRhaW5lcldpZHRoOiBzdHJpbmc7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3NpZGVuYXYnLHtzdGF0aWM6IGZhbHNlfSkgcHVibGljIHNpZGVuYXY6IE1hdFNpZGVuYXY7XHJcblxyXG4gIHB1YmxpYyBNZW51Q29sb3I6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGJyZWFrcG9pbnRPYnNlcnZlcjogQnJlYWtwb2ludE9ic2VydmVyKSB7XHJcbiAgIHRoaXMub3BlbmVkU3ViamVjdCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XHJcbiAgIHRoaXMuTWF0Q29udGVudFdpZHRoID0gXCI0MHB4XCI7XHJcbiAgIHRoaXMuTWF0Q29udGVudEhlaWdodCA9IFwiNDBweFwiO1xyXG4gICB0aGlzLk1hdENvbnRhaW5lcldpZHRoPSBcIjQwcHhcIjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0RGVmYXVsdFN0eWxlcygpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgdGhpcy5vcGVuZWRTdWJqZWN0LnN1YnNjcmliZSgocmVzdWx0OiBib29sZWFuKT0+e1xyXG4gICAgICB0aGlzLnNpZGVuYXZbcmVzdWx0ID8gJ29wZW4nOiAnY2xvc2UnXSgpXHJcbiAgICAgIHRoaXMuc2V0U3R5bGVzKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgdG9nZ2xlRHJhd2VyKCkge1xyXG4gICAgdGhpcy5vcGVuZWRTdWJqZWN0Lm5leHQoIXRoaXMuc2lkZW5hdi5vcGVuZWQpO1xyXG4gICAgaWYoIXRoaXMuc2lkZW5hdi5vcGVuZWQpe1xyXG4gICAgdGhpcy5NYXRDb250ZW50V2lkdGggPSBcIjQwcHhcIjtcclxuICAgIHRoaXMuTWF0Q29udGFpbmVyV2lkdGggPSBcIjQwcHhcIjtcclxuICAgIHRoaXMuTWF0Q29udGVudEhlaWdodCA9IFwiNDBweFwiO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJzaWRlbmF2IGNsb3NlZFwiLCB0aGlzLk1hdENvbnRlbnRXaWR0aCk7XHJcbiAgfVxyXG4gIGVsc2V7XHJcbiAgICB0aGlzLk1hdENvbnRlbnRXaWR0aCA9IFwiMHB4XCI7XHJcbiAgICB0aGlzLk1hdENvbnRlbnRIZWlnaHQgPSBcIjk0dmhcIjsvLzk0dmhcclxuICAgIHRoaXMuTWF0Q29udGFpbmVyV2lkdGggPSBcIjIxMHB4XCI7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcInNpZGVuYXYgb3BlblwiLCB0aGlzLk1hdENvbnRlbnRXaWR0aCk7XHJcblxyXG4gIH1cclxuICB9XHJcbiAgcHVibGljIE9uSG92ZXIoKTp2b2lke1xyXG4gICAgdGhpcy5NZW51Q29sb3IgPSB0aGlzLkhvdmVyQ29sb3I7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgTGVhdmVIb3ZlcigpOiB2b2lke1xyXG4gICAgdGhpcy5NZW51Q29sb3IgPSB0aGlzLkNvbG9yO1xyXG4gIH1cclxuICBwcm90ZWN0ZWQgc2V0U3R5bGVzKCk6dm9pZHtcclxuICAgIHRoaXMuTWF0Q29udGVudFdpZHRoID0gXCI0MHB4XCI7XHJcbiAgICB0aGlzLk1hdENvbnRhaW5lcldpZHRoID0gXCI0MHB4XCI7XHJcbiAgICB0aGlzLk1hdENvbnRlbnRIZWlnaHQgPSBcIjQwcHhcIjtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBzZXREZWZhdWx0U3R5bGVzKCk6IHZvaWR7XHJcbiAgICB0aGlzLnNldFN0eWxlcygpO1xyXG4gICAgXHJcbiAgICBpZighdGhpcy5Db2xvcil7XHJcbiAgICAgIHRoaXMuQ29sb3IgPSAnYmxhY2snO1xyXG4gICAgfVxyXG4gICAgdGhpcy5NZW51Q29sb3IgPSB0aGlzLkNvbG9yO1xyXG4gICAgaWYoIXRoaXMuSG92ZXJDb2xvcil7XHJcbiAgICAgIHRoaXMuSG92ZXJDb2xvciA9ICdncmV5JztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiJdfQ==
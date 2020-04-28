import { __decorate, __metadata } from "tslib";
import { MatSidenav } from '@angular/material/sidenav';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { Component, Input, ViewChild } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
var SideNavComponent = /** @class */ (function () {
    // public MenuColor: string;
    function SideNavComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
            .pipe(map(function (result) { return result.matches; }));
        this.NavItemClicked = new EventEmitter();
        this.openedSubject = new Subject();
        this.MatContentWidth = "50px";
        this.MatContentHeight = "40px";
        this.MatContainerWidth = "50px";
    }
    SideNavComponent.prototype.ngOnInit = function () {
        this.setDefaultStyles();
    };
    SideNavComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.openedSubject.subscribe(function (result) {
            _this.sidenav[result ? 'open' : 'close']();
            _this.setStyles();
        });
    };
    SideNavComponent.prototype.ButtonClicked = function (button) {
        this.NavItemClicked.emit(button);
    };
    SideNavComponent.prototype.toggleDrawer = function () {
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
    };
    SideNavComponent.prototype.OnHover = function () {
        this.MenuBGColor = this.HoverMenuColor;
    };
    SideNavComponent.prototype.OnButtonHover = function () {
        // this.ButtonBGColor = this.ButtonBackgroundColorHover;
        this.ButtonHover = true;
    };
    SideNavComponent.prototype.LeaveHover = function () {
        this.MenuBGColor = this.MenuColor;
    };
    SideNavComponent.prototype.LeaveButtonHover = function () {
        // this.ButtonBGColor = this.ButtonBackgroundColor;
        this.ButtonHover = false;
    };
    // public setButtonStyles() {
    //   let styles = {
    //     'background-color': this.ButtonHover ? this.ButtonBackgroundColorHover : this.ButtonBackgroundColor
    //   };
    //   return styles;
    // }
    SideNavComponent.prototype.setStyles = function () {
        this.MatContentWidth = "50px";
        this.MatContainerWidth = "50px";
        this.MatContentHeight = "40px";
    };
    SideNavComponent.prototype.setDefaultStyles = function () {
        this.setStyles();
        if (!this.FontColor) {
            this.FontColor = 'black';
        }
        if (!this.ButtonBackgroundColorHover) {
            this.ButtonBackgroundColorHover = "grey"; //#96957
        }
        if (!this.ButtonBackgroundColor) {
            this.ButtonBackgroundColor = "white"; //#96957
        }
        if (!this.MenuColor) {
            this.MenuBGColor = 'black';
        }
        this.MenuBGColor = this.MenuColor;
        if (!this.HoverMenuColor) {
            this.HoverMenuColor = 'grey';
        }
    };
    SideNavComponent.ctorParameters = function () { return [
        { type: BreakpointObserver }
    ]; };
    __decorate([
        Output('nav-item-clicked'),
        __metadata("design:type", EventEmitter)
    ], SideNavComponent.prototype, "NavItemClicked", void 0);
    __decorate([
        Input('menu-items'),
        __metadata("design:type", Array)
    ], SideNavComponent.prototype, "MenuItems", void 0);
    __decorate([
        Input('opened-subject'),
        __metadata("design:type", Subject)
    ], SideNavComponent.prototype, "openedSubject", void 0);
    __decorate([
        Input('menu-color'),
        __metadata("design:type", String)
    ], SideNavComponent.prototype, "MenuColor", void 0);
    __decorate([
        Input('hover-menu-color'),
        __metadata("design:type", String)
    ], SideNavComponent.prototype, "HoverMenuColor", void 0);
    __decorate([
        Input('mat-content-width'),
        __metadata("design:type", String)
    ], SideNavComponent.prototype, "MatContentWidth", void 0);
    __decorate([
        Input('mat-content-height'),
        __metadata("design:type", String)
    ], SideNavComponent.prototype, "MatContentHeight", void 0);
    __decorate([
        Input('mat-container-width'),
        __metadata("design:type", String)
    ], SideNavComponent.prototype, "MatContainerWidth", void 0);
    __decorate([
        Input('button-background-color'),
        __metadata("design:type", String)
    ], SideNavComponent.prototype, "ButtonBackgroundColor", void 0);
    __decorate([
        Input('button-background-color-hover'),
        __metadata("design:type", String)
    ], SideNavComponent.prototype, "ButtonBackgroundColorHover", void 0);
    __decorate([
        Input('font-color'),
        __metadata("design:type", String)
    ], SideNavComponent.prototype, "FontColor", void 0);
    __decorate([
        ViewChild('sidenav', { static: false }),
        __metadata("design:type", MatSidenav)
    ], SideNavComponent.prototype, "sidenav", void 0);
    SideNavComponent = __decorate([
        Component({
            selector: 'lcu-side-nav',
            template: "<mat-sidenav-container  class=\"mat-sidenav-container\" [hasBackdrop]=\"false\" [ngStyle]=\"{width: MatContainerWidth}\">\r\n  <mat-sidenav-content class=\"mat-sidenav-content\" [ngStyle]=\"{width: MatContentWidth, height: MatContentHeight}\">\r\n    <button  class=\"hamburger-menu\" mat-icon-button (click)=\"toggleDrawer()\" >\r\n      <mat-icon [inline]=\"true\" (mouseover)=\"OnHover()\" (mouseleave)=\"LeaveHover()\"[ngStyle]=\"{'color':MenuBGColor}\" >menu</mat-icon>\r\n    </button>\r\n  </mat-sidenav-content>\r\n  <!-- Builds the hamburger menu from the items in the constants.ts file-->\r\n  <mat-sidenav class=\"side-nav\" #sidenav mode=\"side\" (click)=\"toggleDrawer()\">\r\n    <button class=\"hamburger-menu\" mat-icon-button>\r\n      <mat-icon [inline]=\"true\" (mouseover)=\"OnHover()\" (mouseleave)=\"LeaveHover()\"[ngStyle]=\"{'color':MenuBGColor}\">menu</mat-icon>\r\n    </button>\r\n    <!--  -->\r\n    <div class=\"button-container\" fxLayout=\"column\" fxLayoutAlign=\"space-between\">\r\n        <!-- [ngStyle]=\"setButtonStyles()\" (mouseover)=\"OnButtonHover()\" (mouseleave)=\"LeaveButtonHover()\" -->\r\n      <button class=\"item-button\" mat-menu-item fxLayoutAlign=\"start center\" \r\n      [ngStyle]=\"{'color':FontColor}\"\r\n      *ngFor=\"let item of MenuItems\"\r\n        [disabled]=item.Disabled (click)=\"ButtonClicked(item)\" >\r\n        <div [attr.id]=\"'button-' + item.Label\" fxLayoutAlign=\"start center\" >\r\n        <mat-icon class=\"button-icon\" *ngIf=\"item.Icon\">{{ item.Icon }}</mat-icon>\r\n        <span class=\"button-title\">{{ item.Label }}</span>\r\n      </div>\r\n      <!-- <div class=\"button-border\"></div> -->\r\n      </button>\r\n      \r\n    </div>\r\n    \r\n  </mat-sidenav>\r\n</mat-sidenav-container>",
            styles: [".hamburger-menu{background-color:transparent;border-width:0;outline:0;font-size:30px;margin-left:15px}.mat-sidenav-container{z-index:2;background-color:transparent}::ng-deep .mat-sidenav-container .mat-drawer-inner-container{z-index:10!important;background-color:transparent!important;overflow:hidden!important}.mat-sidenav-content{background-color:transparent;overflow:hidden}.side-nav{height:100vh;width:230px;background-color:transparent;border-right:transparent;overflow:hidden}.button-container{background-color:transparent;z-index:10;width:100%}.button-container .item-button{height:40px;width:100%;font-size:20px;border-color:#eaeaea;border-width:1px;border-top:none;border-left:none;border-right:none;background-color:#fff}.button-container .item-button .button-icon{padding-left:17px}.button-container .item-button .button-title{font-family:Montserrat,sans-serif;padding-left:42px}.button-container .item-button:last-child{border-bottom:none}.button-container .item-button:hover{background-color:#f4f4f3;cursor:pointer}"]
        }),
        __metadata("design:paramtypes", [BreakpointObserver])
    ], SideNavComponent);
    return SideNavComponent;
}());
export { SideNavComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1uYXYuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGxvd2NvZGV1bml0L2xjdS1oYW1idXJnZXItbWVudS1zaWRlLW5hdi1jb21tb24vIiwic291cmNlcyI6WyJsaWIvY29udHJvbHMvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFNUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFVckM7SUFzRUUsNEJBQTRCO0lBRTVCLDBCQUFzQixrQkFBc0M7UUFBdEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQXRFNUQsZUFBVSxHQUF3QixJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUM7YUFDbkYsSUFBSSxDQUNILEdBQUcsQ0FBQyxVQUFDLE1BQXVCLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsQ0FBQyxDQUNqRCxDQUFDO1FBb0VGLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUM5QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksT0FBTyxFQUFXLENBQUM7UUFDNUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUM7UUFDOUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQztRQUMvQixJ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QyxjQUFjLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUM7U0FDOUI7SUFDSCxDQUFDOztnQkEzRnlDLGtCQUFrQjs7SUE5RDVEO1FBREMsTUFBTSxDQUFDLGtCQUFrQixDQUFDO2tDQUNKLFlBQVk7NERBQU07SUFLekM7UUFEQyxLQUFLLENBQUMsWUFBWSxDQUFDO2tDQUNGLEtBQUs7dURBQWU7SUFPdEM7UUFEQyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7a0NBQ0YsT0FBTzsyREFBUztJQUt0QztRQURDLEtBQUssQ0FBQyxZQUFZLENBQUM7O3VEQUNLO0lBS3pCO1FBREMsS0FBSyxDQUFDLGtCQUFrQixDQUFDOzs0REFDSTtJQUs5QjtRQURDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQzs7NkRBQ0k7SUFLL0I7UUFEQyxLQUFLLENBQUMsb0JBQW9CLENBQUM7OzhEQUNJO0lBS2hDO1FBREMsS0FBSyxDQUFDLHFCQUFxQixDQUFDOzsrREFDSTtJQUtqQztRQURDLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQzs7bUVBQ0k7SUFLckM7UUFEQyxLQUFLLENBQUMsK0JBQStCLENBQUM7O3dFQUNFO0lBS3pDO1FBREMsS0FBSyxDQUFDLFlBQVksQ0FBQzs7dURBQ0s7SUFNZ0I7UUFBeEMsU0FBUyxDQUFDLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQztrQ0FBaUIsVUFBVTtxREFBQztJQXBFekQsZ0JBQWdCO1FBTjVCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxjQUFjO1lBQ3hCLGt3REFBd0M7O1NBRXpDLENBQUM7eUNBMEUwQyxrQkFBa0I7T0F4RWpELGdCQUFnQixDQW9LNUI7SUFBRCx1QkFBQztDQUFBLEFBcEtELElBb0tDO1NBcEtZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1hdFNpZGVuYXYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zaWRlbmF2JztcclxuaW1wb3J0IHsgQnJlYWtwb2ludHMsIEJyZWFrcG9pbnRTdGF0ZSwgQnJlYWtwb2ludE9ic2VydmVyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2xheW91dCc7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBOYXZMaW5rTW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbHMvbmF2LWxpbmsubW9kZWwnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGN1LXNpZGUtbmF2JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2lkZS1uYXYuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3NpZGUtbmF2LmNvbXBvbmVudC5zY3NzJ10gIFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNpZGVOYXZDb21wb25lbnQge1xyXG5cclxuICBpc0hhbmRzZXQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5icmVha3BvaW50T2JzZXJ2ZXIub2JzZXJ2ZShCcmVha3BvaW50cy5IYW5kc2V0KVxyXG4gICAgLnBpcGUoXHJcbiAgICAgIG1hcCgocmVzdWx0OiBCcmVha3BvaW50U3RhdGUpID0+IHJlc3VsdC5tYXRjaGVzKVxyXG4gICAgKTtcclxuXHJcbiAgcHJvdGVjdGVkIF9uYXZMaW5rczogQXJyYXk8TmF2TGlua01vZGVsPjtcclxuXHJcbiAgQE91dHB1dCgnbmF2LWl0ZW0tY2xpY2tlZCcpXHJcbiAgcHVibGljIE5hdkl0ZW1DbGlja2VkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuLyoqXHJcbiAqIFRoZSBpdGVtcyBpbiB0aGUgYnV0dG9uIGljb24sdGl0bGUsIGxpbmtcclxuICovXHJcbiAgQElucHV0KCdtZW51LWl0ZW1zJylcclxuICBwdWJsaWMgTWVudUl0ZW1zOiBBcnJheTxOYXZMaW5rTW9kZWw+O1xyXG5cclxuICAvKipcclxuICAgKiBwdWJsaWMgb3BlbmVkU3ViamVjdDogU3ViamVjdDxib29sZWFuPjtcclxuICAgKiBkZXRlY3RzIGlmIHRoZSBidXR0b24gaGFzIGJlZW4gY2xpY2tlZFxyXG4gICAqL1xyXG4gIEBJbnB1dCgnb3BlbmVkLXN1YmplY3QnKVxyXG4gIHB1YmxpYyBvcGVuZWRTdWJqZWN0OiBTdWJqZWN0PGJvb2xlYW4+XHJcbi8qKlxyXG4gKiBUaGUgY29sb3Igb2YgdGhlIG1lbnUgSWNvblxyXG4gKi9cclxuICBASW5wdXQoJ21lbnUtY29sb3InKVxyXG4gIHB1YmxpYyBNZW51Q29sb3I6IHN0cmluZztcclxuLyoqXHJcbiAqIFRoZSBjb2xvciBvZiB0aGUgbWVudSBpY29uIHdoZW4gaG92ZXIgXHJcbiAqL1xyXG4gIEBJbnB1dCgnaG92ZXItbWVudS1jb2xvcicpXHJcbiAgcHVibGljIEhvdmVyTWVudUNvbG9yOiBzdHJpbmc7XHJcbi8qKlxyXG4gKiBUaGUgd2lkdGggb2YgdGhlIHNpZGUgbmF2IGNvbnRlbnRcclxuICovXHJcbiAgQElucHV0KCdtYXQtY29udGVudC13aWR0aCcpXHJcbiAgcHVibGljIE1hdENvbnRlbnRXaWR0aDogc3RyaW5nO1xyXG4vKipcclxuICogVGhlIGhlaWdodCBvZiB0aGUgc2lkZSBuYXYgY29udGVudFxyXG4gKi9cclxuICBASW5wdXQoJ21hdC1jb250ZW50LWhlaWdodCcpXHJcbiAgcHVibGljIE1hdENvbnRlbnRIZWlnaHQ6IHN0cmluZztcclxuLyoqXHJcbiAqIFRoZSB3aWR0aCBvZiB0aGUgc2lkZSBuYXYgY29udGFpbmVyXHJcbiAqL1xyXG4gIEBJbnB1dCgnbWF0LWNvbnRhaW5lci13aWR0aCcpXHJcbiAgcHVibGljIE1hdENvbnRhaW5lcldpZHRoOiBzdHJpbmc7XHJcbi8qKlxyXG4gKiB0aGUgYmFja2dyb3VuZCBjb2xvciBvZiB0aGUgYnV0dG9ucyBpbiBtZW51XHJcbiAqL1xyXG4gIEBJbnB1dCgnYnV0dG9uLWJhY2tncm91bmQtY29sb3InKVxyXG4gIHB1YmxpYyBCdXR0b25CYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcclxuLyoqXHJcbiAqIFRPRE8gd2hlbiBob3ZlciBjb2xvciBpcyBhc3NpZ25lZCBhbGwgYnV0dG9ucyBkaXNwbGF5IHRoYXQgY29sb3JcclxuICovXHJcbiAgQElucHV0KCdidXR0b24tYmFja2dyb3VuZC1jb2xvci1ob3ZlcicpXHJcbiAgcHVibGljIEJ1dHRvbkJhY2tncm91bmRDb2xvckhvdmVyOnN0cmluZztcclxuLyoqXHJcbiAqIFRoZSBmb250IGNvbG9yIG9mIGJvdGggdGhlIGljb25zIGFuZCB0aGUgdGV4dCBpbiB0aGUgbWVudVxyXG4gKi9cclxuICBASW5wdXQoJ2ZvbnQtY29sb3InKVxyXG4gIHB1YmxpYyBGb250Q29sb3I6IHN0cmluZztcclxuXHJcbiAgcHVibGljIE1lbnVCR0NvbG9yOiBzdHJpbmc7XHJcbiAgcHVibGljIEJ1dHRvbkJHQ29sb3I6IHN0cmluZztcclxuICBwdWJsaWMgQnV0dG9uSG92ZXI6IGJvb2xlYW47XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3NpZGVuYXYnLCB7IHN0YXRpYzogZmFsc2UgfSkgcHVibGljIHNpZGVuYXY6IE1hdFNpZGVuYXY7XHJcblxyXG4gIC8vIHB1YmxpYyBNZW51Q29sb3I6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGJyZWFrcG9pbnRPYnNlcnZlcjogQnJlYWtwb2ludE9ic2VydmVyKSB7XHJcbiAgICB0aGlzLk5hdkl0ZW1DbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICB0aGlzLm9wZW5lZFN1YmplY3QgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xyXG4gICAgdGhpcy5NYXRDb250ZW50V2lkdGggPSBcIjUwcHhcIjtcclxuICAgIHRoaXMuTWF0Q29udGVudEhlaWdodCA9IFwiNDBweFwiO1xyXG4gICAgdGhpcy5NYXRDb250YWluZXJXaWR0aCA9IFwiNTBweFwiO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXREZWZhdWx0U3R5bGVzKCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICB0aGlzLm9wZW5lZFN1YmplY3Quc3Vic2NyaWJlKChyZXN1bHQ6IGJvb2xlYW4pID0+IHtcclxuICAgICAgdGhpcy5zaWRlbmF2W3Jlc3VsdCA/ICdvcGVuJyA6ICdjbG9zZSddKClcclxuICAgICAgdGhpcy5zZXRTdHlsZXMoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIEJ1dHRvbkNsaWNrZWQoYnV0dG9uOiBhbnkpIHtcclxuICAgIHRoaXMuTmF2SXRlbUNsaWNrZWQuZW1pdChidXR0b24pO1xyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyB0b2dnbGVEcmF3ZXIoKSB7XHJcbiAgICB0aGlzLm9wZW5lZFN1YmplY3QubmV4dCghdGhpcy5zaWRlbmF2Lm9wZW5lZCk7XHJcbiAgICBpZiAoIXRoaXMuc2lkZW5hdi5vcGVuZWQpIHtcclxuICAgICAgdGhpcy5NYXRDb250ZW50V2lkdGggPSBcIjUwcHhcIjtcclxuICAgICAgdGhpcy5NYXRDb250YWluZXJXaWR0aCA9IFwiNTBweFwiO1xyXG4gICAgICB0aGlzLk1hdENvbnRlbnRIZWlnaHQgPSBcIjQwcHhcIjtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJzaWRlbmF2IGNsb3NlZFwiLCB0aGlzLk1hdENvbnRlbnRXaWR0aCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5NYXRDb250ZW50V2lkdGggPSBcIjBweFwiO1xyXG4gICAgICB0aGlzLk1hdENvbnRlbnRIZWlnaHQgPSBcIjk0dmhcIjsvLzk0dmhcclxuICAgICAgdGhpcy5NYXRDb250YWluZXJXaWR0aCA9IFwiMjMwcHhcIjtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJzaWRlbmF2IG9wZW5cIiwgdGhpcy5NYXRDb250ZW50V2lkdGgpO1xyXG5cclxuICAgIH1cclxuICB9XHJcbiAgcHVibGljIE9uSG92ZXIoKTogdm9pZCB7XHJcbiAgICB0aGlzLk1lbnVCR0NvbG9yID0gdGhpcy5Ib3Zlck1lbnVDb2xvcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBPbkJ1dHRvbkhvdmVyKCk6dm9pZHtcclxuICAgIC8vIHRoaXMuQnV0dG9uQkdDb2xvciA9IHRoaXMuQnV0dG9uQmFja2dyb3VuZENvbG9ySG92ZXI7XHJcbiAgICB0aGlzLkJ1dHRvbkhvdmVyID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBMZWF2ZUhvdmVyKCk6IHZvaWQge1xyXG4gICAgdGhpcy5NZW51QkdDb2xvciA9IHRoaXMuTWVudUNvbG9yO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIExlYXZlQnV0dG9uSG92ZXIoKTp2b2lke1xyXG4gICAgLy8gdGhpcy5CdXR0b25CR0NvbG9yID0gdGhpcy5CdXR0b25CYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICB0aGlzLkJ1dHRvbkhvdmVyID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvLyBwdWJsaWMgc2V0QnV0dG9uU3R5bGVzKCkge1xyXG4gIC8vICAgbGV0IHN0eWxlcyA9IHtcclxuICAvLyAgICAgJ2JhY2tncm91bmQtY29sb3InOiB0aGlzLkJ1dHRvbkhvdmVyID8gdGhpcy5CdXR0b25CYWNrZ3JvdW5kQ29sb3JIb3ZlciA6IHRoaXMuQnV0dG9uQmFja2dyb3VuZENvbG9yXHJcbiAgLy8gICB9O1xyXG4gIC8vICAgcmV0dXJuIHN0eWxlcztcclxuICAvLyB9XHJcbiAgcHJvdGVjdGVkIHNldFN0eWxlcygpOiB2b2lkIHtcclxuICAgIHRoaXMuTWF0Q29udGVudFdpZHRoID0gXCI1MHB4XCI7XHJcbiAgICB0aGlzLk1hdENvbnRhaW5lcldpZHRoID0gXCI1MHB4XCI7XHJcbiAgICB0aGlzLk1hdENvbnRlbnRIZWlnaHQgPSBcIjQwcHhcIjtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBzZXREZWZhdWx0U3R5bGVzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRTdHlsZXMoKTtcclxuXHJcbiAgICBpZighdGhpcy5Gb250Q29sb3Ipe1xyXG4gICAgICB0aGlzLkZvbnRDb2xvciA9ICdibGFjayc7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoIXRoaXMuQnV0dG9uQmFja2dyb3VuZENvbG9ySG92ZXIpe1xyXG4gICAgICB0aGlzLkJ1dHRvbkJhY2tncm91bmRDb2xvckhvdmVyID0gXCJncmV5XCIvLyM5Njk1N1xyXG4gICAgfVxyXG4gICAgaWYoIXRoaXMuQnV0dG9uQmFja2dyb3VuZENvbG9yKXtcclxuICAgICAgdGhpcy5CdXR0b25CYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCIvLyM5Njk1N1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5NZW51Q29sb3IpIHtcclxuICAgICAgdGhpcy5NZW51QkdDb2xvciA9ICdibGFjayc7XHJcbiAgICB9XHJcbiAgICB0aGlzLk1lbnVCR0NvbG9yID0gdGhpcy5NZW51Q29sb3I7XHJcbiAgICBpZiAoIXRoaXMuSG92ZXJNZW51Q29sb3IpIHtcclxuICAgICAgdGhpcy5Ib3Zlck1lbnVDb2xvciA9ICdncmV5JztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiJdfQ==
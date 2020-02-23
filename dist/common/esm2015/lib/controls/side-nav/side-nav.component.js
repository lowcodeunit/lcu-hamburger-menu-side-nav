import { __decorate, __metadata } from "tslib";
import { MatSidenav } from '@angular/material/sidenav';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { Component, Input, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
let SideNavComponent = class SideNavComponent {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
            .pipe(map((result) => result.matches));
        this.SideOpen = false;
    }
    toggleDrawer() {
        if (this.sidenav.opened) {
            this.sidenav.close();
            this.SideOpen = false;
        }
        else {
            this.sidenav.open();
            this.SideOpen = true;
        }
    }
};
SideNavComponent.ctorParameters = () => [
    { type: BreakpointObserver }
];
__decorate([
    Input(),
    __metadata("design:type", Array)
], SideNavComponent.prototype, "MenuItems", void 0);
__decorate([
    ViewChild('sidenav', { static: false }),
    __metadata("design:type", MatSidenav)
], SideNavComponent.prototype, "sidenav", void 0);
SideNavComponent = __decorate([
    Component({
        selector: 'lcu-side-nav',
        template: "<mat-sidenav-container class=\"mat-sidenav-container\">\r\n  <mat-sidenav-content class=\"mat-sidenav-content\">\r\n      <button *ngIf=\"SideOpen === false\"class=\"hamburger-menu\" mat-icon-button (click)=\"toggleDrawer()\">\r\n        <mat-icon [inline]=\"true\">menu</mat-icon>\r\n      </button>\r\n    </mat-sidenav-content>\r\n      <!-- Builds the hamburger menu from the items in the constants.ts file-->\r\n      <mat-sidenav class=\"side-nav\" #sidenav mode=\"side\"  >\r\n          <button class=\"hamburger-menu\" mat-icon-button (click)=\"toggleDrawer()\">\r\n              <mat-icon [inline]=\"true\">menu</mat-icon>\r\n            </button>\r\n        <div class=\"button-container\" fxLayout=\"column\" fxLayoutAlign=\"space-around\" >\r\n        <button class=\"item-button\"  mat-menu-item  fxLayoutAlign=\"space-around center\"  *ngFor= \"let item of MenuItems\" \r\n          [disabled]= item.Disabled [routerLink]=[item.Url,item.Param]>\r\n          <!-- <mat-icon *ngIf=\"item.Icon\">{{ item.Icon }}</mat-icon> -->\r\n          <span>{{ item.Label }}</span>\r\n        </button>\r\n      </div>\r\n      </mat-sidenav>\r\n</mat-sidenav-container>\r\n\r\n     ",
        styles: [".hamburger-menu{background-color:transparent;border-width:0;outline:0;font-size:30px}.mat-sidenav-container{width:150px;background-color:transparent}.mat-sidenav-content{height:100vh;background-color:transparent;width:40px}.side-nav{height:100vh;background-color:transparent;border-right:transparent}.button-container{height:50vh;background-color:transparent;z-index:10}.item-button{width:100%;background-color:#f5f5f5}"]
    }),
    __metadata("design:paramtypes", [BreakpointObserver])
], SideNavComponent);
export { SideNavComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1uYXYuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGxvd2NvZGV1bml0L2xjdS1oYW1idXJnZXItbWVudS1zaWRlLW5hdi1jb21tb24vIiwic291cmNlcyI6WyJsaWIvY29udHJvbHMvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFNUQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBVXJDLElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWdCO0lBZ0IzQixZQUFzQixrQkFBc0M7UUFBdEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQWQ1RCxlQUFVLEdBQXdCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQzthQUNuRixJQUFJLENBQ0gsR0FBRyxDQUFDLENBQUMsTUFBdUIsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUNqRCxDQUFDO1FBWUYsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUVNLFlBQVk7UUFDakIsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1NBQ3ZCO2FBQU07WUFDTCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQztDQUVGLENBQUE7O1lBZDJDLGtCQUFrQjs7QUFKNUQ7SUFEQyxLQUFLLEVBQUU7OEJBQ0csS0FBSzttREFBZTtBQUVRO0lBQXRDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDLENBQUM7OEJBQWlCLFVBQVU7aURBQUM7QUFkdkQsZ0JBQWdCO0lBTjVCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxjQUFjO1FBQ3hCLDBxQ0FBd0M7O0tBRXpDLENBQUM7cUNBa0IwQyxrQkFBa0I7R0FoQmpELGdCQUFnQixDQThCNUI7U0E5QlksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWF0U2lkZW5hdiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NpZGVuYXYnO1xyXG5pbXBvcnQgeyBCcmVha3BvaW50cywgQnJlYWtwb2ludFN0YXRlLCBCcmVha3BvaW50T2JzZXJ2ZXIgfSBmcm9tICdAYW5ndWxhci9jZGsvbGF5b3V0JztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBOYXZMaW5rTW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbHMvbmF2LWxpbmsubW9kZWwnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGN1LXNpZGUtbmF2JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2lkZS1uYXYuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3NpZGUtbmF2LmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTaWRlTmF2Q29tcG9uZW50IHtcclxuXHJcbiAgaXNIYW5kc2V0JDogT2JzZXJ2YWJsZTxib29sZWFuPiA9IHRoaXMuYnJlYWtwb2ludE9ic2VydmVyLm9ic2VydmUoQnJlYWtwb2ludHMuSGFuZHNldClcclxuICAgIC5waXBlKFxyXG4gICAgICBtYXAoKHJlc3VsdDogQnJlYWtwb2ludFN0YXRlKSA9PiByZXN1bHQubWF0Y2hlcylcclxuICAgICk7XHJcblxyXG4gIHByb3RlY3RlZCBfbmF2TGlua3M6IEFycmF5PE5hdkxpbmtNb2RlbD47XHJcbiAgXHJcbiAgcHVibGljIFNpZGVPcGVuOiBib29sZWFuO1xyXG5cclxuICBASW5wdXQoKSBcclxuICBNZW51SXRlbXM6IEFycmF5PE5hdkxpbmtNb2RlbD47XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3NpZGVuYXYnLCB7c3RhdGljOiBmYWxzZX0pIHB1YmxpYyBzaWRlbmF2OiBNYXRTaWRlbmF2O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYnJlYWtwb2ludE9ic2VydmVyOiBCcmVha3BvaW50T2JzZXJ2ZXIpIHtcclxuICAgIHRoaXMuU2lkZU9wZW4gPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b2dnbGVEcmF3ZXIoKSB7XHJcbiAgICBpZiAodGhpcy5zaWRlbmF2Lm9wZW5lZCkge1xyXG4gICAgICB0aGlzLnNpZGVuYXYuY2xvc2UoKTtcclxuICAgICAgdGhpcy5TaWRlT3BlbiA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zaWRlbmF2Lm9wZW4oKTtcclxuICAgICAgdGhpcy5TaWRlT3BlbiA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuIl19
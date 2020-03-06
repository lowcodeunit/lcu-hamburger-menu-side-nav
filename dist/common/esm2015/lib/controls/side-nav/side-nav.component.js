import { __decorate, __metadata } from "tslib";
import { MatSidenav } from '@angular/material/sidenav';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { Component, Input, ViewChild } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
let SideNavComponent = class SideNavComponent {
    // public MenuColor: string;
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
            .pipe(map((result) => result.matches));
        this.NavItemClicked = new EventEmitter();
        this.openedSubject = new Subject();
        this.MatContentWidth = "50px";
        this.MatContentHeight = "40px";
        this.MatContainerWidth = "50px";
    }
    ngOnInit() {
        this.setDefaultStyles();
    }
    ngAfterContentInit() {
        this.openedSubject.subscribe((result) => {
            this.sidenav[result ? 'open' : 'close']();
            this.setStyles();
        });
    }
    ButtonClicked(button) {
        this.NavItemClicked.emit(button);
    }
    toggleDrawer() {
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
    }
    OnHover() {
        this.MenuBGColor = this.HoverMenuColor;
    }
    OnButtonHover() {
        // this.ButtonBGColor = this.ButtonBackgroundColorHover;
        this.ButtonHover = true;
    }
    LeaveHover() {
        this.MenuBGColor = this.MenuColor;
    }
    LeaveButtonHover() {
        // this.ButtonBGColor = this.ButtonBackgroundColor;
        this.ButtonHover = false;
    }
    // public setButtonStyles() {
    //   let styles = {
    //     'background-color': this.ButtonHover ? this.ButtonBackgroundColorHover : this.ButtonBackgroundColor
    //   };
    //   return styles;
    // }
    setStyles() {
        this.MatContentWidth = "50px";
        this.MatContainerWidth = "50px";
        this.MatContentHeight = "40px";
    }
    setDefaultStyles() {
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
    }
};
SideNavComponent.ctorParameters = () => [
    { type: BreakpointObserver }
];
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
export { SideNavComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1uYXYuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGxvd2NvZGV1bml0L2xjdS1oYW1idXJnZXItbWVudS1zaWRlLW5hdi1jb21tb24vIiwic291cmNlcyI6WyJsaWIvY29udHJvbHMvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFNUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFVckMsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7SUFzRTNCLDRCQUE0QjtJQUU1QixZQUFzQixrQkFBc0M7UUFBdEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQXRFNUQsZUFBVSxHQUF3QixJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUM7YUFDbkYsSUFBSSxDQUNILEdBQUcsQ0FBQyxDQUFDLE1BQXVCLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FDakQsQ0FBQztRQW9FRixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDOUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLE9BQU8sRUFBVyxDQUFDO1FBQzVDLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDO1FBQzlCLElBQUksQ0FBQyxnQkFB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RyxNQUFNLENBQUM7U0FDOUI7SUFDSCxDQUFDO0NBQ0YsQ0FBQTs7WUE1RjJDLGtCQUFrQjs7QUE5RDVEO0lBREMsTUFBTSxDQUFDLGtCQUFrQixDQUFDOzhCQUNKLFlBQVk7d0RBQU07QUFLekM7SUFEQyxLQUFLLENBQUMsWUFBWSxDQUFDOzhCQUNGLEtBQUs7bURBQWU7QUFPdEM7SUFEQyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7OEJBQ0YsT0FBTzt1REFBUztBQUt0QztJQURDLEtBQUssQ0FBQyxZQUFZLENBQUM7O21EQUNLO0FBS3pCO0lBREMsS0FBSyxDQUFDLGtCQUFrQixDQUFDOzt3REFDSTtBQUs5QjtJQURDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQzs7eURBQ0k7QUFLL0I7SUFEQyxLQUFLLENBQUMsb0JBQW9CLENBQUM7OzBEQUNJO0FBS2hDO0lBREMsS0FBSyxDQUFDLHFCQUFxQixDQUFDOzsyREFDSTtBQUtqQztJQURDLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQzs7K0RBQ0k7QUFLckM7SUFEQyxLQUFLLENBQUMsK0JBQStCLENBQUM7O29FQUNFO0FBS3pDO0lBREMsS0FBSyxDQUFDLFlBQVksQ0FBQzs7bURBQ0s7QUFNZ0I7SUFBeEMsU0FBUyxDQUFDLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQzs4QkFBaUIsVUFBVTtpREFBQztBQXBFekQsZ0JBQWdCO0lBTjVCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxjQUFjO1FBQ3hCLGt3REFBd0M7O0tBRXpDLENBQUM7cUNBMEUwQyxrQkFBa0I7R0F4RWpELGdCQUFnQixDQW9LNUI7U0FwS1ksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWF0U2lkZW5hdiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NpZGVuYXYnO1xyXG5pbXBvcnQgeyBCcmVha3BvaW50cywgQnJlYWtwb2ludFN0YXRlLCBCcmVha3BvaW50T2JzZXJ2ZXIgfSBmcm9tICdAYW5ndWxhci9jZGsvbGF5b3V0JztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IE5hdkxpbmtNb2RlbCB9IGZyb20gJy4uLy4uL21vZGVscy9uYXYtbGluay5tb2RlbCc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsY3Utc2lkZS1uYXYnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWRlLW5hdi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc2lkZS1uYXYuY29tcG9uZW50LnNjc3MnXSAgXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU2lkZU5hdkNvbXBvbmVudCB7XHJcblxyXG4gIGlzSGFuZHNldCQ6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLmJyZWFrcG9pbnRPYnNlcnZlci5vYnNlcnZlKEJyZWFrcG9pbnRzLkhhbmRzZXQpXHJcbiAgICAucGlwZShcclxuICAgICAgbWFwKChyZXN1bHQ6IEJyZWFrcG9pbnRTdGF0ZSkgPT4gcmVzdWx0Lm1hdGNoZXMpXHJcbiAgICApO1xyXG5cclxuICBwcm90ZWN0ZWQgX25hdkxpbmtzOiBBcnJheTxOYXZMaW5rTW9kZWw+O1xyXG5cclxuICBAT3V0cHV0KCduYXYtaXRlbS1jbGlja2VkJylcclxuICBwdWJsaWMgTmF2SXRlbUNsaWNrZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG4vKipcclxuICogVGhlIGl0ZW1zIGluIHRoZSBidXR0b24gaWNvbix0aXRsZSwgbGlua1xyXG4gKi9cclxuICBASW5wdXQoJ21lbnUtaXRlbXMnKVxyXG4gIHB1YmxpYyBNZW51SXRlbXM6IEFycmF5PE5hdkxpbmtNb2RlbD47XHJcblxyXG4gIC8qKlxyXG4gICAqIHB1YmxpYyBvcGVuZWRTdWJqZWN0OiBTdWJqZWN0PGJvb2xlYW4+O1xyXG4gICAqIGRldGVjdHMgaWYgdGhlIGJ1dHRvbiBoYXMgYmVlbiBjbGlja2VkXHJcbiAgICovXHJcbiAgQElucHV0KCdvcGVuZWQtc3ViamVjdCcpXHJcbiAgcHVibGljIG9wZW5lZFN1YmplY3Q6IFN1YmplY3Q8Ym9vbGVhbj5cclxuLyoqXHJcbiAqIFRoZSBjb2xvciBvZiB0aGUgbWVudSBJY29uXHJcbiAqL1xyXG4gIEBJbnB1dCgnbWVudS1jb2xvcicpXHJcbiAgcHVibGljIE1lbnVDb2xvcjogc3RyaW5nO1xyXG4vKipcclxuICogVGhlIGNvbG9yIG9mIHRoZSBtZW51IGljb24gd2hlbiBob3ZlciBcclxuICovXHJcbiAgQElucHV0KCdob3Zlci1tZW51LWNvbG9yJylcclxuICBwdWJsaWMgSG92ZXJNZW51Q29sb3I6IHN0cmluZztcclxuLyoqXHJcbiAqIFRoZSB3aWR0aCBvZiB0aGUgc2lkZSBuYXYgY29udGVudFxyXG4gKi9cclxuICBASW5wdXQoJ21hdC1jb250ZW50LXdpZHRoJylcclxuICBwdWJsaWMgTWF0Q29udGVudFdpZHRoOiBzdHJpbmc7XHJcbi8qKlxyXG4gKiBUaGUgaGVpZ2h0IG9mIHRoZSBzaWRlIG5hdiBjb250ZW50XHJcbiAqL1xyXG4gIEBJbnB1dCgnbWF0LWNvbnRlbnQtaGVpZ2h0JylcclxuICBwdWJsaWMgTWF0Q29udGVudEhlaWdodDogc3RyaW5nO1xyXG4vKipcclxuICogVGhlIHdpZHRoIG9mIHRoZSBzaWRlIG5hdiBjb250YWluZXJcclxuICovXHJcbiAgQElucHV0KCdtYXQtY29udGFpbmVyLXdpZHRoJylcclxuICBwdWJsaWMgTWF0Q29udGFpbmVyV2lkdGg6IHN0cmluZztcclxuLyoqXHJcbiAqIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSBidXR0b25zIGluIG1lbnVcclxuICovXHJcbiAgQElucHV0KCdidXR0b24tYmFja2dyb3VuZC1jb2xvcicpXHJcbiAgcHVibGljIEJ1dHRvbkJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xyXG4vKipcclxuICogVE9ETyB3aGVuIGhvdmVyIGNvbG9yIGlzIGFzc2lnbmVkIGFsbCBidXR0b25zIGRpc3BsYXkgdGhhdCBjb2xvclxyXG4gKi9cclxuICBASW5wdXQoJ2J1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyJylcclxuICBwdWJsaWMgQnV0dG9uQmFja2dyb3VuZENvbG9ySG92ZXI6c3RyaW5nO1xyXG4vKipcclxuICogVGhlIGZvbnQgY29sb3Igb2YgYm90aCB0aGUgaWNvbnMgYW5kIHRoZSB0ZXh0IGluIHRoZSBtZW51XHJcbiAqL1xyXG4gIEBJbnB1dCgnZm9udC1jb2xvcicpXHJcbiAgcHVibGljIEZvbnRDb2xvcjogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgTWVudUJHQ29sb3I6IHN0cmluZztcclxuICBwdWJsaWMgQnV0dG9uQkdDb2xvcjogc3RyaW5nO1xyXG4gIHB1YmxpYyBCdXR0b25Ib3ZlcjogYm9vbGVhbjtcclxuXHJcbiAgQFZpZXdDaGlsZCgnc2lkZW5hdicsIHsgc3RhdGljOiBmYWxzZSB9KSBwdWJsaWMgc2lkZW5hdjogTWF0U2lkZW5hdjtcclxuXHJcbiAgLy8gcHVibGljIE1lbnVDb2xvcjogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYnJlYWtwb2ludE9ic2VydmVyOiBCcmVha3BvaW50T2JzZXJ2ZXIpIHtcclxuICAgIHRoaXMuTmF2SXRlbUNsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIHRoaXMub3BlbmVkU3ViamVjdCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XHJcbiAgICB0aGlzLk1hdENvbnRlbnRXaWR0aCA9IFwiNTBweFwiO1xyXG4gICAgdGhpcy5NYXRDb250ZW50SGVpZ2h0ID0gXCI0MHB4XCI7XHJcbiAgICB0aGlzLk1hdENvbnRhaW5lcldpZHRoID0gXCI1MHB4XCI7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldERlZmF1bHRTdHlsZXMoKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgIHRoaXMub3BlbmVkU3ViamVjdC5zdWJzY3JpYmUoKHJlc3VsdDogYm9vbGVhbikgPT4ge1xyXG4gICAgICB0aGlzLnNpZGVuYXZbcmVzdWx0ID8gJ29wZW4nIDogJ2Nsb3NlJ10oKVxyXG4gICAgICB0aGlzLnNldFN0eWxlcygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgQnV0dG9uQ2xpY2tlZChidXR0b246IGFueSkge1xyXG4gICAgdGhpcy5OYXZJdGVtQ2xpY2tlZC5lbWl0KGJ1dHRvbik7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIHRvZ2dsZURyYXdlcigpIHtcclxuICAgIHRoaXMub3BlbmVkU3ViamVjdC5uZXh0KCF0aGlzLnNpZGVuYXYub3BlbmVkKTtcclxuICAgIGlmICghdGhpcy5zaWRlbmF2Lm9wZW5lZCkge1xyXG4gICAgICB0aGlzLk1hdENvbnRlbnRXaWR0aCA9IFwiNTBweFwiO1xyXG4gICAgICB0aGlzLk1hdENvbnRhaW5lcldpZHRoID0gXCI1MHB4XCI7XHJcbiAgICAgIHRoaXMuTWF0Q29udGVudEhlaWdodCA9IFwiNDBweFwiO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcInNpZGVuYXYgY2xvc2VkXCIsIHRoaXMuTWF0Q29udGVudFdpZHRoKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLk1hdENvbnRlbnRXaWR0aCA9IFwiMHB4XCI7XHJcbiAgICAgIHRoaXMuTWF0Q29udGVudEhlaWdodCA9IFwiOTR2aFwiOy8vOTR2aFxyXG4gICAgICB0aGlzLk1hdENvbnRhaW5lcldpZHRoID0gXCIyMzBweFwiO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcInNpZGVuYXYgb3BlblwiLCB0aGlzLk1hdENvbnRlbnRXaWR0aCk7XHJcblxyXG4gICAgfVxyXG4gIH1cclxuICBwdWJsaWMgT25Ib3ZlcigpOiB2b2lkIHtcclxuICAgIHRoaXMuTWVudUJHQ29sb3IgPSB0aGlzLkhvdmVyTWVudUNvbG9yO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIE9uQnV0dG9uSG92ZXIoKTp2b2lke1xyXG4gICAgLy8gdGhpcy5CdXR0b25CR0NvbG9yID0gdGhpcy5CdXR0b25CYWNrZ3JvdW5kQ29sb3JIb3ZlcjtcclxuICAgIHRoaXMuQnV0dG9uSG92ZXIgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIExlYXZlSG92ZXIoKTogdm9pZCB7XHJcbiAgICB0aGlzLk1lbnVCR0NvbG9yID0gdGhpcy5NZW51Q29sb3I7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgTGVhdmVCdXR0b25Ib3ZlcigpOnZvaWR7XHJcbiAgICAvLyB0aGlzLkJ1dHRvbkJHQ29sb3IgPSB0aGlzLkJ1dHRvbkJhY2tncm91bmRDb2xvcjtcclxuICAgIHRoaXMuQnV0dG9uSG92ZXIgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIC8vIHB1YmxpYyBzZXRCdXR0b25TdHlsZXMoKSB7XHJcbiAgLy8gICBsZXQgc3R5bGVzID0ge1xyXG4gIC8vICAgICAnYmFja2dyb3VuZC1jb2xvcic6IHRoaXMuQnV0dG9uSG92ZXIgPyB0aGlzLkJ1dHRvbkJhY2tncm91bmRDb2xvckhvdmVyIDogdGhpcy5CdXR0b25CYWNrZ3JvdW5kQ29sb3JcclxuICAvLyAgIH07XHJcbiAgLy8gICByZXR1cm4gc3R5bGVzO1xyXG4gIC8vIH1cclxuICBwcm90ZWN0ZWQgc2V0U3R5bGVzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5NYXRDb250ZW50V2lkdGggPSBcIjUwcHhcIjtcclxuICAgIHRoaXMuTWF0Q29udGFpbmVyV2lkdGggPSBcIjUwcHhcIjtcclxuICAgIHRoaXMuTWF0Q29udGVudEhlaWdodCA9IFwiNDBweFwiO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHNldERlZmF1bHRTdHlsZXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldFN0eWxlcygpO1xyXG5cclxuICAgIGlmKCF0aGlzLkZvbnRDb2xvcil7XHJcbiAgICAgIHRoaXMuRm9udENvbG9yID0gJ2JsYWNrJztcclxuICAgIH1cclxuXHJcbiAgICBpZighdGhpcy5CdXR0b25CYWNrZ3JvdW5kQ29sb3JIb3Zlcil7XHJcbiAgICAgIHRoaXMuQnV0dG9uQmFja2dyb3VuZENvbG9ySG92ZXIgPSBcImdyZXlcIi8vIzk2OTU3XHJcbiAgICB9XHJcbiAgICBpZighdGhpcy5CdXR0b25CYWNrZ3JvdW5kQ29sb3Ipe1xyXG4gICAgICB0aGlzLkJ1dHRvbkJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIi8vIzk2OTU3XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLk1lbnVDb2xvcikge1xyXG4gICAgICB0aGlzLk1lbnVCR0NvbG9yID0gJ2JsYWNrJztcclxuICAgIH1cclxuICAgIHRoaXMuTWVudUJHQ29sb3IgPSB0aGlzLk1lbnVDb2xvcjtcclxuICAgIGlmICghdGhpcy5Ib3Zlck1lbnVDb2xvcikge1xyXG4gICAgICB0aGlzLkhvdmVyTWVudUNvbG9yID0gJ2dyZXknO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuIl19
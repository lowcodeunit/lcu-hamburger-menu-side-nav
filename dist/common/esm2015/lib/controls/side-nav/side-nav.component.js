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
        this.isDisabled = true;
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
        if (!this.FontFamily) {
            this.FontFamily = "'Montserrat', sans-serif";
        }
        if (!this.FontWeight) {
            this.FontWeight = "bold";
        }
        if (!this.FontSize) {
            this.FontSize = "20px";
        }
        if (!this.ButtonBackgroundColorHover) {
            this.ButtonBackgroundColorHover = "grey"; //#96957
        }
        if (!this.ButtonBackgroundColor) {
            this.ButtonBackgroundColor = "white"; //#96957
        }
        if (!this.ButtonBorder) {
            this.ButtonBorder = "none";
        }
        if (!this.ButtonTextPadding) {
            this.ButtonTextPadding = "0px 0px 0px 29px";
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
    Input('font-family'),
    __metadata("design:type", String)
], SideNavComponent.prototype, "FontFamily", void 0);
__decorate([
    Input('font-weight'),
    __metadata("design:type", String)
], SideNavComponent.prototype, "FontWeight", void 0);
__decorate([
    Input('font-size'),
    __metadata("design:type", String)
], SideNavComponent.prototype, "FontSize", void 0);
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
    Input('button-border'),
    __metadata("design:type", String)
], SideNavComponent.prototype, "ButtonBorder", void 0);
__decorate([
    Input('button-background-color'),
    __metadata("design:type", String)
], SideNavComponent.prototype, "ButtonBackgroundColor", void 0);
__decorate([
    Input('button-background-color-hover'),
    __metadata("design:type", String)
], SideNavComponent.prototype, "ButtonBackgroundColorHover", void 0);
__decorate([
    Input('button-text-padding'),
    __metadata("design:type", String)
], SideNavComponent.prototype, "ButtonTextPadding", void 0);
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
        template: "<!-- disabled animations on mox request -->\r\n<mat-sidenav-container  class=\"mat-sidenav-container\" [@.disabled]=\"isDisabled\" [hasBackdrop]=\"false\" [ngStyle]=\"{width: MatContainerWidth}\">\r\n  <mat-sidenav-content class=\"mat-sidenav-content\" [ngStyle]=\"{width: MatContentWidth, height: MatContentHeight}\">\r\n    <button  class=\"hamburger-menu\" mat-icon-button (click)=\"toggleDrawer()\" >\r\n      <mat-icon [inline]=\"true\" (mouseover)=\"OnHover()\" (mouseleave)=\"LeaveHover()\"[ngStyle]=\"{'color':MenuBGColor}\" >menu</mat-icon>\r\n    </button>\r\n  </mat-sidenav-content>\r\n  <!-- Builds the hamburger menu from the items in the constants.ts file-->\r\n  <mat-sidenav class=\"side-nav\" #sidenav mode=\"side\" (click)=\"toggleDrawer()\" >\r\n    <button class=\"hamburger-menu\" mat-icon-button>\r\n      <mat-icon [inline]=\"true\" (mouseover)=\"OnHover()\" (mouseleave)=\"LeaveHover()\"[ngStyle]=\"{'color':MenuBGColor}\">menu</mat-icon>\r\n    </button>\r\n    <!--  -->\r\n    <div class=\"button-container\" fxLayout=\"column\" fxLayoutAlign=\"space-between\">\r\n        <!-- [ngStyle]=\"setButtonStyles()\" (mouseover)=\"OnButtonHover()\" (mouseleave)=\"LeaveButtonHover()\" -->\r\n      <button class=\"item-button\" mat-menu-item \r\n        fxLayoutAlign=\"start center\" \r\n        [ngStyle]=\"{'color':FontColor, 'border': ButtonBorder}\"\r\n        *ngFor=\"let item of MenuItems\"\r\n        [disabled]=item.Disabled (click)=\"ButtonClicked(item)\" >\r\n        <div [attr.id]=\"'button-' + item.Label\" fxLayoutAlign=\"start center\" >\r\n        <mat-icon \r\n          class=\"button-icon material-icons material-icons-outlined\" \r\n          *ngIf=\"item.Icon\"\r\n          [ngStyle]=\"{'color':FontColor}\">\r\n          {{ item.Icon }}\r\n        </mat-icon>\r\n        <span class=\"button-title\" \r\n        [ngStyle]=\"{'font-family': FontFamily, \r\n                    'font-weight': FontWeight, \r\n                    'padding': ButtonTextPadding, \r\n                    'font-size': FontSize }\">{{ item.Label }}</span>\r\n      </div>\r\n      <!-- <div class=\"button-border\"></div> -->\r\n      </button>\r\n      \r\n    </div>\r\n    \r\n  </mat-sidenav>\r\n</mat-sidenav-container>",
        styles: [".hamburger-menu{background-color:transparent;border-width:0;outline:0;font-size:30px;margin-left:15px;margin-bottom:2px}.no-animation{-webkit-transition-duration:0s!important;transition-duration:0s!important}.mat-sidenav-container{z-index:2;background-color:transparent}::ng-deep .mat-sidenav-container .mat-drawer-inner-container{z-index:10!important;background-color:transparent!important;overflow:hidden!important}.mat-sidenav-content{background-color:transparent;overflow:hidden}.side-nav{height:100vh;width:230px;background-color:transparent;border-right:transparent;overflow:hidden}.button-container{background-color:transparent;z-index:10;width:100%;border-left:1px solid rgba(0,0,0,.2);border-right:1px solid rgba(0,0,0,.2);box-shadow:1px 2px 1px rgba(0,0,0,.2)}.button-container .item-button{height:40px;width:100%;font-size:20px;outline:0;background-color:#fff}.button-container .item-button .button-icon{padding-left:17px}.button-container .item-button:last-child{border-bottom:none}.button-container .item-button:hover{background-color:#f4f4f3;cursor:pointer}"]
    }),
    __metadata("design:paramtypes", [BreakpointObserver])
], SideNavComponent);
export { SideNavComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1uYXYuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGxvd2NvZGV1bml0L2xjdS1oYW1idXJnZXItbWVudS1zaWRlLW5hdi1jb21tb24vIiwic291cmNlcyI6WyJsaWIvY29udHJvbHMvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFNUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFVckMsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7SUFvRzNCLDRCQUE0QjtJQUU1QixZQUFzQixrQkFBc0M7UUFBdEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQXBHNUQsZUFBVSxHQUF3QixJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUM7YUFDbkYsSUFBSSxDQUNILEdBQUcsQ0FBQyxDQUFDLE1BQXVCLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FDakQsQ0FBQztRQWtHRixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDOUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLE9BQU8sRUFBVyxDQUFDO1FBQzVDLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDO1FBQzlCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUM7UUFDL0IsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQztRQUNoQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUN6QixDQUFDO0lBRU0sUUFBUTtRQUNiLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFlLEVBQUUsRUFBRTtZQUMvQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFBO1lBQ3pDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxhQUFhLENBQUMsTUFBVztRQUM5QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBR00sWUFBWTtRQUNqQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDO1lBQzlCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLENBQUM7WUFDaEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQztZQUMvQix1REFBdUQ7U0FDeEQ7YUFDSTtZQUNILElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1lBQzdCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsQ0FBQSxNQUFNO1lBQ3JDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxPQUFPLENBQUM7WUFDakMscURBQXFEO1NBRXREO0lBQ0gsQ0FBQztJQUNNLE9BQU87UUFDWixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDekMsQ0FBQztJQUVNLGFBQWE7UUFDbEIsd0RBQXdEO1FBQ3hELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQzFCLENBQUM7SUFFTSxVQUFVO1FBQ2YsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3BDLENBQUM7SUFFTSxnQkFBZ0I7UUFDckIsbURBQW1EO1FBQ25ELElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQzNCLENBQUM7SUFFRCw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLDBHQUEwRztJQUMxRyxPQUFPO0lBQ1AsbUJBQW1CO0lBQ25CLElBQUk7SUFDTSxTQUFTO1FBQ2pCLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDO1FBQzlCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLENBQUM7UUFDaEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQztJQUNqQyxDQUFDO0lBRVMsZ0JBQWdCO1FBQ3hCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUVqQixJQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBQztZQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztTQUMxQjtRQUNELElBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFDO1lBQ2xCLElBQUksQ0FBQyxVQUFVLEdBQUcsMEJBQTBCLENBQUM7U0FDOUM7UUFDRCxJQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBQztZQUNsQixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztTQUMxQjtRQUVELElBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFDO1lBQ2hCLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1NBQ3hCO1FBRUQsSUFBRyxDQUFDLElBQUksQ0FBQywwQkFBMEIsRUFBQztZQUNsQyxJQUFJLENBQUMsMEJBQTBCLEdBQUcsTUFBTSxDQUFBLENBQUEsUUFBUTtTQUNqRDtRQUNELElBQUcsQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUM7WUFDN0IsSUFBSSxDQUFDLHFCQUFxQixHQUFHLE9BQU8sQ0FBQSxDQUFBLFFBQVE7U0FDN0M7UUFFRCxJQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBQztZQUNwQixJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQztTQUM1QjtRQUNELElBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUM7WUFDekIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGtCQUFrQixDQUFDO1NBQzdDO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUM7U0FDNUI7UUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUM7U0FDOUI7SUFDSCxDQUFDO0NBQ0YsQ0FBQTs7WUE5RzJDLGtCQUFrQjs7QUE1RjVEO0lBREMsTUFBTSxDQUFDLGtCQUFrQixDQUFDOzhCQUNKLFlBQVk7d0RBQU07QUFLekM7SUFEQyxLQUFLLENBQUMsWUFBWSxDQUFDOzhCQUNGLEtBQUs7bURBQWU7QUFPdEM7SUFEQyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7OEJBQ0YsT0FBTzt1REFBUztBQU10QztJQURDLEtBQUssQ0FBQyxhQUFhLENBQUM7O29EQUNLO0FBTTFCO0lBREMsS0FBSyxDQUFDLGFBQWEsQ0FBQzs7b0RBQ0s7QUFNMUI7SUFEQyxLQUFLLENBQUMsV0FBVyxDQUFDOztrREFDSztBQU14QjtJQURDLEtBQUssQ0FBQyxZQUFZLENBQUM7O21EQUNLO0FBS3pCO0lBREMsS0FBSyxDQUFDLGtCQUFrQixDQUFDOzt3REFDSTtBQUs5QjtJQURDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQzs7eURBQ0k7QUFLL0I7SUFEQyxLQUFLLENBQUMsb0JBQW9CLENBQUM7OzBEQUNJO0FBS2hDO0lBREMsS0FBSyxDQUFDLHFCQUFxQixDQUFDOzsyREFDSTtBQUtqQztJQURDLEtBQUssQ0FBQyxlQUFlLENBQUM7O3NEQUNLO0FBSzVCO0lBREMsS0FBSyxDQUFDLHlCQUF5QixDQUFDOzsrREFDSTtBQUtyQztJQURDLEtBQUssQ0FBQywrQkFBK0IsQ0FBQzs7b0VBQ0U7QUFLekM7SUFEQyxLQUFLLENBQUMscUJBQXFCLENBQUM7OzJEQUNJO0FBS2pDO0lBREMsS0FBSyxDQUFDLFlBQVksQ0FBQzs7bURBQ0s7QUFPZ0I7SUFBeEMsU0FBUyxDQUFDLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQzs4QkFBaUIsVUFBVTtpREFBQztBQWxHekQsZ0JBQWdCO0lBTjVCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxjQUFjO1FBQ3hCLGl0RUFBd0M7O0tBRXpDLENBQUM7cUNBd0cwQyxrQkFBa0I7R0F0R2pELGdCQUFnQixDQW9ONUI7U0FwTlksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWF0U2lkZW5hdiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NpZGVuYXYnO1xyXG5pbXBvcnQgeyBCcmVha3BvaW50cywgQnJlYWtwb2ludFN0YXRlLCBCcmVha3BvaW50T2JzZXJ2ZXIgfSBmcm9tICdAYW5ndWxhci9jZGsvbGF5b3V0JztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IE5hdkxpbmtNb2RlbCB9IGZyb20gJy4uLy4uL21vZGVscy9uYXYtbGluay5tb2RlbCc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsY3Utc2lkZS1uYXYnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWRlLW5hdi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc2lkZS1uYXYuY29tcG9uZW50LnNjc3MnXSAgXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU2lkZU5hdkNvbXBvbmVudCB7XHJcblxyXG4gIGlzSGFuZHNldCQ6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLmJyZWFrcG9pbnRPYnNlcnZlci5vYnNlcnZlKEJyZWFrcG9pbnRzLkhhbmRzZXQpXHJcbiAgICAucGlwZShcclxuICAgICAgbWFwKChyZXN1bHQ6IEJyZWFrcG9pbnRTdGF0ZSkgPT4gcmVzdWx0Lm1hdGNoZXMpXHJcbiAgICApO1xyXG5cclxuICBwcm90ZWN0ZWQgX25hdkxpbmtzOiBBcnJheTxOYXZMaW5rTW9kZWw+O1xyXG5cclxuICBAT3V0cHV0KCduYXYtaXRlbS1jbGlja2VkJylcclxuICBwdWJsaWMgTmF2SXRlbUNsaWNrZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG4vKipcclxuICogVGhlIGl0ZW1zIGluIHRoZSBidXR0b24gaWNvbix0aXRsZSwgbGlua1xyXG4gKi9cclxuICBASW5wdXQoJ21lbnUtaXRlbXMnKVxyXG4gIHB1YmxpYyBNZW51SXRlbXM6IEFycmF5PE5hdkxpbmtNb2RlbD47XHJcblxyXG4gIC8qKlxyXG4gICAqIHB1YmxpYyBvcGVuZWRTdWJqZWN0OiBTdWJqZWN0PGJvb2xlYW4+O1xyXG4gICAqIGRldGVjdHMgaWYgdGhlIGJ1dHRvbiBoYXMgYmVlbiBjbGlja2VkXHJcbiAgICovXHJcbiAgQElucHV0KCdvcGVuZWQtc3ViamVjdCcpXHJcbiAgcHVibGljIG9wZW5lZFN1YmplY3Q6IFN1YmplY3Q8Ym9vbGVhbj5cclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGZvbnQgZmFtaWx5IGZvciB0aGUgYnV0dG9uIHRleHRcclxuICAgKi9cclxuICBASW5wdXQoJ2ZvbnQtZmFtaWx5JylcclxuICBwdWJsaWMgRm9udEZhbWlseTogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgZm9udCB3ZWlnaHQgb2YgdGhlIGJ1dHRvbiB0ZXh0XHJcbiAgICovXHJcbiAgQElucHV0KCdmb250LXdlaWdodCcpXHJcbiAgcHVibGljIEZvbnRXZWlnaHQ6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIEZvbnQgc2l6ZSBvZiB0aGUgYnV0dG9uIHRleHRcclxuICAgKi9cclxuICBASW5wdXQoJ2ZvbnQtc2l6ZScpXHJcbiAgcHVibGljIEZvbnRTaXplOiBzdHJpbmc7XHJcblxyXG4vKipcclxuICogVGhlIGNvbG9yIG9mIHRoZSBtZW51IEljb25cclxuICovXHJcbiAgQElucHV0KCdtZW51LWNvbG9yJylcclxuICBwdWJsaWMgTWVudUNvbG9yOiBzdHJpbmc7XHJcbi8qKlxyXG4gKiBUaGUgY29sb3Igb2YgdGhlIG1lbnUgaWNvbiB3aGVuIGhvdmVyIFxyXG4gKi9cclxuICBASW5wdXQoJ2hvdmVyLW1lbnUtY29sb3InKVxyXG4gIHB1YmxpYyBIb3Zlck1lbnVDb2xvcjogc3RyaW5nO1xyXG4vKipcclxuICogVGhlIHdpZHRoIG9mIHRoZSBzaWRlIG5hdiBjb250ZW50XHJcbiAqL1xyXG4gIEBJbnB1dCgnbWF0LWNvbnRlbnQtd2lkdGgnKVxyXG4gIHB1YmxpYyBNYXRDb250ZW50V2lkdGg6IHN0cmluZztcclxuLyoqXHJcbiAqIFRoZSBoZWlnaHQgb2YgdGhlIHNpZGUgbmF2IGNvbnRlbnRcclxuICovXHJcbiAgQElucHV0KCdtYXQtY29udGVudC1oZWlnaHQnKVxyXG4gIHB1YmxpYyBNYXRDb250ZW50SGVpZ2h0OiBzdHJpbmc7XHJcbi8qKlxyXG4gKiBUaGUgd2lkdGggb2YgdGhlIHNpZGUgbmF2IGNvbnRhaW5lclxyXG4gKi9cclxuICBASW5wdXQoJ21hdC1jb250YWluZXItd2lkdGgnKVxyXG4gIHB1YmxpYyBNYXRDb250YWluZXJXaWR0aDogc3RyaW5nO1xyXG4vKipcclxuICogVGhlIEJvcmRlciBmb3IgdGhlIGJ1dHRvbiBpbiB0aGUgZHJvcGRvd24gbWVudVxyXG4gKi9cclxuICBASW5wdXQoJ2J1dHRvbi1ib3JkZXInKVxyXG4gIHB1YmxpYyBCdXR0b25Cb3JkZXI6IHN0cmluZztcclxuLyoqXHJcbiAqIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSBidXR0b25zIGluIG1lbnVcclxuICovXHJcbiAgQElucHV0KCdidXR0b24tYmFja2dyb3VuZC1jb2xvcicpXHJcbiAgcHVibGljIEJ1dHRvbkJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xyXG4vKipcclxuICogVE9ETyB3aGVuIGhvdmVyIGNvbG9yIGlzIGFzc2lnbmVkIGFsbCBidXR0b25zIGRpc3BsYXkgdGhhdCBjb2xvclxyXG4gKi9cclxuICBASW5wdXQoJ2J1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyJylcclxuICBwdWJsaWMgQnV0dG9uQmFja2dyb3VuZENvbG9ySG92ZXI6c3RyaW5nO1xyXG4vKipcclxuICogVGhlIHBhZGRpbmcgZm9yIHRoZSB0ZXh0IGluIHRoZSBidXR0b25cclxuICovXHJcbiAgQElucHV0KCdidXR0b24tdGV4dC1wYWRkaW5nJylcclxuICBwdWJsaWMgQnV0dG9uVGV4dFBhZGRpbmc6IHN0cmluZztcclxuLyoqXHJcbiAqIFRoZSBmb250IGNvbG9yIG9mIGJvdGggdGhlIGljb25zIGFuZCB0aGUgdGV4dCBpbiB0aGUgbWVudVxyXG4gKi9cclxuICBASW5wdXQoJ2ZvbnQtY29sb3InKVxyXG4gIHB1YmxpYyBGb250Q29sb3I6IHN0cmluZztcclxuXHJcbiAgcHVibGljIE1lbnVCR0NvbG9yOiBzdHJpbmc7XHJcbiAgcHVibGljIEJ1dHRvbkJHQ29sb3I6IHN0cmluZztcclxuICBwdWJsaWMgQnV0dG9uSG92ZXI6IGJvb2xlYW47XHJcbiAgcHVibGljIGlzRGlzYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3NpZGVuYXYnLCB7IHN0YXRpYzogZmFsc2UgfSkgcHVibGljIHNpZGVuYXY6IE1hdFNpZGVuYXY7XHJcblxyXG4gIC8vIHB1YmxpYyBNZW51Q29sb3I6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGJyZWFrcG9pbnRPYnNlcnZlcjogQnJlYWtwb2ludE9ic2VydmVyKSB7XHJcbiAgICB0aGlzLk5hdkl0ZW1DbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICB0aGlzLm9wZW5lZFN1YmplY3QgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xyXG4gICAgdGhpcy5NYXRDb250ZW50V2lkdGggPSBcIjUwcHhcIjtcclxuICAgIHRoaXMuTWF0Q29udGVudEhlaWdodCA9IFwiNDBweFwiO1xyXG4gICAgdGhpcy5NYXRDb250YWluZXJXaWR0aCA9IFwiNTBweFwiO1xyXG4gICAgdGhpcy5pc0Rpc2FibGVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0RGVmYXVsdFN0eWxlcygpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgdGhpcy5vcGVuZWRTdWJqZWN0LnN1YnNjcmliZSgocmVzdWx0OiBib29sZWFuKSA9PiB7XHJcbiAgICAgIHRoaXMuc2lkZW5hdltyZXN1bHQgPyAnb3BlbicgOiAnY2xvc2UnXSgpXHJcbiAgICAgIHRoaXMuc2V0U3R5bGVzKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBCdXR0b25DbGlja2VkKGJ1dHRvbjogYW55KSB7XHJcbiAgICB0aGlzLk5hdkl0ZW1DbGlja2VkLmVtaXQoYnV0dG9uKTtcclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgdG9nZ2xlRHJhd2VyKCkge1xyXG4gICAgdGhpcy5vcGVuZWRTdWJqZWN0Lm5leHQoIXRoaXMuc2lkZW5hdi5vcGVuZWQpO1xyXG4gICAgaWYgKCF0aGlzLnNpZGVuYXYub3BlbmVkKSB7XHJcbiAgICAgIHRoaXMuTWF0Q29udGVudFdpZHRoID0gXCI1MHB4XCI7XHJcbiAgICAgIHRoaXMuTWF0Q29udGFpbmVyV2lkdGggPSBcIjUwcHhcIjtcclxuICAgICAgdGhpcy5NYXRDb250ZW50SGVpZ2h0ID0gXCI0MHB4XCI7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwic2lkZW5hdiBjbG9zZWRcIiwgdGhpcy5NYXRDb250ZW50V2lkdGgpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuTWF0Q29udGVudFdpZHRoID0gXCIwcHhcIjtcclxuICAgICAgdGhpcy5NYXRDb250ZW50SGVpZ2h0ID0gXCI5NHZoXCI7Ly85NHZoXHJcbiAgICAgIHRoaXMuTWF0Q29udGFpbmVyV2lkdGggPSBcIjIzMHB4XCI7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwic2lkZW5hdiBvcGVuXCIsIHRoaXMuTWF0Q29udGVudFdpZHRoKTtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG4gIHB1YmxpYyBPbkhvdmVyKCk6IHZvaWQge1xyXG4gICAgdGhpcy5NZW51QkdDb2xvciA9IHRoaXMuSG92ZXJNZW51Q29sb3I7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgT25CdXR0b25Ib3ZlcigpOnZvaWR7XHJcbiAgICAvLyB0aGlzLkJ1dHRvbkJHQ29sb3IgPSB0aGlzLkJ1dHRvbkJhY2tncm91bmRDb2xvckhvdmVyO1xyXG4gICAgdGhpcy5CdXR0b25Ib3ZlciA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgTGVhdmVIb3ZlcigpOiB2b2lkIHtcclxuICAgIHRoaXMuTWVudUJHQ29sb3IgPSB0aGlzLk1lbnVDb2xvcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBMZWF2ZUJ1dHRvbkhvdmVyKCk6dm9pZHtcclxuICAgIC8vIHRoaXMuQnV0dG9uQkdDb2xvciA9IHRoaXMuQnV0dG9uQmFja2dyb3VuZENvbG9yO1xyXG4gICAgdGhpcy5CdXR0b25Ib3ZlciA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLy8gcHVibGljIHNldEJ1dHRvblN0eWxlcygpIHtcclxuICAvLyAgIGxldCBzdHlsZXMgPSB7XHJcbiAgLy8gICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogdGhpcy5CdXR0b25Ib3ZlciA/IHRoaXMuQnV0dG9uQmFja2dyb3VuZENvbG9ySG92ZXIgOiB0aGlzLkJ1dHRvbkJhY2tncm91bmRDb2xvclxyXG4gIC8vICAgfTtcclxuICAvLyAgIHJldHVybiBzdHlsZXM7XHJcbiAgLy8gfVxyXG4gIHByb3RlY3RlZCBzZXRTdHlsZXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLk1hdENvbnRlbnRXaWR0aCA9IFwiNTBweFwiO1xyXG4gICAgdGhpcy5NYXRDb250YWluZXJXaWR0aCA9IFwiNTBweFwiO1xyXG4gICAgdGhpcy5NYXRDb250ZW50SGVpZ2h0ID0gXCI0MHB4XCI7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgc2V0RGVmYXVsdFN0eWxlcygpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0U3R5bGVzKCk7XHJcblxyXG4gICAgaWYoIXRoaXMuRm9udENvbG9yKXtcclxuICAgICAgdGhpcy5Gb250Q29sb3IgPSAnYmxhY2snO1xyXG4gICAgfVxyXG4gICAgaWYoIXRoaXMuRm9udEZhbWlseSl7XHJcbiAgICAgIHRoaXMuRm9udEZhbWlseSA9IFwiJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmXCI7XHJcbiAgICB9XHJcbiAgICBpZighdGhpcy5Gb250V2VpZ2h0KXtcclxuICAgICAgdGhpcy5Gb250V2VpZ2h0ID0gXCJib2xkXCI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoIXRoaXMuRm9udFNpemUpe1xyXG4gICAgICB0aGlzLkZvbnRTaXplID0gXCIyMHB4XCI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoIXRoaXMuQnV0dG9uQmFja2dyb3VuZENvbG9ySG92ZXIpe1xyXG4gICAgICB0aGlzLkJ1dHRvbkJhY2tncm91bmRDb2xvckhvdmVyID0gXCJncmV5XCIvLyM5Njk1N1xyXG4gICAgfVxyXG4gICAgaWYoIXRoaXMuQnV0dG9uQmFja2dyb3VuZENvbG9yKXtcclxuICAgICAgdGhpcy5CdXR0b25CYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCIvLyM5Njk1N1xyXG4gICAgfVxyXG5cclxuICAgIGlmKCF0aGlzLkJ1dHRvbkJvcmRlcil7XHJcbiAgICAgIHRoaXMuQnV0dG9uQm9yZGVyID0gXCJub25lXCI7XHJcbiAgICB9XHJcbiAgICBpZighdGhpcy5CdXR0b25UZXh0UGFkZGluZyl7XHJcbiAgICAgIHRoaXMuQnV0dG9uVGV4dFBhZGRpbmcgPSBcIjBweCAwcHggMHB4IDI5cHhcIjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuTWVudUNvbG9yKSB7XHJcbiAgICAgIHRoaXMuTWVudUJHQ29sb3IgPSAnYmxhY2snO1xyXG4gICAgfVxyXG4gICAgdGhpcy5NZW51QkdDb2xvciA9IHRoaXMuTWVudUNvbG9yO1xyXG4gICAgaWYgKCF0aGlzLkhvdmVyTWVudUNvbG9yKSB7XHJcbiAgICAgIHRoaXMuSG92ZXJNZW51Q29sb3IgPSAnZ3JleSc7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4iXX0=
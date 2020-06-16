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
        this.isDisabled = true;
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
            this.ButtonTextPadding = "0px 0px 0px 30px";
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
            template: "<!-- disabled animations on mox request -->\r\n<mat-sidenav-container  class=\"mat-sidenav-container\" [@.disabled]=\"isDisabled\" [hasBackdrop]=\"false\" [ngStyle]=\"{width: MatContainerWidth}\">\r\n  <mat-sidenav-content class=\"mat-sidenav-content\" [ngStyle]=\"{width: MatContentWidth, height: MatContentHeight}\">\r\n    <button  class=\"hamburger-menu\" mat-icon-button (click)=\"toggleDrawer()\" >\r\n      <mat-icon [inline]=\"true\" (mouseover)=\"OnHover()\" (mouseleave)=\"LeaveHover()\"[ngStyle]=\"{'color':MenuBGColor}\" >menu</mat-icon>\r\n    </button>\r\n  </mat-sidenav-content>\r\n  <!-- Builds the hamburger menu from the items in the constants.ts file-->\r\n  <mat-sidenav class=\"side-nav\" #sidenav mode=\"side\" (click)=\"toggleDrawer()\" >\r\n    <button class=\"hamburger-menu\" mat-icon-button>\r\n      <mat-icon [inline]=\"true\" (mouseover)=\"OnHover()\" (mouseleave)=\"LeaveHover()\"[ngStyle]=\"{'color':MenuBGColor}\">menu</mat-icon>\r\n    </button>\r\n    <!--  -->\r\n    <div class=\"button-container\" fxLayout=\"column\" fxLayoutAlign=\"space-between\">\r\n        <!-- [ngStyle]=\"setButtonStyles()\" (mouseover)=\"OnButtonHover()\" (mouseleave)=\"LeaveButtonHover()\" -->\r\n      <button class=\"item-button\" mat-menu-item fxLayoutAlign=\"start center\" \r\n      [ngStyle]=\"{'color':FontColor, 'border': ButtonBorder}\"\r\n      *ngFor=\"let item of MenuItems\"\r\n        [disabled]=item.Disabled (click)=\"ButtonClicked(item)\" >\r\n        <div [attr.id]=\"'button-' + item.Label\" fxLayoutAlign=\"start center\" >\r\n        <mat-icon class=\"button-icon material-icons material-icons-outlined\" *ngIf=\"item.Icon\">{{ item.Icon }}</mat-icon>\r\n        <span class=\"button-title\" \r\n        [ngStyle]=\"{'font-family': FontFamily, \r\n                    'font-weight': FontWeight, \r\n                    'padding': ButtonTextPadding, \r\n                    'font-size': FontSize }\">{{ item.Label }}</span>\r\n      </div>\r\n      <!-- <div class=\"button-border\"></div> -->\r\n      </button>\r\n      \r\n    </div>\r\n    \r\n  </mat-sidenav>\r\n</mat-sidenav-container>",
            styles: [".hamburger-menu{background-color:transparent;border-width:0;outline:0;font-size:30px;margin-left:15px;margin-bottom:2px}.no-animation{-webkit-transition-duration:0s!important;transition-duration:0s!important}.mat-sidenav-container{z-index:2;background-color:transparent}::ng-deep .mat-sidenav-container .mat-drawer-inner-container{z-index:10!important;background-color:transparent!important;overflow:hidden!important}.mat-sidenav-content{background-color:transparent;overflow:hidden}.side-nav{height:100vh;width:230px;background-color:transparent;border-right:transparent;overflow:hidden}.button-container{background-color:transparent;z-index:10;width:100%;border-left:1px solid rgba(0,0,0,.2);border-right:1px solid rgba(0,0,0,.2);box-shadow:1px 2px 1px rgba(0,0,0,.2)}.button-container .item-button{height:40px;width:100%;font-size:20px;outline:0;background-color:#fff}.button-container .item-button .button-icon{padding-left:17px}.button-container .item-button:last-child{border-bottom:none}.button-container .item-button:hover{background-color:#f4f4f3;cursor:pointer}"]
        }),
        __metadata("design:paramtypes", [BreakpointObserver])
    ], SideNavComponent);
    return SideNavComponent;
}());
export { SideNavComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1uYXYuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGxvd2NvZGV1bml0L2xjdS1oYW1idXJnZXItbWVudS1zaWRlLW5hdi1jb21tb24vIiwic291cmNlcyI6WyJsaWIvY29udHJvbHMvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFNUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFVckM7SUFvR0UsNEJBQTRCO0lBRTVCLDBCQUFzQixrQkFBc0M7UUFBdEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQXBHNUQsZUFBVSxHQUF3QixJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUM7YUFDbkYsSUFBSSxDQUNILEdBQUcsQ0FBQyxVQUFDLE1BQXVCLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsQ0FBQyxDQUNqRCxDQUFDO1FBa0dGLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUM5QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksT0FBTyxFQUFXLENBQUM7UUFDNUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUM7UUFDOUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQztRQUMvQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0lBQ3pCLENBQUM7SUFFTSxtQ0FBUSxHQUFmO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELDZDQUFrQixHQUFsQjtRQUFBLGlCQUtDO1FBSkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsVUFBQyxNQUFlO1lBQzNDLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUE7WUFDekMsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLHdDQUFhLEdBQXBCLFVBQXFCLE1BQVc7UUFDOUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUdNLHVDQUFZLEdBQW5CO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUN4QixJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQztZQUM5QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUM7WUFDL0IsdURBQXVEO1NBQ3hEO2FBQ0k7WUFDSCxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztZQUM3QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLENBQUEsTUFBTTtZQUNyQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsT0FBTyxDQUFDO1lBQ2pDLHFEQUFxRDtTQUV0RDtJQUNILENBQUM7SUFDTSxrQ0FBTyxHQUFkO1FBQ0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQ3pDLENBQUM7SUFFTSx3Q0FBYSxHQUFwQjtRQUNFLHdEQUF3RDtRQUN4RCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztJQUMxQixDQUFDO0lBRU0scUNBQVUsR0FBakI7UUFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDcEMsQ0FBQztJQUVNLDJDQUFnQixHQUF2QjtRQUNFLG1EQUFtRDtRQUNuRCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBRUQsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQiwwR0FBMEc7SUFDMUcsT0FBTztJQUNQLG1CQUFtQjtJQUNuQixJQUFJO0lBQ00sb0NBQVMsR0FBbkI7UUFDRSxJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQztRQUM5QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUM7SUFDakMsQ0FBQztJQUVTLDJDQUFnQixHQUExQjtRQUNFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUVqQixJQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBQztZQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztTQUMxQjtRQUNELElBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFDO1lBQ2xCLElBQUksQ0FBQyxVQUFVLEdBQUcsMEJBQTBCLENBQUM7U0FDOUM7UUFDRCxJQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBQztZQUNsQixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztTQUMxQjtRQUVELElBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFDO1lBQ2hCLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1NBQ3hCO1FBRUQsSUFBRyxDQUFDLElBQUksQ0FBQywwQkFBMEIsRUFBQztZQUNsQyxJQUFJLENBQUMsMEJBQTBCLEdBQUcsTUFBTSxDQUFBLENBQUEsUUFBUTtTQUNqRDtRQUNELElBQUcsQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUM7WUFDN0IsSUFBSSxDQUFDLHFCQUFxQixHQUFHLE9BQU8sQ0FBQSxDQUFBLFFBQVE7U0FDN0M7UUFFRCxJQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBQztZQUNwQixJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQztTQUM1QjtRQUNELElBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUM7WUFDekIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGtCQUFrQixDQUFDO1NBQzdDO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUM7U0FDNUI7UUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUM7U0FDOUI7SUFDSCxDQUFDOztnQkE3R3lDLGtCQUFrQjs7SUE1RjVEO1FBREMsTUFBTSxDQUFDLGtCQUFrQixDQUFDO2tDQUNKLFlBQVk7NERBQU07SUFLekM7UUFEQyxLQUFLLENBQUMsWUFBWSxDQUFDO2tDQUNGLEtBQUs7dURBQWU7SUFPdEM7UUFEQyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7a0NBQ0YsT0FBTzsyREFBUztJQU10QztRQURDLEtBQUssQ0FBQyxhQUFhLENBQUM7O3dEQUNLO0lBTTFCO1FBREMsS0FBSyxDQUFDLGFBQWEsQ0FBQzs7d0RBQ0s7SUFNMUI7UUFEQyxLQUFLLENBQUMsV0FBVyxDQUFDOztzREFDSztJQU14QjtRQURDLEtBQUssQ0FBQyxZQUFZLENBQUM7O3VEQUNLO0lBS3pCO1FBREMsS0FBSyxDQUFDLGtCQUFrQixDQUFDOzs0REFDSTtJQUs5QjtRQURDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQzs7NkRBQ0k7SUFLL0I7UUFEQyxLQUFLLENBQUMsb0JBQW9CLENBQUM7OzhEQUNJO0lBS2hDO1FBREMsS0FBSyxDQUFDLHFCQUFxQixDQUFDOzsrREFDSTtJQUtqQztRQURDLEtBQUssQ0FBQyxlQUFlLENBQUM7OzBEQUNLO0lBSzVCO1FBREMsS0FBSyxDQUFDLHlCQUF5QixDQUFDOzttRUFDSTtJQUtyQztRQURDLEtBQUssQ0FBQywrQkFBK0IsQ0FBQzs7d0VBQ0U7SUFLekM7UUFEQyxLQUFLLENBQUMscUJBQXFCLENBQUM7OytEQUNJO0lBS2pDO1FBREMsS0FBSyxDQUFDLFlBQVksQ0FBQzs7dURBQ0s7SUFPZ0I7UUFBeEMsU0FBUyxDQUFDLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQztrQ0FBaUIsVUFBVTtxREFBQztJQWxHekQsZ0JBQWdCO1FBTjVCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxjQUFjO1lBQ3hCLDRsRUFBd0M7O1NBRXpDLENBQUM7eUNBd0cwQyxrQkFBa0I7T0F0R2pELGdCQUFnQixDQW9ONUI7SUFBRCx1QkFBQztDQUFBLEFBcE5ELElBb05DO1NBcE5ZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1hdFNpZGVuYXYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zaWRlbmF2JztcclxuaW1wb3J0IHsgQnJlYWtwb2ludHMsIEJyZWFrcG9pbnRTdGF0ZSwgQnJlYWtwb2ludE9ic2VydmVyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2xheW91dCc7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBOYXZMaW5rTW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbHMvbmF2LWxpbmsubW9kZWwnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGN1LXNpZGUtbmF2JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2lkZS1uYXYuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3NpZGUtbmF2LmNvbXBvbmVudC5zY3NzJ10gIFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNpZGVOYXZDb21wb25lbnQge1xyXG5cclxuICBpc0hhbmRzZXQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5icmVha3BvaW50T2JzZXJ2ZXIub2JzZXJ2ZShCcmVha3BvaW50cy5IYW5kc2V0KVxyXG4gICAgLnBpcGUoXHJcbiAgICAgIG1hcCgocmVzdWx0OiBCcmVha3BvaW50U3RhdGUpID0+IHJlc3VsdC5tYXRjaGVzKVxyXG4gICAgKTtcclxuXHJcbiAgcHJvdGVjdGVkIF9uYXZMaW5rczogQXJyYXk8TmF2TGlua01vZGVsPjtcclxuXHJcbiAgQE91dHB1dCgnbmF2LWl0ZW0tY2xpY2tlZCcpXHJcbiAgcHVibGljIE5hdkl0ZW1DbGlja2VkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuLyoqXHJcbiAqIFRoZSBpdGVtcyBpbiB0aGUgYnV0dG9uIGljb24sdGl0bGUsIGxpbmtcclxuICovXHJcbiAgQElucHV0KCdtZW51LWl0ZW1zJylcclxuICBwdWJsaWMgTWVudUl0ZW1zOiBBcnJheTxOYXZMaW5rTW9kZWw+O1xyXG5cclxuICAvKipcclxuICAgKiBwdWJsaWMgb3BlbmVkU3ViamVjdDogU3ViamVjdDxib29sZWFuPjtcclxuICAgKiBkZXRlY3RzIGlmIHRoZSBidXR0b24gaGFzIGJlZW4gY2xpY2tlZFxyXG4gICAqL1xyXG4gIEBJbnB1dCgnb3BlbmVkLXN1YmplY3QnKVxyXG4gIHB1YmxpYyBvcGVuZWRTdWJqZWN0OiBTdWJqZWN0PGJvb2xlYW4+XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBmb250IGZhbWlseSBmb3IgdGhlIGJ1dHRvbiB0ZXh0XHJcbiAgICovXHJcbiAgQElucHV0KCdmb250LWZhbWlseScpXHJcbiAgcHVibGljIEZvbnRGYW1pbHk6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGZvbnQgd2VpZ2h0IG9mIHRoZSBidXR0b24gdGV4dFxyXG4gICAqL1xyXG4gIEBJbnB1dCgnZm9udC13ZWlnaHQnKVxyXG4gIHB1YmxpYyBGb250V2VpZ2h0OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBGb250IHNpemUgb2YgdGhlIGJ1dHRvbiB0ZXh0XHJcbiAgICovXHJcbiAgQElucHV0KCdmb250LXNpemUnKVxyXG4gIHB1YmxpYyBGb250U2l6ZTogc3RyaW5nO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBjb2xvciBvZiB0aGUgbWVudSBJY29uXHJcbiAqL1xyXG4gIEBJbnB1dCgnbWVudS1jb2xvcicpXHJcbiAgcHVibGljIE1lbnVDb2xvcjogc3RyaW5nO1xyXG4vKipcclxuICogVGhlIGNvbG9yIG9mIHRoZSBtZW51IGljb24gd2hlbiBob3ZlciBcclxuICovXHJcbiAgQElucHV0KCdob3Zlci1tZW51LWNvbG9yJylcclxuICBwdWJsaWMgSG92ZXJNZW51Q29sb3I6IHN0cmluZztcclxuLyoqXHJcbiAqIFRoZSB3aWR0aCBvZiB0aGUgc2lkZSBuYXYgY29udGVudFxyXG4gKi9cclxuICBASW5wdXQoJ21hdC1jb250ZW50LXdpZHRoJylcclxuICBwdWJsaWMgTWF0Q29udGVudFdpZHRoOiBzdHJpbmc7XHJcbi8qKlxyXG4gKiBUaGUgaGVpZ2h0IG9mIHRoZSBzaWRlIG5hdiBjb250ZW50XHJcbiAqL1xyXG4gIEBJbnB1dCgnbWF0LWNvbnRlbnQtaGVpZ2h0JylcclxuICBwdWJsaWMgTWF0Q29udGVudEhlaWdodDogc3RyaW5nO1xyXG4vKipcclxuICogVGhlIHdpZHRoIG9mIHRoZSBzaWRlIG5hdiBjb250YWluZXJcclxuICovXHJcbiAgQElucHV0KCdtYXQtY29udGFpbmVyLXdpZHRoJylcclxuICBwdWJsaWMgTWF0Q29udGFpbmVyV2lkdGg6IHN0cmluZztcclxuLyoqXHJcbiAqIFRoZSBCb3JkZXIgZm9yIHRoZSBidXR0b24gaW4gdGhlIGRyb3Bkb3duIG1lbnVcclxuICovXHJcbiAgQElucHV0KCdidXR0b24tYm9yZGVyJylcclxuICBwdWJsaWMgQnV0dG9uQm9yZGVyOiBzdHJpbmc7XHJcbi8qKlxyXG4gKiB0aGUgYmFja2dyb3VuZCBjb2xvciBvZiB0aGUgYnV0dG9ucyBpbiBtZW51XHJcbiAqL1xyXG4gIEBJbnB1dCgnYnV0dG9uLWJhY2tncm91bmQtY29sb3InKVxyXG4gIHB1YmxpYyBCdXR0b25CYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcclxuLyoqXHJcbiAqIFRPRE8gd2hlbiBob3ZlciBjb2xvciBpcyBhc3NpZ25lZCBhbGwgYnV0dG9ucyBkaXNwbGF5IHRoYXQgY29sb3JcclxuICovXHJcbiAgQElucHV0KCdidXR0b24tYmFja2dyb3VuZC1jb2xvci1ob3ZlcicpXHJcbiAgcHVibGljIEJ1dHRvbkJhY2tncm91bmRDb2xvckhvdmVyOnN0cmluZztcclxuLyoqXHJcbiAqIFRoZSBwYWRkaW5nIGZvciB0aGUgdGV4dCBpbiB0aGUgYnV0dG9uXHJcbiAqL1xyXG4gIEBJbnB1dCgnYnV0dG9uLXRleHQtcGFkZGluZycpXHJcbiAgcHVibGljIEJ1dHRvblRleHRQYWRkaW5nOiBzdHJpbmc7XHJcbi8qKlxyXG4gKiBUaGUgZm9udCBjb2xvciBvZiBib3RoIHRoZSBpY29ucyBhbmQgdGhlIHRleHQgaW4gdGhlIG1lbnVcclxuICovXHJcbiAgQElucHV0KCdmb250LWNvbG9yJylcclxuICBwdWJsaWMgRm9udENvbG9yOiBzdHJpbmc7XHJcblxyXG4gIHB1YmxpYyBNZW51QkdDb2xvcjogc3RyaW5nO1xyXG4gIHB1YmxpYyBCdXR0b25CR0NvbG9yOiBzdHJpbmc7XHJcbiAgcHVibGljIEJ1dHRvbkhvdmVyOiBib29sZWFuO1xyXG4gIHB1YmxpYyBpc0Rpc2FibGVkOiBib29sZWFuO1xyXG5cclxuICBAVmlld0NoaWxkKCdzaWRlbmF2JywgeyBzdGF0aWM6IGZhbHNlIH0pIHB1YmxpYyBzaWRlbmF2OiBNYXRTaWRlbmF2O1xyXG5cclxuICAvLyBwdWJsaWMgTWVudUNvbG9yOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBicmVha3BvaW50T2JzZXJ2ZXI6IEJyZWFrcG9pbnRPYnNlcnZlcikge1xyXG4gICAgdGhpcy5OYXZJdGVtQ2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgdGhpcy5vcGVuZWRTdWJqZWN0ID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcclxuICAgIHRoaXMuTWF0Q29udGVudFdpZHRoID0gXCI1MHB4XCI7XHJcbiAgICB0aGlzLk1hdENvbnRlbnRIZWlnaHQgPSBcIjQwcHhcIjtcclxuICAgIHRoaXMuTWF0Q29udGFpbmVyV2lkdGggPSBcIjUwcHhcIjtcclxuICAgIHRoaXMuaXNEaXNhYmxlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldERlZmF1bHRTdHlsZXMoKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgIHRoaXMub3BlbmVkU3ViamVjdC5zdWJzY3JpYmUoKHJlc3VsdDogYm9vbGVhbikgPT4ge1xyXG4gICAgICB0aGlzLnNpZGVuYXZbcmVzdWx0ID8gJ29wZW4nIDogJ2Nsb3NlJ10oKVxyXG4gICAgICB0aGlzLnNldFN0eWxlcygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgQnV0dG9uQ2xpY2tlZChidXR0b246IGFueSkge1xyXG4gICAgdGhpcy5OYXZJdGVtQ2xpY2tlZC5lbWl0KGJ1dHRvbik7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIHRvZ2dsZURyYXdlcigpIHtcclxuICAgIHRoaXMub3BlbmVkU3ViamVjdC5uZXh0KCF0aGlzLnNpZGVuYXYub3BlbmVkKTtcclxuICAgIGlmICghdGhpcy5zaWRlbmF2Lm9wZW5lZCkge1xyXG4gICAgICB0aGlzLk1hdENvbnRlbnRXaWR0aCA9IFwiNTBweFwiO1xyXG4gICAgICB0aGlzLk1hdENvbnRhaW5lcldpZHRoID0gXCI1MHB4XCI7XHJcbiAgICAgIHRoaXMuTWF0Q29udGVudEhlaWdodCA9IFwiNDBweFwiO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcInNpZGVuYXYgY2xvc2VkXCIsIHRoaXMuTWF0Q29udGVudFdpZHRoKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLk1hdENvbnRlbnRXaWR0aCA9IFwiMHB4XCI7XHJcbiAgICAgIHRoaXMuTWF0Q29udGVudEhlaWdodCA9IFwiOTR2aFwiOy8vOTR2aFxyXG4gICAgICB0aGlzLk1hdENvbnRhaW5lcldpZHRoID0gXCIyMzBweFwiO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcInNpZGVuYXYgb3BlblwiLCB0aGlzLk1hdENvbnRlbnRXaWR0aCk7XHJcblxyXG4gICAgfVxyXG4gIH1cclxuICBwdWJsaWMgT25Ib3ZlcigpOiB2b2lkIHtcclxuICAgIHRoaXMuTWVudUJHQ29sb3IgPSB0aGlzLkhvdmVyTWVudUNvbG9yO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIE9uQnV0dG9uSG92ZXIoKTp2b2lke1xyXG4gICAgLy8gdGhpcy5CdXR0b25CR0NvbG9yID0gdGhpcy5CdXR0b25CYWNrZ3JvdW5kQ29sb3JIb3ZlcjtcclxuICAgIHRoaXMuQnV0dG9uSG92ZXIgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIExlYXZlSG92ZXIoKTogdm9pZCB7XHJcbiAgICB0aGlzLk1lbnVCR0NvbG9yID0gdGhpcy5NZW51Q29sb3I7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgTGVhdmVCdXR0b25Ib3ZlcigpOnZvaWR7XHJcbiAgICAvLyB0aGlzLkJ1dHRvbkJHQ29sb3IgPSB0aGlzLkJ1dHRvbkJhY2tncm91bmRDb2xvcjtcclxuICAgIHRoaXMuQnV0dG9uSG92ZXIgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIC8vIHB1YmxpYyBzZXRCdXR0b25TdHlsZXMoKSB7XHJcbiAgLy8gICBsZXQgc3R5bGVzID0ge1xyXG4gIC8vICAgICAnYmFja2dyb3VuZC1jb2xvcic6IHRoaXMuQnV0dG9uSG92ZXIgPyB0aGlzLkJ1dHRvbkJhY2tncm91bmRDb2xvckhvdmVyIDogdGhpcy5CdXR0b25CYWNrZ3JvdW5kQ29sb3JcclxuICAvLyAgIH07XHJcbiAgLy8gICByZXR1cm4gc3R5bGVzO1xyXG4gIC8vIH1cclxuICBwcm90ZWN0ZWQgc2V0U3R5bGVzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5NYXRDb250ZW50V2lkdGggPSBcIjUwcHhcIjtcclxuICAgIHRoaXMuTWF0Q29udGFpbmVyV2lkdGggPSBcIjUwcHhcIjtcclxuICAgIHRoaXMuTWF0Q29udGVudEhlaWdodCA9IFwiNDBweFwiO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHNldERlZmF1bHRTdHlsZXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldFN0eWxlcygpO1xyXG5cclxuICAgIGlmKCF0aGlzLkZvbnRDb2xvcil7XHJcbiAgICAgIHRoaXMuRm9udENvbG9yID0gJ2JsYWNrJztcclxuICAgIH1cclxuICAgIGlmKCF0aGlzLkZvbnRGYW1pbHkpe1xyXG4gICAgICB0aGlzLkZvbnRGYW1pbHkgPSBcIidNb250c2VycmF0Jywgc2Fucy1zZXJpZlwiO1xyXG4gICAgfVxyXG4gICAgaWYoIXRoaXMuRm9udFdlaWdodCl7XHJcbiAgICAgIHRoaXMuRm9udFdlaWdodCA9IFwiYm9sZFwiO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKCF0aGlzLkZvbnRTaXplKXtcclxuICAgICAgdGhpcy5Gb250U2l6ZSA9IFwiMjBweFwiO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKCF0aGlzLkJ1dHRvbkJhY2tncm91bmRDb2xvckhvdmVyKXtcclxuICAgICAgdGhpcy5CdXR0b25CYWNrZ3JvdW5kQ29sb3JIb3ZlciA9IFwiZ3JleVwiLy8jOTY5NTdcclxuICAgIH1cclxuICAgIGlmKCF0aGlzLkJ1dHRvbkJhY2tncm91bmRDb2xvcil7XHJcbiAgICAgIHRoaXMuQnV0dG9uQmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiLy8jOTY5NTdcclxuICAgIH1cclxuXHJcbiAgICBpZighdGhpcy5CdXR0b25Cb3JkZXIpe1xyXG4gICAgICB0aGlzLkJ1dHRvbkJvcmRlciA9IFwibm9uZVwiO1xyXG4gICAgfVxyXG4gICAgaWYoIXRoaXMuQnV0dG9uVGV4dFBhZGRpbmcpe1xyXG4gICAgICB0aGlzLkJ1dHRvblRleHRQYWRkaW5nID0gXCIwcHggMHB4IDBweCAzMHB4XCI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLk1lbnVDb2xvcikge1xyXG4gICAgICB0aGlzLk1lbnVCR0NvbG9yID0gJ2JsYWNrJztcclxuICAgIH1cclxuICAgIHRoaXMuTWVudUJHQ29sb3IgPSB0aGlzLk1lbnVDb2xvcjtcclxuICAgIGlmICghdGhpcy5Ib3Zlck1lbnVDb2xvcikge1xyXG4gICAgICB0aGlzLkhvdmVyTWVudUNvbG9yID0gJ2dyZXknO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuIl19
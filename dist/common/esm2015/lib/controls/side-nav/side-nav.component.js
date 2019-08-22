/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatSidenav } from '@angular/material';
export class SideNavComponent {
    // @ViewChild('sidenav', { static: true })public sidenav: MatSidenav;
    /**
     * @param {?} breakpointObserver
     */
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
            .pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        result => result.matches)));
        this.openedSubject = new Subject();
        this.SideOpen = false;
        this.MatContentWidth = "40px";
        this.MatContentHeight = "40px";
        this.MatContainerWidth = "40px";
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.openedSubject.subscribe((/**
         * @param {?} keepOpen
         * @return {?}
         */
        keepOpen => this.sidenav[keepOpen ? 'open' : 'close']()));
    }
    /**
     * @return {?}
     */
    toggleDrawer() {
        this.openedSubject.next(!this.sidenav.opened);
        //so the hamburger menu doesnt come all the way across the screen when closing the menu
        if (this.SideOpen === true) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.SideOpen = !this.SideOpen;
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
    }
}
SideNavComponent.decorators = [
    { type: Component, args: [{
                selector: 'lcu-side-nav',
                template: "<mat-sidenav-container  class=\"mat-sidenav-container\" [hasBackdrop]=\"false\" [ngStyle]=\"{width: MatContainerWidth}\">\r\n  <mat-sidenav-content class=\"mat-sidenav-content\" [ngStyle]=\"{width: MatContentWidth, height: MatContentHeight}\">\r\n    <button *ngIf=\"SideOpen === false\" class=\"hamburger-menu\" mat-icon-button (click)=\"toggleDrawer()\" >\r\n      <mat-icon [inline]=\"true\">menu</mat-icon>\r\n    </button>\r\n  </mat-sidenav-content>\r\n  <!-- Builds the hamburger menu from the items in the constants.ts file-->\r\n  <mat-sidenav class=\"side-nav\" #sidenav mode=\"side\" (click)=\"toggleDrawer()\">\r\n    <button class=\"hamburger-menu\" mat-icon-button>\r\n      <mat-icon [inline]=\"true\">menu</mat-icon>\r\n    </button>\r\n    <!--  -->\r\n    <div class=\"button-container\" fxLayout=\"column\" fxLayoutAlign=\"space-between\">\r\n      <button class=\"item-button\" mat-menu-item fxLayoutAlign=\"space-between center\" *ngFor=\"let item of MenuItems\"\r\n        [disabled]=item.Disabled [routerLink]=[item.Url,item.Param]>\r\n        <!-- <mat-icon *ngIf=\"item.Icon\">{{ item.Icon }}</mat-icon> -->\r\n        <span>{{ item.Label }}</span>\r\n      </button>\r\n    </div>\r\n    \r\n  </mat-sidenav>\r\n</mat-sidenav-container>",
                styles: [".hamburger-menu{background-color:transparent;border-width:0;outline:0;font-size:30px}.mat-sidenav-container{z-index:2;background-color:transparent}::ng-deep .mat-drawer-inner-container{z-index:10!important;background-color:transparent!important;overflow:hidden}.mat-sidenav-content{background-color:transparent;overflow:hidden}.side-nav{height:100vh;width:210px;background-color:transparent;border-right:transparent}.button-container{height:75vh;background-color:transparent;z-index:10;width:210px}.item-button{height:40px;width:100%;background-color:#fff;font-size:20px}.item-button:hover{background-color:Grey}"]
            }] }
];
/** @nocollapse */
SideNavComponent.ctorParameters = () => [
    { type: BreakpointObserver }
];
SideNavComponent.propDecorators = {
    MenuItems: [{ type: Input, args: ['menu-items',] }],
    openedSubject: [{ type: Input, args: ['opened-subject',] }],
    sidenav: [{ type: ViewChild, args: ['sidenav', { static: false },] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1uYXYuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGxvd2NvZGV1bml0L2xjdS1oYW1idXJnZXItbWVudS1zaWRlLW5hdi1jb21tb24vIiwic291cmNlcyI6WyJsaWIvY29udHJvbHMvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RFLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQVMvQyxNQUFNLE9BQU8sZ0JBQWdCOzs7OztJQTJCM0IsWUFBc0Isa0JBQXNDO1FBQXRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUF6QjVELGVBQVUsR0FBd0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDO2FBQ25GLElBQUksQ0FDSCxHQUFHOzs7O1FBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFDLENBQzlCLENBQUM7UUF1QkgsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLE9BQU8sRUFBVyxDQUFDO1FBQzVDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDO1FBQzlCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUM7UUFDL0IsSUFBSSxDQUFDLGlCQUFpQixHQUFFLE1BQU0sQ0FBQztJQUNoQyxDQUFDOzs7O0lBRU0sUUFBUTtJQUVmLENBQUM7Ozs7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTOzs7O1FBQzFCLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFDeEQsQ0FBQztJQUNKLENBQUM7Ozs7SUFHTSxZQUFZO1FBQ2pCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5Qyx1RkFBdUY7UUFDdkYsSUFBRyxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksRUFBQztZQUMxQixVQUFVOzs7WUFBQyxHQUFFLEVBQUU7Z0JBQ2IsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDakMsQ0FBQyxHQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ1AsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUM7WUFDOUIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQztZQUNoQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDO1lBQy9CLHVEQUF1RDtTQUN4RDthQUNHO1lBQ0YsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDL0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7WUFDN0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE9BQU8sQ0FBQztZQUNoQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsT0FBTyxDQUFDO1lBQ2pDLHFEQUFxRDtTQUV0RDtJQUNELENBQUM7OztZQXhFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLDB2Q0FBd0M7O2FBRXpDOzs7O1lBWFEsa0JBQWtCOzs7d0JBc0J4QixLQUFLLFNBQUMsWUFBWTs0QkFHbEIsS0FBSyxTQUFDLGdCQUFnQjtzQkFXdEIsU0FBUyxTQUFDLFNBQVMsRUFBQyxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUM7Ozs7SUFyQnBDLHNDQUdJOzs7OztJQUVKLHFDQUF5Qzs7SUFFekMscUNBQytCOztJQUUvQix5Q0FDdUM7O0lBRXZDLG9DQUF5Qjs7SUFFekIsMkNBQStCOztJQUUvQiw0Q0FBZ0M7O0lBRWhDLDZDQUFpQzs7SUFFakMsbUNBQWlFOzs7OztJQUlyRCw4Q0FBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQnJlYWtwb2ludE9ic2VydmVyLCBCcmVha3BvaW50cyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9sYXlvdXQnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgTmF2TGlua01vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzL25hdi1saW5rLm1vZGVsJztcclxuaW1wb3J0IHsgTWF0U2lkZW5hdiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xjdS1zaWRlLW5hdicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NpZGUtbmF2LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zaWRlLW5hdi5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU2lkZU5hdkNvbXBvbmVudCB7XHJcblxyXG4gIGlzSGFuZHNldCQ6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLmJyZWFrcG9pbnRPYnNlcnZlci5vYnNlcnZlKEJyZWFrcG9pbnRzLkhhbmRzZXQpXHJcbiAgICAucGlwZShcclxuICAgICAgbWFwKHJlc3VsdCA9PiByZXN1bHQubWF0Y2hlcylcclxuICAgICk7XHJcblxyXG4gIHByb3RlY3RlZCBfbmF2TGlua3M6IEFycmF5PE5hdkxpbmtNb2RlbD47XHJcbiAgXHJcbiAgQElucHV0KCdtZW51LWl0ZW1zJykgXHJcbiAgTWVudUl0ZW1zOiBBcnJheTxOYXZMaW5rTW9kZWw+O1xyXG5cclxuICBASW5wdXQoJ29wZW5lZC1zdWJqZWN0JykgXHJcbiAgcHVibGljIG9wZW5lZFN1YmplY3Q6IFN1YmplY3Q8Ym9vbGVhbj47XHJcblxyXG4gIHB1YmxpYyBTaWRlT3BlbjogYm9vbGVhbjtcclxuXHJcbiAgcHVibGljIE1hdENvbnRlbnRXaWR0aDogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgTWF0Q29udGVudEhlaWdodDogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgTWF0Q29udGFpbmVyV2lkdGg6IHN0cmluZztcclxuXHJcbiAgQFZpZXdDaGlsZCgnc2lkZW5hdicse3N0YXRpYzogZmFsc2V9KSBwdWJsaWMgc2lkZW5hdjogTWF0U2lkZW5hdjtcclxuICAvLyBAVmlld0NoaWxkKCdzaWRlbmF2JywgeyBzdGF0aWM6IHRydWUgfSlwdWJsaWMgc2lkZW5hdjogTWF0U2lkZW5hdjtcclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBicmVha3BvaW50T2JzZXJ2ZXI6IEJyZWFrcG9pbnRPYnNlcnZlcikge1xyXG4gICB0aGlzLm9wZW5lZFN1YmplY3QgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xyXG4gICB0aGlzLlNpZGVPcGVuID0gZmFsc2U7XHJcbiAgIHRoaXMuTWF0Q29udGVudFdpZHRoID0gXCI0MHB4XCI7XHJcbiAgIHRoaXMuTWF0Q29udGVudEhlaWdodCA9IFwiNDBweFwiO1xyXG4gICB0aGlzLk1hdENvbnRhaW5lcldpZHRoPSBcIjQwcHhcIjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgdGhpcy5vcGVuZWRTdWJqZWN0LnN1YnNjcmliZShcclxuICAgICAga2VlcE9wZW4gPT4gdGhpcy5zaWRlbmF2W2tlZXBPcGVuID8gJ29wZW4nIDogJ2Nsb3NlJ10oKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgdG9nZ2xlRHJhd2VyKCkge1xyXG4gICAgdGhpcy5vcGVuZWRTdWJqZWN0Lm5leHQoIXRoaXMuc2lkZW5hdi5vcGVuZWQpO1xyXG4gICAgLy9zbyB0aGUgaGFtYnVyZ2VyIG1lbnUgZG9lc250IGNvbWUgYWxsIHRoZSB3YXkgYWNyb3NzIHRoZSBzY3JlZW4gd2hlbiBjbG9zaW5nIHRoZSBtZW51XHJcbiAgICBpZih0aGlzLlNpZGVPcGVuID09PSB0cnVlKXtcclxuICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgdGhpcy5TaWRlT3BlbiA9ICF0aGlzLlNpZGVPcGVuO1xyXG4gICAgfSwxMDApO1xyXG4gICAgdGhpcy5NYXRDb250ZW50V2lkdGggPSBcIjQwcHhcIjtcclxuICAgIHRoaXMuTWF0Q29udGFpbmVyV2lkdGggPSBcIjQwcHhcIjtcclxuICAgIHRoaXMuTWF0Q29udGVudEhlaWdodCA9IFwiNDBweFwiO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJzaWRlbmF2IGNsb3NlZFwiLCB0aGlzLk1hdENvbnRlbnRXaWR0aCk7XHJcbiAgfVxyXG4gIGVsc2V7XHJcbiAgICB0aGlzLlNpZGVPcGVuID0gIXRoaXMuU2lkZU9wZW47XHJcbiAgICB0aGlzLk1hdENvbnRlbnRXaWR0aCA9IFwiMHB4XCI7XHJcbiAgICB0aGlzLk1hdENvbnRlbnRIZWlnaHQgPSBcIjEwMHZoXCI7XHJcbiAgICB0aGlzLk1hdENvbnRhaW5lcldpZHRoID0gXCIyMTBweFwiO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJzaWRlbmF2IG9wZW5cIiwgdGhpcy5NYXRDb250ZW50V2lkdGgpO1xyXG5cclxuICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuIl19
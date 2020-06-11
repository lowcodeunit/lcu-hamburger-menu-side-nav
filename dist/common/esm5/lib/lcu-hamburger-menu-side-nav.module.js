import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './controls/side-nav/side-nav.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FathymSharedModule, MaterialModule } from '@lcu/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
var LcuHamburgerMenuSideNavModule = /** @class */ (function () {
    function LcuHamburgerMenuSideNavModule() {
    }
    LcuHamburgerMenuSideNavModule = __decorate([
        NgModule({
            declarations: [SideNavComponent],
            imports: [
                NoopAnimationsModule,
                CommonModule,
                FlexLayoutModule,
                FathymSharedModule,
                MaterialModule,
                MatSidenavModule,
                MatIconModule
            ],
            exports: [SideNavComponent],
            entryComponents: [SideNavComponent]
        })
    ], LcuHamburgerMenuSideNavModule);
    return LcuHamburgerMenuSideNavModule;
}());
export { LcuHamburgerMenuSideNavModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGN1LWhhbWJ1cmdlci1tZW51LXNpZGUtbmF2Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bsb3djb2RldW5pdC9sY3UtaGFtYnVyZ2VyLW1lbnUtc2lkZS1uYXYtY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2xjdS1oYW1idXJnZXItbWVudS1zaWRlLW5hdi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxjQUFjLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDakUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBZ0I1RTtJQUFBO0lBQTZDLENBQUM7SUFBakMsNkJBQTZCO1FBZHpDLFFBQVEsQ0FBQztZQUNSLFlBQVksRUFBRSxDQUFDLGdCQUFnQixDQUFDO1lBQ2hDLE9BQU8sRUFBRTtnQkFDUCxvQkFBb0I7Z0JBQ3BCLFlBQVk7Z0JBQ1osZ0JBQWdCO2dCQUNoQixrQkFBa0I7Z0JBQ2xCLGNBQWM7Z0JBQ2QsZ0JBQWdCO2dCQUNoQixhQUFhO2FBQ2Q7WUFDRCxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztZQUMzQixlQUFlLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztTQUNwQyxDQUFDO09BQ1csNkJBQTZCLENBQUk7SUFBRCxvQ0FBQztDQUFBLEFBQTlDLElBQThDO1NBQWpDLDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFNpZGVOYXZDb21wb25lbnQgfSBmcm9tICcuL2NvbnRyb2xzL3NpZGUtbmF2L3NpZGUtbmF2LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZsZXhMYXlvdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mbGV4LWxheW91dCc7XHJcbmltcG9ydCB7IEZhdGh5bVNoYXJlZE1vZHVsZSwgTWF0ZXJpYWxNb2R1bGUgfSBmcm9tICdAbGN1L2NvbW1vbic7XHJcbmltcG9ydCB7IE1hdFNpZGVuYXZNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zaWRlbmF2JztcclxuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xyXG5pbXBvcnQgeyBOb29wQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1NpZGVOYXZDb21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIE5vb3BBbmltYXRpb25zTW9kdWxlLFxyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgRmxleExheW91dE1vZHVsZSxcclxuICAgIEZhdGh5bVNoYXJlZE1vZHVsZSxcclxuICAgIE1hdGVyaWFsTW9kdWxlLFxyXG4gICAgTWF0U2lkZW5hdk1vZHVsZSxcclxuICAgIE1hdEljb25Nb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtTaWRlTmF2Q29tcG9uZW50XSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtTaWRlTmF2Q29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGN1SGFtYnVyZ2VyTWVudVNpZGVOYXZNb2R1bGUgeyB9XHJcbiJdfQ==
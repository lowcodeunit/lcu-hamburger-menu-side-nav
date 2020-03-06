import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './controls/side-nav/side-nav.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FathymSharedModule, MaterialModule } from '@lcu/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
var LcuHamburgerMenuSideNavModule = /** @class */ (function () {
    function LcuHamburgerMenuSideNavModule() {
    }
    LcuHamburgerMenuSideNavModule = __decorate([
        NgModule({
            declarations: [SideNavComponent],
            imports: [
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGN1LWhhbWJ1cmdlci1tZW51LXNpZGUtbmF2Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bsb3djb2RldW5pdC9sY3UtaGFtYnVyZ2VyLW1lbnUtc2lkZS1uYXYtY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2xjdS1oYW1idXJnZXItbWVudS1zaWRlLW5hdi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxjQUFjLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDakUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBZXZEO0lBQUE7SUFBNkMsQ0FBQztJQUFqQyw2QkFBNkI7UUFiekMsUUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLENBQUM7WUFDaEMsT0FBTyxFQUFFO2dCQUNQLFlBQVk7Z0JBQ1osZ0JBQWdCO2dCQUNoQixrQkFBa0I7Z0JBQ2xCLGNBQWM7Z0JBQ2QsZ0JBQWdCO2dCQUNoQixhQUFhO2FBQ2Q7WUFDRCxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztZQUMzQixlQUFlLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztTQUNwQyxDQUFDO09BQ1csNkJBQTZCLENBQUk7SUFBRCxvQ0FBQztDQUFBLEFBQTlDLElBQThDO1NBQWpDLDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFNpZGVOYXZDb21wb25lbnQgfSBmcm9tICcuL2NvbnRyb2xzL3NpZGUtbmF2L3NpZGUtbmF2LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZsZXhMYXlvdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mbGV4LWxheW91dCc7XHJcbmltcG9ydCB7IEZhdGh5bVNoYXJlZE1vZHVsZSwgTWF0ZXJpYWxNb2R1bGUgfSBmcm9tICdAbGN1L2NvbW1vbic7XHJcbmltcG9ydCB7IE1hdFNpZGVuYXZNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zaWRlbmF2JztcclxuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtTaWRlTmF2Q29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBGbGV4TGF5b3V0TW9kdWxlLFxyXG4gICAgRmF0aHltU2hhcmVkTW9kdWxlLFxyXG4gICAgTWF0ZXJpYWxNb2R1bGUsXHJcbiAgICBNYXRTaWRlbmF2TW9kdWxlLFxyXG4gICAgTWF0SWNvbk1vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1NpZGVOYXZDb21wb25lbnRdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW1NpZGVOYXZDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMY3VIYW1idXJnZXJNZW51U2lkZU5hdk1vZHVsZSB7IH1cclxuIl19
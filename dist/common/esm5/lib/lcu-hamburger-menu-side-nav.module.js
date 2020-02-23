import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './controls/side-nav/side-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FathymSharedModule, MaterialModule } from '@lcu/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
                BrowserAnimationsModule,
                FlexLayoutModule,
                FathymSharedModule,
                MaterialModule,
                FormsModule,
                ReactiveFormsModule,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGN1LWhhbWJ1cmdlci1tZW51LXNpZGUtbmF2Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bsb3djb2RldW5pdC9sY3UtaGFtYnVyZ2VyLW1lbnUtc2lkZS1uYXYtY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2xjdS1oYW1idXJnZXItbWVudS1zaWRlLW5hdi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxjQUFjLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDakUsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQWtCdkQ7SUFBQTtJQUE2QyxDQUFDO0lBQWpDLDZCQUE2QjtRQWhCekMsUUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLENBQUM7WUFDaEMsT0FBTyxFQUFFO2dCQUNQLFlBQVk7Z0JBQ1osdUJBQXVCO2dCQUN2QixnQkFBZ0I7Z0JBQ2hCLGtCQUFrQjtnQkFDbEIsY0FBYztnQkFDZCxXQUFXO2dCQUNYLG1CQUFtQjtnQkFDbkIsZ0JBQWdCO2dCQUNoQixhQUFhO2FBQ2Q7WUFDRCxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztZQUMzQixlQUFlLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztTQUNwQyxDQUFDO09BQ1csNkJBQTZCLENBQUk7SUFBRCxvQ0FBQztDQUFBLEFBQTlDLElBQThDO1NBQWpDLDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFNpZGVOYXZDb21wb25lbnQgfSBmcm9tICcuL2NvbnRyb2xzL3NpZGUtbmF2L3NpZGUtbmF2LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgRmxleExheW91dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2ZsZXgtbGF5b3V0JztcclxuaW1wb3J0IHsgRmF0aHltU2hhcmVkTW9kdWxlLCBNYXRlcmlhbE1vZHVsZSB9IGZyb20gJ0BsY3UvY29tbW9uJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE1hdFNpZGVuYXZNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zaWRlbmF2JztcclxuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtTaWRlTmF2Q29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcclxuICAgIEZsZXhMYXlvdXRNb2R1bGUsXHJcbiAgICBGYXRoeW1TaGFyZWRNb2R1bGUsXHJcbiAgICBNYXRlcmlhbE1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuICAgIE1hdFNpZGVuYXZNb2R1bGUsXHJcbiAgICBNYXRJY29uTW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbU2lkZU5hdkNvbXBvbmVudF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbU2lkZU5hdkNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIExjdUhhbWJ1cmdlck1lbnVTaWRlTmF2TW9kdWxlIHsgfVxyXG4iXX0=
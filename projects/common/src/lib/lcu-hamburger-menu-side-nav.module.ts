import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './controls/side-nav/side-nav.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FathymSharedModule, MaterialModule } from '@lcu/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
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
export class LcuHamburgerMenuSideNavModule { }

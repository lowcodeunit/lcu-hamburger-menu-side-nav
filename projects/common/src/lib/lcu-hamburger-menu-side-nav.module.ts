import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './controls/side-nav/side-nav.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FathymSharedModule, MaterialModule } from '@lcu-ide/common';
import { MatSidenavModule, MatIconModule } from '@angular/material';

@NgModule({
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
  entryComponents:[SideNavComponent]
})
export class LcuHamburgerMenuSideNavModule { }

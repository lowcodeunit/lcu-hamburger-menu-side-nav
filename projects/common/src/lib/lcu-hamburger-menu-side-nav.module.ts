import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './controls/side-nav/side-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FathymSharedModule, MaterialModule } from '@lcu-ide/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule, MatIconModule } from '@angular/material';

@NgModule({
  declarations: [SideNavComponent],
  imports: [
    CommonModule,
    // BrowserAnimationsModule,
    FlexLayoutModule,
    FathymSharedModule,
    MaterialModule,
    // FormsModule,
    // ReactiveFormsModule,
    MatSidenavModule,
    MatIconModule
  ],
  exports: [SideNavComponent],
  entryComponents:[SideNavComponent]
})
export class LcuHamburgerMenuSideNavModule { }

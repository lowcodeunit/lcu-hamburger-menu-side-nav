import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './controls/side-nav/side-nav.component';
import { NavListComponent } from './controls/nav-list/nav-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FathymSharedModule, MaterialModule } from '@lcu-ide/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutComponent } from './controls/flex-layout/flex-layout.component';

@NgModule({
  declarations: [SideNavComponent, NavListComponent, FlexLayoutComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FathymSharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LcuHamburgerMenuSideNavModule { }

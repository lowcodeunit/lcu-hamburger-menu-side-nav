import { LcuHamburgerMenuSideNavModule } from './../../../common/src/lib/lcu-hamburger-menu-side-nav.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FathymSharedModule, MaterialModule } from '@lcu/common';
import { MatIconModule, MatSidenavModule } from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    FathymSharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSidenavModule,
    LcuHamburgerMenuSideNavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

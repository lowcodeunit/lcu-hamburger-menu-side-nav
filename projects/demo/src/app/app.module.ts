import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FathymSharedModule, MaterialModule, FaviconsService, BrowserFavicons, BROWSER_FAVICONS_CONFIG } from '@lcu-ide/common';
import { SideNavComponent } from 'projects/common/src/lib/controls/side-nav/side-nav.component';
import { MatIconModule, MatSidenavModule } from '@angular/material';
import { LcuHamburgerMenuSideNavModule } from 'projects/common/src/lcu.api';

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

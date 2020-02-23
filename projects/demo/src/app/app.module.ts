import { LcuHamburgerMenuSideNavModule } from './../../../common/src/lib/lcu-hamburger-menu-side-nav.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FathymSharedModule, MaterialModule, FaviconsService, BrowserFavicons, BROWSER_FAVICONS_CONFIG } from '@lcu/common';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    FathymSharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    LcuHamburgerMenuSideNavModule
  ],
  providers: [
  {
    provide: FaviconsService, useClass: BrowserFavicons
  },
  {
    provide: BROWSER_FAVICONS_CONFIG,
    useValue: {
      icons: {
        'arctic-theme': {
          type: 'image/png',
          href: './assets/images/favicons/thinky_arctic.png'
        },
        'cool-candy-theme': {
          type: 'image/png',
          href: './assets/images/favicons/thinky_cool_candy.png'
        },
        'flipper-theme': {
          type: 'image/png',
          href: './assets/images/favicons/thinky_flipper.png'
        },
        'ice-theme': {
          type: 'image/png',
          href: './assets/images/favicons/thinky_flipper.png'
        },
        'white-mint-theme': {
          type: 'image/png',
          href: './assets/images/favicons/thinky_flipper.png'
        },
        'contrast-theme': {
          type: 'image/png',
          href: './assets/images/favicons/thinky_circle_red.png',
          isDefault: true
        },
        'sea-green-theme': {
          type: 'image/png',
          href: './assets/images/favicons/thinky_arctic.png'
        },
      },
       // determine whether or not a random token is auto-appended to the HREF
      // values whenever an icon is injected into the document
      cacheBusting: true
    }
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }

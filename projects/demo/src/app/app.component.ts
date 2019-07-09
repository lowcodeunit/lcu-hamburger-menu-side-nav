import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {OverlayContainer} from '@angular/cdk/overlay';
import { Subscription } from 'rxjs';
import { NavigationConstants } from './utils/constants/navigation.constants';
import { NavLinkModel } from 'projects/common/src/lib/models/nav-link.model';


@Component({
  selector: 'lcu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  public BackgroundImage: string;

  public DarkTheme: boolean;

  public Links: Array<NavLinkModel>;

  public SelectedTheme: string;

  public title = 'demo';

  protected themesSubscriptions: Subscription;

  constructor(
    protected router: Router,
    protected activatedRoute: ActivatedRoute,
    
    protected overlayContainer: OverlayContainer) {

    this.BackgroundImage = './assets/images/bg_image.jpg';
  }

  public ngOnInit(): void {
    this.Links = NavigationConstants.MENU_ITEMS;

    this.resetTheme();
  }

   /**
    * Set default favicon
    */
    

  /**
   * change favicon
   *
   * @param name favicon name
   */
  

  /**
   * Set default theme
   */
  protected resetTheme(): void {
    this.changeTheme('arctic-theme');
  }

  /**
   * Toggle themes
   *
   * @param val theme to change to
   */
  protected changeTheme(val: string): void {
    this.SelectedTheme = val;

    const element: HTMLElement = this.overlayContainer.getContainerElement();


    // update favicon when theme changes
 }

}

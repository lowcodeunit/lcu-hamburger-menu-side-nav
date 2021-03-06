import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OverlayContainer } from '@angular/cdk/overlay';
import { NavigationConstants } from './utils/constants/navigation.constants';
import { NavLinkModel } from 'projects/common/src/lib/models/nav-link.model';
import { Subject } from 'rxjs';


@Component({
  selector: 'lcu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  public Items: Array<NavLinkModel> = new Array<NavLinkModel>();

  public Color: string;
  public HoverColor: string;
  public ButtonBgColor: string;
  public ButtonHoverBgColor: string;
  public FontColor: string;
  openedSubject = new Subject<boolean>();

  constructor(
    protected router: Router,
    protected activatedRoute: ActivatedRoute,
    protected overlayContainer: OverlayContainer) {
      this.Color = 'black';
      this.HoverColor = '#FF9849';
      this.ButtonBgColor = 'white';
      this.ButtonHoverBgColor = 'red';//'#f4f4f3'
      this.FontColor = '#8b868d';

  }

  public ngOnInit(): void {
    this.Items = NavigationConstants.MENU_ITEMS;
  }

  public toggleSide(){
    this.openedSubject.next(false);
  }

  public NavItemClicked(item: any) {
    console.log(item);
  }

}

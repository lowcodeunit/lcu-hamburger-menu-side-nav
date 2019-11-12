import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {OverlayContainer} from '@angular/cdk/overlay';
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
  openedSubject = new Subject<boolean>();

  constructor(
    protected router: Router,
    protected activatedRoute: ActivatedRoute,
    protected overlayContainer: OverlayContainer) {
      this.Color = 'black';
      this.HoverColor = '#FF9849';
  }

  public ngOnInit(): void {
    this.Items = NavigationConstants.MENU_ITEMS;
  }

  public toggleSide(){
    this.openedSubject.next(false);
  }

}

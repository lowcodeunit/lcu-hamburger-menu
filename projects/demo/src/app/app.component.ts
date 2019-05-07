import { Component } from '@angular/core';
import { HamburgerMenuModel } from '@lowcodeunit/lcu-hamburger-menu-common/lcu.api';
import { Constants } from './constants/constants';

@Component({
  selector: 'lcu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public Items: Array<HamburgerMenuModel> = Constants.VAR_NAMES_MENU;
}

import { Component, OnInit, Input } from '@angular/core';
import { HamburgerMenuModel } from '../../models/hamburger-menu.model';


@Component({
  selector: 'lcu-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.scss']
})
export class HamburgerMenuComponent implements OnInit {
  // public MenuItems: Array<HamburgerMenuModel>;
  @Input() MenuItems: Array<HamburgerMenuModel>;
  //protected _menuItems: any;
  ngOnInit() {
  //   this.MenuItems = Constants.VAR_NAMES_MENU;
  }
}
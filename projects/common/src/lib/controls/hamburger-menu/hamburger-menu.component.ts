import { Component, OnInit, Input } from '@angular/core';
import { HamburgerMenuModel } from '../../models/hamburger-menu.model';



@Component({
  selector: 'lcu-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.scss']
})
export class HamburgerMenuComponent implements OnInit {
  
  @Input() MenuItems: Array<HamburgerMenuModel>;
  ngOnInit() {
  }
}
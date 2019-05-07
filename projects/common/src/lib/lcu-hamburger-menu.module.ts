import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FathymSharedModule, MaterialModule } from '@lcu-ide/common';
import { HamburgerMenuComponent } from './controls/hamburger-menu/hamburger-menu.component';


@NgModule({
  declarations: [HamburgerMenuComponent],
  imports: [
    CommonModule,
    FathymSharedModule,
    MaterialModule
  ],
  exports: [HamburgerMenuComponent],
  entryComponents: [HamburgerMenuComponent]
})
export class LcuHamburgerMenuModule { }

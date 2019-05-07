import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FathymSharedModule, MaterialModule } from '@lcu-ide/common';
import { HamburgerMenuComponent } from './controls/hamburger-menu/hamburger-menu.component';
import { TestPageComponent } from './controls/test-page/test-page.component';


@NgModule({
  declarations: [HamburgerMenuComponent, TestPageComponent],
  imports: [
    CommonModule,
    FathymSharedModule,
    MaterialModule
  ],
  exports: [HamburgerMenuComponent, TestPageComponent],
  entryComponents: [HamburgerMenuComponent, TestPageComponent]
})
export class LcuHamburgerMenuModule { }

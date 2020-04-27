import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FathymSharedModule, MaterialModule } from '@lcu/common';
import { HamburgerMenuComponent } from './controls/hamburger-menu/hamburger-menu.component';
import { TestPageComponent } from './controls/test-page/test-page.component';
import { TestModalComponent } from './controls/test-modal/test-modal.component';


@NgModule({
  declarations: [HamburgerMenuComponent, TestPageComponent, TestModalComponent],
  imports: [
    CommonModule,
    FathymSharedModule,
    MaterialModule
  ],
  exports: [HamburgerMenuComponent, TestPageComponent, TestModalComponent],
  entryComponents: [HamburgerMenuComponent, TestPageComponent, TestModalComponent]
})
export class LcuHamburgerMenuModule { }

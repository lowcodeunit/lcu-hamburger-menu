import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestPageComponent } from '@lowcodeunit/lcu-hamburger-menu-common';

const routes: Routes = [
//{ path: '', redirectTo: 'home', pathMatch: 'full'},
{ path: 'home', component: TestPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

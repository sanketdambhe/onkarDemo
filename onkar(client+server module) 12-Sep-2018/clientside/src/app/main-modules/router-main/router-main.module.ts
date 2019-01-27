import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  Routes, RouterModule } from '@angular/router';
import { BuketenterComponent } from '../../comp/buketenter/buketenter.component';
import { BuketshowComponent } from '../../comp/buketshow/buketshow.component';

 const appRoute: Routes = [
 {path: '', component: BuketshowComponent},
 {path: 'store', component: BuketenterComponent}
];


@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(appRoute)
  ],
 exports: [
  RouterModule
 ]
})
export class RouterMainModule { }

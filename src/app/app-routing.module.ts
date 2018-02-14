import { NgModule } from '@angular/core';
import {RouterModule } from '@angular/router';
import { SiteComponent } from './site/site.component';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', component: SiteComponent }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }

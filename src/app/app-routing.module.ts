import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AddLocationPageComponent } from './add-location-page/add-location-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add-location', component: AddLocationPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

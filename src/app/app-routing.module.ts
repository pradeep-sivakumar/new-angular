import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SimpleifComponent } from './simpleif/simpleif.component';

const routes: Routes = [
  {
    path : "home", component:HomeComponent,
  },
  {
    path : "", component:HomeComponent
  },
  {
    path : "simpleIf", component:SimpleifComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

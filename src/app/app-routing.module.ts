import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArrayBasedComponent } from './array-based/array-based.component';
import { HomeComponent } from './home/home.component';
import { LinksComponent } from './links/links.component';
import { LoopsComponent } from './loops/loops.component';
import { SimpleifComponent } from './simpleif/simpleif.component';
import { StringBasedComponent } from './string-based/string-based.component';

const routes: Routes = [
  {
    path : "home", component:HomeComponent,
  },
  {
    path : "", component:HomeComponent
  },
  {
    path : "simpleif", component:SimpleifComponent
  },
  {
    path : "loops", component:LoopsComponent
  },
  {
    path : "string-based", component:StringBasedComponent
  },  
  {
    path : "array-based", component:ArrayBasedComponent
  },
  {
    path : "links", component:LinksComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

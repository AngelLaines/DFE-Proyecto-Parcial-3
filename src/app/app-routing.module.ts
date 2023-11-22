import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/dashboard/about/about.component';
import { ParentComponent } from './pages/sales/parent/parent.component';
import { HomeComponent } from './pages/home/home/home.component';
import { CatalogsComponent } from './pages/catalogs/catalogs/catalogs.component';

const routes: Routes = [
  {
    path:'', component:HomeComponent,
  },
  {
    path:'about', component:AboutComponent,
  },
  {
    path:'catalogs', component:CatalogsComponent,
  },
  {
    path:'sales', component:ParentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

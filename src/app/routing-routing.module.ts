import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './pages/categories/categories.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: '',   redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'categorie', component: CategoriesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes , { anchorScrolling: 'enabled' , useHash: true},)],
 
  exports: [RouterModule]
})
export class RoutingRoutingModule { }

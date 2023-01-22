import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipiesComponent } from './recipies/recipies.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'homepage',component:SidebarComponent,
   children:[
    {path:'recipie',component:RecipiesComponent},
    {path:'recipie_detail',component:RecipeDetailComponent}
   ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

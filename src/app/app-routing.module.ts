import { MovieDeatilsComponent } from './movie-deatils/movie-deatils.component';
import { YGuard } from './y.guard';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { TvComponent } from './tv/tv.component';
import { PeopleComponent } from './people/people.component';
import { MoviesComponent } from './movies/movies.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:"", redirectTo:"register" ,pathMatch:'full'},
  {path:"register" ,component:RegisterComponent},
  {path:"login" ,  component:LoginComponent},
  {path:"movies" , canActivate:[YGuard], component:MoviesComponent},
  {path:"people" ,  canActivate:[YGuard],component:PeopleComponent},
  {path:"tv" , canActivate:[YGuard], component:TvComponent},
  {path:"home" , canActivate:[YGuard], component:HomeComponent},
  {path:"moviedetails/:id" , canActivate:[YGuard], component:MovieDeatilsComponent},
  {path:"**" , component:NotFoundPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

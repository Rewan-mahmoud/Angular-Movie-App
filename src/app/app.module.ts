import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MoviesComponent } from './movies/movies.component';
import { PeopleComponent } from './people/people.component';
import { TvComponent } from './tv/tv.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { MovieDeatilsComponent } from './movie-deatils/movie-deatils.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    MoviesComponent,
    PeopleComponent,
    TvComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundPageComponent,
    MovieDeatilsComponent,

  ],
  imports:[
    BrowserModule,
    AppRoutingModule,
FormsModule,
    ReactiveFormsModule,
    HttpClientModule


 
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

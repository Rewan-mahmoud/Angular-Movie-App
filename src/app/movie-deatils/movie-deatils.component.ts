import { MoviesService } from './../movies.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-deatils',
  templateUrl: './movie-deatils.component.html',
  styleUrls: ['./movie-deatils.component.css']
})
export class MovieDeatilsComponent implements OnInit {
movieDetails:any;
MovieId:string = "";
imgPrefix:string = "https://image.tmdb.org/t/p/w500";
  constructor(private ActivatedRoute:ActivatedRoute ,private _MoviesService:MoviesService) { }

  ngOnInit(): void {
    this.MovieId = this.ActivatedRoute.snapshot.params["id"]
this._MoviesService.getMovieDetails(this.MovieId).subscribe({
  next:(response)=>{
this.movieDetails = response
console.log(this.movieDetails.genres);

    
  }
})
  }

}

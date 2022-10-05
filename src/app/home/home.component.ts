import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _MoviesService:MoviesService) { }
imgPrefix:string = "https://image.tmdb.org/t/p/w500";

trendingMovies:any[]=[];
  trendingPeople:any[]=[];
  trendingTvShow:any[]=[];

  ngOnInit():void {
    this._MoviesService.getTrending('movie').subscribe({
      next:(response)=>{
        this.trendingMovies = response.results.slice(0, 10)
console.log(this.trendingMovies );
      } 
      
    })
    this._MoviesService.getTrending('tv').subscribe({
      next:(response)=> this.trendingTvShow = response.results.slice(0, 10)
      
    })
    this._MoviesService.getTrending('person').subscribe({
      next:(response)=> {
        for (let i=0 ; i<response.results.length ; i++){
          if (response.results[i].profile_path == null){
            response.results[i].profile_path = "../../assets/475a86177aeedacf8dc7f5e2b4eff61f.jpg"
          }
          else{
            response.results[i].profile_path = this.imgPrefix+response.results[i].profile_path 
          }
        }
        this.trendingPeople = response.results.slice(0, 10)
      }
     
        
    })


  }

}

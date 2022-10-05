import { Component, OnInit } from '@angular/core';
import { MoviesService } from './../movies.service';
@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {
  constructor(private _MoviesService:MoviesService) { }
  imgPrefix:string = "https://image.tmdb.org/t/p/w500";
  
 
    trendingTvShow:any[]=[];
  
    ngOnInit():void {
      this._MoviesService.getTrending('tv').subscribe({
        next:(response)=>{
          this.trendingTvShow = response.results
  console.log(this.trendingTvShow );
        } 
        
      })
}
}

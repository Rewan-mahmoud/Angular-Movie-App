import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private _MoviesService:MoviesService) { }
  
  imgPrefix:string = "https://image.tmdb.org/t/p/w500";
  pages:number[]=[];
  pagesNumber:number=10;
  trendingMovies:any[]=[];
   
  
    ngOnInit():void {
      this.pages = new Array (this.pagesNumber).fill('').map((x , i)=>i+1);
      this._MoviesService.getPageNumber(1).subscribe({
        next:(response)=>{
          this.trendingMovies = response.results

        } 
        
      })
    }

    pagination(NumberOfPage:number)
    {
      this._MoviesService.getPageNumber(NumberOfPage).subscribe({
        next:(response)=>{
          this.trendingMovies = response.results
      
      }

    })
      
     }
    
  }

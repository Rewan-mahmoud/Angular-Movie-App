import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  constructor(private _MoviesService:MoviesService) { }
imgPrefix:string = "https://image.tmdb.org/t/p/w500";
  trendingPeople:any[]=[];

  ngOnInit(): void {

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
        this.trendingPeople = response.results
      }
     
        
    })

  }}

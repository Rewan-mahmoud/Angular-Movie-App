import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _httpclient:HttpClient) { }

  getTrending(mediaType:string):Observable<any>{

return this._httpclient.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44`)



  }
  getMovieDetails(id:string):Observable<any>{

  return this._httpclient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=eba8b9a7199efdcb0ca1f96879b83c44`) 
  }
  getPageNumber(pageNumber:number):Observable<any>{
    return this._httpclient.get(`https://api.themoviedb.org/3/discover/movie?api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}`)
  }
  getPageNumberTV(pageNumber:number):Observable<any>{
    return this._httpclient.get(`https://api.themoviedb.org/3/discover/tv?api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}`)
  }

}


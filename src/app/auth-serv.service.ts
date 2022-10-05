import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Observable , BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthServService {

  constructor(private _HttpClient:HttpClient , private _Router:Router) { 
    if(localStorage.getItem("userToken")){
      this.saveUserData()
    }
  }
 userData = new BehaviorSubject(null);
signUp(formdata:object):Observable<any>
{
return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signup' , formdata)
}

login(formdata:object):Observable<any>
{
return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signin' , formdata)
}
saveUserData(){
  let encodedToken = JSON.stringify(localStorage.getItem("userToken")) ;
  let decodedToken:any = jwtDecode(encodedToken);
  this.userData.next(decodedToken);
  console.log(this.userData);
 
}
signOut(){
  localStorage.removeItem("userToken");
  this.userData.next(null);
this._Router.navigate(["/login"]);
}
}

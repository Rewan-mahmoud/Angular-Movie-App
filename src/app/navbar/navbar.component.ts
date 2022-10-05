import { AuthServService } from './../auth-serv.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
UserInfo:any = {}
  isLogin:Boolean = false;
  constructor(private _AuthServService:AuthServService) { }

  Logout(){
    this._AuthServService.signOut();
  }
  ngOnInit(): void {

this._AuthServService.userData.subscribe({
  next:()=>{
    if(this._AuthServService.userData.getValue()!=null){
      this.isLogin= true;
      this.UserInfo = this._AuthServService.userData
      
      
    }
    else
    {
      this.isLogin= false;
    }
  }
})






}
}
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthServService } from '../auth-serv.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
errorLogin:string = ""
  loginForm!:FormGroup 
  constructor(private _AuthServService:AuthServService , private _Router:Router){}

  ngOnInit(): void {
  this.loginForm = new FormGroup ({
email: new FormControl(null , [Validators.email , Validators.required]),
password: new FormControl(null , [Validators.pattern('^[A-Z][a-z]{3,8}') , Validators.required])

    }) 
  }
  submitLogin(loginForm:FormGroup)

{
    if (loginForm.valid)
    {
      this._AuthServService.login(loginForm.value).subscribe({
        next:(response)=>{
          if (response.message ==="success"){
            localStorage.setItem("userToken", response.token);
            this._AuthServService.saveUserData();
            this._Router.navigate(["/home"])
          }
          else{
          this.errorLogin = response.message 
        
          
          }
        }
        
      })
        }
   


  }
}



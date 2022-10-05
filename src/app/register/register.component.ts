import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServService } from '../auth-serv.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

registerForm!:FormGroup;
errorMessage:string="";
  constructor(private _AuthServService:AuthServService , private _Router:Router){}

  ngOnInit() {
   this.registerForm = new FormGroup ({
first_name: new FormControl(null , [Validators.minLength(3) , Validators.maxLength(8) , Validators.required]),
last_name: new FormControl(null , [Validators.minLength(3) , Validators.maxLength(20) , Validators.required]),
age: new FormControl(null , [Validators.min(6) , Validators.max(80) , Validators.required]),
email : new FormControl(null , [Validators.email , Validators.required]),
password: new FormControl(null , [Validators.pattern('^[A-Z][a-z]{3,8}') , Validators.required])
   })
  }
  submitForm(registerForm:FormGroup){

if(registerForm.valid)
    this._AuthServService.signUp(registerForm.value).subscribe(
      {
        next:(response)=>{
          if (response.message === "success"){
this._Router.navigate(["/login"])

          }
          else{
this.errorMessage = response.message 
          }
        }
      }
    )
  }

 
}
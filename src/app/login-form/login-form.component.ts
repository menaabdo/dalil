import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{User} from '../models/user.model'
import { UserService } from '../service/user.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
}) 
export class LoginFormComponent implements OnInit {
 user={} as User
 res!:any
 logininfo?:any
token?:any
  constructor(private loginservice:UserService,private activeroute:Router,private cookieService: CookieService) { }
 
  ngOnInit(): void {
  }
login(){
 
  this.loginservice.login(this.user).subscribe(
      (res)=>{this.logininfo=res;this.token=this.logininfo.Response.access_token;
        this.cookieService.set( 'token', this.token );
        console.log(this.token)})

      this.loginservice.whologin( this.res)
    this.activeroute.navigateByUrl('/home/me');
      
    
  
}
}

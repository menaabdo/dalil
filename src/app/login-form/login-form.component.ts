import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{User} from '../models/user.model'
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
}) 
export class LoginFormComponent implements OnInit {
 user={} as User
 res!:any
 
  constructor(private loginservice:UserService,private activeroute:Router) { }
 
  ngOnInit(): void {
  }
login(){
  
  this.loginservice.login(this.user).subscribe(
    (res)=>{this.res=res
     this.loginservice.whologin( this.res)
     this.activeroute.navigateByUrl('/me/profile');
      
    }
  )
  
}
}

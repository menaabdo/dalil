import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
user?:any
  constructor(private httpclient: HttpClient) { }
  login(user:any){
    return this.httpclient.post( `${environment.apiURL}login?os=Android`,user)
  }
  whologin(user:any){
  this.user=user }
    getuser(){
      return this.user
    }
}

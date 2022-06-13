import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { CookieService } from 'ngx-cookie-service';



@Injectable({
  providedIn: 'root'
})
export class UserService {
user?:any
logininfo?:any

token= this.cookieService.get('token')
   headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
   })
  
  constructor(private httpclient: HttpClient,private cookieService: CookieService ) { }
  login(user:any){
   
    return this.httpclient.post(`${environment.apiURL}login?os=android`,user)
    // .subscribe(
    //   (res)=>{this.logininfo=res;this.token=this.logininfo.Response.access_token;console.log(this.token)})
  }
  whologin(user:any){
  this.user=user }
    getuser(){
      return this.user
    }
  profile(data:any){
    console.log(this.token)
    const headers =this.headers
    return this.httpclient.post( `${environment.apiURL}profile?os=android`,data,{headers})
  }  
  changepassword(data:any){
    return this.httpclient.post('http://dalilishop.smartstep-eg.com/api/profile/change_password',data)
  }
  register(user:User){
    return this.httpclient.post(`${environment.apiURL}register?os=android`,user)
  }
  update(data:any){
    const headers=this.headers
      return this.httpclient.post( `${environment.apiURL}profile/update?os=android`,data,{headers})
  
  }
  /////////////////////////////////Ads///////////
  Ads(){
    const headers =this.headers
    return this.httpclient.get(`${environment.apiURL}profile/products?os=android&page=1`,{headers})

  }
  ////////////////////////////////end/////////////////
  ///////////////////////followers/////////////////////
  follwers(){
    const headers =this.headers
    return this.httpclient.get(`${environment.apiURL}profile/followers?os=android`,{headers})
  }
  follow(id:number){
    const headers =this.headers
   return this.httpclient.post(`${environment.apiURL}user/follow?os=android`,{'follower_id':id},{headers})
  }
  //////////////////////endfollowers///////////////
  follwing(){
    const headers =this.headers
    return this.httpclient.get(`${environment.apiURL}profile/followings?os=android`,{headers})
   
  }
 showalladdress(){
    const headers =this.headers
    return this.httpclient.get(`${environment.apiURL}user/address?os=android`,{headers})
  }
  deleteaddress(id:number){
    const headers =this.headers
    return this.httpclient.post(`${environment.apiURL}user/delete_address?os=android`,{'address_id':id},{headers})
 
  }
  ///////////////////////myfavourite/////////////
  favourite(){
    const headers =this.headers
    return this.httpclient.get(`${environment.apiURL}profile/likes?os=android&page=1`,{headers})
  }
  //////////////////endfavourite////////////////
  ////////////////////////////myprofile///////////
  mystores(lang:string){
    const headers =this.headers
    return this.httpclient.get(`${environment.apiURL}user/stores?os=Android&lang=${lang}`,{headers})

  }
  /////////////////////////////////////////////
  myorders(is_complete:number){
    console.log(is_complete)
    const headers =this.headers
    return this.httpclient.post(`${environment.apiURL}user/orders?os=android`,{'is_complete':is_complete},{headers})
 

  }
  orderdetailes(id:number){
    const headers =this.headers
    return this.httpclient.post(`${environment.apiURL}user/order?os=android`,{'order_id':id},{headers})
 
  }
  myaccount(){
    const headers =this.headers
    return this.httpclient.post(`${environment.apiURL}profile/account?os=android`,{'country_id':1},{headers})
 
  }
  myoffers(){
    const headers =this.headers
    return this.httpclient.post(`${environment.apiURL}offers/like?os=android`,{'country_id':1},{headers})
 
  }
  mysales(){
    const headers =this.headers
    return this.httpclient.post(`${environment.apiURL}seller/orders?os=android`,{headers})
 
  }
  recently_view(){
    const headers =this.headers
    return this.httpclient.get(`${environment.apiURL}recently_view?os=android`,{headers})
 
  }
  store_profile(id:number){
     console.log(id)
    const headers =this.headers
    return this.httpclient.get(`${environment.apiURL}store?os=android&store_id=${id}&country_id=1&page=1`,{headers})
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';
import { Store } from '../models/store.model';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  token= this.cookieService.get('token')
  headers = new HttpHeaders({
     Authorization: `Bearer ${this.token}`,
  })
 
  constructor(private httpclient: HttpClient,private cookieService: CookieService) { }
 //////////getallcategorries/////////////////
  all(){
    return this.httpclient.get<{ cateories: Category }>(`${environment.apiURL}list_categories?os=android&country_id=1`)
  }
  //////////////////////end/////////////////
  ////////////////////////getallstories/////////
  stores():Observable<{stores:Store[]}>{
return this.httpclient.get<{stores:Store []}>(`${environment.apiURL}stores_categories?os=Android&lang=en&country_id=1`)
  }
  ////////////////////end//////////////////
}

import { Component, OnInit } from '@angular/core';
import { Store } from 'src/app/models/store.model';
import { UserService } from 'src/app/service/user.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent implements OnInit {
response!:any
stores!:Store[]
term=''

  constructor(private storessserve:UserService,private route:Router) { }

  ngOnInit(): void {
    console.log(this.term)
    this.storessserve.mystores('en').subscribe((res)=>{this.response=res;this.stores=this.response.Response})
  }
  showme(id:number){
    this.route.navigateByUrl('/home/me/store/'+id)

  }

}

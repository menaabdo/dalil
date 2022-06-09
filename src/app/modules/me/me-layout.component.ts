import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
enum UserTabs {
  Profile = "Profile",
  Ads = "Ads",
  Wallet = "Wallet",
  Settings = "Settings",
}
@Component({
  selector: 'app-me-layout',
  templateUrl: './me-layout.component.html',
  styleUrls: ['./me-layout.component.scss']
})
export class MeLayoutComponent implements OnInit {
  userTab: UserTabs = UserTabs.Profile;
  get UserTabs(): typeof UserTabs {
    return UserTabs;
  }
profile_data:any
  changeUserTab = (tab: UserTabs) => this.userTab = tab;

  constructor(private loginservice:UserService) { }

  ngOnInit(): void {
    this.loginservice.profile({country_id:1    
    }).subscribe((res)=>{
  this.profile_data=res
  })

}}

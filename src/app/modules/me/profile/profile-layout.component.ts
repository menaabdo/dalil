import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-profile-layout',
  templateUrl: './profile-layout.component.html',
  styleUrls: ['./profile-layout.component.scss']
})
export class ProfileLayoutComponent implements OnInit {
route!:any
  constructor(  private activeroute: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
   this.route= this.router.url
   console.log(this.route)
  }

}

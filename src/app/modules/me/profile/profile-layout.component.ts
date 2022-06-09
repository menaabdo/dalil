import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-profile-layout',
  templateUrl: './profile-layout.component.html',
  styleUrls: ['./profile-layout.component.scss']
})
export class ProfileLayoutComponent implements OnInit {
router!:any
  constructor(  private activeroute: ActivatedRoute,) { }

  ngOnInit(): void {
   this.router= this.activeroute.snapshot.routeConfig?.children
   console.log(this.router[0].path)
  }

}

import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})



export class OffersComponent implements OnInit {
  response!:any
  offers!:any
  constructor(private offersserve:UserService ) { }

  ngOnInit(): void {

  }

}

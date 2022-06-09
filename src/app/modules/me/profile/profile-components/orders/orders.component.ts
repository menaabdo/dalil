import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor(private ordersserve:UserService ) { }
response!:any
orders!:Order[]
  ngOnInit(): void {
    this.ordersserve.myorders().subscribe((res)=>{console.log(res);this.response=res;this.orders=this.response.Response.data})
  }

}

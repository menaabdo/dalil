import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { StoreLayoutComponent } from './store-layout.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    StoreLayoutComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    SharedModule
  ]
})
export class StoreModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdvertisingComponent } from './components/advertising/advertising.component';



@NgModule({
  declarations: [
    AdvertisingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AdvertisingComponent

  ]
})
export class SharedModule { }

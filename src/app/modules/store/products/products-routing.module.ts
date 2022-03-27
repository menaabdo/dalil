import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProductsComponent } from '../../me/profile/profile-components/edit-products/edit-products.component';
import { StoreProductActiveAdsComponent } from './components/store-product-active-ads/store-product-active-ads.component';
import { StoreProductExpiredAdsComponent } from './components/store-product-expired-ads/store-product-expired-ads.component';
import { StoreProductPassiveAdsComponent } from './components/store-product-passive-ads/store-product-passive-ads.component';
import { StoreProductLayoutComponent } from './store-product-layout.component';

const routes: Routes = [
  {
    path: "",
    component: StoreProductLayoutComponent,
    children:[
      {
        path: "active-ads",
        component: StoreProductActiveAdsComponent
      },
      {
        path: "passive-ads",
        component: StoreProductPassiveAdsComponent
      },
      {
        path: "expired-ads",
        component: StoreProductExpiredAdsComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }

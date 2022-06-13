import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProductsComponent } from '../../me/profile/profile-components/edit-products/edit-products.component';
import { BestSellerComponent } from './components/best-seller/best-seller.component';
import { RejectedSalesComponent } from './components/rejected-sales/rejected-sales.component';
import { StoreFollowersComponent } from './components/store-followers/store-followers.component';
import { StoreMySalesComponent } from './components/store-my-sales/store-my-sales.component';
import { StorePaidSalesComponent } from './components/store-paid-sales/store-paid-sales.component';
import { StoreProfileComponent } from './components/store-profile/store-profile.component';
import { StoreTotalViewsComponent } from './components/store-total-views/store-total-views.component';
import { TotalSalesComponent } from './components/total-sales/total-sales.component';
import { StoreDetailsLayoutComponent } from './store-details-layout.component';

const routes: Routes = [
  {
    path: "",
    component: StoreDetailsLayoutComponent,
    children: [
      {
        path: "store-profile/:id",
        component: StoreProfileComponent
      },
      {
        path: "paid-sales",
        component: StorePaidSalesComponent
      },
      {
        path: "rejected-sales",
        component: RejectedSalesComponent
      },
      {
        path: "total-sales",
        component: TotalSalesComponent
      },
      {
        path: "best-seller",
        component: BestSellerComponent
      },
      {
        path: "my-sales",
        component: StoreMySalesComponent
      },
      {
        path: "followers",
        component: StoreFollowersComponent
      },
      {
        path:"total-views",
        component: StoreTotalViewsComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SotreDetailsRoutingModule { }

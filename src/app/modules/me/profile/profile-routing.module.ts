import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreLayoutComponent } from '../../store/store-layout.component';
import { MeLayoutComponent } from '../me-layout.component';
import { AccountComponent } from './profile-components/account/account.component';
import { CategoriesComponent } from './profile-components/account/categories/categories.component';
import { AddressesComponent } from './profile-components/addresses/addresses.component';
import { EditOfferComponent } from './profile-components/edit-offer/edit-offer.component';
import { EditProductsComponent } from './profile-components/edit-products/edit-products.component';
import { EditStoreComponent } from './profile-components/edit-store/edit-store.component';
import { FavouritesComponent } from './profile-components/favourites/favourites.component';
import { FollowersComponent } from './profile-components/followers/followers.component';
import { FollowingComponent } from './profile-components/following/following.component';
import { MyProfileComponent } from './profile-components/my-profile/my-profile.component';
import { OffersComponent } from './profile-components/offers/offers.component';
import { OrdersComponent } from './profile-components/orders/orders.component';
import { PaidSalesComponent } from './profile-components/paid-sales/paid-sales.component';
import { RecentlyViewComponent } from './profile-components/recently-view/recently-view.component';
import { RejectedSalesComponent } from './profile-components/rejected-sales/rejected-sales.component';
import { SalesComponent } from './profile-components/sales/sales.component';
import { StoresComponent } from './profile-components/stores/stores.component';
import { ProfileLayoutComponent } from './profile-layout.component';
import { StoreModule } from '../../store/store.module';
import { OrderComponent } from '../../../order/order.component';
const routes: Routes = [
  {
    path: "",
    component: ProfileLayoutComponent,
    children: [
      {
        path: "my-profile",
        children: [
          {
            path: "",
            component: MyProfileComponent
          },
          {
            path: "edit-product",
            component: EditProductsComponent
          }
        ]
      },
      
      {
        path: "followers",
        component: FollowersComponent
      },
      {
        path: "following",
        component: FollowingComponent
      },
      {
        path: "favourites",
        component: FavouritesComponent
      },
      {
        path: "addresses",
        component: AddressesComponent
      },
      {
        path: "account",
        children: [
          {
            path: "",
            component: AccountComponent
          },
          {
            path: "categories",
            component: CategoriesComponent
          }
        ]
      },
      {
        path: "stores",

        children: [
          {
            path: "",
            component: StoresComponent,
          },
          {
            path: "edit-store",
            component: EditStoreComponent
          },
         
        ]

      },
      {
        path: "offers",
        children: [
          {
            path: "",
            component: OffersComponent,
          },
          {
            path:"edit-offer",
            component: EditOfferComponent
          }
        ]
      },
      {
        path: "orders",
        component: OrdersComponent
      },
      {
        path: "sales",
        component: SalesComponent
      },
      {
        path: "paid-sales",
        component: PaidSalesComponent
      },
      {
        path: "rejected-sales",
        component: RejectedSalesComponent
      },
      {
        path: "recently-view",
        component: RecentlyViewComponent
      }, {path:'order/:id',component:OrderComponent},
   
     
        ],
        
        
  },
  // {
  //   path:'store-profile/:id',component:StoreProfileComponent
  //   },
    // {path:'store-layout/:id',component:StoreLayoutComponent}
    {
      path: "store/:id",
      loadChildren: () => import("../../store/store.module").then(m => m.StoreModule)
    },
   

 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }

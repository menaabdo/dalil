import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterLayoutComponent } from './layout/master-layout/master-layout.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AllAdsComponent } from './modules/pages/all-ads/all-ads.component';

const routes: Routes = [
  {
    path: "",
    component: MasterLayoutComponent,
    children: [
      {
        path: "me",
        loadChildren: () => import('./modules/me/me.module').then(m => m.MeModule)
      },
      {
        path: "store",
        loadChildren: () => import('./modules/store/store.module').then(m => m.StoreModule)
      }
      ,
      {
        path: "all-ads",
        component: AllAdsComponent
      }
    ]
  },
  { path: 'login', component: LoginFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

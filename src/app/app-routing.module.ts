import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './common/components/login/login.component';

const routes: Routes = [
  {
    path : "home" , component : LoginComponent
  },
  {
    path : "user" , loadChildren:()=>import("./modules/user/user.module").then(m=>m.UserModule)
  },
  {
    path:"**" , redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: "", redirectTo: '/home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

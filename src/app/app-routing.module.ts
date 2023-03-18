import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './sahred/header/notfound/notfound.component';
import { AddproduitComponent } from './Core/manage Product/addproduit/addproduit.component';

const r: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'addProduct',component:AddproduitComponent},
  {path:'**',component:NotfoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(r)],

exports: [RouterModule]
})
export class AppRoutingModule { }

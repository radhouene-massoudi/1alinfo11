import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './sahred/header/notfound/notfound.component';
import { AddproduitComponent } from './Core/manage Product/addproduit/addproduit.component';
import { DetailproductComponent } from './Core/manage Product/detailproduct/detailproduct.component';
import { FetchProductsComponent } from './Core/manage Product/fetch-products/fetch-products.component';
import { RemoveproductComponent } from './Core/manage Product/removeproduct/removeproduct.component';
import { UpdateproduitComponent } from './Core/manage Product/updateproduit/updateproduit.component';


const r: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'remove/:id',component:RemoveproductComponent},
  {path:'detail/:id',component:DetailproductComponent},
  {path:'update/:id',component:UpdateproduitComponent},
  {path:'list',component:FetchProductsComponent},
  {path:'addProduct',component:AddproduitComponent},
  {path:'**',component:NotfoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(r)],

exports: [RouterModule]
})
export class AppRoutingModule { }

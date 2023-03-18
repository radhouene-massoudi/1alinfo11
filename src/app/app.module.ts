import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './sahred/test/test.component';
import { NavComponent } from './sahred/header/nav/nav.component';
import { FooterComponent } from './sahred/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './sahred/header/header.component';
import { NotfoundComponent } from './sahred/header/notfound/notfound.component';
import { AddproduitComponent } from './Core/manage Product/addproduit/addproduit.component';
import { UpdateproduitComponent } from './Core/manage Product/updateproduit/updateproduit.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NavComponent,
    FooterComponent,
    LoginComponent,
    HeaderComponent,
    NotfoundComponent,
    AddproduitComponent,
    UpdateproduitComponent
  ],
  imports: [
   BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

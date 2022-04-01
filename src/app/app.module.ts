import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './common/components/login/login.component';
import { FooterComponent } from './common/components/footer/footer.component';
import { HeaderComponent } from './common/components/header/header.component';
import { PrimeNgModule } from './common/modules/prime-ng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations :[
    AppComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports : [
    BrowserModule,
    CommonModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        PrimeNgModule,
        
        HttpClientModule
  ],
  providers : [],
  bootstrap:[AppComponent]
})

// @NgModule({
//   declarations: [
//     AppComponent,
//     LoginComponent,
//     FooterComponent,
//     HeaderComponent
//   ],
//   imports: [
//     BrowserModule
//     BrowserAnimationsModule,
//     AppRoutingModule,
//     PrimeNgModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
export class AppModule { }

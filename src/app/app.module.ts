import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.modul';
import { CommonModule } from '@angular/common';  
import { AppComponent } from './app.component';
import { DefaultComponent } from './share/default/default.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './app-secure/login/login.component';
import { InitComponent } from './app-secure/init/init.component';
import { SecureComponent } from './app-secure/secure/secure.component';
import { SendService } from './confi/send.service';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DefaultComponent,
    InitComponent,
    SecureComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  exports: [AppRoutingModule],
  providers: [
    Title,
    SendService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

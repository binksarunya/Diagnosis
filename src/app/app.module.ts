import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {MdInputModule} from '@angular/material';
import { MdFormFieldModule } from '@angular/material';
import { PatientComponent } from './patient/patient.component';
import { SharedComponent } from './shared/shared.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PatientComponent,
    SharedComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    MdFormFieldModule,
    AppRoutingModule
  ],
  
 
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }

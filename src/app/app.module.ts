import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { CreditComponent } from './credit/credit.component';
import { CapitalComponent } from './capital/capital.component';
import { DureeComponent } from './duree/duree.component';
import { AnnuiteComponent } from './annuite/annuite.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CreditComponent,
    CapitalComponent,
    DureeComponent,
    AnnuiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatButtonModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { KhoahocComponent} from './khoahoc/khoahoc.component';
import { ChitietkhoahocComponent } from './chitietkhoahoc/chitietkhoahoc.component';
import { DangkikhoahocComponent } from './dangkikhoahoc/dangkikhoahoc.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';

@NgModule({
   declarations: [
      AppComponent,
      KhoahocComponent,
      ChitietkhoahocComponent,
      DangkikhoahocComponent,
      LienheComponent,
   ],
   imports: [
      BrowserModule,
      CommonModule,
      AppRoutingModule,
      HttpClientModule,
      RecaptchaModule,  //this is the recaptcha main module
      RecaptchaFormsModule, //this is the module for form incase form validation
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

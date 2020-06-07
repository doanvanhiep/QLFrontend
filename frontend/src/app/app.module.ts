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
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ThanhtoanmomoComponent } from './thanhtoanmomo/thanhtoanmomo.component';
import { GiangvienComponent } from './giangvien/giangvien.component';
import { DatePipe } from '@angular/common';
@NgModule({
   declarations: [
      AppComponent,
      KhoahocComponent,
      ChitietkhoahocComponent,
      DangkikhoahocComponent,
      LienheComponent,
      ThanhtoanmomoComponent,
      GiangvienComponent
   ],
   imports: [
      BrowserModule,
      CommonModule,
      AppRoutingModule,
      HttpClientModule,
      RecaptchaModule,
      FormsModule,
      ReactiveFormsModule
      //thisistherecaptchamainmodule\\nRecaptchaFormsModule,
      //thisisthemoduleforformincaseformvalidation\\nFormsModule
   ],
   providers: [DatePipe],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

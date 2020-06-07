import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {KhoahocComponent} from './khoahoc/khoahoc.component';
import { CommonModule } from '@angular/common';
import { ChitietkhoahocComponent} from './chitietkhoahoc/chitietkhoahoc.component';
import { DangkikhoahocComponent} from './dangkikhoahoc/dangkikhoahoc.component';
import { LienheComponent} from './lienhe/lienhe.component';
import { from } from 'rxjs';
import { ThanhtoanmomoComponent } from './thanhtoanmomo/thanhtoanmomo.component';
import { GiangvienComponent } from './giangvien/giangvien.component';
const routes: Routes = [
  {path:'',redirectTo:'khoahoc',pathMatch:'full'},
  {path:'khoahoc',component: KhoahocComponent},
  {path:'chitietkhoahoc',component: ChitietkhoahocComponent},
  {path:'dangkikhoahoc',component: DangkikhoahocComponent},
  {path:'lienhe',component: LienheComponent},
  {path:'thanhtoanmomo',component: ThanhtoanmomoComponent},
  {path:'giangvien',component: GiangvienComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

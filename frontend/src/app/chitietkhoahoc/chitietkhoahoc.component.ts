import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LophocService } from '../../service/lophoc.service';
import { ComponentShareService } from '../../service/component-share.service';
import { KhoaHocServiceService } from '../../service/KhoaHocService.service';
import { ThongTinKhaiGiang } from '../models/ThongTinKhaiGiang';
import { LopHocPhan } from '../models/LopHocPhan';
@Component({
   selector: 'app-chitietkhoahoc',
   templateUrl: './chitietkhoahoc.component.html',
   styleUrls: ['./chitietkhoahoc.component.css']
})
export class ChitietkhoahocComponent implements OnInit {
   thongtinlophoc:any;
   lopHocPhan:LopHocPhan;
   thongTinKhaiGiang:ThongTinKhaiGiang;
   selectedThongTinLopHoc: any;
   constructor(
      private router: Router,
      private lophocservice: LophocService,
      private share: ComponentShareService,
      private khoahocservice: KhoaHocServiceService) { }
   ngOnInit() {
      if(!localStorage.getItem("idLopHocPhan"))
      {
         this.router.navigate(['khoahoc']);
         return;
      }
      this.getThongTinLopHoc();
      this.getDaTaLopHocPhan();
      if (this.lopHocPhan == null) {
         this.khoahocservice.getListLopHocPhanByID()
            .pipe()
            .subscribe(res => {
               this.lopHocPhan = res;
            });
      }
   }
   getDaTaLopHocPhan() {
      this.lopHocPhan = this.share.receiveDataLopHocPhan();
   }
   getThongTinLopHoc() {
      this.lophocservice.getThongTinLopHocByID()
         .pipe()
         .subscribe(res => {
            this.thongtinlophoc = res.result.data;
            return this.thongtinlophoc;
         });
   }
   dangki() {
      if (!this.selectedThongTinLopHoc) {
         alert("Vui lòng chọn thông tin lớp học!");
      }
      else {
         this.lopHocPhan.IDLopHoc=+this.selectedThongTinLopHoc;
         this.lopHocPhan.ThongTinLopHoc=(this.thongtinlophoc.find(item=>item.IDLopHoc===+this.selectedThongTinLopHoc).ThongTinLopHoc);
         this.lopHocPhan.ThongTinKhaiGiang=this.thongTinKhaiGiang;
         this.share.shareDataLopHoc(this.lopHocPhan);
         this.router.navigate(['/dangkikhoahoc']);
      }
   }
   changeIDLopHoc(IDLopHoc){
      this.lophocservice.getThongTinKhaiGiangByID(IDLopHoc)
      .pipe()
      .subscribe(res=>{
         this.thongTinKhaiGiang=res.result.data;
      })
   }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LophocService } from '../../service/lophoc.service';
import { ComponentShareService } from '../../service/component-share.service';
import { KhoaHocServiceService } from '../../service/KhoaHocService.service';

@Component({
   selector: 'app-chitietkhoahoc',
   templateUrl: './chitietkhoahoc.component.html',
   styleUrls: ['./chitietkhoahoc.component.css']
})
export class ChitietkhoahocComponent implements OnInit {
   idLopHocPhan: number;
   thongtinlophoc;
   LopHocPhan;
   selectedThongTinLopHoc: any;
   constructor(private route: ActivatedRoute,
      private lophocservice: LophocService,
      private share: ComponentShareService,
      private khoahocservice: KhoaHocServiceService) { }
   ngOnInit() {
      this.idLopHocPhan = this.route.snapshot.params.IDLopHocPhan;
      this.getThongTinLopHoc();
      this.getDaTaLopHocPhan();
      if (this.LopHocPhan == null) {
         this.khoahocservice.getListLopHocPhanByID(this.idLopHocPhan)
            .pipe()
            .subscribe(res => {
               this.LopHocPhan = res;
            });
      }
   }
   getDaTaLopHocPhan() {
      this.LopHocPhan = this.share.receiveDataLopHocPhan();
   }
   getThongTinLopHoc() {
      this.lophocservice.getThongTinLopHoc(this.idLopHocPhan)
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
         alert(this.selectedThongTinLopHoc); 
      }
   }

}

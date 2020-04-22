import { Component, OnInit } from '@angular/core';
import { KhoaHocServiceService} from '../../service/KhoaHocService.service'
import { LoaiKhoaHoc} from '../models/LoaiKhoaHoc';
@Component({
  selector: 'app-khoahoc',
  templateUrl: './khoahoc.component.html',
  styleUrls: ['./khoahoc.component.css']
})
export class KhoahocComponent implements OnInit {
  loaikhoahocs: LoaiKhoaHoc[];
  lophocphans;
  
  constructor(private khoahocService:KhoaHocServiceService) { }
  ngOnInit() {
    this.getListLoaiKhoaHoc();
    this.getListLopHocPhan();
  }
  getListLoaiKhoaHoc()
  {
    this.khoahocService.getListLoaiKhoaHoc()
    .pipe()
    .subscribe(res=>{
      this.loaikhoahocs=res.result.data;
      return this.loaikhoahocs;
    });
  }
  getListLopHocPhan()
  {
    this.khoahocService.getListLopHocPhan()
    .pipe()
    .subscribe(res=>{
      this.lophocphans=res.result.data;
      console.log(this.lophocphans);
      return this.lophocphans;
    });
  }

}

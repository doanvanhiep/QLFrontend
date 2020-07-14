import { Component, OnInit } from "@angular/core";
import { KhoaHocServiceService } from "../../service/KhoaHocService.service";
import { LoaiKhoaHoc } from "../models/LoaiKhoaHoc";
import { ComponentShareService } from "../../service/component-share.service";
@Component({
  selector: "app-khoahoc",
  templateUrl: "./khoahoc.component.html",
  styleUrls: ["./khoahoc.component.css"],
})
export class KhoahocComponent implements OnInit {
  urlLink: string = "1_AcqzDV4K1LO9VXRNrWubSxaIstzQJPL";

  loaikhoahocs: LoaiKhoaHoc[];
  lophocphans;
  lophocfillter;
  constructor(
    private khoahocService: KhoaHocServiceService,
    private share: ComponentShareService
  ) {}
  ngOnInit() {
    this.getListLoaiKhoaHoc();
    this.getListLopHocPhan();
  }
  sendData(event) {
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id.value;
    idAttr = +idAttr;
    this.share.shareDataLopHocPhan(
      idAttr,
      this.lophocphans.filter((item) => item.IDLopHocPhan === idAttr)
    );
  }

  getListLoaiKhoaHoc() {
    this.khoahocService
      .getListLoaiKhoaHoc()
      .pipe()
      .subscribe((res) => {
        this.loaikhoahocs = res.result.data;
        return this.loaikhoahocs;
        
      });
  }
  getListLopHocPhan() {
    this.khoahocService
      .getListLopHocPhan()
      .pipe()
      .subscribe((res) => {
        this.lophocphans = res.result.data;
        this.lophocfillter = res.result.data;
        
        return this.lophocphans;
      });
  }
  getIDKhoaHoc(event) {
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id.value;
    idAttr = +idAttr;
    if (idAttr === 0) {
      this.lophocphans = this.lophocfillter;
    } else {
      this.lophocphans = this.lophocfillter.filter(
        (item) => item.IDKhoaHoc === idAttr
      );
    }
  }
}

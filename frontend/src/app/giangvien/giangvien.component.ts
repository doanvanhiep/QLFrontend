import { Component, OnInit } from "@angular/core";
import { GiangvienService } from "../../service/giangvien.service";
@Component({
  selector: "app-giangvien",
  templateUrl: "./giangvien.component.html",
  styleUrls: ["./giangvien.component.css"],
})
export class GiangvienComponent implements OnInit {
  listGiangVien: any;
  arrayNumberOfRow: any;
  arrayOneRow: any;
  constructor(private giangvienService: GiangvienService) {}

  ngOnInit() {
    this.getListGiangVien();
  }
  getListGiangVien() {
    this.giangvienService
      .getListGiangVien()
      .pipe()
      .subscribe((res) => {
        this.listGiangVien = res.result.data;
        this.arrayNumberOfRow = Array.from(
          Array(Math.ceil(this.listGiangVien.length / 4)).keys()
        );
        this.arrayOneRow = Array.from(Array(4).keys());
        console.log(this.listGiangVien);
      });
  }
}

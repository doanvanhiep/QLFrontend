import { Component, OnInit } from "@angular/core";
import { VerifyRecaptchaService } from "../../service/VerifyRecaptcha.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LienheService } from "../../service/lienhe.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-lienhe",
  templateUrl: "./lienhe.component.html",
  styleUrls: ["./lienhe.component.css"],
})
export class LienheComponent implements OnInit {
  lienheForm: FormGroup;
  enabledSend: boolean = false;
  constructor(
    private router: Router,
    private lienheService: LienheService,
    private formBuilder: FormBuilder,
    private verifyRecaptcha: VerifyRecaptchaService
  ) {}

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.lienheForm = this.formBuilder.group({
      HoTen: "",
      Email: "",
      SoDienThoai: "",
      NoiDung: "",
    });
  }
  get f() {
    return this.lienheForm.controls;
  }
  //checkthongtin
  checkthongtin(HoTen, Email, SoDienThoai, NoiDung) {
    if (HoTen == "") {
      alert("Vui lòng nhập họ tên");
      return false;
    }
    if (Email == "") {
      alert("Vui lòng nhập Email");
      return false;
    }
    if (SoDienThoai == "") {
      alert("Vui lòng nhập số điện thoại");
      return false;
    }
    if (NoiDung == "") {
      alert("Vui lòng nhập nội dung");
      return false;
    }
    if (
      !Email.match(
        /[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9A-Z](?:[a-z0-9A-Z]*[a-z0-9A-Z])?\.)+[a-z0-9A-Z](?:[a-z0-9A-Z]*[a-z0-9A-Z])?/
      )
    ) {
      alert("Vui lòng nhập mail đúng định dạng");
      return false;
    }
    if (!SoDienThoai.match(/(0)+([0-9]{9})\b/g)) {
      alert("Vui lòng nhập số điện thoại đúng định dạng");
      return false;
    }
    return true;
  }
  SendLienHe() {
    if (
      !this.checkthongtin(
        this.f.HoTen.value,
        this.f.Email.value,
        this.f.SoDienThoai.value,
        this.f.NoiDung.value
      )
    ) {
      return;
    }
    this.lienheService
      .sendLienHe(
        this.f.HoTen.value,
        this.f.Email.value,
        this.f.SoDienThoai.value,
        this.f.NoiDung.value
      )
      .pipe()
      .subscribe((res) => {
        if (res.TrangThai.error) {
          alert(
            "Gửi thông tin yêu cầu liên hệ thất bại. Vui lòng kiểm tra lại hoặc liên lạc thông tin bên phải màn hình để được hỗ trợ"
          );
          return;
        }
        alert("Đã gửi thành công");
        this.router.navigate([""]);
      });
  }
  resolved(capchaResponse: string) {
    if (capchaResponse == null) {
      // console.log("Captcha unvalid");
      this.enabledSend = false;
      return;
    } else {
      this.verifyRecaptcha
        .verifyTokenRecaptcha(capchaResponse)
        .pipe()
        .subscribe(
          (data) => {
            this.enabledSend = true;
            //console.log(data);
          },
          (error) => {
            this.enabledSend = false;
            //console.log(error);
          }
        );
    }
  }
}

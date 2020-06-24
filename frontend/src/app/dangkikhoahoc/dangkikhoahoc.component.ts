import { Component, OnInit } from '@angular/core';
import { VerifyRecaptchaService } from '../../service/VerifyRecaptcha.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DangkikhoahocService } from '../../service/dangkikhoahoc.service';
import { Router } from '@angular/router';
import { ComponentShareService } from '../../service/component-share.service';
@Component({
    selector: 'app-dangkikhoahoc',
    templateUrl: './dangkikhoahoc.component.html',
    styleUrls: ['./dangkikhoahoc.component.css']
})
export class DangkikhoahocComponent implements OnInit {
    dangkiForm: FormGroup;
    LopHoc: any;
    enabledSend: boolean = false;
    constructor(
        private formBuilder: FormBuilder,
        private verifyRecaptcha: VerifyRecaptchaService,
        private dangkiKH: DangkikhoahocService,
        private router: Router,
        private share: ComponentShareService
    ) { }

    ngOnInit() {
        this.getDataLopHoc();
        this.dangkiForm = this.formBuilder.group({
            hoten: '',
            email: '',
            sdt: '',
            phuongthucthanhtoan: ''
        });
        if (!this.LopHoc.IDLopHoc) {
            this.router.navigate(['chitietkhoahoc']);
        }
    }
    getDataLopHoc() {
        this.LopHoc = this.share.receiveDataLopHoc();
    }
    resolved(capchaResponse: string) {
        if (capchaResponse == null) {
            // console.log("Captcha unvalid");
            this.enabledSend = false;
            return;
        }
        else {
            this.verifyRecaptcha.verifyTokenRecaptcha(capchaResponse)
                .pipe()
                .subscribe(data => {
                    this.enabledSend = true;
                    //console.log(data);
                },
                    error => {
                        this.enabledSend = false;
                        //console.log(error);
                    }
                );
        }
    }
    get f() { return this.dangkiForm.controls; }
    onSubmit() {
        if (!this.f.phuongthucthanhtoan.value) {
            alert("Hãy chọn phuong thức thanh toán");
            return;
        }
        this.dangkiKH.dangKiLopHoc(this.f.hoten.value, this.f.email.value, this.f.sdt.value, this.LopHoc.IDLopHoc,
            this.f.phuongthucthanhtoan.value, this.LopHoc.HocPhi)
            .pipe()
            .subscribe(res => {
                if (res.error == true || this.f.phuongthucthanhtoan.value == "trungtam") {
                    this.router.navigate([res.url], {
                        queryParams: { message: res.queryParams }
                    });
                }
                else {
                    window.location.href = res.url;
                }

            });
    }
}

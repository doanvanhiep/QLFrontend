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
    LopHoc:any;
    constructor(
        private formBuilder: FormBuilder,
        private verifyRecaptcha: VerifyRecaptchaService,
        private dangkiKH:DangkikhoahocService,
        private router:Router,
        private share: ComponentShareService
    ) { }

    ngOnInit() {
        this.getDataLopHoc();
        this.dangkiForm = this.formBuilder.group({
            hoten: '',
            email: '',
            sdt:'',
            phuongthucthanhtoan:''
        });
        if(!this.LopHoc.IDLopHoc)
        {
            this.router.navigate(['chitietkhoahoc']);
        }
    }
    getDataLopHoc(){
        this.LopHoc=this.share.receiveDataLopHoc();
    }
    resolved(capchaResponse: string) {
        if (capchaResponse == null ) {
            console.log("Captcha unvalid");
            return;
        }
        else {
            this.verifyRecaptcha.verifyTokenRecaptcha(capchaResponse)
            .pipe()
            .subscribe(data => {
                console.log(data);
            },
            error => {
                console.log(error);
            });
        }
    }
    get f() { return this.dangkiForm.controls; }
    onSubmit() {
        if(!this.f.phuongthucthanhtoan.value)
        {
            alert("Hãy chọn phuong thức thanh toán");
            return;
        }
        alert(this.f.phuongthucthanhtoan.value);
        // this.dangkiKH.sendMoMo(this.f.hoten.value, this.f.email.value, this.f.sdt.value,1,"123000")
        // .pipe()
        // .subscribe(res=>{
        //     window.location.href=res.url;
        // });
    }
}

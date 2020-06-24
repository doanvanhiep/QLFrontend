import { Component, OnInit } from '@angular/core';
import { VerifyRecaptchaService } from '../../service/VerifyRecaptcha.service';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { LienheService } from '../../service/lienhe.service';
@Component({
    selector: 'app-lienhe',
    templateUrl: './lienhe.component.html',
    styleUrls: ['./lienhe.component.css']
})
export class LienheComponent implements OnInit {
    lienheForm: FormGroup;
    enabledSend: boolean = false;
    constructor(
        private lienheService: LienheService,
        private formBuilder: FormBuilder,
        private verifyRecaptcha: VerifyRecaptchaService
    ) { }

    ngOnInit() {
        this.createForm();
    }
    createForm() {
        this.lienheForm = this.formBuilder.group({
            HoTen: "Hiệp",
            Email: "doanvanhiepebn951@gmail.com",
            SoDienThoai: "0389435454",
            NoiDung: "Cần hỗ trợ"
        });
    }
    get f() { return this.lienheForm.controls; }

    SendLienHe() {
        this.lienheService.sendLienHe(this.f.HoTen.value, this.f.Email.value, this.f.SoDienThoai.value, this.f.NoiDung.value)
        .pipe()
        .subscribe(res=>{
            console.log(res);
        })
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
}

import { Component, OnInit } from '@angular/core';
import { VerifyRecaptchaService } from '../../service/VerifyRecaptcha.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DangkikhoahocService } from '../../service/dangkikhoahoc.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-dangkikhoahoc',
    templateUrl: './dangkikhoahoc.component.html',
    styleUrls: ['./dangkikhoahoc.component.css']
})
export class DangkikhoahocComponent implements OnInit {
    dangkiForm: FormGroup;
    constructor(
        private formBuilder: FormBuilder,
        private verifyRecaptcha: VerifyRecaptchaService,
        private dangkiKH:DangkikhoahocService,
        private router:Router
    ) { }

    ngOnInit() {
        this.dangkiForm = this.formBuilder.group({
            hoten: '',
            email: '',
            sdt:''
        });
    }
    resolved(capchaResponse: string) {
        if (capchaResponse == null) {
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
        this.dangkiKH.sendMoMo(this.f.hoten.value, this.f.email.value, this.f.sdt.value,"123000")
        .pipe()
        .subscribe(res=>{
            this.router.navigate(['/redirectmomo', { externalUrl: res.url }]);
        });
    }
}

import { Component, OnInit } from '@angular/core';
import { VerifyRecaptchaService } from '../../service/VerifyRecaptcha.service';

@Component({
    selector: 'app-dangkikhoahoc',
    templateUrl: './dangkikhoahoc.component.html',
    styleUrls: ['./dangkikhoahoc.component.css']
})
export class DangkikhoahocComponent implements OnInit {
    constructor(
        private verifyRecaptcha: VerifyRecaptchaService
    ) { }

    ngOnInit() {
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
}

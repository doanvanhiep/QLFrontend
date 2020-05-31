import { Component, OnInit } from "@angular/core";
import { VerifyRecaptchaService } from "../../service/VerifyRecaptcha.service";
import { CustomValidators } from "../custom-validators";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-lienhe",
  templateUrl: "./lienhe.component.html",
  styleUrls: ["./lienhe.component.css"],
})
export class LienheComponent implements OnInit {
  public frmContact: FormGroup;
  constructor(
    private verifyRecaptcha: VerifyRecaptchaService,
    private fb: FormBuilder
  ) {
    this.frmContact = this.createContactForm();
  }

  ngOnInit() {}
  resolved(capchaResponse: string) {
    if (capchaResponse == null) {
      console.log("Captcha unvalid");
      return;
    } else {
      this.verifyRecaptcha
        .verifyTokenRecaptcha(capchaResponse)
        .pipe()
        .subscribe(
          (data) => {
            console.log(data);
          },
          (error) => {
            console.log(error);
          }
        );
    }
  }
  createContactForm(): FormGroup {
    return this.fb.group({
      name: [
        "",
        Validators.compose([
          Validators.required,
          CustomValidators.patternValidator(
            /[^0-9]+[^!@#$%^&*():;{}}{|/+=_><.,-\\]/,
            {
              isName: true,
            }
          ),
        ]),
      ],
      email: [
        "",
        Validators.compose([
          Validators.required,
          CustomValidators.patternValidator(
            /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/,
            {
              isEmail: true,
            }
          ),
        ]),
      ],
      phone: [
        "",
        Validators.compose([
          Validators.required,
          CustomValidators.patternValidator(/^[0a-zA-Z].{9}$/g, {
            isPhoneNumber: true,
          }),
        ]),
      ],
      content: ["", Validators.required],
    });
  }

  Submit() {
    // do signup or something
    console.log(this.frmContact.value);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { map } from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
})
export class VerifyRecaptchaService {

    constructor(private http: HttpClient) { }
    verifyTokenRecaptcha(response) {
        var secret=environment.secretkeyCaptcha;
        return this.http.post<any>(`${environment.apiVerifyCaptcha}`,{secret,response})
        .pipe(map(res=>{
            return res;
        }));
    }
}

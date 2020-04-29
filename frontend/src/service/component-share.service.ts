import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ComponentShareService {
    private dataLopHocPhan : Subject<any>=new Subject();
    constructor() { }
    public shareDataLopHocPhan(dataLopHocPhan)
    {
        this.dataLopHocPhan=dataLopHocPhan;
    }
    public receiveDataLopHocPhan() {
        return this.dataLopHocPhan[0];
    }
}

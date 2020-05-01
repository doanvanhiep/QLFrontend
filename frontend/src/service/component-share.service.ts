import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ComponentShareService {
    private dataLopHocPhan : Subject<any>=new Subject();
    private dataLopHoc : Subject<any>=new Subject();
    constructor() { }
    public shareDataLopHocPhan(idLopHocPhan,dataLopHocPhan)
    {
        localStorage.setItem('idLopHocPhan', idLopHocPhan);
        this.dataLopHocPhan=dataLopHocPhan;

    }
    public receiveDataLopHocPhan() {
        return this.dataLopHocPhan[0];
    }
    public shareDataLopHoc(dataLopHoc)
    {
        this.dataLopHoc=dataLopHoc;
    }
    public receiveDataLopHoc() {
        return this.dataLopHoc;
    }
}

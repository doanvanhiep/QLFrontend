import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LophocService {

  constructor(
    private http: HttpClient
  ) { }
  getThongTinLopHocByID()
  {
    let IDLopHocPhan=localStorage.getItem('idLopHocPhan');
    return this.http.get<any>(`${environment.apiUrl}cahocbuoihocbylophocphan/${IDLopHocPhan}`)
    .pipe(map(res=>{
        return res;
    }));
  }
  getThongTinKhaiGiangByID(IDLopHoc)
  {
    return this.http.get<any>(`${environment.apiUrl}getngaykhaigianglophoc/${IDLopHoc}`)
    .pipe(map(res=>{
        return res;
    }));
  }
}

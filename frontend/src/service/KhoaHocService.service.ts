import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
}) 
export class KhoaHocServiceService {

constructor(private http: HttpClient) { }
    getListLoaiKhoaHoc()
    {
      return this.http.get<any>(`${environment.apiUrl}khoahoc`)
      .pipe(map(res=>{
          return res;
      }));
    }
    getListLopHocPhan()
    {
      return this.http.get<any>(`${environment.apiUrl}lophocphan`)
      .pipe(map(res=>{
          return res;
      }));
    }
    
    getListLopHocPhanByID()
    {
      var IDLopHocPhan=localStorage.getItem('idLopHocPhan');
      return this.http.get<any>(`${environment.apiUrl}lophocphan/${IDLopHocPhan}`)
      .pipe(map(res=>{
          return res.result.data[0];
      }));
    }
}

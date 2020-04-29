import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DangkikhoahocService {

  constructor(private http: HttpClient) { }
  sendMoMo( HoTen, Email, SoDienThoai,SoTien)
  {
    return this.http.post<any>(`${environment.apiUrl}sendmomo`,{ HoTen, SoDienThoai, Email,SoTien})
    .pipe(map(res=>{
        return res;
    }));
  }

}

import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LienheService {

  constructor(private http: HttpClient) { }
  sendLienHe(HoTen,Email,SoDienThoai,NoiDung) {
    return this.http.post<any>(`${environment.apiUrl}lienhe`,{HoTen,Email,SoDienThoai,NoiDung})
      .pipe(map(res => {
        return res;
      }));
  }
}

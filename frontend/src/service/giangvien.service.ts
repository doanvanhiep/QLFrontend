import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GiangvienService {

  constructor(private http: HttpClient) { }
  getListGiangVien() {
      return this.http.get<any>(`${environment.apiUrl}giangvien`)
          .pipe(map(res => {
              return res;
          }));
  }

}

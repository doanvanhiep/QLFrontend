import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class DangkikhoahocService {

    constructor(private http: HttpClient) { }
    dangKiLopHoc(TenHocVien, Email, SoDienThoai, IDLopHoc,HinhThucThanhToan,SoTien) {
        return this.http.post<any>(`${environment.apiUrl}dangkilophoc`, { TenHocVien, Email, SoDienThoai, IDLopHoc,HinhThucThanhToan,SoTien })
            .pipe(map(res => {
                return res;
            }));
    }

}

export class ThongTinKhaiGiang
{
    private static DEFAULT_NAME = "";

    public NgayKhaiGiang: string;
    public NgayBeGiang: string
    constructor() {
        this.NgayKhaiGiang = ThongTinKhaiGiang.DEFAULT_NAME;
        this.NgayBeGiang = ThongTinKhaiGiang.DEFAULT_NAME;
    }
}
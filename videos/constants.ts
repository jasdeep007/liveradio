export class constants {
    static alldata: any = null;
    static setdata(data: any) {
        this.alldata = data;
    }
    static getdata() {
        return this.alldata;
    }
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentServiceService {

  // url:string='http://localhost:64324/';
  url: string = 'http://gaiahosting.outtm.com/';
  constructor(private http: HttpClient) { }

  makePayment(data: any) {
    return this.http.post(this.url + 'api/qqqbbbabasnjkfggfkbjvbfdgbwerbjkbdsf/makepayment', data)
  }
  createsessionid(data: any) {
    return this.http.post(this.url + 'api/qqqbbbabasnjkfggfkbjvbfdgbwerbjkbdsf/createsessinid', data)
  }
  checkstatus(data: any) {
    return this.http.post(this.url + 'api/qqqbbbabasnjkfggfkbjvbfdgbwerbjkbdsf/checkstatus', data)
  }
}

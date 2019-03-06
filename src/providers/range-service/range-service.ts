import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RangeServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RangeServiceProvider {

  url: string = 'http://dummy-alana.com/post_link';              //fake link
  postData: any = {};
  requestOptions: any = {
    'Content-Type': 'application/x-www-form-urlencoded'
  };

  constructor(public http: HttpClient) {
    console.log('Hello RangeServiceProvider Provider');
  }

  getRangesService(): any {
    return this.http.post(this.url, this.postData, this.requestOptions);
  };

}

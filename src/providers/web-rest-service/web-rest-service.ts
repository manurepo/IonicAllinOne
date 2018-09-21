import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the WebRestServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WebRestServiceProvider {

  apiUrl = 'https://jsonplaceholder.typicode.com';
  constructor(public https: HttpClient) {
    console.log('Hello WebRestServiceProvider Provider');
    
  }
  getUsers() {
    return new Promise(resolve => {
      this.https.get(this.apiUrl+'/users').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  // sample post method 
  addUser(data) {
    return new Promise((resolve, reject) => {
      this.https.post(this.apiUrl+'/users', JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }


  
}

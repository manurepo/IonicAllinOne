import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { WebRestServiceProvider } from '../../providers/web-rest-service/web-rest-service';


/**
 * Generated class for the UserlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-userlist',
  templateUrl: 'userlist.html',
})
export class UserlistPage {
  users: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public hitServer: WebRestServiceProvider) {
    this.getUsers();
  }

  getUsers() {
    this.hitServer.getUsers()
      .then(data => {
        this.users = data;
        console.log("user list", this.users);
      });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad UserlistPage');
  }

}

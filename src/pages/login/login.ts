import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../../pages/home/home';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from 'ionic-angular';


declare const window: any;

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  account: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, formBuilder: FormBuilder) {

    this.account = formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  doLogin() {
    this.navCtrl.setRoot(HomePage, {
      param1: 'loginPageilNinnu'
    })
  }
}


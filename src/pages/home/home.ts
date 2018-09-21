import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  restaurant: string;
  constructor(public navCtrl: NavController,private navParams: NavParams) {

    this.restaurant = navParams.get('param1'); 
    console.log("this.restaurant",this.restaurant)

  }

}

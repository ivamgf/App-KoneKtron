import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DashPage } from '../dash/dash';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  login() {
    this.navCtrl.setRoot(DashPage);
  }
  register() {
    this.navCtrl.push(RegisterPage);
  }

}

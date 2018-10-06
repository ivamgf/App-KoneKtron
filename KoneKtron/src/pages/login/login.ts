import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DashPage } from '../dash/dash';
import { RegisterPage } from '../register/register';
import { RecoveryPage } from '../recovery/recovery';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login() {
    this.navCtrl.setRoot(DashPage);
  }
  register() {
    this.navCtrl.push(RegisterPage);
  }
  recovery() {
    this.navCtrl.push(RecoveryPage);
  }

}

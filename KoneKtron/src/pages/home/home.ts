import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  } 
  register() {
    this.navCtrl.push(RegisterPage);
  }
  redirect_login() {
    this.navCtrl.setRoot(LoginPage);
  } 

}

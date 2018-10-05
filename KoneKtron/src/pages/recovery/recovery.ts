import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the RecoveryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recovery',
  templateUrl: 'recovery.html',
})
export class RecoveryPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl: LoadingController
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecoveryPage');
  }
  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Enviando a senha...",
      duration: 3000
    });
    loader.present();    
  }
  recoveryPass() {
    this.presentLoading();
    this.navCtrl.setRoot(HomePage);
  }

}

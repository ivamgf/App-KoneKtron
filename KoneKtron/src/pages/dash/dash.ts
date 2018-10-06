import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';
import { MyRequestsPage } from '../my-requests/my-requests';
import { ShowcasePage } from '../showcase/showcase';

/**
 * Generated class for the DashPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dash',
  templateUrl: 'dash.html',
})
export class DashPage {
  rootPage:any = ShowcasePage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashPage');
  }
  profile() {
    this.navCtrl.push(ProfilePage);
  }
  myRequests() {
    this.navCtrl.push(MyRequestsPage);
  }
  logout() {
    this.navCtrl.setRoot(HomePage);
  }

}

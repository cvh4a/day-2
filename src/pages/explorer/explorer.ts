import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { PARAMETERS } from '@angular/core/src/util/decorators';
import { CharitiesPage } from '../charities/charities';

@Component({
  selector: 'page-explorer',
  templateUrl: 'explorer.html'
})
export class ExplorerPage {

  username: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.username=this.navParams.get('username');
  }
  navigateToHomePage() {
    this.navCtrl.push(HomePage);
  }
  navigateToCharitiesPage() {
    this.navCtrl.push(CharitiesPage);
  }
}

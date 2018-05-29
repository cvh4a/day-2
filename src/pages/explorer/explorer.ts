import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'explorer.html'
})
export class ExplorerPage {

  constructor(public navCtrl: NavController) {
  }
  navigateToHomePage() {
    this.navCtrl.push(HomePage);
  }
}

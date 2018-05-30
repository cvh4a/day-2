import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ExplorerPage } from '../explorer/explorer'; 

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  username: string;

  constructor(public navCtrl: NavController) {

  }

  navigateToExplorer() {
    this.navCtrl.push(ExplorerPage, {username: this.username});
  }

}

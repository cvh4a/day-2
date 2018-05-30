import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-specifications',
    templateUrl: 'specifications.html'
})
export class SpecificationsPage {

    name: string;
    item: object;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.name=this.navParams.get('Selected Item');
    }
    }
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegistrationPage } from '../registration/registration';
import { SpecificationsPage } from '../specifications/specifications';

@Component({
    selector: 'page-charities',
    templateUrl: 'charities.html'
})
export class CharitiesPage {

    constructor(public navCtrl: NavController) {
    }
    items = [
        { name: "Make A Wish", decription: "blah blah blah" },
        { name: "Reach Out and Read", description: "blah blah blah" },
        { name: "Service for Sight", description: "blah blah blah" },
        { name: "Veterans United", description: "blah blah blah" }
    ];
    itemSelected(item: object) {
        console.log("Selected Item", item);
        this.navCtrl.push(SpecificationsPage, {
            item: item
        });
    }

    navigateToSpecifications() {
        this.navCtrl.push(SpecificationsPage, {name: items.name});
      }
}

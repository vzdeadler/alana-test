import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SquaresDivisorsPage } from '../squares-divisors/squares-divisors';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() { }

  join(){
    this.navCtrl.push(SquaresDivisorsPage);
  }

}

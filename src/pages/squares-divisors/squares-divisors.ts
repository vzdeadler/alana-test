import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the SquaresDivisorsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-squares-divisors',
  templateUrl: 'squares-divisors.html',
})
export class SquaresDivisorsPage {

  values: any[];
  minimum: number;
  maximum: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.values = [];
  }

  goHome(): void {
    this.navCtrl.push(HomePage);
  }

  validateRanges(): void {
    if (!this.minimum || !this.maximum){
      console.log('err');
    } else if ((this.minimum < 0) || (this.maximum < 0)){
      console.log('err');
    } else if (this.minimum > this.maximum){
      console.log('err');
    } else {
      this.generateValues();
    }
  }

  getSquaresDivisors(n: number): number {
    let squaresDivisors: number = 0;
    for (let i = 1; i <= n; i ++){
      if ((n % i) == 0){
        squaresDivisors += (i*i);
      }
    }
    console.log(squaresDivisors);
    return squaresDivisors;
  };

  generateValues(): void {
    let diference = this.maximum - this.minimum;
    console.log(diference);

    for(let i = this.minimum; i <= this.maximum; i ++)
      this.values[i] = this.getSquaresDivisors(i);

    console.log(this.values);
  }

}

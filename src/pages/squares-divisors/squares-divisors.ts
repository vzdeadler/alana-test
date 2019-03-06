import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ToastController } from 'ionic-angular';
import { RangeServiceProvider } from '../../providers/range-service/range-service';

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

  resultsView: boolean;
  values: any[];
  minimum: number;
  maximum: number;
  validRange: boolean;
  option: number;
  value: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private toastCtrl: ToastController,
    private rangeServiceProvider: RangeServiceProvider) {
  }

  ionViewDidLoad() {
    this.values = [];
    this.validRange = false;
    this.resultsView = false;
    this.option = undefined;
    this.minimum = undefined;
    this.maximum = undefined;
    this.value = undefined;
  }

  //Actions for back button.
  back(): void {
    if(this.resultsView){
      this.resultsView = false;
      this.ionViewDidLoad();
    } else 
      this.navCtrl.push(HomePage);
  }

  //Toast for error messages.
  presentToast(msg) {
    const toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: "top",
      cssClass: 'toastClass'
    });
    toast.present();
  }

  //This function validate the range inputs, then call generateValues()
  validateRanges(): void {
    if (!this.minimum || !this.maximum){
      this.presentToast('You must insert both ranges.');
    } else if ((this.minimum < 0) || (this.maximum < 0)){
      this.presentToast('The ranges must be positive.');
    } else if (this.minimum > this.maximum){
      this.presentToast('The minimum range can not be higher than maximum.');
    } else {
      this.generateValues();
      this.validRange = true;
    }
  }

  //This is the core function, it gets the squares divisors of n.
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

  //This function generate all the values, calling getSquaresDivisors.
  generateValues(): void {
    let diference = this.maximum - this.minimum;
    console.log(diference);

    for(let i = this.minimum; i <= this.maximum; i ++)
      this.values[i] = this.getSquaresDivisors(i);

    this.resultsView = true;
    console.log(this.values);
  }

  //This function print the final value.
  printValue(): void {
    this.value = undefined;
    if(!this.option){
      this.presentToast('You must insert the value.');
    }else if((this.option < this.minimum) || (this.option > this.maximum)){
      this.presentToast('The value must be between the range.');
    }else{
      this.value = 'The value of ' + this.option + ' is ' + this.values[this.option];
    }
  }

  //This function connects to a fake API to get the data.
  getRanges(): void {
    this.rangeServiceProvider.getRangesService()
      .subscribe( (data) => {
        console.log('Success on POST ', data);
        //Set the ranges into the local variables.
        this.minimum = data.minimum;
        this.maximum = data.maximum;
        //Check the ranges and moving forward.
        this.validateRanges();
    });
  }

}

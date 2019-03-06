import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SquaresDivisorsPage } from './squares-divisors';

@NgModule({
  declarations: [
    SquaresDivisorsPage,
  ],
  imports: [
    IonicPageModule.forChild(SquaresDivisorsPage)
  ],
})
export class SquaresDivisorsPageModule {}

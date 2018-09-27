import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocatemePage } from './locateme';

@NgModule({
  declarations: [
    LocatemePage,
  ],
  imports: [
    IonicPageModule.forChild(LocatemePage),
  ],
})
export class LocatemePageModule {}

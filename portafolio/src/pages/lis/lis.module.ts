import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LisPage } from './lis';

@NgModule({
  declarations: [
    LisPage,
  ],
  imports: [
    IonicPageModule.forChild(LisPage),
  ],
  exports: [
    LisPage
  ]
})
export class LisPageModule {}

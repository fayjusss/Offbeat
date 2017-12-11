import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MockupGamePage } from './mockup-game';

@NgModule({
  declarations: [
    MockupGamePage,
  ],
  imports: [
    IonicPageModule.forChild(MockupGamePage),
  ],
})
export class MockupGamePageModule {}

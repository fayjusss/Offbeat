import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MultiplayerOpponentPage } from './multiplayer-opponent';

@NgModule({
  declarations: [
    MultiplayerOpponentPage,
  ],
  imports: [
    IonicPageModule.forChild(MultiplayerOpponentPage),
  ],
})
export class MultiplayerOpponentPageModule {}

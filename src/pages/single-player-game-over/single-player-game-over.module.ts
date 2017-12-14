import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SinglePlayerGameOverPage } from './single-player-game-over';

@NgModule({
  declarations: [
    SinglePlayerGameOverPage,
  ],
  imports: [
    IonicPageModule.forChild(SinglePlayerGameOverPage),
  ],
})
export class SinglePlayerGameOverPageModule {}

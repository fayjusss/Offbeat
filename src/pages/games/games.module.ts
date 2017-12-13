import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GamesPage } from './games';
import { SettingsPage } from './settings';

@NgModule({
  declarations: [
    GamesPage,
    SettingsPage
  ],
  imports: [
    IonicPageModule.forChild(GamesPage),
  ],
})
export class GamesPageModule {}

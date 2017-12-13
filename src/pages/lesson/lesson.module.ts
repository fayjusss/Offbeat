import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LessonPage } from './lesson';
import { SettingsPage } from './settings';

@NgModule({
  declarations: [
    LessonPage,
    SettingsPage
  ],
  imports: [
    IonicPageModule.forChild(LessonPage),
  ],
})
export class LessonPageModule {}

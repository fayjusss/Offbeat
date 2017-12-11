import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LessonPage } from '../lesson/lesson';



@Component({
  selector: 'page-learn',
  templateUrl: 'learn.html'
})
export class LearnPage {
  items: any[];
  lessonPage = LessonPage;

  constructor(public navCtrl: NavController) {

  }
}

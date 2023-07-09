import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Clipboard } from '@angular/cdk/clipboard';

import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'youtubeDateDisplay';
  date: FormControl = new FormControl(new Date());
  scheduleDate: Date = new Date();
  videoName: string;
  videoPart: number = 0;

  videoNameReplace: string;
  toReplaceText: string;
  resultReplaceText: string;
  textReplaced: string;

  constructor(private clipboard: Clipboard) {}

  modifyDate(day: number) {
    /*this.sheduleDate.setDate(this.sheduleDate.getDate() + day);
    console.log("day", this.sheduleDate.getDate())*/
    this.date.setValue(new Date(
      this.date.value.getFullYear(),
      this.date.value.getMonth(),
      this.date.value.getDate() + day
    ));

    setTimeout(() => {
      let copy: string = document.getElementById('dateString')?.innerHTML;
      copy = copy.replace("Sep", "Sept");
      console.log("copy", copy);
      this.clipboard.copy(copy);
    });
  }

  modifyCounter(counter: number) {
    this.videoPart = this.videoPart + counter;
    console.log("videoPart", this.videoPart);
    this.clipboard.copy(`${this.videoName} ${this.videoPart}`);
  }

  replaceNameText() {
    this.textReplaced = this.videoNameReplace.replace(this.toReplaceText, this.resultReplaceText);
    this.clipboard.copy(`${this.textReplaced}`);
  }
}

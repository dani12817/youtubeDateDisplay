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
  sheduleDate: Date = new Date();

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
}

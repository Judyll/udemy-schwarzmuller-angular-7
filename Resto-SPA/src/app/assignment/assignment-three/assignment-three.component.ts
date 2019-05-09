import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-three',
  templateUrl: './assignment-three.component.html',
  styleUrls: ['./assignment-three.component.css']
})
export class AssignmentThreeComponent implements OnInit {

  showParagraph = false;
  logs = [];

  constructor(private datePipe: DatePipe) { }

  ngOnInit() {
  }

  onDisplayDetails() {
    this.showParagraph = !this.showParagraph;

    if (this.showParagraph) {
      this.logs.push(this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss'));
    }
  }

}

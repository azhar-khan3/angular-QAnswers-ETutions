import { Component } from '@angular/core';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent {
  data: any;
  constructor() {
    this.getData();
  }

  getData() {
    let data = JSON.parse(localStorage.getItem("mainData")!);
    this.data = data;
  }
}

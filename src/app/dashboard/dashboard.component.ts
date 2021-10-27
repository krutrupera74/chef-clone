import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  showSpinner = false;

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  showHide(value) {
    if (value) {
      this.showSpinner = true;
    } else {
      this.showSpinner = false;
    }
  }

}

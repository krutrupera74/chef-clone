import { AfterViewInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  title = 'test';

  constructor(private observer: BreakpointObserver, private cdr: ChangeDetectorRef) {

  }
  // tslint:disable-next-line: typedef
  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
    this.cdr.detectChanges();
  }

  // tslint:disable-next-line: typedef
  toggleSideNav() {
    if (this.sidenav.mode === 'over') {
      this.sidenav.close();
    }
  }
}

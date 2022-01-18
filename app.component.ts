import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isnavbarvisible: boolean = false;
  title = 'bestcourses.outtm.com';
  showloader: boolean = true;
  ngOnInit() {
    setTimeout(() => {
      this.showloader = false;
    }, 200);
  }
  shownavbar() {
    this.isnavbarvisible = !this.isnavbarvisible;
  }
  hidenavbar() {
    this.isnavbarvisible = false;
  }
}

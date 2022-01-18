import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { constants } from './constants';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }
  selectedOption: { id: number, name: string } = { id: 0, name: "" };
  data: any;
  subtopicsmaster: any[] = [];
  showloader: boolean = false;
  ngOnInit(): void {
    if (constants.getdata() == undefined || constants.getdata() == null) {
      this.callvideos();
    }
    else {
      debugger;
      this.data = constants.getdata();
      this.setdata(false);
    }
  }
  getValue(optionid: number) {
    setTimeout(() => {
      this.showloader = true;
      this.selectedOption = { id: 0, name: "" };
    }, 10);
    setTimeout(() => {
      this.selectedOption = this.data.topics.filter((item: any) => item.id == optionid)[0];
      this.showloader = false;
    }, 500);
  }
  callvideos() {
    this.showloader = true;
    this.http.get('http://fullstackapi.outtm.com/api/fullstacklearning/gettopics').subscribe(
      (result: any) => {
        this.data = result;
        constants.setdata(result);
        // this.data.topics.reverse().push({ id: "-1", name: "All" });
        // this.data.topics.reverse();
        this.setdata();
      }
    )

  }
  setdata(issanitizationRequired: boolean = true) {
    debugger;
    let subtopics: any[] = [];
    this.data.subtopics.forEach((element: any) => {
      if (issanitizationRequired) {
        element.link = element.link.replace('/watch', '/embed/watch');
        element.link = this.sanitizer.bypassSecurityTrustResourceUrl(element.link);
      }
      subtopics.push(element);
    });
    this.data.subtopics = subtopics;
    this.subtopicsmaster = subtopics;
    this.showloader = false;
  }
}

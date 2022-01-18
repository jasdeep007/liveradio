import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'youtubepopup',
  templateUrl: './youtubepopup.component.html',
  styleUrls: ['./youtubepopup.component.css']
})
export class YoutubepopupComponent implements OnInit, OnDestroy {


  @Input('isleft') isleft: any = "0";

  constructor(private dom: DomSanitizer) { }
  ishown: boolean = true;
  isbuttonclick: boolean = true;
  interval: any;
  src: any;

  srcurls: { url: string, time: number }[] = [
    { url: "1izZlQAjZ9g", time: 8000 },
    { url: "4wL_1f4xs9I", time: 10000 },
    { url: "Qn0wZ4-wA7I", time: 25000 },
    { url: "7DnurcMUtXM", time: 28000 },
    { url: "atUomwMzTA8", time: 45000 },
    { url: "mJhtiCr19sA", time: 8000 }
  ];
  randomurl: { url: string, time: number } = { url: "", time: 0 };
  ngOnInit(): void {
    this.randomurl = { url: "", time: 0 };
    this.randomurl = this.srcurls[Math.floor(Math.random() * this.srcurls.length)];
    let time: number = this.randomurl.time;
    this.src = this.dom.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + this.randomurl.url + "?controls=1&autoplay=1&loop=1&replay=1");
    this.interval = setInterval(() => {
      setTimeout(() => {
        this.ishown = false;
      }, 1);
      setTimeout(() => {
        this.randomurl = this.srcurls[Math.floor(Math.random() * this.srcurls.length)];;
        this.src = this.dom.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + this.randomurl.url + "?controls=1&autoplay=1&loop=1&replay=1");
        this.ishown = true;
      }, 5);
    }, time);
  }
  ngOnDestroy() {
    clearInterval(this.interval);
  }
  close() {
    this.ishown = false;
    this.isbuttonclick = false;
    clearInterval(this.interval);
  }
}

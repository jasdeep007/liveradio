import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  openyoutube() {
    window.open('https://www.youtube.com/channel/UCLU8X_uTZPNltntlaXKZw8w', '_blank');
  }
  openmessenger() {
    window.open('https://www.messenger.com/t/100000136264340/?ref=aboutcourse', '_blank');
  }
  email() {
    window.open('mailto:outtmcare@gmail.com?subject=I want to enroll in ONE ON ONE training.&body=Regarding Course Enquiry', '_blank');
  }
  supportme() {
    window.open('http://payment.outtm.com/donation', '_blank');
  }
  openfb()
  {
    window.open('https://www.facebook.com/groups/540083393816884', '_blank');
  }
}

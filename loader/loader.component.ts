import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  constructor() { }
  @Input() type: string = '1';
  @Input() text:string='';
  ngOnInit(): void {
  }

}

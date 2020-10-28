import { Services } from './../configuration';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Services',
  templateUrl: './Services.component.html',
  styleUrls: ['./Services.component.scss']
})
export class ServicesComponent implements OnInit {

  _services:any;
  constructor() {
    this._services=Services;
   }

  ngOnInit() {
  }

}

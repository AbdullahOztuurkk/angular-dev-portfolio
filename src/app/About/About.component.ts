import { Configuration, Skills } from './../configuration';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-About',
  templateUrl: './About.component.html',
  styleUrls: ['./About.component.scss']
})
export class AboutComponent implements OnInit {

  aboutMe:string;
  skills:any;
  constructor() {
    this.aboutMe=Configuration.aboutMe; 
    this.skills=Skills;
  }

  ngOnInit() {
  }

}

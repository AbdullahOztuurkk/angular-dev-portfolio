import { JobExperience, Education } from './../configuration';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Resume',
  templateUrl: './Resume.component.html',
  styleUrls: ['./Resume.component.css']
})
export class ResumeComponent implements OnInit {

  _jobs:any;
  _educations;
  constructor() { 
    this._jobs=JobExperience;
    this._educations=Education;
  }

  ngOnInit() {
  }

}

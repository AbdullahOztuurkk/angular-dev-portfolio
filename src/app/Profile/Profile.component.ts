import { Component, OnInit } from '@angular/core';
import { Configuration } from '../configuration';

@Component({
  selector: 'app-Profile',
  templateUrl: './Profile.component.html',
  styleUrls: ['./Profile.component.css']
})
export class ProfileComponent implements OnInit {

  _profileUrl:string;
  _userName:string;
  _userJob:string;
  _userLocation:string;
  _userEmail:string;
  _userWebsite:string;
  constructor() { 
    this._profileUrl=Configuration.profileUrl;
    this._userName=Configuration.userName;
    this._userJob=Configuration.userJob;
    this._userLocation=Configuration.userLocation;
    this._userWebsite=Configuration.userWebsite;
    this._userEmail=Configuration.userEmail;
  }

  ngOnInit() {
  }

}

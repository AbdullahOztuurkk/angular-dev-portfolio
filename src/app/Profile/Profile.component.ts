import { SocialMedia } from './../configuration';
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
  _userDateOfBirth:string;
  _githubUrl:string;
  _linkedinUrl:string;
  _instagramUrl:string;
  _twitterUrl:string;
  _mediumUrl:string;
  _facebookUrl:string;
  constructor() { 
    this._profileUrl=Configuration.profileUrl;
    this._githubUrl=SocialMedia.githubUrl;
    this._instagramUrl=SocialMedia.instagramUrl;
    this._facebookUrl=SocialMedia.facebookUrl;
    this._twitterUrl=SocialMedia.twitterUrl;
    this._linkedinUrl=SocialMedia.linkedinUrl;
    this._mediumUrl=SocialMedia.mediumUrl;
    this._userName=Configuration.userName;
    this._userJob=Configuration.userJob;
    this._userLocation=Configuration.userLocation;
    this._userDateOfBirth=Configuration.userDateOfBirth;
    this._userEmail=Configuration.userEmail;
  }

  ngOnInit() {
  }

}

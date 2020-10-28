import { Configuration } from './../configuration';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Contact',
  templateUrl: './Contact.component.html',
  styleUrls: ['./Contact.component.css']
})
export class ContactComponent implements OnInit {

  _userAddress:string;
  _userPhone:string;
  _userEmail:string;
  constructor() {
    this._userAddress=Configuration.userAddress;
    this._userPhone=Configuration.userPhone;
    this._userEmail=Configuration.userEmail;
  }

  ngOnInit() {

  }
}

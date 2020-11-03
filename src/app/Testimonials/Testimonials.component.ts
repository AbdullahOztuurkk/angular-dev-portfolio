import { Component, OnInit } from '@angular/core';
import { Testimonials } from '../configuration';

@Component({
  selector: 'app-Testimonials',
  templateUrl: './Testimonials.component.html',
  styleUrls: ['./Testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  _testimonials:any;
  constructor() { 
    this._testimonials=Testimonials;
  }

  ngOnInit() {
  }
}

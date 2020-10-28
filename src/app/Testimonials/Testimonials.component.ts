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

  giveStars(review:number)
  {
    if(review>=80)
      return 'bg-success';
    else if (review>=60 && review < 80)
      return 'bg-primary';
    else if (review>=40 && review < 60)
      return 'bg-info';
    else if(review>=20 && review < 40)
      return 'bg-warning';
    else
      return 'bg-danger';
  }
}

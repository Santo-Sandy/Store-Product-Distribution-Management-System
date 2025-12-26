import { Component, inject, Input, input } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ProgressData } from '../../Services/progress-data';

@Component({
  selector: 'app-intro-card',
  imports: [],
  templateUrl: './intro-card.html',
  styleUrl: './intro-card.css',
})
export class IntroCard {

  private route=inject(Router);


  @Input()
  place!:any;

  view(){
    if(this.place.productId){
      this.route.navigate(['trackproduct',this.place.productId]);
    }
  }

}

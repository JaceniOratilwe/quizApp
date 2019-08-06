import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //route: any;
  general;
  brain;
  science;

    constructor(private route:Router) {}

  submit(){
      this.route.navigateByUrl("general");
    }  
   
    submit2(){
      this.route.navigateByUrl("brain");
    }

    submit3(){
      this.route.navigateByUrl("science");
    }
}

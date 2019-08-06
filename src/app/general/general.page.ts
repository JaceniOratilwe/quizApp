import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-general',
  templateUrl: './general.page.html',
  styleUrls: ['./general.page.scss'],
})
export class GeneralPage implements OnInit {
  correct: number =0;

  constructor(private route:Router) { }

  ngOnInit() {


  }
  GoToQ1(){
 console.log(this.correct);
this.route.navigate(['/g1'], { queryParams: {correct:this.correct } });
  }
  click1(){
    if(this.correct  += 0){
      
    }
  }
  click2(){
    if(this.correct  += 0){
      
    }
  }
  click3(){
    if(this.correct  += 0){
      
    }
  } 
  click4(){
    if(this.correct  += 1){
      
    }
 
}
}

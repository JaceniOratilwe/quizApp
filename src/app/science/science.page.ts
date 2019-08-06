import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-science',
  templateUrl: './science.page.html',
  styleUrls: ['./science.page.scss'],
})
export class SciencePage implements OnInit {
  correct: number =0;

  constructor(private route:Router) { }

  ngOnInit() {


  }
  GoToQ1(){
 console.log(this.correct);
this.route.navigate(['/s1'], { queryParams: {correct:this.correct } });
  }
  click1(){
    if(this.correct  += 1){
      
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
    if(this.correct  += 0){
      
    }
 
}
  
}

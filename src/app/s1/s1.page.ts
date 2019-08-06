import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-s1',
  templateUrl: './s1.page.html',
  styleUrls: ['./s1.page.scss'],
})
export class S1Page implements OnInit {
  correct: number=0;
  correct1: number =0;

  seconds;
minutes;
hours;
clockDisplay: string;
interval: number;
  

  constructor(private router:Router ,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams
     .subscribe(params =>
  {
      console.log(params);
      this.correct = params.correct;
     console.log( this.correct);
   });
  }
  GoTo1(){
    console.log(this.correct,this.correct1);
this.router.navigate(['/s2'], { queryParams: {correct:this.correct, correct1:this.correct1} });
  }
  click1(){
    if(this.correct1  += 1){
      
    }
  }
  click2(){
    if(this.correct1  += 0){
      
    }
  }
  click3(){
    if(this.correct1  += 0){
      
    }
  } 
  click4(){
    if(this.correct1  += 0){
      
    }
}

countdowntimer(duration) {
  if (duration > 0) {
  setInterval(() => {
  duration = duration - 1;
  if (duration <= 0) {
  return;
  }
  if (duration % 60 < 10) {
  this.seconds = 0 + parseInt("" + duration % 60);
  } else {
  this.seconds = '' + parseInt((duration % 60).toString());
  }
  if (duration / 60 < 10) {
  this.minutes = 0 + parseInt("" + duration / 60, 10);
  } else {
  this.minutes = '' + parseInt((duration / 60).toString(), 10);
  }
  
      if (duration / 3600 < 10) {
        this.hours = "" + parseInt("" + duration / 3600);
      } else {
        this.hours = "" + parseInt((duration / 3600).toString())
      }
      if (this.minutes >= 60) {
        this.minutes = parseInt("" + this.minutes % 60);
      }
      this.clockDisplay = this.minutes + "m:" + this.seconds + "s";
      if (this.hours == 0 && this.minutes == 0 && this.seconds == 1) {
      //write ur code........
  }
  }, 1000);
  }
  }

}

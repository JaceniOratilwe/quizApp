import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-g1',
  templateUrl: './g1.page.html',
  styleUrls: ['./g1.page.scss'],
})
export class G1Page implements OnInit {
  correct: number=0;
  correct1: number =0;

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
this.router.navigate(['/g2'], { queryParams: {correct:this.correct, correct1:this.correct1} });
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
}

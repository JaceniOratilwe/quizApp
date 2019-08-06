import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-s3',
  templateUrl: './s3.page.html',
  styleUrls: ['./s3.page.scss'],
})
export class S3Page implements OnInit {
  correct: number;
  correct1: number;
  correct2: number;
  correct3: number=0;

  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams
    .subscribe(params =>
 {
  console.log(params);
  this.correct = params.correct,
  this.correct1 = params.correct1,
  this.correct2 = params.correct2,
  
 console.log( this.correct,this.correct1, this.correct2)


  });
  }
  GoTo4(){
    console.log(this.correct,this.correct1,this.correct2,this.correct3);
    this.router.navigate(['/s4'], { queryParams: {correct:this.correct, correct1:this.correct1,correct2:this.correct2,correct3:this.correct3} });
  }
  click1(){
    if(this.correct3  += 0){
      
    }
  }
  click2(){
    if(this.correct3  += 0){
      
    }
  }
  click3(){
    if(this.correct3  += 1){
      
    }
  } 
  click4(){
    if(this.correct3  += 0){
      
    }
  }
}

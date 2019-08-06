import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-g4',
  templateUrl: './g4.page.html',
  styleUrls: ['./g4.page.scss'],
})
export class G4Page implements OnInit {
  correct: number;
  correct1: number;
  correct2: number;
  correct3: number;
  correct4: number=0;
  final: number=0;
   

  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams
    .subscribe(params =>
 {
     console.log(params);
     this.correct = params.correct,
     this.correct1 = params.correct1,
     this.correct2 = params.correct2,
     this.correct3 = params.correct3,
    
    console.log( this.correct,this.correct1, this.correct2,this.correct3)

 
  });
  }
  GoTo4(){
    this.final = +this.correct + +this.correct1 + +this.correct2+ +this.correct3 + +this.correct4;
    console.log(this.correct,this.correct1,this.correct2,this.correct3,this.correct4);
    this.router.navigate(['/total'], { queryParams: {correct:this.correct, correct1:this.correct1,correct2:this.correct2,correct3:this.correct3,correct4:this.correct4,final:this.final} });
  }
  click1(){
    if(this.correct4  += 0){
      
    }
  }
  click2(){
    if(this.correct4  += 0){
      
    }
  }
  click3(){
    if(this.correct4  += 1){
      
    }
  } 
  click4(){
    if(this.correct4  += 0){
      
    }
  }

}

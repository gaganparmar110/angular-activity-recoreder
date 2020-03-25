import { Component ,OnInit,OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import { global } from '@angular/compiler/src/util';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
minuteLeft: number = 120;
secondLeft:any =60;
  interval;
  working: boolean = false;
  counter:any;
     startBtnDisabled = false;
   endBtnDisabled = true;
   sMinutes:string;
  

codingStart(){
  this.working = !this.working;
  if(this.working){
  var count=0;
this.endBtnDisabled = false;
this.startBtnDisabled=true;

     this.interval = setInterval(() => {
        
  //this.minuteLeft = Math.floor(this.counter / 60000);
      if(this.minuteLeft > 0) {
     
        this.minuteLeft--;
        count =count+1;
      } else {
       this.codingEnd();
     
      }
    
     if(this.secondLeft > 0) {
        this.secondLeft--;
        count =count+1;
      } else {
        this.secondLeft=60;
        this.codingEnd();
    
      }
    },1000,60000);
}
}


codingEnd(){
   clearInterval(this.interval);
  var TotalMinute=120-this.minuteLeft;
  var TotalSecond=60-this.secondLeft;
 // alert('total time taken: MINUTES:'+TotalMinute+'seconds:'+TotalSecond);
  this.minuteLeft=0;
  this.secondLeft=0;

}
reset(){
  this.startBtnDisabled=true;
  this.endBtnDisabled=true;
  this.working=false;
  
  this.minuteLeft= 120;
this.secondLeft=60;
  //this.codingStart();
}

 
 
}

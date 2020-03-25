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
docMinuteLeft:number=120;
docSecondLeft:any=60;
  interval;

     startBtnDisabled = false;
   endBtnDisabled = true;

   startBtnDisabledDoc=false;
   endBtnDisabledDoc=true;
   
  

codingStart(){


  var count=0;
this.endBtnDisabled = false;
this.startBtnDisabled=true;

     this.interval = setInterval(() => {
        
      if(this.minuteLeft > 0) {
     
        this.minuteLeft--;
        count =count+1;
      } else {
       this.codingEnd();
     
      }
    },60000);
    this.interval=setInterval(()=>{
  if(this.secondLeft > 0) {
        this.secondLeft--;
        count =count+1;
      } else {
        this.secondLeft=60;
       // this.codingEnd();
    
      }


    },1000);
}



codingEnd(){
   clearInterval(this.interval);
  var TotalMinute=120-this.minuteLeft;
  var TotalSecond=60-this.secondLeft;
  alert('total time taken: MINUTES:'+TotalMinute+'seconds:'+TotalSecond);
  this.minuteLeft=0;
  this.secondLeft=0;

}
reset(){
  this.startBtnDisabled=true;
  this.endBtnDisabled=true;

  
  this.minuteLeft= 120;
this.secondLeft=60;
  //this.codingStart();
}
documentationStart(){
  var count=0;
this.endBtnDisabledDoc = false;
this.startBtnDisabledDoc=true;

     this.interval = setInterval(() => {
        
      if(this.docMinuteLeft > 0) {
     
        this.docMinuteLeft--;
        count =count+1;
      } else {
       this.codingEnd();
     
      }
    },60000);
    this.interval=setInterval(()=>{
  if(this.docSecondLeft > 0) {
        this.docSecondLeft--;
        count =count+1;
      } else {
        this.docSecondLeft=60;
       // this.codingEnd();
    
      }


    },1000);
}

documentationEnd(){
 clearInterval(this.interval);
  var TotalMinute=120-this.docMinuteLeft;
  var TotalSecond=60-this.docSecondLeft;
  alert('total time taken: MINUTES: ' +TotalMinute+' seconds:'+TotalSecond);
  this.docMinuteLeft=0;
  this.docSecondLeft=0;
}
docReset(){
 this.startBtnDisabledDoc=true;
  this.endBtnDisabledDoc=true;

  
  this.docMinuteLeft= 120;
this.docSecondLeft=60;
}

 
 
}

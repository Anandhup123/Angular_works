import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event2',
  templateUrl: './event2.component.html',
  styleUrls: ['./event2.component.css']
})
export class Event2Component implements OnInit {

  // odd or even
public count=0
num=0;
str="";
check(){
  if(this.num%2==0){
    this.str=" Your entering Number is Even"
  }
  else{
    this.str="Your entering Number is Odd"
  }
}

clear(){
  this.str=""
  this.num=0
}

constructor() { }

  ngOnInit(): void {
  }

}

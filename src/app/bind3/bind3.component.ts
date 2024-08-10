import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind3',
  templateUrl: './bind3.component.html',
  styleUrls: ['./bind3.component.css']
})
export class Bind3Component implements OnInit {

@Input() name=""
@Input() age:any
@Input() prof=""


profstyle(){
  let styles={
    'font-weight':this.prof=='Engineer'?'bold':'',
    'color':this.age>25?'green':'',
    'font-size':this.prof=='Engineer'?'2.5rem':''
  };
  return styles;
}




  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind1',
  templateUrl: './bind1.component.html',
  styleUrls: ['./bind1.component.css']
})
export class Bind1Component implements OnInit {

table_styles="width: 800px; text-align: center; height: 600px; font-size: 1.3rem; justify-content: center;";

main="text-align: center; height: 475px;width: 350px; border: 1px solid black" 

box_style="height: 300px; width: 280px;"

@Input() img:string='';
@Input() name:string='';
Average:any;
 total:any;



@Input() mark1:number=0;
@Input() mark2:number=0;
@Input() mark3:number=0;


  constructor() { }

  ngOnInit(): void {  

    this.total=this.mark1+this.mark2+this.mark3;
    this.Average=this.total/3;

  }

}

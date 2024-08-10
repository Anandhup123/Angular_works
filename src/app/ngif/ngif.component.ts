import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // datas=[
  //   {Fruit_name:"Apple",Price:120,Qty:400},
  //   {Fruit_name:"Mango",Price:80,Qty:540},
  //   {Fruit_name:"Orange",Price:45,Qty:420},
  //   {Fruit_name:"Banana",Price:50,Qty:750},
  //   {Fruit_name:"Grapes",Price:140,Qty:200},
  //   {Fruit_name:"Cherry",Price:250,Qty:45},
  //   {Fruit_name:"Mulberry",Price:350,Qty:50}]

  price=0
  value=0
  calculation(){
    this.value=this.price
  }

  showMe=true;

}

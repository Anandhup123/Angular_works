import { Component, OnInit } from '@angular/core';
// import formBuilder for reactive forms
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  // setting a flag
submit=false;

// creating a constructor for formBuilder
  constructor(private fb:FormBuilder) { }

// scheme generating 

  registraionform=this.fb.group({
    firstname:['',Validators.required],
    phone:['',Validators.required,Validators.pattern],
    email:['',[Validators.required,Validators.email]],
    password:['',Validators.required]
  })

// get function is defining 
//it is the controller for our form

get functioncall(){
  return this.registraionform.controls
}

onsubmitted(){
  this.submit=true
  // console.log("clicked...!")
  console.log(this.functioncall)
}

  ngOnInit(): void {
  }

}

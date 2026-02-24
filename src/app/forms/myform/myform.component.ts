import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-myform',
  imports: [ReactiveFormsModule],
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
export class MyformComponent  {

  // Simple form
  myinput = new FormControl("Hi !");
  fb = new FormBuilder();

  // FormGroup
  myform = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
  });

  // FormArray
  mydynform = new FormGroup({ // The form group
    aliases: this.fb.array([ // An dynamic array
      this.fb.control('') // A first input field in this array
    ])
  });

  result: string;
  constructor() {
    this.result = '';
  }

  ngOnInit(): void {
  }

  // shows the values for the inputs in a FormGroup
  show() {
    console.log(this.myform.value["firstname"])
    console.log(this.myform.get("firstname")!.value)
    this.result = this.myform.get("firstname")!.value + ' ' + this.myform.get("lastname")!.value
  }

  // returns all dynamically created inputs as a FormArray object
  get aliases() : FormArray {
    return this.mydynform.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  aliasesShow() {
    let aliases:FormArray = this.aliases;
    for (let index in aliases.controls) {
      let formcontrol = aliases.get(index);
      console.log(formcontrol!.value);
    }
  }


  // Validated FormGroup
  myvalidatedform = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    age: new FormControl(),
    gender: new FormControl('', Validators.required)
  });

  // Adds a control to the array when called
  genders=  [
    { id: 1, name: "Male" },
    { id: 2, name: "Female" },
    { id: 3, name: "Not relevant" }
  ];


}

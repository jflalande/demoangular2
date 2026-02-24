import { Component, OnInit } from '@angular/core';
import {MyServiceService} from "../my-service.service";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-using-aservice',
  templateUrl: './using-aservice.component.html',
  imports: [DatePipe],
  styleUrls: ['./using-aservice.component.css']
})
export class UsingAServiceComponent {
  public mydate: Date;

  constructor(myservice : MyServiceService) {
    this.mydate = myservice.getDate();
  }
}

import { Component } from '@angular/core';
import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';
import { HeroDetails } from '../hero-details/hero-details';
import { MyformComponent } from '../forms/myform/myform.component';
import { AttributedirectivesComponent } from '../attributedirectives/attributedirectives.component';
import { Button } from "../button/button";
import { RouterLink } from '@angular/router';
import { UsingAServiceComponent } from '../using-aservice/using-aservice.component';

@Component({
  selector: 'app-templatelink',
  imports: [Button, CurrencyPipe, DatePipe, TitleCasePipe, 
    HeroDetails, MyformComponent, AttributedirectivesComponent, Button, RouterLink,
   UsingAServiceComponent],
  templateUrl: './templatelink.html',
  styleUrl: './templatelink.css',
})
export class Templatelink {

  firstname = "JF";
  lastname = "Lalande";
  year = 2026;
  topics: Set<string> = new Set();
  amount = 20;
  mydate = 1771861650;
  i: number = 1;
  myobjects = [{ name: "fraise", category:'fruit', id: 1 },
     { name: "object2",  category:'truc', id: 2}, 
     { name: "object3", category:'machin', id: 3}];
  heroes: string[];
  selectedHero: string;

  constructor() {
    this.topics.add("hello !");
    this.topics.add("my list");

    this.heroes = ['Batman', 'Robin', 'Superman'];
    this.selectedHero = "";
  }

  selectHero(hero: string) { this.selectedHero = hero; }

  toto() {
    return this.i;
  }
  onClick() {
    alert("You Clicked Me!");
    this.i++;
  }

  messageFromChild: string = "";
  receivedMessageFromHeroChild($event: string) {
    this.messageFromChild = $event;
    console.log("Message from child: " + $event);
    }
}

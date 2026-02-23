import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-hero-details',
  imports: [UpperCasePipe],
  templateUrl: './hero-details.html',
  styleUrl: './hero-details.css',
})
export class HeroDetails {
    // Propriété bindée (en "input" du composant)
    @Input() hero = 'default';
}

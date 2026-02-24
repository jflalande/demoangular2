import { UpperCasePipe } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero-details',
  imports: [UpperCasePipe, FormsModule],
  templateUrl: './hero-details.html',
  styleUrl: './hero-details.css',
})
export class HeroDetails {

    // Propriété bindée (en "input" du composant)
    @Input() hero = 'default';

    // Property that can be mapped into the parent
    @Output() messageToParent = new EventEmitter<string>(); 

    message = '';

    // Emit an event via messateToParent
    onMessageChange($event: any) {
      // We need to construct an EventEmitter object
      this.messageToParent.emit($event);
    }

}

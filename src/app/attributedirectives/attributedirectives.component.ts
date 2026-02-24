import { JsonPipe, NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attributedirectives',
  templateUrl: './attributedirectives.component.html',
  imports: [NgClass, JsonPipe, FormsModule],
  styleUrls: ['./attributedirectives.component.css']
})
export class AttributedirectivesComponent {

  currentClasses: Record<string, boolean> = {};
  

  public canSave: boolean;
  public isUnchanged: boolean;
  public isSpecial: boolean;
  setCurrentClasses() {
    // CSS classes: added/removed per current state of component properties
    this.currentClasses =  {
      saveable: this.canSave,
      modified: !this.isUnchanged,
      special:  this.isSpecial
    };
  }

  //currentStyles: Record<string, string> = {};
  setCurrentStyles() {
    // CSS styles: set per current state of component properties
    /*this.currentStyles = {
      'font-style':  this.canSave      ? 'italic' : 'normal',
      'font-weight': !this.isUnchanged ? 'bold'   : 'normal',
      'font-size':   this.isSpecial    ? '24px'   : '12px'
    };*/
  }

  constructor() {
    this.canSave = false;
    this.isUnchanged = false;
    this.isSpecial = false;
  }

}

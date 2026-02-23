import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button } from './button/button';
import { Templatelink } from './templatelink/templatelink';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Button, Templatelink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('demoangular2');
}

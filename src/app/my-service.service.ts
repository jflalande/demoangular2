import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  constructor() { }
  now = new Date()
  getDate() {
    return this.now;
  }
}

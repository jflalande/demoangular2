import { Routes } from '@angular/router';
import { Templatelink } from './templatelink/templatelink';
import { Button } from './button/button';

export const routes: Routes = [
	  { path: '', component: Templatelink },
      { path: 'button', component: Button },
	];
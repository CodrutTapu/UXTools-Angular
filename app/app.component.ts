import { Component } from '@angular/core';
import {DND_PROVIDERS, DND_DIRECTIVES} from 'ng2-dnd/ng2-dnd';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {TopNavComponent} from './topNav.component';

@Component({
  selector: 'ux-app',
  templateUrl: 'app/app.component.html',
  directives: [TopNavComponent]

})
export class AppComponent {}

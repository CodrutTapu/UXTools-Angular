import { Component } from '@angular/core';
import {AppComponent} from './app.component';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {GridBlock} from './gridBlock.component';

@Component({
  selector: 'email-module',
  templateUrl: 'app/email.module.html',
  inputs: ['gE']

})

export class EmailModule {
    deleteEmailModule(gE) {
        gE.classN = 0;
    }
}

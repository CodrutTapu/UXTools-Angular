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
    email;
    deleteEmailModule(gE) {
        gE.moduleType = {};
    }
    updateEmail(gE) {
        gE.moduleType.email = this.email;
    }
}

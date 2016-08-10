import { Component } from '@angular/core';
import {AppComponent} from './app.component';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {GridBlock} from './gridBlock.component';

@Component({
  selector: 'text-module',
  templateUrl: 'app/text.module.html',
  inputs: ['gE']

})
export class TextModule {
    deleteTextModule(gE) {
        gE.moduleType = {};
    }
}

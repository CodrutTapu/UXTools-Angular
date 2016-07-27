import { Component } from '@angular/core';
import {AppComponent} from './app.component';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {GridBlock} from './gridBlock.component';

@Component({
  selector: 'tag-module',
  templateUrl: 'app/tag.module.html',
  inputs: ['gE']

})
export class TagModule {
    deleteTagModule(gE) {
        gE.classN = 0;
    }
}

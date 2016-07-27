import { Component } from '@angular/core';
import {AppComponent} from './app.component';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {GridBlock} from './gridBlock.component';

@Component({
  selector: 'image-module',
  templateUrl: 'app/image.module.html',
  inputs: ['gE']

})
export class ImageModule {
    deleteImageModule(gE) {
        gE.classN = 0;
    }
}

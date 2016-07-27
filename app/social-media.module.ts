import { Component } from '@angular/core';
import {AppComponent} from './app.component';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {GridBlock} from './gridBlock.component';

@Component({
  selector: 'social-media-module',
  templateUrl: 'app/social-media.module.html',
  inputs: ['gE']

})
export class SocialMediaModule {
    deleteSocialMediaModule(gE) {
        gE.classN = 0;
    }
}

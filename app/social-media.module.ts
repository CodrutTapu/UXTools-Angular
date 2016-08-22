import { Component } from '@angular/core';
import {AppComponent} from './app.component';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {GridBlock} from './gridBlock.component';

@Component({
  selector: 'social-media-module',
  templateUrl: 'app/social-media.module.html',
  styleUrls: ['app/social-media.module.css'],
  inputs: ['gE']

})
export class SocialMediaModule {
    facebookUrl;
    twitterUrl;
    linkedinUrl;
    externalUrl;
    deleteSocialMediaModule(gE) {
        gE.moduleType = {};
    }
    updateSocialLinks(gE) {
        gE.moduleType.facebookUrl = this.facebookUrl;
        gE.moduleType.twitterUrl = this.twitterUrl;
        gE.moduleType.linkedinUrl = this.linkedinUrl;
        gE.moduleType.externalUrl = this.externalUrl;
    }
}

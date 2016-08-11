import { Component } from '@angular/core';
import {AppComponent} from './app.component';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {GridBlock} from './gridBlock.component';
import {tagModuleTag} from './tagModuleTag';

@Component({
  selector: 'tag-module',
  templateUrl: 'app/tag.module.html',
  inputs: ['gE']

})
export class TagModule {
    i:number = 4;
    deleteTagModule(gE) {
        gE.moduleType = {};
    }
    addTag(gE) {
        gE.moduleType.tags.push(new tagModuleTag('Tag ' + this.i));
        this.i++;
    }
    deleteTag(gE,tag) {
        gE.moduleType.tags.splice(gE.moduleType.tags.indexOf(tag), 1);
    }
}

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
    deleteTagModule(gE) {
        gE.moduleType = {};
    }
    addTag(gE) {
        gE.moduleType.tags.push(new tagModuleTag('<p>New Tag</p>'));
    }
    deleteTag(gE,tag) {
        gE.moduleType.tags.splice(gE.moduleType.tags.indexOf(tag), 1);
    }
    updateTag(event:any,tag) {
        setTimeout(function(){
            tag.name = event.srcElement.firstElementChild.innerHTML;
        }, 3000);
    }
}

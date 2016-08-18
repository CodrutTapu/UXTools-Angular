import { Component } from '@angular/core';
import {AppComponent} from './app.component';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {GridBlock} from './gridBlock.component';
declare var $: any;

@Component({
  selector: 'text-module',
  templateUrl: 'app/text.module.html',
  inputs: ['gE']

})
export class TextModule {
    deleteTextModule(gE) {
        gE.moduleType = {};
    }
    updateTextModule(event:any,gE) {
        setTimeout(function(){
            gE.moduleType.content = event.fromElement.lastElementChild.innerHTML;
        }, 3000);
    }
}

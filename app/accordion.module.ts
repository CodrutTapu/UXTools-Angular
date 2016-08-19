import { Component, Input } from '@angular/core';
import {AppComponent} from './app.component';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {GridBlock} from './gridBlock.component';
import {accordionItem} from './accordionItem';
declare var $: any;

@Component({
  selector: 'accordion-module',
  templateUrl: 'app/accordion.module.html',
  inputs: ['gE']

})
export class AccordionModule {
    i:number = 4;
    deleteAccordionModule(gE) {
        gE.moduleType = {};
    }
    addAccordionItem(gE) {
        gE.moduleType.items.push(new accordionItem('item' + this.i,'<p>New Item</p>','<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</p>'));
        this.i++;
    }
    deleteAccordionItem(gE,item) {
        gE.moduleType.items.splice(gE.moduleType.items.indexOf(item), 1);
    }
}

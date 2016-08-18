import { Component, Input } from '@angular/core';
import {AppComponent} from './app.component';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {GridBlock} from './gridBlock.component';
import {barGraphBar} from './barGraphBar';
declare var $: any;

@Component({
  selector: 'bar-graph-module',
  templateUrl: 'app/bar-graph.module.html',
  inputs: ['gE']

})
export class BarGraphModule {
    deleteBarGraphModule(gE) {
        gE.moduleType = {};
    }
   addBarGraph(gE) {
       gE.moduleType.bars.push(new barGraphBar(50,'<p>New Label</p>'));
   }
   deleteBar(gE,bar) {
       gE.moduleType.bars.splice(gE.moduleType.bars.indexOf(bar), 1);
   }
   adjustBarLength(event:any,bar) {
       var pBLength = $('.progress').width();
       bar.value = Math.ceil((event.layerX*100)/pBLength);
   }
   updateBarGraphTitle(event:any,gE) {
       setTimeout(function(){
           gE.moduleType.title = event.fromElement.innerHTML;
       }, 3000);
   }
   updateBarLabel(event:any,bar) {
       setTimeout(function(){
           bar.label = event.fromElement.innerHTML;
       }, 3000);
   }
}

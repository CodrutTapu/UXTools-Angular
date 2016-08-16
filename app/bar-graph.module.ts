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
   //  barValueUpdate(event:any,bar) {
   //      if(event.target.value > 100) {
   //          bar.value  = 100;
   //      } else if (event.target.value < 0 ) {
   //          bar.value  = 0;
   //      } else {
   //          bar.value = event.target.value;
   //      }
   // }
   addBarGraph(gE) {
       gE.moduleType.bars.push(new barGraphBar(50,'Label'));
   }
   deleteBar(gE,bar) {
       gE.moduleType.bars.splice(gE.moduleType.bars.indexOf(bar), 1);
   }
   test(event:any,bar) {
       var pBLength = $('.progress').width();
       bar.value = Math.ceil((event.layerX*100)/pBLength);
   }
}

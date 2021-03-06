import { Component } from '@angular/core';
import {AppComponent} from '../app.component';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {GridBlock} from '../gridBlock.component';
declare var $: any;

@Component({
  selector: 'bgColor-module',
  templateUrl: 'app/bgColor_component/bgColor.module.html',
  styleUrls:  ['app/bgColor_component/bgColor.module.css'],
  inputs: ['gE']
})

export class bgColorModule {
    bgColors:Array<string> = ['#4c7ba0','#ffffff','#ee4039','#f07171','#124666','#737373','#f8b13d','#00b5c8','#81bda4','#b05574'];
    customBgColor = "#FFFFFF";
    colorsListToggle() {
        $('.colors-list').toggle();
    }
    updateBgColor(gE) {
        if( this.customBgColor[0] != '#') {
            this.customBgColor = "#" +  this.customBgColor;
        };
        gE.bgColor = this.customBgColor;
    }
    selectBgColor(gE,bgC) {
        gE.bgColor = bgC;
    }
}

import { Component } from '@angular/core';
import {AppComponent} from './app.component';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {GridBlock} from './gridBlock.component';
import {scaleChartModuleScale} from './scaleChartModuleScale';
declare var $: any;

@Component({
  selector: 'scale-chart-module',
  templateUrl: 'app/scale-chart.module.html',
  inputs: ['gE']
})

export class ScaleChartModule {
    deleteScaleChartModule(gE) {
        gE.moduleType = {};
    }
    updateScaleValue(event:any,scale) {
        scale.value = event.target.value;
    }
    addScale(gE) {
        gE.moduleType.scales.push(new scaleChartModuleScale('sideA','sideB',50));
    }
    deleteScale(gE,scale) {
        gE.moduleType.scales.splice(gE.moduleType.scales.indexOf(scale), 1);
    }
}

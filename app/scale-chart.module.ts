import { Component } from '@angular/core';
import {AppComponent} from './app.component';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {GridBlock} from './gridBlock.component';

@Component({
  selector: 'scale-chart-module',
  templateUrl: 'app/scale-chart.module.html',
  inputs: ['gE']
})

export class ScaleChartModule {
    deleteScaleChartModule(gE) {
        gE.moduleType = {};
    }
}

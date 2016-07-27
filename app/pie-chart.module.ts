import { Component } from '@angular/core';
import {AppComponent} from './app.component';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {GridBlock} from './gridBlock.component';

@Component({
  selector: 'pie-chart-module',
  templateUrl: 'app/pie-chart.module.html',
  inputs: ['gE']

})

export class PieChartModule {
    deletePieChartModule(gE) {
        gE.classN = 0;
    }
}

import { Component } from '@angular/core';
import {AppComponent} from './app.component';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {GridBlock} from './gridBlock.component';

@Component({
  selector: 'bar-graph-module',
  templateUrl: 'app/bar-graph.module.html',
  inputs: ['gE']

})
export class BarGraphModule {
    deleteBarGraphModule(gE) {
        gE.moduleType = {};
    }
    ngOnInit() {
        $(".bar-graph-module .v-slider").slider({
            orientation: "horizontal",
            range: "min",
            min: 0,
            max: 100,
            value: 60,
            slide: function (event, ui) {
            $(".amount").val(ui.value);
            }
        });
    }
}

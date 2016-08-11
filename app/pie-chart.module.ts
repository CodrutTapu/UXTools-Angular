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
        gE.moduleType = {};
    }
    ngOnInit() {
        var ctx = document.getElementById("pieChart");
        var pieChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ["Red", "Blue", "Yellow"],
                datasets: [{
                    data: [12, 19, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            showScale: false
        });
        $(document).on('click','.pie-chart-module .add',function(){
            var pcModule = $('.pie-chart-module');
            if( $('.create-pie-chart-box').is(':visible') ){
                pcModule.find('.create-pie-chart-box').stop().hide(200);
            }else {
                pcModule.find('.create-pie-chart-box').stop().show(200);
            }
        });
    }
}

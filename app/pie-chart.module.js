"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var PieChartModule = (function () {
    function PieChartModule() {
    }
    PieChartModule.prototype.deletePieChartModule = function (gE) {
        gE.moduleType = {};
    };
    PieChartModule.prototype.ngOnInit = function () {
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
        $(document).on('click', '.pie-chart-module .add', function () {
            var pcModule = $('.pie-chart-module');
            if ($('.create-pie-chart-box').is(':visible')) {
                pcModule.find('.create-pie-chart-box').stop().hide(200);
            }
            else {
                pcModule.find('.create-pie-chart-box').stop().show(200);
            }
        });
    };
    PieChartModule = __decorate([
        core_1.Component({
            selector: 'pie-chart-module',
            templateUrl: 'app/pie-chart.module.html',
            inputs: ['gE']
        }), 
        __metadata('design:paramtypes', [])
    ], PieChartModule);
    return PieChartModule;
}());
exports.PieChartModule = PieChartModule;
//# sourceMappingURL=pie-chart.module.js.map
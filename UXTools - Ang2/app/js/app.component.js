System.register(['angular2/core', './topNav.component', './grid.component', './gridElem'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, topNav_component_1, grid_component_1, gridElem_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (topNav_component_1_1) {
                topNav_component_1 = topNav_component_1_1;
            },
            function (grid_component_1_1) {
                grid_component_1 = grid_component_1_1;
            },
            function (gridElem_1_1) {
                gridElem_1 = gridElem_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.gelem = [
                        new gridElem_1.GridElem(4),
                        new gridElem_1.GridElem(4),
                        new gridElem_1.GridElem(4)
                    ];
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'ux-app',
                        templateUrl: 'app/html/app.component.html',
                        directives: [topNav_component_1.TopNavComponent, grid_component_1.GridComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map
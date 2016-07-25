System.register(['angular2/core', './gridBlock.component', './gridElem'], function(exports_1, context_1) {
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
    var core_1, gridBlock_component_1, gridElem_1;
    var TopNavComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (gridBlock_component_1_1) {
                gridBlock_component_1 = gridBlock_component_1_1;
            },
            function (gridElem_1_1) {
                gridElem_1 = gridElem_1_1;
            }],
        execute: function() {
            TopNavComponent = (function () {
                function TopNavComponent() {
                    this.gridElements = [new gridElem_1.gridElem(4, 1), new gridElem_1.gridElem(4, 2), new gridElem_1.gridElem(4, 3)];
                    this.id = 3;
                    this.gridElementsNewOrder = JSON.parse(localStorage.getItem("gridElementsOrder"));
                }
                TopNavComponent.prototype.ngOnInit = function () {
                    $.getScript('app.js');
                };
                TopNavComponent.prototype.addGridElement = function (dim) {
                    this.gridElements.push(new gridElem_1.gridElem(dim, this.id + 1));
                    this.gridElementsNewOrder.push(String(this.id + 1));
                    localStorage.setItem("gridElementsOrder", JSON.stringify(this.gridElementsNewOrder));
                    this.id = this.id + 1;
                };
                TopNavComponent.prototype.arrange = function () {
                    var gE = this.gridElements;
                    console.log(this.gridElements[0]);
                    console.log(this.gridElements[1]);
                    console.log(this.gridElements[2]);
                    var gEO = JSON.parse(localStorage.getItem("gridElementsOrder"));
                    console.log(gEO);
                    var i, j;
                    for (i = 0; i < gEO.length; i++) {
                        for (j = 0; j < gE.length; j++) {
                            if (gEO[i] == gE[j].id) {
                                console.log(i + ' --- ' + j);
                                this.gridElements[i] = new gridElem_1.gridElem(gE[j].dim, gE[j].id);
                                console.log(this.gridElements[i]);
                            }
                        }
                    }
                };
                TopNavComponent = __decorate([
                    core_1.Component({
                        selector: 'top-navigation',
                        templateUrl: 'app/html/topNav.component.html',
                        directives: [gridBlock_component_1.GridBlock]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TopNavComponent);
                return TopNavComponent;
            }());
            exports_1("TopNavComponent", TopNavComponent);
        }
    }
});
//# sourceMappingURL=topNav.component.js.map
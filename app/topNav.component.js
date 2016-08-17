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
var ng2_dnd_1 = require('ng2-dnd/ng2-dnd');
var gridBlock_component_1 = require('./gridBlock.component');
var gridElem_1 = require('./gridElem');
var textModule_1 = require('./textModule');
var TopNavComponent = (function () {
    function TopNavComponent() {
        this.gridElements = [new gridElem_1.gridElem(4, 1, new textModule_1.textModule(1, 'text-module', '<h1>Text Field 1</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra felis in sem porta feugiat.</p>')), new gridElem_1.gridElem(4, 2, new textModule_1.textModule(1, 'text-module', '<h1>Text Field 2</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra felis in sem porta feugiat.</p>')), new gridElem_1.gridElem(4, 3, new textModule_1.textModule(1, 'text-module', '<h1>Text Field 3</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra felis in sem porta feugiat.</p>'))];
        this.id = 3;
    }
    TopNavComponent.prototype.addGridElement = function (dim) {
        this.gridElements.push(new gridElem_1.gridElem(dim, this.id + 1, 0));
        this.id = this.id + 1;
    };
    TopNavComponent = __decorate([
        core_1.Component({
            selector: 'top-navigation',
            templateUrl: 'app/topNav.component.html',
            directives: [ng2_dnd_1.DND_DIRECTIVES, gridBlock_component_1.GridBlock]
        }), 
        __metadata('design:paramtypes', [])
    ], TopNavComponent);
    return TopNavComponent;
}());
exports.TopNavComponent = TopNavComponent;
//# sourceMappingURL=topNav.component.js.map
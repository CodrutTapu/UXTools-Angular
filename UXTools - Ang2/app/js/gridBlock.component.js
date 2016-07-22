System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var GridBlock;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            GridBlock = (function () {
                function GridBlock() {
                }
                GridBlock.prototype.deleteGridBlock = function (gE) {
                    this.gridElements.splice(this.gridElements.indexOf(gE), 1);
                };
                GridBlock.prototype.minGridBlock = function (gE) {
                    if (gE.dim == 2) {
                        alert("Too Small");
                        gE.dim = 2;
                    }
                    else {
                        gE.dim -= 2;
                    }
                };
                GridBlock.prototype.pluGridBlock = function (gE) {
                    if (gE.dim == 12) {
                        alert("Too Large");
                        gE.dim = 12;
                    }
                    else {
                        gE.dim += 2;
                    }
                };
                GridBlock = __decorate([
                    core_1.Component({
                        selector: 'grid-block',
                        templateUrl: 'app/html/grid-block.html',
                        inputs: ['gridElements']
                    }), 
                    __metadata('design:paramtypes', [])
                ], GridBlock);
                return GridBlock;
            }());
            exports_1("GridBlock", GridBlock);
        }
    }
});
//# sourceMappingURL=gridBlock.component.js.map
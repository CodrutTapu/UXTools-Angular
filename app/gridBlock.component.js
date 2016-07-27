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
var text_module_1 = require('./text.module');
var image_module_1 = require('./image.module');
var addModuleModal_component_1 = require('./addModuleModal.component');
var bar_graph_module_1 = require('./bar-graph.module');
var social_media_module_1 = require('./social-media.module');
var tag_module_1 = require('./tag.module');
var email_module_1 = require('./email.module');
var scale_chart_module_1 = require('./scale-chart.module');
var pie_chart_module_1 = require('./pie-chart.module');
var GridBlock = (function () {
    function GridBlock() {
    }
    GridBlock.prototype.minGridElem = function (gE) {
        if (gE.dim == 2) {
            alert("Too Small");
            gE.dim = 2;
        }
        else {
            gE.dim -= 2;
        }
    };
    GridBlock.prototype.maxGridElem = function (gE) {
        if (gE.dim == 12) {
            alert("Too Large");
            gE.dim = 12;
        }
        else {
            gE.dim += 2;
        }
    };
    GridBlock.prototype.deleteGridElem = function (gE) {
        this.gridElements.splice(this.gridElements.indexOf(gE), 1);
    };
    GridBlock = __decorate([
        core_1.Component({
            selector: 'grid-block',
            templateUrl: 'app/grid-block.html',
            inputs: ['gridElements'],
            directives: [ng2_dnd_1.DND_DIRECTIVES, text_module_1.TextModule, image_module_1.ImageModule, addModuleModal_component_1.AddModuleModal, bar_graph_module_1.BarGraphModule, social_media_module_1.SocialMediaModule, tag_module_1.TagModule, email_module_1.EmailModule, scale_chart_module_1.ScaleChartModule, pie_chart_module_1.PieChartModule]
        }), 
        __metadata('design:paramtypes', [])
    ], GridBlock);
    return GridBlock;
}());
exports.GridBlock = GridBlock;
//# sourceMappingURL=gridBlock.component.js.map
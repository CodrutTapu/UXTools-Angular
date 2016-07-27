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
var AddModuleModal = (function () {
    function AddModuleModal() {
    }
    AddModuleModal.prototype.addTextModule = function (gE) {
        gE.classN = 1;
        $('.addModuleModal').modal('hide');
    };
    AddModuleModal.prototype.addImageModule = function (gE) {
        gE.classN = 2;
        $('.addModuleModal').modal('hide');
    };
    AddModuleModal.prototype.addBarGraphModule = function (gE) {
        gE.classN = 3;
        $('.addModuleModal').modal('hide');
    };
    AddModuleModal.prototype.addSocialMediaModule = function (gE) {
        gE.classN = 4;
        $('.addModuleModal').modal('hide');
    };
    AddModuleModal.prototype.addTagModule = function (gE) {
        gE.classN = 5;
        $('.addModuleModal').modal('hide');
    };
    AddModuleModal.prototype.addEmailModule = function (gE) {
        gE.classN = 6;
        $('.addModuleModal').modal('hide');
    };
    AddModuleModal.prototype.addScaleChartModule = function (gE) {
        gE.classN = 7;
        $('.addModuleModal').modal('hide');
    };
    AddModuleModal.prototype.addPieChartModule = function (gE) {
        gE.classN = 8;
        $('.addModuleModal').modal('hide');
    };
    AddModuleModal = __decorate([
        core_1.Component({
            selector: 'addModuleModal',
            templateUrl: 'app/addModuleModal.component.html',
            inputs: ['gE']
        }), 
        __metadata('design:paramtypes', [])
    ], AddModuleModal);
    return AddModuleModal;
}());
exports.AddModuleModal = AddModuleModal;
//# sourceMappingURL=addModuleModal.component.js.map
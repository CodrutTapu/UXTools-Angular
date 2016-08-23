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
var http_service_1 = require('./http.service');
var HTTTPComponent = (function () {
    function HTTTPComponent(_httpService) {
        this._httpService = _httpService;
    }
    HTTTPComponent.prototype.onTestGet = function (gridElements) {
        var _this = this;
        this._httpService.getJSON()
            .subscribe(function (data) { return _this.getData = JSON.stringify(data); }, function (error) { return alert(Error); }, function () { return gridElements = _this.getData; });
    };
    HTTTPComponent.prototype.onTestPost = function (gridElements) {
        var _this = this;
        this._httpService.postJSON(gridElements)
            .subscribe(function (data) { return _this.postData = JSON.parse(data); }, function (error) { return alert(Error); }, function () { return console.log('Finish!'); });
    };
    HTTTPComponent = __decorate([
        core_1.Component({
            selector: 'http',
            template: "<button (click)=\"onTestGet(gridElements)\">Test Get Request</button><br>\n    <p>Output: {{getData}}</p>\n    <button (click)=\"onTestPost(gridElements)\">Test Post Request</button><br>\n    <p>Output: {{postData}}</p>",
            providers: [http_service_1.HTTTPService],
            inputs: ['gridElements'],
        }), 
        __metadata('design:paramtypes', [http_service_1.HTTTPService])
    ], HTTTPComponent);
    return HTTTPComponent;
}());
exports.HTTTPComponent = HTTTPComponent;
//# sourceMappingURL=http.component.js.map
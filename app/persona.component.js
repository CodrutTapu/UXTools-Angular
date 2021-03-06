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
var user_1 = require('./user');
var persona_1 = require('./persona');
var textModule_1 = require('./text_module/textModule');
var http_service_1 = require('./http_service/http.service');
var PersonaComponent = (function () {
    function PersonaComponent(_httpService) {
        this._httpService = _httpService;
        this.currentUser = new user_1.user(99087, 'John', 'Doe', 'johndoe@gmail.com', 'pa$$w0rd', []);
        //gridElements:Array<gridElem> = [new gridElem(4,1,new textModule(1,'text-module','<h1>Text Field 1</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra felis in sem porta feugiat.</p>')), new gridElem(4,2,new textModule(1,'text-module','<h1>Text Field 2</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra felis in sem porta feugiat.</p>')), new gridElem(4,3,new textModule(1,'text-module','<h1>Text Field 3</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra felis in sem porta feugiat.</p>'))];
        this.gridElements = [];
        this.id = 3;
    }
    PersonaComponent.prototype.addPersona = function () {
        this.currentUser.documents.push(new persona_1.persona('default-persona', [new gridElem_1.gridElem(4, 1, new textModule_1.textModule(1, 'text-module', '<h1>Text Field 1</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra felis in sem porta feugiat.</p>'), '#F8F8F8', '#4c7ba0'), new gridElem_1.gridElem(4, 2, new textModule_1.textModule(1, 'text-module', '<h1>Text Field 2</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra felis in sem porta feugiat.</p>'), '#F8F8F8', '#4c7ba0'), new gridElem_1.gridElem(4, 3, new textModule_1.textModule(1, 'text-module', '<h1>Text Field 3</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra felis in sem porta feugiat.</p>'), '#F8F8F8', '#4c7ba0')]));
        this.gridElements = this.currentUser.documents[0].content;
    };
    PersonaComponent.prototype.addGridElement = function (dim) {
        this.gridElements.push(new gridElem_1.gridElem(dim, this.id + 1, 0, '#F8F8F8', '#4c7ba0'));
        this.id = this.id + 1;
    };
    PersonaComponent.prototype.httpGet = function (currentUser) {
        var _this = this;
        this._httpService.getJSON()
            .subscribe(function (data) { return _this.currentUser = data; }, function (error) { return alert(Error); }, function () { return _this.gridElements = _this.currentUser[0].documents[0].content; });
    };
    PersonaComponent.prototype.httpPost = function (currentUser) {
        var _this = this;
        this._httpService.postJSON(currentUser)
            .subscribe(function (data) { return _this.postData = JSON.stringify(data); }, function (error) { return alert(Error); }, function () { return console.log('Finish!'); });
    };
    PersonaComponent = __decorate([
        core_1.Component({
            selector: 'persona',
            templateUrl: 'app/persona.component.html',
            directives: [ng2_dnd_1.DND_DIRECTIVES, gridBlock_component_1.GridBlock],
            providers: [http_service_1.HTTTPService],
        }), 
        __metadata('design:paramtypes', [http_service_1.HTTTPService])
    ], PersonaComponent);
    return PersonaComponent;
}());
exports.PersonaComponent = PersonaComponent;
//# sourceMappingURL=persona.component.js.map
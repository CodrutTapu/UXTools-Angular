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
var bgColor_module_1 = require('../bgColor_component/bgColor.module');
var TextModule = (function () {
    function TextModule() {
    }
    TextModule.prototype.deleteTextModule = function (gE) {
        gE.moduleType = {};
    };
    TextModule.prototype.updateTextModule = function (gE) {
        $(document).off('click', '.editable-text-content').on('click', '.editable-text-content', function () {
            $(this).summernote({
                toolbar: [
                    ['all', ['style', 'fontname', 'fontsize', 'color', 'bold', 'italic', 'underline', 'strikethrough', 'clear', 'paragraph', 'hr', 'ol', 'ul', 'picture', 'video', 'link', 'codeview', 'table', 'undo']]
                ],
                disableDragAndDrop: true,
                callbacks: {
                    onChange: function (contents, $editable) {
                        gE.moduleType.content = contents;
                    }
                }
            });
            $(this).parent().find('.note-editable').css('background', gE.bgColor);
        });
    };
    TextModule = __decorate([
        core_1.Component({
            selector: 'text-module',
            templateUrl: 'app/text_module/text.module.html',
            styleUrls: ['app/text_module/text.module.css'],
            directives: [bgColor_module_1.bgColorModule],
            inputs: ['gE']
        }), 
        __metadata('design:paramtypes', [])
    ], TextModule);
    return TextModule;
}());
exports.TextModule = TextModule;
//# sourceMappingURL=text.module.js.map
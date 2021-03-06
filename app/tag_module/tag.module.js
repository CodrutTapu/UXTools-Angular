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
var tagModuleTag_1 = require('./tagModuleTag');
var bgColor_module_1 = require('../bgColor_component/bgColor.module');
var TagModule = (function () {
    function TagModule() {
        this.i = 4;
        this.bgColors = ['#4c7ba0', '#ffffff', '#ee4039', '#f07171', '#124666', '#737373', '#f8b13d', '#00b5c8', '#81bda4', '#b05574'];
        this.customTagBgColor = '#E3E5E6';
    }
    TagModule.prototype.deleteTagModule = function (gE) {
        gE.moduleType = {};
    };
    TagModule.prototype.addTag = function (gE) {
        gE.moduleType.tags.push(new tagModuleTag_1.tagModuleTag(this.i, '<p>New Tag</p>', '#e3e5e6'));
        this.i += 1;
    };
    TagModule.prototype.deleteTag = function (gE, tag) {
        gE.moduleType.tags.splice(gE.moduleType.tags.indexOf(tag), 1);
    };
    TagModule.prototype.updateTag = function (tag) {
        $(document).off('click', '.editable-tag').on('click', '.editable-tag', function () {
            $(this).summernote({
                toolbar: [
                    ['all', ['style', 'fontname', 'fontsize', 'color', 'bold', 'italic', 'underline', 'strikethrough', 'clear', 'paragraph', 'hr', 'ol', 'ul', 'picture', 'video', 'link', 'codeview', 'table', 'undo']]
                ],
                disableDragAndDrop: true,
                callbacks: {
                    onChange: function (contents, $editable) {
                        tag.name = contents;
                    }
                }
            });
            $(this).parent().find('.note-editable').css('background', tag.color);
        });
    };
    TagModule.prototype.tagBgColorToggle = function (tag) {
        var tagId = tag.id;
        $('.tag-bg-colors-list-' + tagId).toggle();
    };
    TagModule.prototype.updateTagBgColor = function (tag) {
        if (this.customTagBgColor[0] != '#') {
            this.customTagBgColor = "#" + this.customTagBgColor;
        }
        ;
        tag.color = this.customTagBgColor;
    };
    TagModule.prototype.selectTagBgColor = function (tag, bgC) {
        tag.color = bgC;
    };
    TagModule = __decorate([
        core_1.Component({
            selector: 'tag-module',
            templateUrl: 'app/tag_module/tag.module.html',
            styleUrls: ['app/tag_module/tag.module.css'],
            directives: [bgColor_module_1.bgColorModule],
            inputs: ['gE']
        }), 
        __metadata('design:paramtypes', [])
    ], TagModule);
    return TagModule;
}());
exports.TagModule = TagModule;
//# sourceMappingURL=tag.module.js.map
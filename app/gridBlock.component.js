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
var textModule_1 = require('./textModule');
var image_module_1 = require('./image.module');
var imageModule_1 = require('./imageModule');
var bar_graph_module_1 = require('./bar-graph.module');
var barGraphModule_1 = require('./barGraphModule');
var barGraphBar_1 = require('./barGraphBar');
var social_media_module_1 = require('./social-media.module');
var socialMediaModule_1 = require('./socialMediaModule');
var tag_module_1 = require('./tag.module');
var tagModule_1 = require('./tagModule');
var tagModuleTag_1 = require('./tagModuleTag');
var email_module_1 = require('./email.module');
var emailModule_1 = require('./emailModule');
var scale_chart_module_1 = require('./scale-chart.module');
var scaleChartModule_1 = require('./scaleChartModule');
var scaleChartModuleScale_1 = require('./scaleChartModuleScale');
var pie_chart_module_1 = require('./pie-chart.module');
var pieChartModule_1 = require('./pieChartModule');
var accordion_module_1 = require('./accordion.module');
var accordionModule_1 = require('./accordionModule');
var accordionItem_1 = require('./accordionItem');
var tabs_module_1 = require('./tabs.module');
var tabsModule_1 = require('./tabsModule');
var tabsItem_1 = require('./tabsItem');
var embed_module_1 = require('./embed.module');
var embedModule_1 = require('./embedModule');
var devices_platforms_module_1 = require('./devices-platforms.module');
var devicesPlatformsModule_1 = require('./devicesPlatformsModule');
var devicePlatform_1 = require('./devicePlatform');
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
    GridBlock.prototype.addTextModule = function (gE) {
        gE.moduleType = new textModule_1.textModule(1, 'text-module', '<h1>New Text Field</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra felis in sem porta feugiat.</p>');
    };
    GridBlock.prototype.addImageModule = function (gE) {
        gE.moduleType = new imageModule_1.imageModule(2, 'image-module', 'img/img-default.png');
    };
    GridBlock.prototype.addBarGraphModule = function (gE) {
        gE.moduleType = new barGraphModule_1.barGraphModule(3, 'bar-graph-module', '<h1>Bar Graph</h1>', [new barGraphBar_1.barGraphBar(30, '<p>Label 1</p>'), new barGraphBar_1.barGraphBar(50, '<p>Label 2</p>'), new barGraphBar_1.barGraphBar(100, '<p>Label 3</p>')]);
    };
    GridBlock.prototype.addSocialMediaModule = function (gE) {
        gE.moduleType = new socialMediaModule_1.socialMediaModule(4, 'social-media-module', 'facebook', 'twitter', 'linkedin', 'external');
    };
    GridBlock.prototype.addTagModule = function (gE) {
        gE.moduleType = new tagModule_1.tagModule(5, 'tags-module', [new tagModuleTag_1.tagModuleTag('<p>Tag 1</p>'), new tagModuleTag_1.tagModuleTag('<p>Tag 2</p>'), new tagModuleTag_1.tagModuleTag('<p>Tag 3</p>')]);
    };
    GridBlock.prototype.addEmailModule = function (gE) {
        gE.moduleType = new emailModule_1.emailModule(6, 'email-module', 'you@yourmail.com', '<h1>This is a form field to collect emails.</h1><p>Give them a good reason.</p>');
    };
    GridBlock.prototype.addScaleChartModule = function (gE) {
        gE.moduleType = new scaleChartModule_1.scaleChartModule(7, 'scale-chart-module', '<h1>Scale Chart</h1>', [new scaleChartModuleScale_1.scaleChartModuleScale('<p>Side A</p>', '<p>Side B</p>', 0), new scaleChartModuleScale_1.scaleChartModuleScale('<p>Side A</p>', '<p>Side B</p>', 50), new scaleChartModuleScale_1.scaleChartModuleScale('<p>Side A</p>', '<p>Side B</p>', 100)]);
    };
    GridBlock.prototype.addPieChartModule = function (gE) {
        gE.moduleType = new pieChartModule_1.pieChartModule(8, 'pie-chart-module', '<h1>Pie Chart</h1>', ["Red", "Blue", "Yellow"], [12, 19, 3]);
    };
    GridBlock.prototype.addAccordionModule = function (gE) {
        gE.moduleType = new accordionModule_1.accordionModule(9, 'accordion-module', '<h1>Accordion</h1>', [new accordionItem_1.accordionItem('item1', '<p>Item 1</p>', '<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</p>'), new accordionItem_1.accordionItem('item2', '<p>Item 2</p>', '<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</p>'), new accordionItem_1.accordionItem('item3', '<p>Item 3</p>', '<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</p>')]);
    };
    GridBlock.prototype.addTabsModule = function (gE) {
        gE.moduleType = new tabsModule_1.tabsModule(10, 'tabs-module', [new tabsItem_1.tabsItem('item1', '<p>Tab 1</p>', '<p>Nulla condimentum finibus massa, sit amet viverra purus luctus ac. Fusce ut erat sapien 1.</p>'), new tabsItem_1.tabsItem('item2', '<p>Tab 2</p>', '<p>Nulla condimentum finibus massa, sit amet viverra purus luctus ac. Fusce ut erat sapien 2.</p>'), new tabsItem_1.tabsItem('item3', '<p>Tab 3</p>', '<p>Nulla condimentum finibus massa, sit amet viverra purus luctus ac. Fusce ut erat sapien 3.</p>')]);
    };
    GridBlock.prototype.addEmbedModule = function (gE) {
        gE.moduleType = new embedModule_1.embedModule(11, 'embed-module', '<h1>Embed</h1>', 'https://www.youtube.com/embed/rn5s6H_Yamo');
    };
    GridBlock.prototype.addDevicesPlatformsModule = function (gE) {
        gE.moduleType = new devicesPlatformsModule_1.devicesPlatformsModule(12, 'devices-platforms-module', [new devicePlatform_1.devicePlatform('<i class="fa fa-mobile" aria-hidden="true"></i>', true, 'Mobile'),
            new devicePlatform_1.devicePlatform('<i class="fa fa-tablet" aria-hidden="true"></i>', true, 'Tablet'),
            new devicePlatform_1.devicePlatform('<i class="fa fa-laptop" aria-hidden="true"></i>', true, 'Laptop'),
            new devicePlatform_1.devicePlatform('<i class="fa fa-desktop" aria-hidden="true"></i>', false, 'Desktop'),
            new devicePlatform_1.devicePlatform('<i class="fa fa-television" aria-hidden="true"></i>', false, 'TV'),
            new devicePlatform_1.devicePlatform('<i class="fa fa-windows" aria-hidden="true"></i>', false, 'Windows'),
            new devicePlatform_1.devicePlatform('<i class="fa fa-apple" aria-hidden="true"></i>', false, 'Apple'),
            new devicePlatform_1.devicePlatform('<i class="fa fa-linux" aria-hidden="true"></i>', false, 'Linux'),
            new devicePlatform_1.devicePlatform('<i class="fa fa-chrome" aria-hidden="true"></i>', false, 'Chrome'),
            new devicePlatform_1.devicePlatform('<i class="fa fa-firefox" aria-hidden="true"></i>', false, 'Firefox'),
            new devicePlatform_1.devicePlatform('<i class="fa fa-internet-explorer" aria-hidden="true"></i>', false, 'IE'),
            new devicePlatform_1.devicePlatform('<i class="fa fa-safari" aria-hidden="true"></i>', false, 'Safari')]);
    };
    GridBlock.prototype.closeTextEditor = function (event, gE) {
        if (event.srcElement.className == 'row sortable' || event.srcElement.className == 'grid-block-content') {
            $('.editable').each(function () {
                $(this).summernote('destroy');
            });
            $('.editable-scale-title').each(function () {
                $(this).summernote('destroy');
            });
            $('.editable-sideA').each(function () {
                $(this).summernote('destroy');
            });
            $('.editable-sideB').each(function () {
                $(this).summernote('destroy');
            });
            $('.editable-pie-title').each(function () {
                $(this).summernote('destroy');
            });
            $('.editable-email-content').each(function () {
                $(this).summernote('destroy');
            });
            $('.editable-tag').each(function () {
                $(this).summernote('destroy');
            });
            $('.editable-text-content').each(function () {
                $(this).summernote('destroy');
            });
            $('.editable-barGrpah-title').each(function () {
                $(this).summernote('destroy');
            });
            $('.editable-bar-label').each(function () {
                $(this).summernote('destroy');
            });
            $('.editable-accordion-title').each(function () {
                $(this).summernote('destroy');
            });
            $('.editable-accordion-item-title').each(function () {
                $(this).summernote('destroy');
            });
            $('.editable-accordion-item-content').each(function () {
                $(this).summernote('destroy');
            });
            $('.editable-tabs-item-content').each(function () {
                $(this).summernote('destroy');
                $(this).removeAttr("style");
            });
            $('.editable-tabs-item-title').each(function () {
                $(this).summernote('destroy');
            });
            $('.editable-embed-title').each(function () {
                $(this).summernote('destroy');
            });
        }
    };
    GridBlock = __decorate([
        core_1.Component({
            selector: 'grid-block',
            templateUrl: 'app/grid-block.html',
            inputs: ['gridElements', 'currentUser'],
            directives: [ng2_dnd_1.DND_DIRECTIVES, text_module_1.TextModule, image_module_1.ImageModule, bar_graph_module_1.BarGraphModule, social_media_module_1.SocialMediaModule, tag_module_1.TagModule, email_module_1.EmailModule, scale_chart_module_1.ScaleChartModule, pie_chart_module_1.PieChartModule, accordion_module_1.AccordionModule, tabs_module_1.TabsModule, embed_module_1.EmbedModule, devices_platforms_module_1.DevicesPlatformsModule]
        }), 
        __metadata('design:paramtypes', [])
    ], GridBlock);
    return GridBlock;
}());
exports.GridBlock = GridBlock;
//# sourceMappingURL=gridBlock.component.js.map
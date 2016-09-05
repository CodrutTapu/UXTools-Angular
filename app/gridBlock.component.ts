import {Component} from '@angular/core';
import {AppComponent} from './app.component';
import {DND_PROVIDERS, DND_DIRECTIVES} from 'ng2-dnd/ng2-dnd';
import {TextModule} from './text.module';
import {textModule} from './textModule';
import {ImageModule} from './image.module';
import {imageModule} from './imageModule';
import {BarGraphModule} from './bar-graph.module';
import {barGraphModule} from './barGraphModule';
import {barGraphBar} from './barGraphBar';
import {SocialMediaModule} from './social-media.module';
import {socialMediaModule} from './socialMediaModule';
import {TagModule} from './tag.module';
import {tagModule} from './tagModule';
import {tagModuleTag} from './tagModuleTag';
import {EmailModule} from './email.module';
import {emailModule} from './emailModule';
import {ScaleChartModule} from './scale-chart.module';
import {scaleChartModule} from './scaleChartModule';
import {scaleChartModuleScale} from './scaleChartModuleScale';
import {PieChartModule} from './pie-chart.module';
import {pieChartModule} from './pieChartModule';
import {AccordionModule} from './accordion.module';
import {accordionModule} from './accordionModule';
import {accordionItem} from './accordionItem';
import {TabsModule} from './tabs.module';
import {tabsModule} from './tabsModule';
import {tabsItem} from './tabsItem';
import {EmbedModule} from './embed.module';
import {embedModule} from './embedModule';
import {DevicesPlatformsModule} from './devices-platforms.module';
import {devicesPlatformsModule} from './devicesPlatformsModule';
import {devicePlatform} from './devicePlatform';
import {AboutModule} from './about.module';
import {aboutModule} from './aboutModule';
import {aboutItem} from './aboutItem';
declare var $: any;

@Component({
    selector: 'grid-block',
    templateUrl: 'app/grid-block.html',
    inputs: ['gridElements','currentUser'],
    directives: [DND_DIRECTIVES, TextModule, ImageModule, BarGraphModule, SocialMediaModule, TagModule, EmailModule, ScaleChartModule, PieChartModule, AccordionModule, TabsModule, EmbedModule, DevicesPlatformsModule, AboutModule]
})

export class GridBlock {
    gridElements:Array<number>;
    minGridElem(gE) {
        if(gE.dim == 2){
            alert("Too Small");
            gE.dim = 2;
        } else {
            gE.dim-=2;
        }
    }
    maxGridElem(gE) {
        if(gE.dim == 12){
            alert("Too Large");
            gE.dim = 12;
        } else {
            gE.dim+=2;
        }
    }
    deleteGridElem(gE) {
        this.gridElements.splice(this.gridElements.indexOf(gE), 1);
    }
    addTextModule(gE) {
        gE.moduleType = new textModule(1,'text-module','<h1>New Text Field</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra felis in sem porta feugiat.</p>');
    }
    addImageModule(gE) {
        gE.moduleType = new imageModule(2,'image-module','img/img-default.png');
    }
    addBarGraphModule(gE) {
        gE.moduleType = new barGraphModule(3,'bar-graph-module','<h1>Bar Graph</h1>',[new barGraphBar(30,'<p>Label 1</p>'),new barGraphBar(50,'<p>Label 2</p>'),new barGraphBar(100,'<p>Label 3</p>')]);
    }
    addSocialMediaModule(gE) {
        gE.moduleType = new socialMediaModule(4,'social-media-module','facebook','twitter','linkedin','external');
    }
    addTagModule(gE) {
        gE.moduleType = new tagModule(5,'tags-module',[new tagModuleTag('<p>Tag 1</p>'),new tagModuleTag('<p>Tag 2</p>'),new tagModuleTag('<p>Tag 3</p>')]);
    }
    addEmailModule(gE) {
        gE.moduleType = new emailModule(6,'email-module','you@yourmail.com','<h1>This is a form field to collect emails.</h1><p>Give them a good reason.</p>');
    }
    addScaleChartModule(gE) {
        gE.moduleType = new scaleChartModule(7,'scale-chart-module','<h1>Scale Chart</h1>',[new scaleChartModuleScale('<p>Side A</p>','<p>Side B</p>',0),new scaleChartModuleScale('<p>Side A</p>','<p>Side B</p>',50),new scaleChartModuleScale('<p>Side A</p>','<p>Side B</p>',100)]);
    }
    addPieChartModule(gE) {
        gE.moduleType = new pieChartModule(8,'pie-chart-module','<h1>Pie Chart</h1>',["Red", "Blue", "Yellow"],[12, 19, 3]);
    }
    addAccordionModule(gE) {
        gE.moduleType = new accordionModule(9,'accordion-module','<h1>Accordion</h1>',[new accordionItem('item1','<p>Item 1</p>','<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</p>'), new accordionItem('item2','<p>Item 2</p>','<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</p>'), new accordionItem('item3','<p>Item 3</p>','<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</p>')]);
    }
    addTabsModule(gE) {
        gE.moduleType = new tabsModule(10,'tabs-module',[new tabsItem('item1','<p>Tab 1</p>','<p>Nulla condimentum finibus massa, sit amet viverra purus luctus ac. Fusce ut erat sapien 1.</p>'),new tabsItem('item2','<p>Tab 2</p>','<p>Nulla condimentum finibus massa, sit amet viverra purus luctus ac. Fusce ut erat sapien 2.</p>'),new tabsItem('item3','<p>Tab 3</p>','<p>Nulla condimentum finibus massa, sit amet viverra purus luctus ac. Fusce ut erat sapien 3.</p>')]);
    }
    addEmbedModule(gE) {
        gE.moduleType = new embedModule(11,'embed-module','<h1>Embed</h1>','https://www.youtube.com/embed/rn5s6H_Yamo');
    }
    addDevicesPlatformsModule(gE) {
        gE.moduleType = new devicesPlatformsModule(12,'devices-platforms-module',[new devicePlatform('<i class="fa fa-mobile" aria-hidden="true"></i>',true,'Mobile'),
                                                                                    new devicePlatform('<i class="fa fa-tablet" aria-hidden="true"></i>',true,'Tablet'),
                                                                                    new devicePlatform('<i class="fa fa-laptop" aria-hidden="true"></i>',true,'Laptop'),
                                                                                    new devicePlatform('<i class="fa fa-desktop" aria-hidden="true"></i>',false,'Desktop'),
                                                                                    new devicePlatform('<i class="fa fa-television" aria-hidden="true"></i>',false,'TV'),
                                                                                    new devicePlatform('<i class="fa fa-windows" aria-hidden="true"></i>',false,'Windows'),
                                                                                    new devicePlatform('<i class="fa fa-apple" aria-hidden="true"></i>',false,'Apple'),
                                                                                    new devicePlatform('<i class="fa fa-linux" aria-hidden="true"></i>',false,'Linux'),
                                                                                    new devicePlatform('<i class="fa fa-chrome" aria-hidden="true"></i>',false,'Chrome'),
                                                                                    new devicePlatform('<i class="fa fa-firefox" aria-hidden="true"></i>',false,'Firefox'),
                                                                                    new devicePlatform('<i class="fa fa-internet-explorer" aria-hidden="true"></i>',false,'IE'),
                                                                                    new devicePlatform('<i class="fa fa-safari" aria-hidden="true"></i>',false,'Safari')]);
    }
    addAboutModule(gE) {
        gE.moduleType = new aboutModule(13,'about-module',[new aboutItem('<p>age</p>','<p>1-100</p>'),
                                                            new aboutItem('<p>occupation</p>','<p>What they do</p>'),
                                                            new aboutItem('<p>status</p>','<p>Single, Marries, Etc</p>'),
                                                            new aboutItem('<p>location</p>','<p>Where they live/work</p>'),
                                                            new aboutItem('<p>tier</p>','<p>Frequency of use</p>'),
                                                            new aboutItem('<p>archetype</p>','<p>Character model</p>'),
                                                            ]);
    }
    closeTextEditor(event:any,gE) {
        if( event.srcElement.className == 'row sortable' || event.srcElement.className == 'grid-block-content') {
            $('.editable').each(function(){
                $(this).summernote('destroy');
            });
            $('.editable-scale-title').each(function(){
                $(this).summernote('destroy');
            });
            $('.editable-sideA').each(function(){
                $(this).summernote('destroy');
            });
            $('.editable-sideB').each(function(){
                $(this).summernote('destroy');
            });
            $('.editable-pie-title').each(function(){
                $(this).summernote('destroy');
            });
            $('.editable-email-content').each(function(){
                $(this).summernote('destroy');
            });
            $('.editable-tag').each(function(){
                $(this).summernote('destroy');
            });
            $('.editable-text-content').each(function(){
                $(this).summernote('destroy');
            });
            $('.editable-barGrpah-title').each(function(){
                $(this).summernote('destroy');
            });
            $('.editable-bar-label').each(function(){
                $(this).summernote('destroy');
            });
            $('.editable-accordion-title').each(function(){
                $(this).summernote('destroy');
            });
            $('.editable-accordion-item-title').each(function(){
                $(this).summernote('destroy');
            });
            $('.editable-accordion-item-content').each(function(){
                $(this).summernote('destroy');
            });
            $('.editable-tabs-item-content').each(function(){
                $(this).summernote('destroy');
                $(this).removeAttr("style");
            });
            $('.editable-tabs-item-title').each(function(){
                $(this).summernote('destroy');
            });
            $('.editable-embed-title').each(function(){
                $(this).summernote('destroy');
            });
            $('.editable-about-item-name').each(function(){
                $(this).summernote('destroy');
            });
            $('.editable-about-item-value').each(function(){
                $(this).summernote('destroy');
            });
        }
    }
}

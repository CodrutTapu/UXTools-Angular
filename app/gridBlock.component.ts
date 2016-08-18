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
declare var $: any;

@Component({
    selector: 'grid-block',
    templateUrl: 'app/grid-block.html',
    inputs: ['gridElements'],
    directives: [DND_DIRECTIVES, TextModule, ImageModule, BarGraphModule, SocialMediaModule, TagModule, EmailModule, ScaleChartModule, PieChartModule]
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
        gE.moduleType = new emailModule(6,'email-module','you@yourmail.com','');
    }
    addScaleChartModule(gE) {
        gE.moduleType = new scaleChartModule(7,'scale-chart-module','title',[new scaleChartModuleScale('sideA','sideB',0),new scaleChartModuleScale('sideA','sideB',50),new scaleChartModuleScale('sideA','sideB',100)]);
    }
    addPieChartModule(gE) {
        gE.moduleType = new pieChartModule(8,'pie-chart-module','title',["Red", "Blue", "Yellow"],[12, 19, 3]);
    }
    closeTextEditor(event:any,gE) {
        if( event.srcElement.className == 'row sortable' || event.srcElement.className == 'grid-block-content') {
            $('.editable').each(function(){
                $(this).summernote('destroy');
            });
        }
    }
}

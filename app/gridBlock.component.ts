import {Component} from '@angular/core';
import {AppComponent} from './app.component';
import {DND_PROVIDERS, DND_DIRECTIVES} from 'ng2-dnd/ng2-dnd';
import {TextModule} from './text.module';
import {ImageModule} from './image.module';
import {AddModuleModal} from './addModuleModal.component';
import {BarGraphModule} from './bar-graph.module';
import {SocialMediaModule} from './social-media.module';
import {TagModule} from './tag.module';
import {EmailModule} from './email.module';
import {ScaleChartModule} from './scale-chart.module';
import {PieChartModule} from './pie-chart.module';

@Component({
    selector: 'grid-block',
    templateUrl: 'app/grid-block.html',
    inputs: ['gridElements'],
    directives: [DND_DIRECTIVES, TextModule, ImageModule, AddModuleModal, BarGraphModule, SocialMediaModule, TagModule, EmailModule, ScaleChartModule, PieChartModule]
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
}

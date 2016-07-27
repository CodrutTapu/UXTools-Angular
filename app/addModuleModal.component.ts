import {Component} from '@angular/core';
import {AppComponent} from './app.component';
import {DND_PROVIDERS, DND_DIRECTIVES} from 'ng2-dnd/ng2-dnd';
import {GridBlock} from './gridBlock.component';
import {TextModule} from './text.module';
import {ImageModule} from './image.module';
import {BarGraphModule} from './bar-graph.module';
import {SocialMediaModule} from './social-media.module';
import {PieChartModule} from './pie-chart.module';

@Component({
    selector: 'addModuleModal',
    templateUrl: 'app/addModuleModal.component.html',
    inputs: ['gE']
})

export class AddModuleModal {
    addTextModule(gE) {
        gE.classN = 1;
        $('.addModuleModal').modal('hide');
    }
    addImageModule(gE) {
        gE.classN = 2;
        $('.addModuleModal').modal('hide');
    }
    addBarGraphModule(gE) {
        gE.classN = 3;
        $('.addModuleModal').modal('hide');
    }
    addSocialMediaModule(gE) {
        gE.classN = 4;
        $('.addModuleModal').modal('hide');
    }
    addTagModule(gE) {
        gE.classN = 5;
        $('.addModuleModal').modal('hide');
    }
    addEmailModule(gE) {
        gE.classN = 6;
        $('.addModuleModal').modal('hide');
    }
    addScaleChartModule(gE) {
        gE.classN = 7;
        $('.addModuleModal').modal('hide');
    }
    addPieChartModule(gE) {
        gE.classN = 8;
        $('.addModuleModal').modal('hide');
    }
}

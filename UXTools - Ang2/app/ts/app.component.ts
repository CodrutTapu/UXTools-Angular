import {Component} from 'angular2/core';
import {TopNavComponent} from './topNav.component';
import {GridComponent} from './grid.component';
import {GridElem} from './gridElem';

@Component({
    selector: 'ux-app',
    templateUrl: 'app/html/app.component.html',
    directives: [TopNavComponent, GridComponent]
})

export class AppComponent {
    gelem:Array<GridElem>;
    constructor() {
        this.gelem = [
            new GridElem(4),
            new GridElem(4),
            new GridElem(4)
        ]
    }
}

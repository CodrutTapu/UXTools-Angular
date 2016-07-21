import {Component} from 'angular2/core';
import {GridElem} from './gridElem';

@Component({
    selector: 'grid-wrapper',
    templateUrl: 'app/html/grid.component.html',
    directives: [GridElem],
    inputs: ['gelem']
})

export class GridComponent {
}

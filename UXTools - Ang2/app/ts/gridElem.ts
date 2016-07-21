import {Component} from 'angular2/core';
import {GridComponent} from './grid.component';

@Component({
    selector: 'grid-elem',
    template: 'app/html/test.html',
    directives: [GridComponent]
})

export class GridElem {
    dim:number;
    constructor(dim:number) {
        this.dim = dim;
    }
}

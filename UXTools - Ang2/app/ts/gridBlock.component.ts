import {Component} from 'angular2/core';
import {AppComponent} from './app.component';

@Component({
    selector: 'grid-block',
    templateUrl: 'app/html/grid-block.html',
    inputs: ['gridElements']
})

export class GridBlock {
    gridElements:Array<number>;
    deleteGridBlock(gE) {
        this.gridElements.splice(this.gridElements.indexOf(gE), 1);
    }
    minGridBlock(gE) {
        if(gE.dim == 2){
            alert("Too Small");
            gE.dim = 2;
        } else {
            gE.dim-=2;
        }
    }
    pluGridBlock(gE) {
        if(gE.dim == 12){
            alert("Too Large");
            gE.dim = 12;
        } else {
            gE.dim+=2;
        }
    }
}

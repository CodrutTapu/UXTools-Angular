import {Component} from 'angular2/core';
import {AppComponent} from './app.component';
import {GridBlock} from './gridBlock.component';
import {gridElem} from './gridElem';

@Component({
    selector: 'top-navigation',
    templateUrl: 'app/html/topNav.component.html',
    directives: [GridBlock]
})

export class TopNavComponent {
    ngOnInit() {
        $.getScript('app.js');
    }
    gridElements:Array<gridElem> = [new gridElem(4,1), new gridElem(4,2), new gridElem(4,3)];
    id:number = 3;
    gridElementsNewOrder:any = JSON.parse(localStorage.getItem("gridElementsOrder"));
    addGridElement(dim:number) {
        this.gridElements.push(new gridElem(dim,this.id+1));
        this.gridElementsNewOrder.push(String(this.id+1));
        localStorage.setItem("gridElementsOrder", JSON.stringify(this.gridElementsNewOrder));
        this.id = this.id+1;
    }
    arrange() {
        var gE = this.gridElements;
        console.log(this.gridElements[0]);
        console.log(this.gridElements[1]);
        console.log(this.gridElements[2]);
        var gEO = JSON.parse(localStorage.getItem("gridElementsOrder"));
        console.log(gEO);
        var i,j;
        for (i = 0; i < gEO.length; i++) {
            for (j = 0; j < gE.length; j++) {
                if(gEO[i] == gE[j].id) {
                    console.log(i + ' --- ' +  j);
                    this.gridElements[i] = new gridElem(gE[j].dim,gE[j].id);
                    console.log(this.gridElements[i]);
                }
            }
        }
    }
}

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
    constructor() {
        setTimeout(() => {
            $( ".sortable" ).sortable({
                handle: ".grid-block-control",
                connectWith: '.sortable-list',
                  update: function() {
                      var order = $('.sortable').sortable('serialize');
                      console.log(order);
                  }
            });
        }, 0);
    }
    gridElements:Array<gridElem> = [new gridElem(4),new gridElem(4),new gridElem(4)];
    addGridElement(dim:number) {
        this.gridElements.push(new gridElem(dim));
    }
}

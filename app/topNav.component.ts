import {Component} from '@angular/core';
import {AppComponent} from './app.component';
import {DND_PROVIDERS, DND_DIRECTIVES} from 'ng2-dnd/ng2-dnd';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {GridBlock} from './gridBlock.component';
import {gridElem} from './gridElem';

@Component({
    selector: 'top-navigation',
    templateUrl: 'app/topNav.component.html',
    directives: [DND_DIRECTIVES, GridBlock]
})

export class TopNavComponent {
    gridElements:Array<gridElem> = [new gridElem(4,1,1), new gridElem(4,2,1), new gridElem(4,3,1)];
    id:number= 3;
    addGridElement(dim:number) {
        this.gridElements.push(new gridElem(dim,this.id+1,0));
        this.id = this.id+1;
    }
}
